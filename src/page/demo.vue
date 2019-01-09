<template>
  <div class="demo">
    <van-cell-group>
      <van-field
        v-model="message"
        label="留言"
        type="textarea"
        placeholder="请输入留言"
        rows="1"
        autosize
      />
    </van-cell-group>
  </div>
</template>
<script>
export default {
  name: 'demo',
  data () {
    return {
      message: ''
    }
  },
  created () {},
  mounted () {},
  methods: {}
}
</script>
<style lang="less">
</style>
