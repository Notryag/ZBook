import http from './interception'

export  function getList(params) {
    return http({
        method:'get',
        url:'/article/getList',
        params
    })
}

export  function create(params) {
    return http({
        method:'post',
        url:'/article/create',
        data:params
    })
}