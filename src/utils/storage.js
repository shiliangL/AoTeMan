import Taro from '@tarojs/taro'

const token_key = 'ReservationCoach_token';
const login_key = 'ReservationCoach_login';
const userinfo_key = 'ReservationCoach_userinfo';

export function getToken() {
  return Taro.getStorageSync(token_key);
}

export function setToken(data) {
  return Taro.setStorageSync(token_key, data);
}

export function clearToken() {
  Taro.removeStorageSync(token_key)
}

export function getUserInfo() {
  return Taro.getStorageSync(userinfo_key);
}

export function setUserInfo(data) {
  return Taro.setStorageSync(userinfo_key, data);
}

export function clearUserInfo() {
  Taro.removeStorageSync(userinfo_key)
}

export function getLogin() {
  return Taro.getStorageSync(login_key);
}

export function setLogin(data) {
  return Taro.setStorageSync(login_key, data);
}

export function clearLogin() {
  Taro.removeStorageSync(login_key)
}
