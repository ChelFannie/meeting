import request from '../index'
const config = {
  // 获取token
  login: {
    url: '/auth',
    method: 'get'
  }
}

export default function req (funcName, data) {
  return request(config, funcName, data)
}
