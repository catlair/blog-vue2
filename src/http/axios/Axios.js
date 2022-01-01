import axios from 'axios'
import qs from 'qs'
import { cloneDeep, isFunction } from 'lodash-es'
import { AxiosCanceler } from './axiosCancel'
import { ContentTypeEnum, RequestEnum } from '@/enums/httpEnum'

/**
 * @description axios 封装
 */
export class VAxios {
  constructor(options) {
    this.options = options
    this.axiosInstance = axios.create(options)
    this.setupInterceptors()
  }

  /**
   * 创建一个 axios 实例
   */
  createAxiosInstance(options) {
    this.axiosInstance = axios.create(options)
  }

  getTransform() {
    return this.options.transform
  }

  getAxios() {
    return this.axiosInstance
  }

  /**
   * 重新设置 axios 实例
   */
  configAxios(config) {
    if (!this.axiosInstance) {
      return
    }
    this.createAxiosInstance(config)
  }

  /**
   * 设置请求头
   */
  setHeaders(headers) {
    if (!this.axiosInstance) {
      return
    }
    Object.assign(this.axiosInstance.defaults.headers, headers)
  }

  /**
   * 拦截器配置
   */
  setupInterceptors() {
    const transform = this.getTransform()
    if (!transform) {
      return
    }

    const {
      requestInterceptors,
      requestInterceptorsCatch,
      responseInterceptors,
      responseInterceptorsCatch
    } = transform

    const axiosCanceler = new AxiosCanceler()

    // 请求拦截器
    this.axiosInstance.interceptors.request.use((config) => {
      const {
        headers: { ignoreCancelToken }
      } = config

      const ignoreCancel = ignoreCancelToken
        ? ignoreCancelToken
        : this.options.requestOptions?.ignoreCancelToken

      !ignoreCancel && axiosCanceler.addPending(config)

      if (requestInterceptors && isFunction(responseInterceptors)) {
        config = requestInterceptors(config, this.options)
      }

      return config
    }, undefined)

    // 请求错误拦截器
    requestInterceptorsCatch &&
      isFunction(requestInterceptorsCatch) &&
      this.axiosInstance.interceptors.request.use(undefined, requestInterceptorsCatch)

    // 响应拦截器
    this.axiosInstance.interceptors.response.use((res) => {
      res && axiosCanceler.removePending(res.config)
      if (responseInterceptors && isFunction(responseInterceptors)) {
        res = responseInterceptors(res)
      }
      return res
    }, undefined)

    // 响应错误拦截器
    responseInterceptorsCatch &&
      isFunction(responseInterceptorsCatch) &&
      this.axiosInstance.interceptors.response.use(undefined, responseInterceptorsCatch)
  }

  /**
   * 上传文件
   */
  uploadFile(config, params) {
    const formData = new FormData()
    const customFilename = params.name || 'file'

    if (params.filename) {
      formData.append(customFilename, params.file, params.filename)
    } else {
      formData.append(customFilename, params.file)
    }

    if (params.data) {
      Object.keys(params.data).forEach((key) => {
        const value = params.data[key]
        if (Array.isArray(value)) {
          value.forEach((item) => {
            formData.append(`${key}[]`, item)
          })
          return
        }

        formData.append(key, params.data[key])
      })

      return this.axiosInstance.request({
        ...config,
        method: 'POST',
        data: formData,
        headers: {
          'Content-type': ContentTypeEnum.FORM_DATA,
          ignoreCancelToken: true
        }
      })
    }
  }

  /**
   * 支持 form-data
   */
  supportFormData(config) {
    const headers = config.headers || this.options.headers
    const contentType = headers?.['Content-Type'] || headers?.['content-type']

    if (
      contentType !== ContentTypeEnum.FORM_URLENCODED ||
      !Reflect.has(config, 'data') ||
      config.method?.toUpperCase() === RequestEnum.GET
    ) {
      return config
    }

    return {
      ...config,
      data: qs.stringify(config.data, { arrayFormat: 'brackets' })
    }
  }

  get(config, options) {
    return this.request({ ...config, method: RequestEnum.GET }, options)
  }

  post(config, options) {
    return this.request({ ...config, method: RequestEnum.POST }, options)
  }

  put(config, options) {
    return this.request({ ...config, method: RequestEnum.PUT }, options)
  }

  delete(config, options) {
    return this.request({ ...config, method: RequestEnum.DELETE }, options)
  }

  patch(config, options) {
    return this.request({ ...config, method: RequestEnum.PATCH }, options)
  }

  request(config, options) {
    let conf = cloneDeep(config)
    const transform = this.getTransform()
    const { requestOptions } = this.options
    const opt = Object.assign({}, requestOptions, options)

    const { beforeRequestHook, requestCatchHook, transformRequestHook } = transform || {}

    if (beforeRequestHook && isFunction(beforeRequestHook)) {
      conf = beforeRequestHook(conf, opt)
    }
    conf.requestOptions = opt
    conf = this.supportFormData(conf)

    return new Promise((resolve, reject) => {
      this.axiosInstance
        .request(conf)
        .then((res) => {
          if (transformRequestHook && isFunction(transformRequestHook)) {
            try {
              const ret = transformRequestHook(res, opt)
              resolve(ret)
            } catch (error) {
              reject(error || new Error('请求数据转换失败'))
            }
            return
          }
          resolve(res)
        })
        .catch((e) => {
          if (requestCatchHook && isFunction(requestCatchHook)) {
            reject(requestCatchHook(e, opt))
            return
          }
          reject(e)
        })
    })
  }
}
