import Taro, { Component } from '@tarojs/taro';
import { View } from '@tarojs/components';
import './index.scss';


export default class Batteryintroduce extends Component {
  // eslint-disable-next-line react/sort-comp
  config = {
    navigationBarTitleText: 'batteryIntroduce',
  };

  componentDidMount = () => {

  };

  render() {
    return (
      <View className='batteryIntroduce_page'>
        <View className='batteryIntroduce_page_item'>
          ① 将者智能启动电池可以直接替代使用大型锂离子电池的启动程序中的铅酸盐。
        </View>
        <View className='batteryIntroduce_page_item'>
          ② 启动电池的安全特性包括低/高电压保护、短路保护、过热保护和过电保护。
        </View>
        <View className='batteryIntroduce_page_item'>
          ③ 智能启动电池通过蓝牙技术，可以使用智能手机实时监测电池的电量及状态。
        </View>
      </View>
    )
  }
}
