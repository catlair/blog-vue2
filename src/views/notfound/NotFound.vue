<template>
  <Container title="404 Not Found">
    <p>
      <router-link to="/">Go to home</router-link>
    </p>
  </Container>
</template>

<script>
import Container from '@/components/layout/Container.vue'
export default {
  name: 'NotFound',
  components: {
    Container
  }
}
</script>

<style lang="scss" scoped></style>
