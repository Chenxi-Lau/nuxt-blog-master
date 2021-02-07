<!--
 * @Author: 刘晨曦
 * @Date: 2021-02-04 15:16:51
 * @LastEditTime: 2021-02-04 15:27:00
 * @LastEditors: Please set LastEditors
 * @Description: 面包屑组件
 * @FilePath: \nuxt-blog-master\components\breadcrumb.vue
-->
<template>
  <div class="breadcrumb-wrapper">
    <el-breadcrumb separator="/">
      <el-breadcrumb-item v-for="(item,index) in breadcrumbList" :key="index" :to="{path:item.path}">{{item.label}}</el-breadcrumb-item>
    </el-breadcrumb>
  </div>
</template>

<script>
export default {
  name: 'Breadcrumb',
  props: {
    breadcrumbList: {
      type: Array,
      default: () => [
        {
          path: '/',
          label: '首页'
        }
      ]
    }
  }
}
</script>

<style lang="less" scoped>
.breadcrumb-wrapper {
  height: 100%;
  display: flex;
  align-items: center;
}
</style>
