<template>
  <Container title="归档" small>
    <v-timeline dense>
      <v-timeline-item color="teal lighten-3" small v-for="i of 10" :key="i"
        >timeline item{{ i }}</v-timeline-item
      >
    </v-timeline>
  </Container>
</template>

<script>
import Container from '@/layout/Container.vue'
import { defHttp } from '../../http/axios'

export default {
  name: 'Archive',
  components: {
    Container
  },
  data() {
    return {}
  },
  created() {
    defHttp
      .post({
        url: '/data',
        data: {
          type: 'archive',
          asda: 'adas'
        }
      })
      .then((res) => {
        console.log(res)
      })
  }
}
</script>

<style lang="scss" scoped></style>
