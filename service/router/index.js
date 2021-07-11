import articleModel from '../model/article'

const router = require('koa-router')()

module.exports = (app) => {

  router.get('/',  async(ctx, next) => {
    ctx.body = 'haha'
  },)
  router.get('/getList',  async(ctx, next) => {
    const res = await articleModel.getList()
    ctx.body = res
  },)
  router.get('/123',  async(ctx, next) => {
    ctx.body = 'haha123'
  },)

  app.use(router.routes())
}