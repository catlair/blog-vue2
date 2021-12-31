const path = require('path')

function resolve(dir) {
  return path.resolve(__dirname, dir)
}

module.exports = {
  css: {
    loaderOptions: {
      scss: {
        additionalData: `@import "@/styles/var/index.scss";`
      }
    }
  },
  transpileDependencies: ['vuetify'],
  chainWebpack: (config) => {
    config.resolve.alias.set('#', resolve('src/types'))
    config.resolve.alias.set('node_modules', resolve('node_modules'))
  },
  devServer: {
    port: process.env.PORT || 8080,
    // https://github.com/chimurai/http-proxy-middleware#proxycontext-config
    proxy: {
      '/basic-api': {
        target: process.env.VUE_APP_PROXY_URL,
        changeOrigin: true,
        // 重写路径，否则访问路径 /basic-api
        pathRewrite: {
          '^/basic-api': ''
        }
      }
    }
  }
}
