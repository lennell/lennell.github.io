"use strict";(self.webpackChunkMyAngularTegel=self.webpackChunkMyAngularTegel||[]).push([[4526],{4526:(i,l,s)=>{s.r(l),s.d(l,{tds_table_body_row_expandable:()=>d});var t=s(1879);const o=["verticalDividers","compactDesign","noMinWidth","modeVariant"],d=class{constructor(e){(0,t.r)(this,e),this.internalTdsRowExpanded=(0,t.c)(this,"internalTdsRowExpanded",6),this.internalTdsPagination=(0,t.c)(this,"internalTdsPagination",6),this.colSpan=null,this.isExpanded=!1,this.tableId="",this.columnsNumber=null,this.verticalDividers=!1,this.compactDesign=!1,this.noMinWidth=!1,this.modeVariant=null}internalTdsPropChangeListener(e){this.tableId===e.detail.tableId&&e.detail.changed.filter(a=>o.includes(a)).forEach(a=>{if(typeof this[a]>"u")throw new Error(`Table prop is not supported: ${a}`);this[a]=e.detail[a]})}connectedCallback(){this.tableEl=this.host.closest("tds-table"),this.tableId=this.tableEl.tableId}componentWillLoad(){o.forEach(e=>{this[e]=this.tableEl[e]})}componentDidLoad(){this.internalTdsPagination.emit(this.tableId)}componentWillRender(){this.columnsNumber=null!==this.colSpan?this.colSpan:this.tableEl.querySelector("tds-table-header").childElementCount+1}sendValue(){this.internalTdsRowExpanded.emit([this.tableId,this.isExpanded])}onChangeHandler(e){this.isExpanded=!0===e.currentTarget.checked,this.sendValue()}render(){return(0,t.h)(t.H,{class:{"tds-table__row":!0,"tds-table__row-expand--active":this.isExpanded,"tds-table__compact":this.compactDesign,"tds-table--divider":this.verticalDividers}},(0,t.h)("tr",{class:"tds-table__row"},(0,t.h)("td",{class:"tds-table__cell tds-table__cell--expand"},(0,t.h)("label",{class:"tds-table__expand-control-container"},(0,t.h)("input",{class:"tds-table__expand-input",type:"checkbox",onChange:e=>this.onChangeHandler(e),checked:this.isExpanded}),(0,t.h)("span",{class:"tds-expendable-row-icon"},(0,t.h)("svg",{fill:"none",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32"},(0,t.h)("path",{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M4.273 9.783a1 1 0 0 1 1.415 0l9.888 9.888a.6.6 0 0 0 .848 0l9.888-9.888a1 1 0 1 1 1.415 1.414l-9.889 9.889a2.6 2.6 0 0 1-3.677 0l-9.888-9.889a1 1 0 0 1 0-1.414Z",fill:"currentColor"}))))),(0,t.h)("slot",null)),(0,t.h)("tr",{class:"tds-table__row-expand"},(0,t.h)("td",{class:"tds-table__cell-expand",colSpan:this.columnsNumber},(0,t.h)("slot",{name:"expand-row"}))))}get host(){return(0,t.g)(this)}};d.style=":host{box-sizing:border-box;display:contents}:host *{box-sizing:border-box}:host .tds-table__row,:host .tds-table__row-extend{display:table-row;border-bottom:1px solid var(--tds-table-divider);background-color:var(--tds-table-body-row-background);transition:background-color 200ms ease;color:var(--tds-table-color)}:host .tds-table__row:hover,:host .tds-table__row-extend:hover{background-color:var(--tds-table-body-row-background-hover)}:host .tds-table__expand-control-container{display:flex;justify-content:center;align-items:center;height:46px;cursor:pointer;padding:0 16px;position:relative}:host .tds-table__expand-control-container .tds-table__expand-input{all:unset;top:0;left:0;width:100%;height:100%;position:absolute;cursor:pointer}:host .tds-table__expand-control-container .tds-table__expand-input:focus{outline:2px solid var(--tds-blue-400);outline-offset:-2px}:host .tds-table__expand-control-container .tds-expendable-row-icon{height:16px;width:16px;transition:transform 200ms ease;transform:rotate(0)}:host .tds-table__row-expand{display:none;transition:background-color 200ms ease}:host .tds-table__row-expand .tds-table__cell-expand{padding:16px 16px 16px 66px;color:var(--tds-table-color)}:host(.tds-table__row-expand--active) .tds-table__row{background-color:var(--tds-table-body-row-background-selected)}:host(.tds-table__row-expand--active) .tds-table__expand-control-container .tds-expendable-row-icon{transform:rotate(180deg)}:host(.tds-table__row-expand--active) .tds-table__row-expand{background-color:var(--tds-table-body-row-background-selected);display:table-row}:host(.tds-table__compact) .tds-table__expand-control-container{height:30px}:host(.tds-table__compact) .tds-table__row-expand .tds-table__cell-expand{padding:8px 16px 8px 66px}:host(.tds-table__row--hidden){display:none}:host(.tds-table--divider) .tds-table__cell--expand{border-right:1px solid var(--tds-table-divider)}"}}]);