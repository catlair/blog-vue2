<template>
  <ArticleTypeSkeleton v-if="loading" />
  <ArticleCard v-else :dataSource="articles" />
</template>

<script>
import ArticleCard from '@/components/article/ArticleCard.vue'
import ArticleTypeSkeleton from '@/components/article/ArticleTypeSkeleton.vue'
import { getArticlesByTagName } from '@/api/tag'
import { isArray } from 'lodash-es'

export default {
  name: 'TagContent',
  components: {
    ArticleCard,
    ArticleTypeSkeleton
  },
  props: {
    isLoadedList: {
      type: Boolean,
      required: true
    }
  },
  data() {
    return {
      loading: true,
      articles: []
    }
  },
  watch: {
    '$route.query.name'() {
      this.fetchData()
    }
  },
  created() {
    if (this.$route.query.name) {
      this.fetchData()
    } else {
      let unwatch = this.$watch(
        () => this.isLoadedList,
        () => {
          if (this.isLoadedList) {
            this.fetchData()
            unwatch()
          }
        }
      )
    }
  },
  methods: {
    fetchData() {
      this.loading = true
      let name = this.$route.query.name
      if (isArray(name)) {
        name = name[0]
      }
      getArticlesByTagName(name).then((res) => {
        this.articles = res
        this.loading = false
      })
    }
  }
}
</script>

<style scoped></style>
