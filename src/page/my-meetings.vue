<template>
  <div class="my-meetings">
    <i-header text="我的会议"></i-header>
    <div class="tabs-main">
      <van-tabs v-model="activeTabs" sticky animated>
        <van-tab v-for="(tab, index) in tabsList" :title="tab" :key="index">
          <div class="tab-item">
            <meeting-info @go-detail="goDetail">
              <div v-if="index===1" slot="container">
                <van-steps :active="activeStep">
                  <van-step v-for="(step, index) in activeStepList" :key="index">{{step}}</van-step>
                </van-steps>
              </div>
              <div v-if="index===0" class="bottom-btn">
                <button class="pay pay-cancel btn">取消申请</button>
                <button class="pay btn">支付保证金</button>
              </div>
              <div v-if="index===1" class="bottom-btn audit-btn">
                <button class="audit btn">申请退款</button>
              </div>
              <div v-if="index===2" class="bottom-btn">
                <span class="list-status">会议状态：已结束</span>
                <button class="audit btn">申请退款</button>
              </div>
            </meeting-info>
          </div>
        </van-tab>
      </van-tabs>
    </div>
  </div>
</template>
<script>
import IHeader from '../components/i-header'
import MeetingInfo from '../components/meeting-info'
export default {
  name: 'my-meetings',
  components: {
    IHeader,
    MeetingInfo
  },
  data () {
    return {
      activeTabs: 0,
      tabsList: ['待支付', '审批中', '会议列表'],
      activeStepList: ['核实信息', '市场评定', '审批完成'],
      activeStep: 1
    }
  },
  created () {},
  mounted () {},
  methods: {
    goDetail () {
      this.$router.push('/meeting-detail')
    }
  }
}
</script>
<style lang="less">
.my-meetings{
  .tabs-main{
    .van-tabs--line{
      padding-top: 100px;
    }
    .van-tabs--line .van-tabs__wrap{
      height: 80px;
    }
    .van-hairline--top-bottom:after{
      border: none;
    }
    .van-tabs__nav{
      align-items: center;
      .van-tabs__line{
        background-color: rgba(43,166,236);
      }
      .van-tab{
        font-size: 32px;
        color:rgba(153,153,153);
      }
      .van-tab--active{
        span{
          color:rgba(43,166,236);
        }
      }
    }
  }
  .tab-item{
    background: #fff;
    .bottom-btn{
      padding: 20px 30px;
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      .btn{
        color:rgba(255,255,255);
        font-size: 32px;
        border-radius: 10px;
        text-align: center;
        background: #3FB6FA;
      }
      .pay{
        width: 320px;
        height: 90px;
        line-height: 90px;
      }
      .pay-cancel{
        background: #CCCCCC;
      }
      .list-status{
        height: 80px;
        line-height: 80px;
      }
    }
    .audit-btn{
      justify-content: flex-end;
    }
    .list{
      justify-content: space-between;
    }
    .audit{
      width: 160px;
      height: 80px;
      line-height: 80px;
    }

    /* 进度样式 */
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
    /* 进度样式 */
  }
}
</style>
