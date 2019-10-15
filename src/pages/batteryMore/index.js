import Taro, { Component } from '@tarojs/taro';
import { View } from '@tarojs/components';
import './index.scss';


export default class Batterymore extends Component {
  // eslint-disable-next-line react/sort-comp
  config = {
    navigationBarTitleText: 'batteryMore',
  };

  componentDidMount = () => {

  };

  render() {
    return (
      <View className='batteryMore_page'>
        <View className='batteryMore_page_item'>
          1，请将电瓶放置在儿童接触不到的，阴凉通风的地方；
        </View>

        <View className='batteryMore_page_item'>
          2，如长时间不开车，请保障每三个月启动一次汽车并运行6-10分钟，给蓄电池充电；
        </View>
        <View className='batteryMore_page_item'>
          3，电瓶出厂已带有一定电量，在装卸导线连接器时应使用绝缘工具，安装或搬运时应佩戴绝缘手套；搬运时不得接触电池极柱，避免短路；
        </View>

        <View className='batteryMore_page_item'>
        4，脏污的连接条或连接不牢均可能引起电瓶极柱打火，请保持连接条在连接处清洁并且牢固；
        </View>
        <View className='batteryMore_page_item'>
          5，安装电瓶时须固定到位，极柱与连接器极性连接正确；
        </View>
        <View className='batteryMore_page_item'>
          6，在启动汽车时，不间断的使用起动机会导致电池过度放电，每次发动车的时间请勿超过5秒，再次启动的时间间隔不少于15秒；
        </View>
        <View className='batteryMore_page_item'>
          7，请勿将电瓶放在大量放射性、红外线辐射、紫外线辐射、有机溶解气体、腐蚀气体的环境中；
        </View>
        <View className='batteryMore_page_item'>
          8，请勿将电瓶靠近明火或加热器等热源；
        </View>
        <View className='batteryMore_page_item'>
          9，请勿将电瓶随意拆卸或擅自改装；
        </View>
        <View className='batteryMore_page_item'>
          10，请勿将电瓶高空坠落
        </View>
        <View className='batteryMore_page_item'>
          11，请勿将电瓶翻滚、倒置或者强烈撞击
        </View>
        <View className='batteryMore_page_item'>
          12，严禁电瓶短路电池正负极。
        </View>
      </View>
    )
  }
}
