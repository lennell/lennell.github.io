"use strict";(self.webpackChunkMyAngularTegel=self.webpackChunkMyAngularTegel||[]).push([[8467],{8467:(h,s,t)=>{t.r(s),t.d(s,{tds_stepper:()=>i});var e=t(1879),n=t(813);const i=class{constructor(a){(0,e.r)(this,a),this.internalTdsPropsChange=(0,e.c)(this,"internalTdsPropsChange",6),this.orientation="horizontal",this.labelPosition="below",this.size="lg",this.hideLabels=!1,this.stepperId=(0,n.g)()}componentWillLoad(){this.host.children[0].classList.add("first"),this.host.children[this.host.children.length-1].classList.add("last"),"vertical"===this.orientation&&(this.labelPosition="aside")}handleDirectionChange(){this.internalTdsPropsChange.emit({stepperId:this.stepperId,changed:["orientation"],orientation:this.orientation})}handleLabelPositionChange(){this.internalTdsPropsChange.emit({stepperId:this.stepperId,changed:["labelPosition"],labelPosition:this.labelPosition})}handleSizeChange(){this.internalTdsPropsChange.emit({stepperId:this.stepperId,changed:["size"],size:this.size})}handleHideLabelsChange(){this.internalTdsPropsChange.emit({stepperId:this.stepperId,changed:["hideLabels"],hideLabels:this.hideLabels})}render(){return(0,e.h)(e.H,null,(0,e.h)("div",{role:"list",class:`${this.orientation} text-position-${this.labelPosition} ${this.size}`},(0,e.h)("slot",null)))}get host(){return(0,e.g)(this)}static get watchers(){return{orientation:["handleDirectionChange"],labelPosition:["handleLabelPositionChange"],size:["handleSizeChange"],hideLabels:["handleHideLabelsChange"]}}};i.style=":host [role=list]{display:flex;justify-content:space-evenly;min-width:100%}:host [role=list]:not(.text-position-aside){display:table;table-layout:fixed;width:100%;list-style:none}:host [role=list].vertical{height:100%;display:flex;flex-direction:column;justify-content:unset;gap:52px}:host [role=list].vertical.sm{gap:36px}:host [role=list].horizontal.text-position-aside{justify-content:unset}"}}]);