import Taro, { Component } from '@tarojs/taro'
import { View, Text } from '@tarojs/components'
import { AtTabs, AtTabsPane } from 'taro-ui'
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
class goodPrice extends Taro.Component {

  constructor() {
    super(...arguments)
    this.state = {
      current: 0,
    }
  }

  config = {
    navigationBarTitleText: '分类'
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

  handleClick(index){
    this.setState({
      current: index
    })
  }

  componentWillUnmount() { }

  componentDidShow() { }

  componentDidHide() { }

  render() {
    return (
      <View className='index'>
        <AtTabs
          current={this.state.current}
          scroll
          height='200px'
          tabDirection='vertical'
          tabList={[
            { title: '标签页1' },
            { title: '标签页2' },
            { title: '标签页3' },
            { title: '标签页4' },
            { title: '标签页5' },
            { title: '标签页6' },
          ]}
          onClick={this.handleClick.bind(this)}
        >
          <AtTabsPane tabDirection='vertical' current={this.state.current} index={0}>
            <View style='font-size:18px;text-align:center;height:200px;'>标签页一的内容</View>
          </AtTabsPane>
          <AtTabsPane tabDirection='vertical' current={this.state.current} index={1}>
            <View style='font-size:18px;text-align:center;height:200px;'>标签页二的内容</View>
          </AtTabsPane>
          <AtTabsPane tabDirection='vertical' current={this.state.current} index={2}>
            <View style='font-size:18px;text-align:center;height:200px;'>标签页三的内容</View>
          </AtTabsPane>
          <AtTabsPane tabDirection='vertical' current={this.state.current} index={3}>
            <View style='font-size:18px;text-align:center;height:200px;'>标签页四的内容</View>
          </AtTabsPane>
          <AtTabsPane tabDirection='vertical' current={this.state.current} index={4}>
            <View style='font-size:18px;text-align:center;height:200px;'>标签页五的内容</View>
          </AtTabsPane>
          <AtTabsPane tabDirection='vertical' current={this.state.current} index={5}>
            <View style='font-size:18px;text-align:center;height:200px;'>标签页六的内容</View>
          </AtTabsPane>
        </AtTabs>
      </View>
    )
  }
}

export default goodPrice
