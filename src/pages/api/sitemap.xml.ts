import type { NextApiRequest, NextApiResponse } from 'next'
import generateSitemap from '@/utils/sitemap'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
): Promise<void> {
  if (req.method !== 'GET' && req.method !== 'HEAD') {
    res.setHeader('Allow', 'GET, HEAD')
    res.status(405).end()
    return
  }

  res.setHeader('Content-Type', 'application/xml; charset=utf-8')
  res.setHeader(
    'Cache-Control',
    'public, s-maxage=1200, stale-while-revalidate=600'
  )

  try {
    const sitemap = await generateSitemap()
    if (req.method !== 'HEAD') res.write(sitemap)
    res.end()
  } catch (error) {
    console.error('Error generating sitemap:', error)
    res.status(500).end()
  }
}
