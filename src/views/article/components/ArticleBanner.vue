<template>
  <div class="banner" :style="''">
    <div class="article-info-container">
      <!-- 文章标题 -->
      <div class="article-title">{{ '文章标题' + $route.params.id }}</div>
      <div class="article-info">
        <div class="first-line">
          <!-- 发表时间 -->
          <span>
            <i class="iconfont">&#xe609;</i>
            发表于 {{ '2020-06-29' }}
          </span>
          <span class="separator">|</span>
          <!-- 发表时间 -->
          <span>
            <i class="iconfont">&#xe609;</i>
            更新于
            <template v-if="0">
              {{ '2020-06-29' }}
            </template>
            <template v-else>
              {{ '2020-06-29' }}
            </template>
          </span>
          <span class="separator">|</span>
          <!-- 文章分类 -->
          <span class="article-category">
            <i class="iconfont">&#xe609;</i>
            <router-link :to="'/categories/'">
              {{ 'vue' }}
            </router-link>
          </span>
        </div>
        <div class="second-line">
          <!-- 字数统计 -->
          <span>
            <i class="iconfont">&#xe609;</i>
            字数统计: {{ 123 }}
          </span>
          <span class="separator">|</span>
          <!-- 阅读时长 -->
          <span>
            <i class="iconfont">&#xe609;</i>
            阅读时长: {{ '2分钟' }}
          </span>
        </div>
        <div class="third-line">
          <span class="separator">|</span>
          <!-- 阅读量 -->
          <span> <i class="iconfont">&#xe609;</i> 阅读量: {{ 911 }} </span>
          <span class="separator">|</span>
          <!-- 评论量 -->
          <span>
            <i class="iconfont">&#xe609;</i>评论数:
            <template v-if="0">{{ 12 }}</template>
            <template v-else>0</template>
          </span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ArticleBanner'
}
</script>

<style lang="scss" scoped>
.banner {
  color: #eee !important;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
  }
}
.article-info {
  font-size: 14px;
  line-height: 1.9;
  display: inline-block;
  i {
    font-size: 14px;
  }
}
@media (min-width: $screen-sm) {
  .banner {
    height: 400px;
    .article-info span {
      font-size: 95%;
    }
    .article-info-container {
      position: absolute;
      bottom: 6.25rem;
      padding: 0 8%;
      width: 100%;
      text-align: center;
    }
    .second-line,
    .third-line {
      display: inline;
    }
    .article-title {
      font-size: 35px;
      margin: 20px 0 8px;
    }
  }
}
@media (max-width: $screen-sm) {
  .banner {
    height: 360px;
    .article-info span {
      font-size: 90%;
    }
    .separator:first-child {
      display: none;
    }
    .article-info-container {
      position: absolute;
      bottom: 1.3rem;
      padding: 0 5%;
      width: 100%;
      color: #eee;
      text-align: left;
    }
    .article-title {
      font-size: 1.5rem;
      margin-bottom: 0.4rem;
    }
  }
}
</style>
