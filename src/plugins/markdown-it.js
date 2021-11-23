import MarkdownIt from 'markdown-it'
import Vue from 'vue'
const md = MarkdownIt({
  html: true
})

Vue.prototype.$md = md
