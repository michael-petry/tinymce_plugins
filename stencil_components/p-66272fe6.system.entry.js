var __extends=this&&this.__extends||function(){var t=function(n,e){t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,n){t.__proto__=n}||function(t,n){for(var e in n)if(n.hasOwnProperty(e))t[e]=n[e]};return t(n,e)};return function(n,e){t(n,e);function r(){this.constructor=n}n.prototype=e===null?Object.create(e):(r.prototype=e.prototype,new r)}}();var __awaiter=this&&this.__awaiter||function(t,n,e,r){function i(t){return t instanceof e?t:new e((function(n){n(t)}))}return new(e||(e=Promise))((function(e,o){function u(t){try{s(r.next(t))}catch(n){o(n)}}function a(t){try{s(r["throw"](t))}catch(n){o(n)}}function s(t){t.done?e(t.value):i(t.value).then(u,a)}s((r=r.apply(t,n||[])).next())}))};var __generator=this&&this.__generator||function(t,n){var e={label:0,sent:function(){if(o[0]&1)throw o[1];return o[1]},trys:[],ops:[]},r,i,o,u;return u={next:a(0),throw:a(1),return:a(2)},typeof Symbol==="function"&&(u[Symbol.iterator]=function(){return this}),u;function a(t){return function(n){return s([t,n])}}function s(u){if(r)throw new TypeError("Generator is already executing.");while(e)try{if(r=1,i&&(o=u[0]&2?i["return"]:u[0]?i["throw"]||((o=i["return"])&&o.call(i),0):i.next)&&!(o=o.call(i,u[1])).done)return o;if(i=0,o)u=[u[0]&2,o.value];switch(u[0]){case 0:case 1:o=u;break;case 4:e.label++;return{value:u[1],done:false};case 5:e.label++;i=u[1];u=[0];continue;case 7:u=e.ops.pop();e.trys.pop();continue;default:if(!(o=e.trys,o=o.length>0&&o[o.length-1])&&(u[0]===6||u[0]===2)){e=0;continue}if(u[0]===3&&(!o||u[1]>o[0]&&u[1]<o[3])){e.label=u[1];break}if(u[0]===6&&e.label<o[1]){e.label=o[1];o=u;break}if(o&&e.label<o[2]){e.label=o[2];e.ops.push(u);break}if(o[2])e.ops.pop();e.trys.pop();continue}u=n.call(t,e)}catch(a){u=[6,a];i=0}finally{r=o=0}if(u[0]&5)throw u[1];return{value:u[0]?u[1]:void 0,done:true}}};System.register(["./p-64b22a95.system.js","./p-1bc037df.system.js","./p-82b5f94a.system.js"],(function(t){"use strict";var n,e,r,i,o,u;return{setters:[function(t){n=t.r;e=t.h;r=t.g;i=t.H},function(){},function(t){o=t.A;u=t.H}],execute:function(){var a=function(){function t(t,n,e,r){if(n===void 0){n=true}this.type=t;this.lazy=n;this.url=e;this.content=r}return t}();var s;(function(t){t["HTML"]="html";t["JSON"]="json";t["XML"]="xml";t["TEXT"]="text"})(s||(s={}));(function(t){function n(n){if(n){return t[n.toUpperCase().trim()]!=null}throw new Error("Argument with value "+n+" must be a valid string.")}t.exists=n;function e(e){if(n(e)){return t[e.toUpperCase().trim()]}throw new Error("Argument text with value "+e+" does not exist.")}t.findByValue=e})(s||(s={}));var c=function(t){__extends(n,t);function n(){return t.call(this)||this}n.newInstance=function(){return new n};n.prototype.withValue=function(t){this.value=t;this.url=null;return this};n.prototype.build=function(){if(!this.value&&this.url){return t.prototype.build.call(this)}else if(this.value){return this.parse(this.value)}throw new Error("No JSON content has been defined using this builder.")};n.prototype.parse=function(t){return JSON.parse(t)};return n}(o);var l=function(){function t(){}t.parse=function(t){switch(t.type){case s.HTML:var n=u.newInstance();n.withConditionalStringArgument(n.withValue,t.content);n.withConditionalObjectArgument(n.withUrl,t.url);return n;case s.JSON:var e=c.newInstance();e.withConditionalStringArgument(e.withValue,t.content);e.withConditionalObjectArgument(e.withUrl,t.url);return e;default:throw new Error("Unable to locate content builder for type "+t.type)}};return t}();var f=t("snt_data",function(){function t(t){n(this,t)}t.prototype.getData=function(){return __awaiter(this,void 0,void 0,(function(){return __generator(this,(function(t){return[2,this.builder.build()]}))}))};t.prototype.componentWillLoad=function(){var t=this.src?new URL(this.src):null;this.builder=l.parse(new a(s.findByValue(this.type),this.lazyLoad,t,this.data))};t.prototype.render=function(){return e(i,null)};Object.defineProperty(t.prototype,"element",{get:function(){return r(this)},enumerable:true,configurable:true});return t}());f.TAG_NAME="snt-data"}}}));