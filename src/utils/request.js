import Taro from '@tarojs/taro';
import { logError } from './logError';

const base = 'https://api.it120.cc/2431951db2a39cc5c6289d698bad6b37/'
const HTTP_STATUS = {
  SUCCESS: 200,
  CLIENT_ERROR: 400,
  AUTHENTICATE: 401,
  FORBIDDEN: 403,
  NOT_FOUND: 404,
  SERVER_ERROR: 500,
  BAD_GATEWAY: 502,
  SERVICE_UNAVAILABLE: 503,
  GATEWAY_TIMEOUT: 504
}

// 读取本地token
function getStorage(key) {
  return Taro.getStorage({ key }).then(res => res.data).catch(() => '')
}

export default {
  async baseOptions(params, method = 'GET') {
    let { url, data } = params
    const contentType = params.contentType || 'application/x-www-form-urlencoded'
    const token = await getStorage('token')
    const header = token ? { 'WX-PIN-SESSION': token, 'X-WX-3RD-Session': token } : {}
    if (method === 'POST') {
      header['content-type'] = 'application/json'
    }
    const option = {
      isShowLoading: false,
      loadingText: '正在加载',
      url: base + url,
      data: data,
      method: method,
      header: { 'content-type': contentType, 'token': token },
      success(res) {
        if (res.statusCode === HTTP_STATUS.NOT_FOUND) {
          return logError('api', '请求资源不存在')
        } else if (res.statusCode === HTTP_STATUS.BAD_GATEWAY) {
          return logError('api', '服务端出现了问题')
        } else if (res.statusCode === HTTP_STATUS.FORBIDDEN) {
          return logError('api', '没有权限访问')
        } else if (res.statusCode === HTTP_STATUS.SUCCESS) {
          return res.data
        }
      },
      error(e) {
        logError('api', '请求接口出现问题', e)
      }
    }
    return Taro.request(option)
  },
  get(url, data = '') {
    let option = { url, data }
    return this.baseOptions(option)
  },
  post: function (url, data, contentType) {
    let params = { url, data, contentType }
    return this.baseOptions(params, 'POST')
  }
}
