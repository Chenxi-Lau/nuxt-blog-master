function postToSqlUpdate (object) {
  let updated = [];let params = []
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
