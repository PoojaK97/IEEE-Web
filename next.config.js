const withOffline =require('next-offline')
const withManifest = require('next-manifest')

module.exports =withOffline(withManifest({
  manifest:{
    icons:{
      src:'./assets/icon-512x512.png',
      cache:true
    }
  },
  workboxOpts:{
    globPatterns: ['./**/**/*'],
    globDirectory: '/dist',
    runtimeCaching:[
      { urlPattern: /^https?.*/, handler: 'staleWhileRevalidate' }

    ],



  }
}
))
