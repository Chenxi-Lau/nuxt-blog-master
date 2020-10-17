<!--
 * @Author: liuchenxi
 * @Date: 2020-09-29 14:09:35
 * @LastEditTime: 2020-10-10 09:26:34
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \nuxt-blog-master\pages\detail.vue
-->
<template>
  <transition name='detail'>
    <div class="detail-container">
      <header class="detail-header">
        <h3 style="font-size：30px">{{article.title}}</h3>
        <div>
          <span>发表于：{{article.updated_at}}</span>
          <span>|</span>
          <span>标签：{{article.tag_name}}</span>
        </div>
      </header>
      <div class="detail-body">
        <div v-html="article.html" class="md"></div>
      </div>
    </div>
  </transition>
</template>

<script>
import marked from 'marked'
import moment from 'moment'
import highlight from 'highlight.js'
import '../../assets/css/yeh-md-theme.css'
import '../../assets/css/ocean.min.css'
import { getArticlesById } from '@/api/index'
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
        { hid: 'description', name: 'description', content: this.article.meta_description },
        { name: 'keywords', content: this.article.tag_name }
      ]
    }
  },

  // params为 nuxt-link 携带的参数
  validate ({ params }) {
    return /^\d+$/.test(params.id)
  },

  // 异步获取数据
  async asyncData ({ params, error }) {
    const { status, data: { code, list } } = await getArticlesById(params)
      .catch(error => {
        error({ status: 400, msg: error })
      })
    list.updated_at = moment(list.updated_at).format('YYYY-MM-DD')
    list.html = marked(list.markdown)
    if (status === 200 && code === '0') {
      return {
        article: list
      }
    }
  }
}
</script>

<style lang="less" scoped>
.detail-container {
  width: 80%;
  min-height: 800px;
  margin: 0 auto;
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
