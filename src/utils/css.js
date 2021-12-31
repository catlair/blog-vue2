import { random } from 'lodash-es/number'
import { isBoolean } from 'lodash-es/lang'

export const colorNames = [
  'red',
  'pink',
  'purple',
  'deep-purple',
  'indigo',
  'blue',
  'light-blue',
  'cyan',
  'teal',
  'green',
  'light-green',
  'lime',
  'yellow',
  'amber',
  'orange',
  'deep-orange',
  'brown',
  'blue-grey',
  'grey'
]

/**
 * 通过颜色表生成随机颜色类
 * @typedef {'accent' | 'darken' | 'lighten'} Color
 * @param {Color | boolean} theme 布尔为是否是暗色 默认 false
 * @param {boolean} text 用于文字 （默认为 false）
 * @param {boolean} base 是否使用最基本的色值 (只对 lighten 有效)
 * @returns {string}
 */
export function getRandomColorCls(theme = false, text = false, base = true) {
  const colorName = colorNames[random(0, colorNames.length - 1)]

  let themeName
  if (isBoolean(theme)) {
    themeName = theme ? 'darken' : 'lighten'
  } else {
    themeName = theme
  }

  let brightness, num
  if (themeName === 'lighten') {
    num = random(base ? 0 : 1, 5)
    brightness = num ? ` lighten-${num}` : ''
  } else {
    brightness = `${themeName}-${random(1, 4)}`
  }

  if (text) {
    return `${colorName}--text${num ? ` text--${brightness}` : ''}`
  }
  return `${colorName} ${brightness}`
}
