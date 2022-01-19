<template>
  <section>
    <ArticleTypeSkeleton v-show="loading" />
    <ArticleCard v-show="!loading" :dataSource="articles" />
  </section>
</template>

<script>
import ArticleCard from '@/components/article/ArticleCard.vue'
import ArticleTypeSkeleton from '@/components/article/ArticleTypeSkeleton.vue'
import { getCategoryArticlesByName } from '@/api/category'
import { isArray } from 'lodash-es'

export default {
  name: 'CategoryContent',
  components: {
    ArticleTypeSkeleton,
    ArticleCard
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
      getCategoryArticlesByName(name).then((res) => {
        this.articles = res.list
        this.loading = false
      })
    }
  }
}
</script>

<style scoped></style>
