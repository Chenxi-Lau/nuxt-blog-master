/*
 * @Author: liuchenxi
 * @Date: 2020-09-27 09:07:26
 * @LastEditTime: 2020-09-30 14:27:17
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \nuxt-blog-master\server\api\index.js
 */
module.exports = app => {
  // 实现登陆拦截
  app.use('/api/article', require('./article'))
  app.use('/api/articleTag', require('./articleTag'))
}
