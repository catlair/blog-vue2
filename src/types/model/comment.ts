export interface CreateCommentDto {
  // 评论内容
  content: string
  // 父 id
  pid: string
  // 文章 id
  aid: string
  // 被回复的用户 id
  rid: string
  // 评论还是回复
  type: number
}
