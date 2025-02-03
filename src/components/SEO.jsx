import Head from 'next/head';

export default function SEO({ 
  title = 'Nicolás Vega - Portfolio',
  description = 'Personal website and portfolio of Nicolás Vega',
  image = '/og-image.jpg',
  url = 'https://nicovega.dev',
  type = 'website'
}) {
  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      
      {/* Open Graph */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:url" content={url} />
      <meta property="og:type" content={type} />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />

      {/* Favicon */}
      <link rel="icon" href="/favicon.ico" />
      
      {/* Sitemap */}
      <link rel="sitemap" type="application/xml" href="/api/sitemap.xml" />
    </Head>
  );
} 