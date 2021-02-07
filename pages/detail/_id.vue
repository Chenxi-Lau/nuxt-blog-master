<!--
 * @Author: liuchenxi
 * @Date: 2020-09-29 14:09:35
 * @LastEditTime: 2021-02-05 15:01:16
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \nuxt-blog-master\pages\detail.vue
-->
<template>
  <div class="detail-container">
    <header class="detail-header">
      <h3 style="font-size：30px">{{article.title}}</h3>
      <div>
        <span>发表于：{{article.updatedTime}}</span>
        <span>|</span>
        <span>标签：{{article.tagName}}</span>
      </div>
    </header>
    <div class="detail-body">
      <div v-html="article.html" class="md"></div>
    </div>
  </div>
</template>

<script>
import marked from 'marked'
import highlight from 'highlight.js'
marked.setOptions({
  renderer: new marked.Renderer(),
  gfm: true,
  tables: true,
  breaks: false,
  pedantic: false,
  sanitize: false,
  smartLists: true,
  smartypants: false,
  highlight: function (code) {
    return highlight.highlightAuto(code).value
  }
})
export default {
  head () {
    return {
      title: this.article.title,
      meta: [
        { hid: 'description', name: 'description', content: this.article.metaDescription },
        { name: 'keywords', content: this.article.tagName }
      ]
    }
  },
  // params为 nuxt-link 携带的参数
  validate ({ params }) {
    return /^\d+$/.test(params.id)
  },
  // 异步获取数据
  async asyncData ({ $axios, params }) {
    const { code, data } = await $axios.$get(`/articles/detail?id=${params.id}`)
    data.html = marked(data.markdown)
    if (code === '0' && data) {
      return {
        article: data
      }
    }
  }
}
</script>

<style lang="less" scoped>
.detail-container {
  width: 80%;
  // min-height: 800px;
  margin: 120px auto;
  background: white;
  .detail-header {
    text-align: center;
  }
  .detail-body {
    padding: 20px 30px;
    min-height: 600px;
  }
}
</style>
