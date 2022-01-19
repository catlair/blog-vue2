<template>
  <v-app-bar :class="navClass" app hide-on-scroll flat height="60">
    <!-- 电脑端导航栏 -->
    <div class="d-md-block d-none nav-pc-container">
      <div class="float-left blog-title">
        <router-link to="/">
          {{ blogInfo.config.author }}
        </router-link>
      </div>
      <div class="float-right nav-title">
        <div class="menus-item">
          <a class="menu-btn" @click="search" href="javascript:void 0;">
            <i class="iconfont">&#xe61e;</i> 搜索
          </a>
        </div>
        <div class="menus-item">
          <router-link class="menu-btn" to="/"> <i class="iconfont">&#xe611;</i> 首页 </router-link>
        </div>
        <div class="menus-item">
          <a class="menu-btn" href="javascript:void 0;">
            <i class="iconfont">&#xe8af;</i> 发现 <i class="iconfont">&#xe623;</i>
          </a>
          <ul class="menus-submenu">
            <li>
              <router-link to="/archives"> <i class="iconfont">&#xe620;</i> 归档 </router-link>
            </li>
            <li>
              <router-link to="/categories"> <i class="iconfont">&#xe60e;</i> 分类 </router-link>
            </li>
            <li>
              <router-link to="/tags"> <i class="iconfont">&#xe61d;</i> 标签 </router-link>
            </li>
          </ul>
        </div>
        <div class="menus-item">
          <a class="menu-btn" href="javascript:void 0;">
            <i class="iconfont">&#xe614;</i> 娱乐
            <i class="iconfont">&#xe623;</i>
          </a>
          <ul class="menus-submenu">
            <li>
              <router-link to="/albums"> <i class="iconfont">&#xe607;</i> 相册 </router-link>
            </li>
          </ul>
        </div>
        <div class="menus-item">
          <router-link class="menu-btn" to="/links">
            <i class="iconfont">&#xe60d;</i> 友链
          </router-link>
        </div>
        <div class="menus-item">
          <router-link class="menu-btn" to="/about">
            <i class="iconfont">&#xe65d;</i> 关于
          </router-link>
        </div>
        <div class="menus-item">
          <router-link class="menu-btn" to="/message">
            <i class="iconfont">&#xe619;</i> 留言
          </router-link>
        </div>
        <div class="menus-item">
          <a class="menu-btn" v-if="!user.id" @click="login" href="javascript:void 0;">
            <i class="iconfont">&#xe617;</i> 登录
          </a>
          <template v-else>
            <v-img class="user-avatar" alt="avatar" :src="user.avatar" height="30" width="30">
              <template v-slot:placeholder>
                <span class="blue--text text-h5">我</span>
              </template>
            </v-img>
            <ul class="menus-submenu">
              <li>
                <router-link to="/user"> <i class="iconfont">&#xe617;</i> 个人中心 </router-link>
              </li>
              <li>
                <a @click="logout" href="javascript:void 0;"
                  ><i class="iconfont">&#xe624;</i> 退出</a
                >
              </li>
            </ul>
          </template>
        </div>
      </div>
    </div>
    <!-- 移动端导航栏 -->
    <div class="d-md-none nav-mobile-container">
      <div class="title-mb">
        <router-link to="/">
          {{ blogInfo.config.author }}
        </router-link>
      </div>
      <div class="nav-mb">
        <a @click="search" href="javascript:void 0;">
          <i class="iconfont">&#xe61e;</i>
        </a>
        <a @click="drawer" href="javascript:void 0;">
          <i class="iconfont">&#xe609;</i>
        </a>
      </div>
    </div>
  </v-app-bar>
</template>

<script>
import { SET_APP_PROP, TOGGLE_SIDE_DRAWER, USER_MODULE } from '@/store/type'

