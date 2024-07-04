"use strict";(self.webpackChunkMyAngularTegel=self.webpackChunkMyAngularTegel||[]).push([[6883],{6883:(r,a,s)=>{s.r(a),s.d(a,{tds_datetime:()=>i});var m=s(5861),e=s(6857);const i=class{constructor(d){(0,e.r)(this,d),this.tdsChange=(0,e.c)(this,"tdsChange",6),this.tdsBlur=(0,e.c)(this,"tdsBlur",6),this.tdsFocus=(0,e.c)(this,"tdsFocus",6),this.tdsInput=(0,e.c)(this,"tdsInput",6),this.getDefaultValue=()=>{const t_year=this.defaultValue.slice(0,4),t_month=this.defaultValue.slice(5,7),t_day=this.defaultValue.slice(8,10),t_hours=this.defaultValue.slice(11,13),t_minutes=this.defaultValue.slice(14,16);switch(this.type){case"datetime-local":return`${t_year}-${t_month}-${t_day}T${t_hours}:${t_minutes}`;case"date":return`${t_year}-${t_month}-${t_day}`;case"time":return`${this.defaultValue.slice(0,2)}:${this.defaultValue.slice(3,5)}`;default:throw new Error("Invalid type.")}},this.type="datetime-local",this.value="",this.min=void 0,this.max=void 0,this.defaultValue="none",this.disabled=!1,this.size="lg",this.noMinWidth=!1,this.modeVariant=null,this.name="",this.state=void 0,this.autofocus=!1,this.label="",this.helper="",this.focusInput=void 0}setValue(d){var t=this;return(0,m.Z)(function*(){t.value=d})()}componentWillLoad(){"none"!==this.defaultValue&&(this.value=this.getDefaultValue())}handleFocusIn(){this.focusInput=!0}handleFocusOut(){this.focusInput=!1}handleInput(d){this.value=d.target.value,this.tdsInput.emit(d)}handleChange(d){this.tdsChange.emit(d)}handleFocusClick(d){this.textInput.focus(),this.tdsFocus.emit(d)}handleBlur(d){this.textInput.blur(),this.tdsBlur.emit(d)}render(){let d=" tds-datetime-input";return"md"===this.size&&(d+=`${d}-md`),"sm"===this.size&&(d+=`${d}-sm`),(0,e.h)("div",{key:"bbf891d5e12a402775f253dc7010aa57ac0aa3b2",class:`\n        ${this.noMinWidth?"tds-form-datetime-nomin":""}\n        ${this.focusInput?"tds-form-datetime tds-datetime-focus":" tds-form-datetime"}\n        ${this.value.length>0?"tds-datetime-data":""}\n        ${this.disabled?"tds-form-datetime-disabled":""}\n        ${"md"===this.size?"tds-form-datetime-md":""}\n        ${"sm"===this.size?"tds-form-datetime-sm":""}\n        ${"error"===this.state||"success"===this.state?`tds-form-datetime-${this.state}`:""}\n        ${null!==this.modeVariant?`tds-mode-variant-${this.modeVariant}`:""}`},this.label&&(0,e.h)("label",{key:"5d82dd3550ec13ee724f27ed351c825a68fef879",htmlFor:this.name,class:"tds-datetime-label"},this.label),(0,e.h)("div",{key:"6c33d37db85b9d2456bf798b5ebc3511278ed20c",onClick:t=>this.handleFocusClick(t),class:"tds-datetime-container"},(0,e.h)("div",{key:"8180010cb4c1a486ca0ad38cf5e071dc2c3cdf8e",class:"tds-datetime-input-container"},(0,e.h)("input",{key:"57ebc684980064f0e80c2098f6b4ecce43c51043",ref:t=>this.textInput=t,class:d,type:this.type,disabled:this.disabled,value:this.value,min:this.min,max:this.max,autofocus:this.autofocus,name:this.name,onInput:t=>this.handleInput(t),onBlur:t=>this.handleBlur(t),onChange:t=>this.handleChange(t)}),(0,e.h)("div",{key:"201c1a161d7a432c25fe950f1b0ab89b39661007",class:"datetime-icon icon-datetime-local"},(0,e.h)("tds-icon",{key:"5d1d5507b58eefedbd4bb547749850649d73279b",size:"20px",name:"calendar"})),(0,e.h)("div",{key:"627fcb60cefc9652cd30234f300e77c5abd36934",class:"datetime-icon icon-time"},(0,e.h)("tds-icon",{key:"e44e6fc4e7eaf8979ecfcc69d57c36fd00bde8b6",size:"20px",name:"clock"}))),(0,e.h)("div",{key:"c167492c99eb44ab832b70d9a814455c54a5135b",class:"tds-datetime-bar"})),this.helper&&(0,e.h)("div",{key:"67a91d166c2ef9653518add8f16d2d850dd1b4cf",class:"tds-datetime-helper"},(0,e.h)("div",{key:"1dc9e8119c99d15a0f72cdf8320982e2edbe34d7",class:"tds-helper"},"error"===this.state&&(0,e.h)("tds-icon",{key:"fec21bee110bd7a4e83bf44b23961713d5d63511",name:"error",size:"16px"}),this.helper)))}};i.style='.tds-datetime-input[type=datetime-local].sc-tds-datetime~.icon-time.sc-tds-datetime,.tds-datetime-input-md[type=datetime-local].sc-tds-datetime~.icon-time.sc-tds-datetime,.tds-datetime-input-sm[type=datetime-local].sc-tds-datetime~.icon-time.sc-tds-datetime{display:none}.tds-datetime-input[type=date].sc-tds-datetime~.icon-time.sc-tds-datetime,.tds-datetime-input-md[type=date].sc-tds-datetime~.icon-time.sc-tds-datetime,.tds-datetime-input-sm[type=date].sc-tds-datetime~.icon-time.sc-tds-datetime{display:none}.tds-datetime-input[type=time].sc-tds-datetime~.icon-datetime-local.sc-tds-datetime,.tds-datetime-input-md[type=time].sc-tds-datetime~.icon-datetime-local.sc-tds-datetime,.tds-datetime-input-sm[type=time].sc-tds-datetime~.icon-datetime-local.sc-tds-datetime{display:none}.tds-datetime-input.sc-tds-datetime{box-sizing:border-box;border-radius:4px 4px 0 0;width:100%;box-sizing:border-box;margin:0;border:none;outline:none;height:100%;color:var(--tds-datetime-color);background-color:var(--tds-datetime-background);font:var(--tds-detail-02);letter-spacing:var(--tds-detail-02-ls);padding:var(--tds-spacing-element-20) var(--tds-spacing-element-16)}.tds-datetime-input.sc-tds-datetime *.sc-tds-datetime{box-sizing:border-box}.tds-datetime-input.sc-tds-datetime::placeholder{opacity:1;color:var(--tds-datetime-placeholder)}.tds-datetime-input.sc-tds-datetime:focus::placeholder{color:var(--tds-datetime-placeholder-color-focus)}.tds-datetime-input.sc-tds-datetime:disabled{background-color:var(--tds-datetime-background-disabled);color:var(--tds-datetime-color-disabled);cursor:not-allowed}.tds-datetime-input.sc-tds-datetime:disabled::placeholder{color:var(--tds-datetime-placeholder-disabled)}.tds-datetime-input.sc-tds-datetime:disabled~.tds-datetime-label-inside.sc-tds-datetime{color:var(--tds-datetime-label-disabled)}.tds-datetime-input-md.sc-tds-datetime{box-sizing:border-box;border-radius:4px 4px 0 0;width:100%;box-sizing:border-box;margin:0;border:none;outline:none;height:100%;color:var(--tds-datetime-color);background-color:var(--tds-datetime-background);font:var(--tds-detail-02);letter-spacing:var(--tds-detail-02-ls);padding:var(--tds-spacing-element-16)}.tds-datetime-input-md.sc-tds-datetime *.sc-tds-datetime{box-sizing:border-box}.tds-datetime-input-md.sc-tds-datetime::placeholder{opacity:1;color:var(--tds-datetime-placeholder)}.tds-datetime-input-md.sc-tds-datetime:focus::placeholder{color:var(--tds-datetime-placeholder-color-focus)}.tds-datetime-input-md.sc-tds-datetime:disabled{background-color:var(--tds-datetime-background-disabled);color:var(--tds-datetime-color-disabled);cursor:not-allowed}.tds-datetime-input-md.sc-tds-datetime:disabled::placeholder{color:var(--tds-datetime-placeholder-disabled)}.tds-datetime-input-md.sc-tds-datetime:disabled~.tds-datetime-label-inside.sc-tds-datetime{color:var(--tds-datetime-label-disabled)}.tds-datetime-input-sm.sc-tds-datetime{box-sizing:border-box;border-radius:4px 4px 0 0;width:100%;box-sizing:border-box;margin:0;border:none;outline:none;height:100%;color:var(--tds-datetime-color);background-color:var(--tds-datetime-background);font:var(--tds-detail-02);letter-spacing:var(--tds-detail-02-ls);padding:var(--tds-spacing-element-16)}.tds-datetime-input-sm.sc-tds-datetime *.sc-tds-datetime{box-sizing:border-box}.tds-datetime-input-sm.sc-tds-datetime::placeholder{opacity:1;color:var(--tds-datetime-placeholder)}.tds-datetime-input-sm.sc-tds-datetime:focus::placeholder{color:var(--tds-datetime-placeholder-color-focus)}.tds-datetime-input-sm.sc-tds-datetime:disabled{background-color:var(--tds-datetime-background-disabled);color:var(--tds-datetime-color-disabled);cursor:not-allowed}.tds-datetime-input-sm.sc-tds-datetime:disabled::placeholder{color:var(--tds-datetime-placeholder-disabled)}.tds-datetime-input-sm.sc-tds-datetime:disabled~.tds-datetime-label-inside.sc-tds-datetime{color:var(--tds-datetime-label-disabled)}.tds-datetime-container.sc-tds-datetime{border-radius:4px 4px 0 0;display:flex;position:relative;height:56px;box-sizing:border-box;background-color:var(--tds-datetime-background);border-bottom:1px solid var(--tds-datetime-border-bottom);transition:border-bottom-color 200ms ease}.tds-datetime-container.sc-tds-datetime:hover{border-bottom-color:var(--tds-datetime-border-bottom-hover)}.tds-form-datetime-md.sc-tds-datetime .tds-datetime-container.sc-tds-datetime{height:48px}.tds-form-datetime-sm.sc-tds-datetime .tds-datetime-container.sc-tds-datetime{height:40px}.tds-datetime-input-container.sc-tds-datetime{position:relative;width:100%}.tds-datetime-input-container.sc-tds-datetime .datetime-icon.sc-tds-datetime{height:20px;width:20px;position:absolute;top:50%;transform:translateY(-50%);right:18px;pointer-events:none;color:var(--tds-datetime-icon)}.tds-datetime-label.sc-tds-datetime{font:var(--tds-detail-05);letter-spacing:var(--tds-detail-05-ls);display:block;margin-bottom:var(--tds-spacing-element-8);color:var(--tds-datetime-label-color)}.tds-datetime-label-inside.sc-tds-datetime{font:var(--tds-detail-02);letter-spacing:var(--tds-detail-02-ls);position:absolute;pointer-events:none;color:var(--tds-datetime-label-inside-color);left:16px}.tds-form-datetime.sc-tds-datetime{display:block;min-width:208px;background:unset}.tds-form-datetime-nomin.sc-tds-datetime{min-width:auto}.tds-form-datetime.tds-datetime-container-label-inside.sc-tds-datetime .tds-datetime-input.sc-tds-datetime{padding-top:var(--tds-spacing-element-24);padding-bottom:15px}.tds-form-datetime.tds-datetime-container-label-inside.sc-tds-datetime .tds-datetime-input.sc-tds-datetime~.tds-datetime-label-inside.sc-tds-datetime{top:20px}.tds-form-datetime.tds-datetime-container-label-inside.sc-tds-datetime .tds-datetime-input.sc-tds-datetime::placeholder{color:transparent}.tds-form-datetime.tds-datetime-container-label-inside.sc-tds-datetime .tds-datetime-input.sc-tds-datetime .sc-tds-datetime::placeholder{color:transparent}.tds-form-datetime.tds-datetime-container-label-inside.sc-tds-datetime .tds-datetime-input.sc-tds-datetime:focus::placeholder{transition:color 0.35s ease;color:var(--tds-datetime-placeholder-color-focus)}.tds-form-datetime.tds-datetime-container-label-inside.sc-tds-datetime .tds-datetime-input-md.sc-tds-datetime{padding-top:var(--tds-spacing-element-20);padding-bottom:11px}.tds-form-datetime.tds-datetime-container-label-inside.sc-tds-datetime .tds-datetime-input-md.sc-tds-datetime~.tds-datetime-label-inside.sc-tds-datetime{top:16px}.tds-form-datetime.tds-datetime-container-label-inside.sc-tds-datetime .tds-datetime-input-md.sc-tds-datetime::placeholder{color:transparent}.tds-form-datetime.tds-datetime-container-label-inside.sc-tds-datetime .tds-datetime-input-md.sc-tds-datetime .sc-tds-datetime::placeholder{color:transparent}.tds-form-datetime.tds-datetime-container-label-inside.sc-tds-datetime .tds-datetime-input-md.sc-tds-datetime:focus::placeholder{transition:color 0.35s ease;color:var(--tds-datetime-placeholder-color-focus)}.tds-form-datetime.tds-datetime-container-label-inside.sc-tds-datetime .tds-datetime-input-sm.sc-tds-datetime{padding-top:var(--tds-spacing-element-20);padding-bottom:11px}.tds-form-datetime.tds-datetime-container-label-inside.sc-tds-datetime .tds-datetime-input-sm.sc-tds-datetime~.tds-datetime-label-inside.sc-tds-datetime{top:16px}.tds-form-datetime.tds-datetime-container-label-inside.sc-tds-datetime .tds-datetime-input-sm.sc-tds-datetime::placeholder{color:transparent}.tds-form-datetime.tds-datetime-container-label-inside.sc-tds-datetime .tds-datetime-input-sm.sc-tds-datetime .sc-tds-datetime::placeholder{color:transparent}.tds-form-datetime.tds-datetime-container-label-inside.sc-tds-datetime .tds-datetime-input-sm.sc-tds-datetime:focus::placeholder{transition:color 0.35s ease;color:var(--tds-datetime-placeholder-color-focus)}.tds-form-datetime.tds-datetime-container-label-inside.tds-datetime-focus.sc-tds-datetime .tds-datetime-input-sm.sc-tds-datetime~.tds-datetime-label-inside.sc-tds-datetime,.tds-form-datetime.tds-datetime-container-label-inside.tds-datetime-data.sc-tds-datetime .tds-datetime-input-sm.sc-tds-datetime~.tds-datetime-label-inside.sc-tds-datetime{font:var(--tds-detail-07);letter-spacing:var(--tds-detail-07-ls);transition:0.1s ease all;top:8px}.tds-form-datetime.tds-datetime-container-label-inside.tds-datetime-focus.sc-tds-datetime .tds-datetime-input-md.sc-tds-datetime~.tds-datetime-label-inside.sc-tds-datetime,.tds-form-datetime.tds-datetime-container-label-inside.tds-datetime-data.sc-tds-datetime .tds-datetime-input-md.sc-tds-datetime~.tds-datetime-label-inside.sc-tds-datetime{font:var(--tds-detail-07);letter-spacing:var(--tds-detail-07-ls);transition:0.1s ease all;top:8px}.tds-form-datetime.tds-datetime-container-label-inside.tds-datetime-focus.sc-tds-datetime .tds-datetime-input.sc-tds-datetime~.tds-datetime-label-inside.sc-tds-datetime,.tds-form-datetime.tds-datetime-container-label-inside.tds-datetime-data.sc-tds-datetime .tds-datetime-input.sc-tds-datetime~.tds-datetime-label-inside.sc-tds-datetime{font:var(--tds-detail-07);letter-spacing:var(--tds-detail-07-ls);transition:0.1s ease all;top:12px}.tds-datetime-bar.sc-tds-datetime{position:absolute;width:100%}.tds-datetime-bar.sc-tds-datetime::before,.tds-datetime-bar.sc-tds-datetime::after{content:"";height:2px;top:54px;width:0;position:absolute;background:var(--tds-datetime-bar);transition:0.35s ease all}.tds-form-datetime-md.sc-tds-datetime .tds-datetime-bar.sc-tds-datetime::before,.tds-form-datetime-md.sc-tds-datetime .tds-datetime-bar.sc-tds-datetime::after{top:46px}.tds-form-datetime-sm.sc-tds-datetime .tds-datetime-bar.sc-tds-datetime::before,.tds-form-datetime-sm.sc-tds-datetime .tds-datetime-bar.sc-tds-datetime::after{top:40px}.tds-datetime-bar.sc-tds-datetime::before{left:50%}.tds-datetime-bar.sc-tds-datetime::after{right:50%}.tds-datetime-focus.sc-tds-datetime .tds-datetime-bar.sc-tds-datetime::before,.tds-datetime-focus.sc-tds-datetime .tds-datetime-bar.sc-tds-datetime::after{width:50%}.tds-datetime-helper.sc-tds-datetime{font:var(--tds-detail-05);letter-spacing:var(--tds-detail-05-ls);display:block;flex-basis:100%;padding-top:var(--tds-spacing-element-4);color:var(--tds-datetime-helper)}.tds-datetime-helper.sc-tds-datetime .tds-helper.sc-tds-datetime{display:inline-flex;gap:8px}.tds-form-datetime-disabled.sc-tds-datetime .tds-datetime-container.sc-tds-datetime{border-bottom-color:transparent}.tds-form-datetime-disabled.sc-tds-datetime .datetime-icon.sc-tds-datetime tds-icon.sc-tds-datetime{color:var(--tds-datetime-icon-disabled)}.tds-form-datetime-disabled.sc-tds-datetime .tds-datetime-label.sc-tds-datetime{color:var(--tds-datetime-label-disabled);cursor:not-allowed}.tds-form-datetime-success.sc-tds-datetime .tds-datetime-container.sc-tds-datetime{border-bottom-color:var(--tds-datetime-border-bottom-success);color:var(--tds-datetime-color-success)}.tds-form-datetime-success.sc-tds-datetime .tds-datetime-bar.sc-tds-datetime::before,.tds-form-datetime-success.sc-tds-datetime .tds-datetime-bar.sc-tds-datetime::after{background:var(--tds-datetime-bar-sucess)}.tds-form-datetime-error.sc-tds-datetime .tds-datetime-helper.sc-tds-datetime{color:var(--tds-datetime-helper-error)}.tds-form-datetime-error.sc-tds-datetime .tds-datetime-container.sc-tds-datetime{border-bottom-color:var(--tds-datetime-border-bottom-error)}.tds-form-datetime-error.sc-tds-datetime .tds-datetime-bar.sc-tds-datetime::before,.tds-form-datetime-error.sc-tds-datetime .tds-datetime-bar.sc-tds-datetime::after{background:var(--tds-datetime-bar-error)}.tds-form-datetime-error.sc-tds-datetime .datetime-icon.sc-tds-datetime tds-icon.sc-tds-datetime{color:var(--tds-datetime-icon-error)}.tds-datetime-textcounter.sc-tds-datetime{font:var(--tds-detail-05);letter-spacing:var(--tds-detail-05-ls);color:var(--tds-datetime-textcounter);float:right}.tds-datetime-textcounter.sc-tds-datetime .tds-datetime-textcounter-divider.sc-tds-datetime{letter-spacing:var(--tds-detail-05-ls);color:var(--tds-datetime-textcounter-divider)}input[type=datetime-local].sc-tds-datetime::-webkit-inner-spin-button,input[type=datetime-local].sc-tds-datetime::-webkit-calendar-picker-indicator{opacity:0}input[type=date].sc-tds-datetime::-webkit-inner-spin-button,input[type=date].sc-tds-datetime::-webkit-calendar-picker-indicator{opacity:0}input[type=time].sc-tds-datetime::-webkit-inner-spin-button,input[type=time].sc-tds-datetime::-webkit-calendar-picker-indicator{opacity:0}'}}]);