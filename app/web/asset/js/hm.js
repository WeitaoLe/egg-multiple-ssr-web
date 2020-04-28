  var serverIP = 'https://uat.analysys.cn:4089/';
  var appkey = "fabe794a74554435";
  
  (function (config) {
    window.AnalysysAgent = window.AnalysysAgent || []
    window.AnalysysAgent.methods =
      'identify alias reset track profileSet profileSetOnce profileIncrement profileAppend profileUnset profileDelete registerSuperProperty registerSuperProperties unRegisterSuperProperty clearSuperProperties getSuperProperty getSuperProperties pageView debugMode auto appkey name uploadURL hash visitorConfigURL autoProfile autoWebstay autoHeatmap'
      .split(' ');

    function factory(b) {
      return function () {
        var a = Array.prototype.slice.call(arguments);
        a.unshift(b);
        window.AnalysysAgent.push(a);
        return window.AnalysysAgent;
      }
    };
    for (var i = 0; i < AnalysysAgent.methods.length; i++) {
      var key = window.AnalysysAgent.methods[i];
      AnalysysAgent[key] = factory(key);
    }
    for (var key in config) {
      if (!AnalysysAgent[key]) {
        AnalysysAgent[key] = factory(key); // 调热图时增加
      }
      AnalysysAgent[key](config[key])
    }
    var date = new Date();
    var time = new String(date.getFullYear()) + new String(date.getMonth() + 1) + new String(date.getDate());
    var d = document,
      c = d.createElement('script'),
      n = d.getElementsByTagName('script')[0];
    c.type = 'text/javascript';
    c.async = true;
    c.id = 'devSDK';
    c.src = '//ark.analysys.cn/sdk/v2_heatmap/AnalysysAgent_JS_SDK.min.js?v=' + ~~(new Date() / 86400);
    n.parentNode.insertBefore(c, n);
  })({
    appkey: appkey, //APPKEY
    debugMode: 2, //发线上时改成2
    autoHeatmap: true, // 热图开启
    autoWebstay: true, // 视觉停留
    NPSConfigURL: serverIP,
    uploadURL: serverIP,
    visitorConfigURL: serverIP
  })



//百度网盟开始 

window._agl = window._agl || [];
(function () {
  _agl.push(
    ['production', '_f7L2XwGXjyszb4d1e2oxPybgD']
  );
  (function () {
    var agl = document.createElement('script');
    agl.type = 'text/javascript';
    agl.async = true;
    agl.src = 'https://fxgate.baidu.com/angelia/fcagl.js?production=_f7L2XwGXjyszb4d1e2oxPybgD';
    var s = document.getElementsByTagName('script')[0];
    s.parentNode.insertBefore(agl, s);
  })();
})();

