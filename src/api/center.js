// eslint-disable-next-line import/no-commonjs
import { createAction } from '@utils/redux'

import request from '../utils/request';

// eslint-disable-next-line no-undef
const host = HOST

export const dispatchFetchCourseList = (payload) => createAction({
  url: host + '/api/Course/List',
  type: 'COURSELIST',
  payload
})

export const dispatFetchSwiper = (payload) => request({
  url: host + '/api/Banner/List',
  payload
})


export const fetchSwiper = (payload) => request({
  url: host + '/api/Course/List',
  payload
})

// const center = {
//   /**
//    * 主页轮播
//    */
//   getSwiper: function () {
//     return request({
//       url: host + '/api/Banner/List'
//     })
//   },
//   /**
//    * 课程数据
//    */
//   getCourseList: function (para) {
//     return request({
//       url: host + '/api/Course/List',
//       data: para
//     })
//   },
//   /**
//    * 课程明细数据
//    */
//   getCourseDetail: function (courseId) {
//     return request({
//       url: host + '/api/Course/Detail',
//       data: {
//         courseId
//       }
//     })
//   },
//   /**
//    * 当前课程内学员列表及状态
//    */
//   getCoursehStudentes: function (courseId) {
//     return request({
//       url: host + '/api/Course/StudentList',
//       method: 'GET',
//       data: { courseId }
//     })
//   },
//   /**
//    * 获取当前用户是否加入了此课程
//    */
//   courseCheck: function (para) {
//     return request({
//       url: host + '/api/Course/Check',
//       method: 'POST',
//       data: para
//     })
//   },
//   /**
//   * 加入课程
//   */
//   joinCourse: function (courseId) {
//     return request({
//       url: host + '/api/Course/JoinCourse',
//       method: 'POST',
//       data: { courseId }
//     })
//   },
//   /**
//  * 改变用户的当前状态
//  */
//   setStatus: function (courseId, status) {
//     return request({
//       url: host + '/api/Course/SetStatus',
//       method: 'POST',
//       data: { courseId, status }
//     })
//   },
//   /**
//    * 设定定时时间
//    */
//   setPractiseTime: function (para) {
//     return request({
//       url: host + '/api/Course/SetPractiseTime',
//       method: 'POST',
//       data: para
//     })
//   }
// }

// module.exports = center
