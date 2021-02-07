<!--
 * @Author: liuchenxi
 * @Date: 2020-09-30 17:09:02
 * @LastEditTime: 2021-02-05 16:33:05
 * @LastEditors: Please set LastEditors
 * @Description: 文章的归档
 * @FilePath: \nuxt-blog-master\pages\tags.vue
-->
<template>
  <div>
    <ul>
      <li v-for="item in tagsList" :key="item.tag_id">
        <span>{{item.name}}</span>
        <span>({{item.count}})</span>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'archives',
  async asyncData ({ $axios }) {
    const { code, data } = await $axios.$get('')
    if (code === '0' && data) {
      return {
        tagsList: dataList
      }
    }
  }
}
</script>

<style lang="less" scoped>
</style>
