<template>
  <ArticleTypeSkeleton v-if="loading" />
  <ArticleCard v-else :nums="4" />
</template>

<script>
import ArticleCard from '@/components/article/ArticleCard.vue'
import ArticleTypeSkeleton from '@/components/article/ArticleTypeSkeleton.vue'

export default {
  name: 'TagContent',
  components: {
    ArticleCard,
    ArticleTypeSkeleton
  },
  data() {
    return {
      loading: false
    }
  }
}
</script>

<style scoped></style>
