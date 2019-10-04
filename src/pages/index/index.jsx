import Taro, { Component } from '@tarojs/taro'
import { View, Image, Swiper, SwiperItem } from '@tarojs/components'
import { AtGrid } from 'taro-ui'

// import { setStorage, getStorage } from '@utils/storage';

import './index.scss'

export default class Index extends Component {

  // eslint-disable-next-line react/sort-comp
  config = {
    navigationBarTitleText: '首页'
  }

  componentWillMount() {
    console.log('componentWillMount');
  }

  componentDidMount() {

    Taro.getUserInfo().then((res) => {
      console.log(res);
      const { errMsg, userInfo } = res
      if (errMsg === 'getUserInfo:ok') {
        Taro.showToast({
          title: `微信昵称: ${userInfo.nickName}，请使用邮箱登录`,
          icon: 'none'
        })
      } else {
        Taro.showToast({
          title: '授权失败',
          icon: 'none'
        })
      }
    }).catch(e => {
      console.log(e, 'sb');
    })

  }

  componentWillUnmount() {
    console.log('componentWillUnmount');
  }

  componentDidShow() {
    console.log('componentDidShow');
  }

  componentDidHide() {
    console.log('componentDidHide');
  }


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
    // this.$preload({
    //   x: 1,
    //   y: 2
    // })
    Taro.navigateTo({ url: '/pages/order/index' })
  }

  onClickAtGrid(item, index) {
    console.log(item, index);
  }

  render() {
    return (
      <View className='index-page'>

        <View className='swiper-box'>
          <Swiper
            className='test-h'
            indicatorColor='#999'
            indicatorActiveColor='#333'
            circular
            indicatorDots
            autoplay
          >
            <SwiperItem>
              <View className='taro-img slide-image'>
                <Image mode='widthFix' src='https://img10.360buyimg.com/babel/s700x360_jfs/t25855/203/725883724/96703/5a598a0f/5b7a22e1Nfd6ba344.jpg!q90!cc_350x180' />
              </View>
            </SwiperItem>
            <SwiperItem>
              <View className='taro-img slide-image'>
                <Image mode='widthFix' src='https://img11.360buyimg.com/babel/s700x360_jfs/t1/4776/39/2280/143162/5b9642a5E83bcda10/d93064343eb12276.jpg!q90!cc_350x180' />
              </View>
            </SwiperItem>
            <SwiperItem>
              <View className='taro-img slide-image'>
                <Image mode='widthFix' src='https://img14.360buyimg.com/babel/s700x360_jfs/t1/4099/12/2578/101668/5b971b4bE65ae279d/89dd1764797acfd9.jpg!q90!cc_350x180' />
              </View>
            </SwiperItem>
          </Swiper>
        </View>


        <View className='grid-list'>
          <AtGrid mode='square' onClick={this.onClickAtGrid.bind(this)} columnNum={4} hasBorder={false} data={
            [
              {
                image: 'https://img12.360buyimg.com/jdphoto/s72x72_jfs/t6160/14/2008729947/2754/7d512a86/595c3aeeNa89ddf71.png',
                value: '官网'
              },
              {
                image: 'https://img20.360buyimg.com/jdphoto/s72x72_jfs/t15151/308/1012305375/2300/536ee6ef/5a411466N040a074b.png',
                value: '平台'
              },
              {
                image: 'https://img10.360buyimg.com/jdphoto/s72x72_jfs/t5872/209/5240187906/2872/8fa98cd/595c3b2aN4155b931.png',
                value: '客服'
              },
              {
                image: 'https://img12.360buyimg.com/jdphoto/s72x72_jfs/t10660/330/203667368/1672/801735d7/59c85643N31e68303.png',
                value: '课程'
              }
            ]
          }
          />

        </View>


        <View className='swiper-box'>
          <Swiper
            className='test-h'
            indicatorColor='#999'
            indicatorActiveColor='#333'
            circular
            indicatorDots
            autoplay
          >
            <SwiperItem>
              <View className='taro-img slide-image'>
                <Image mode='widthFix' src='https://img10.360buyimg.com/babel/s700x360_jfs/t25855/203/725883724/96703/5a598a0f/5b7a22e1Nfd6ba344.jpg!q90!cc_350x180' />
              </View>
            </SwiperItem>
            <SwiperItem>
              <View className='taro-img slide-image'>
                <Image mode='widthFix' src='https://img11.360buyimg.com/babel/s700x360_jfs/t1/4776/39/2280/143162/5b9642a5E83bcda10/d93064343eb12276.jpg!q90!cc_350x180' />
              </View>
            </SwiperItem>
            <SwiperItem>
              <View className='taro-img slide-image'>
                <Image mode='widthFix' src='https://img14.360buyimg.com/babel/s700x360_jfs/t1/4099/12/2578/101668/5b971b4bE65ae279d/89dd1764797acfd9.jpg!q90!cc_350x180' />
              </View>
            </SwiperItem>
          </Swiper>
        </View>

        <View className='card-list'>

        </View>

        <View className='page-padding'>

          <View>
            <View className='at-article'>
              <View className='app_page_title'>
                <View className='app_page_title_left'>
                  <View className='app_page_title_mainTitle'>
                    画册设计
                </View>
                  <View className='app_page_title_subTitle'>
                    精简概要
                  </View>
                </View>
                <View className='app_page_title_right more'>
                  更多
                </View>
              </View>
              <View className='at-article__content'>
                <View className='at-article__section'>
                  <View className='at-article__p'>
                    这是文本段落。这是文本段落。这是文本段落。这是文本段落。这是文本段落。
                    这是文本段落。这是文本段落。这是文本落。这是文本段落。
                </View>
                  <View className='at-article__p'>
                    这是文本段落。这是文本段落。
                  </View>
                  <Image
                    className='at-article__img'
                    src='https://img30.360buyimg.com/sku/jfs/t19660/324/841553494/117886/ad2742c1/5aab8d20Ne56ae3bf.jpg'
                    mode='widthFix'
                  />
                </View>
              </View>
            </View>
          </View>

        </View>

      </View>
    )
  }
}
