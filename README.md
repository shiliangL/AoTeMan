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

### 最怕空气突然的安静,最怕朋友突然的关心,突然的报错

```
// 修改文件的、配置错误的情况下注意报错,可能和之前缓存文件有关.temp 删除重新构建启动项目

> AOTMAN@1.0.0 dev:h5 /Users/shiliangl/WebApp/AOTMAN
> npm run build:h5 -- --watch


> AOTMAN@1.0.0 build:h5 /Users/shiliangl/WebApp/AOTMAN
> taro build --type h5 "--watch"

👽 Taro v1.2.15

internal/modules/cjs/loader.js:583
    throw err;
    ^

Error: Cannot find module '../path'
    at Function.Module._resolveFilename (internal/modules/cjs/loader.js
:581:15)
    at Function.Module._load (internal/modules/cjs/loader.js:507:25)
    at Module.require (internal/modules/cjs/loader.js:637:17)
    at require (internal/modules/cjs/helpers.js:22:18)
    at Object.<anonymous> (/Users/shiliangl/WebApp/AOTMAN/config/index.js:3:12)
    at Module._compile (internal/modules/cjs/loader.js:689:30)
    at Object.Module._extensions..js (internal/modules/cjs/loader.js:700:10)
    at Module.load (internal/modules/cjs/loader.js:599:32)
    at tryModuleLoad (internal/modules/cjs/loader.js:538:12)
    at Function.Module._load (internal/modules/cjs/loader.js:530:3)

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




### 项目开发中怎么利用redux去做数据的请求处理页面的渲染
