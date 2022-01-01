<template>
  <v-card class="animated zoomIn article-item-card">
    <div class="article-item-cover">
      <router-link :to="'/articles/' + article._id">
        <!-- 缩略图 -->
        <SkeletonImg class="on-hover" width="100%" height="100%" :src="articleCover" />
      </router-link>
    </div>
    <div class="article-item-info">
      <!-- 文章标题 -->
      <div>
        <router-link :to="'/articles/' + article._id">
          {{ article.title }}
        </router-link>
      </div>
      <div style="margin-top: 0.375rem">
        <!-- 发表时间 -->
        <v-icon size="20">{{ mdiClockOutline }}</v-icon>
        {{ formatTime(article.createdAt) }}
        <!-- 文章分类 -->
        <router-link :to="'/categories?name=' + article.category" class="float-right">
          <v-icon>{{ mdiBookMarker }}</v-icon>
          {{ article.category }}
        </router-link>
      </div>
    </div>
    <!-- 分割线 -->
    <v-divider></v-divider>
    <!-- 文章标签 -->
    <div class="tag-wrapper">
      <router-link :to="'/tags?name=' + tag" class="tag-btn" v-for="tag of article.tags" :key="tag">
        {{ tag }}
      </router-link>
    </div>
  </v-card>
</template>

<script>
import SkeletonImg from '@/components/images/SkeletonImg.vue'
import { mdiBookMarker, mdiClockOutline } from '@mdi/js'
import { formatTime } from '@/utils'

export default {
  components: {
    SkeletonImg
  },
  props: ['article'],
  data() {
    return {
      mdiBookMarker,
      mdiClockOutline,
      articleCover: 'https://bing.ioliu.cn/photo/ChocoHillBohol_ZH-CN9297094265?force=download'
    }
  },
  methods: {
    formatTime
  }
}
</script>

<style lang="scss" scoped>
@media (min-width: $screen-sm) {
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
@media (max-width: $screen-sm) {
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
