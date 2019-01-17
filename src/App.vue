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
