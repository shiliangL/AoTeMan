import Taro, { Component } from '@tarojs/taro';
import { View, Image } from '@tarojs/components';
import './index.scss';

import product_img from '../../assets/battery/icon/cp_about.png'
import arrow_right_img from '../../assets/battery/icon/arrow_right.png'

export default class Batteryabout extends Component {
  // eslint-disable-next-line react/sort-comp
  config = {
    navigationBarTitleText: 'batteryAbout',
  };

  componentDidMount = () => {

  };

  navigateToBatteryIntroduce = () => {
    Taro.navigateTo({ url: '/pages/batteryIntroduce/index' })
  }

  render() {
    return (
      <View className='batteryAbout_page'>
        <View className='batteryAbout_page_top'>
          <View className='product_img_box'>
            <Image className='product_img' src={product_img} />
          </View>
          <View className='product_img_desc'>
            智能电池第一代
          </View>
        </View>
        <View className='batteryAbout_page_list'>
          <View className='batteryMy_page_list_item ac_action' onClick={this.navigateToBatteryIntroduce}>
            <View className='batteryMy_page_list_item_title'>
              产品说明
            </View>
            <View className='batteryMy_page_list_item_icon'>
              <Image className='arrow_right_img' src={arrow_right_img} />
            </View>
          </View>
          <View className='batteryMy_page_list_item ac_action'>
            <View className='batteryMy_page_list_item_title'>
              <View className=''> 当前版本 </View>
              <View className=''> V1.01 </View>
            </View>
            <View className='batteryMy_page_list_item_icon'>
              <Image className='arrow_right_img' src={arrow_right_img} />
            </View>
          </View>
          <View className='batteryMy_page_list_item ac_action'>
            <View className='batteryMy_page_list_item_title'>
              南霸集团
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
