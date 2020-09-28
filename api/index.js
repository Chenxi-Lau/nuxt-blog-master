/*
 * @Author: your name
 * @Date: 2020-09-22 15:09:22
 * @LastEditTime: 2020-09-28 15:16:52
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \nuxt-blog-master\api\index.js
 */
import http from './httpInstance'

function handleLogin () {
  return http({
    method: 'get',
    url: '/user/login'
  })
}

function queryArticleList () {
  return http({
    method: 'get',
    url: '/article/list'
  })
}

export {
  handleLogin,
  queryArticleList
}
