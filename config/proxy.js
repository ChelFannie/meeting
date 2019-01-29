var proxyTable = {
  '/api': {
    target: 'http://dev.meeting.you.zhibankeji.com:8082/api/v1/client/', //设置你调用的接口域名和端口号
    authorization: false,
    changeOrigin: true, //跨域
    pathRewrite: {
      '/api': '/'
    }
  }
}
module.exports = proxyTable