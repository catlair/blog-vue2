<template>
  <Container title="标签">
    <TagList />
    <ArticleCard :nums="4" />
  </Container>
</template>

<script>
import Container from '@/layout/Container.vue'
import ArticleCard from '@/components/article/ArticleCard.vue'
import TagList from './components/TagList.vue'

export default {
  name: 'Tag',
  components: {
    Container,
    ArticleCard,
    TagList
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
