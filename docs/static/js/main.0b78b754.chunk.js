(this["webpackJsonpgif-expert-app"]=this["webpackJsonpgif-expert-app"]||[]).push([[0],{14:function(e,t,n){},15:function(e,t,n){"use strict";n.r(t);var a=n(1),c=n(5),r=n.n(c),i=n(2),s=n(0),u=function(e){var t=e.setCategories,n=Object(a.useState)(""),c=Object(i.a)(n,2),r=c[0],u=c[1];return Object(s.jsx)("form",{onSubmit:function(e){e.preventDefault(),r.trim().length>2&&(t((function(e){return[r]})),u(""))},children:Object(s.jsx)("input",{type:"text",value:r,onChange:function(e){u(e.target.value)}})})},o=n(7),j=n(4),d=n.n(j),l=n(6),f=function(){var e=Object(l.a)(d.a.mark((function e(t){var n,a,c,r,i;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n="https://api.giphy.com/v1/gifs/search?q=".concat(encodeURI(t),"&limit=12&api_key=OnLroduMiy9DvtpmuuuNMHITX8S81LOe"),e.next=3,fetch(n);case 3:return a=e.sent,e.next=6,a.json();case 6:return c=e.sent,r=c.data,i=r.map((function(e){var t;return{id:e.id,title:e.title,url:null===(t=e.images)||void 0===t?void 0:t.downsized_medium.url}})),e.abrupt("return",i);case 10:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),b=function(e){var t=e.id,n=e.title,a=e.url;return console.log(t,n,a),Object(s.jsxs)("div",{className:"card animate__animated animate__zoomInDown",children:[Object(s.jsx)("img",{src:a,alt:n}),Object(s.jsx)("p",{children:n})]})},m=function(e){var t=e.category,n=function(e){var t=Object(a.useState)({data:[],loading:!0}),n=Object(i.a)(t,2),c=n[0],r=n[1];return Object(a.useEffect)((function(){f(e).then((function(e){r({data:e,loading:!1})}))}),[e]),c}(t),c=n.data,r=n.loading;return Object(s.jsxs)(s.Fragment,{children:[Object(s.jsxs)("h3",{className:"animate__animated animate__fadeIn",children:[" ",t," "]}),r&&Object(s.jsx)("p",{className:"animate__animated animate__flash",children:"Loading"}),Object(s.jsx)("div",{className:"card-grid",children:c.map((function(e){return Object(s.jsx)(b,Object(o.a)({},e),e.id)}))})]})},p=function(){var e=Object(a.useState)(["Developer"]),t=Object(i.a)(e,2),n=t[0],c=t[1];return Object(s.jsxs)(s.Fragment,{children:[Object(s.jsx)("h4",{className:"by",children:"by Clemen 2021"}),Object(s.jsx)("h1",{children:"Busca tu Gif favorito:"}),Object(s.jsx)(u,{setCategories:c}),Object(s.jsx)("hr",{}),Object(s.jsx)("ol",{children:n.map((function(e){return Object(s.jsx)(m,{category:e},e)}))})]})},h=(n(14),function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,16)).then((function(t){var n=t.getCLS,a=t.getFID,c=t.getFCP,r=t.getLCP,i=t.getTTFB;n(e),a(e),c(e),r(e),i(e)}))});r.a.render(Object(s.jsx)(p,{}),document.getElementById("root")),h()}},[[15,1,2]]]);
//# sourceMappingURL=main.0b78b754.chunk.js.map