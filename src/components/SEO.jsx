import Head from 'next/head';

export default function SEO({ 
  title = 'Nicolás Vega - Portfolio',
  description = 'Personal website and portfolio of Nicolás Vega',
  image = '/og-image.jpg',
  url = 'https://nicovega.dev',
  type = 'website',
  publishedTime,
  modifiedTime,
  tags = [],
  author = 'Nicolás Vega'
}) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": type === 'article' ? "BlogPosting" : "WebSite",
    "name": title,
    "description": description,
    "url": url,
    "image": image,
    "author": {
      "@type": "Person",
      "name": author,
      "url": "https://nicovega.dev",
      "sameAs": [
        "https://linkedin.com/in/nicolasvegab",
        "https://github.com/nicovegasr",
        "https://twitter.com/nicovegab"
      ]
    },
    ...(type === 'article' && {
      "datePublished": publishedTime,
      "dateModified": modifiedTime || publishedTime,
      "keywords": tags.join(', '),
      "mainEntityOfPage": {
        "@type": "WebPage",
        "@id": url
      }
    }),
    ...(type === 'website' && {
      "creator": {
        "@type": "Person",
        "name": "Nicolás Vega",
        "jobTitle": "Senior Software Engineer & Tech Lead",
        "worksFor": {
          "@type": "Organization",
          "name": "Various Tech Companies"
        }
      },
      "about": "Personal website and portfolio showcasing software engineering projects, articles, and professional experience"
    })
  };

  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="author" content={author} />
      <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
      
      {/* Keywords for LLM discovery */}
      {tags.length > 0 && <meta name="keywords" content={tags.join(', ')} />}
      
      {/* Open Graph */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:url" content={url} />
      <meta property="og:type" content={type} />
      <meta property="og:site_name" content="Nicolás Vega" />
      
      {/* Article specific */}
      {type === 'article' && publishedTime && (
        <meta property="article:published_time" content={publishedTime} />
      )}
      {type === 'article' && modifiedTime && (
        <meta property="article:modified_time" content={modifiedTime} />
      )}
      {type === 'article' && tags.map(tag => (
        <meta key={tag} property="article:tag" content={tag} />
      ))}

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
      <meta name="twitter:creator" content="@nicovegab" />

      {/* Structured Data for LLMs */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData)
        }}
      />

      {/* Favicon */}
      <link rel="icon" href="/favicon.ico" />
      
      {/* Sitemap */}
      <link rel="sitemap" type="application/xml" href="/sitemap.xml" />
    </Head>
  );
} 