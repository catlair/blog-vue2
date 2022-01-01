import { defHttp } from '@/http/axios'

const ApiUrl = '/category'

/**
 * 获取分类列表
 */
export function getCategories(mode) {
  return defHttp.get(
    {
      url: ApiUrl
    },
    { errorMessageMode: mode || 'message' }
  )
}

/**
 * 通过 id 获取指定分类的文章
 * @param {string} id
 */
export function getCategoryArticles(id) {
  return defHttp.get({
    url: `${ApiUrl}/${id}`
  })
}

/**
 * 通过 name 获取指定分类的文章
 * @param {string} name
 */
export function getCategoryArticlesByName(name) {
  return defHttp.get({
    url: `${ApiUrl}/name/${name}`
  })
}

export function updateCategory(id, data, mode) {
  return defHttp.patch(
    {
      url: ApiUrl + '/' + id,
      data
    },
    { errorMessageMode: mode || 'message' }
  )
}
