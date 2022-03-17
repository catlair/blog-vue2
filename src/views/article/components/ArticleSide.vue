<template>
  <div class="art-side">
    <ArticleDoc />
  </div>
</template>

<script>
import ArticleDoc from './ArticleDoc.vue'

export default {
  name: 'ArticleSide',
  components: {
    ArticleDoc
  }
}
</script>

<style lang="scss" scoped>
.art-side {
  position: sticky;
  top: 10px;
}

.right-container {
  padding: 20px 24px;
  font-size: 14px;

  &:not(:first-child) {
    margin-top: 20px;
  }
}

.right-title {
  display: flex;
  align-items: center;
  line-height: 2;
  font-size: 16.8px;
  margin-bottom: 6px;

  i {
    font-weight: bold;
  }
}
</style>
