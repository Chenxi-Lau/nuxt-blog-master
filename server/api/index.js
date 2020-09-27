/*
 * @Author: your name
 * @Date: 2020-09-27 09:07:26
 * @LastEditTime: 2020-09-27 11:50:42
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \nuxt-blog-master\server\api\index.js
 */
module.exports = app => {
  // 实现登陆拦截
  app.use('/api/user', require('./user'))
}
