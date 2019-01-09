var proxyTable = {
  '/api': {
    target: 'http://192.168.28.41:9736/', //设置你调用的接口域名和端口号
    authorization: false,
    changeOrigin: true, //跨域
    pathRewrite: {
      '/api': '/'
    }
  }
}
module.exports = proxyTable