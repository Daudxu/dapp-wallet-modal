// index.js
if (process.env.NODE_ENV === 'production') { // 通过环境变量来决定入口文件
  module.exports = require('./lib/dapp-wallet-modal.umd.min.js')
} else {
  module.exports = require('./lib/dapp-wallet-modal.umd.js')
}
