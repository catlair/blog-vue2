import { defHttp } from '@/http/axios'

const API = {
  comment: '/comment'
}

/**
 * 获取评论列表
 */
export function getCommentList(id, params) {
  return defHttp.get({
    url: API.comment + '/article/' + id,
    params
  })
}

/**
 * 创建评论
 */
export function createComment(data) {
  return defHttp.post({
    url: API.comment,
    data
  })
}
