/*
 * @Author: your name
 * @Date: 2020-09-27 09:07:26
 * @LastEditTime: 2020-09-28 09:51:34
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: \nuxt-blog-master\nuxt-blog-master\utils\index.js
 */
function postToSqlUpdate (object) {
  let updated = []
  let params = []
  for (var key in object) {
    if (object.hasOwnProperty(key)) {
      if (key === 'id') {
        continue
      }
      updated.push(key + ' = ?')
      params.push(object[key])
    }
  }
  updated.push('updated_at = ?')
  params.push(Date.now())
  return {
    updated: updated.join(','),
    params: params
  }
}

export {
  postToSqlUpdate
}
