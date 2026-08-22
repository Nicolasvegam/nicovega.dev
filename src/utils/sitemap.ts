import { getAllArticles } from '@/lib/getAllArticles'
import { BOOK_ROUTES } from '@/lib/bookRoutes'
import { SITE_URL } from '@/lib/site'

const DEFAULT_LAST_MODIFIED = '2026-08-21'

interface SitemapRoute {
  path: string
  priority: string
  changefreq: string
  lastmod?: string
}

const staticRoutes: SitemapRoute[] = [
  {
    path: '',
    priority: '1.0',
    changefreq: 'weekly',
    lastmod: DEFAULT_LAST_MODIFIED,
  },
  {
    path: '/about',
    priority: '0.8',
    changefreq: 'monthly',
    lastmod: DEFAULT_LAST_MODIFIED,
  },
  {
    path: '/contact',
    priority: '0.7',
    changefreq: 'yearly',
    lastmod: DEFAULT_LAST_MODIFIED,
  },
  {
    path: '/privacy',
    priority: '0.5',
    changefreq: 'yearly',
    lastmod: DEFAULT_LAST_MODIFIED,
  },
  {
    path: '/projects',
    priority: '0.9',
    changefreq: 'monthly',
    lastmod: DEFAULT_LAST_MODIFIED,
  },
  {
    path: '/speaking',
    priority: '0.7',
    changefreq: 'monthly',
    lastmod: DEFAULT_LAST_MODIFIED,
  },
  {
    path: '/uses',
    priority: '0.5',
    changefreq: 'yearly',
    lastmod: DEFAULT_LAST_MODIFIED,
  },
  {
    path: '/books',
    priority: '0.7',
    changefreq: 'monthly',
    lastmod: DEFAULT_LAST_MODIFIED,
  },
  {
    path: '/books/wishlist',
    priority: '0.5',
    changefreq: 'monthly',
    lastmod: DEFAULT_LAST_MODIFIED,
  },
  {
    path: '/articles',
    priority: '0.8',
    changefreq: 'monthly',
    lastmod: DEFAULT_LAST_MODIFIED,
  },
  {
    path: '/llms.txt',
    priority: '0.6',
    changefreq: 'monthly',
    lastmod: DEFAULT_LAST_MODIFIED,
  },
  {
    path: '/llms-full.txt',
    priority: '0.5',
    changefreq: 'monthly',
    lastmod: DEFAULT_LAST_MODIFIED,
  },
  {
    path: '/agent-instructions.md',
    priority: '0.5',
    changefreq: 'monthly',
    lastmod: DEFAULT_LAST_MODIFIED,
  },
]

function escapeXml(value: string): string {
  return value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&apos;')
}

const generateSitemap = async (): Promise<string> => {
  let articleRoutes: SitemapRoute[] = []
  try {
    const articles = await getAllArticles()
    articleRoutes = articles.map((article) => ({
      path: `/articles/${article.slug}`,
      priority: '0.7',
      changefreq: 'monthly',
      lastmod: article.date || DEFAULT_LAST_MODIFIED,
    }))
  } catch (error) {
    console.error('Error loading articles for sitemap:', error)
  }

  const bookRoutes: SitemapRoute[] = Object.keys(BOOK_ROUTES).map((slug) => ({
    path: `/books/${slug}`,
    priority: '0.6',
    changefreq: 'yearly',
    lastmod: DEFAULT_LAST_MODIFIED,
  }))

  const allRoutes = [...staticRoutes, ...articleRoutes, ...bookRoutes]

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${allRoutes
  .map(
    (route) => `  <url>
    <loc>${escapeXml(`${SITE_URL}${route.path || '/'}`)}</loc>
    <lastmod>${escapeXml(route.lastmod || DEFAULT_LAST_MODIFIED)}</lastmod>
    <changefreq>${route.changefreq}</changefreq>
    <priority>${route.priority}</priority>
  </url>`
  )
  .join('\n')}
</urlset>`

  return sitemap
}

export default generateSitemap
