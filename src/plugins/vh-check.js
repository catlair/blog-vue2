// https://github.com/Hiswe/vh-check
import * as events from '../utils/event-listener'

function checkSizes() {
  const windowHeight = window.innerHeight
  return {
    windowHeight,
    value: windowHeight * 0.01
  }
}

function updateCssVar(cssVarName, result) {
  document.documentElement.style.setProperty(`--${cssVarName}`, `${result.value}px`)
}

/**
 * @typedef {Object} VhCheckOptions
 * @property {string} [cssVarName='vh'] - 自定义 CSS 变量名
 * @property {boolean} [bind=true] - 是否绑定事件 （默认窗口反向改变时触发）
 * @property {boolean} [updateOnTouch=true] - 移动端触摸事件
 * @property {boolean} [updateOnResize=true] - 窗口大小改变时是否更新
 *
 * @param {VhCheckOptions} options
 * @returns
 */
export function vhCheck(options) {
  const { cssVarName = 'vh', bind = true, updateOnTouch = true, updateOnResize = true } = options

  updateCssVar(cssVarName, checkSizes())

  if (!bind) return

  function onWindowChange() {
    window.requestAnimationFrame(function () {
      updateCssVar(cssVarName, checkSizes())
    })
  }

  // 清除之前的事件
  events.removeAll()

  // 设备方向改变时，重新计算
  events.addListener(window, 'orientationchange', onWindowChange)

  // 触摸屏幕时，重新计算
  if (updateOnTouch) {
    events.addListener(window, 'touchmove', onWindowChange)
  }

  // 窗口大小改变时，重新计算
  if (updateOnResize) {
    events.addListener(window, 'resize', onWindowChange)
  }
}
