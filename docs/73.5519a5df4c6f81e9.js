"use strict";(self.webpackChunkMyAngularTegel=self.webpackChunkMyAngularTegel||[]).push([[73],{73:(d,o,s)=>{s.r(o),s.d(o,{tds_table_footer:()=>i});var e=s(6857);const l=["compactDesign"];function r(t){t.target.classList.remove("tds-table__page-selector-input--shake")}const i=class{constructor(t){(0,e.r)(this,t),this.tdsPagination=(0,e.c)(this,"tdsPagination",7),this.previousPage=()=>{this.paginationValue>=2&&this.paginationValue--,this.tdsPagination.emit({tableId:this.tableId,paginationValue:Number(this.paginationValue)}),this.storeLastCorrectValue(this.paginationValue)},this.nextPage=()=>{this.paginationValue<=this.pages&&this.paginationValue++,this.tdsPagination.emit({tableId:this.tableId,paginationValue:Number(this.paginationValue)}),this.storeLastCorrectValue(this.paginationValue)},this.pagination=!1,this.paginationValue=1,this.pages=null,this.cols=null,this.columnsNumber=0,this.compactDesign=!1,this.lastCorrectValue=void 0,this.tableId=""}internalTdsPropChangeListener(t){this.tableId===t.detail.tableId&&t.detail.changed.filter(a=>l.includes(a)).forEach(a=>{if(typeof this[a]>"u")throw new Error(`Table prop is not supported: ${a}`);this[a]=t.detail[a]})}connectedCallback(){this.tableEl=this.host.closest("tds-table"),this.tableId=this.tableEl.tableId}componentWillLoad(){l.forEach(a=>{this[a]=this.tableEl[a]}),this.storeLastCorrectValue(this.paginationValue);const t=this.host.parentElement.querySelector("tds-table-header").childElementCount;this.columnsNumber=this.cols?this.cols:t}storeLastCorrectValue(t){this.lastCorrectValue=t}paginationInputChange(t){const a=Number(t.target.value);a>t.target.max||a<t.target.min?(t.target.classList.add("tds-table__page-selector-input--shake"),this.inputElement.value=String(this.lastCorrectValue),this.paginationValue=Number(this.inputElement.value)):this.paginationValue=a,this.tdsPagination.emit({tableId:this.tableId,paginationValue:Number(this.paginationValue)}),this.storeLastCorrectValue(this.paginationValue)}render(){return(0,e.h)(e.H,{key:"8a128e443420d841b0e56303d4c533ced7fef56c",class:this.compactDesign?"tds-table--compact":""},(0,e.h)("tr",{key:"6315f2fdf35c670a702cb7a298b29d53a636a639",class:"tds-table__footer-row"},(0,e.h)("td",{key:"6d179522f5e379c8899d545c1cae1ebf868dc9dc",class:"tds-table__footer-cell",colSpan:this.columnsNumber},this.pagination&&(0,e.h)("div",{key:"d6b8f037c8a0b4ec05448a64ea3edc11b253289b",class:"tds-table__pagination"},(0,e.h)("div",{key:"422d83996b22557dc9d31ab23e82b040a3106f62",class:"tds-table__row-selector"}),(0,e.h)("div",{key:"a978da12ff6763049d9e75e9dea8d85e2786af07",class:"tds-table__page-selector"},(0,e.h)("input",{key:"343d34c4c7edebd6a797e4bb5c59e20ea5b43fad",ref:t=>this.inputElement=t,class:"tds-table__page-selector-input",type:"number",min:"1",max:this.pages,value:this.paginationValue,pattern:"[0-9]+",dir:"ltr",onChange:t=>this.paginationInputChange(t),onAnimationEnd:r}),(0,e.h)("p",{key:"38d4a5c1897adeda83ea8faec711a4e32c1ef040",class:"tds-table__footer-text"},"of ",(0,e.h)("span",{key:"0769b3a30cfe35dcfb13834625b60825ae087a60"},this.pages)," pages"),(0,e.h)("button",{key:"fa8af3c295fdbbeb5d965abd76ec71a7564f0a50",type:"button",class:"tds-table__footer-btn",disabled:this.paginationValue<=1,onClick:()=>this.previousPage()},(0,e.h)("tds-icon",{key:"0011853f15bc9f0880a2bdf98d20952df2f49ba8",name:"chevron_left",size:"20px"})),(0,e.h)("button",{key:"36c2c94ec609f6e6d30dfd9fc698709f65f24a98",type:"button",class:"tds-table__footer-btn",disabled:this.paginationValue>=this.pages,onClick:()=>this.nextPage()},(0,e.h)("tds-icon",{key:"e3affadd067d44e1f106be7a9334ffe14dae0f1f",name:"chevron_right",size:"20px"})))))))}get host(){return(0,e.g)(this)}};i.style=":host{box-sizing:border-box;display:table-footer-group;height:48px}:host *{box-sizing:border-box}:host .tds-table__footer-row{background-color:var(--tds-table-footer-background);color:var(--tds-table-color)}:host .tds-table__footer-cell{padding:0 16px}:host .tds-table__footer-cell .tds-table__pagination{height:48px;display:flex;align-items:center;justify-content:space-between}:host .tds-table__footer-cell .tds-table__pagination .tds-table__row-selector,:host .tds-table__footer-cell .tds-table__pagination .tds-table__page-selector{display:flex;align-items:center}:host .tds-table__footer-cell .tds-table__pagination .tds-table__page-selector-input{font:var(--tds-detail-02);letter-spacing:var(--tds-detail-02-ls);background-color:var(--tds-table-footer-page-selector-input-background);color:var(--tds-table-color);width:54px;height:30px;border:none;border-radius:4px;transition:background-color 250ms ease;margin-right:4px;padding-left:16px}:host .tds-table__footer-cell .tds-table__pagination .tds-table__page-selector-input:hover{background-color:var(--tds-table-footer-page-selector-input-background-hover)}:host .tds-table__footer-cell .tds-table__pagination .tds-table__page-selector-input:disabled{color:var(--tds-table-footer-page-selector-input-color-disabled)}:host .tds-table__footer-cell .tds-table__pagination .tds-table__page-selector-input--shake{animation:tds-shake-animation 0.5s cubic-bezier(0.36, 0.07, 0.19, 0.97) both;transform:translate3d(0, 0, 0);backface-visibility:hidden;perspective:1000px}:host .tds-table__footer-cell .tds-table__pagination .tds-table__footer-text{font:var(--tds-detail-02);letter-spacing:var(--tds-detail-02-ls);padding:1px 8px 0 0}:host .tds-table__footer-cell .tds-table__pagination .tds-table__footer-btn{display:flex;justify-content:center;align-items:center;border:none;background-color:transparent;cursor:pointer;height:32px;width:32px;border-radius:4px;transition:background-color 250ms ease;color:var(--tds-table-footer-page-selector-icon)}:host .tds-table__footer-cell .tds-table__pagination .tds-table__footer-btn:hover{background-color:var(--tds-table-footer-btn-hover)}:host .tds-table__footer-cell .tds-table__pagination .tds-table__footer-btn:disabled{cursor:default;color:var(--tds-table-footer-page-selector-icon-disabled)}:host .tds-table__footer-cell .tds-table__pagination .tds-table__footer-btn:disabled:hover{background-color:transparent}:host .tds-table__footer-cell .tds-table__pagination .tds-table__footer-btn-svg{height:20px;width:20px;fill:var(--tds-table-color)}:host(.tds-table--compact){height:32px}:host(.tds-table--compact) .tds-table__footer-cell .tds-table__pagination{height:32px}:host(.tds-table--compact) .tds-table__footer-cell .tds-table__pagination .tds-table__page-selector-input{height:24px}:host(.tds-table--compact) .tds-table__footer-cell .tds-table__pagination .tds-table__footer-btn{height:28px;width:28px}@keyframes tds-shake-animation{10%,90%{transform:translate3d(-1px, 0, 0)}20%,80%{transform:translate3d(2px, 0, 0)}30%,50%,70%{transform:translate3d(-4px, 0, 0)}40%,60%{transform:translate3d(4px, 0, 0)}}"}}]);