import { getUserApi, loginApi } from '@/api/user'
import { USER_MODULE } from '@/store/type'
import { Message, MessageBox } from '@/utils/notice'

const { LOGIN, LOGOUT } = USER_MODULE

export default {
  state: () => ({
    token: '',
    info: {}
  }),
  mutations: {
    setUser(state, user) {
      state.info = user
    },
    setToken(state, user) {
      state.token = user.access_token
    },
    clearUser(state) {
      state.token = ''
      state.info = {}
    }
  },
  actions: {
    async [LOGIN]({ commit, dispatch }, params) {
      try {
        const res = await loginApi(params)
        if (!res) {
          Message.error('登录失败')
          return
        }
        commit('setToken', res)
        console.log(res)
        dispatch('afterLogin')
      } catch (err) {
        console.error(err)
      }
    },
    async afterLogin({ commit }) {
      const user = await getUserApi()
      if (!user) {
        Message.error('登录失败')
        return Promise.reject('获取用户信息失败')
      }
      commit('setUser', user)
      Message({
        message: '登录成功',
        type: 'success'
      })
    },
    async [LOGOUT]({ commit }) {
      try {
        await MessageBox.alert('你想好要离开了吗？', '退出登录', {
          confirmButtonText: '确定',
          showCancelButton: true,
          cancelButtonText: '取消',
          type: 'warning'
        })
        commit('clearUser')
        Message.success('退出成功')
      } catch {
        Message.info('取消退出')
      }
    }
  },
  getters: {}
}
