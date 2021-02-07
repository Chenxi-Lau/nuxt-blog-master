<!--
 * @Author: your name
 * @Date: 2020-09-22 09:07:32
 * @LastEditTime: 2021-02-05 16:44:18
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \nuxt-blog-master\pages\index.vue
-->
<template>
  <el-container class="home-wrapper">
    <el-aside class="home-aside" width="260px">
      <h3> 目 录 </h3>
      <ul class="content">
        <li v-for="(item,index) in articlesListByMonth" :key="index">
          <h3>{{item.month}}</h3>
        </li>
      </ul>
    </el-aside>
    <el-main class="home-main">
    </el-main>
  </el-container>
</template>

<script>
export default {
  loading: true,
  async asyncData ({ $axios }) {
    const { code, data } = await $axios.$get(`/articles/countByMonthOrDay?countType=month`)
    if (code === '0' && data) {
      return {
        articlesListByMonth: data
      }
    }
  }
}
</script>

<style lang="less" scoped>
.home-wrapper {
  padding-top: 80px;
  height: 100%;
  width: 100%;
  .home-aside {
    width: 260px;
    height: calc(100vh - 98px);
    .content {
      min-height: calc(100% - 20px);
    }
  }
  .home-main {
    width: calc(100% - 260px);
    height: calc(100vh - 98px);
  }
}
</style>
