<template>
  <ul class="article-wrapper flex-between">
    <!-- 文章 -->
    <v-lazy class="article-item" tag="li" v-for="item of dataSource" :key="item._id">
      <ArticleCardItem :article="item" />
    </v-lazy>
  </ul>
</template>

<script>
import ArticleCardItem from './ArticleCardItem.vue'

export default {
  name: 'ArticleCard',
  components: {
    ArticleCardItem
  },
  props: {
    dataSource: {
      type: Array,
      default: () => []
    }
  }
}
</script>

<style lang="scss" scoped>
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

  .flex-between::after {
    width: 32%;
    margin: 16px 1% 16px 0;
  }
}
</style>
