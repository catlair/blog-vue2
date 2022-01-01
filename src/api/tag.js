import { defHttp } from '@/http/axios/index'

const ApiUrl = '/tag'

/**
 * 获取标签列表
 */
export function getTags() {
  return defHttp.get({
    url: ApiUrl
  })
}

/**
 * 通过标签名获取文章
 * @param {string} tagName 标签名
 */
export function getArticlesByTagName(tagName) {
  return defHttp.get({
    url: `${ApiUrl}/name/${tagName}`
  })
}
