<template>
  <div class="apply-meeting">
    <i-header text="申请会议"></i-header>

    <div class="apply-content">
      <i-filed :fieldLists="fieldListBefore" :meetingContents="meetingContents"></i-filed>
      <div class="cel-date">
        <div class="cel-data-main">
          <span class="date-label">会议时间</span>
          <div class="date-content">
            <input
              v-model="startDate"
              readonly
              class="date-input"
              type="text"
              placeholder="开始时间"
              @click="showDate('startDate')" />
            <span class="date-interval">—</span>
            <input
              v-model="endDate"
              readonly
              class="date-input"
              type="text"
              placeholder="结束时间"
              @click="showDate('endDate')" />
          </div>
        </div>
      </div>
      <i-filed :fieldLists="fieldListsAfter" :meetingContents="meetingContents"></i-filed>

      <!-- 地址选择器 -->
      <van-actionsheet v-model="showAddressEdit">
        <van-area
          :area-list="areaList"
          @confirm="selectArea"
          @cancel="showAddressEdit = false" />
      </van-actionsheet>

      <!-- 时间选择器 -->
      <van-actionsheet v-model="showDateEdit">
        <van-datetime-picker
          type="date"
          :min-date="minDate"
          @confirm="selectCurrentDate"
          @cancel="showDateEdit = false"
        />
      </van-actionsheet>

      <!-- 会议性质选择 -->
      <van-actionsheet
        v-model="showNature"
        :actions="natureActions"
        cancel-text="取消"
        @select="onSelect"
        @cancel="showNature = false"
      />
    </div>

    <div class="apply-bottom">
      <button class="cancel apply-btn">取消</button>
      <button class="confirm apply-btn" @click="applyCommit">确认</button>
    </div>

    <!-- 提交申请提示框 -->
    <van-dialog
      v-model="showConfirm"
      show-cancel-button
      closeOnClickOverlay
      title="请确认信息正确无误"
      :message="confirmApplyMsg"
      confirm-button-text="确认并支付"
      cancel-button-text="取消"
      @confirm="applyMeeting"
    ></van-dialog>
  </div>
