import generateSitemap from '@/utils/sitemap';

export default function handler(req, res) {
  res.setHeader('Content-Type', 'text/xml');
  res.write(generateSitemap());
  res.end();
} 