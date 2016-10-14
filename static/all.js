!function(n){function t(r){if(e[r])return e[r].exports;var u=e[r]={exports:{},id:r,loaded:!1};return n[r].call(u.exports,u,u.exports,t),u.loaded=!0,u.exports}var e={};return t.m=n,t.c=e,t.p="/static/",t(0)}([/*!*********************!*\
  !*** ./src/main.js ***!
  \*********************/
function(n,t,e){"use strict";function r(n){return n&&n.__esModule?n:{"default":n}}var u=e(/*! babel-runtime/helpers/classCallCheck */2),o=r(u),i=e(/*! babel-runtime/helpers/createClass */3),f=r(i),c=e(/*! ./Test */10),a=r(c),l=e(/*! ./ChildTest */5),s=r(l),d=new a["default"];d.ddd();var p=function(){function n(){(0,o["default"])(this,n)}return(0,f["default"])(n,[{key:"getPerson",value:function(){var n=new s["default"]("wangwu",46);n.getInfo()}}]),n}(),v=new p;v.getPerson()},/*!*******************************************************************!*\
  !*** ./~/babel-runtime/~/core-js/library/modules/_descriptors.js ***!
  \*******************************************************************/
function(n,t,e){n.exports=!e(/*! ./_fails */7)(function(){return 7!=Object.defineProperty({},"a",{get:function(){return 7}}).a})},/*!***************************************************!*\
  !*** ./~/babel-runtime/helpers/classCallCheck.js ***!
  \***************************************************/
function(n,t){"use strict";t.__esModule=!0,t["default"]=function(n,t){if(!(n instanceof t))throw new TypeError("Cannot call a class as a function")}},/*!************************************************!*\
  !*** ./~/babel-runtime/helpers/createClass.js ***!
  \************************************************/
function(n,t,e){"use strict";function r(n){return n&&n.__esModule?n:{"default":n}}t.__esModule=!0;var u=e(/*! ../core-js/object/define-property */11),o=r(u);t["default"]=function(){function n(n,t){for(var e=0;e<t.length;e++){var r=t[e];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),(0,o["default"])(n,r.key,r)}}return function(t,e,r){return e&&n(t.prototype,e),r&&n(t,r),t}}()},/*!*****************************************************************!*\
  !*** ./~/babel-runtime/~/core-js/library/modules/_is-object.js ***!
  \*****************************************************************/
function(n,t){n.exports=function(n){return"object"==typeof n?null!==n:"function"==typeof n}},/*!**************************!*\
  !*** ./src/ChildTest.js ***!
  \**************************/
function(n,t,e){"use strict";function r(n){return n&&n.__esModule?n:{"default":n}}Object.defineProperty(t,"__esModule",{value:!0});var u=e(/*! babel-runtime/helpers/classCallCheck */2),o=r(u),i=e(/*! babel-runtime/helpers/createClass */3),f=r(i),c=function(){function n(t,e){(0,o["default"])(this,n),this.name=t,this.age=e}return(0,f["default"])(n,[{key:"getInfo",value:function(){return this.name+"'s age is "+this.age}}]),n}();t["default"]=c},/*!************************************************************!*\
  !*** ./~/babel-runtime/~/core-js/library/modules/_core.js ***!
  \************************************************************/
function(n,t){var e=n.exports={version:"2.4.0"};"number"==typeof __e&&(__e=e)},/*!*************************************************************!*\
  !*** ./~/babel-runtime/~/core-js/library/modules/_fails.js ***!
  \*************************************************************/
function(n,t){n.exports=function(n){try{return!!n()}catch(t){return!0}}},/*!**************************************************************!*\
  !*** ./~/babel-runtime/~/core-js/library/modules/_global.js ***!
  \**************************************************************/
function(n,t){var e=n.exports="undefined"!=typeof window&&window.Math==Math?window:"undefined"!=typeof self&&self.Math==Math?self:Function("return this")();"number"==typeof __g&&(__g=e)},/*!*****************************************************************!*\
  !*** ./~/babel-runtime/~/core-js/library/modules/_object-dp.js ***!
  \*****************************************************************/
function(n,t,e){var r=e(/*! ./_an-object */14),u=e(/*! ./_ie8-dom-define */19),o=e(/*! ./_to-primitive */21),i=Object.defineProperty;t.f=e(/*! ./_descriptors */1)?Object.defineProperty:function(n,t,e){if(r(n),t=o(t,!0),r(e),u)try{return i(n,t,e)}catch(f){}if("get"in e||"set"in e)throw TypeError("Accessors not supported!");return"value"in e&&(n[t]=e.value),n}},/*!*********************!*\
  !*** ./src/Test.js ***!
  \*********************/
function(n,t,e){"use strict";function r(n){return n&&n.__esModule?n:{"default":n}}Object.defineProperty(t,"__esModule",{value:!0});var u=e(/*! babel-runtime/helpers/classCallCheck */2),o=r(u),i=e(/*! babel-runtime/helpers/createClass */3),f=r(i),c=e(/*! ./ChildTest */5),a=r(c),l=function(){function n(){(0,o["default"])(this,n)}return(0,f["default"])(n,[{key:"ddd",value:function(){console.log("This is ddd function");var n=new a["default"]("zhangsan",34),t=n.getInfo();console.log(t)}}]),n}();t["default"]=l},/*!***********************************************************!*\
  !*** ./~/babel-runtime/core-js/object/define-property.js ***!
  \***********************************************************/
function(n,t,e){n.exports={"default":e(/*! core-js/library/fn/object/define-property */12),__esModule:!0}},/*!************************************************************************!*\
  !*** ./~/babel-runtime/~/core-js/library/fn/object/define-property.js ***!
  \************************************************************************/
function(n,t,e){e(/*! ../../modules/es6.object.define-property */22);var r=e(/*! ../../modules/_core */6).Object;n.exports=function(n,t,e){return r.defineProperty(n,t,e)}},/*!******************************************************************!*\
  !*** ./~/babel-runtime/~/core-js/library/modules/_a-function.js ***!
  \******************************************************************/
function(n,t){n.exports=function(n){if("function"!=typeof n)throw TypeError(n+" is not a function!");return n}},/*!*****************************************************************!*\
  !*** ./~/babel-runtime/~/core-js/library/modules/_an-object.js ***!
  \*****************************************************************/
function(n,t,e){var r=e(/*! ./_is-object */4);n.exports=function(n){if(!r(n))throw TypeError(n+" is not an object!");return n}},/*!***********************************************************!*\
  !*** ./~/babel-runtime/~/core-js/library/modules/_ctx.js ***!
  \***********************************************************/
function(n,t,e){var r=e(/*! ./_a-function */13);n.exports=function(n,t,e){if(r(n),void 0===t)return n;switch(e){case 1:return function(e){return n.call(t,e)};case 2:return function(e,r){return n.call(t,e,r)};case 3:return function(e,r,u){return n.call(t,e,r,u)}}return function(){return n.apply(t,arguments)}}},/*!******************************************************************!*\
  !*** ./~/babel-runtime/~/core-js/library/modules/_dom-create.js ***!
  \******************************************************************/
function(n,t,e){var r=e(/*! ./_is-object */4),u=e(/*! ./_global */8).document,o=r(u)&&r(u.createElement);n.exports=function(n){return o?u.createElement(n):{}}},/*!**************************************************************!*\
  !*** ./~/babel-runtime/~/core-js/library/modules/_export.js ***!
  \**************************************************************/
function(n,t,e){var r=e(/*! ./_global */8),u=e(/*! ./_core */6),o=e(/*! ./_ctx */15),i=e(/*! ./_hide */18),f="prototype",c=function(n,t,e){var a,l,s,d=n&c.F,p=n&c.G,v=n&c.S,y=n&c.P,h=n&c.B,w=n&c.W,_=p?u:u[t]||(u[t]={}),g=_[f],x=p?r:v?r[t]:(r[t]||{})[f];p&&(e=t);for(a in e)l=!d&&x&&void 0!==x[a],l&&a in _||(s=l?x[a]:e[a],_[a]=p&&"function"!=typeof x[a]?e[a]:h&&l?o(s,r):w&&x[a]==s?function(n){var t=function(t,e,r){if(this instanceof n){switch(arguments.length){case 0:return new n;case 1:return new n(t);case 2:return new n(t,e)}return new n(t,e,r)}return n.apply(this,arguments)};return t[f]=n[f],t}(s):y&&"function"==typeof s?o(Function.call,s):s,y&&((_.virtual||(_.virtual={}))[a]=s,n&c.R&&g&&!g[a]&&i(g,a,s)))};c.F=1,c.G=2,c.S=4,c.P=8,c.B=16,c.W=32,c.U=64,c.R=128,n.exports=c},/*!************************************************************!*\
  !*** ./~/babel-runtime/~/core-js/library/modules/_hide.js ***!
  \************************************************************/
function(n,t,e){var r=e(/*! ./_object-dp */9),u=e(/*! ./_property-desc */20);n.exports=e(/*! ./_descriptors */1)?function(n,t,e){return r.f(n,t,u(1,e))}:function(n,t,e){return n[t]=e,n}},/*!**********************************************************************!*\
  !*** ./~/babel-runtime/~/core-js/library/modules/_ie8-dom-define.js ***!
  \**********************************************************************/
function(n,t,e){n.exports=!e(/*! ./_descriptors */1)&&!e(/*! ./_fails */7)(function(){/*! ./_dom-create */
return 7!=Object.defineProperty(e(16)("div"),"a",{get:function(){return 7}}).a})},/*!*********************************************************************!*\
  !*** ./~/babel-runtime/~/core-js/library/modules/_property-desc.js ***!
  \*********************************************************************/
function(n,t){n.exports=function(n,t){return{enumerable:!(1&n),configurable:!(2&n),writable:!(4&n),value:t}}},/*!********************************************************************!*\
  !*** ./~/babel-runtime/~/core-js/library/modules/_to-primitive.js ***!
  \********************************************************************/
function(n,t,e){var r=e(/*! ./_is-object */4);n.exports=function(n,t){if(!r(n))return n;var e,u;if(t&&"function"==typeof(e=n.toString)&&!r(u=e.call(n)))return u;if("function"==typeof(e=n.valueOf)&&!r(u=e.call(n)))return u;if(!t&&"function"==typeof(e=n.toString)&&!r(u=e.call(n)))return u;throw TypeError("Can't convert object to primitive value")}},/*!*********************************************************************************!*\
  !*** ./~/babel-runtime/~/core-js/library/modules/es6.object.define-property.js ***!
  \*********************************************************************************/
function(n,t,e){var r=e(/*! ./_export */17);r(r.S+r.F*!e(/*! ./_descriptors */1),"Object",{defineProperty:e(/*! ./_object-dp */9).f})}]);
//# sourceMappingURL=all.js.map