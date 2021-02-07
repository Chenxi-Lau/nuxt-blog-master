<!--
 * @Author: liuchenxi
 * @Date: 2020-09-22 09:07:32
 * @LastEditTime: 2021-02-05 16:13:10
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \nuxt-blog-master\layouts\default.vue
-->
<template>
  <div class="app">
    <MyHeader />
    <nuxt />
    <!-- <MyFooter /> -->
  </div>
</template>

<script>
import MyHeader from '../components/header'
// import MyFooter from '../components/footer'
export default {
  components: {
    MyHeader
    // MyFooter
  }
}
</script>

<style>
html {
  font-family: 'Source Sans Pro', -apple-system, BlinkMacSystemFont, 'Segoe UI',
    Roboto, 'Helvetica Neue', Arial, sans-serif;
  font-size: 14px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
  overflow: scroll;
}

html::-webkit-scrollbar {
  width: 0px;
  opacity: 0;
  -webkit-overflow-scrolling: touch;
}

*,
*:before,
*:after {
  box-sizing: border-box;
  margin: 0;
}
</style>
