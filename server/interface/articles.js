/*
 * @Author: liuchenxi
 * @Date: 2020-09-28 11:02:42
 * @LastEditTime: 2021-02-06 11:43:48
 * @LastEditors: Please set LastEditors
 * @Description: 文章相关的所有接口
 * @FilePath: \nuxt-blog-master\nuxt-blog-master\server\api\article.js
 */
import express from 'express'
import ArticlesClass from '../class/articles'

let articles = new ArticlesClass()
let router = express.Router()

router.get('/list', articles.getArticlesList)
router.get('/detail', articles.getArticleById)
router.get('/countByMonthOrDay', articles.queryCountByMonthOrDay)

module.exports = router
