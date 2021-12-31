<template>
  <div class="list">
    <SheetSkeleton class="list-item" v-for="i of 6" :key="i" />
  </div>
</template>

<script>
import SheetSkeleton from '@/components/skeleton/SheetSkeleton.vue'

export default {
  name: 'LinkSkeleton',
  components: {
    SheetSkeleton
  }
}
</script>

<style lang="scss" scoped>
.list {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;

  .list-item {
    display: flex;
    margin-bottom: 4rem;
    position: relative;
    width: 31%;
    height: 140px;

    & > div {
      width: 100%;
      height: 100%;
      position: absolute;
    }
  }
}

@media (max-width: $screen-md) {
  .list {
    .list-item {
      width: 48%;
    }
  }
}

@media (max-width: $screen-sm) {
  .list {
    .list-item {
      width: 100%;
    }
  }
}
</style>
