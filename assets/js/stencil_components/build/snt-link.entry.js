import { r as registerInstance, c as createEvent, h, g as getElement } from './index-21c05bc9.js';
import { S as StringUtils } from './StringUtils-617c552f.js';
import { W as WebUtils } from './WebUtils-c0d293ee.js';
import './LanguageUtils-7936212b.js';
import { A as AccessibilityUtils } from './AccessibilityUtils-9e525cc3.js';

const linkComponentCss = "@charset \"UTF-8\";snt-link a{color:#147582;position:relative;text-decoration:underline;background-color:transparent}snt-link a.theme-default{background-color:#6ebac5;color:#323232;box-shadow:inset 0 0 0 3px #6ebac5}snt-link a.theme-default:hover,snt-link a.theme-default:focus,snt-link a.theme-default:focus-within{color:#ffffff;background-color:#147582;box-shadow:inset 0 0 0 3px #147582}snt-link a.theme-secondary{background-color:transparent;color:#323232;box-shadow:inset 0 0 0 3px #323232}snt-link a.theme-secondary:hover,snt-link a.theme-secondary:focus,snt-link a.theme-secondary:focus-within{color:#ffffff;background-color:#323232}snt-link a.theme-secondaryDarkBg{background-color:transparent;color:#ffffff;box-shadow:inset 0 0 0 3px #ffffff}snt-link a.theme-secondaryDarkBg:hover,snt-link a.theme-secondaryDarkBg:focus,snt-link a.theme-secondaryDarkBg:focus-within{color:#323232;background-color:#ffffff}snt-link a.theme-primary{background-color:#323232;color:#ffffff;box-shadow:inset 0 0 0 3px #323232}snt-link a.theme-primary:hover,snt-link a.theme-primary:focus,snt-link a.theme-primary:focus-within{color:#323232;background-color:transparent}snt-link a.theme-headerNav{background-color:transparent;color:#6ebac5;box-shadow:inset 0 0 0 3px #6ebac5}snt-link a.theme-headerNav:hover,snt-link a.theme-headerNav:focus,snt-link a.theme-headerNav:focus-within{color:#323232;background-color:#6ebac5}snt-link a.theme-disabled{background-color:#e5e5e5;color:#7f7f7f;box-shadow:inset 0 0 0 3px #e5e5e5}snt-link a.theme-disabled:hover,snt-link a.theme-disabled:focus,snt-link a.theme-disabled:focus-within{color:#7f7f7f}snt-link a.theme-disabledSecondary{background-color:transparent;color:#b2b2b2;box-shadow:inset 0 0 0 3px #b2b2b2}snt-link a.theme-disabledSecondary:hover,snt-link a.theme-disabledSecondary:focus,snt-link a.theme-disabledSecondary:focus-within{color:#b2b2b2}snt-link a:hover,snt-link a:focus,snt-link a:focus-within{text-decoration:none !important}snt-link a .icon-new-window:before{color:#147582}snt-link a:before{content:\"\";position:absolute;width:100%;height:1px;bottom:1px;left:0;background-color:#9e0a9a;visibility:hidden;-webkit-transform:scaleX(0);transform:scaleX(0);transform-origin:left;-webkit-transition:all 0.25s ease-in-out 0s;transition:all 0.25s ease-in-out 0s}snt-link a:hover{color:#9e0a9a;text-decoration:none !important}snt-link a:hover:before{visibility:visible;-webkit-transform:scaleX(1);transform:scaleX(1)}snt-link a:focus{color:#9e0a9a;outline:1px solid #9e0a9a;padding:1px;box-sizing:border-box;margin:-1px}snt-link a:hover .icon-new-window:before,snt-link a:focus .icon-new-window:before{color:#9e0a9a}snt-link a span.icon-font.icon-new-window{position:relative;right:0}snt-link a.theme-link{font-size:0.875em;font-weight:bold;color:#323232}snt-link a.theme-link:hover{color:#147582}snt-link a.theme-link:hover:before{background:#147582}snt-link a.theme-action{font-family:\"Averta-ExtraBold\";font-weight:500;text-decoration:none}snt-link a.theme-action:before{height:3px;bottom:-3px;background-color:#147582}snt-link a.theme-action:hover{text-decoration:none}snt-link a.theme-action:hover:before{background-color:#147582;height:3px;bottom:-3px}snt-link a.theme-action:hover .link-content{border:none;bottom:-5px}snt-link a.theme-action:hover .icon-new-window:after{color:#147582}snt-link a.theme-action .link-content{border-bottom:3px solid #323232;bottom:-5px}snt-link a.theme-action .icon-new-window:before{all:unset}snt-link a.theme-action .icon-new-window:after{content:\"\";font-size:1.02em !important;right:-21px;padding-left:5px;color:#323232;display:inline-block}snt-link a.cta{-webkit-box-sizing:border-box;-moz-box-sizing:border-box;-ms-box-sizing:border-box;box-sizing:border-box;padding:13px 21px;font-size:1.125em;width:auto;cursor:pointer;line-height:normal;font-family:\"Averta-ExtraBold\", sans-serif;overflow:visible;outline:none;-webkit-font-smoothing:inherit;-moz-osx-font-smoothing:inherit;-webkit-appearance:none;border:none}";

const LinkComponent = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.hiddenTitle = StringUtils.empty();
        this.classNames = StringUtils.empty();
        this.linkEvent = createEvent(this, "linkEvent", 7);
    }
    handleKeyDown(keyboardEvent) {
        this.linkEvent.emit(keyboardEvent);
    }
    handleClick(clickEvent) {
        this.linkEvent.emit(clickEvent);
    }
    handleMouseover(clickEvent) {
        this.linkEvent.emit(clickEvent);
    }
    render() {
        let content = h("slot", null);
        if (AccessibilityUtils.isAccessibilityLinkRequired(this.element, this.href, this.target)) {
            let title = AccessibilityUtils.getNewWindowTitle();
            let text = AccessibilityUtils.getNewWindowText();
            content = [h("span", { class: "link-content" }, content),
                h("span", { class: 'icon-font icon-new-window', title: title }, h("span", { class: 'sr-only' }, " ", text))
            ];
        }
        return [
            h("a", { href: this.href, target: this.target, download: this.downloadName, "aria-label": this.ariaLabel, class: WebUtils.generateClasses([], this.classNames), "hidden-title": this.hiddenTitle }, content)
        ];
    }
    get element() { return getElement(this); }
};
LinkComponent.TAG_NAME = "snt-link";
LinkComponent.style = linkComponentCss;

export { LinkComponent as snt_link };
