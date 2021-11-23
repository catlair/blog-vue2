import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify'
import './plugins/element.js'
import './plugins/markdown-it'
import 'element-ui/lib/theme-chalk/index.css'
import './assets/styles/index.scss'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  vuetify,
  render: (h) => h(App)
}).$mount('#app')
