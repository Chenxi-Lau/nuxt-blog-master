/*
 * @Author: 刘晨曦
 * @Date: 2020-09-27 09:07:26
 * @LastEditTime: 2021-02-05 16:30:47
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \nuxt-blog-master\nuxt-blog-master\utils\index.js
 */
import moment from 'moment'

// 格式化时间
function formatTime (timestamp) {
  return moment(timestamp).format('YYYY-MM-DD HH:mm:ss')
}

// 根据年份分类文章
function statisticsArticleByYear () {

}

export {
  formatTime,
  statisticsArticleByYear
}
