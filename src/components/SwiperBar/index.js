import Taro from '@tarojs/taro'
import { View, Swiper, SwiperItem, Image } from '@tarojs/components'
import banner01 from '~/images/banners/banner01.png'
import banner02 from '~/images/banners/banner02.png'
import banner03 from '~/images/banners/banner03.png'
import banner04 from '~/images/banners/banner04.png'
import './index.scss'

export default class SwiperBar extends Taro.Component {

  static defaultProps = {
    data: [
      { img: banner01 },
      { img: banner02 },
      { img: banner03 },
      { img: banner04 },
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
