import { ARTICLE_GET_TAG_LIST, ARTICLE_GET_CATEGORY_LIST } from '../types'
import * as Apis from '@/apis/article'
export const getTagsList = () => dispatch =>
    Apis.getTagsList().then(list => {
        dispatch({
            type: ARTICLE_GET_TAG_LIST,
            payload: list
        })
    })


export const getCategoryList = () => dispatch =>
    Apis.getCategoryList().then(list => {
        dispatch({
            type: ARTICLE_GET_CATEGORY_LIST,
            payload: list
        })
    })



