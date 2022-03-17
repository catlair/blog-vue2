<template>
  <ul :class="loading ? '' : 'category-wrapper'">
    <SheetSkeleton v-if="loading" class="list-item" type="list-item-two-line" />
    <template v-else>
      <router-link
        v-for="item of categories"
        :key="item.id"
        :to="`?name=` + item.name"
        v-slot="{ href, navigate, isActive, isExactActive }"
        custom
      >
        <li
          class="category-item"
          :class="[isActive && 'router-link-active', isExactActive && 'router-link-exact-active']"
        >
          <v-card>
            <a :href="href" @click="navigate">
              <span>{{ item.name }}</span>
              <span class="post-num" :style="{ backgroundColor: item.color || '#fff' }">
                {{ item.num }}
              </span>
            </a>
          </v-card>
        </li>
      </router-link>
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
      loading: true,
      categories: []
    }
  },
  created() {
    this.loading = true
    getCategories().then((res) => {
      if (!res) {
        return
      }
      this.categories = res
      const name = res[0].name
      this.$route.query.name === name ? void 0 : this.$router.replace({ query: { name } })
      this.loading = false
      this.$emit('update:loaded', true)
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
