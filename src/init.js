import Vue from 'vue'
import './style/index.less'

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
  Picker,
  Popup,
  Search,
  Loading
} from 'vant'

// require('./utils/vconsole')

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
Vue.use(Popup)
Vue.use(Search)
Vue.use(Loading)
