import Link from 'next/link'
import { SimpleLayout } from '@/components/SimpleLayout'
import { wishlistData } from '@/data/booksData'
import SEO from '@/components/SEO'

function WishlistBook({ book }) {
  return (
    <li className="group relative">
      <div className="aspect-[3/4] overflow-hidden rounded-lg bg-zinc-100 dark:bg-zinc-800">
        <img
          src={book.image}
          alt={`${book.title} by ${book.author}`}
          className="h-full w-full object-cover transition duration-300 group-hover:scale-105"
          loading="lazy"
        />
      </div>
      <h3 className="mt-4 text-sm font-semibold text-zinc-800 dark:text-zinc-100">
        {book.title}
      </h3>
      <p className="text-sm text-zinc-600 dark:text-zinc-400">{book.author}</p>
    </li>
  )
}

export default function Wishlist() {
  return (
    <>
      <SEO
        title="Wishlist de libros"
        description="Libros que quiero leer próximamente. Mi lista de pendientes literarios."
        url="https://nicovega.dev/books/wishlist"
      />
      <SimpleLayout
        title="Wishlist"
        intro={
          <>
            Libros que quiero leer próximamente. Si ya leíste alguno, me encantaría saber qué te pareció.{' '}
            <Link href="/books" className="text-teal-500 hover:text-teal-600 dark:text-teal-400 dark:hover:text-teal-300">
              Ver libros leídos →
            </Link>
          </>
        }
      >
        <ul
          role="list"
          className="grid grid-cols-2 gap-x-8 gap-y-12 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5"
        >
          {wishlistData.map((book) => (
            <WishlistBook key={book.id} book={book} />
          ))}
        </ul>
      </SimpleLayout>
    </>
  )
}
