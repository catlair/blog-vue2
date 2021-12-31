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
