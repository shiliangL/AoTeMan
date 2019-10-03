import Taro, { Component } from '@tarojs/taro';
import { View } from '@tarojs/components';
import { dispatFetchSwiper } from '../../api/center';

import './index.scss';


export default class Order extends Component {
  // eslint-disable-next-line react/sort-comp
  config = {
    navigationBarTitleText: 'order',
  };

  componentDidMount(){

    dispatFetchSwiper().then(res=>{
      console.log(res);
    })

  };

  render() {
    return (
      <View className='order-page'>
        order-list
      </View>
    )
  }
}
