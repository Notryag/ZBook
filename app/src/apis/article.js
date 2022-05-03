import axios from './request'

export function getArticleList(params) {
    return axios.get(`/article/list`, {
        params: params
    });
}

export function getTagsList(params) {
    return axios.get('/tag/list', {
        params: params
    })
}

export function getCategoryList(params) {
    return axios.get('/category/list', {
        params: params
    })
}

export function getArticleById(id) {
    return axios.get(`/article/${id}`)
}

export function addComments(data) {
    return axios({
        url: '/discuss',
        method: 'post',
        data
    })
}