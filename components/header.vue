<!--
 * @Author: your name
 * @Date: 2020-09-22 14:52:35
 * @LastEditTime: 2020-09-28 20:12:11
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \nuxt-blog-master\components\header.vue
-->
<template>
  <div class="header-container">
    <div>
      <el-avatar size="large" :src="circleUrl"></el-avatar>
      <h4>GoodMorning</h4>
      <h5>纸上得来终觉浅，绝知此事要躬行</h5>
      <ul class="menu">
        <li class="menu-item" v-for="(item,index) in tags" :key="index">
          <a :href="item.href" class="item-link">
            <svg class="icon" aria-hidden="true">
              <use :xlink:href="item.class"></use>
            </svg>
            {{item.name}}
          </a>
        </li>
      </ul>
      <el-divider></el-divider>
    </div>
  </div>
</template>

<script>
export default {
  name: 'default-header',
  data () {
    return {
      circleUrl: require('../assets/images/avatar.jpg'),
      tags: [
        {
          name: '主页',
          href: '/',
          class: '#icon-zhuye-'
        }, {
          name: '博文',
          href: '/article',
          class: '#icon-wenzhanglan'
        }, {
          name: '标签',
          href: '/article',
          class: '#icon-biaoqianpai'
        }, {
          name: '关于',
          href: '/article',
          class: '#icon-nb-'
        }, {
          name: '搜索',
          href: '/article',
          class: '#icon-sousuo'
        }
      ]
    }
  }
}
</script>

<style lang="less" scoped>
.header-container {
  width: 100%;
  height: 360px;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  .el-avatar--large {
    width: 100px;
    height: 100px;
  }
  .menu {
    width: 100%;
    margin: 20px 0px;
    padding-left: 0px;
    .menu-item {
      display: inline-block;
      margin: 0 36px;
      list-style: none;
      .item-link {
        color: #555;
        outline: 0;
        text-decoration: none;
        overflow-wrap: break-word;
        word-wrap: break-word;
        cursor: pointer;
        &:hover {
          color: red;
        }
      }
    }
  }
}
</style>
