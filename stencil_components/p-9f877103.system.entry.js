System.register(["./p-64b22a95.system.js","./p-1bc037df.system.js"],(function(e){"use strict";var t,n,r;return{setters:[function(e){t=e.r;n=e.h},function(e){r=e.S}],execute:function(){var i=function(){function e(){}e.updateQueryStringParameter=function(e,t,n){if(!e)e=window.location.href;var r=new RegExp("([?&])"+t+"=.*?(&|#|$)(.*)","gi"),i;if(r.test(e)){if(typeof n!=="undefined"&&n!==null)return e.replace(r,"$1"+t+"="+n+"$2$3");else{i=e.split("#");e=i[0].replace(r,"$1$3").replace(/(&|\?)$/,"");if(typeof i[1]!=="undefined"&&i[1]!==null)e+="#"+i[1];return e}}else{if(typeof n!=="undefined"&&n!==null){var s=e.indexOf("?")!==-1?"&":"?";i=e.split("#");e=i[0]+s+t+"="+n;if(typeof i[1]!=="undefined"&&i[1]!==null)e+="#"+i[1];return e}else return e}};return e}();var s="snt-search-typeahead{position:relative;background-color:#ffffff;width:100%;max-width:47rem}snt-search-typeahead input{-webkit-box-sizing:border-box;box-sizing:border-box;width:100%;height:2.525rem;padding:0 3rem 0 0.75rem;font-size:0.875rem;line-height:1.25rem}snt-search-typeahead snt-button button{position:absolute;right:0.5rem;top:0;bottom:0;margin:auto;font-size:1.125rem;line-height:1.125rem;color:#323232}";var o=e("snt_search_typeahead",function(){function e(e){t(this,e);this.baseHref=r.empty();this.searchHref=this.baseHref;this.languageStrings={};this.languageJson=r.empty()}e.prototype.handleSearchButtonClick=function(e){if(e.target==this.searchSntButton){window.location.href=this.searchHref}};e.prototype.onKeyDown=function(e){if(e.key&&e.key=="Enter"||e.keyCode&&e.keyCode==13){window.location.href=this.searchHref}};e.prototype.onInput=function(){this.searchHref=i.updateQueryStringParameter(this.baseHref,"searchtext",encodeURIComponent(this.input.value)+"&searchmode=anyword")};e.prototype.componentWillLoad=function(){try{this.languageJson&&(this.languageStrings=JSON.parse(this.languageJson))}catch(e){console.error(e)}this.baseHref=this.languageStrings["searchUrl"]};e.prototype.render=function(){var e=this;return n("div",{class:"search-input-area"},n("input",{type:"text",ref:function(t){return e.input=t},onInput:this.onInput.bind(this),onKeyDown:this.onKeyDown.bind(this),placeholder:this.languageStrings["search"]||"Search"}),n("snt-button",{ref:function(t){e.searchSntButton=t}},n("snt-icon",{styleClasses:"iconNavSearch"}),n("span",{class:"sr-only"},this.languageStrings["search"]||"Search")))};return e}());o.TAG_NAME="snt-search-typeahead";o.style=s}}}));