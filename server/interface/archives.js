/*
 * @Author: liuchenxi
 * @Date: 2020-09-30 11:46:19
 * @LastEditTime: 2021-02-06 12:09:41
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \nuxt-blog-master\server\api\tag.js
 */

import express from 'express'
import ArchivesClass from '../class/archives'

let archives = new ArchivesClass()
let router = express.Router()

router.get('/list', archives.getArchivesList)
router.get('/articlesList', archives.getArticlesById)

module.exports = router

// router.get('/tags', function (req, res, next) {
//   // 获取所有标签对应的数量
//   async.waterfall([
//     function (callback) {
//       tag.getAllTags((err, allTags) => {
//         callback(err, allTags)
//       })
//     },
//     function (allTags, callback) {
//       async.eachSeries(allTags, (item, itemCallback) => {
//         const params = item
//         tag.getCountByTag(params, (err, data) => {
//           if (err) {
//             return itemCallback(err)
//           }
//           item.count = data
//           itemCallback()
//         })
//       }, (err) => {
//         if (err) {
//           callback(true)
//         } else {
//           callback(null, allTags)
//         }
//       })
//     }
//   ], (err, allTags) => {
//     if (err) {
//       res.json({ code: '500', msg: 'server is error' })
//     } else {
//       res.setHeader('Access-Control-Allow-Origin', '*')
//       res.json({
//         code: '0',
//         msg: 'SUCCESS',
//         dataList: allTags
//       })
//     }
//   })
// })

// router.get('/tagDetail', function (req, res, next) {
//   const params = {
//     name: req.query.tagName
//   }

//   tag.getArticlesByTagName(params, (err, data) => {
//     if (err) {
//       res.json({ code: '500', msg: data })
//     }
//     res.setHeader('Access-Control-Allow-Origin', '*')
//     res.json({
//       code: '0',
//       msg: 'SUCCESS',
//       list: data
//     })
//   })
// })

