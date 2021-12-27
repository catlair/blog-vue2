import type { AxiosInstance, AxiosRequestConfig } from 'node_modules/axios/index'
import type { CreateAxiosOptions } from './axiosTransform'
import type { RequestOptions, UploadFileParams } from '#/axios'
/**
 * @description axios 封装
 */
export declare class VAxios {
  private axiosInstance
  private readonly options
  constructor(options: CreateAxiosOptions)
  /**
   * 创建一个 axios 实例
   */
  private createAxiosInstance
  private getTransform
  getAxios(): AxiosInstance
  /**
   * 重新设置 axios 实例
   */
  configAxios(config: CreateAxiosOptions): void
  /**
   * 设置请求头
   */
  setHeaders(headers: any): void
  /**
   * 拦截器配置
   */
  private setupInterceptors
  /**
   * 上传文件
   */
  uploadFile<T = any>(config: AxiosRequestConfig, params: UploadFileParams): Promise<unknown>
  /**
   * 支持 form-data
   */
  supportFormData(config: AxiosRequestConfig): AxiosRequestConfig<any>
  get<T = any>(config: AxiosRequestConfig, options?: RequestOptions): Promise<T>
  post<T = any>(config: AxiosRequestConfig, options?: RequestOptions): Promise<T>
  put<T = any>(config: AxiosRequestConfig, options?: RequestOptions): Promise<T>
  delete<T = any>(config: AxiosRequestConfig, options?: RequestOptions): Promise<T>
  patch<T = any>(config: AxiosRequestConfig, options?: RequestOptions): Promise<T>
  request<T = any>(config: AxiosRequestConfig, options?: RequestOptions): Promise<T>
}
