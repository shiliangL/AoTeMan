// 业务多个reducers的入口。通过combineReducers合并多个规则
import { combineReducers } from 'redux'
import counter from './counter'
import home from './home'

export default combineReducers({
  counter,
  home
})
