/*
 * @Author: liuchenxi
 * @Date: 2020-09-27 09:07:26
 * @LastEditTime: 2020-09-30 16:58:25
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \nuxt-blog-master\nuxt-blog-master\server\models\articles.js
 */
import db from '../config.js'

export default class ArticleTag {
  // 获取所有的文章标签
  getAllTags (callback) {
    let sql = 'SELECT tag_id, name FROM tags'
    db.query(sql, [], (err, result) => {
      if (err) {
        return callback(true, err)
      }
      callback(null, result)
    })
  }

  // 根据TagName获取Post列表
  getArticlesByTagName (params, callback) {
    let sql = `SELECT id, title, updated_at, meta_description FROM articles WHERE tag_name = "${params.name}" AND status = "published"`
    db.query(sql, [], (err, result) => {
      if (err) {
        return callback(true, err)
      }
      callback(null, result)
    })
  }

  // 根据TagId获取对应的Post数量
  getCountByTag (params, callback) {
    let sql = `SELECT COUNT(id) AS count FROM articles WHERE tag_name = "${params.name}" AND status = "published"`
    db.query(sql, [], (err, result) => {
      if (err) {
        return callback(true)
      }
      callback(null, result[0].count)
    })
  }
}
