import Taro, { Component } from '@tarojs/taro';
import { View } from '@tarojs/components';
import './index.scss';


export default class Batteryinfo extends Component {
  // eslint-disable-next-line react/sort-comp
  config = {
    navigationBarTitleText: 'batteryInfo',
  };

  static defaultProps = {
    statusList: [
      { title: '过压保护(OV)', status: 0 },
      { title: '充电过电流保护（COC）', status: 1 },
      { title: '低电压保护（LV）', status: 1 },
      { title: '放电过电流保护（DOC）', status: 1 },
      { title: '低温保护（LTC）', status: 1 },
      { title: '高温保护（HT）', status: 1 },
    ]
  }

  constructor() {
    super(...arguments)
    this.state = {
      batteryList: [
        { title: '电池1', total: 13.2, quantity: '13.2%' },
        { title: '电池2', total: 13.2, quantity: '15.2%' },
        { title: '电池3', total: 13.2, quantity: '20.2%' },
        { title: '电池4', total: 13.2, quantity: '40.2%' },
        { title: '电池5', total: 13.2, quantity: '55.2%' },
      ],
    }
  }

  componentDidMount = () => {

  };

  render() {
    return (
      <View className='batteryInfo_page'>
        <View className='batteryInfo_page_top'>
          {
            this.state.batteryList.map((item) => {
              return <View className='battery_top_item' key={item.title}>
                <View className='battery_desc_text'> {item.title} </View>
                <View className='battery_warp'>
                  <View className='batteryBox'>
                    <View className='batteryBox_top'></View>
                    <View className='batteryBox_innner'>
                      <View className='batteryBox_Bar' style={{ height: item.quantity }}></View>
                    </View>
                  </View>
                </View>
                <View className='battery_desc_text'> {item.total} V </View>

              </View>
            })
          }

        </View>
        <View className='batteryInfo_page_main'>
          <View className='batteryCar'>
            {
              this.props.statusList.map(item => {
                return <View className='batteryCar_list_item ac_action' key={item.title}>
                  <View className='batteryCar_left'>
                    {item.title}
                  </View>
                  <View className='batteryCar_right'>
                    <View className={!item.status ? 'status_icon_error' : 'status_icon_normal'} ></View>
                    <View className='status_text'>  {item.status ? '正常' : '错误' } </View>
                  </View>
                </View>
              })
            }
          </View>
        </View>
      </View >
    )
  }
}
