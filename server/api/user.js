/*
 * @Author: liuchenxi
 * @Date: 2020-09-27 09:07:26
 * @LastEditTime: 2020-09-28 11:36:36
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \nuxt-blog-master\server\api\user.js
 */
let express = require('express')
let router = express.Router()
import db from '../config.js'

router.get('/login', (req, res) => {
  db.query('SELECT * FROM user', [], function (err, data) {
    if (err) {
      data.code = 500
      data.msg = err
    }
    res.setHeader('Access-Control-Allow-Origin', '*')
    res.setHeader('Content-Type', 'application/json')
    // 返给前端
    res.json(data)
  })
})

module.exports = router
