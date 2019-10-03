import Taro, { Component } from '@tarojs/taro';
import { View } from '@tarojs/components';
import './index.scss';

export default class Login extends Component {
  // eslint-disable-next-line react/sort-comp
  config = {
    navigationBarTitleText: 'login',
  };

  componentDidMount = () => {

  };

  render() {
    return (
      <View className='login-page'>
        login
      </View>
    )
  }
}
