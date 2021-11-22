<template>
  <div class="home">
    <HomeBanner />
    <hello-world />
  </div>
</template>

<script>
import HelloWorld from '@/components/HelloWorld'
import HomeBanner from './HomeBanner.vue'

export default {
  name: 'Home',

  components: {
    HelloWorld,
    HomeBanner
  }
}
</script>

<style lang="scss" scoped></style>
