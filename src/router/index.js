import Vue from 'vue'
import VueRouter from 'vue-router'
import { goToPosition } from '@/utils'
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
  scrollBehavior: (to, _from, savedPosition) => {
    let scrollTo = 0

    if (to.hash) {
      scrollTo = to.hash
    } else if (savedPosition) {
      // 按下 前进/后退 按钮时，记录的位置
      scrollTo = savedPosition.y
    }

    return goToPosition(scrollTo)
  }
})

export default router
