import Taro, { Component } from '@tarojs/taro'
import { View, Button, Text } from '@tarojs/components'
import { connect } from '@tarojs/redux'

import { add, minus, asyncAdd } from '~/actions/counter'
import request from '~/utils/request';

import './index.scss'


@connect(({ counter }) => ({
  counter
}), (dispatch) => ({
  add() {
    dispatch(add())
  },
  dec() {
    dispatch(minus())
  },
  asyncAdd() {
    dispatch(asyncAdd())
  }
}))
class My extends Component {

  config = {
    navigationBarTitleText: '我的'
  }

  async fethList(){
    const data = await request.get('shop/goods/list').then(res => {
      console.log(res.data,'sb');
    })
    console.log(data,'xxx');

  }

  componentWillReceiveProps(nextProps) {
    console.log(this.props, nextProps)
  }

  componentDidMount(){
    this.fethList()
  }

  componentWillUnmount() { }

  componentDidShow() { }

  componentDidHide() { }

  render() {
    return (
      <View className='index'>
        <View><Text>我的</Text></View>
      </View>
    )
  }
}

export default My
