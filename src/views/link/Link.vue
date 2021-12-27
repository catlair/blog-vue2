<template>
  <Container title="友情链接">
    <LinkLists></LinkLists>
    <v-pagination v-model="page" :length="6"></v-pagination>
    <!-- 说明 -->
    <div class="link-title mt-4 mb-4">
      <v-icon color="blue">{{ mdiChartLine }}</v-icon> 添加友链
    </div>
    <blockquote>
      <div>名称：{{ 'Hello world' }}</div>
      <div>链接：{{ 'localhost' }}</div>
      <div>简介：{{ '随便写一下' }}</div>
      <div>图片：{{ 'https://有个屁的头像' }}</div>
    </blockquote>
    <div class="mt-5 mb-5">需要交换友链的可在下方留言💖</div>
    <blockquote class="mb-10">
      友链信息展示需要，你的信息格式要包含：名称、介绍、链接、图片
    </blockquote>
  </Container>
</template>

<script>
import Container from '@/layout/Container.vue'
import LinkLists from './components/LinkLists.vue'
import { mdiChartLine } from '@mdi/js'

export default {
  name: 'Link',
  components: {
    Container,
    LinkLists
  },
  data() {
    return {
      mdiChartLine,
      page: 1
    }
  }
}
</script>

<style lang="scss" scoped>
blockquote {
  line-height: 2;
  margin: 0;
  font-size: 16px;
  border-radius: 4px;
  background-color: #ecf7fe;
  border-left: 0.2rem solid #49b1f5;
  padding: 0.5rem 1rem;
}

.link-title {
  color: #344c67;
  font-size: 21px;
  font-weight: bold;
  line-height: 2;
}
</style>
