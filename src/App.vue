<template>
  <v-app>
    <TopNavBar />
    <SideNavBar />
    <v-main style="padding-bottom: 4rem">
      <keep-alive v-if="!$route.meta || $route.meta['keepAlive'] !== false" :max="10">
        <router-view />
      </keep-alive>
      <router-view v-else />
    </v-main>
    <Footer />
    <dialog style="position: absolute">
      <LoginDialog />
    </dialog>
    <!--  登录  -->
  </v-app>
</template>

<script>
import TopNavBar from '@/layout/TopNavBar.vue'
import SideNavBar from '@/layout/SideNavBar.vue'
import Footer from '@/layout/Footer.vue'
import LoginDialog from '@/components/login/LoginDialog'

export default {
  name: 'App',
  components: {
    TopNavBar,
    SideNavBar,
    Footer,
    LoginDialog
  },
  data: () => ({
    //
  }),
  created() {
    window.app = this
  }
}
</script>
