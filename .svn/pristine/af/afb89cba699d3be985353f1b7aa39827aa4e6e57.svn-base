const request = require('../utils/request.js')

var coach = {
  /**
   * 获取横向滚动教练列表
   */
  getStarCoach: function () {
    return request({
      url: '/api/Coach/List1',
    })
  },
  /**
   * 获取横向滚动教练列表 具体教练信息
   */
  GetCoachDetail: function (userId) {
    return request({
      url: '/api/Coach/TheOne',
      data: {
        userId
      }
    })
  },
  /**
 * 学员评价
 */
  setCoachComments: function (para) {
    return request({
      url: '/api/Coach/SetCoachEvaluate',
      method: 'POST',
      data: para
    })
  },
  /**
   * 获取学员评价
   */
  getCoachComments: function (para) {
    return request({
      url: '/api/Coach/TheOneComments',
      data: para
    })
  },
  /**
   * 获取图文模板
   */
  getStarCoachPF: function () {
    return request({
      url: '/api/Coach/List2'
    })
  },
  /**
   * 获取图文模板详情
   */
  getStartCoachPFDetail: function (id) {
    return request({
      url: '/api/Coach/GetSpecialCoach2',
      data: { Id: id }
    })
  },
  /**
   * 获取图文模板
   */
  getStarCoachList: function (para) {
    return request({
      url: '/api/Coach/List3',
      data: para
    })
  },
  /**
   * 全部教练
   */
  getCoachList: function (para) {
    return request({
      url: '/api/Coach/Search',
      data: para
    })
  },
  /**
   * 全部教练
   */
  upload: function (para) {
    return request({
      url: '/api/weixin/upload',
      data: para
    })
  },
  /**
   * 设置教练架构
   */
  setMyPrice: function (para) {
    return request({
      url: '/api/Coach/SetMyPrice',
      method: 'POST',
      data: para
    })
  },
};


module.exports = coach