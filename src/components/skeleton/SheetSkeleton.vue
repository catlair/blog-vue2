<template>
  <v-sheet :color="color || `grey ${$vuetify.theme.dark ? 'darken-2' : 'lighten-4'}`">
    <v-skeleton-loader :class="skeletonClass" :type="type" />
  </v-sheet>
</template>

<script>
export default {
  name: 'SheetSkeleton',
  props: {
    color: {
      type: String,
      default: ''
    },
    type: {
      type: String,
      default: 'image'
    },
    skeletonClass: {
      type: String,
      default: 'mx-auto'
    }
  }
}
</script>
