// https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener#Safely_detecting_option_support
// 没有特性检测，不去支持低版本浏览器
let eventListeners = []

export function addListener(target, type, listener, options) {
  target.addEventListener(type, listener, options)
  eventListeners.push({
    target,
    type,
    listener,
    options
  })
}

/**
 * 移除事件监听
 */
export function removeAll() {
  eventListeners.forEach((item) => {
    item.target.removeEventListener(item.type, item.listener, item.options)
  })
  eventListeners = []
}
