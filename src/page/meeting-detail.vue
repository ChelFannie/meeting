<template>
  <div class="meeting-detail">
    <i-header text="会议详情"></i-header>

    <div class="content">
    </div>
  </div>
</template>
<script>
import IHeader from '../components/i-header'

export default {
  name: 'meeting-detail',
  components: {
    IHeader
  },
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
