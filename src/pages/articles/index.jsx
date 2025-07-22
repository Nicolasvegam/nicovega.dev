import Head from 'next/head'

import { Card } from '@/components/Card'
import { SimpleLayout } from '@/components/SimpleLayout'
import SEO from '@/components/SEO'
import { getAllArticles } from '@/lib/getAllArticles'
import { formatDate } from '@/lib/formatDate'

function Article({ article }) {
  return (
    <article className="md:grid md:grid-cols-4 md:items-baseline">
      <Card className="md:col-span-3">
        <Card.Title href={`/articles/${article.slug}`}>
          {article.title}
        </Card.Title>
        <Card.Eyebrow
          as="time"
          dateTime={article.date}
          className="md:hidden"
          decorate
        >
          {formatDate(article.date)}
        </Card.Eyebrow>
        <Card.Description>{article.description}</Card.Description>
        <Card.Cta>Leer artículo</Card.Cta>
      </Card>
      <Card.Eyebrow
        as="time"
        dateTime={article.date}
        className="mt-1 hidden md:block"
      >
        {formatDate(article.date)}
      </Card.Eyebrow>
    </article>
  )
}

export default function ArticlesIndex({ articles }) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Blog",
    "name": "Nicolás Vega - Artículos",
    "description": "Artículos sobre tecnología, emprendimiento y desarrollo de software",
    "url": "https://nicovega.dev/articles",
    "author": {
      "@type": "Person",
      "name": "Nicolás Vega"
    },
    "blogPost": articles.map(article => ({
      "@type": "BlogPosting",
      "headline": article.title,
      "description": article.description,
      "url": `https://nicovega.dev/articles/${article.slug}`,
      "datePublished": article.date,
      "author": {
        "@type": "Person",
        "name": "Nicolás Vega"
      }
    }))
  };

  return (
    <>
      <SEO
        title="Artículos - Nicolás Vega"
        description="Artículos sobre tecnología, emprendimiento y desarrollo de software por Nicolás Vega"
        url="https://nicovega.dev/articles"
        tags={['tecnología', 'emprendimiento', 'software', 'programming', 'development', 'tech']}
      />
      <Head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(structuredData)
          }}
        />
      </Head>
      <SimpleLayout
        title="Artículos"
        intro="Escribo sobre varios temas pero más enfocado en tecnología y emprendimiento"
      >
        <div className="md:border-l md:border-zinc-100 md:pl-6 md:dark:border-zinc-700/40">
          <div className="flex max-w-3xl flex-col space-y-16">
            {articles.map((article) => (
              <Article key={article.slug} article={article} />
            ))}
          </div>
        </div>
      </SimpleLayout>
    </>
  )
}

export async function getStaticProps() {
  return {
    props: {
      articles: (await getAllArticles()).map(({ component, ...meta }) => meta),
    },
  }
}
