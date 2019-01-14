<template>
  <div class="my-meetings">
    <i-header text="我的会议">
      <div class="status-line" @click="showStatus = true">
        <span>{{meetingStatus}}</span>
        <van-icon name="arrow-down" />
      </div>
    </i-header>

    <div v-if="false" class="no-meeting">还没有预约会议哦！</div>

    <div v-if="true" class="tabs-main">
      <meeting-info v-for="(i, index) in 3" :key="index" @go-detail="goDetail">
        <div class="buttom-btn" v-if="index===0">
          <button class="pay pay-cancel btn">取消申请</button>
          <button class="pay btn" @click="payDeposit">支付保证金</button>
        </div>

        <div class="buttom-btn audit-btn" v-if="index===1">
          <button class="audit btn">申请退款</button>
        </div>

        <div class="buttom-btn" v-if="index===2">
          <span class="list-status">会议状态：已结束</span>
          <button class="audit btn">申请退款</button>
        </div>
      </meeting-info>
    </div>

    <i-footer>
      <button class="btn" @click="showConditions = true">申请会议</button>
    </i-footer>

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

    <!-- 展示状态选择 -->
    <van-actionsheet v-model="showStatus">
      <van-picker
        :columns="columns"
        show-toolbar
        @cancel="showStatus = false"
        @confirm="selectStatus" />
    </van-actionsheet>

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
      // 条款标志
      showConditions: false,
      // 条款内容
      message: '条款内容条款内容条款内容条款内容条款内容条款内容条款内容条款内容条款内容条款内容条款内容条款内',
      columns: ['全部', '预约中', '已预约', '预约失败', '已结束', '退款中', '已退款', '审核不通过'],
      // 状态标志
      showStatus: false,
      meetingStatus: '全部'
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
    },
    selectStatus (value) {
      this.showStatus = false
      this.meetingStatus = value
    }
  }
}
</script>
<style lang="less">
.my-meetings{
  height: 100vh;
  width: 100%;
  padding: 168px 0 140px;
  box-sizing: border-box;
  .no-meeting{
    margin-top: 80px;
    font-size: 32px;
    text-align: center;
    color: #333333;
  }
  .status-line{
    height: 80px;
    line-height: 80px;
    background-color: #fff;
    width: 100%;
    text-align: center;
    font-size:32px;
    .van-icon{
      margin-left: 10px;
      top: 4px;
    }
  }

  .tabs-main{
    width: 100%;
    height: 100%;
    overflow: scroll;
    padding-top: 20px;
    box-sizing: border-box;
    .meeting-info{
      background: #fff;
      margin-bottom: 20px;
      &:last-child{
        margin-bottom: 0;
      }
      .buttom-btn{
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
        padding: 20px 30px;
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
}
</style>
