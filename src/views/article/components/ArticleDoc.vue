<template>
  <v-card class="right-container" ref="wrap">
    <div class="right-title">
      <i class="iconfont iconhanbao" style="font-size: 16.8px"></i>
      <span style="margin-left: 10px">目录</span>
    </div>
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
