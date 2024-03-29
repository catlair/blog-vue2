<template>
  <div :class="`${className} comment-form`">
    <div class="avatar-box">
      <slot />
    </div>

    <div class="form-box">
      <div class="rich-input" :class="{ focus: focus || value }">
        <div class="grow-wrap" :data-replicated-value="value">
          <textarea
            ref="input"
            rows="1"
            :value="value"
            :placeholder="placeholder"
            @input="(e) => (value = e.target.value)"
            @focus="focus = true"
            @blur="handleBlur"
            @mousedown="closeEmojiSelector"
          />
        </div>
        <div v-show="imgSrc" ref="image-preview-box" class="image-preview-box">
          <div v-show="imgSrc" :style="`background-image: url(${imgSrc})`" class="image" />
          <div class="clean-btn" @mousedown.prevent="removeImg">
            <svg
              aria-hidden="true"
              width="15"
              height="15"
              viewBox="0 0 21 21"
              class="icon close-icon"
            >
              <g fill="none" fill-rule="evenodd" transform="translate(1 1)">
                <circle cx="9.5" cy="9.5" r="9.5" fill="#000" stroke="#FFF" opacity=".5" />
                <path
                  fill="#FFF"
                  d="M13.743 5.964L10.207 9.5l3.536 3.536-.707.707L9.5 10.207l-3.536 3.536-.707-.707L8.793 9.5 5.257 5.964l.707-.707L9.5 8.793l3.536-3.536z"
                />
              </g>
            </svg>
          </div>
        </div>
      </div>
      <div
        v-show="focus || value || imgSrc"
        class="option-box"
        @mousedown.prevent="closeEmojiSelector($refs.input.focus())"
      >
        <div class="emoji emoji-btn" @mousedown.prevent.stop="openEmojiSelector">
          <div class="emoji-box">
            <div class="icon" />
            <span>表情</span>
          </div>
          <EmojiSelector v-show="showEmojiSelector" @choose="(v) => (value += v)" />
        </div>

        <slot name="submitBtn">
          <button class="submit-btn" :disabled="!value && !imgSrc" @click.stop="handleSubmit">
            评论
          </button>
        </slot>
      </div>
    </div>
  </div>
</template>

