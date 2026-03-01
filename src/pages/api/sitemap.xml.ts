import type { NextApiRequest, NextApiResponse } from 'next'
import generateSitemap from '@/utils/sitemap'

export default async function handler(req: NextApiRequest, res: NextApiResponse): Promise<void> {
  res.setHeader('Content-Type', 'text/xml')
  res.setHeader('Cache-Control', 'public, s-maxage=1200, stale-while-revalidate=600')

  try {
    const sitemap = await generateSitemap()
    res.write(sitemap)
    res.end()
  } catch (error) {
    console.error('Error generating sitemap:', error)
    res.status(500).end()
  }
}
