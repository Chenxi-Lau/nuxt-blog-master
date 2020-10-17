<!--
 * @Author: your name
 * @Date: 2020-10-10 09:17:43
 * @LastEditTime: 2020-10-10 10:46:19
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \nuxt-blog-master\pages\about.vue
-->
<template>
  <div class="cmd">
    <!-- 三个按钮 -->
    <div class="click">
      <div class="red"></div>
      <div class="yellow"></div>
      <div class="green"></div>
    </div>
    <!-- 顶部标题 -->
    <div class="title">
      <span>lovexhj - bash</span>
    </div>
    <!-- 终端内文字 -->
    <div class="cmdText">
      <span style="color: rgb(0, 190, 0);">root@nutssss</span>
      <span style="color: blue;">~</span>
      <span style="color: rgb(39, 39, 39);">./tianqi.sh</span>
      <br />
      <iframe scrolling="no" src="https://tianqiapi.com/api.php?style=tb&skin=pitaya" frameborder="0" width="350" height="24" allowtransparency="true"></iframe>
      <br />
      <span style="color: rgb(0, 190, 0);">root@nutssss</span>
      <span style="color: blue;">~</span>
      <span style="color: rgb(39, 39, 39);">cat /me.txt</span>
      <p>爱好计算机，会去自学自己感兴趣的一切东西</p>
      <p>略懂H5，C#开发；爱好折腾去解决一切问题</p>
      <p>同时我也很喜欢玩硬件，raspberry是我的最爱</p>
      <p>这条路我才刚刚迈开了我的第一步</p>
      <p>路上的坎一定会非常多，但</p>
      <p>在我眼里</p>
      <p>没有什么问题是尝试不能解决的，如果有那就多尝试几次甚至上百次</p>
      <p>即使前方的路看似绝境，也要有硬生生给自己开出一条路的勇气</p>
      <span style="color: rgb(0, 190, 0);">root@nutssss</span>
      <span style="color: blue;">~</span>
      <span style="color: rgb(39, 39, 39);">sudo rm -rf /过去的自己/*</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'aboutMe'
}
</script>

<style lang="less" scoped>
.cmd {
  width: 500px;
  height: 300px;
  border-radius: 10px 10px 5px 5px;
  overflow: hidden;
  background-color: rgba(255, 255, 255, 0.9);
  transition: all 0.3s;
  font-size: 14px;
  color: rgb(88, 89, 92);
  position: relative;
  top: 0;
  left: 0;
  margin: 0 auto;

  .title {
    width: 100%;
    height: 25px;
    background-image: linear-gradient(to top, rgb(184, 184, 184), white);
    font-size: 14px;
    line-height: 25px;
    span {
      display: inline-block;
      width: 70%;
      text-align: center;
    }
  }

  .click {
    margin-left: 10px;
    div {
      width: 10px;
      height: 10px;
      border-radius: 50%;
      margin: 8px 0 0 10px;
      float: left;
    }

    .red {
      background-color: #ff1b22;
      box-shadow: 0 0 1px #ff1b22;
      &:hover {
        background-color: #ff6268;
        box-shadow: 0 0 3px #ff1b22;
      }
    }

    .yellow {
      background-color: #ffaf00;
      box-shadow: 0 0 1px #ffaf00;
      &:hover {
        background-color: #ffd373;
        box-shadow: 0 0 3px #ffaf00;
      }
    }

    .green {
      background-color: #00931a;
      box-shadow: 0 0 1px #00931a;
      &:hover {
        background-color: rgb(0, 196, 36);
        box-shadow: 0 0 3px #00931a;
      }
    }
  }

  .title {
    width: 100%;
    height: 25px;
    background-image: linear-gradient(to top, rgb(184, 184, 184), white);
    font-size: 14px;
    line-height: 25px;
    span {
      display: inline-block;
      width: 70%;
      text-align: center;
    }
  }
  .cmdText {
    padding-top: 10px;
    padding-left: 15px;
    span {
      font-weight: 500;
    }
  }
}
</style>
