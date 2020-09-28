/*
 * @Author: liuchenxi
 * @Date: 2020-09-25 22:19:03
 * @LastEditTime: 2020-09-28 11:36:17
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \nuxt-blog-master\server\model\config.js
 */
import mysql from 'mysql'

let pool = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: 'liuchenxi0428',
  database: 'blog-nuxt'
})

let query = function (sql, params, callback) {
  try {
    pool.getConnection((err, connection) => {
      if (err) {
        console.log(err)
        return callback(true)
      }
      // 链接，sql为查询语句，params为查询参数，后面为回调函数
      connection.query(sql, params, (err, result) => {
        // 释放链接
        connection.release()
        if (err) {
          console.error('db error17:' + err)
          return callback(true)
        }
        callback(false, result)
      })
    })
  } catch (err) {
    console.error('db error24:' + err)
    return callback(true)
  }
}

module.exports.query = query
