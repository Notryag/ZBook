const Koa = require('koa')
const config = require('./config')
const app = new Koa()
const router = require('./router')
require('./mysql')

router(app)
app.listen(config.port, () => {
  console.log(`server is running at http://localhost:${config.port}`)
})
console.log(`listening on port ${config.port}`)