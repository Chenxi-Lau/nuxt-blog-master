<!--
 * @Author: liuchenxi
 * @Date: 2020-09-22 09:07:32
 * @LastEditTime: 2020-10-09 15:37:18
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \nuxt-blog-master\layouts\default.vue
-->
<template>
  <div>
    <my-header />
    <nuxt />
    <my-footer />
  </div>
</template>

<script>
import MyHeader from '../components/header'
import MyFooter from '../components/footer'
export default {
  components: {
    MyHeader,
    MyFooter
  }
}
</script>

<style>
html {
  font-family: 'Source Sans Pro', -apple-system, BlinkMacSystemFont, 'Segoe UI',
    Roboto, 'Helvetica Neue', Arial, sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
  background: #100e17;
}

*,
*:before,
*:after {
  box-sizing: border-box;
  margin: 0;
}
</style>
