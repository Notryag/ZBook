import articleModel from '../model/article'

const router = require('koa-router')()

module.exports = (app) => {

  router.get('/',  async(ctx, next) => {
    ctx.body = 'haha'
  },)
  router.get('/article/getList',  async(ctx, next) => {
    const res = await articleModel.getList()
    ctx.body = res
  },)
  router.get('/article/getById',  async(ctx, next) => {
    let {uid} = ctx.query
    const res = await articleModel.getById(uid)
    if(res) {
      ctx.body = res[0]
    }else {
      ctx.body = null
    }
  },)

  app.use(router.routes())
}