<template>
  <v-img :src="src" :width="width" :height="height">
    <template #placeholder>
      <SheetSkeleton />
    </template>
  </v-img>
</template>

<script>
import SheetSkeleton from '@/components/skeleton/SheetSkeleton.vue'

export default {
  name: 'SkeletonImg',
  components: {
    SheetSkeleton
  },
  props: {
    width: {
      type: String,
      default: '100%'
    },
    height: {
      type: String,
      default: '100%'
    },
    src: {
      type: String,
      require: true
    }
  }
}
</script>
