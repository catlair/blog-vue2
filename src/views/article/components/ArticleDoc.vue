<template>
  <v-card v-if="tocText.value" class="right-container" ref="wrap">
    <aside class="right-title">
      <i class="iconfont iconhanbao" style="font-size: 16.8px"></i>
      <span style="margin-left: 10px">目录</span>
    </aside>
    <div id="toc" v-html="tocText.value"></div>
  </v-card>
</template>

<script>
export default {
  name: 'ArticleDoc',
  inject: ['tocText']
}
</script>

<style lang="scss" scoped></style>
