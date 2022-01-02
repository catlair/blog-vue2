<template>
  <div class="author-wrap">
    <v-avatar :size="size">
      <img class="avatar" :src="src" />
    </v-avatar>
    <div class="name">
      {{ avatarName }}
    </div>
    <div class="intro">
      {{ intro }}
    </div>
  </div>
</template>

<script>
export default {
  props: {
    size: {
      type: Number,
      default: 110
    },
    src: {
      type: String
    },
    avatarName: {
      type: String,
      default: '神秘用户'
    },
    intro: {
      type: String,
      default: '这个人很神秘'
    }
  }
}
</script>

<style lang="scss" scoped>
.author-wrap {
  line-height: 2;
  padding: 1.25rem 1.5rem;

  .avatar:hover {
    // 来自掘金的头像动画
    transform: rotate(666turn);
    transition: all 59s cubic-bezier(0.34, 0, 0.84, 1) 0.7s;
  }

  .name {
    font-size: 1.375rem;
  }

  .intro {
    font-size: 0.875rem;
  }
}
</style>
