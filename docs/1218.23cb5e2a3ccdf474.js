"use strict";(self.webpackChunkMyAngularTegel=self.webpackChunkMyAngularTegel||[]).push([[1218],{1218:(l,i,s)=>{s.r(i),s.d(i,{tds_banner:()=>d});var r=s(5861),t=s(1879),n=s(813);const d=class{constructor(e){(0,t.r)(this,e),this.tdsClose=(0,t.c)(this,"tdsClose",7),this.tdsShow=(0,t.c)(this,"tdsShow",7),this.handleClose=()=>{this.tdsClose.emit({bannerId:this.bannerId}).defaultPrevented||(this.hidden=!0)},this.handleShow=()=>{this.tdsShow.emit({bannerId:this.bannerId}).defaultPrevented||(this.hidden=!1)},this.icon=void 0,this.header=void 0,this.subheader=void 0,this.variant="none",this.bannerId=(0,n.g)(),this.persistent=!1,this.hidden=!1}hideBanner(){var e=this;return(0,r.Z)(function*(){e.hidden=!0})()}showBanner(){var e=this;return(0,r.Z)(function*(){e.hidden=!1})()}connectedCallback(){"error"===this.variant?this.icon="error":"information"===this.variant&&(this.icon="info")}render(){const e=(0,n.h)("subheader",this.host),o=(0,n.h)("subheader",this.host),h=(0,n.h)("bottom",this.host);return(0,t.h)(t.H,{role:"banner","aria-hidden":`${this.hidden}`,"aria-live":this.host.getAttribute("aria-live")?this.host.getAttribute("aria-live"):"polite","aria-atomic":this.host.getAttribute("aria-atomic"),class:`${this.variant} ${this.hidden?"hide":"show"}`},this.icon&&(0,t.h)("div",{class:`banner-icon ${this.variant}`},(0,t.h)("tds-icon",{name:this.icon,size:"20px"})),(0,t.h)("div",{class:"content"},(0,t.h)("div",{class:"header-subheader"},this.header&&(0,t.h)("div",{class:"header"},this.header),e&&(0,t.h)("slot",{name:"header"}),this.subheader&&(0,t.h)("div",{class:"subheader"},this.subheader),o&&(0,t.h)("slot",{name:"subheader"})),h&&(0,t.h)("slot",{name:"bottom"})),!this.persistent&&(0,t.h)("div",{class:"banner-close"},(0,t.h)("button",{onClick:()=>{this.handleClose()}},(0,t.h)("tds-icon",{name:"cross",size:"20px"}))))}get host(){return(0,t.g)(this)}};d.style=":root,.tds-mode-light{--tds-link:var(--tds-blue-500);--tds-link-hover:var(--tds-blue-400);--tds-link-focus:var(--tds-blue-400);--tds-link-visited:var(--tds-grey-900);--tds-link-disabled:var(--tds-grey-400)}.tds-mode-dark{--tds-link:var(--tds-blue-300);--tds-link-hover:var(--tds-blue-400);--tds-link-focus:var(--tds-blue-400);--tds-link-visited:var(--tds-blue-100);--tds-link-disabled:var(--tds-grey-800)}:host(.hide){display:none;visibility:hidden}:host(.error){background-color:var(--tds-banner-background-error)}:host(.information){background-color:var(--tds-banner-background-info)}:host{display:flex;background-color:var(--tds-banner-background-default);z-index:400}:host .banner-icon{padding-left:20px;padding-top:14px;padding-right:12px;color:var(--tds-banner-prefix-default-color)}:host .banner-icon.error{color:var(--tds-banner-prefix-error-color)}:host .banner-icon.information{color:var(--tds-banner-prefix-info-color)}:host .content{color:var(--tds-banner-text-color);display:flex;flex-direction:column;flex-grow:1;padding:16px 0}:host .content.no-icon{padding-left:16px}:host .header-subheader{display:flex;flex-direction:column;gap:4px}:host .header,:host slot[name=header]{font:var(--tds-headline-06);letter-spacing:var(--tds-headline-06-ls)}:host .subheader,:host slot[name=subheader]{display:block;font:var(--tds-detail-02);letter-spacing:var(--tds-detail-02-ls)}:host slot[name=bottom]::slotted(*){display:block;width:fit-content;margin-top:16px}:host .banner-close{color:var(--tds-banner-x-color)}:host .banner-close button{padding-right:16px;padding-top:14px;background-color:transparent;border:none;color:var(--tds-banner-x-color)}:host .banner-close button:hover{cursor:pointer}:host .banner-close button:focus-visible{outline:none}:host .banner-close button:focus-visible tds-icon{outline:2px solid var(--tds-blue-400);outline-offset:-2px}"}}]);