import Taro, { Component } from '@tarojs/taro';
import { View } from '@tarojs/components';
import './index.scss';


export default class Batteryshare extends Component {
  // eslint-disable-next-line react/sort-comp
  config = {
    navigationBarTitleText: 'batteryShare',
  };

  componentDidMount = () => {

  };

  render() {
    return (
      <View className='batteryShare_page'>
        batteryShare
      </View>
    )
  }
}
