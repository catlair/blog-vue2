<template>
  <ul class="tag-wrapper">
    <li class="tag-item" v-for="i of 13" :key="i">
      <v-card>
        <router-link :to="`?id=` + i"> 分类项{{ i }} </router-link>
      </v-card>
    </li>
  </ul>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.tag-wrapper {
  display: flex;
  flex-wrap: wrap;

  .tag-item {
    margin: 4px 4px 10px;

    a {
      vertical-align: middle;
      padding: 4px 8px;
      background-color: rgb(248, 178, 106);
      color: #fff;
      display: inline-block;
      cursor: pointer;
      border-radius: 0.25rem;
      line-height: 13px;
      font-size: 13px;
      transition: all 0.5s;

      &:hover {
        transform: scale(1.04);
      }
    }
  }
}
</style>
