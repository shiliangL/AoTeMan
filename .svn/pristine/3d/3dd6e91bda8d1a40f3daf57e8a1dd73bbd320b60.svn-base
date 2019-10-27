// eslint-disable-next-line import/no-commonjs
import request from '../utils/request';
import config from '../config';

const { baseUrl } = config


export const fetchToke = (payload) => request({
  url: baseUrl + '/api/Wx/GetToken',
  method: 'get',
  payload
})

export const fetchLogin = (payload) => request({
  url: baseUrl + '/api/weixin/login',
  method: 'POST',
  payload
})

export const fetchCoachUserBasis = (payload) => request({
  url: baseUrl + '/api/Account/GetCoachUserBasis',
  payload
})


export const fetchUserInfo = (payload) => request({
  url: baseUrl + '/api/userInfo/getUser',
  payload
})



// var login = {
//   /**
//    * 登录
//    */
//   login: function (para) {
//     return request({
//       url: '/api/weixin/login',
//       method: 'POST',
//       data: para
//     })
//   },

//   /**
//    * 获取用户信息
//    */
//   getUserInfo: function (userId) {
//     return request({
//       url: '/api/userInfo/getUser',
//       data: { userId }
//     })
//   },
//   /**
//    * 获取教练基本信息
//    */
//   GetCoachUserBasis: function (coachId) {
//     return request({
//       url: '/api/Account/GetCoachUserBasis',
//       data: { coachId }
//     })
//   },

//   /**
//    * 获取用资料
//    */
//   getCoachUserProfile: function (coachId) {
//     return request({
//       url: '/api/Account/GetCoachUserProfile',
//       data: { coachId }
//     })
//   },

//   /**
//  * 解密手机号
//  */
//   decodePhone: function (encryptedData, iv) {
//     return request({
//       url: '/api/Account/DecodePhone',
//       method: 'POST',
//       data: { encryptedData, iv }
//     })
//   },

//   /**
//  * 获取验证码
//  */
//   sendValidateCode: function (mobile) {
//     return request({
//       url: '/api/SMS/SendValidateCode',
//       method: 'GET',
//       data: { mobile }
//     })
//   },

//   /**
//  * 验证
//  */
//   checkValidateCode: function (mobile, code) {
//     return request({
//       url: '/api/SMS/Check',
//       method: 'POST',
//       data: { mobile, code }
//     })
//   },

//   /**
//   * 获取标签
//   */
//   getAllLabel: function () {
//     return request({
//       url: '/api/Label/GetLabels',
//       method: 'GET'
//     })
//   },

//   /**
//   * 新增标签
//   */
//   addLabel: function (label) {
//     return request({
//       url: '/api/Label/Add',
//       method: 'POST',
//       data: { Name: label }
//     })
//   },

//   /**
//    * 保存用户基础信息
//    */
//   saveCoachUserBasis: function (para) {
//     return request({
//       url: '/api/Account/SaveCoachUserBasis',
//       method: 'POST',
//       data: para
//     })
//   },

//   /**
//    * 保存用户附件信息
//    */
//   saveCoachUserProfile: function (para) {
//     return request({
//       url: '/api/Account/SaveCoachUserProfile',
//       method: 'POST',
//       data: para
//     })
//   },
//   /**
//   * 设置头像
//   */
//   setHeadPic: function (userId, fileId) {
//     return request({
//       url: '/api/userInfo/SetHeadPic',
//       method:'POST',
//       data: { userId,fileId }
//     })
//   },

// }


// module.exports = login
