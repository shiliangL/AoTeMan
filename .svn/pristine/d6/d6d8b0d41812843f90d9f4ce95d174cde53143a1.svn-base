// NOTE H5 端使用 devServer 实现跨域，需要修改 package.json 的运行命令，加入环境变量

// eslint-disable-next-line import/no-commonjs
module.exports = {
  env: {
    NODE_ENV: '"development"'
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
