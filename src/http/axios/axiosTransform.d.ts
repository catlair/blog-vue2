import type { AxiosRequestConfig, AxiosResponse } from 'node_modules/axios/index'
import type { RequestOptions, Result } from '#/axios'
export interface CreateAxiosOptions extends AxiosRequestConfig {
  authenticationScheme?: string
  transform?: AxiosTransform
  requestOptions?: RequestOptions
}
export declare abstract class AxiosTransform {
  /**
   * 请求之前处理 config
   */
  beforeRequestHook?: (config: AxiosRequestConfig, option: RequestOptions) => AxiosRequestConfig
  /**
   * 请求成功
   */
  transformRequestHook?: (res: AxiosResponse<Result>, option: RequestOptions) => any
  /**
   * 请求失败
   */
  requestCatchHook?: (e: Error, option: RequestOptions) => Promise<any>
  /**
   * 请求之前拦截
   */
  requestInterceptors?: (
    config: AxiosRequestConfig,
    option: CreateAxiosOptions
  ) => AxiosRequestConfig
  /**
   * 请求成功拦截
   */
  responseInterceptors?: (res: AxiosResponse<any>) => AxiosResponse<any>
  /**
   * 请求错误拦截
   */
  requestInterceptorsCatch?: (error: Error) => void
  /**
   * 响应错误拦截
   */
  responseInterceptorsCatch?: (error: Error) => void
}
