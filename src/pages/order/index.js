import Taro, { Component } from '@tarojs/taro';
import { View } from '@tarojs/components';
import { AtTabs, AtButton } from 'taro-ui'

import AppNavBar from '../../components/AppNavBar';

import { dispatFetchSwiper } from '../../api/center';

import './index.scss';


export default class Order extends Component {
  // eslint-disable-next-line react/sort-comp
  config = {
    navigationBarTitleText: 'order',
  };

  constructor() {
    super(...arguments)
    this.state = {
      current: 0,
    }
  }

  componentDidMount() {

    dispatFetchSwiper().then(res => {
      console.log(res);
    })

  };



  handleClick(value) {
    this.setState({
      current: value
    })
  }

  render() {
    const tabList = [
      { title: '全部', value: 0 }, { title: '待确认', value: 1 },
      { title: '进行中', value: 2, }, { title: '已完成', value: 3, },
      { title: '已取消', value: 4, }
    ]

    return (
      <View className='order_page'>
        <AppNavBar />

        <View className='order_tab'>
          <AtTabs current={this.state.current} tabList={tabList} onClick={this.handleClick.bind(this)}>
            {/* {
              tabList.map((item,index)=>{
                return <AtTabsPane current={this.state.current} index={index} key={item.value}>
                  <View style='padding: 1000px 50px;background-color: #FAFBFC;text-align: center;' >`标签页${index}的内容`</View>
                </AtTabsPane>
              })
            } */}
            {/* <AtTabsPane current={this.state.current} index={0} >
              <View style='padding: 100px 50px;background-color: #FAFBFC;text-align: center;' >标签页一的内容</View>
            </AtTabsPane>
            <AtTabsPane current={this.state.current} index={1}>
              <View style='padding: 100px 50px;background-color: #FAFBFC;text-align: center;'>标签页二的内容</View>
            </AtTabsPane>
            <AtTabsPane current={this.state.current} index={2}>
              <View style='padding: 100px 50px;background-color: #FAFBFC;text-align: center;'>标签页三的内容</View>
            </AtTabsPane> */}
          </AtTabs>
        </View>
        <View className='order_list'>
          {
            tabList.map((item, index) => {
             return <View className='order_list_row' key={item.value}>
                <View className='order_header'>
                  <View className='order_code'>订单号:79707097092</View>
                  <View className='order_status'>状态</View>
                </View>
                <View className='order_main'>
                  <View> 信息区域 {index} </View>
                  <View> 信息区域 </View>
                  <View> 信息区域 </View>
                </View>
                <View className='order_handler'>
                  <AtButton circle size='small'>订单操作</AtButton>
                  <AtButton circle type='primary' size='small'>订单操作</AtButton>
                </View>
              </View>

            })
          }

        </View>
      </View>
    )
  }
}
