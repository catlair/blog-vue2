import type { AxiosRequestConfig } from 'node_modules/axios/index'
export declare const getPendingUrl: (config: AxiosRequestConfig) => string
export declare class AxiosCanceler {
  /**
   * 添加请求
   */
  addPending(config: AxiosRequestConfig): void
  /**
   * 清除所有请求
   */
  removeAllPending(): void
  /**
   * 清除指定请求
   */
  removePending(config: AxiosRequestConfig): void
  /**
   * 重置
   */
  reset(): void
}
