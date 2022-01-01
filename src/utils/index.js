import time from './time'
import goTo from 'vuetify/lib/services/goto'

export function isMobile() {
  const flag = navigator.userAgent.match(
    /(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i
  )
  return Boolean(flag)
}

/**
 * 格式化时间
 * @param {string} data
 * @param {string} format
 * @returns {string}
 */
export function formatTime(data, format = 'YYYY-MM-DD') {
  return time(data).format(format)
}

/**
 * 跳转到位置
 */
export function goToPosition(position = 0, options = {}) {
  return goTo(position, options)
}
