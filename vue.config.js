const { name, version } = require('./package.json')

process.env.VUE_APP_VERSION = version || 'dev'
process.env.VUE_APP_SYSTEM = 'ระบบกำหนดสิทธิ'
process.env.VUE_APP_NAME = 'การกำหนดสิทธิในการทำงาน'

module.exports = {
  publicPath: '',
  devServer: {
    proxy: {
      '/api': {
        target: 'https://iservices-ng.bora.dopa.go.th',
        // target: 'http://172.16.224.218:7003',
        secure: false,
        changeOrigin: true,
        headers: {
          'X-Vue-App-Name': name,
        },
      },
    },
  },
}
