<template>
  <div class="about page-container">
    <BannerVue>This is an about page</BannerVue>
    <v-card class="page-wrapper">
      <!-- 博主头像 -->
      <div class="my-wrapper">
        <v-avatar size="110">
          <img class="author-avatar" :src="avatar" />
        </v-avatar>
      </div>
      <!-- 介绍 -->
      <div class="about-content markdown-body">
        {{ '没啥好说的' }}
      </div>
    </v-card>
  </div>
</template>
<script>
import BannerVue from '@/components/Banner.vue'

export default {
  name: 'About',
  components: {
    BannerVue
  },
  data() {
    return {
      avatar: 'https://portrait.gitee.com/uploads/avatars/user/1713/5141565_catlair_1615099538.png'
    }
  }
}
</script>

<style lang="scss" scoped>
.my-wrapper {
  text-align: center;
}
</style>
