"use strict";(self.webpackChunkMyAngularTegel=self.webpackChunkMyAngularTegel||[]).push([[6165],{6165:(h,d,o)=>{o.r(d),o.d(d,{tds_dropdown_option:()=>i});var l=o(5861),t=o(6857);const i=class{constructor(e){(0,t.r)(this,e),this.tdsSelect=(0,t.c)(this,"tdsSelect",6),this.tdsFocus=(0,t.c)(this,"tdsFocus",6),this.tdsBlur=(0,t.c)(this,"tdsBlur",6),this.componentWillRender=()=>{this.parentElement="TDS-DROPDOWN"===this.host.parentElement.tagName?this.host.parentElement:this.host.getRootNode().host,this.multiselect=this.parentElement.multiselect,this.size=this.parentElement.size,this.label=this.host.textContent.trim()},this.handleSingleSelect=()=>{this.disabled||(this.selected=!0,this.parentElement.appendValue(this.value),this.parentElement.close(),this.tdsSelect.emit({value:this.value,selected:this.selected}))},this.handleMultiselect=s=>{this.disabled||(s.detail.checked?(this.parentElement.appendValue(this.value),this.selected=!0,this.tdsSelect.emit({value:this.value,selected:this.selected})):(this.parentElement.removeValue(this.value),this.selected=!1,this.tdsSelect.emit({value:this.value,selected:this.selected})),s.stopPropagation())},this.handleFocus=s=>{this.tdsFocus.emit(s)},this.handleBlur=s=>{this.tdsBlur.emit(s)},this.value=void 0,this.disabled=!1,this.selected=!1,this.multiselect=void 0,this.size="lg"}setSelected(e){var s=this;return(0,l.Z)(function*(){s.selected=e})()}render(){return(0,t.h)(t.H,{key:"0c0253f02e12d0eb7924969b2d347ab2005d0772",role:"option","aria-disabled":this.disabled,"aria-selected":this.selected},(0,t.h)("div",{key:"ad79763807bb52a3e242989f676a03e85804fc62",class:`dropdown-option \n          ${this.size}\n          ${this.selected?"selected":""}\n          ${this.disabled?"disabled":""}\n          `},this.multiselect?(0,t.h)("div",{class:"multiselect",onKeyDown:e=>{"Escape"===e.key&&this.parentElement.close()}},(0,t.h)("tds-checkbox",{onTdsChange:e=>{this.handleMultiselect(e)},disabled:this.disabled,checked:this.selected,class:{[this.size]:!0}},(0,t.h)("div",{slot:"label"},(0,t.h)("slot",null)))):(0,t.h)("button",{onClick:()=>{this.handleSingleSelect()},onFocus:e=>this.handleFocus(e),onBlur:e=>this.handleBlur(e),disabled:this.disabled,class:this.size},(0,t.h)("div",{class:"single-select"},(0,t.h)("slot",null),this.selected&&(0,t.h)("tds-icon",{name:"tick",size:"16px"})))))}static get delegatesFocus(){return!0}get host(){return(0,t.g)(this)}};i.style=":host{box-sizing:border-box;display:block;background-color:var(--tds-dropdown-option-background)}:host *{box-sizing:border-box}:host .dropdown-option{color:var(--tds-dropdown-option-color);border-bottom:1px solid var(--tds-dropdown-option-border);font:var(--tds-detail-02);letter-spacing:var(--tds-detail-02-ls);overflow-wrap:anywhere}:host .dropdown-option.selected{background-color:var(--tds-dropdown-option-background-selected)}:host .dropdown-option.disabled{color:var(--tds-dropdown-option-color-disabled)}:host .dropdown-option button:focus{outline:2px solid var(--tds-blue-400);outline-offset:-2px}:host .dropdown-option button{all:unset;width:100%}:host .dropdown-option button.lg{padding:19px 0 20px}:host .dropdown-option button.md{padding:15px 0 16px}:host .dropdown-option button.sm{padding:11px 0 12px}:host .dropdown-option button .single-select{display:flex;align-items:center;justify-content:space-between;padding:0 16px}:host .dropdown-option .multiselect{width:100%;height:100%}:host .dropdown-option .multiselect tds-checkbox{display:flex;height:100%;width:100%}:host .dropdown-option .multiselect tds-checkbox.lg{padding:15px 16px 16px}:host .dropdown-option .multiselect tds-checkbox.md{padding:11px 16px 12px}:host .dropdown-option .multiselect tds-checkbox.sm{padding:7px 16px 8px}:host .dropdown-option:hover{background-color:var(--tds-dropdown-option-background-hover);cursor:pointer}:host .dropdown-option:hover.disabled{background-color:var(--tds-dropdown-option-background);cursor:not-allowed}:host([hidden]){display:none}"}}]);