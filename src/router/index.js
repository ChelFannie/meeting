import Vue from 'vue'
import Router from 'vue-router'
const Home = () => import('../page/home')
const ApplyMeeting = () => import('../page/apply-meeting')
const MyMeetings = () => import('../page/my-meetings')
const MeetingDetail = () => import('../page/meeting-detail')
const PayDeposit = () => import('../page/pay-deposit')
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
      name: 'apply-meeting',
      component: ApplyMeeting
    }, {
      path: '/my-meetings',
      name: 'my-meetings',
      component: MyMeetings
    }, {
      path: '/meeting-detail',
      name: 'meeting-detail',
      component: MeetingDetail
    }, {
      path: '/pay-deposit',
      name: 'pay-deposit',
      component: PayDeposit
    }, {
      path: '/demo',
      name: 'demo',
      component: Demo
    }
  ]
})
