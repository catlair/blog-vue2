<template>
  <div class="page">
    <ArticleBanner :article="article" />
    <v-row class="main-container">
      <v-col md="9" cols="12">
        <ArticleContent :content="message" />
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

import { getArticleContextApi } from '@/api/article'

export default {
  name: 'Article',
  components: {
    ArticleBanner,
    ArticleContent,
    ArticleSide
  },
  data() {
    return {
      article: {},
      message: '',
      tocText: {
        value: ''
      }
    }
  },
  provide() {
    return {
      tocText: this.tocText
    }
  },
  created() {
    this.getArticle().then((res) => {
      console.log(res)
      this.article = res
    })
    const htmlText = this.$md.render(
      '# markdown-it rulezz!\n## with markdown-it-toc-done-right rulezz even more!"' + '\n${toc}\n'
    )
    const tocTextMatch = htmlText.match(/<nav.*id="markdown-toc".*<\/nav>$/)
    const tocText = tocTextMatch ? tocTextMatch[0] : ''
    this.message = htmlText.replace(tocText, '')
    this.tocText.value = tocText
  },
  methods: {
    getArticle() {
      return getArticleContextApi(this.$route.params.id)
    }
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
