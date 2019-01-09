<template>
  <div class="meeting-detail">
    <i-header text="会议详情"></i-header>

    <div class="content">
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
        applyTime: '',
        meetingTime: '',
        address: '',
        detailAddress: '',
        nature: '',
        message: '',
        numbers: '',
        lecturer: ''
      },
      // 列表选项
      fieldLists: [
        {vModle: 'applyTime', type: 'text', label: '申请时间', placeholder: '', icon: '', readonly: true},
        {vModle: 'meetingTime', type: 'text', label: '会议时间', placeholder: '', icon: '', readonly: true},
        {vModle: 'address', type: 'text', label: '会议地点', placeholder: '', icon: '', readonly: true},
        {vModle: 'detailAddress', type: 'textarea', label: '详细地址', placeholder: '', icon: '', readonly: true},
        {vModle: 'nature', type: 'text', label: '', placeholder: '会议性质', icon: '', readonly: true},
        {vModle: 'message', type: 'textarea', label: '', placeholder: '会议情况', icon: '', readonly: true},
        {vModle: 'numbers', type: 'number', label: '', placeholder: '参会人数', icon: '', readonly: true},
        {vModle: 'lecturer', type: 'text', label: '', placeholder: '讲师选择', icon: '', readonly: true}
      ]
    }
  },
  created () {},
  mounted () {},
  methods: {}
}
</script>
<style lang="less">
</style>
