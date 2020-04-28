

module.exports = app => {
  const exports = {};
  exports.sdk={
    url: '//ark.analysys.cn/sdk/v2_test/AnalysysAgent_JS_SDK.min.js',
    appkey: '31abd9593e9983ec',
    uploadURL: 'https://arkpaastest.analysys.cn:4089/',
    eaappkey: 'VCcG6ie0mmsI',
    eaconfigURL: 'https://eatest.analysys.cn:28088'
  };
  return exports;
};
