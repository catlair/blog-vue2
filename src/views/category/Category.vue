<template>
  <Container title="分类">
    <CategoryList @update:loaded="isLoadedList = $event" />
    <CategoryContent :isLoadedList="isLoadedList" />
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
  },
  data() {
    return {
      isLoadedList: false
    }
  }
}
</script>

<style lang="scss" scoped>
li {
  cursor: pointer;
  display: inline-block;
}
</style>
