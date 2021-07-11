const {query} = require("../mysql");


let articleModel = {
  getList: (value) => {
    let _sql = "select * from posts;"
    return query(_sql, value)
  }
}

module.exports = articleModel