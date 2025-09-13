import r,{useMemo as g,useState as A}from"react";var d={dark:{"--cb-bg":"#0b0d12","--cb-header-bg":"#1c2128","--cb-border":"rgba(255,255,255,0.08)","--cb-fg":"#e6edf3","--cb-subtle":"#9aa7b2","--cb-accent":"#6ca6ff","--cb-highlight":"rgba(108,166,255,0.15)"},light:{"--cb-bg":"#f7f8fa","--cb-header-bg":"#ffffff","--cb-border":"rgba(0,0,0,0.08)","--cb-fg":"#1c2128","--cb-subtle":"#5d6b78","--cb-accent":"#2f6fed","--cb-highlight":"rgba(47,111,237,0.12)"},midnight:{"--cb-bg":"#0b0d12","--cb-header-bg":"linear-gradient(90deg,#0f131a,#141a22)","--cb-border":"rgba(255,255,255,0.06)","--cb-fg":"#e6edf3","--cb-subtle":"#8391a1","--cb-accent":"#66d9ef","--cb-highlight":"rgba(102,217,239,0.16)"},solarizedDark:{"--cb-bg":"#002b36","--cb-header-bg":"#073642","--cb-border":"rgba(255,255,255,0.08)","--cb-fg":"#eee8d5","--cb-subtle":"#93a1a1","--cb-accent":"#b58900","--cb-highlight":"rgba(181,137,0,0.2)"}};import{useEffect as I}from"react";var H=String.raw`:root {
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
`,k=H;function f(e="rt-codeblock-styles"){I(()=>{if(typeof document>"u"||document.getElementById(e))return;let t=document.createElement("style");t.id=e,t.textContent=k,document.head.appendChild(t)},[e])}function D(e,t){return{...d[e]||d.midnight,...t||{}}}function q(e,t=1500){let[c,a]=A(!1);return{copied:c,onCopy:async()=>{try{typeof navigator<"u"&&navigator.clipboard&&(await navigator.clipboard.writeText(e),a(!0),setTimeout(()=>a(!1),t))}catch(i){console.error("Copy failed",i)}}}}function u({code:e,language:t="plaintext",filename:c,showCopy:a=!0,showInsert:s=!1,onInsert:i,theme:_="midnight",customTheme:m,fontSize:v=14,fontFamily:p,lineNumbers:h=!1,startLineNumber:x=1,highlightLines:y=[],wrap:w=!1,copyTimeoutMs:N=1500,labels:o={copy:"Copy",copied:"Copied!",insert:"Insert"},className:z,style:E,autoInjectCSS:M=!0}){let{copied:b,onCopy:B}=q(e,N),S=g(()=>({...D(_,m),"--cb-font-size":`${v}px`,...p?{"--cb-font":p}:{}}),[_,m,v,p]);M&&f();let C=g(()=>e.split(/\r?\n/),[e]),j=g(()=>new Set(y||[]),[y]),T=!!(c||a||s&&i);return r.createElement("div",{className:["rt-cb",h?"rt-cb--ln":"",z].filter(Boolean).join(" "),style:{...S,...E||{}}},T&&r.createElement("div",{className:"rt-cb__header"},r.createElement("div",{className:"rt-cb__filename"},c||""),r.createElement("div",{className:"rt-cb__toolbar"},s&&typeof i=="function"&&r.createElement("button",{type:"button",className:"rt-cb__btn","aria-label":o.insert||"Insert",onClick:()=>i(e),title:o.insert||"Insert"},"\u2795 ",o.insert||"Insert"),a&&r.createElement("button",{type:"button",className:"rt-cb__btn","aria-label":b?o.copied||"Copied!":o.copy||"Copy",onClick:B,title:b?o.copied||"Copied!":o.copy||"Copy"},b?"\u2714":"\u29C9"," ",b?o.copied||"Copied!":o.copy||"Copy"))),r.createElement("pre",{className:["rt-cb__pre",w?"wrap":""].filter(Boolean).join(" ")},h?r.createElement("div",{className:"rt-cb__grid"},r.createElement("div",{className:"rt-cb__gutter","aria-hidden":!0},C.map((l,n)=>r.createElement("div",{key:`g${n}`,className:"rt-cb__line"},x+n))),r.createElement("code",{className:`rt-cb__code language-${t}`},C.map((l,n)=>{let V=x+n,$=j.has(V);return r.createElement("div",{key:`l${n}`,className:["rt-cb__line",$?"rt-cb__line--hl":""].filter(Boolean).join(" ")},l||"\u200B")}))):r.createElement("code",{className:`rt-cb__code language-${t}`},e)))}var Z=u;export{d as THEME_VARS,Z as default};
//# sourceMappingURL=index.js.map