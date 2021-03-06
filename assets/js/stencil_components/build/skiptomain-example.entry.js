import { r as registerInstance, h } from './index-21c05bc9.js';

const SkipToMainExample = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    render() {
        return (h("div", null, h("snt-skip-to-main", { "main-content-id": '#main-content' }, "Skip to main content"), " ", h("br", null), h("br", null), h("br", null), h("br", null), h("button", { id: 'main-content' }, "this is main content!")));
    }
};
SkipToMainExample.TAG_NAME = 'skiptomain-example';
SkipToMainExample.style = "#main-content:focus{outline:1px solid red;}";

export { SkipToMainExample as skiptomain_example };
