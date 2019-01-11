<template>
  <div class="my-meetings">
    <i-header text="我的会议"></i-header>

    <div v-if="false" class="no-meeting">还没有预约会议哦！</div>

    <div v-if="true" class="tabs-main">
      <van-tabs v-model="activeTabs" animated>
        <van-tab v-for="(tab, index) in tabsList" :title="tab" :key="index">
          <div class="tab-item">

            <meeting-info v-if="index===0" @go-detail="goDetail">
              <div v-if="index===0" class="bottom-btn">
                <button class="pay pay-cancel btn">取消申请</button>
                <button class="pay btn" @click="payDeposit">支付保证金</button>
              </div>
            </meeting-info>

            <meeting-info v-if="index===1" @go-detail="goDetail">
              <div slot="container">
                <i-steps :active-step="activeStep" :active-step-list="activeStepList"></i-steps>
              </div>
              <div class="bottom-btn audit-btn">
                <button class="audit btn">申请退款</button>
              </div>
            </meeting-info>

            <meeting-info v-if="index===2" @go-detail="goDetail">
              <div class="bottom-btn">
                <span class="list-status">会议状态：已结束</span>
                <button class="audit btn">申请退款</button>
              </div>
            </meeting-info>
          </div>
        </van-tab>
      </van-tabs>
    </div>

    <div class="bottom">
      <i-footer text="申请会议" @show="showConditions = true"></i-footer>
    </div>

    <!-- 申请会议条款 -->
    <van-dialog
      v-model="showConditions"
      show-cancel-button
      closeOnClickOverlay
      title="条款"
      :message="message"
      confirm-button-text="接受"
      cancel-button-text="不接受"
      @confirm="acceptConditions"
    ></van-dialog>

  </div>
</template>
<script>
import IHeader from '../components/i-header'
import IFooter from '../components/i-footer'
import ISteps from '../components/i-steps'
import MeetingInfo from '../components/meeting-info'

export default {
  name: 'my-meetings',
  components: {
    IHeader,
    MeetingInfo,
    IFooter,
    ISteps
  },
  data () {
    return {
      activeTabs: 0,
      tabsList: ['待支付', '审批中', '会议列表'],
      activeStepList: ['核实信息', '市场评定', '审批完成'],
      activeStep: 1,
      showConditions: false,
      message: '条款内容条款内容条款内容条款内容条款内容条款内容条款内容条款内容条款内容条款内容条款内容条款内'
    }
  },
  created () {},
  mounted () {},
  methods: {
    // 接受条款
    acceptConditions () {
      this.$router.push('/apply-meeting')
    },
    // 会议详情页
    goDetail () {
      this.$router.push('/meeting-detail')
    },
    // 支付保证金
    payDeposit () {
      this.$router.push('/pay-deposit')
    }
  }
}
</script>
<style lang="less">
.my-meetings{
  .no-meeting{
    margin-top: 80px;
    font-size: 32px;
    text-align: center;
    color: #333333;
  }
  .tabs-main{
    margin-bottom: 120px;
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
  }
}
</style>
