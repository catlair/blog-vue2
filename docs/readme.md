## 过程中遇到的一些问题

### 1.设置导航时某些地方点击报错

```
 Uncaught TypeError: Cannot read properties of null (reading 'match')
```

发现出现问题的都是没有 `href` 的 `a` 标签

解决办法是：添加上 `href` 例如：`href="javascript:void 0;"`

```json
{
  "name": "@vuepress/markdown",
  "version": "1.8.2",
  "description": "markdown for vuepress",
  "keywords": ["documentation", "generator", "markdown", "vue", "vuepress"],
  "homepage": "https://github.com/vuejs/vuepress/blob/master/packages/@vuepress/markdown#readme",
  "bugs": {
    "url": "https://github.com/vuejs/vuepress/issues"
  },
  "repository": {
    "type": "git",
    "url": "git+https://github.com/vuejs/vuepress.git",
    "directory": "packages/@vuepress/markdown"
  },
  "license": "MIT",
  "author": "Evan You",
  "main": "index.js",
  "dependencies": {
    "@vuepress/shared-utils": "1.8.2",
    "markdown-it": "^8.4.1",
    "markdown-it-anchor": "^5.0.2",
    "markdown-it-chain": "^1.3.0",
    "markdown-it-emoji": "^1.4.0",
    "markdown-it-table-of-contents": "^0.4.0",
    "prismjs": "^1.13.0"
  },
  "publishConfig": {
    "access": "public"
  },
  "maintainers": [
    {
      "name": "ULIVZ",
      "email": "chl814@foxmail.com"
    }
  ]
}
```
