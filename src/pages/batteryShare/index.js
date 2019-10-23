import Taro, { Component } from '@tarojs/taro';
import { View, Button } from '@tarojs/components';
import { QRCode } from 'taro-code'

import './index.scss';


export default class Batteryshare extends Component {
  // eslint-disable-next-line react/sort-comp
  config = {
    navigationBarTitleText: 'batteryShare',
  };

  componentDidMount = () => {

  };

  useShareAppMessage = (res) => {
    if (res.from === 'button') {
      // 来自页面内转发按钮
      console.log(res.target)
    }
    return {
      title: '智能电池',
      // path: '/page/user?id=123'
    }
  }

  render() {
    return (
      <View className='batteryShare_page'>
        <View className='batteryShare_page_item'>
          <View className='batteryShare_page_item_Qrc'>
            <QRCode text='智能电池' size={130} />
          </View>
          <View className='batteryShare_page_item_title'> 扫我打开小程序 </View>
        </View>
        <View className='batteryShare_page_item'>
          <View className='batteryShare_page_item_Qrc'>
            <QRCode text='智能电池' size={130} />
          </View>
          <View className='batteryShare_page_item_title'> 扫我添加电池 </View>
        </View>

        <View className='formSubmit_btn_warp'>
          <Button className='formSubmit_btn ac_action' openType='share'> 分享应用 </Button>
        </View>

      </View>
    )
  }
}
