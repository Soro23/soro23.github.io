(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{8312:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return n(3316)}])},3316:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return ec}});var r=n(5893),s=n(7747),i=n(7294),a=n(5432),l=n(1103);function o(e){let{tagName:t,isContentEditable:n}=e.target;return"INPUT"!==t&&"TEXTAREA"!==t&&!0!==n}var d=Object.defineProperty,u=(e,t,n)=>t in e?d(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,c=(e,t,n)=>(u(e,"symbol"!=typeof t?t+"":t,n),n);function f(e){return e.sort((e,t)=>{let n=e.compareDocumentPosition(t);if(n&Node.DOCUMENT_POSITION_FOLLOWING||n&Node.DOCUMENT_POSITION_CONTAINED_BY)return -1;if(n&Node.DOCUMENT_POSITION_PRECEDING||n&Node.DOCUMENT_POSITION_CONTAINS)return 1;if(!(n&Node.DOCUMENT_POSITION_DISCONNECTED)&&!(n&Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC))return 0;throw Error("Cannot sort the given nodes.")})}var h=e=>"object"==typeof e&&"nodeType"in e&&e.nodeType===Node.ELEMENT_NODE;function x(e,t,n){let r=e+1;return n&&r>=t&&(r=0),r}function p(e,t,n){let r=e-1;return n&&r<0&&(r=t),r}var b="undefined"!=typeof window?i.useLayoutEffect:i.useEffect,m=e=>e,v=class{constructor(){c(this,"descendants",new Map),c(this,"register",e=>{if(null!=e)return h(e)?this.registerNode(e):t=>{this.registerNode(t,e)}}),c(this,"unregister",e=>{this.descendants.delete(e);let t=f(Array.from(this.descendants.keys()));this.assignIndex(t)}),c(this,"destroy",()=>{this.descendants.clear()}),c(this,"assignIndex",e=>{this.descendants.forEach(t=>{let n=e.indexOf(t.node);t.index=n,t.node.dataset.index=t.index.toString()})}),c(this,"count",()=>this.descendants.size),c(this,"enabledCount",()=>this.enabledValues().length),c(this,"values",()=>Array.from(this.descendants.values()).sort((e,t)=>e.index-t.index)),c(this,"enabledValues",()=>this.values().filter(e=>!e.disabled)),c(this,"item",e=>{if(0!==this.count())return this.values()[e]}),c(this,"enabledItem",e=>{if(0!==this.enabledCount())return this.enabledValues()[e]}),c(this,"first",()=>this.item(0)),c(this,"firstEnabled",()=>this.enabledItem(0)),c(this,"last",()=>this.item(this.descendants.size-1)),c(this,"lastEnabled",()=>{let e=this.enabledValues().length-1;return this.enabledItem(e)}),c(this,"indexOf",e=>{var t,n;return e&&null!=(n=null==(t=this.descendants.get(e))?void 0:t.index)?n:-1}),c(this,"enabledIndexOf",e=>null==e?-1:this.enabledValues().findIndex(t=>t.node.isSameNode(e))),c(this,"next",(e,t=!0)=>{let n=x(e,this.count(),t);return this.item(n)}),c(this,"nextEnabled",(e,t=!0)=>{let n=this.item(e);if(!n)return;let r=x(this.enabledIndexOf(n.node),this.enabledCount(),t);return this.enabledItem(r)}),c(this,"prev",(e,t=!0)=>{let n=p(e,this.count()-1,t);return this.item(n)}),c(this,"prevEnabled",(e,t=!0)=>{let n=this.item(e);if(!n)return;let r=p(this.enabledIndexOf(n.node),this.enabledCount()-1,t);return this.enabledItem(r)}),c(this,"registerNode",(e,t)=>{if(!e||this.descendants.has(e))return;let n=f(Array.from(this.descendants.keys()).concat(e));(null==t?void 0:t.disabled)&&(t.disabled=!!t.disabled);let r={node:e,index:-1,...t};this.descendants.set(e,r),this.assignIndex(n)})}},y=n(5227),[j,g]=(0,y.k)({name:"DescendantsProvider",errorMessage:"useDescendantsContext must be used within DescendantsProvider"}),N=n(6245),w=n(5155),C=n(2495),[S,_,k,T]=[m(j),()=>m(g()),()=>(function(){let e=(0,i.useRef)(new v);return b(()=>()=>e.current.destroy()),e.current})(),e=>(function(e){let t=g(),[n,r]=(0,i.useState)(-1),s=(0,i.useRef)(null);b(()=>()=>{s.current&&t.unregister(s.current)},[]),b(()=>{if(!s.current)return;let e=Number(s.current.dataset.index);n==e||Number.isNaN(e)||r(e)});let a=e?m(t.register(e)):m(t.register);return{descendants:t,index:n,enabledIndex:t.enabledIndexOf(s.current),register:(0,l.lq)(a,s)}})(e)],[I,E]=(0,y.k)({name:"TabsContext",errorMessage:"useTabsContext: `context` is undefined. Seems you forgot to wrap all tabs components within <Tabs />"}),[O,D]=(0,y.k)({});function z(e,t){return`${e}--tab-${t}`}function L(e,t){return`${e}--tabpanel-${t}`}var P=n(6554),U=n(7603),M=n(3179),F=n(6914),[R,A]=(0,y.k)({name:"TabsStylesContext",errorMessage:"useTabsStyles returned is 'undefined'. Seems you forgot to wrap the components in \"<Tabs />\" "}),G=(0,P.G)(function(e,t){let n=(0,U.jC)("Tabs",e),{children:s,className:l,...o}=(0,M.Lr)(e),{htmlProps:d,descendants:u,...c}=function(e){var t;let{defaultIndex:n,onChange:r,index:s,isManual:a,isLazy:l,lazyBehavior:o="unmount",orientation:d="horizontal",direction:u="ltr",...c}=e,[f,h]=(0,i.useState)(null!=n?n:0),[x,p]=function(e){let{value:t,defaultValue:n,onChange:r,shouldUpdate:s=(e,t)=>e!==t}=e,a=(0,w.W)(r),l=(0,w.W)(s),[o,d]=(0,i.useState)(n),u=void 0!==t,c=u?t:o,f=(0,w.W)(e=>{let t="function"==typeof e?e(c):e;l(c,t)&&(u||d(t),a(t))},[u,a,c,l]);return[c,f]}({defaultValue:null!=n?n:0,value:s,onChange:r});(0,i.useEffect)(()=>{null!=s&&h(s)},[s]);let b=k(),m=(0,i.useId)(),v=null!=(t=e.id)?t:m;return{id:`tabs-${v}`,selectedIndex:x,focusedIndex:f,setSelectedIndex:p,setFocusedIndex:h,isManual:a,isLazy:l,lazyBehavior:o,orientation:d,descendants:b,direction:u,htmlProps:c}}(o),f=(0,i.useMemo)(()=>c,[c]),{isFitted:h,...x}=d,p={position:"relative",...n.root};return(0,r.jsx)(S,{value:u,children:(0,r.jsx)(I,{value:f,children:(0,r.jsx)(R,{value:n,children:(0,r.jsx)(F.m.div,{className:(0,a.cx)("chakra-tabs",l),ref:t,...x,__css:p,children:s})})})})});G.displayName="Tabs";var q=(0,P.G)(function(e,t){let n=function(e){let{focusedIndex:t,orientation:n,direction:r}=E(),s=_(),l=(0,i.useCallback)(e=>{let i=()=>{var e;let n=s.nextEnabled(t);n&&(null==(e=n.node)||e.focus())},a=()=>{var e;let n=s.prevEnabled(t);n&&(null==(e=n.node)||e.focus())},l="horizontal"===n,o="vertical"===n,d={["ltr"===r?"ArrowLeft":"ArrowRight"]:()=>l&&a(),["ltr"===r?"ArrowRight":"ArrowLeft"]:()=>l&&i(),ArrowDown:()=>o&&i(),ArrowUp:()=>o&&a(),Home:()=>{var e;let t=s.firstEnabled();t&&(null==(e=t.node)||e.focus())},End:()=>{var e;let t=s.lastEnabled();t&&(null==(e=t.node)||e.focus())}}[e.key];d&&(e.preventDefault(),d(e))},[s,t,n,r]);return{...e,role:"tablist","aria-orientation":n,onKeyDown:(0,a.v0)(e.onKeyDown,l)}}({...e,ref:t}),s={display:"flex",...A().tablist};return(0,r.jsx)(F.m.div,{...n,className:(0,a.cx)("chakra-tabs__tablist",e.className),__css:s})});q.displayName="TabList";var V=(0,P.G)(function(e,t){let n=A(),s=function(e){let{isDisabled:t=!1,isFocusable:n=!1,...r}=e,{setSelectedIndex:s,isManual:d,id:u,setFocusedIndex:c,selectedIndex:f}=E(),{index:h,register:x}=T({disabled:t&&!n}),p=h===f;return{...function(e={}){let{ref:t,isDisabled:n,isFocusable:r,clickOnEnter:s=!0,clickOnSpace:d=!0,onMouseDown:u,onMouseUp:c,onClick:f,onKeyDown:h,onKeyUp:x,tabIndex:p,onMouseOver:b,onMouseLeave:m,...v}=e,[y,j]=(0,i.useState)(!0),[g,N]=(0,i.useState)(!1),w=function(){let e=(0,i.useRef)(new Map),t=e.current,n=(0,i.useCallback)((t,n,r,s)=>{e.current.set(r,{type:n,el:t,options:s}),t.addEventListener(n,r,s)},[]),r=(0,i.useCallback)((t,n,r,s)=>{t.removeEventListener(n,r,s),e.current.delete(r)},[]);return(0,i.useEffect)(()=>()=>{t.forEach((e,t)=>{r(e.el,e.type,t,e.options)})},[r,t]),{add:n,remove:r}}(),C=y?p:p||0,S=n&&!r,_=(0,i.useCallback)(e=>{if(n){e.stopPropagation(),e.preventDefault();return}e.currentTarget.focus(),null==f||f(e)},[n,f]),k=(0,i.useCallback)(e=>{g&&o(e)&&(e.preventDefault(),e.stopPropagation(),N(!1),w.remove(document,"keyup",k,!1))},[g,w]),T=(0,i.useCallback)(e=>{if(null==h||h(e),n||e.defaultPrevented||e.metaKey||!o(e.nativeEvent)||y)return;let t=s&&"Enter"===e.key;d&&" "===e.key&&(e.preventDefault(),N(!0)),t&&(e.preventDefault(),e.currentTarget.click()),w.add(document,"keyup",k,!1)},[n,y,h,s,d,w,k]),I=(0,i.useCallback)(e=>{null==x||x(e),!n&&!e.defaultPrevented&&!e.metaKey&&o(e.nativeEvent)&&!y&&d&&" "===e.key&&(e.preventDefault(),N(!1),e.currentTarget.click())},[d,y,n,x]),E=(0,i.useCallback)(e=>{0===e.button&&(N(!1),w.remove(document,"mouseup",E,!1))},[w]),O=(0,i.useCallback)(e=>{if(0===e.button){if(n){e.stopPropagation(),e.preventDefault();return}y||N(!0),e.currentTarget.focus({preventScroll:!0}),w.add(document,"mouseup",E,!1),null==u||u(e)}},[n,y,u,w,E]),D=(0,i.useCallback)(e=>{0===e.button&&(y||N(!1),null==c||c(e))},[c,y]),z=(0,i.useCallback)(e=>{if(n){e.preventDefault();return}null==b||b(e)},[n,b]),L=(0,i.useCallback)(e=>{g&&(e.preventDefault(),N(!1)),null==m||m(e)},[g,m]),P=(0,l.lq)(t,e=>{e&&"BUTTON"!==e.tagName&&j(!1)});return y?{...v,ref:P,type:"button","aria-disabled":S?void 0:n,disabled:S,onClick:_,onMouseDown:u,onMouseUp:c,onKeyUp:x,onKeyDown:h,onMouseOver:b,onMouseLeave:m}:{...v,ref:P,role:"button","data-active":(0,a.PB)(g),"aria-disabled":n?"true":void 0,tabIndex:S?void 0:C,onClick:_,onMouseDown:O,onMouseUp:D,onKeyUp:I,onKeyDown:T,onMouseOver:z,onMouseLeave:L}}({...r,ref:(0,l.lq)(x,e.ref),isDisabled:t,isFocusable:n,onClick:(0,a.v0)(e.onClick,()=>{s(h)})}),id:z(u,h),role:"tab",tabIndex:p?0:-1,type:"button","aria-selected":p,"aria-controls":L(u,h),onFocus:t?void 0:(0,a.v0)(e.onFocus,()=>{c(h);let e=t&&n;d||e||s(h)})}}({...e,ref:t}),d={outline:"0",display:"flex",alignItems:"center",justifyContent:"center",...n.tab};return(0,r.jsx)(F.m.button,{...s,className:(0,a.cx)("chakra-tabs__tab",e.className),__css:d})});V.displayName="Tab";var W=(0,P.G)(function(e,t){let n=function(){let e=E(),t=_(),{selectedIndex:n,orientation:r}=e,s="horizontal"===r,a="vertical"===r,[l,o]=(0,i.useState)(()=>s?{left:0,width:0}:a?{top:0,height:0}:void 0),[d,u]=(0,i.useState)(!1);return(0,N.G)(()=>{if(null==n)return;let e=t.item(n);if(null==e)return;s&&o({left:e.node.offsetLeft,width:e.node.offsetWidth}),a&&o({top:e.node.offsetTop,height:e.node.offsetHeight});let r=requestAnimationFrame(()=>{u(!0)});return()=>{r&&cancelAnimationFrame(r)}},[n,s,a,t]),{position:"absolute",transitionProperty:"left, right, top, bottom, height, width",transitionDuration:d?"200ms":"0ms",transitionTimingFunction:"cubic-bezier(0, 0, 0.2, 1)",...l}}(),s={...e.style,...n},l=A();return(0,r.jsx)(F.m.div,{ref:t,...e,className:(0,a.cx)("chakra-tabs__tab-indicator",e.className),style:s,__css:l.indicator})});W.displayName="TabIndicator";var B=(0,P.G)(function(e,t){let n=function(e){let{id:t,selectedIndex:n}=E(),r=(0,C.W)(e.children).map((e,r)=>(0,i.createElement)(O,{key:r,value:{isSelected:r===n,id:L(t,r),tabId:z(t,r),selectedIndex:n}},e));return{...e,children:r}}(e),s=A();return(0,r.jsx)(F.m.div,{...n,width:"100%",ref:t,className:(0,a.cx)("chakra-tabs__tab-panels",e.className),__css:s.tabpanels})});B.displayName="TabPanels";var K=(0,P.G)(function(e,t){let n=function(e){let{children:t,...n}=e,{isLazy:r,lazyBehavior:s}=E(),{isSelected:a,id:l,tabId:o}=D(),d=(0,i.useRef)(!1);a&&(d.current=!0);let u=function(e){let{wasSelected:t,enabled:n,isSelected:r,mode:s="unmount"}=e;return!n||!!r||"keepMounted"===s&&!!t}({wasSelected:d.current,isSelected:a,enabled:r,mode:s});return{tabIndex:0,...n,children:u?t:null,role:"tabpanel","aria-labelledby":o,hidden:!a,id:l}}({...e,ref:t}),s=A();return(0,r.jsx)(F.m.div,{outline:"0",...n,className:(0,a.cx)("chakra-tabs__tab-panel",e.className),__css:s.tabpanel})});K.displayName="TabPanel";var X=n(4e3),J=n(7771);function $(){return(0,r.jsxs)(s.xu,{display:"flex",alignItems:"center",justifyContent:"center",gap:2,p:10,children:[(0,r.jsx)(J.M_L,{fill:"#cd3c1a",size:18}),(0,r.jsx)(X.x,{children:"Comming Soon"})]})}var Z=n(2372),H=n(4292),Y=n(2757),Q=n(6948),ee={default:"#8b949e",aws:"#FF9900",php:"#4f5b93",reids:"#d82c20",react:"#00d8ff",expo:"#000",vercel:"#000",nodejs:"#44883e",graphql:"#e535ab",mongodb:"#4DB33D",nextjs:"#000",heroku:"#6567a5",jquery:"#38bdf8",netlify:"#00AD9F",socketio:"#000",wordpress:"#21759b",magento:"#f2641c",ubuntu:"#FFA611",synfony:"#000",mysql:"#e39306",mssql:"#e3363a",composer:"#724a31",javascript:"#f7df1e",typescript:"#2b7489",materialui:"#007fff",angularjs:"#db1b16",reactnative:"#00d8ff",tailwindcss:"#38bdf8",java:"#4e7fa0"},et=n(1054),en=n(7094);function er(){let[e,t]=(0,i.useState)(!1),n=()=>{t(!e)},a=Z.Z.technologies.reduce((e,t)=>(e[t.section]||(e[t.section]=[]),e[t.section].push(t),e),{}),l=e=>{let t=e.toLowerCase().replace(/[^a-z]/g,"");return(null==ee?void 0:ee[t])||ee.default};return(0,r.jsxs)(s.xu,{border:"1px solid",borderColor:"gray.700",borderRadius:"10",p:4,children:[(0,r.jsxs)(H.U,{justifyContent:"space-between",children:[(0,r.jsxs)(Y.X,{as:"h4",fontSize:"large",color:"dark.highlight-text",display:"flex",gap:2,children:[(0,r.jsx)(et.TlV,{}),"Technologies"]}),e?(0,r.jsx)(en.OId,{onClick:n,cursor:"pointer"}):(0,r.jsx)(en.Vmf,{onClick:n,cursor:"pointer"})]}),e?(0,r.jsx)(s.xu,{p:4,children:(0,r.jsx)(H.U,{flexFlow:"wrap",children:Z.Z.technologies.map((e,t)=>(0,r.jsxs)(H.U,{children:[(0,r.jsx)(Q.J,{as:e.icon,boxSize:e.size,style:{color:l(e.name)}}),(0,r.jsxs)(X.x,{fontSize:"small",whiteSpace:"nowrap",children:[" ",e.name]})]},t))})}):Object.keys(a).map((e,t)=>(0,r.jsxs)(G,{position:"relative",variant:"unstyled",children:[(0,r.jsx)(q,{border:"0px solid",borderBottom:"1px",borderColor:"gray.900",children:(0,r.jsx)(V,{border:"1px solid",borderBottom:"0px",py:1,borderColor:"gray.800",borderTopRightRadius:"10",borderTopLeftRadius:"10",fontSize:"small",fontWeight:"500",children:e})}),(0,r.jsx)(B,{children:(0,r.jsx)(K,{children:(0,r.jsx)(H.U,{flexFlow:"wrap",children:a[e].map((e,t)=>(0,r.jsxs)(H.U,{children:[(0,r.jsx)(Q.J,{as:e.icon,boxSize:e.size,style:{color:l(e.name)}}),(0,r.jsxs)(X.x,{fontSize:"small",whiteSpace:"nowrap",children:[" ",e.name]})]},t))})})})]},t))]})}var[es,ei]=(0,y.k)({name:"ListStylesContext",errorMessage:"useListStyles returned is 'undefined'. Seems you forgot to wrap the components in \"<List />\" "}),ea=(0,P.G)(function(e,t){let n=(0,U.jC)("List",e),{children:s,styleType:i="none",stylePosition:a,spacing:l,...o}=(0,M.Lr)(e),d=(0,C.W)(s);return(0,r.jsx)(es,{value:n,children:(0,r.jsx)(F.m.ul,{ref:t,listStyleType:i,listStylePosition:a,role:"list",__css:{...n.container,...l?{"& > *:not(style) ~ *:not(style)":{mt:l}}:{}},...o,children:d})})});ea.displayName="List",(0,P.G)((e,t)=>{let{as:n,...s}=e;return(0,r.jsx)(ea,{ref:t,as:"ol",styleType:"decimal",marginStart:"1em",...s})}).displayName="OrderedList";var el=(0,P.G)(function(e,t){let{as:n,...s}=e;return(0,r.jsx)(ea,{ref:t,as:"ul",styleType:"initial",marginStart:"1em",...s})});el.displayName="UnorderedList";var eo=(0,P.G)(function(e,t){let n=ei();return(0,r.jsx)(F.m.li,{ref:t,...e,__css:n.item})});eo.displayName="ListItem",(0,P.G)(function(e,t){let n=ei();return(0,r.jsx)(Q.J,{ref:t,role:"presentation",...e,__css:n.icon})}).displayName="ListIcon";var ed=n(9289);function eu(){let e=Z.Z.workstories,t=Z.Z.educationstories,n=e=>{let t=e.toLowerCase().replace(/[^a-z]/g,"");return(null==ee?void 0:ee[t])||ee.default};return(0,r.jsxs)(r.Fragment,{children:[e.map((e,t)=>{var i,a;return(0,r.jsxs)(s.xu,{border:"1px solid",borderColor:"gray.700",borderRadius:"10",p:4,children:[(0,r.jsxs)(H.U,{flexFlow:"wrap",children:[(0,r.jsxs)(Y.X,{as:"h4",fontSize:"large",color:"dark.highlight-text",display:"flex",gap:2,children:[(0,r.jsx)(Q.J,{as:e.icon,boxSize:4}),e.label]}),(0,r.jsx)(X.x,{fontSize:10,border:"1px solid",p:1,borderRadius:50,children:e.badge})]}),(0,r.jsx)(X.x,{fontSize:14,p:1,children:e.description}),(0,r.jsx)(el,{fontSize:14,py:4,children:null===(i=e.functions)||void 0===i?void 0:i.map((e,t)=>(0,r.jsx)(eo,{children:e},t))}),(0,r.jsx)(H.U,{py:4,flexFlow:"wrap",children:null===(a=e.tags)||void 0===a?void 0:a.map((e,t)=>(0,r.jsxs)(H.U,{children:[(0,r.jsx)(s.xu,{h:"11px",w:"11px",borderRadius:50,style:{background:n(e)}}),(0,r.jsxs)(X.x,{fontSize:10,whiteSpace:"nowrap",children:[" ",e]})]},t))})]},t)}),(0,r.jsx)(ed.i,{py:4}),t.map((e,t)=>{var i;return(0,r.jsxs)(s.xu,{border:"1px solid",borderColor:"gray.700",borderRadius:"10",p:4,children:[(0,r.jsxs)(H.U,{flexFlow:"wrap",children:[(0,r.jsxs)(Y.X,{as:"h4",fontSize:"large",color:"dark.highlight-text",display:"flex",gap:2,children:[(0,r.jsx)(Q.J,{as:e.icon,boxSize:4}),e.label]}),(0,r.jsx)(X.x,{fontSize:10,border:"1px solid",p:1,borderRadius:50,children:e.badge})]}),(0,r.jsx)(X.x,{fontSize:14,p:1,children:e.description}),(0,r.jsx)(H.U,{py:4,flexFlow:"wrap",children:null===(i=e.tags)||void 0===i?void 0:i.map((e,t)=>(0,r.jsxs)(H.U,{children:[(0,r.jsx)(s.xu,{h:"11px",w:"11px",borderRadius:50,style:{background:n(e)}}),(0,r.jsxs)(X.x,{fontSize:10,whiteSpace:"nowrap",children:[" ",e]})]},t))})]},t)})]})}var ec=()=>(0,r.jsx)(s.xu,{w:"full",py:10,children:(0,r.jsxs)(G,{position:"relative",variant:"unstyled",children:[(0,r.jsxs)(q,{gap:4,children:[(0,r.jsx)(V,{children:"Profile"}),(0,r.jsx)(V,{children:"Story"}),(0,r.jsx)(V,{children:"Code Gist"}),(0,r.jsx)(V,{children:"Insight"})]}),(0,r.jsx)(W,{height:"2px",bg:"#e08976",borderRadius:"1px"}),(0,r.jsxs)(B,{children:[(0,r.jsx)(K,{children:(0,r.jsx)(er,{})}),(0,r.jsx)(K,{children:(0,r.jsx)(eu,{})}),(0,r.jsx)(K,{children:(0,r.jsx)($,{})}),(0,r.jsx)(K,{children:(0,r.jsx)($,{})})]})]})})}},function(e){e.O(0,[509,127,594,888,774,179],function(){return e(e.s=8312)}),_N_E=e.O()}]);