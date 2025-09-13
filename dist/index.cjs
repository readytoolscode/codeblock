var A=Object.create;var p=Object.defineProperty;var D=Object.getOwnPropertyDescriptor;var q=Object.getOwnPropertyNames;var G=Object.getPrototypeOf,J=Object.prototype.hasOwnProperty;var K=(e,r)=>{for(var o in r)p(e,o,{get:r[o],enumerable:!0})},k=(e,r,o,i)=>{if(r&&typeof r=="object"||typeof r=="function")for(let c of q(r))!J.call(e,c)&&c!==o&&p(e,c,{get:()=>r[c],enumerable:!(i=D(r,c))||i.enumerable});return e};var O=(e,r,o)=>(o=e!=null?A(G(e)):{},k(r||!e||!e.__esModule?p(o,"default",{value:e,enumerable:!0}):o,e)),P=e=>k(p({},"__esModule",{value:!0}),e);var Y={};K(Y,{THEME_VARS:()=>d,default:()=>X});module.exports=P(Y);var t=O(require("react"),1);var d={dark:{"--cb-bg":"#0b0d12","--cb-header-bg":"#1c2128","--cb-border":"rgba(255,255,255,0.08)","--cb-fg":"#e6edf3","--cb-subtle":"#9aa7b2","--cb-accent":"#6ca6ff","--cb-highlight":"rgba(108,166,255,0.15)"},light:{"--cb-bg":"#f7f8fa","--cb-header-bg":"#ffffff","--cb-border":"rgba(0,0,0,0.08)","--cb-fg":"#1c2128","--cb-subtle":"#5d6b78","--cb-accent":"#2f6fed","--cb-highlight":"rgba(47,111,237,0.12)"},midnight:{"--cb-bg":"#0b0d12","--cb-header-bg":"linear-gradient(90deg,#0f131a,#141a22)","--cb-border":"rgba(255,255,255,0.06)","--cb-fg":"#e6edf3","--cb-subtle":"#8391a1","--cb-accent":"#66d9ef","--cb-highlight":"rgba(102,217,239,0.16)"},solarizedDark:{"--cb-bg":"#002b36","--cb-header-bg":"#073642","--cb-border":"rgba(255,255,255,0.08)","--cb-fg":"#eee8d5","--cb-subtle":"#93a1a1","--cb-accent":"#b58900","--cb-highlight":"rgba(181,137,0,0.2)"}};var N=require("react");var Q=String.raw`:root {
    --cb-radius: 12px;
    --cb-pad: 16px;
    --cb-font: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace;
    --cb-font-size: 14px;
    --cb-line-height: 1.55;
}

.rt-cb {
    border-radius: var(--cb-radius);
    overflow: hidden;
    border: 1px solid var(--cb-border);
    background: var(--cb-bg);
    color: var(--cb-fg);
    box-shadow: 0 8px 20px rgba(0,0,0,0.18);
}

.rt-cb__header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    background: var(--cb-header-bg);
    padding: 8px 12px;
    border-bottom: 1px solid var(--cb-border);
}

.rt-cb__filename {
    font-size: 12px;
    color: var(--cb-subtle);
    user-select: text;
}

.rt-cb__toolbar {
    display: flex;
    gap: 6px;
}

.rt-cb__btn {
    appearance: none;
    border: 1px solid transparent;
    background: transparent;
    color: var(--cb-subtle);
    font-size: 12px;
    padding: 6px 10px;
    border-radius: 8px;
    cursor: pointer;
    transition: all .15s ease;
}
.rt-cb__btn:hover {
    background: rgba(255,255,255,0.06);
    color: var(--cb-fg);
}
.rt-cb__btn:focus-visible {
    outline: 2px solid var(--cb-accent);
    outline-offset: 2px;
}

.rt-cb__pre {
    margin: 0;
    padding: var(--cb-pad);
    font-family: var(--cb-font);
    font-size: var(--cb-font-size);
    line-height: var(--cb-line-height);
    overflow-x: auto;
    white-space: pre;
    position: relative;
}

.rt-cb__pre.wrap { /* wrap=true */
    white-space: pre-wrap;
    word-break: break-word;
}

/* Code grid for line numbers */
.rt-cb--ln .rt-cb__grid {
    display: grid;
    grid-template-columns: auto 1fr;
    gap: 12px;
}

.rt-cb__gutter {
    user-select: none;
    color: var(--cb-subtle);
    text-align: right;
    opacity: .7;
}

.rt-cb__line {
    display: block;
}

.rt-cb__line--hl {
    background: var(--cb-highlight);
    margin: 0 calc(var(--cb-pad) * -1);
    padding: 0 var(--cb-pad);
}

/* Responsive tweaks */
@media (max-width: 640px) {
    :root { --cb-font-size: 13px; }
    .rt-cb__filename { font-size: 11px; }
    .rt-cb__btn { font-size: 11px; padding: 6px 8px; }
}
`,w=Q;function g(e="rt-codeblock-styles"){(0,N.useEffect)(()=>{if(typeof document>"u"||document.getElementById(e))return;let r=document.createElement("style");r.id=e,r.textContent=w,document.head.appendChild(r)},[e])}function U(e,r){return{...d[e]||d.midnight,...r||{}}}function W(e,r=1500){let[o,i]=(0,t.useState)(!1);return{copied:o,onCopy:async()=>{try{typeof navigator<"u"&&navigator.clipboard&&(await navigator.clipboard.writeText(e),i(!0),setTimeout(()=>i(!1),r))}catch(n){console.error("Copy failed",n)}}}}function u({code:e,language:r="plaintext",filename:o,showCopy:i=!0,showInsert:c=!1,onInsert:n,theme:_="midnight",customTheme:m,fontSize:v=14,fontFamily:l,lineNumbers:h=!1,startLineNumber:x=1,highlightLines:y=[],wrap:z=!1,copyTimeoutMs:E=1500,labels:a={copy:"Copy",copied:"Copied!",insert:"Insert"},className:M,style:B,autoInjectCSS:S=!0}){let{copied:s,onCopy:j}=W(e,E),T=(0,t.useMemo)(()=>({...U(_,m),"--cb-font-size":`${v}px`,...l?{"--cb-font":l}:{}}),[_,m,v,l]);S&&g();let C=(0,t.useMemo)(()=>e.split(/\r?\n/),[e]),V=(0,t.useMemo)(()=>new Set(y||[]),[y]),$=!!(o||i||c&&n);return t.default.createElement("div",{className:["rt-cb",h?"rt-cb--ln":"",M].filter(Boolean).join(" "),style:{...T,...B||{}}},$&&t.default.createElement("div",{className:"rt-cb__header"},t.default.createElement("div",{className:"rt-cb__filename"},o||""),t.default.createElement("div",{className:"rt-cb__toolbar"},c&&typeof n=="function"&&t.default.createElement("button",{type:"button",className:"rt-cb__btn","aria-label":a.insert||"Insert",onClick:()=>n(e),title:a.insert||"Insert"},"\u2795 ",a.insert||"Insert"),i&&t.default.createElement("button",{type:"button",className:"rt-cb__btn","aria-label":s?a.copied||"Copied!":a.copy||"Copy",onClick:j,title:s?a.copied||"Copied!":a.copy||"Copy"},s?"\u2714":"\u29C9"," ",s?a.copied||"Copied!":a.copy||"Copy"))),t.default.createElement("pre",{className:["rt-cb__pre",z?"wrap":""].filter(Boolean).join(" ")},h?t.default.createElement("div",{className:"rt-cb__grid"},t.default.createElement("div",{className:"rt-cb__gutter","aria-hidden":!0},C.map((f,b)=>t.default.createElement("div",{key:`g${b}`,className:"rt-cb__line"},x+b))),t.default.createElement("code",{className:`rt-cb__code language-${r}`},C.map((f,b)=>{let H=x+b,I=V.has(H);return t.default.createElement("div",{key:`l${b}`,className:["rt-cb__line",I?"rt-cb__line--hl":""].filter(Boolean).join(" ")},f||"\u200B")}))):t.default.createElement("code",{className:`rt-cb__code language-${r}`},e)))}var X=u;0&&(module.exports={THEME_VARS});
//# sourceMappingURL=index.cjs.map