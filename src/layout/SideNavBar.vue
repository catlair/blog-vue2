<template>
  <v-navigation-drawer
    app
    width="250"
    style="height: var(--vh-full)"
    v-resize="onResize"
    v-model="drawer"
    right
    overlay-opacity="0.8"
  >
    <!-- 博主介绍 -->
    <div class="blogger-info">
      <v-avatar size="110" color="red">
        <!--        <img alt="头像" :src="user.avatar" />-->
        <span class="white--text text-h5">CJ</span>
      </v-avatar>
    </div>
    <!-- 博客信息 -->
    <div class="blog-info-wrapper">
      <div class="blog-info-data">
        <router-link to="/archives">
          <div>文章</div>
          <div>
            {{ '123' }}
          </div>
        </router-link>
      </div>
      <div class="blog-info-data">
        <router-link to="/categories">
          <div>分类</div>
          <div>
            {{ '10' }}
          </div>
        </router-link>
      </div>
      <div class="blog-info-data">
        <router-link to="/tags">
          <div>标签</div>
          <div>
            {{ '20' }}
          </div>
        </router-link>
      </div>
    </div>
    <!-- 分隔线 -->
    <hr class="hr" />
    <!-- 页面导航 -->
    <div class="menu-container">
      <div class="menu-item">
        <router-link to="/"> <i class="iconfont">&#xe611;</i> 首页 </router-link>
      </div>
      <div class="menu-item">
        <router-link to="/archives"> <i class="iconfont">&#xe620;</i> 归档 </router-link>
      </div>
      <div class="menu-item">
        <router-link to="/albums"> <i class="iconfont">&#xe607;</i> 相册 </router-link>
      </div>
      <div class="menu-item">
        <router-link to="/categories"> <i class="iconfont">&#xe60e;</i> 分类 </router-link>
      </div>
      <div class="menu-item">
        <router-link to="/tags"> <i class="iconfont">&#xe61d;</i> 标签 </router-link>
      </div>
      <div class="menu-item">
        <router-link to="/links"> <i class="iconfont">&#xe60d;</i> 友链 </router-link>
      </div>
      <div class="menu-item">
        <router-link to="/about"> <i class="iconfont">&#xe65d;</i> 关于 </router-link>
      </div>
      <div class="menu-item">
        <router-link to="/message"> <i class="iconfont">&#xe619;</i> 留言 </router-link>
      </div>
      <div class="menu-item" v-if="!user.id">
        <a @click="login" href="javascript:void 0;"><i class="iconfont">&#xe617;</i> 登录 </a>
      </div>
      <template v-else>
        <div class="menu-item">
          <router-link to="/user"> <i class="iconfont">&#xe617;</i> 个人中心 </router-link>
        </div>
        <div class="menu-item">
          <a @click="logout" href="javascript: void 0;"><i class="iconfont">&#xe624;</i> 退出</a>
        </div>
      </template>
    </div>
  </v-navigation-drawer>
</template>

<script>
import { SET_APP_PROP, SET_SIDE_DRAWER, USER_MODULE } from '@/store/type'

export default {
  name: 'SideNavBar',
  computed: {
    drawer: {
      set(value) {
        this.$store.commit(SET_SIDE_DRAWER, value)
      },
      get() {
        return this.$store.state.mbSideDrawer
      }
    },
    user: {
      get() {
        return this.$store.state.user.info
      }
    }
  },
  methods: {
    onResize() {
      // 其实应该没有人一直拖动窗口，但是还是要检测一下
      if (window.innerWidth > 960) {
        this.drawer && this.$store.commit(SET_SIDE_DRAWER, false)
      }
    },
    login() {
      this.$store.commit(SET_APP_PROP, { loginDialog: true })
    },
    logout() {
      this.$store.dispatch(USER_MODULE.LOGOUT)
    }
  }
}
</script>

<style lang="scss" scoped>
.blogger-info {
  padding: 26px 30px 0;
  text-align: center;

  .v-avatar {
    margin-bottom: 0.5rem;
  }
}

.blog-info-wrapper {
  display: flex;
  padding: 10px;
  text-align: center;

  .blog-info-data {
    flex: 1;

    a {
      div:first-child {
        font-size: 0.875rem;
        margin: 6px 0;
      }

      div:last-child {
        font-size: 1.125rem;
      }
    }
  }
}

.hr {
  margin: 20px 0;
  border: 2px dashed #d2ebfd;
}

.menu-container {
  display: flex;
  flex-direction: column;
  align-items: center;

  .menu-item {
    width: 100%;
    margin: 0 0 1rem;
    padding: 0 20%;

    i {
      margin-right: 2.5rem;
    }
  }
}
</style>
