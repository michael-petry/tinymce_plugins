System.register(["./p-64b22a95.system.js"],(function(t){"use strict";var o,n,i,e;return{setters:[function(t){o=t.r;n=t.d;i=t.h;e=t.H}],execute:function(){var r=function(){function t(){}return t}();r.now=function(t){return t.timeStamp||Date.now()};var a="snt-backdrop{display:none;top:0;bottom:0;left:0;right:0;position:fixed;height:100%;width:100%;z-index:-1;background-color:rgba(51, 51, 51, 0.75);overflow:hidden}";var s=t("snt_backdrop",function(){function t(t){o(this,t);this.lastClick=-1e4;this.tappable=true;this.stopPropagation=true;this.sntBackdropTap=n(this,"sntBackdropTap",7)}t.prototype.onTouchStart=function(t){this.lastClick=r.now(t);this.emitTap(t)};t.prototype.onMouseDown=function(t){if(this.lastClick<r.now(t)-2500){this.emitTap(t)}};t.prototype.emitTap=function(t){if(this.stopPropagation){t.preventDefault();t.stopPropagation()}if(this.tappable){this.sntBackdropTap.emit(t)}};t.prototype.render=function(){return i(e,{tabindex:"-1"})};return t}());s.TAG_NAME="snt-backdrop";s.style=a}}}));