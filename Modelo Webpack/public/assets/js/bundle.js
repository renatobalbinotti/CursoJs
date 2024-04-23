(()=>{"use strict";var n,r,o,e,t,a,i,s,c,p,A,u,f,d,l={958:(n,r,o)=>{o.d(r,{A:()=>s});var e=o(354),t=o.n(e),a=o(314),i=o.n(a)()(t());i.push([n.id,"@import url(https://fonts.googleapis.com/css2?family=Fira+Code:wght@300..700&display=swap);"]),i.push([n.id,":root {\n  --primary-color: rgb(8, 159, 170);\n  --primary-color-darker: rgb(5, 86, 92);\n}\n\n* {\n  box-sizing: border-box;\n  outline: 0;\n  \n}\n\nbody {\n  margin: 0;\n  padding: 0;\n  background: var(--primary-color);\n  font-family: 'Fira Code', sans-serif;\n  font-size: 1.3em;\n  line-height: 1.5em;\n}\n\n.container {\n  max-width: 640px;\n  margin: 50px auto;\n  background-color: #fff;\n  padding: 20px;\n  border-radius: 10px;\n}\n\nform input, form label, form button {\n  display: block;\n  width: 100%;\n  margin-bottom: 10px;\n}\n\nform input {\n  font-size: 24px;\n  height: 50px;\n  padding: 0 20px;\n}\n\nform input:focus {\n  outline: 1px solid var(--primary-color)\n\n}\n\nform button {\n  border: none;\n  background: var(--primary-color);\n  color: #fff;\n  font-size: 18px;\n  font-weight: 700;\n  height: 50px;\n  cursor: pointer;\n  margin-top: 35px;\n}\n\nform button:hover{\n  background: var(--primary-color-darker);\n}","",{version:3,sources:["webpack://./src/assets/css/style.css"],names:[],mappings:"AAEA;EACE,iCAAiC;EACjC,sCAAsC;AACxC;;AAEA;EACE,sBAAsB;EACtB,UAAU;;AAEZ;;AAEA;EACE,SAAS;EACT,UAAU;EACV,gCAAgC;EAChC,oCAAoC;EACpC,gBAAgB;EAChB,kBAAkB;AACpB;;AAEA;EACE,gBAAgB;EAChB,iBAAiB;EACjB,sBAAsB;EACtB,aAAa;EACb,mBAAmB;AACrB;;AAEA;EACE,cAAc;EACd,WAAW;EACX,mBAAmB;AACrB;;AAEA;EACE,eAAe;EACf,YAAY;EACZ,eAAe;AACjB;;AAEA;EACE;;AAEF;;AAEA;EACE,YAAY;EACZ,gCAAgC;EAChC,WAAW;EACX,eAAe;EACf,gBAAgB;EAChB,YAAY;EACZ,eAAe;EACf,gBAAgB;AAClB;;AAEA;EACE,uCAAuC;AACzC",sourcesContent:["@import url('https://fonts.googleapis.com/css2?family=Fira+Code:wght@300..700&display=swap');\n\n:root {\n  --primary-color: rgb(8, 159, 170);\n  --primary-color-darker: rgb(5, 86, 92);\n}\n\n* {\n  box-sizing: border-box;\n  outline: 0;\n  \n}\n\nbody {\n  margin: 0;\n  padding: 0;\n  background: var(--primary-color);\n  font-family: 'Fira Code', sans-serif;\n  font-size: 1.3em;\n  line-height: 1.5em;\n}\n\n.container {\n  max-width: 640px;\n  margin: 50px auto;\n  background-color: #fff;\n  padding: 20px;\n  border-radius: 10px;\n}\n\nform input, form label, form button {\n  display: block;\n  width: 100%;\n  margin-bottom: 10px;\n}\n\nform input {\n  font-size: 24px;\n  height: 50px;\n  padding: 0 20px;\n}\n\nform input:focus {\n  outline: 1px solid var(--primary-color)\n\n}\n\nform button {\n  border: none;\n  background: var(--primary-color);\n  color: #fff;\n  font-size: 18px;\n  font-weight: 700;\n  height: 50px;\n  cursor: pointer;\n  margin-top: 35px;\n}\n\nform button:hover{\n  background: var(--primary-color-darker);\n}"],sourceRoot:""}]);const s=i},314:n=>{n.exports=function(n){var r=[];return r.toString=function(){return this.map((function(r){var o="",e=void 0!==r[5];return r[4]&&(o+="@supports (".concat(r[4],") {")),r[2]&&(o+="@media ".concat(r[2]," {")),e&&(o+="@layer".concat(r[5].length>0?" ".concat(r[5]):""," {")),o+=n(r),e&&(o+="}"),r[2]&&(o+="}"),r[4]&&(o+="}"),o})).join("")},r.i=function(n,o,e,t,a){"string"==typeof n&&(n=[[null,n,void 0]]);var i={};if(e)for(var s=0;s<this.length;s++){var c=this[s][0];null!=c&&(i[c]=!0)}for(var p=0;p<n.length;p++){var A=[].concat(n[p]);e&&i[A[0]]||(void 0!==a&&(void 0===A[5]||(A[1]="@layer".concat(A[5].length>0?" ".concat(A[5]):""," {").concat(A[1],"}")),A[5]=a),o&&(A[2]?(A[1]="@media ".concat(A[2]," {").concat(A[1],"}"),A[2]=o):A[2]=o),t&&(A[4]?(A[1]="@supports (".concat(A[4],") {").concat(A[1],"}"),A[4]=t):A[4]="".concat(t)),r.push(A))}},r}},354:n=>{n.exports=function(n){var r=n[1],o=n[3];if(!o)return r;if("function"==typeof btoa){var e=btoa(unescape(encodeURIComponent(JSON.stringify(o)))),t="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(e),a="/*# ".concat(t," */");return[r].concat([a]).join("\n")}return[r].join("\n")}},72:n=>{var r=[];function o(n){for(var o=-1,e=0;e<r.length;e++)if(r[e].identifier===n){o=e;break}return o}function e(n,e){for(var a={},i=[],s=0;s<n.length;s++){var c=n[s],p=e.base?c[0]+e.base:c[0],A=a[p]||0,u="".concat(p," ").concat(A);a[p]=A+1;var f=o(u),d={css:c[1],media:c[2],sourceMap:c[3],supports:c[4],layer:c[5]};if(-1!==f)r[f].references++,r[f].updater(d);else{var l=t(d,e);e.byIndex=s,r.splice(s,0,{identifier:u,updater:l,references:1})}i.push(u)}return i}function t(n,r){var o=r.domAPI(r);return o.update(n),function(r){if(r){if(r.css===n.css&&r.media===n.media&&r.sourceMap===n.sourceMap&&r.supports===n.supports&&r.layer===n.layer)return;o.update(n=r)}else o.remove()}}n.exports=function(n,t){var a=e(n=n||[],t=t||{});return function(n){n=n||[];for(var i=0;i<a.length;i++){var s=o(a[i]);r[s].references--}for(var c=e(n,t),p=0;p<a.length;p++){var A=o(a[p]);0===r[A].references&&(r[A].updater(),r.splice(A,1))}a=c}}},659:n=>{var r={};n.exports=function(n,o){var e=function(n){if(void 0===r[n]){var o=document.querySelector(n);if(window.HTMLIFrameElement&&o instanceof window.HTMLIFrameElement)try{o=o.contentDocument.head}catch(n){o=null}r[n]=o}return r[n]}(n);if(!e)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");e.appendChild(o)}},540:n=>{n.exports=function(n){var r=document.createElement("style");return n.setAttributes(r,n.attributes),n.insert(r,n.options),r}},56:(n,r,o)=>{n.exports=function(n){var r=o.nc;r&&n.setAttribute("nonce",r)}},825:n=>{n.exports=function(n){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var r=n.insertStyleElement(n);return{update:function(o){!function(n,r,o){var e="";o.supports&&(e+="@supports (".concat(o.supports,") {")),o.media&&(e+="@media ".concat(o.media," {"));var t=void 0!==o.layer;t&&(e+="@layer".concat(o.layer.length>0?" ".concat(o.layer):""," {")),e+=o.css,t&&(e+="}"),o.media&&(e+="}"),o.supports&&(e+="}");var a=o.sourceMap;a&&"undefined"!=typeof btoa&&(e+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),r.styleTagTransform(e,n,r.options)}(r,n,o)},remove:function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(r)}}}},113:n=>{n.exports=function(n,r){if(r.styleSheet)r.styleSheet.cssText=n;else{for(;r.firstChild;)r.removeChild(r.firstChild);r.appendChild(document.createTextNode(n))}}}},m={};function g(n){var r=m[n];if(void 0!==r)return r.exports;var o=m[n]={id:n,exports:{}};return l[n](o,o.exports,g),o.exports}g.n=n=>{var r=n&&n.__esModule?()=>n.default:()=>n;return g.d(r,{a:r}),r},g.d=(n,r)=>{for(var o in r)g.o(r,o)&&!g.o(n,o)&&Object.defineProperty(n,o,{enumerable:!0,get:r[o]})},g.o=(n,r)=>Object.prototype.hasOwnProperty.call(n,r),g.nc=void 0,n=g(72),r=g.n(n),o=g(825),e=g.n(o),t=g(659),a=g.n(t),i=g(56),s=g.n(i),c=g(540),p=g.n(c),A=g(113),u=g.n(A),f=g(958),(d={}).styleTagTransform=u(),d.setAttributes=s(),d.insert=a().bind(null,"head"),d.domAPI=e(),d.insertStyleElement=p(),r()(f.A,d),f.A&&f.A.locals&&f.A.locals})();
//# sourceMappingURL=bundle.js.map