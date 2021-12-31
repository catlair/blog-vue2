import type { ErrorMessageMode } from '#/model/common'
import type { CategoryModel, UpdataModel } from '#/model/categoryModel'

/**
 * 获取分类列表
 */
export function getCategories(mode?: ErrorMessageMode): Promise<CategoryModel>

/**
 *
 */
export function updateCategory(id: string, data: UpdataModel, mode?: ErrorMessageMode): Promise<any>
