<template>
  <div class="home">
    <HomeBanner />
    <v-container class="main-container">
      <v-row class="row">
        <v-col md="9" cols="12">
          <HomeArticleCard />
          <v-pagination class="pagination" v-model="page" :length="pageSize"></v-pagination>
        </v-col>
        <HomeSide />
      </v-row>
    </v-container>
  </div>
</template>

<script>
import HomeSide from './HomeSide.vue'
import HomeArticleCard from './HomeArticleCard.vue'
import HomeBanner from './HomeBanner.vue'

export default {
  name: 'Home',
  components: {
    HomeSide,
    HomeArticleCard,
    HomeBanner
  },
  data() {
    return {
      page: 1,
      pageSize: 1
    }
  }
}
</script>

<style lang="scss" scoped>
.main-container {
  margin-top: -62px;
}
.pagination {
  margin-top: 20px;
}
</style>
