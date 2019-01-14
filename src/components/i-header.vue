<template>
  <div class="i-header">
    <div class="top">
      <van-icon @click="back" name="arrow-left"/>
      <span class="top-text">{{text}}</span>
    </div>
    <slot></slot>
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
  methods: {
    back () {
      this.$emit('back')
    }
  }
}
</script>
<style lang="less">
.i-header {
  position: fixed;
  left: 0;
  top: 0;
  z-index: 2;
  background: #fff;
  width: 100%;
  font-size: 0;
  .top{
    width: 100%;
    height: 88px;
    line-height: 88px;
    text-align: center;
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
}
</style>
