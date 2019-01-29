<template>
  <div id="app">
    <!-- <transition :name="transitionName"> -->
      <keep-alive>
        <!-- <navigation> -->
          <router-view></router-view>
        <!-- </navigation> -->
      </keep-alive>
    <!-- </transition> -->
  </div>
</template>

<script>
import req from './api/login/login.js'
import {getCookie} from './utils/getCookie.js'
import md5 from 'js-md5'
export default {
  name: 'App',
  watch: {
    '$route' (newVal, oldValue) {
      document.title = newVal.name
    }
  },
  data () {
    return {
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
    // req('login', {agentId: this.$store.state.agentId}).then(res => {
    //   console.log(res, 'res')
    // })
  },
  mounted () {
    this.getAgentId()
  },
  methods: {
    getAgentId () {
      let cookieObj = getCookie()
      if (!cookieObj.robot_user_ID) {
        this.$toast.fail({
          message: '未登陆'
        })
        return
      }
      cookieObj.agentId = parseInt(cookieObj.robot_user_ID)
      this.$store.commit('agentId', cookieObj.agentId)
      localStorage.setItem('agentId', cookieObj.agentId)
      // let sign = `timestamp=${(new Date()).getTime()}&userId=${this.$store.state.agentId}&secretKey=zhibankeji`
      let sign = `agentId=${this.$store.state.agentId}&timestamp=${(new Date()).getTime()}&secretKey=zhibankeji`
      let params = {
        // userId: this.$store.state.agentId,
        agentId: this.$store.state.agentId,
        timestamp: (new Date()).getTime(),
        sign: md5(sign)
      }
      console.log(params, 'params')
      req('login', params).then(res => {
        console.log(res, 'res')
      })
    }
  }
}
</script>

<style>
*{
  margin: 0;
  padding: 0;
}
html, body {
  width: 100%;
  min-height: 100vh;
  padding: 0;
  margin: 0;
  list-style: none;
}
a {
  text-decoration: none;
}
li{
  list-style: none;
}
#app {
  font-family: 'Microsoft YaHei';
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #000;
  width: 100%;
  min-height: 100vh;
  background: #f7f7f7;
}
</style>
