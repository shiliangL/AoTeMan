import Taro, { Component } from '@tarojs/taro'
import { View, Text } from '@tarojs/components'
import { connect } from "@tarojs/redux-h5";
import * as actions from "@actions/home";

import SwiperBanner from '@components/SwiperBanner';

import './index.scss'

@connect(state => state.home, { ...actions })
class Index extends Component {
  // eslint-disable-next-line react/sort-comp
  config = {
    navigationBarTitleText: '首页'
  }

  state = {
    loaded: false,
    loading: false,
    lastItemId: 0,
    hasMore: true
  };

  componentWillMount() { }

  componentDidMount() {
    const { dispatchHome } = this.props
    dispatchHome().then((res)=>{
      console.log(res,'sb');
      this.setState({ loaded: true })
    })
  }

  componentWillUnmount() { }

  componentDidShow() { }

  componentDidHide() { }

  onTap() {
    console.log('点击了');
    console.log(this.state);
  }

  render() {
    const { homeInfo } = this.props

    return (
      <View className='home-page'>
        <SwiperBanner list={homeInfo.focus} />

      </View>
    )
  }
}


export default Index
