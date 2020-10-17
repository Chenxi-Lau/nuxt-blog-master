/*
 * @Author: liuchenxi
 * @Date: 2020-09-28 11:02:42
 * @LastEditTime: 2020-09-30 11:45:14
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \nuxt-blog-master\nuxt-blog-master\server\api\article.js
 */
import async from 'async'
import express from 'express'
import Articles from '../models/article'

let article = new Articles()
let router = express.Router()

router.get('/list', function (req, res, next) {
  const params = {
    status: req.query.status || '',
    pageNo: req.query.pageNo || 1
  }

  async.waterfall([
    function (callback) {
      article.getTotal(params, (err, total) => {
        callback(err, total)
      })
    },
    function (total, callback) {
      article.getArticlesList(params, (err, list) => {
        callback(err, total, list)
      })
    }
  ], (err, total, list) => {
    if (err) {
      res.json({ code: '500', msg: 'server is error' })
    } else {
      res.setHeader('Access-Control-Allow-Origin', '*')
      res.json({
        code: '0',
        msg: 'SUCCESS',
        dataList: {
          pageNo: params.pageNo,
          pageSize: 10,
          total: total,
          list: list
        }
      })
    }
  })
})

router.get('/detail', function (req, res, next) {
  const params = {
    id: req.query.id
  }

  article.getArticleById(params, (err, data) => {
    if (err) {
      res.json({ code: '500', msg: data })
    }
    res.setHeader('Access-Control-Allow-Origin', '*')
    res.json({
      code: '0',
      msg: 'SUCCESS',
      list: data[0]
    })
  })
})

module.exports = router
