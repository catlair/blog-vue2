export interface LoginParams {
  username: string
  password: string
}

export interface LoginResultModel {
  id: string
  access_token: string
  username: string
  roles: string[]
}
