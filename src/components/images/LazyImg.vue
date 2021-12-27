<template>
  <v-img :src="src" lazy-src="~@/assets/svg/lazy.svg" :width="width" :height="height">
    <template #placeholder v-if="placeholder">
      <v-row class="fill-height ma-0" align="center" justify="center">
        <v-progress-circular indeterminate :color="placeholder"></v-progress-circular>
      </v-row>
    </template>
  </v-img>
</template>

<script>
export default {
  name: 'LazyImg',
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
    },
    placeholder: {
      type: String,
      default: 'teal lighten-1'
    }
  }
}
</script>
