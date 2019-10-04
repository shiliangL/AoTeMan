import Taro, { Component } from '@tarojs/taro';
import { View } from '@tarojs/components';
import { AtInputNumber, AtButton, AtTextarea, AtList, AtListItem } from 'taro-ui'
import './index.scss';


export default class Placeorder extends Component {
  // eslint-disable-next-line react/sort-comp
  config = {
    navigationBarTitleText: '预约下单',
  };

  constructor() {
    super(...arguments)
    this.state = {
      value: ''
    }
  }


  componentDidMount() {

  };


  handleChange(value) {
    this.setState({
      value
    })
  }
  onSubmit(event) {
    console.log(event)
  }
  onReset(event) {
    console.log(event)
  }

  render() {
    return (
      <View className='placeOrder_page'>


        <View className='placeOrder_form'>
          <View className='form_item_wrap'>
            <View className='avatar_header'>
              头像
            </View>
            <View className='form_item'>
              <View className='form_item_title'>
                主题
            </View>
              <AtTextarea
                value={this.state.value}
                onChange={this.handleChange.bind(this)}
                maxLength={200}
                placeholder='请输入主题...'
              />
            </View>
            <View className='form_item'>
              <View className='form_item_title'>
                期望预约日期
            </View>
              <AtList hasBorder={false}>
                <AtListItem hasBorder={false} title='标题文字' arrow='right' />
              </AtList>
            </View>
            <View className='form_item'>
              <View className='form_item_title'>
                约谈方式
            </View>
              <AtList hasBorder={false}>
                <AtListItem hasBorder={false} title='标题文字' arrow='right' />
              </AtList>

              <View className='form_item_title'>
                期望预约日期
            </View>
              <AtList hasBorder={false}>
                <AtListItem hasBorder={false} title='标题文字' arrow='right' />
              </AtList>

            </View>
          </View>

          <View className='submit_bar'>
            <View className='time_and_price'>
              <View className='submit_bar_time'>
                预约次数
              <AtInputNumber
                min={0}
                max={10}
                step={1}
                value={this.state.value}
                onChange={this.handleChange.bind(this)}
              />
              </View>

              <View className='submit_bar_price'>
                20000
              </View>
            </View>
            <View className='submit_bar_handler'>
              <View className='submit_button'>
                <AtButton formType='reset'>返回</AtButton>
              </View>
              <View className='submit_button'>
                <AtButton type='primary' formType='submit'>提交订单</AtButton>
              </View>
            </View>
          </View>

        </View>

      </View>
    )
  }
}
