import { clear, get } from '@/utils/storage'
import { marked } from 'marked'
import xss from 'xss'
import { COLOR_LIST } from "@/utils/config";

export function calcCommentsCount(commons) {
    return commons?.reduce((pre, cur) => {
        return pre + cur?.replies.length ?? 0
    }, commons?.length ?? 0) ?? 0
}

// 获取 token
export function getToken() {
    let token = ''
    const userInfo = get('userInfo')

    if (userInfo && userInfo.token) {
        token = 'Bearer ' + userInfo.token
    }

    return token
}


// 转化 md 语法为 html
export const translateMarkdown = (plainText, isGuardXss = false) => {
    return marked(isGuardXss ? xss(plainText) : plainText, {
        gfm: true,
        pedantic: false,
        sanitize: false,
        tables: true,
        breaks: true,
        smartLists: true,
        smartypants: true,
        highlight: function (code) {
            /*eslint no-undef: "off"*/
            // return hljs.highlightAuto(code).value
        }
    })
}


/**
 * @param {string} path
 * @returns {Boolean}
 */
export function isExternal(path) {
    return /^(https?:|mailto:|tel:|http:)/.test(path)
}


// 取数组中的随机数
export const randomIndex = arr => Math.floor(Math.random() * arr.length)

// 生成 color
export function genertorColor(list = [], colorList = COLOR_LIST) {
    return list.reduce((pre, cur, i) => {
        pre[cur.name] = colorList[i] || colorList[randomIndex(colorList)]
        return pre
    }, {})
}
