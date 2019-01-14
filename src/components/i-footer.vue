<template>
  <div class="i-footer">
    <slot></slot>
  </div>
</template>
<script>
export default {
  name: 'i-footer',
  props: {
    text: {
      type: String,
      default: ''
    }
  },
  data () {
    return {
      message: ''
    }
  },
  created () {},
  mounted () {},
  methods: {
    show () {
      this.$emit('show')
    }
  }
}
</script>
<style lang="less">
.i-footer{
  width: 100%;
  position: fixed;
  left: 0;
  bottom: 0;
  padding: 25px 30px;
  box-sizing: border-box;
  background: #fff;
  box-shadow:0px -1px 8px 0px rgba(0, 0, 0, 0.1);
  z-index: 2;
  .btn{
    width: 100%;
    padding: 24px 0 24px;
    color: #fff;
    border-radius: 10px;
    font-size: 32px;
    background-color: #3FB6FA;
  }
}
</style>
