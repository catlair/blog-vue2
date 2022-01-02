<template>
  <v-col md="3" cols="12" class="d-md-block d-none">
    <div class="side-wrap">
      <v-card class="side-card zoom-in animated mt-5">
        <!-- 头像 -->
        <AuthorInfo
          src="https://portrait.gitee.com/uploads/avatars/user/1713/5141565_catlair_1615099538.png"
        />
        <!-- 文章信息 -->
        <div class="art-warp">
          <div class="art-item" v-for="i of 3" :key="i">
            <router-link to="/archives">
              <div style="font-size: 0.875rem">{{ '选项' + i }}</div>
              <div style="font-size: 1.25rem">
                {{ 12 }}
              </div>
            </router-link>
          </div>
        </div>
        <!-- 书签 -->
        <a class="bookmark-wrap" href="javascript:;" @click="bookmark">
          <v-icon color="#fff" size="18" class="mr-1">{{ mdiBookmark }}</v-icon>
          加入书签
        </a>
        <!-- 外链 -->
        <div class="link-wrap">
          <a
            class="mr-5 iconfont"
            v-for="link of links"
            target="_blank"
            :title="link.name"
            :href="link.url"
            :key="link.name"
          >
            <i class="iconfont" style="font-size: 24px" v-html="link.icon"></i>
          </a>
        </div>
      </v-card>
      <v-card class="side-card zoom-in animated mt-5">
        <div class="side-info">
          <div>
            <v-icon size="18">{{ mdiBell }}</v-icon>
            公告
          </div>
          <p class="bell-info">
            {{ '啊斯蒂芬库里刚看见高考加分等会跟你说刚好加快速度更健康' }}
          </p>
        </div>
      </v-card>
      <v-card class="side-card zoom-in animated mt-5">
        <div class="side-info">
          <div>
            <v-icon size="18">{{ mdiChartLine }}</v-icon>
            网站资讯
          </div>
          <div class="content">
            <p class="ctx-item">
              运行时间:<span class="float-right">{{ '99天8时7分6秒' }}</span>
            </p>
            <p class="ctx-item">
              总访问量:<span class="float-right">
                {{ 10086 }}
              </span>
            </p>
          </div>
        </div>
      </v-card>
    </div>
  </v-col>
</template>

<script>
import AuthorInfo from '@/components/user/AuthorInfo.vue'
import { mdiBookmark, mdiBell, mdiChartLine } from '@mdi/js'

export default {
  name: 'HomeSide',
  components: {
    AuthorInfo
  },
  data() {
    return {
      mdiBookmark,
      mdiBell,
      mdiChartLine,
      links: [
        {
          name: 'GitHub',
          url: 'https://github.com/catlair',
          icon: '&#xeaf6;'
        },
        {
          name: 'Gitee',
          url: 'https://gitee.com/catlair',
          icon: '&#xe64f;'
        },
        {
          name: 'bilibili',
          url: 'https://space.bilibili.com/357123798/',
          icon: '&#xe600;'
        }
      ]
    }
  },
  methods: {
    bookmark() {
      this.$message({
        message: '点击加入书签',
        type: 'success'
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.side-wrap {
  position: sticky;
  top: 10px;
  text-align: center;

  .side-card {
    line-height: 2;
    padding: 1.25rem 1.5rem;
  }

  .art-warp {
    display: flex;
    padding: 0.875rem 0;

    .art-item {
      flex: 1;
    }
  }

  .bookmark-wrap {
    position: relative;
    z-index: 1;
    font-size: 14px;
    display: block;
    background-color: #49b1f5;
    color: #fff !important;
    height: 32px;
    line-height: 32px;
    transition: color 1s;

    &::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      z-index: -1;
      background-color: #ff7242;
      transition: transform 0.5s ease-out;
      transform: scaleX(0);
      transform-origin: 0 50%;
    }

    &:hover::before {
      transition-timing-function: cubic-bezier(0.45, 1.64, 0.47, 0.66);
      transform: scaleX(1);
    }
  }

  .link-wrap {
    line-height: 40px;
    margin: 6px 0 -6px;

    a {
      font-size: 1.5rem;
    }
  }

  .side-info {
    text-align: initial;

    p {
      margin: 0;
    }

    .bell-info {
      text-indent: 2em;
      font-size: 0.875rem;
    }

    .content {
      padding: 0.25rem;
      font-size: 0.875rem;
    }

    .ctx-item {
      padding: 4px 0 0;
    }
  }
}
</style>
