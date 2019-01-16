<template>
  <div class="meeting-detail">

    <div class="content">
      <div class="ceils">
        <i-filed :fieldLists="fieldLists" :meetingContents="meetingContents"></i-filed>
      </div>
      <div class="steps">
        <div class="steps-text">当前状态：{{meetingStatus}}</div>
        <i-steps
          :active-step="activeStep"
          :active-step-list="activeStepList"
          :meeting-status="meetingStatus"
          progress-text="(审批进度)"></i-steps>
        <p class="steps-text reason-text">原因：取消会议</p>
        <i-steps
          :active-step="1"
          :active-step-list="reimburseList"
          progress-text="(退款进度)"></i-steps>
        <p class="steps-text reason-text">原因：拒绝退款</p>
      </div>
    </div>

    <i-footer>
      <!-- 任何途中都可以取消会议 -->
      <!-- <button class="btn" @click="showTips = true">取消会议</button> -->

      <!-- 审核不通过时，可以重新审批 -->
      <!-- <div class="cancel-btn">
        <button class="cancel btn" @click="showTips = true">取消会议</button>
        <button class="examine btn" @click="$router.push('/apply-meeting')">重新审批</button>
      </div> -->

      <!-- 退款途中可以重新申请 -->
      <button class="btn" @click="$router.push('/apply-meeting')">重新申请</button>
    </i-footer>

    <!-- 申请会议条款 -->
    <van-dialog
      v-model="showTips"
      show-cancel-button
      closeOnClickOverlay
      messageAlign="left"
      title="确定要取消会议吗？"
      :message="message"
      confirm-button-text="残忍退款"
      cancel-button-text="取消"
      @confirm="returnMoney"
    ></van-dialog>

  </div>
</template>
<script>
import IFiled from '../components/i-filed'
import IFooter from '../components/i-footer'
import ISteps from '../components/i-steps'

export default {
  name: 'meeting-detail',
  components: {
    IFiled,
    IFooter,
    ISteps
  },
  data () {
    return {
      meetingContents: {
        applyTime: '2019-01-01 10:30:36',
        meetingTime: '2019/01/15 - 2019/01/16',
        address: '广东省 广州市 海珠区',
        detailAddress: '琶洲国际会展中心',
        nature: '招商会',
        instructions: '准备举行一个招商会',
        numbers: '300',
        lecturer: '大斌'
      },
      // 列表选项
      fieldLists: [
        {vModle: 'applyTime', type: 'text', label: '申请时间', placeholder: '', icon: '', readonly: true},
        {vModle: 'meetingTime', type: 'text', label: '会议时间', placeholder: '', icon: '', readonly: true},
        {vModle: 'address', type: 'text', label: '会议地点', placeholder: '', icon: '', readonly: true},
        {vModle: 'detailAddress', type: 'textarea', label: '详细地址', placeholder: '', icon: '', readonly: true},
        {vModle: 'nature', type: 'text', label: '会议性质', placeholder: '', icon: '', readonly: true},
        {vModle: 'instructions', type: 'textarea', label: '会议情况', placeholder: '', icon: '', readonly: true},
        {vModle: 'numbers', type: 'number', label: '参会人数', placeholder: '', icon: '', readonly: true},
        {vModle: 'lecturer', type: 'text', label: '讲师选择', placeholder: '', icon: '', readonly: true}
      ],
      // 展示取消会议提示框
      showTips: false,
      message: '因自身原因取消会议需3个工作日审核，审核通过可退还保证金!',
      // 预约当前进度
      activeStep: 2,
      // 预约审核进度
      activeStepList: ['申请预约', '核实信息', '市场评定', '审批完成'],
      // 退款进度
      reimburseList: ['取消会议', '核实信息', '市场评定', '退款完成'],
      // 当前状态
      meetingStatus: '审核不通过'
    }
  },
  created () {},
  mounted () {},
  methods: {
    // 退款
    returnMoney () {
      this.showTips = false
      this.$toast.success({
        message: '取消成功'
      })
      this.$router.push('/my-meetings')
    }
  }
}
</script>
<style lang="less">
.meeting-detail{
  width: 100%;
  min-height: 100vh;
  padding-bottom: 140px;
  box-sizing: border-box;
  .content{
    width: 100%;
    // 调整单元格样式
    .van-field{
      &:nth-of-type(4) {
        margin-bottom: 20px;
      }
    }
    .steps{
      // margin-top: 40px;
      padding: 0 30px;
      .steps-text{
        padding: 40px 0;
        font-size: 32px;
        color: #333333;
        text-align: center;
      }
      .reason-text{
        font-size: 28px;
        text-align: left;
      }
      .van-steps{
        background-color: #f7f7f7;
      }
    }
  }
  .i-footer{
    .cancel-btn{
      display: flex;
      flex-direction: row;
      justify-content: space-around;
      .btn{
        width: 250px;
      }
      .cancel{
        background-color: #ccc;
      }
    }
  }
}
</style>
