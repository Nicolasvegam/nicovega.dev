import { getAllArticles } from '@/lib/getAllArticles';

const SITE_URL = 'https://www.nicovega.dev';

const staticRoutes = [
  { path: '', priority: '1.0', changefreq: 'weekly' },
  { path: '/about', priority: '0.8', changefreq: 'monthly' },
  { path: '/projects', priority: '0.9', changefreq: 'weekly' },
  { path: '/speaking', priority: '0.7', changefreq: 'monthly' },
  { path: '/uses', priority: '0.6', changefreq: 'monthly' },
  { path: '/books', priority: '0.7', changefreq: 'monthly' },
  { path: '/articles', priority: '0.8', changefreq: 'weekly' },
  { path: '/thank-you', priority: '0.3', changefreq: 'yearly' },
];

const generateSitemap = async () => {
  // Obtener artículos dinámicamente
  let articleRoutes = [];
  try {
    const articles = await getAllArticles();
    articleRoutes = articles.map(article => ({
      path: `/articles/${article.slug}`,
      priority: '0.7',
      changefreq: 'monthly',
      lastmod: article.date || new Date().toISOString()
    }));
  } catch (error) {
    console.error('Error loading articles for sitemap:', error);
  }

  const allRoutes = [...staticRoutes, ...articleRoutes];

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
      ${allRoutes
        .map((route) => {
          return `
            <url>
              <loc>${SITE_URL}${route.path}</loc>
              <lastmod>${route.lastmod || new Date().toISOString()}</lastmod>
              <changefreq>${route.changefreq}</changefreq>
              <priority>${route.priority}</priority>
            </url>
          `;
        })
        .join('')}
    </urlset>
  `;

  return sitemap;
};

export default generateSitemap; 