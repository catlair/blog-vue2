import { merge, isString } from 'lodash-es'
import { ContentTypeEnum, RequestEnum, ResultEnum } from '@/enums/httpEnum'
import { VAxios } from './Axios'
import { Message, MessageBox } from '@/utils/notice'
import store from '@/store'

/**
 * 数据处理，方便区分多种处理方式
 */
const transform = {
  /**
   * 处理请求数据。如果数据不是预期格式，可直接抛出错误
   */
  transformRequestHook: (res, options) => {
    const { isTransformResponse, isReturnNativeResponse } = options
    // 是否返回原生响应头 比如：需要获取响应头时使用该属性
    if (isReturnNativeResponse) {
      return res
    }
    // 不进行任何处理，直接返回
    // 用于页面代码可能需要直接获取code，data，message这些信息时开启
    if (!isTransformResponse) {
      return res.data
    }

    // 错误的时候返回
    const { data } = res
    if (!data) {
      throw new Error('[HTTP] 返回数据为空')
    }
    //  这里 code，result，message为 后台统一的字段
    const { code, result, msg } = data

    // 返回的数据如果不是预期，将不存在 result
    const hasSuccess = Reflect.has(data, 'result') && Reflect.has(data, 'code')
    if (hasSuccess && (code !== ResultEnum.ERROR || code !== ResultEnum.UNKNOWN_ERROR)) {
      return result
    }

    // 在此处根据自己项目的实际情况对不同的code执行不同的操作
    // 如果不希望中断当前请求，请return数据，否则直接抛出异常即可
    let timeoutMsg = ''

    if (msg) {
      timeoutMsg = msg
    }

    // errorMessageMode=‘modal’的时候会显示modal错误弹窗，而不是消息提示，用于一些比较重要的错误
    // errorMessageMode='none' 一般是调用时明确表示不希望自动弹出错误提示
    if (options.errorMessageMode === 'modal') {
      MessageBox.alert(timeoutMsg, '错误提示', {
        confirmButtonText: '确定',
        type: 'error'
      })
      console.error(timeoutMsg)
    } else if (options.errorMessageMode === 'none') {
      // 不做任何处理
      console.warn(timeoutMsg)
    }

    Message.error(timeoutMsg)
    console.error(timeoutMsg || '请求出错，请稍候重试')
  },

  // 请求之前处理config
  beforeRequestHook: (config, options) => {
    const { apiUrl, joinPrefix, urlPrefix } = options

    if (joinPrefix) {
      config.url = `${urlPrefix}${config.url}`
    }

    if (apiUrl && isString(apiUrl)) {
      config.url = `${apiUrl}${config.url}`
    }
    const params = config.params || {}
    const data = config.data || false
    if (config.method?.toUpperCase() !== RequestEnum.GET) {
      if (!isString(params)) {
        if (Reflect.has(config, 'data') && config.data && Object.keys(config.data).length > 0) {
          config.data = data
          config.params = params
        } else {
          // 非GET请求如果没有提供data，则将params视为data
          // 不然就把 params 视为 query 参数，可能导致密码明文出现在 url 中等情况
          config.data = params
          config.params = undefined
        }
      } else {
        // 兼容restful风格
        config.url = config.url + params
        config.params = undefined
      }
    }
    return config
  },

  /**
   * 请求拦截器处理
   */
  requestInterceptors: (config, options) => {
    const token = store.state.user.token
    if (token && config?.requestOptions?.withToken !== false) {
      config.headers.Authorization = options.authenticationScheme
        ? `${options.authenticationScheme} ${token}`
        : token
    }
    return config
  },

  /**
   * 响应拦截器处理
   */
  responseInterceptors: (res) => {
    return res
  },

  /**
   * 响应错误处理
   */
  responseInterceptorsCatch: (error) => {
    return Promise.reject(error)
  }
}

function createAxios(opt) {
  return new VAxios(
    merge(
      {
        // https://developer.mozilla.org/en-US/docs/Web/HTTP/Authentication#authentication_schemes
        authenticationScheme: 'Bearer',
        timeout: 10 * 1000,
        headers: { 'Content-Type': ContentTypeEnum.JSON },
        // 数据处理方式
        transform,
        // 配置项，下面的选项都可以在独立的接口请求中覆盖
        requestOptions: {
          // 默认将prefix 添加到url
          joinPrefix: true,
          // 是否返回原生响应头 比如：需要获取响应头时使用该属性
          isReturnNativeResponse: false,
          // 需要对返回数据进行处理
          isTransformResponse: true,
          // post请求的时候添加参数到url
          joinParamsToUrl: false,
          // 格式化提交参数时间
          formatDate: true,
          // 消息提示类型
          errorMessageMode: 'none',
          // 接口地址
          apiUrl: process.env.VUE_APP_API_URL,
          // 接口拼接地址
          urlPrefix: process.env.VUE_APP_API_PREFIX,
          //  是否加入时间戳
          joinTime: true,
          // 忽略重复请求
          ignoreCancelToken: true,
          // 是否携带token
          withToken: true
        }
      },
      opt || {}
    )
  )
}

/**
 * axios 示例
 * @type {VAxios}
 */
export const defHttp = createAxios()
