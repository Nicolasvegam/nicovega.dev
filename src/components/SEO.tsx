import Head from 'next/head'

import {
  CONTACT_EMAIL,
  SITE_NAME,
  SITE_URL,
  absoluteUrl,
  canonicalUrl,
  socialLinks,
} from '@/lib/site'

interface SEOProps {
  title?: string
  description?: string
  image?: string
  url?: string
  type?: 'website' | 'article'
  publishedTime?: string
  modifiedTime?: string
  tags?: string[]
  author?: string
  noIndex?: boolean
}

export default function SEO({
  title = 'Nicolás Vega — Software Engineer y Cofundador',
  description = 'Sitio oficial de Nicolás Vega, ingeniero de software y cofundador de Carvuk en Santiago, Chile.',
  image = '/api/og',
  url = SITE_URL,
  type = 'website',
  publishedTime,
  modifiedTime,
  tags = [],
  author = SITE_NAME,
  noIndex = false,
}: SEOProps) {
  const canonical = canonicalUrl(url)
  const imageUrl = absoluteUrl(image)
  const sameAs = socialLinks.map((link) => link.href)
  const personId = `${SITE_URL}/#person`
  const organizationId = `${SITE_URL}/#organization`

  const graph: Record<string, unknown>[] = [
    {
      '@type': 'Person',
      '@id': personId,
      name: SITE_NAME,
      alternateName: 'Nico Vega',
      description:
        'Ingeniero de software y cofundador de Carvuk. Trabaja en ingeniería, producto, liderazgo técnico, startups y operaciones digitales.',
      url: SITE_URL,
      image: imageUrl,
      email: `mailto:${CONTACT_EMAIL}`,
      jobTitle: 'Software Engineer and Co-Founder',
      sameAs,
      worksFor: {
        '@type': 'Organization',
        name: 'Carvuk',
        url: 'https://www.carvuk.com',
      },
      alumniOf: [
        {
          '@type': 'CollegeOrUniversity',
          name: 'Pontificia Universidad Católica de Chile',
          sameAs: 'https://www.uc.cl',
        },
        {
          '@type': 'CollegeOrUniversity',
          name: 'Politecnico di Torino',
          sameAs: 'https://www.polito.it',
        },
      ],
      knowsAbout: [
        'Software engineering',
        'Product development',
        'Technical leadership',
        'Startups',
        'Digital operations',
      ],
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'Santiago',
        addressRegion: 'Región Metropolitana',
        addressCountry: 'CL',
      },
    },
    {
      '@type': 'Organization',
      '@id': organizationId,
      name: 'nicovega.dev',
      alternateName: SITE_NAME,
      description:
        'Sitio oficial y archivo profesional de Nicolás Vega sobre ingeniería de software, producto, startups y tecnología.',
      url: SITE_URL,
      logo: imageUrl,
      founder: { '@id': personId },
      sameAs,
      contactPoint: {
        '@type': 'ContactPoint',
        contactType: 'professional inquiries',
        email: CONTACT_EMAIL,
        url: `${SITE_URL}/contact`,
        availableLanguage: ['Spanish', 'English'],
      },
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'Santiago',
        addressRegion: 'Región Metropolitana',
        addressCountry: 'CL',
      },
    },
    {
      '@type': 'WebSite',
      '@id': `${SITE_URL}/#website`,
      name: SITE_NAME,
      alternateName: 'nicovega.dev',
      description,
      url: SITE_URL,
      inLanguage: ['es-CL', 'en'],
      creator: { '@id': personId },
      publisher: { '@id': organizationId },
    },
    {
      '@type': canonical === `${SITE_URL}/` ? 'ProfilePage' : 'WebPage',
      '@id': `${canonical}#webpage`,
      name: title,
      description,
      url: canonical,
      inLanguage: 'es-CL',
      isPartOf: { '@id': `${SITE_URL}/#website` },
      about: { '@id': personId },
      primaryImageOfPage: {
        '@type': 'ImageObject',
        url: imageUrl,
        width: 1200,
        height: 630,
      },
    },
  ]

  if (type === 'article') {
    graph.push({
      '@type': 'BlogPosting',
      '@id': `${canonical}#article`,
      headline: title,
      description,
      url: canonical,
      image: imageUrl,
      datePublished: publishedTime,
      dateModified: modifiedTime || publishedTime,
      keywords: tags,
      inLanguage: 'es-CL',
      mainEntityOfPage: { '@id': `${canonical}#webpage` },
      author: { '@id': personId },
      publisher: { '@id': organizationId },
    })
  }

  const structuredData = {
    '@context': 'https://schema.org',
    '@graph': graph,
  }

  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="author" content={author} />
      <meta
        name="robots"
        content={
          noIndex
            ? 'noindex, nofollow'
            : 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1'
        }
      />
      <link rel="canonical" href={canonical} />
      <link rel="alternate" type="text/markdown" href={canonical} />

      {/* Keywords for LLM discovery */}
      {tags.length > 0 && <meta name="keywords" content={tags.join(', ')} />}

      {/* Open Graph */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={imageUrl} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta
        property="og:image:alt"
        content="Nicolás Vega — Software Engineer y Cofundador"
      />
      <meta property="og:url" content={canonical} />
      <meta property="og:type" content={type} />
      <meta property="og:site_name" content={SITE_NAME} />
      <meta property="og:locale" content="es_CL" />

      {/* Article specific */}
      {type === 'article' && publishedTime && (
        <meta property="article:published_time" content={publishedTime} />
      )}
      {type === 'article' && modifiedTime && (
        <meta property="article:modified_time" content={modifiedTime} />
      )}
      {type === 'article' &&
        tags.map((tag) => (
          <meta key={tag} property="article:tag" content={tag} />
        ))}

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={imageUrl} />
      <meta
        name="twitter:image:alt"
        content="Nicolás Vega — Software Engineer y Cofundador"
      />

      {/* Structured Data for LLMs */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData),
        }}
      />

      {/* Favicon */}
      <link rel="icon" href="/favicon.ico" />

      {/* Sitemap */}
      <link rel="sitemap" type="application/xml" href="/sitemap.xml" />
    </Head>
  )
}
