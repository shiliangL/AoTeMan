import '@tarojs/async-await'
import Taro, { Component } from '@tarojs/taro'
import { Provider } from '@tarojs/redux'

import Index from './pages/index'

import configStore from './store'

import './styles/custom.scss'

// 如果需要在 h5 环境中开启 React Devtools
// 取消以下注释：
// if (process.env.NODE_ENV !== 'production' && process.env.TARO_ENV === 'h5')  {
//   require('nerv-devtools')
// }

const store = configStore()

class App extends Component {

  config = {
    pages: [
      'pages/home/index',
      'pages/catefory/index',
      'pages/shopcart/index',
      'pages/my/index',
    ],
    window: {
      backgroundTextStyle: 'light',
      navigationBarBackgroundColor: '#e64340',
      navigationBarTitleText: 'WeChat',
      navigationBarTextStyle: 'black'
    },
    tabBar: {
      "color": "#6e6d6b",
      "selectedColor": "#e64340",
      "borderStyle": "white",
      "backgroundColor": "#f9f9f9",
      "list": [
        {
          pagePath: "pages/home/index",
          iconPath: "./images/nav/home-off.png",
          selectedIconPath: "./images/nav/home-on.png",
          text: "首页"
        },
        {
          pagePath: "pages/catefory/index",
          iconPath: "./images/nav/ic_catefory_normal.png",
          selectedIconPath: "./images/nav/ic_catefory_pressed.png",
          text: "分类"
        },
        {
          pagePath: "pages/shopcart/index",
          iconPath: "./images/nav/cart-off.png",
          selectedIconPath: "./images/nav/cart-on.png",
          text: "购物车"
        },
        {
          pagePath: "pages/my/index",
          iconPath: "./images/nav/my-off.png",
          selectedIconPath: "./images/nav/my-on.png",
          text: "我的"
        }
      ]
    }
  }

  componentDidMount () {}

  componentDidShow () {}

  componentDidHide () {}

  componentCatchError () {}

  componentDidCatchError () {}

  // 在 App 类中的 render() 函数没有实际作用
  // 请勿修改此函数
  render () {
    return (
      <Provider store={store}>
        <Index />
      </Provider>
    )
  }
}

Taro.render(<App />, document.getElementById('app'))
