<template>
  <v-card class="animated zoomIn article-item-card">
    <div class="article-item-cover">
      <router-link :to="'/articles/' + article">
        <!-- 缩略图 -->
        <v-img class="on-hover" width="100%" height="100%" :src="articleCover" />
      </router-link>
    </div>
    <div class="article-item-info">
      <!-- 文章标题 -->
      <div>
        <router-link :to="'/articles/' + article">
          {{ '文章标题' + article }}
        </router-link>
      </div>
      <div style="margin-top: 0.375rem">
        <!-- 发表时间 -->
        <v-icon size="20">mdi-clock-outline</v-icon>
        {{ '2016-01-12' }}
        <!-- 文章分类 -->
        <router-link :to="'/categories/' + article" class="float-right">
          <v-icon>mdi-bookmark</v-icon>{{ '分类项' + article }}
        </router-link>
      </div>
    </div>
    <!-- 分割线 -->
    <v-divider></v-divider>
    <!-- 文章标签 -->
    <div class="tag-wrapper">
      <router-link :to="'/tags/' + article" class="tag-btn" v-for="tag of 2" :key="tag">
        {{ '标签' + tag }}
      </router-link>
    </div>
  </v-card>
</template>

<script>
export default {
  props: ['article'],
  data() {
    return {
      articleCover: 'https://bing.ioliu.cn/photo/ChocoHillBohol_ZH-CN9297094265?force=download'
    }
  }
}
</script>

<style lang="scss" scoped>
@media (min-width: 890px) {
  .article-item-card:hover {
    transition: all 0.3s;
    box-shadow: 0 4px 12px 12px rgba(7, 17, 27, 0.15);
  }
  .article-item-card:not(:hover) {
    transition: all 0.3s;
  }
  .article-item-card:hover .on-hover {
    transition: all 0.6s;
    transform: scale(1.1);
  }
  .article-item-card:not(:hover) .on-hover {
    transition: all 0.6s;
  }
  .article-item-info {
    line-height: 1.7;
    padding: 15px 15px 12px 18px;
    font-size: 15px;
  }
}
@media (max-width: 890px) {
  .article-item-info {
    line-height: 1.7;
    padding: 15px 15px 12px 18px;
  }
}
.article-item-card {
  border-radius: 8px !important;
  box-shadow: 0 4px 8px 6px rgba(7, 17, 27, 0.06);
}
.article-item-card a {
  transition: all 0.3s;
}
.article-item-cover {
  height: 220px;
  overflow: hidden;
}
.article-item-card a:hover {
  color: #8e8cd8;
}
.tag-wrapper {
  padding: 10px 15px 10px 18px;
}
.tag-wrapper a {
  color: #fff !important;
}
.tag-btn {
  display: inline-block;
  font-size: 0.725rem;
  line-height: 22px;
  height: 22px;
  border-radius: 10px;
  padding: 0 12px !important;
  background: linear-gradient(to right, #bf4643 0%, #6c9d8f 100%);
  opacity: 0.6;
  margin-right: 0.5rem;
}
</style>
