import { r as registerInstance, c as createEvent, h, H as Host, g as getElement } from './index-21c05bc9.js';
import { S as StringUtils } from './StringUtils-617c552f.js';
import { W as WebUtils } from './WebUtils-c0d293ee.js';
import { f as focusTrap } from './index-1490dfbf.js';

class ModalOptions {
    constructor(keyboardClose = true, backdrop = true, backdropDismiss = true, 
    // TODO: Add support for the items below back into Modal Component
    keyboardDismiss = true, clickDismiss = true) {
        this.keyboardClose = keyboardClose;
        this.backdrop = backdrop;
        this.backdropDismiss = backdropDismiss;
        this.keyboardDismiss = keyboardDismiss;
        this.clickDismiss = clickDismiss;
    }
}

class ModalLanguageVariables {
    constructor(close = null) {
        this.close = close;
    }
}

var PaddingDirectionEnum;
(function (PaddingDirectionEnum) {
    PaddingDirectionEnum["PADDING_TOP"] = "padding-top";
    PaddingDirectionEnum["PADDING_BOTTOM"] = "padding-bottom";
    PaddingDirectionEnum["PADDING_RIGHT"] = "padding-right";
    PaddingDirectionEnum["PADDING_LEFT"] = "padding-left";
})(PaddingDirectionEnum || (PaddingDirectionEnum = {}));
var ScrollDirectionEnum;
(function (ScrollDirectionEnum) {
    ScrollDirectionEnum["HORIZONTAL"] = "x";
    ScrollDirectionEnum["VERTICAL"] = "y";
})(ScrollDirectionEnum || (ScrollDirectionEnum = {}));
class DomUtils {
    static getScrollbarSize(scrollDirection) {
        if (scrollDirection == ScrollDirectionEnum.HORIZONTAL) {
            return window.innerHeight - document.documentElement.clientHeight;
        }
        else if (scrollDirection == ScrollDirectionEnum.VERTICAL) {
            return window.innerWidth - document.documentElement.clientWidth;
        }
        else {
            throw new Error(`${scrollDirection} is not a valid scroll direction.`);
        }
    }
    static setScrollbarPaddingReplacement(scrollbarPaddingReplacement = true, scrollDirection) {
        if (scrollDirection == ScrollDirectionEnum.HORIZONTAL ||
            scrollDirection == ScrollDirectionEnum.VERTICAL) {
            const paddingMap = new Map([
                [ScrollDirectionEnum.VERTICAL, PaddingDirectionEnum.PADDING_RIGHT],
                [ScrollDirectionEnum.HORIZONTAL, PaddingDirectionEnum.PADDING_BOTTOM]
            ]), paddingDirection = paddingMap.get(scrollDirection);
            if (scrollbarPaddingReplacement) {
                document.body.style[paddingDirection] = DomUtils.getScrollbarSize(scrollDirection) + 'px';
            }
            else {
                document.body.style[paddingDirection] = '0px';
            }
        }
        else {
            throw new Error(`${scrollDirection} is not a valid scroll direction.`);
        }
    }
}

