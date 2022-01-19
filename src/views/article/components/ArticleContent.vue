<template>
  <v-card class="wrap">
    <v-alert v-if="message" dense outlined type="error" style="margin-bottom: 0">
      {{ message }}
    </v-alert>
    <article v-else v-html="content">content</article>
    <Comment />
  </v-card>
</template>

<script>
import Comment from '@/components/comment'

export default {
  name: 'ArticleContent',
  components: {
    Comment
  },
  props: ['content', 'message']
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
