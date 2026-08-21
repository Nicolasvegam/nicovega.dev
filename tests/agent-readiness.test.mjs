import assert from 'node:assert/strict'
import { spawn } from 'node:child_process'
import { once } from 'node:events'
import { existsSync } from 'node:fs'
import { fileURLToPath } from 'node:url'
import path from 'node:path'
import { after, before, test } from 'node:test'

const projectRoot = fileURLToPath(new URL('..', import.meta.url))
const port = Number(
  process.env.AGENT_READINESS_PORT || 32000 + (process.pid % 1000)
)
const origin = `http://127.0.0.1:${port}`
const nextBinary = path.join(
  projectRoot,
  'node_modules',
  'next',
  'dist',
  'bin',
  'next'
)

let server
let serverOutput = ''

function wait(milliseconds) {
  return new Promise((resolve) => setTimeout(resolve, milliseconds))
}

async function request(pathname, options = {}) {
  const response = await fetch(`${origin}${pathname}`, {
    redirect: 'manual',
    signal: AbortSignal.timeout(10_000),
    ...options,
  })
  const body = options.method === 'HEAD' ? '' : await response.text()
  return { response, body }
}

function decodeHtml(value) {
  return value
    .replace(/&#x([0-9a-f]+);/gi, (_, code) =>
      String.fromCodePoint(Number.parseInt(code, 16))
    )
    .replace(/&#(\d+);/g, (_, code) =>
      String.fromCodePoint(Number.parseInt(code, 10))
    )
    .replace(/&amp;/g, '&')
    .replace(/&quot;/g, '"')
    .replace(/&#x27;|&apos;/g, "'")
    .replace(/&nbsp;/g, ' ')
}

function visibleText(html) {
  return decodeHtml(
    html
      .replace(/<script\b[^>]*>[\s\S]*?<\/script>/gi, ' ')
      .replace(/<style\b[^>]*>[\s\S]*?<\/style>/gi, ' ')
      .replace(/<svg\b[^>]*>[\s\S]*?<\/svg>/gi, ' ')
      .replace(/<[^>]+>/g, ' ')
  )
    .replace(/\s+/g, ' ')
    .trim()
}

function tags(html, name) {
  return [...html.matchAll(new RegExp(`<${name}\\b[^>]*>`, 'gi'))].map(
    (match) => match[0]
  )
}

function attribute(tag, name) {
  const match = tag.match(new RegExp(`\\b${name}=(?:"([^"]*)"|'([^']*)')`, 'i'))
  return match?.[1] ?? match?.[2]
}

function hasVary(response, expectedValue) {
  const values = (response.headers.get('vary') || '')
    .split(',')
    .map((value) => value.trim().toLowerCase())
  return values.includes(expectedValue.toLowerCase())
}

function jsonLdGraphs(html) {
  return [
    ...html.matchAll(
      /<script[^>]*type="application\/ld\+json"[^>]*>([\s\S]*?)<\/script>/gi
    ),
  ]
    .map((match) => JSON.parse(match[1]))
    .flatMap((value) => value['@graph'] || [value])
}

function canonicalFor(pathname) {
  return pathname === '/'
    ? 'https://nicovega.dev/'
    : `https://nicovega.dev${pathname}`
}

function sitemapPaths(xml) {
  return [...xml.matchAll(/<loc>([^<]+)<\/loc>/g)].map(
    (match) => new URL(match[1]).pathname
  )
}

before(
  async () => {
    assert.ok(
      existsSync(path.join(projectRoot, '.next', 'BUILD_ID')),
      'Run `npm run build` before the HTTP tests.'
    )

    server = spawn(
      process.execPath,
      [nextBinary, 'start', '-H', '127.0.0.1', '-p', String(port)],
      {
        cwd: projectRoot,
        env: { ...process.env, NODE_ENV: 'production' },
        stdio: ['ignore', 'pipe', 'pipe'],
      }
    )

    server.stdout.on('data', (chunk) => {
      serverOutput += chunk.toString()
    })
    server.stderr.on('data', (chunk) => {
      serverOutput += chunk.toString()
    })

    for (let attempt = 0; attempt < 80; attempt += 1) {
      if (server.exitCode !== null) {
        throw new Error(`Production server exited early.\n${serverOutput}`)
      }

      try {
        const response = await fetch(`${origin}/`, {
          signal: AbortSignal.timeout(1_000),
        })
        if (response.ok) return
      } catch {
        // The server is still starting.
      }

      await wait(250)
    }

    throw new Error(`Production server did not become ready.\n${serverOutput}`)
  },
  { timeout: 30_000 }
)

after(async () => {
  if (!server || server.exitCode !== null) return

  server.kill('SIGTERM')
  await Promise.race([once(server, 'exit'), wait(5_000)])
  if (server.exitCode === null) server.kill('SIGKILL')
})

test('the homepage is meaningful in raw server-rendered HTML', async () => {
  const { response, body } = await request('/')
  const text = visibleText(body)
  const efficiency = (text.length / body.length) * 100

  assert.equal(response.status, 200)
  assert.match(response.headers.get('content-type') || '', /^text\/html\b/)
  assert.ok(hasVary(response, 'Accept'))
  assert.ok(hasVary(response, 'Accept-Encoding'))
  assert.equal((body.match(/<h1\b/gi) || []).length, 1)
  assert.match(body, /<h1[^>]*>\s*Nicolás Vega\s*<\/h1>/i)
  assert.ok(
    text.length >= 4_000,
    `Expected at least 4,000 visible characters; received ${text.length}.`
  )
  assert.ok(
    efficiency >= 5,
    `Expected at least 5% content efficiency; received ${efficiency.toFixed(
      2
    )}%.`
  )
})

test('homepage metadata and identity schemas are complete and canonical', async () => {
  const { body } = await request('/')
  const linkTags = tags(body, 'link')
  const metaTags = tags(body, 'meta')
  const graph = jsonLdGraphs(body)

  const canonical = linkTags.find(
    (tag) => attribute(tag, 'rel') === 'canonical'
  )
  const ogImage = metaTags.find(
    (tag) => attribute(tag, 'property') === 'og:image'
  )
  const ogType = metaTags.find(
    (tag) => attribute(tag, 'property') === 'og:type'
  )
  const person = graph.find(
    (entry) => entry['@type'] === 'Person' && entry['@id']?.endsWith('#person')
  )
  const organization = graph.find(
    (entry) =>
      entry['@type'] === 'Organization' &&
      entry['@id']?.endsWith('#organization')
  )

  assert.match(body, /<html[^>]*\blang="es-CL"/i)
  assert.equal(attribute(canonical || '', 'href'), 'https://nicovega.dev/')
  assert.equal(
    attribute(ogImage || '', 'content'),
    'https://nicovega.dev/og-image.jpg'
  )
  assert.equal(attribute(ogType || '', 'content'), 'website')
  assert.equal(person?.name, 'Nicolás Vega')
  assert.equal(person?.url, 'https://nicovega.dev')
  assert.ok(person?.jobTitle)
  assert.deepEqual(person?.sameAs, [
    'https://github.com/nicolasvegam',
    'https://www.linkedin.com/in/nicolasvegam/',
    'https://instagram.com/nicovega.dev',
  ])
  assert.equal(organization?.contactPoint?.email, 'hola@nicovega.dev')
  assert.equal(
    organization?.contactPoint?.contactType,
    'professional inquiries'
  )
  assert.equal(organization?.address?.['@type'], 'PostalAddress')
  assert.equal(organization?.address?.addressLocality, 'Santiago')
  assert.equal(organization?.address?.addressCountry, 'CL')
})

test('About, Contact, and Privacy are substantial trust pages', async () => {
  for (const pathname of ['/about', '/contact', '/privacy']) {
    const { response, body } = await request(pathname)
    const canonical = tags(body, 'link').find(
      (tag) => attribute(tag, 'rel') === 'canonical'
    )

    assert.equal(response.status, 200, pathname)
    assert.ok(
      visibleText(body).length >= 500,
      `${pathname} should contain at least 500 visible characters.`
    )
    assert.equal(attribute(canonical || '', 'href'), canonicalFor(pathname))
  }
})

test('all published document routes negotiate Markdown safely', async () => {
  const sitemap = await request('/sitemap.xml')
  const documentPaths = sitemapPaths(sitemap.body).filter(
    (pathname) => !pathname.endsWith('.txt') && !pathname.endsWith('.md')
  )
  documentPaths.push('/thank-you')

  for (const pathname of [...new Set(documentPaths)]) {
    const { response, body } = await request(pathname, {
      headers: { Accept: 'text/markdown, text/html;q=0.8' },
    })

    assert.equal(response.status, 200, pathname)
    assert.match(
      response.headers.get('content-type') || '',
      /^text\/markdown\b/i,
      pathname
    )
    assert.ok(hasVary(response, 'Accept'), pathname)
    assert.ok(hasVary(response, 'Accept-Encoding'), pathname)
    assert.match(
      response.headers.get('link') || '',
      /rel="canonical"/,
      pathname
    )
    assert.match(body, /^#\s+\S/m, pathname)
  }

  const htmlPreference = await request('/', {
    headers: { Accept: 'text/markdown;q=0, text/html' },
  })
  assert.match(
    htmlPreference.response.headers.get('content-type') || '',
    /^text\/html\b/i
  )

  const head = await request('/', {
    method: 'HEAD',
    headers: { Accept: 'text/markdown' },
  })
  assert.equal(head.response.status, 200)
  assert.match(
    head.response.headers.get('content-type') || '',
    /^text\/markdown\b/i
  )
  assert.equal(head.body, '')
})

test('unknown routes return recoverable 404 responses in HTML and Markdown', async () => {
  const pathname = '/route-that-does-not-exist-agent-readiness'
  const html = await request(pathname)
  const markdown = await request(pathname, {
    headers: { Accept: 'text/markdown' },
  })

  assert.equal(html.response.status, 404)
  assert.match(
    html.response.headers.get('content-type') || '',
    /^text\/html\b/i
  )
  assert.match(html.response.headers.get('x-robots-tag') || '', /noindex/i)
  assert.match(html.body, /Esta ruta no existe\./)
  assert.match(html.body, /sitemap\.xml/)
  assert.match(html.body, /<pre\b/i)

  assert.equal(markdown.response.status, 404)
  assert.match(
    markdown.response.headers.get('content-type') || '',
    /^text\/markdown\b/i
  )
  assert.ok(hasVary(markdown.response, 'Accept'))
  assert.ok(hasVary(markdown.response, 'Accept-Encoding'))
  assert.match(markdown.response.headers.get('x-robots-tag') || '', /noindex/i)
  assert.match(markdown.body, /^# 404 — Recurso no encontrado/m)
  assert.match(markdown.body, /https:\/\/nicovega\.dev\/sitemap\.xml/)
  assert.match(markdown.body, /https:\/\/nicovega\.dev\/llms\.txt/)
})

test('machine-readable resources follow their formats and resolve', async () => {
  const llms = await request('/llms.txt')
  const llmsFull = await request('/llms-full.txt')
  const instructions = await request('/agent-instructions.md')
  const sitemap = await request('/sitemap.xml')
  const robots = await request('/robots.txt')
  const rss = await request('/rss/feed.xml')
  const jsonFeed = await request('/rss/feed.json')
  const socialImage = await request('/og-image.jpg')

  assert.equal(llms.response.status, 200)
  assert.match(
    llms.response.headers.get('content-type') || '',
    /^text\/plain\b/i
  )
  assert.match(llms.body, /^# Nicolás Vega\n\n> .+/)
  assert.match(llms.body, /^## When to use this site$/m)
  assert.match(llms.body, /^## How agents should use it$/m)
  const absoluteLinks = new Set(llms.body.match(/https:\/\/[^\s)`]+/g) || [])
  assert.ok(absoluteLinks.size >= 10 && absoluteLinks.size <= 30)

  assert.equal(llmsFull.response.status, 200)
  assert.match(
    llmsFull.response.headers.get('content-type') || '',
    /^text\/plain\b/i
  )
  assert.match(llmsFull.body, /^# Nicolás Vega/)

  assert.equal(instructions.response.status, 200)
  assert.match(
    instructions.response.headers.get('content-type') || '',
    /^text\/markdown\b/i
  )
  assert.match(instructions.body, /^## When to use this site$/m)

  assert.equal(sitemap.response.status, 200)
  assert.match(
    sitemap.response.headers.get('content-type') || '',
    /^application\/xml\b/i
  )
  assert.match(sitemap.body, /<urlset\b/)
  assert.ok(sitemapPaths(sitemap.body).length >= 34)
  assert.match(sitemap.body, /https:\/\/nicovega\.dev\/contact/)
  assert.match(sitemap.body, /https:\/\/nicovega\.dev\/privacy/)
  assert.doesNotMatch(sitemap.body, /www\.nicovega\.dev/)

  assert.equal(robots.response.status, 200)
  assert.match(robots.body, /User-agent: GPTBot[\s\S]*Allow: \//)
  assert.match(robots.body, /Sitemap: https:\/\/nicovega\.dev\/sitemap\.xml/)

  assert.equal(rss.response.status, 200)
  assert.match(rss.body, /Nicolás Vega/)
  assert.doesNotMatch(rss.body, /Spencer Sharp|planetaria\.tech/)
  assert.equal(jsonFeed.response.status, 200)
  assert.doesNotThrow(() => JSON.parse(jsonFeed.body))

  assert.equal(socialImage.response.status, 200)
  assert.match(
    socialImage.response.headers.get('content-type') || '',
    /^image\/jpeg\b/i
  )
})

test('every URL advertised in the sitemap returns a successful response', async () => {
  const sitemap = await request('/sitemap.xml')

  for (const pathname of sitemapPaths(sitemap.body)) {
    const { response } = await request(pathname)
    assert.equal(response.status, 200, pathname)
  }
})

test('machine endpoints reject unsupported methods', async () => {
  const markdownApi = await request('/api/markdown?path=%2F', {
    method: 'POST',
  })
  const sitemapApi = await request('/api/sitemap.xml', { method: 'POST' })

  assert.equal(markdownApi.response.status, 405)
  assert.match(markdownApi.response.headers.get('allow') || '', /GET/)
  assert.equal(sitemapApi.response.status, 405)
  assert.match(sitemapApi.response.headers.get('allow') || '', /HEAD/)
})
