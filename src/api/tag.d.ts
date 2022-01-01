import type { TagModel } from '#/model/tagModel'

/**
 * 获取标签列表
 */
export function getTags(): Promise<TagModel>

/**
 * 通过标签名获取文章
 * @param {string} tagName 标签名
 */
export function getArticlesByTagName(tagName: string): Promise<TagModel>
