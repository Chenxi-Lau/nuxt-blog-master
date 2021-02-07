/*
 * @Author: 刘晨曦
 * @Date: 2020-09-25 22:19:03
 * @LastEditTime: 2021-02-05 13:45:22
 * @LastEditors: Please set LastEditors
 * @Description: 采用Sequelize优化数据库操作
 * @FilePath: \nuxt-blog-master\server\model\config.js
 */
import Sequelize from 'sequelize'

// 在这里修改数据库的配置
const config = {
  host: 'localhost',
  username: 'root',
  password: 'liuchenxi0428',
  database: 'blog-nuxt'
}

// Object-Relational Mapping，把关系数据库的表结构映射到对象上。
// 推荐廖雪峰老师：https://www.liaoxuefeng.com/wiki/1022910821149312/1101571555324224

let sequelize = new Sequelize(config.database, config.username, config.password, {
  host: config.host,
  dialect: 'mysql',
  pool: {
    max: 5,
    min: 0,
    idle: 30000
  }
})
export default sequelize
// let pool = mysql.createPool({
//   host: 'localhost',
//   user: 'root',
//   password: 'liuchenxi0428',
//   database: 'blog-nuxt'
// })

// let query = function (sql, params, callback) {
//   try {
//     pool.getConnection((err, connection) => {
//       if (err) {
//         consola.error(new Error(err))
//         return callback(true)
//       }
//       consola.success('数据库链接成功')
//       connection.query(sql, params, (err, result) => {
//         connection.release() // 释放链接
//         if (err) {
//           consola.error('数据库错误', err)
//           return callback(true, err)
//         }
//         callback(false, result)
//       })
//     })
//   } catch (err) {
//     consola.error('数据库错误', err)
//     return callback(true)
//   }
// }
