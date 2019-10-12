import Taro, { Component } from '@tarojs/taro'
import { View } from '@tarojs/components'
import { AtList, AtListItem, AtAvatar } from "taro-ui"

import './index.scss'

export default class My extends Component {

  // eslint-disable-next-line react/sort-comp
  config = {
    navigationBarTitleText: '个人中心'
  }

  componentWillMount() {
    console.log('preload: ', this.$router.preload)
  }

  componentDidMount() {

  }

  componentWillUnmount() { }

  componentDidShow() { }

  componentDidHide() { }


  onFail(mes) {
    console.log(mes)
  }

  onImageClick(index, file) {
    console.log(index, file)
  }

  onChangeImage(file) {
    console.log(file);
  }

  uploadTask() {
    console.log(this, 'sb');
    Taro.chooseImage().then((res) => {
      console.log(res);
    })
  }

  navigateToPage() {
    this.$preload({
      x: 1,
      y: 2
    })
    Taro.navigateTo({ url: '/pages/my/index' })
  }


  render() {
    return (
      <View className='my-page'>

        <View className='avatar_bar'>
          <View className='avatar_bar_left'>
            <AtAvatar circle image='http://storage.360buyimg.com/mtd/home/32443566_635798770100444_2113947400891531264_n1533825816008.jpg'></AtAvatar>
          </View>
          <View className='avatar_bar_right'>
            <View className='avatar_bar_right_l'>
              <View className='user_name'> 猫冬NING </View>
              <View className='user_desc'> 描述 </View>
            </View>
            <View className='avatar_bar_right_r'>
              9.7
            </View>
          </View>
        </View>

        <View className='page-padding'>


          <AtList>
            <AtListItem title='标题文字' arrow='right' iconInfo={{
              size: 25, color: '#78A4FA', value: 'calendar',
            }}
            />
            <AtListItem title='标题文字' arrow='right' iconInfo={{
              size: 25, color: '#FD7189', value: 'heart',
            }}
            />
            <AtListItem title='标题文字' arrow='right' iconInfo={{
              size: 25, color: '#FEC18A', value: 'shopping-bag',
            }}
            />
            <AtListItem title='标题文字' arrow='right' iconInfo={{
              size: 25, color: '#78A4FA', value: 'tag',
            }}
            />
            <AtListItem title='标题文字' arrow='right' iconInfo={{
              size: 25, color: '#42E57F', value: 'credit-card',
            }}
            />
            <AtListItem title='标题文字' arrow='right' iconInfo={{
              size: 25,
              color: '#FF4949', value: 'bookmark',
            }}
            />
          </AtList>

        </View>

      </View>
    )
  }
}
