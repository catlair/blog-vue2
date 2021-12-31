<template>
  <div class="article-wrapper">
    <SheetSkeleton class="article-item" v-for="i of 3" :key="i" />
  </div>
</template>

<script>
import SheetSkeleton from '@/components/skeleton/SheetSkeleton.vue'

export default {
  name: 'ArticleTypeSkeleton',
  components: {
    SheetSkeleton
  }
}
</script>

<style lang="scss" scoped>
.article-wrapper {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;

  .article-item {
    margin: 16px 1%;
  }
}

@media (max-width: $screen-sm) {
  .article-item {
    width: 100%;
  }
}

// 必須使用 and 不然属性会出现合并的情况
@media (min-width: $screen-sm) and (max-width: $screen-md) {
  .article-item {
    width: 46%;
  }
}

@media (min-width: $screen-md) {
  .article-item {
    width: 30%;
  }
}
</style>
