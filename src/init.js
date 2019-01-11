import Vue from 'vue'
import './style/index.less'
// import 'vant/lib/index.css'
// import Vant from 'vant'
// Vue.use(Vant)
// import router from './router'
// import store from './store'
import {
  Button,
  Dialog,
  Icon,
  Field,
  Cell,
  CellGroup,
  Area,
  Actionsheet,
  DatetimePicker,
  Tab,
  Tabs,
  Step,
  Steps,
  Toast,
  Picker
} from 'vant'

Vue.use(Button)
Vue.use(Dialog)
Vue.use(Icon)
Vue.use(Field)
Vue.use(Cell).use(CellGroup)
Vue.use(Area)
Vue.use(Actionsheet)
Vue.use(DatetimePicker)
Vue.use(Tab).use(Tabs)
Vue.use(Step).use(Steps)
Vue.use(Toast)
Vue.use(Picker)

// 路由全局守卫
// router.beforeEach((to, from, next) => {
//   if (!to.meta.requireAuth) {
//     if (store.state.token) {
//       next()
//     } else {
//       next({
//         name: '登录'
//       })
//     }
//   } else {
//     next()
//   }
// })
