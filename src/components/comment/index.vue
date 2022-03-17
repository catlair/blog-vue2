<template>
  <JuejinComment
    v-model="data"
    :user="user"
    :before-submit="submit"
    :before-delete="deleteComment"
    :props="props"
  />
</template>

<script>
import JuejinComment from '@/components/vue-comment-component/Comment'
import { createComment, getCommentList } from '@/api/comment'

export default {
  name: 'comment',
  components: {
    JuejinComment
  },
  data() {
    return {
      data: [],
      props: {
        id: '_id',
        content: 'content',
        children: 'children',
        reply: 'reply',
        createAt: 'createdAt'
      },
      user: {
        nickname: 'Up&Up',
        avatar:
          'https://p1-jj.byteimg.com/tos-cn-i-t2oaga2asx/gold-user-assets/2020/6/11/172a32c8945749df~tplv-t2oaga2asx-no-mark:100:100:100:100.awebp',
        author: true
      }
    }
  },
  created() {
    this.addData()
  },
  methods: {
    async submit(newComment, parent, add) {
      const res = await createComment({
        content: newComment.content,
        pid: parent ? parent.id : null,
        type: newComment.type,
        aid: this.$route.params.id,
        rid: newComment.reply ? newComment.reply._id : null
      })
      console.log(parent)
      // const res = { newComment, parent, _id: new Date().getTime() }
      add(Object.assign(newComment, { _id: res._id }))
    },
    async deleteComment(comment, parent) {
      const res = await new Promise((resolve) => {
        setTimeout(() => {
          resolve({ comment, parent })
        }, 300)
      })
      console.log('deleteComment: ', res)
    },
    addData() {
      getCommentList(this.$route.params.id).then((res) => {
        this.data = res
      })
    }
  }
}
</script>

<style scoped></style>
