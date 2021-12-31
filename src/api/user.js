import { defHttp } from '@/http/axios'

const Api = {
  Login: '/auth/login',
  UserInfo: '/user/me',
  EmailCode: '/email/code',
  PassReset: '/auth/password/reset',
  CheckToken: '/auth'
}

export function loginApi(data, mode) {
  return defHttp.post(
    {
      url: Api.Login,
      data
    },
    { errorMessageMode: mode || 'message' }
  )
}

export function getUserApi() {
  return defHttp.get({
    url: Api.UserInfo
  })
}

/**
 * 邮箱验证码
 */
export function emailCodeApi(data) {
  return defHttp.post({
    url: Api.EmailCode,
    data
  })
}

/**
 * 重置密码
 */
export function passResetApi(data) {
  return defHttp.post(
    {
      url: Api.PassReset,
      data
    },
    {
      errorMessageMode: 'message'
    }
  )
}

/**
 * 校验 jwt token
 */
export function checkTokenApi() {
  return defHttp.get({
    url: Api.CheckToken
  })
}
