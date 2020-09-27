<!--
 * @Author: your name
 * @Date: 2020-09-22 09:07:32
 * @LastEditTime: 2020-09-27 15:27:41
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \nuxt-blog-master\pages\index.vue
-->
<template>
  <div class="container">
    <div>
      <logo />
      <h1 class="title">
        blog-nuxt
      </h1>
      <h2 class="subtitle">
        Nuxt.js + Mysql + Express.js
      </h2>
      <div class="links">
        <a href="https://nuxtjs.org/" target="_blank" class="button--green">
          Documentation
        </a>
        <a href="https://github.com/nuxt/nuxt.js" target="_blank" class="button--grey">
          GitHub
        </a>
      </div>
    </div>
  </div>
</template>

<script>
import { handleLogin } from '@/api/index.js'
import Logo from '~/components/Logo.vue'
export default {
  name: 'main-page',
  components: {
    Logo
  },
  mounted () {
    this.handleLogin()
  },
  methods: {
    async handleLogin () {
      try {
        const res = await handleLogin()
        if (res.code == '0') {
          console.log(res)
        }
      } catch (err) {
        console.log(err, '登录失败')
      }
    }
  }
}
</script>

<style>
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>
