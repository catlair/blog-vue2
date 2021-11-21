<template>
  <v-app>
    <TopNavBarVue />
    <SideNavBarVue />
    <v-main>
      <router-view />
    </v-main>
    <!-- <FooterVue /> -->
  </v-app>
</template>

<script>
import TopNavBarVue from './layout/TopNavBar.vue'
import SideNavBarVue from './layout/SideNavBar.vue'
// import FooterVue from './layout/Footer.vue'

export default {
  name: 'App',

  components: {
    TopNavBarVue,
    SideNavBarVue
    // FooterVue,
  },

  data: () => ({
    //
  })
}
</script>