const modalComponentCss = "snt-modal{z-index:100;position:fixed;top:0;left:0;height:100%;width:100%;display:none}snt-modal.ready-to-show{display:block}snt-modal.ready-to-show .modal{display:block}snt-modal snt-layout[viewport=medium] .modal-content{padding:40px;height:auto}snt-modal snt-layout[viewport=medium] .modal-dialog{margin:auto;width:334px;max-width:none}snt-modal snt-layout[viewport=large] .modal-content{padding:60px;height:auto}snt-modal snt-layout[viewport=large] .modal-dialog{margin:auto;width:426px;max-width:none}snt-modal snt-layout[viewport=extra-large] .modal-content{padding:60px;height:auto}snt-modal snt-layout[viewport=extra-large] .modal-dialog{margin:auto;width:570px;max-width:none}snt-modal .modal-dialog{width:100vw;max-width:100%;margin:0}snt-modal .modal-content{height:100vh;padding:40px;border-radius:0px;box-sizing:border-box}snt-modal .modal-header{justify-content:center}snt-modal .close{opacity:1;outline:none;position:absolute;display:flex;top:17px;right:17px}snt-modal .close:not(:disabled):not(.disabled):hover{opacity:1}snt-modal .close:not(:disabled):not(.disabled):hover .icon{background-image:url(\"/asset/fonts/icons/icon_global_closeStandAlone_hover.svg\")}snt-modal .close .label{font-family:\"Averta-Regular\", Arial, Helvetica, sans-serif;font-size:12px;color:#9E0A9A;padding-right:4px}snt-modal .close .icon{display:block;background-image:url(\"/asset/fonts/icons/icon_global_closeStandalone_lk.svg\");background-repeat:no-repeat;background-size:cover;height:15px;width:15px;content:\" \"}snt-modal .modal-body{padding:0px}snt-modal .modal-body button-link-group{padding-top:30px}snt-modal .modal-footer{border-top:none}snt-modal .modal-title{color:#323232;font-family:\"Averta-ExtraBold\", Arial, Helvetica, sans-serif;font-size:18px;line-height:32px;margin-bottom:0;font-weight:normal;text-align:center}snt-modal .modal-backdrop{display:block}snt-modal .no-content{display:none}snt-modal .no-header-content{padding:0px}";

