"use strict";(self.webpackChunkMyAngularTegel=self.webpackChunkMyAngularTegel||[]).push([[7985],{7985:(c,l,n)=>{n.r(l),n.d(l,{tds_header_dropdown_list:()=>r});var i=n(1879),a=n(813);const r=class{constructor(e){(0,i.r)(this,e),this.slotListeners=new Map,this.size="md",this.headingElement=void 0}componentWillLoad(){const{children:e}=this.host;for(let o=0;o<e.length;o++){const d=e[o];"size"in d&&(d.size=this.size)}let t=this.host;"tds-header-launcher-list"===this.host.parentElement.tagName.toLowerCase()&&(t=this.host.parentElement);const s=(0,a.d)(t,a.e);s?this.headingElement=s:console.warn("Heading element for list not found")}componentDidLoad(){this.host.shadowRoot.querySelectorAll("slot").forEach(e=>{const t=s=>{this.processAssignedElements(s.target)};e.addEventListener("slotchange",t),t({target:e}),this.slotListeners.set(e,t)})}processAssignedElements(e){e.assignedElements().forEach(s=>{"li"!==s.tagName.toLowerCase()&&"slot"!==s.tagName.toLowerCase()&&"listitem"!==s.getAttribute("role")&&s.setAttribute("role","listitem"),"slot"===s.tagName.toLowerCase()&&this.processAssignedElements(s)})}disconnectedCallback(){this.slotListeners.forEach((e,t)=>{t.removeEventListener("slotchange",e),this.slotListeners.delete(t)})}render(){var e;const t={role:"list","aria-labelledby":null===(e=this.headingElement)||void 0===e?void 0:e.id};return(0,i.h)(i.H,Object.assign({},t),(0,i.h)("slot",null))}get host(){return(0,i.g)(this)}};r.style=":host{display:block;width:190px;padding:0;margin:0;list-style:none;border-radius:unset;background-color:var(--tds-header-app-launcher-menu-bg)}@media all and (max-width: 384px){:host{width:100vw}}:host([size=lg]){width:320px}"}}]);