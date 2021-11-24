<template>
  <div class="banner">
    <h1>Hello World!</h1>
    <p class="desc">this is a blog.</p>
    <div class="roll-btn" @click="rollDown">
      <v-icon class="scroll-down-effects"> mdi-chevron-down </v-icon>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HomeBanner',
  data() {
    return {}
  },
  methods: {
    rollDown() {
      // 平滑滚动到 100vh
      window.scrollTo({
        behavior: 'smooth',
        top: document.documentElement.clientHeight || window.innerHeight
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.banner {
  display: flex;
  position: relative;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  align-items: center;
  background-color: antiquewhite;
  @include vh(100);
  color: #1976d2;
  font-weight: bold;
  h1 {
    font-size: 2rem;
    margin-bottom: 0.5rem;
  }
  .desc {
    font-size: 1rem;
  }
  @media (min-width: 768px) {
    h1 {
      font-size: 2.5rem;
    }
    .desc {
      font-size: 1.5rem;
    }
  }
  .roll-btn {
    position: absolute;
    bottom: 0px;
    cursor: pointer;
    width: 100%;
    height: 50px;

    i {
      font-size: 2.2rem;
      animation: bouncingArrow 1.5s infinite;
    }
  }
}

@keyframes bouncingArrow {
  0% {
    top: 40%;
    opacity: 0.4;
  }
  50% {
    top: 10%;
    opacity: 1;
  }
  100% {
    top: 40%;
    opacity: 0.4;
  }
}
</style>
