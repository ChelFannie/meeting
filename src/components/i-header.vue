<template>
  <div class="i-header">
    <van-icon @click="$router.go(-1)" name="arrow-left"/>
    <span class="top-text">{{text}}</span>
  </div>
</template>
<script>
export default {
  name: 'i-header',
  props: {
    text: String,
    default: ''
  },
  data () {
    return {}
  },
  created () {},
  mounted () {},
  methods: {}
}
</script>
<style lang="less">
.i-header {
  position: fixed;
  left: 0;
  top: 0;
  z-index: 1;
  background: #fff;
  width: 100%;
  height: 88px;
  line-height: 88px;
  text-align: center;
  box-shadow:0px -1px 8px 0px rgba(0, 0, 0, 0.1);
  .top-text {
    font-size: 36px;
    font-weight: 500;
    color: rgba(51, 51, 51, 1);
  }
  .van-icon {
    vertical-align: middle;
    left: -255px;
    font-size: 46px;
  }
}
</style>
