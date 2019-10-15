import Taro, { Component } from '@tarojs/taro';
import { View, Image, Form, Label, Input, Button } from '@tarojs/components';
import './index.scss';

import prcImg from '../../assets/battery/icon/qrc.png'
// import arrow_right_img from '../../assets/battery/icon/arrow_right.png'
import user_avatar_img from '../../assets/battery/icon/user_avatar.png'

export default class Batterymyinfo extends Component {
  // eslint-disable-next-line react/sort-comp
  config = {
    navigationBarTitleText: 'batteryMyInfo',
  };

  componentDidMount = () => {

  };

  formSubmit = (e) => {
    console.log('form发生了submit事件，携带数据为：', e.detail.value)
  }

  formReset = (e) => {
    console.log('form发生了reset事件', e)
  }

  render() {
    return (
      <View className='batteryMyInfo_page'>
        <View className='batteryMy_header ac_action'>
          <View className='header_left_user'>
            <View className='user_avatar'>
              <Image className='user_avatar_img' src={user_avatar_img} />
            </View>
            <View className='user_name'> shiliangL </View>
          </View>
          <View className='header_left_qrc'>
            <Image className='header_left_qrc_img' src={prcImg} />
          </View>
        </View>

        <Form onSubmit={this.formSubmit} onReset={this.formReset} >
          <View className='batteryMy_page_list'>
            <View className='batteryMy_page_list_item ac_action'>
              <Label className='batteryMy_page_list_item_title' for='nickname'>
                昵称
            </Label>
              <View className='batteryMy_page_list_item_input'>
                <Input className='text_input' value='nickname' name='nickname' />
              </View>
            </View>
            <View className='batteryMy_page_list_item ac_action'>
              <Label className='batteryMy_page_list_item_title' for='sex'>
                性别
            </Label>
              <View className='batteryMy_page_list_item_input'>
                <Input className='text_input' value='sex' name='sex' />
              </View>
            </View>
            <View className='batteryMy_page_list_item ac_action'>
              <Label className='batteryMy_page_list_item_title' for='phone'>
                手机号码
            </Label>
              <View className='batteryMy_page_list_item_input'>
                <Input className='text_input' value='phone' name='phone' />
              </View>
            </View>
          </View>

          <View className='batteryMy_page_list'>
            <View className='batteryMy_page_list_item ac_action'>
              <Label className='batteryMy_page_list_item_title' for='email'>
                电子邮箱(选填)
            </Label>
              <View className='batteryMy_page_list_item_input'>
                <Input className='text_input' value='email' name='email' />
              </View>
            </View>
            <View className='batteryMy_page_list_item ac_action'>
              <Label className='batteryMy_page_list_item_title' for='address'>
                地址(选填)
            </Label>
              <View className='batteryMy_page_list_item_input'>
                <Input className='text_input' value='address' name='address' />
              </View>
            </View>
            <View className='batteryMy_page_list_item ac_action'>
              <Label className='batteryMy_page_list_item_title' for='carInfo'>
                车辆信息(选填)
            </Label>
              <View className='batteryMy_page_list_item_input'>
                <Input className='text_input' value='carInfo' name='carInfo' />
              </View>
            </View>
          </View>

          <View className='formSubmit_btn_warp'>
            <Button className='formSubmit_btn ac_action' formType='submit'>  保存 </Button>
          </View>
        </Form>

      </View>
    )
  }
}
