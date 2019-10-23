import Taro, { Component } from '@tarojs/taro';
import { View, Image } from '@tarojs/components'
import './index.scss';

export default class RuleList extends Component {

  static defaultProps = {
    title: 'RuleList组件',
    iconName: '默认',
    iconUrl: '',
    unit: '',
    progress: 0,
    single: true,
    gridList: [0, 2.0, 4.0, 6.0, 8.0, 10.0, 12.0, 14.0, 16.0].map(i => i.toString())
  }

  constructor() {
    super(...arguments)
    this.state = {
    }
  }




  componentDidMount = () => {

  };


  render() {
    const { iconName, iconUrl, unit, single, progress, gridList } = this.props

    return <View className='ruleList'>
      <View className='ruleList_left'>
        <View className='ruleList_left_icon'>
          {iconUrl ? <Image className='ruleList_left_icon_img' src={iconUrl} /> : null}
        </View>
        <View className='ruleList_left_name'>{iconName} </View>
      </View>
      <View className='ruleList_right'>
        <View className='ruleList_right_name'>
          {
            !single ? <View className='ruleList_right_name_box'>
              <View className='name_tage_text'>{progress}</View>
              <View className='name_tage_unit'>{unit}</View>
            </View> : <View className='ruleList_right_name_box'>
                <View className='flex_box border-left'>
                  <View className='name_tage_text'>{progress}</View>
                  <View className='name_tage_unit'>{unit}</View>
                </View>
                <View className='flex_box'>
                  <View className='name_tage_text'>{progress}</View>
                  <View className='name_tage_unit'>{unit}</View>
                </View>
              </View>
          }
        </View>
        <View className='ruleList_right_graduation'>
          <View className='ruleList_graduation_progress'>
            <View className='ruleList_graduation_progress_bar' style={{ width: progress + '%' }}></View>
          </View>
          <View className='ruleList_graduation_progress_line'>
            {
              gridList.map((item, index) => {
                return <View className='rule-item-m' key={index}>
                  <View className='rult-text'> {item} </View>
                  <View className='rult-line'></View>
                  <View className='rult-line'></View>
                  <View className='rult-line'></View>
                  <View className='rult-line'></View>
                </View>
              })
            }
          </View>
        </View>
      </View>
    </View>
  }
}
