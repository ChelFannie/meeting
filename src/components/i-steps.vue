<template>
  <div class="i-steps">
    <div v-if="meetingStatus" class="text">当前状态：{{meetingStatus}}</div>
    <van-steps :active="activeStep">
      <van-step v-for="(step, index) in activeStepList" :key="index">{{step}}</van-step>
    </van-steps>
  </div>
</template>
<script>
export default {
  name: 'i-steps',
  props: {
    meetingStatus: {
      type: String,
      default: ''
    },
    activeStep: {
      type: Number,
      default: 0
    },
    activeStepList: {
      type: Array,
      default: () => []
    }
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
.i-steps{
  .text{
    font-size: 32px;
    color: #333333;
    text-align: center;
  }
  .van-steps--horizontal{
    padding: 0 30px 30px;
    .van-steps__items.van-steps__items--alone{
      padding-top: 0;
    }
    .van-steps__items{
      padding-bottom: 60px;
      margin: 0;
    }
    .van-step--horizontal:last-child .van-step__circle-container{
      right: -11px;
    }
    .van-step__circle{
      width: 10px;
      height: 10px;
    }
    .van-step__title{
      font-size: 24px;
      position: relative;
      top: 55px;
    }
    .van-step__line{
      height: 6px;
      background-color: rgba(153,153,153);
    }
    .van-step--finish{
      color: #3FB6FA;
      .van-step__circle,
      .van-step__line{
        background-color: #3FB6FA;
      }
    }
    .van-step .van-icon{
      font-size: 20px;
    }
    .van-step--process{
      .van-step__title{
        color: #3FB6FA!important;
      }
      .van-icon-checked{
        color: #3FB6FA!important;
      }
    }
  }
}
</style>
