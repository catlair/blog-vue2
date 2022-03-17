<template>
  <ul class="home-article-wrap">
    <li v-for="article of preload" :key="article.id">
      <HomeArticleCardItem :article="article" />
    </li>
    <template v-if="!isLoadMore">
      <li v-for="article of 7" style="min-height: 280px" :key="article"></li>
    </template>
    <v-lazy
      v-for="article of lazyload"
      :options="{
        rootMargin: '0px 0px 280px 0px'
      }"
      tag="li"
      min-height="280"
      :key="article.id"
    >
      <HomeArticleCardItem :article="article" />
    </v-lazy>
  </ul>
</template>

<script>
import HomeArticleCardItem from './HomeArticleCardItem.vue'

const preLoadNum = 3

// 使用分块加载，似乎效果不好（虽然之前好）
// 让页面变成白屏似乎更好

export default {
  name: 'HomeArticleCard',
  components: {
    HomeArticleCardItem
  },
  props: {
    articles: {
      type: Array,
      required: true
    },
    isLoadMore: {
      type: Boolean,
      required: true
    }
  },
  computed: {
    // 预加载的
    preload() {
      if (this.articles.length > preLoadNum) {
        return this.articles.slice(0, preLoadNum)
      }
      return this.articles
    },
    // 懒加载的
    lazyload() {
      if (!this.isLoadMore) {
        return []
      }
      if (this.articles.length > preLoadNum) {
        return this.articles.slice(preLoadNum)
      }
      return []
    }
  }
}
</script>

<style lang="scss">
@media (min-width: $screen-sm) {
  .home-article-wrap > li:nth-child(2n) > div {
    // 图片交替显示
    flex-direction: row-reverse;
  }
}
</style>
