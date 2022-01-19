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
  return defHttp.get(
    { url: Api.URL, params },
    {
      errorMessageMode: 'message'
    }
  )
}

/**
 * @description: 获取文章内容
 * @param {string} id 文章 id
 * @param {boolean} isTransformResponse 是否转换响应数据 默认 false
 */
export function getArticleContextApi(id, isTransformResponse = false) {
  return defHttp.get({ url: Api.URL + '/' + id }, { isTransformResponse })
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
