## 过程中遇到的一些问题

### 1.设置导航时某些地方点击报错

```
 Uncaught TypeError: Cannot read properties of null (reading 'match')
```

发现出现问题的都是没有 `href` 的 `a` 标签

解决办法是：添加上 `href` 例如：`href="javascript:void 0;"`
