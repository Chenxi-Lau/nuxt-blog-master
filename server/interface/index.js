/*
 * @Author: liuchenxi
 * @Date: 2020-09-27 09:07:26
 * @LastEditTime: 2021-02-06 11:52:46
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \nuxt-blog-master\server\api\index.js
 */
module.exports = app => {
  app.use('/api/articles', require('./articles'))
  app.use('/api/archives', require('./archives'))
}
