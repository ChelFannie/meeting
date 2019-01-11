<template>
  <div class="pay-deposit">
    <i-header text="支付保证金"></i-header>

    <div class="content">
      <meeting-info class="meeting-info" :icon="false"></meeting-info>
    </div>

    <div class="pay">
      <span>保证金金额：1000元</span>
      <span>待支付时间：29:59</span>
    </div>

    <div class="bottom">
      <span>总金额：1000元</span>
      <button class="btn">支付</button>
    </div>
  </div>
</template>
<script>
import IHeader from '../components/i-header'
import MeetingInfo from '../components/meeting-info'

export default {
  name: 'pay-deposit',
  components: {
    IHeader,
    MeetingInfo
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
.pay-deposit{
  .content{
    .meeting-info{
      margin-bottom: 20px;
      background-color: #fff;
    }
  }
  .pay{
    width: 750px;
    height: 100px;
    padding: 0 30px;
    box-sizing: border-box;
    background-color: #fff;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    font-size:28px;
  }
  .bottom{
    width: 750px;
    box-sizing: border-box;
    position: fixed;
    left: 0;
    bottom: 0;
    padding: 20px 30px;
    background: #fff;
    box-shadow:0px -1px 8px 0px rgba(0, 0, 0, 0.1);
    z-index: 2;
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size:32px;
    color: #333333;
    .btn{
      height: 90px;
      width: 300px;
      color: #fff;
      background-color: #3FB6FA;
      border-radius: 10px;
    }
  }
}
</style>
