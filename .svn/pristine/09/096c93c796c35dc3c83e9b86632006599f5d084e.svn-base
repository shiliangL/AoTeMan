import Taro, { Component } from '@tarojs/taro';
import { View } from '@tarojs/components'
import './index.scss';

export default class CubeCalendar extends Component {

  static defaultProps = {
    title: '标题',
    home: true
  }

  constructor() {
    super(...arguments)
    this.state = {
      isCollapse: false
    }
  }




  componentDidMount = () => {

  };

  onClick2ChangeCollapse = () => {
    console.log('xxxxx');
    const { isCollapse } = this.state
    console.log(isCollapse);
    this.setState({
      isCollapse: !isCollapse
    })
  }


  render() {
    const { isCollapse } = this.state
    return <View className='page-wrapper' >
      {isCollapse ? <View class='daily-date-hander-bar' onClick={this.onClick2ChangeCollapse}> 2019年10月12日 </View> :

        <View class='page-wrapper-all'>

          <View class='calendar-wrapper'>
            <View class='calendar-header'>
              <View>日</View>
              <View>一</View>
              <View>二</View>
              <View>三</View>
              <View>四</View>
              <View>五</View>
              <View>六</View>
            </View>
            <View class='calendar-body'>

            </View>
          </View>
          <View class='daily-date-hander-bar' onClick={this.onClick2ChangeCollapse} > 2019年10月12日 </View>
        </View>

      }
    </View>

  }
}
