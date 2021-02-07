/*
 * @Author: liuchenxi
 * @Date: 2020-09-27 09:07:26
 * @LastEditTime: 2021-02-05 17:11:21
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \nuxt-blog-master\nuxt-blog-master\server\models\articles.js
 */
import sequelize from '../config.js'
import articlesModel from '../model/articles.js'

// export default class Article {
//   // 根据页码获取当前页Post列表
//   getArticlesList (params, callback) {
//     let sql = 'SELECT * FROM articles'
//     if (params.status === 'published') {
//       sql += ` WHERE status = '${params.status}' `
//     }
//     sql += ' ORDER BY id DESC '
//     sql += `LIMIT ${params.pageNo * pageSize}`
//     db.query(sql, [], (err, result) => {
//       if (err) {
//         return callback(true, err)
//       }
//       callback(null, result)
//     })
//   }

//   // 根据文章ID获取文章详情, params为文章的id
//   getArticleById (params, callback) {
//     let sql = `SELECT * FROM articles where id = '${params.id}'`
//     db.query(sql, [], (err, result) => {
//       if (err) {
//         return callback(true, err)
//       }
//       callback(null, result)
//     })
//   }

//   // 获取Post总数
//   getTotal (params, callback) {
//     let sql = 'SELECT COUNT(id) AS count FROM articles'
//     if (params.status === 'published') {
//       sql += ` WHERE status = '${params.status}'`
//     }
//     db.query(sql, [], (err, result) => {
//       if (err) {
//         return callback(true, err)
//       }
//       callback(null, result[0].count)
//     })
//   }
// }

export default class Articles {
  // 获取所有文章列表和数量
  async getArticlesList (req, res, next) {
    try {
      const params = {
        status: req.query.status || 'published',
        pageNo: req.query.pageNo || 1
      }
      // findAndCountAll 方法是结合了 findAll 和 count 的便捷方法. 在处理与分页有关的查询时非常有用,在分页中,
      const { count, rows } = await articlesModel.findAndCountAll({
        where: {
          status: params.status
        }
      })
      res.json({
        code: '0',
        msg: 'SUCCESS',
        data: {
          pageNo: params.pageNo,
          pageSize: 10,
          total: count,
          list: rows
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

  // 根据文章ID获取单个的文章详情
  async getArticleById (req, res, next) {
    try {
      const id = req.query.id
      const project = await articlesModel.findByPk(id)
      if (project === null) {
        res.json({
          code: '-1',
          msg: '文章不存在',
          data: null
        })
      } else {
        res.json({
          code: '0',
          msg: 'SUCCESS',
          data: project
        })
      }
    } catch (err) {
      res.json({
        code: '500',
        msg: err,
        data: null
      })
    }
  }

  // 获取每个月 或者 每天发表的文章
  async queryCountByMonthOrDay (req, res, next) {
    try {
      const countType = req.query.countType
      const [results] = await sequelize.query(`SELECT DATE_FORMAT(createdTime, '%Y-%m') AS month, COUNT(id) AS count FROM articles GROUP BY ${countType};`)
      res.json({
        code: '0',
        msg: 'SUCCESS',
        data: results
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
