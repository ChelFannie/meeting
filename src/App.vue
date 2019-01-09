<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'App'
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
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #000;
  width: 100%;
  min-height: 100vh;
  background: #f7f7f7;
}
</style>
