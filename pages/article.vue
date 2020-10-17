<!--
 * @Author: your name
 * @Date: 2020-09-25 21:11:04
 * @LastEditTime: 2020-10-10 09:23:18
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
              <span>分类于:
                <a href="">{{item.tag_name}}</a>
              </span>
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
            <nuxt-link :to="`/detail/${item.id}`">阅读全文</nuxt-link>
          </div>
        </footer>
      </article>
    </transition-group>
  </div>
</template>

<script>
import moment from 'moment'
import { queryArticleList } from '@/api/index'
export default {
  async asyncData ({ error }) {
    const params = { status: 'published' }
    const { status, data: { code, dataList } } = await queryArticleList(params)
      .catch(error => {
        error({ status: 400, msg: error })
      })
    dataList.list.forEach(v => v.updated_at = moment(v.updated_at).format('YYYY-MM-DD HH:mm:ss'))
    if (status === 200 && code === '0') {
      return {
        articleLists: dataList.list
      }
    }
  }
}
</script>

<style lang="less" scoped>
.container {
  width: 80%;
  background: white;
  margin: 0 auto;
  .list-enter-active,
  .list-leave-active {
    opacity: 0;
    animation: fade-in 4s ease normal;
  }

  .list-enter,
  .list-leave-active {
    animation: fade-out 0.5s ease normal;
  }

  @keyframes fade-in {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }

  @keyframes fade-out {
    0% {
      opacity: 1;
    }
    100% {
      opacity: 0;
    }
  }

  .article {
    margin-bottom: 36px;
    & a {
      color: black;
      text-decoration: none;
      &:hover {
        color: burlywood;
      }
    }
    .article-header {
      & > h2 {
        margin-bottom: 12px;
      }
    }
    .article-body {
      width: 100%;
    }
    .article-footer {
      width: 100%;
    }
  }
}
</style>
