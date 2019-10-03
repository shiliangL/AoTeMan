import Taro, { Component } from '@tarojs/taro'
import { View } from '@tarojs/components'
import { AtList, AtListItem } from "taro-ui"

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

        <View className='page-padding'>

          <AtList>
            <AtListItem
              title='标题文字'
              arrow='right'
              thumb='https://img12.360buyimg.com/jdphoto/s72x72_jfs/t6160/14/2008729947/2754/7d512a86/595c3aeeNa89ddf71.png'
            />
            <AtListItem
              title='标题文字'
              note='描述信息'
              arrow='right'
              thumb='http://img10.360buyimg.com/jdphoto/s72x72_jfs/t5872/209/5240187906/2872/8fa98cd/595c3b2aN4155b931.png'
            />
            <AtListItem
              title='标题文字'
              note='描述信息'
              extraText='详细信息'
              arrow='right'
              thumb='http://img12.360buyimg.com/jdphoto/s72x72_jfs/t10660/330/203667368/1672/801735d7/59c85643N31e68303.png'
            />
          </AtList>

        </View>

      </View>
    )
  }
}
