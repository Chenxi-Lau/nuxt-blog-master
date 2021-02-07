/*
 * @Author: liuchenxi
 * @Date: 2020-09-22 09:07:32
 * @LastEditTime: 2021-02-05 14:57:22
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \nuxt-blog-master\nuxt.config.js
 */

module.exports = {
  // mode option is deprecated
  // mode: 'universal',
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
    '@/assets/css/iconfont.css', // iconfont
    '@/assets/css/main.css', // 改变全局的Css样式
    '@/assets/css/yeh-md-theme.css', // 改变全局的Css样式
    '@/assets/css/ocean.min.css' // 改变全局的Css样式
  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    '@/plugins/element-ui',
    {
      src: '@/assets/js/iconfont.js',
      ssr: false
    } // iconfont
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    '@nuxtjs/axios'
  ],
  /*
  ** Axios module configuration
  */
  axios: {
    prefix: '/api/'
    // credentials: true
  },
  /*
  ** Build configuration
  */
  build: {
    transpile: [/^element-ui/],
    /*
    ** You can extend webpack config here
    */
    //! 解决 fs net tls 依赖找不到的问题
    extend (config, ctx) {
      // config.module.rules.push({ target: 'node' }) // <-- Added this
      if (ctx.isDev && ctx.isClient) {
        // config.node = {
        //   console: true,
        //   fs: true
        // }
        /*
         ** Run ESLINT on save
         */
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  }
}
