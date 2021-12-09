<template>
  <Container title="标签">
    <TagListVue />
    <ArticleCardVue :nums="4" />
  </Container>
</template>

<script>
import Container from '@/components/layout/Container.vue'
import ArticleCardVue from '@/components/ArticleCard.vue'
import TagListVue from './TagList.vue'

export default {
  name: 'Tag',
  components: {
    Container,
    ArticleCardVue,
    TagListVue
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
