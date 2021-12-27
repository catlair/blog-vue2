/**
 * 响应状态码
 */
export const ResultEnum = {
  SUCCESS: 0,
  ERROR: 1,
  UNKNOWN_ERROR: -1
}

/**
 * 请求方法
 */
export const RequestEnum = {
  GET: 'GET',
  POST: 'POST',
  PUT: 'PUT',
  PATCH: 'PATCH',
  DELETE: 'DELETE'
}

/**
 * 数据类型
 */
export const ContentTypeEnum = {
  // json
  JSON: 'application/json;charset=UTF-8',
  // form-data qs
  FORM_URLENCODED: 'application/x-www-form-urlencoded;charset=UTF-8',
  // form-data  upload
  FORM_DATA: 'multipart/form-data;charset=UTF-8'
}
