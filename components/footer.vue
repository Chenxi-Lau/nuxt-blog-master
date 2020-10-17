<!--
 * @Author: your name
 * @Date: 2020-09-29 10:54:16
 * @LastEditTime: 2020-10-10 10:55:48
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \nuxt-blog-master\components\footer.vue
-->
<template>
  <div class="footer-container">
    <div class="footer-contact">
      <span>联系我：</span>
      <span>
        <a href="https://github.com/Chenxi-Lau" target="_blank">
          GitHub
        </a>
      </span>
      <span>|</span>
      <span>
        <a href="mailto:lcxcsy@126.com">
          邮箱
        </a>
      </span>
      <span>|</span>
      <span>
        <a href="https://www.cnblogs.com/lcxcsy/" target="_blank">
          博客园
        </a>
      </span>
    </div>
    <div class="footer-back2Top">
      <a href="#">
        <i class="el-icon-top"></i></a>
    </div>
    <div class='footer-copyright'>
      Copyright © 2020 - 2020 GoodMorning. All Rights Reserved.
    </div>
  </div>
</template>

<script>
export default {
  name: ''
}
</script>

<style lang="less" scoped>
.footer-container {
  width: 100%;
  height: 90px;
  position: relative;
  // margin-top: -90px;
  color: whitesmoke;
  text-align: center;
  clear: both;
  .footer-contact {
    padding: 6px;
    & a {
      color: whitesmoke;
      text-decoration: none;
      &:hover {
        color: aqua;
      }
    }
  }
  .footer-back2Top {
    position: absolute;
    width: 24px;
    height: 24px;
    border: 1px solid black;
    border-radius: 1px;
    & a {
      color: whitesmoke;
      &:hover {
        color: aqua;
      }
    }
  }
  .footer-copyright {
    color: whitesmoke;
  }
}
</style>
