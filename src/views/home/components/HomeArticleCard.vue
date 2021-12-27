<template>
  <div>
    <v-card v-for="i of 10" :key="i" class="art-card">
      <!-- 图片  -->
      <div class="art-cover">
        <router-link :to="`/articles/${i}`">
          <LazyImg src="https://s4.ax1x.com/2021/12/27/Trng1I.png"> </LazyImg>
        </router-link>
      </div>
      <!-- 详细信息 -->
      <div class="ctx-wrap">
        <div class="art-title">
          <router-link :to="`/articles/${i}`"> {{ '这是文章标题' }} </router-link>
        </div>
        <div class="art-info">
          <!-- 是否置顶 -->
          <span v-if="i === 1">
            <span style="color: #ff7242"> <i class="iconfont">&#xe890;</i> 置顶 </span>
            <span class="separator">|</span>
          </span>
          <!-- 发表时间 -->
          <v-icon size="14">{{ mdiCalendarMonthOutline }}</v-icon>
          <span> {{ '2020-06-29' }}</span>
          <span class="separator">|</span>
          <!-- 文章分类 -->
          <router-link :to="'/categories/'">
            <v-icon size="14">{{ mdiInboxFull }}</v-icon>
            <span style="margin-left: 2px">{{ 'vue' }}</span>
          </router-link>
          <span class="separator">|</span>
          <!-- 文章标签 -->
          <router-link
            style="display: inline-block"
            :to="'/tags/'"
            class="mr-1"
            v-for="tag of ['vue', 'html']"
            :key="tag"
          >
            <v-icon size="14">{{ mdiTagMultiple }}</v-icon>
            <span style="margin-left: 2px">{{ tag }}</span>
          </router-link>
        </div>
        <div class="art-desc">
          <p>
            {{
              '这是文章描述Lorem ipsum dolor sit amet, consectetur adipisicing elit. Similique aliquid hic distinctio,tenetur facilis odit error qui optio laboriosam sunt. Ipsam, accusamus?'
            }}
          </p>
        </div>
      </div>
    </v-card>
  </div>
</template>

<script>
import { mdiCalendarMonthOutline, mdiInboxFull, mdiTagMultiple } from '@mdi/js'
import LazyImg from '@/components/images/LazyImg.vue'

export default {
  name: 'HomeArticleCard',
  components: {
    LazyImg
  },
  data: () => ({
    mdiCalendarMonthOutline,
    mdiInboxFull,
    mdiTagMultiple
  })
}
</script>

<style lang="scss" scoped>
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

@media (min-width: $screen-sm) {
  // 大屏图片交错显示
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

  .art-card {
    display: flex;
    align-items: center;
    margin-top: 1.2rem;
    height: 280px;
    width: 100%;

    // 图片交替显示
    &:nth-child(2n) {
      flex-direction: row-reverse;
    }
  }
}

@media (max-width: $screen-sm) {
  // 小屏图片下面显示文章信息
  .art-card {
    margin-top: 1rem;
  }

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
</style>
