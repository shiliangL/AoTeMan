import Taro, { Component } from '@tarojs/taro';
import { View } from '@tarojs/components';
import { AtButton, AtTextarea, AtList, AtListItem } from 'taro-ui'
import './index.scss';


export default class Placeorder extends Component {
  // eslint-disable-next-line react/sort-comp
  config = {
    navigationBarTitleText: '预约下单',
  };

  constructor() {
    super(...arguments)
    this.state = {
      value: '',
      numberTime: 1,
      priceTime: 1000,
      price:0
    }
  }


  componentDidMount() {

  };


  handleChange(value) {
    this.setState({
      value
    })

  }
  addNumbox = (type) => {
    const { numberTime } = this.state
    if (type) {
      if (numberTime >= 500) return
      this.setState({
        numberTime: numberTime+1
      },() => this.totalPrice())
    } else {
      if (numberTime <= 1) return
      this.setState({
        numberTime: numberTime-1
      }, () => this.totalPrice())
    }
  }

  totalPrice = ()=>{
    const { numberTime, priceTime } = this.state
    this.setState({
      price: numberTime * priceTime
    })
  }


  onSubmit(event) {
    console.log(event)
  }
  onReset(event) {
    console.log(event)
  }

  navigateBack = () => {
    Taro.navigateBack({ delta: 1 })
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

            </View>
          </View>

          <View className='submit_bar'>
            <View className='time_and_price'>
              <View className='submit_bar_time'>
                预约次数
                <View className='InputNumberBox'>
                  <View onClick={() => this.addNumbox(0)} className='at-icon at-icon-subtract-circle'></View>
                  <View className='numbox'> {this.state.numberTime} </View>
                  <View onClick={() => this.addNumbox(1)} className='at-icon at-icon-add-circle'></View>
                </View>

                {/* <AtInputNumber
                  min={0}
                  max={10}
                  step={1}
                  value={this.state.value}
                  onChange={this.handleChange.bind(this)}
                /> */}
              </View>

              <View className='submit_bar_price'>
                {this.state.price}
              </View>
            </View>
            <View className='submit_bar_handler'>
              <View className='submit_button'>
                <AtButton formType='reset' onClick={this.navigateBack}>返回</AtButton>
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
