import { API_HOME } from '../constants/api';
/* eslint-disable import/prefer-default-export */
import fetch from '../utils/request'

export function fetchHome(payload) {
  return fetch({ url: API_HOME, payload }).then((res) => {
    return res
  })
}
