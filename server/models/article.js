/*
 * @Author: liuchenxi
 * @Date: 2020-09-27 09:07:26
 * @LastEditTime: 2020-09-28 15:05:08
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \nuxt-blog-master\nuxt-blog-master\server\models\articles.js
 */
import db from '../config.js'

const pageSize = 10

export default class Article {
  // 根据页码获取当前页Post列表
  getArticlesList (params, callback) {
    let sql = 'SELECT * FROM articles'
    if (params.status === 'published') {
      sql += ` WHERE status = '${params.status}' `
    }
    sql += ' ORDER BY id DESC '
    sql += `LIMIT ${params.pageNo * pageSize}`
    db.query(sql, [], (err, result) => {
      if (err) {
        return callback(true, err)
      }
      callback(false, result)
    })
  }

  // 根据文章ID获取文章详情
  getArticlesById (postId, callback) {
    let sql = 'SELECT * FROM articles where id = ?'
    db.query(sql, [postId], (err, result) => {
      if (err) {
        return callback(true)
      }
      callback(false, result)
    })
  }

  // 获取Post总数
  getTotal (scope, callback) {
    let sql = 'SELECT COUNT(id) AS count FROM posts'
    if (scope === 'published') {
      sql += ` WHERE status = '${scope}'`
    }
    db.query(sql, [], (err, result) => {
      if (err) {
        return callback(true)
      }
      callback(false, result[0].count)
    })
  }
}
