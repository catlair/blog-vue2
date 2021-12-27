<template>
  <div class="page-container">
    <Banner>{{ title }}</Banner>
    <v-card class="page-wrapper" :style="wrapperStyle">
      <slot></slot>
    </v-card>
  </div>
</template>

<script>
import Banner from '@/layout/Banner.vue'

export default {
  name: 'Container',
  components: {
    Banner
  },
  props: {
    title: {
      type: String,
      default: '默认标题'
    },
    small: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {}
  },
  computed: {
    wrapperStyle() {
      return {
        'max-width': this.small ? '970px' : '1200px'
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.page-container {
  padding: 0 20px;
}
.page-wrapper {
  @include page-up-animation;
  line-height: 1.5;
}

@media (min-width: $screen-sm) {
  $container-m: 360px auto auto;
  .page-wrapper {
    margin: $container-m;
    padding: 20px 40px;
  }
}

@media (max-width: $screen-sm) {
  $container-m: 240px auto auto;

  .page-wrapper {
    margin: $container-m;
    padding: 20px 14px;
  }
}
</style>
