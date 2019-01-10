export function getCookie () {
  let cookiesStr = document.cookie
  let cookiesArr = cookiesStr.split(';')
  let cookie = {}
  cookiesArr.map(item => {
    if (item.includes('robot_user_ID')) {
      cookie[item.split('=')[0]] = item.split('=')[1]
    }
  })
  return cookie
}