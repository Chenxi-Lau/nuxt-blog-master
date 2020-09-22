/*
 * @Author: liuchenxi
 * @Date: 2020-09-22 15:54:56
 * @LastEditTime: 2020-09-22 20:53:40
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \nuxt-blog-master\api\httpInstance.js
 */
import axios from 'axios'

const http = axios.create({
  timeout: 20000,
  withCredentials: true,
  headers: { 'X-Requested-With': 'XMLHttpRequest' }
})

export default http
