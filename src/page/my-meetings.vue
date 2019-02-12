<template>
  <div class="my-meetings">
    <i-header>
      <div class="status-line" @click="showStatus = true">
        <span>{{meetingStatus}}</span>
        <van-icon name="arrow-down" />
      </div>
    </i-header>

    <div v-if="false" class="no-meeting">还没有预约会议哦！</div>

    <i-scroll
      :data="columnsLists"
      :probe-type="probeType"
      :listen-scroll="listenScroll"
      :pullup="pullup"
      class="list"
      ref="list"
      @scrollToEnd="showMoreList">
      <div v-if="true" class="tabs-main">
        <meeting-info :columns-lists="columnsLists" @go-detail="goDetail"></meeting-info>
        <van-loading v-if="loadingShow" type="spinner" />
      </div>
    </i-scroll>
    <i-footer>
      <a class="back-zbyc" href="/Robot_jingxiaoshang/discover/do.php">智伴优创</a>
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
import IScroll from '../components/i-scroll'
import req from '../api/meeting/meeting.js'

export default {
  name: 'my-meetings',
  components: {
    IHeader,
    MeetingInfo,
    IFooter,
    ISteps,
    IScroll
  },
  data () {
    return {
      // 条款标志
      showConditions: false,
      // 条款内容
      message: '条款内容条款内容条款内容条款内容条款内容条款内容条款内容条款内容条款内容条款内容条款内容条款内',
      columns: ['全部', '预约中', '已预约', '预约失败', '审批不通过', '会议进行中', '会议结束', '退款中', '已退款', '退款失败'],
      // 状态标志
      showStatus: false,
      meetingStatus: '全部',
      columnsLists: [],
      probeType: 3,
      listenScroll: true,
      pullup: true,
      loadingShow: false
    }
  },
  watch: {},
  // 监听组件内路由守卫
  beforeRouteEnter (to, from, next) {
    next(vm => {
      if (from.name === '会议详情') {
        vm.meetingStatus = localStorage.getItem('meetingStatus')
        if (vm.meetingStatus !== '全部') {
          vm.columns.map((item, index) => {
            if (index > 0 && (item === localStorage.getItem('meetingStatus'))) {
              vm.columnsLists.push(item)
            }
          })
        } else {
          vm.columns.map((item, index) => {
            if (index > 0) {
              vm.columnsLists.push(item)
            }
          })
        }
      } else {
        localStorage.setItem('meetingStatus', vm.meetingStatus)
        vm.columns.map((item, index) => {
          if (index > 0) {
            vm.columnsLists.push(item)
          }
        })
      }
    })
  },
  created () {
    this.getMeetingsList()
  },
  mounted () {
  },
  methods: {
    // 获取会议列表
    getMeetingsList () {
      let params = {
        page: 1,
        size: 3,
        agentId: this.$store.state.agentId
      }
      let meetingType = {
        'INVERSTMENT': '招商',
        'GROUND_PROMOTION': '地推',
        'SALON': '沙龙',
        'INTERNAL_TRAINING': '内训'
      }
      req('applicationsLists', params)
        .then(res => {
          res.data.list.map(item => {
            item.meetingStartTimeModify = item.meetingStartTime.split(' ')[0].split('-').join('/')
            item.meetingFinishTimeModify = item.meetingFinishTime.split(' ')[0].split('-').join('/')
            item.meetingDate = item.meetingStartTimeModify + ' - ' + item.meetingFinishTimeModify
            item.meetingTypeWords = meetingType[item.meetingType]
          })
          this.columnsLists = res.data.list
        })
        .catch(error => {
          console.log(error)
        })
    },
    // 接受条款
    acceptConditions () {
      this.$router.push('/apply-meeting')
    },
    // 会议详情页
    goDetail (list) {
      // this.$router.push('/meeting-detail')
      this.$router.push({
        name: '会议详情',
        params: {lists: list}
      })
    },
    // 支付保证金
    payDeposit () {
      this.$router.push('/pay-deposit')
    },
    // 会议状态的选择
    selectStatus (value) {
      localStorage.setItem('meetingStatus', value)
      this.showStatus = false
      this.meetingStatus = value
      if (value !== '全部') {
        this.columnsLists = []
        this.columns.map(item => {
          if (item === value) {
            this.columnsLists.push(item)
          }
        })
      } else {
        this.columns.map(item => {
          this.columnsLists.push(item)
        })
      }
    },
    // 上拉刷新
    showMoreList () {
      // this.loadingShow = true
      console.log(2222222222)
    }
  }
}
</script>
<style lang="less">
.my-meetings{
  height: 100vh;
  width: 100%;
  padding: 80px 0 140px;
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

  .list{
    position: fixed;
    top: 100px;
    bottom: 160px;
    width: 100%;
    .van-loading{
      width: 50px;
      height: 50px;
      left: 330px;
      color: rgb(41, 38, 38) !important;
    }
  }
  .tabs-main{
    width: 100%;
    .meeting-info{
      // background: #fff;
      // margin-bottom: 20px;
      .buttom-btn{
        padding: 20px 30px;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        .list-status{
          font-size: 32px;
        }
        .btn{
          color:rgba(255,255,255);
          font-size: 32px;
          border-radius: 10px;
          text-align: center;
          background: #3FB6FA;
          padding: 15px;
        }
      }
    }
  }
}
</style>
