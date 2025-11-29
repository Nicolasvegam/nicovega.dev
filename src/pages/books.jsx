import clsx from 'clsx'
import Link from 'next/link'

import { SimpleLayout } from '@/components/SimpleLayout'
import { Book } from '@/components/Book'
import { booksData } from '@/data/booksData'
import SEO from '@/components/SEO'

export default function Books() {
  return (
    <>
      <SEO
        title="Mi librería"
        description="Algunos de los libros que he leído y que más me han marcado, tanto personal como profesionalmente. Siempre estoy abierto a nuevas recomendaciones."
        url="https://nicovega.dev/books"
      />
      <SimpleLayout
        title="Mi librería"
        intro={
          <>
            Algunos de los libros que he leído y que más me han marcado, tanto personal como profesionalmente. Siempre estoy abierto a nuevas recomendaciones.{' '}
            <Link href="/books/wishlist" className="text-teal-500 hover:text-teal-600 dark:text-teal-400 dark:hover:text-teal-300">
              Ver mi wishlist →
            </Link>
          </>
        }
      >
        <ul
          role="list"
          className="grid grid-cols-2 gap-x-12 gap-y-16 sm:grid-cols-2 lg:grid-cols-4"
        >
          {[...booksData].sort((a, b) => b.rating - a.rating).map((book, bookIndex) => (
            <Book
              key={book.id}
              book={book}
              className={clsx(
                'transition duration-300 hover:scale-105',
              )}
            />
          ))}
        </ul>
      </SimpleLayout>
    </>
  )
}