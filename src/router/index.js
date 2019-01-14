import Vue from 'vue'
import Router from 'vue-router'
const Home = () => import('../page/home')
const ApplyMeeting = () => import('../page/apply-meeting')
const MyMeetings = () => import('../page/my-meetings')
const MeetingDetail = () => import('../page/meeting-detail')
const PayDeposit = () => import('../page/pay-deposit')
// const SelectLecturer = () => import('../page/select-lecturer')
const Demo = () => import('../page/demo')

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/my-meetings'
    }, {
      path: '/home',
      name: 'home',
      component: Home
    }, {
      path: '/apply-meeting',
      name: '申请会议',
      component: ApplyMeeting
    }, {
      path: '/my-meetings',
      name: '我的会议',
      component: MyMeetings
    }, {
      path: '/meeting-detail',
      name: '会议详情',
      component: MeetingDetail
    }, {
      path: '/pay-deposit',
      name: '支付保证金',
      component: PayDeposit
    }, {
      path: '/demo',
      name: 'demo',
      component: Demo
    }
  ]
})
