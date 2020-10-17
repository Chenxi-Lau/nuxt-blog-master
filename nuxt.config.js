/*
 * @Author: liuchenxi
 * @Date: 2020-09-22 09:07:32
 * @LastEditTime: 2020-10-09 09:38:29
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \nuxt-blog-master\nuxt.config.js
 */

module.exports = {
  mode: 'universal',
  /*
  ** disable Nuxt Telemetry
  */
  telemetry: false,
  /*
  ** Headers of the page
  */
  head: {
    title: process.env.npm_package_name || 'Good Morning',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1,user-scalable=no' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '刘晨曦的前端博客' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },
  /*
  ** Global CSS
  */
  css: [
    'element-ui/lib/theme-chalk/index.css',
    '@/assets/css/iconfont.css' // iconfont
  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    '@/plugins/element-ui',
    { src: '@/assets/js/iconfont.js', ssr: false } // iconfont
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
  ],
  /*
  ** Build configuration
  */
  build: {
    transpile: [/^element-ui/],
    /*
    ** You can extend webpack config here
    */
    extend (config, ctx) {
    }
  }
}
