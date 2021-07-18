const {query} = require("../mysql");


let articleModel = {
  getList: (value) => {
    let _sql = "select * from posts;"
    return query(_sql, value)
  },
  getById: (id) => {
    let _sql = `select * from posts where uid=?`
    return query(_sql , id)
  },
  create: (value) => {
    let _sql = `INSERT INTO posts (title, content, tags, moment, uid) VALUES (?, ?, ?, ?, ?);`
    return query(_sql , value)
  }
}

module.exports = articleModel