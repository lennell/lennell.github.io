"use strict";(self.webpackChunkMyAngularTegel=self.webpackChunkMyAngularTegel||[]).push([[5100],{5100:(b,n,o)=>{o.r(n),o.d(n,{tds_folder_tabs:()=>d});var u=o(5861),s=o(1879);const d=class{constructor(t){(0,s.r)(this,t),this.tdsChange=(0,s.c)(this,"tdsChange",7),this.navWrapperElement=null,this.componentWidth=0,this.buttonsWidth=0,this.scrollWidth=0,this.addResizeObserver=()=>{new ResizeObserver(l=>{l.forEach(i=>{const h=i.contentRect.width;let r=0;Array.from(this.host.children).forEach(c=>{const a=window.getComputedStyle(c);r+=c.clientWidth+parseFloat(a.marginLeft)+parseFloat(a.marginRight)}),this.componentWidth=h,this.buttonsWidth=r,this.scrollWidth=r-h,this.buttonsWidth>this.componentWidth?this.evaluateScrollButtons():(this.showLeftScroll=!1,this.showRightScroll=!1)})}).observe(this.navWrapperElement)},this.addEventListenerToTabs=()=>{this.children=Array.from(this.host.children),this.children=this.children.map((e,l)=>(e.addEventListener("click",()=>{e.disabled||this.tdsChange.emit({selectedTabIndex:this.children.indexOf(e)}).defaultPrevented||(this.children.forEach(h=>h.setSelected(!1)),e.setSelected(!0),this.selectedIndex=l)}),e))},this.modeVariant=null,this.defaultSelectedIndex=0,this.selectedIndex=void 0,this.buttonWidth=0,this.showLeftScroll=!1,this.showRightScroll=!1}selectTab(t){var e=this;return(0,u.Z)(function*(){return e.children[t].disabled||(e.children.forEach(l=>l.setSelected(!1)),e.children=e.children.map((l,i)=>(i===t&&(l.setSelected(!0),e.selectedIndex=t),l))),{selectedTabIndex:e.selectedIndex}})()}calculateButtonWidth(){this.children=this.children.map(t=>(t.offsetWidth>this.buttonWidth&&(this.buttonWidth=t.offsetWidth),t)),this.children.forEach(t=>{t.setTabWidth(this.buttonWidth)})}scrollRight(){this.navWrapperElement.scrollLeft=this.navWrapperElement.scrollLeft+this.buttonWidth,this.evaluateScrollButtons()}scrollLeft(){this.navWrapperElement.scrollLeft=this.navWrapperElement.scrollLeft-this.buttonWidth,this.evaluateScrollButtons()}evaluateScrollButtons(){const t=this.navWrapperElement.scrollLeft;this.showRightScroll=!(t>=this.scrollWidth),this.showLeftScroll=!(t<=0)}connectedCallback(){this.children=Array.from(this.host.children),this.children[0].classList.add("first"),this.children[this.children.length-1].classList.add("last")}componentDidLoad(){void 0===this.selectedIndex?(this.addEventListenerToTabs(),this.children[this.defaultSelectedIndex].setSelected(!0),this.selectedIndex=this.defaultSelectedIndex,this.tdsChange.emit({selectedTabIndex:this.selectedIndex})):(this.children[this.selectedIndex].setSelected(!0),this.tdsChange.emit({selectedTabIndex:this.selectedIndex})),this.calculateButtonWidth()}componentDidUpdate(){this.calculateButtonWidth()}componentDidRender(){this.buttonsWidth>this.componentWidth?this.evaluateScrollButtons():(this.showLeftScroll=!1,this.showRightScroll=!1),this.addResizeObserver()}render(){return(0,s.h)(s.H,{role:"list",class:this.modeVariant?`tds-mode-variant-${this.modeVariant}`:""},(0,s.h)("div",{class:"wrapper",ref:t=>{this.navWrapperElement=t}},(0,s.h)("button",{class:"scroll-left-button "+(this.showLeftScroll?"show":""),disabled:!this.showLeftScroll,onClick:()=>this.scrollLeft()},(0,s.h)("tds-icon",{name:"chevron_left",size:"20px"})),(0,s.h)("slot",null),(0,s.h)("button",{class:"scroll-right-button "+(this.showRightScroll?"show":""),disabled:!this.showRightScroll,onClick:()=>this.scrollRight()},(0,s.h)("tds-icon",{name:"chevron_right",size:"20px"}))))}get host(){return(0,s.g)(this)}};d.style=":host{box-sizing:border-box;overflow:hidden;outline:0}:host *{box-sizing:border-box}:host .wrapper{display:flex;overflow-x:scroll;scrollbar-width:none;position:relative}:host .wrapper::-webkit-scrollbar{display:none}:host .scroll-right-button{z-index:201;right:0}:host .scroll-left-button{z-index:201;left:0}:host .scroll-right-button,:host .scroll-left-button{height:50px;color:var(--tds-folder-tabs-scroll-btn-color);cursor:pointer;border:0;width:0;background-color:var(--tds-folder-tabs-scroll-btn-background);display:none;justify-content:center;align-items:center;opacity:0;pointer-events:none;position:sticky}:host .scroll-right-button.show,:host .scroll-left-button.show{min-width:48px;display:block;opacity:1;pointer-events:all}:host .scroll-right-button:hover,:host .scroll-left-button:hover{background-color:var(--tds-folder-tabs-scroll-btn-background-hover)}:host .scroll-right-button:active,:host .scroll-left-button:active{background-color:var(--tds-folder-tabs-scroll-btn-background-active)}:host .scroll-right-button:focus,:host .scroll-left-button:focus{outline:2px solid var(--tds-blue-400);outline-offset:-2px}:host .scroll-right-button svg,:host .scroll-left-button svg{fill:var(--tds-folder-tabs-scroll-btn-color)}"}}]);