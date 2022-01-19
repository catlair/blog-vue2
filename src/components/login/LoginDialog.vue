<template>
  <v-row justify="center">
    <v-dialog v-model="dialog" :fullscreen="isMobile" max-width="460">
      <v-card class="login-container" style="border-radius: 4px">
        <div class="login-wrapper">
          <!-- 用户名 -->
          <v-text-field
            v-model="username"
            :label="account.label"
            :placeholder="`请输入您的${account.label}`"
            :append-icon="account.isEmail ? icon.mdiAccountSwitchOutline : icon.mdiAccountSwitch"
            @keyup.enter="login"
            @click:append="changeAccount"
          />
          <!-- 密码 -->
          <v-text-field
            v-model="password"
            class="mt-7"
            label="密码"
            placeholder="请输入您的密码"
            @keyup.enter="login"
            :append-icon="show ? icon.mdiEye : icon.mdiEyeOff"
            :type="show ? 'text' : 'password'"
            @click:append="show = !show"
          />
          <!-- 按钮 -->
          <v-btn class="mt-7" block color="blue" style="color: #fff" @click="login"> 登录 </v-btn>
          <!-- 注册和找回密码 -->
          <div class="mt-10 login-tip">
            <span @click="openRegister">立即注册</span>
            <span @click="openForget" class="float-right">忘记密码?</span>
          </div>
        </div>
      </v-card>
    </v-dialog>
  </v-row>
</template>

<script>
import { mdiEye, mdiEyeOff, mdiAccountSwitchOutline, mdiAccountSwitch } from '@mdi/js'
import { SET_APP_PROP, USER_MODULE } from '@/store/type'
import { isMobile } from '@/utils'

export default {
  name: 'LoginDialog.vue',
  data() {
    return {
      icon: {
        mdiEyeOff,
        mdiEye,
        mdiAccountSwitchOutline,
        mdiAccountSwitch
      },
      username: '',
      password: '',
      show: false,
      isMobile: isMobile(),
      account: {
        label: '账号',
        isEmail: false
      }
    }
  },
  computed: {
    dialog: {
      set(value) {
        this.$store.commit(SET_APP_PROP, { loginDialog: value })
      },
      get() {
        return this.$store.state.app.loginDialog
      }
    }
  },
  methods: {
    openRegister() {
      console.log('openRegister')
    },
    openForget() {
      console.log('openForget')
    },
    login() {
      this.$store.dispatch(USER_MODULE.LOGIN, {
        username: this.username,
        password: this.password,
        isEmail: this.account.isEmail
      })
      this.$store.commit(SET_APP_PROP, { loginDialog: false })
    },
    changeAccount() {
      const account = this.account
      account.isEmail = !account.isEmail
      account.label = account.isEmail ? '邮箱' : '账号'
    }
  }
}
</script>

<style lang="scss" scoped>
.login-container {
  background: #fff;
}

.social-login-wrapper {
  a {
    text-decoration: none;
  }
}

@media (min-width: $screen-sm) {
  .login-container {
    padding: 1rem;
    border-radius: 4px;
  }

  .login-wrapper {
    padding: 3.5rem 1.5rem 1.5rem;
  }
}

@media (max-width: $screen-sm) {
  .login-container {
    padding: 1rem;
    border-radius: 4px;
    height: 100vh;
    width: 100vw;
  }

  .login-wrapper {
    padding: 18vh 0.5em 0 0.5rem;
  }
}
</style>
