import{r as t,h as o,g as n}from"./p-8a8b139b.js";import{S as e}from"./p-85cd1ecc.js";import{W as i}from"./p-ae4e745e.js";const r=class{constructor(o){t(this,o)}componentDidLoad(){document.querySelectorAll(".additionalLegalCopy").forEach((function(t){let o=document.createElement("p");o.innerHTML=t.innerHTML,document.getElementById("secondary_legal")&&document.getElementById("secondary_legal").appendChild(o)}))}render(){return[o("p2",{id:"secondary_legal"}," ")]}};r.TAG_NAME="legal-component";const s=class{constructor(o){t(this,o),this.styleClasses=e.empty()}render(){return o("div",{class:i.generateClasses(["footer"],this.styleClasses)},o("snt-layout",null,o("slot",null)))}get element(){return n(this)}};s.TAG_NAME="snt-footer",s.style="snt-footer{display:-ms-flexbox;display:flex;width:100%;-ms-flex-flow:column wrap;flex-flow:column wrap}snt-footer .footer{max-width:1440px;width:100%;margin:auto;background-color:#ffffff}snt-footer .col{-webkit-box-sizing:border-box;box-sizing:border-box}snt-footer .col:first-child,snt-footer .col:nth-child(3){padding:0 !important}snt-footer .h5{margin-bottom:0.938em;font-size:1em;line-height:1;display:inline-block;width:100%}@media screen and (max-width: 768px){snt-footer .col:nth-child(3),snt-footer .col:nth-child(4){margin-top:30px}}snt-footer snt-layout[viewport=medium] .col,snt-footer snt-layout[viewport=small] .col,snt-footer snt-layout[viewport=extra-small] .col{margin-top:40px;padding:0}snt-footer .footer-actions snt-nav-item:last-child{display:inline-block;padding-bottom:40px}snt-footer snt-layout[viewport=medium] .h5{margin-bottom:1.25em}snt-footer snt-layout[viewport=large] .h5{margin-bottom:1.563em}snt-footer snt-layout[viewport=large] .footer-actions snt-nav-item:last-child{padding-bottom:60px}snt-footer snt-layout[viewport=extra-large] .h5{margin-bottom:1.875em}snt-footer snt-layout[viewport=extra-large] .footer-actions snt-nav-item:last-child{padding-bottom:60px}snt-footer snt-link,snt-footer snt-link a{line-height:1.2}snt-footer snt-nav-item{padding-bottom:0.625em;width:100%;text-align:left}snt-footer snt-nav-item snt-link a{font-size:0.875em;color:#323232;padding:0;text-decoration:none}snt-footer snt-nav-item snt-link a .icon-new-window:before{color:#323232}snt-footer snt-nav-item snt-link a:focus,snt-footer snt-nav-item snt-link a:focus-within,snt-footer snt-nav-item snt-link a:hover{color:#147582}snt-footer snt-nav-item snt-link a:focus .icon-new-window:before,snt-footer snt-nav-item snt-link a:focus-within .icon-new-window:before,snt-footer snt-nav-item snt-link a:hover .icon-new-window:before{color:#147582}snt-footer snt-nav-item snt-link a:before{background-color:#147582}snt-footer snt-nav-item snt-link a:focus{outline:1px solid #147582}snt-footer snt-nav-item snt-link a:focus:before{visibility:visible;-webkit-transform:scaleX(1);transform:scaleX(1)}snt-footer .nav-link{padding:0;position:relative}snt-footer .nav-link span.icon-font{position:relative;right:0}.footer-row{border-top:1px solid #6f6f6f;border-bottom:1px solid #6f6f6f;margin-bottom:1.875em;padding-top:10px;display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;padding-left:0 !important}.footer-row .col-md-12{padding-left:0}.footer-row snt-nav{-ms-flex-direction:row;flex-direction:row}.footer-row snt-nav-item{width:auto;display:inline;float:left;line-height:1;padding-right:30px}.footer-row snt-nav-item a{font-size:0.75em}.footer-legal{padding:0 !important;margin:0}.footer-legal p2,.footer-legal p{font-size:12px;line-height:1.5;display:table;margin-bottom:0.475em}.footer-legal a{font-size:12px}snt-title-copy .with-content snt-footer a{border-bottom:2px solid transparent;color:#9e0a9a;display:inline-block;position:relative;text-decoration:none}snt-title-copy .with-content snt-footer a:before{background:#147582}snt-title-copy .with-content snt-footer a:hover{color:#147582;text-decoration:underline}snt-title-copy .with-content snt-footer a:hover:before{background:#147582}snt-title-copy .with-content snt-footer a:hover .icon-font::before{color:#9e0a9a}@media (max-width: 768px){snt-footer a{margin-bottom:9px}}@media (max-width: 576px){.footer-row snt-nav{-ms-flex-direction:column;flex-direction:column;-ms-flex-align:baseline;align-items:baseline}}.legal_copy{display:none}";export{r as legal_component,s as snt_footer}