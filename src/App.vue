<template>
  <div id="app">
    <!-- <transition :name="transitionName"> -->
    <keep-alive>
      <!-- <navigation> -->
      <router-view></router-view>
      <!-- </navigation> -->
    </keep-alive>
    <!-- 登录提示框 -->
    <van-dialog
      v-model="visible"
      closeOnClickOverlay
      message="请登录！"
      confirm-button-text="登录"
      @confirm="login">
    </van-dialog>
  </div>
</template>

<script>
import req from './api/login/login.js'
import { getCookie } from './utils/getCookie.js'
import md5 from 'js-md5'
export default {
  name: 'App',
  watch: {
    $route (newVal, oldValue) {
      document.title = newVal.name
    }
  },
  data () {
    return {
      visible: false
      // transitionName: 'fade'
    }
  },
  created () {
    // this.$navigation.on('forward', () => {
    //   this.transitionName = 'pageRight'
    // })
    // this.$navigation.on('back', () => {
    //   this.transitionName = 'pageLeft'
    // })
  },
  mounted () {
    this.getAgentId()
  },
  methods: {
    getAgentId () {
      let cookieObj = getCookie()
      // 检查是否从主项目登录进入
      if (!cookieObj.robot_user_ID) {
        this.visible = true
        return
      }
      cookieObj.agentId = parseInt(cookieObj.robot_user_ID)
      this.$store.commit('agentId', cookieObj.agentId)
      localStorage.setItem('agentId', cookieObj.agentId)
      let sign = `agentId=${
        this.$store.state.agentId
      }&timestamp=${new Date().getTime()}&secretKey=zhibankeji`
      let params = {
        agentId: this.$store.state.agentId,
        timestamp: new Date().getTime(),
        sign: md5(sign)
      }
      req('login', params)
        .then(res => {
          // console.log(res)
          localStorage.setItem('token', res.data.token)
          this.$store.commit('token', res.data.token)
        })
        .catch(error => {
          // console.log(error.response, 5555)
          let res = error.response.data.error
          if (res.code === 401) {
            this.visible = true
            console.log('未登录')
            return
          }
          this.$toast.fail({
            message: res.message,
            duration: 3000
          })
        })
    },
    login () {
      if (window.location.href.indexOf('http://you.zhibankeji.com/Robot_jingxiaoshang') > -1) {
        // 线上环境
        window.location.href = 'http://you.zhibankeji.com/Robot_jingxiaoshang/login/do.php'
        return
      }
      // 测试环境
      window.location.href = 'http://test.youchuang.zhibankeji.com:8081/Robot_jingxiaoshang/login/do.php'
    }
  }
}
</script>

<style>
* {
  margin: 0;
  padding: 0;
}
html,
body {
  width: 100%;
  min-height: 100vh;
  padding: 0;
  margin: 0;
  list-style: none;
}
a {
  text-decoration: none;
}
li {
  list-style: none;
}
#app {
  font-family: "Microsoft YaHei";
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #000;
  width: 100%;
  min-height: 100vh;
  background: #f7f7f7;
}
</style>