</template>
<script>
import IHeader from '../components/i-header'
import IFiled from '../components/i-filed'
import {addressObj} from '../utils/address.js'
import formatDateTime from '../utils/formateDate.js'
export default {
  name: 'apply-meeting',
  components: {
    IHeader,
    IFiled
  },
  data () {
    return {
      meetingContents: {
        username: '',
        tel: '',
        wechat: '',
        startDate: '',
        endDate: '',
        address: '',
        detailAddress: '',
        nature: '',
        message: '',
        numbers: '',
        lecturer: ''
      },
      // 列表选项
      fieldLists: [
        {vModle: 'username', type: 'text', label: '真实姓名', placeholder: '请输入真实姓名', icon: '', readonly: true},
        {vModle: 'tel', type: 'tel', label: '手机号码', placeholder: '请输入真实手机号码', icon: '', readonly: true},
        {vModle: 'wechat', type: 'text', label: '微信号', placeholder: '请输入微信号', icon: '', readonly: true},
        {vModle: 'address', type: 'text', label: '会议地点', placeholder: '请选择会议地点', icon: 'arrow', readonly: true},
        {vModle: 'detailAddress', type: 'textarea', label: '详细地址', placeholder: '可选填', icon: '', readonly: false},
        {vModle: 'nature', type: 'text', label: '会议性质', placeholder: '请选择会议性质', icon: 'arrow', readonly: true},
        {vModle: 'message', type: 'textarea', label: '会议情况', placeholder: '请详细输入会议背景情况', icon: '', readonly: false},
        {vModle: 'numbers', type: 'number', label: '参会人数', placeholder: '请输入参会人数', icon: '', readonly: false},
        {vModle: 'lecturer', type: 'text', label: '讲师选择', placeholder: '请选择讲师', icon: 'arrow', readonly: true}
      ],
      // 列表前三个选项
      fieldListBefore: [],
      // 列表后几个选项
      fieldListsAfter: [],
      // 展示地址选择器
      showAddressEdit: false,
      // 地址所有数据
      areaList: addressObj,
      // 展示时间选择器
      showDateEdit: false,
      // 时间选择器的起始时间
      minDate: new Date(),
      // 开始时间
      startDate: '',
      // 结束时间
      endDate: '',
      // 选择哪个时间选择器
      startOrEndDate: '',
      // 会议性质选项
      natureActions: [
        {name: '地推'},
        {name: '沙龙'},
        {name: '内训'},
        {name: '招商'}
      ],
      // 展示会议性质选项卡
      showNature: false,
      showConfirm: false,
      confirmApplyMsg: '确认信息无误后将提交申请并支付保证金'
    }
  },
  created () {},
  mounted () {
    this.fieldLists.map((item, index) => {
      if (index < 3) {
        this.fieldListBefore.push(item)
      } else {
        this.fieldListsAfter.push(item)
      }
    })
  },
  methods: {
    // 展示选中列表
    showSelectArea (vModle) {
      if (vModle === 'address') {
        this.showAddressEdit = true
      } else if (vModle === 'nature') {
        this.showNature = true
      } else if (vModle === 'lecturer') {
        console.log(111111)
      }
    },
    // 选中地址
    selectArea (seletAddress) {
      let addressStr = ''
      seletAddress.map(item => {
        addressStr += item.name + '  '
      })
      this.meetingContents.address = addressStr
      this.showAddressEdit = false
    },
    selectCurrentDate (selectDate) {
      this.meetingContents[this.startOrEndDate] = formatDateTime(selectDate)
      this[this.startOrEndDate] = formatDateTime(selectDate)
      this.showDateEdit = false
    },
    // 展示时间选择器
    showDate (params) {
      this.startOrEndDate = params
      this.showDateEdit = true
    },
    onSelect (item) {
      this.meetingContents.nature = item.name
      this.showNature = false
    },
    // 验证并确认会议申请
    applyCommit () {
      this.showConfirm = true
    },
    // 提交会议申请
    applyMeeting () {}
  }
}
</script>
<style lang="less">
.apply-meeting{
  width: 100%;
  min-height: 100vh;
  .apply-content{
    width: 100%;
    // 调整单元格样式
    .van-field{
      &:nth-of-type(3),
      &:nth-of-type(6) {
        margin-bottom: 20px;
      }
    }
    .van-picker__toolbar{
      height: 80px;
      line-height: 80px;
    }
    .van-picker__cancel, .van-picker__confirm{
      font-size: 28px;
    }
    .van-picker__cancel{
      color: #ccc;
    }
    .van-picker-column__item{
      font-size: 24px;
    }
    .van-picker-column__item--selected{
      font-size: 28px;
    }
    .cel-date{
      // padding: 32px 30px 31px;
      padding-left: 30px;
      font-size: 28px;
      background: #ffffff;
      padding-left: 30px;
      .cel-data-main{
        display: flex;
        flex-direction: row;
        align-items: center;
        border-bottom: 1px solid #f2f2f2;
        box-sizing: border-box;
      }
      .date-label{
        width: 130px;
        flex: 0 0 130px;
        font-size:28px;
      }
      .date-content{
        flex: 1;
        display: flex;
        flex-direction: row;
        align-items: center;
        height: 100px;
        .date-input{
          width: 180px;
          &::-webkit-input-placeholder {
            color: rgba(153,153,153);
            font-size: 28px;
          }
          &:-moz-placeholder {
            color: rgba(153,153,153);
            font-size: 28px;
          }
          &::-moz-placeholder {
            color: rgba(153,153,153);
            font-size: 28px;
          }
          &:-ms-input-placeholder {
            color: rgba(153,153,153);
            font-size: 28px;
          }
        }
        .date-interval{
          display: inline-block;
          width: 60px;
        }
      }
    }
    .van-actionsheet__item, .van-actionsheet__cancel{
      height: 80px;
      line-height: 80px;
      font-size: 28px;
    }
    .van-actionsheet__item{
      border-bottom: 1px solid #f2f2f2;
    }
  }
  .apply-bottom{
    padding: 40px 0;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    .apply-btn{
      padding: 0;
      height: 90px;
      width: 300px;
      border-radius:10px;
      color: #fff;
      font-size:32px;
    }
    .cancel{
      background: rgba(204,204,204);
    }
    .confirm{
      background: rgba(63,182,250);
    }
  }
}
</style>
