// NOTE H5 端使用 devServer 实现跨域，需要修改 package.json 的运行命令，加入环境变量
const isH5 = process.env.TARO_ENV === 'h5'
const HOST = '"http://coachapi.szhcqh.cn"'
console.log(isH5,'sb');

// eslint-disable-next-line import/no-commonjs
module.exports = {
  env: {
    NODE_ENV: '"development"'
  },
  defineConstants: {
    HOST: isH5 ? '""' : HOST,
  },
  weapp: {},
  h5: {
    devServer: {
      port: 8099,
      https: false,
      proxy: {
        '/api/': {
          target: 'http://coachapi.szhcqh.cn',
          changeOrigin: true,
          pathRewrite: {
            '^/api/': '/api/'
          },
        },
      }
    }
  }
}
