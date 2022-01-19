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
        children: 'childrenComments',
        reply: 'reply',
        createAt: 'createAt'
      },
      user: {
        name: 'Up&Up',
        avatar:
          'https://p1-jj.byteimg.com/tos-cn-i-t2oaga2asx/gold-user-assets/2020/6/11/172a32c8945749df~tplv-t2oaga2asx-no-mark:100:100:100:100.awebp',
        author: true
      }
    }
  },
  created() {
    this.addData(1)
  },
  methods: {
    async submit(newCommetn, parent, add) {
      const res = await new Promise((resolve) => {
        setTimeout(() => {
          resolve({ newCommetn, parent })
        }, 300)
      })
      add(Object.assign(res.newCommetn, { _id: new Date().getTime() }))
      console.log('addComment: ', res)
    },
    async deleteComment(comment, parent) {
      const res = await new Promise((resolve) => {
        setTimeout(() => {
          resolve({ comment, parent })
        }, 300)
      })
      console.log('deleteComment: ', res)
    },
    addData(times) {
      setTimeout(() => {
        this.data = new Array(times)
          .fill([
            {
              _id: 1,
              content: '梦芸\n近况如何\n算来已有十月未见你\n甚是思念',
              visitor: {
                name: '我叫白云',
                avatar: ''
              },
              createAt: '2020.11.24',
              likes: 1,
              childrenComments: [
                {
                  _id: 2,
                  content:
                    '此刻我能闻见漫天火药味道\n我随军藏身长江边一暗无天日的地窖底\n埋首台灯下写这些字却不知把心绪给寄向何地',
                  visitor: {
                    name: 'NARUTO',
                    avatar: ''
                  },
                  createAt: '2020.11.25'
                },
                {
                  _id: 3,
                  content: '\n如磐石般坚毅',
                  visitor: {
                    name: '我叫黑土',
                    avatar: ''
                  },
                  createAt: '2020.11.25',
                  reply: {
                    name: 'NARUTO',
                    avatar: ''
                  }
                }
              ]
            },
            {
              _id: 4,
              content: '我想时光亦是用来磨的\n细细地磨慢慢地磨\n总能磨出些许墨香来',
              visitor: {
                name: '我叫黑土',
                avatar: ''
              },
              createAt: '2020.12.5',
              childrenComments: [
                {
                  _id: 5,
                  content: '即使我鼻子已不灵\n眼睛生出疾\n侥幸你的照片还能辨出依稀',
                  visitor: {
                    name: 'NARUTO',
                    avatar: ''
                  },
                  createAt: '2020.12.6'
                }
              ]
            }
          ])
          .flat(Infinity)
      }, 0)
    }
  }
}
</script>

<style scoped></style>
