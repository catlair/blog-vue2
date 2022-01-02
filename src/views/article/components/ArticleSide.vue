<template>
  <div>
    <ArticleDoc />
    <v-card class="right-container">
      <div class="right-title">
        <i class="iconfont icongengxinshijian" style="font-size: 16.8px"></i>
        <span style="margin-left: 10px">相关推荐</span>
      </div>
      <div class="article-list">
        <div class="article-item" v-for="item of 5" :key="item">
          <router-link :to="'/articles/' + item" class="content-cover">
            <img
              :src="`https://cdn4.buysellads.net/uu/1/100164/1635964823-2021-11-03_BSAds_Refresh_082521-01_260x200.png`"
            />
          </router-link>
          <div class="content">
            <div class="content-title">
              <router-link :to="'/articles/' + item.id">
                {{ '我猜你还想看' }}
              </router-link>
            </div>
            <div class="content-time">{{ '2020-08-27' }}</div>
          </div>
        </div>
      </div>
    </v-card>
  </div>
</template>

<script>
import ArticleDoc from './ArticleDoc.vue'

export default {
  name: 'ArticleSide',
  components: {
    ArticleDoc
  }
}
</script>

<style lang="scss" scoped>
.right-container {
  padding: 20px 24px;
  font-size: 14px;

  &:not(:first-child) {
    margin-top: 20px;
  }
}

.right-title {
  display: flex;
  align-items: center;
  line-height: 2;
  font-size: 16.8px;
  margin-bottom: 6px;

  i {
    font-weight: bold;
  }
}

.article-item {
  display: flex;
  align-items: center;
  padding: 6px 0;

  &:first-child {
    padding-top: 0;
  }

  &:last-child {
    padding-bottom: 0;
  }

  &:not(:last-child) {
    border-bottom: 1px dashed #f5f5f5;
  }

  img {
    width: 100%;
    height: 100%;
    transition: all 0.6s;
    object-fit: cover;

    &:hover {
      transform: scale(1.1);
    }
  }
}

.content {
  flex: 1;
  padding-left: 10px;
  word-break: break-all;
  display: -webkit-box;
  overflow: hidden;
  -webkit-box-orient: vertical;
}

.content-cover {
  width: 58.8px;
  height: 58.8px;
  overflow: hidden;
}

.content-title a {
  transition: all 0.2s;
  font-size: 95%;

  &:hover {
    color: #2ba1d1;
  }
}

.content-time {
  color: #858585;
  font-size: 85%;
  line-height: 2;
}
</style>
