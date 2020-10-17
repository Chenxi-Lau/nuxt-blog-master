/*
 * @Author: liuchenxi
 * @Date: 2020-09-30 11:46:19
 * @LastEditTime: 2020-09-30 17:14:58
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \nuxt-blog-master\server\api\articleTag.js
 */

import async from 'async'
import express from 'express'
import ArticleTag from '../models/articleTag'

let articleTag = new ArticleTag()
let router = express.Router()

router.get('/tags', function (req, res, next) {
  // 获取所有标签

  async.waterfall([
    function (callback) {
      articleTag.getAllTags((err, allTags) => {
        callback(err, allTags)
      })
    },
    function (allTags, callback) {
      async.eachSeries(allTags, (item, itemCallback) => {
        const params = item
        articleTag.getCountByTag(params, (err, data) => {
          if (err) {
            return itemCallback(err)
          }
          item.count = data
          itemCallback()
        })
      }, (err) => {
        if (err) {
          callback(true)
        } else {
          callback(null, allTags)
        }
      })
    }
  ], (err, allTags) => {
    if (err) {
      res.json({ code: '500', msg: 'server is error' })
    } else {
      res.setHeader('Access-Control-Allow-Origin', '*')
      res.json({
        code: '0',
        msg: 'SUCCESS',
        dataList: allTags
      })
    }
  })
})

router.get('/tagDetail', function (req, res, next) {
  const params = {
    name: req.query.tagName
  }

  articleTag.getArticlesByTagName(params, (err, data) => {
    if (err) {
      res.json({ code: '500', msg: data })
    }
    res.setHeader('Access-Control-Allow-Origin', '*')
    res.json({
      code: '0',
      msg: 'SUCCESS',
      list: data
    })
  })
})

module.exports = router
