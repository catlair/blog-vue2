<template>
  <div>
    <v-card v-for="i of 10" :key="i" class="art-card">
      <!-- 图片  -->
      <div class="art-cover">
        <router-link :to="`/articles/${i}`">
          <v-img
            src="https://www.static.talkxj.com/articles/771941739cbc70fbe40e10cf441e02e5.jpg"
            lazy-src="https://picsum.photos/id/11/100/60"
            width="100%"
            height="100%"
          >
          </v-img>
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
            <span style="color: #ff7242"> <i class="iconfont">顶</i> 置顶 </span>
            <span class="separator">|</span>
          </span>
          <!-- 发表时间 -->
          <v-icon size="14">mdi-calendar-month-outline</v-icon>
          {{ '2020-06-29' }}
          <span class="separator">|</span>
          <!-- 文章分类 -->
          <router-link :to="'/categories/'">
            <v-icon size="14">mdi-inbox-full</v-icon>
            {{ 'vue' }}
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
            <v-icon size="14">mdi-tag-multiple</v-icon>{{ tag }}
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
export default {
  name: 'HomeArticleCard'
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

@media (min-width: 760px) {
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

@media (max-width: 760px) {
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
