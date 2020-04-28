const path = require('path');
const fs = require('fs');
module.exports = app => {
  const exports = {};

  exports.siteFile = {
    '/favicon.ico': fs.readFileSync(path.join(app.baseDir, 'app/web/asset/images/favicon.ico'))
  };

  exports.view = {
    cache: false
  };

  exports.vuessr = {
    layout: path.join(app.baseDir, 'app/web/view/layout.html'),
    renderOptions: {
      // 告诉 vue-server-renderer 去 app/view 查找异步 chunk 文件
      basedir: path.join(app.baseDir, 'app/view')
    },
    injectRes: [{
        url: 'https://s1.analysys.cn/libs/??twitter-bootstrap/3.3.7/css/bootstrap.min.css,pace/1.0.2/themes/blue/pace-theme-minimal.css,animate.css/3.7.2/animate.min.css'
      },
      {
        url: '//s1.analysys.cn/libs/??es6-shim/0.34.2/es6-shim.min.js,-/@fedor/promise@1.0.1/dist/promise.polyfill.min.js,moment.js/2.18.1/moment.min.js'
      },
      // {
      //   url: '/public/js/hm.js'
      // }
    ]
  };

  exports.logger = {
    consoleLevel: 'DEBUG',
    dir: path.join(app.baseDir, 'logs')
  };

  exports.static = {
    prefix: '/public/',
    dir: path.join(app.baseDir, 'public')
  };

  exports.keys = '123456';

  exports.middleware = [
    'access'
  ];

  return exports;
};