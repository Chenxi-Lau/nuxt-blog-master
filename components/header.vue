<!--
 * @Author: your name
 * @Date: 2020-09-22 14:52:35
 * @LastEditTime: 2020-10-10 09:37:57
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
      <ul class="header-title">
        <li class="header-subtitle" v-for="(item,index) in tags" :key="index">
          <nuxt-link :to="item.href" class="subtitle-link">
            <svg class="icon" aria-hidden="true">
              <use :xlink:href="item.class"></use>
            </svg>
            {{item.name}}
          </nuxt-link>
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
          href: '/tags',
          class: '#icon-biaoqianpai'
        }, {
          name: '关于',
          href: '/about',
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
  color: rgb(233, 222, 222);
  .el-avatar--large {
    width: 100px;
    height: 100px;
  }
  .header-title {
    width: 100%;
    margin: 20px 0px;
    padding-left: 0px;
    .header-subtitle {
      display: inline-block;
      margin: 0 36px;
      list-style: none;
      .subtitle-link {
        color: #ef5246;
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
