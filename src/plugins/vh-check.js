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

export function vhCheck(
  { cssVarName, bind, updateOnTouch } = {
    cssVarName: 'vh',
    bind: true,
    updateOnTouch: true
  }
) {
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
}
