### 项目开发能配置别名？
```
/config/index.js 

//中配置
alias: {
    '~': 'src'
},

//使用（ ~ 即指向src文件夹 ）
import banner01 from '~/images/banners/banner01.png'

```

###  基本开发要求

- 了解掌握react系开发模式
- 了解react redux在开发中的应用、数据流转、状态管理
- 多端至少是H5和微信之间的打包


### 加深对redux的理解

> connect([mapStateToProps], [mapDispatchToProps], [mergeProps], [options])

connect() 是react-redux中的核心方法之一。它将react组件与redux中的store联系在一起（组件-链接-状态）

1、参数一。[mapStateToProps(state, [ownProps]): stateProps] (Function):


- mapStateToProps必须是一个Function,作用是绑定state的指定值到props上
- state: 监听Redux store的变化。任何时候只要 Redux store发生改变，mapStateToProps 函数就会被调用,该回调函数必须返回一个纯对象，该对象会与相应展示组件的 props 合并。
- ownProps: 该参数的值为传递到组件的 props，而且只要组件接收到新的props，mapStateToProps 也会被调用


2、参数二。mapDispatchToProps,可以是对话Object或者Function,躲雨是将action创建的函数绑定到props上。

- 如果传递的是一个对象，那么每个定义在该对象的函数都将被当作Redux action creator，而且这个对象会与 Redux store绑定在一起，其中所定义的方法名将作为属性名，合并到组件的 props 中;

- 如果传递的是一个函数，该函数将接收一个 dispatch 函数，然后由你来决定如何返回一个对象，这个对象通过 dispatch 函数与 action creator 以某种方式绑定在一起




### 项目开发中怎么利用redux去做数据的请求处理页面的渲染 -测试
