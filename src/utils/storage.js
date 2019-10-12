import Taro from '@tarojs/taro'
import config from '../config';

const { token_key, login_key, userinfo_key} = config

export function getStorage(key) {
  return Taro.getStorageSync(key);
}

export function setStorage(key,data) {
  return Taro.setStorageSync(key, data);
}

export function removeStorage(key) {
  return Taro.removeStorageSync(key);
}

export function clearAllStorage() {
  return Taro.clearStorageSync();
}

// ---------- 华丽的分割线 ----------

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

export function setLoginInfo(data) {
  return Taro.setStorageSync(login_key, data);
}

export function clearLogin() {
  Taro.removeStorageSync(login_key)
}
