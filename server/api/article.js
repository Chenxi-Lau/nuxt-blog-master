/*
 * @Author: liuchenxi
 * @Date: 2020-09-28 11:02:42
 * @LastEditTime: 2020-09-28 14:50:55
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \nuxt-blog-master\nuxt-blog-master\server\api\article.js
 */
import express from 'express'
import Articles from '../models/article'

let article = new Articles()

let router = express.Router()
// services

router.get('/list', function (req, res, next) {
  const params = {
    status: req.query.scope || '',
    pageNo: req.params.pageNo || 1
  }
  try {
    article.getArticlesList(params, (err, data) => {
      if (err) {
        res.json({ code: '500', msg: err })
      }
      res.setHeader('Access-Control-Allow-Origin', '*')
      res.setHeader('Content-Type', 'application/json')
      res.json({ code: '0', msg: 'SUCCESS', data: data })
    })
  } catch (err) {
    res.json({ code: 500, msg: err })
  }
})

// router.get('/list', (req, res) => {
//   db.query('SELECT * FROM articles ORDER BY id DESC', [], function (err, data) {
//     if (err) {
//       data.code = 500
//       data.msg = err
//     }
//     res.setHeader('Access-Control-Allow-Origin', '*')
//     res.setHeader('Content-Type', 'application/json')
//     // 返给前端
//     res.json({
//       code: '0',
//       msg: 'SUCCESS',
//       data: data
//     })
//   })
// })

module.exports = router
