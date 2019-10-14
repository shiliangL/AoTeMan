import Taro, { Component } from '@tarojs/taro';
import { View } from '@tarojs/components';
import { AtSearchBar } from 'taro-ui'

import CubeCalendar from '../../components/CubeCalendar/index';
import AppNavBar from '../../components/AppNavBar/index';

import './index.scss';


export default class Coach extends Component {
  // eslint-disable-next-line react/sort-comp
  config = {
    navigationBarTitleText: 'coach',
  };

  constructor() {
    super(...arguments)
    this.state = {
      value: ''
    }
  }

  onChange(value) {
    this.setState({
      value: value
    })
  }


  componentDidMount = () => {

  };

  render() {
    return (
      <View className='coach_page'>
        <AppNavBar title='教练列表' />

        <View className='search_bar'>
          <AtSearchBar
            value={this.state.value}
            onChange={this.onChange.bind(this)}
          />
        </View>
        <View className='cf'></View>

        <View className='cube_calendar_box'>
          <CubeCalendar />
        </View>
      </View>
    )
  }
}
