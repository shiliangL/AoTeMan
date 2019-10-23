import Taro, { Component } from '@tarojs/taro';
import { View, Text, Image } from '@tarojs/components';
import { AtFab } from 'taro-ui'
import RuleList from '../../components/RuleList/index';

import './index.scss';
import l_open_img from '../../assets/battery/icon/l_open.png'
import icon_a_img from '../../assets/battery/icon/icon_a.png'
import icon_t_img from '../../assets/battery/icon/icon_t.png'
import icon_v_img from '../../assets/battery/icon/icon_v.png'

import { set as setGlobalData, get as getGlobalData } from '../../global_data'

export default class Batteryhome extends Component {

  // eslint-disable-next-line react/sort-comp
  config = {
    navigationBarTitleText: 'batteryHome',
  };

  constructor() {
    super(...arguments)
    this.state = {

    }

  }

  componentDidMount = () => {
    console.log(getGlobalData('shiliangL'));

    setTimeout(() => {
      setGlobalData('shiliangL','测试修改')
      console.log(getGlobalData('shiliangL'));
    }, 2000);
  };

  navigateTobatteryHomeInfo = () => {
    Taro.navigateTo({ url: '/pages/batteryInfo/index' })
  }

  onButtonScanCode = () => {
    Taro.redirectTo({ url: '/pages/batteryScanCode/index' })
    // Taro.navigateTo({ url: '/pages/batteryScanCode/index' })
  }

  onButtonClick = () => {
    Taro.navigateTo({ url: '/pages/batteryMy/index' })
    // this.setState( prevState => ({ appDrawer: !prevState.appDrawer }))
    // this.setState({ appDrawer: true })
  }

  useShareAppMessage = (res) => {
    if (res.from === 'button') {
      // 来自页面内转发按钮
      console.log(res.target)
    }
    return {
      title: '智能电池',
      // path: '/page/user?id=123'
    }
  }

  render() {
    return (
      <View className='batteryHome_page'>
        <View className='batteryHome_page_top'>
          Sk-SMB20
        </View>
        <View className='batteryHome_page_main'>
          <View className='batteryCar'>
            <View className='batteryCar_left'>

              <View className='batteryCar_left_header'>
                <View className='main_car_text'> 52%</View>
                <View className='main_car_desc'> 当前电量 </View>
              </View>

              <View className='battery_warp'>
                <View className='batteryBox'>
                  <View className='batteryBox_top'></View>
                  <View className='batteryBox_innner'>
                    <View className='batteryBox_Bar' style='height:52%'></View>
                  </View>
                </View>
              </View>


            </View>
            <View className='batteryCar_right'>
              <View className='batteryCar_right_top ac_action' onClick={this.navigateTobatteryHomeInfo}>
                <View> 电池状态: <Text className='main_car_text'> 正常 </Text>  </View>
                <View> {'>'} </View>
              </View>
              <View className='batteryCar_right_bottom'>
                <View className='batteryCar_bottom_item'>
                  <View className='main_car_text'>
                    1000HA
                  </View>
                  <View className='main_car_desc'>
                    总安时
                  </View>
                </View>
                <View className='batteryCar_bottom_item middle'>
                  <View className='main_car_text'>
                    285次
                  </View>
                  <View className='main_car_desc'>
                    启动次数
                  </View>
                </View>
                <View className='batteryCar_bottom_item'>
                  <View className='main_car_text'>
                    500次
                  </View>
                  <View className='main_car_desc'>
                    循环次数
                  </View>
                </View>
              </View>
            </View>

          </View>

          <View className='batteryInfoList'>
            <View className='batteryInfoList'>
              <RuleList progress='121' iconName='温度' unit='' iconUrl={icon_t_img} />
            </View>
            <View className='batteryInfoList'>
              <RuleList progress='100' iconName='电压' unit='Vdc' iconUrl={icon_v_img} />
            </View>
            <View className='batteryInfoList'>
              <RuleList progress='30' iconName='电流' unit='Amp' iconUrl={icon_a_img} />
            </View>
          </View>

        </View>
        <View className='batteryHome_page_btn'>

          <View className='lightning_btn_wrap'>
            <View className='lightning_btn_out'>
              <View className='lightning_in ac_action'>
                <View className='lightning_in_text'>
                  <View className='opne_icon'>
                    <Image className='l_open_img' src={l_open_img} />
                  </View>
                  <View className='opne_text'> 开启 </View>
                </View>
              </View>
            </View>
          </View>
        </View>

        <View className='myScanCode'>
          <AtFab onClick={this.onButtonScanCode} size='small'>
            <Text className='at-fab__icon at-icon at-icon-iphone'></Text>
          </AtFab>
        </View>

        <View className='mycenter'>
          <AtFab onClick={this.onButtonClick} size='small'>
            <Text className='at-fab__icon at-icon at-icon-menu'></Text>
          </AtFab>
        </View>

      </View>
    )
  }
}
