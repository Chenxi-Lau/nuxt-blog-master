/*
 * @Author: your name
 * @Date: 2020-09-22 15:09:22
 * @LastEditTime: 2020-09-30 17:08:25
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

// 获取文章列列表
function queryArticleList (params) {
  return http({
    method: 'get',
    url: '/article/list',
    params: params
  })
}

// 获取文章详情
function getArticlesById (params) {
  return http({
    method: 'get',
    url: '/article/detail',
    params: params
  })
}

function getTagsList (params) {
  return http({
    method: 'get',
    url: '/articleTag/tags',
    params: params
  })
}

function getArticlesByTagName (params) {
  return http({
    method: 'get',
    url: '/articleTag/tagDetail',
    params: params
  })
}

export {
  handleLogin,
  queryArticleList,
  getArticlesById,
  getTagsList,
  getArticlesByTagName
}
