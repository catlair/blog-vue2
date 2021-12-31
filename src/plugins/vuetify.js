import Vue from 'vue'
import Vuetify from 'vuetify/lib/framework'

Vue.use(Vuetify)

const opts = {
  icons: {
    iconfont: 'mdiSvg'
  },
  theme: {
    dark: false,
    themes: {
      light: {
        anchor: '#4c4948'
      },
      dark: {}
    }
  }
}

export default new Vuetify(opts)
