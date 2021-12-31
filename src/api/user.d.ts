import type { ErrorMessageMode } from '#/model/common'
import type { LoginParams, LoginResultModel, ResetPasswordParams } from '#/model/userModel'

export function loginApi(data: LoginParams, mode?: ErrorMessageMode): Promise<LoginResultModel>

export function getUserApi(): Promise<any>

/**
 * 邮箱验证码
 */
export function emailCodeApi(data: { to: string }): Promise<any>

/**
 * 重置密码
 */
export function passResetApi(data: ResetPasswordParams): Promise<{ msg: string }>

/**
 * 校验 jwt token
 */
export function checkTokenApi(): Promise<boolean>
