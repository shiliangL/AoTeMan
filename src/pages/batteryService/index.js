import Taro, { Component } from '@tarojs/taro';
import { View, Image } from '@tarojs/components';
import './index.scss';

import arrow_right_img from '../../assets/battery/icon/arrow_right.png'

export default class Batteryservice extends Component {
  // eslint-disable-next-line react/sort-comp
  config = {
    navigationBarTitleText: 'batteryService',
  };

  componentDidMount = () => {

  };

  navigateToBatteryMore = ()=> {
    Taro.navigateTo({ url: '/pages/batteryMore/index' })
  }

  render() {
    return (
      <View className='batteryService_page'>

        <View className='batteryMy_page_list'>
          <View className='batteryMy_page_list_item ac_action' onClick={this.navigateToBatteryMore}>
            <View className='batteryMy_page_list_item_title'>
              常见问题及注意事项
            </View>
            <View className='batteryMy_page_list_item_icon'>
              <Image className='arrow_right_img' src={arrow_right_img} />
            </View>
          </View>
          <View className='batteryMy_page_list_item ac_action'>
            <View className='batteryMy_page_list_item_title'>
              <View className=''> 客服热线 </View>
              <View className=''> 0755-27331360 </View>
            </View>
            <View className='batteryMy_page_list_item_icon'>
              <Image className='arrow_right_img' src={arrow_right_img} />
            </View>
          </View>

        </View>

      </View>
    )
  }
}
