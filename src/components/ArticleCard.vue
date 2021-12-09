<template>
  <ul class="article-wrapper">
    <li class="article-item" v-for="i of nums || 6" :key="i">
      <!-- 文章 -->
      <ArticleCardItemVue :article="i" />
    </li>
  </ul>
</template>

<script>
import ArticleCardItemVue from '@/components/ArticleCardItem.vue'

export default {
  name: 'ArticleCard',
  components: {
    ArticleCardItemVue
  },
  props: ['nums'],
  data() {
    return {}
  }
}
</script>

<style lang="scss" scoped>
.article-wrapper {
  display: flex;
  flex-wrap: wrap;
}

@media (min-width: 890px) {
  .article-item {
    width: 32%;
    margin: 16px 1%;

    &:nth-child(3n) {
      margin-right: 0;
    }

    &:nth-child(3n + 1) {
      margin-left: 0;
    }
  }
}
@media (max-width: 890px) {
  .article-wrapper {
    padding: 0 12px;
  }

  .article-item {
    width: 100%;
    margin: 14px auto;
  }
}
</style>
