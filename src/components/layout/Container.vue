<template>
  <div class="page-container">
    <BannerVue>{{ title }}</BannerVue>
    <v-card class="page-wrapper" :style="wrapperStyle">
      <slot></slot>
    </v-card>
  </div>
</template>

<script>
import BannerVue from '@/components/Banner.vue'

export default {
  name: 'Container',
  components: {
    BannerVue
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

@media (min-width: 760px) {
  $container-m: 360px auto auto;
  .page-wrapper {
    margin: $container-m;
    padding: 20px 40px;
  }
}

@media (max-width: 760px) {
  $container-m: 240px auto auto;

  .page-wrapper {
    margin: $container-m;
    padding: 20px 14px;
  }
}
</style>
