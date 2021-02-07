<!--
 * @Author: your name
 * @Date: 2020-09-22 14:52:35
 * @LastEditTime: 2021-02-05 16:33:26
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \nuxt-blog-master\components\header.vue
-->
<template>
  <div class="header-wrapper">
    <!-- <el-avatar size="mini" :src="circleUrl"></el-avatar> -->
    <span class="header-name"> Morning's Blog </span>
    <Breadcrumb></Breadcrumb>
    <span class="header-nav">
      <span>
        <nuxt-link v-for="(item, index) in headerNav" :key="index" :to="item.href">
          {{item.name}}
        </nuxt-link>
      </span>
    </span>
    <!-- <el-avatar size="large" :src="circleUrl"></el-avatar> -->
    <!-- <el-avatar size="large" :src="circleUrl"></el-avatar>
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
      </ul> -->
    <!-- <el-divider></el-divider> -->
  </div>
</template>

<script>
import Breadcrumb from '@/components/breadcrumb'
export default {
  name: 'BlogHeader',
  components: {
    Breadcrumb
  },
  data () {
    return {
      circleUrl: require('../assets/images/avatar.jpg'),
      headerNav: [
        {
          name: 'Home',
          href: '/',
          class: '#icon-zhuye-'
        }, {
          name: '文章',
          href: '/articles',
          class: '#icon-wenzhanglan'
        }, {
          name: '归档',
          href: '/tags',
          class: '#icon-biaoqianpai'
        }, {
          name: '关于',
          href: '/aboutMe',
          class: '#icon-nb-'
        }
      ]
    }
  }
}
</script>

<style lang="less" scoped>
@import '../assets/less/mixins.less';
.header-wrapper {
  position: fixed;
  z-index: 999;
  width: 100%;
  height: 60px;
  top: 0;
  display: flex;
  background: white;
  .box-shadow-bottom();
  .header-name {
    .header-item();
    float: left;
  }
  .header-nav {
    .header-item();
    &:span {
      padding: 0px 6px;
    }
  }
}
</style>
