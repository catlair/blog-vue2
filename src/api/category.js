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

export function updateCategory(id, data, mode) {
  return defHttp.patch(
    {
      url: ApiUrl + '/' + id,
      data
    },
    { errorMessageMode: mode || 'message' }
  )
}
