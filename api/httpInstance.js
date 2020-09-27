/*
 * @Author: liuchenxi
 * @Date: 2020-09-22 15:54:56
 * @LastEditTime: 2020-09-27 15:14:57
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \nuxt-blog-master\api\httpInstance.js
 */
import axios from 'axios'

const baseURL = {
  production: process.env.BASE_URL,
  development: '/api'
}[process.env.NODE_ENV]

const http = axios.create({
  timeout: 20000,
  withCredentials: true,
  headers: { 'X-Requested-With': 'XMLHttpRequest' },
  baseURL
})

export default http
