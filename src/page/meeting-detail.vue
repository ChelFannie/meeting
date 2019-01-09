<template>
  <div class="meeting-detail">
    <i-header text="会议详情"></i-header>

    <div class="content">
      <i-filed :fieldLists="fieldLists" :meetingContents="meetingContents"></i-filed>
    </div>
  </div>
</template>
<script>
import IHeader from '../components/i-header'
import IFiled from '../components/i-filed'

export default {
  name: 'meeting-detail',
  components: {
    IHeader,
    IFiled
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
      ]
    }
  },
  created () {},
  mounted () {},
  methods: {}
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
  }
}
</style>
