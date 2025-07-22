import clsx from 'clsx'

import { SimpleLayout } from '@/components/SimpleLayout'
import { Book } from '@/components/Book'
import { booksData } from '@/data/booksData'
import SEO from '@/components/SEO'

export default function Books() {
  let rotations = ['rotate-2', '-rotate-2', 'rotate-2', 'rotate-2', '-rotate-2']

  return (
    <>
      <SEO
        title="Mi librería"
        description="Algunos de los libros que he leído y que más me han marcado, tanto personal como profesionalmente. Siempre estoy abierto a nuevas recomendaciones."
        url="https://nicovega.dev/books"
      />
      <SimpleLayout
        title="Mi librería"
        intro="Algunos de los libros que he leído y que más me han marcado, tanto personal como profesionalmente. Siempre estoy abierto a nuevas recomendaciones."
      >
        <ul
          role="list"
          className="grid grid-cols-2 gap-x-12 gap-y-16 sm:grid-cols-2 lg:grid-cols-4"
        >
          {booksData.map((book, bookIndex) => (
            <Book
              key={book.id}
              book={book}
              className={clsx(
                'transition duration-300 hover:scale-105',
                rotations[bookIndex % rotations.length]
              )}
            />
          ))}
        </ul>
      </SimpleLayout>
    </>
  )
}