export default {
  name: 'TopNavBar',
  data() {
    return {
      navClass: '',
      blogInfo: {
        config: {
          author: '测试用户',
          avatar: ''
        }
      }
    }
  },
  computed: {
    user() {
      return this.$store.state.user.info
    }
  },
  methods: {
    // handleScroll() {
    //   this.scrollTop =
    //     window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
    //   this.navClass = this.scrollTop > 60 ? 'nav-fixed' : 'nav'
    // },
    search() {
      this.$notify({
        title: '点击了搜索框',
        message: '点击了搜索框',
        position: 'bottom-left'
      })
    },
    drawer() {
      this.$store.commit(TOGGLE_SIDE_DRAWER, true)
    },
    login() {
      this.$store.commit(SET_APP_PROP, { loginDialog: true })
    },
    logout() {
      this.$store.dispatch(USER_MODULE.LOGOUT)
    }
  },
  mounted() {
    // window.addEventListener('scroll', this.handleScroll)
  }
}
</script>

<style lang="scss" scoped>
.blog-title a {
  font-size: 18px;
  font-weight: bold;
}

.nav {
  background: rgba(0, 0, 0, 0) !important;

  a {
    color: #eee !important;
  }

  .menu-btn {
    text-shadow: 0.05rem 0.05rem 0.1rem rgba(0, 0, 0, 0.3);
  }

  .blog-title a {
    text-shadow: 0.1rem 0.1rem 0.2rem rgba(0, 0, 0, 0.15);
  }
}

.nav-fixed {
  .menus-item a,
  .blog-title a {
    text-shadow: none;
  }

  .menu-btn:hover {
    color: #49b1f5 !important;
  }
}

.menu-btn:hover:after {
  width: 100%;
}

.theme--light {
  &.nav-fixed {
    background: rgba(255, 255, 255, 0.8) !important;
    box-shadow: 0 5px 6px -5px rgba(133, 133, 133, 0.6);

    a {
      color: #4c4948 !important;
    }
  }
}

.theme--dark {
  &.nav-fixed {
    background: rgba(18, 18, 18, 0.8) !important;

    a {
      color: rgba(255, 255, 255, 0.8) !important;
    }
  }
}

.nav-pc-container {
  font-size: 14px;
  width: 100%;
  height: 100%;
}

.nav-mobile-container {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;

  .title-mb {
    font-size: 18px;
    font-weight: bold;
  }

  .nav-mb {
    i {
      margin: 0 8px;
      font-size: 20px;
    }
  }
}

.blog-title,
.nav-title {
  display: flex;
  align-items: center;
  height: 100%;
}

.menus-item {
  position: relative;
  display: inline-block;
  margin: 0 0 0 0.875rem;

  .menus-submenu {
    position: absolute;
    display: none;
    right: 0;
    padding: 0;
    width: max-content;
    margin-top: 8px;
    box-shadow: 0 5px 20px -4px rgba(0, 0, 0, 0.5);
    background-color: #fff;
    animation: submenu 0.3s 0.1s ease both;

    &:before {
      position: absolute;
      top: -8px;
      left: 0;
      width: 100%;
      height: 20px;
      content: '';
    }

    a {
      line-height: 2;
      color: #4c4948 !important;
      text-shadow: none;
      display: block;
      padding: 6px 14px;

      &:hover {
        background: #4ab1f4;
      }
    }
  }

  &:hover .menus-submenu {
    display: block;
  }

  a {
    transition: all 0.2s;

    &:after {
      position: absolute;
      bottom: -5px;
      left: 0;
      z-index: -1;
      width: 0;
      height: 3px;
      background-color: #80c8f8;
      content: '';
      transition: all 0.3s ease-in-out;
    }
  }
}

.user-avatar {
  cursor: pointer;
  border-radius: 50%;
}

@keyframes submenu {
  0% {
    opacity: 0;
    filter: alpha(opacity=0);
    transform: translateY(10px);
  }

  100% {
    opacity: 1;
    filter: none;
    transform: translateY(0);
  }
}
</style>
