import * as TYPES from '@/redux/types'
import { genertorColor } from "@/utils";

const defaultState = {
    categoryList: [],
    tagList: [],
    tagMap: {},
    categoryMap: {}
}

export default function articleReducer(state = defaultState, action) {
    const { type, payload } = action
    switch (type) {
        case TYPES.ARTICLE_GET_TAG_LIST:
            const tagMap = genertorColor(payload)
            return { ...state, tagMap, tagList: payload }
        case TYPES.ARTICLE_GET_CATEGORY_LIST:
            const categoryMap = genertorColor(payload)
            return { ...state, categoryMap, categoryList: payload }
        default:
            return state
    }
}