<script>
import EmojiSelector from './EmojiSelector'
export default {
  name: 'CommentForm',
  components: { EmojiSelector },
  props: {
    placeholder: {
      type: String,
      default: '输入评论...'
    },
    id: {
      type: [String, Number],
      default: 'comment-root'
    },
    comment: {
      type: Object,
      default: () => {}
    },
    parent: {
      type: Object,
      default: () => {}
    }
  },
  data() {
    return {
      focus: false, // * 聚焦状态
      value: '', // * 输入框值
      imgSrc: '', // * 粘贴的图片src
      showEmojiSelector: false // * 表情选择框状态
    }
  },
  computed: {
    // 是否为顶部评论表单
    isRoot() {
      return this.id === 'comment-root'
    },
    // 是否为回复中的表单
    isSub() {
      return this.id.split('-').length === 3
    },
    className() {
      return this.isRoot ? 'comment-root' : this.isSub ? 'reply sub-reply' : 'reply'
    }
  },
  mounted() {
    const richInput = this.$refs.input
    !this.isRoot && richInput.focus()

    richInput.addEventListener('paste', this.handlePaste)
    this.$once('hook:beforeDestroy', () => richInput.removeEventListener('paste', this.handlePaste))
  },
  methods: {
    // * 点击图片上的删除按钮
    removeImg() {
      this.imgSrc = ''
      this.closeEmojiSelector()
    },
    // * textarea blur 事件
    handleBlur(e) {
      this.showEmojiSelector = false

      if (this.onUpload) {
        this.$nextTick(() => {
          this.onUpload = false
        })
        return
      }

      if (this.value || this.imgSrc) return

      this.focus = false

      if (!this.isRoot) {
        this.close()
      }
    },
    // * textarea paste 事件
    handlePaste(e) {
      const file = e.clipboardData.files[0]
      if (file) {
        // 只处理复制图片
        // this.beforeSetImg(file)
        e.preventDefault()
      }
    },
    // * 点击评论
    handleSubmit() {
      if (!this.value.trim() && !this.imgSrc) return
      const user = (this.comment && this.comment.user) || null

      const data = {
        id: this.id,
        content: this.value,
        imgSrc: this.imgSrc,
        reply: (this.isSub && JSON.parse(JSON.stringify(user))) || null,
        createAt: new Date().getTime(),
        likes: 0,
        callback: () => {
          this.isRoot ? this.reset() : this.close()
        }
      }

      if (!this.isSub) {
        data.children = []
      }

      this.$emit('form-submit', { newComment: data, parent: this.parent })
    },
    // * 重置组件状态
    reset() {
      this.value = ''
      this.imgSrc = ''
      this.$refs.input.blur()
    },
    // * 销毁组件
    close() {
      this.$emit('form-delete', this.id)
    },
    // * 选择表情
    openEmojiSelector() {
      this.showEmojiSelector = !this.showEmojiSelector

      if (document.activeElement === document.body) {
        this.$refs.input.focus()
      }
      if (this.showEmojiSelector) {
        // 移动光标到末尾
        const input = this.$refs.input
        input.selectionStart = input.selectionEnd = this.value.length
      }
    },
    // * 关闭选择表情组件
    closeEmojiSelector() {
      if (this.showEmojiSelector) {
        this.showEmojiSelector = false
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.comment-form {
  max-width: 100%;
  padding: 0.8rem 1.0664rem;
  display: flex;
  background-color: #fafbfc;
  border-radius: 3px;

  .avatar-box {
    flex: 0 0 auto;

    img {
      margin: 0 0.8rem 0 0;
    }
  }

  .form-box {
    flex: 1 1 auto;

    .rich-input {
      border-radius: 3px;
      border: 1px solid #f1f1f1;
      background-color: #fff;
      overflow: hidden;

      &.focus {
        border-color: #007fff;
      }

      .grow-wrap {
        display: grid;

        &::after {
          content: attr(data-replicated-value) ' ';
          white-space: pre-wrap;
          visibility: hidden;
        }

        textarea {
          outline: none;
          border: none;
          resize: none;
          touch-action: none;
          overflow: hidden;

          &::placeholder {
            color: #c2c2c2;
          }
        }

        & > textarea,
        &::after {
          font: inherit;
          grid-area: 1 / 1 / 2 / 2;
          padding: 0.48rem 0.8rem;
          min-height: 1.04rem;
          line-height: 1.7;
          font-size: 0.8664rem;
          color: #17181a;
          box-sizing: border-box;
          word-break: break-all;
        }
      }

      .image-preview-box {
        display: inline-block;
        position: relative;
        margin: 0 0.8rem 0.4rem;

        .image {
          width: 5.3336rem;
          height: 5.3336rem;
          background-repeat: no-repeat;
          background-size: cover;
          background-position: 50%;
        }

        .clean-btn {
          position: absolute;
          top: 0.15rem;
          right: 0.2rem;
          cursor: pointer;
        }
      }
    }

    .option-box {
      margin-top: 0.52rem;
      display: flex;
      align-items: center;
      color: #027fff;
      font-size: 0.8664rem;

      .emoji {
        position: relative;

        .emoji-box {
          display: flex;
          align-items: center;
          cursor: pointer;

          .icon {
            width: 1.2rem;
            height: 1.2rem;
            background-repeat: no-repeat;
            background-size: cover;
            background-image: url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMiIgaGVpZ2h0PSIyMiIgdmlld0JveD0iMCAwIDIyIDIyIj4KICAgIDxnIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+CiAgICAgICAgPHBhdGggZD0iTTEgMWgyMHYyMEgxeiIvPgogICAgICAgIDxwYXRoIGZpbGw9IiMwMjdGRkYiIGZpbGwtcnVsZT0ibm9uemVybyIgZD0iTTExIDE4LjQzOGE3LjQzOCA3LjQzOCAwIDEgMCAwLTE0Ljg3NiA3LjQzOCA3LjQzOCAwIDAgMCAwIDE0Ljg3NnptMCAxLjA2MmE4LjUgOC41IDAgMSAxIDAtMTcgOC41IDguNSAwIDAgMSAwIDE3ek03LjgxMiA5LjkzN2ExLjA2MiAxLjA2MiAwIDEgMCAwLTIuMTI0IDEuMDYyIDEuMDYyIDAgMCAwIDAgMi4xMjV6bTYuMzc1IDBhMS4wNjMgMS4wNjMgMCAxIDAgMC0yLjEyNSAxLjA2MyAxLjA2MyAwIDAgMCAwIDIuMTI1ek0xMSAxNi4yMzJhMy4yNyAzLjI3IDAgMCAwIDMuMjctMy4yN0g3LjczYTMuMjcgMy4yNyAwIDAgMCAzLjI3IDMuMjd6Ii8+CiAgICA8L2c+Cjwvc3ZnPgo=');
          }

          &:hover {
            opacity: 0.8;
          }
        }
      }

      .image-btn {
        flex: 0 0 auto;
        display: flex;
        align-items: center;
        margin-left: 20px;
        cursor: pointer;

        .icon {
          margin-right: 0.2664rem;
          width: 1.2rem;
          height: 1.2rem;
        }

        &:hover {
          opacity: 0.8;
        }
      }

      .upload-file {
        display: none;
      }

      .submit-btn {
        flex: 0 0 auto;
        margin-left: auto;
        padding: 0.4rem 1.04rem;
        font-size: 1rem;
        color: #fff;
        background-color: #027fff;
        border-radius: 2px;
        outline: none;
        border: none;
        cursor: pointer;
        transition: all 0.3s;

        &:hover {
          background-color: #0371df;
        }

        &:disabled {
          opacity: 0.4;
          cursor: default;
        }
      }
    }
  }

  &.reply {
    margin-top: 0.8664rem;
    padding: 0.8rem;

    &.sub-reply {
      background-color: #fff;
      border: 1px solid #f1f1f2;
    }

    .avatar-box {
      display: none;
    }
  }
}

@media (max-width: $screen-sm) {
  .emoji {
    display: none !important;
  }
}
</style>
