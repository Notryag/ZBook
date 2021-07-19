import articleModel from '../model/article'
import { v4 as uuidv4 } from 'uuid';
const router = require('koa-router')()

module.exports = (app) => {

  router.get('/',  async(ctx, next) => {
    ctx.body = 'haha'
  },)
  router.get('/article/getList',  async(ctx, next) => {
    const res = await articleModel.getList()
    ctx.success(res)
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
  router.post('/article/create',  async(ctx, next) => {
    let {title, content, tags} = ctx.request.body
    let moment = +new Date()
    let uid = uuidv4()
    try {
      await articleModel.create([title, content, tags,moment,uid])      
      ctx.success('success')
    } catch (error) {
      console.log(error)
    }

  },)

  app.use(router.routes())
}