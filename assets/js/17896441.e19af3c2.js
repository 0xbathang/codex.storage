(self.webpackChunklogos_documentation_website_template=self.webpackChunklogos_documentation_website_template||[]).push([[918],{3905:(e,t,n)=>{"use strict";n.d(t,{Zo:()=>d,kt:()=>p});var a=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=a.createContext({}),i=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},d=function(e){var t=i(e.components);return a.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,l=e.originalType,s=e.parentName,d=c(e,["components","mdxType","originalType","parentName"]),u=i(n),p=o,f=u["".concat(s,".").concat(p)]||u[p]||m[p]||l;return n?a.createElement(f,r(r({ref:t},d),{},{components:n})):a.createElement(f,r({ref:t},d))}));function p(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var l=n.length,r=new Array(l);r[0]=u;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:o,r[1]=c;for(var i=2;i<l;i++)r[i]=n[i];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},5254:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>Ot});var a=n(7294),o=n(1944),l=n(902);const r=a.createContext(null);function c(e){let{children:t,content:n}=e;const o=function(e){return(0,a.useMemo)((()=>({metadata:e.metadata,frontMatter:e.frontMatter,assets:e.assets,contentTitle:e.contentTitle,toc:e.toc})),[e])}(n);return a.createElement(r.Provider,{value:o},t)}function s(){const e=(0,a.useContext)(r);if(null===e)throw new l.i6("DocProvider");return e}function i(){const{metadata:e,frontMatter:t,assets:n}=s();return a.createElement(o.d,{title:e.title,description:e.description,keywords:t.keywords,image:n.image??t.image})}var d=n(7524),m=n(6010),u=n(5281),p=n(7462),f=n(5999),h=n(6668);const g="anchorWithStickyNavbar_LWe7",v="anchorWithHideOnScrollNavbar_WYt5";function b(e){let{as:t,id:n,...o}=e;const{navbar:{hideOnScroll:l}}=(0,h.L)();return"h1"!==t&&n?a.createElement(t,(0,p.Z)({},o,{className:(0,m.Z)("anchor",l?v:g),id:n}),o.children,a.createElement("a",{className:"hash-link",href:`#${n}`,title:(0,f.I)({id:"theme.common.headingLinkTitle",message:"Direct link to heading",description:"Title for link to heading"})},"\u200b")):a.createElement(t,(0,p.Z)({},o,{id:void 0}))}var E=n(3905),y=n(5742);var k=n(2389),N=n(2949);function L(){const{prism:e}=(0,h.L)(),{colorMode:t}=(0,N.I)(),n=e.theme,a=e.darkTheme||n;return"dark"===t?a:n}var C=n(7594),_=n.n(C);const T=/title=(?<quote>["'])(?<title>.*?)\1/,w=/\{(?<range>[\d,-]+)\}/,Z={js:{start:"\\/\\/",end:""},jsBlock:{start:"\\/\\*",end:"\\*\\/"},jsx:{start:"\\{\\s*\\/\\*",end:"\\*\\/\\s*\\}"},bash:{start:"#",end:""},html:{start:"\x3c!--",end:"--\x3e"}};function x(e,t){const n=e.map((e=>{const{start:n,end:a}=Z[e];return`(?:${n}\\s*(${t.flatMap((e=>{var t,n;return[e.line,null==(t=e.block)?void 0:t.start,null==(n=e.block)?void 0:n.end].filter(Boolean)})).join("|")})\\s*${a})`})).join("|");return new RegExp(`^\\s*(?:${n})\\s*$`)}function B(e,t){let n=e.replace(/\n$/,"");const{language:a,magicComments:o,metastring:l}=t;if(l&&w.test(l)){const e=l.match(w).groups.range;if(0===o.length)throw new Error(`A highlight range has been given in code block's metastring (\`\`\` ${l}), but no magic comment config is available. Docusaurus applies the first magic comment entry's className for metastring ranges.`);const t=o[0].className,a=_()(e).filter((e=>e>0)).map((e=>[e-1,[t]]));return{lineClassNames:Object.fromEntries(a),code:n}}if(void 0===a)return{lineClassNames:{},code:n};const r=function(e,t){switch(e){case"js":case"javascript":case"ts":case"typescript":return x(["js","jsBlock"],t);case"jsx":case"tsx":return x(["js","jsBlock","jsx"],t);case"html":return x(["js","jsBlock","html"],t);case"python":case"py":case"bash":return x(["bash"],t);case"markdown":case"md":return x(["html","jsx","bash"],t);default:return x(Object.keys(Z),t)}}(a,o),c=n.split("\n"),s=Object.fromEntries(o.map((e=>[e.className,{start:0,range:""}]))),i=Object.fromEntries(o.filter((e=>e.line)).map((e=>{let{className:t,line:n}=e;return[n,t]}))),d=Object.fromEntries(o.filter((e=>e.block)).map((e=>{let{className:t,block:n}=e;return[n.start,t]}))),m=Object.fromEntries(o.filter((e=>e.block)).map((e=>{let{className:t,block:n}=e;return[n.end,t]})));for(let p=0;p<c.length;){const e=c[p].match(r);if(!e){p+=1;continue}const t=e.slice(1).find((e=>void 0!==e));i[t]?s[i[t]].range+=`${p},`:d[t]?s[d[t]].start=p:m[t]&&(s[m[t]].range+=`${s[m[t]].start}-${p-1},`),c.splice(p,1)}n=c.join("\n");const u={};return Object.entries(s).forEach((e=>{let[t,{range:n}]=e;_()(n).forEach((e=>{u[e]??=[],u[e].push(t)}))})),{lineClassNames:u,code:n}}const O="codeBlockContainer_Ckt0";function j(e){let{as:t,...n}=e;const o=function(e){const t={color:"--prism-color",backgroundColor:"--prism-background-color"},n={};return Object.entries(e.plain).forEach((e=>{let[a,o]=e;const l=t[a];l&&"string"==typeof o&&(n[l]=o)})),n}(L());return a.createElement(t,(0,p.Z)({},n,{style:o,className:(0,m.Z)(n.className,O,u.k.common.codeBlock)}))}const A={codeBlockContent:"codeBlockContent_biex",codeBlockTitle:"codeBlockTitle_Ktv7",codeBlock:"codeBlock_bY9V",codeBlockStandalone:"codeBlockStandalone_MEMb",codeBlockLines:"codeBlockLines_e6Vv",codeBlockLinesWithNumbering:"codeBlockLinesWithNumbering_o6Pm",buttonGroup:"buttonGroup__atx"};function H(e){let{children:t,className:n}=e;return a.createElement(j,{as:"pre",tabIndex:0,className:(0,m.Z)(A.codeBlockStandalone,"thin-scrollbar",n)},a.createElement("code",{className:A.codeBlockLines},t))}const S={attributes:!0,characterData:!0,childList:!0,subtree:!0};function M(e,t){const[n,o]=(0,a.useState)(),r=(0,a.useCallback)((()=>{var t;o(null==(t=e.current)?void 0:t.closest("[role=tabpanel][hidden]"))}),[e,o]);(0,a.useEffect)((()=>{r()}),[r]),function(e,t,n){void 0===n&&(n=S);const o=(0,l.zX)(t),r=(0,l.Ql)(n);(0,a.useEffect)((()=>{const t=new MutationObserver(o);return e&&t.observe(e,r),()=>t.disconnect()}),[e,o,r])}(n,(e=>{e.forEach((e=>{"attributes"===e.type&&"hidden"===e.attributeName&&(t(),r())}))}),{attributes:!0,characterData:!1,childList:!1,subtree:!1})}const P={plain:{backgroundColor:"#2a2734",color:"#9a86fd"},styles:[{types:["comment","prolog","doctype","cdata","punctuation"],style:{color:"#6c6783"}},{types:["namespace"],style:{opacity:.7}},{types:["tag","operator","number"],style:{color:"#e09142"}},{types:["property","function"],style:{color:"#9a86fd"}},{types:["tag-id","selector","atrule-id"],style:{color:"#eeebff"}},{types:["attr-name"],style:{color:"#c4b9fe"}},{types:["boolean","string","entity","url","attr-value","keyword","control","directive","unit","statement","regex","atrule","placeholder","variable"],style:{color:"#ffcc99"}},{types:["deleted"],style:{textDecorationLine:"line-through"}},{types:["inserted"],style:{textDecorationLine:"underline"}},{types:["italic"],style:{fontStyle:"italic"}},{types:["important","bold"],style:{fontWeight:"bold"}},{types:["important"],style:{color:"#c4b9fe"}}]};var U={Prism:n(7410).Z,theme:P};function I(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function z(){return z=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},z.apply(this,arguments)}var D=/\r\n|\r|\n/,V=function(e){0===e.length?e.push({types:["plain"],content:"\n",empty:!0}):1===e.length&&""===e[0].content&&(e[0].content="\n",e[0].empty=!0)},R=function(e,t){var n=e.length;return n>0&&e[n-1]===t?e:e.concat(t)},$=function(e,t){var n=e.plain,a=Object.create(null),o=e.styles.reduce((function(e,n){var a=n.languages,o=n.style;return a&&!a.includes(t)||n.types.forEach((function(t){var n=z({},e[t],o);e[t]=n})),e}),a);return o.root=n,o.plain=z({},n,{backgroundColor:null}),o};function W(e,t){var n={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&-1===t.indexOf(a)&&(n[a]=e[a]);return n}const F=function(e){function t(){for(var t=this,n=[],a=arguments.length;a--;)n[a]=arguments[a];e.apply(this,n),I(this,"getThemeDict",(function(e){if(void 0!==t.themeDict&&e.theme===t.prevTheme&&e.language===t.prevLanguage)return t.themeDict;t.prevTheme=e.theme,t.prevLanguage=e.language;var n=e.theme?$(e.theme,e.language):void 0;return t.themeDict=n})),I(this,"getLineProps",(function(e){var n=e.key,a=e.className,o=e.style,l=z({},W(e,["key","className","style","line"]),{className:"token-line",style:void 0,key:void 0}),r=t.getThemeDict(t.props);return void 0!==r&&(l.style=r.plain),void 0!==o&&(l.style=void 0!==l.style?z({},l.style,o):o),void 0!==n&&(l.key=n),a&&(l.className+=" "+a),l})),I(this,"getStyleForToken",(function(e){var n=e.types,a=e.empty,o=n.length,l=t.getThemeDict(t.props);if(void 0!==l){if(1===o&&"plain"===n[0])return a?{display:"inline-block"}:void 0;if(1===o&&!a)return l[n[0]];var r=a?{display:"inline-block"}:{},c=n.map((function(e){return l[e]}));return Object.assign.apply(Object,[r].concat(c))}})),I(this,"getTokenProps",(function(e){var n=e.key,a=e.className,o=e.style,l=e.token,r=z({},W(e,["key","className","style","token"]),{className:"token "+l.types.join(" "),children:l.content,style:t.getStyleForToken(l),key:void 0});return void 0!==o&&(r.style=void 0!==r.style?z({},r.style,o):o),void 0!==n&&(r.key=n),a&&(r.className+=" "+a),r})),I(this,"tokenize",(function(e,t,n,a){var o={code:t,grammar:n,language:a,tokens:[]};e.hooks.run("before-tokenize",o);var l=o.tokens=e.tokenize(o.code,o.grammar,o.language);return e.hooks.run("after-tokenize",o),l}))}return e&&(t.__proto__=e),t.prototype=Object.create(e&&e.prototype),t.prototype.constructor=t,t.prototype.render=function(){var e=this.props,t=e.Prism,n=e.language,a=e.code,o=e.children,l=this.getThemeDict(this.props),r=t.languages[n];return o({tokens:function(e){for(var t=[[]],n=[e],a=[0],o=[e.length],l=0,r=0,c=[],s=[c];r>-1;){for(;(l=a[r]++)<o[r];){var i=void 0,d=t[r],m=n[r][l];if("string"==typeof m?(d=r>0?d:["plain"],i=m):(d=R(d,m.type),m.alias&&(d=R(d,m.alias)),i=m.content),"string"==typeof i){var u=i.split(D),p=u.length;c.push({types:d,content:u[0]});for(var f=1;f<p;f++)V(c),s.push(c=[]),c.push({types:d,content:u[f]})}else r++,t.push(d),n.push(i),a.push(0),o.push(i.length)}r--,t.pop(),n.pop(),a.pop(),o.pop()}return V(c),s}(void 0!==r?this.tokenize(t,a,r,n):[a]),className:"prism-code language-"+n,style:void 0!==l?l.root:{},getLineProps:this.getLineProps,getTokenProps:this.getTokenProps})},t}(a.Component),q="codeLine_lJS_",G="codeLineNumber_Tfdd",Q="codeLineContent_feaV";function J(e){let{line:t,classNames:n,showLineNumbers:o,getLineProps:l,getTokenProps:r}=e;1===t.length&&"\n"===t[0].content&&(t[0].content="");const c=l({line:t,className:(0,m.Z)(n,o&&q)}),s=t.map(((e,t)=>a.createElement("span",(0,p.Z)({key:t},r({token:e,key:t})))));return a.createElement("span",c,o?a.createElement(a.Fragment,null,a.createElement("span",{className:G}),a.createElement("span",{className:Q},s)):a.createElement(a.Fragment,null,s,a.createElement("br",null)))}const X={copyButtonCopied:"copyButtonCopied_obH4",copyButtonIcons:"copyButtonIcons_eSgA",copyButtonIcon:"copyButtonIcon_y97N",copyButtonSuccessIcon:"copyButtonSuccessIcon_LjdS"};function Y(e){let{code:t,className:n}=e;const[o,l]=(0,a.useState)(!1),r=(0,a.useRef)(void 0),c=(0,a.useCallback)((()=>{!function(e,t){let{target:n=document.body}=void 0===t?{}:t;const a=document.createElement("textarea"),o=document.activeElement;a.value=e,a.setAttribute("readonly",""),a.style.contain="strict",a.style.position="absolute",a.style.left="-9999px",a.style.fontSize="12pt";const l=document.getSelection();let r=!1;l.rangeCount>0&&(r=l.getRangeAt(0)),n.append(a),a.select(),a.selectionStart=0,a.selectionEnd=e.length;let c=!1;try{c=document.execCommand("copy")}catch{}a.remove(),r&&(l.removeAllRanges(),l.addRange(r)),o&&o.focus()}(t),l(!0),r.current=window.setTimeout((()=>{l(!1)}),1e3)}),[t]);return(0,a.useEffect)((()=>()=>window.clearTimeout(r.current)),[]),a.createElement("button",{type:"button","aria-label":o?(0,f.I)({id:"theme.CodeBlock.copied",message:"Copied",description:"The copied button label on code blocks"}):(0,f.I)({id:"theme.CodeBlock.copyButtonAriaLabel",message:"Copy code to clipboard",description:"The ARIA label for copy code blocks button"}),title:(0,f.I)({id:"theme.CodeBlock.copy",message:"Copy",description:"The copy button label on code blocks"}),className:(0,m.Z)("clean-btn",n,X.copyButton,o&&X.copyButtonCopied),onClick:c},a.createElement("span",{className:X.copyButtonIcons,"aria-hidden":"true"},a.createElement("svg",{className:X.copyButtonIcon,viewBox:"0 0 24 24"},a.createElement("path",{d:"M19,21H8V7H19M19,5H8A2,2 0 0,0 6,7V21A2,2 0 0,0 8,23H19A2,2 0 0,0 21,21V7A2,2 0 0,0 19,5M16,1H4A2,2 0 0,0 2,3V17H4V3H16V1Z"})),a.createElement("svg",{className:X.copyButtonSuccessIcon,viewBox:"0 0 24 24"},a.createElement("path",{d:"M21,7L9,19L3.5,13.5L4.91,12.09L9,16.17L19.59,5.59L21,7Z"}))))}const K="wordWrapButtonIcon_Bwma",ee="wordWrapButtonEnabled_EoeP";function te(e){let{className:t,onClick:n,isEnabled:o}=e;const l=(0,f.I)({id:"theme.CodeBlock.wordWrapToggle",message:"Toggle word wrap",description:"The title attribute for toggle word wrapping button of code block lines"});return a.createElement("button",{type:"button",onClick:n,className:(0,m.Z)("clean-btn",t,o&&ee),"aria-label":l,title:l},a.createElement("svg",{className:K,viewBox:"0 0 24 24","aria-hidden":"true"},a.createElement("path",{fill:"currentColor",d:"M4 19h6v-2H4v2zM20 5H4v2h16V5zm-3 6H4v2h13.25c1.1 0 2 .9 2 2s-.9 2-2 2H15v-2l-3 3l3 3v-2h2c2.21 0 4-1.79 4-4s-1.79-4-4-4z"})))}function ne(e){let{children:t,className:n="",metastring:o,title:l,showLineNumbers:r,language:c}=e;const{prism:{defaultLanguage:s,magicComments:i}}=(0,h.L)(),d=c??function(e){const t=e.split(" ").find((e=>e.startsWith("language-")));return null==t?void 0:t.replace(/language-/,"")}(n)??s,u=L(),f=function(){const[e,t]=(0,a.useState)(!1),[n,o]=(0,a.useState)(!1),l=(0,a.useRef)(null),r=(0,a.useCallback)((()=>{const n=l.current.querySelector("code");e?n.removeAttribute("style"):(n.style.whiteSpace="pre-wrap",n.style.overflowWrap="anywhere"),t((e=>!e))}),[l,e]),c=(0,a.useCallback)((()=>{const{scrollWidth:e,clientWidth:t}=l.current,n=e>t||l.current.querySelector("code").hasAttribute("style");o(n)}),[l]);return M(l,c),(0,a.useEffect)((()=>{c()}),[e,c]),(0,a.useEffect)((()=>(window.addEventListener("resize",c,{passive:!0}),()=>{window.removeEventListener("resize",c)})),[c]),{codeBlockRef:l,isEnabled:e,isCodeScrollable:n,toggle:r}}(),g=function(e){var t;return(null==e||null==(t=e.match(T))?void 0:t.groups.title)??""}(o)||l,{lineClassNames:v,code:b}=B(t,{metastring:o,language:d,magicComments:i}),E=r??function(e){return Boolean(null==e?void 0:e.includes("showLineNumbers"))}(o);return a.createElement(j,{as:"div",className:(0,m.Z)(n,d&&!n.includes(`language-${d}`)&&`language-${d}`)},g&&a.createElement("div",{className:A.codeBlockTitle},g),a.createElement("div",{className:A.codeBlockContent},a.createElement(F,(0,p.Z)({},U,{theme:u,code:b,language:d??"text"}),(e=>{let{className:t,tokens:n,getLineProps:o,getTokenProps:l}=e;return a.createElement("pre",{tabIndex:0,ref:f.codeBlockRef,className:(0,m.Z)(t,A.codeBlock,"thin-scrollbar")},a.createElement("code",{className:(0,m.Z)(A.codeBlockLines,E&&A.codeBlockLinesWithNumbering)},n.map(((e,t)=>a.createElement(J,{key:t,line:e,getLineProps:o,getTokenProps:l,classNames:v[t],showLineNumbers:E})))))})),a.createElement("div",{className:A.buttonGroup},(f.isEnabled||f.isCodeScrollable)&&a.createElement(te,{className:A.codeButton,onClick:()=>f.toggle(),isEnabled:f.isEnabled}),a.createElement(Y,{className:A.codeButton,code:b}))))}function ae(e){let{children:t,...n}=e;const o=(0,k.Z)(),l=function(e){return a.Children.toArray(e).some((e=>(0,a.isValidElement)(e)))?e:Array.isArray(e)?e.join(""):e}(t),r="string"==typeof l?ne:H;return a.createElement(r,(0,p.Z)({key:String(o)},n),l)}var oe=n(9960);var le=n(6043);const re="details_lb9f",ce="isBrowser_bmU9",se="collapsibleContent_i85q";function ie(e){return!!e&&("SUMMARY"===e.tagName||ie(e.parentElement))}function de(e,t){return!!e&&(e===t||de(e.parentElement,t))}function me(e){let{summary:t,children:n,...o}=e;const l=(0,k.Z)(),r=(0,a.useRef)(null),{collapsed:c,setCollapsed:s}=(0,le.u)({initialState:!o.open}),[i,d]=(0,a.useState)(o.open);return a.createElement("details",(0,p.Z)({},o,{ref:r,open:i,"data-collapsed":c,className:(0,m.Z)(re,l&&ce,o.className),onMouseDown:e=>{ie(e.target)&&e.detail>1&&e.preventDefault()},onClick:e=>{e.stopPropagation();const t=e.target;ie(t)&&de(t,r.current)&&(e.preventDefault(),c?(s(!1),d(!0)):s(!0))}}),t??a.createElement("summary",null,"Details"),a.createElement(le.z,{lazy:!1,collapsed:c,disableSSRStyle:!0,onCollapseTransitionEnd:e=>{s(e),d(!e)}},a.createElement("div",{className:se},n)))}const ue="details_b_Ee";function pe(e){let{...t}=e;return a.createElement(me,(0,p.Z)({},t,{className:(0,m.Z)("alert alert--info",ue,t.className)}))}function fe(e){return a.createElement(b,e)}const he="containsTaskList_mC6p";const ge="img_ev3q";const ve="admonition_LlT9",be="admonitionHeading_tbUL",Ee="admonitionIcon_kALy",ye="admonitionContent_S0QG";const ke={note:{infimaClassName:"secondary",iconComponent:function(){return a.createElement("svg",{viewBox:"0 0 14 16"},a.createElement("path",{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))},label:a.createElement(f.Z,{id:"theme.admonition.note",description:"The default label used for the Note admonition (:::note)"},"note")},tip:{infimaClassName:"success",iconComponent:function(){return a.createElement("svg",{viewBox:"0 0 12 16"},a.createElement("path",{fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))},label:a.createElement(f.Z,{id:"theme.admonition.tip",description:"The default label used for the Tip admonition (:::tip)"},"tip")},danger:{infimaClassName:"danger",iconComponent:function(){return a.createElement("svg",{viewBox:"0 0 12 16"},a.createElement("path",{fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"}))},label:a.createElement(f.Z,{id:"theme.admonition.danger",description:"The default label used for the Danger admonition (:::danger)"},"danger")},info:{infimaClassName:"info",iconComponent:function(){return a.createElement("svg",{viewBox:"0 0 14 16"},a.createElement("path",{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))},label:a.createElement(f.Z,{id:"theme.admonition.info",description:"The default label used for the Info admonition (:::info)"},"info")},caution:{infimaClassName:"warning",iconComponent:function(){return a.createElement("svg",{viewBox:"0 0 16 16"},a.createElement("path",{fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))},label:a.createElement(f.Z,{id:"theme.admonition.caution",description:"The default label used for the Caution admonition (:::caution)"},"caution")}},Ne={secondary:"note",important:"info",success:"tip",warning:"danger"};function Le(e){const{mdxAdmonitionTitle:t,rest:n}=function(e){const t=a.Children.toArray(e),n=t.find((e=>{var t;return a.isValidElement(e)&&"mdxAdmonitionTitle"===(null==(t=e.props)?void 0:t.mdxType)})),o=a.createElement(a.Fragment,null,t.filter((e=>e!==n)));return{mdxAdmonitionTitle:n,rest:o}}(e.children);return{...e,title:e.title??t,children:n}}const Ce={head:function(e){const t=a.Children.map(e.children,(e=>a.isValidElement(e)?function(e){var t;if(null!=(t=e.props)&&t.mdxType&&e.props.originalType){const{mdxType:t,originalType:n,...o}=e.props;return a.createElement(e.props.originalType,o)}return e}(e):e));return a.createElement(y.Z,e,t)},code:function(e){const t=["a","b","big","i","span","em","strong","sup","sub","small"];return a.Children.toArray(e.children).every((e=>{var n;return"string"==typeof e&&!e.includes("\n")||(0,a.isValidElement)(e)&&t.includes(null==(n=e.props)?void 0:n.mdxType)}))?a.createElement("code",e):a.createElement(ae,e)},a:function(e){return a.createElement(oe.Z,e)},pre:function(e){var t;return a.createElement(ae,(0,a.isValidElement)(e.children)&&"code"===(null==(t=e.children.props)?void 0:t.originalType)?e.children.props:{...e})},details:function(e){const t=a.Children.toArray(e.children),n=t.find((e=>{var t;return a.isValidElement(e)&&"summary"===(null==(t=e.props)?void 0:t.mdxType)})),o=a.createElement(a.Fragment,null,t.filter((e=>e!==n)));return a.createElement(pe,(0,p.Z)({},e,{summary:n}),o)},ul:function(e){return a.createElement("ul",(0,p.Z)({},e,{className:(t=e.className,(0,m.Z)(t,(null==t?void 0:t.includes("contains-task-list"))&&he))}));var t},img:function(e){return a.createElement("img",(0,p.Z)({loading:"lazy"},e,{className:(t=e.className,(0,m.Z)(t,ge))}));var t},h1:e=>a.createElement(fe,(0,p.Z)({as:"h1"},e)),h2:e=>a.createElement(fe,(0,p.Z)({as:"h2"},e)),h3:e=>a.createElement(fe,(0,p.Z)({as:"h3"},e)),h4:e=>a.createElement(fe,(0,p.Z)({as:"h4"},e)),h5:e=>a.createElement(fe,(0,p.Z)({as:"h5"},e)),h6:e=>a.createElement(fe,(0,p.Z)({as:"h6"},e)),admonition:function(e){const{children:t,type:n,title:o,icon:l}=Le(e),r=function(e){const t=Ne[e]??e;return ke[t]||(console.warn(`No admonition config found for admonition type "${t}". Using Info as fallback.`),ke.info)}(n),c=o??r.label,{iconComponent:s}=r,i=l??a.createElement(s,null);return a.createElement("div",{className:(0,m.Z)(u.k.common.admonition,u.k.common.admonitionType(e.type),"alert",`alert--${r.infimaClassName}`,ve)},a.createElement("div",{className:be},a.createElement("span",{className:Ee},i),c),a.createElement("div",{className:ye},t))}};function _e(e){let{children:t}=e;return a.createElement(E.Zo,{components:Ce},t)}function Te(e){let{children:t}=e;const n=function(){const{metadata:e,frontMatter:t,contentTitle:n}=s();return t.hide_title||void 0!==n?null:e.title}();return a.createElement("div",{className:(0,m.Z)(u.k.docs.docMarkdown,"markdown")},n&&a.createElement("header",null,a.createElement(b,{as:"h1"},n)),a.createElement(_e,null,t))}function we(e){let{lastUpdatedAt:t,formattedLastUpdatedAt:n}=e;return a.createElement(f.Z,{id:"theme.lastUpdated.atDate",description:"The words used to describe on which date a page has been last updated",values:{date:a.createElement("b",null,a.createElement("time",{dateTime:new Date(1e3*t).toISOString()},n))}}," on {date}")}function Ze(e){let{lastUpdatedBy:t}=e;return a.createElement(f.Z,{id:"theme.lastUpdated.byUser",description:"The words used to describe by who the page has been last updated",values:{user:a.createElement("b",null,t)}}," by {user}")}function xe(e){let{lastUpdatedAt:t,formattedLastUpdatedAt:n,lastUpdatedBy:o}=e;return a.createElement("span",{className:u.k.common.lastUpdated},a.createElement(f.Z,{id:"theme.lastUpdated.lastUpdatedAtBy",description:"The sentence used to display when a page has been last updated, and by who",values:{atDate:t&&n?a.createElement(we,{lastUpdatedAt:t,formattedLastUpdatedAt:n}):"",byUser:o?a.createElement(Ze,{lastUpdatedBy:o}):""}},"Last updated{atDate}{byUser}"),!1)}const Be="iconEdit_Z9Sw";function Oe(e){let{className:t,...n}=e;return a.createElement("svg",(0,p.Z)({fill:"currentColor",height:"20",width:"20",viewBox:"0 0 40 40",className:(0,m.Z)(Be,t),"aria-hidden":"true"},n),a.createElement("g",null,a.createElement("path",{d:"m34.5 11.7l-3 3.1-6.3-6.3 3.1-3q0.5-0.5 1.2-0.5t1.1 0.5l3.9 3.9q0.5 0.4 0.5 1.1t-0.5 1.2z m-29.5 17.1l18.4-18.5 6.3 6.3-18.4 18.4h-6.3v-6.2z"})))}function je(e){let{editUrl:t}=e;return a.createElement("a",{href:t,target:"_blank",rel:"noreferrer noopener",className:u.k.common.editThisPage},a.createElement(Oe,null),a.createElement(f.Z,{id:"theme.common.editThisPage",description:"The link label to edit the current page"},"Edit this page"))}const Ae="tag_zVej",He="tagRegular_sFm0",Se="tagWithCount_h2kH";function Me(e){let{permalink:t,label:n,count:o}=e;return a.createElement(oe.Z,{href:t,className:(0,m.Z)(Ae,o?Se:He)},n,o&&a.createElement("span",null,o))}const Pe="tags_jXut",Ue="tag_QGVx";function Ie(e){let{tags:t}=e;return a.createElement(a.Fragment,null,a.createElement("b",null,a.createElement(f.Z,{id:"theme.tags.tagsListLabel",description:"The label alongside a tag list"},"Tags:")),a.createElement("ul",{className:(0,m.Z)(Pe,"padding--none","margin-left--sm")},t.map((e=>{let{label:t,permalink:n}=e;return a.createElement("li",{key:n,className:Ue},a.createElement(Me,{label:t,permalink:n}))}))))}const ze="lastUpdated_vwxv";function De(e){return a.createElement("div",{className:(0,m.Z)(u.k.docs.docFooterTagsRow,"row margin-bottom--sm")},a.createElement("div",{className:"col"},a.createElement(Ie,e)))}function Ve(e){let{editUrl:t,lastUpdatedAt:n,lastUpdatedBy:o,formattedLastUpdatedAt:l}=e;return a.createElement("div",{className:(0,m.Z)(u.k.docs.docFooterEditMetaRow,"row")},a.createElement("div",{className:"col"},t&&a.createElement(je,{editUrl:t})),a.createElement("div",{className:(0,m.Z)("col",ze)},(n||o)&&a.createElement(xe,{lastUpdatedAt:n,formattedLastUpdatedAt:l,lastUpdatedBy:o})))}function Re(){const{metadata:e}=s(),{editUrl:t,lastUpdatedAt:n,formattedLastUpdatedAt:o,lastUpdatedBy:l,tags:r}=e,c=r.length>0,i=!!(t||n||l);return c||i?a.createElement("footer",{className:(0,m.Z)(u.k.docs.docFooter,"docusaurus-mt-lg")},c&&a.createElement(De,{tags:r}),i&&a.createElement(Ve,{editUrl:t,lastUpdatedAt:n,lastUpdatedBy:l,formattedLastUpdatedAt:o})):null}function $e(e){const{permalink:t,title:n,subLabel:o,isNext:l}=e;return a.createElement(oe.Z,{className:(0,m.Z)("pagination-nav__link",l?"pagination-nav__link--next":"pagination-nav__link--prev"),to:t},o&&a.createElement("div",{className:"pagination-nav__sublabel"},o),a.createElement("div",{className:"pagination-nav__label"},n))}function We(e){const{previous:t,next:n}=e;return a.createElement("nav",{className:"pagination-nav docusaurus-mt-lg","aria-label":(0,f.I)({id:"theme.docs.paginator.navAriaLabel",message:"Docs pages navigation",description:"The ARIA label for the docs pagination"})},t&&a.createElement($e,(0,p.Z)({},t,{subLabel:a.createElement(f.Z,{id:"theme.docs.paginator.previous",description:"The label used to navigate to the previous doc"},"Previous")})),n&&a.createElement($e,(0,p.Z)({},n,{subLabel:a.createElement(f.Z,{id:"theme.docs.paginator.next",description:"The label used to navigate to the next doc"},"Next"),isNext:!0})))}function Fe(){const{metadata:e}=s();return a.createElement(We,{previous:e.previous,next:e.next})}function qe(e){const t=e.map((e=>({...e,parentIndex:-1,children:[]}))),n=Array(7).fill(-1);t.forEach(((e,t)=>{const a=n.slice(2,e.level);e.parentIndex=Math.max(...a),n[e.level]=t}));const a=[];return t.forEach((e=>{const{parentIndex:n,...o}=e;n>=0?t[n].children.push(o):a.push(o)})),a}function Ge(e){let{toc:t,minHeadingLevel:n,maxHeadingLevel:a}=e;return t.flatMap((e=>{const t=Ge({toc:e.children,minHeadingLevel:n,maxHeadingLevel:a});return function(e){return e.level>=n&&e.level<=a}(e)?[{...e,children:t}]:t}))}function Qe(e){const t=e.getBoundingClientRect();return t.top===t.bottom?Qe(e.parentNode):t}function Je(e,t){let{anchorTopOffset:n}=t;const a=e.find((e=>Qe(e).top>=n));if(a){return function(e){return e.top>0&&e.bottom<window.innerHeight/2}(Qe(a))?a:e[e.indexOf(a)-1]??null}return e[e.length-1]??null}function Xe(){const e=(0,a.useRef)(0),{navbar:{hideOnScroll:t}}=(0,h.L)();return(0,a.useEffect)((()=>{e.current=t?0:document.querySelector(".navbar").clientHeight}),[t]),e}function Ye(e){const t=(0,a.useRef)(void 0),n=Xe();(0,a.useEffect)((()=>{if(!e)return()=>{};const{linkClassName:a,linkActiveClassName:o,minHeadingLevel:l,maxHeadingLevel:r}=e;function c(){const e=function(e){return Array.from(document.getElementsByClassName(e))}(a),c=function(e){let{minHeadingLevel:t,maxHeadingLevel:n}=e;const a=[];for(let o=t;o<=n;o+=1)a.push(`h${o}.anchor`);return Array.from(document.querySelectorAll(a.join()))}({minHeadingLevel:l,maxHeadingLevel:r}),s=Je(c,{anchorTopOffset:n.current}),i=e.find((e=>s&&s.id===function(e){return decodeURIComponent(e.href.substring(e.href.indexOf("#")+1))}(e)));e.forEach((e=>{!function(e,n){n?(t.current&&t.current!==e&&t.current.classList.remove(o),e.classList.add(o),t.current=e):e.classList.remove(o)}(e,e===i)}))}return document.addEventListener("scroll",c),document.addEventListener("resize",c),c(),()=>{document.removeEventListener("scroll",c),document.removeEventListener("resize",c)}}),[e,n])}function Ke(e){let{toc:t,className:n,linkClassName:o,isChild:l}=e;return t.length?a.createElement("ul",{className:l?void 0:n},t.map((e=>a.createElement("li",{key:e.id},a.createElement("a",{href:`#${e.id}`,className:o??void 0,dangerouslySetInnerHTML:{__html:e.value}}),a.createElement(Ke,{isChild:!0,toc:e.children,className:n,linkClassName:o}))))):null}const et=a.memo(Ke);function tt(e){let{toc:t,className:n="table-of-contents table-of-contents__left-border",linkClassName:o="table-of-contents__link",linkActiveClassName:l,minHeadingLevel:r,maxHeadingLevel:c,...s}=e;const i=(0,h.L)(),d=r??i.tableOfContents.minHeadingLevel,m=c??i.tableOfContents.maxHeadingLevel,u=function(e){let{toc:t,minHeadingLevel:n,maxHeadingLevel:o}=e;return(0,a.useMemo)((()=>Ge({toc:qe(t),minHeadingLevel:n,maxHeadingLevel:o})),[t,n,o])}({toc:t,minHeadingLevel:d,maxHeadingLevel:m});return Ye((0,a.useMemo)((()=>{if(o&&l)return{linkClassName:o,linkActiveClassName:l,minHeadingLevel:d,maxHeadingLevel:m}}),[o,l,d,m])),a.createElement(et,(0,p.Z)({toc:u,className:n,linkClassName:o},s))}const nt="tableOfContents_bqdL";function at(e){let{className:t,...n}=e;return a.createElement("div",{className:(0,m.Z)(nt,"thin-scrollbar",t)},a.createElement(tt,(0,p.Z)({},n,{linkClassName:"table-of-contents__link toc-highlight",linkActiveClassName:"table-of-contents__link--active"})))}function ot(){const{toc:e,frontMatter:t}=s();return a.createElement(at,{toc:e,minHeadingLevel:t.toc_min_heading_level,maxHeadingLevel:t.toc_max_heading_level,className:u.k.docs.docTocDesktop})}const lt="tocCollapsibleButton_CltZ",rt="tocCollapsibleButtonExpanded_bx9C";var ct=n(8870);function st(e){let{collapsed:t,...n}=e;return a.createElement("button",{type:"button",...n,className:(0,m.Z)("clean-btn",lt,!t&&rt,n.className)},a.createElement(ct.ix,null),a.createElement(f.Z,{id:"theme.TOCCollapsible.toggleButtonLabel",description:"The label used by the button on the collapsible TOC component"},"Contents"))}const it="tocCollapsible_ROek",dt="divider_h1Ze",mt="tocCollapsibleContent_Qsjj",ut="tocCollapsibleExpanded_zTjk";function pt(e){let{toc:t,className:n,minHeadingLevel:o,maxHeadingLevel:l}=e;const{collapsed:r,toggleCollapsed:c}=(0,le.u)({initialState:!0});return a.createElement("div",{className:(0,m.Z)(it,!r&&ut,n)},a.createElement(st,{collapsed:r,onClick:c}),a.createElement(le.z,{lazy:!0,className:mt,collapsed:r},a.createElement("div",{className:dt},a.createElement("div",null)),a.createElement(tt,{toc:t,minHeadingLevel:o,maxHeadingLevel:l})))}const ft="tocMobile_ITEo";function ht(){const{toc:e,frontMatter:t}=s();return a.createElement(pt,{toc:e,minHeadingLevel:t.toc_min_heading_level,maxHeadingLevel:t.toc_max_heading_level,className:(0,m.Z)(u.k.docs.docTocMobile,ft)})}var gt=n(4477);function vt(e){let{className:t}=e;const n=(0,gt.E)();return n.badge?a.createElement("span",{className:(0,m.Z)(t,u.k.docs.docVersionBadge,"badge badge--secondary")},a.createElement(f.Z,{id:"theme.docs.versionBadge.label",values:{versionLabel:n.label}},"Version: {versionLabel}")):null}var bt=n(2263),Et=n(143),yt=n(373);const kt={unreleased:function(e){let{siteTitle:t,versionMetadata:n}=e;return a.createElement(f.Z,{id:"theme.docs.versions.unreleasedVersionLabel",description:"The label used to tell the user that he's browsing an unreleased doc version",values:{siteTitle:t,versionLabel:a.createElement("b",null,n.label)}},"This is unreleased documentation for {siteTitle} {versionLabel} version.")},unmaintained:function(e){let{siteTitle:t,versionMetadata:n}=e;return a.createElement(f.Z,{id:"theme.docs.versions.unmaintainedVersionLabel",description:"The label used to tell the user that he's browsing an unmaintained doc version",values:{siteTitle:t,versionLabel:a.createElement("b",null,n.label)}},"This is documentation for {siteTitle} {versionLabel}, which is no longer actively maintained.")}};function Nt(e){const t=kt[e.versionMetadata.banner];return a.createElement(t,e)}function Lt(e){let{versionLabel:t,to:n,onClick:o}=e;return a.createElement(f.Z,{id:"theme.docs.versions.latestVersionSuggestionLabel",description:"The label used to tell the user to check the latest version",values:{versionLabel:t,latestVersionLink:a.createElement("b",null,a.createElement(oe.Z,{to:n,onClick:o},a.createElement(f.Z,{id:"theme.docs.versions.latestVersionLinkLabel",description:"The label used for the latest version suggestion link label"},"latest version")))}},"For up-to-date documentation, see the {latestVersionLink} ({versionLabel}).")}function Ct(e){let{className:t,versionMetadata:n}=e;const{siteConfig:{title:o}}=(0,bt.Z)(),{pluginId:l}=(0,Et.gA)({failfast:!0}),{savePreferredVersionName:r}=(0,yt.J)(l),{latestDocSuggestion:c,latestVersionSuggestion:s}=(0,Et.Jo)(l),i=c??(d=s).docs.find((e=>e.id===d.mainDocId));var d;return a.createElement("div",{className:(0,m.Z)(t,u.k.docs.docVersionBanner,"alert alert--warning margin-bottom--md"),role:"alert"},a.createElement("div",null,a.createElement(Nt,{siteTitle:o,versionMetadata:n})),a.createElement("div",{className:"margin-top--md"},a.createElement(Lt,{versionLabel:s.label,to:i.path,onClick:()=>r(s.name)})))}function _t(e){let{className:t}=e;const n=(0,gt.E)();return n.banner?a.createElement(Ct,{className:t,versionMetadata:n}):null}const Tt="root_m3xo",wt="docItemCol_F52z",Zt="tocDesktopWrapper_v6KB",xt="docItemContainer_hrrU";function Bt(e){let{children:t}=e;const n=function(){const{frontMatter:e,toc:t}=s(),n=(0,d.i)(),o=e.hide_table_of_contents,l=!o&&t.length>0;return{hidden:o,mobile:l?a.createElement(ht,null):void 0,desktop:!l||"desktop"!==n&&"ssr"!==n?void 0:a.createElement(ot,null)}}(),o=(0,d.i)();return a.createElement("div",{className:(0,m.Z)(Tt,"row")},a.createElement("div",{className:(0,m.Z)("col",!n.hidden&&wt)},a.createElement(_t,null),a.createElement("div",{className:(0,m.Z)(xt)},a.createElement("div",null,a.createElement("article",null,a.createElement(vt,null),n.mobile,a.createElement(Te,null,t),a.createElement(Re,null)),a.createElement(Fe,null)))),"mobile"!==o&&a.createElement("aside",{className:(0,m.Z)("col")}),a.createElement("div",{className:(0,m.Z)(Zt,"col")},n.desktop))}function Ot(e){const t=`docs-doc-id-${e.content.metadata.unversionedId}`,n=e.content;return a.createElement(c,{content:e.content},a.createElement(o.FG,{className:t},a.createElement(i,null),a.createElement(Bt,null,a.createElement(n,null))))}},4477:(e,t,n)=>{"use strict";n.d(t,{E:()=>c,q:()=>r});var a=n(7294),o=n(902);const l=a.createContext(null);function r(e){let{children:t,version:n}=e;return a.createElement(l.Provider,{value:n},t)}function c(){const e=(0,a.useContext)(l);if(null===e)throw new o.i6("DocsVersionProvider");return e}},7594:(e,t)=>{function n(e){let t,n=[];for(let a of e.split(",").map((e=>e.trim())))if(/^-?\d+$/.test(a))n.push(parseInt(a,10));else if(t=a.match(/^(-?\d+)(-|\.\.\.?|\u2025|\u2026|\u22EF)(-?\d+)$/)){let[e,a,o,l]=t;if(a&&l){a=parseInt(a),l=parseInt(l);const e=a<l?1:-1;"-"!==o&&".."!==o&&"\u2025"!==o||(l+=e);for(let t=a;t!==l;t+=e)n.push(t)}}return n}t.default=n,e.exports=n}}]);