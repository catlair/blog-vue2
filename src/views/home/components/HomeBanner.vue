<template>
  <div class="banner">
    <h1>Hello World!</h1>
    <p class="desc">this is a blog.</p>
    <div class="roll-btn" @click="rollDown">
      <v-icon class="scroll-down-effects" size="42px"> {{ mdiChevronDown }}</v-icon>
    </div>
  </div>
</template>

<script>
import { mdiChevronDown } from '@mdi/js'

export default {
  name: 'HomeBanner',
  data() {
    return {
      mdiChevronDown
    }
  },
  methods: {
    rollDown() {
      // 平滑滚动到 100vh
      // 没使用 vuetify 的 goto 是因为 会受 topbar 的高度影响 （会少滚动）
      window.scrollTo({
        behavior: 'smooth',
        top: document.documentElement.clientHeight || window.innerHeight || 0
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.banner {
  @include vh(100);
  display: flex;
  position: relative;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  align-items: center;
  background-color: antiquewhite;
  color: #1976d2;
  font-weight: bold;
  @media (min-width: $screen-sm + 100px) {
    h1 {
      font-size: 2.5rem;
    }

    .desc {
      font-size: 1.5rem;
    }
  }

  h1 {
    font-size: 2rem;
    margin-bottom: 0.5rem;
  }

  .desc {
    font-size: 1rem;
  }

  .roll-btn {
    position: absolute;
    bottom: 0px;
    cursor: pointer;
    width: 100%;
    height: 50px;

    .v-icon {
      animation: bouncingArrow 1.5s infinite;
    }
  }
}

@keyframes bouncingArrow {
  0% {
    top: -10%;
    opacity: 0.4;
  }

  50% {
    top: 20%;
    opacity: 0.8;
  }

  100% {
    top: -10%;
    opacity: 0.4;
  }
}
</style>
