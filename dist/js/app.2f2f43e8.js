(function(e){function t(t){for(var r,c,l=t[0],u=t[1],i=t[2],b=0,p=[];b<l.length;b++)c=l[b],Object.prototype.hasOwnProperty.call(a,c)&&a[c]&&p.push(a[c][0]),a[c]=0;for(r in u)Object.prototype.hasOwnProperty.call(u,r)&&(e[r]=u[r]);s&&s(t);while(p.length)p.shift()();return o.push.apply(o,i||[]),n()}function n(){for(var e,t=0;t<o.length;t++){for(var n=o[t],r=!0,l=1;l<n.length;l++){var u=n[l];0!==a[u]&&(r=!1)}r&&(o.splice(t--,1),e=c(c.s=n[0]))}return e}var r={},a={app:0},o=[];function c(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,c),n.l=!0,n.exports}c.m=e,c.c=r,c.d=function(e,t,n){c.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},c.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,t){if(1&t&&(e=c(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(c.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)c.d(n,r,function(t){return e[t]}.bind(null,r));return n},c.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return c.d(t,"a",t),t},c.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},c.p="/";var l=window["webpackJsonp"]=window["webpackJsonp"]||[],u=l.push.bind(l);l.push=t,l=l.slice();for(var i=0;i<l.length;i++)t(l[i]);var s=u;o.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("7a23"),a={class:"tc"},o=["src"],c={class:"f3 mb2"},l=Object(r["d"])("br",null,null,-1),u={class:"f6 fw2 gray mt0"},i={class:"f6 fw2 gray mt0 flex-wrap"};function s(e,t,n,s,b,p){return Object(r["f"])(),Object(r["c"])(r["a"],null,[Object(r["d"])("article",{class:Object(r["e"])(["female"===this.gender?"b--pink":"b--blue","mw5","center","bg-white","br3","pa3","pa4-ns","mv3","ba","bw2"])},[Object(r["d"])("div",a,[Object(r["d"])("img",{src:b.photo,class:Object(r["e"])(["female"===this.gender?"b--pink":"b--blue","br-100","h4","w4","dib","ba","bw2","pa2"]),title:"Random User"},null,10,o),Object(r["d"])("h1",c,Object(r["g"])(b.username),1),Object(r["d"])("div",{class:Object(r["e"])(["female"===this.gender?"b--pink":"b--blue","ba","b--dashed","br-pill","bw1"])},null,2),l,Object(r["d"])("h2",u,Object(r["g"])(b.phone),1),Object(r["d"])("h2",i,Object(r["g"])(b.email),1)])],2),Object(r["d"])("button",{onClick:t[0]||(t[0]=function(){return p.onGenerate&&p.onGenerate.apply(p,arguments)}),class:"f6 grow no-underline br-pill ph3 pv2 mb2 di bg-white w-25"},"Generate")],64)}n("d3b7"),n("b0c0");var b={name:"App",data:function(){return{username:"Cat",phone:1234567890,email:"lovelycat@gmail.com",photo:"http://tachyons.io/img/avatar_1.jpg",gender:"female"}},methods:{onGenerate:function(){var e=this;fetch("https://randomuser.me/api/").then((function(e){return e.json()})).then((function(t){e.username=t.results[0].name.first+t.results[0].name.last,e.phone=t.results[0].phone,e.email=t.results[0].email,e.photo=t.results[0].picture.medium,e.gender=t.results[0].gender}))}}};n("a7b9");b.render=s;var p=b;Object(r["b"])(p).mount("#app")},a7b9:function(e,t,n){"use strict";n("e740")},e740:function(e,t,n){}});
//# sourceMappingURL=app.2f2f43e8.js.map