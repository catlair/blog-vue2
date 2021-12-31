<template>
  <ul class="article-wrapper">
    <li class="article-item" v-for="i of nums || 6" :key="i">
      <!-- 文章 -->
      <ArticleCardItem :article="i" />
    </li>
  </ul>
</template>

<script>
import ArticleCardItem from './ArticleCardItem.vue'

export default {
  name: 'ArticleCard',
  components: {
    ArticleCardItem
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
  justify-content: space-between;
}

@media (max-width: $screen-sm) {
  .article-wrapper {
    padding: 0 12px;
  }

  .article-item {
    width: 100%;
    margin: 14px auto;
  }
}

// 必須使用 and 不然属性会出现合并的情况
@media (min-width: $screen-sm) and (max-width: $screen-md) {
  .article-item {
    width: 48%;
    margin: 16px 1%;

    &:nth-child(2n) {
      margin-right: 0;
    }

    &:nth-child(2n + 1) {
      margin-left: 0;
    }
  }
}

@media (min-width: $screen-md) {
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
</style>
