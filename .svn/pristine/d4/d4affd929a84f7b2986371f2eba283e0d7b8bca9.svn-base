const request = require('../utils/request.js')

var order = {
  /**
   * 检查当前用户和教练是否为第一次下单关系
   */
  checkFirstTime: function (params) {
    return request({
      url: '/api/Order/CheckIsFirstTime',
      data: params
    })
  },
  /**
   * 下订单
   */
  orderBook: function (para) {
    return request({
      url: '/api/Order/Book',
      method: 'post',
      data: para
    })
  },
  /**
   * 配置约谈方式
   */
  orderBookReq: function (para) {
    return request({
      url: '/api/Order/BookReq',
      method: 'post',
      data: para
    })
  },
  /**
   * 配置约谈方式获取
   */
  getOrderBookReq: function (processId) {
    return request({
      url: '/api/Order/GetBookReq',
      method: 'get',
      data: { processId }
    })
  },
  /**
   * 我的订单
   */
  getOrderList: function (para) {
    return request({
      url: '/api/Order/List',
      method: 'POST',
      data: para
    })
  },
  /**
   * 获取订单详情
   */
  getOrderDetail: function (orderId, type) {
    return request({
      url: '/api/Order/Detail',
      method: 'GET',
      data: {
        orderId,
        type
      }
    })
  },
  /**
   * 获取某月份的订单约谈分布情况
   */
  getOrderSchema: function (year, month) {
    return request({
      url: '/api/Order/GetOrderSchema',
      method: 'GET',
      data: {
        year,
        month
      }
    })
  },
  /**
  * 获取某日的订单约谈
  */
  getDailyOrderProcess: function (year, month, day) {
    return request({
      url: '/api/Order/GetDailyOrderProcess',
      method: 'GET',
      data: {
        year,
        month,
        day
      }
    })
  },
  /**
   * 修改约谈时间
   */
  changeProcessDate: function (id, date) {
    return request({
      url: '/api/Order/ChangeProcess',
      method: 'POST',
      data: {
        id, date
      }
    })
  },
  /**
 * 修改约谈状态
 */
  changeProcessStatus: function (id, status) {
    return request({
      url: '/api/Order/ChangeProcess',
      method: 'POST',
      data: {
        id, status
      }
    })
  },
  /**
* 获取约谈方式
*/
  getAllOrderMeetWay: function () {
    return request({
      url: '/api/Order/GetAllOrderMeetWay',
      method: 'GET'
    })
  },
  /**
 * 获取约谈方式
 */
  getOrderMeetWay: function (id, type) {
    return request({
      url: '/api/Order/GetOrderMeetWay',
      method: 'GET',
      data: {
        id: id,
        type: type
      }
    })
  },
  /**
   * 修改订单状态
   */
  changeOrderStatus: function (id, status) {
    return request({
      url: '/api/Order/SetOrderStatus',
      method: 'POST',
      data: {
        orderId: id,
        status: status
      }
    })
  },
  /**
   * 修改订单价格
   */
  changeOrderPrice: function (orderId, price) {
    return request({
      url: '/api/Order/SetOrderPrice',
      method: 'POST',
      data: {
        orderId, price
      }
    })
  },
  /**
   * 修改订单时间
   */
  changeOrderDate: function () {
    return request({
      url: '/api/Order/ChangeOrderDate',
      method: 'POST',
      data: {
        code: code
      }
    })
  },
  /**
   * 修改订单时间
   */
  changeOrderDate: function () {
    return request({
      url: '/api/Order/ChangeOrderDate',
      method: 'POST',
      data: {
        code: code
      }
    })
  },
  /**
   * 修改订单时间
   */
  changeOrderDate: function () {
    return request({
      url: '/api/Order/ChangeOrderDate',
      method: 'POST',
      data: {
        code: code
      }
    })
  },

  setOrderEvaluation: function () {
    return request({
      url: '/api/Order/ChangeOrderDate',
      method: 'POST',
      data: {
        code: code
      }
    })
  }
}

module.exports = order