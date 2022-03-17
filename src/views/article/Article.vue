<template>
  <div class="page">
    <ArticleBanner :article="article" />
    <v-row class="main-container">
      <v-col md="9" cols="12">
        <ArticleContent :content="content" :message="message" />
      </v-col>
      <v-col md="3" cols="12" class="d-md-block d-none art-wrap">
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
      content: '',
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
  async created() {
    try {
      const { result, code, msg } = await this.getArticle()
      this.article = result
      console.log(result, code, msg)
      if (code !== 0) {
        this.message = msg
        return
      }
      const htmlText = this.$md.render(this.article.content + '\n${toc}\n')
      const tocTextMatch = htmlText.match(/<nav.*id="markdown-toc".*<\/nav>$/)
      const tocText = tocTextMatch ? tocTextMatch[0] : ''
      this.content = htmlText.replace(tocText, '')
      this.tocText.value = tocText
    } catch (error) {
      console.log(error)
    }
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
