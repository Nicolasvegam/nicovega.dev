import Image from 'next/image'
import { Card } from '@/components/Card'

function StarIcon(props) {
  return (
    <svg viewBox="0 0 20 20" aria-hidden="true" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M10 1.562l-2.09 4.234-4.668.678 3.378 3.293-.798 4.65L10 12.3l4.186 2.207-.798-4.65 3.378-3.293-4.668-.678L10 1.562z"
      />
    </svg>
  )
}

export function Book({ book, className }) {
  return (
    <Card as="li" className={className}>
      <div className="mb-3 flex justify-center">
        {[...Array(5)].map((_, i) => (
          <StarIcon
            key={i}
            className={
              i < book.rating
                ? 'h-5 w-5 fill-amber-400'
                : 'h-5 w-5 fill-zinc-300 dark:fill-zinc-600'
            }
          />
        ))}
      </div>
      <div className="group relative aspect-[3/4] overflow-hidden rounded-lg bg-zinc-100 dark:bg-zinc-800">
        <Image
          src={book.image}
          alt={`${book.title} by ${book.author}`}
          width={200}
          height={300}
        />
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-200" />
      </div>
      <h2 className="mt-4 text-base font-semibold text-zinc-800 dark:text-zinc-100">
        <Card.Link href={`/books/${book.slug}`}>{book.title}</Card.Link>
      </h2>
      <Card.Description>{book.author}</Card.Description>
    </Card>
  )
}