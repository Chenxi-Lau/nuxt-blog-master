<!--
 * @Author: your name
 * @Date: 2020-09-22 14:52:35
 * @LastEditTime: 2020-09-22 20:49:40
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \nuxt-blog-master\components\header.vue
-->
<template>
  <div class="header-container">
    <div>
      <el-avatar
        size="large"
        :src="circleUrl"
      ></el-avatar>
      <h4>GoodMorning</h4>
      <h5>纸上得来终觉浅，绝知此事要躬行</h5>
      <ul class="menu">
        <li class="menu-item">
          <a href="">
            <i class="el-icon-edit"></i>
            主页
          </a>
        </li>
        <li class="menu-item">
          <a href="">
            <i class="el-icon-edit"></i>
            博文
          </a>
        </li>
        <li class="menu-item">
          <a href="">
            <i class="el-icon-edit"></i>
            标签
          </a>
        </li>
        <li class="menu-item">
          <a href="">
            <i class="el-icon-edit"></i>
            关于
          </a>
        </li>
        <li class="menu-item">
          <a href="">
            <i class="el-icon-edit"></i>
            搜索
          </a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'header',
  data () {
    return {
      circleUrl: require('../assets/images/avatar.jpg')
    }
  }
}
</script>

<style lang="less" scoped>
.header-container {
  width: 100%;
  height: 400px;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  .el-avatar--large {
    width: 100px;
    height: 100px;
  }
  .menu {
    height: 50px;
    margin: 20px 0px;
    padding-left: 0px;
    .menu-item {
      display: inline-block;
      margin: 20px;
      list-style: none;
      .el-icon-edit {
        display: block;
        line-height: 2;
        margin-right: 0;
        width: 100%;
      }
    }
  }
}
</style>
