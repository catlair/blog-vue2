import type { ErrorMessageMode } from '#/model/common'
import type { CategoryModel, UpdateModel } from '#/model/categoryModel'
import { defHttp } from '../http/axios'

/**
 * 获取分类列表
 */
export function getCategories(mode?: ErrorMessageMode): Promise<CategoryModel>

/**
 * 通过 id 获取指定分类的文章
 * @param {string} id
 */
export function getCategoryArticles(id: string): Promise<CategoryModel>

/**
 * 通过 name 获取指定分类的文章
 * @param {string} name
 */
export function getCategoryArticlesByName(name: string): Promise<CategoryModel>

/**
 *
 */
export function updateCategory(id: string, data: UpdateModel, mode?: ErrorMessageMode): Promise<any>
