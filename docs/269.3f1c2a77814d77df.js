"use strict";(self.webpackChunkMyAngularTegel=self.webpackChunkMyAngularTegel||[]).push([[269],{269:(c,d,l)=>{l.r(d),l.d(d,{tds_table_body_row:()=>a});var b=l(5861),s=l(6857);const o=["multiselect","verticalDividers","compactDesign"],a=class{constructor(e){(0,s.r)(this,e),this.tdsSelect=(0,s.c)(this,"tdsSelect",6),this.selected=!1,this.disabled=!1,this.multiselect=!1,this.mainCheckBoxStatus=!1,this.verticalDividers=!1,this.compactDesign=!1,this.noMinWidth=!1,this.tableId=""}handleCheckboxChange(e){var t=this;return(0,b.Z)(function*(){t.selected=e.detail.checked,t.tdsSelect.emit({tableId:t.tableId,checked:t.selected,selectedRows:yield t.tableEl.getSelectedRows()})})()}internalTdsPropChangeListener(e){this.tableId===e.detail.tableId&&e.detail.changed.filter(t=>o.includes(t)).forEach(t=>{if(typeof this[t]>"u")throw new Error(`Table prop is not supported: ${t}`);this[t]=e.detail[t]})}connectedCallback(){this.tableEl=this.host.closest("tds-table"),this.tableId=this.tableEl.tableId}componentWillLoad(){o.forEach(e=>{this[e]=this.tableEl[e]})}render(){return(0,s.h)(s.H,{key:"2b99a5336354cb5e7e2e7ef9c81bac76a55c6895",class:{"tds-table__row":!0,"tds-table__row--selected":this.selected,"tds-table__compact":this.compactDesign,"tds-table--divider":this.verticalDividers}},this.multiselect&&(0,s.h)("td",{key:"049e91ea474a539b6fbe344db4aed9de42297f3d",class:"tds-table__body-cell tds-table__body-cell--checkbox tds-form-label tds-form-label--table"},(0,s.h)("tds-checkbox",{key:"2af9307e3143db71cae028c1cc2116382b20f4c9",onTdsChange:e=>this.handleCheckboxChange(e),checked:this.selected,disabled:this.disabled})),(0,s.h)("slot",{key:"2eff0d398eb53934ca0b152d25422a5febbbffbb"}))}get host(){return(0,s.g)(this)}};a.style=":host(.tds-table__row){box-sizing:border-box;display:table-row;border-bottom:1px solid var(--tds-table-divider);background-color:var(--tds-table-body-row-background);transition:background-color 200ms ease;color:var(--tds-table-color)}:host(.tds-table__row) *{box-sizing:border-box}:host(.tds-table__row) .tds-table__body-cell--checkbox{min-width:48px;width:48px;padding:0}:host(.tds-table__row:hover){background-color:var(--tds-table-body-row-background-hover)}:host(.tds-table__row--selected){background-color:var(--tds-table-body-row-background-selected)}:host(.tds-table__row--selected:hover){background-color:var(--tds-table-body-row-background-selected-hover)}:host(.tds-table__row--hidden){display:none}:host(.tds-table__row--expended){width:100%;background-color:pink}:host .tds-form-label--table{width:100%;height:48px;display:flex;justify-content:center;align-items:center;cursor:pointer}:host(.tds-table__compact) .tds-form-label--table{height:32px}:host(.tds-table--divider) .tds-table__body-cell--checkbox{border-right:1px solid var(--tds-table-divider)}"}}]);