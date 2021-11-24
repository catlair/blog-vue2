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
import ArticleBanner from './ArticleBanner.vue'
import ArticleContent from './ArticleContent.vue'
import ArticleSide from './ArticleSide.vue'

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
@media (max-width: 760px) {
  .main-container {
    margin: 320px auto auto;
  }
}
</style>
