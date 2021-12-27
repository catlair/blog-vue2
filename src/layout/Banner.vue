<template>
  <div class="banner">
    <h1 class="banner-title"><slot></slot></h1>
  </div>
</template>

<script>
export default {
  name: 'Banner'
}
</script>

<style lang="scss" scoped>
.banner-title {
  position: absolute;
  text-align: center;
  color: #eee;
  animation: title-scale 1s;
  width: 100%;
}

@media (min-width: $screen-sm) {
  .banner {
    height: 400px;

    .banner-title {
      top: 12.5rem;
      padding: 0 0.5rem;
      font-size: 2.5rem;
    }
  }
}

@media (max-width: $screen-sm) {
  .banner {
    height: 280px;

    .banner-title {
      top: 8.5rem;
      font-size: 1.625rem;
    }
  }
}
</style>
