"use strict";(self.webpackChunkMyAngularTegel=self.webpackChunkMyAngularTegel||[]).push([[350],{350:(l,a,e)=>{e.r(a),e.d(a,{tds_toast:()=>d});var n=e(5861),t=e(1879),o=e(813);const d=class{constructor(s){(0,t.r)(this,s),this.tdsClose=(0,t.c)(this,"tdsClose",7),this.getIconName=()=>{switch(this.variant){case"information":default:return"info";case"error":return"error";case"warning":return"warning";case"success":return"tick"}},this.handleClose=()=>{this.tdsClose.emit({toastId:this.toastId}).defaultPrevented||(this.hidden=!0)},this.handleShow=()=>{this.tdsClose.emit({toastId:this.toastId}).defaultPrevented||(this.hidden=!1)},this.toastId=(0,o.g)(),this.header=void 0,this.subheader=void 0,this.variant="information",this.hidden=!1,this.toastRole="alert"}hideToast(){var s=this;return(0,n.Z)(function*(){s.hidden=!0})()}showToast(){var s=this;return(0,n.Z)(function*(){s.hidden=!1})()}render(){const s=(0,o.h)("header",this.host),r=(0,o.h)("subheader",this.host),h=(0,o.h)("bottom",this.host);return(0,t.h)(t.H,{toastRole:this.toastRole,"aria-describedby":this.host.getAttribute("aria-describedby"),class:this.hidden?"hide":"show"},(0,t.h)("div",{class:`\n            wrapper\n            ${this.variant}`},(0,t.h)("tds-icon",{name:this.getIconName(),size:"20px"}),(0,t.h)("div",{class:"content"},(0,t.h)("div",{class:"header-subheader"},this.header&&(0,t.h)("div",{class:"header"},this.header),s&&(0,t.h)("slot",{name:"header"}),this.subheader&&(0,t.h)("div",{class:"subheader"},this.subheader),r&&(0,t.h)("slot",{name:"subheader"})),h&&(0,t.h)("div",{class:"toast-bottom "+(r||this.subheader?"subheader":"no-subheader")},(0,t.h)("slot",{name:"bottom"}))),(0,t.h)("button",{onClick:()=>{this.handleClose()},class:"close"},(0,t.h)("tds-icon",{name:"cross",size:"20px"}))))}get host(){return(0,t.g)(this)}};d.style=":host(.hide){display:none;visibility:hidden}:host{z-index:700}:host .wrapper{display:flex;width:348px;background-color:var(--tds-toast-background-color);border-radius:4px}:host .wrapper.information{border-left:4px solid var(--tds-information)}:host .wrapper.information tds-icon{color:var(--tds-information)}:host .wrapper.success{border-left:4px solid var(--tds-positive)}:host .wrapper.success tds-icon{color:var(--tds-positive)}:host .wrapper.error{border-left:4px solid var(--tds-negative)}:host .wrapper.error tds-icon{color:var(--tds-negative)}:host .wrapper.warning{border-left:4px solid var(--tds-warning)}:host .wrapper.warning tds-icon{color:var(--tds-warning)}:host .wrapper button.close{height:20px;width:20px;display:flex;align-items:center;justify-content:center;margin:14px 14px 0 0;border:none;background:transparent}:host .wrapper button.close:hover{cursor:pointer}:host .wrapper button.close:focus{outline:2px solid var(--tds-blue-400);outline-offset:-2px}:host .wrapper button.close tds-icon{color:var(--tds-toast-dissmiss-color);padding:0}:host tds-icon{padding:14px 0 0 12px}:host .content{padding:16px 0 16px 10px;display:flex;flex-direction:column;flex:1}:host .content .header-subheader{display:flex;flex-direction:column;gap:4px}:host .content .header,:host .content slot[name=header]::slotted(*){font:var(--tds-headline-07);letter-spacing:var(--tds-headline-07-ls);color:var(--tds-toast-headline-color)}:host .content .subheader,:host .content slot[name=subheader]::slotted(*){margin-top:4px;color:var(--tds-toast-subheadline-color);font:var(--tds-detail-02);letter-spacing:var(--tds-detail-02-ls);max-width:252px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}:host .content .subheader.no-link slot::slotted(*),:host .content slot[name=subheader]::slotted(*).no-link slot::slotted(*){padding-bottom:0}:host .content .toast-bottom.subheader{margin-top:16px}:host .content .toast-bottom.no-subheader{margin-top:4px}:host slot[name=bottom]::slotted(*){color:var(--tds-toast-link-color)}:host .tds-mode-variant-primary{--tds-toast-background:var(--tds-toast-background-primary)}:host .tds-mode-variant-secondary{--tds-toast-background:var(--tds-toast-background-secondary)}"}}]);