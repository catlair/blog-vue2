<template>
  <v-card class="home-art-card">
    <!-- 图片  -->
    <div class="art-cover">
      <router-link :to="`/articles/${article.id}`">
        <LazyImg src="https://s4.ax1x.com/2021/12/27/Trng1I.png" />
      </router-link>
    </div>
    <!-- 详细信息 -->
    <div class="ctx-wrap">
      <div class="art-title">
        <router-link :to="`/articles/${article.id}`">
          {{ article.title }}
        </router-link>
      </div>
      <div class="art-info">
        <!-- 是否置顶 -->
        <span v-if="article.isTop">
          <span style="color: #ff7242"> <i class="iconfont">&#xe890;</i> 置顶 </span>
          <span class="separator">|</span>
        </span>
        <!-- 发表时间 -->
        <v-icon size="14">{{ mdiCalendarMonthOutline }}</v-icon>
        <span> {{ formatTime(article.createdAt) }}</span>
        <span class="separator">|</span>
        <!-- 文章分类 -->
        <router-link :to="'/categories/'">
          <v-icon size="14">{{ mdiInboxFull }}</v-icon>
          <span style="margin-left: 2px">{{ article.category.name }}</span>
        </router-link>
        <span class="separator">|</span>
        <!-- 文章标签 -->
        <router-link
          style="display: inline-block"
          :to="'/tags/'"
          class="mr-1"
          v-for="tag of article.tags"
          :key="tag.name"
        >
          <v-icon size="14">{{ mdiTagMultiple }}</v-icon>
          <span style="margin-left: 2px">{{ tag.name }}</span>
        </router-link>
      </div>
      <div class="art-desc">
        <p>
          {{ article.content }}
        </p>
      </div>
    </div>
  </v-card>
</template>

<script>
import { mdiCalendarMonthOutline, mdiInboxFull, mdiTagMultiple } from '@mdi/js'
import LazyImg from '@/components/images/LazyImg.vue'
import { formatTime } from '@/utils'

export default {
  name: 'HomeArticleCardItem',
  components: {
    LazyImg
  },
  props: {
    article: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      mdiCalendarMonthOutline,
      mdiInboxFull,
      mdiTagMultiple
    }
  },
  methods: {
    formatTime
  }
}
</script>

<style lang="scss">
.home-art-card {
  .art-info {
    font-size: 95%;
    color: #858585;
    line-height: 2;
    margin: 0.375rem 0;

    a {
      font-size: 95%;
      color: #858585 !important;
    }
  }

  .ctx-wrap {
    font-size: 14px;
  }

  .v-icon {
    vertical-align: text-top;
  }

  .art-desc {
    text-indent: 2em;
    line-height: 2;
    /** webkit */
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    /** firefox */
  }
}

@media (min-width: $screen-sm) {
  .home-art-card {
    display: flex;
    align-items: center;
    margin-top: 1.2rem;
    height: 280px;
    width: 100%;

    .art-cover {
      overflow: hidden;
      height: 100%;
      width: 45%;
    }

    .ctx-wrap {
      padding: 0 2.5rem;
      width: 55%;

      .art-title {
        font-size: 1.5rem;
      }
    }
  }
}

@media (max-width: $screen-sm) {
  // 小屏图片下面显示文章信息
  .home-art-card {
    margin-top: 1rem;

    .art-cover {
      border-radius: 8px 8px 0 0 !important;
      height: 230px;
      width: 100%;
    }

    .ctx-wrap {
      padding: 1.25rem 1.25rem 1.875rem;

      .art-title {
        font-size: 1.2rem;
      }
    }
  }
}
</style>
