<!--
 * @Author: your name
 * @Date: 2020-09-25 21:11:04
 * @LastEditTime: 2021-02-05 15:03:07
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \nuxt-blog-master\pages\artical.vue
-->
<template>
  <div class="container">
    <article class='article' v-for="item in articleLists" :key="item.id">
      <header class="article-header">
        <h2>
          <nuxt-link :to="`/detail/${item.id}`">{{item.title}}</nuxt-link>
        </h2>
        <div>
          <span>
            <font color='red'>置顶</font>
          </span>
          <span>
            <span>发表于：{{item.createdTime}}</span>
          </span>
          <span>
            <span>分类于:
              <a href="">{{item.tagName}}</a>
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
        {{item.metaDescription}}
      </div>
      <footer class="article-footer">
        <div>
          <nuxt-link :to="`/detail/${item.id}`">阅读全文</nuxt-link>
        </div>
      </footer>
    </article>
  </div>
</template>

<script>
export default {
  name: 'Articles',
  async asyncData ({ $axios }) {
    // 获取文章列表
    const { code, data } = await $axios.$get('/articles/list', {
      params: { status: 'published' }
    })
    if (code === '0' && data) {
      return {
        articleLists: data.list
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
