(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{246:function(e,t,n){e.exports={title:"title_title__1_QbF"}},247:function(e,t,n){e.exports={gfWarp:"goodfood_gfWarp__15HQT"}},266:function(e,t,n){"use strict";n.r(t);var a=n(2),o=n(3),r=n(6),c=n(4),l=n(5),i=n(0),s=n.n(i),u=n(246),p=n.n(u),f=n(79),h=function(e){return s.a.createElement("div",{className:p.a.title},s.a.createElement(f.a,e),s.a.createElement("h2",null," ",e.title," "))},m=n(56),b=function(e){function t(){return Object(a.a)(this,t),Object(r.a)(this,Object(c.a)(t).apply(this,arguments))}return Object(l.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return s.a.createElement(s.a.Fragment,null,s.a.createElement(m.a,{src:this.props.src,width:"100%",height:"200",bg:this.props.bg}),s.a.createElement("h2",null," ",this.props.title," "),s.a.createElement("span",null," ",this.props.name,"\u7684\u83dc "),s.a.createElement("span",null," ",this.props.play,"\u64ad\u653e "),s.a.createElement("span",null," ",this.props.collection,"\u6536\u85cf "))}}]),t}(s.a.Component),d=n(247),g=n.n(d),O=n(10),j=function(e){function t(e){var n;return Object(a.a)(this,t),n=Object(r.a)(this,Object(c.a)(t).call(this)),e.getgf(),n}return Object(l.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=this.props.goodfood;return s.a.createElement("div",{className:g.a.gfWarp},s.a.createElement(h,Object.assign({},this.props,{title:"\u672c\u5468\u4f73\u4f5c"})),s.a.createElement("ul",null,e&&e.map(function(e,t){return s.a.createElement("li",{key:t},s.a.createElement(b,{title:e.title,name:e.name,play:e.play,collection:e.collection,src:e.src,bg:e.bg}))})))}}]),t}(s.a.Component),E=Object(O.b)(function(e,t){return{goodfood:e.goodfood}},function(e,t){return{getgf:function(){fetch("/data/goodfood.json").then(function(e){return e.json()}).then(function(t){e({type:"GOODFOOD",payload:t})})}}})(j);t.default=E}}]);
//# sourceMappingURL=6.68651151.chunk.js.map