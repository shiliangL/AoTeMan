import Taro, { Component } from '@tarojs/taro';
import { View, Image, Button } from '@tarojs/components';
import './index.scss';

import prcImg from '../../assets/battery/icon/qrc.png'
import arrow_right_img from '../../assets/battery/icon/arrow_right.png'
import user_avatar_img from '../../assets/battery/icon/user_avatar.png'

export default class Batterymy extends Component {

  // eslint-disable-next-line react/sort-comp
  config = {
    navigationBarTitleText: 'batteryMy',
  };

  componentDidMount = () => {

  };

  navigateToBatteryMyInfo = () => {
    Taro.navigateTo({ url: '/pages/batteryMyInfo/index' })
  }

  navigateToBatteryShare = () => {
    Taro.navigateTo({ url: '/pages/batteryShare/index' })
  }

  navigateToBatteryAbout = () => {
    Taro.navigateTo({ url: '/pages/batteryAbout/index' })
  }

  navigateToCustomService = () => {
    Taro.navigateTo({ url: '/pages/batteryService/index' })
  }

  render() {
    return (
      <View className='batteryMy_page'>
        <View className='batteryMy_header ac_action'>
          <View className='header_left_user'>
            <View className='user_avatar'>
              <Image className='user_avatar_img' src={user_avatar_img} />
            </View>
            <View className='user_name'> shiliangL </View>
            </View>
          <View className='header_left_qrc'>
            <Image className='header_left_qrc_img' src={prcImg} />
          </View>
        </View>

        <View className='batteryMy_page_list'>
          <View className='batteryMy_page_list_item ac_action' onClick={this.navigateToBatteryMyInfo}>
            <View className='batteryMy_page_list_item_title'>
              个人信息
            </View>
            <View className='batteryMy_page_list_item_icon'>
              <Image className='arrow_right_img' src={arrow_right_img} />
            </View>
          </View>
          <View className='batteryMy_page_list_item ac_action' onClick={this.navigateToBatteryShare}>
            <View className='batteryMy_page_list_item_title'>
              共享电池
            </View>
            <View className='batteryMy_page_list_item_icon'>
              <Image className='arrow_right_img' src={arrow_right_img} />
            </View>
          </View>
          <View className='batteryMy_page_list_item ac_action' onClick={this.navigateToCustomService}>
            <View className='batteryMy_page_list_item_title'>
              客服中心
            </View>
            <View className='batteryMy_page_list_item_icon'>
              <Image className='arrow_right_img' src={arrow_right_img} />
            </View>
          </View>
          <View className='batteryMy_page_list_item ac_action' onClick={this.navigateToBatteryAbout}>
            <View className='batteryMy_page_list_item_title'>
              关于
            </View>
            <View className='batteryMy_page_list_item_icon'>
              <Image className='arrow_right_img' src={arrow_right_img} />
            </View>
          </View>
        </View>

        <View className='formSubmit_btn_warp'>
          <Button className='formSubmit_btn ac_action' formType='submit'>  保存 </Button>
        </View>

      </View>
    )
  }
}
