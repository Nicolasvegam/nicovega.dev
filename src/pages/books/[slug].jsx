import { useRouter } from 'next/router'
import Image from 'next/image'
import { Container } from '@/components/Container'
import { booksData } from '@/data/booksData'
import Breadcrumb from '@/components/Breadcrumb'
import SEO from '@/components/SEO'

function StarRating({ rating }) {
  return (
    <div className="flex">
      {[...Array(5)].map((_, i) => (
        <svg
          key={i}
          className={`h-6 w-6 ${
            i < rating ? 'text-amber-400' : 'text-gray-300 dark:text-gray-600'
          }`}
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  )
}

export default function BookReview() {
  const router = useRouter()
  const { slug } = router.query
  
  const book = booksData.find(b => b.slug === slug)
  
  if (!book) {
    return (
      <Container className="mt-16 sm:mt-32">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 dark:text-zinc-100">
            Libro no encontrado
          </h1>
          <p className="mt-2 text-gray-600 dark:text-zinc-400">
            El libro que buscas no existe en nuestra biblioteca.
          </p>
        </div>
      </Container>
    )
  }

  const breadcrumbItems = [
    { name: 'Inicio', href: '/' },
    { name: 'Mi librería', href: '/books' },
    { name: book.title, href: `/books/${book.slug}` }
  ]

  return (
    <>
      <SEO
        title={`${book.title} - Reseña`}
        description={book.review.about}
        url={`https://nicovega.dev/books/${book.slug}`}
      />
      <Container className="mt-8 sm:mt-16">
        <div className="mb-4">
          <Breadcrumb items={breadcrumbItems} />
        </div>
        
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 gap-6 lg:grid-cols-3 lg:h-[calc(100vh-12rem)]">
            <div className="lg:col-span-1">
              <div className="sticky top-8">
                <Image
                  src={book.image}
                  alt={book.title}
                  className="rounded-lg shadow-lg w-full max-w-xs mx-auto lg:max-w-none"
                  width={300}
                  height={450}
                />
              </div>
            </div>
            
            <div className="lg:col-span-2 lg:overflow-y-auto lg:pr-4">
              <div className="space-y-6">
                <div>
                  <h1 className="text-3xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 lg:text-4xl">
                    {book.title}
                  </h1>
                  <p className="mt-1 text-lg text-zinc-600 dark:text-zinc-400">
                    por {book.author}
                  </p>
                  <div className="mt-2">
                    <StarRating rating={book.rating} />
                  </div>
                </div>
                
                <div className="prose prose-base dark:prose-invert max-w-none">
                  <p className="text-sm lg:text-base">{book.review.summary}</p>
                </div>
                
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <div className="rounded-lg bg-zinc-50 dark:bg-zinc-800/50 p-4">
                    <h3 className="text-sm font-semibold text-zinc-900 dark:text-zinc-100">
                      ¿Me gustó?
                    </h3>
                    <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-400">
                      {book.review.liked}
                    </p>
                  </div>
                  
                  <div className="rounded-lg bg-zinc-50 dark:bg-zinc-800/50 p-4">
                    <h3 className="text-sm font-semibold text-zinc-900 dark:text-zinc-100">
                      ¿Por qué lo compré?
                    </h3>
                    <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-400">
                      {book.review.whyBought}
                    </p>
                  </div>
                </div>
                
                <div className="rounded-lg bg-zinc-50 dark:bg-zinc-800/50 p-4">
                  <h3 className="text-sm font-semibold text-zinc-900 dark:text-zinc-100">
                    ¿De qué se trata?
                  </h3>
                  <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-400">
                    {book.review.about}
                  </p>
                </div>
                
                <div className="rounded-lg bg-zinc-50 dark:bg-zinc-800/50 p-4">
                  <h3 className="text-sm font-semibold text-zinc-900 dark:text-zinc-100">
                    Parte favorita
                  </h3>
                  <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-400">
                    {book.review.favoritePart}
                  </p>
                </div>
                
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <div className="rounded-lg bg-green-50 dark:bg-green-900/20 p-4">
                    <h3 className="text-sm font-semibold text-green-900 dark:text-green-100">
                      Le puede gustar a
                    </h3>
                    <p className="mt-1 text-sm text-green-700 dark:text-green-300">
                      {book.review.goodFor}
                    </p>
                  </div>
                  
                  <div className="rounded-lg bg-red-50 dark:bg-red-900/20 p-4">
                    <h3 className="text-sm font-semibold text-red-900 dark:text-red-100">
                      Le puede disgustar a
                    </h3>
                    <p className="mt-1 text-sm text-red-700 dark:text-red-300">
                      {book.review.notGoodFor}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </>
  )
}

export async function getStaticPaths() {
  const paths = booksData.map((book) => ({
    params: { slug: book.slug },
  }))

  return { paths, fallback: false }
}

export async function getStaticProps({ params }) {
  const book = booksData.find((b) => b.slug === params.slug)

  if (!book) {
    return {
      notFound: true,
    }
  }

  return {
    props: {
      book,
    },
  }
}