<template>
  <ul class="category-wrapper">
    <li class="category-item" v-for="i of 13" :key="i">
      <v-card>
        <router-link :to="`?id=` + i">
          <span>分类项{{ i }}</span>
          <span class="post-num">{{ i }}</span>
        </router-link>
      </v-card>
    </li>
  </ul>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.category-wrapper {
  display: flex;
  flex-wrap: wrap;

  .category-item {
    vertical-align: middle;
    margin: 4px 8px 10px;
    border-radius: 0.25rem;
    font-size: 13px;
    transition: all 0.5s;

    a {
      display: inline-flex;
      box-sizing: border-box;
      width: 100%;
      height: 100%;
      padding: 8px 14px;
      justify-content: space-between;
      align-items: center;
      color: #666;
    }

    .post-num {
      margin-left: 4px;
      background-color: rgb(103, 204, 134);
      width: 1.2rem;
      height: 1.2rem;
      text-align: center;
      line-height: 1.2rem;
      border-radius: 0.25rem;
      font-size: 0.7rem;
      color: #fff;
    }
  }
}
</style>
