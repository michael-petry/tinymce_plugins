System.register(["./p-64b22a95.system.js","./p-008f47ed.system.js","./p-c52706bc.system.js"],(function(t){"use strict";var e,n,i,o,a,s,d,r,p,c,l;return{setters:[function(t){e=t.r;n=t.d;i=t.h;o=t.g},function(t){a=t.D;s=t.V;d=t.a;r=t.b;p=t.c},function(t){c=t.P;l=t.C}],execute:function(){var u="snt-layout{display:block;width:auto;-webkit-box-sizing:border-box;box-sizing:border-box}snt-layout .spacings{overflow:auto}snt-layout[viewport=extra-large] .spacings{padding:3.75em 8.438em}snt-layout[viewport=large] .spacings{padding:3.75em 4.438em}snt-layout[viewport=medium] .spacings{padding:2.5em 2.313em}snt-layout[viewport=small] .spacings{padding:2.5em 1.875em}snt-layout[viewport=extra-small] .spacings{padding:2.5em 1.875em}snt-layout[padding=none] .spacings{padding:0}snt-layout[padding=top-only] .spacings{padding-bottom:0}snt-layout[padding=bottom-only] .spacings{padding-top:0}snt-layout[padding=remove-sides] .spacings{padding-left:0;padding-right:0}snt-layout[padding=vertical-only] .spacings{padding-top:0;padding-bottom:0}.two-column-combined{display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column}.combined-bottom snt-layout .spacings{padding-bottom:0.813em !important}@media (min-width: 1024px){.combined-bottom snt-layout .spacings{padding-bottom:0.938em !important}}.combined-top snt-layout .spacings{padding-top:0.813em !important}@media (min-width: 1024px){.combined-top snt-layout .spacings{padding-top:0.938em !important}}.no-top snt-layout .spacings{padding-top:0 !important}.no-bottom snt-layout .spacings{padding-bottom:0 !important}";var g=undefined&&undefined.__decorate||function(t,e,n,i){var o=arguments.length,a=o<3?e:i===null?i=Object.getOwnPropertyDescriptor(e,n):i,s;if(typeof Reflect==="object"&&typeof Reflect.decorate==="function")a=Reflect.decorate(t,e,n,i);else for(var d=t.length-1;d>=0;d--)if(s=t[d])a=(o<3?s(a):o>3?s(e,n,a):s(e,n))||a;return o>3&&a&&Object.defineProperty(e,n,a),a};var m=undefined&&undefined.__metadata||function(t,e){if(typeof Reflect==="object"&&typeof Reflect.metadata==="function")return Reflect.metadata(t,e)};var f=t("snt_layout",function(){function t(t){e(this,t);this.viewportChanged=n(this,"viewportChanged",7)}t.prototype.onViewportChanged=function(t){this.viewportChanged.emit({viewport:t})};t.prototype.componentDidLoad=function(){this.context=new a;s.getInstance().register(this,this.getElements(),this.resize)};t.prototype.resize=function(t){s.getInstance().process(this,this.context,this.getElements(),t)};t.prototype.getElements=function(){return[c.of("element",this.element)]};t.prototype.render=function(){return i("div",{class:"spacings"}," ",i("slot",null)," ")};Object.defineProperty(t.prototype,"element",{get:function(){return o(this)},enumerable:true,configurable:true});Object.defineProperty(t,"watchers",{get:function(){return{viewport:["onViewportChanged"]}},enumerable:true,configurable:true});return t}());g([d([r.newInstance().withWidth(l.EXTRA_SMALL.getLeft(),l.EXTRA_SMALL.getRight()).withAttributes(p.newInstance().with("viewport","extra-small").build()).build(),r.newInstance().withWidth(l.SMALL.getLeft(),l.SMALL.getRight()).withAttributes(p.newInstance().with("viewport","small").build()).build(),r.newInstance().withWidth(l.MEDIUM.getLeft(),l.MEDIUM.getRight()).withAttributes(p.newInstance().with("viewport","medium").build()).build(),r.newInstance().withWidth(l.LARGE.getLeft(),l.LARGE.getRight()).withAttributes(p.newInstance().with("viewport","large").build()).build(),r.newInstance().withWidth(l.EXTRA_LARGE.getLeft()).withAttributes(p.newInstance().with("viewport","extra-large").build()).build()]),m("design:type",HTMLElement)],f.prototype,"element",void 0);f.style=u}}}));