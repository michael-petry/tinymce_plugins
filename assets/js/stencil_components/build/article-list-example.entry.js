import { r as registerInstance, h } from './index-21c05bc9.js';

const ArticleListExample = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    render() {
        return (h("div", { class: "col-sm-12 col-md-5 col-lg-5 col-xl-5" }, h("h2", null, "With Title"), h("snt-article-list", { heading: "My list", articlesJson: '{ "articles": [\n                        {\n                            "href": "https://www.google.com",\n                            "ariaLabel": "aria label",\n                            "hiddenTitle": "",\n                            "copy": "Click here to go to Google. Click here to go to Google. Click here to go to Google. Click here to go to Google. Click here to go to Google. Click here to go to Google. Click here to go to Google. Click here to go to Google"\n                        },\n                        {\n                            "href": "https://www.yahoo.com",\n                            "ariaLabel": "aria label",\n                            "hiddenTitle": "",\n                            "copy": "Click here to go to Yahoo"\n                        },\n                        {\n                            "href": "https://www.facebook.com",\n                            "ariaLabel": "aria label",\n                            "hiddenTitle": "",\n                            "copy": "Click here to go to Facebook"\n                        }\n                    ]}' }), h("br", null), h("h2", null, "Without Title"), h("snt-article-list", { articlesJson: '{ "articles": [\n                        {\n                            "href": "https://www.google.com",\n                            "ariaLabel": "aria label",\n                            "hiddenTitle": "",\n                            "copy": "Click here to go to Google. Click here to go to Google. Click here to go to Google. Click here to go to Google. Click here to go to Google. Click here to go to Google. Click here to go to Google. Click here to go to Google"\n                        },\n                        {\n                            "href": "https://www.yahoo.com",\n                            "ariaLabel": "aria label",\n                            "hiddenTitle": "",\n                            "copy": "Click here to go to Yahoo"\n                        },\n                        {\n                            "href": "https://www.facebook.com",\n                            "ariaLabel": "aria label",\n                            "hiddenTitle": "",\n                            "copy": "Click here to go to Facebook"\n                        }\n                    ]}' })));
    }
};
ArticleListExample.TAG_NAME = "article-list-example";

export { ArticleListExample as article_list_example };