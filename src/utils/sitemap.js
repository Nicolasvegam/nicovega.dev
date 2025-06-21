const SITE_URL = 'https://nicovega.dev';

const routes = [
  '',
  '/about',
  '/projects',
  '/speaking',
  '/uses',
  '/rutificador',
  '/rutificador/validar',
  '/feriados-chile-2025',
  '/trotaglobo',
];

const generateSitemap = () => {
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
      ${routes
        .map((route) => {
          return `
            <url>
              <loc>${SITE_URL}${route}</loc>
              <lastmod>${new Date().toISOString()}</lastmod>
              <changefreq>monthly</changefreq>
              <priority>${route === '' ? '1.0' : '0.8'}</priority>
            </url>
          `;
        })
        .join('')}
    </urlset>
  `;

  return sitemap;
};

export default generateSitemap; 