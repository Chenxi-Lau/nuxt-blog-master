/*
 * @Author: your name
 * @Date: 2020-09-22 09:07:32
 * @LastEditTime: 2020-09-27 15:28:21
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \nuxt-blog-master\nuxt-blog-master\server\index.js
 */
const express = require('express')
const consola = require('consola')
const { Nuxt, Builder } = require('nuxt')

const app = express()
const host = process.env.HOST || 'localhost'
const port = process.env.PORT || 3000

app.set('port', port)

// Import API Routes
let api = require('./api/index')(app)

async function start () {
  consola.info('2020')
  // Import and Set Nuxt.js options
  const config = require('../nuxt.config.js')
  config.dev = !(process.env.NODE_ENV === 'production')

  // Init Nuxt.js
  const nuxt = new Nuxt(config)

  // Build only in dev mode
  if (config.dev) {
    const builder = new Builder(nuxt)
    await builder.build()
  } else {
    await nuxt.ready()
  }

  // Give nuxt middleware to express
  app.use(nuxt.render)

  // Listen the server
  app.listen(port, host)
  consola.ready({
    message: `Server listening on
    -local: http://${host}:${port}`,
    badge: true
  })
}
start()
