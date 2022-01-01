<template>
  <ul :class="loading ? '' : 'tag-wrapper'">
    <SheetSkeleton v-if="loading" class="list-item" type="list-item-two-line" />
    <template v-else>
      <li class="tag-item" v-for="tag of tags" :key="tag._id">
        <v-card>
          <router-link :to="`?name=` + tag.name" :class="getRandomColorCls($vuetify.theme.dark)">
            {{ tag.name }}
          </router-link>
        </v-card>
      </li>
    </template>
  </ul>
</template>

<script>
import SheetSkeleton from '@/components/skeleton/SheetSkeleton.vue'
import { getTags } from '@/api/tag'
import { getRandomColorCls } from '@/utils/css'

export default {
  components: {
    SheetSkeleton
  },
  data() {
    return {
      loading: true,
      tags: []
    }
  },
  beforeCreate() {
    // beforeCreate 还没有初始化 data，所以无法获取 data 数据
    // 但是居然可以设置 不过 loading 默认应该设置为 true。以后还是在 created 请求吧
    this.loading = true
    getTags().then((res) => {
      if (res) {
        this.tags = res
        const name = res[0].name
        this.$route.query.name === name ? void 0 : this.$router.replace({ query: { name } })
        this.loading = false
        this.$emit('update:loaded', true)
      }
    })
  },
  methods: {
    getRandomColorCls() {
      // 使用暗色是因为在亮色的太亮，不能看清
      return getRandomColorCls(true)
    }
  }
}
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
