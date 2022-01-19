import type { PaginationParms, ErrorMessageMode } from '#/model/common'
import type { CreateArticleParms, ArticleModel, ArticleListModel } from '#/model/articleModel'

/**
 * 创建文章
 */
export function createArticleApi(
  data: CreateArticleParms,
  mode?: ErrorMessageMode
): Promise<CreateArticleParms>

/**
 * @description: 获取文章列表
 */
export function getAllArticleApi(params: PaginationParms): Promise<ArticleListModel>

/**
 * @description: 获取文章内容
 * @param {string} id 文章 id
 * @param {boolean} isTransformResponse 是否转换响应数据 默认 false
 */
export function getArticleContextApi(
  id: string,
  isTransformResponse?: boolean
): isTransformResponse extends true
  ? Promise<ArticleModel>
  : Promise<{
      result: ArticleModel
    }>

/**
 * 更新文章
 */
export function updateArticleApi(id: string, data: any, mode?: ErrorMessageMode): Promise<any>

/**
 * 回收文章
 */
export function recycleArticleApi(id: string): Promise<any>

/**
 * 删除文章
 */
export function deleteArticleApi(id: string, mode?: ErrorMessageMode): Promise<any>
