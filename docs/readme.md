## 原生

### 设置导航时某些地方点击报错

```
 Uncaught TypeError: Cannot read properties of null (reading 'match')
```

发现出现问题的都是没有 `href` 的 `a` 标签

解决办法是：添加上 `href` 例如：`href="javascript:void 0;"`

## vuetify

### v-lazy 触发一个却加载全部

需要给每个 item 高度，如果没有高度就是同时触发的

## vue

### beforeRouteEnter 等组件路由守卫没有效果

我管它叫 `路由组件守卫钩子`，事实上只有路由中定义的组件才能使用

下面例子中的 User 组件

```js
{
    path: '/user',
    name: 'User',
    component: () => import(/* webpackChunkName: "user" */ '@/views/user/User.vue')
}
```
