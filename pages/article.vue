<!--
 * @Author: your name
 * @Date: 2020-09-25 21:11:04
 * @LastEditTime: 2020-09-28 20:46:46
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \nuxt-blog-master\pages\artical.vue
-->
<template>
  <div class="container">
    <transition-group name="list">
      <article class='article' v-for="item in articleLists" :key="item.id">
        <header class="article-header">
          <h2> <a href="">{{item.title}}</a> </h2>
          <div>
            <span>
              <font color='red'>置顶</font>
            </span>
            <span>
              <span>发表于：{{item.updated_at}}</span>
            </span>
            <span>
              <span>分类于：{{item.updated_at}}</span>
            </span>
            <span>
              <span>阅读次数：{{item.updated_at}}</span>
            </span>
            <div class="article-content">
              <span>本文字数</span>
              <span>阅读时长</span>
            </div>
          </div>
        </header>
        <div class="article-body">
          {{item.meta_description}}
        </div>
        <footer class="article-footer">
          <div>
            <a href="">阅读全文</a>
          </div>
        </footer>
      </article>
    </transition-group>
  </div>
</template>

<script>
import { queryArticleList } from '@/api/index'
export default {
  name: 'articles',

  data () {
    return {
      articleLists: []
    }
  },
  mounted () {
    this.getArticlesList()
  },
  methods: {
    async getArticlesList () {
      try {
        const { data } = await queryArticleList()
        if (data.code === '0') {
          this.articleLists = data.data
        }
      } catch (err) {
        console.log(err)
      }
    }
  }
}
</script>

<style lang="less" scoped>
.container {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  .article {
    margin-bottom: 36px;
    .article-header {
      // width: 200%;
    }
    .article-body {
      width: 800px;
    }
  }
}
</style>
