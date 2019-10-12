

export default {
  // 接口前缀url
  prefix: '/v1/api/',

  baseUrl: process.env.TARO_ENV === 'h5' ? '' : 'http://coachapi.szhcqh.cn',

  token_key: 'ReservationCoach_token',

  login_key: 'ReservationCoach_login',

  userinfo_key: 'ReservationCoach_userinfo',

}
