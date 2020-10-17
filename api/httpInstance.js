/*
 * @Author: liuchenxi
 * @Date: 2020-09-22 15:54:56
 * @LastEditTime: 2020-09-29 15:50:25
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
  headers: {
    'X-Requested-With': 'XMLHttpRequest',
    'Content-Type': 'application/json;charset=utf-8'
  },
  baseURL
})

export default http
