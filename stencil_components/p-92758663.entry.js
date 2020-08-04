import{r as t,h as n,H as s,g as e,d as a}from"./p-8a8b139b.js";import{S as i}from"./p-85cd1ecc.js";import{W as o}from"./p-ae4e745e.js";import{f as r}from"./p-1e804c73.js";import"./p-43185519.js";import"./p-573c7aa9.js";import{C as l}from"./p-e0123cd3.js";import{A as h}from"./p-b9a803af.js";const c=class{constructor(n){t(this,n),this.languageJson=i.empty()}async toggleActive(t){return this.active="boolean"==typeof t||!this.active,this.active}watchActive(t){t&&(this.lastActiveElement=document.activeElement)}componentDidUpdate(){this.setFocus()}setFocus(){if(this.active){const t=this.searchTypeahead.querySelector("input");t&&t.focus()}else this.lastActiveElement.focus()}render(){return n(s,{onSntBackdropTap:this.toggleActive.bind(this)},n("snt-pane",{styleClasses:"d-flex justify-content-center align-items-center"},n("snt-search-typeahead",{ref:t=>this.searchTypeahead=t,languageJson:this.languageJson}),n("snt-action-button",{"action-reference":"Action.toggleSearch","icon-class-name":"iconNavClose"})),",",n("snt-backdrop",null))}static get watchers(){return{active:["watchActive"]}}};c.TAG_NAME="snt-search-bar",c.style="snt-search-bar{display:none}snt-search-bar snt-pane{position:absolute;top:100%;left:0;right:0;background-color:#323232;border-top:1px solid #fcfcfc;padding:0.625rem 0;display:none}snt-search-bar[active]{display:block}snt-search-bar[active] snt-backdrop{display:block}snt-search-bar snt-search-typeahead{margin:0 0.75rem}snt-search-bar snt-search-typeahead+* snt-icon{font-size:0.875rem}";const d=class{constructor(n){t(this,n),this.languageStrings={},this.active=!1,this.styleClasses=i.empty(),this.languageJson=i.empty()}async toggleActive(t){return this.active="boolean"==typeof t?t:!this.active,this.active}componentWillLoad(){try{this.languageJson&&(this.languageStrings=JSON.parse(this.languageJson))}catch(t){console.error(t)}}render(){return n(s,{class:o.generateClasses([],this.styleClasses)},n("snt-action-button",{actionReference:"Action.toggleSearch",linkTitle:this.languageStrings.back||"Back",iconClassName:"iconChevron"}),n("snt-search-typeahead",{languageJson:this.languageJson}))}};d.TAG_NAME="snt-search-panel",d.style="snt-search-panel{position:absolute;top:0;bottom:0;left:0;right:0;display:-ms-flexbox;display:flex;-ms-flex-flow:column nowrap;flex-flow:column nowrap;-webkit-transform:translateX(-100%);transform:translateX(-100%);-webkit-transition:0.3s ease-out;transition:0.3s ease-out;background-color:#323232;padding:15px 30px 30px}snt-search-panel:not(.active){visibility:hidden}snt-search-panel[active]{-webkit-transform:translateX(0%);transform:translateX(0%);visibility:visible}@media (min-width: 1024px){snt-search-panel{display:none}}snt-search-panel snt-search-typeahead{margin-top:1.25rem}snt-search-panel snt-action-button snt-icon{margin-right:0.5rem;-webkit-transform:rotate(180deg);transform:rotate(180deg);display:inline-block}";const p=class{constructor(n){t(this,n),this.styleClasses=i.empty(),this.fixed=!1,this.languageJson=i.empty(),this.mainContentId=i.empty(),this.active=!1,this.shrunk=!1,this.languageStrings={},this.focusTrap=null,this.gaqButtonActionData=null}onToggleSearch(t){t.composedPath().includes(this.secondaryNavDesktop)||t.composedPath().includes(this.searchBar)?this.searchBar.toggleActive().then(t=>{this.toggleFocusTrap(t)}):this.searchPanel.toggleActive().then(t=>{t?this.mainPanel.classList.add("hidden"):(this.mainPanel.classList.remove("hidden"),this.navbarCollapse.focus())})}async toggleActive(t){return this.active="boolean"==typeof t?t:!this.active,this.toggleFocusTrap(this.active),Promise.resolve(this.active)}onScroll(t){this.fixed&&this.shrink()}onViewportChanged(){this.navbarCollapse&&(this.navbarCollapse.viewport=this.layout.viewport)}componentWillLoad(){try{this.languageStrings=JSON.parse(this.languageJson)}catch(t){console.error(t)}this.gaqButtonActionData=JSON.stringify({getAQuoteUrl:this.languageStrings.getAQuoteUrl,languageString:{close:this.languageStrings.close}})}componentDidLoad(){this.fixed&&this.shrink(),this.registersubComponents(),this.setSubComponentClasses(),this.insertAdditionalElements(),this.focusTrap=r(this.element,{}),this.searchBar=this.element.querySelector(c.TAG_NAME),this.searchPanel=this.element.querySelector(d.TAG_NAME)}registersubComponents(){this.secondaryNavDesktop=this.element.querySelector(`[slot=${p.SECONDARY_NAV_DESKTOP_SLOT_NAME}]`),this.secondaryNavMobile=this.element.querySelector(`[slot=${p.SECONDARY_NAV_MOBILE_SLOT_NAME}]`),this.primaryNav=this.element.querySelector(`[slot=${p.PRIMARY_NAV_SLOT_NAME}]`)}setSubComponentClasses(){this.secondaryNavDesktop.classList.add("theme-header-nav","flex-row","justify-content-end","secondary-nav"),this.secondaryNavMobile.classList.add("theme-header-nav","secondary-nav"),this.primaryNav.classList.add("main-nav","theme-header-nav")}insertAdditionalElements(){const t=`<snt-nav-item><snt-action-button action-reference="Action.toggleSearch" icon-class-name="iconNavSearch" link-title="${this.languageStrings.search||"Search"}"></snt-action-button> </snt-nav-item>`;!this.secondaryNavDesktop.querySelector(h.TAG_NAME)&&this.secondaryNavDesktop.insertAdjacentHTML("beforeend",t),!this.secondaryNavMobile.querySelector(h.TAG_NAME)&&this.secondaryNavMobile.insertAdjacentHTML("beforeend",t)}shrink(){this.secondaryNavPane&&(!this.shrunk&&this.element.offsetTop+window.scrollY>this.element.offsetTop+this.element.offsetHeight?(this.secondaryNavPane.collapsed=!0,this.shrunk=!0):0==window.scrollY&&this.shrunk&&(this.secondaryNavPane.collapsed=!1,this.shrunk=!1))}toggleFocusTrap(t){t?this.focusTrap.activate():this.focusTrap.deactivate()}render(){return n(s,{onSntBackdropTap:()=>this.toggleActive(),onNavbarToggled:()=>this.toggleActive()},n("div",{class:"header-container"},n("snt-layout",{padding:"vertical-only",ref:t=>this.layout=t},n("header",{class:o.generateClasses(["header"],this.styleClasses)},n("snt-skip-to-main",{"main-content-id":"#"+this.mainContentId},this.languageStrings.skipToMainContent||"Skip to main content"),n("snt-pane",{animated:!0,ref:t=>this.secondaryNavPane=t},n("slot",{name:p.SECONDARY_NAV_DESKTOP_SLOT_NAME})),n("snt-navbar",{"style-classes":"navbar-expand-lg","language-string":this.languageJson},n("div",{slot:p.NAVBAR_BRAND_SLOT_NAME},n("slot",{name:p.NAVBAR_BRAND_SLOT_NAME})),n("snt-navbar-collapse",{id:"navbar-collapse",slot:"navbar-collapse",ref:t=>this.navbarCollapse=t},n("div",{class:"main-panel",ref:t=>this.mainPanel=t},n("snt-action-button",{actionReference:"Action.openGetQuoteModal",linkTitle:this.languageStrings.gaq||"Get a Quote",actionData:this.gaqButtonActionData,styleClasses:"gaq-mobile cta theme-headerNav d-flex d-lg-none"}),n("slot",{name:p.PRIMARY_NAV_SLOT_NAME}),n("slot",{name:p.SECONDARY_NAV_MOBILE_SLOT_NAME})),n("snt-search-panel",{class:"hidden",languageJson:this.languageJson})),n("snt-nav",{id:"actions-nav",class:"actions-nav theme-header-nav",expander:"false"},n("snt-nav-item",null,n("snt-shopping-cart",null," ")),n("snt-nav-item",{styleClasses:"d-none d-md-flex"},n("snt-action-button",{styleClasses:"cta theme-headerNav",actionReference:"Action.openGetQuoteModal",actionData:this.gaqButtonActionData,linkTitle:this.languageStrings.gaq||"Get a Quote"}," ")),n("snt-nav-item",null,n("snt-login",{languageJson:this.languageJson}))))),n("snt-search-bar",{languageJson:this.languageJson}))))}get element(){return e(this)}};p.TAG_NAME="snt-header",p.SECONDARY_NAV_DESKTOP_SLOT_NAME="secondary-nav-desktop",p.SECONDARY_NAV_MOBILE_SLOT_NAME="secondary-nav-mobile",p.PRIMARY_NAV_SLOT_NAME="primary-nav",p.NAVBAR_BRAND_SLOT_NAME="navbar-brand",p.style="snt-header{position:relative;display:block;width:100%;z-index:99;background-color:#323232}snt-header[fixed]{position:-webkit-sticky;position:sticky;top:0;left:0;right:0}@media (max-width: 1023px){snt-header[active] .brand-and-toggle,snt-header[active] .actions-nav,snt-header[active] snt-pane{display:none}snt-header[active] header{padding:0}}snt-header header{position:relative;padding:1.125rem 0;margin:0 auto}snt-header snt-layout .spacings{overflow:visible}snt-header snt-nav[slot=secondary-nav-mobile]{display:-ms-flexbox;display:flex}@media (min-width: 1024px){snt-header snt-nav[slot=secondary-nav-mobile]{display:none}}snt-header snt-nav[slot=secondary-nav-mobile] snt-nav-item{margin:0 0 0.625rem 0}snt-header snt-nav[slot=secondary-nav-desktop]{display:none}@media (min-width: 768px){snt-header snt-nav[slot=secondary-nav-desktop]{display:-ms-flexbox;display:flex}}snt-header snt-nav[slot=secondary-nav-desktop] snt-nav-item{margin:0 0 0.625rem 0}@media (min-width: 768px){snt-header snt-nav[slot=secondary-nav-desktop] snt-nav-item{margin:0 0 0 1.65rem}}snt-header snt-navbar-collapse{overflow:hidden;position:relative}@media (min-width: 768px){snt-header snt-navbar-collapse{overflow:visible}}snt-header snt-navbar-collapse{-ms-flex-order:1;order:1}@media (min-width: 768px){snt-header snt-navbar-collapse{-ms-flex-order:initial;order:initial}}snt-header snt-navbar{display:-ms-flexbox;display:flex;-ms-flex-flow:row nowrap;flex-flow:row nowrap}snt-header snt-button{white-space:nowrap}snt-header snt-button button{background:transparent;border:none;color:white}snt-header snt-link a{color:#ffffff}snt-header snt-skip-to-main a{font-family:Averta-ExtraBold;color:#6ebac5;text-decoration:none}snt-header snt-skip-to-main a:focus{outline:0.125rem solid #b2b2b2}snt-header .header-container{width:100%;max-width:1440px;margin:auto}";class m{static parseDocumentCookie(){return document.cookie.split(";").map(t=>t.trim().split("=").map(decodeURIComponent)).reduce((t,n)=>{try{t[n[0]]=JSON.parse(n[1])}catch(s){t[n[0]]=n[1]}return t},{})}static readCookie(t){return m.parseDocumentCookie()[t]}static deleteCookie(t){document.cookie=t+"=; expires=Thu, 01 Jan 1970 00:00:01 GMT;"}}const b=class{constructor(n){t(this,n),this.authed="0",this.languageJson=i.empty(),this.languageStrings={}}componentWillLoad(){try{this.languageJson&&(this.languageStrings=JSON.parse(this.languageJson))}catch(t){console.error(t)}}componentDidLoad(){const t=m.readCookie(l.AUTH_COOKIE_NAME);this.authed=t||this.authed}render(){return this.authed&&1==parseInt(this.authed)?n("snt-link",{href:b.ACCOUNT_DASHBOARD_URL},n("snt-icon",{styleClasses:"icon-icon_nav_LoggedIn_act"})):n("snt-link",{href:b.ACCOUNT_LOGIN_URL},this.languageStrings.login||"Log In")}};b.TAG_NAME="snt-login",b.ACCOUNT_DASHBOARD_URL="https://secure.sonnet.ca/#/account/dashboard",b.ACCOUNT_LOGIN_URL="https://secure.sonnet.ca/#/login",b.style="snt-login a{text-decoration:none;white-space:nowrap;font-size:1rem;line-height:1.3125rem}";const v=class{constructor(n){t(this,n),this.shown=!1,this.viewport=null,this.inDesktopMode=!1,this.elementToFocusOn=null,this.lastActiveElement=null,this.navbarToggled=a(this,"navbarToggled",7)}async toggleShown(t){return this.shown="boolean"==typeof t?t:!this.shown,Promise.resolve(this.shown)}onShown(t){t&&(this.lastActiveElement=document.activeElement||document.body),this.elementToFocusOn=t?this.element:this.lastActiveElement}onViewport(){this.inDesktopMode="large"==this.viewport||"extra-large"==this.viewport}componentWillRender(){this.inDesktopMode="large"==this.viewport||"extra-large"==this.viewport}componentDidUpdate(){null!==this.elementToFocusOn&&(this.elementToFocusOn.focus(),this.elementToFocusOn=null)}render(){return n(s,{class:"collapse navbar-collapse "+(this.shown?"show":""),tabindex:this.inDesktopMode?null:"-1",role:this.inDesktopMode?null:"dialog","aria-expanded":this.inDesktopMode||this.shown?"false":"true"},n("div",{class:"spacer"}),n("div",{class:"header d-flex d-lg-none align-items-center"},n("snt-button",{class:"d-inline-flex",onClick:()=>this.navbarToggled.emit()},n("snt-icon",{styleClasses:"iconNavClose"})),n("snt-image",{"data-src":"https://www.sonnet.ca/_Insurance/images/MasterLogo-White.svg",width:"100",height:"100"})),n("div",{class:"body"},n("slot",null)))}get element(){return e(this)}static get watchers(){return{shown:["onShown"],viewport:["onViewport"]}}};v.TAG_NAME="snt-navbar-collapse",v.style="snt-navbar-collapse{width:290px}snt-navbar-collapse hr{border-top:1px solid #ffffff;margin:0}snt-navbar-collapse snt-nav{padding:0.825rem 0 0.5rem;border-bottom:1px solid #ffffff}@media (min-width: 1024px){snt-navbar-collapse snt-nav{padding:0;border-bottom:none}}snt-navbar-collapse snt-nav:last-of-type{border-bottom:none}snt-navbar-collapse snt-nav-item{width:100%}@media (min-width: 1024px){snt-navbar-collapse snt-nav-item{width:auto}}snt-navbar-collapse .header{padding:20px 30px 20px 30px}@media (min-width: 1024px){snt-navbar-collapse .header{padding:initial}}snt-navbar-collapse .header snt-icon{font-size:1rem;margin-right:24px}snt-navbar-collapse .header snt-image{width:100%;max-width:85px}snt-navbar-collapse .body{position:relative;padding:0.75rem 2rem 2rem}@media (min-width: 1024px){snt-navbar-collapse .body{padding:0}}snt-navbar-collapse .body snt-button.cta button{width:100%}snt-navbar-collapse .spacer{display:none}@media (min-width: 1024px){snt-navbar-collapse .spacer{display:-ms-flexbox;display:flex;-ms-flex:0 1 4.375rem;flex:0 1 4.375rem;min-width:1rem}}snt-navbar-collapse[shown]{z-index:10000;position:fixed;left:0;top:0;bottom:0;background-color:#323232}@media (min-width: 1024px){snt-navbar-collapse[shown]{position:initial}}";const g=class{constructor(n){t(this,n),this.styleClasses=i.empty()}listenNavbarTogglerEvent(t){this.toggleActive().then(null)}async toggleActive(t){return this.active="boolean"==typeof t?t:!this.active,this.active}watchActive(){this.navbarCollapse&&this.navbarCollapse.toggleShown(this.active).then(null)}componentDidLoad(){this.navbarCollapse=document.querySelector(""+v.TAG_NAME),this.navbarCollapse&&(this.navbarToggle.ariaControls=this.navbarCollapse.id)}render(){return n(s,{class:o.generateClasses(["navbar"],this.styleClasses),onSntBackdropTap:()=>this.toggleActive()},n("div",{class:"brand-and-toggle"},n("snt-navbar-toggle",{ref:t=>this.navbarToggle=t,languageString:this.languageString}),n("slot",{name:"navbar-brand"})),n("slot",{name:"navbar-collapse"}),n("slot",null),n("snt-backdrop",null))}get element(){return e(this)}static get watchers(){return{active:["watchActive"]}}};g.TAG_NAME="snt-navbar",g.style="snt-navbar{width:100%}snt-navbar.navbar{margin:0;padding:0;}@media (min-width: 768px){snt-navbar.navbar.navbar-expand-md .nav-link,snt-navbar.navbar.navbar-expand-lg .nav-link{padding-left:0;padding-right:0}}@media (max-width: 1023px){snt-navbar[active] snt-backdrop{display:block}}snt-navbar snt-backdrop{display:none}snt-navbar .actions-nav,snt-navbar .brand-and-toggle{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-ms-flex-flow:row nowrap;flex-flow:row nowrap}@media (min-width: 1024px){snt-navbar .actions-nav,snt-navbar .brand-and-toggle{-ms-flex-flow:column nowrap;flex-flow:column nowrap}}snt-navbar .brand-and-toggle>*:not(:last-child){margin-right:1.25rem}snt-navbar .actions-nav>*:not(:first-child){margin-left:1.25rem}@media (min-width: 1024px){snt-navbar .actions-nav>*:not(:first-child){margin-left:1.625rem}}snt-navbar .main-panel.hidden{visibility:hidden}";const f=class{constructor(n){t(this,n),this.cartValue="0"}componentDidLoad(){const t=m.readCookie(l.CART_COOKIE_NAME);this.cartValue=t||this.cartValue}render(){if(this.cartValue&&parseInt(this.cartValue)>0)return n("snt-link",{href:f.SHOPPING_CART_URL},n("snt-icon",{styleClasses:"iconNavCartEmpty"}),n("span",{class:"item-counter"},this.cartValue))}};f.TAG_NAME="snt-shopping-cart",f.SHOPPING_CART_URL="https://secure.sonnet.ca/#/shopping_cart",f.style="snt-shopping-cart snt-link{display:-ms-flexbox;display:flex}snt-shopping-cart snt-link a{position:relative;font-size:1.5rem;display:-ms-flexbox;display:flex;position:relative;text-decoration:none;margin:0 0.5rem 0.25rem}snt-shopping-cart .item-counter{position:absolute;top:-15%;right:-40%;height:14px;width:14px;border:1px solid #323232;background-color:#6ebac5;border-radius:50%;color:#323232;font-size:10px;line-height:14px;text-align:center;vertical-align:center}";export{p as snt_header,b as snt_login,g as snt_navbar,v as snt_navbar_collapse,c as snt_search_bar,d as snt_search_panel,f as snt_shopping_cart}