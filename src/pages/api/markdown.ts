import type { NextApiRequest, NextApiResponse } from 'next'

import { markdownForPath, notFoundMarkdown } from '@/lib/agentContent'
import { canonicalUrl } from '@/lib/site'

const VARY_HEADER = 'Accept, Accept-Encoding'

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse
): void {
  if (req.method !== 'GET' && req.method !== 'HEAD') {
    res.setHeader('Allow', 'GET, HEAD')
    res.status(405).end()
    return
  }

  const requestedPath = req.query.path
  if (typeof requestedPath !== 'string' || !requestedPath.startsWith('/')) {
    res.status(400).json({ error: 'A valid absolute path is required.' })
    return
  }

  const markdown = markdownForPath(requestedPath)
  const canonical = canonicalUrl(requestedPath)
  const status = markdown ? 200 : 404

  res.setHeader(
    'Cache-Control',
    'public, s-maxage=3600, stale-while-revalidate=86400'
  )
  res.setHeader('Content-Disposition', 'inline')
  res.setHeader('Content-Language', 'es-CL')
  res.setHeader('Content-Type', 'text/markdown; charset=utf-8')
  res.setHeader(
    'Link',
    `<${canonical}>; rel="canonical", <${canonical}>; rel="alternate"; type="text/markdown"`
  )
  res.setHeader('Vary', VARY_HEADER)
  res.setHeader('X-Content-Type-Options', 'nosniff')
  res.setHeader(
    'X-Robots-Tag',
    markdown ? 'index, follow' : 'noindex, nofollow'
  )

  if (req.method === 'HEAD') {
    res.status(status).end()
    return
  }

  res.status(status).send(markdown || notFoundMarkdown(requestedPath))
}
