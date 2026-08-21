import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

import { markdownForPath } from '@/lib/agentContent'
import { canonicalUrl } from '@/lib/site'

const VARY_HEADER = 'Accept, Accept-Encoding'
const PASSTHROUGH_PREFIXES = [
  '/rutificador',
  '/feriados-chile',
  '/trotaglobo',
  '/software',
]

function acceptsMarkdown(acceptHeader: string | null): boolean {
  if (!acceptHeader) return false

  return acceptHeader.split(',').some((range) => {
    const [mediaType, ...parameters] = range.split(';')
    if (mediaType.trim().toLowerCase() !== 'text/markdown') return false

    const qualityParameter = parameters.find((parameter) =>
      parameter.trim().toLowerCase().startsWith('q=')
    )
    if (!qualityParameter) return true

    const quality = Number.parseFloat(qualityParameter.split('=')[1])
    return Number.isFinite(quality) && quality > 0
  })
}

function withDocumentHeaders(
  response: NextResponse,
  pathname: string
): NextResponse {
  const canonical = canonicalUrl(pathname)

  response.headers.set('Vary', VARY_HEADER)
  response.headers.set(
    'Link',
    `<${canonical}>; rel="canonical", <${canonical}>; rel="alternate"; type="text/markdown"`
  )

  return response
}

export function middleware(request: NextRequest): NextResponse {
  if (request.method !== 'GET' && request.method !== 'HEAD') {
    return NextResponse.next()
  }

  const { pathname } = request.nextUrl
  const passthrough = PASSTHROUGH_PREFIXES.some(
    (prefix) => pathname === prefix || pathname.startsWith(`${prefix}/`)
  )

  if (passthrough) {
    return withDocumentHeaders(NextResponse.next(), pathname)
  }

  const markdown = markdownForPath(pathname)

  if (!acceptsMarkdown(request.headers.get('accept'))) {
    const response = withDocumentHeaders(NextResponse.next(), pathname)
    if (!markdown) response.headers.set('X-Robots-Tag', 'noindex, nofollow')
    return response
  }

  const markdownUrl = request.nextUrl.clone()
  markdownUrl.pathname = '/api/markdown'
  markdownUrl.search = ''
  markdownUrl.searchParams.set('path', pathname)

  const response = NextResponse.rewrite(markdownUrl)
  response.headers.set(
    'X-Robots-Tag',
    markdown ? 'index, follow' : 'noindex, nofollow'
  )

  return withDocumentHeaders(response, pathname)
}

export const config = {
  matcher: [
    '/((?!api/|_next/|favicon.ico|robots.txt|sitemap.xml|llms.txt|llms-full.txt|agent-instructions.md|rss/|.*\\.[^/]+$).*)',
  ],
}
