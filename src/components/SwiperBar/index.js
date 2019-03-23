import Taro from '@tarojs/taro'
import { View, Swiper, SwiperItem, Image } from '@tarojs/components'
import './index.scss'

export default class SwiperBar extends Taro.Component {

  static defaultProps = {
    data:[
      { img:'https://cdn.it120.cc/apifactory/2019/03/01/67fbf361df7a6e7c9aa1dbfaf3d465e1.jpg'}
    ]
  }

  render() {
    const { data } = this.props
    return (
      <View className='banner'>
        <Swiper
          className='banner__swiper'
          circular
          autoplay
          indicatorDots
          indicatorActiveColor='rgb(178, 42, 49)'
        // TODO 目前 H5、RN 暂不支持 previousMargin、nextMargin
        // previousMargin
        // nextMargin
        >
          {data.map(item => (
            <SwiperItem
              key={item.rank}
              className='home-banner__swiper-item'
            >
              <Image
                className='home-banner__swiper-item-img'
                src={item.img}
              />
            </SwiperItem>
          ))}
        </Swiper>
      </View>
    );
  }
}
