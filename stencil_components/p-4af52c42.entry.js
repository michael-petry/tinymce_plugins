import{r as t,d as e,h as i,H as s,g as n}from"./p-8a8b139b.js";import"./p-85cd1ecc.js";import{W as o}from"./p-ae4e745e.js";import{K as r,a,N as l}from"./p-617961cc.js";class h{constructor(t){this.label=t.label,this.key=t.key,this.url=t.url,this.id=t.id,this.languageId=t.languageId,this.parentId=t.parentId,this.expandable=t.expandable||!1,this.visible=t.visible||!1,this.selected=t.selected||!1,this.expanded=t.expanded||!1,this.domElement=t.domElement||null}}const c=class{constructor(i){t(this,i),this.sntChange=e(this,"sntChange",7)}componentWillLoad(){const t=o.getObjectFromString(this.structure);this.treeitems=this.getItemsFromTree(t,this.treeitems=[]),this.keyboardEventProcessor=this.initKeyboardEventProcessor()}componentDidLoad(){this.treeitems.find(t=>t.selected)||this.treeitems[0].domElement.setAttribute("tabindex","0")}componentWillUpdate(){}componentDidUpdate(){const t=this.treeitems.find(t=>t.selected);t&&t.domElement.focus()}async getTreeitems(){return Promise.resolve(this.treeitems)}async updateExpandedTreeitems(t,e,i){return Promise.resolve(t.map(t=>-1!=e.indexOf(t)?new h(Object.assign(Object.assign({},t),{expanded:"boolean"==typeof i?i:!t.expanded})):t))}async updateVisibleTreeitems(t,e,i){return Promise.resolve(t.map(t=>-1!=e.indexOf(t)?new h(Object.assign(Object.assign({},t),{visible:"boolean"==typeof i?i:!t.visible})):t))}async updateSelectedTreeitems(t,e,i){return Promise.resolve(t.map(t=>-1!=e.indexOf(t)?new h(Object.assign(Object.assign({},t),{selected:"boolean"==typeof i?i:!t.selected})):t.selected?new h(Object.assign(Object.assign({},t),{selected:!1})):t))}async findNodeByProperty(t,e){return this.treeitems.find(i=>i[t]==e)}async selectNodeByUrl(t){let e=await this.findNodeByProperty("url",t);const i=this.treeitems.find(t=>t.parentId==e.id);i&&(this.treeitems=await this.updateExpandedTreeitems(this.treeitems,[e],!0)),this.treeitems=await this.updateSelectedTreeitems(this.treeitems,[i||e],!0),this.sntChange.emit({node:i||e,parentNode:i?e:null,originalEvent:null})}initKeyboardEventProcessor(){return r.newInstance().withKey(a.ARROW_UP,t=>{this.moveSelection(t,l.BACKWARDS)}).withKey(a.ARROW_DOWN,t=>{this.moveSelection(t,l.FORWARDS)}).withKey(a.ARROW_RIGHT,t=>{const e=this.treeitems.find(e=>e.domElement==t.target);if(e&&e.expandable){if(e.expanded)return void this.moveSelection(t,l.FORWARDS);this.toggleTreeitem(e)}}).withKey(a.ARROW_LEFT,async t=>{const e=this.treeitems.find(e=>e.domElement==t.target);if(e&&e.expandable&&e.expanded)this.toggleTreeitem(e);else if(e.parentId){const t=this.treeitems.find(t=>t.id==e.parentId);this.treeitems=await this.updateSelectedTreeitems(this.treeitems,[t])}}).withKey(a.HOME,t=>{this.moveSelection(t,l.FIRST)}).withKey(a.END,t=>{this.moveSelection(t,l.LAST)}).withKey(a.ASTERISK,t=>{const e=this.treeitems.find(e=>e.domElement==t.target);this.treeitems.filter(t=>t.expandable&&t.parentId==e.parentId).forEach(t=>{this.toggleTreeitem(t,!0)})}).withKeys([a.ENTER,a.SPACE],t=>{t.preventDefault();const e=this.treeitems.find(e=>e.domElement==t.target);if(e)if(e.expandable)t.preventDefault(),this.toggleTreeitem(e);else{const i=this.treeitems.find(t=>t.id==e.parentId);this.sntChange.emit({node:e,parentNode:i||null,originalEvent:t})}}).withDefaultHandler(async t=>{const e=this.getNextSelectableNodeByFirstCharacter(this.treeitems,t.key);e&&(this.treeitems=await this.updateSelectedTreeitems(this.treeitems,[e]))}).build()}async moveSelection(t,e){t.preventDefault();const i=this.getNextSelectableNode(this.treeitems,e);i&&(this.treeitems=await this.updateSelectedTreeitems(this.treeitems,[i]))}getNextSelectableNodeByFirstCharacter(t,e,i=l.FORWARDS){const s=t.filter(t=>t.visible&&t.label[0].toLowerCase()==e.toLowerCase()),n=s.find(t=>t.selected),o=s.indexOf(n);return s[(o+(i==l.FORWARDS?1:-1)+s.length)%s.length]}getNextSelectableNode(t,e){const i=t.filter(t=>t.visible),s=i.find(t=>t.selected),n=i.indexOf(s);return(e!=l.BACKWARDS&&e!=l.FIRST||0!=n)&&(e!=l.FORWARDS&&e!=l.LAST||n!=i.length-1)&&i[e==l.FORWARDS?n+1:e==l.BACKWARDS?n-1:e==l.LAST?i.length-1:0]}onClick(t){const e=this.treeitems.find(e=>e.domElement==t.target);if(e)if(t.preventDefault(),e.expandable)this.toggleTreeitem(e);else{const i=this.treeitems.find(t=>t.id==e.parentId);this.sntChange.emit({node:e,parentNode:i||null,originalEvent:t})}}async toggleTreeitem(t,e){const i=await this.updateExpandedTreeitems(this.treeitems,[t],e);t=i.find(e=>e.domElement==t.domElement);const s=i.filter(e=>e.parentId==t.id);this.treeitems=await this.updateVisibleTreeitems(i,s)}onKeydown(t){(this.keyboardEventProcessor.hasDelegatedHandler(t)||this.keyboardEventProcessor.hasDefaultHandler())&&this.keyboardEventProcessor.process(t)}async onFocusin(t){this.treeitems.find(t=>t.selected)||(this.treeitems=await this.updateSelectedTreeitems(this.treeitems,[this.treeitems[0]]))}getItemsFromTree(t,e,i){let s=i;return t.title&&(s=new h({label:t.title,key:t.key,url:t.url,id:e.length+1,languageId:t.languageId,parentId:i?i.id:null,expandable:t.items&&t.items.length>0,expanded:!!t.expanded,visible:!i||i.expanded}),e.push(s)),t.items&&t.items.forEach(t=>{this.getItemsFromTree(t,e,s)}),e}buildTreeview(t,e,s=null){const n=t.filter(t=>t.parentId==s).reduce((s,n)=>{const o=e?e+"-"+n.key:null;return[...s,i("li",{role:n.expandable?"treeitem":"none",id:o,"aria-expanded":n.expanded?"true":"false","data-index":n.expandable?t.indexOf(h):null,tabindex:n.selected?"0":"-1",ref:t=>{n.domElement=t},class:{focused:n.selected}},n.expandable?[i("span",null,n.label),this.buildTreeview(t,o,n.id)]:[i("a",{role:"treeitem",id:o,href:"#"+o,class:{focused:n.selected},"data-index":t.indexOf(n),tabindex:n.selected?"0":"-1",ref:t=>{n.domElement=t}},n.label)])]},[]);return i("ul",null,n)}render(){return i(s,{onClick:this.onClick.bind(this),onKeydown:this.onKeydown.bind(this),onFocusin:this.onFocusin.bind(this)},this.buildTreeview(this.treeitems,this.hostElement.id))}get hostElement(){return n(this)}};c.TAG_NAME="snt-treeview",c.style="snt-treeview{display:block}snt-treeview ul{list-style:none;padding:0}snt-treeview li,snt-treeview a{color:#323232;font-size:1rem;line-height:1.3125rem}snt-treeview li:focus,snt-treeview a:focus{outline:none}snt-treeview li{margin-bottom:1.25rem}snt-treeview li:last-child{margin-bottom:0}snt-treeview li.active>span{border-bottom:3px solid #147582;color:#147582}snt-treeview li>ul{padding:1rem 0 0.625rem 1.875rem}snt-treeview li>ul li{margin-bottom:1rem}snt-treeview li>ul li:last-child{margin-bottom:0}snt-treeview li:focus>span,snt-treeview li.focused>span{font-weight:bold;color:#147582}snt-treeview li>span{pointer-events:none}snt-treeview a:focus,snt-treeview a.focused{font-weight:bold;color:#147582}snt-treeview a.active{border-bottom:2px solid #147582;color:#147582}snt-treeview [role=treeitem][aria-expanded=false]>ul{display:none}";export{c as snt_treeview}