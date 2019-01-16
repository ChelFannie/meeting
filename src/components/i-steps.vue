<template>
  <div class="i-steps">
    <div class="text">{{progressText}}</div>
    <van-steps :active="activeStep">
      <van-step v-for="(step, index) in activeStepList" :key="index">
        <p>{{step}}</p>
        <p class="audit-date">2018.01.01</p>
      </van-step>
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
    progressText: {
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
  mounted () {
    if (this.meetingStatus === '审核不通过') {
      document.getElementsByClassName('van-step--process')[0].getElementsByClassName('van-icon')[0].classList.remove('van-icon-checked')
      document.getElementsByClassName('van-step--process')[0].getElementsByClassName('van-icon')[0].classList.add('van-icon-clear')
    }
  },
  methods: {}
}
</script>
<style lang="less">
.i-steps{
  .text{
    font-size:28px;
    color: #333333;
    text-align: center;
  }
  .van-steps--horizontal{
    // padding: 0 30px 30px;
    padding: 0;
    .van-steps__items.van-steps__items--alone{
      // padding-top: 0;
      padding-top: 40px;
    }
    .van-steps__items{
      // padding-bottom: 60px;
      padding-bottom: 30px;
      margin: 0;
    }
    .van-step--horizontal:last-child .van-step__circle-container{
      right: -11px;
    }
    .van-step--horizontal .van-step__circle-container{
      background-color: #f7f7f7;
    }
    .van-step__circle{
      width: 10px;
      height: 10px;
    }
    .van-step__title{
      font-size: 24px;
      position: relative;
      top: 60px;
      text-align: right;
      .audit-date{
        position: relative;
        bottom: 115px;
      }
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
      font-size: 24px;
    }
    .van-step--process{
      .van-step__title{
        color: #3FB6FA!important;
      }
      .van-icon-checked{
        color: #3FB6FA!important;
      }
      .van-icon-clear{
        color: #999!important;
      }
    }
  }
}
</style>
