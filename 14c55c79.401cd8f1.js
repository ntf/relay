(window.webpackJsonp=window.webpackJsonp||[]).push([[26],{110:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return u})),n.d(t,"toc",(function(){return s})),n.d(t,"default",(function(){return p}));var a=n(3),r=n(7),i=(n(0),n(319)),o=n(325),l=n(320),c={id:"use-refetchable-fragment",title:"useRefetchableFragment",slug:"/api-reference/use-refetchable-fragment/"},u={unversionedId:"api-reference/hooks/use-refetchable-fragment",id:"version-v11.0.0/api-reference/hooks/use-refetchable-fragment",isDocsHomePage:!1,title:"useRefetchableFragment",description:"useRefetchableFragment",source:"@site/versioned_docs/version-v11.0.0/api-reference/hooks/use-refetchable-fragment.md",slug:"/api-reference/use-refetchable-fragment/",permalink:"/docs/api-reference/use-refetchable-fragment/",editUrl:"https://github.com/facebook/relay/edit/master/website-v2/versioned_docs/version-v11.0.0/api-reference/hooks/use-refetchable-fragment.md",version:"v11.0.0",lastUpdatedBy:"Lauren Tan",lastUpdatedAt:1615417095,sidebar:"version-v11.0.0/docs",previous:{title:"useFragment",permalink:"/docs/api-reference/use-fragment/"},next:{title:"usePaginationFragment",permalink:"/docs/api-reference/use-pagination-fragment/"}},s=[{value:"<code>useRefetchableFragment</code>",id:"userefetchablefragment",children:[{value:"Arguments",id:"arguments",children:[]},{value:"Flow Type Parameters",id:"flow-type-parameters",children:[]},{value:"Return Value",id:"return-value",children:[]},{value:"Behavior",id:"behavior",children:[]},{value:"Differences with <code>RefetchContainer</code>",id:"differences-with-refetchcontainer",children:[]}]}],b=function(e){return function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),Object(i.b)("div",t)}},d=b("FbUseRefetchableFragmentApiReferenceCodeExample"),f=b("FbUseRefetchableFragmentReturnValue"),m={toc:s};function p(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(a.a)({},m,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("h2",{id:"userefetchablefragment"},Object(i.b)("inlineCode",{parentName:"h2"},"useRefetchableFragment")),Object(i.b)("p",null,"You can use ",Object(i.b)("inlineCode",{parentName:"p"},"useRefetchableFragment")," when you want to fetch and re-render a fragment with different data:"),Object(i.b)(l.FbInternalOnly,{mdxType:"FbInternalOnly"},Object(i.b)(d,{mdxType:"FbUseRefetchableFragmentApiReferenceCodeExample"})),Object(i.b)(l.OssOnly,{mdxType:"OssOnly"},Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"import type {CommentBodyRefetchQuery} from 'CommentBodyRefetchQuery.graphql';\nimport type {CommentBody_comment$key} from 'CommentBody_comment.graphql';\n\nconst React = require('React');\n\nconst {graphql, useRefetchableFragment} = require('react-relay');\n\n\ntype Props = {|\n  comment: CommentBody_comment$key,\n|};\n\nfunction CommentBody(props: Props) {\n  const [data, refetch] = useRefetchableFragment<CommentBodyRefetchQuery, _>(\n    graphql`\n      fragment CommentBody_comment on Comment\n      @refetchable(queryName: \"CommentBodyRefetchQuery\") {\n        body(lang: $lang) {\n          text\n        }\n      }\n    `,\n    props.comment,\n  );\n\n  return (\n    <>\n      <p>{data.body?.text}</p>\n      <Button\n        onClick={() => {\n          refetch({lang: 'SPANISH'}, {fetchPolicy: 'store-or-network'})\n        }}\n      >\n        Translate Comment\n      </Button>\n    </>\n  );\n}\n\nmodule.exports = CommentBody;\n"))),Object(i.b)("h3",{id:"arguments"},"Arguments"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"fragment"),": GraphQL fragment specified using a ",Object(i.b)("inlineCode",{parentName:"li"},"graphql")," template literal. This fragment must have a ",Object(i.b)("inlineCode",{parentName:"li"},"@refetchable")," directive, otherwise using it will throw an error. The ",Object(i.b)("inlineCode",{parentName:"li"},"@refetchable"),' directive can only be added to fragments that are "refetchable", that is, on fragments that are declared on ',Object(i.b)("inlineCode",{parentName:"li"},"Viewer")," or  ",Object(i.b)("inlineCode",{parentName:"li"},"Query")," types, or on a type that implements ",Object(i.b)("inlineCode",{parentName:"li"},"Node")," (i.e. a type that has an ",Object(i.b)("inlineCode",{parentName:"li"},"id"),").",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"Note that you ",Object(i.b)("em",{parentName:"li"},"do not")," need to manually specify a refetch query yourself. The ",Object(i.b)("inlineCode",{parentName:"li"},"@refetchable")," directive will autogenerate a query with the specified ",Object(i.b)("inlineCode",{parentName:"li"},"queryName"),". This will also generate Flow types for the query, available to import from the generated file: ",Object(i.b)("inlineCode",{parentName:"li"},"<queryName>.graphql.js"),"."))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"fragmentReference"),": The ",Object(i.b)("em",{parentName:"li"},"fragment reference")," is an opaque Relay object that Relay uses to read the data for the fragment from the store; more specifically, it contains information about which particular object instance the data should be read from.",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"The type of the fragment reference can be imported from the generated Flow types, from the file ",Object(i.b)("inlineCode",{parentName:"li"},"<fragment_name>.graphql.js"),", and can be used to declare the type of your ",Object(i.b)("inlineCode",{parentName:"li"},"Props"),". The name of the fragment reference type will be: ",Object(i.b)("inlineCode",{parentName:"li"},"<fragment_name>$key"),". We use our ",Object(i.b)("a",Object(a.a)({parentName:"li"},{href:"https://github.com/relayjs/eslint-plugin-relay"}),"lint rule")," to enforce that the type of the fragment reference prop is correctly declared.")))),Object(i.b)("h3",{id:"flow-type-parameters"},"Flow Type Parameters"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"TQuery"),": Type parameter that should corresponds the Flow type for the ",Object(i.b)("inlineCode",{parentName:"li"},"@refetchable")," query. This type is available to import from the the auto-generated file: ",Object(i.b)("inlineCode",{parentName:"li"},"<queryName>.graphql.js"),"."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"TFragmentRef"),": Type parameter corresponds to the type of the fragment reference argument (i.e. ",Object(i.b)("inlineCode",{parentName:"li"},"<fragment_name>$key"),"). This type usually does not need to be explicitly specified, and can be passed as ",Object(i.b)("inlineCode",{parentName:"li"},"_")," to let Flow infer the concrete type.")),Object(i.b)("h3",{id:"return-value"},"Return Value"),Object(i.b)(l.FbInternalOnly,{mdxType:"FbInternalOnly"},Object(i.b)(f,{mdxType:"FbUseRefetchableFragmentReturnValue"})),Object(i.b)(l.OssOnly,{mdxType:"OssOnly"},Object(i.b)("p",null,"Tuple containing the following values"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"[0]"," ",Object(i.b)("inlineCode",{parentName:"li"},"data"),": Object that contains data which has been read out from the Relay store; the object matches the shape of specified fragment.",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"The Flow type for data will also match this shape, and contain types derived from the GraphQL Schema."))),Object(i.b)("li",{parentName:"ul"},"[1]"," ",Object(i.b)("inlineCode",{parentName:"li"},"refetch"),": Function used to refetch the fragment with a potentially new set of variables.",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"Arguments:",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"variables"),": Object containing the new set of variable values to be used to fetch the ",Object(i.b)("inlineCode",{parentName:"li"},"@refetchable")," query.",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"These variables need to match GraphQL variables referenced inside the fragment."),Object(i.b)("li",{parentName:"ul"},"However, only the variables that are intended to change for the refetch request need to be specified; any variables referenced by the fragment that are omitted from this input will fall back to using the value specified in the original parent query. So for example, to refetch the fragment with the exact same variables as it was originally fetched, you can call ",Object(i.b)("inlineCode",{parentName:"li"},"refetch({})"),"."),Object(i.b)("li",{parentName:"ul"},"Similarly, passing an ",Object(i.b)("inlineCode",{parentName:"li"},"id")," value for the ",Object(i.b)("inlineCode",{parentName:"li"},"$id")," variable is ",Object(i.b)("em",{parentName:"li"},Object(i.b)("em",{parentName:"em"},"optional")),", unless the fragment wants to be refetched with a different ",Object(i.b)("inlineCode",{parentName:"li"},"id"),". When refetching a ",Object(i.b)("inlineCode",{parentName:"li"},"@refetchable")," fragment, Relay will already know the id of the rendered object."))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"options"),": ",Object(i.b)("em",{parentName:"li"},Object(i.b)("em",{parentName:"em"},"[Optional]"))," options object",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"fetchPolicy"),": Determines if cached data should be used, and when to send a network request based on cached data that is available. See the ",Object(i.b)("a",Object(a.a)({parentName:"li"},{href:"../../guided-tour/reusing-cached-data/fetch-policies/"}),"Fetch Policies")," section for full specification."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"onComplete"),": Function that will be called whenever the refetch request has completed, including any incremental data payloads."))))),Object(i.b)("li",{parentName:"ul"},"Return value:",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"disposable"),": Object containing a ",Object(i.b)("inlineCode",{parentName:"li"},"dispose")," function. Calling ",Object(i.b)("inlineCode",{parentName:"li"},"disposable.dispose()")," will cancel the refetch request."))),Object(i.b)("li",{parentName:"ul"},"Behavior:",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"Calling ",Object(i.b)("inlineCode",{parentName:"li"},"refetch")," with a new set of variables will fetch the fragment again ",Object(i.b)("em",{parentName:"li"},"with the newly provided variables"),". Note that the variables you need to provide are only the ones referenced inside the fragment. In this example, it means fetching the translated body of the currently rendered Comment, by passing a new value to the ",Object(i.b)("inlineCode",{parentName:"li"},"lang")," variable."),Object(i.b)("li",{parentName:"ul"},"Calling ",Object(i.b)("inlineCode",{parentName:"li"},"refetch")," will re-render your component and may cause it to ",Object(i.b)("em",{parentName:"li"},Object(i.b)("em",{parentName:"em"},Object(i.b)("a",Object(a.a)({parentName:"em"},{href:"../../guided-tour/rendering/loading-states"}),"suspend"))),", depending on the specified ",Object(i.b)("inlineCode",{parentName:"li"},"fetchPolicy")," and whether cached data is available or if it needs to send and wait for a network request. If refetch causes the component to suspend, you'll need to make sure that there's a ",Object(i.b)("inlineCode",{parentName:"li"},"Suspense")," boundary wrapping this component."),Object(i.b)("li",{parentName:"ul"},"For more details on Suspense, see our ",Object(i.b)("a",Object(a.a)({parentName:"li"},{href:"../../guided-tour/rendering/loading-states/"}),"Loading States with Suspense")," guide."))))))),Object(i.b)("h3",{id:"behavior"},"Behavior"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"The component is automatically subscribed to updates to the fragment data: if the data for this particular ",Object(i.b)("inlineCode",{parentName:"li"},"User")," is updated anywhere in the app (e.g. via fetching new data, or mutating existing data), the component will automatically re-render with the latest updated data."),Object(i.b)("li",{parentName:"ul"},"The component will suspend if any data for that specific fragment is missing, and the data is currently being fetched by a parent query.",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"For more details on Suspense, see our ",Object(i.b)("a",Object(a.a)({parentName:"li"},{href:"../../guided-tour/rendering/loading-states/"}),"Loading States with Suspense")," guide.")))),Object(i.b)("h3",{id:"differences-with-refetchcontainer"},"Differences with ",Object(i.b)("inlineCode",{parentName:"h3"},"RefetchContainer")),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"A refetch query no longer needs to be specified in this api, since it will be automatically generated by Relay by using a ",Object(i.b)("inlineCode",{parentName:"li"},"@refetchable")," fragment."),Object(i.b)("li",{parentName:"ul"},"Refetching no longer has a distinction between ",Object(i.b)("inlineCode",{parentName:"li"},"refetchVariables")," and ",Object(i.b)("inlineCode",{parentName:"li"},"renderVariables"),", which were previously vaguely defined concepts. Refetching will always correctly refetch and render the fragment with the variables you provide (any variables omitted in the input will fallback to using the original values from the parent query)."),Object(i.b)("li",{parentName:"ul"},"Refetching will unequivocally update the component, which was not always true when calling refetch from ",Object(i.b)("inlineCode",{parentName:"li"},"RefetchContainer")," (it would depend on what you were querying for in the refetch query and if your fragment was defined on the right object type).")),Object(i.b)(o.a,{mdxType:"DocsRating"}))}p.isMDXComponent=!0},319:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return m}));var a=n(0),r=n.n(a);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var u=r.a.createContext({}),s=function(e){var t=r.a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},b=function(e){var t=s(e.components);return r.a.createElement(u.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},f=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,o=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),b=s(n),f=a,m=b["".concat(o,".").concat(f)]||b[f]||d[f]||i;return n?r.a.createElement(m,l(l({ref:t},u),{},{components:n})):r.a.createElement(m,l({ref:t},u))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=f;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var u=2;u<i;u++)o[u]=n[u];return r.a.createElement.apply(null,o)}return r.a.createElement.apply(null,n)}f.displayName="MDXCreateElement"},320:function(e,t,n){"use strict";(function(e){var a=this&&this.__createBinding||(Object.create?function(e,t,n,a){void 0===a&&(a=n),Object.defineProperty(e,a,{enumerable:!0,get:function(){return t[n]}})}:function(e,t,n,a){void 0===a&&(a=n),e[a]=t[n]}),r=this&&this.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),i=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)"default"!==n&&Object.prototype.hasOwnProperty.call(e,n)&&a(t,e,n);return r(t,e),t};Object.defineProperty(t,"__esModule",{value:!0}),t.OssOnly=t.FbInternalOnly=t.isInternal=t.validateFbContentArgs=t.fbInternalOnly=t.fbContent=t.bloks=void 0,t.bloks=i(n(323));const o=["internal","external"];let l;try{l=n(321).usePluginData}catch(d){l=null}function c(e){return s(e),b()?"internal"in e?u(e.internal):[]:"external"in e?u(e.external):[]}function u(e){return"function"==typeof e?e():e}function s(e){if("object"!=typeof e)throw new Error(`fbContent() args must be an object containing keys: ${o}. Instead got ${e}`);if(!Object.keys(e).find((e=>o.find((t=>t===e)))))throw new Error(`No valid args found in ${JSON.stringify(e)}. Accepted keys: ${o}`);const t=Object.keys(e).filter((e=>!o.find((t=>t===e))));if(t.length>0)throw new Error(`Unexpected keys ${t} found in fbContent() args. Accepted keys: ${o}`)}function b(){return e.env.FB_INTERNAL||l&&l("internaldocs-fb").FB_INTERNAL}t.fbContent=c,t.fbInternalOnly=function(e){return c({internal:e})},t.validateFbContentArgs=s,t.isInternal=b,t.FbInternalOnly=function(e){return b()?e.children:null},t.OssOnly=function(e){return b()?null:e.children}}).call(this,n(322))},321:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return r})),n.d(t,"useAllPluginInstancesData",(function(){return i})),n.d(t,"usePluginData",(function(){return o}));var a=n(22);function r(){var e=Object(a.default)().globalData;if(!e)throw new Error("Docusaurus global data not found");return e}function i(e){var t=r()[e];if(!t)throw new Error("Docusaurus plugin global data not found for pluginName="+e);return t}function o(e,t){void 0===t&&(t="default");var n=i(e)[t];if(!n)throw new Error("Docusaurus plugin global data not found for pluginName="+e+" and pluginId="+t);return n}},322:function(e,t){var n,a,r=e.exports={};function i(){throw new Error("setTimeout has not been defined")}function o(){throw new Error("clearTimeout has not been defined")}function l(e){if(n===setTimeout)return setTimeout(e,0);if((n===i||!n)&&setTimeout)return n=setTimeout,setTimeout(e,0);try{return n(e,0)}catch(t){try{return n.call(null,e,0)}catch(t){return n.call(this,e,0)}}}!function(){try{n="function"==typeof setTimeout?setTimeout:i}catch(e){n=i}try{a="function"==typeof clearTimeout?clearTimeout:o}catch(e){a=o}}();var c,u=[],s=!1,b=-1;function d(){s&&c&&(s=!1,c.length?u=c.concat(u):b=-1,u.length&&f())}function f(){if(!s){var e=l(d);s=!0;for(var t=u.length;t;){for(c=u,u=[];++b<t;)c&&c[b].run();b=-1,t=u.length}c=null,s=!1,function(e){if(a===clearTimeout)return clearTimeout(e);if((a===o||!a)&&clearTimeout)return a=clearTimeout,clearTimeout(e);try{a(e)}catch(t){try{return a.call(null,e)}catch(t){return a.call(this,e)}}}(e)}}function m(e,t){this.fun=e,this.array=t}function p(){}r.nextTick=function(e){var t=new Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)t[n-1]=arguments[n];u.push(new m(e,t)),1!==u.length||s||l(f)},m.prototype.run=function(){this.fun.apply(null,this.array)},r.title="browser",r.browser=!0,r.env={},r.argv=[],r.version="",r.versions={},r.on=p,r.addListener=p,r.once=p,r.off=p,r.removeListener=p,r.removeAllListeners=p,r.emit=p,r.prependListener=p,r.prependOnceListener=p,r.listeners=function(e){return[]},r.binding=function(e){throw new Error("process.binding is not supported")},r.cwd=function(){return"/"},r.chdir=function(e){throw new Error("process.chdir is not supported")},r.umask=function(){return 0}},323:function(e,t,n){"use strict";var a=this&&this.__awaiter||function(e,t,n,a){return new(n||(n=Promise))((function(r,i){function o(e){try{c(a.next(e))}catch(t){i(t)}}function l(e){try{c(a.throw(e))}catch(t){i(t)}}function c(e){var t;e.done?r(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(o,l)}c((a=a.apply(e,t||[])).next())}))};Object.defineProperty(t,"__esModule",{value:!0}),t.getSpecInfo=void 0;const r=n(324);t.getSpecInfo=function(e){return a(this,void 0,void 0,(function*(){return yield r.call({module:"bloks",api:"getSpecInfo",args:{styleId:e}})}))}},324:function(e,t,n){"use strict";var a=this&&this.__awaiter||function(e,t,n,a){return new(n||(n=Promise))((function(r,i){function o(e){try{c(a.next(e))}catch(t){i(t)}}function l(e){try{c(a.throw(e))}catch(t){i(t)}}function c(e){var t;e.done?r(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(o,l)}c((a=a.apply(e,t||[])).next())}))};Object.defineProperty(t,"__esModule",{value:!0}),t.call=void 0;let r=!1,i=0;const o={};t.call=function(e){return a(this,void 0,void 0,(function*(){if("staticdocs.thefacebook.com"!==window.location.hostname&&"localhost"!==window.location.hostname)return Promise.reject(new Error("Not running on static docs"));r||(r=!0,window.addEventListener("message",(e=>{if("static-docs-bridge-response"!==e.data.event)return;const t=e.data.id;t in o||console.error(`Recieved response for id: ${t} with no matching receiver`),"response"in e.data?o[t].resolve(e.data.response):o[t].reject(new Error(e.data.error)),delete o[t]})));const t=i++,n=new Promise(((e,n)=>{o[t]={resolve:e,reject:n}})),a={event:"static-docs-bridge-call",id:t,module:e.module,api:e.api,args:e.args},l="localhost"===window.location.hostname?"*":"https://www.internalfb.com";return window.parent.postMessage(a,l),n}))}},325:function(e,t,n){"use strict";n(60);var a=n(320),r=n(0);var i=function(){var e=r.useState(!1),t=e[0],n=e[1],a=function(e){n(!0),function(e){window.ga&&window.ga("send",{hitType:"event",eventCategory:"button",eventAction:"feedback",eventValue:e})}(e)};return t?r.createElement("div",{className:"docsRating",id:"docsRating"},r.createElement("hr",null),"Thank you for letting us know!"):r.createElement("div",{className:"docsRating",id:"docsRating"},r.createElement("hr",null),"Is this page useful?",r.createElement("svg",{className:"i_thumbsup",alt:"Like",id:"docsRating-like",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 81.13 89.76",onClick:function(){return a(1)}},r.createElement("path",{d:"M22.9 6a18.57 18.57 0 002.67 8.4 25.72 25.72 0 008.65 7.66c3.86 2 8.67 7.13 13.51 11 3.86 3.11 8.57 7.11 11.54 8.45s13.59.26 14.64 1.17c1.88 1.63 1.55 9-.11 15.25-1.61 5.86-5.96 10.55-6.48 16.86-.4 4.83-2.7 4.88-10.93 4.88h-1.35c-3.82 0-8.24 2.93-12.92 3.62a68 68 0 01-9.73.5c-3.57 0-7.86-.08-13.25-.08-3.56 0-4.71-1.83-4.71-4.48h8.42a3.51 3.51 0 000-7H12.28a2.89 2.89 0 01-2.88-2.88 1.91 1.91 0 01.77-1.78h16.46a3.51 3.51 0 000-7H12.29c-3.21 0-4.84-1.83-4.84-4a6.41 6.41 0 011.17-3.78h19.06a3.5 3.5 0 100-7H9.75A3.51 3.51 0 016 42.27a3.45 3.45 0 013.75-3.48h13.11c5.61 0 7.71-3 5.71-5.52-4.43-4.74-10.84-12.62-11-18.71-.15-6.51 2.6-7.83 5.36-8.56m0-6a6.18 6.18 0 00-1.53.2c-6.69 1.77-10 6.65-9.82 14.5.08 5.09 2.99 11.18 8.52 18.09H9.74a9.52 9.52 0 00-6.23 16.9 12.52 12.52 0 00-2.07 6.84 9.64 9.64 0 003.65 7.7 7.85 7.85 0 00-1.7 5.13 8.9 8.9 0 005.3 8.13 6 6 0 00-.26 1.76c0 6.37 4.2 10.48 10.71 10.48h13.25a73.75 73.75 0 0010.6-.56 35.89 35.89 0 007.58-2.18 17.83 17.83 0 014.48-1.34h1.35c4.69 0 7.79 0 10.5-1 3.85-1.44 6-4.59 6.41-9.38.2-2.46 1.42-4.85 2.84-7.62a41.3 41.3 0 003.42-8.13 48 48 0 001.59-10.79c.1-5.13-1-8.48-3.35-10.55-2.16-1.87-4.64-1.87-9.6-1.88a46.86 46.86 0 01-6.64-.29c-1.92-.94-5.72-4-8.51-6.3l-1.58-1.28c-1.6-1.3-3.27-2.79-4.87-4.23-3.33-3-6.47-5.79-9.61-7.45a20.2 20.2 0 01-6.43-5.53 12.44 12.44 0 01-1.72-5.36 6 6 0 00-6-5.86z"})),r.createElement("svg",{className:"i_thumbsdown",alt:"Dislike",id:"docsRating-dislike",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 81.13 89.76",onClick:function(){return a(0)}},r.createElement("path",{d:"M22.9 6a18.57 18.57 0 002.67 8.4 25.72 25.72 0 008.65 7.66c3.86 2 8.67 7.13 13.51 11 3.86 3.11 8.57 7.11 11.54 8.45s13.59.26 14.64 1.17c1.88 1.63 1.55 9-.11 15.25-1.61 5.86-5.96 10.55-6.48 16.86-.4 4.83-2.7 4.88-10.93 4.88h-1.35c-3.82 0-8.24 2.93-12.92 3.62a68 68 0 01-9.73.5c-3.57 0-7.86-.08-13.25-.08-3.56 0-4.71-1.83-4.71-4.48h8.42a3.51 3.51 0 000-7H12.28a2.89 2.89 0 01-2.88-2.88 1.91 1.91 0 01.77-1.78h16.46a3.51 3.51 0 000-7H12.29c-3.21 0-4.84-1.83-4.84-4a6.41 6.41 0 011.17-3.78h19.06a3.5 3.5 0 100-7H9.75A3.51 3.51 0 016 42.27a3.45 3.45 0 013.75-3.48h13.11c5.61 0 7.71-3 5.71-5.52-4.43-4.74-10.84-12.62-11-18.71-.15-6.51 2.6-7.83 5.36-8.56m0-6a6.18 6.18 0 00-1.53.2c-6.69 1.77-10 6.65-9.82 14.5.08 5.09 2.99 11.18 8.52 18.09H9.74a9.52 9.52 0 00-6.23 16.9 12.52 12.52 0 00-2.07 6.84 9.64 9.64 0 003.65 7.7 7.85 7.85 0 00-1.7 5.13 8.9 8.9 0 005.3 8.13 6 6 0 00-.26 1.76c0 6.37 4.2 10.48 10.71 10.48h13.25a73.75 73.75 0 0010.6-.56 35.89 35.89 0 007.58-2.18 17.83 17.83 0 014.48-1.34h1.35c4.69 0 7.79 0 10.5-1 3.85-1.44 6-4.59 6.41-9.38.2-2.46 1.42-4.85 2.84-7.62a41.3 41.3 0 003.42-8.13 48 48 0 001.59-10.79c.1-5.13-1-8.48-3.35-10.55-2.16-1.87-4.64-1.87-9.6-1.88a46.86 46.86 0 01-6.64-.29c-1.92-.94-5.72-4-8.51-6.3l-1.58-1.28c-1.6-1.3-3.27-2.79-4.87-4.23-3.33-3-6.47-5.79-9.61-7.45a20.2 20.2 0 01-6.43-5.53 12.44 12.44 0 01-1.72-5.36 6 6 0 00-6-5.86z"})))},o=function(){return null};t.a=function(){return Object(a.fbContent)({internal:r.createElement(o,null),external:r.createElement(i,null)})}}}]);