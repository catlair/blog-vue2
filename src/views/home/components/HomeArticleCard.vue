<template>
  <ul class="home-article-wrap">
    <v-lazy tag="li" min-height="280" v-for="article of articles" :key="article._id">
      <HomeArticleCardItem :article="article" />
    </v-lazy>
  </ul>
</template>

<script>
import HomeArticleCardItem from './HomeArticleCardItem.vue'

export default {
  name: 'HomeArticleCard',
  components: {
    HomeArticleCardItem
  },
  props: {
    articles: {
      type: Array,
      required: true
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
