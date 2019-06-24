import '@tarojs/async-await'
import Taro, { Component } from '@tarojs/taro'
import { Provider } from '@tarojs/redux'
import Index from './pages/index'
import configStore from './store'
import './app.scss'

// 如果需要在 h5 环境中开启 React Devtools
// 取消以下注释：
// if (process.env.NODE_ENV !== 'production' && process.env.TARO_ENV === 'h5')  {
//   require('nerv-devtools')
// }

const store = configStore()
class App extends Component {
  config = {
    pages: [
      'pages/index/index'
    ],
    window: {
      backgroundTextStyle: 'light',
      navigationBarBackgroundColor: '#fff',
      navigationBarTitleText: 'WeChat',
      navigationBarTextStyle: 'black'
    },
    tabBar: {
      color: "#6e6d6b",
      selectedColor: "#e64340",
      borderStyle: "white",
      backgroundColor: "#f9f9f9",
      list: [
        {
          pagePath: "pages/home/index",
          iconPath: "./images/home.png",
          selectedIconPath: "./images/home-s.png",
          text: "首页"
        },
        {
          pagePath: "pages/goodPrice/index",
          iconPath: "./images/haojia.png",
          selectedIconPath: "./images/haojia-s.png",
          text: "好价"
        },
        {
          pagePath: "pages/GoodThing/index",
          iconPath: "./images/xingqiu.png",
          selectedIconPath: "./images/xingqiu-s.png",
          text: "好物"
        },
        {
          pagePath: "pages/myCenter/index",
          iconPath: "./images/mes.png",
          selectedIconPath: "./images/mes-s.png",
          text: "我的"
        }
      ]
    }
  }

  componentDidMount() { }

  componentDidShow() { }

  componentDidHide() { }

  componentDidCatchError() { }

  // 在 App 类中的 render() 函数没有实际作用
  // 请勿修改此函数
  render() {
    return (
      <Provider store={store}>
        <Index />
      </Provider>
    )
  }
}

Taro.render(<App />, document.getElementById('app'))
