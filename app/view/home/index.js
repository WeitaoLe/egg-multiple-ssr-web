!function(t,e){for(var n in e)t[n]=e[n]}(exports,function(t){var e={};function n(r){if(e[r])return e[r].exports;var i=e[r]={i:r,l:!1,exports:{}};return t[r].call(i.exports,i,i.exports,n),i.l=!0,i.exports}return n.m=t,n.c=e,n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)n.d(r,i,function(e){return t[e]}.bind(null,i));return r},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="/public/",n(n.s=18)}([function(t,e){t.exports=require("vue")},function(t,e,n){"use strict";t.exports=function(t){var e=[];return e.toString=function(){return this.map((function(e){var n=function(t,e){var n=t[1]||"",r=t[3];if(!r)return n;if(e&&"function"==typeof btoa){var i=(o=r,s=btoa(unescape(encodeURIComponent(JSON.stringify(o)))),c="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(s),"/*# ".concat(c," */")),a=r.sources.map((function(t){return"/*# sourceURL=".concat(r.sourceRoot||"").concat(t," */")}));return[n].concat(a).concat([i]).join("\n")}var o,s,c;return[n].join("\n")}(e,t);return e[2]?"@media ".concat(e[2]," {").concat(n,"}"):n})).join("")},e.i=function(t,n,r){"string"==typeof t&&(t=[[null,t,""]]);var i={};if(r)for(var a=0;a<this.length;a++){var o=this[a][0];null!=o&&(i[o]=!0)}for(var s=0;s<t.length;s++){var c=[].concat(t[s]);r&&i[c[0]]||(n&&(c[2]?c[2]="".concat(n," and ").concat(c[2]):c[2]=n),e.push(c))}},e}},function(t,e,n){"use strict";function r(t,e,n,r){if(r||"undefined"==typeof __VUE_SSR_CONTEXT__||(r=__VUE_SSR_CONTEXT__),r){r.hasOwnProperty("styles")||(Object.defineProperty(r,"styles",{enumerable:!0,get:function(){return i(r._styles)}}),r._renderStyles=i);var a=r._styles||(r._styles={});e=function(t,e){for(var n=[],r={},i=0;i<e.length;i++){var a=e[i],o=a[0],s={id:t+":"+i,css:a[1],media:a[2],sourceMap:a[3]};r[o]?r[o].parts.push(s):n.push(r[o]={id:o,parts:[s]})}return n}(t,e),n?function(t,e){for(var n=0;n<e.length;n++)for(var r=e[n].parts,i=0;i<r.length;i++){var a=r[i],o=a.media||"default",s=t[o];s?s.ids.indexOf(a.id)<0&&(s.ids.push(a.id),s.css+="\n"+a.css):t[o]={ids:[a.id],css:a.css,media:a.media}}}(a,e):function(t,e){for(var n=0;n<e.length;n++)for(var r=e[n].parts,i=0;i<r.length;i++){var a=r[i];t[a.id]={ids:[a.id],css:a.css,media:a.media}}}(a,e)}}function i(t){var e="";for(var n in t){var r=t[n];e+='<style data-vue-ssr-id="'+r.ids.join(" ")+'"'+(r.media?' media="'+r.media+'"':"")+">"+r.css+"</style>"}return e}n.r(e),n.d(e,"default",(function(){return r}))},function(t,e,n){var r=n(10);"string"==typeof r&&(r=[[t.i,r,""]]),r.locals&&(t.exports=r.locals);var i=n(2).default;t.exports.__inject__=function(t){i("455a17f8",r,!1,t)}},function(t,e,n){var r=n(12);"string"==typeof r&&(r=[[t.i,r,""]]),r.locals&&(t.exports=r.locals);var i=n(2).default;t.exports.__inject__=function(t){i("39b9fa60",r,!1,t)}},function(t,e,n){var r=n(14);"string"==typeof r&&(r=[[t.i,r,""]]),r.locals&&(t.exports=r.locals);var i=n(2).default;t.exports.__inject__=function(t){i("a2f19540",r,!1,t)}},function(t,e,n){var r=n(17);"string"==typeof r&&(r=[[t.i,r,""]]),r.locals&&(t.exports=r.locals);var i=n(2).default;t.exports.__inject__=function(t){i("78661230",r,!1,t)}},function(t,e,n){!function(t){t.noop=function(){}}("object"==typeof t.exports?t.exports:window)},function(t,e){},function(t,e,n){"use strict";n.r(e);var r=n(3),i=n.n(r);for(var a in r)"default"!==a&&function(t){n.d(e,t,(function(){return r[t]}))}(a);e.default=i.a},function(t,e,n){var r=n(1),i=n(7);(e=r(!1)).i(i),e.push([t.i,"\n",""]),t.exports=e},function(t,e,n){"use strict";n.r(e);var r=n(4),i=n.n(r);for(var a in r)"default"!==a&&function(t){n.d(e,t,(function(){return r[t]}))}(a);e.default=i.a},function(t,e,n){var r=n(1),i=n(7);(e=r(!1)).i(i),e.push([t.i,"\n",""]),t.exports=e},function(t,e,n){"use strict";n.r(e);var r=n(5),i=n.n(r);for(var a in r)"default"!==a&&function(t){n.d(e,t,(function(){return r[t]}))}(a);e.default=i.a},function(t,e,n){var r=n(1),i=n(7);(e=r(!1)).i(i),e.push([t.i,"\nbody {\n  margin: 0 0px;\n}\na {\n  text-decoration: none;\n}\n",""]),t.exports=e},function(t,e,n){t.exports=n.p+"img/loading.0c81ad12.gif"},function(t,e,n){"use strict";n.r(e);var r=n(6),i=n.n(r);for(var a in r)"default"!==a&&function(t){n.d(e,t,(function(){return r[t]}))}(a);e.default=i.a},function(t,e,n){(e=n(1)(!1)).push([t.i,"",""]),t.exports=e},function(t,e,n){"use strict";n.r(e);var r=n(0),i=n.n(r);i.a.filter("removeHtml",t=>t&&t.replace(/<(?:.|\n)*?>/gm,"").replace(/(&rdquo;)/g,'"').replace(/&ldquo;/g,'"').replace(/&mdash;/g,"-").replace(/&nbsp;/g,"").replace(/&gt;/g,">").replace(/&lt;/g,"<").replace(/<[\w\s"':=\/]*/,""));n(8);var a=function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("LayoutHeader"),this._ssrNode(" "),e("LayoutContent",[e("div",{attrs:{slot:"content"},slot:"content"},[this._t("main")],2)])],2)};a._withStripped=!0;var o=function(){var t=this.$createElement;return(this._self._c||t)("header",{staticClass:"header"},[this._ssrNode('<div class="container"><h1><a href="/" class="router-link-active">易观博阅</a></h1></div>')])};function s(t,e,n,r,i,a,o,s){var c,u="function"==typeof t?t.options:t;if(e&&(u.render=e,u.staticRenderFns=n,u._compiled=!0),r&&(u.functional=!0),a&&(u._scopeId="data-v-"+a),o?(c=function(t){(t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),i&&i.call(this,t),t&&t._registeredComponents&&t._registeredComponents.add(o)},u._ssrRegister=c):i&&(c=s?function(){i.call(this,this.$root.$options.shadowRoot)}:i),c)if(u.functional){u._injectStyles=c;var l=u.render;u.render=function(t,e){return c.call(e),l(t,e)}}else{var d=u.beforeCreate;u.beforeCreate=d?[].concat(d,c):[c]}return{exports:t,options:u}}o._withStripped=!0;var c=s({data:()=>({selectedMenu:"/"}),computed:{},mounted(){this.selectedMenu=window.location.pathname.toLowerCase()}},o,[],!1,(function(t){var e=n(9);e.__inject__&&e.__inject__(t)}),null,"f9eb7f1e");c.options.__file="app/web/component/layout/standard/header/header.vue";var u=c.exports,l=function(){var t=this.$createElement;return(this._self._c||t)("div",{staticClass:"main"},[this._ssrNode('<div class="page-container page-component">',"</div>",[this._t("content")],2)])};l._withStripped=!0;var d=s({name:"v-content",data:()=>({}),components:{},mounted(){}},l,[],!1,(function(t){var e=n(11);e.__inject__&&e.__inject__(t)}),null,"0d786d8b");d.options.__file="app/web/component/layout/standard/content/content.vue";var p=s({components:{LayoutHeader:u,LayoutContent:d.exports}},a,[],!1,(function(t){var e=n(13);e.__inject__&&e.__inject__(t)}),null,"7e388614");p.options.__file="app/web/component/layout/standard/main.vue";var f={name:"Layout",props:["title","description","keywords"],components:{MainLayout:p.exports},computed:{vTitle(){return this.$root.title||this.title||"Egg + Vue"},vKeywords(){return this.$root.keywords||this.keywords||"egg, vue, webpack, server side render"},vDescription(){return this.$root.description||this.description||"egg-vue-webpack server side render"},baseClass(){return this.$root.baseClass}},template:'<!DOCTYPE html>\n<html lang="en">\n<head>\n  <title>{{title}}</title>\n  <meta name="keywords" :content="keywords">\n  <meta name="description" :content="description">\n  <meta http-equiv="content-type" content="text/html;charset=utf-8">\n  <meta name="viewport" content="initial-scale=1, maximum-scale=1, user-scalable=no, minimal-ui">\n  <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />\n</head>\n<body :class="baseClass">\n  <div id="app"><div><MainLayout><div slot="main"><slot></slot></div></MainLayout></div></div>\n</body>\n</html>'};i.a.component(f.name,f);var v=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("Layout",{attrs:{title:t.title,description:"vue server side render",keywords:"egg, vue, webpack, server side render"}},[r("div",{staticClass:"container smart-container"},[r("div",{staticClass:"row row-offcanvas row-offcanvas-right"},[r("div",{staticClass:"col-xs-12 col-sm-9"},[r("ul",{staticClass:"smart-artiles",attrs:{id:"articleList"}},t._l(t.lists,(function(e){return r("li",[r("div",{staticClass:"point"},[t._v("+"+t._s(e.hits))]),t._v(" "),r("div",{staticClass:"card"},[r("h2",[r("a",{attrs:{href:e.url,target:"_blank"}},[t._v(t._s(e.mainTitle))])]),t._v(" "),r("div",[r("ul",{staticClass:"actions"},[r("li",[r("time",{staticClass:"timeago"},[t._v(t._s(e.moduleName))])]),t._v(" "),r("li",{staticClass:"tauthor"},[r("a",{staticClass:"get",attrs:{href:"#",target:"_blank"},domProps:{innerHTML:t._s(e.author)}})]),t._v(" "),r("li",[r("a",[t._v("+收藏")])]),t._v(" "),r("li",[r("span",{staticClass:"timeago"},[t._v(t._s(e.summary))])]),t._v(" "),r("li",[r("span",{staticClass:"timeago"})])])])])])})),0),t._v(" "),t.isLoading?r("div",{staticClass:"smart-pager",attrs:{id:"pagerBottom"}},[r("img",{attrs:{src:n(15)}})]):t._e()])])])])};v._withStripped=!0;var _=s({components:{},data:()=>({title:"易观博阅",isFinish:!1,isLoading:!1,pageIndex:1,pageSize:10}),computed:{lists(){return this.list}},methods:{fetch(){this.$http.get(`${location.origin}/pager?pageIndex=${this.pageIndex}&pageSize=${this.pageSize}`).then(t=>{console.log("res",t),t.data.list&&t.data.list.length?(this.total=t.data.total,this.list=this.list.concat(t.data.list)):this.isFinish=!0,this.isLoading=!1})},loadPage(){this.isFinish||this.isLoading||(this.isLoading=!0,this.pageIndex++,setTimeout(()=>{this.fetch()},1500))}},mounted(){new Date,window.addEventListener("scroll",()=>{this.loadPage()},!1)}},v,[],!1,(function(t){var e=n(16);e.__inject__&&e.__inject__(t)}),null,"97c5c17a");_.options.__file="app/web/page/home/index.vue";var h,m=_.exports,g=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t};e.default=(h=g({},m)).store&&h.router?t=>{h.router.push(t.state.url);const e=h.router.getMatchedComponents();return e?Promise.all(e.map(t=>t.preFetch?t.preFetch(h.store):null)).then(()=>(t.state=Object.assign(h.store.state,t.state),new i.a(h))):Promise.reject({code:"404"})}:t=>{const e=new(i.a.extend(h))({data:t.state});return new Promise(t=>{t(e)})}}]));