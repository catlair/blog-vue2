<template>
  <ul :class="loading ? '' : 'category-wrapper'">
    <SheetSkeleton v-if="loading" class="list-item" type="list-item-two-line" />
    <template v-else>
      <li class="category-item" v-for="item of categories" :key="item._id">
        <v-card>
          <router-link :to="`?name=` + item.name">
            <span>{{ item.name }}</span>
            <span class="post-num" :style="{ backgroundColor: item.color || '#fff' }">
              {{ item.num }}
            </span>
          </router-link>
        </v-card>
      </li>
    </template>
  </ul>
</template>

<script>
import SheetSkeleton from '@/components/skeleton/SheetSkeleton.vue'
import { getCategories } from '@/api/category'

export default {
  name: 'CategoryList',
  components: {
    SheetSkeleton
  },
  data() {
    return {
      loading: false,
      categories: []
    }
  },
  created() {
    this.loading = true
    getCategories().then((res) => {
      if (res) {
        this.categories = res
        this.loading = false
      }
    })
  }
}
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
