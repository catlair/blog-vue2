<template>
  <div class="home">
    <HomeBanner />
    <v-container class="main-container">
      <v-row>
        <v-col md="9" cols="12">
          <HomeArticleCard :articles="article.list" />
          <v-pagination
            class="pagination"
            v-model="article.curPage"
            :total-visible="7"
            :length="article.totalPage"
            @input="getArticleList"
          ></v-pagination>
        </v-col>
        <HomeSide />
      </v-row>
    </v-container>
  </div>
</template>

<script>
import HomeSide from './components/HomeSide.vue'
import HomeArticleCard from './components/HomeArticleCard.vue'
import HomeBanner from './components/HomeBanner.vue'

import { goToPosition } from '@/utils'
import { getAllArticleApi } from '@/api/article'

export default {
  name: 'Home',
  components: {
    HomeSide,
    HomeArticleCard,
    HomeBanner
  },
  data() {
    return {
      article: {
        curPage: 1,
        totalPage: 1,
        list: []
      },
      pageSize: 10
    }
  },
  created() {
    this.getArticleList(this.article.curPage, false)
  },
  methods: {
    getArticleList(page = 1, isScroll = true) {
      getAllArticleApi({
        pn: page,
        ps: this.pageSize
      }).then((res = {}) => {
        if (!res.list || res.list.length === 0) {
          return
        }
        if (isScroll) {
          goToPosition(document.documentElement.clientHeight || window.innerHeight || 0).then(
            () => {
              // 首页进行了懒加载
              // 确保滚动到指定位置后再加载数据
              this.article = res
            }
          )
        } else {
          this.article = res
        }
      })
    }
  }
}
</script>

<style scoped>
.main-container {
  margin-top: -62px;
}
.pagination {
  margin-top: 20px;
}
</style>
