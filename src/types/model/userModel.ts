export interface LoginParams {
  username: string
  password: string
  isEmail?: boolean
}

export interface LoginResultModel {
  id: string
  access_token: string
  username: string
  roles: string[]
}
