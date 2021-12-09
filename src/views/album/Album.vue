<template>
  <Container title="相册"> 施工中</Container>
</template>

<script>
import Container from '@/components/layout/Container.vue'

export default {
  name: 'Album',
  components: { Container },
  data() {
    return {
      num: 0
    }
  },
  methods: {
    updateNumHandle() {
      this.num++
    }
  }
}
</script>

<style lang="scss" scoped></style>
