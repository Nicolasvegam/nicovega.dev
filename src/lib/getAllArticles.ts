import glob from 'fast-glob'
import * as path from 'path'
import type { Article, ArticleMeta } from '@/types/articles'
import type { ComponentType } from 'react'

interface ArticleModule {
  meta: ArticleMeta
  default: ComponentType<{ isRssFeed?: boolean }>
}

async function importArticle(articleFilename: string): Promise<Article> {
  const { meta, default: component } = await import(
    `../pages/articles/${articleFilename}`
  ) as ArticleModule

  return {
    slug: articleFilename.replace(/(\/index)?\.mdx$/, ''),
    ...meta,
    component,
  }
}

export async function getAllArticles(): Promise<Article[]> {
  const articleFilenames = await glob(['*.mdx', '*/index.mdx'], {
    cwd: path.join(process.cwd(), 'src/pages/articles'),
  })

  const articles = await Promise.all(articleFilenames.map(importArticle))

  return articles.sort((a, z) => +new Date(z.date) - +new Date(a.date))
}
