import express from 'express'
import consola from 'consola'
import { Nuxt, Builder } from 'nuxt'

const app = express()
const host = process.env.HOST || 'localhost'
const port = process.env.PORT || 3000

// app.set('port', port)
app.proxy = true
// Import API Routes
let api = require('./interface/index')(app)

async function start () {
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
    message: `Server listening on local: http://${host}:${port}`,
    badge: true
  })
}
start()
