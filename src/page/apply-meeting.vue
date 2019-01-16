<template>
  <div class="apply-meeting">

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
      <i-filed :fieldLists="fieldListsAfter" :meetingContents="meetingContents" @select="showSelectArea"></i-filed>

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
          :max-date="maxDate"
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

    <i-footer>
      <button class="cancel apply-btn" @click="cancelApply">取消</button>
      <button class="confirm apply-btn" @click="applyCommit">确认</button>
    </i-footer>

    <!-- 显示讲师选择 -->
    <van-popup v-model="lectureShow" position="right" :overlay="false">
      <select-lecturer @selectItem="selectLecturer"></select-lecturer>
    </van-popup>

    <!-- 信息未填写完整提示 -->
    <van-dialog
      v-model="showTips"
      closeOnClickOverlay
      message="信息未填写完整!"
      confirm-button-text="确认"
      @confirm="showTips = false"
    ></van-dialog>

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
import IFiled from '../components/i-filed'
import IFooter from '../components/i-footer'
import {addressObj} from '../utils/address.js'
import formatDateTime from '../utils/formateDate.js'
import SelectLecturer from '../components/select-lecturer'

export default {
  name: 'apply-meeting',
  components: {
    IFiled,
    IFooter,
    SelectLecturer
  },
  data () {
    return {
      meetingContents: {
        username: '李白',
        tel: '18689421636',
        wechat: '18689421636',
        startDate: '',
        endDate: '',
        address: '',
        detailAddress: '',
        nature: '',
        instructions: '',
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
        {vModle: 'instructions', type: 'textarea', label: '会议情况', placeholder: '请详细输入会议背景情况', icon: '', readonly: false},
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
      maxDate: new Date(new Date().getFullYear() + 10, 11, 31),
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
      // 提交申请提示框
      showConfirm: false,
      confirmApplyMsg: '确认信息无误后将提交申请',
      // 显示讲师选择项目
      lectureShow: false,
      // 申请会议信息是否填写完整
      showTips: false
    }
  },
  watch: {
    // 设置时间选择器的起始时间
    startOrEndDate: {
      handler: function (val) {
        if (val === 'startDate') {
          // 如果已经选择了结束时间，则开始时间的可选区域为当前时间到结束时间之间
          this.minDate = new Date()
          if (this.meetingContents['endDate']) {
            let date = this.meetingContents['endDate'].split('/')
            this.maxDate = new Date(parseInt(date[0]), parseInt(date[1]) - 1, parseInt(date[2]))
          } else {
            this.maxDate = new Date(new Date().getFullYear() + 10, 11, 31)
          }
        } else if (val === 'endDate') {
          // 如果已经选择了开始时间，则结束时间的起始时间为开始时间
          if (this.meetingContents['startDate']) {
            let date = this.meetingContents['startDate'].split('/')
            this.minDate = new Date(parseInt(date[0]), parseInt(date[1]) - 1, parseInt(date[2]))
          } else {
            this.minDate = new Date()
          }
          this.maxDate = new Date(new Date().getFullYear() + 10, 11, 31)
        }
      },
      deep: true
    }
  },
  created () {},
  mounted () {
    // 截取单元格渲染范围
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
        this.lectureShow = true
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
    // 选中讲师
    selectLecturer (lecturer) {
      this.lectureShow = false
      this.meetingContents.lecturer = lecturer.name
    },
    // 选择时间
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
    // 取消会议申请
    cancelApply () {
      this.$router.push('/my-meetings')
    },
    // 验证并确认会议申请
    applyCommit () {
      let flag = true
      Object.keys(this.meetingContents).map(keys => {
        if (keys !== 'detailAddress') {
          !this.meetingContents[keys] && (flag = false)
        }
      })
      if (flag) {
        this.showConfirm = true
        return
      }
      this.showTips = true
    },
    // 提交会议申请
    applyMeeting () {
      this.$router.push('/pay-deposit')
    }
  }
}
</script>
<style lang="less">
.apply-meeting{
  width: 100%;
  height: 100vh;
  padding-bottom: 140px;
  box-sizing: border-box;
  .apply-content{
    width: 100%;
    height: 100%;
    overflow: scroll;
    // 调整单元格样式
    .van-field{
      &:nth-of-type(3n) {
        margin-bottom: 20px;
      }
    }
    // 会议时间样式
    .cel-date{
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

  // 底部
  .i-footer{
    padding: 25px 0;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    .apply-btn{
      padding: 0;
      height: 90px;
      width: 300px;
      border-radius:10px;
      color: #fff;
      font-size: 32px;
    }
    .cancel{
      background: rgba(204,204,204);
    }
    .confirm{
      background: rgba(63,182,250);
    }
  }

  // 讲师选择
  .van-popup{
    width: 100%;
    max-height: 0;
    min-height: 100%;
  }
}
</style>
