import axios from 'axios'
import { isFunction } from 'lodash-es'

// 存储取消操作
const pendingMap = new Map()

export const getPendingUrl = (config) => [config.method, config.url].join('&')

export class AxiosCanceler {
  /**
   * 添加请求
   */
  addPending(config) {
    this.removePending(config)
    const url = getPendingUrl(config)
    config.cancelToken ||= new axios.CancelToken((cancel) => {
      if (!pendingMap.has(url)) {
        pendingMap.set(url, cancel)
      }
    })
  }

  /**
   * 清除所有请求
   */
  removeAllPending() {
    pendingMap.forEach((cancel) => {
      cancel && isFunction(cancel) && cancel()
    })
    pendingMap.clear()
  }

  /**
   * 清除指定请求
   */
  removePending(config) {
    const url = getPendingUrl(config)
    if (pendingMap.has(url)) {
      const cancel = pendingMap.get(url)
      cancel && isFunction(cancel) && cancel()
      pendingMap.delete(url)
    }
  }

  /**
   * 重置
   */
  reset() {
    pendingMap.clear()
  }
}
