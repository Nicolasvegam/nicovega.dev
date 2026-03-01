import type { ComponentType } from 'react'

export interface ArticleMeta {
  title: string
  description: string
  date: string
  author?: string
  tags?: string[]
}

export interface Article extends ArticleMeta {
  slug: string
  component: ComponentType<{ isRssFeed?: boolean }>
}
