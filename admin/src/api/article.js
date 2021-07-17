import http from './interception'

export  function getList(params) {
    return http({
        method:'get',
        url:'/article/getList',
        params
    })
}