var __extends=this&&this.__extends||function(){var t=function(e,n){t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)if(e.hasOwnProperty(n))t[n]=e[n]};return t(e,n)};return function(e,n){t(e,n);function r(){this.constructor=e}e.prototype=n===null?Object.create(n):(r.prototype=n.prototype,new r)}}();System.register([],(function(t){"use strict";return{execute:function(){var e=function(){function t(){this.configurations=new Map}t.prototype.remove=function(t){this.configurations.delete(t)};t.prototype.hasConfigurations=function(){return this.configurations.size>0};t.prototype.getConfigurations=function(){return this.configurations};t.prototype.values=function(){return this.configurations.values()};t.prototype.keys=function(){return this.configurations.keys()};return t}();var n=function(t){__extends(e,t);function e(){return t!==null&&t.apply(this,arguments)||this}e.prototype.add=function(t){this.configurations.set(t.key,t)};return e}(e);var r=function(){function t(t,e,n,r){this.key=t;this.value=e;this.disabled=n;this.selected=r}return t}();var o=function(){function t(){}t.generateConfigurationFromItemOptions=function(t){var e=new n;var o=Array.from(t.querySelectorAll("snt-item"));o.forEach((function(t){e.add(new r(t.hasAttribute("key")?t.getAttribute("key"):"",t.hasAttribute("value")?t.getAttribute("value"):"",t.hasAttribute("disabled")?Boolean(t.getAttribute("disabled")):false,t.hasAttribute("selected")?Boolean(t.getAttribute("selected")):false))}));return e};return t}();t("I",o)}}}));