import db from '../config'
import { postToSqlUpdate } from '@/utils/index'

const pageSize = 10

export default class Post {
  // 根据页码获取当前页Post列表
  list (params, callback) {
    let sql = 'SELECT id,title,image,meta_description,updated_at,status FROM posts'
    if (params.scope === 'published') {
      sql += ` WHERE status = '${params.scope}' `
    }
    sql += 'ORDER BY id DESC '
    sql += `LIMIT ${params.pageNo * pageSize},${pageSize}`
    db.query(sql, [], (err, result) => {
      if (err) {
        return callback(true)
      }
      callback(false, result)
    })
  }

  // 根据PostId获取Post详情
  one (postId, callback) {
    let sql = 'SELECT * FROM posts where id = ?'
    db.query(sql, [postId], (err, result) => {
      if (err) {
        return callback(true)
      }
      callback(false, result)
    })
  }

  // 插入Post
  insert (post, callback) {
    let sql = 'INSERT INTO posts (title,markdown,image,status,meta_description,updated_at) VALUES (?,?,?,?,?,?)'
    let params = [
      post.title,
      post.markdown,
      post.image,
      post.status,
      post.meta_description,
      new Date().getTime()
    ]
    db.query(sql, params, (err, result) => {
      if (err) {
        return callback(true)
      }
      callback(false, result.insertId)
    })
  }

  // 更新Post
  update (post, callback) {
    let sql = 'UPDATE posts SET ' + postToSqlUpdate(post).updated + ' WHERE id = ?'

    let params = postToSqlUpdate(post).params
    params.push(post.id)

    db.query(sql, params, (err, result) => {
      if (err) {
        return callback(true)
      }
      callback(false, result.changedRows)
    })
  }

  // 获取Post总数
  count (scope, callback) {
    let sql = 'SELECT COUNT(id) AS count FROM posts'
    if (scope === 'published') {
      sql += ` WHERE status = '${scope}'`
    }
    db.query(sql, [], (err, result) => {
      if (err) {
        return callback(true)
      }
      callback(false, result[0].count)
    })
  }
}
