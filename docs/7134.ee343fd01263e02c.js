"use strict";(self.webpackChunkMyAngularTegel=self.webpackChunkMyAngularTegel||[]).push([[7134],{7134:(n,o,s)=>{s.r(o),s.d(o,{tds_side_menu_dropdown:()=>a});var e=s(6857);const a=class{constructor(t){(0,e.r)(this,t),this.defaultOpen=!1,this.buttonLabel=void 0,this.selected=!1,this.open=!1,this.hoverState=void 0,this.collapsed=!1}collapsedSideMenuEventHandler(t){this.collapsed=t.detail.collapsed}onEventPointerEnter(){this.setHoverStateOpen()}onEventFocus(){this.setHoverStateOpen()}onEventPointerLeave(){this.setHoverStateClosed()}onEventBlur(){this.setHoverStateClosed()}setHoverStateOpen(){this.hoverState={isHovered:!0,updatedAt:Date.now()}}setHoverStateClosed(){const t=Date.now();setTimeout(()=>{this.hoverState.isHovered&&this.hoverState.updatedAt<t&&(this.hoverState={isHovered:!1,updatedAt:Date.now()})},150)}getIsOpenState(){var t;return this.collapsed?null===(t=this.hoverState)||void 0===t?void 0:t.isHovered:this.open}connectedCallback(){this.sideMenuEl=this.host.closest("tds-side-menu"),this.collapsed=this.sideMenuEl.collapsed,this.open=this.defaultOpen}render(){return(0,e.h)(e.H,{key:"b6d99ba749b0f3f11183f9c7f62565ca341da964"},(0,e.h)("div",{key:"e00f31b6379d8b01b0d23a60193ce1ebe88a19da",class:{wrapper:!0,"state-open":this.getIsOpenState(),"state-collapsed":this.collapsed}},(0,e.h)("tds-side-menu-item",{key:"e7eabcbbaa65cf1f631108bfafc4a380f617c27b",class:"button",active:this.getIsOpenState(),selected:this.selected,onClick:()=>{this.open=!this.open}},(0,e.h)("button",{key:"6beaed485451b9d447d7757b16356bc07b717640"},(0,e.h)("slot",{key:"18852e8123e8b060cb7d7438e977f3465b73606b",name:"icon"}),!this.collapsed&&(0,e.h)(e.F,{key:"1182a36da0e5aa8e874a6614480c03c9d01182fd"},this.buttonLabel,(0,e.h)("slot",{key:"4b6583fe86ef6679536ca385d02ad176b0b0064f",name:"label"}),(0,e.h)("tds-icon",{key:"c0f5f6790a03beb0e6baa44fd382b844392bcadb",class:"dropdown-icon",name:"chevron_down",size:"16px"})))),(0,e.h)("div",{key:"0428e8146c8047bf84551a95414a7c7c375d5ae2",class:"menu"},this.collapsed&&(0,e.h)("h3",{key:"aae792c3e56f496ba75f241e21da62f8fa9331e3",class:"heading-collapsed"},this.buttonLabel,(0,e.h)("slot",{key:"965812787e7cecfe03bd42c3c21d59cf826e366c",name:"label"})),(0,e.h)("slot",{key:"3769792ac76dda53db236abef3e51d80879cb921"}))))}get host(){return(0,e.g)(this)}};a.style=":host{display:block}:host .wrapper{display:flex;flex-direction:column}:host .dropdown-icon{margin-left:auto;transition:all 0.2s ease-in-out}:host .state-open .dropdown-icon{transform:rotateZ(180deg)}:host .state-open .menu{display:block}:host .state-collapsed .menu{--side-menu-width:69px;position:absolute;left:var(--side-menu-width);box-shadow:var(--tds-nav-dropdown-menu-box);background-color:var(--tds-sidebar-side-menu-subnav-background)}:host .state-collapsed .menu .heading-collapsed{all:unset;box-sizing:border-box;padding:16px 24px 15px;min-height:48px;display:flex;align-items:center;border-bottom:1px solid var(--tds-sidebar-side-menu-bottom-menu-border-top);font:var(--tds-headline-07);letter-spacing:var(--tds-headline-07-ls)}:host :not(.state-collapsed) .menu ::slotted(tds-side-menu-dropdown-list){width:100%}:host .menu{display:none;flex-direction:column}"}}]);