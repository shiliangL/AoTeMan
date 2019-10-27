const request = require('../utils/request.js')

/**
 * 检查钱包状态
 */
export function checkStatus() {
  return request({
    url: '/api/wallet/checkStatus'
  })
}

/**
 * 设置密码
 */
export function setPwd(pwd) {
  return request({
    url: '/api/wallet/setPwd?pwd=' + pwd,
    method: 'post'
  })
}

/**
 * 获取钱包余额
 */
export function getWallet() {
  return request({
    url: '/api/wallet/getWallet'
  })
}

/**
 * 微信统一下单
 */
export function unifiedorder(para) {
  return request({
    url: '/api/weixin/Unifiedorder',
    method:'POST',
    data: para
  })
}

/**
 * 获取钱包零钱记录。
 */
export function getRecord(data) {
  return request({
    url: '/api/wallet/getRecord',
    data: data
  })
}

/**
 * 提现
 */
export function withdraw(data) {
  return request({
    url: '/api/wallet/withdraw',
    method: 'post',
    data
  })
}
