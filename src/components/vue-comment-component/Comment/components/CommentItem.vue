<template>
  <div class="comment-item" :class="{ 'sub-comment-item': isSubComment }">
    <div class="comment">
      <!-- 评论或回复人头像 -->
      <img
        class="avatar"
        :src="comment.user.avatar || ''"
        @error="(e) => e.target.classList.add('error')"
      />
      <div class="content-box">
        <!-- 评论或回复人具体信息 -->
        <div class="meta-box">
          <slot name="userMeta">
            <div class="user-popover-box">
              <span v-if="comment.user">{{
                comment.user.name + (comment.user.author === true ? '（作者）' : '')
              }}</span>
            </div>
          </slot>
        </div>

        <!-- 评论或回复内容 -->
        <div class="content">
          <span v-if="comment.reply" class="reply"
            >回复
            <span class="reply-target" :title="comment.reply.email">{{
              comment.reply.name + '：'
            }}</span>
          </span>
          {{ comment.content }}
          <div v-if="comment.imgSrc" class="img-box">
            <img :src="comment.imgSrc || ''" @error="(e) => e.target.classList.add('error')" />
          </div>
        </div>

        <!-- 评论或回复时间及操作 -->
        <div class="reply-stat">
          <time :title="formatTime(comment.createAt, true)" :datetime="comment.createAt">{{
            formatTime(comment.createAt)
          }}</time>
          <div
            v-if="user.author === true"
            class="delete"
            @click.stop="$emit('comment-delete', { id, comment, parent })"
          >
            <span>·</span>删除
          </div>
          <div class="action-box">
            <div
              class="comment-action action"
              @mousedown.prevent="$emit('comment-reply', id)"
              @click.prevent
            >
              <svg aria-hidden="true" viewBox="0 0 20 20" class="icon comment-icon">
                <g fill="none" fill-rule="evenodd">
                  <path d="M0 0h20v20H0z" />
                  <path
                    stroke="#8A93A0"
                    stroke-linejoin="round"
                    d="M10 17c-4.142 0-7.5-2.91-7.5-6.5S5.858 4 10 4c4.142 0 7.5 2.91 7.5 6.5 0 1.416-.522 2.726-1.41 3.794-.129.156.41 3.206.41 3.206l-3.265-1.134c-.998.369-2.077.634-3.235.634z"
                  />
                </g>
              </svg>
              <span class="action-title">回复</span>
            </div>
          </div>
        </div>

        <!-- 评论表单组件 -->
        <slot :id="id" />

        <!-- 回复列表 -->
        <slot name="subList" :parentId="id" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CommentItem',
  props: {
    comment: {
      type: Object,
      default: () => {},
      required: true
    },
    id: {
      type: [String, Number],
      required: true
    },
    parent: {
      type: Object,
      default: () => {}
    },
    user: {
      type: Object,
      default: () => {}
    }
  },
  computed: {
    isSubComment() {
      return this.id.split('-').length === 3
    }
  },
  methods: {
    formatTime(time, local = false) {
      const d = new Date(time)

      if (local) {
        return d.toString()
      }

      const now = Date.now()
      const diff = (now - d) / 1000

      if (diff < 30) {
        return '刚刚'
      } else if (diff < 3600) {
        return Math.ceil(diff / 60) + '分钟前'
      } else if (diff < 3600 * 24) {
        return Math.ceil(diff / 3600) + '小时前'
      } else if (diff < 3600 * 24 * 30) {
        return Math.floor(diff / 3600 / 24) + '天前'
      } else if (diff < 3600 * 24 * 365) {
        return Math.floor(diff / 3600 / 24 / 30) + '月前'
      } else {
        return Math.floor(diff / 3600 / 24 / 365) + '年前'
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.comment-item {
  margin-bottom: 1.0664rem;

  &:not(:last-child) {
    .content-box {
      border-bottom: 1px solid #f1f1f1;
    }
  }

  .comment {
    display: flex;

    .content-box {
      margin-left: 0.6664rem;
      flex: 1 1 auto;

      &.focus {
        padding-bottom: 0.4rem;
      }

      .meta-box {
        display: flex;
        align-items: center;
        font-size: 0.8664rem;
        line-height: 1.25;
        white-space: nowrap;

        .user-popover-box {
          cursor: pointer;
        }
      }

      .content {
        margin-top: 0.44rem;
        font-size: 0.8664rem;
        line-height: 1.4664rem;
        white-space: pre-line;
        word-break: break-all;
        color: #505050;
        overflow: hidden;

        .img-box {
          margin-top: 0.5rem;

          img {
            max-width: 100%;
            max-height: 20rem;
            object-fit: cover;
          }
        }

        .reply {
          vertical-align: top;
        }

        .reply-target {
          cursor: pointer;
          color: #406599;
        }
      }
    }

    .reply-stat {
      display: flex;
      margin-top: 7px;
      font-weight: 400;

      time,
      .delete {
        font-size: 0.8664rem;
        color: #8a9aa9;
      }

      .delete {
        cursor: pointer;

        span {
          margin: 0 0.2rem;
        }
      }

      .action-box {
        flex: 0 0 auto;
        display: flex;
        justify-content: space-between;
        min-width: 7.04rem;
        color: #8a93a0;
        user-select: none;

        .action {
          display: flex;
          align-items: center;
          margin-left: 0.4rem;
          cursor: pointer;

          &:hover {
            opacity: 0.8;
          }

          &.active {
            color: #37c700;
          }

          .icon {
            min-width: 16.5px;
            min-height: 16.5px;
            width: 0.8rem;
            height: 0.8rem;
          }

          .action-title {
            margin-left: 0.2rem;
            font-size: 0.8rem;
          }
        }
      }
    }
  }
}

.sub-comment-list {
  margin: 0.8rem 0;
  padding: 0 0 0 0.8rem;
  background-color: #fafbfc;
  border-radius: 3px;

  .comment-item {
    margin-bottom: 0;

    &:last-child .content-box {
      border-bottom: none;
    }

    .comment {
      position: relative;
      padding: 0.8rem 0 0;

      .content-box {
        margin-right: 0.8rem;
        padding-bottom: 0.8rem;
      }
    }
  }
}
</style>
