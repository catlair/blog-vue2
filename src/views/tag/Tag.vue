<template>
  <Container title="标签">
    <TagList />
    <TagContent />
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
