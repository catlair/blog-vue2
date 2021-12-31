<template>
  <v-app>
    <TopNavBar />
    <SideNavBar />
    <v-main style="padding-bottom: 4rem">
      <router-view />
    </v-main>
    <Footer />
  </v-app>
</template>

<script>
import TopNavBar from '@/layout/TopNavBar.vue'
import SideNavBar from '@/layout/SideNavBar.vue'
import Footer from '@/layout/Footer.vue'

export default {
  name: 'App',

  components: {
    TopNavBar,
    SideNavBar,
    Footer
  },

  data: () => ({
    //
  }),

  created() {
    window.app = this
  }
}
</script>
