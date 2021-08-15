import { IArticleParams } from "../types/store/action/article";
import request from "../utils/request";

/**
 * 获取热门文章数据
 * @returns 
 */
export function apiGetHotArticle() {
  return request({
    url: '/article/getHotArticleList',
    method: 'get',
  })
}

/**
 * 通过条件查询文章
 * @param params 
 * @returns 
 */
export function apiGetArticleByParams(params: IArticleParams) {
  return request({
    url: 'http://localhost:4000/article/getlist',
    method: 'get',
    params
  })
}