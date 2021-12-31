import Vue from 'vue'
import MarkdownIt from 'markdown-it'
import anchor from 'markdown-it-anchor'
import tocDoneRight from 'markdown-it-toc-done-right'

const md = MarkdownIt()
  .use(anchor, {
    level: [1, 2, 3, 4, 5, 6],
    permalink: anchor.permalink.ariaHidden()
  })
  .use(tocDoneRight, {
    containerId: 'markdown-toc'
  })

Vue.prototype.$md = md
