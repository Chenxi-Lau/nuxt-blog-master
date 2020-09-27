/*
 * @Author: your name
 * @Date: 2020-09-22 15:09:22
 * @LastEditTime: 2020-09-27 15:19:27
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

export {
  handleLogin
}
