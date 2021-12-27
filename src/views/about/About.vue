<template>
  <Container title="This is an about page">
    <!-- 博主头像 -->
    <div class="my-wrapper">
      <AuthorInfo :src="avatar" />
    </div>
    <!-- 介绍 -->
    <div class="about-content markdown-body">
      {{ '没啥好说的' }}
    </div>
  </Container>
</template>
<script>
import Container from '@/layout/Container.vue'
import AuthorInfo from '@/components/user/AuthorInfo.vue'

export default {
  name: 'About',
  components: {
    Container,
    AuthorInfo
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
