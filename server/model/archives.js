/*
 * @Author: liuchenxi
 * @Date: 2021-02-05 16:34:08
 * @LastEditTime: 2021-02-05 17:29:33
 * @LastEditors: Please set LastEditors
 * @Description: 文章归档的映射表
 * @FilePath: \nuxt-blog-master\server\model\archives.js
 */
import sequelize from '../config.js'
import Sequelize from 'sequelize'

// 建立数据映射表
let archivesModel = sequelize.define('archives', {
  id: {
    type: Sequelize.INTEGER(8),
    primaryKey: true
  },
  name: Sequelize.STRING(50),
  description: Sequelize.STRING(255),
  createdTime: Sequelize.STRING(50),
  updatedTime: Sequelize.STRING(50)
}, {
  timestamps: false // 关闭Sequelize的自动添加timestamp的功能
})

export default archivesModel
