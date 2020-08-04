import{r as t,h as n,H as o,g as i}from"./p-8a8b139b.js";import{S as l}from"./p-85cd1ecc.js";import{W as a}from"./p-ae4e745e.js";import{L as d}from"./p-d336ded5.js";const r=class{constructor(n){t(this,n),this.titleString="",this.styleClasses=l.empty(),this.logoIsSet=!1,this.iconIsSet=!1}componentWillLoad(){l.hasValue(this.iconSources)&&(this.iconSourceJson=JSON.parse(this.iconSources),(this.iconSourceJson.largeIconUrl||this.iconSourceJson.smallIconUrl)&&(this.iconIsSet=!0)),l.hasValue(this.logoSources)&&(this.logoSourceJson=JSON.parse(this.logoSources),Object.keys(this.logoSourceJson).length>0&&(this.logoIsSet=!0))}componentDidLoad(){(this.logoIsSet||this.iconIsSet)&&d.getInstance().observe(this.element)}render(){var t;this.logoIsSet?t=n("div",{class:"logo"},n("picture",null,n("source",{"data-srcSet":this.logoSourceJson.extraLargeLogoUrl,media:"(min-width: 1440px)"}),n("source",{"data-srcSet":this.logoSourceJson.largeLogoUrl,media:"(min-width: 1024px)"}),n("source",{"data-srcSet":this.logoSourceJson.mediumLogoUrl,media:"(min-width: 768px)"}),n("source",{"data-srcSet":this.logoSourceJson.smallLogoUrl,media:"(min-width: 0px)"}),n("img",{class:"logo-image",src:"","data-src":"",alt:"","aria-hidden":"true"}))):this.iconIsSet&&(t=n("div",{class:"icon"},n("picture",{class:"icon-image"},n("source",{"data-srcSet":this.iconSourceJson.largeIconUrl,media:"(min-width: 1024px)"}),n("source",{"data-srcSet":this.iconSourceJson.smallIconUrl,media:"(min-width: 0px)"}),n("img",{class:"icon-image",src:"","data-src":"",alt:"","aria-hidden":"true"}))));const i=this.buildButtonContent(),d=l.hasValue(this.titleString)?n("h3",null,this.titleString):null;return n(o,null,n("div",{class:"ad-panel"},t,d,n("div",{class:a.generateClasses(["content"],this.styleClasses)},n("slot",null)),i))}buildButtonContent(){return this.href?n("button-link-group",null,n("button-link",{href:this.href,target:this.target,"aria-label":this.ariaLabel},this.buttonLabel)):null}get element(){return i(this)}};r.TAG_NAME="snt-ad",r.style="snt-ad .left.content,.left snt-ad .content{text-align:left}@media (max-width: 767px){snt-ad snt-layout .left-mobile.content,.left-mobile snt-ad snt-layout .content{text-align:left}}snt-ad .center.content,.center snt-ad .content{text-align:center}@media (max-width: 767px){snt-ad snt-layout .center-mobile.content,.center-mobile snt-ad snt-layout .content{text-align:center}}snt-ad .right.content,.right snt-ad .content{text-align:right}@media (max-width: 767px){snt-ad snt-layout .right-mobile.content,.right-mobile snt-ad snt-layout .content{text-align:right}}.desktop-only snt-ad,snt-ad.desktop-only{display:none}@media (min-width: 1024px){.desktop-only snt-ad,snt-ad.desktop-only{display:block}}snt-ad h3{text-align:center;margin-bottom:15px}snt-ad .icon{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;margin:0px auto 40px;-webkit-box-sizing:border-box;box-sizing:border-box;height:60px;width:60px;border:3px solid #acdde4;background-color:#acdde4;border-radius:150px}.neutral-fill snt-ad .icon,snt-ad .icon.neutral-fill{border:3px solid #acdde4;background-color:#acdde4}.light-fill snt-ad .icon,snt-ad .icon.light-fill{border:3px solid #6ebac5;background-color:#ffffff}.float-fill snt-ad .icon,snt-ad .icon.float-fill{border:3px solid #acdde4;background-color:#acdde4}.primary-fill snt-ad .icon,snt-ad .icon.primary-fill{border:3px solid #acdde4;background-color:#ffffff}.light-stroke snt-ad .icon,snt-ad .icon.light-stroke{border:3px solid #acdde4;background-color:#acdde4}.dark-fill snt-ad .icon,snt-ad .icon.dark-fill{border:3px solid #ffffff;background-color:#147582}snt-ad .ad-panel{width:100%;-webkit-box-sizing:border-box;box-sizing:border-box;border:3px solid #e5e5e5;padding:40px 30px}.neutral-fill snt-ad .ad-panel,snt-ad .ad-panel.neutral-fill{color:#323232;background-color:#ffffff;border:3px solid #e5e5e5}.light-fill snt-ad .ad-panel,snt-ad .ad-panel.light-fill{color:#323232;background-color:#d9f0f4;border:none}.dark-fill snt-ad .ad-panel,snt-ad .ad-panel.dark-fill{color:#ffffff;background-color:#147582;border:none}.float-fill snt-ad .ad-panel,snt-ad .ad-panel.float-fill{color:#323232;background-color:#ffffff;border:none}.primary-fill snt-ad .ad-panel,snt-ad .ad-panel.primary-fill{color:#323232;background-color:#6ebac5;border:none}.light-stroke snt-ad .ad-panel,snt-ad .ad-panel.light-stroke{color:#323232;background-color:#ffffff;border:3px solid #acdde4}snt-ad .hidden{display:none}snt-ad .logo{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;margin:0px auto 40px;height:60px;width:214px}snt-ad .logo-image{max-height:60px;max-width:214px}snt-ad button-link-group{width:unset;margin-top:15px}snt-ad button-link-group button-link{width:unset;background-color:#ffffff;color:#323232;-webkit-box-shadow:inset 0 0 0 3px #323232;box-shadow:inset 0 0 0 3px #323232}snt-ad button-link-group button-link:hover,snt-ad button-link-group button-link:focus{color:#323232;background-color:#ffffff;-webkit-box-shadow:inset 0 0 0 3px #323232;box-shadow:inset 0 0 0 3px #323232}snt-ad button-link-group button-link.neutral-fill,.neutral-fill snt-ad button-link-group button-link{background-color:transparent;color:#323232;-webkit-box-shadow:inset 0 0 0 3px #323232;box-shadow:inset 0 0 0 3px #323232}snt-ad button-link-group button-link.neutral-fill:hover,snt-ad button-link-group button-link.neutral-fill:focus,.neutral-fill snt-ad button-link-group button-link:hover,.neutral-fill snt-ad button-link-group button-link:focus{color:#ffffff;background-color:#323232}snt-ad button-link-group button-link.light-fill,.light-fill snt-ad button-link-group button-link{background-color:transparent;color:#323232;-webkit-box-shadow:inset 0 0 0 3px #323232;box-shadow:inset 0 0 0 3px #323232}snt-ad button-link-group button-link.light-fill:hover,snt-ad button-link-group button-link.light-fill:focus,.light-fill snt-ad button-link-group button-link:hover,.light-fill snt-ad button-link-group button-link:focus{color:#ffffff;background-color:#d9f0f4}snt-ad button-link-group button-link.float-fill,.float-fill snt-ad button-link-group button-link{background-color:transparent;color:#323232;-webkit-box-shadow:inset 0 0 0 3px #323232;box-shadow:inset 0 0 0 3px #323232}snt-ad button-link-group button-link.float-fill:hover,snt-ad button-link-group button-link.float-fill:focus,.float-fill snt-ad button-link-group button-link:hover,.float-fill snt-ad button-link-group button-link:focus{color:#ffffff;background-color:#323232}snt-ad button-link-group button-link.primary-fill,.primary-fill snt-ad button-link-group button-link{background-color:#323232;color:#ffffff;-webkit-box-shadow:inset 0 0 0 3px #323232;box-shadow:inset 0 0 0 3px #323232}snt-ad button-link-group button-link.primary-fill:hover,snt-ad button-link-group button-link.primary-fill:focus,.primary-fill snt-ad button-link-group button-link:hover,.primary-fill snt-ad button-link-group button-link:focus{color:#323232;background-color:transparent}snt-ad button-link-group button-link.light-stroke,.light-stroke snt-ad button-link-group button-link{background-color:transparent;color:#323232;-webkit-box-shadow:inset 0 0 0 3px #323232;box-shadow:inset 0 0 0 3px #323232}snt-ad button-link-group button-link.light-stroke:hover,snt-ad button-link-group button-link.light-stroke:focus,.light-stroke snt-ad button-link-group button-link:hover,.light-stroke snt-ad button-link-group button-link:focus{color:#ffffff;background-color:#323232}@media (min-width: 768px){snt-ad h3{margin-bottom:20px}snt-ad .logo{height:60px;width:286px}snt-ad .logo-image{max-height:60px;max-width:286px}snt-ad button-link-group{margin-top:20px}}@media (min-width: 1024px){snt-ad h3{margin-bottom:25px}snt-ad .icon{height:80px;width:80px}snt-ad .icon-image{height:45px;width:45px}snt-ad .logo{height:80px;width:228px}snt-ad .logo-image{max-height:80px;max-width:228px}snt-ad button-link-group{margin-top:25px}}@media (min-width: 1440px){snt-ad h3{margin-bottom:30px}snt-ad .icon{height:80px;width:80px}snt-ad .icon-image{height:45px;width:45px}snt-ad .logo{height:80px;width:324px}snt-ad .logo-image{max-height:80px;max-width:324px}snt-ad button-link-group{margin-top:30px}}";export{r as snt_ad}