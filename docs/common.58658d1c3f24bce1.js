"use strict";(self.webpackChunkMyAngularTegel=self.webpackChunkMyAngularTegel||[]).push([[8592],{8706:(u,l,t)=>{function r(e,n,s=!1){if(e instanceof HTMLElement&&n(e))return e;const i=e instanceof HTMLSlotElement?e.assignedElements({flatten:!0}):Array.from(e.children);s&&e instanceof HTMLElement&&e.shadowRoot&&i.push(...Array.from(e.shadowRoot.children));let a=null;return i.some(o=>(a=r(o,n,s),null!==a)),a}t.d(l,{d:()=>r})},8407:(u,l,t)=>{function r(){const e=new Date,n=6e4*e.getMinutes()+1e3*e.getSeconds()+e.getMilliseconds(),s=Math.floor(1e6*Math.random()),i=Math.floor(1e6*Math.random());return s.toString(36).substring(2)+n.toString(36)+i.toString(36).substring(2)}t.d(l,{g:()=>r})},2914:(u,l,t)=>{t.d(l,{h:()=>r});const r=(e,n)=>!!n.querySelector(`[slot="${e}"]`)},1670:(u,l,t)=>{t.d(l,{i:()=>n});var r=t(2836);const e=["role","aria-activedescendant","aria-atomic","aria-autocomplete","aria-braillelabel","aria-brailleroledescription","aria-busy","aria-checked","aria-colcount","aria-colindex","aria-colindextext","aria-colspan","aria-controls","aria-current","aria-describedby","aria-description","aria-details","aria-disabled","aria-errormessage","aria-expanded","aria-flowto","aria-haspopup","aria-hidden","aria-invalid","aria-keyshortcuts","aria-label","aria-labelledby","aria-level","aria-live","aria-multiline","aria-multiselectable","aria-orientation","aria-owns","aria-placeholder","aria-posinset","aria-pressed","aria-readonly","aria-relevant","aria-required","aria-roledescription","aria-rowcount","aria-rowindex","aria-rowindextext","aria-rowspan","aria-selected","aria-setsize","aria-sort","aria-valuemax","aria-valuemin","aria-valuenow","aria-valuetext"],n=(s,i)=>{let a=e;return i&&i.length>0&&(a=a.filter(o=>!i.includes(o))),(0,r.i)(s,a)}},2836:(u,l,t)=>{t.d(l,{i:()=>r});const r=(e,n=[])=>{const s={};return n.forEach(i=>{e.hasAttribute(i)&&(null!==e.getAttribute(i)&&(s[i]=e.getAttribute(i)),e.removeAttribute(i))}),s}},1761:(u,l,t)=>{t.d(l,{g:()=>s,i:()=>i});var r=t(8706);const n=a=>a.previousElementSibling,s=(a,o)=>function e(a,o,c){let d=c(a);for(;d;){const _=(0,r.d)(d,o);if(_)return _;d=c(d)}return null}(a,o,n),i=a=>{const o=a.tagName.toLowerCase(),c=a.getAttribute("role");return["h1","h2","h3","h4","h5","h6"].includes(o)||"heading"===c}}}]);