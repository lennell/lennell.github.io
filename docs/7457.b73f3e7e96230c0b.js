"use strict";(self.webpackChunkMyAngularTegel=self.webpackChunkMyAngularTegel||[]).push([[7457],{7457:(c,i,a)=>{a.r(i),a.d(i,{tds_card:()=>o});var e=a(1879),d=a(813);const o=class{constructor(l){(0,e.r)(this,l),this.tdsClick=(0,e.c)(this,"tdsClick",6),this.handleClick=()=>{this.tdsClick.emit({cardId:this.cardId})},this.getCardHeader=()=>{const t=(0,d.h)("header",this.host),s=(0,d.h)("subheader",this.host),r=(0,d.h)("thumbnail",this.host);return(0,e.h)("div",{class:"card-header"},r&&(0,e.h)("slot",{name:"thumbnail"}),(0,e.h)("div",{class:"header-subheader"},this.header&&(0,e.h)("span",{class:"header"},this.header),t&&(0,e.h)("slot",{name:"header"}),this.subheader&&(0,e.h)("span",{class:"subheader"},this.subheader),s&&(0,e.h)("slot",{name:"subheader"})))},this.getCardContent=()=>{const t=(0,d.h)("body",this.host),s=(0,d.h)("body-image",this.host),r=(0,d.h)("bottom",this.host);return(0,e.h)("div",null,"below-header"===this.imagePlacement&&this.getCardHeader(),(0,e.h)("div",{class:"card-body"},s&&(0,e.h)("slot",{name:"body-image"}),this.bodyImg&&(0,e.h)("img",{class:"card-body-img",src:this.bodyImg,alt:this.bodyImgAlt}),"above-header"===this.imagePlacement&&this.getCardHeader(),this.bodyDivider&&(0,e.h)("tds-divider",null),t&&(0,e.h)("slot",{name:"body"})),r&&(0,e.h)("slot",{name:"bottom"}))},this.modeVariant=null,this.imagePlacement="below-header",this.header=void 0,this.subheader=void 0,this.bodyImg=void 0,this.bodyImgAlt=void 0,this.bodyDivider=!1,this.clickable=!1,this.cardId=(0,d.g)()}render(){return(0,e.h)(e.H,{class:this.modeVariant&&`tds-mode-variant-${this.modeVariant}`},this.clickable?(0,e.h)("button",{class:`card ${this.clickable?"clickable":""} ${this.imagePlacement}`,onClick:()=>{this.clickable&&this.handleClick()}},this.getCardContent()):(0,e.h)("div",{class:`card ${this.clickable?"clickable":""} ${this.imagePlacement}`},this.getCardContent()))}get host(){return(0,e.g)(this)}};o.style=".card{box-sizing:border-box;box-shadow:var(--tds-card-box);background-color:var(--tds-card-background);display:block;border-radius:4px;overflow:hidden}.card *{box-sizing:border-box}.card.clickable:hover{box-shadow:var(--tds-card-box-hover);cursor:pointer}.card .card-header{font:var(--tds-headline-06);letter-spacing:var(--tds-headline-06-ls);padding:16px;display:flex;align-items:center}.card .card-header slot[name=thumbnail]::slotted(*){width:36px;height:36px;border-radius:100%;margin-right:16px}.card .card-header .card-top-header{padding-left:16px;display:flex;flex-direction:column}.card .card-header .card-top-header.no-header-img{padding-left:0}.card .card-header.below{padding-top:16px}.card .header-subheader{display:flex;flex-direction:column;gap:4px}.card .header-subheader .header,.card .header-subheader slot[name=header]{color:var(--tds-card-headline)}.card .header-subheader .subheader,.card .header-subheader slot[name=subheader]{color:var(--tds-card-sub-headline)}.card .card-body-img{width:100%}.card .tds-divider{margin:16px 16px 0;background-color:var(--tds-card-divider);height:1px}.card .card-body{display:block;word-wrap:break-word}.card slot[name=body]::slotted(*){font:var(--tds-detail-03);letter-spacing:var(--tds-detail-03-ls);color:var(--tds-card-body-color);padding:0 16px;margin-bottom:16px;margin-top:16px;max-width:336px}.card slot[name=bottom]::slotted(*){display:flex;padding:16px;color:var(--tds-card-icon-color)}button{border:none;text-align:left;padding:0}button:focus-visible{outline:2px solid var(--tds-blue-400);outline-offset:-2px}button:active{box-shadow:var(--tds-card-box-pressed)}"}}]);