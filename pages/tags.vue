<!--
 * @Author: liuchenxi
 * @Date: 2020-09-30 17:09:02
 * @LastEditTime: 2020-10-10 09:23:07
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
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
import { getTagsList } from '@/api/index'
export default {
  name: 'tags',
  async asyncData ({ error }) {
    const { status, data: { code, dataList } } = await getTagsList()
      .catch(error => {
        error({ status: 400, msg: error })
      })
    if (status === 200 && code === '0') {
      return {
        tagsList: dataList
      }
    }
  }
}
</script>

<style lang="less" scoped>
</style>
