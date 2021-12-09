<template>
  <Container title="分类">
    <CategoryListVue />
    <ArticleCardVue />
  </Container>
</template>

<script>
import Container from '@/components/layout/Container.vue'
import ArticleCardVue from '@/components/ArticleCard.vue'
import CategoryListVue from './CategoryList.vue'

export default {
  name: 'Category',
  components: {
    Container,
    CategoryListVue,
    ArticleCardVue
  },
  data() {
    return {}
  }
}
</script>

<style lang="scss" scoped>
li {
  cursor: pointer;
  display: inline-block;
}

.v-application ul {
  padding-left: 0;
  padding-right: 0;
}
</style>
