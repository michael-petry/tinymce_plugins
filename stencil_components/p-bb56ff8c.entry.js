import{r as o,h as t}from"./p-8a8b139b.js";import"./p-37fda961.js";import{A as n}from"./p-9fb45d90.js";const s=class{constructor(t){o(this,t)}render(){let o,s=n.getNewWindowTitle(),i=n.getNewWindowText();return o="_blank"===this.target?[t("span",{class:"link-content"},t("slot",null)),t("span",{class:"icon-font icon-new-window",title:s},t("span",{class:"sr-only"}," ",i))]:t("span",{class:"full-content"},t("slot",null)),t("a",{href:this.href,target:this.target,"aria-label":this.ariaLabel},o)}};s.TAG_NAME="snt-source-link",s.style='@charset "UTF-8";snt-source-link{display:inline-block}snt-source-link a{height:25px;font-size:14px;color:#323232;display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;border:1px solid #323232;border-radius:22px;padding:10px;position:relative}snt-source-link a .icon-new-window:after{content:"";font-size:1.02em !important;padding-left:5px;color:#323232;display:inline-block;position:relative}snt-source-link a .icon-new-window:before{content:""}snt-source-link a:hover{color:#147582;border-color:#147582;-webkit-box-shadow:0 0 0 2px #147582;box-shadow:0 0 0 2px #147582}snt-source-link a:hover .icon-new-window:after{color:#147582}snt-source-link a:focus{outline:none}snt-source-link a:focus:after{content:"";display:block;position:absolute;top:-7px;bottom:-7px;left:-7px;right:-7px;border-radius:30px;border:1px solid #323232}snt-source-link .link-content{max-width:249px;display:inline-block;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}snt-source-link .full-content{max-width:265px;display:inline-block;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}';const i=class{constructor(t){o(this,t),this.RETURN=13}handleKeydown(o){switch(o.keyCode){case this.RETURN:this.toggleExpand(),o.stopPropagation(),o.preventDefault()}}toggleExpand(){"true"===this.buttonEl.getAttribute("aria-expanded")?this.buttonEl.setAttribute("aria-expanded","false"):this.buttonEl.setAttribute("aria-expanded","true"),this.buttonEl.classList.toggle("expanded"),this.toggleContent()}toggleContent(){this.panelEl.classList.toggle("open"),this.panelEl.classList.toggle("close"),this.iconEl.classList.toggle("icon-icon_legalAccordion_plus"),this.iconEl.classList.toggle("icon-icon_legalAccordion_minus")}render(){return t("snt-layout",null,t("button",{ref:o=>this.buttonEl=o,onKeyDown:this.handleKeydown.bind(this),onClick:this.toggleExpand.bind(this),"aria-expanded":"false","aria-controls":this.panelId},t("span",{ref:o=>this.iconEl=o,class:"expand-icon icon-font icon-icon_legalAccordion_plus"}),this.sourceHeading),t("div",{class:"source-panel close",ref:o=>this.panelEl=o,id:this.panelId},t("slot",null)))}};i.TAG_NAME="snt-source-list",i.style='snt-source-list span.expand-icon{display:inline-block;height:16px;width:16px;position:relative;top:1px;margin-right:10px}snt-source-list button{position:relative;font-size:14px;font-family:inherit;border:0;padding:0;background-color:inherit}snt-source-list button:hover{text-decoration:underline;color:#147582}snt-source-list button:focus::after{-webkit-box-sizing:border-box;box-sizing:border-box;border:1px dashed #323232;content:"";right:100%;width:calc(100% + 10px);height:calc(100% + 4px);left:-5px;top:-2px;position:absolute}snt-source-list button:focus{outline:none;text-decoration:underline;color:#147582}snt-source-list .close{display:none}snt-source-list .open{display:block}snt-source-list .source-panel{padding-left:26px}snt-source-list snt-source-link:nth-child(n+1){margin-top:15px;margin-right:15px}';export{s as snt_source_link,i as snt_source_list}