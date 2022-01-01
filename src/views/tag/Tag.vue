<template>
  <Container title="标签">
    <TagList @update:loaded="isLoadedList = $event" />
    <TagContent :isLoadedList="isLoadedList" />
  </Container>
</template>

<script>
import Container from '@/layout/Container.vue'
import TagList from './components/TagList.vue'
import TagContent from './components/TagContent'

export default {
  name: 'Tag',
  components: {
    Container,
    TagList,
    TagContent
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
