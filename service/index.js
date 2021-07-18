const Koa = require('koa')
const config = require('./config')
const app = new Koa()
const router = require('./router')
const  cors = require('koa2-cors');
const bodyParser = require('koa-bodyparser')
const routerResponse =  require('./middleware/routerResponse')
const toHump = require('./middleware/toHump')
require('./mysql')


app.use(toHump()) // 需要放在引用路由之前
app.use(cors())
app.use(bodyParser())
app.use(routerResponse())

router(app)
app.listen(config.port, () => {
  console.log(`server is running at http://localhost:${config.port}`)
})
console.log(`listening on port ${config.port}`)