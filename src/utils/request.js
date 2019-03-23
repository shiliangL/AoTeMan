import Taro from '@tarojs/taro';
import Config from '~/config/index';
import { HTTP_STATUS } from '~/constants/index';
import { logError } from './logError';

// 读取本地token
function getStorage(key) {
  return Taro.getStorage({ key }).then(res => res.data).catch(() => '')
}

export default {
  async fetch(params, method = 'GET') {
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
      url: Config.baseUrl + `/${url}`,
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
          return res
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
    return this.fetch(option)
  },
  post: function (url, data, contentType) {
    let params = { url, data, contentType }
    return this.fetch(params, 'POST')
  }
}
