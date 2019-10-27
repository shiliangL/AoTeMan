import Taro, { Component } from '@tarojs/taro';
import NavBar from 'taro-navigationbar';

export default class AppNavBar extends Component {

  static defaultProps = {
    title: '标题',
    back: true,
    home: true
  }

  constructor() {
    super(...arguments)
    this.state = {

    }
  }




  componentDidMount = () => {

  };

  handlerGobackClick = () => {
    console.log('返回');
    Taro.navigateBack({ delta: 1 })
  }

  handlerGohomeClick = () => {
    console.log('首页');
    Taro.switchTab({
      url: '/index/index'
    })
  }



  render() {
    const { title, home, back } = this.props
    return (
      <NavBar
        title={title}
        background='#fff'
        back={back}
        home={home}
        onBack={this.handlerGobackClick}
        onHome={this.handlerGohomeClick}
      />
    )
  }
}
