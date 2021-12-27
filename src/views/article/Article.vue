<template>
  <div class="page">
    <ArticleBanner />
    <v-row class="main-container">
      <v-col md="9" cols="12">
        <ArticleContent />
      </v-col>
      <v-col md="3" cols="12" class="d-md-block d-none art-side">
        <ArticleSide />
      </v-col>
    </v-row>
  </div>
</template>

<script>
import ArticleBanner from './components/ArticleBanner.vue'
import ArticleContent from './components/ArticleContent.vue'
import ArticleSide from './components/ArticleSide.vue'

export default {
  name: 'Article',
  components: {
    ArticleBanner,
    ArticleContent,
    ArticleSide
  }
}
</script>

<style lang="scss" scoped>
@media (max-width: $screen-sm) {
  .main-container {
    margin: 320px auto auto;
  }
}
</style>
