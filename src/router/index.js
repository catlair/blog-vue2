import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/home/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/about/About.vue')
  },
  {
    path: '/links',
    name: 'Link',
    component: () => import(/* webpackChunkName: "links" */ '../views/link/Link.vue')
  },
  {
    path: '/message',
    name: 'Message',
    component: () => import(/* webpackChunkName: "message" */ '../views/message/Message.vue')
  },
  {
    path: '/albums',
    name: 'Album',
    component: () => import(/* webpackChunkName: "albums" */ '../views/album/Album.vue')
  },
  {
    path: '/archives',
    name: 'Archive',
    component: () => import(/* webpackChunkName: "archives" */ '../views/archive/Archive.vue')
  },
  {
    path: '/categories',
    name: 'Category',
    component: () => import(/* webpackChunkName: "categories" */ '../views/category/Category.vue')
  },
  {
    path: '/tags',
    name: 'Tag',
    component: () => import(/* webpackChunkName: "tags" */ '../views/tag/Tag.vue')
  },
  {
    path: '/user',
    name: 'User',
    component: () => import(/* webpackChunkName: "user" */ '../views/user/User.vue')
  },
  {
    path: '/articles/:id',
    name: 'Article',
    component: () => import(/* webpackChunkName: "article" */ '../views/article/Article.vue')
  },
  {
    path: '*',
    name: 'NotFound',
    component: () => import(/* webpackChunkName: "notfound" */ '../views/notfound/NotFound.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
  scrollBehavior(_to, _from, savedPosition) {
    // return 期望滚动到哪个的位置
    // 按下 后退/前进 按钮时，就会像浏览器的原生表现那样
    if (savedPosition) {
      return savedPosition
    }
    // 顶部
    return { x: 0, y: 0 }
  }
})

export default router
