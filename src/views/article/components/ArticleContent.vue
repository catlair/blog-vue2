<template>
  <v-card class="wrap">
    <article v-html="content">content</article>
  </v-card>
</template>

<script>
export default {
  name: 'ArticleContent',
  props: ['content']
}
</script>

<style lang="scss" scoped>
@media (min-width: $screen-sm) {
  .wrap {
    padding: 40px;
  }
}

@media (max-width: $screen-sm) {
  .wrap {
    padding: 2.25rem 0.875rem;
  }
}
</style>
