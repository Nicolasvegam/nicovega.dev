import clsx from 'clsx'

import { SimpleLayout } from '@/components/SimpleLayout'
import { Book } from '@/components/Book'

import book1 from '@/images/books/book-1-shoe-dog.webp'
import book2 from '@/images/books/book-2-steve-jobs.webp'
import book3 from '@/images/books/book-3-sacred-seven.jpg'
import book4 from '@/images/books/book-4-zero-to-one.jpg'
import book5 from '@/images/books/book-5-psychology-of-money.jpg'
import book6 from '@/images/books/book-6-el-hombre-mas-rico.jpg'
import book7 from '@/images/books/book-7-no-rules.jpg'
import book8 from '@/images/books/book-8-el-monje-que-vendio-su-ferrari.webp'
import book9 from '@/images/books/book-9-the-hard-thing-about-hard-things.webp'
import book10 from '@/images/books/book-10-the-almanack.webp'
import SEO from '@/components/SEO'

const books = [
  {
    id: 1,
    title: 'Shoe Dog',
    author: 'Phil Knight',
    image: book1,
    link: { href: '#' },
    rating: 5,
  },
  {
    id: 2,
    title: 'Steve Jobs',
    author: 'Walter Isaacson',
    image: book2,
    link: { href: '#' },
    rating: 5,
  },
  {
    id: 3,
    title: 'Product Management\'s Sacred Seven',
    author: 'Neel Mehta, Parth Detroja, & Aditya Agashe',
    image: book3,
    link: { href: '#' },
    rating: 5,
  },
  {
    id: 4,
    title: 'Zero to One',
    author: 'Peter Thiel',
    image: book4,
    link: { href: '#' },
    rating: 5,
  },
  {
    id: 5,
    title: 'The Psychology of Money',
    author: 'Morgan Housel',
    image: book5,
    link: { href: '#' },
    rating: 4,
  },
  {
    id: 6,
    title: 'El Hombre Más Rico de Babilonia',
    author: 'George S. Clason',
    image: book6,
    link: { href: '#' },
    rating: 4,
  },
  {
    id: 7,
    title: 'No Rules Rules',
    author: 'Reed Hastings & Erin Meyer',
    image: book7,
    link: { href: '#' },
    rating: 4,
  },
  {
    id: 8,
    title: 'El Monje que Vendió su Ferrari',
    author: 'Robin Sharma',
    image: book8,
    link: { href: '#' },
    rating: 4,
  },
  {
    id: 9,
    title: 'The Hard Thing About Hard Things',
    author: 'Ben Horowitz',
    image: book9,
    link: { href: '#' },
    rating: 4,
  },
  {
    id: 10,
    title: 'The Almanack of Naval Ravikant',
    author: 'Eric Jorgenson',
    image: book10,
    link: { href: '#' },
    rating: 4,
  },
]

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
          {books.map((book, bookIndex) => (
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