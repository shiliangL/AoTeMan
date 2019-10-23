import Taro, { Component } from '@tarojs/taro';
import { AtButton } from 'taro-ui'
import { View, Image } from '@tarojs/components';
import './index.scss';

import scanCodeBorderImg from '../../assets/battery/icon/scanCode.png'
import productImg from '../../assets/battery/icon/cp.png'

// import RuleList from '../../components/RuleList';

export default class batteryScanCode extends Component {

  // eslint-disable-next-line react/sort-comp
  config = {
    navigationBarTitleText: 'scanCode',
  };


  constructor() {
    super(...arguments)
    this.state = {
      scanCodeResult: ''
    }
  }

  componentDidMount = () => {
    Taro.getSystemInfo({
      success: res => console.log(res.platform)
    }).then(res => console.log(res.platform))

    Taro.getUserInfo().then(_=>{
      console.log(_);

    }).catch(e=>{
      console.log(e);

    })
  };

  scanCode = () => {
    Taro.scanCode({ onlyFromCamera: true }).then(({ result }) => {
      this.setState({ scanCodeResult: result })
      Taro.showToast({
        title: `扫描结果: ${result}`,
        icon: 'none',
        duration: 2000
      })
    }).catch(e=>{
      console.log(e);
    })
  }


  render() {
    return (
      <View className='batteryScanCode_page'>
        {/* <RuleList /> */}
        <View className='scanCode_mian'>
          {/* <View className='scanCode_text'> 您暂未绑定电池 </View> */}
          <View className='scanCode_text'> 请点击“扫描绑定电池”扫描电池二维码进行绑定使用 </View>
          <View className='scanCodeBox'>
            <Image className='scanCodeBorder' src={scanCodeBorderImg} />
            <Image className='cpImg' src={productImg} />
          </View>
          <View className='scanCode_text'> { this.state.scanCodeResult } </View>
        </View>
        <View className='scanCode_open'>
          <AtButton onClick={this.scanCode} type='primary' openType='getUserInfo'>扫描绑定电池</AtButton>
        </View>
      </View>
    )
  }
}
