<template>
  <Container title="分类">
    <CategoryList />
    <ArticleCard />
  </Container>
</template>

<script>
import Container from '@/layout/Container.vue'
import ArticleCard from '@/components/article/ArticleCard.vue'
import CategoryList from './components/CategoryList.vue'

export default {
  name: 'Category',
  components: {
    Container,
    CategoryList,
    ArticleCard
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
