"use strict";(self.webpackChunkMyAngularTegel=self.webpackChunkMyAngularTegel||[]).push([[9549],{9549:(g,d,a)=>{a.r(d),a.d(d,{tds_body_cell:()=>o,tds_table_body_row:()=>n});var s=a(1879);const l=["verticalDividers","compactDesign","noMinWidth"],o=class{constructor(t){(0,s.r)(this,t),this.cellValue=void 0,this.cellKey=void 0,this.disablePadding=!1,this.textAlignState=void 0,this.activeSorting=!1,this.verticalDividers=!1,this.compactDesign=!1,this.noMinWidth=!1,this.whiteBackground=!1,this.tableId=""}internalTdsPropChangeListener(t){this.tableId===t.detail.tableId&&t.detail.changed.filter(e=>l.includes(e)).forEach(e=>{if(typeof this[e]>"u")throw new Error(`Table prop is not supported: ${e}`);this[e]=t.detail[e]})}internalTdsHoverListener(t){const{tableId:e,key:i}=t.detail;e===this.tableId&&(this.activeSorting=this.cellKey===i)}internalTdsTextAlignListener(t){const[e,i,b]=t.detail;this.tableId===e&&this.cellKey===i&&(this.textAlignState=b)}connectedCallback(){this.tableEl=this.host.closest("tds-table"),this.tableId=this.tableEl.tableId}componentWillLoad(){l.forEach(t=>{this[t]=this.tableEl[t]})}render(){return(0,s.h)(s.H,{class:{"tds-table__body-cell":!0,"tds-table__body-cell--hover":this.activeSorting,"tds-table__compact":this.compactDesign,"tds-table--divider":this.verticalDividers,"tds-table--no-min-width":this.noMinWidth,"tds-table__body-cell--no-padding":this.disablePadding},style:{textAlign:this.textAlignState}},this.cellValue,(0,s.h)("slot",null))}get host(){return(0,s.g)(this)}};o.style=":host(.tds-table__body-cell){box-sizing:border-box;font:var(--tds-detail-02);letter-spacing:var(--tds-detail-02-ls);display:table-cell;box-sizing:border-box;color:var(--tds-table-color);padding:var(--tds-spacing-element-16);min-width:192px;vertical-align:top;background-color:transparent;transition:background-color 200ms ease}:host(.tds-table__body-cell) *{box-sizing:border-box}:host(.tds-table__body-cell--no-padding){padding:0}:host(.tds-table__body-cell--hover){background-color:var(--tds-table-body-cell-background-hover)}:host(.tds-table__compact){padding:var(--tds-spacing-element-8) var(--tds-spacing-element-16)}:host(.tds-table--divider){border-right:1px solid var(--tds-table-divider)}:host(.tds-table--divider:last-of-type){border-right:none}:host(.tds-table--no-min-width){min-width:unset}";const r=["enableMultiselect","verticalDividers","compactDesign","modeVariant"],n=class{constructor(t){(0,s.r)(this,t),this.internalTdsRowChange=(0,s.c)(this,"internalTdsRowChange",6),this.internalTdsPagination=(0,s.c)(this,"internalTdsPagination",6),this.enableMultiselect=!1,this.bodyCheckBoxStatus=!1,this.mainCheckBoxStatus=!1,this.verticalDividers=!1,this.compactDesign=!1,this.noMinWidth=!1,this.modeVariant=null,this.tableId=""}bodyCheckBoxClicked(t){const e=this.host;this.bodyCheckBoxStatus=t.currentTarget.checked,!0===this.bodyCheckBoxStatus?e.classList.add("tds-table__row--selected"):e.classList.remove("tds-table__row--selected"),this.internalTdsRowChange.emit(this.bodyCheckBoxStatus)}bodyCheckBoxStatusUpdater(t){this.mainCheckBoxStatus=t,this.bodyCheckBoxStatus=this.mainCheckBoxStatus;const e=this.host;!0===this.bodyCheckBoxStatus?e.classList.add("tds-table__row--selected"):e.classList.remove("tds-table__row--selected"),this.internalTdsRowChange.emit(this.bodyCheckBoxStatus)}internalTdsPropChangeListener(t){this.tableId===t.detail.tableId&&t.detail.changed.filter(e=>r.includes(e)).forEach(e=>{if(typeof this[e]>"u")throw new Error(`Table prop is not supported: ${e}`);this[e]=t.detail[e]})}headCheckboxListener(t){this.tableId===t.detail[0]&&this.bodyCheckBoxStatusUpdater(t.detail[1])}internalTdsCheckboxChangeListener(t){const[e,i]=t.detail;this.tableId===e&&this.bodyCheckBoxStatusUpdater(i)}connectedCallback(){this.tableEl=this.host.closest("tds-table"),this.tableId=this.tableEl.tableId}componentWillLoad(){r.forEach(t=>{this[t]=this.tableEl[t]})}componentDidLoad(){this.internalTdsPagination.emit(this.tableId)}render(){return(0,s.h)(s.H,{class:{"tds-table__row":!0,"tds-table__compact":this.compactDesign,"tds-table--divider":this.verticalDividers,"tds-mode-variant-primary":"primary"===this.modeVariant,"tds-mode-variant-secondary":"secondary"===this.modeVariant}},this.enableMultiselect&&(0,s.h)("td",{class:"tds-table__body-cell tds-table__body-cell--checkbox tds-form-label tds-form-label--table"},(0,s.h)("tds-checkbox",{onTdsChange:t=>this.bodyCheckBoxClicked(t),checked:this.bodyCheckBoxStatus})),(0,s.h)("slot",null))}get host(){return(0,s.g)(this)}};n.style=":host(.tds-table__row){box-sizing:border-box;display:table-row;border-bottom:1px solid var(--tds-table-divider);background-color:var(--tds-table-body-row-background);transition:background-color 200ms ease;color:var(--tds-table-color)}:host(.tds-table__row) *{box-sizing:border-box}:host(.tds-table__row) .tds-table__body-cell--checkbox{min-width:48px;width:48px;padding:0}:host(.tds-table__row:hover){background-color:var(--tds-table-body-row-background-hover)}:host(.tds-table__row--selected){background-color:var(--tds-table-body-row-background-active)}:host(.tds-table__row--selected:hover){background-color:var(--tds-table-body-row-background-active-hover)}:host(.tds-table__row--hidden){display:none}:host(.tds-table__row--expended){width:100%;background-color:pink}:host .tds-form-label--table{width:100%;height:48px;display:flex;justify-content:center;align-items:center;cursor:pointer}:host(.tds-table__compact) .tds-form-label--table{height:32px}:host(.tds-table--divider) .tds-table__body-cell--checkbox{border-right:1px solid var(--tds-table-divider)}"}}]);