const ModalComponent = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.shown = false;
        this.modalTitle = StringUtils.empty();
        this.options = ModalComponent.DEFAULT_OPTIONS;
        this.styleClasses = StringUtils.empty();
        this.languageString = StringUtils.empty();
        this.modalEvent = createEvent(this, "modalEvent", 7);
    }
    async toggleModal(shown) {
        if (shown) {
            this.modalEvent.emit({ eventType: ModalComponent.EVENT_MODAL_SHOW });
            this.element.classList.add(ModalComponent.CLASS_READY_TO_SHOW);
            await WebUtils.sleep(WebUtils.getTransitionDuration(this.element));
            if (this.options.backdrop) {
                this.backdropElement.classList.add(ModalComponent.CLASS_SHOW);
                await WebUtils.sleep(WebUtils.getTransitionDuration(this.backdropElement));
            }
            this.modalDialogElement.classList.add(ModalComponent.CLASS_SHOW);
            this.modalEvent.emit({ eventType: ModalComponent.EVENT_MODAL_SHOWN });
        }
        else {
            this.modalEvent.emit({ eventType: ModalComponent.EVENT_MODAL_HIDE });
            this.modalDialogElement.classList.remove(ModalComponent.CLASS_SHOW);
            await WebUtils.sleep(WebUtils.getTransitionDuration(this.element));
            if (this.backdropElement) {
                this.backdropElement.classList.remove(ModalComponent.CLASS_SHOW);
                await WebUtils.sleep(WebUtils.getTransitionDuration(this.backdropElement));
            }
            this.element.classList.remove(ModalComponent.CLASS_READY_TO_SHOW);
            this.modalEvent.emit({ eventType: ModalComponent.EVENT_MODAL_HIDDEN });
        }
        this.toggleFocusTrap();
    }
    async show() {
        this.shown = true;
    }
    async hide() {
        this.shown = false;
    }
    async toggle() {
        this.shown = !this.shown;
    }
    async isShown() {
        return this.shown;
    }
    modalEventHandler(modalEvent) {
        switch (modalEvent.detail.eventType) {
            case ModalComponent.EVENT_MODAL_SHOW:
                this.lastActiveElement = document.activeElement || document.body;
                if (document.body.scrollHeight > window.innerHeight) {
                    DomUtils.setScrollbarPaddingReplacement(true, ScrollDirectionEnum.VERTICAL);
                    document.body.classList.add(ModalComponent.CLASS_MODAL_OPEN);
                }
                break;
            case ModalComponent.EVENT_MODAL_SHOWN:
                let focusTargetElement = this.modalDialogElement.querySelector("a, button, input") || this.modalDialogElement;
                focusTargetElement.focus();
                break;
            case ModalComponent.EVENT_MODAL_HIDE:
                break;
            case ModalComponent.EVENT_MODAL_HIDDEN:
                if (document.body.scrollHeight > window.innerHeight) {
                    DomUtils.setScrollbarPaddingReplacement(false, ScrollDirectionEnum.VERTICAL);
                    document.body.classList.remove(ModalComponent.CLASS_MODAL_OPEN);
                }
                this.lastActiveElement.focus();
                break;
            default:
                throw new Error("Unsupported modal event type.");
        }
    }
    componentWillLoad() {
        this.languageVariables = new ModalLanguageVariables();
        try {
            const parsedJson = JSON.parse(this.languageString);
            Object.keys(this.languageVariables).forEach((key) => {
                if (parsedJson.hasOwnProperty(key)) {
                    this.languageVariables[key] = parsedJson[key];
                }
                else {
                    console.error(`Required language variable '${key}' not passed through 'language-string' property.`);
                }
            });
        }
        catch (e) {
            throw new Error("Invalid JSON string in language-string attribute.");
        }
    }
    componentDidLoad() {
        const footerContentElement = this.element.querySelector('.modal-footer');
        if (StringUtils.isEmpty(footerContentElement.innerHTML.trim())) {
            footerContentElement.classList.add('no-content');
        }
        const headerContentElement = this.element.querySelector('.modal-header');
        if (StringUtils.isEmpty(this.modalTitle)) {
            headerContentElement.classList.add('no-header-content');
        }
        this.dialogTitle = this.modalContentElement.querySelector("h1, h2, h3, h4, h5, h6");
        this.dialogDescription = this.modalContentElement.querySelector("p");
        this.dialogTitle && (this.dialogTitle.id = this.dialogTitle.id || "dialog-title");
        this.dialogDescription && (this.dialogDescription.id = this.dialogDescription.id || "dialog-description");
        this.focusTrap = focusTrap(this.element, {});
    }
    toggleFocusTrap() {
        (this.shown) ? this.focusTrap.activate() : this.focusTrap.deactivate();
    }
    render() {
        return (h(Host, { shown: this.shown }, h("snt-layout", { padding: "none" }, h("div", { id: "backdrop", class: "modal-backdrop fade", ref: (thisElement) => this.backdropElement = thisElement }), h("div", { class: WebUtils.generateClasses(["modal", "fade"], this.styleClasses), tabindex: "-1", role: "dialog", "aria-labelledby": this.dialogTitle ? this.dialogTitle['id'] : null, "aria-describedby": this.dialogDescription ? this.dialogDescription['id'] : null, "aria-hidden": (this.shown) ? "false" : "true", ref: (thisElement) => this.modalDialogElement = thisElement, onClick: (event) => (event.target == event.currentTarget && this.hide()), onKeyDown: (event) => (WebUtils.isValidEscapeKey(event) && this.hide()) }, h("div", { class: "modal-dialog modal-dialog-centered", role: "document" }, h("div", { class: "modal-content", ref: (elem) => this.modalContentElement = elem }, h("div", { class: "modal-header" }), h("div", { class: "modal-body" }, h("slot", null)), h("div", { class: "modal-footer" }, h("slot", { name: "footer" })), h("button", { type: "button", class: "close", onClick: this.hide.bind(this) }, h("span", { class: "sr-only" }, this.languageVariables.close), h("span", { class: "icon", "aria-hidden": "true" }))))))));
    }
    get element() { return getElement(this); }
    static get watchers() { return {
        "shown": ["toggleModal"]
    }; }
};
ModalComponent.TAG_NAME = "snt-modal";
ModalComponent.DEFAULT_OPTIONS = new ModalOptions();
ModalComponent.EVENT_MODAL_SHOWN = "modal-shown";
ModalComponent.EVENT_MODAL_SHOW = "modal-show";
ModalComponent.EVENT_MODAL_HIDDEN = "modal-hidden";
ModalComponent.EVENT_MODAL_HIDE = "modal-hide";
ModalComponent.CLASS_SHOW = "show";
ModalComponent.CLASS_READY_TO_SHOW = "ready-to-show";
ModalComponent.CLASS_MODAL_OPEN = "modal-open";
ModalComponent.style = modalComponentCss;

export { ModalComponent as M, ModalOptions as a };
