"use strict";(self.webpackChunkMyAngularTegel=self.webpackChunkMyAngularTegel||[]).push([[3746],{3746:(xr,Be,be)=>{be.r(Be),be.d(Be,{tds_popover_core:()=>vr});var F=be(1879),k="top",j="bottom",B="right",L="left",xe="auto",re=[k,j,B,L],Q="start",ie="end",$e="viewport",ne="popper",He=re.reduce(function(e,t){return e.concat([t+"-"+Q,t+"-"+ie])},[]),Me=[].concat(re,[xe]).reduce(function(e,t){return e.concat([t,t+"-"+Q,t+"-"+ie])},[]),wt=["beforeRead","read","afterRead","beforeMain","main","afterMain","beforeWrite","write","afterWrite"];function W(e){return e?(e.nodeName||"").toLowerCase():null}function R(e){if(null==e)return window;if("[object Window]"!==e.toString()){var t=e.ownerDocument;return t&&t.defaultView||window}return e}function U(e){return e instanceof R(e).Element||e instanceof Element}function $(e){return e instanceof R(e).HTMLElement||e instanceof HTMLElement}function Oe(e){return!(typeof ShadowRoot>"u")&&(e instanceof R(e).ShadowRoot||e instanceof ShadowRoot)}function I(e){return e.split("-")[0]}var q=Math.max,pe=Math.min,Z=Math.round;function Ee(){var e=navigator.userAgentData;return null!=e&&e.brands&&Array.isArray(e.brands)?e.brands.map(function(t){return t.brand+"/"+t.version}).join(" "):navigator.userAgent}function We(){return!/^((?!chrome|android).)*safari/i.test(Ee())}function _(e,t,r){void 0===t&&(t=!1),void 0===r&&(r=!1);var i=e.getBoundingClientRect(),n=1,o=1;t&&$(e)&&(n=e.offsetWidth>0&&Z(i.width)/e.offsetWidth||1,o=e.offsetHeight>0&&Z(i.height)/e.offsetHeight||1);var a=(U(e)?R(e):window).visualViewport,s=!We()&&r,l=(i.left+(s&&a?a.offsetLeft:0))/n,f=(i.top+(s&&a?a.offsetTop:0))/o,h=i.width/n,y=i.height/o;return{width:h,height:y,top:f,right:l+h,bottom:f+y,left:l,x:l,y:f}}function Se(e){var t=_(e),r=e.offsetWidth,i=e.offsetHeight;return Math.abs(t.width-r)<=1&&(r=t.width),Math.abs(t.height-i)<=1&&(i=t.height),{x:e.offsetLeft,y:e.offsetTop,width:r,height:i}}function Ie(e,t){var r=t.getRootNode&&t.getRootNode();if(e.contains(t))return!0;if(r&&Oe(r)){var i=t;do{if(i&&e.isSameNode(i))return!0;i=i.parentNode||i.host}while(i)}return!1}function V(e){return R(e).getComputedStyle(e)}function Et(e){return["table","td","th"].indexOf(W(e))>=0}function N(e){return((U(e)?e.ownerDocument:e.document)||window.document).documentElement}function ue(e){return"html"===W(e)?e:e.assignedSlot||e.parentNode||(Oe(e)?e.host:null)||N(e)}function Ve(e){return $(e)&&"fixed"!==V(e).position?e.offsetParent:null}function oe(e){for(var t=R(e),r=Ve(e);r&&Et(r)&&"static"===V(r).position;)r=Ve(r);return r&&("html"===W(r)||"body"===W(r)&&"static"===V(r).position)?t:r||function St(e){var t=/firefox/i.test(Ee());if(/Trident/i.test(Ee())&&$(e)&&"fixed"===V(e).position)return null;var n=ue(e);for(Oe(n)&&(n=n.host);$(n)&&["html","body"].indexOf(W(n))<0;){var o=V(n);if("none"!==o.transform||"none"!==o.perspective||"paint"===o.contain||-1!==["transform","perspective"].indexOf(o.willChange)||t&&"filter"===o.willChange||t&&o.filter&&"none"!==o.filter)return n;n=n.parentNode}return null}(e)||t}function Ae(e){return["top","bottom"].indexOf(e)>=0?"x":"y"}function ae(e,t,r){return q(e,pe(t,r))}function ze(e){return Object.assign({},{top:0,right:0,bottom:0,left:0},e)}function Fe(e,t){return t.reduce(function(r,i){return r[i]=e,r},{})}function ee(e){return e.split("-")[1]}var Lt={top:"auto",right:"auto",bottom:"auto",left:"auto"};function Ue(e){var t,r=e.popper,i=e.popperRect,n=e.placement,o=e.variation,c=e.offsets,a=e.position,s=e.gpuAcceleration,l=e.adaptive,f=e.roundOffsets,h=e.isFixed,y=c.x,p=void 0===y?0:y,b=c.y,v=void 0===b?0:b,d="function"==typeof f?f({x:p,y:v}):{x:p,y:v};p=d.x,v=d.y;var w=c.hasOwnProperty("x"),O=c.hasOwnProperty("y"),E=L,u=k,g=window;if(l){var m=oe(r),x="clientHeight",C="clientWidth";m===R(r)&&"static"!==V(m=N(r)).position&&"absolute"===a&&(x="scrollHeight",C="scrollWidth"),(n===k||(n===L||n===B)&&o===ie)&&(u=j,v-=(h&&m===g&&g.visualViewport?g.visualViewport.height:m[x])-i.height,v*=s?1:-1),n!==L&&(n!==k&&n!==j||o!==ie)||(E=B,p-=(h&&m===g&&g.visualViewport?g.visualViewport.width:m[C])-i.width,p*=s?1:-1)}var D,P=Object.assign({position:a},l&&Lt),H=!0===f?function Rt(e,t){var i=e.y,n=t.devicePixelRatio||1;return{x:Z(e.x*n)/n||0,y:Z(i*n)/n||0}}({x:p,y:v},R(r)):{x:p,y:v};return p=H.x,v=H.y,Object.assign({},P,s?((D={})[u]=O?"0":"",D[E]=w?"0":"",D.transform=(g.devicePixelRatio||1)<=1?"translate("+p+"px, "+v+"px)":"translate3d("+p+"px, "+v+"px, 0)",D):((t={})[u]=O?v+"px":"",t[E]=w?p+"px":"",t.transform="",t))}var de={passive:!0},Ht={left:"right",right:"left",bottom:"top",top:"bottom"};function ve(e){return e.replace(/left|right|bottom|top/g,function(t){return Ht[t]})}var Mt={start:"end",end:"start"};function qe(e){return e.replace(/start|end/g,function(t){return Mt[t]})}function Ce(e){var t=R(e);return{scrollLeft:t.pageXOffset,scrollTop:t.pageYOffset}}function Pe(e){return _(N(e)).left+Ce(e).scrollLeft}function De(e){var t=V(e);return/auto|scroll|overlay|hidden/.test(t.overflow+t.overflowY+t.overflowX)}function Xe(e){return["html","body","#document"].indexOf(W(e))>=0?e.ownerDocument.body:$(e)&&De(e)?e:Xe(ue(e))}function se(e,t){var r;void 0===t&&(t=[]);var i=Xe(e),n=i===(null==(r=e.ownerDocument)?void 0:r.body),o=R(i),c=n?[o].concat(o.visualViewport||[],De(i)?i:[]):i,a=t.concat(c);return n?a:a.concat(se(ue(c)))}function ke(e){return Object.assign({},e,{left:e.x,top:e.y,right:e.x+e.width,bottom:e.y+e.height})}function Ye(e,t,r){return t===$e?ke(function Wt(e,t){var r=R(e),i=N(e),n=r.visualViewport,o=i.clientWidth,c=i.clientHeight,a=0,s=0;if(n){o=n.width,c=n.height;var l=We();(l||!l&&"fixed"===t)&&(a=n.offsetLeft,s=n.offsetTop)}return{width:o,height:c,x:a+Pe(e),y:s}}(e,r)):U(t)?function Vt(e,t){var r=_(e,!1,"fixed"===t);return r.top=r.top+e.clientTop,r.left=r.left+e.clientLeft,r.bottom=r.top+e.clientHeight,r.right=r.left+e.clientWidth,r.width=e.clientWidth,r.height=e.clientHeight,r.x=r.left,r.y=r.top,r}(t,r):ke(function It(e){var t,r=N(e),i=Ce(e),n=null==(t=e.ownerDocument)?void 0:t.body,o=q(r.scrollWidth,r.clientWidth,n?n.scrollWidth:0,n?n.clientWidth:0),c=q(r.scrollHeight,r.clientHeight,n?n.scrollHeight:0,n?n.clientHeight:0),a=-i.scrollLeft+Pe(e),s=-i.scrollTop;return"rtl"===V(n||r).direction&&(a+=q(r.clientWidth,n?n.clientWidth:0)-o),{width:o,height:c,x:a,y:s}}(N(e)))}function Ge(e){var s,t=e.reference,r=e.element,i=e.placement,n=i?I(i):null,o=i?ee(i):null,c=t.x+t.width/2-r.width/2,a=t.y+t.height/2-r.height/2;switch(n){case k:s={x:c,y:t.y-r.height};break;case j:s={x:c,y:t.y+t.height};break;case B:s={x:t.x+t.width,y:a};break;case L:s={x:t.x-r.width,y:a};break;default:s={x:t.x,y:t.y}}var l=n?Ae(n):null;if(null!=l){var f="y"===l?"height":"width";switch(o){case Q:s[l]=s[l]-(t[f]/2-r[f]/2);break;case ie:s[l]=s[l]+(t[f]/2-r[f]/2)}}return s}function fe(e,t){void 0===t&&(t={});var i=t.placement,n=void 0===i?e.placement:i,o=t.strategy,c=void 0===o?e.strategy:o,a=t.boundary,s=void 0===a?"clippingParents":a,l=t.rootBoundary,f=void 0===l?$e:l,h=t.elementContext,y=void 0===h?ne:h,p=t.altBoundary,b=void 0!==p&&p,v=t.padding,d=void 0===v?0:v,w=ze("number"!=typeof d?d:Fe(d,re)),E=e.rects.popper,u=e.elements[b?y===ne?"reference":ne:y],g=function zt(e,t,r,i){var n="clippingParents"===t?function Nt(e){var t=se(ue(e)),i=["absolute","fixed"].indexOf(V(e).position)>=0&&$(e)?oe(e):e;return U(i)?t.filter(function(n){return U(n)&&Ie(n,i)&&"body"!==W(n)}):[]}(e):[].concat(t),o=[].concat(n,[r]),a=o.reduce(function(s,l){var f=Ye(e,l,i);return s.top=q(f.top,s.top),s.right=pe(f.right,s.right),s.bottom=pe(f.bottom,s.bottom),s.left=q(f.left,s.left),s},Ye(e,o[0],i));return a.width=a.right-a.left,a.height=a.bottom-a.top,a.x=a.left,a.y=a.top,a}(U(u)?u:u.contextElement||N(e.elements.popper),s,f,c),m=_(e.elements.reference),x=Ge({reference:m,element:E,strategy:"absolute",placement:n}),C=ke(Object.assign({},E,x)),A=y===ne?C:m,S={top:g.top-A.top+w.top,bottom:A.bottom-g.bottom+w.bottom,left:g.left-A.left+w.left,right:A.right-g.right+w.right},P=e.modifiersData.offset;if(y===ne&&P){var H=P[n];Object.keys(S).forEach(function(D){var X=[B,j].indexOf(D)>=0?1:-1,Y=[k,j].indexOf(D)>=0?"y":"x";S[D]+=H[Y]*X})}return S}function Ke(e,t,r){return void 0===r&&(r={x:0,y:0}),{top:e.top-t.height-r.y,right:e.right-t.width+r.x,bottom:e.bottom-t.height+r.y,left:e.left-t.width-r.x}}function Je(e){return[k,B,j,L].some(function(t){return e[t]>=0})}function ar(e,t,r){void 0===r&&(r=!1);var i=$(t),n=$(t)&&function or(e){var t=e.getBoundingClientRect(),r=Z(t.width)/e.offsetWidth||1,i=Z(t.height)/e.offsetHeight||1;return 1!==r||1!==i}(t),o=N(t),c=_(e,n,r),a={scrollLeft:0,scrollTop:0},s={x:0,y:0};return(i||!i&&!r)&&(("body"!==W(t)||De(o))&&(a=function nr(e){return e!==R(e)&&$(e)?function ir(e){return{scrollLeft:e.scrollLeft,scrollTop:e.scrollTop}}(e):Ce(e)}(t)),$(t)?((s=_(t,!0)).x+=t.clientLeft,s.y+=t.clientTop):o&&(s.x=Pe(o))),{x:c.left+a.scrollLeft-s.x,y:c.top+a.scrollTop-s.y,width:c.width,height:c.height}}function sr(e){var t=new Map,r=new Set,i=[];function n(o){r.add(o.name),[].concat(o.requires||[],o.requiresIfExists||[]).forEach(function(a){if(!r.has(a)){var s=t.get(a);s&&n(s)}}),i.push(o)}return e.forEach(function(o){t.set(o.name,o)}),e.forEach(function(o){r.has(o.name)||n(o)}),i}function cr(e){var t;return function(){return t||(t=new Promise(function(r){Promise.resolve().then(function(){t=void 0,r(e())})})),t}}var Qe={placement:"bottom",modifiers:[],strategy:"absolute"};function Ze(){for(var e=arguments.length,t=new Array(e),r=0;r<e;r++)t[r]=arguments[r];return!t.some(function(i){return!(i&&"function"==typeof i.getBoundingClientRect)})}function pr(e){void 0===e&&(e={});var r=e.defaultModifiers,i=void 0===r?[]:r,n=e.defaultOptions,o=void 0===n?Qe:n;return function(a,s,l){void 0===l&&(l=o);var f={placement:"bottom",orderedModifiers:[],options:Object.assign({},Qe,o),modifiersData:{},elements:{reference:a,popper:s},attributes:{},styles:{}},h=[],y=!1,p={state:f,setOptions:function(w){var O="function"==typeof w?w(f.options):w;v(),f.options=Object.assign({},o,f.options,O),f.scrollParents={reference:U(a)?se(a):a.contextElement?se(a.contextElement):[],popper:se(s)};var E=function fr(e){var t=sr(e);return wt.reduce(function(r,i){return r.concat(t.filter(function(n){return n.phase===i}))},[])}(function lr(e){var t=e.reduce(function(r,i){var n=r[i.name];return r[i.name]=n?Object.assign({},n,i,{options:Object.assign({},n.options,i.options),data:Object.assign({},n.data,i.data)}):i,r},{});return Object.keys(t).map(function(r){return t[r]})}([].concat(i,f.options.modifiers)));return f.orderedModifiers=E.filter(function(u){return u.enabled}),function b(){f.orderedModifiers.forEach(function(d){var O=d.options,u=d.effect;if("function"==typeof u){var g=u({state:f,name:d.name,instance:p,options:void 0===O?{}:O});h.push(g||function(){})}})}(),p.update()},forceUpdate:function(){if(!y){var w=f.elements,O=w.reference,E=w.popper;if(Ze(O,E)){f.rects={reference:ar(O,oe(E),"fixed"===f.options.strategy),popper:Se(E)},f.reset=!1,f.placement=f.options.placement,f.orderedModifiers.forEach(function(S){return f.modifiersData[S.name]=Object.assign({},S.data)});for(var u=0;u<f.orderedModifiers.length;u++)if(!0!==f.reset){var g=f.orderedModifiers[u],m=g.fn,x=g.options;"function"==typeof m&&(f=m({state:f,options:void 0===x?{}:x,name:g.name,instance:p})||f)}else f.reset=!1,u=-1}}},update:cr(function(){return new Promise(function(d){p.forceUpdate(),d(f)})}),destroy:function(){v(),y=!0}};if(!Ze(a,s))return p;function v(){h.forEach(function(d){return d()}),h=[]}return p.setOptions(l).then(function(d){!y&&l.onFirstUpdate&&l.onFirstUpdate(d)}),p}}var dr=pr({defaultModifiers:[{name:"eventListeners",enabled:!0,phase:"write",fn:function(){},effect:function Bt(e){var t=e.state,r=e.instance,i=e.options,n=i.scroll,o=void 0===n||n,c=i.resize,a=void 0===c||c,s=R(t.elements.popper),l=[].concat(t.scrollParents.reference,t.scrollParents.popper);return o&&l.forEach(function(f){f.addEventListener("scroll",r.update,de)}),a&&s.addEventListener("resize",r.update,de),function(){o&&l.forEach(function(f){f.removeEventListener("scroll",r.update,de)}),a&&s.removeEventListener("resize",r.update,de)}},data:{}},{name:"popperOffsets",enabled:!0,phase:"read",fn:function Zt(e){var t=e.state;t.modifiersData[e.name]=Ge({reference:t.rects.reference,element:t.rects.popper,strategy:"absolute",placement:t.placement})},data:{}},{name:"computeStyles",enabled:!0,phase:"beforeWrite",fn:function Tt(e){var t=e.state,r=e.options,i=r.gpuAcceleration,n=void 0===i||i,o=r.adaptive,c=void 0===o||o,a=r.roundOffsets,s=void 0===a||a,l={placement:I(t.placement),variation:ee(t.placement),popper:t.elements.popper,popperRect:t.rects.popper,gpuAcceleration:n,isFixed:"fixed"===t.options.strategy};null!=t.modifiersData.popperOffsets&&(t.styles.popper=Object.assign({},t.styles.popper,Ue(Object.assign({},l,{offsets:t.modifiersData.popperOffsets,position:t.options.strategy,adaptive:c,roundOffsets:s})))),null!=t.modifiersData.arrow&&(t.styles.arrow=Object.assign({},t.styles.arrow,Ue(Object.assign({},l,{offsets:t.modifiersData.arrow,position:"absolute",adaptive:!1,roundOffsets:s})))),t.attributes.popper=Object.assign({},t.attributes.popper,{"data-popper-placement":t.placement})},data:{}},{name:"applyStyles",enabled:!0,phase:"write",fn:function bt(e){var t=e.state;Object.keys(t.elements).forEach(function(r){var i=t.styles[r]||{},n=t.attributes[r]||{},o=t.elements[r];!$(o)||!W(o)||(Object.assign(o.style,i),Object.keys(n).forEach(function(c){var a=n[c];!1===a?o.removeAttribute(c):o.setAttribute(c,!0===a?"":a)}))})},effect:function xt(e){var t=e.state,r={popper:{position:t.options.strategy,left:"0",top:"0",margin:"0"},arrow:{position:"absolute"},reference:{}};return Object.assign(t.elements.popper.style,r.popper),t.styles=r,t.elements.arrow&&Object.assign(t.elements.arrow.style,r.arrow),function(){Object.keys(t.elements).forEach(function(i){var n=t.elements[i],o=t.attributes[i]||{},a=Object.keys(t.styles.hasOwnProperty(i)?t.styles[i]:r[i]).reduce(function(s,l){return s[l]="",s},{});!$(n)||!W(n)||(Object.assign(n.style,a),Object.keys(o).forEach(function(s){n.removeAttribute(s)}))})}},requires:["computeStyles"]},{name:"offset",enabled:!0,phase:"main",requires:["popperOffsets"],fn:function Jt(e){var t=e.state,i=e.name,n=e.options.offset,o=void 0===n?[0,0]:n,c=Me.reduce(function(f,h){return f[h]=function Kt(e,t,r){var i=I(e),n=[L,k].indexOf(i)>=0?-1:1,o="function"==typeof r?r(Object.assign({},t,{placement:e})):r,c=o[0],a=o[1];return c=c||0,a=(a||0)*n,[L,B].indexOf(i)>=0?{x:a,y:c}:{x:c,y:a}}(h,t.rects,o),f},{}),a=c[t.placement],l=a.y;null!=t.modifiersData.popperOffsets&&(t.modifiersData.popperOffsets.x+=a.x,t.modifiersData.popperOffsets.y+=l),t.modifiersData[i]=c}},{name:"flip",enabled:!0,phase:"main",fn:function qt(e){var t=e.state,r=e.options,i=e.name;if(!t.modifiersData[i]._skip){for(var n=r.mainAxis,o=void 0===n||n,c=r.altAxis,a=void 0===c||c,s=r.fallbackPlacements,l=r.padding,f=r.boundary,h=r.rootBoundary,y=r.altBoundary,p=r.flipVariations,b=void 0===p||p,v=r.allowedAutoPlacements,d=t.options.placement,w=I(d),E=s||(w!==d&&b?function Ut(e){if(I(e)===xe)return[];var t=ve(e);return[qe(e),t,qe(t)]}(d):[ve(d)]),u=[d].concat(E).reduce(function(te,z){return te.concat(I(z)===xe?function Ft(e,t){void 0===t&&(t={});var n=t.boundary,o=t.rootBoundary,c=t.padding,a=t.flipVariations,s=t.allowedAutoPlacements,l=void 0===s?Me:s,f=ee(t.placement),h=f?a?He:He.filter(function(b){return ee(b)===f}):re,y=h.filter(function(b){return l.indexOf(b)>=0});0===y.length&&(y=h);var p=y.reduce(function(b,v){return b[v]=fe(e,{placement:v,boundary:n,rootBoundary:o,padding:c})[I(v)],b},{});return Object.keys(p).sort(function(b,v){return p[b]-p[v]})}(t,{placement:z,boundary:f,rootBoundary:h,padding:l,flipVariations:b,allowedAutoPlacements:v}):z)},[]),g=t.rects.reference,m=t.rects.popper,x=new Map,C=!0,A=u[0],S=0;S<u.length;S++){var P=u[S],H=I(P),D=ee(P)===Q,X=[k,j].indexOf(H)>=0,Y=X?"width":"height",T=fe(t,{placement:P,boundary:f,rootBoundary:h,altBoundary:y,padding:l}),M=X?D?B:L:D?j:k;g[Y]>m[Y]&&(M=ve(M));var he=ve(M),G=[];if(o&&G.push(T[H]<=0),a&&G.push(T[M]<=0,T[he]<=0),G.every(function(te){return te})){A=P,C=!1;break}x.set(P,G)}if(C)for(var Le=function(z){var le=u.find(function(ye){var K=x.get(ye);if(K)return K.slice(0,z).every(function(Re){return Re})});if(le)return A=le,"break"},ce=b?3:1;ce>0&&"break"!==Le(ce);ce--);t.placement!==A&&(t.modifiersData[i]._skip=!0,t.placement=A,t.reset=!0)}},requiresIfExists:["offset"],data:{_skip:!1}},{name:"preventOverflow",enabled:!0,phase:"main",fn:function tr(e){var t=e.state,r=e.options,i=e.name,n=r.mainAxis,o=void 0===n||n,c=r.altAxis,a=void 0!==c&&c,y=r.tether,p=void 0===y||y,b=r.tetherOffset,v=void 0===b?0:b,d=fe(t,{boundary:r.boundary,rootBoundary:r.rootBoundary,padding:r.padding,altBoundary:r.altBoundary}),w=I(t.placement),O=ee(t.placement),E=!O,u=Ae(w),g=function er(e){return"x"===e?"y":"x"}(u),m=t.modifiersData.popperOffsets,x=t.rects.reference,C=t.rects.popper,A="function"==typeof v?v(Object.assign({},t.rects,{placement:t.placement})):v,S="number"==typeof A?{mainAxis:A,altAxis:A}:Object.assign({mainAxis:0,altAxis:0},A),P=t.modifiersData.offset?t.modifiersData.offset[t.placement]:null,H={x:0,y:0};if(m){if(o){var D,X="y"===u?k:L,Y="y"===u?j:B,T="y"===u?"height":"width",M=m[u],he=M+d[X],G=M-d[Y],ge=p?-C[T]/2:0,Le=O===Q?x[T]:C[T],ce=O===Q?-C[T]:-x[T],me=t.elements.arrow,te=p&&me?Se(me):{width:0,height:0},z=t.modifiersData["arrow#persistent"]?t.modifiersData["arrow#persistent"].padding:{top:0,right:0,bottom:0,left:0},le=z[X],ye=z[Y],K=ae(0,x[T],te[T]),Re=E?x[T]/2-ge-K-le-S.mainAxis:Le-K-le-S.mainAxis,hr=E?-x[T]/2+ge+K+ye+S.mainAxis:ce+K+ye+S.mainAxis,Te=t.elements.arrow&&oe(t.elements.arrow),gr=Te?"y"===u?Te.clientTop||0:Te.clientLeft||0:0,_e=null!=(D=P?.[u])?D:0,yr=M+hr-_e,et=ae(p?pe(he,M+Re-_e-gr):he,M,p?q(G,yr):G);m[u]=et,H[u]=et-M}if(a){var tt,J=m[g],we="y"===g?"height":"width",rt=J+d["x"===u?k:L],it=J-d["x"===u?j:B],je=-1!==[k,L].indexOf(w),nt=null!=(tt=P?.[g])?tt:0,ot=je?rt:J-x[we]-C[we]-nt+S.altAxis,at=je?J+x[we]+C[we]-nt-S.altAxis:it,st=p&&je?function At(e,t,r){var i=ae(e,t,r);return i>r?r:i}(ot,J,at):ae(p?ot:rt,J,p?at:it);m[g]=st,H[g]=st-J}t.modifiersData[i]=H}},requiresIfExists:["offset"]},{name:"arrow",enabled:!0,phase:"main",fn:function Pt(e){var t,r=e.state,i=e.name,n=e.options,o=r.elements.arrow,c=r.modifiersData.popperOffsets,a=I(r.placement),s=Ae(a),f=[L,B].indexOf(a)>=0?"height":"width";if(o&&c){var h=function(t,r){return ze("number"!=typeof(t="function"==typeof t?t(Object.assign({},r.rects,{placement:r.placement})):t)?t:Fe(t,re))}(n.padding,r),y=Se(o),p="y"===s?k:L,b="y"===s?j:B,v=r.rects.reference[f]+r.rects.reference[s]-c[s]-r.rects.popper[f],d=c[s]-r.rects.reference[s],w=oe(o),O=w?"y"===s?w.clientHeight||0:w.clientWidth||0:0,m=O/2-y[f]/2+(v/2-d/2),x=ae(h[p],m,O-y[f]-h[b]);r.modifiersData[i]=((t={})[s]=x,t.centerOffset=x-m,t)}},effect:function Dt(e){var t=e.state,i=e.options.element,n=void 0===i?"[data-popper-arrow]":i;null!=n&&("string"==typeof n&&!(n=t.elements.popper.querySelector(n))||Ie(t.elements.popper,n)&&(t.elements.arrow=n))},requires:["popperOffsets"],requiresIfExists:["preventOverflow"]},{name:"hide",enabled:!0,phase:"main",requiresIfExists:["preventOverflow"],fn:function Yt(e){var t=e.state,r=e.name,i=t.rects.reference,n=t.rects.popper,o=t.modifiersData.preventOverflow,c=fe(t,{elementContext:"reference"}),a=fe(t,{altBoundary:!0}),s=Ke(c,i),l=Ke(a,n,o),f=Je(s),h=Je(l);t.modifiersData[r]={referenceClippingOffsets:s,popperEscapeOffsets:l,isReferenceHidden:f,hasPopperEscaped:h},t.attributes.popper=Object.assign({},t.attributes.popper,{"data-popper-reference-hidden":f,"data-popper-escaped":h})}}]});const vr=class{constructor(e){(0,F.r)(this,e),this.tdsShow=(0,F.c)(this,"internalTdsShow",0),this.tdsClose=(0,F.c)(this,"internalTdsClose",0),this.setIsShown=function(r){this.isShown="function"==typeof r?r(this.isShown):r,this.isShown?this.tdsShow.emit():this.tdsClose.emit()}.bind(this),this.onClickTarget=function(r){r.stopPropagation(),this.setIsShown(i=>!i)}.bind(this),this.handleShow=function(r){r.stopPropagation(),this.setIsShown(!0)}.bind(this),this.handleHide=function(r){r.stopPropagation(),this.setIsShown(!1)}.bind(this),this.selector="",this.referenceEl=void 0,this.show=null,this.placement="auto",this.offsetSkidding=0,this.offsetDistance=8,this.modifiers=[],this.trigger="click",this.autoHide=!0,this.renderedShowValue=!1,this.popperInstance=void 0,this.target=void 0,this.isShown=!1}onAnyClick(e){"click"===this.trigger&&this.isShown&&null===this.show&&!e.composedPath().includes(this.host)&&this.setIsShown(!1)}onShowChange(e){this.setIsShown(e)}onReferenceElChanged(e,t){e!==t&&this.initialize({referenceEl:e,trigger:this.trigger})}onTriggerChanged(e){this.initialize({referenceEl:this.referenceEl,trigger:e})}initialize({referenceEl:e,trigger:t}){this.cleanUp(),this.target=typeof e<"u"?e:this.selector?document.querySelector(this.selector):null,this.popperInstance=this.target?dr(this.target,this.host,{strategy:"fixed",placement:this.placement,modifiers:[{name:"offset",options:{offset:[this.offsetSkidding,this.offsetDistance]}},...this.modifiers]}):null,this.popperInstance||console.error("Could not initialize: reference element not found."),"click"===t&&null===this.show&&this.target.addEventListener("click",this.onClickTarget),("hover"===t||"hover-popover"===t)&&(this.target.addEventListener("focusin",this.handleShow),this.target.addEventListener("focusout",this.handleHide),this.target.addEventListener("mouseenter",this.handleShow),this.target.addEventListener("mouseleave",this.handleHide),"hover-popover"===t&&(this.host.addEventListener("mouseenter",this.handleShow),this.host.addEventListener("mouseleave",this.handleHide)))}cleanUp(){var e,t,r,i,n,o,c,a;null===(e=this.target)||void 0===e||e.removeEventListener("click",this.onClickTarget),null===(t=this.target)||void 0===t||t.removeEventListener("focusin",this.handleShow),null===(r=this.target)||void 0===r||r.removeEventListener("focusout",this.handleHide),null===(i=this.target)||void 0===i||i.removeEventListener("mouseenter",this.handleShow),null===(n=this.target)||void 0===n||n.removeEventListener("mouseleave",this.handleHide),null===(o=this.host)||void 0===o||o.removeEventListener("mouseenter",this.handleShow),null===(c=this.host)||void 0===c||c.removeEventListener("mouseleave",this.handleHide),null===(a=this.popperInstance)||void 0===a||a.destroy()}componentDidLoad(){this.initialize({referenceEl:this.referenceEl,trigger:this.trigger})}componentDidRender(){this.isShown&&!this.renderedShowValue&&this.popperInstance.update(),this.renderedShowValue=this.isShown}disconnectedCallback(){this.cleanUp()}render(){let e={};return this.autoHide&&(e={display:this.isShown?"block":"none"}),(0,F.h)(F.H,{style:e},(0,F.h)("slot",null))}get host(){return(0,F.g)(this)}static get watchers(){return{show:["onShowChange"],referenceEl:["onReferenceElChanged"],trigger:["onTriggerChanged"]}}}}}]);