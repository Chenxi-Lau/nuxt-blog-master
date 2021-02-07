/*
 * @Author: liuchenxi
 * @Date: 2020-09-27 09:07:26
 * @LastEditTime: 2021-02-06 12:08:16
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \nuxt-blog-master\nuxt-blog-master\server\models\articles.js
 */
import sequelize from '../config.js'
import archivesModel from '../model/archives.js'

export default class Archives {
  // 获取所有的文章标签
  // getAllTags (callback) {
  //   let sql = 'SELECT id, name FROM tags'
  //   db.query(sql, [], (err, result) => {
  //     if (err) {
  //       return callback(true, err)
  //     }
  //     callback(null, result)
  //   })
  // }

  // // 根据TagName获取Post列表
  // getArticlesByTagName (params, callback) {
  //   let sql = `SELECT id, title, updated_at, meta_description FROM articles WHERE tagName = "${params.name}" AND status = "published"`
  //   db.query(sql, [], (err, result) => {
  //     if (err) {
  //       return callback(true, err)
  //     }
  //     callback(null, result)
  //   })
  // }

  // // 根据TagId获取对应的Post数量
  // getCountByTag (params, callback) {
  //   let sql = `SELECT COUNT(id) AS count FROM articles WHERE tagName = "${params.name}" AND status = "published"`
  //   db.query(sql, [], (err, result) => {
  //     if (err) {
  //       return callback(true)
  //     }
  //     callback(null, result[0].count)
  //   })
  // }
  // 获取所有的文章标签
  async getArchivesList (req, res, next) {
    try {
      const list = await archivesModel.findAll()
      res.json({
        code: '0',
        msg: 'SUCCESS',
        data: {
          list: list
        }
      })
    } catch (err) {
      res.json({
        code: '500',
        msg: err,
        data: null
      })
    }
  }
  // 根据id获取归档下面的所有的文章
  async getArticlesById (req, res, next) {
    try {
      const params = { id: req.query.id }
      const list = await archivesModel.findAll({
        where: {
          id: params.id,
          status: 'published'
        }
      })
      res.json({
        code: '0',
        msg: 'SUCCESS',
        data: {
          list: list
        }
      })
    } catch (err) {
      res.json({
        code: '500',
        msg: err,
        data: null
      })
    }
  }
}
