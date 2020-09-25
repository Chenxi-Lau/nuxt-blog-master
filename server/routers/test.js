/*
 * @Author:liuchenxi
 * @Date: 2020-09-25 22:37:45
 * @LastEditTime: 2020-09-25 22:42:03
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \nuxt-blog-master\server\routers\test.js
 */
let express = require('express')
let router = express.Router()
let db = require('./db')
// 插入测试
router.get('/dbtest', function (req, res) {
  let project = { project_name: 'test', create_time: '2017-03-28 14:09:29' }
  let sqlString = 'INSERT INTO project SET ?'
  let connection = db.connection()
  db.insert(connection, sqlString, project, function (id) {
    console.log('inserted id is:' + id)
  })
  db.close(connection)
  return
})
