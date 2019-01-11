<template>
  <div class="meeting-detail">
    <i-header text="会议详情"></i-header>

    <div class="content">
      <div class="ceils">
        <i-filed :fieldLists="fieldLists" :meetingContents="meetingContents"></i-filed>
      </div>
      <div class="steps">
        <i-steps
          :active-step="activeStep"
          :active-step-list="activeStepList"
          meeting-status="预约中"></i-steps>
      </div>
    </div>

    <i-footer>
      <button class="btn" @click="showTips = true">取消会议</button>
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
import IHeader from '../components/i-header'
import IFiled from '../components/i-filed'
import IFooter from '../components/i-footer'
import ISteps from '../components/i-steps'

export default {
  name: 'meeting-detail',
  components: {
    IHeader,
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
        message: '准备举行一个招商会',
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
        {vModle: 'message', type: 'textarea', label: '会议情况', placeholder: '', icon: '', readonly: true},
        {vModle: 'numbers', type: 'number', label: '参会人数', placeholder: '', icon: '', readonly: true},
        {vModle: 'lecturer', type: 'text', label: '讲师选择', placeholder: '', icon: '', readonly: true}
      ],
      // 展示取消会议提示框
      showTips: false,
      message: '因自身原因取消会议需3个工作日审核，审核通过可退还保证金!',
      // 预约当前进度
      activeStep: 2,
      // 预约进度
      activeStepList: ['申请预约', '核实信息', '市场评定', '审批完成']
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
    }
  }
}
</script>
<style lang="less">
.meeting-detail{
  width: 100%;
  min-height: 100vh;
  .content{
    width: 100%;
    // 调整单元格样式
    .van-field{
      &:nth-of-type(4) {
        margin-bottom: 20px;
      }
    }
    .steps{
      margin-top: 40px;
      .van-steps{
        background-color: #f7f7f7;
      }
    }
  }
}
</style>
