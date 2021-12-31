<template>
  <Container title="分类">
    <CategoryList />
    <CategoryContent />
  </Container>
</template>

<script>
import Container from '@/layout/Container.vue'
import CategoryList from './components/CategoryList.vue'
import CategoryContent from './components/CategoryContent.vue'

export default {
  name: 'Category',
  components: {
    Container,
    CategoryList,
    CategoryContent
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
