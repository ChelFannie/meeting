import axios from 'axios'
import qs from 'qs'
// import store from '../store/store'
import store from '../store/index'
// import router from '../router'

const BASE_URL = process.env.BASE_API // webpack识别开发或生产环境，自动匹配baseUrl
const TIMEOUT_MILLISECONDS = 6000 // 超时链接

const instance = axios.create({
  withCredentials: true, // 允许携带cookie
  baseURL: BASE_URL, // 基本url
  timeout: TIMEOUT_MILLISECONDS,
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded'
  }
})

/**
 *  解決重复请求
 *
 */
let pending = [] // 存储网络请求列表
let CancelToken = axios.CancelToken
let removePending = (config, cancleHandle) => {
  let flagUrl = config.url
  if (flagUrl.indexOf(config.baseURL) !== -1) {
    flagUrl = '/' + flagUrl.substr(config.baseURL.length, flagUrl.length)
  }

  if (flagUrl.indexOf('http') !== 0) {
    flagUrl = config.baseURL + flagUrl
  }

  if (pending.indexOf(flagUrl) !== -1) { // 如果要检索的字符串值没有出现，则该方法indexOf返回 -1
    if (cancleHandle) {
      console.log('重复的请求已取消')
      cancleHandle() // 执行取消操作
    } else {
      pending.splice(pending.indexOf(flagUrl), 1) // 把这条记录从数组中移除
    }
  } else {
    pending.push(flagUrl)
  }
}

// axios请求拦截器
instance.interceptors.request.use((config) => {
  config.cancelToken = new CancelToken((c) => {
    removePending(config, c)
  })
  config.headers.token = `${store.state.token}`
  if (config.method === 'post' && config.headers['Content-Type'] !== 'application/json') {
    config.data = qs.stringify(config.data) // stringify POST方式提交的数据
  }
  return config
},
(error) => {
  return Promise.reject(error)
})

// axios响应拦截器
instance.interceptors.response.use((response) => {
  removePending(response.config) // 不管成功与否都从记录中移除请求记录

  return response.data
}, (error) => {
  pending = []
  return Promise.reject(error)
})
export default instance
