/*
 * @Author: liuchenxi
 * @Date: 2021-02-05 10:56:14
 * @LastEditTime: 2021-02-05 16:46:43
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \nuxt-blog-master\server\model\articles.js
 */
import sequelize from '../config.js'
import Sequelize from 'sequelize'

// 建立数据映射表
let articlesModel = sequelize.define('articles', {
  id: {
    type: Sequelize.INTEGER(8),
    primaryKey: true
  },
  userId: {
    type: Sequelize.STRING(50),
    key: true
  },
  title: Sequelize.STRING(50),
  markdown: Sequelize.TEXT,
  status: Sequelize.STRING(20),
  metaTitle: Sequelize.STRING(50),
  metaDescription: Sequelize.STRING(255),
  tagName: Sequelize.STRING(100),
  createdTime: Sequelize.STRING(50),
  updatedTime: Sequelize.STRING(50)
}, {
  timestamps: false // 关闭Sequelize的自动添加timestamp的功能
})

export default articlesModel
