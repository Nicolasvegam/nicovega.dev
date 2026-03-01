import type { StaticImageData } from 'next/image'

export interface BookReview {
  summary: string
  liked: string
  about: string
  whyBought: string
  favoritePart: string
  goodFor: string
  notGoodFor: string
}

export interface Book {
  id: number
  title: string
  author: string
  image: StaticImageData | string
  rating: number
  slug: string
  review: BookReview
}

export interface WishlistBook {
  id: number
  title: string
  author: string
  image: string
  readingNow?: boolean
}
