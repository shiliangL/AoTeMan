import Taro, { Component } from '@tarojs/taro';
import { View } from '@tarojs/components';
import { AtSearchBar } from 'taro-ui'

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
        <View className='search_bar'>
          <AtSearchBar
            value={this.state.value}
            onChange={this.onChange.bind(this)}
          />
        </View>
      </View>
    )
  }
}
