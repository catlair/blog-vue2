<template>
  <v-app>
    <TopNavBarVue />
    <SideNavBarVue />
    <v-main style="padding-bottom: 4rem">
      <router-view />
    </v-main>
    <FooterVue />
  </v-app>
</template>

<script>
import TopNavBarVue from '@/components/layout/TopNavBar.vue'
import SideNavBarVue from '@/components/layout/SideNavBar.vue'
import FooterVue from '@/components/layout/Footer.vue'

export default {
  name: 'App',

  components: {
    TopNavBarVue,
    SideNavBarVue,
    FooterVue
  },

  data: () => ({
    //
  })
}
</script>
