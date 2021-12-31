import type { ListModel } from './common'

export interface CreateArticleParms {
  title: string
  content: string
  category: string
  tags: string[]
  status?: number
  visibility?: number
  isTop?: boolean
}

export interface ArticleModel {
  _id: string
  isTop: boolean
  status: number
  visibility: number
  tags: string[]
  category: string
  author: string
  content: string
  title: string
  createdAt: string
  updatedAt: string
}

export interface ArticleListModel extends ListModel {
  list: ArticleModel[]
}
