import { ArticleStatusEnum } from '@/enums/articleEnum'
import { defHttp } from '@/http/axios'

const Api = {
  URL: '/article'
}

/**
 * 创建文章
 */
export function createArticleApi(data, mode) {
  return defHttp.post(
    { url: Api.URL, data },
    {
      errorMessageMode: mode || 'message'
    }
  )
}

/**
 * @description: 获取文章列表
 */
export function getAllArticleApi(params) {
  return defHttp.get({ url: Api.URL, params })
}

/**
 * @description: 获取文章内容
 */
export function getArticleContextApi(id) {
  return defHttp.get({ url: Api.URL + '/' + id })
}

/**
 * 更新文章
 */
export function updateArticleApi(id, data, mode) {
  return defHttp.patch(
    { url: Api.URL + '/' + id, data },
    {
      errorMessageMode: mode || 'message'
    }
  )
}

/**
 * 回收文章
 */
export function recycleArticleApi(id) {
  return updateArticleApi(id, { status: ArticleStatusEnum.DELETED })
}

/**
 * 创建文章
 */
export function deleteArticleApi(id, mode) {
  return defHttp.delete(
    { url: Api.URL + '/' + id },
    {
      errorMessageMode: mode || 'message'
    }
  )
}
