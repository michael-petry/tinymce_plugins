import { r as registerInstance, h } from './index-21c05bc9.js';

const sourceListComponentCss = "snt-source-list span.expand-icon{display:inline-block;height:16px;width:16px;position:relative;top:1px;margin-right:10px}snt-source-list button{position:relative;font-size:14px;font-family:inherit;border:0;padding:0;background-color:inherit}snt-source-list button:hover{text-decoration:underline;color:#147582}snt-source-list button:focus::after{box-sizing:border-box;border:1px dashed #323232;content:\"\";right:100%;width:calc(100% + 10px);height:calc(100% + 4px);left:-5px;top:-2px;position:absolute}snt-source-list button:focus{outline:none;text-decoration:underline;color:#147582}snt-source-list .close{display:none}snt-source-list .open{display:block}snt-source-list .source-panel{padding-left:26px}snt-source-list snt-source-link:nth-child(n+1){margin-top:15px;margin-right:15px}";

const SourceListComponent = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.RETURN = 13;
    }
    handleKeydown(event) {
        switch (event.keyCode) {
            case this.RETURN:
                this.toggleExpand();
                event.stopPropagation();
                event.preventDefault();
                break;
            default:
                break;
        }
    }
    toggleExpand() {
        if (this.buttonEl.getAttribute('aria-expanded') === 'true') {
            this.buttonEl.setAttribute('aria-expanded', 'false');
        }
        else {
            this.buttonEl.setAttribute('aria-expanded', 'true');
        }
        this.buttonEl.classList.toggle('expanded');
        this.toggleContent();
    }
    toggleContent() {
        this.panelEl.classList.toggle('open');
        this.panelEl.classList.toggle('close');
        this.iconEl.classList.toggle('icon-icon_legalAccordion_plus');
        this.iconEl.classList.toggle('icon-icon_legalAccordion_minus');
    }
    render() {
        return (h("snt-layout", null, h("button", { ref: (el) => (this.buttonEl = el), onKeyDown: this.handleKeydown.bind(this), onClick: this.toggleExpand.bind(this), "aria-expanded": "false", "aria-controls": this.panelId }, h("span", { ref: (el) => (this.iconEl = el), class: "expand-icon icon-font icon-icon_legalAccordion_plus" }), this.sourceHeading), h("div", { class: "source-panel close", ref: (el) => (this.panelEl = el), id: this.panelId }, h("slot", null))));
    }
};
SourceListComponent.TAG_NAME = "snt-source-list";
SourceListComponent.style = sourceListComponentCss;

export { SourceListComponent as snt_source_list };
