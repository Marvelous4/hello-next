(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{d5Yn:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/p/[id]",function(){return t("nOj+")}])},"m/Gl":function(e,n,t){"use strict";t.r(n),n.default=function(e,n){return n=n||{},new Promise(function(t,r){var o=new XMLHttpRequest,s=[],u=[],a={},i=function(){return{ok:2==(o.status/100|0),statusText:o.statusText,status:o.status,url:o.responseURL,text:function(){return Promise.resolve(o.responseText)},json:function(){return Promise.resolve(JSON.parse(o.responseText))},blob:function(){return Promise.resolve(new Blob([o.response]))},clone:i,headers:{keys:function(){return s},entries:function(){return u},get:function(e){return a[e.toLowerCase()]},has:function(e){return e.toLowerCase()in a}}}};for(var c in o.open(n.method||"get",e,!0),o.onload=function(){o.getAllResponseHeaders().replace(/^(.*?):[^\S\n]*([\s\S]*?)$/gm,function(e,n,t){s.push(n=n.toLowerCase()),u.push([n,t]),a[n]=a[n]?a[n]+","+t:t}),t(i())},o.onerror=r,o.withCredentials="include"==n.credentials,n.headers)o.setRequestHeader(c,n.headers[c]);o.send(n.body||null)})}},"nOj+":function(e,n,t){"use strict";t.r(n);var r=t("ln6h"),o=t.n(r),s=t("eVuF"),u=t.n(s);function a(e,n,t,r,o,s,a){try{var i=e[s](a),c=i.value}catch(l){return void t(l)}i.done?n(c):u.a.resolve(c).then(r,o)}var i=t("q1tI"),c=t.n(i),l=t("3Hq7"),f=t("zgjP"),p=t.n(f),d=c.a.createElement,w=function(e){return d(l.a,null,d("h1",null,e.show.name),d("p",null,e.show.summary.replace(/<[/]?[pb]>/g,"")),d("img",{src:e.show.image.medium}))};w.getInitialProps=function(){var e,n=(e=o.a.mark(function e(n){var t,r,s;return o.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t=n.query.id,e.next=3,p()("https://api.tvmaze.com/shows/".concat(t));case 3:return r=e.sent,e.next=6,r.json();case 6:return s=e.sent,console.log("Fetched show: ".concat(s.name)),e.abrupt("return",{show:s});case 9:case"end":return e.stop()}},e)}),function(){var n=this,t=arguments;return new u.a(function(r,o){var s=e.apply(n,t);function u(e){a(s,r,o,u,i,"next",e)}function i(e){a(s,r,o,u,i,"throw",e)}u(void 0)})});return function(e){return n.apply(this,arguments)}}();n.default=w},zgjP:function(e,n,t){e.exports=window.fetch||(window.fetch=t("m/Gl").default||t("m/Gl"))}},[["d5Yn",1,0]]]);