import Image from 'next/image'
import Link from 'next/link'
import { Button } from '@/components/Button'
import { booksData } from '@/data/booksData'

function ArrowDownIcon(props) {
  return (
    <svg viewBox="0 0 16 16" fill="none" aria-hidden="true" {...props}>
      <path
        d="M4.75 8.75 8 12.25m0 0 3.25-3.5M8 12.25v-8.5"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export default function MiLibreria() {
  // Show only the first 5 books
  const displayBooks = booksData.slice(0, 5)

  return (
    <div className="mt-16 sm:mt-20">
      <div className="flex items-center justify-between mb-8">
        <h2 className="text-2xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100">
          Mi librería
        </h2>
        <Button href="/books" variant="secondary" className="group">
          Ver todos
          <ArrowDownIcon className="ml-1 h-4 w-4 stroke-zinc-400 transition-transform group-hover:translate-x-1 group-hover:stroke-zinc-600 dark:group-hover:stroke-zinc-400" />
        </Button>
      </div>
      <div className="flex overflow-x-auto md:grid md:grid-cols-5 gap-4 pb-4 md:pb-0">
        {displayBooks.map((book) => (
          <Link
            key={book.id}
            href={`/books/${book.slug}`}
            className="group relative aspect-[3/4] overflow-hidden rounded-lg bg-zinc-100 dark:bg-zinc-800 hover:scale-105 transition-transform duration-200 flex-shrink-0 w-32 md:w-auto"
          >
            <Image
              src={book.image}
              alt={`${book.title} by ${book.author}`}
              className="absolute inset-0 h-full w-full object-cover"
              sizes="(min-width: 768px) 20vw, (min-width: 640px) 33vw, 50vw"
            />
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-200" />
            <div className="absolute bottom-0 left-0 right-0 p-3 bg-gradient-to-t from-black/80 to-transparent">
              <h3 className="text-sm font-semibold text-white truncate">
                {book.title}
              </h3>
              <p className="text-xs text-zinc-300 truncate">
                {book.author}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}