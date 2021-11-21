import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from 'vuex-persistedstate'
import SecureLS from 'secure-ls'

import { TOGGLE_SIDE_DRAWER, SET_SIDE_DRAWER } from './type'

Vue.use(Vuex)

const isProd = process.env.NODE_ENV === 'production'
const ls = new SecureLS({ isCompression: false })

const lsConfig = {
  key: 'catlair_blog'
}

if (isProd) {
  lsConfig.storage = {
    getItem: (key) => ls.get(key),
    setItem: (key, value) => ls.set(key, value),
    removeItem: (key) => ls.remove(key)
  }
}

export default new Vuex.Store({
  state: {
    mbSideDrawer: false,
    userInfo: {
      author: 'haha',
      avatar: 'https://cn.vuejs.org/images/logo.svg'
    }
  },
  mutations: {
    [TOGGLE_SIDE_DRAWER](state) {
      state.mbSideDrawer = !state.mbSideDrawer
    },
    [SET_SIDE_DRAWER](state, payload) {
      state.mbSideDrawer = payload
    }
  },
  actions: {},
  modules: {},
  plugins: [createPersistedState(lsConfig)],
  strict: !isProd
})
