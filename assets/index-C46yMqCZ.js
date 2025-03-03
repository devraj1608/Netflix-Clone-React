const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/Home-DTXRNX1S.js","assets/vendor-C6VXdy3G.js","assets/logo-xSn2SYHG.js","assets/Home-DHToRKMt.css","assets/Login-QALdRw6G.js","assets/Login-DzwXI6FZ.css","assets/Player-CYsV5t23.js","assets/Player-67Lsf_UZ.css"])))=>i.map(i=>d[i]);
import{r as pb,a as gb,b as Ut,c as jt,u as yb,R as _b,d as rd,B as vb}from"./vendor-C6VXdy3G.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))a(l);new MutationObserver(l=>{for(const f of l)if(f.type==="childList")for(const d of f.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&a(d)}).observe(document,{childList:!0,subtree:!0});function i(l){const f={};return l.integrity&&(f.integrity=l.integrity),l.referrerPolicy&&(f.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?f.credentials="include":l.crossOrigin==="anonymous"?f.credentials="omit":f.credentials="same-origin",f}function a(l){if(l.ep)return;l.ep=!0;const f=i(l);fetch(l.href,f)}})();var sd={exports:{}},rl={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Vy;function Tb(){if(Vy)return rl;Vy=1;var r=Symbol.for("react.transitional.element"),t=Symbol.for("react.fragment");function i(a,l,f){var d=null;if(f!==void 0&&(d=""+f),l.key!==void 0&&(d=""+l.key),"key"in l){f={};for(var p in l)p!=="key"&&(f[p]=l[p])}else f=l;return l=f.ref,{$$typeof:r,type:a,key:d,ref:l!==void 0?l:null,props:f}}return rl.Fragment=t,rl.jsx=i,rl.jsxs=i,rl}var ky;function Eb(){return ky||(ky=1,sd.exports=Tb()),sd.exports}var We=Eb(),ad={exports:{}},sl={},od={exports:{}},ld={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ly;function bb(){return Ly||(Ly=1,function(r){function t(J,ot){var st=J.length;J.push(ot);t:for(;0<st;){var Vt=st-1>>>1,qt=J[Vt];if(0<l(qt,ot))J[Vt]=ot,J[st]=qt,st=Vt;else break t}}function i(J){return J.length===0?null:J[0]}function a(J){if(J.length===0)return null;var ot=J[0],st=J.pop();if(st!==ot){J[0]=st;t:for(var Vt=0,qt=J.length,Yi=qt>>>1;Vt<Yi;){var ke=2*(Vt+1)-1,Pt=J[ke],Tt=ke+1,me=J[Tt];if(0>l(Pt,st))Tt<qt&&0>l(me,Pt)?(J[Vt]=me,J[Tt]=st,Vt=Tt):(J[Vt]=Pt,J[ke]=st,Vt=ke);else if(Tt<qt&&0>l(me,st))J[Vt]=me,J[Tt]=st,Vt=Tt;else break t}}return ot}function l(J,ot){var st=J.sortIndex-ot.sortIndex;return st!==0?st:J.id-ot.id}if(r.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var f=performance;r.unstable_now=function(){return f.now()}}else{var d=Date,p=d.now();r.unstable_now=function(){return d.now()-p}}var y=[],v=[],I=1,D=null,z=3,q=!1,Q=!1,W=!1,Y=typeof setTimeout=="function"?setTimeout:null,et=typeof clearTimeout=="function"?clearTimeout:null,X=typeof setImmediate<"u"?setImmediate:null;function Z(J){for(var ot=i(v);ot!==null;){if(ot.callback===null)a(v);else if(ot.startTime<=J)a(v),ot.sortIndex=ot.expirationTime,t(y,ot);else break;ot=i(v)}}function it(J){if(W=!1,Z(J),!Q)if(i(y)!==null)Q=!0,oe();else{var ot=i(v);ot!==null&&Ve(it,ot.startTime-J)}}var pt=!1,ft=-1,C=5,A=-1;function b(){return!(r.unstable_now()-A<C)}function R(){if(pt){var J=r.unstable_now();A=J;var ot=!0;try{t:{Q=!1,W&&(W=!1,et(ft),ft=-1),q=!0;var st=z;try{e:{for(Z(J),D=i(y);D!==null&&!(D.expirationTime>J&&b());){var Vt=D.callback;if(typeof Vt=="function"){D.callback=null,z=D.priorityLevel;var qt=Vt(D.expirationTime<=J);if(J=r.unstable_now(),typeof qt=="function"){D.callback=qt,Z(J),ot=!0;break e}D===i(y)&&a(y),Z(J)}else a(y);D=i(y)}if(D!==null)ot=!0;else{var Yi=i(v);Yi!==null&&Ve(it,Yi.startTime-J),ot=!1}}break t}finally{D=null,z=st,q=!1}ot=void 0}}finally{ot?O():pt=!1}}}var O;if(typeof X=="function")O=function(){X(R)};else if(typeof MessageChannel<"u"){var k=new MessageChannel,w=k.port2;k.port1.onmessage=R,O=function(){w.postMessage(null)}}else O=function(){Y(R,0)};function oe(){pt||(pt=!0,O())}function Ve(J,ot){ft=Y(function(){J(r.unstable_now())},ot)}r.unstable_IdlePriority=5,r.unstable_ImmediatePriority=1,r.unstable_LowPriority=4,r.unstable_NormalPriority=3,r.unstable_Profiling=null,r.unstable_UserBlockingPriority=2,r.unstable_cancelCallback=function(J){J.callback=null},r.unstable_continueExecution=function(){Q||q||(Q=!0,oe())},r.unstable_forceFrameRate=function(J){0>J||125<J?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):C=0<J?Math.floor(1e3/J):5},r.unstable_getCurrentPriorityLevel=function(){return z},r.unstable_getFirstCallbackNode=function(){return i(y)},r.unstable_next=function(J){switch(z){case 1:case 2:case 3:var ot=3;break;default:ot=z}var st=z;z=ot;try{return J()}finally{z=st}},r.unstable_pauseExecution=function(){},r.unstable_requestPaint=function(){},r.unstable_runWithPriority=function(J,ot){switch(J){case 1:case 2:case 3:case 4:case 5:break;default:J=3}var st=z;z=J;try{return ot()}finally{z=st}},r.unstable_scheduleCallback=function(J,ot,st){var Vt=r.unstable_now();switch(typeof st=="object"&&st!==null?(st=st.delay,st=typeof st=="number"&&0<st?Vt+st:Vt):st=Vt,J){case 1:var qt=-1;break;case 2:qt=250;break;case 5:qt=1073741823;break;case 4:qt=1e4;break;default:qt=5e3}return qt=st+qt,J={id:I++,callback:ot,priorityLevel:J,startTime:st,expirationTime:qt,sortIndex:-1},st>Vt?(J.sortIndex=st,t(v,J),i(y)===null&&J===i(v)&&(W?(et(ft),ft=-1):W=!0,Ve(it,st-Vt))):(J.sortIndex=qt,t(y,J),Q||q||(Q=!0,oe())),J},r.unstable_shouldYield=b,r.unstable_wrapCallback=function(J){var ot=z;return function(){var st=z;z=ot;try{return J.apply(this,arguments)}finally{z=st}}}}(ld)),ld}var Uy;function Ab(){return Uy||(Uy=1,od.exports=bb()),od.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var xy;function Sb(){if(xy)return sl;xy=1;var r=Ab(),t=pb(),i=gb();function a(e){var n="https://react.dev/errors/"+e;if(1<arguments.length){n+="?args[]="+encodeURIComponent(arguments[1]);for(var s=2;s<arguments.length;s++)n+="&args[]="+encodeURIComponent(arguments[s])}return"Minified React error #"+e+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function l(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}var f=Symbol.for("react.element"),d=Symbol.for("react.transitional.element"),p=Symbol.for("react.portal"),y=Symbol.for("react.fragment"),v=Symbol.for("react.strict_mode"),I=Symbol.for("react.profiler"),D=Symbol.for("react.provider"),z=Symbol.for("react.consumer"),q=Symbol.for("react.context"),Q=Symbol.for("react.forward_ref"),W=Symbol.for("react.suspense"),Y=Symbol.for("react.suspense_list"),et=Symbol.for("react.memo"),X=Symbol.for("react.lazy"),Z=Symbol.for("react.offscreen"),it=Symbol.for("react.memo_cache_sentinel"),pt=Symbol.iterator;function ft(e){return e===null||typeof e!="object"?null:(e=pt&&e[pt]||e["@@iterator"],typeof e=="function"?e:null)}var C=Symbol.for("react.client.reference");function A(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===C?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case y:return"Fragment";case p:return"Portal";case I:return"Profiler";case v:return"StrictMode";case W:return"Suspense";case Y:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case q:return(e.displayName||"Context")+".Provider";case z:return(e._context.displayName||"Context")+".Consumer";case Q:var n=e.render;return e=e.displayName,e||(e=n.displayName||n.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case et:return n=e.displayName||null,n!==null?n:A(e.type)||"Memo";case X:n=e._payload,e=e._init;try{return A(e(n))}catch{}}return null}var b=t.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,R=Object.assign,O,k;function w(e){if(O===void 0)try{throw Error()}catch(s){var n=s.stack.trim().match(/\n( *(at )?)/);O=n&&n[1]||"",k=-1<s.stack.indexOf(`
    at`)?" (<anonymous>)":-1<s.stack.indexOf("@")?"@unknown:0:0":""}return`
`+O+e+k}var oe=!1;function Ve(e,n){if(!e||oe)return"";oe=!0;var s=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var o={DetermineComponentFrameRoot:function(){try{if(n){var G=function(){throw Error()};if(Object.defineProperty(G.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(G,[])}catch(B){var x=B}Reflect.construct(e,[],G)}else{try{G.call()}catch(B){x=B}e.call(G.prototype)}}else{try{throw Error()}catch(B){x=B}(G=e())&&typeof G.catch=="function"&&G.catch(function(){})}}catch(B){if(B&&x&&typeof B.stack=="string")return[B.stack,x.stack]}return[null,null]}};o.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var c=Object.getOwnPropertyDescriptor(o.DetermineComponentFrameRoot,"name");c&&c.configurable&&Object.defineProperty(o.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var h=o.DetermineComponentFrameRoot(),_=h[0],T=h[1];if(_&&T){var S=_.split(`
`),M=T.split(`
`);for(c=o=0;o<S.length&&!S[o].includes("DetermineComponentFrameRoot");)o++;for(;c<M.length&&!M[c].includes("DetermineComponentFrameRoot");)c++;if(o===S.length||c===M.length)for(o=S.length-1,c=M.length-1;1<=o&&0<=c&&S[o]!==M[c];)c--;for(;1<=o&&0<=c;o--,c--)if(S[o]!==M[c]){if(o!==1||c!==1)do if(o--,c--,0>c||S[o]!==M[c]){var H=`
`+S[o].replace(" at new "," at ");return e.displayName&&H.includes("<anonymous>")&&(H=H.replace("<anonymous>",e.displayName)),H}while(1<=o&&0<=c);break}}}finally{oe=!1,Error.prepareStackTrace=s}return(s=e?e.displayName||e.name:"")?w(s):""}function J(e){switch(e.tag){case 26:case 27:case 5:return w(e.type);case 16:return w("Lazy");case 13:return w("Suspense");case 19:return w("SuspenseList");case 0:case 15:return e=Ve(e.type,!1),e;case 11:return e=Ve(e.type.render,!1),e;case 1:return e=Ve(e.type,!0),e;default:return""}}function ot(e){try{var n="";do n+=J(e),e=e.return;while(e);return n}catch(s){return`
Error generating stack: `+s.message+`
`+s.stack}}function st(e){var n=e,s=e;if(e.alternate)for(;n.return;)n=n.return;else{e=n;do n=e,(n.flags&4098)!==0&&(s=n.return),e=n.return;while(e)}return n.tag===3?s:null}function Vt(e){if(e.tag===13){var n=e.memoizedState;if(n===null&&(e=e.alternate,e!==null&&(n=e.memoizedState)),n!==null)return n.dehydrated}return null}function qt(e){if(st(e)!==e)throw Error(a(188))}function Yi(e){var n=e.alternate;if(!n){if(n=st(e),n===null)throw Error(a(188));return n!==e?null:e}for(var s=e,o=n;;){var c=s.return;if(c===null)break;var h=c.alternate;if(h===null){if(o=c.return,o!==null){s=o;continue}break}if(c.child===h.child){for(h=c.child;h;){if(h===s)return qt(c),e;if(h===o)return qt(c),n;h=h.sibling}throw Error(a(188))}if(s.return!==o.return)s=c,o=h;else{for(var _=!1,T=c.child;T;){if(T===s){_=!0,s=c,o=h;break}if(T===o){_=!0,o=c,s=h;break}T=T.sibling}if(!_){for(T=h.child;T;){if(T===s){_=!0,s=h,o=c;break}if(T===o){_=!0,o=h,s=c;break}T=T.sibling}if(!_)throw Error(a(189))}}if(s.alternate!==o)throw Error(a(190))}if(s.tag!==3)throw Error(a(188));return s.stateNode.current===s?e:n}function ke(e){var n=e.tag;if(n===5||n===26||n===27||n===6)return e;for(e=e.child;e!==null;){if(n=ke(e),n!==null)return n;e=e.sibling}return null}var Pt=Array.isArray,Tt=i.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,me={pending:!1,data:null,method:null,action:null},Za=[],Nn=-1;function fn(e){return{current:e}}function ne(e){0>Nn||(e.current=Za[Nn],Za[Nn]=null,Nn--)}function Ot(e,n){Nn++,Za[Nn]=e.current,e.current=n}var je=fn(null),hi=fn(null),hn=fn(null),Xi=fn(null);function $i(e,n){switch(Ot(hn,n),Ot(hi,e),Ot(je,null),e=n.nodeType,e){case 9:case 11:n=(n=n.documentElement)&&(n=n.namespaceURI)?ly(n):0;break;default:if(e=e===8?n.parentNode:n,n=e.tagName,e=e.namespaceURI)e=ly(e),n=uy(e,n);else switch(n){case"svg":n=1;break;case"math":n=2;break;default:n=0}}ne(je),Ot(je,n)}function di(){ne(je),ne(hi),ne(hn)}function Wa(e){e.memoizedState!==null&&Ot(Xi,e);var n=je.current,s=uy(n,e.type);n!==s&&(Ot(hi,e),Ot(je,s))}function Gs(e){hi.current===e&&(ne(je),ne(hi)),Xi.current===e&&(ne(Xi),Jo._currentValue=me)}var Ks=Object.prototype.hasOwnProperty,Qr=r.unstable_scheduleCallback,Qs=r.unstable_cancelCallback,af=r.unstable_shouldYield,Ja=r.unstable_requestPaint,Xe=r.unstable_now,xl=r.unstable_getCurrentPriorityLevel,le=r.unstable_ImmediatePriority,pe=r.unstable_UserBlockingPriority,mi=r.unstable_NormalPriority,Pl=r.unstable_LowPriority,to=r.unstable_IdlePriority,of=r.log,Yr=r.unstable_setDisableYieldValue,Zi=null,Le=null;function eo(e){if(Le&&typeof Le.onCommitFiberRoot=="function")try{Le.onCommitFiberRoot(Zi,e,void 0,(e.current.flags&128)===128)}catch{}}function Fn(e){if(typeof of=="function"&&Yr(e),Le&&typeof Le.setStrictMode=="function")try{Le.setStrictMode(Zi,e)}catch{}}var qe=Math.clz32?Math.clz32:Bl,no=Math.log,zl=Math.LN2;function Bl(e){return e>>>=0,e===0?32:31-(no(e)/zl|0)|0}var Gn=128,Wi=4194304;function Mn(e){var n=e&42;if(n!==0)return n;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194176;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function dn(e,n){var s=e.pendingLanes;if(s===0)return 0;var o=0,c=e.suspendedLanes,h=e.pingedLanes,_=e.warmLanes;e=e.finishedLanes!==0;var T=s&134217727;return T!==0?(s=T&~c,s!==0?o=Mn(s):(h&=T,h!==0?o=Mn(h):e||(_=T&~_,_!==0&&(o=Mn(_))))):(T=s&~c,T!==0?o=Mn(T):h!==0?o=Mn(h):e||(_=s&~_,_!==0&&(o=Mn(_)))),o===0?0:n!==0&&n!==o&&(n&c)===0&&(c=o&-o,_=n&-n,c>=_||c===32&&(_&4194176)!==0)?n:o}function Ji(e,n){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&n)===0}function Ys(e,n){switch(e){case 1:case 2:case 4:case 8:return n+250;case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function io(){var e=Gn;return Gn<<=1,(Gn&4194176)===0&&(Gn=128),e}function tr(){var e=Wi;return Wi<<=1,(Wi&62914560)===0&&(Wi=4194304),e}function Xs(e){for(var n=[],s=0;31>s;s++)n.push(e);return n}function te(e,n){e.pendingLanes|=n,n!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function Hl(e,n,s,o,c,h){var _=e.pendingLanes;e.pendingLanes=s,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=s,e.entangledLanes&=s,e.errorRecoveryDisabledLanes&=s,e.shellSuspendCounter=0;var T=e.entanglements,S=e.expirationTimes,M=e.hiddenUpdates;for(s=_&~s;0<s;){var H=31-qe(s),G=1<<H;T[H]=0,S[H]=-1;var x=M[H];if(x!==null)for(M[H]=null,H=0;H<x.length;H++){var B=x[H];B!==null&&(B.lane&=-536870913)}s&=~G}o!==0&&er(e,o,0),h!==0&&c===0&&e.tag!==0&&(e.suspendedLanes|=h&~(_&~n))}function er(e,n,s){e.pendingLanes|=n,e.suspendedLanes&=~n;var o=31-qe(n);e.entangledLanes|=n,e.entanglements[o]=e.entanglements[o]|1073741824|s&4194218}function nr(e,n){var s=e.entangledLanes|=n;for(e=e.entanglements;s;){var o=31-qe(s),c=1<<o;c&n|e[o]&n&&(e[o]|=n),s&=~c}}function jl(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function ql(){var e=Tt.p;return e!==0?e:(e=window.event,e===void 0?32:Iy(e.type))}function ir(e,n){var s=Tt.p;try{return Tt.p=e,n()}finally{Tt.p=s}}var Kn=Math.random().toString(36).slice(2),ge="__reactFiber$"+Kn,ue="__reactProps$"+Kn,pi="__reactContainer$"+Kn,Xr="__reactEvents$"+Kn,$s="__reactListeners$"+Kn,Qn="__reactHandles$"+Kn,ro="__reactResources$"+Kn,rr="__reactMarker$"+Kn;function $r(e){delete e[ge],delete e[ue],delete e[Xr],delete e[$s],delete e[Qn]}function Vn(e){var n=e[ge];if(n)return n;for(var s=e.parentNode;s;){if(n=s[pi]||s[ge]){if(s=n.alternate,n.child!==null||s!==null&&s.child!==null)for(e=hy(e);e!==null;){if(s=e[ge])return s;e=hy(e)}return n}e=s,s=e.parentNode}return null}function gi(e){if(e=e[ge]||e[pi]){var n=e.tag;if(n===5||n===6||n===13||n===26||n===27||n===3)return e}return null}function sr(e){var n=e.tag;if(n===5||n===26||n===27||n===6)return e.stateNode;throw Error(a(33))}function ar(e){var n=e[ro];return n||(n=e[ro]={hoistableStyles:new Map,hoistableScripts:new Map}),n}function Gt(e){e[rr]=!0}var so=new Set,Zs={};function nn(e,n){$e(e,n),$e(e+"Capture",n)}function $e(e,n){for(Zs[e]=n,e=0;e<n.length;e++)so.add(n[e])}var rn=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),lf=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),ao={},oo={};function Fl(e){return Ks.call(oo,e)?!0:Ks.call(ao,e)?!1:lf.test(e)?oo[e]=!0:(ao[e]=!0,!1)}function or(e,n,s){if(Fl(n))if(s===null)e.removeAttribute(n);else{switch(typeof s){case"undefined":case"function":case"symbol":e.removeAttribute(n);return;case"boolean":var o=n.toLowerCase().slice(0,5);if(o!=="data-"&&o!=="aria-"){e.removeAttribute(n);return}}e.setAttribute(n,""+s)}}function lr(e,n,s){if(s===null)e.removeAttribute(n);else{switch(typeof s){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(n);return}e.setAttribute(n,""+s)}}function mn(e,n,s,o){if(o===null)e.removeAttribute(s);else{switch(typeof o){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(s);return}e.setAttributeNS(n,s,""+o)}}function Fe(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Gl(e){var n=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function uf(e){var n=Gl(e)?"checked":"value",s=Object.getOwnPropertyDescriptor(e.constructor.prototype,n),o=""+e[n];if(!e.hasOwnProperty(n)&&typeof s<"u"&&typeof s.get=="function"&&typeof s.set=="function"){var c=s.get,h=s.set;return Object.defineProperty(e,n,{configurable:!0,get:function(){return c.call(this)},set:function(_){o=""+_,h.call(this,_)}}),Object.defineProperty(e,n,{enumerable:s.enumerable}),{getValue:function(){return o},setValue:function(_){o=""+_},stopTracking:function(){e._valueTracker=null,delete e[n]}}}}function Zr(e){e._valueTracker||(e._valueTracker=uf(e))}function lo(e){if(!e)return!1;var n=e._valueTracker;if(!n)return!0;var s=n.getValue(),o="";return e&&(o=Gl(e)?e.checked?"true":"false":e.value),e=o,e!==s?(n.setValue(e),!0):!1}function Ws(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var yi=/[\n"\\]/g;function Yt(e){return e.replace(yi,function(n){return"\\"+n.charCodeAt(0).toString(16)+" "})}function ur(e,n,s,o,c,h,_,T){e.name="",_!=null&&typeof _!="function"&&typeof _!="symbol"&&typeof _!="boolean"?e.type=_:e.removeAttribute("type"),n!=null?_==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+Fe(n)):e.value!==""+Fe(n)&&(e.value=""+Fe(n)):_!=="submit"&&_!=="reset"||e.removeAttribute("value"),n!=null?Js(e,_,Fe(n)):s!=null?Js(e,_,Fe(s)):o!=null&&e.removeAttribute("value"),c==null&&h!=null&&(e.defaultChecked=!!h),c!=null&&(e.checked=c&&typeof c!="function"&&typeof c!="symbol"),T!=null&&typeof T!="function"&&typeof T!="symbol"&&typeof T!="boolean"?e.name=""+Fe(T):e.removeAttribute("name")}function Wr(e,n,s,o,c,h,_,T){if(h!=null&&typeof h!="function"&&typeof h!="symbol"&&typeof h!="boolean"&&(e.type=h),n!=null||s!=null){if(!(h!=="submit"&&h!=="reset"||n!=null))return;s=s!=null?""+Fe(s):"",n=n!=null?""+Fe(n):s,T||n===e.value||(e.value=n),e.defaultValue=n}o=o??c,o=typeof o!="function"&&typeof o!="symbol"&&!!o,e.checked=T?e.checked:!!o,e.defaultChecked=!!o,_!=null&&typeof _!="function"&&typeof _!="symbol"&&typeof _!="boolean"&&(e.name=_)}function Js(e,n,s){n==="number"&&Ws(e.ownerDocument)===e||e.defaultValue===""+s||(e.defaultValue=""+s)}function Rt(e,n,s,o){if(e=e.options,n){n={};for(var c=0;c<s.length;c++)n["$"+s[c]]=!0;for(s=0;s<e.length;s++)c=n.hasOwnProperty("$"+e[s].value),e[s].selected!==c&&(e[s].selected=c),c&&o&&(e[s].defaultSelected=!0)}else{for(s=""+Fe(s),n=null,c=0;c<e.length;c++){if(e[c].value===s){e[c].selected=!0,o&&(e[c].defaultSelected=!0);return}n!==null||e[c].disabled||(n=e[c])}n!==null&&(n.selected=!0)}}function Jr(e,n,s){if(n!=null&&(n=""+Fe(n),n!==e.value&&(e.value=n),s==null)){e.defaultValue!==n&&(e.defaultValue=n);return}e.defaultValue=s!=null?""+Fe(s):""}function cr(e,n,s,o){if(n==null){if(o!=null){if(s!=null)throw Error(a(92));if(Pt(o)){if(1<o.length)throw Error(a(93));o=o[0]}s=o}s==null&&(s=""),n=s}s=Fe(n),e.defaultValue=s,o=e.textContent,o===s&&o!==""&&o!==null&&(e.value=o)}function pn(e,n){if(n){var s=e.firstChild;if(s&&s===e.lastChild&&s.nodeType===3){s.nodeValue=n;return}}e.textContent=n}var cf=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function uo(e,n,s){var o=n.indexOf("--")===0;s==null||typeof s=="boolean"||s===""?o?e.setProperty(n,""):n==="float"?e.cssFloat="":e[n]="":o?e.setProperty(n,s):typeof s!="number"||s===0||cf.has(n)?n==="float"?e.cssFloat=s:e[n]=(""+s).trim():e[n]=s+"px"}function Kl(e,n,s){if(n!=null&&typeof n!="object")throw Error(a(62));if(e=e.style,s!=null){for(var o in s)!s.hasOwnProperty(o)||n!=null&&n.hasOwnProperty(o)||(o.indexOf("--")===0?e.setProperty(o,""):o==="float"?e.cssFloat="":e[o]="");for(var c in n)o=n[c],n.hasOwnProperty(c)&&s[c]!==o&&uo(e,c,o)}else for(var h in n)n.hasOwnProperty(h)&&uo(e,h,n[h])}function co(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var ff=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),hf=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Yn(e){return hf.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}var gn=null;function ta(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var _i=null,vi=null;function Ti(e){var n=gi(e);if(n&&(e=n.stateNode)){var s=e[ue]||null;t:switch(e=n.stateNode,n.type){case"input":if(ur(e,s.value,s.defaultValue,s.defaultValue,s.checked,s.defaultChecked,s.type,s.name),n=s.name,s.type==="radio"&&n!=null){for(s=e;s.parentNode;)s=s.parentNode;for(s=s.querySelectorAll('input[name="'+Yt(""+n)+'"][type="radio"]'),n=0;n<s.length;n++){var o=s[n];if(o!==e&&o.form===e.form){var c=o[ue]||null;if(!c)throw Error(a(90));ur(o,c.value,c.defaultValue,c.defaultValue,c.checked,c.defaultChecked,c.type,c.name)}}for(n=0;n<s.length;n++)o=s[n],o.form===e.form&&lo(o)}break t;case"textarea":Jr(e,s.value,s.defaultValue);break t;case"select":n=s.value,n!=null&&Rt(e,!!s.multiple,n,!1)}}}var fo=!1;function Ql(e,n,s){if(fo)return e(n,s);fo=!0;try{var o=e(n);return o}finally{if(fo=!1,(_i!==null||vi!==null)&&(Pu(),_i&&(n=_i,e=vi,vi=_i=null,Ti(n),e)))for(n=0;n<e.length;n++)Ti(e[n])}}function ts(e,n){var s=e.stateNode;if(s===null)return null;var o=s[ue]||null;if(o===null)return null;s=o[n];t:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(o=!o.disabled)||(e=e.type,o=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!o;break t;default:e=!1}if(e)return null;if(s&&typeof s!="function")throw Error(a(231,n,typeof s));return s}var yn=!1;if(rn)try{var es={};Object.defineProperty(es,"passive",{get:function(){yn=!0}}),window.addEventListener("test",es,es),window.removeEventListener("test",es,es)}catch{yn=!1}var Xn=null,fr=null,Ei=null;function ho(){if(Ei)return Ei;var e,n=fr,s=n.length,o,c="value"in Xn?Xn.value:Xn.textContent,h=c.length;for(e=0;e<s&&n[e]===c[e];e++);var _=s-e;for(o=1;o<=_&&n[s-o]===c[h-o];o++);return Ei=c.slice(e,1<o?1-o:void 0)}function $n(e){var n=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&n===13&&(e=13)):e=n,e===10&&(e=13),32<=e||e===13?e:0}function Zn(){return!0}function mo(){return!1}function ye(e){function n(s,o,c,h,_){this._reactName=s,this._targetInst=c,this.type=o,this.nativeEvent=h,this.target=_,this.currentTarget=null;for(var T in e)e.hasOwnProperty(T)&&(s=e[T],this[T]=s?s(h):h[T]);return this.isDefaultPrevented=(h.defaultPrevented!=null?h.defaultPrevented:h.returnValue===!1)?Zn:mo,this.isPropagationStopped=mo,this}return R(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var s=this.nativeEvent;s&&(s.preventDefault?s.preventDefault():typeof s.returnValue!="unknown"&&(s.returnValue=!1),this.isDefaultPrevented=Zn)},stopPropagation:function(){var s=this.nativeEvent;s&&(s.stopPropagation?s.stopPropagation():typeof s.cancelBubble!="unknown"&&(s.cancelBubble=!0),this.isPropagationStopped=Zn)},persist:function(){},isPersistent:Zn}),n}var Dt={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},ea=ye(Dt),ns=R({},Dt,{view:0,detail:0}),Yl=ye(ns),na,ia,Wn,is=R({},ns,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:as,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Wn&&(Wn&&e.type==="mousemove"?(na=e.screenX-Wn.screenX,ia=e.screenY-Wn.screenY):ia=na=0,Wn=e),na)},movementY:function(e){return"movementY"in e?e.movementY:ia}}),_n=ye(is),Xl=R({},is,{dataTransfer:0}),df=ye(Xl),rs=R({},ns,{relatedTarget:0}),ra=ye(rs),po=R({},Dt,{animationName:0,elapsedTime:0,pseudoElement:0}),sa=ye(po),$l=R({},Dt,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),aa=ye($l),mf=R({},Dt,{data:0}),go=ye(mf),ss={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Zl={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Wl={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function yo(e){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(e):(e=Wl[e])?!!n[e]:!1}function as(){return yo}var Jl=R({},ns,{key:function(e){if(e.key){var n=ss[e.key]||e.key;if(n!=="Unidentified")return n}return e.type==="keypress"?(e=$n(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Zl[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:as,charCode:function(e){return e.type==="keypress"?$n(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?$n(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),oa=ye(Jl),tu=R({},is,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),_o=ye(tu),bi=R({},ns,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:as}),eu=ye(bi),nu=R({},Dt,{propertyName:0,elapsedTime:0,pseudoElement:0}),iu=ye(nu),ru=R({},is,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),la=ye(ru),Ge=R({},Dt,{newState:0,oldState:0}),su=ye(Ge),au=[9,13,27,32],Jn=rn&&"CompositionEvent"in window,u=null;rn&&"documentMode"in document&&(u=document.documentMode);var m=rn&&"TextEvent"in window&&!u,g=rn&&(!Jn||u&&8<u&&11>=u),E=" ",L=!1;function P(e,n){switch(e){case"keyup":return au.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function $(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var bt=!1;function ce(e,n){switch(e){case"compositionend":return $(n);case"keypress":return n.which!==32?null:(L=!0,E);case"textInput":return e=n.data,e===E&&L?null:e;default:return null}}function At(e,n){if(bt)return e==="compositionend"||!Jn&&P(e,n)?(e=ho(),Ei=fr=Xn=null,bt=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return g&&n.locale!=="ko"?null:n.data;default:return null}}var _e={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function fe(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n==="input"?!!_e[e.type]:n==="textarea"}function Ai(e,n,s,o){_i?vi?vi.push(o):vi=[o]:_i=o,n=qu(n,"onChange"),0<n.length&&(s=new ea("onChange","change",null,s,o),e.push({event:s,listeners:n}))}var we=null,ti=null;function vo(e){iy(e,0)}function ou(e){var n=sr(e);if(lo(n))return e}function Mm(e,n){if(e==="change")return n}var Vm=!1;if(rn){var pf;if(rn){var gf="oninput"in document;if(!gf){var km=document.createElement("div");km.setAttribute("oninput","return;"),gf=typeof km.oninput=="function"}pf=gf}else pf=!1;Vm=pf&&(!document.documentMode||9<document.documentMode)}function Lm(){we&&(we.detachEvent("onpropertychange",Um),ti=we=null)}function Um(e){if(e.propertyName==="value"&&ou(ti)){var n=[];Ai(n,ti,e,ta(e)),Ql(vo,n)}}function GT(e,n,s){e==="focusin"?(Lm(),we=n,ti=s,we.attachEvent("onpropertychange",Um)):e==="focusout"&&Lm()}function KT(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return ou(ti)}function QT(e,n){if(e==="click")return ou(n)}function YT(e,n){if(e==="input"||e==="change")return ou(n)}function XT(e,n){return e===n&&(e!==0||1/e===1/n)||e!==e&&n!==n}var sn=typeof Object.is=="function"?Object.is:XT;function To(e,n){if(sn(e,n))return!0;if(typeof e!="object"||e===null||typeof n!="object"||n===null)return!1;var s=Object.keys(e),o=Object.keys(n);if(s.length!==o.length)return!1;for(o=0;o<s.length;o++){var c=s[o];if(!Ks.call(n,c)||!sn(e[c],n[c]))return!1}return!0}function xm(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Pm(e,n){var s=xm(e);e=0;for(var o;s;){if(s.nodeType===3){if(o=e+s.textContent.length,e<=n&&o>=n)return{node:s,offset:n-e};e=o}t:{for(;s;){if(s.nextSibling){s=s.nextSibling;break t}s=s.parentNode}s=void 0}s=xm(s)}}function zm(e,n){return e&&n?e===n?!0:e&&e.nodeType===3?!1:n&&n.nodeType===3?zm(e,n.parentNode):"contains"in e?e.contains(n):e.compareDocumentPosition?!!(e.compareDocumentPosition(n)&16):!1:!1}function Bm(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var n=Ws(e.document);n instanceof e.HTMLIFrameElement;){try{var s=typeof n.contentWindow.location.href=="string"}catch{s=!1}if(s)e=n.contentWindow;else break;n=Ws(e.document)}return n}function yf(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n&&(n==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||n==="textarea"||e.contentEditable==="true")}function $T(e,n){var s=Bm(n);n=e.focusedElem;var o=e.selectionRange;if(s!==n&&n&&n.ownerDocument&&zm(n.ownerDocument.documentElement,n)){if(o!==null&&yf(n)){if(e=o.start,s=o.end,s===void 0&&(s=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(s,n.value.length);else if(s=(e=n.ownerDocument||document)&&e.defaultView||window,s.getSelection){s=s.getSelection();var c=n.textContent.length,h=Math.min(o.start,c);o=o.end===void 0?h:Math.min(o.end,c),!s.extend&&h>o&&(c=o,o=h,h=c),c=Pm(n,h);var _=Pm(n,o);c&&_&&(s.rangeCount!==1||s.anchorNode!==c.node||s.anchorOffset!==c.offset||s.focusNode!==_.node||s.focusOffset!==_.offset)&&(e=e.createRange(),e.setStart(c.node,c.offset),s.removeAllRanges(),h>o?(s.addRange(e),s.extend(_.node,_.offset)):(e.setEnd(_.node,_.offset),s.addRange(e)))}}for(e=[],s=n;s=s.parentNode;)s.nodeType===1&&e.push({element:s,left:s.scrollLeft,top:s.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)s=e[n],s.element.scrollLeft=s.left,s.element.scrollTop=s.top}}var ZT=rn&&"documentMode"in document&&11>=document.documentMode,ua=null,_f=null,Eo=null,vf=!1;function Hm(e,n,s){var o=s.window===s?s.document:s.nodeType===9?s:s.ownerDocument;vf||ua==null||ua!==Ws(o)||(o=ua,"selectionStart"in o&&yf(o)?o={start:o.selectionStart,end:o.selectionEnd}:(o=(o.ownerDocument&&o.ownerDocument.defaultView||window).getSelection(),o={anchorNode:o.anchorNode,anchorOffset:o.anchorOffset,focusNode:o.focusNode,focusOffset:o.focusOffset}),Eo&&To(Eo,o)||(Eo=o,o=qu(_f,"onSelect"),0<o.length&&(n=new ea("onSelect","select",null,n,s),e.push({event:n,listeners:o}),n.target=ua)))}function os(e,n){var s={};return s[e.toLowerCase()]=n.toLowerCase(),s["Webkit"+e]="webkit"+n,s["Moz"+e]="moz"+n,s}var ca={animationend:os("Animation","AnimationEnd"),animationiteration:os("Animation","AnimationIteration"),animationstart:os("Animation","AnimationStart"),transitionrun:os("Transition","TransitionRun"),transitionstart:os("Transition","TransitionStart"),transitioncancel:os("Transition","TransitionCancel"),transitionend:os("Transition","TransitionEnd")},Tf={},jm={};rn&&(jm=document.createElement("div").style,"AnimationEvent"in window||(delete ca.animationend.animation,delete ca.animationiteration.animation,delete ca.animationstart.animation),"TransitionEvent"in window||delete ca.transitionend.transition);function ls(e){if(Tf[e])return Tf[e];if(!ca[e])return e;var n=ca[e],s;for(s in n)if(n.hasOwnProperty(s)&&s in jm)return Tf[e]=n[s];return e}var qm=ls("animationend"),Fm=ls("animationiteration"),Gm=ls("animationstart"),WT=ls("transitionrun"),JT=ls("transitionstart"),tE=ls("transitioncancel"),Km=ls("transitionend"),Qm=new Map,Ym="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll scrollEnd toggle touchMove waiting wheel".split(" ");function kn(e,n){Qm.set(e,n),nn(n,[e])}var vn=[],fa=0,Ef=0;function lu(){for(var e=fa,n=Ef=fa=0;n<e;){var s=vn[n];vn[n++]=null;var o=vn[n];vn[n++]=null;var c=vn[n];vn[n++]=null;var h=vn[n];if(vn[n++]=null,o!==null&&c!==null){var _=o.pending;_===null?c.next=c:(c.next=_.next,_.next=c),o.pending=c}h!==0&&Xm(s,c,h)}}function uu(e,n,s,o){vn[fa++]=e,vn[fa++]=n,vn[fa++]=s,vn[fa++]=o,Ef|=o,e.lanes|=o,e=e.alternate,e!==null&&(e.lanes|=o)}function bf(e,n,s,o){return uu(e,n,s,o),cu(e)}function hr(e,n){return uu(e,null,null,n),cu(e)}function Xm(e,n,s){e.lanes|=s;var o=e.alternate;o!==null&&(o.lanes|=s);for(var c=!1,h=e.return;h!==null;)h.childLanes|=s,o=h.alternate,o!==null&&(o.childLanes|=s),h.tag===22&&(e=h.stateNode,e===null||e._visibility&1||(c=!0)),e=h,h=h.return;c&&n!==null&&e.tag===3&&(h=e.stateNode,c=31-qe(s),h=h.hiddenUpdates,e=h[c],e===null?h[c]=[n]:e.push(n),n.lane=s|536870912)}function cu(e){if(50<Ko)throw Ko=0,Ch=null,Error(a(185));for(var n=e.return;n!==null;)e=n,n=e.return;return e.tag===3?e.stateNode:null}var ha={},$m=new WeakMap;function Tn(e,n){if(typeof e=="object"&&e!==null){var s=$m.get(e);return s!==void 0?s:(n={value:e,source:n,stack:ot(n)},$m.set(e,n),n)}return{value:e,source:n,stack:ot(n)}}var da=[],ma=0,fu=null,hu=0,En=[],bn=0,us=null,Si=1,wi="";function cs(e,n){da[ma++]=hu,da[ma++]=fu,fu=e,hu=n}function Zm(e,n,s){En[bn++]=Si,En[bn++]=wi,En[bn++]=us,us=e;var o=Si;e=wi;var c=32-qe(o)-1;o&=~(1<<c),s+=1;var h=32-qe(n)+c;if(30<h){var _=c-c%5;h=(o&(1<<_)-1).toString(32),o>>=_,c-=_,Si=1<<32-qe(n)+c|s<<c|o,wi=h+e}else Si=1<<h|s<<c|o,wi=e}function Af(e){e.return!==null&&(cs(e,1),Zm(e,1,0))}function Sf(e){for(;e===fu;)fu=da[--ma],da[ma]=null,hu=da[--ma],da[ma]=null;for(;e===us;)us=En[--bn],En[bn]=null,wi=En[--bn],En[bn]=null,Si=En[--bn],En[bn]=null}var Ke=null,Re=null,It=!1,Ln=null,ei=!1,wf=Error(a(519));function fs(e){var n=Error(a(418,""));throw So(Tn(n,e)),wf}function Wm(e){var n=e.stateNode,s=e.type,o=e.memoizedProps;switch(n[ge]=e,n[ue]=o,s){case"dialog":Et("cancel",n),Et("close",n);break;case"iframe":case"object":case"embed":Et("load",n);break;case"video":case"audio":for(s=0;s<Yo.length;s++)Et(Yo[s],n);break;case"source":Et("error",n);break;case"img":case"image":case"link":Et("error",n),Et("load",n);break;case"details":Et("toggle",n);break;case"input":Et("invalid",n),Wr(n,o.value,o.defaultValue,o.checked,o.defaultChecked,o.type,o.name,!0),Zr(n);break;case"select":Et("invalid",n);break;case"textarea":Et("invalid",n),cr(n,o.value,o.defaultValue,o.children),Zr(n)}s=o.children,typeof s!="string"&&typeof s!="number"&&typeof s!="bigint"||n.textContent===""+s||o.suppressHydrationWarning===!0||oy(n.textContent,s)?(o.popover!=null&&(Et("beforetoggle",n),Et("toggle",n)),o.onScroll!=null&&Et("scroll",n),o.onScrollEnd!=null&&Et("scrollend",n),o.onClick!=null&&(n.onclick=Fu),n=!0):n=!1,n||fs(e)}function Jm(e){for(Ke=e.return;Ke;)switch(Ke.tag){case 3:case 27:ei=!0;return;case 5:case 13:ei=!1;return;default:Ke=Ke.return}}function bo(e){if(e!==Ke)return!1;if(!It)return Jm(e),It=!0,!1;var n=!1,s;if((s=e.tag!==3&&e.tag!==27)&&((s=e.tag===5)&&(s=e.type,s=!(s!=="form"&&s!=="button")||Gh(e.type,e.memoizedProps)),s=!s),s&&(n=!0),n&&Re&&fs(e),Jm(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(a(317));t:{for(e=e.nextSibling,n=0;e;){if(e.nodeType===8)if(s=e.data,s==="/$"){if(n===0){Re=xn(e.nextSibling);break t}n--}else s!=="$"&&s!=="$!"&&s!=="$?"||n++;e=e.nextSibling}Re=null}}else Re=Ke?xn(e.stateNode.nextSibling):null;return!0}function Ao(){Re=Ke=null,It=!1}function So(e){Ln===null?Ln=[e]:Ln.push(e)}var wo=Error(a(460)),tp=Error(a(474)),Rf={then:function(){}};function ep(e){return e=e.status,e==="fulfilled"||e==="rejected"}function du(){}function np(e,n,s){switch(s=e[s],s===void 0?e.push(n):s!==n&&(n.then(du,du),n=s),n.status){case"fulfilled":return n.value;case"rejected":throw e=n.reason,e===wo?Error(a(483)):e;default:if(typeof n.status=="string")n.then(du,du);else{if(e=zt,e!==null&&100<e.shellSuspendCounter)throw Error(a(482));e=n,e.status="pending",e.then(function(o){if(n.status==="pending"){var c=n;c.status="fulfilled",c.value=o}},function(o){if(n.status==="pending"){var c=n;c.status="rejected",c.reason=o}})}switch(n.status){case"fulfilled":return n.value;case"rejected":throw e=n.reason,e===wo?Error(a(483)):e}throw Ro=n,wo}}var Ro=null;function ip(){if(Ro===null)throw Error(a(459));var e=Ro;return Ro=null,e}var pa=null,Io=0;function mu(e){var n=Io;return Io+=1,pa===null&&(pa=[]),np(pa,e,n)}function Co(e,n){n=n.props.ref,e.ref=n!==void 0?n:null}function pu(e,n){throw n.$$typeof===f?Error(a(525)):(e=Object.prototype.toString.call(n),Error(a(31,e==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":e)))}function rp(e){var n=e._init;return n(e._payload)}function sp(e){function n(V,N){if(e){var U=V.deletions;U===null?(V.deletions=[N],V.flags|=16):U.push(N)}}function s(V,N){if(!e)return null;for(;N!==null;)n(V,N),N=N.sibling;return null}function o(V){for(var N=new Map;V!==null;)V.key!==null?N.set(V.key,V):N.set(V.index,V),V=V.sibling;return N}function c(V,N){return V=Sr(V,N),V.index=0,V.sibling=null,V}function h(V,N,U){return V.index=U,e?(U=V.alternate,U!==null?(U=U.index,U<N?(V.flags|=33554434,N):U):(V.flags|=33554434,N)):(V.flags|=1048576,N)}function _(V){return e&&V.alternate===null&&(V.flags|=33554434),V}function T(V,N,U,j){return N===null||N.tag!==6?(N=Th(U,V.mode,j),N.return=V,N):(N=c(N,U),N.return=V,N)}function S(V,N,U,j){var tt=U.type;return tt===y?H(V,N,U.props.children,j,U.key):N!==null&&(N.elementType===tt||typeof tt=="object"&&tt!==null&&tt.$$typeof===X&&rp(tt)===N.type)?(N=c(N,U.props),Co(N,U),N.return=V,N):(N=Vu(U.type,U.key,U.props,null,V.mode,j),Co(N,U),N.return=V,N)}function M(V,N,U,j){return N===null||N.tag!==4||N.stateNode.containerInfo!==U.containerInfo||N.stateNode.implementation!==U.implementation?(N=Eh(U,V.mode,j),N.return=V,N):(N=c(N,U.children||[]),N.return=V,N)}function H(V,N,U,j,tt){return N===null||N.tag!==7?(N=Es(U,V.mode,j,tt),N.return=V,N):(N=c(N,U),N.return=V,N)}function G(V,N,U){if(typeof N=="string"&&N!==""||typeof N=="number"||typeof N=="bigint")return N=Th(""+N,V.mode,U),N.return=V,N;if(typeof N=="object"&&N!==null){switch(N.$$typeof){case d:return U=Vu(N.type,N.key,N.props,null,V.mode,U),Co(U,N),U.return=V,U;case p:return N=Eh(N,V.mode,U),N.return=V,N;case X:var j=N._init;return N=j(N._payload),G(V,N,U)}if(Pt(N)||ft(N))return N=Es(N,V.mode,U,null),N.return=V,N;if(typeof N.then=="function")return G(V,mu(N),U);if(N.$$typeof===q)return G(V,Ou(V,N),U);pu(V,N)}return null}function x(V,N,U,j){var tt=N!==null?N.key:null;if(typeof U=="string"&&U!==""||typeof U=="number"||typeof U=="bigint")return tt!==null?null:T(V,N,""+U,j);if(typeof U=="object"&&U!==null){switch(U.$$typeof){case d:return U.key===tt?S(V,N,U,j):null;case p:return U.key===tt?M(V,N,U,j):null;case X:return tt=U._init,U=tt(U._payload),x(V,N,U,j)}if(Pt(U)||ft(U))return tt!==null?null:H(V,N,U,j,null);if(typeof U.then=="function")return x(V,N,mu(U),j);if(U.$$typeof===q)return x(V,N,Ou(V,U),j);pu(V,U)}return null}function B(V,N,U,j,tt){if(typeof j=="string"&&j!==""||typeof j=="number"||typeof j=="bigint")return V=V.get(U)||null,T(N,V,""+j,tt);if(typeof j=="object"&&j!==null){switch(j.$$typeof){case d:return V=V.get(j.key===null?U:j.key)||null,S(N,V,j,tt);case p:return V=V.get(j.key===null?U:j.key)||null,M(N,V,j,tt);case X:var gt=j._init;return j=gt(j._payload),B(V,N,U,j,tt)}if(Pt(j)||ft(j))return V=V.get(U)||null,H(N,V,j,tt,null);if(typeof j.then=="function")return B(V,N,U,mu(j),tt);if(j.$$typeof===q)return B(V,N,U,Ou(N,j),tt);pu(N,j)}return null}function rt(V,N,U,j){for(var tt=null,gt=null,at=N,lt=N=0,Ee=null;at!==null&&lt<U.length;lt++){at.index>lt?(Ee=at,at=null):Ee=at.sibling;var Ct=x(V,at,U[lt],j);if(Ct===null){at===null&&(at=Ee);break}e&&at&&Ct.alternate===null&&n(V,at),N=h(Ct,N,lt),gt===null?tt=Ct:gt.sibling=Ct,gt=Ct,at=Ee}if(lt===U.length)return s(V,at),It&&cs(V,lt),tt;if(at===null){for(;lt<U.length;lt++)at=G(V,U[lt],j),at!==null&&(N=h(at,N,lt),gt===null?tt=at:gt.sibling=at,gt=at);return It&&cs(V,lt),tt}for(at=o(at);lt<U.length;lt++)Ee=B(at,V,lt,U[lt],j),Ee!==null&&(e&&Ee.alternate!==null&&at.delete(Ee.key===null?lt:Ee.key),N=h(Ee,N,lt),gt===null?tt=Ee:gt.sibling=Ee,gt=Ee);return e&&at.forEach(function(Nr){return n(V,Nr)}),It&&cs(V,lt),tt}function ht(V,N,U,j){if(U==null)throw Error(a(151));for(var tt=null,gt=null,at=N,lt=N=0,Ee=null,Ct=U.next();at!==null&&!Ct.done;lt++,Ct=U.next()){at.index>lt?(Ee=at,at=null):Ee=at.sibling;var Nr=x(V,at,Ct.value,j);if(Nr===null){at===null&&(at=Ee);break}e&&at&&Nr.alternate===null&&n(V,at),N=h(Nr,N,lt),gt===null?tt=Nr:gt.sibling=Nr,gt=Nr,at=Ee}if(Ct.done)return s(V,at),It&&cs(V,lt),tt;if(at===null){for(;!Ct.done;lt++,Ct=U.next())Ct=G(V,Ct.value,j),Ct!==null&&(N=h(Ct,N,lt),gt===null?tt=Ct:gt.sibling=Ct,gt=Ct);return It&&cs(V,lt),tt}for(at=o(at);!Ct.done;lt++,Ct=U.next())Ct=B(at,V,lt,Ct.value,j),Ct!==null&&(e&&Ct.alternate!==null&&at.delete(Ct.key===null?lt:Ct.key),N=h(Ct,N,lt),gt===null?tt=Ct:gt.sibling=Ct,gt=Ct);return e&&at.forEach(function(mb){return n(V,mb)}),It&&cs(V,lt),tt}function Zt(V,N,U,j){if(typeof U=="object"&&U!==null&&U.type===y&&U.key===null&&(U=U.props.children),typeof U=="object"&&U!==null){switch(U.$$typeof){case d:t:{for(var tt=U.key;N!==null;){if(N.key===tt){if(tt=U.type,tt===y){if(N.tag===7){s(V,N.sibling),j=c(N,U.props.children),j.return=V,V=j;break t}}else if(N.elementType===tt||typeof tt=="object"&&tt!==null&&tt.$$typeof===X&&rp(tt)===N.type){s(V,N.sibling),j=c(N,U.props),Co(j,U),j.return=V,V=j;break t}s(V,N);break}else n(V,N);N=N.sibling}U.type===y?(j=Es(U.props.children,V.mode,j,U.key),j.return=V,V=j):(j=Vu(U.type,U.key,U.props,null,V.mode,j),Co(j,U),j.return=V,V=j)}return _(V);case p:t:{for(tt=U.key;N!==null;){if(N.key===tt)if(N.tag===4&&N.stateNode.containerInfo===U.containerInfo&&N.stateNode.implementation===U.implementation){s(V,N.sibling),j=c(N,U.children||[]),j.return=V,V=j;break t}else{s(V,N);break}else n(V,N);N=N.sibling}j=Eh(U,V.mode,j),j.return=V,V=j}return _(V);case X:return tt=U._init,U=tt(U._payload),Zt(V,N,U,j)}if(Pt(U))return rt(V,N,U,j);if(ft(U)){if(tt=ft(U),typeof tt!="function")throw Error(a(150));return U=tt.call(U),ht(V,N,U,j)}if(typeof U.then=="function")return Zt(V,N,mu(U),j);if(U.$$typeof===q)return Zt(V,N,Ou(V,U),j);pu(V,U)}return typeof U=="string"&&U!==""||typeof U=="number"||typeof U=="bigint"?(U=""+U,N!==null&&N.tag===6?(s(V,N.sibling),j=c(N,U),j.return=V,V=j):(s(V,N),j=Th(U,V.mode,j),j.return=V,V=j),_(V)):s(V,N)}return function(V,N,U,j){try{Io=0;var tt=Zt(V,N,U,j);return pa=null,tt}catch(at){if(at===wo)throw at;var gt=Rn(29,at,null,V.mode);return gt.lanes=j,gt.return=V,gt}finally{}}}var hs=sp(!0),ap=sp(!1),ga=fn(null),gu=fn(0);function op(e,n){e=Ui,Ot(gu,e),Ot(ga,n),Ui=e|n.baseLanes}function If(){Ot(gu,Ui),Ot(ga,ga.current)}function Cf(){Ui=gu.current,ne(ga),ne(gu)}var An=fn(null),ni=null;function dr(e){var n=e.alternate;Ot(he,he.current&1),Ot(An,e),ni===null&&(n===null||ga.current!==null||n.memoizedState!==null)&&(ni=e)}function lp(e){if(e.tag===22){if(Ot(he,he.current),Ot(An,e),ni===null){var n=e.alternate;n!==null&&n.memoizedState!==null&&(ni=e)}}else mr()}function mr(){Ot(he,he.current),Ot(An,An.current)}function Ri(e){ne(An),ni===e&&(ni=null),ne(he)}var he=fn(0);function yu(e){for(var n=e;n!==null;){if(n.tag===13){var s=n.memoizedState;if(s!==null&&(s=s.dehydrated,s===null||s.data==="$?"||s.data==="$!"))return n}else if(n.tag===19&&n.memoizedProps.revealOrder!==void 0){if((n.flags&128)!==0)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}var eE=typeof AbortController<"u"?AbortController:function(){var e=[],n=this.signal={aborted:!1,addEventListener:function(s,o){e.push(o)}};this.abort=function(){n.aborted=!0,e.forEach(function(s){return s()})}},nE=r.unstable_scheduleCallback,iE=r.unstable_NormalPriority,de={$$typeof:q,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Df(){return{controller:new eE,data:new Map,refCount:0}}function Do(e){e.refCount--,e.refCount===0&&nE(iE,function(){e.controller.abort()})}var Oo=null,Of=0,ya=0,_a=null;function rE(e,n){if(Oo===null){var s=Oo=[];Of=0,ya=Uh(),_a={status:"pending",value:void 0,then:function(o){s.push(o)}}}return Of++,n.then(up,up),n}function up(){if(--Of===0&&Oo!==null){_a!==null&&(_a.status="fulfilled");var e=Oo;Oo=null,ya=0,_a=null;for(var n=0;n<e.length;n++)(0,e[n])()}}function sE(e,n){var s=[],o={status:"pending",value:null,reason:null,then:function(c){s.push(c)}};return e.then(function(){o.status="fulfilled",o.value=n;for(var c=0;c<s.length;c++)(0,s[c])(n)},function(c){for(o.status="rejected",o.reason=c,c=0;c<s.length;c++)(0,s[c])(void 0)}),o}var cp=b.S;b.S=function(e,n){typeof n=="object"&&n!==null&&typeof n.then=="function"&&rE(e,n),cp!==null&&cp(e,n)};var ds=fn(null);function Nf(){var e=ds.current;return e!==null?e:zt.pooledCache}function _u(e,n){n===null?Ot(ds,ds.current):Ot(ds,n.pool)}function fp(){var e=Nf();return e===null?null:{parent:de._currentValue,pool:e}}var pr=0,mt=null,kt=null,ie=null,vu=!1,va=!1,ms=!1,Tu=0,No=0,Ta=null,aE=0;function ee(){throw Error(a(321))}function Mf(e,n){if(n===null)return!1;for(var s=0;s<n.length&&s<e.length;s++)if(!sn(e[s],n[s]))return!1;return!0}function Vf(e,n,s,o,c,h){return pr=h,mt=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,b.H=e===null||e.memoizedState===null?ps:gr,ms=!1,h=s(o,c),ms=!1,va&&(h=dp(n,s,o,c)),hp(e),h}function hp(e){b.H=ii;var n=kt!==null&&kt.next!==null;if(pr=0,ie=kt=mt=null,vu=!1,No=0,Ta=null,n)throw Error(a(300));e===null||ve||(e=e.dependencies,e!==null&&Du(e)&&(ve=!0))}function dp(e,n,s,o){mt=e;var c=0;do{if(va&&(Ta=null),No=0,va=!1,25<=c)throw Error(a(301));if(c+=1,ie=kt=null,e.updateQueue!=null){var h=e.updateQueue;h.lastEffect=null,h.events=null,h.stores=null,h.memoCache!=null&&(h.memoCache.index=0)}b.H=gs,h=n(s,o)}while(va);return h}function oE(){var e=b.H,n=e.useState()[0];return n=typeof n.then=="function"?Mo(n):n,e=e.useState()[0],(kt!==null?kt.memoizedState:null)!==e&&(mt.flags|=1024),n}function kf(){var e=Tu!==0;return Tu=0,e}function Lf(e,n,s){n.updateQueue=e.updateQueue,n.flags&=-2053,e.lanes&=~s}function Uf(e){if(vu){for(e=e.memoizedState;e!==null;){var n=e.queue;n!==null&&(n.pending=null),e=e.next}vu=!1}pr=0,ie=kt=mt=null,va=!1,No=Tu=0,Ta=null}function Ze(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return ie===null?mt.memoizedState=ie=e:ie=ie.next=e,ie}function re(){if(kt===null){var e=mt.alternate;e=e!==null?e.memoizedState:null}else e=kt.next;var n=ie===null?mt.memoizedState:ie.next;if(n!==null)ie=n,kt=e;else{if(e===null)throw mt.alternate===null?Error(a(467)):Error(a(310));kt=e,e={memoizedState:kt.memoizedState,baseState:kt.baseState,baseQueue:kt.baseQueue,queue:kt.queue,next:null},ie===null?mt.memoizedState=ie=e:ie=ie.next=e}return ie}var Eu;Eu=function(){return{lastEffect:null,events:null,stores:null,memoCache:null}};function Mo(e){var n=No;return No+=1,Ta===null&&(Ta=[]),e=np(Ta,e,n),n=mt,(ie===null?n.memoizedState:ie.next)===null&&(n=n.alternate,b.H=n===null||n.memoizedState===null?ps:gr),e}function bu(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return Mo(e);if(e.$$typeof===q)return Ue(e)}throw Error(a(438,String(e)))}function xf(e){var n=null,s=mt.updateQueue;if(s!==null&&(n=s.memoCache),n==null){var o=mt.alternate;o!==null&&(o=o.updateQueue,o!==null&&(o=o.memoCache,o!=null&&(n={data:o.data.map(function(c){return c.slice()}),index:0})))}if(n==null&&(n={data:[],index:0}),s===null&&(s=Eu(),mt.updateQueue=s),s.memoCache=n,s=n.data[n.index],s===void 0)for(s=n.data[n.index]=Array(e),o=0;o<e;o++)s[o]=it;return n.index++,s}function Ii(e,n){return typeof n=="function"?n(e):n}function Au(e){var n=re();return Pf(n,kt,e)}function Pf(e,n,s){var o=e.queue;if(o===null)throw Error(a(311));o.lastRenderedReducer=s;var c=e.baseQueue,h=o.pending;if(h!==null){if(c!==null){var _=c.next;c.next=h.next,h.next=_}n.baseQueue=c=h,o.pending=null}if(h=e.baseState,c===null)e.memoizedState=h;else{n=c.next;var T=_=null,S=null,M=n,H=!1;do{var G=M.lane&-536870913;if(G!==M.lane?(St&G)===G:(pr&G)===G){var x=M.revertLane;if(x===0)S!==null&&(S=S.next={lane:0,revertLane:0,action:M.action,hasEagerState:M.hasEagerState,eagerState:M.eagerState,next:null}),G===ya&&(H=!0);else if((pr&x)===x){M=M.next,x===ya&&(H=!0);continue}else G={lane:0,revertLane:M.revertLane,action:M.action,hasEagerState:M.hasEagerState,eagerState:M.eagerState,next:null},S===null?(T=S=G,_=h):S=S.next=G,mt.lanes|=x,wr|=x;G=M.action,ms&&s(h,G),h=M.hasEagerState?M.eagerState:s(h,G)}else x={lane:G,revertLane:M.revertLane,action:M.action,hasEagerState:M.hasEagerState,eagerState:M.eagerState,next:null},S===null?(T=S=x,_=h):S=S.next=x,mt.lanes|=G,wr|=G;M=M.next}while(M!==null&&M!==n);if(S===null?_=h:S.next=T,!sn(h,e.memoizedState)&&(ve=!0,H&&(s=_a,s!==null)))throw s;e.memoizedState=h,e.baseState=_,e.baseQueue=S,o.lastRenderedState=h}return c===null&&(o.lanes=0),[e.memoizedState,o.dispatch]}function zf(e){var n=re(),s=n.queue;if(s===null)throw Error(a(311));s.lastRenderedReducer=e;var o=s.dispatch,c=s.pending,h=n.memoizedState;if(c!==null){s.pending=null;var _=c=c.next;do h=e(h,_.action),_=_.next;while(_!==c);sn(h,n.memoizedState)||(ve=!0),n.memoizedState=h,n.baseQueue===null&&(n.baseState=h),s.lastRenderedState=h}return[h,o]}function mp(e,n,s){var o=mt,c=re(),h=It;if(h){if(s===void 0)throw Error(a(407));s=s()}else s=n();var _=!sn((kt||c).memoizedState,s);if(_&&(c.memoizedState=s,ve=!0),c=c.queue,jf(yp.bind(null,o,c,e),[e]),c.getSnapshot!==n||_||ie!==null&&ie.memoizedState.tag&1){if(o.flags|=2048,Ea(9,gp.bind(null,o,c,s,n),{destroy:void 0},null),zt===null)throw Error(a(349));h||(pr&60)!==0||pp(o,n,s)}return s}function pp(e,n,s){e.flags|=16384,e={getSnapshot:n,value:s},n=mt.updateQueue,n===null?(n=Eu(),mt.updateQueue=n,n.stores=[e]):(s=n.stores,s===null?n.stores=[e]:s.push(e))}function gp(e,n,s,o){n.value=s,n.getSnapshot=o,_p(n)&&vp(e)}function yp(e,n,s){return s(function(){_p(n)&&vp(e)})}function _p(e){var n=e.getSnapshot;e=e.value;try{var s=n();return!sn(e,s)}catch{return!0}}function vp(e){var n=hr(e,2);n!==null&&Qe(n,e,2)}function Bf(e){var n=Ze();if(typeof e=="function"){var s=e;if(e=s(),ms){Fn(!0);try{s()}finally{Fn(!1)}}}return n.memoizedState=n.baseState=e,n.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Ii,lastRenderedState:e},n}function Tp(e,n,s,o){return e.baseState=s,Pf(e,kt,typeof o=="function"?o:Ii)}function lE(e,n,s,o,c){if(Ru(e))throw Error(a(485));if(e=n.action,e!==null){var h={payload:c,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(_){h.listeners.push(_)}};b.T!==null?s(!0):h.isTransition=!1,o(h),s=n.pending,s===null?(h.next=n.pending=h,Ep(n,h)):(h.next=s.next,n.pending=s.next=h)}}function Ep(e,n){var s=n.action,o=n.payload,c=e.state;if(n.isTransition){var h=b.T,_={};b.T=_;try{var T=s(c,o),S=b.S;S!==null&&S(_,T),bp(e,n,T)}catch(M){Hf(e,n,M)}finally{b.T=h}}else try{h=s(c,o),bp(e,n,h)}catch(M){Hf(e,n,M)}}function bp(e,n,s){s!==null&&typeof s=="object"&&typeof s.then=="function"?s.then(function(o){Ap(e,n,o)},function(o){return Hf(e,n,o)}):Ap(e,n,s)}function Ap(e,n,s){n.status="fulfilled",n.value=s,Sp(n),e.state=s,n=e.pending,n!==null&&(s=n.next,s===n?e.pending=null:(s=s.next,n.next=s,Ep(e,s)))}function Hf(e,n,s){var o=e.pending;if(e.pending=null,o!==null){o=o.next;do n.status="rejected",n.reason=s,Sp(n),n=n.next;while(n!==o)}e.action=null}function Sp(e){e=e.listeners;for(var n=0;n<e.length;n++)(0,e[n])()}function wp(e,n){return n}function Rp(e,n){if(It){var s=zt.formState;if(s!==null){t:{var o=mt;if(It){if(Re){e:{for(var c=Re,h=ei;c.nodeType!==8;){if(!h){c=null;break e}if(c=xn(c.nextSibling),c===null){c=null;break e}}h=c.data,c=h==="F!"||h==="F"?c:null}if(c){Re=xn(c.nextSibling),o=c.data==="F!";break t}}fs(o)}o=!1}o&&(n=s[0])}}return s=Ze(),s.memoizedState=s.baseState=n,o={pending:null,lanes:0,dispatch:null,lastRenderedReducer:wp,lastRenderedState:n},s.queue=o,s=Fp.bind(null,mt,o),o.dispatch=s,o=Bf(!1),h=Qf.bind(null,mt,!1,o.queue),o=Ze(),c={state:n,dispatch:null,action:e,pending:null},o.queue=c,s=lE.bind(null,mt,c,h,s),c.dispatch=s,o.memoizedState=e,[n,s,!1]}function Ip(e){var n=re();return Cp(n,kt,e)}function Cp(e,n,s){n=Pf(e,n,wp)[0],e=Au(Ii)[0],n=typeof n=="object"&&n!==null&&typeof n.then=="function"?Mo(n):n;var o=re(),c=o.queue,h=c.dispatch;return s!==o.memoizedState&&(mt.flags|=2048,Ea(9,uE.bind(null,c,s),{destroy:void 0},null)),[n,h,e]}function uE(e,n){e.action=n}function Dp(e){var n=re(),s=kt;if(s!==null)return Cp(n,s,e);re(),n=n.memoizedState,s=re();var o=s.queue.dispatch;return s.memoizedState=e,[n,o,!1]}function Ea(e,n,s,o){return e={tag:e,create:n,inst:s,deps:o,next:null},n=mt.updateQueue,n===null&&(n=Eu(),mt.updateQueue=n),s=n.lastEffect,s===null?n.lastEffect=e.next=e:(o=s.next,s.next=e,e.next=o,n.lastEffect=e),e}function Op(){return re().memoizedState}function Su(e,n,s,o){var c=Ze();mt.flags|=e,c.memoizedState=Ea(1|n,s,{destroy:void 0},o===void 0?null:o)}function wu(e,n,s,o){var c=re();o=o===void 0?null:o;var h=c.memoizedState.inst;kt!==null&&o!==null&&Mf(o,kt.memoizedState.deps)?c.memoizedState=Ea(n,s,h,o):(mt.flags|=e,c.memoizedState=Ea(1|n,s,h,o))}function Np(e,n){Su(8390656,8,e,n)}function jf(e,n){wu(2048,8,e,n)}function Mp(e,n){return wu(4,2,e,n)}function Vp(e,n){return wu(4,4,e,n)}function kp(e,n){if(typeof n=="function"){e=e();var s=n(e);return function(){typeof s=="function"?s():n(null)}}if(n!=null)return e=e(),n.current=e,function(){n.current=null}}function Lp(e,n,s){s=s!=null?s.concat([e]):null,wu(4,4,kp.bind(null,n,e),s)}function qf(){}function Up(e,n){var s=re();n=n===void 0?null:n;var o=s.memoizedState;return n!==null&&Mf(n,o[1])?o[0]:(s.memoizedState=[e,n],e)}function xp(e,n){var s=re();n=n===void 0?null:n;var o=s.memoizedState;if(n!==null&&Mf(n,o[1]))return o[0];if(o=e(),ms){Fn(!0);try{e()}finally{Fn(!1)}}return s.memoizedState=[o,n],o}function Ff(e,n,s){return s===void 0||(pr&1073741824)!==0?e.memoizedState=n:(e.memoizedState=s,e=zg(),mt.lanes|=e,wr|=e,s)}function Pp(e,n,s,o){return sn(s,n)?s:ga.current!==null?(e=Ff(e,s,o),sn(e,n)||(ve=!0),e):(pr&42)===0?(ve=!0,e.memoizedState=s):(e=zg(),mt.lanes|=e,wr|=e,n)}function zp(e,n,s,o,c){var h=Tt.p;Tt.p=h!==0&&8>h?h:8;var _=b.T,T={};b.T=T,Qf(e,!1,n,s);try{var S=c(),M=b.S;if(M!==null&&M(T,S),S!==null&&typeof S=="object"&&typeof S.then=="function"){var H=sE(S,o);Vo(e,n,H,un(e))}else Vo(e,n,o,un(e))}catch(G){Vo(e,n,{then:function(){},status:"rejected",reason:G},un())}finally{Tt.p=h,b.T=_}}function cE(){}function Gf(e,n,s,o){if(e.tag!==5)throw Error(a(476));var c=Bp(e).queue;zp(e,c,n,me,s===null?cE:function(){return Hp(e),s(o)})}function Bp(e){var n=e.memoizedState;if(n!==null)return n;n={memoizedState:me,baseState:me,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Ii,lastRenderedState:me},next:null};var s={};return n.next={memoizedState:s,baseState:s,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Ii,lastRenderedState:s},next:null},e.memoizedState=n,e=e.alternate,e!==null&&(e.memoizedState=n),n}function Hp(e){var n=Bp(e).next.queue;Vo(e,n,{},un())}function Kf(){return Ue(Jo)}function jp(){return re().memoizedState}function qp(){return re().memoizedState}function fE(e){for(var n=e.return;n!==null;){switch(n.tag){case 24:case 3:var s=un();e=vr(s);var o=Tr(n,e,s);o!==null&&(Qe(o,n,s),Uo(o,n,s)),n={cache:Df()},e.payload=n;return}n=n.return}}function hE(e,n,s){var o=un();s={lane:o,revertLane:0,action:s,hasEagerState:!1,eagerState:null,next:null},Ru(e)?Gp(n,s):(s=bf(e,n,s,o),s!==null&&(Qe(s,e,o),Kp(s,n,o)))}function Fp(e,n,s){var o=un();Vo(e,n,s,o)}function Vo(e,n,s,o){var c={lane:o,revertLane:0,action:s,hasEagerState:!1,eagerState:null,next:null};if(Ru(e))Gp(n,c);else{var h=e.alternate;if(e.lanes===0&&(h===null||h.lanes===0)&&(h=n.lastRenderedReducer,h!==null))try{var _=n.lastRenderedState,T=h(_,s);if(c.hasEagerState=!0,c.eagerState=T,sn(T,_))return uu(e,n,c,0),zt===null&&lu(),!1}catch{}finally{}if(s=bf(e,n,c,o),s!==null)return Qe(s,e,o),Kp(s,n,o),!0}return!1}function Qf(e,n,s,o){if(o={lane:2,revertLane:Uh(),action:o,hasEagerState:!1,eagerState:null,next:null},Ru(e)){if(n)throw Error(a(479))}else n=bf(e,s,o,2),n!==null&&Qe(n,e,2)}function Ru(e){var n=e.alternate;return e===mt||n!==null&&n===mt}function Gp(e,n){va=vu=!0;var s=e.pending;s===null?n.next=n:(n.next=s.next,s.next=n),e.pending=n}function Kp(e,n,s){if((s&4194176)!==0){var o=n.lanes;o&=e.pendingLanes,s|=o,n.lanes=s,nr(e,s)}}var ii={readContext:Ue,use:bu,useCallback:ee,useContext:ee,useEffect:ee,useImperativeHandle:ee,useLayoutEffect:ee,useInsertionEffect:ee,useMemo:ee,useReducer:ee,useRef:ee,useState:ee,useDebugValue:ee,useDeferredValue:ee,useTransition:ee,useSyncExternalStore:ee,useId:ee};ii.useCacheRefresh=ee,ii.useMemoCache=ee,ii.useHostTransitionStatus=ee,ii.useFormState=ee,ii.useActionState=ee,ii.useOptimistic=ee;var ps={readContext:Ue,use:bu,useCallback:function(e,n){return Ze().memoizedState=[e,n===void 0?null:n],e},useContext:Ue,useEffect:Np,useImperativeHandle:function(e,n,s){s=s!=null?s.concat([e]):null,Su(4194308,4,kp.bind(null,n,e),s)},useLayoutEffect:function(e,n){return Su(4194308,4,e,n)},useInsertionEffect:function(e,n){Su(4,2,e,n)},useMemo:function(e,n){var s=Ze();n=n===void 0?null:n;var o=e();if(ms){Fn(!0);try{e()}finally{Fn(!1)}}return s.memoizedState=[o,n],o},useReducer:function(e,n,s){var o=Ze();if(s!==void 0){var c=s(n);if(ms){Fn(!0);try{s(n)}finally{Fn(!1)}}}else c=n;return o.memoizedState=o.baseState=c,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:c},o.queue=e,e=e.dispatch=hE.bind(null,mt,e),[o.memoizedState,e]},useRef:function(e){var n=Ze();return e={current:e},n.memoizedState=e},useState:function(e){e=Bf(e);var n=e.queue,s=Fp.bind(null,mt,n);return n.dispatch=s,[e.memoizedState,s]},useDebugValue:qf,useDeferredValue:function(e,n){var s=Ze();return Ff(s,e,n)},useTransition:function(){var e=Bf(!1);return e=zp.bind(null,mt,e.queue,!0,!1),Ze().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,n,s){var o=mt,c=Ze();if(It){if(s===void 0)throw Error(a(407));s=s()}else{if(s=n(),zt===null)throw Error(a(349));(St&60)!==0||pp(o,n,s)}c.memoizedState=s;var h={value:s,getSnapshot:n};return c.queue=h,Np(yp.bind(null,o,h,e),[e]),o.flags|=2048,Ea(9,gp.bind(null,o,h,s,n),{destroy:void 0},null),s},useId:function(){var e=Ze(),n=zt.identifierPrefix;if(It){var s=wi,o=Si;s=(o&~(1<<32-qe(o)-1)).toString(32)+s,n=":"+n+"R"+s,s=Tu++,0<s&&(n+="H"+s.toString(32)),n+=":"}else s=aE++,n=":"+n+"r"+s.toString(32)+":";return e.memoizedState=n},useCacheRefresh:function(){return Ze().memoizedState=fE.bind(null,mt)}};ps.useMemoCache=xf,ps.useHostTransitionStatus=Kf,ps.useFormState=Rp,ps.useActionState=Rp,ps.useOptimistic=function(e){var n=Ze();n.memoizedState=n.baseState=e;var s={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return n.queue=s,n=Qf.bind(null,mt,!0,s),s.dispatch=n,[e,n]};var gr={readContext:Ue,use:bu,useCallback:Up,useContext:Ue,useEffect:jf,useImperativeHandle:Lp,useInsertionEffect:Mp,useLayoutEffect:Vp,useMemo:xp,useReducer:Au,useRef:Op,useState:function(){return Au(Ii)},useDebugValue:qf,useDeferredValue:function(e,n){var s=re();return Pp(s,kt.memoizedState,e,n)},useTransition:function(){var e=Au(Ii)[0],n=re().memoizedState;return[typeof e=="boolean"?e:Mo(e),n]},useSyncExternalStore:mp,useId:jp};gr.useCacheRefresh=qp,gr.useMemoCache=xf,gr.useHostTransitionStatus=Kf,gr.useFormState=Ip,gr.useActionState=Ip,gr.useOptimistic=function(e,n){var s=re();return Tp(s,kt,e,n)};var gs={readContext:Ue,use:bu,useCallback:Up,useContext:Ue,useEffect:jf,useImperativeHandle:Lp,useInsertionEffect:Mp,useLayoutEffect:Vp,useMemo:xp,useReducer:zf,useRef:Op,useState:function(){return zf(Ii)},useDebugValue:qf,useDeferredValue:function(e,n){var s=re();return kt===null?Ff(s,e,n):Pp(s,kt.memoizedState,e,n)},useTransition:function(){var e=zf(Ii)[0],n=re().memoizedState;return[typeof e=="boolean"?e:Mo(e),n]},useSyncExternalStore:mp,useId:jp};gs.useCacheRefresh=qp,gs.useMemoCache=xf,gs.useHostTransitionStatus=Kf,gs.useFormState=Dp,gs.useActionState=Dp,gs.useOptimistic=function(e,n){var s=re();return kt!==null?Tp(s,kt,e,n):(s.baseState=e,[e,s.queue.dispatch])};function Yf(e,n,s,o){n=e.memoizedState,s=s(o,n),s=s==null?n:R({},n,s),e.memoizedState=s,e.lanes===0&&(e.updateQueue.baseState=s)}var Xf={isMounted:function(e){return(e=e._reactInternals)?st(e)===e:!1},enqueueSetState:function(e,n,s){e=e._reactInternals;var o=un(),c=vr(o);c.payload=n,s!=null&&(c.callback=s),n=Tr(e,c,o),n!==null&&(Qe(n,e,o),Uo(n,e,o))},enqueueReplaceState:function(e,n,s){e=e._reactInternals;var o=un(),c=vr(o);c.tag=1,c.payload=n,s!=null&&(c.callback=s),n=Tr(e,c,o),n!==null&&(Qe(n,e,o),Uo(n,e,o))},enqueueForceUpdate:function(e,n){e=e._reactInternals;var s=un(),o=vr(s);o.tag=2,n!=null&&(o.callback=n),n=Tr(e,o,s),n!==null&&(Qe(n,e,s),Uo(n,e,s))}};function Qp(e,n,s,o,c,h,_){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(o,h,_):n.prototype&&n.prototype.isPureReactComponent?!To(s,o)||!To(c,h):!0}function Yp(e,n,s,o){e=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(s,o),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(s,o),n.state!==e&&Xf.enqueueReplaceState(n,n.state,null)}function ys(e,n){var s=n;if("ref"in n){s={};for(var o in n)o!=="ref"&&(s[o]=n[o])}if(e=e.defaultProps){s===n&&(s=R({},s));for(var c in e)s[c]===void 0&&(s[c]=e[c])}return s}var Iu=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var n=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(n))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)};function Xp(e){Iu(e)}function $p(e){console.error(e)}function Zp(e){Iu(e)}function Cu(e,n){try{var s=e.onUncaughtError;s(n.value,{componentStack:n.stack})}catch(o){setTimeout(function(){throw o})}}function Wp(e,n,s){try{var o=e.onCaughtError;o(s.value,{componentStack:s.stack,errorBoundary:n.tag===1?n.stateNode:null})}catch(c){setTimeout(function(){throw c})}}function $f(e,n,s){return s=vr(s),s.tag=3,s.payload={element:null},s.callback=function(){Cu(e,n)},s}function Jp(e){return e=vr(e),e.tag=3,e}function tg(e,n,s,o){var c=s.type.getDerivedStateFromError;if(typeof c=="function"){var h=o.value;e.payload=function(){return c(h)},e.callback=function(){Wp(n,s,o)}}var _=s.stateNode;_!==null&&typeof _.componentDidCatch=="function"&&(e.callback=function(){Wp(n,s,o),typeof c!="function"&&(Rr===null?Rr=new Set([this]):Rr.add(this));var T=o.stack;this.componentDidCatch(o.value,{componentStack:T!==null?T:""})})}function dE(e,n,s,o,c){if(s.flags|=32768,o!==null&&typeof o=="object"&&typeof o.then=="function"){if(n=s.alternate,n!==null&&Lo(n,s,c,!0),s=An.current,s!==null){switch(s.tag){case 13:return ni===null?Nh():s.alternate===null&&$t===0&&($t=3),s.flags&=-257,s.flags|=65536,s.lanes=c,o===Rf?s.flags|=16384:(n=s.updateQueue,n===null?s.updateQueue=new Set([o]):n.add(o),Vh(e,o,c)),!1;case 22:return s.flags|=65536,o===Rf?s.flags|=16384:(n=s.updateQueue,n===null?(n={transitions:null,markerInstances:null,retryQueue:new Set([o])},s.updateQueue=n):(s=n.retryQueue,s===null?n.retryQueue=new Set([o]):s.add(o)),Vh(e,o,c)),!1}throw Error(a(435,s.tag))}return Vh(e,o,c),Nh(),!1}if(It)return n=An.current,n!==null?((n.flags&65536)===0&&(n.flags|=256),n.flags|=65536,n.lanes=c,o!==wf&&(e=Error(a(422),{cause:o}),So(Tn(e,s)))):(o!==wf&&(n=Error(a(423),{cause:o}),So(Tn(n,s))),e=e.current.alternate,e.flags|=65536,c&=-c,e.lanes|=c,o=Tn(o,s),c=$f(e.stateNode,o,c),fh(e,c),$t!==4&&($t=2)),!1;var h=Error(a(520),{cause:o});if(h=Tn(h,s),Fo===null?Fo=[h]:Fo.push(h),$t!==4&&($t=2),n===null)return!0;o=Tn(o,s),s=n;do{switch(s.tag){case 3:return s.flags|=65536,e=c&-c,s.lanes|=e,e=$f(s.stateNode,o,e),fh(s,e),!1;case 1:if(n=s.type,h=s.stateNode,(s.flags&128)===0&&(typeof n.getDerivedStateFromError=="function"||h!==null&&typeof h.componentDidCatch=="function"&&(Rr===null||!Rr.has(h))))return s.flags|=65536,c&=-c,s.lanes|=c,c=Jp(c),tg(c,e,s,o),fh(s,c),!1}s=s.return}while(s!==null);return!1}var eg=Error(a(461)),ve=!1;function Ie(e,n,s,o){n.child=e===null?ap(n,null,s,o):hs(n,e.child,s,o)}function ng(e,n,s,o,c){s=s.render;var h=n.ref;if("ref"in o){var _={};for(var T in o)T!=="ref"&&(_[T]=o[T])}else _=o;return vs(n),o=Vf(e,n,s,_,h,c),T=kf(),e!==null&&!ve?(Lf(e,n,c),Ci(e,n,c)):(It&&T&&Af(n),n.flags|=1,Ie(e,n,o,c),n.child)}function ig(e,n,s,o,c){if(e===null){var h=s.type;return typeof h=="function"&&!vh(h)&&h.defaultProps===void 0&&s.compare===null?(n.tag=15,n.type=h,rg(e,n,h,o,c)):(e=Vu(s.type,null,o,n,n.mode,c),e.ref=n.ref,e.return=n,n.child=e)}if(h=e.child,!sh(e,c)){var _=h.memoizedProps;if(s=s.compare,s=s!==null?s:To,s(_,o)&&e.ref===n.ref)return Ci(e,n,c)}return n.flags|=1,e=Sr(h,o),e.ref=n.ref,e.return=n,n.child=e}function rg(e,n,s,o,c){if(e!==null){var h=e.memoizedProps;if(To(h,o)&&e.ref===n.ref)if(ve=!1,n.pendingProps=o=h,sh(e,c))(e.flags&131072)!==0&&(ve=!0);else return n.lanes=e.lanes,Ci(e,n,c)}return Zf(e,n,s,o,c)}function sg(e,n,s){var o=n.pendingProps,c=o.children,h=(n.stateNode._pendingVisibility&2)!==0,_=e!==null?e.memoizedState:null;if(ko(e,n),o.mode==="hidden"||h){if((n.flags&128)!==0){if(o=_!==null?_.baseLanes|s:s,e!==null){for(c=n.child=e.child,h=0;c!==null;)h=h|c.lanes|c.childLanes,c=c.sibling;n.childLanes=h&~o}else n.childLanes=0,n.child=null;return ag(e,n,o,s)}if((s&536870912)!==0)n.memoizedState={baseLanes:0,cachePool:null},e!==null&&_u(n,_!==null?_.cachePool:null),_!==null?op(n,_):If(),lp(n);else return n.lanes=n.childLanes=536870912,ag(e,n,_!==null?_.baseLanes|s:s,s)}else _!==null?(_u(n,_.cachePool),op(n,_),mr(),n.memoizedState=null):(e!==null&&_u(n,null),If(),mr());return Ie(e,n,c,s),n.child}function ag(e,n,s,o){var c=Nf();return c=c===null?null:{parent:de._currentValue,pool:c},n.memoizedState={baseLanes:s,cachePool:c},e!==null&&_u(n,null),If(),lp(n),e!==null&&Lo(e,n,o,!0),null}function ko(e,n){var s=n.ref;if(s===null)e!==null&&e.ref!==null&&(n.flags|=2097664);else{if(typeof s!="function"&&typeof s!="object")throw Error(a(284));(e===null||e.ref!==s)&&(n.flags|=2097664)}}function Zf(e,n,s,o,c){return vs(n),s=Vf(e,n,s,o,void 0,c),o=kf(),e!==null&&!ve?(Lf(e,n,c),Ci(e,n,c)):(It&&o&&Af(n),n.flags|=1,Ie(e,n,s,c),n.child)}function og(e,n,s,o,c,h){return vs(n),n.updateQueue=null,s=dp(n,o,s,c),hp(e),o=kf(),e!==null&&!ve?(Lf(e,n,h),Ci(e,n,h)):(It&&o&&Af(n),n.flags|=1,Ie(e,n,s,h),n.child)}function lg(e,n,s,o,c){if(vs(n),n.stateNode===null){var h=ha,_=s.contextType;typeof _=="object"&&_!==null&&(h=Ue(_)),h=new s(o,h),n.memoizedState=h.state!==null&&h.state!==void 0?h.state:null,h.updater=Xf,n.stateNode=h,h._reactInternals=n,h=n.stateNode,h.props=o,h.state=n.memoizedState,h.refs={},uh(n),_=s.contextType,h.context=typeof _=="object"&&_!==null?Ue(_):ha,h.state=n.memoizedState,_=s.getDerivedStateFromProps,typeof _=="function"&&(Yf(n,s,_,o),h.state=n.memoizedState),typeof s.getDerivedStateFromProps=="function"||typeof h.getSnapshotBeforeUpdate=="function"||typeof h.UNSAFE_componentWillMount!="function"&&typeof h.componentWillMount!="function"||(_=h.state,typeof h.componentWillMount=="function"&&h.componentWillMount(),typeof h.UNSAFE_componentWillMount=="function"&&h.UNSAFE_componentWillMount(),_!==h.state&&Xf.enqueueReplaceState(h,h.state,null),Po(n,o,h,c),xo(),h.state=n.memoizedState),typeof h.componentDidMount=="function"&&(n.flags|=4194308),o=!0}else if(e===null){h=n.stateNode;var T=n.memoizedProps,S=ys(s,T);h.props=S;var M=h.context,H=s.contextType;_=ha,typeof H=="object"&&H!==null&&(_=Ue(H));var G=s.getDerivedStateFromProps;H=typeof G=="function"||typeof h.getSnapshotBeforeUpdate=="function",T=n.pendingProps!==T,H||typeof h.UNSAFE_componentWillReceiveProps!="function"&&typeof h.componentWillReceiveProps!="function"||(T||M!==_)&&Yp(n,h,o,_),_r=!1;var x=n.memoizedState;h.state=x,Po(n,o,h,c),xo(),M=n.memoizedState,T||x!==M||_r?(typeof G=="function"&&(Yf(n,s,G,o),M=n.memoizedState),(S=_r||Qp(n,s,S,o,x,M,_))?(H||typeof h.UNSAFE_componentWillMount!="function"&&typeof h.componentWillMount!="function"||(typeof h.componentWillMount=="function"&&h.componentWillMount(),typeof h.UNSAFE_componentWillMount=="function"&&h.UNSAFE_componentWillMount()),typeof h.componentDidMount=="function"&&(n.flags|=4194308)):(typeof h.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=o,n.memoizedState=M),h.props=o,h.state=M,h.context=_,o=S):(typeof h.componentDidMount=="function"&&(n.flags|=4194308),o=!1)}else{h=n.stateNode,ch(e,n),_=n.memoizedProps,H=ys(s,_),h.props=H,G=n.pendingProps,x=h.context,M=s.contextType,S=ha,typeof M=="object"&&M!==null&&(S=Ue(M)),T=s.getDerivedStateFromProps,(M=typeof T=="function"||typeof h.getSnapshotBeforeUpdate=="function")||typeof h.UNSAFE_componentWillReceiveProps!="function"&&typeof h.componentWillReceiveProps!="function"||(_!==G||x!==S)&&Yp(n,h,o,S),_r=!1,x=n.memoizedState,h.state=x,Po(n,o,h,c),xo();var B=n.memoizedState;_!==G||x!==B||_r||e!==null&&e.dependencies!==null&&Du(e.dependencies)?(typeof T=="function"&&(Yf(n,s,T,o),B=n.memoizedState),(H=_r||Qp(n,s,H,o,x,B,S)||e!==null&&e.dependencies!==null&&Du(e.dependencies))?(M||typeof h.UNSAFE_componentWillUpdate!="function"&&typeof h.componentWillUpdate!="function"||(typeof h.componentWillUpdate=="function"&&h.componentWillUpdate(o,B,S),typeof h.UNSAFE_componentWillUpdate=="function"&&h.UNSAFE_componentWillUpdate(o,B,S)),typeof h.componentDidUpdate=="function"&&(n.flags|=4),typeof h.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof h.componentDidUpdate!="function"||_===e.memoizedProps&&x===e.memoizedState||(n.flags|=4),typeof h.getSnapshotBeforeUpdate!="function"||_===e.memoizedProps&&x===e.memoizedState||(n.flags|=1024),n.memoizedProps=o,n.memoizedState=B),h.props=o,h.state=B,h.context=S,o=H):(typeof h.componentDidUpdate!="function"||_===e.memoizedProps&&x===e.memoizedState||(n.flags|=4),typeof h.getSnapshotBeforeUpdate!="function"||_===e.memoizedProps&&x===e.memoizedState||(n.flags|=1024),o=!1)}return h=o,ko(e,n),o=(n.flags&128)!==0,h||o?(h=n.stateNode,s=o&&typeof s.getDerivedStateFromError!="function"?null:h.render(),n.flags|=1,e!==null&&o?(n.child=hs(n,e.child,null,c),n.child=hs(n,null,s,c)):Ie(e,n,s,c),n.memoizedState=h.state,e=n.child):e=Ci(e,n,c),e}function ug(e,n,s,o){return Ao(),n.flags|=256,Ie(e,n,s,o),n.child}var Wf={dehydrated:null,treeContext:null,retryLane:0};function Jf(e){return{baseLanes:e,cachePool:fp()}}function th(e,n,s){return e=e!==null?e.childLanes&~s:0,n&&(e|=In),e}function cg(e,n,s){var o=n.pendingProps,c=!1,h=(n.flags&128)!==0,_;if((_=h)||(_=e!==null&&e.memoizedState===null?!1:(he.current&2)!==0),_&&(c=!0,n.flags&=-129),_=(n.flags&32)!==0,n.flags&=-33,e===null){if(It){if(c?dr(n):mr(),It){var T=Re,S;if(S=T){t:{for(S=T,T=ei;S.nodeType!==8;){if(!T){T=null;break t}if(S=xn(S.nextSibling),S===null){T=null;break t}}T=S}T!==null?(n.memoizedState={dehydrated:T,treeContext:us!==null?{id:Si,overflow:wi}:null,retryLane:536870912},S=Rn(18,null,null,0),S.stateNode=T,S.return=n,n.child=S,Ke=n,Re=null,S=!0):S=!1}S||fs(n)}if(T=n.memoizedState,T!==null&&(T=T.dehydrated,T!==null))return T.data==="$!"?n.lanes=16:n.lanes=536870912,null;Ri(n)}return T=o.children,o=o.fallback,c?(mr(),c=n.mode,T=nh({mode:"hidden",children:T},c),o=Es(o,c,s,null),T.return=n,o.return=n,T.sibling=o,n.child=T,c=n.child,c.memoizedState=Jf(s),c.childLanes=th(e,_,s),n.memoizedState=Wf,o):(dr(n),eh(n,T))}if(S=e.memoizedState,S!==null&&(T=S.dehydrated,T!==null)){if(h)n.flags&256?(dr(n),n.flags&=-257,n=ih(e,n,s)):n.memoizedState!==null?(mr(),n.child=e.child,n.flags|=128,n=null):(mr(),c=o.fallback,T=n.mode,o=nh({mode:"visible",children:o.children},T),c=Es(c,T,s,null),c.flags|=2,o.return=n,c.return=n,o.sibling=c,n.child=o,hs(n,e.child,null,s),o=n.child,o.memoizedState=Jf(s),o.childLanes=th(e,_,s),n.memoizedState=Wf,n=c);else if(dr(n),T.data==="$!"){if(_=T.nextSibling&&T.nextSibling.dataset,_)var M=_.dgst;_=M,o=Error(a(419)),o.stack="",o.digest=_,So({value:o,source:null,stack:null}),n=ih(e,n,s)}else if(ve||Lo(e,n,s,!1),_=(s&e.childLanes)!==0,ve||_){if(_=zt,_!==null){if(o=s&-s,(o&42)!==0)o=1;else switch(o){case 2:o=1;break;case 8:o=4;break;case 32:o=16;break;case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:o=64;break;case 268435456:o=134217728;break;default:o=0}if(o=(o&(_.suspendedLanes|s))!==0?0:o,o!==0&&o!==S.retryLane)throw S.retryLane=o,hr(e,o),Qe(_,e,o),eg}T.data==="$?"||Nh(),n=ih(e,n,s)}else T.data==="$?"?(n.flags|=128,n.child=e.child,n=CE.bind(null,e),T._reactRetry=n,n=null):(e=S.treeContext,Re=xn(T.nextSibling),Ke=n,It=!0,Ln=null,ei=!1,e!==null&&(En[bn++]=Si,En[bn++]=wi,En[bn++]=us,Si=e.id,wi=e.overflow,us=n),n=eh(n,o.children),n.flags|=4096);return n}return c?(mr(),c=o.fallback,T=n.mode,S=e.child,M=S.sibling,o=Sr(S,{mode:"hidden",children:o.children}),o.subtreeFlags=S.subtreeFlags&31457280,M!==null?c=Sr(M,c):(c=Es(c,T,s,null),c.flags|=2),c.return=n,o.return=n,o.sibling=c,n.child=o,o=c,c=n.child,T=e.child.memoizedState,T===null?T=Jf(s):(S=T.cachePool,S!==null?(M=de._currentValue,S=S.parent!==M?{parent:M,pool:M}:S):S=fp(),T={baseLanes:T.baseLanes|s,cachePool:S}),c.memoizedState=T,c.childLanes=th(e,_,s),n.memoizedState=Wf,o):(dr(n),s=e.child,e=s.sibling,s=Sr(s,{mode:"visible",children:o.children}),s.return=n,s.sibling=null,e!==null&&(_=n.deletions,_===null?(n.deletions=[e],n.flags|=16):_.push(e)),n.child=s,n.memoizedState=null,s)}function eh(e,n){return n=nh({mode:"visible",children:n},e.mode),n.return=e,e.child=n}function nh(e,n){return Ug(e,n,0,null)}function ih(e,n,s){return hs(n,e.child,null,s),e=eh(n,n.pendingProps.children),e.flags|=2,n.memoizedState=null,e}function fg(e,n,s){e.lanes|=n;var o=e.alternate;o!==null&&(o.lanes|=n),oh(e.return,n,s)}function rh(e,n,s,o,c){var h=e.memoizedState;h===null?e.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:o,tail:s,tailMode:c}:(h.isBackwards=n,h.rendering=null,h.renderingStartTime=0,h.last=o,h.tail=s,h.tailMode=c)}function hg(e,n,s){var o=n.pendingProps,c=o.revealOrder,h=o.tail;if(Ie(e,n,o.children,s),o=he.current,(o&2)!==0)o=o&1|2,n.flags|=128;else{if(e!==null&&(e.flags&128)!==0)t:for(e=n.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&fg(e,s,n);else if(e.tag===19)fg(e,s,n);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===n)break t;for(;e.sibling===null;){if(e.return===null||e.return===n)break t;e=e.return}e.sibling.return=e.return,e=e.sibling}o&=1}switch(Ot(he,o),c){case"forwards":for(s=n.child,c=null;s!==null;)e=s.alternate,e!==null&&yu(e)===null&&(c=s),s=s.sibling;s=c,s===null?(c=n.child,n.child=null):(c=s.sibling,s.sibling=null),rh(n,!1,c,s,h);break;case"backwards":for(s=null,c=n.child,n.child=null;c!==null;){if(e=c.alternate,e!==null&&yu(e)===null){n.child=c;break}e=c.sibling,c.sibling=s,s=c,c=e}rh(n,!0,s,null,h);break;case"together":rh(n,!1,null,null,void 0);break;default:n.memoizedState=null}return n.child}function Ci(e,n,s){if(e!==null&&(n.dependencies=e.dependencies),wr|=n.lanes,(s&n.childLanes)===0)if(e!==null){if(Lo(e,n,s,!1),(s&n.childLanes)===0)return null}else return null;if(e!==null&&n.child!==e.child)throw Error(a(153));if(n.child!==null){for(e=n.child,s=Sr(e,e.pendingProps),n.child=s,s.return=n;e.sibling!==null;)e=e.sibling,s=s.sibling=Sr(e,e.pendingProps),s.return=n;s.sibling=null}return n.child}function sh(e,n){return(e.lanes&n)!==0?!0:(e=e.dependencies,!!(e!==null&&Du(e)))}function mE(e,n,s){switch(n.tag){case 3:$i(n,n.stateNode.containerInfo),yr(n,de,e.memoizedState.cache),Ao();break;case 27:case 5:Wa(n);break;case 4:$i(n,n.stateNode.containerInfo);break;case 10:yr(n,n.type,n.memoizedProps.value);break;case 13:var o=n.memoizedState;if(o!==null)return o.dehydrated!==null?(dr(n),n.flags|=128,null):(s&n.child.childLanes)!==0?cg(e,n,s):(dr(n),e=Ci(e,n,s),e!==null?e.sibling:null);dr(n);break;case 19:var c=(e.flags&128)!==0;if(o=(s&n.childLanes)!==0,o||(Lo(e,n,s,!1),o=(s&n.childLanes)!==0),c){if(o)return hg(e,n,s);n.flags|=128}if(c=n.memoizedState,c!==null&&(c.rendering=null,c.tail=null,c.lastEffect=null),Ot(he,he.current),o)break;return null;case 22:case 23:return n.lanes=0,sg(e,n,s);case 24:yr(n,de,e.memoizedState.cache)}return Ci(e,n,s)}function dg(e,n,s){if(e!==null)if(e.memoizedProps!==n.pendingProps)ve=!0;else{if(!sh(e,s)&&(n.flags&128)===0)return ve=!1,mE(e,n,s);ve=(e.flags&131072)!==0}else ve=!1,It&&(n.flags&1048576)!==0&&Zm(n,hu,n.index);switch(n.lanes=0,n.tag){case 16:t:{e=n.pendingProps;var o=n.elementType,c=o._init;if(o=c(o._payload),n.type=o,typeof o=="function")vh(o)?(e=ys(o,e),n.tag=1,n=lg(null,n,o,e,s)):(n.tag=0,n=Zf(null,n,o,e,s));else{if(o!=null){if(c=o.$$typeof,c===Q){n.tag=11,n=ng(null,n,o,e,s);break t}else if(c===et){n.tag=14,n=ig(null,n,o,e,s);break t}}throw n=A(o)||o,Error(a(306,n,""))}}return n;case 0:return Zf(e,n,n.type,n.pendingProps,s);case 1:return o=n.type,c=ys(o,n.pendingProps),lg(e,n,o,c,s);case 3:t:{if($i(n,n.stateNode.containerInfo),e===null)throw Error(a(387));var h=n.pendingProps;c=n.memoizedState,o=c.element,ch(e,n),Po(n,h,null,s);var _=n.memoizedState;if(h=_.cache,yr(n,de,h),h!==c.cache&&lh(n,[de],s,!0),xo(),h=_.element,c.isDehydrated)if(c={element:h,isDehydrated:!1,cache:_.cache},n.updateQueue.baseState=c,n.memoizedState=c,n.flags&256){n=ug(e,n,h,s);break t}else if(h!==o){o=Tn(Error(a(424)),n),So(o),n=ug(e,n,h,s);break t}else for(Re=xn(n.stateNode.containerInfo.firstChild),Ke=n,It=!0,Ln=null,ei=!0,s=ap(n,null,h,s),n.child=s;s;)s.flags=s.flags&-3|4096,s=s.sibling;else{if(Ao(),h===o){n=Ci(e,n,s);break t}Ie(e,n,h,s)}n=n.child}return n;case 26:return ko(e,n),e===null?(s=gy(n.type,null,n.pendingProps,null))?n.memoizedState=s:It||(s=n.type,e=n.pendingProps,o=Gu(hn.current).createElement(s),o[ge]=n,o[ue]=e,Ce(o,s,e),Gt(o),n.stateNode=o):n.memoizedState=gy(n.type,e.memoizedProps,n.pendingProps,e.memoizedState),null;case 27:return Wa(n),e===null&&It&&(o=n.stateNode=dy(n.type,n.pendingProps,hn.current),Ke=n,ei=!0,Re=xn(o.firstChild)),o=n.pendingProps.children,e!==null||It?Ie(e,n,o,s):n.child=hs(n,null,o,s),ko(e,n),n.child;case 5:return e===null&&It&&((c=o=Re)&&(o=FE(o,n.type,n.pendingProps,ei),o!==null?(n.stateNode=o,Ke=n,Re=xn(o.firstChild),ei=!1,c=!0):c=!1),c||fs(n)),Wa(n),c=n.type,h=n.pendingProps,_=e!==null?e.memoizedProps:null,o=h.children,Gh(c,h)?o=null:_!==null&&Gh(c,_)&&(n.flags|=32),n.memoizedState!==null&&(c=Vf(e,n,oE,null,null,s),Jo._currentValue=c),ko(e,n),Ie(e,n,o,s),n.child;case 6:return e===null&&It&&((e=s=Re)&&(s=GE(s,n.pendingProps,ei),s!==null?(n.stateNode=s,Ke=n,Re=null,e=!0):e=!1),e||fs(n)),null;case 13:return cg(e,n,s);case 4:return $i(n,n.stateNode.containerInfo),o=n.pendingProps,e===null?n.child=hs(n,null,o,s):Ie(e,n,o,s),n.child;case 11:return ng(e,n,n.type,n.pendingProps,s);case 7:return Ie(e,n,n.pendingProps,s),n.child;case 8:return Ie(e,n,n.pendingProps.children,s),n.child;case 12:return Ie(e,n,n.pendingProps.children,s),n.child;case 10:return o=n.pendingProps,yr(n,n.type,o.value),Ie(e,n,o.children,s),n.child;case 9:return c=n.type._context,o=n.pendingProps.children,vs(n),c=Ue(c),o=o(c),n.flags|=1,Ie(e,n,o,s),n.child;case 14:return ig(e,n,n.type,n.pendingProps,s);case 15:return rg(e,n,n.type,n.pendingProps,s);case 19:return hg(e,n,s);case 22:return sg(e,n,s);case 24:return vs(n),o=Ue(de),e===null?(c=Nf(),c===null&&(c=zt,h=Df(),c.pooledCache=h,h.refCount++,h!==null&&(c.pooledCacheLanes|=s),c=h),n.memoizedState={parent:o,cache:c},uh(n),yr(n,de,c)):((e.lanes&s)!==0&&(ch(e,n),Po(n,null,null,s),xo()),c=e.memoizedState,h=n.memoizedState,c.parent!==o?(c={parent:o,cache:o},n.memoizedState=c,n.lanes===0&&(n.memoizedState=n.updateQueue.baseState=c),yr(n,de,o)):(o=h.cache,yr(n,de,o),o!==c.cache&&lh(n,[de],s,!0))),Ie(e,n,n.pendingProps.children,s),n.child;case 29:throw n.pendingProps}throw Error(a(156,n.tag))}var ah=fn(null),_s=null,Di=null;function yr(e,n,s){Ot(ah,n._currentValue),n._currentValue=s}function Oi(e){e._currentValue=ah.current,ne(ah)}function oh(e,n,s){for(;e!==null;){var o=e.alternate;if((e.childLanes&n)!==n?(e.childLanes|=n,o!==null&&(o.childLanes|=n)):o!==null&&(o.childLanes&n)!==n&&(o.childLanes|=n),e===s)break;e=e.return}}function lh(e,n,s,o){var c=e.child;for(c!==null&&(c.return=e);c!==null;){var h=c.dependencies;if(h!==null){var _=c.child;h=h.firstContext;t:for(;h!==null;){var T=h;h=c;for(var S=0;S<n.length;S++)if(T.context===n[S]){h.lanes|=s,T=h.alternate,T!==null&&(T.lanes|=s),oh(h.return,s,e),o||(_=null);break t}h=T.next}}else if(c.tag===18){if(_=c.return,_===null)throw Error(a(341));_.lanes|=s,h=_.alternate,h!==null&&(h.lanes|=s),oh(_,s,e),_=null}else _=c.child;if(_!==null)_.return=c;else for(_=c;_!==null;){if(_===e){_=null;break}if(c=_.sibling,c!==null){c.return=_.return,_=c;break}_=_.return}c=_}}function Lo(e,n,s,o){e=null;for(var c=n,h=!1;c!==null;){if(!h){if((c.flags&524288)!==0)h=!0;else if((c.flags&262144)!==0)break}if(c.tag===10){var _=c.alternate;if(_===null)throw Error(a(387));if(_=_.memoizedProps,_!==null){var T=c.type;sn(c.pendingProps.value,_.value)||(e!==null?e.push(T):e=[T])}}else if(c===Xi.current){if(_=c.alternate,_===null)throw Error(a(387));_.memoizedState.memoizedState!==c.memoizedState.memoizedState&&(e!==null?e.push(Jo):e=[Jo])}c=c.return}e!==null&&lh(n,e,s,o),n.flags|=262144}function Du(e){for(e=e.firstContext;e!==null;){if(!sn(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function vs(e){_s=e,Di=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function Ue(e){return mg(_s,e)}function Ou(e,n){return _s===null&&vs(e),mg(e,n)}function mg(e,n){var s=n._currentValue;if(n={context:n,memoizedValue:s,next:null},Di===null){if(e===null)throw Error(a(308));Di=n,e.dependencies={lanes:0,firstContext:n},e.flags|=524288}else Di=Di.next=n;return s}var _r=!1;function uh(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function ch(e,n){e=e.updateQueue,n.updateQueue===e&&(n.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function vr(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function Tr(e,n,s){var o=e.updateQueue;if(o===null)return null;if(o=o.shared,(Qt&2)!==0){var c=o.pending;return c===null?n.next=n:(n.next=c.next,c.next=n),o.pending=n,n=cu(e),Xm(e,null,s),n}return uu(e,o,n,s),cu(e)}function Uo(e,n,s){if(n=n.updateQueue,n!==null&&(n=n.shared,(s&4194176)!==0)){var o=n.lanes;o&=e.pendingLanes,s|=o,n.lanes=s,nr(e,s)}}function fh(e,n){var s=e.updateQueue,o=e.alternate;if(o!==null&&(o=o.updateQueue,s===o)){var c=null,h=null;if(s=s.firstBaseUpdate,s!==null){do{var _={lane:s.lane,tag:s.tag,payload:s.payload,callback:null,next:null};h===null?c=h=_:h=h.next=_,s=s.next}while(s!==null);h===null?c=h=n:h=h.next=n}else c=h=n;s={baseState:o.baseState,firstBaseUpdate:c,lastBaseUpdate:h,shared:o.shared,callbacks:o.callbacks},e.updateQueue=s;return}e=s.lastBaseUpdate,e===null?s.firstBaseUpdate=n:e.next=n,s.lastBaseUpdate=n}var hh=!1;function xo(){if(hh){var e=_a;if(e!==null)throw e}}function Po(e,n,s,o){hh=!1;var c=e.updateQueue;_r=!1;var h=c.firstBaseUpdate,_=c.lastBaseUpdate,T=c.shared.pending;if(T!==null){c.shared.pending=null;var S=T,M=S.next;S.next=null,_===null?h=M:_.next=M,_=S;var H=e.alternate;H!==null&&(H=H.updateQueue,T=H.lastBaseUpdate,T!==_&&(T===null?H.firstBaseUpdate=M:T.next=M,H.lastBaseUpdate=S))}if(h!==null){var G=c.baseState;_=0,H=M=S=null,T=h;do{var x=T.lane&-536870913,B=x!==T.lane;if(B?(St&x)===x:(o&x)===x){x!==0&&x===ya&&(hh=!0),H!==null&&(H=H.next={lane:0,tag:T.tag,payload:T.payload,callback:null,next:null});t:{var rt=e,ht=T;x=n;var Zt=s;switch(ht.tag){case 1:if(rt=ht.payload,typeof rt=="function"){G=rt.call(Zt,G,x);break t}G=rt;break t;case 3:rt.flags=rt.flags&-65537|128;case 0:if(rt=ht.payload,x=typeof rt=="function"?rt.call(Zt,G,x):rt,x==null)break t;G=R({},G,x);break t;case 2:_r=!0}}x=T.callback,x!==null&&(e.flags|=64,B&&(e.flags|=8192),B=c.callbacks,B===null?c.callbacks=[x]:B.push(x))}else B={lane:x,tag:T.tag,payload:T.payload,callback:T.callback,next:null},H===null?(M=H=B,S=G):H=H.next=B,_|=x;if(T=T.next,T===null){if(T=c.shared.pending,T===null)break;B=T,T=B.next,B.next=null,c.lastBaseUpdate=B,c.shared.pending=null}}while(!0);H===null&&(S=G),c.baseState=S,c.firstBaseUpdate=M,c.lastBaseUpdate=H,h===null&&(c.shared.lanes=0),wr|=_,e.lanes=_,e.memoizedState=G}}function pg(e,n){if(typeof e!="function")throw Error(a(191,e));e.call(n)}function gg(e,n){var s=e.callbacks;if(s!==null)for(e.callbacks=null,e=0;e<s.length;e++)pg(s[e],n)}function zo(e,n){try{var s=n.updateQueue,o=s!==null?s.lastEffect:null;if(o!==null){var c=o.next;s=c;do{if((s.tag&e)===e){o=void 0;var h=s.create,_=s.inst;o=h(),_.destroy=o}s=s.next}while(s!==c)}}catch(T){xt(n,n.return,T)}}function Er(e,n,s){try{var o=n.updateQueue,c=o!==null?o.lastEffect:null;if(c!==null){var h=c.next;o=h;do{if((o.tag&e)===e){var _=o.inst,T=_.destroy;if(T!==void 0){_.destroy=void 0,c=n;var S=s;try{T()}catch(M){xt(c,S,M)}}}o=o.next}while(o!==h)}}catch(M){xt(n,n.return,M)}}function yg(e){var n=e.updateQueue;if(n!==null){var s=e.stateNode;try{gg(n,s)}catch(o){xt(e,e.return,o)}}}function _g(e,n,s){s.props=ys(e.type,e.memoizedProps),s.state=e.memoizedState;try{s.componentWillUnmount()}catch(o){xt(e,n,o)}}function Ts(e,n){try{var s=e.ref;if(s!==null){var o=e.stateNode;switch(e.tag){case 26:case 27:case 5:var c=o;break;default:c=o}typeof s=="function"?e.refCleanup=s(c):s.current=c}}catch(h){xt(e,n,h)}}function an(e,n){var s=e.ref,o=e.refCleanup;if(s!==null)if(typeof o=="function")try{o()}catch(c){xt(e,n,c)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof s=="function")try{s(null)}catch(c){xt(e,n,c)}else s.current=null}function vg(e){var n=e.type,s=e.memoizedProps,o=e.stateNode;try{t:switch(n){case"button":case"input":case"select":case"textarea":s.autoFocus&&o.focus();break t;case"img":s.src?o.src=s.src:s.srcSet&&(o.srcset=s.srcSet)}}catch(c){xt(e,e.return,c)}}function Tg(e,n,s){try{var o=e.stateNode;zE(o,e.type,s,n),o[ue]=n}catch(c){xt(e,e.return,c)}}function Eg(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27||e.tag===4}function dh(e){t:for(;;){for(;e.sibling===null;){if(e.return===null||Eg(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==27&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue t;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function mh(e,n,s){var o=e.tag;if(o===5||o===6)e=e.stateNode,n?s.nodeType===8?s.parentNode.insertBefore(e,n):s.insertBefore(e,n):(s.nodeType===8?(n=s.parentNode,n.insertBefore(e,s)):(n=s,n.appendChild(e)),s=s._reactRootContainer,s!=null||n.onclick!==null||(n.onclick=Fu));else if(o!==4&&o!==27&&(e=e.child,e!==null))for(mh(e,n,s),e=e.sibling;e!==null;)mh(e,n,s),e=e.sibling}function Nu(e,n,s){var o=e.tag;if(o===5||o===6)e=e.stateNode,n?s.insertBefore(e,n):s.appendChild(e);else if(o!==4&&o!==27&&(e=e.child,e!==null))for(Nu(e,n,s),e=e.sibling;e!==null;)Nu(e,n,s),e=e.sibling}var Ni=!1,Xt=!1,ph=!1,bg=typeof WeakSet=="function"?WeakSet:Set,Te=null,Ag=!1;function pE(e,n){if(e=e.containerInfo,qh=Zu,e=Bm(e),yf(e)){if("selectionStart"in e)var s={start:e.selectionStart,end:e.selectionEnd};else t:{s=(s=e.ownerDocument)&&s.defaultView||window;var o=s.getSelection&&s.getSelection();if(o&&o.rangeCount!==0){s=o.anchorNode;var c=o.anchorOffset,h=o.focusNode;o=o.focusOffset;try{s.nodeType,h.nodeType}catch{s=null;break t}var _=0,T=-1,S=-1,M=0,H=0,G=e,x=null;e:for(;;){for(var B;G!==s||c!==0&&G.nodeType!==3||(T=_+c),G!==h||o!==0&&G.nodeType!==3||(S=_+o),G.nodeType===3&&(_+=G.nodeValue.length),(B=G.firstChild)!==null;)x=G,G=B;for(;;){if(G===e)break e;if(x===s&&++M===c&&(T=_),x===h&&++H===o&&(S=_),(B=G.nextSibling)!==null)break;G=x,x=G.parentNode}G=B}s=T===-1||S===-1?null:{start:T,end:S}}else s=null}s=s||{start:0,end:0}}else s=null;for(Fh={focusedElem:e,selectionRange:s},Zu=!1,Te=n;Te!==null;)if(n=Te,e=n.child,(n.subtreeFlags&1028)!==0&&e!==null)e.return=n,Te=e;else for(;Te!==null;){switch(n=Te,h=n.alternate,e=n.flags,n.tag){case 0:break;case 11:case 15:break;case 1:if((e&1024)!==0&&h!==null){e=void 0,s=n,c=h.memoizedProps,h=h.memoizedState,o=s.stateNode;try{var rt=ys(s.type,c,s.elementType===s.type);e=o.getSnapshotBeforeUpdate(rt,h),o.__reactInternalSnapshotBeforeUpdate=e}catch(ht){xt(s,s.return,ht)}}break;case 3:if((e&1024)!==0){if(e=n.stateNode.containerInfo,s=e.nodeType,s===9)Yh(e);else if(s===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":Yh(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((e&1024)!==0)throw Error(a(163))}if(e=n.sibling,e!==null){e.return=n.return,Te=e;break}Te=n.return}return rt=Ag,Ag=!1,rt}function Sg(e,n,s){var o=s.flags;switch(s.tag){case 0:case 11:case 15:Vi(e,s),o&4&&zo(5,s);break;case 1:if(Vi(e,s),o&4)if(e=s.stateNode,n===null)try{e.componentDidMount()}catch(T){xt(s,s.return,T)}else{var c=ys(s.type,n.memoizedProps);n=n.memoizedState;try{e.componentDidUpdate(c,n,e.__reactInternalSnapshotBeforeUpdate)}catch(T){xt(s,s.return,T)}}o&64&&yg(s),o&512&&Ts(s,s.return);break;case 3:if(Vi(e,s),o&64&&(o=s.updateQueue,o!==null)){if(e=null,s.child!==null)switch(s.child.tag){case 27:case 5:e=s.child.stateNode;break;case 1:e=s.child.stateNode}try{gg(o,e)}catch(T){xt(s,s.return,T)}}break;case 26:Vi(e,s),o&512&&Ts(s,s.return);break;case 27:case 5:Vi(e,s),n===null&&o&4&&vg(s),o&512&&Ts(s,s.return);break;case 12:Vi(e,s);break;case 13:Vi(e,s),o&4&&Ig(e,s);break;case 22:if(c=s.memoizedState!==null||Ni,!c){n=n!==null&&n.memoizedState!==null||Xt;var h=Ni,_=Xt;Ni=c,(Xt=n)&&!_?br(e,s,(s.subtreeFlags&8772)!==0):Vi(e,s),Ni=h,Xt=_}o&512&&(s.memoizedProps.mode==="manual"?Ts(s,s.return):an(s,s.return));break;default:Vi(e,s)}}function wg(e){var n=e.alternate;n!==null&&(e.alternate=null,wg(n)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(n=e.stateNode,n!==null&&$r(n)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var se=null,on=!1;function Mi(e,n,s){for(s=s.child;s!==null;)Rg(e,n,s),s=s.sibling}function Rg(e,n,s){if(Le&&typeof Le.onCommitFiberUnmount=="function")try{Le.onCommitFiberUnmount(Zi,s)}catch{}switch(s.tag){case 26:Xt||an(s,n),Mi(e,n,s),s.memoizedState?s.memoizedState.count--:s.stateNode&&(s=s.stateNode,s.parentNode.removeChild(s));break;case 27:Xt||an(s,n);var o=se,c=on;for(se=s.stateNode,Mi(e,n,s),s=s.stateNode,n=s.attributes;n.length;)s.removeAttributeNode(n[0]);$r(s),se=o,on=c;break;case 5:Xt||an(s,n);case 6:c=se;var h=on;if(se=null,Mi(e,n,s),se=c,on=h,se!==null)if(on)try{e=se,o=s.stateNode,e.nodeType===8?e.parentNode.removeChild(o):e.removeChild(o)}catch(_){xt(s,n,_)}else try{se.removeChild(s.stateNode)}catch(_){xt(s,n,_)}break;case 18:se!==null&&(on?(n=se,s=s.stateNode,n.nodeType===8?Qh(n.parentNode,s):n.nodeType===1&&Qh(n,s),il(n)):Qh(se,s.stateNode));break;case 4:o=se,c=on,se=s.stateNode.containerInfo,on=!0,Mi(e,n,s),se=o,on=c;break;case 0:case 11:case 14:case 15:Xt||Er(2,s,n),Xt||Er(4,s,n),Mi(e,n,s);break;case 1:Xt||(an(s,n),o=s.stateNode,typeof o.componentWillUnmount=="function"&&_g(s,n,o)),Mi(e,n,s);break;case 21:Mi(e,n,s);break;case 22:Xt||an(s,n),Xt=(o=Xt)||s.memoizedState!==null,Mi(e,n,s),Xt=o;break;default:Mi(e,n,s)}}function Ig(e,n){if(n.memoizedState===null&&(e=n.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{il(e)}catch(s){xt(n,n.return,s)}}function gE(e){switch(e.tag){case 13:case 19:var n=e.stateNode;return n===null&&(n=e.stateNode=new bg),n;case 22:return e=e.stateNode,n=e._retryCache,n===null&&(n=e._retryCache=new bg),n;default:throw Error(a(435,e.tag))}}function gh(e,n){var s=gE(e);n.forEach(function(o){var c=DE.bind(null,e,o);s.has(o)||(s.add(o),o.then(c,c))})}function Sn(e,n){var s=n.deletions;if(s!==null)for(var o=0;o<s.length;o++){var c=s[o],h=e,_=n,T=_;t:for(;T!==null;){switch(T.tag){case 27:case 5:se=T.stateNode,on=!1;break t;case 3:se=T.stateNode.containerInfo,on=!0;break t;case 4:se=T.stateNode.containerInfo,on=!0;break t}T=T.return}if(se===null)throw Error(a(160));Rg(h,_,c),se=null,on=!1,h=c.alternate,h!==null&&(h.return=null),c.return=null}if(n.subtreeFlags&13878)for(n=n.child;n!==null;)Cg(n,e),n=n.sibling}var Un=null;function Cg(e,n){var s=e.alternate,o=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:Sn(n,e),wn(e),o&4&&(Er(3,e,e.return),zo(3,e),Er(5,e,e.return));break;case 1:Sn(n,e),wn(e),o&512&&(Xt||s===null||an(s,s.return)),o&64&&Ni&&(e=e.updateQueue,e!==null&&(o=e.callbacks,o!==null&&(s=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=s===null?o:s.concat(o))));break;case 26:var c=Un;if(Sn(n,e),wn(e),o&512&&(Xt||s===null||an(s,s.return)),o&4){var h=s!==null?s.memoizedState:null;if(o=e.memoizedState,s===null)if(o===null)if(e.stateNode===null){t:{o=e.type,s=e.memoizedProps,c=c.ownerDocument||c;e:switch(o){case"title":h=c.getElementsByTagName("title")[0],(!h||h[rr]||h[ge]||h.namespaceURI==="http://www.w3.org/2000/svg"||h.hasAttribute("itemprop"))&&(h=c.createElement(o),c.head.insertBefore(h,c.querySelector("head > title"))),Ce(h,o,s),h[ge]=e,Gt(h),o=h;break t;case"link":var _=vy("link","href",c).get(o+(s.href||""));if(_){for(var T=0;T<_.length;T++)if(h=_[T],h.getAttribute("href")===(s.href==null?null:s.href)&&h.getAttribute("rel")===(s.rel==null?null:s.rel)&&h.getAttribute("title")===(s.title==null?null:s.title)&&h.getAttribute("crossorigin")===(s.crossOrigin==null?null:s.crossOrigin)){_.splice(T,1);break e}}h=c.createElement(o),Ce(h,o,s),c.head.appendChild(h);break;case"meta":if(_=vy("meta","content",c).get(o+(s.content||""))){for(T=0;T<_.length;T++)if(h=_[T],h.getAttribute("content")===(s.content==null?null:""+s.content)&&h.getAttribute("name")===(s.name==null?null:s.name)&&h.getAttribute("property")===(s.property==null?null:s.property)&&h.getAttribute("http-equiv")===(s.httpEquiv==null?null:s.httpEquiv)&&h.getAttribute("charset")===(s.charSet==null?null:s.charSet)){_.splice(T,1);break e}}h=c.createElement(o),Ce(h,o,s),c.head.appendChild(h);break;default:throw Error(a(468,o))}h[ge]=e,Gt(h),o=h}e.stateNode=o}else Ty(c,e.type,e.stateNode);else e.stateNode=_y(c,o,e.memoizedProps);else h!==o?(h===null?s.stateNode!==null&&(s=s.stateNode,s.parentNode.removeChild(s)):h.count--,o===null?Ty(c,e.type,e.stateNode):_y(c,o,e.memoizedProps)):o===null&&e.stateNode!==null&&Tg(e,e.memoizedProps,s.memoizedProps)}break;case 27:if(o&4&&e.alternate===null){c=e.stateNode,h=e.memoizedProps;try{for(var S=c.firstChild;S;){var M=S.nextSibling,H=S.nodeName;S[rr]||H==="HEAD"||H==="BODY"||H==="SCRIPT"||H==="STYLE"||H==="LINK"&&S.rel.toLowerCase()==="stylesheet"||c.removeChild(S),S=M}for(var G=e.type,x=c.attributes;x.length;)c.removeAttributeNode(x[0]);Ce(c,G,h),c[ge]=e,c[ue]=h}catch(rt){xt(e,e.return,rt)}}case 5:if(Sn(n,e),wn(e),o&512&&(Xt||s===null||an(s,s.return)),e.flags&32){c=e.stateNode;try{pn(c,"")}catch(rt){xt(e,e.return,rt)}}o&4&&e.stateNode!=null&&(c=e.memoizedProps,Tg(e,c,s!==null?s.memoizedProps:c)),o&1024&&(ph=!0);break;case 6:if(Sn(n,e),wn(e),o&4){if(e.stateNode===null)throw Error(a(162));o=e.memoizedProps,s=e.stateNode;try{s.nodeValue=o}catch(rt){xt(e,e.return,rt)}}break;case 3:if(Yu=null,c=Un,Un=Ku(n.containerInfo),Sn(n,e),Un=c,wn(e),o&4&&s!==null&&s.memoizedState.isDehydrated)try{il(n.containerInfo)}catch(rt){xt(e,e.return,rt)}ph&&(ph=!1,Dg(e));break;case 4:o=Un,Un=Ku(e.stateNode.containerInfo),Sn(n,e),wn(e),Un=o;break;case 12:Sn(n,e),wn(e);break;case 13:Sn(n,e),wn(e),e.child.flags&8192&&e.memoizedState!==null!=(s!==null&&s.memoizedState!==null)&&(wh=Xe()),o&4&&(o=e.updateQueue,o!==null&&(e.updateQueue=null,gh(e,o)));break;case 22:if(o&512&&(Xt||s===null||an(s,s.return)),S=e.memoizedState!==null,M=s!==null&&s.memoizedState!==null,H=Ni,G=Xt,Ni=H||S,Xt=G||M,Sn(n,e),Xt=G,Ni=H,wn(e),n=e.stateNode,n._current=e,n._visibility&=-3,n._visibility|=n._pendingVisibility&2,o&8192&&(n._visibility=S?n._visibility&-2:n._visibility|1,S&&(n=Ni||Xt,s===null||M||n||ba(e)),e.memoizedProps===null||e.memoizedProps.mode!=="manual"))t:for(s=null,n=e;;){if(n.tag===5||n.tag===26||n.tag===27){if(s===null){M=s=n;try{if(c=M.stateNode,S)h=c.style,typeof h.setProperty=="function"?h.setProperty("display","none","important"):h.display="none";else{_=M.stateNode,T=M.memoizedProps.style;var B=T!=null&&T.hasOwnProperty("display")?T.display:null;_.style.display=B==null||typeof B=="boolean"?"":(""+B).trim()}}catch(rt){xt(M,M.return,rt)}}}else if(n.tag===6){if(s===null){M=n;try{M.stateNode.nodeValue=S?"":M.memoizedProps}catch(rt){xt(M,M.return,rt)}}}else if((n.tag!==22&&n.tag!==23||n.memoizedState===null||n===e)&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break t;for(;n.sibling===null;){if(n.return===null||n.return===e)break t;s===n&&(s=null),n=n.return}s===n&&(s=null),n.sibling.return=n.return,n=n.sibling}o&4&&(o=e.updateQueue,o!==null&&(s=o.retryQueue,s!==null&&(o.retryQueue=null,gh(e,s))));break;case 19:Sn(n,e),wn(e),o&4&&(o=e.updateQueue,o!==null&&(e.updateQueue=null,gh(e,o)));break;case 21:break;default:Sn(n,e),wn(e)}}function wn(e){var n=e.flags;if(n&2){try{if(e.tag!==27){t:{for(var s=e.return;s!==null;){if(Eg(s)){var o=s;break t}s=s.return}throw Error(a(160))}switch(o.tag){case 27:var c=o.stateNode,h=dh(e);Nu(e,h,c);break;case 5:var _=o.stateNode;o.flags&32&&(pn(_,""),o.flags&=-33);var T=dh(e);Nu(e,T,_);break;case 3:case 4:var S=o.stateNode.containerInfo,M=dh(e);mh(e,M,S);break;default:throw Error(a(161))}}}catch(H){xt(e,e.return,H)}e.flags&=-3}n&4096&&(e.flags&=-4097)}function Dg(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var n=e;Dg(n),n.tag===5&&n.flags&1024&&n.stateNode.reset(),e=e.sibling}}function Vi(e,n){if(n.subtreeFlags&8772)for(n=n.child;n!==null;)Sg(e,n.alternate,n),n=n.sibling}function ba(e){for(e=e.child;e!==null;){var n=e;switch(n.tag){case 0:case 11:case 14:case 15:Er(4,n,n.return),ba(n);break;case 1:an(n,n.return);var s=n.stateNode;typeof s.componentWillUnmount=="function"&&_g(n,n.return,s),ba(n);break;case 26:case 27:case 5:an(n,n.return),ba(n);break;case 22:an(n,n.return),n.memoizedState===null&&ba(n);break;default:ba(n)}e=e.sibling}}function br(e,n,s){for(s=s&&(n.subtreeFlags&8772)!==0,n=n.child;n!==null;){var o=n.alternate,c=e,h=n,_=h.flags;switch(h.tag){case 0:case 11:case 15:br(c,h,s),zo(4,h);break;case 1:if(br(c,h,s),o=h,c=o.stateNode,typeof c.componentDidMount=="function")try{c.componentDidMount()}catch(M){xt(o,o.return,M)}if(o=h,c=o.updateQueue,c!==null){var T=o.stateNode;try{var S=c.shared.hiddenCallbacks;if(S!==null)for(c.shared.hiddenCallbacks=null,c=0;c<S.length;c++)pg(S[c],T)}catch(M){xt(o,o.return,M)}}s&&_&64&&yg(h),Ts(h,h.return);break;case 26:case 27:case 5:br(c,h,s),s&&o===null&&_&4&&vg(h),Ts(h,h.return);break;case 12:br(c,h,s);break;case 13:br(c,h,s),s&&_&4&&Ig(c,h);break;case 22:h.memoizedState===null&&br(c,h,s),Ts(h,h.return);break;default:br(c,h,s)}n=n.sibling}}function yh(e,n){var s=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(s=e.memoizedState.cachePool.pool),e=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(e=n.memoizedState.cachePool.pool),e!==s&&(e!=null&&e.refCount++,s!=null&&Do(s))}function _h(e,n){e=null,n.alternate!==null&&(e=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==e&&(n.refCount++,e!=null&&Do(e))}function Ar(e,n,s,o){if(n.subtreeFlags&10256)for(n=n.child;n!==null;)Og(e,n,s,o),n=n.sibling}function Og(e,n,s,o){var c=n.flags;switch(n.tag){case 0:case 11:case 15:Ar(e,n,s,o),c&2048&&zo(9,n);break;case 3:Ar(e,n,s,o),c&2048&&(e=null,n.alternate!==null&&(e=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==e&&(n.refCount++,e!=null&&Do(e)));break;case 12:if(c&2048){Ar(e,n,s,o),e=n.stateNode;try{var h=n.memoizedProps,_=h.id,T=h.onPostCommit;typeof T=="function"&&T(_,n.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(S){xt(n,n.return,S)}}else Ar(e,n,s,o);break;case 23:break;case 22:h=n.stateNode,n.memoizedState!==null?h._visibility&4?Ar(e,n,s,o):Bo(e,n):h._visibility&4?Ar(e,n,s,o):(h._visibility|=4,Aa(e,n,s,o,(n.subtreeFlags&10256)!==0)),c&2048&&yh(n.alternate,n);break;case 24:Ar(e,n,s,o),c&2048&&_h(n.alternate,n);break;default:Ar(e,n,s,o)}}function Aa(e,n,s,o,c){for(c=c&&(n.subtreeFlags&10256)!==0,n=n.child;n!==null;){var h=e,_=n,T=s,S=o,M=_.flags;switch(_.tag){case 0:case 11:case 15:Aa(h,_,T,S,c),zo(8,_);break;case 23:break;case 22:var H=_.stateNode;_.memoizedState!==null?H._visibility&4?Aa(h,_,T,S,c):Bo(h,_):(H._visibility|=4,Aa(h,_,T,S,c)),c&&M&2048&&yh(_.alternate,_);break;case 24:Aa(h,_,T,S,c),c&&M&2048&&_h(_.alternate,_);break;default:Aa(h,_,T,S,c)}n=n.sibling}}function Bo(e,n){if(n.subtreeFlags&10256)for(n=n.child;n!==null;){var s=e,o=n,c=o.flags;switch(o.tag){case 22:Bo(s,o),c&2048&&yh(o.alternate,o);break;case 24:Bo(s,o),c&2048&&_h(o.alternate,o);break;default:Bo(s,o)}n=n.sibling}}var Ho=8192;function Sa(e){if(e.subtreeFlags&Ho)for(e=e.child;e!==null;)Ng(e),e=e.sibling}function Ng(e){switch(e.tag){case 26:Sa(e),e.flags&Ho&&e.memoizedState!==null&&rb(Un,e.memoizedState,e.memoizedProps);break;case 5:Sa(e);break;case 3:case 4:var n=Un;Un=Ku(e.stateNode.containerInfo),Sa(e),Un=n;break;case 22:e.memoizedState===null&&(n=e.alternate,n!==null&&n.memoizedState!==null?(n=Ho,Ho=16777216,Sa(e),Ho=n):Sa(e));break;default:Sa(e)}}function Mg(e){var n=e.alternate;if(n!==null&&(e=n.child,e!==null)){n.child=null;do n=e.sibling,e.sibling=null,e=n;while(e!==null)}}function jo(e){var n=e.deletions;if((e.flags&16)!==0){if(n!==null)for(var s=0;s<n.length;s++){var o=n[s];Te=o,kg(o,e)}Mg(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)Vg(e),e=e.sibling}function Vg(e){switch(e.tag){case 0:case 11:case 15:jo(e),e.flags&2048&&Er(9,e,e.return);break;case 3:jo(e);break;case 12:jo(e);break;case 22:var n=e.stateNode;e.memoizedState!==null&&n._visibility&4&&(e.return===null||e.return.tag!==13)?(n._visibility&=-5,Mu(e)):jo(e);break;default:jo(e)}}function Mu(e){var n=e.deletions;if((e.flags&16)!==0){if(n!==null)for(var s=0;s<n.length;s++){var o=n[s];Te=o,kg(o,e)}Mg(e)}for(e=e.child;e!==null;){switch(n=e,n.tag){case 0:case 11:case 15:Er(8,n,n.return),Mu(n);break;case 22:s=n.stateNode,s._visibility&4&&(s._visibility&=-5,Mu(n));break;default:Mu(n)}e=e.sibling}}function kg(e,n){for(;Te!==null;){var s=Te;switch(s.tag){case 0:case 11:case 15:Er(8,s,n);break;case 23:case 22:if(s.memoizedState!==null&&s.memoizedState.cachePool!==null){var o=s.memoizedState.cachePool.pool;o!=null&&o.refCount++}break;case 24:Do(s.memoizedState.cache)}if(o=s.child,o!==null)o.return=s,Te=o;else t:for(s=e;Te!==null;){o=Te;var c=o.sibling,h=o.return;if(wg(o),o===s){Te=null;break t}if(c!==null){c.return=h,Te=c;break t}Te=h}}}function yE(e,n,s,o){this.tag=e,this.key=s,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=o,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Rn(e,n,s,o){return new yE(e,n,s,o)}function vh(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Sr(e,n){var s=e.alternate;return s===null?(s=Rn(e.tag,n,e.key,e.mode),s.elementType=e.elementType,s.type=e.type,s.stateNode=e.stateNode,s.alternate=e,e.alternate=s):(s.pendingProps=n,s.type=e.type,s.flags=0,s.subtreeFlags=0,s.deletions=null),s.flags=e.flags&31457280,s.childLanes=e.childLanes,s.lanes=e.lanes,s.child=e.child,s.memoizedProps=e.memoizedProps,s.memoizedState=e.memoizedState,s.updateQueue=e.updateQueue,n=e.dependencies,s.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},s.sibling=e.sibling,s.index=e.index,s.ref=e.ref,s.refCleanup=e.refCleanup,s}function Lg(e,n){e.flags&=31457282;var s=e.alternate;return s===null?(e.childLanes=0,e.lanes=n,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=s.childLanes,e.lanes=s.lanes,e.child=s.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=s.memoizedProps,e.memoizedState=s.memoizedState,e.updateQueue=s.updateQueue,e.type=s.type,n=s.dependencies,e.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),e}function Vu(e,n,s,o,c,h){var _=0;if(o=e,typeof e=="function")vh(e)&&(_=1);else if(typeof e=="string")_=nb(e,s,je.current)?26:e==="html"||e==="head"||e==="body"?27:5;else t:switch(e){case y:return Es(s.children,c,h,n);case v:_=8,c|=24;break;case I:return e=Rn(12,s,n,c|2),e.elementType=I,e.lanes=h,e;case W:return e=Rn(13,s,n,c),e.elementType=W,e.lanes=h,e;case Y:return e=Rn(19,s,n,c),e.elementType=Y,e.lanes=h,e;case Z:return Ug(s,c,h,n);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case D:case q:_=10;break t;case z:_=9;break t;case Q:_=11;break t;case et:_=14;break t;case X:_=16,o=null;break t}_=29,s=Error(a(130,e===null?"null":typeof e,"")),o=null}return n=Rn(_,s,n,c),n.elementType=e,n.type=o,n.lanes=h,n}function Es(e,n,s,o){return e=Rn(7,e,o,n),e.lanes=s,e}function Ug(e,n,s,o){e=Rn(22,e,o,n),e.elementType=Z,e.lanes=s;var c={_visibility:1,_pendingVisibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null,_current:null,detach:function(){var h=c._current;if(h===null)throw Error(a(456));if((c._pendingVisibility&2)===0){var _=hr(h,2);_!==null&&(c._pendingVisibility|=2,Qe(_,h,2))}},attach:function(){var h=c._current;if(h===null)throw Error(a(456));if((c._pendingVisibility&2)!==0){var _=hr(h,2);_!==null&&(c._pendingVisibility&=-3,Qe(_,h,2))}}};return e.stateNode=c,e}function Th(e,n,s){return e=Rn(6,e,null,n),e.lanes=s,e}function Eh(e,n,s){return n=Rn(4,e.children!==null?e.children:[],e.key,n),n.lanes=s,n.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},n}function ki(e){e.flags|=4}function xg(e,n){if(n.type!=="stylesheet"||(n.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!Ey(n)){if(n=An.current,n!==null&&((St&4194176)===St?ni!==null:(St&62914560)!==St&&(St&536870912)===0||n!==ni))throw Ro=Rf,tp;e.flags|=8192}}function ku(e,n){n!==null&&(e.flags|=4),e.flags&16384&&(n=e.tag!==22?tr():536870912,e.lanes|=n,Ra|=n)}function qo(e,n){if(!It)switch(e.tailMode){case"hidden":n=e.tail;for(var s=null;n!==null;)n.alternate!==null&&(s=n),n=n.sibling;s===null?e.tail=null:s.sibling=null;break;case"collapsed":s=e.tail;for(var o=null;s!==null;)s.alternate!==null&&(o=s),s=s.sibling;o===null?n||e.tail===null?e.tail=null:e.tail.sibling=null:o.sibling=null}}function Kt(e){var n=e.alternate!==null&&e.alternate.child===e.child,s=0,o=0;if(n)for(var c=e.child;c!==null;)s|=c.lanes|c.childLanes,o|=c.subtreeFlags&31457280,o|=c.flags&31457280,c.return=e,c=c.sibling;else for(c=e.child;c!==null;)s|=c.lanes|c.childLanes,o|=c.subtreeFlags,o|=c.flags,c.return=e,c=c.sibling;return e.subtreeFlags|=o,e.childLanes=s,n}function _E(e,n,s){var o=n.pendingProps;switch(Sf(n),n.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Kt(n),null;case 1:return Kt(n),null;case 3:return s=n.stateNode,o=null,e!==null&&(o=e.memoizedState.cache),n.memoizedState.cache!==o&&(n.flags|=2048),Oi(de),di(),s.pendingContext&&(s.context=s.pendingContext,s.pendingContext=null),(e===null||e.child===null)&&(bo(n)?ki(n):e===null||e.memoizedState.isDehydrated&&(n.flags&256)===0||(n.flags|=1024,Ln!==null&&(Dh(Ln),Ln=null))),Kt(n),null;case 26:return s=n.memoizedState,e===null?(ki(n),s!==null?(Kt(n),xg(n,s)):(Kt(n),n.flags&=-16777217)):s?s!==e.memoizedState?(ki(n),Kt(n),xg(n,s)):(Kt(n),n.flags&=-16777217):(e.memoizedProps!==o&&ki(n),Kt(n),n.flags&=-16777217),null;case 27:Gs(n),s=hn.current;var c=n.type;if(e!==null&&n.stateNode!=null)e.memoizedProps!==o&&ki(n);else{if(!o){if(n.stateNode===null)throw Error(a(166));return Kt(n),null}e=je.current,bo(n)?Wm(n):(e=dy(c,o,s),n.stateNode=e,ki(n))}return Kt(n),null;case 5:if(Gs(n),s=n.type,e!==null&&n.stateNode!=null)e.memoizedProps!==o&&ki(n);else{if(!o){if(n.stateNode===null)throw Error(a(166));return Kt(n),null}if(e=je.current,bo(n))Wm(n);else{switch(c=Gu(hn.current),e){case 1:e=c.createElementNS("http://www.w3.org/2000/svg",s);break;case 2:e=c.createElementNS("http://www.w3.org/1998/Math/MathML",s);break;default:switch(s){case"svg":e=c.createElementNS("http://www.w3.org/2000/svg",s);break;case"math":e=c.createElementNS("http://www.w3.org/1998/Math/MathML",s);break;case"script":e=c.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild);break;case"select":e=typeof o.is=="string"?c.createElement("select",{is:o.is}):c.createElement("select"),o.multiple?e.multiple=!0:o.size&&(e.size=o.size);break;default:e=typeof o.is=="string"?c.createElement(s,{is:o.is}):c.createElement(s)}}e[ge]=n,e[ue]=o;t:for(c=n.child;c!==null;){if(c.tag===5||c.tag===6)e.appendChild(c.stateNode);else if(c.tag!==4&&c.tag!==27&&c.child!==null){c.child.return=c,c=c.child;continue}if(c===n)break t;for(;c.sibling===null;){if(c.return===null||c.return===n)break t;c=c.return}c.sibling.return=c.return,c=c.sibling}n.stateNode=e;t:switch(Ce(e,s,o),s){case"button":case"input":case"select":case"textarea":e=!!o.autoFocus;break t;case"img":e=!0;break t;default:e=!1}e&&ki(n)}}return Kt(n),n.flags&=-16777217,null;case 6:if(e&&n.stateNode!=null)e.memoizedProps!==o&&ki(n);else{if(typeof o!="string"&&n.stateNode===null)throw Error(a(166));if(e=hn.current,bo(n)){if(e=n.stateNode,s=n.memoizedProps,o=null,c=Ke,c!==null)switch(c.tag){case 27:case 5:o=c.memoizedProps}e[ge]=n,e=!!(e.nodeValue===s||o!==null&&o.suppressHydrationWarning===!0||oy(e.nodeValue,s)),e||fs(n)}else e=Gu(e).createTextNode(o),e[ge]=n,n.stateNode=e}return Kt(n),null;case 13:if(o=n.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(c=bo(n),o!==null&&o.dehydrated!==null){if(e===null){if(!c)throw Error(a(318));if(c=n.memoizedState,c=c!==null?c.dehydrated:null,!c)throw Error(a(317));c[ge]=n}else Ao(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;Kt(n),c=!1}else Ln!==null&&(Dh(Ln),Ln=null),c=!0;if(!c)return n.flags&256?(Ri(n),n):(Ri(n),null)}if(Ri(n),(n.flags&128)!==0)return n.lanes=s,n;if(s=o!==null,e=e!==null&&e.memoizedState!==null,s){o=n.child,c=null,o.alternate!==null&&o.alternate.memoizedState!==null&&o.alternate.memoizedState.cachePool!==null&&(c=o.alternate.memoizedState.cachePool.pool);var h=null;o.memoizedState!==null&&o.memoizedState.cachePool!==null&&(h=o.memoizedState.cachePool.pool),h!==c&&(o.flags|=2048)}return s!==e&&s&&(n.child.flags|=8192),ku(n,n.updateQueue),Kt(n),null;case 4:return di(),e===null&&Bh(n.stateNode.containerInfo),Kt(n),null;case 10:return Oi(n.type),Kt(n),null;case 19:if(ne(he),c=n.memoizedState,c===null)return Kt(n),null;if(o=(n.flags&128)!==0,h=c.rendering,h===null)if(o)qo(c,!1);else{if($t!==0||e!==null&&(e.flags&128)!==0)for(e=n.child;e!==null;){if(h=yu(e),h!==null){for(n.flags|=128,qo(c,!1),e=h.updateQueue,n.updateQueue=e,ku(n,e),n.subtreeFlags=0,e=s,s=n.child;s!==null;)Lg(s,e),s=s.sibling;return Ot(he,he.current&1|2),n.child}e=e.sibling}c.tail!==null&&Xe()>Lu&&(n.flags|=128,o=!0,qo(c,!1),n.lanes=4194304)}else{if(!o)if(e=yu(h),e!==null){if(n.flags|=128,o=!0,e=e.updateQueue,n.updateQueue=e,ku(n,e),qo(c,!0),c.tail===null&&c.tailMode==="hidden"&&!h.alternate&&!It)return Kt(n),null}else 2*Xe()-c.renderingStartTime>Lu&&s!==536870912&&(n.flags|=128,o=!0,qo(c,!1),n.lanes=4194304);c.isBackwards?(h.sibling=n.child,n.child=h):(e=c.last,e!==null?e.sibling=h:n.child=h,c.last=h)}return c.tail!==null?(n=c.tail,c.rendering=n,c.tail=n.sibling,c.renderingStartTime=Xe(),n.sibling=null,e=he.current,Ot(he,o?e&1|2:e&1),n):(Kt(n),null);case 22:case 23:return Ri(n),Cf(),o=n.memoizedState!==null,e!==null?e.memoizedState!==null!==o&&(n.flags|=8192):o&&(n.flags|=8192),o?(s&536870912)!==0&&(n.flags&128)===0&&(Kt(n),n.subtreeFlags&6&&(n.flags|=8192)):Kt(n),s=n.updateQueue,s!==null&&ku(n,s.retryQueue),s=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(s=e.memoizedState.cachePool.pool),o=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(o=n.memoizedState.cachePool.pool),o!==s&&(n.flags|=2048),e!==null&&ne(ds),null;case 24:return s=null,e!==null&&(s=e.memoizedState.cache),n.memoizedState.cache!==s&&(n.flags|=2048),Oi(de),Kt(n),null;case 25:return null}throw Error(a(156,n.tag))}function vE(e,n){switch(Sf(n),n.tag){case 1:return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 3:return Oi(de),di(),e=n.flags,(e&65536)!==0&&(e&128)===0?(n.flags=e&-65537|128,n):null;case 26:case 27:case 5:return Gs(n),null;case 13:if(Ri(n),e=n.memoizedState,e!==null&&e.dehydrated!==null){if(n.alternate===null)throw Error(a(340));Ao()}return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 19:return ne(he),null;case 4:return di(),null;case 10:return Oi(n.type),null;case 22:case 23:return Ri(n),Cf(),e!==null&&ne(ds),e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 24:return Oi(de),null;case 25:return null;default:return null}}function Pg(e,n){switch(Sf(n),n.tag){case 3:Oi(de),di();break;case 26:case 27:case 5:Gs(n);break;case 4:di();break;case 13:Ri(n);break;case 19:ne(he);break;case 10:Oi(n.type);break;case 22:case 23:Ri(n),Cf(),e!==null&&ne(ds);break;case 24:Oi(de)}}var TE={getCacheForType:function(e){var n=Ue(de),s=n.data.get(e);return s===void 0&&(s=e(),n.data.set(e,s)),s}},EE=typeof WeakMap=="function"?WeakMap:Map,Qt=0,zt=null,yt=null,St=0,Bt=0,ln=null,Li=!1,wa=!1,bh=!1,Ui=0,$t=0,wr=0,bs=0,Ah=0,In=0,Ra=0,Fo=null,ri=null,Sh=!1,wh=0,Lu=1/0,Uu=null,Rr=null,xu=!1,As=null,Go=0,Rh=0,Ih=null,Ko=0,Ch=null;function un(){if((Qt&2)!==0&&St!==0)return St&-St;if(b.T!==null){var e=ya;return e!==0?e:Uh()}return ql()}function zg(){In===0&&(In=(St&536870912)===0||It?io():536870912);var e=An.current;return e!==null&&(e.flags|=32),In}function Qe(e,n,s){(e===zt&&Bt===2||e.cancelPendingCommit!==null)&&(Ia(e,0),xi(e,St,In,!1)),te(e,s),((Qt&2)===0||e!==zt)&&(e===zt&&((Qt&2)===0&&(bs|=s),$t===4&&xi(e,St,In,!1)),si(e))}function Bg(e,n,s){if((Qt&6)!==0)throw Error(a(327));var o=!s&&(n&60)===0&&(n&e.expiredLanes)===0||Ji(e,n),c=o?SE(e,n):Mh(e,n,!0),h=o;do{if(c===0){wa&&!o&&xi(e,n,0,!1);break}else if(c===6)xi(e,n,0,!Li);else{if(s=e.current.alternate,h&&!bE(s)){c=Mh(e,n,!1),h=!1;continue}if(c===2){if(h=n,e.errorRecoveryDisabledLanes&h)var _=0;else _=e.pendingLanes&-536870913,_=_!==0?_:_&536870912?536870912:0;if(_!==0){n=_;t:{var T=e;c=Fo;var S=T.current.memoizedState.isDehydrated;if(S&&(Ia(T,_).flags|=256),_=Mh(T,_,!1),_!==2){if(bh&&!S){T.errorRecoveryDisabledLanes|=h,bs|=h,c=4;break t}h=ri,ri=c,h!==null&&Dh(h)}c=_}if(h=!1,c!==2)continue}}if(c===1){Ia(e,0),xi(e,n,0,!0);break}t:{switch(o=e,c){case 0:case 1:throw Error(a(345));case 4:if((n&4194176)===n){xi(o,n,In,!Li);break t}break;case 2:ri=null;break;case 3:case 5:break;default:throw Error(a(329))}if(o.finishedWork=s,o.finishedLanes=n,(n&62914560)===n&&(h=wh+300-Xe(),10<h)){if(xi(o,n,In,!Li),dn(o,0)!==0)break t;o.timeoutHandle=cy(Hg.bind(null,o,s,ri,Uu,Sh,n,In,bs,Ra,Li,2,-0,0),h);break t}Hg(o,s,ri,Uu,Sh,n,In,bs,Ra,Li,0,-0,0)}}break}while(!0);si(e)}function Dh(e){ri===null?ri=e:ri.push.apply(ri,e)}function Hg(e,n,s,o,c,h,_,T,S,M,H,G,x){var B=n.subtreeFlags;if((B&8192||(B&16785408)===16785408)&&(Wo={stylesheets:null,count:0,unsuspend:ib},Ng(n),n=sb(),n!==null)){e.cancelPendingCommit=n(Yg.bind(null,e,s,o,c,_,T,S,1,G,x)),xi(e,h,_,!M);return}Yg(e,s,o,c,_,T,S,H,G,x)}function bE(e){for(var n=e;;){var s=n.tag;if((s===0||s===11||s===15)&&n.flags&16384&&(s=n.updateQueue,s!==null&&(s=s.stores,s!==null)))for(var o=0;o<s.length;o++){var c=s[o],h=c.getSnapshot;c=c.value;try{if(!sn(h(),c))return!1}catch{return!1}}if(s=n.child,n.subtreeFlags&16384&&s!==null)s.return=n,n=s;else{if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function xi(e,n,s,o){n&=~Ah,n&=~bs,e.suspendedLanes|=n,e.pingedLanes&=~n,o&&(e.warmLanes|=n),o=e.expirationTimes;for(var c=n;0<c;){var h=31-qe(c),_=1<<h;o[h]=-1,c&=~_}s!==0&&er(e,s,n)}function Pu(){return(Qt&6)===0?(Qo(0),!1):!0}function Oh(){if(yt!==null){if(Bt===0)var e=yt.return;else e=yt,Di=_s=null,Uf(e),pa=null,Io=0,e=yt;for(;e!==null;)Pg(e.alternate,e),e=e.return;yt=null}}function Ia(e,n){e.finishedWork=null,e.finishedLanes=0;var s=e.timeoutHandle;s!==-1&&(e.timeoutHandle=-1,HE(s)),s=e.cancelPendingCommit,s!==null&&(e.cancelPendingCommit=null,s()),Oh(),zt=e,yt=s=Sr(e.current,null),St=n,Bt=0,ln=null,Li=!1,wa=Ji(e,n),bh=!1,Ra=In=Ah=bs=wr=$t=0,ri=Fo=null,Sh=!1,(n&8)!==0&&(n|=n&32);var o=e.entangledLanes;if(o!==0)for(e=e.entanglements,o&=n;0<o;){var c=31-qe(o),h=1<<c;n|=e[c],o&=~h}return Ui=n,lu(),s}function jg(e,n){mt=null,b.H=ii,n===wo?(n=ip(),Bt=3):n===tp?(n=ip(),Bt=4):Bt=n===eg?8:n!==null&&typeof n=="object"&&typeof n.then=="function"?6:1,ln=n,yt===null&&($t=1,Cu(e,Tn(n,e.current)))}function qg(){var e=b.H;return b.H=ii,e===null?ii:e}function Fg(){var e=b.A;return b.A=TE,e}function Nh(){$t=4,Li||(St&4194176)!==St&&An.current!==null||(wa=!0),(wr&134217727)===0&&(bs&134217727)===0||zt===null||xi(zt,St,In,!1)}function Mh(e,n,s){var o=Qt;Qt|=2;var c=qg(),h=Fg();(zt!==e||St!==n)&&(Uu=null,Ia(e,n)),n=!1;var _=$t;t:do try{if(Bt!==0&&yt!==null){var T=yt,S=ln;switch(Bt){case 8:Oh(),_=6;break t;case 3:case 2:case 6:An.current===null&&(n=!0);var M=Bt;if(Bt=0,ln=null,Ca(e,T,S,M),s&&wa){_=0;break t}break;default:M=Bt,Bt=0,ln=null,Ca(e,T,S,M)}}AE(),_=$t;break}catch(H){jg(e,H)}while(!0);return n&&e.shellSuspendCounter++,Di=_s=null,Qt=o,b.H=c,b.A=h,yt===null&&(zt=null,St=0,lu()),_}function AE(){for(;yt!==null;)Gg(yt)}function SE(e,n){var s=Qt;Qt|=2;var o=qg(),c=Fg();zt!==e||St!==n?(Uu=null,Lu=Xe()+500,Ia(e,n)):wa=Ji(e,n);t:do try{if(Bt!==0&&yt!==null){n=yt;var h=ln;e:switch(Bt){case 1:Bt=0,ln=null,Ca(e,n,h,1);break;case 2:if(ep(h)){Bt=0,ln=null,Kg(n);break}n=function(){Bt===2&&zt===e&&(Bt=7),si(e)},h.then(n,n);break t;case 3:Bt=7;break t;case 4:Bt=5;break t;case 7:ep(h)?(Bt=0,ln=null,Kg(n)):(Bt=0,ln=null,Ca(e,n,h,7));break;case 5:var _=null;switch(yt.tag){case 26:_=yt.memoizedState;case 5:case 27:var T=yt;if(!_||Ey(_)){Bt=0,ln=null;var S=T.sibling;if(S!==null)yt=S;else{var M=T.return;M!==null?(yt=M,zu(M)):yt=null}break e}}Bt=0,ln=null,Ca(e,n,h,5);break;case 6:Bt=0,ln=null,Ca(e,n,h,6);break;case 8:Oh(),$t=6;break t;default:throw Error(a(462))}}wE();break}catch(H){jg(e,H)}while(!0);return Di=_s=null,b.H=o,b.A=c,Qt=s,yt!==null?0:(zt=null,St=0,lu(),$t)}function wE(){for(;yt!==null&&!af();)Gg(yt)}function Gg(e){var n=dg(e.alternate,e,Ui);e.memoizedProps=e.pendingProps,n===null?zu(e):yt=n}function Kg(e){var n=e,s=n.alternate;switch(n.tag){case 15:case 0:n=og(s,n,n.pendingProps,n.type,void 0,St);break;case 11:n=og(s,n,n.pendingProps,n.type.render,n.ref,St);break;case 5:Uf(n);default:Pg(s,n),n=yt=Lg(n,Ui),n=dg(s,n,Ui)}e.memoizedProps=e.pendingProps,n===null?zu(e):yt=n}function Ca(e,n,s,o){Di=_s=null,Uf(n),pa=null,Io=0;var c=n.return;try{if(dE(e,c,n,s,St)){$t=1,Cu(e,Tn(s,e.current)),yt=null;return}}catch(h){if(c!==null)throw yt=c,h;$t=1,Cu(e,Tn(s,e.current)),yt=null;return}n.flags&32768?(It||o===1?e=!0:wa||(St&536870912)!==0?e=!1:(Li=e=!0,(o===2||o===3||o===6)&&(o=An.current,o!==null&&o.tag===13&&(o.flags|=16384))),Qg(n,e)):zu(n)}function zu(e){var n=e;do{if((n.flags&32768)!==0){Qg(n,Li);return}e=n.return;var s=_E(n.alternate,n,Ui);if(s!==null){yt=s;return}if(n=n.sibling,n!==null){yt=n;return}yt=n=e}while(n!==null);$t===0&&($t=5)}function Qg(e,n){do{var s=vE(e.alternate,e);if(s!==null){s.flags&=32767,yt=s;return}if(s=e.return,s!==null&&(s.flags|=32768,s.subtreeFlags=0,s.deletions=null),!n&&(e=e.sibling,e!==null)){yt=e;return}yt=e=s}while(e!==null);$t=6,yt=null}function Yg(e,n,s,o,c,h,_,T,S,M){var H=b.T,G=Tt.p;try{Tt.p=2,b.T=null,RE(e,n,s,o,G,c,h,_,T,S,M)}finally{b.T=H,Tt.p=G}}function RE(e,n,s,o,c,h,_,T){do Da();while(As!==null);if((Qt&6)!==0)throw Error(a(327));var S=e.finishedWork;if(o=e.finishedLanes,S===null)return null;if(e.finishedWork=null,e.finishedLanes=0,S===e.current)throw Error(a(177));e.callbackNode=null,e.callbackPriority=0,e.cancelPendingCommit=null;var M=S.lanes|S.childLanes;if(M|=Ef,Hl(e,o,M,h,_,T),e===zt&&(yt=zt=null,St=0),(S.subtreeFlags&10256)===0&&(S.flags&10256)===0||xu||(xu=!0,Rh=M,Ih=s,OE(mi,function(){return Da(),null})),s=(S.flags&15990)!==0,(S.subtreeFlags&15990)!==0||s?(s=b.T,b.T=null,h=Tt.p,Tt.p=2,_=Qt,Qt|=4,pE(e,S),Cg(S,e),$T(Fh,e.containerInfo),Zu=!!qh,Fh=qh=null,e.current=S,Sg(e,S.alternate,S),Ja(),Qt=_,Tt.p=h,b.T=s):e.current=S,xu?(xu=!1,As=e,Go=o):Xg(e,M),M=e.pendingLanes,M===0&&(Rr=null),eo(S.stateNode),si(e),n!==null)for(c=e.onRecoverableError,S=0;S<n.length;S++)M=n[S],c(M.value,{componentStack:M.stack});return(Go&3)!==0&&Da(),M=e.pendingLanes,(o&4194218)!==0&&(M&42)!==0?e===Ch?Ko++:(Ko=0,Ch=e):Ko=0,Qo(0),null}function Xg(e,n){(e.pooledCacheLanes&=n)===0&&(n=e.pooledCache,n!=null&&(e.pooledCache=null,Do(n)))}function Da(){if(As!==null){var e=As,n=Rh;Rh=0;var s=jl(Go),o=b.T,c=Tt.p;try{if(Tt.p=32>s?32:s,b.T=null,As===null)var h=!1;else{s=Ih,Ih=null;var _=As,T=Go;if(As=null,Go=0,(Qt&6)!==0)throw Error(a(331));var S=Qt;if(Qt|=4,Vg(_.current),Og(_,_.current,T,s),Qt=S,Qo(0,!1),Le&&typeof Le.onPostCommitFiberRoot=="function")try{Le.onPostCommitFiberRoot(Zi,_)}catch{}h=!0}return h}finally{Tt.p=c,b.T=o,Xg(e,n)}}return!1}function $g(e,n,s){n=Tn(s,n),n=$f(e.stateNode,n,2),e=Tr(e,n,2),e!==null&&(te(e,2),si(e))}function xt(e,n,s){if(e.tag===3)$g(e,e,s);else for(;n!==null;){if(n.tag===3){$g(n,e,s);break}else if(n.tag===1){var o=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof o.componentDidCatch=="function"&&(Rr===null||!Rr.has(o))){e=Tn(s,e),s=Jp(2),o=Tr(n,s,2),o!==null&&(tg(s,o,n,e),te(o,2),si(o));break}}n=n.return}}function Vh(e,n,s){var o=e.pingCache;if(o===null){o=e.pingCache=new EE;var c=new Set;o.set(n,c)}else c=o.get(n),c===void 0&&(c=new Set,o.set(n,c));c.has(s)||(bh=!0,c.add(s),e=IE.bind(null,e,n,s),n.then(e,e))}function IE(e,n,s){var o=e.pingCache;o!==null&&o.delete(n),e.pingedLanes|=e.suspendedLanes&s,e.warmLanes&=~s,zt===e&&(St&s)===s&&($t===4||$t===3&&(St&62914560)===St&&300>Xe()-wh?(Qt&2)===0&&Ia(e,0):Ah|=s,Ra===St&&(Ra=0)),si(e)}function Zg(e,n){n===0&&(n=tr()),e=hr(e,n),e!==null&&(te(e,n),si(e))}function CE(e){var n=e.memoizedState,s=0;n!==null&&(s=n.retryLane),Zg(e,s)}function DE(e,n){var s=0;switch(e.tag){case 13:var o=e.stateNode,c=e.memoizedState;c!==null&&(s=c.retryLane);break;case 19:o=e.stateNode;break;case 22:o=e.stateNode._retryCache;break;default:throw Error(a(314))}o!==null&&o.delete(n),Zg(e,s)}function OE(e,n){return Qr(e,n)}var Bu=null,Oa=null,kh=!1,Hu=!1,Lh=!1,Ss=0;function si(e){e!==Oa&&e.next===null&&(Oa===null?Bu=Oa=e:Oa=Oa.next=e),Hu=!0,kh||(kh=!0,ME(NE))}function Qo(e,n){if(!Lh&&Hu){Lh=!0;do for(var s=!1,o=Bu;o!==null;){if(e!==0){var c=o.pendingLanes;if(c===0)var h=0;else{var _=o.suspendedLanes,T=o.pingedLanes;h=(1<<31-qe(42|e)+1)-1,h&=c&~(_&~T),h=h&201326677?h&201326677|1:h?h|2:0}h!==0&&(s=!0,ty(o,h))}else h=St,h=dn(o,o===zt?h:0),(h&3)===0||Ji(o,h)||(s=!0,ty(o,h));o=o.next}while(s);Lh=!1}}function NE(){Hu=kh=!1;var e=0;Ss!==0&&(BE()&&(e=Ss),Ss=0);for(var n=Xe(),s=null,o=Bu;o!==null;){var c=o.next,h=Wg(o,n);h===0?(o.next=null,s===null?Bu=c:s.next=c,c===null&&(Oa=s)):(s=o,(e!==0||(h&3)!==0)&&(Hu=!0)),o=c}Qo(e)}function Wg(e,n){for(var s=e.suspendedLanes,o=e.pingedLanes,c=e.expirationTimes,h=e.pendingLanes&-62914561;0<h;){var _=31-qe(h),T=1<<_,S=c[_];S===-1?((T&s)===0||(T&o)!==0)&&(c[_]=Ys(T,n)):S<=n&&(e.expiredLanes|=T),h&=~T}if(n=zt,s=St,s=dn(e,e===n?s:0),o=e.callbackNode,s===0||e===n&&Bt===2||e.cancelPendingCommit!==null)return o!==null&&o!==null&&Qs(o),e.callbackNode=null,e.callbackPriority=0;if((s&3)===0||Ji(e,s)){if(n=s&-s,n===e.callbackPriority)return n;switch(o!==null&&Qs(o),jl(s)){case 2:case 8:s=pe;break;case 32:s=mi;break;case 268435456:s=to;break;default:s=mi}return o=Jg.bind(null,e),s=Qr(s,o),e.callbackPriority=n,e.callbackNode=s,n}return o!==null&&o!==null&&Qs(o),e.callbackPriority=2,e.callbackNode=null,2}function Jg(e,n){var s=e.callbackNode;if(Da()&&e.callbackNode!==s)return null;var o=St;return o=dn(e,e===zt?o:0),o===0?null:(Bg(e,o,n),Wg(e,Xe()),e.callbackNode!=null&&e.callbackNode===s?Jg.bind(null,e):null)}function ty(e,n){if(Da())return null;Bg(e,n,!0)}function ME(e){jE(function(){(Qt&6)!==0?Qr(le,e):e()})}function Uh(){return Ss===0&&(Ss=io()),Ss}function ey(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:Yn(""+e)}function ny(e,n){var s=n.ownerDocument.createElement("input");return s.name=n.name,s.value=n.value,e.id&&s.setAttribute("form",e.id),n.parentNode.insertBefore(s,n),e=new FormData(e),s.parentNode.removeChild(s),e}function VE(e,n,s,o,c){if(n==="submit"&&s&&s.stateNode===c){var h=ey((c[ue]||null).action),_=o.submitter;_&&(n=(n=_[ue]||null)?ey(n.formAction):_.getAttribute("formAction"),n!==null&&(h=n,_=null));var T=new ea("action","action",null,o,c);e.push({event:T,listeners:[{instance:null,listener:function(){if(o.defaultPrevented){if(Ss!==0){var S=_?ny(c,_):new FormData(c);Gf(s,{pending:!0,data:S,method:c.method,action:h},null,S)}}else typeof h=="function"&&(T.preventDefault(),S=_?ny(c,_):new FormData(c),Gf(s,{pending:!0,data:S,method:c.method,action:h},h,S))},currentTarget:c}]})}}for(var xh=0;xh<Ym.length;xh++){var Ph=Ym[xh],kE=Ph.toLowerCase(),LE=Ph[0].toUpperCase()+Ph.slice(1);kn(kE,"on"+LE)}kn(qm,"onAnimationEnd"),kn(Fm,"onAnimationIteration"),kn(Gm,"onAnimationStart"),kn("dblclick","onDoubleClick"),kn("focusin","onFocus"),kn("focusout","onBlur"),kn(WT,"onTransitionRun"),kn(JT,"onTransitionStart"),kn(tE,"onTransitionCancel"),kn(Km,"onTransitionEnd"),$e("onMouseEnter",["mouseout","mouseover"]),$e("onMouseLeave",["mouseout","mouseover"]),$e("onPointerEnter",["pointerout","pointerover"]),$e("onPointerLeave",["pointerout","pointerover"]),nn("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),nn("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),nn("onBeforeInput",["compositionend","keypress","textInput","paste"]),nn("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),nn("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),nn("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Yo="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),UE=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Yo));function iy(e,n){n=(n&4)!==0;for(var s=0;s<e.length;s++){var o=e[s],c=o.event;o=o.listeners;t:{var h=void 0;if(n)for(var _=o.length-1;0<=_;_--){var T=o[_],S=T.instance,M=T.currentTarget;if(T=T.listener,S!==h&&c.isPropagationStopped())break t;h=T,c.currentTarget=M;try{h(c)}catch(H){Iu(H)}c.currentTarget=null,h=S}else for(_=0;_<o.length;_++){if(T=o[_],S=T.instance,M=T.currentTarget,T=T.listener,S!==h&&c.isPropagationStopped())break t;h=T,c.currentTarget=M;try{h(c)}catch(H){Iu(H)}c.currentTarget=null,h=S}}}}function Et(e,n){var s=n[Xr];s===void 0&&(s=n[Xr]=new Set);var o=e+"__bubble";s.has(o)||(ry(n,e,2,!1),s.add(o))}function zh(e,n,s){var o=0;n&&(o|=4),ry(s,e,o,n)}var ju="_reactListening"+Math.random().toString(36).slice(2);function Bh(e){if(!e[ju]){e[ju]=!0,so.forEach(function(s){s!=="selectionchange"&&(UE.has(s)||zh(s,!1,e),zh(s,!0,e))});var n=e.nodeType===9?e:e.ownerDocument;n===null||n[ju]||(n[ju]=!0,zh("selectionchange",!1,n))}}function ry(e,n,s,o){switch(Iy(n)){case 2:var c=lb;break;case 8:c=ub;break;default:c=Jh}s=c.bind(null,n,s,e),c=void 0,!yn||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(c=!0),o?c!==void 0?e.addEventListener(n,s,{capture:!0,passive:c}):e.addEventListener(n,s,!0):c!==void 0?e.addEventListener(n,s,{passive:c}):e.addEventListener(n,s,!1)}function Hh(e,n,s,o,c){var h=o;if((n&1)===0&&(n&2)===0&&o!==null)t:for(;;){if(o===null)return;var _=o.tag;if(_===3||_===4){var T=o.stateNode.containerInfo;if(T===c||T.nodeType===8&&T.parentNode===c)break;if(_===4)for(_=o.return;_!==null;){var S=_.tag;if((S===3||S===4)&&(S=_.stateNode.containerInfo,S===c||S.nodeType===8&&S.parentNode===c))return;_=_.return}for(;T!==null;){if(_=Vn(T),_===null)return;if(S=_.tag,S===5||S===6||S===26||S===27){o=h=_;continue t}T=T.parentNode}}o=o.return}Ql(function(){var M=h,H=ta(s),G=[];t:{var x=Qm.get(e);if(x!==void 0){var B=ea,rt=e;switch(e){case"keypress":if($n(s)===0)break t;case"keydown":case"keyup":B=oa;break;case"focusin":rt="focus",B=ra;break;case"focusout":rt="blur",B=ra;break;case"beforeblur":case"afterblur":B=ra;break;case"click":if(s.button===2)break t;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":B=_n;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":B=df;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":B=eu;break;case qm:case Fm:case Gm:B=sa;break;case Km:B=iu;break;case"scroll":case"scrollend":B=Yl;break;case"wheel":B=la;break;case"copy":case"cut":case"paste":B=aa;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":B=_o;break;case"toggle":case"beforetoggle":B=su}var ht=(n&4)!==0,Zt=!ht&&(e==="scroll"||e==="scrollend"),V=ht?x!==null?x+"Capture":null:x;ht=[];for(var N=M,U;N!==null;){var j=N;if(U=j.stateNode,j=j.tag,j!==5&&j!==26&&j!==27||U===null||V===null||(j=ts(N,V),j!=null&&ht.push(Xo(N,j,U))),Zt)break;N=N.return}0<ht.length&&(x=new B(x,rt,null,s,H),G.push({event:x,listeners:ht}))}}if((n&7)===0){t:{if(x=e==="mouseover"||e==="pointerover",B=e==="mouseout"||e==="pointerout",x&&s!==gn&&(rt=s.relatedTarget||s.fromElement)&&(Vn(rt)||rt[pi]))break t;if((B||x)&&(x=H.window===H?H:(x=H.ownerDocument)?x.defaultView||x.parentWindow:window,B?(rt=s.relatedTarget||s.toElement,B=M,rt=rt?Vn(rt):null,rt!==null&&(Zt=st(rt),ht=rt.tag,rt!==Zt||ht!==5&&ht!==27&&ht!==6)&&(rt=null)):(B=null,rt=M),B!==rt)){if(ht=_n,j="onMouseLeave",V="onMouseEnter",N="mouse",(e==="pointerout"||e==="pointerover")&&(ht=_o,j="onPointerLeave",V="onPointerEnter",N="pointer"),Zt=B==null?x:sr(B),U=rt==null?x:sr(rt),x=new ht(j,N+"leave",B,s,H),x.target=Zt,x.relatedTarget=U,j=null,Vn(H)===M&&(ht=new ht(V,N+"enter",rt,s,H),ht.target=U,ht.relatedTarget=Zt,j=ht),Zt=j,B&&rt)e:{for(ht=B,V=rt,N=0,U=ht;U;U=Na(U))N++;for(U=0,j=V;j;j=Na(j))U++;for(;0<N-U;)ht=Na(ht),N--;for(;0<U-N;)V=Na(V),U--;for(;N--;){if(ht===V||V!==null&&ht===V.alternate)break e;ht=Na(ht),V=Na(V)}ht=null}else ht=null;B!==null&&sy(G,x,B,ht,!1),rt!==null&&Zt!==null&&sy(G,Zt,rt,ht,!0)}}t:{if(x=M?sr(M):window,B=x.nodeName&&x.nodeName.toLowerCase(),B==="select"||B==="input"&&x.type==="file")var tt=Mm;else if(fe(x))if(Vm)tt=YT;else{tt=KT;var gt=GT}else B=x.nodeName,!B||B.toLowerCase()!=="input"||x.type!=="checkbox"&&x.type!=="radio"?M&&co(M.elementType)&&(tt=Mm):tt=QT;if(tt&&(tt=tt(e,M))){Ai(G,tt,s,H);break t}gt&&gt(e,x,M),e==="focusout"&&M&&x.type==="number"&&M.memoizedProps.value!=null&&Js(x,"number",x.value)}switch(gt=M?sr(M):window,e){case"focusin":(fe(gt)||gt.contentEditable==="true")&&(ua=gt,_f=M,Eo=null);break;case"focusout":Eo=_f=ua=null;break;case"mousedown":vf=!0;break;case"contextmenu":case"mouseup":case"dragend":vf=!1,Hm(G,s,H);break;case"selectionchange":if(ZT)break;case"keydown":case"keyup":Hm(G,s,H)}var at;if(Jn)t:{switch(e){case"compositionstart":var lt="onCompositionStart";break t;case"compositionend":lt="onCompositionEnd";break t;case"compositionupdate":lt="onCompositionUpdate";break t}lt=void 0}else bt?P(e,s)&&(lt="onCompositionEnd"):e==="keydown"&&s.keyCode===229&&(lt="onCompositionStart");lt&&(g&&s.locale!=="ko"&&(bt||lt!=="onCompositionStart"?lt==="onCompositionEnd"&&bt&&(at=ho()):(Xn=H,fr="value"in Xn?Xn.value:Xn.textContent,bt=!0)),gt=qu(M,lt),0<gt.length&&(lt=new go(lt,e,null,s,H),G.push({event:lt,listeners:gt}),at?lt.data=at:(at=$(s),at!==null&&(lt.data=at)))),(at=m?ce(e,s):At(e,s))&&(lt=qu(M,"onBeforeInput"),0<lt.length&&(gt=new go("onBeforeInput","beforeinput",null,s,H),G.push({event:gt,listeners:lt}),gt.data=at)),VE(G,e,M,s,H)}iy(G,n)})}function Xo(e,n,s){return{instance:e,listener:n,currentTarget:s}}function qu(e,n){for(var s=n+"Capture",o=[];e!==null;){var c=e,h=c.stateNode;c=c.tag,c!==5&&c!==26&&c!==27||h===null||(c=ts(e,s),c!=null&&o.unshift(Xo(e,c,h)),c=ts(e,n),c!=null&&o.push(Xo(e,c,h))),e=e.return}return o}function Na(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function sy(e,n,s,o,c){for(var h=n._reactName,_=[];s!==null&&s!==o;){var T=s,S=T.alternate,M=T.stateNode;if(T=T.tag,S!==null&&S===o)break;T!==5&&T!==26&&T!==27||M===null||(S=M,c?(M=ts(s,h),M!=null&&_.unshift(Xo(s,M,S))):c||(M=ts(s,h),M!=null&&_.push(Xo(s,M,S)))),s=s.return}_.length!==0&&e.push({event:n,listeners:_})}var xE=/\r\n?/g,PE=/\u0000|\uFFFD/g;function ay(e){return(typeof e=="string"?e:""+e).replace(xE,`
`).replace(PE,"")}function oy(e,n){return n=ay(n),ay(e)===n}function Fu(){}function Lt(e,n,s,o,c,h){switch(s){case"children":typeof o=="string"?n==="body"||n==="textarea"&&o===""||pn(e,o):(typeof o=="number"||typeof o=="bigint")&&n!=="body"&&pn(e,""+o);break;case"className":lr(e,"class",o);break;case"tabIndex":lr(e,"tabindex",o);break;case"dir":case"role":case"viewBox":case"width":case"height":lr(e,s,o);break;case"style":Kl(e,o,h);break;case"data":if(n!=="object"){lr(e,"data",o);break}case"src":case"href":if(o===""&&(n!=="a"||s!=="href")){e.removeAttribute(s);break}if(o==null||typeof o=="function"||typeof o=="symbol"||typeof o=="boolean"){e.removeAttribute(s);break}o=Yn(""+o),e.setAttribute(s,o);break;case"action":case"formAction":if(typeof o=="function"){e.setAttribute(s,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof h=="function"&&(s==="formAction"?(n!=="input"&&Lt(e,n,"name",c.name,c,null),Lt(e,n,"formEncType",c.formEncType,c,null),Lt(e,n,"formMethod",c.formMethod,c,null),Lt(e,n,"formTarget",c.formTarget,c,null)):(Lt(e,n,"encType",c.encType,c,null),Lt(e,n,"method",c.method,c,null),Lt(e,n,"target",c.target,c,null)));if(o==null||typeof o=="symbol"||typeof o=="boolean"){e.removeAttribute(s);break}o=Yn(""+o),e.setAttribute(s,o);break;case"onClick":o!=null&&(e.onclick=Fu);break;case"onScroll":o!=null&&Et("scroll",e);break;case"onScrollEnd":o!=null&&Et("scrollend",e);break;case"dangerouslySetInnerHTML":if(o!=null){if(typeof o!="object"||!("__html"in o))throw Error(a(61));if(s=o.__html,s!=null){if(c.children!=null)throw Error(a(60));e.innerHTML=s}}break;case"multiple":e.multiple=o&&typeof o!="function"&&typeof o!="symbol";break;case"muted":e.muted=o&&typeof o!="function"&&typeof o!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(o==null||typeof o=="function"||typeof o=="boolean"||typeof o=="symbol"){e.removeAttribute("xlink:href");break}s=Yn(""+o),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",s);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":o!=null&&typeof o!="function"&&typeof o!="symbol"?e.setAttribute(s,""+o):e.removeAttribute(s);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":o&&typeof o!="function"&&typeof o!="symbol"?e.setAttribute(s,""):e.removeAttribute(s);break;case"capture":case"download":o===!0?e.setAttribute(s,""):o!==!1&&o!=null&&typeof o!="function"&&typeof o!="symbol"?e.setAttribute(s,o):e.removeAttribute(s);break;case"cols":case"rows":case"size":case"span":o!=null&&typeof o!="function"&&typeof o!="symbol"&&!isNaN(o)&&1<=o?e.setAttribute(s,o):e.removeAttribute(s);break;case"rowSpan":case"start":o==null||typeof o=="function"||typeof o=="symbol"||isNaN(o)?e.removeAttribute(s):e.setAttribute(s,o);break;case"popover":Et("beforetoggle",e),Et("toggle",e),or(e,"popover",o);break;case"xlinkActuate":mn(e,"http://www.w3.org/1999/xlink","xlink:actuate",o);break;case"xlinkArcrole":mn(e,"http://www.w3.org/1999/xlink","xlink:arcrole",o);break;case"xlinkRole":mn(e,"http://www.w3.org/1999/xlink","xlink:role",o);break;case"xlinkShow":mn(e,"http://www.w3.org/1999/xlink","xlink:show",o);break;case"xlinkTitle":mn(e,"http://www.w3.org/1999/xlink","xlink:title",o);break;case"xlinkType":mn(e,"http://www.w3.org/1999/xlink","xlink:type",o);break;case"xmlBase":mn(e,"http://www.w3.org/XML/1998/namespace","xml:base",o);break;case"xmlLang":mn(e,"http://www.w3.org/XML/1998/namespace","xml:lang",o);break;case"xmlSpace":mn(e,"http://www.w3.org/XML/1998/namespace","xml:space",o);break;case"is":or(e,"is",o);break;case"innerText":case"textContent":break;default:(!(2<s.length)||s[0]!=="o"&&s[0]!=="O"||s[1]!=="n"&&s[1]!=="N")&&(s=ff.get(s)||s,or(e,s,o))}}function jh(e,n,s,o,c,h){switch(s){case"style":Kl(e,o,h);break;case"dangerouslySetInnerHTML":if(o!=null){if(typeof o!="object"||!("__html"in o))throw Error(a(61));if(s=o.__html,s!=null){if(c.children!=null)throw Error(a(60));e.innerHTML=s}}break;case"children":typeof o=="string"?pn(e,o):(typeof o=="number"||typeof o=="bigint")&&pn(e,""+o);break;case"onScroll":o!=null&&Et("scroll",e);break;case"onScrollEnd":o!=null&&Et("scrollend",e);break;case"onClick":o!=null&&(e.onclick=Fu);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!Zs.hasOwnProperty(s))t:{if(s[0]==="o"&&s[1]==="n"&&(c=s.endsWith("Capture"),n=s.slice(2,c?s.length-7:void 0),h=e[ue]||null,h=h!=null?h[s]:null,typeof h=="function"&&e.removeEventListener(n,h,c),typeof o=="function")){typeof h!="function"&&h!==null&&(s in e?e[s]=null:e.hasAttribute(s)&&e.removeAttribute(s)),e.addEventListener(n,o,c);break t}s in e?e[s]=o:o===!0?e.setAttribute(s,""):or(e,s,o)}}}function Ce(e,n,s){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":Et("error",e),Et("load",e);var o=!1,c=!1,h;for(h in s)if(s.hasOwnProperty(h)){var _=s[h];if(_!=null)switch(h){case"src":o=!0;break;case"srcSet":c=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(a(137,n));default:Lt(e,n,h,_,s,null)}}c&&Lt(e,n,"srcSet",s.srcSet,s,null),o&&Lt(e,n,"src",s.src,s,null);return;case"input":Et("invalid",e);var T=h=_=c=null,S=null,M=null;for(o in s)if(s.hasOwnProperty(o)){var H=s[o];if(H!=null)switch(o){case"name":c=H;break;case"type":_=H;break;case"checked":S=H;break;case"defaultChecked":M=H;break;case"value":h=H;break;case"defaultValue":T=H;break;case"children":case"dangerouslySetInnerHTML":if(H!=null)throw Error(a(137,n));break;default:Lt(e,n,o,H,s,null)}}Wr(e,h,T,S,M,_,c,!1),Zr(e);return;case"select":Et("invalid",e),o=_=h=null;for(c in s)if(s.hasOwnProperty(c)&&(T=s[c],T!=null))switch(c){case"value":h=T;break;case"defaultValue":_=T;break;case"multiple":o=T;default:Lt(e,n,c,T,s,null)}n=h,s=_,e.multiple=!!o,n!=null?Rt(e,!!o,n,!1):s!=null&&Rt(e,!!o,s,!0);return;case"textarea":Et("invalid",e),h=c=o=null;for(_ in s)if(s.hasOwnProperty(_)&&(T=s[_],T!=null))switch(_){case"value":o=T;break;case"defaultValue":c=T;break;case"children":h=T;break;case"dangerouslySetInnerHTML":if(T!=null)throw Error(a(91));break;default:Lt(e,n,_,T,s,null)}cr(e,o,c,h),Zr(e);return;case"option":for(S in s)if(s.hasOwnProperty(S)&&(o=s[S],o!=null))switch(S){case"selected":e.selected=o&&typeof o!="function"&&typeof o!="symbol";break;default:Lt(e,n,S,o,s,null)}return;case"dialog":Et("cancel",e),Et("close",e);break;case"iframe":case"object":Et("load",e);break;case"video":case"audio":for(o=0;o<Yo.length;o++)Et(Yo[o],e);break;case"image":Et("error",e),Et("load",e);break;case"details":Et("toggle",e);break;case"embed":case"source":case"link":Et("error",e),Et("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(M in s)if(s.hasOwnProperty(M)&&(o=s[M],o!=null))switch(M){case"children":case"dangerouslySetInnerHTML":throw Error(a(137,n));default:Lt(e,n,M,o,s,null)}return;default:if(co(n)){for(H in s)s.hasOwnProperty(H)&&(o=s[H],o!==void 0&&jh(e,n,H,o,s,void 0));return}}for(T in s)s.hasOwnProperty(T)&&(o=s[T],o!=null&&Lt(e,n,T,o,s,null))}function zE(e,n,s,o){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var c=null,h=null,_=null,T=null,S=null,M=null,H=null;for(B in s){var G=s[B];if(s.hasOwnProperty(B)&&G!=null)switch(B){case"checked":break;case"value":break;case"defaultValue":S=G;default:o.hasOwnProperty(B)||Lt(e,n,B,null,o,G)}}for(var x in o){var B=o[x];if(G=s[x],o.hasOwnProperty(x)&&(B!=null||G!=null))switch(x){case"type":h=B;break;case"name":c=B;break;case"checked":M=B;break;case"defaultChecked":H=B;break;case"value":_=B;break;case"defaultValue":T=B;break;case"children":case"dangerouslySetInnerHTML":if(B!=null)throw Error(a(137,n));break;default:B!==G&&Lt(e,n,x,B,o,G)}}ur(e,_,T,S,M,H,h,c);return;case"select":B=_=T=x=null;for(h in s)if(S=s[h],s.hasOwnProperty(h)&&S!=null)switch(h){case"value":break;case"multiple":B=S;default:o.hasOwnProperty(h)||Lt(e,n,h,null,o,S)}for(c in o)if(h=o[c],S=s[c],o.hasOwnProperty(c)&&(h!=null||S!=null))switch(c){case"value":x=h;break;case"defaultValue":T=h;break;case"multiple":_=h;default:h!==S&&Lt(e,n,c,h,o,S)}n=T,s=_,o=B,x!=null?Rt(e,!!s,x,!1):!!o!=!!s&&(n!=null?Rt(e,!!s,n,!0):Rt(e,!!s,s?[]:"",!1));return;case"textarea":B=x=null;for(T in s)if(c=s[T],s.hasOwnProperty(T)&&c!=null&&!o.hasOwnProperty(T))switch(T){case"value":break;case"children":break;default:Lt(e,n,T,null,o,c)}for(_ in o)if(c=o[_],h=s[_],o.hasOwnProperty(_)&&(c!=null||h!=null))switch(_){case"value":x=c;break;case"defaultValue":B=c;break;case"children":break;case"dangerouslySetInnerHTML":if(c!=null)throw Error(a(91));break;default:c!==h&&Lt(e,n,_,c,o,h)}Jr(e,x,B);return;case"option":for(var rt in s)if(x=s[rt],s.hasOwnProperty(rt)&&x!=null&&!o.hasOwnProperty(rt))switch(rt){case"selected":e.selected=!1;break;default:Lt(e,n,rt,null,o,x)}for(S in o)if(x=o[S],B=s[S],o.hasOwnProperty(S)&&x!==B&&(x!=null||B!=null))switch(S){case"selected":e.selected=x&&typeof x!="function"&&typeof x!="symbol";break;default:Lt(e,n,S,x,o,B)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var ht in s)x=s[ht],s.hasOwnProperty(ht)&&x!=null&&!o.hasOwnProperty(ht)&&Lt(e,n,ht,null,o,x);for(M in o)if(x=o[M],B=s[M],o.hasOwnProperty(M)&&x!==B&&(x!=null||B!=null))switch(M){case"children":case"dangerouslySetInnerHTML":if(x!=null)throw Error(a(137,n));break;default:Lt(e,n,M,x,o,B)}return;default:if(co(n)){for(var Zt in s)x=s[Zt],s.hasOwnProperty(Zt)&&x!==void 0&&!o.hasOwnProperty(Zt)&&jh(e,n,Zt,void 0,o,x);for(H in o)x=o[H],B=s[H],!o.hasOwnProperty(H)||x===B||x===void 0&&B===void 0||jh(e,n,H,x,o,B);return}}for(var V in s)x=s[V],s.hasOwnProperty(V)&&x!=null&&!o.hasOwnProperty(V)&&Lt(e,n,V,null,o,x);for(G in o)x=o[G],B=s[G],!o.hasOwnProperty(G)||x===B||x==null&&B==null||Lt(e,n,G,x,o,B)}var qh=null,Fh=null;function Gu(e){return e.nodeType===9?e:e.ownerDocument}function ly(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function uy(e,n){if(e===0)switch(n){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&n==="foreignObject"?0:e}function Gh(e,n){return e==="textarea"||e==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.children=="bigint"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var Kh=null;function BE(){var e=window.event;return e&&e.type==="popstate"?e===Kh?!1:(Kh=e,!0):(Kh=null,!1)}var cy=typeof setTimeout=="function"?setTimeout:void 0,HE=typeof clearTimeout=="function"?clearTimeout:void 0,fy=typeof Promise=="function"?Promise:void 0,jE=typeof queueMicrotask=="function"?queueMicrotask:typeof fy<"u"?function(e){return fy.resolve(null).then(e).catch(qE)}:cy;function qE(e){setTimeout(function(){throw e})}function Qh(e,n){var s=n,o=0;do{var c=s.nextSibling;if(e.removeChild(s),c&&c.nodeType===8)if(s=c.data,s==="/$"){if(o===0){e.removeChild(c),il(n);return}o--}else s!=="$"&&s!=="$?"&&s!=="$!"||o++;s=c}while(s);il(n)}function Yh(e){var n=e.firstChild;for(n&&n.nodeType===10&&(n=n.nextSibling);n;){var s=n;switch(n=n.nextSibling,s.nodeName){case"HTML":case"HEAD":case"BODY":Yh(s),$r(s);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(s.rel.toLowerCase()==="stylesheet")continue}e.removeChild(s)}}function FE(e,n,s,o){for(;e.nodeType===1;){var c=s;if(e.nodeName.toLowerCase()!==n.toLowerCase()){if(!o&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(o){if(!e[rr])switch(n){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(h=e.getAttribute("rel"),h==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(h!==c.rel||e.getAttribute("href")!==(c.href==null?null:c.href)||e.getAttribute("crossorigin")!==(c.crossOrigin==null?null:c.crossOrigin)||e.getAttribute("title")!==(c.title==null?null:c.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(h=e.getAttribute("src"),(h!==(c.src==null?null:c.src)||e.getAttribute("type")!==(c.type==null?null:c.type)||e.getAttribute("crossorigin")!==(c.crossOrigin==null?null:c.crossOrigin))&&h&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(n==="input"&&e.type==="hidden"){var h=c.name==null?null:""+c.name;if(c.type==="hidden"&&e.getAttribute("name")===h)return e}else return e;if(e=xn(e.nextSibling),e===null)break}return null}function GE(e,n,s){if(n==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!s||(e=xn(e.nextSibling),e===null))return null;return e}function xn(e){for(;e!=null;e=e.nextSibling){var n=e.nodeType;if(n===1||n===3)break;if(n===8){if(n=e.data,n==="$"||n==="$!"||n==="$?"||n==="F!"||n==="F")break;if(n==="/$")return null}}return e}function hy(e){e=e.previousSibling;for(var n=0;e;){if(e.nodeType===8){var s=e.data;if(s==="$"||s==="$!"||s==="$?"){if(n===0)return e;n--}else s==="/$"&&n++}e=e.previousSibling}return null}function dy(e,n,s){switch(n=Gu(s),e){case"html":if(e=n.documentElement,!e)throw Error(a(452));return e;case"head":if(e=n.head,!e)throw Error(a(453));return e;case"body":if(e=n.body,!e)throw Error(a(454));return e;default:throw Error(a(451))}}var Cn=new Map,my=new Set;function Ku(e){return typeof e.getRootNode=="function"?e.getRootNode():e.ownerDocument}var Pi=Tt.d;Tt.d={f:KE,r:QE,D:YE,C:XE,L:$E,m:ZE,X:JE,S:WE,M:tb};function KE(){var e=Pi.f(),n=Pu();return e||n}function QE(e){var n=gi(e);n!==null&&n.tag===5&&n.type==="form"?Hp(n):Pi.r(e)}var Ma=typeof document>"u"?null:document;function py(e,n,s){var o=Ma;if(o&&typeof n=="string"&&n){var c=Yt(n);c='link[rel="'+e+'"][href="'+c+'"]',typeof s=="string"&&(c+='[crossorigin="'+s+'"]'),my.has(c)||(my.add(c),e={rel:e,crossOrigin:s,href:n},o.querySelector(c)===null&&(n=o.createElement("link"),Ce(n,"link",e),Gt(n),o.head.appendChild(n)))}}function YE(e){Pi.D(e),py("dns-prefetch",e,null)}function XE(e,n){Pi.C(e,n),py("preconnect",e,n)}function $E(e,n,s){Pi.L(e,n,s);var o=Ma;if(o&&e&&n){var c='link[rel="preload"][as="'+Yt(n)+'"]';n==="image"&&s&&s.imageSrcSet?(c+='[imagesrcset="'+Yt(s.imageSrcSet)+'"]',typeof s.imageSizes=="string"&&(c+='[imagesizes="'+Yt(s.imageSizes)+'"]')):c+='[href="'+Yt(e)+'"]';var h=c;switch(n){case"style":h=Va(e);break;case"script":h=ka(e)}Cn.has(h)||(e=R({rel:"preload",href:n==="image"&&s&&s.imageSrcSet?void 0:e,as:n},s),Cn.set(h,e),o.querySelector(c)!==null||n==="style"&&o.querySelector($o(h))||n==="script"&&o.querySelector(Zo(h))||(n=o.createElement("link"),Ce(n,"link",e),Gt(n),o.head.appendChild(n)))}}function ZE(e,n){Pi.m(e,n);var s=Ma;if(s&&e){var o=n&&typeof n.as=="string"?n.as:"script",c='link[rel="modulepreload"][as="'+Yt(o)+'"][href="'+Yt(e)+'"]',h=c;switch(o){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":h=ka(e)}if(!Cn.has(h)&&(e=R({rel:"modulepreload",href:e},n),Cn.set(h,e),s.querySelector(c)===null)){switch(o){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(s.querySelector(Zo(h)))return}o=s.createElement("link"),Ce(o,"link",e),Gt(o),s.head.appendChild(o)}}}function WE(e,n,s){Pi.S(e,n,s);var o=Ma;if(o&&e){var c=ar(o).hoistableStyles,h=Va(e);n=n||"default";var _=c.get(h);if(!_){var T={loading:0,preload:null};if(_=o.querySelector($o(h)))T.loading=5;else{e=R({rel:"stylesheet",href:e,"data-precedence":n},s),(s=Cn.get(h))&&Xh(e,s);var S=_=o.createElement("link");Gt(S),Ce(S,"link",e),S._p=new Promise(function(M,H){S.onload=M,S.onerror=H}),S.addEventListener("load",function(){T.loading|=1}),S.addEventListener("error",function(){T.loading|=2}),T.loading|=4,Qu(_,n,o)}_={type:"stylesheet",instance:_,count:1,state:T},c.set(h,_)}}}function JE(e,n){Pi.X(e,n);var s=Ma;if(s&&e){var o=ar(s).hoistableScripts,c=ka(e),h=o.get(c);h||(h=s.querySelector(Zo(c)),h||(e=R({src:e,async:!0},n),(n=Cn.get(c))&&$h(e,n),h=s.createElement("script"),Gt(h),Ce(h,"link",e),s.head.appendChild(h)),h={type:"script",instance:h,count:1,state:null},o.set(c,h))}}function tb(e,n){Pi.M(e,n);var s=Ma;if(s&&e){var o=ar(s).hoistableScripts,c=ka(e),h=o.get(c);h||(h=s.querySelector(Zo(c)),h||(e=R({src:e,async:!0,type:"module"},n),(n=Cn.get(c))&&$h(e,n),h=s.createElement("script"),Gt(h),Ce(h,"link",e),s.head.appendChild(h)),h={type:"script",instance:h,count:1,state:null},o.set(c,h))}}function gy(e,n,s,o){var c=(c=hn.current)?Ku(c):null;if(!c)throw Error(a(446));switch(e){case"meta":case"title":return null;case"style":return typeof s.precedence=="string"&&typeof s.href=="string"?(n=Va(s.href),s=ar(c).hoistableStyles,o=s.get(n),o||(o={type:"style",instance:null,count:0,state:null},s.set(n,o)),o):{type:"void",instance:null,count:0,state:null};case"link":if(s.rel==="stylesheet"&&typeof s.href=="string"&&typeof s.precedence=="string"){e=Va(s.href);var h=ar(c).hoistableStyles,_=h.get(e);if(_||(c=c.ownerDocument||c,_={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},h.set(e,_),(h=c.querySelector($o(e)))&&!h._p&&(_.instance=h,_.state.loading=5),Cn.has(e)||(s={rel:"preload",as:"style",href:s.href,crossOrigin:s.crossOrigin,integrity:s.integrity,media:s.media,hrefLang:s.hrefLang,referrerPolicy:s.referrerPolicy},Cn.set(e,s),h||eb(c,e,s,_.state))),n&&o===null)throw Error(a(528,""));return _}if(n&&o!==null)throw Error(a(529,""));return null;case"script":return n=s.async,s=s.src,typeof s=="string"&&n&&typeof n!="function"&&typeof n!="symbol"?(n=ka(s),s=ar(c).hoistableScripts,o=s.get(n),o||(o={type:"script",instance:null,count:0,state:null},s.set(n,o)),o):{type:"void",instance:null,count:0,state:null};default:throw Error(a(444,e))}}function Va(e){return'href="'+Yt(e)+'"'}function $o(e){return'link[rel="stylesheet"]['+e+"]"}function yy(e){return R({},e,{"data-precedence":e.precedence,precedence:null})}function eb(e,n,s,o){e.querySelector('link[rel="preload"][as="style"]['+n+"]")?o.loading=1:(n=e.createElement("link"),o.preload=n,n.addEventListener("load",function(){return o.loading|=1}),n.addEventListener("error",function(){return o.loading|=2}),Ce(n,"link",s),Gt(n),e.head.appendChild(n))}function ka(e){return'[src="'+Yt(e)+'"]'}function Zo(e){return"script[async]"+e}function _y(e,n,s){if(n.count++,n.instance===null)switch(n.type){case"style":var o=e.querySelector('style[data-href~="'+Yt(s.href)+'"]');if(o)return n.instance=o,Gt(o),o;var c=R({},s,{"data-href":s.href,"data-precedence":s.precedence,href:null,precedence:null});return o=(e.ownerDocument||e).createElement("style"),Gt(o),Ce(o,"style",c),Qu(o,s.precedence,e),n.instance=o;case"stylesheet":c=Va(s.href);var h=e.querySelector($o(c));if(h)return n.state.loading|=4,n.instance=h,Gt(h),h;o=yy(s),(c=Cn.get(c))&&Xh(o,c),h=(e.ownerDocument||e).createElement("link"),Gt(h);var _=h;return _._p=new Promise(function(T,S){_.onload=T,_.onerror=S}),Ce(h,"link",o),n.state.loading|=4,Qu(h,s.precedence,e),n.instance=h;case"script":return h=ka(s.src),(c=e.querySelector(Zo(h)))?(n.instance=c,Gt(c),c):(o=s,(c=Cn.get(h))&&(o=R({},s),$h(o,c)),e=e.ownerDocument||e,c=e.createElement("script"),Gt(c),Ce(c,"link",o),e.head.appendChild(c),n.instance=c);case"void":return null;default:throw Error(a(443,n.type))}else n.type==="stylesheet"&&(n.state.loading&4)===0&&(o=n.instance,n.state.loading|=4,Qu(o,s.precedence,e));return n.instance}function Qu(e,n,s){for(var o=s.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),c=o.length?o[o.length-1]:null,h=c,_=0;_<o.length;_++){var T=o[_];if(T.dataset.precedence===n)h=T;else if(h!==c)break}h?h.parentNode.insertBefore(e,h.nextSibling):(n=s.nodeType===9?s.head:s,n.insertBefore(e,n.firstChild))}function Xh(e,n){e.crossOrigin==null&&(e.crossOrigin=n.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=n.referrerPolicy),e.title==null&&(e.title=n.title)}function $h(e,n){e.crossOrigin==null&&(e.crossOrigin=n.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=n.referrerPolicy),e.integrity==null&&(e.integrity=n.integrity)}var Yu=null;function vy(e,n,s){if(Yu===null){var o=new Map,c=Yu=new Map;c.set(s,o)}else c=Yu,o=c.get(s),o||(o=new Map,c.set(s,o));if(o.has(e))return o;for(o.set(e,null),s=s.getElementsByTagName(e),c=0;c<s.length;c++){var h=s[c];if(!(h[rr]||h[ge]||e==="link"&&h.getAttribute("rel")==="stylesheet")&&h.namespaceURI!=="http://www.w3.org/2000/svg"){var _=h.getAttribute(n)||"";_=e+_;var T=o.get(_);T?T.push(h):o.set(_,[h])}}return o}function Ty(e,n,s){e=e.ownerDocument||e,e.head.insertBefore(s,n==="title"?e.querySelector("head > title"):null)}function nb(e,n,s){if(s===1||n.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof n.precedence!="string"||typeof n.href!="string"||n.href==="")break;return!0;case"link":if(typeof n.rel!="string"||typeof n.href!="string"||n.href===""||n.onLoad||n.onError)break;switch(n.rel){case"stylesheet":return e=n.disabled,typeof n.precedence=="string"&&e==null;default:return!0}case"script":if(n.async&&typeof n.async!="function"&&typeof n.async!="symbol"&&!n.onLoad&&!n.onError&&n.src&&typeof n.src=="string")return!0}return!1}function Ey(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}var Wo=null;function ib(){}function rb(e,n,s){if(Wo===null)throw Error(a(475));var o=Wo;if(n.type==="stylesheet"&&(typeof s.media!="string"||matchMedia(s.media).matches!==!1)&&(n.state.loading&4)===0){if(n.instance===null){var c=Va(s.href),h=e.querySelector($o(c));if(h){e=h._p,e!==null&&typeof e=="object"&&typeof e.then=="function"&&(o.count++,o=Xu.bind(o),e.then(o,o)),n.state.loading|=4,n.instance=h,Gt(h);return}h=e.ownerDocument||e,s=yy(s),(c=Cn.get(c))&&Xh(s,c),h=h.createElement("link"),Gt(h);var _=h;_._p=new Promise(function(T,S){_.onload=T,_.onerror=S}),Ce(h,"link",s),n.instance=h}o.stylesheets===null&&(o.stylesheets=new Map),o.stylesheets.set(n,e),(e=n.state.preload)&&(n.state.loading&3)===0&&(o.count++,n=Xu.bind(o),e.addEventListener("load",n),e.addEventListener("error",n))}}function sb(){if(Wo===null)throw Error(a(475));var e=Wo;return e.stylesheets&&e.count===0&&Zh(e,e.stylesheets),0<e.count?function(n){var s=setTimeout(function(){if(e.stylesheets&&Zh(e,e.stylesheets),e.unsuspend){var o=e.unsuspend;e.unsuspend=null,o()}},6e4);return e.unsuspend=n,function(){e.unsuspend=null,clearTimeout(s)}}:null}function Xu(){if(this.count--,this.count===0){if(this.stylesheets)Zh(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var $u=null;function Zh(e,n){e.stylesheets=null,e.unsuspend!==null&&(e.count++,$u=new Map,n.forEach(ab,e),$u=null,Xu.call(e))}function ab(e,n){if(!(n.state.loading&4)){var s=$u.get(e);if(s)var o=s.get(null);else{s=new Map,$u.set(e,s);for(var c=e.querySelectorAll("link[data-precedence],style[data-precedence]"),h=0;h<c.length;h++){var _=c[h];(_.nodeName==="LINK"||_.getAttribute("media")!=="not all")&&(s.set(_.dataset.precedence,_),o=_)}o&&s.set(null,o)}c=n.instance,_=c.getAttribute("data-precedence"),h=s.get(_)||o,h===o&&s.set(null,c),s.set(_,c),this.count++,o=Xu.bind(this),c.addEventListener("load",o),c.addEventListener("error",o),h?h.parentNode.insertBefore(c,h.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(c,e.firstChild)),n.state.loading|=4}}var Jo={$$typeof:q,Provider:null,Consumer:null,_currentValue:me,_currentValue2:me,_threadCount:0};function ob(e,n,s,o,c,h,_,T){this.tag=1,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Xs(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.finishedLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Xs(0),this.hiddenUpdates=Xs(null),this.identifierPrefix=o,this.onUncaughtError=c,this.onCaughtError=h,this.onRecoverableError=_,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=T,this.incompleteTransitions=new Map}function by(e,n,s,o,c,h,_,T,S,M,H,G){return e=new ob(e,n,s,_,T,S,M,G),n=1,h===!0&&(n|=24),h=Rn(3,null,null,n),e.current=h,h.stateNode=e,n=Df(),n.refCount++,e.pooledCache=n,n.refCount++,h.memoizedState={element:o,isDehydrated:s,cache:n},uh(h),e}function Ay(e){return e?(e=ha,e):ha}function Sy(e,n,s,o,c,h){c=Ay(c),o.context===null?o.context=c:o.pendingContext=c,o=vr(n),o.payload={element:s},h=h===void 0?null:h,h!==null&&(o.callback=h),s=Tr(e,o,n),s!==null&&(Qe(s,e,n),Uo(s,e,n))}function wy(e,n){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var s=e.retryLane;e.retryLane=s!==0&&s<n?s:n}}function Wh(e,n){wy(e,n),(e=e.alternate)&&wy(e,n)}function Ry(e){if(e.tag===13){var n=hr(e,67108864);n!==null&&Qe(n,e,67108864),Wh(e,67108864)}}var Zu=!0;function lb(e,n,s,o){var c=b.T;b.T=null;var h=Tt.p;try{Tt.p=2,Jh(e,n,s,o)}finally{Tt.p=h,b.T=c}}function ub(e,n,s,o){var c=b.T;b.T=null;var h=Tt.p;try{Tt.p=8,Jh(e,n,s,o)}finally{Tt.p=h,b.T=c}}function Jh(e,n,s,o){if(Zu){var c=td(o);if(c===null)Hh(e,n,o,Wu,s),Cy(e,o);else if(fb(c,e,n,s,o))o.stopPropagation();else if(Cy(e,o),n&4&&-1<cb.indexOf(e)){for(;c!==null;){var h=gi(c);if(h!==null)switch(h.tag){case 3:if(h=h.stateNode,h.current.memoizedState.isDehydrated){var _=Mn(h.pendingLanes);if(_!==0){var T=h;for(T.pendingLanes|=2,T.entangledLanes|=2;_;){var S=1<<31-qe(_);T.entanglements[1]|=S,_&=~S}si(h),(Qt&6)===0&&(Lu=Xe()+500,Qo(0))}}break;case 13:T=hr(h,2),T!==null&&Qe(T,h,2),Pu(),Wh(h,2)}if(h=td(o),h===null&&Hh(e,n,o,Wu,s),h===c)break;c=h}c!==null&&o.stopPropagation()}else Hh(e,n,o,null,s)}}function td(e){return e=ta(e),ed(e)}var Wu=null;function ed(e){if(Wu=null,e=Vn(e),e!==null){var n=st(e);if(n===null)e=null;else{var s=n.tag;if(s===13){if(e=Vt(n),e!==null)return e;e=null}else if(s===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;e=null}else n!==e&&(e=null)}}return Wu=e,null}function Iy(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(xl()){case le:return 2;case pe:return 8;case mi:case Pl:return 32;case to:return 268435456;default:return 32}default:return 32}}var nd=!1,Ir=null,Cr=null,Dr=null,tl=new Map,el=new Map,Or=[],cb="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function Cy(e,n){switch(e){case"focusin":case"focusout":Ir=null;break;case"dragenter":case"dragleave":Cr=null;break;case"mouseover":case"mouseout":Dr=null;break;case"pointerover":case"pointerout":tl.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":el.delete(n.pointerId)}}function nl(e,n,s,o,c,h){return e===null||e.nativeEvent!==h?(e={blockedOn:n,domEventName:s,eventSystemFlags:o,nativeEvent:h,targetContainers:[c]},n!==null&&(n=gi(n),n!==null&&Ry(n)),e):(e.eventSystemFlags|=o,n=e.targetContainers,c!==null&&n.indexOf(c)===-1&&n.push(c),e)}function fb(e,n,s,o,c){switch(n){case"focusin":return Ir=nl(Ir,e,n,s,o,c),!0;case"dragenter":return Cr=nl(Cr,e,n,s,o,c),!0;case"mouseover":return Dr=nl(Dr,e,n,s,o,c),!0;case"pointerover":var h=c.pointerId;return tl.set(h,nl(tl.get(h)||null,e,n,s,o,c)),!0;case"gotpointercapture":return h=c.pointerId,el.set(h,nl(el.get(h)||null,e,n,s,o,c)),!0}return!1}function Dy(e){var n=Vn(e.target);if(n!==null){var s=st(n);if(s!==null){if(n=s.tag,n===13){if(n=Vt(s),n!==null){e.blockedOn=n,ir(e.priority,function(){if(s.tag===13){var o=un(),c=hr(s,o);c!==null&&Qe(c,s,o),Wh(s,o)}});return}}else if(n===3&&s.stateNode.current.memoizedState.isDehydrated){e.blockedOn=s.tag===3?s.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Ju(e){if(e.blockedOn!==null)return!1;for(var n=e.targetContainers;0<n.length;){var s=td(e.nativeEvent);if(s===null){s=e.nativeEvent;var o=new s.constructor(s.type,s);gn=o,s.target.dispatchEvent(o),gn=null}else return n=gi(s),n!==null&&Ry(n),e.blockedOn=s,!1;n.shift()}return!0}function Oy(e,n,s){Ju(e)&&s.delete(n)}function hb(){nd=!1,Ir!==null&&Ju(Ir)&&(Ir=null),Cr!==null&&Ju(Cr)&&(Cr=null),Dr!==null&&Ju(Dr)&&(Dr=null),tl.forEach(Oy),el.forEach(Oy)}function tc(e,n){e.blockedOn===n&&(e.blockedOn=null,nd||(nd=!0,r.unstable_scheduleCallback(r.unstable_NormalPriority,hb)))}var ec=null;function Ny(e){ec!==e&&(ec=e,r.unstable_scheduleCallback(r.unstable_NormalPriority,function(){ec===e&&(ec=null);for(var n=0;n<e.length;n+=3){var s=e[n],o=e[n+1],c=e[n+2];if(typeof o!="function"){if(ed(o||s)===null)continue;break}var h=gi(s);h!==null&&(e.splice(n,3),n-=3,Gf(h,{pending:!0,data:c,method:s.method,action:o},o,c))}}))}function il(e){function n(S){return tc(S,e)}Ir!==null&&tc(Ir,e),Cr!==null&&tc(Cr,e),Dr!==null&&tc(Dr,e),tl.forEach(n),el.forEach(n);for(var s=0;s<Or.length;s++){var o=Or[s];o.blockedOn===e&&(o.blockedOn=null)}for(;0<Or.length&&(s=Or[0],s.blockedOn===null);)Dy(s),s.blockedOn===null&&Or.shift();if(s=(e.ownerDocument||e).$$reactFormReplay,s!=null)for(o=0;o<s.length;o+=3){var c=s[o],h=s[o+1],_=c[ue]||null;if(typeof h=="function")_||Ny(s);else if(_){var T=null;if(h&&h.hasAttribute("formAction")){if(c=h,_=h[ue]||null)T=_.formAction;else if(ed(c)!==null)continue}else T=_.action;typeof T=="function"?s[o+1]=T:(s.splice(o,3),o-=3),Ny(s)}}}function id(e){this._internalRoot=e}nc.prototype.render=id.prototype.render=function(e){var n=this._internalRoot;if(n===null)throw Error(a(409));var s=n.current,o=un();Sy(s,o,e,n,null,null)},nc.prototype.unmount=id.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var n=e.containerInfo;e.tag===0&&Da(),Sy(e.current,2,null,e,null,null),Pu(),n[pi]=null}};function nc(e){this._internalRoot=e}nc.prototype.unstable_scheduleHydration=function(e){if(e){var n=ql();e={blockedOn:null,target:e,priority:n};for(var s=0;s<Or.length&&n!==0&&n<Or[s].priority;s++);Or.splice(s,0,e),s===0&&Dy(e)}};var My=t.version;if(My!=="19.0.0")throw Error(a(527,My,"19.0.0"));Tt.findDOMNode=function(e){var n=e._reactInternals;if(n===void 0)throw typeof e.render=="function"?Error(a(188)):(e=Object.keys(e).join(","),Error(a(268,e)));return e=Yi(n),e=e!==null?ke(e):null,e=e===null?null:e.stateNode,e};var db={bundleType:0,version:"19.0.0",rendererPackageName:"react-dom",currentDispatcherRef:b,findFiberByHostInstance:Vn,reconcilerVersion:"19.0.0"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var ic=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!ic.isDisabled&&ic.supportsFiber)try{Zi=ic.inject(db),Le=ic}catch{}}return sl.createRoot=function(e,n){if(!l(e))throw Error(a(299));var s=!1,o="",c=Xp,h=$p,_=Zp,T=null;return n!=null&&(n.unstable_strictMode===!0&&(s=!0),n.identifierPrefix!==void 0&&(o=n.identifierPrefix),n.onUncaughtError!==void 0&&(c=n.onUncaughtError),n.onCaughtError!==void 0&&(h=n.onCaughtError),n.onRecoverableError!==void 0&&(_=n.onRecoverableError),n.unstable_transitionCallbacks!==void 0&&(T=n.unstable_transitionCallbacks)),n=by(e,1,!1,null,null,s,o,c,h,_,T,null),e[pi]=n.current,Bh(e.nodeType===8?e.parentNode:e),new id(n)},sl.hydrateRoot=function(e,n,s){if(!l(e))throw Error(a(299));var o=!1,c="",h=Xp,_=$p,T=Zp,S=null,M=null;return s!=null&&(s.unstable_strictMode===!0&&(o=!0),s.identifierPrefix!==void 0&&(c=s.identifierPrefix),s.onUncaughtError!==void 0&&(h=s.onUncaughtError),s.onCaughtError!==void 0&&(_=s.onCaughtError),s.onRecoverableError!==void 0&&(T=s.onRecoverableError),s.unstable_transitionCallbacks!==void 0&&(S=s.unstable_transitionCallbacks),s.formState!==void 0&&(M=s.formState)),n=by(e,1,!0,n,s??null,o,c,h,_,T,S,M),n.context=Ay(null),s=n.current,o=un(),c=vr(o),c.callback=null,Tr(s,c,o),n.current.lanes=o,te(n,o),si(n),e[pi]=n.current,Bh(e),new nc(n)},sl.version="19.0.0",sl}var Py;function wb(){if(Py)return ad.exports;Py=1;function r(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r)}catch(t){console.error(t)}}return r(),ad.exports=Sb(),ad.exports}var Rb=wb();const Ib="modulepreload",Cb=function(r){return"/Netflix-Clone-React/"+r},zy={},Qd=function(t,i,a){let l=Promise.resolve();if(i&&i.length>0){document.getElementsByTagName("link");const d=document.querySelector("meta[property=csp-nonce]"),p=(d==null?void 0:d.nonce)||(d==null?void 0:d.getAttribute("nonce"));l=Promise.allSettled(i.map(y=>{if(y=Cb(y),y in zy)return;zy[y]=!0;const v=y.endsWith(".css"),I=v?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${y}"]${I}`))return;const D=document.createElement("link");if(D.rel=v?"stylesheet":Ib,v||(D.as="script"),D.crossOrigin="",D.href=y,p&&D.setAttribute("nonce",p),document.head.appendChild(D),v)return new Promise((z,q)=>{D.addEventListener("load",z),D.addEventListener("error",()=>q(new Error(`Unable to preload CSS for ${y}`)))})}))}function f(d){const p=new Event("vite:preloadError",{cancelable:!0});if(p.payload=d,window.dispatchEvent(p),!p.defaultPrevented)throw d}return l.then(d=>{for(const p of d||[])p.status==="rejected"&&f(p.reason);return t().catch(f)})},Db=()=>{};var By={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hv=function(r){const t=[];let i=0;for(let a=0;a<r.length;a++){let l=r.charCodeAt(a);l<128?t[i++]=l:l<2048?(t[i++]=l>>6|192,t[i++]=l&63|128):(l&64512)===55296&&a+1<r.length&&(r.charCodeAt(a+1)&64512)===56320?(l=65536+((l&1023)<<10)+(r.charCodeAt(++a)&1023),t[i++]=l>>18|240,t[i++]=l>>12&63|128,t[i++]=l>>6&63|128,t[i++]=l&63|128):(t[i++]=l>>12|224,t[i++]=l>>6&63|128,t[i++]=l&63|128)}return t},Ob=function(r){const t=[];let i=0,a=0;for(;i<r.length;){const l=r[i++];if(l<128)t[a++]=String.fromCharCode(l);else if(l>191&&l<224){const f=r[i++];t[a++]=String.fromCharCode((l&31)<<6|f&63)}else if(l>239&&l<365){const f=r[i++],d=r[i++],p=r[i++],y=((l&7)<<18|(f&63)<<12|(d&63)<<6|p&63)-65536;t[a++]=String.fromCharCode(55296+(y>>10)),t[a++]=String.fromCharCode(56320+(y&1023))}else{const f=r[i++],d=r[i++];t[a++]=String.fromCharCode((l&15)<<12|(f&63)<<6|d&63)}}return t.join("")},dv={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(r,t){if(!Array.isArray(r))throw Error("encodeByteArray takes an array as a parameter");this.init_();const i=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,a=[];for(let l=0;l<r.length;l+=3){const f=r[l],d=l+1<r.length,p=d?r[l+1]:0,y=l+2<r.length,v=y?r[l+2]:0,I=f>>2,D=(f&3)<<4|p>>4;let z=(p&15)<<2|v>>6,q=v&63;y||(q=64,d||(z=64)),a.push(i[I],i[D],i[z],i[q])}return a.join("")},encodeString(r,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(r):this.encodeByteArray(hv(r),t)},decodeString(r,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(r):Ob(this.decodeStringToByteArray(r,t))},decodeStringToByteArray(r,t){this.init_();const i=t?this.charToByteMapWebSafe_:this.charToByteMap_,a=[];for(let l=0;l<r.length;){const f=i[r.charAt(l++)],p=l<r.length?i[r.charAt(l)]:0;++l;const v=l<r.length?i[r.charAt(l)]:64;++l;const D=l<r.length?i[r.charAt(l)]:64;if(++l,f==null||p==null||v==null||D==null)throw new Nb;const z=f<<2|p>>4;if(a.push(z),v!==64){const q=p<<4&240|v>>2;if(a.push(q),D!==64){const Q=v<<6&192|D;a.push(Q)}}}return a},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let r=0;r<this.ENCODED_VALS.length;r++)this.byteToCharMap_[r]=this.ENCODED_VALS.charAt(r),this.charToByteMap_[this.byteToCharMap_[r]]=r,this.byteToCharMapWebSafe_[r]=this.ENCODED_VALS_WEBSAFE.charAt(r),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[r]]=r,r>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(r)]=r,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(r)]=r)}}};class Nb extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const Mb=function(r){const t=hv(r);return dv.encodeByteArray(t,!0)},_c=function(r){return Mb(r).replace(/\./g,"")},mv=function(r){try{return dv.decodeString(r,!0)}catch(t){console.error("base64Decode failed: ",t)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Vb(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kb=()=>Vb().__FIREBASE_DEFAULTS__,Lb=()=>{if(typeof process>"u"||typeof By>"u")return;const r=By.__FIREBASE_DEFAULTS__;if(r)return JSON.parse(r)},Ub=()=>{if(typeof document>"u")return;let r;try{r=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const t=r&&mv(r[1]);return t&&JSON.parse(t)},zc=()=>{try{return Db()||kb()||Lb()||Ub()}catch(r){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${r}`);return}},pv=r=>{var t,i;return(i=(t=zc())===null||t===void 0?void 0:t.emulatorHosts)===null||i===void 0?void 0:i[r]},xb=r=>{const t=pv(r);if(!t)return;const i=t.lastIndexOf(":");if(i<=0||i+1===t.length)throw new Error(`Invalid host ${t} with no separate hostname and port!`);const a=parseInt(t.substring(i+1),10);return t[0]==="["?[t.substring(1,i-1),a]:[t.substring(0,i),a]},gv=()=>{var r;return(r=zc())===null||r===void 0?void 0:r.config},yv=r=>{var t;return(t=zc())===null||t===void 0?void 0:t[`_${r}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pb{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((t,i)=>{this.resolve=t,this.reject=i})}wrapCallback(t){return(i,a)=>{i?this.reject(i):this.resolve(a),typeof t=="function"&&(this.promise.catch(()=>{}),t.length===1?t(i):t(i,a))}}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zb(r,t){if(r.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const i={alg:"none",type:"JWT"},a=t||"demo-project",l=r.iat||0,f=r.sub||r.user_id;if(!f)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const d=Object.assign({iss:`https://securetoken.google.com/${a}`,aud:a,iat:l,exp:l+3600,auth_time:l,sub:f,user_id:f,firebase:{sign_in_provider:"custom",identities:{}}},r);return[_c(JSON.stringify(i)),_c(JSON.stringify(d)),""].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Be(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Bb(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Be())}function Hb(){var r;const t=(r=zc())===null||r===void 0?void 0:r.forceEnvironment;if(t==="node")return!0;if(t==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function jb(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function _v(){const r=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof r=="object"&&r.id!==void 0}function qb(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function Fb(){const r=Be();return r.indexOf("MSIE ")>=0||r.indexOf("Trident/")>=0}function Gb(){return!Hb()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function vv(){try{return typeof indexedDB=="object"}catch{return!1}}function Tv(){return new Promise((r,t)=>{try{let i=!0;const a="validate-browser-context-for-indexeddb-analytics-module",l=self.indexedDB.open(a);l.onsuccess=()=>{l.result.close(),i||self.indexedDB.deleteDatabase(a),r(!0)},l.onupgradeneeded=()=>{i=!1},l.onerror=()=>{var f;t(((f=l.error)===null||f===void 0?void 0:f.message)||"")}}catch(i){t(i)}})}function Kb(){return!(typeof navigator>"u"||!navigator.cookieEnabled)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qb="FirebaseError";class qn extends Error{constructor(t,i,a){super(i),this.code=t,this.customData=a,this.name=Qb,Object.setPrototypeOf(this,qn.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Bs.prototype.create)}}class Bs{constructor(t,i,a){this.service=t,this.serviceName=i,this.errors=a}create(t,...i){const a=i[0]||{},l=`${this.service}/${t}`,f=this.errors[t],d=f?Yb(f,a):"Error",p=`${this.serviceName}: ${d} (${l}).`;return new qn(l,p,a)}}function Yb(r,t){return r.replace(Xb,(i,a)=>{const l=t[a];return l!=null?String(l):`<${a}?>`})}const Xb=/\{\$([^}]+)}/g;function $b(r){for(const t in r)if(Object.prototype.hasOwnProperty.call(r,t))return!1;return!0}function Br(r,t){if(r===t)return!0;const i=Object.keys(r),a=Object.keys(t);for(const l of i){if(!a.includes(l))return!1;const f=r[l],d=t[l];if(Hy(f)&&Hy(d)){if(!Br(f,d))return!1}else if(f!==d)return!1}for(const l of a)if(!i.includes(l))return!1;return!0}function Hy(r){return r!==null&&typeof r=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wl(r){const t=[];for(const[i,a]of Object.entries(r))Array.isArray(a)?a.forEach(l=>{t.push(encodeURIComponent(i)+"="+encodeURIComponent(l))}):t.push(encodeURIComponent(i)+"="+encodeURIComponent(a));return t.length?"&"+t.join("&"):""}function ol(r){const t={};return r.replace(/^\?/,"").split("&").forEach(a=>{if(a){const[l,f]=a.split("=");t[decodeURIComponent(l)]=decodeURIComponent(f)}}),t}function ll(r){const t=r.indexOf("?");if(!t)return"";const i=r.indexOf("#",t);return r.substring(t,i>0?i:void 0)}function Zb(r,t){const i=new Wb(r,t);return i.subscribe.bind(i)}class Wb{constructor(t,i){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=i,this.task.then(()=>{t(this)}).catch(a=>{this.error(a)})}next(t){this.forEachObserver(i=>{i.next(t)})}error(t){this.forEachObserver(i=>{i.error(t)}),this.close(t)}complete(){this.forEachObserver(t=>{t.complete()}),this.close()}subscribe(t,i,a){let l;if(t===void 0&&i===void 0&&a===void 0)throw new Error("Missing Observer.");Jb(t,["next","error","complete"])?l=t:l={next:t,error:i,complete:a},l.next===void 0&&(l.next=ud),l.error===void 0&&(l.error=ud),l.complete===void 0&&(l.complete=ud);const f=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?l.error(this.finalError):l.complete()}catch{}}),this.observers.push(l),f}unsubscribeOne(t){this.observers===void 0||this.observers[t]===void 0||(delete this.observers[t],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(t){if(!this.finalized)for(let i=0;i<this.observers.length;i++)this.sendOne(i,t)}sendOne(t,i){this.task.then(()=>{if(this.observers!==void 0&&this.observers[t]!==void 0)try{i(this.observers[t])}catch(a){typeof console<"u"&&console.error&&console.error(a)}})}close(t){this.finalized||(this.finalized=!0,t!==void 0&&(this.finalError=t),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function Jb(r,t){if(typeof r!="object"||r===null)return!1;for(const i of t)if(i in r&&typeof r[i]=="function")return!0;return!1}function ud(){}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tA=1e3,eA=2,nA=4*60*60*1e3,iA=.5;function jy(r,t=tA,i=eA){const a=t*Math.pow(i,r),l=Math.round(iA*a*(Math.random()-.5)*2);return Math.min(nA,a+l)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function He(r){return r&&r._delegate?r._delegate:r}class Hn{constructor(t,i,a){this.name=t,this.instanceFactory=i,this.type=a,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(t){return this.instantiationMode=t,this}setMultipleInstances(t){return this.multipleInstances=t,this}setServiceProps(t){return this.serviceProps=t,this}setInstanceCreatedCallback(t){return this.onInstanceCreated=t,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ws="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rA{constructor(t,i){this.name=t,this.container=i,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(t){const i=this.normalizeInstanceIdentifier(t);if(!this.instancesDeferred.has(i)){const a=new Pb;if(this.instancesDeferred.set(i,a),this.isInitialized(i)||this.shouldAutoInitialize())try{const l=this.getOrInitializeService({instanceIdentifier:i});l&&a.resolve(l)}catch{}}return this.instancesDeferred.get(i).promise}getImmediate(t){var i;const a=this.normalizeInstanceIdentifier(t==null?void 0:t.identifier),l=(i=t==null?void 0:t.optional)!==null&&i!==void 0?i:!1;if(this.isInitialized(a)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:a})}catch(f){if(l)return null;throw f}else{if(l)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(t){if(t.name!==this.name)throw Error(`Mismatching Component ${t.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=t,!!this.shouldAutoInitialize()){if(aA(t))try{this.getOrInitializeService({instanceIdentifier:ws})}catch{}for(const[i,a]of this.instancesDeferred.entries()){const l=this.normalizeInstanceIdentifier(i);try{const f=this.getOrInitializeService({instanceIdentifier:l});a.resolve(f)}catch{}}}}clearInstance(t=ws){this.instancesDeferred.delete(t),this.instancesOptions.delete(t),this.instances.delete(t)}async delete(){const t=Array.from(this.instances.values());await Promise.all([...t.filter(i=>"INTERNAL"in i).map(i=>i.INTERNAL.delete()),...t.filter(i=>"_delete"in i).map(i=>i._delete())])}isComponentSet(){return this.component!=null}isInitialized(t=ws){return this.instances.has(t)}getOptions(t=ws){return this.instancesOptions.get(t)||{}}initialize(t={}){const{options:i={}}=t,a=this.normalizeInstanceIdentifier(t.instanceIdentifier);if(this.isInitialized(a))throw Error(`${this.name}(${a}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const l=this.getOrInitializeService({instanceIdentifier:a,options:i});for(const[f,d]of this.instancesDeferred.entries()){const p=this.normalizeInstanceIdentifier(f);a===p&&d.resolve(l)}return l}onInit(t,i){var a;const l=this.normalizeInstanceIdentifier(i),f=(a=this.onInitCallbacks.get(l))!==null&&a!==void 0?a:new Set;f.add(t),this.onInitCallbacks.set(l,f);const d=this.instances.get(l);return d&&t(d,l),()=>{f.delete(t)}}invokeOnInitCallbacks(t,i){const a=this.onInitCallbacks.get(i);if(a)for(const l of a)try{l(t,i)}catch{}}getOrInitializeService({instanceIdentifier:t,options:i={}}){let a=this.instances.get(t);if(!a&&this.component&&(a=this.component.instanceFactory(this.container,{instanceIdentifier:sA(t),options:i}),this.instances.set(t,a),this.instancesOptions.set(t,i),this.invokeOnInitCallbacks(a,t),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,t,a)}catch{}return a||null}normalizeInstanceIdentifier(t=ws){return this.component?this.component.multipleInstances?t:ws:t}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function sA(r){return r===ws?void 0:r}function aA(r){return r.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oA{constructor(t){this.name=t,this.providers=new Map}addComponent(t){const i=this.getProvider(t.name);if(i.isComponentSet())throw new Error(`Component ${t.name} has already been registered with ${this.name}`);i.setComponent(t)}addOrOverwriteComponent(t){this.getProvider(t.name).isComponentSet()&&this.providers.delete(t.name),this.addComponent(t)}getProvider(t){if(this.providers.has(t))return this.providers.get(t);const i=new rA(t,this);return this.providers.set(t,i),i}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var vt;(function(r){r[r.DEBUG=0]="DEBUG",r[r.VERBOSE=1]="VERBOSE",r[r.INFO=2]="INFO",r[r.WARN=3]="WARN",r[r.ERROR=4]="ERROR",r[r.SILENT=5]="SILENT"})(vt||(vt={}));const lA={debug:vt.DEBUG,verbose:vt.VERBOSE,info:vt.INFO,warn:vt.WARN,error:vt.ERROR,silent:vt.SILENT},uA=vt.INFO,cA={[vt.DEBUG]:"log",[vt.VERBOSE]:"log",[vt.INFO]:"info",[vt.WARN]:"warn",[vt.ERROR]:"error"},fA=(r,t,...i)=>{if(t<r.logLevel)return;const a=new Date().toISOString(),l=cA[t];if(l)console[l](`[${a}]  ${r.name}:`,...i);else throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`)};class Bc{constructor(t){this.name=t,this._logLevel=uA,this._logHandler=fA,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(t){if(!(t in vt))throw new TypeError(`Invalid value "${t}" assigned to \`logLevel\``);this._logLevel=t}setLogLevel(t){this._logLevel=typeof t=="string"?lA[t]:t}get logHandler(){return this._logHandler}set logHandler(t){if(typeof t!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=t}get userLogHandler(){return this._userLogHandler}set userLogHandler(t){this._userLogHandler=t}debug(...t){this._userLogHandler&&this._userLogHandler(this,vt.DEBUG,...t),this._logHandler(this,vt.DEBUG,...t)}log(...t){this._userLogHandler&&this._userLogHandler(this,vt.VERBOSE,...t),this._logHandler(this,vt.VERBOSE,...t)}info(...t){this._userLogHandler&&this._userLogHandler(this,vt.INFO,...t),this._logHandler(this,vt.INFO,...t)}warn(...t){this._userLogHandler&&this._userLogHandler(this,vt.WARN,...t),this._logHandler(this,vt.WARN,...t)}error(...t){this._userLogHandler&&this._userLogHandler(this,vt.ERROR,...t),this._logHandler(this,vt.ERROR,...t)}}const hA=(r,t)=>t.some(i=>r instanceof i);let qy,Fy;function dA(){return qy||(qy=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function mA(){return Fy||(Fy=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Ev=new WeakMap,bd=new WeakMap,bv=new WeakMap,cd=new WeakMap,Yd=new WeakMap;function pA(r){const t=new Promise((i,a)=>{const l=()=>{r.removeEventListener("success",f),r.removeEventListener("error",d)},f=()=>{i(xr(r.result)),l()},d=()=>{a(r.error),l()};r.addEventListener("success",f),r.addEventListener("error",d)});return t.then(i=>{i instanceof IDBCursor&&Ev.set(i,r)}).catch(()=>{}),Yd.set(t,r),t}function gA(r){if(bd.has(r))return;const t=new Promise((i,a)=>{const l=()=>{r.removeEventListener("complete",f),r.removeEventListener("error",d),r.removeEventListener("abort",d)},f=()=>{i(),l()},d=()=>{a(r.error||new DOMException("AbortError","AbortError")),l()};r.addEventListener("complete",f),r.addEventListener("error",d),r.addEventListener("abort",d)});bd.set(r,t)}let Ad={get(r,t,i){if(r instanceof IDBTransaction){if(t==="done")return bd.get(r);if(t==="objectStoreNames")return r.objectStoreNames||bv.get(r);if(t==="store")return i.objectStoreNames[1]?void 0:i.objectStore(i.objectStoreNames[0])}return xr(r[t])},set(r,t,i){return r[t]=i,!0},has(r,t){return r instanceof IDBTransaction&&(t==="done"||t==="store")?!0:t in r}};function yA(r){Ad=r(Ad)}function _A(r){return r===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(t,...i){const a=r.call(fd(this),t,...i);return bv.set(a,t.sort?t.sort():[t]),xr(a)}:mA().includes(r)?function(...t){return r.apply(fd(this),t),xr(Ev.get(this))}:function(...t){return xr(r.apply(fd(this),t))}}function vA(r){return typeof r=="function"?_A(r):(r instanceof IDBTransaction&&gA(r),hA(r,dA())?new Proxy(r,Ad):r)}function xr(r){if(r instanceof IDBRequest)return pA(r);if(cd.has(r))return cd.get(r);const t=vA(r);return t!==r&&(cd.set(r,t),Yd.set(t,r)),t}const fd=r=>Yd.get(r);function Av(r,t,{blocked:i,upgrade:a,blocking:l,terminated:f}={}){const d=indexedDB.open(r,t),p=xr(d);return a&&d.addEventListener("upgradeneeded",y=>{a(xr(d.result),y.oldVersion,y.newVersion,xr(d.transaction),y)}),i&&d.addEventListener("blocked",y=>i(y.oldVersion,y.newVersion,y)),p.then(y=>{f&&y.addEventListener("close",()=>f()),l&&y.addEventListener("versionchange",v=>l(v.oldVersion,v.newVersion,v))}).catch(()=>{}),p}const TA=["get","getKey","getAll","getAllKeys","count"],EA=["put","add","delete","clear"],hd=new Map;function Gy(r,t){if(!(r instanceof IDBDatabase&&!(t in r)&&typeof t=="string"))return;if(hd.get(t))return hd.get(t);const i=t.replace(/FromIndex$/,""),a=t!==i,l=EA.includes(i);if(!(i in(a?IDBIndex:IDBObjectStore).prototype)||!(l||TA.includes(i)))return;const f=async function(d,...p){const y=this.transaction(d,l?"readwrite":"readonly");let v=y.store;return a&&(v=v.index(p.shift())),(await Promise.all([v[i](...p),l&&y.done]))[0]};return hd.set(t,f),f}yA(r=>({...r,get:(t,i,a)=>Gy(t,i)||r.get(t,i,a),has:(t,i)=>!!Gy(t,i)||r.has(t,i)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bA{constructor(t){this.container=t}getPlatformInfoString(){return this.container.getProviders().map(i=>{if(AA(i)){const a=i.getImmediate();return`${a.library}/${a.version}`}else return null}).filter(i=>i).join(" ")}}function AA(r){const t=r.getComponent();return(t==null?void 0:t.type)==="VERSION"}const Sd="@firebase/app",Ky="0.11.2";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Gi=new Bc("@firebase/app"),SA="@firebase/app-compat",wA="@firebase/analytics-compat",RA="@firebase/analytics",IA="@firebase/app-check-compat",CA="@firebase/app-check",DA="@firebase/auth",OA="@firebase/auth-compat",NA="@firebase/database",MA="@firebase/data-connect",VA="@firebase/database-compat",kA="@firebase/functions",LA="@firebase/functions-compat",UA="@firebase/installations",xA="@firebase/installations-compat",PA="@firebase/messaging",zA="@firebase/messaging-compat",BA="@firebase/performance",HA="@firebase/performance-compat",jA="@firebase/remote-config",qA="@firebase/remote-config-compat",FA="@firebase/storage",GA="@firebase/storage-compat",KA="@firebase/firestore",QA="@firebase/vertexai",YA="@firebase/firestore-compat",XA="firebase",$A="11.4.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wd="[DEFAULT]",ZA={[Sd]:"fire-core",[SA]:"fire-core-compat",[RA]:"fire-analytics",[wA]:"fire-analytics-compat",[CA]:"fire-app-check",[IA]:"fire-app-check-compat",[DA]:"fire-auth",[OA]:"fire-auth-compat",[NA]:"fire-rtdb",[MA]:"fire-data-connect",[VA]:"fire-rtdb-compat",[kA]:"fire-fn",[LA]:"fire-fn-compat",[UA]:"fire-iid",[xA]:"fire-iid-compat",[PA]:"fire-fcm",[zA]:"fire-fcm-compat",[BA]:"fire-perf",[HA]:"fire-perf-compat",[jA]:"fire-rc",[qA]:"fire-rc-compat",[FA]:"fire-gcs",[GA]:"fire-gcs-compat",[KA]:"fire-fst",[YA]:"fire-fst-compat",[QA]:"fire-vertex","fire-js":"fire-js",[XA]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vc=new Map,WA=new Map,Rd=new Map;function Qy(r,t){try{r.container.addComponent(t)}catch(i){Gi.debug(`Component ${t.name} failed to register with FirebaseApp ${r.name}`,i)}}function ui(r){const t=r.name;if(Rd.has(t))return Gi.debug(`There were multiple attempts to register component ${t}.`),!1;Rd.set(t,r);for(const i of vc.values())Qy(i,r);for(const i of WA.values())Qy(i,r);return!0}function Hs(r,t){const i=r.container.getProvider("heartbeat").getImmediate({optional:!0});return i&&i.triggerHeartbeat(),r.container.getProvider(t)}function Dn(r){return r==null?!1:r.settings!==void 0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const JA={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Pr=new Bs("app","Firebase",JA);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tS{constructor(t,i,a){this._isDeleted=!1,this._options=Object.assign({},t),this._config=Object.assign({},i),this._name=i.name,this._automaticDataCollectionEnabled=i.automaticDataCollectionEnabled,this._container=a,this.container.addComponent(new Hn("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(t){this.checkDestroyed(),this._automaticDataCollectionEnabled=t}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(t){this._isDeleted=t}checkDestroyed(){if(this.isDeleted)throw Pr.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qa=$A;function Sv(r,t={}){let i=r;typeof t!="object"&&(t={name:t});const a=Object.assign({name:wd,automaticDataCollectionEnabled:!1},t),l=a.name;if(typeof l!="string"||!l)throw Pr.create("bad-app-name",{appName:String(l)});if(i||(i=gv()),!i)throw Pr.create("no-options");const f=vc.get(l);if(f){if(Br(i,f.options)&&Br(a,f.config))return f;throw Pr.create("duplicate-app",{appName:l})}const d=new oA(l);for(const y of Rd.values())d.addComponent(y);const p=new tS(i,a,d);return vc.set(l,p),p}function Xd(r=wd){const t=vc.get(r);if(!t&&r===wd&&gv())return Sv();if(!t)throw Pr.create("no-app",{appName:r});return t}function On(r,t,i){var a;let l=(a=ZA[r])!==null&&a!==void 0?a:r;i&&(l+=`-${i}`);const f=l.match(/\s|\//),d=t.match(/\s|\//);if(f||d){const p=[`Unable to register library "${l}" with version "${t}":`];f&&p.push(`library name "${l}" contains illegal characters (whitespace or "/")`),f&&d&&p.push("and"),d&&p.push(`version name "${t}" contains illegal characters (whitespace or "/")`),Gi.warn(p.join(" "));return}ui(new Hn(`${l}-version`,()=>({library:l,version:t}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const eS="firebase-heartbeat-database",nS=1,gl="firebase-heartbeat-store";let dd=null;function wv(){return dd||(dd=Av(eS,nS,{upgrade:(r,t)=>{switch(t){case 0:try{r.createObjectStore(gl)}catch(i){console.warn(i)}}}}).catch(r=>{throw Pr.create("idb-open",{originalErrorMessage:r.message})})),dd}async function iS(r){try{const i=(await wv()).transaction(gl),a=await i.objectStore(gl).get(Rv(r));return await i.done,a}catch(t){if(t instanceof qn)Gi.warn(t.message);else{const i=Pr.create("idb-get",{originalErrorMessage:t==null?void 0:t.message});Gi.warn(i.message)}}}async function Yy(r,t){try{const a=(await wv()).transaction(gl,"readwrite");await a.objectStore(gl).put(t,Rv(r)),await a.done}catch(i){if(i instanceof qn)Gi.warn(i.message);else{const a=Pr.create("idb-set",{originalErrorMessage:i==null?void 0:i.message});Gi.warn(a.message)}}}function Rv(r){return`${r.name}!${r.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rS=1024,sS=30;class aS{constructor(t){this.container=t,this._heartbeatsCache=null;const i=this.container.getProvider("app").getImmediate();this._storage=new lS(i),this._heartbeatsCachePromise=this._storage.read().then(a=>(this._heartbeatsCache=a,a))}async triggerHeartbeat(){var t,i;try{const l=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),f=Xy();if(((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((i=this._heartbeatsCache)===null||i===void 0?void 0:i.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===f||this._heartbeatsCache.heartbeats.some(d=>d.date===f))return;if(this._heartbeatsCache.heartbeats.push({date:f,agent:l}),this._heartbeatsCache.heartbeats.length>sS){const d=uS(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(d,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(a){Gi.warn(a)}}async getHeartbeatsHeader(){var t;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const i=Xy(),{heartbeatsToSend:a,unsentEntries:l}=oS(this._heartbeatsCache.heartbeats),f=_c(JSON.stringify({version:2,heartbeats:a}));return this._heartbeatsCache.lastSentHeartbeatDate=i,l.length>0?(this._heartbeatsCache.heartbeats=l,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),f}catch(i){return Gi.warn(i),""}}}function Xy(){return new Date().toISOString().substring(0,10)}function oS(r,t=rS){const i=[];let a=r.slice();for(const l of r){const f=i.find(d=>d.agent===l.agent);if(f){if(f.dates.push(l.date),$y(i)>t){f.dates.pop();break}}else if(i.push({agent:l.agent,dates:[l.date]}),$y(i)>t){i.pop();break}a=a.slice(1)}return{heartbeatsToSend:i,unsentEntries:a}}class lS{constructor(t){this.app=t,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return vv()?Tv().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const i=await iS(this.app);return i!=null&&i.heartbeats?i:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(t){var i;if(await this._canUseIndexedDBPromise){const l=await this.read();return Yy(this.app,{lastSentHeartbeatDate:(i=t.lastSentHeartbeatDate)!==null&&i!==void 0?i:l.lastSentHeartbeatDate,heartbeats:t.heartbeats})}else return}async add(t){var i;if(await this._canUseIndexedDBPromise){const l=await this.read();return Yy(this.app,{lastSentHeartbeatDate:(i=t.lastSentHeartbeatDate)!==null&&i!==void 0?i:l.lastSentHeartbeatDate,heartbeats:[...l.heartbeats,...t.heartbeats]})}else return}}function $y(r){return _c(JSON.stringify({version:2,heartbeats:r})).length}function uS(r){if(r.length===0)return-1;let t=0,i=r[0].date;for(let a=1;a<r.length;a++)r[a].date<i&&(i=r[a].date,t=a);return t}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function cS(r){ui(new Hn("platform-logger",t=>new bA(t),"PRIVATE")),ui(new Hn("heartbeat",t=>new aS(t),"PRIVATE")),On(Sd,Ky,r),On(Sd,Ky,"esm2017"),On("fire-js","")}cS("");function $d(r,t){var i={};for(var a in r)Object.prototype.hasOwnProperty.call(r,a)&&t.indexOf(a)<0&&(i[a]=r[a]);if(r!=null&&typeof Object.getOwnPropertySymbols=="function")for(var l=0,a=Object.getOwnPropertySymbols(r);l<a.length;l++)t.indexOf(a[l])<0&&Object.prototype.propertyIsEnumerable.call(r,a[l])&&(i[a[l]]=r[a[l]]);return i}function Iv(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const fS=Iv,Cv=new Bs("auth","Firebase",Iv());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Tc=new Bc("@firebase/auth");function hS(r,...t){Tc.logLevel<=vt.WARN&&Tc.warn(`Auth (${Qa}): ${r}`,...t)}function cc(r,...t){Tc.logLevel<=vt.ERROR&&Tc.error(`Auth (${Qa}): ${r}`,...t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jn(r,...t){throw Zd(r,...t)}function oi(r,...t){return Zd(r,...t)}function Dv(r,t,i){const a=Object.assign(Object.assign({},fS()),{[t]:i});return new Bs("auth","Firebase",a).create(t,{appName:r.name})}function ji(r){return Dv(r,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function Zd(r,...t){if(typeof r!="string"){const i=t[0],a=[...t.slice(1)];return a[0]&&(a[0].appName=r.name),r._errorFactory.create(i,...a)}return Cv.create(r,...t)}function ut(r,t,...i){if(!r)throw Zd(t,...i)}function zi(r){const t="INTERNAL ASSERTION FAILED: "+r;throw cc(t),new Error(t)}function Ki(r,t){r||zi(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Id(){var r;return typeof self<"u"&&((r=self.location)===null||r===void 0?void 0:r.href)||""}function dS(){return Zy()==="http:"||Zy()==="https:"}function Zy(){var r;return typeof self<"u"&&((r=self.location)===null||r===void 0?void 0:r.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mS(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(dS()||_v()||"connection"in navigator)?navigator.onLine:!0}function pS(){if(typeof navigator>"u")return null;const r=navigator;return r.languages&&r.languages[0]||r.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rl{constructor(t,i){this.shortDelay=t,this.longDelay=i,Ki(i>t,"Short delay should be less than long delay!"),this.isMobile=Bb()||qb()}get(){return mS()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Wd(r,t){Ki(r.emulator,"Emulator should always be set here");const{url:i}=r.emulator;return t?`${i}${t.startsWith("/")?t.slice(1):t}`:i}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ov{static initialize(t,i,a){this.fetchImpl=t,i&&(this.headersImpl=i),a&&(this.responseImpl=a)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;zi("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;zi("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;zi("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gS={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yS=new Rl(3e4,6e4);function Gr(r,t){return r.tenantId&&!t.tenantId?Object.assign(Object.assign({},t),{tenantId:r.tenantId}):t}async function Kr(r,t,i,a,l={}){return Nv(r,l,async()=>{let f={},d={};a&&(t==="GET"?d=a:f={body:JSON.stringify(a)});const p=wl(Object.assign({key:r.config.apiKey},d)).slice(1),y=await r._getAdditionalHeaders();y["Content-Type"]="application/json",r.languageCode&&(y["X-Firebase-Locale"]=r.languageCode);const v=Object.assign({method:t,headers:y},f);return jb()||(v.referrerPolicy="no-referrer"),Ov.fetch()(Mv(r,r.config.apiHost,i,p),v)})}async function Nv(r,t,i){r._canInitEmulator=!1;const a=Object.assign(Object.assign({},gS),t);try{const l=new vS(r),f=await Promise.race([i(),l.promise]);l.clearNetworkTimeout();const d=await f.json();if("needConfirmation"in d)throw rc(r,"account-exists-with-different-credential",d);if(f.ok&&!("errorMessage"in d))return d;{const p=f.ok?d.errorMessage:d.error.message,[y,v]=p.split(" : ");if(y==="FEDERATED_USER_ID_ALREADY_LINKED")throw rc(r,"credential-already-in-use",d);if(y==="EMAIL_EXISTS")throw rc(r,"email-already-in-use",d);if(y==="USER_DISABLED")throw rc(r,"user-disabled",d);const I=a[y]||y.toLowerCase().replace(/[_\s]+/g,"-");if(v)throw Dv(r,I,v);jn(r,I)}}catch(l){if(l instanceof qn)throw l;jn(r,"network-request-failed",{message:String(l)})}}async function Il(r,t,i,a,l={}){const f=await Kr(r,t,i,a,l);return"mfaPendingCredential"in f&&jn(r,"multi-factor-auth-required",{_serverResponse:f}),f}function Mv(r,t,i,a){const l=`${t}${i}?${a}`;return r.config.emulator?Wd(r.config,l):`${r.config.apiScheme}://${l}`}function _S(r){switch(r){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class vS{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(t){this.auth=t,this.timer=null,this.promise=new Promise((i,a)=>{this.timer=setTimeout(()=>a(oi(this.auth,"network-request-failed")),yS.get())})}}function rc(r,t,i){const a={appName:r.name};i.email&&(a.email=i.email),i.phoneNumber&&(a.phoneNumber=i.phoneNumber);const l=oi(r,t,a);return l.customData._tokenResponse=i,l}function Wy(r){return r!==void 0&&r.enterprise!==void 0}class TS{constructor(t){if(this.siteKey="",this.recaptchaEnforcementState=[],t.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=t.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=t.recaptchaEnforcementState}getProviderEnforcementState(t){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const i of this.recaptchaEnforcementState)if(i.provider&&i.provider===t)return _S(i.enforcementState);return null}isProviderEnabled(t){return this.getProviderEnforcementState(t)==="ENFORCE"||this.getProviderEnforcementState(t)==="AUDIT"}isAnyProviderEnabled(){return this.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")||this.isProviderEnabled("PHONE_PROVIDER")}}async function ES(r,t){return Kr(r,"GET","/v2/recaptchaConfig",Gr(r,t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function bS(r,t){return Kr(r,"POST","/v1/accounts:delete",t)}async function Vv(r,t){return Kr(r,"POST","/v1/accounts:lookup",t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function cl(r){if(r)try{const t=new Date(Number(r));if(!isNaN(t.getTime()))return t.toUTCString()}catch{}}async function AS(r,t=!1){const i=He(r),a=await i.getIdToken(t),l=Jd(a);ut(l&&l.exp&&l.auth_time&&l.iat,i.auth,"internal-error");const f=typeof l.firebase=="object"?l.firebase:void 0,d=f==null?void 0:f.sign_in_provider;return{claims:l,token:a,authTime:cl(md(l.auth_time)),issuedAtTime:cl(md(l.iat)),expirationTime:cl(md(l.exp)),signInProvider:d||null,signInSecondFactor:(f==null?void 0:f.sign_in_second_factor)||null}}function md(r){return Number(r)*1e3}function Jd(r){const[t,i,a]=r.split(".");if(t===void 0||i===void 0||a===void 0)return cc("JWT malformed, contained fewer than 3 sections"),null;try{const l=mv(i);return l?JSON.parse(l):(cc("Failed to decode base64 JWT payload"),null)}catch(l){return cc("Caught error parsing JWT payload as JSON",l==null?void 0:l.toString()),null}}function Jy(r){const t=Jd(r);return ut(t,"internal-error"),ut(typeof t.exp<"u","internal-error"),ut(typeof t.iat<"u","internal-error"),Number(t.exp)-Number(t.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function yl(r,t,i=!1){if(i)return t;try{return await t}catch(a){throw a instanceof qn&&SS(a)&&r.auth.currentUser===r&&await r.auth.signOut(),a}}function SS({code:r}){return r==="auth/user-disabled"||r==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wS{constructor(t){this.user=t,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(t){var i;if(t){const a=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),a}else{this.errorBackoff=3e4;const l=((i=this.user.stsTokenManager.expirationTime)!==null&&i!==void 0?i:0)-Date.now()-3e5;return Math.max(0,l)}}schedule(t=!1){if(!this.isRunning)return;const i=this.getInterval(t);this.timerId=setTimeout(async()=>{await this.iteration()},i)}async iteration(){try{await this.user.getIdToken(!0)}catch(t){(t==null?void 0:t.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cd{constructor(t,i){this.createdAt=t,this.lastLoginAt=i,this._initializeTime()}_initializeTime(){this.lastSignInTime=cl(this.lastLoginAt),this.creationTime=cl(this.createdAt)}_copy(t){this.createdAt=t.createdAt,this.lastLoginAt=t.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ec(r){var t;const i=r.auth,a=await r.getIdToken(),l=await yl(r,Vv(i,{idToken:a}));ut(l==null?void 0:l.users.length,i,"internal-error");const f=l.users[0];r._notifyReloadListener(f);const d=!((t=f.providerUserInfo)===null||t===void 0)&&t.length?kv(f.providerUserInfo):[],p=IS(r.providerData,d),y=r.isAnonymous,v=!(r.email&&f.passwordHash)&&!(p!=null&&p.length),I=y?v:!1,D={uid:f.localId,displayName:f.displayName||null,photoURL:f.photoUrl||null,email:f.email||null,emailVerified:f.emailVerified||!1,phoneNumber:f.phoneNumber||null,tenantId:f.tenantId||null,providerData:p,metadata:new Cd(f.createdAt,f.lastLoginAt),isAnonymous:I};Object.assign(r,D)}async function RS(r){const t=He(r);await Ec(t),await t.auth._persistUserIfCurrent(t),t.auth._notifyListenersIfCurrent(t)}function IS(r,t){return[...r.filter(a=>!t.some(l=>l.providerId===a.providerId)),...t]}function kv(r){return r.map(t=>{var{providerId:i}=t,a=$d(t,["providerId"]);return{providerId:i,uid:a.rawId||"",displayName:a.displayName||null,email:a.email||null,phoneNumber:a.phoneNumber||null,photoURL:a.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function CS(r,t){const i=await Nv(r,{},async()=>{const a=wl({grant_type:"refresh_token",refresh_token:t}).slice(1),{tokenApiHost:l,apiKey:f}=r.config,d=Mv(r,l,"/v1/token",`key=${f}`),p=await r._getAdditionalHeaders();return p["Content-Type"]="application/x-www-form-urlencoded",Ov.fetch()(d,{method:"POST",headers:p,body:a})});return{accessToken:i.access_token,expiresIn:i.expires_in,refreshToken:i.refresh_token}}async function DS(r,t){return Kr(r,"POST","/v2/accounts:revokeToken",Gr(r,t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pa{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(t){ut(t.idToken,"internal-error"),ut(typeof t.idToken<"u","internal-error"),ut(typeof t.refreshToken<"u","internal-error");const i="expiresIn"in t&&typeof t.expiresIn<"u"?Number(t.expiresIn):Jy(t.idToken);this.updateTokensAndExpiration(t.idToken,t.refreshToken,i)}updateFromIdToken(t){ut(t.length!==0,"internal-error");const i=Jy(t);this.updateTokensAndExpiration(t,null,i)}async getToken(t,i=!1){return!i&&this.accessToken&&!this.isExpired?this.accessToken:(ut(this.refreshToken,t,"user-token-expired"),this.refreshToken?(await this.refresh(t,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(t,i){const{accessToken:a,refreshToken:l,expiresIn:f}=await CS(t,i);this.updateTokensAndExpiration(a,l,Number(f))}updateTokensAndExpiration(t,i,a){this.refreshToken=i||null,this.accessToken=t||null,this.expirationTime=Date.now()+a*1e3}static fromJSON(t,i){const{refreshToken:a,accessToken:l,expirationTime:f}=i,d=new Pa;return a&&(ut(typeof a=="string","internal-error",{appName:t}),d.refreshToken=a),l&&(ut(typeof l=="string","internal-error",{appName:t}),d.accessToken=l),f&&(ut(typeof f=="number","internal-error",{appName:t}),d.expirationTime=f),d}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(t){this.accessToken=t.accessToken,this.refreshToken=t.refreshToken,this.expirationTime=t.expirationTime}_clone(){return Object.assign(new Pa,this.toJSON())}_performRefresh(){return zi("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Mr(r,t){ut(typeof r=="string"||typeof r>"u","internal-error",{appName:t})}class Bi{constructor(t){var{uid:i,auth:a,stsTokenManager:l}=t,f=$d(t,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new wS(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=i,this.auth=a,this.stsTokenManager=l,this.accessToken=l.accessToken,this.displayName=f.displayName||null,this.email=f.email||null,this.emailVerified=f.emailVerified||!1,this.phoneNumber=f.phoneNumber||null,this.photoURL=f.photoURL||null,this.isAnonymous=f.isAnonymous||!1,this.tenantId=f.tenantId||null,this.providerData=f.providerData?[...f.providerData]:[],this.metadata=new Cd(f.createdAt||void 0,f.lastLoginAt||void 0)}async getIdToken(t){const i=await yl(this,this.stsTokenManager.getToken(this.auth,t));return ut(i,this.auth,"internal-error"),this.accessToken!==i&&(this.accessToken=i,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),i}getIdTokenResult(t){return AS(this,t)}reload(){return RS(this)}_assign(t){this!==t&&(ut(this.uid===t.uid,this.auth,"internal-error"),this.displayName=t.displayName,this.photoURL=t.photoURL,this.email=t.email,this.emailVerified=t.emailVerified,this.phoneNumber=t.phoneNumber,this.isAnonymous=t.isAnonymous,this.tenantId=t.tenantId,this.providerData=t.providerData.map(i=>Object.assign({},i)),this.metadata._copy(t.metadata),this.stsTokenManager._assign(t.stsTokenManager))}_clone(t){const i=new Bi(Object.assign(Object.assign({},this),{auth:t,stsTokenManager:this.stsTokenManager._clone()}));return i.metadata._copy(this.metadata),i}_onReload(t){ut(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=t,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(t){this.reloadListener?this.reloadListener(t):this.reloadUserInfo=t}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(t,i=!1){let a=!1;t.idToken&&t.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(t),a=!0),i&&await Ec(this),await this.auth._persistUserIfCurrent(this),a&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(Dn(this.auth.app))return Promise.reject(ji(this.auth));const t=await this.getIdToken();return await yl(this,bS(this.auth,{idToken:t})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(t=>Object.assign({},t)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(t,i){var a,l,f,d,p,y,v,I;const D=(a=i.displayName)!==null&&a!==void 0?a:void 0,z=(l=i.email)!==null&&l!==void 0?l:void 0,q=(f=i.phoneNumber)!==null&&f!==void 0?f:void 0,Q=(d=i.photoURL)!==null&&d!==void 0?d:void 0,W=(p=i.tenantId)!==null&&p!==void 0?p:void 0,Y=(y=i._redirectEventId)!==null&&y!==void 0?y:void 0,et=(v=i.createdAt)!==null&&v!==void 0?v:void 0,X=(I=i.lastLoginAt)!==null&&I!==void 0?I:void 0,{uid:Z,emailVerified:it,isAnonymous:pt,providerData:ft,stsTokenManager:C}=i;ut(Z&&C,t,"internal-error");const A=Pa.fromJSON(this.name,C);ut(typeof Z=="string",t,"internal-error"),Mr(D,t.name),Mr(z,t.name),ut(typeof it=="boolean",t,"internal-error"),ut(typeof pt=="boolean",t,"internal-error"),Mr(q,t.name),Mr(Q,t.name),Mr(W,t.name),Mr(Y,t.name),Mr(et,t.name),Mr(X,t.name);const b=new Bi({uid:Z,auth:t,email:z,emailVerified:it,displayName:D,isAnonymous:pt,photoURL:Q,phoneNumber:q,tenantId:W,stsTokenManager:A,createdAt:et,lastLoginAt:X});return ft&&Array.isArray(ft)&&(b.providerData=ft.map(R=>Object.assign({},R))),Y&&(b._redirectEventId=Y),b}static async _fromIdTokenResponse(t,i,a=!1){const l=new Pa;l.updateFromServerResponse(i);const f=new Bi({uid:i.localId,auth:t,stsTokenManager:l,isAnonymous:a});return await Ec(f),f}static async _fromGetAccountInfoResponse(t,i,a){const l=i.users[0];ut(l.localId!==void 0,"internal-error");const f=l.providerUserInfo!==void 0?kv(l.providerUserInfo):[],d=!(l.email&&l.passwordHash)&&!(f!=null&&f.length),p=new Pa;p.updateFromIdToken(a);const y=new Bi({uid:l.localId,auth:t,stsTokenManager:p,isAnonymous:d}),v={uid:l.localId,displayName:l.displayName||null,photoURL:l.photoUrl||null,email:l.email||null,emailVerified:l.emailVerified||!1,phoneNumber:l.phoneNumber||null,tenantId:l.tenantId||null,providerData:f,metadata:new Cd(l.createdAt,l.lastLoginAt),isAnonymous:!(l.email&&l.passwordHash)&&!(f!=null&&f.length)};return Object.assign(y,v),y}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const t_=new Map;function Hi(r){Ki(r instanceof Function,"Expected a class definition");let t=t_.get(r);return t?(Ki(t instanceof r,"Instance stored in cache mismatched with class"),t):(t=new r,t_.set(r,t),t)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lv{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(t,i){this.storage[t]=i}async _get(t){const i=this.storage[t];return i===void 0?null:i}async _remove(t){delete this.storage[t]}_addListener(t,i){}_removeListener(t,i){}}Lv.type="NONE";const e_=Lv;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fc(r,t,i){return`firebase:${r}:${t}:${i}`}class za{constructor(t,i,a){this.persistence=t,this.auth=i,this.userKey=a;const{config:l,name:f}=this.auth;this.fullUserKey=fc(this.userKey,l.apiKey,f),this.fullPersistenceKey=fc("persistence",l.apiKey,f),this.boundEventHandler=i._onStorageEvent.bind(i),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(t){return this.persistence._set(this.fullUserKey,t.toJSON())}async getCurrentUser(){const t=await this.persistence._get(this.fullUserKey);return t?Bi._fromJSON(this.auth,t):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(t){if(this.persistence===t)return;const i=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=t,i)return this.setCurrentUser(i)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(t,i,a="authUser"){if(!i.length)return new za(Hi(e_),t,a);const l=(await Promise.all(i.map(async v=>{if(await v._isAvailable())return v}))).filter(v=>v);let f=l[0]||Hi(e_);const d=fc(a,t.config.apiKey,t.name);let p=null;for(const v of i)try{const I=await v._get(d);if(I){const D=Bi._fromJSON(t,I);v!==f&&(p=D),f=v;break}}catch{}const y=l.filter(v=>v._shouldAllowMigration);return!f._shouldAllowMigration||!y.length?new za(f,t,a):(f=y[0],p&&await f._set(d,p.toJSON()),await Promise.all(i.map(async v=>{if(v!==f)try{await v._remove(d)}catch{}})),new za(f,t,a))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function n_(r){const t=r.toLowerCase();if(t.includes("opera/")||t.includes("opr/")||t.includes("opios/"))return"Opera";if(zv(t))return"IEMobile";if(t.includes("msie")||t.includes("trident/"))return"IE";if(t.includes("edge/"))return"Edge";if(Uv(t))return"Firefox";if(t.includes("silk/"))return"Silk";if(Hv(t))return"Blackberry";if(jv(t))return"Webos";if(xv(t))return"Safari";if((t.includes("chrome/")||Pv(t))&&!t.includes("edge/"))return"Chrome";if(Bv(t))return"Android";{const i=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,a=r.match(i);if((a==null?void 0:a.length)===2)return a[1]}return"Other"}function Uv(r=Be()){return/firefox\//i.test(r)}function xv(r=Be()){const t=r.toLowerCase();return t.includes("safari/")&&!t.includes("chrome/")&&!t.includes("crios/")&&!t.includes("android")}function Pv(r=Be()){return/crios\//i.test(r)}function zv(r=Be()){return/iemobile/i.test(r)}function Bv(r=Be()){return/android/i.test(r)}function Hv(r=Be()){return/blackberry/i.test(r)}function jv(r=Be()){return/webos/i.test(r)}function tm(r=Be()){return/iphone|ipad|ipod/i.test(r)||/macintosh/i.test(r)&&/mobile/i.test(r)}function OS(r=Be()){var t;return tm(r)&&!!(!((t=window.navigator)===null||t===void 0)&&t.standalone)}function NS(){return Fb()&&document.documentMode===10}function qv(r=Be()){return tm(r)||Bv(r)||jv(r)||Hv(r)||/windows phone/i.test(r)||zv(r)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Fv(r,t=[]){let i;switch(r){case"Browser":i=n_(Be());break;case"Worker":i=`${n_(Be())}-${r}`;break;default:i=r}const a=t.length?t.join(","):"FirebaseCore-web";return`${i}/JsCore/${Qa}/${a}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class MS{constructor(t){this.auth=t,this.queue=[]}pushCallback(t,i){const a=f=>new Promise((d,p)=>{try{const y=t(f);d(y)}catch(y){p(y)}});a.onAbort=i,this.queue.push(a);const l=this.queue.length-1;return()=>{this.queue[l]=()=>Promise.resolve()}}async runMiddleware(t){if(this.auth.currentUser===t)return;const i=[];try{for(const a of this.queue)await a(t),a.onAbort&&i.push(a.onAbort)}catch(a){i.reverse();for(const l of i)try{l()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:a==null?void 0:a.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function VS(r,t={}){return Kr(r,"GET","/v2/passwordPolicy",Gr(r,t))}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kS=6;class LS{constructor(t){var i,a,l,f;const d=t.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(i=d.minPasswordLength)!==null&&i!==void 0?i:kS,d.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=d.maxPasswordLength),d.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=d.containsLowercaseCharacter),d.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=d.containsUppercaseCharacter),d.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=d.containsNumericCharacter),d.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=d.containsNonAlphanumericCharacter),this.enforcementState=t.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(l=(a=t.allowedNonAlphanumericCharacters)===null||a===void 0?void 0:a.join(""))!==null&&l!==void 0?l:"",this.forceUpgradeOnSignin=(f=t.forceUpgradeOnSignin)!==null&&f!==void 0?f:!1,this.schemaVersion=t.schemaVersion}validatePassword(t){var i,a,l,f,d,p;const y={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(t,y),this.validatePasswordCharacterOptions(t,y),y.isValid&&(y.isValid=(i=y.meetsMinPasswordLength)!==null&&i!==void 0?i:!0),y.isValid&&(y.isValid=(a=y.meetsMaxPasswordLength)!==null&&a!==void 0?a:!0),y.isValid&&(y.isValid=(l=y.containsLowercaseLetter)!==null&&l!==void 0?l:!0),y.isValid&&(y.isValid=(f=y.containsUppercaseLetter)!==null&&f!==void 0?f:!0),y.isValid&&(y.isValid=(d=y.containsNumericCharacter)!==null&&d!==void 0?d:!0),y.isValid&&(y.isValid=(p=y.containsNonAlphanumericCharacter)!==null&&p!==void 0?p:!0),y}validatePasswordLengthOptions(t,i){const a=this.customStrengthOptions.minPasswordLength,l=this.customStrengthOptions.maxPasswordLength;a&&(i.meetsMinPasswordLength=t.length>=a),l&&(i.meetsMaxPasswordLength=t.length<=l)}validatePasswordCharacterOptions(t,i){this.updatePasswordCharacterOptionsStatuses(i,!1,!1,!1,!1);let a;for(let l=0;l<t.length;l++)a=t.charAt(l),this.updatePasswordCharacterOptionsStatuses(i,a>="a"&&a<="z",a>="A"&&a<="Z",a>="0"&&a<="9",this.allowedNonAlphanumericCharacters.includes(a))}updatePasswordCharacterOptionsStatuses(t,i,a,l,f){this.customStrengthOptions.containsLowercaseLetter&&(t.containsLowercaseLetter||(t.containsLowercaseLetter=i)),this.customStrengthOptions.containsUppercaseLetter&&(t.containsUppercaseLetter||(t.containsUppercaseLetter=a)),this.customStrengthOptions.containsNumericCharacter&&(t.containsNumericCharacter||(t.containsNumericCharacter=l)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(t.containsNonAlphanumericCharacter||(t.containsNonAlphanumericCharacter=f))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class US{constructor(t,i,a,l){this.app=t,this.heartbeatServiceProvider=i,this.appCheckServiceProvider=a,this.config=l,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new i_(this),this.idTokenSubscription=new i_(this),this.beforeStateQueue=new MS(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Cv,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=t.name,this.clientVersion=l.sdkClientVersion}_initializeWithPersistence(t,i){return i&&(this._popupRedirectResolver=Hi(i)),this._initializationPromise=this.queue(async()=>{var a,l;if(!this._deleted&&(this.persistenceManager=await za.create(this,t),!this._deleted)){if(!((a=this._popupRedirectResolver)===null||a===void 0)&&a._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(i),this.lastNotifiedUid=((l=this.currentUser)===null||l===void 0?void 0:l.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const t=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!t)){if(this.currentUser&&t&&this.currentUser.uid===t.uid){this._currentUser._assign(t),await this.currentUser.getIdToken();return}await this._updateCurrentUser(t,!0)}}async initializeCurrentUserFromIdToken(t){try{const i=await Vv(this,{idToken:t}),a=await Bi._fromGetAccountInfoResponse(this,i,t);await this.directlySetCurrentUser(a)}catch(i){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",i),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(t){var i;if(Dn(this.app)){const d=this.app.settings.authIdToken;return d?new Promise(p=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(d).then(p,p))}):this.directlySetCurrentUser(null)}const a=await this.assertedPersistence.getCurrentUser();let l=a,f=!1;if(t&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const d=(i=this.redirectUser)===null||i===void 0?void 0:i._redirectEventId,p=l==null?void 0:l._redirectEventId,y=await this.tryRedirectSignIn(t);(!d||d===p)&&(y!=null&&y.user)&&(l=y.user,f=!0)}if(!l)return this.directlySetCurrentUser(null);if(!l._redirectEventId){if(f)try{await this.beforeStateQueue.runMiddleware(l)}catch(d){l=a,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(d))}return l?this.reloadAndSetCurrentUserOrClear(l):this.directlySetCurrentUser(null)}return ut(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===l._redirectEventId?this.directlySetCurrentUser(l):this.reloadAndSetCurrentUserOrClear(l)}async tryRedirectSignIn(t){let i=null;try{i=await this._popupRedirectResolver._completeRedirectFn(this,t,!0)}catch{await this._setRedirectUser(null)}return i}async reloadAndSetCurrentUserOrClear(t){try{await Ec(t)}catch(i){if((i==null?void 0:i.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(t)}useDeviceLanguage(){this.languageCode=pS()}async _delete(){this._deleted=!0}async updateCurrentUser(t){if(Dn(this.app))return Promise.reject(ji(this));const i=t?He(t):null;return i&&ut(i.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(i&&i._clone(this))}async _updateCurrentUser(t,i=!1){if(!this._deleted)return t&&ut(this.tenantId===t.tenantId,this,"tenant-id-mismatch"),i||await this.beforeStateQueue.runMiddleware(t),this.queue(async()=>{await this.directlySetCurrentUser(t),this.notifyAuthListeners()})}async signOut(){return Dn(this.app)?Promise.reject(ji(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(t){return Dn(this.app)?Promise.reject(ji(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(Hi(t))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(t){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const i=this._getPasswordPolicyInternal();return i.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):i.validatePassword(t)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const t=await VS(this),i=new LS(t);this.tenantId===null?this._projectPasswordPolicy=i:this._tenantPasswordPolicies[this.tenantId]=i}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(t){this._errorFactory=new Bs("auth","Firebase",t())}onAuthStateChanged(t,i,a){return this.registerStateListener(this.authStateSubscription,t,i,a)}beforeAuthStateChanged(t,i){return this.beforeStateQueue.pushCallback(t,i)}onIdTokenChanged(t,i,a){return this.registerStateListener(this.idTokenSubscription,t,i,a)}authStateReady(){return new Promise((t,i)=>{if(this.currentUser)t();else{const a=this.onAuthStateChanged(()=>{a(),t()},i)}})}async revokeAccessToken(t){if(this.currentUser){const i=await this.currentUser.getIdToken(),a={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:t,idToken:i};this.tenantId!=null&&(a.tenantId=this.tenantId),await DS(this,a)}}toJSON(){var t;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(t=this._currentUser)===null||t===void 0?void 0:t.toJSON()}}async _setRedirectUser(t,i){const a=await this.getOrInitRedirectPersistenceManager(i);return t===null?a.removeCurrentUser():a.setCurrentUser(t)}async getOrInitRedirectPersistenceManager(t){if(!this.redirectPersistenceManager){const i=t&&Hi(t)||this._popupRedirectResolver;ut(i,this,"argument-error"),this.redirectPersistenceManager=await za.create(this,[Hi(i._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(t){var i,a;return this._isInitialized&&await this.queue(async()=>{}),((i=this._currentUser)===null||i===void 0?void 0:i._redirectEventId)===t?this._currentUser:((a=this.redirectUser)===null||a===void 0?void 0:a._redirectEventId)===t?this.redirectUser:null}async _persistUserIfCurrent(t){if(t===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(t))}_notifyListenersIfCurrent(t){t===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var t,i;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const a=(i=(t=this.currentUser)===null||t===void 0?void 0:t.uid)!==null&&i!==void 0?i:null;this.lastNotifiedUid!==a&&(this.lastNotifiedUid=a,this.authStateSubscription.next(this.currentUser))}registerStateListener(t,i,a,l){if(this._deleted)return()=>{};const f=typeof i=="function"?i:i.next.bind(i);let d=!1;const p=this._isInitialized?Promise.resolve():this._initializationPromise;if(ut(p,this,"internal-error"),p.then(()=>{d||f(this.currentUser)}),typeof i=="function"){const y=t.addObserver(i,a,l);return()=>{d=!0,y()}}else{const y=t.addObserver(i);return()=>{d=!0,y()}}}async directlySetCurrentUser(t){this.currentUser&&this.currentUser!==t&&this._currentUser._stopProactiveRefresh(),t&&this.isProactiveRefreshEnabled&&t._startProactiveRefresh(),this.currentUser=t,t?await this.assertedPersistence.setCurrentUser(t):await this.assertedPersistence.removeCurrentUser()}queue(t){return this.operations=this.operations.then(t,t),this.operations}get assertedPersistence(){return ut(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(t){!t||this.frameworks.includes(t)||(this.frameworks.push(t),this.frameworks.sort(),this.clientVersion=Fv(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var t;const i={"X-Client-Version":this.clientVersion};this.app.options.appId&&(i["X-Firebase-gmpid"]=this.app.options.appId);const a=await((t=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||t===void 0?void 0:t.getHeartbeatsHeader());a&&(i["X-Firebase-Client"]=a);const l=await this._getAppCheckToken();return l&&(i["X-Firebase-AppCheck"]=l),i}async _getAppCheckToken(){var t;if(Dn(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const i=await((t=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||t===void 0?void 0:t.getToken());return i!=null&&i.error&&hS(`Error while retrieving App Check token: ${i.error}`),i==null?void 0:i.token}}function js(r){return He(r)}class i_{constructor(t){this.auth=t,this.observer=null,this.addObserver=Zb(i=>this.observer=i)}get next(){return ut(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Hc={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function xS(r){Hc=r}function Gv(r){return Hc.loadJS(r)}function PS(){return Hc.recaptchaEnterpriseScript}function zS(){return Hc.gapiScript}function BS(r){return`__${r}${Math.floor(Math.random()*1e6)}`}class HS{constructor(){this.enterprise=new jS}ready(t){t()}execute(t,i){return Promise.resolve("token")}render(t,i){return""}}class jS{ready(t){t()}execute(t,i){return Promise.resolve("token")}render(t,i){return""}}const qS="recaptcha-enterprise",Kv="NO_RECAPTCHA";class FS{constructor(t){this.type=qS,this.auth=js(t)}async verify(t="verify",i=!1){async function a(f){if(!i){if(f.tenantId==null&&f._agentRecaptchaConfig!=null)return f._agentRecaptchaConfig.siteKey;if(f.tenantId!=null&&f._tenantRecaptchaConfigs[f.tenantId]!==void 0)return f._tenantRecaptchaConfigs[f.tenantId].siteKey}return new Promise(async(d,p)=>{ES(f,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(y=>{if(y.recaptchaKey===void 0)p(new Error("recaptcha Enterprise site key undefined"));else{const v=new TS(y);return f.tenantId==null?f._agentRecaptchaConfig=v:f._tenantRecaptchaConfigs[f.tenantId]=v,d(v.siteKey)}}).catch(y=>{p(y)})})}function l(f,d,p){const y=window.grecaptcha;Wy(y)?y.enterprise.ready(()=>{y.enterprise.execute(f,{action:t}).then(v=>{d(v)}).catch(()=>{d(Kv)})}):p(Error("No reCAPTCHA enterprise script loaded."))}return this.auth.settings.appVerificationDisabledForTesting?new HS().execute("siteKey",{action:"verify"}):new Promise((f,d)=>{a(this.auth).then(p=>{if(!i&&Wy(window.grecaptcha))l(p,f,d);else{if(typeof window>"u"){d(new Error("RecaptchaVerifier is only supported in browser"));return}let y=PS();y.length!==0&&(y+=p),Gv(y).then(()=>{l(p,f,d)}).catch(v=>{d(v)})}}).catch(p=>{d(p)})})}}async function r_(r,t,i,a=!1,l=!1){const f=new FS(r);let d;if(l)d=Kv;else try{d=await f.verify(i)}catch{d=await f.verify(i,!0)}const p=Object.assign({},t);if(i==="mfaSmsEnrollment"||i==="mfaSmsSignIn"){if("phoneEnrollmentInfo"in p){const y=p.phoneEnrollmentInfo.phoneNumber,v=p.phoneEnrollmentInfo.recaptchaToken;Object.assign(p,{phoneEnrollmentInfo:{phoneNumber:y,recaptchaToken:v,captchaResponse:d,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}else if("phoneSignInInfo"in p){const y=p.phoneSignInInfo.recaptchaToken;Object.assign(p,{phoneSignInInfo:{recaptchaToken:y,captchaResponse:d,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}return p}return a?Object.assign(p,{captchaResp:d}):Object.assign(p,{captchaResponse:d}),Object.assign(p,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(p,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),p}async function Dd(r,t,i,a,l){var f;if(!((f=r._getRecaptchaConfig())===null||f===void 0)&&f.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const d=await r_(r,t,i,i==="getOobCode");return a(r,d)}else return a(r,t).catch(async d=>{if(d.code==="auth/missing-recaptcha-token"){console.log(`${i} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const p=await r_(r,t,i,i==="getOobCode");return a(r,p)}else return Promise.reject(d)})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function GS(r,t){const i=Hs(r,"auth");if(i.isInitialized()){const l=i.getImmediate(),f=i.getOptions();if(Br(f,t??{}))return l;jn(l,"already-initialized")}return i.initialize({options:t})}function KS(r,t){const i=(t==null?void 0:t.persistence)||[],a=(Array.isArray(i)?i:[i]).map(Hi);t!=null&&t.errorMap&&r._updateErrorMap(t.errorMap),r._initializeWithPersistence(a,t==null?void 0:t.popupRedirectResolver)}function QS(r,t,i){const a=js(r);ut(/^https?:\/\//.test(t),a,"invalid-emulator-scheme");const l=!1,f=Qv(t),{host:d,port:p}=YS(t),y=p===null?"":`:${p}`,v={url:`${f}//${d}${y}/`},I=Object.freeze({host:d,port:p,protocol:f.replace(":",""),options:Object.freeze({disableWarnings:l})});if(!a._canInitEmulator){ut(a.config.emulator&&a.emulatorConfig,a,"emulator-config-failed"),ut(Br(v,a.config.emulator)&&Br(I,a.emulatorConfig),a,"emulator-config-failed");return}a.config.emulator=v,a.emulatorConfig=I,a.settings.appVerificationDisabledForTesting=!0,XS()}function Qv(r){const t=r.indexOf(":");return t<0?"":r.substr(0,t+1)}function YS(r){const t=Qv(r),i=/(\/\/)?([^?#/]+)/.exec(r.substr(t.length));if(!i)return{host:"",port:null};const a=i[2].split("@").pop()||"",l=/^(\[[^\]]+\])(:|$)/.exec(a);if(l){const f=l[1];return{host:f,port:s_(a.substr(f.length+1))}}else{const[f,d]=a.split(":");return{host:f,port:s_(d)}}}function s_(r){if(!r)return null;const t=Number(r);return isNaN(t)?null:t}function XS(){function r(){const t=document.createElement("p"),i=t.style;t.innerText="Running in emulator mode. Do not use with production credentials.",i.position="fixed",i.width="100%",i.backgroundColor="#ffffff",i.border=".1em solid #000000",i.color="#b50000",i.bottom="0px",i.left="0px",i.margin="0px",i.zIndex="10000",i.textAlign="center",t.classList.add("firebase-emulator-warning"),document.body.appendChild(t)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",r):r())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class em{constructor(t,i){this.providerId=t,this.signInMethod=i}toJSON(){return zi("not implemented")}_getIdTokenResponse(t){return zi("not implemented")}_linkToIdToken(t,i){return zi("not implemented")}_getReauthenticationResolver(t){return zi("not implemented")}}async function $S(r,t){return Kr(r,"POST","/v1/accounts:signUp",t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ZS(r,t){return Il(r,"POST","/v1/accounts:signInWithPassword",Gr(r,t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function WS(r,t){return Il(r,"POST","/v1/accounts:signInWithEmailLink",Gr(r,t))}async function JS(r,t){return Il(r,"POST","/v1/accounts:signInWithEmailLink",Gr(r,t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _l extends em{constructor(t,i,a,l=null){super("password",a),this._email=t,this._password=i,this._tenantId=l}static _fromEmailAndPassword(t,i){return new _l(t,i,"password")}static _fromEmailAndCode(t,i,a=null){return new _l(t,i,"emailLink",a)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(t){const i=typeof t=="string"?JSON.parse(t):t;if(i!=null&&i.email&&(i!=null&&i.password)){if(i.signInMethod==="password")return this._fromEmailAndPassword(i.email,i.password);if(i.signInMethod==="emailLink")return this._fromEmailAndCode(i.email,i.password,i.tenantId)}return null}async _getIdTokenResponse(t){switch(this.signInMethod){case"password":const i={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Dd(t,i,"signInWithPassword",ZS);case"emailLink":return WS(t,{email:this._email,oobCode:this._password});default:jn(t,"internal-error")}}async _linkToIdToken(t,i){switch(this.signInMethod){case"password":const a={idToken:i,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Dd(t,a,"signUpPassword",$S);case"emailLink":return JS(t,{idToken:i,email:this._email,oobCode:this._password});default:jn(t,"internal-error")}}_getReauthenticationResolver(t){return this._getIdTokenResponse(t)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ba(r,t){return Il(r,"POST","/v1/accounts:signInWithIdp",Gr(r,t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const t1="http://localhost";class Ns extends em{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(t){const i=new Ns(t.providerId,t.signInMethod);return t.idToken||t.accessToken?(t.idToken&&(i.idToken=t.idToken),t.accessToken&&(i.accessToken=t.accessToken),t.nonce&&!t.pendingToken&&(i.nonce=t.nonce),t.pendingToken&&(i.pendingToken=t.pendingToken)):t.oauthToken&&t.oauthTokenSecret?(i.accessToken=t.oauthToken,i.secret=t.oauthTokenSecret):jn("argument-error"),i}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(t){const i=typeof t=="string"?JSON.parse(t):t,{providerId:a,signInMethod:l}=i,f=$d(i,["providerId","signInMethod"]);if(!a||!l)return null;const d=new Ns(a,l);return d.idToken=f.idToken||void 0,d.accessToken=f.accessToken||void 0,d.secret=f.secret,d.nonce=f.nonce,d.pendingToken=f.pendingToken||null,d}_getIdTokenResponse(t){const i=this.buildRequest();return Ba(t,i)}_linkToIdToken(t,i){const a=this.buildRequest();return a.idToken=i,Ba(t,a)}_getReauthenticationResolver(t){const i=this.buildRequest();return i.autoCreate=!1,Ba(t,i)}buildRequest(){const t={requestUri:t1,returnSecureToken:!0};if(this.pendingToken)t.pendingToken=this.pendingToken;else{const i={};this.idToken&&(i.id_token=this.idToken),this.accessToken&&(i.access_token=this.accessToken),this.secret&&(i.oauth_token_secret=this.secret),i.providerId=this.providerId,this.nonce&&!this.pendingToken&&(i.nonce=this.nonce),t.postBody=wl(i)}return t}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function e1(r){switch(r){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function n1(r){const t=ol(ll(r)).link,i=t?ol(ll(t)).deep_link_id:null,a=ol(ll(r)).deep_link_id;return(a?ol(ll(a)).link:null)||a||i||t||r}class nm{constructor(t){var i,a,l,f,d,p;const y=ol(ll(t)),v=(i=y.apiKey)!==null&&i!==void 0?i:null,I=(a=y.oobCode)!==null&&a!==void 0?a:null,D=e1((l=y.mode)!==null&&l!==void 0?l:null);ut(v&&I&&D,"argument-error"),this.apiKey=v,this.operation=D,this.code=I,this.continueUrl=(f=y.continueUrl)!==null&&f!==void 0?f:null,this.languageCode=(d=y.languageCode)!==null&&d!==void 0?d:null,this.tenantId=(p=y.tenantId)!==null&&p!==void 0?p:null}static parseLink(t){const i=n1(t);try{return new nm(i)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ya{constructor(){this.providerId=Ya.PROVIDER_ID}static credential(t,i){return _l._fromEmailAndPassword(t,i)}static credentialWithLink(t,i){const a=nm.parseLink(i);return ut(a,"argument-error"),_l._fromEmailAndCode(t,a.code,a.tenantId)}}Ya.PROVIDER_ID="password";Ya.EMAIL_PASSWORD_SIGN_IN_METHOD="password";Ya.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yv{constructor(t){this.providerId=t,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(t){this.defaultLanguageCode=t}setCustomParameters(t){return this.customParameters=t,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cl extends Yv{constructor(){super(...arguments),this.scopes=[]}addScope(t){return this.scopes.includes(t)||this.scopes.push(t),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vr extends Cl{constructor(){super("facebook.com")}static credential(t){return Ns._fromParams({providerId:Vr.PROVIDER_ID,signInMethod:Vr.FACEBOOK_SIGN_IN_METHOD,accessToken:t})}static credentialFromResult(t){return Vr.credentialFromTaggedObject(t)}static credentialFromError(t){return Vr.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t||!("oauthAccessToken"in t)||!t.oauthAccessToken)return null;try{return Vr.credential(t.oauthAccessToken)}catch{return null}}}Vr.FACEBOOK_SIGN_IN_METHOD="facebook.com";Vr.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kr extends Cl{constructor(){super("google.com"),this.addScope("profile")}static credential(t,i){return Ns._fromParams({providerId:kr.PROVIDER_ID,signInMethod:kr.GOOGLE_SIGN_IN_METHOD,idToken:t,accessToken:i})}static credentialFromResult(t){return kr.credentialFromTaggedObject(t)}static credentialFromError(t){return kr.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t)return null;const{oauthIdToken:i,oauthAccessToken:a}=t;if(!i&&!a)return null;try{return kr.credential(i,a)}catch{return null}}}kr.GOOGLE_SIGN_IN_METHOD="google.com";kr.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lr extends Cl{constructor(){super("github.com")}static credential(t){return Ns._fromParams({providerId:Lr.PROVIDER_ID,signInMethod:Lr.GITHUB_SIGN_IN_METHOD,accessToken:t})}static credentialFromResult(t){return Lr.credentialFromTaggedObject(t)}static credentialFromError(t){return Lr.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t||!("oauthAccessToken"in t)||!t.oauthAccessToken)return null;try{return Lr.credential(t.oauthAccessToken)}catch{return null}}}Lr.GITHUB_SIGN_IN_METHOD="github.com";Lr.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ur extends Cl{constructor(){super("twitter.com")}static credential(t,i){return Ns._fromParams({providerId:Ur.PROVIDER_ID,signInMethod:Ur.TWITTER_SIGN_IN_METHOD,oauthToken:t,oauthTokenSecret:i})}static credentialFromResult(t){return Ur.credentialFromTaggedObject(t)}static credentialFromError(t){return Ur.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t)return null;const{oauthAccessToken:i,oauthTokenSecret:a}=t;if(!i||!a)return null;try{return Ur.credential(i,a)}catch{return null}}}Ur.TWITTER_SIGN_IN_METHOD="twitter.com";Ur.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function i1(r,t){return Il(r,"POST","/v1/accounts:signUp",Gr(r,t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ms{constructor(t){this.user=t.user,this.providerId=t.providerId,this._tokenResponse=t._tokenResponse,this.operationType=t.operationType}static async _fromIdTokenResponse(t,i,a,l=!1){const f=await Bi._fromIdTokenResponse(t,a,l),d=a_(a);return new Ms({user:f,providerId:d,_tokenResponse:a,operationType:i})}static async _forOperation(t,i,a){await t._updateTokensIfNecessary(a,!0);const l=a_(a);return new Ms({user:t,providerId:l,_tokenResponse:a,operationType:i})}}function a_(r){return r.providerId?r.providerId:"phoneNumber"in r?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bc extends qn{constructor(t,i,a,l){var f;super(i.code,i.message),this.operationType=a,this.user=l,Object.setPrototypeOf(this,bc.prototype),this.customData={appName:t.name,tenantId:(f=t.tenantId)!==null&&f!==void 0?f:void 0,_serverResponse:i.customData._serverResponse,operationType:a}}static _fromErrorAndOperation(t,i,a,l){return new bc(t,i,a,l)}}function Xv(r,t,i,a){return(t==="reauthenticate"?i._getReauthenticationResolver(r):i._getIdTokenResponse(r)).catch(f=>{throw f.code==="auth/multi-factor-auth-required"?bc._fromErrorAndOperation(r,f,t,a):f})}async function r1(r,t,i=!1){const a=await yl(r,t._linkToIdToken(r.auth,await r.getIdToken()),i);return Ms._forOperation(r,"link",a)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function s1(r,t,i=!1){const{auth:a}=r;if(Dn(a.app))return Promise.reject(ji(a));const l="reauthenticate";try{const f=await yl(r,Xv(a,l,t,r),i);ut(f.idToken,a,"internal-error");const d=Jd(f.idToken);ut(d,a,"internal-error");const{sub:p}=d;return ut(r.uid===p,a,"user-mismatch"),Ms._forOperation(r,l,f)}catch(f){throw(f==null?void 0:f.code)==="auth/user-not-found"&&jn(a,"user-mismatch"),f}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function $v(r,t,i=!1){if(Dn(r.app))return Promise.reject(ji(r));const a="signIn",l=await Xv(r,a,t),f=await Ms._fromIdTokenResponse(r,a,l);return i||await r._updateCurrentUser(f.user),f}async function a1(r,t){return $v(js(r),t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Zv(r){const t=js(r);t._getPasswordPolicyInternal()&&await t._updatePasswordPolicy()}async function o1(r,t,i){if(Dn(r.app))return Promise.reject(ji(r));const a=js(r),d=await Dd(a,{returnSecureToken:!0,email:t,password:i,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",i1).catch(y=>{throw y.code==="auth/password-does-not-meet-requirements"&&Zv(r),y}),p=await Ms._fromIdTokenResponse(a,"signIn",d);return await a._updateCurrentUser(p.user),p}function l1(r,t,i){return Dn(r.app)?Promise.reject(ji(r)):a1(He(r),Ya.credential(t,i)).catch(async a=>{throw a.code==="auth/password-does-not-meet-requirements"&&Zv(r),a})}function u1(r,t,i,a){return He(r).onIdTokenChanged(t,i,a)}function c1(r,t,i){return He(r).beforeAuthStateChanged(t,i)}function f1(r,t,i,a){return He(r).onAuthStateChanged(t,i,a)}function h1(r){return He(r).signOut()}const Ac="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wv{constructor(t,i){this.storageRetriever=t,this.type=i}_isAvailable(){try{return this.storage?(this.storage.setItem(Ac,"1"),this.storage.removeItem(Ac),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(t,i){return this.storage.setItem(t,JSON.stringify(i)),Promise.resolve()}_get(t){const i=this.storage.getItem(t);return Promise.resolve(i?JSON.parse(i):null)}_remove(t){return this.storage.removeItem(t),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const d1=1e3,m1=10;class Jv extends Wv{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(t,i)=>this.onStorageEvent(t,i),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=qv(),this._shouldAllowMigration=!0}forAllChangedKeys(t){for(const i of Object.keys(this.listeners)){const a=this.storage.getItem(i),l=this.localCache[i];a!==l&&t(i,l,a)}}onStorageEvent(t,i=!1){if(!t.key){this.forAllChangedKeys((d,p,y)=>{this.notifyListeners(d,y)});return}const a=t.key;i?this.detachListener():this.stopPolling();const l=()=>{const d=this.storage.getItem(a);!i&&this.localCache[a]===d||this.notifyListeners(a,d)},f=this.storage.getItem(a);NS()&&f!==t.newValue&&t.newValue!==t.oldValue?setTimeout(l,m1):l()}notifyListeners(t,i){this.localCache[t]=i;const a=this.listeners[t];if(a)for(const l of Array.from(a))l(i&&JSON.parse(i))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((t,i,a)=>{this.onStorageEvent(new StorageEvent("storage",{key:t,oldValue:i,newValue:a}),!0)})},d1)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(t,i){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[t]||(this.listeners[t]=new Set,this.localCache[t]=this.storage.getItem(t)),this.listeners[t].add(i)}_removeListener(t,i){this.listeners[t]&&(this.listeners[t].delete(i),this.listeners[t].size===0&&delete this.listeners[t]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(t,i){await super._set(t,i),this.localCache[t]=JSON.stringify(i)}async _get(t){const i=await super._get(t);return this.localCache[t]=JSON.stringify(i),i}async _remove(t){await super._remove(t),delete this.localCache[t]}}Jv.type="LOCAL";const p1=Jv;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class t0 extends Wv{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(t,i){}_removeListener(t,i){}}t0.type="SESSION";const e0=t0;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function g1(r){return Promise.all(r.map(async t=>{try{return{fulfilled:!0,value:await t}}catch(i){return{fulfilled:!1,reason:i}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jc{constructor(t){this.eventTarget=t,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(t){const i=this.receivers.find(l=>l.isListeningto(t));if(i)return i;const a=new jc(t);return this.receivers.push(a),a}isListeningto(t){return this.eventTarget===t}async handleEvent(t){const i=t,{eventId:a,eventType:l,data:f}=i.data,d=this.handlersMap[l];if(!(d!=null&&d.size))return;i.ports[0].postMessage({status:"ack",eventId:a,eventType:l});const p=Array.from(d).map(async v=>v(i.origin,f)),y=await g1(p);i.ports[0].postMessage({status:"done",eventId:a,eventType:l,response:y})}_subscribe(t,i){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[t]||(this.handlersMap[t]=new Set),this.handlersMap[t].add(i)}_unsubscribe(t,i){this.handlersMap[t]&&i&&this.handlersMap[t].delete(i),(!i||this.handlersMap[t].size===0)&&delete this.handlersMap[t],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}jc.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function im(r="",t=10){let i="";for(let a=0;a<t;a++)i+=Math.floor(Math.random()*10);return r+i}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class y1{constructor(t){this.target=t,this.handlers=new Set}removeMessageHandler(t){t.messageChannel&&(t.messageChannel.port1.removeEventListener("message",t.onMessage),t.messageChannel.port1.close()),this.handlers.delete(t)}async _send(t,i,a=50){const l=typeof MessageChannel<"u"?new MessageChannel:null;if(!l)throw new Error("connection_unavailable");let f,d;return new Promise((p,y)=>{const v=im("",20);l.port1.start();const I=setTimeout(()=>{y(new Error("unsupported_event"))},a);d={messageChannel:l,onMessage(D){const z=D;if(z.data.eventId===v)switch(z.data.status){case"ack":clearTimeout(I),f=setTimeout(()=>{y(new Error("timeout"))},3e3);break;case"done":clearTimeout(f),p(z.data.response);break;default:clearTimeout(I),clearTimeout(f),y(new Error("invalid_response"));break}}},this.handlers.add(d),l.port1.addEventListener("message",d.onMessage),this.target.postMessage({eventType:t,eventId:v,data:i},[l.port2])}).finally(()=>{d&&this.removeMessageHandler(d)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function li(){return window}function _1(r){li().location.href=r}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function n0(){return typeof li().WorkerGlobalScope<"u"&&typeof li().importScripts=="function"}async function v1(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function T1(){var r;return((r=navigator==null?void 0:navigator.serviceWorker)===null||r===void 0?void 0:r.controller)||null}function E1(){return n0()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const i0="firebaseLocalStorageDb",b1=1,Sc="firebaseLocalStorage",r0="fbase_key";class Dl{constructor(t){this.request=t}toPromise(){return new Promise((t,i)=>{this.request.addEventListener("success",()=>{t(this.request.result)}),this.request.addEventListener("error",()=>{i(this.request.error)})})}}function qc(r,t){return r.transaction([Sc],t?"readwrite":"readonly").objectStore(Sc)}function A1(){const r=indexedDB.deleteDatabase(i0);return new Dl(r).toPromise()}function Od(){const r=indexedDB.open(i0,b1);return new Promise((t,i)=>{r.addEventListener("error",()=>{i(r.error)}),r.addEventListener("upgradeneeded",()=>{const a=r.result;try{a.createObjectStore(Sc,{keyPath:r0})}catch(l){i(l)}}),r.addEventListener("success",async()=>{const a=r.result;a.objectStoreNames.contains(Sc)?t(a):(a.close(),await A1(),t(await Od()))})})}async function o_(r,t,i){const a=qc(r,!0).put({[r0]:t,value:i});return new Dl(a).toPromise()}async function S1(r,t){const i=qc(r,!1).get(t),a=await new Dl(i).toPromise();return a===void 0?null:a.value}function l_(r,t){const i=qc(r,!0).delete(t);return new Dl(i).toPromise()}const w1=800,R1=3;class s0{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Od(),this.db)}async _withRetries(t){let i=0;for(;;)try{const a=await this._openDb();return await t(a)}catch(a){if(i++>R1)throw a;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return n0()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=jc._getInstance(E1()),this.receiver._subscribe("keyChanged",async(t,i)=>({keyProcessed:(await this._poll()).includes(i.key)})),this.receiver._subscribe("ping",async(t,i)=>["keyChanged"])}async initializeSender(){var t,i;if(this.activeServiceWorker=await v1(),!this.activeServiceWorker)return;this.sender=new y1(this.activeServiceWorker);const a=await this.sender._send("ping",{},800);a&&!((t=a[0])===null||t===void 0)&&t.fulfilled&&!((i=a[0])===null||i===void 0)&&i.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(t){if(!(!this.sender||!this.activeServiceWorker||T1()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:t},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const t=await Od();return await o_(t,Ac,"1"),await l_(t,Ac),!0}catch{}return!1}async _withPendingWrite(t){this.pendingWrites++;try{await t()}finally{this.pendingWrites--}}async _set(t,i){return this._withPendingWrite(async()=>(await this._withRetries(a=>o_(a,t,i)),this.localCache[t]=i,this.notifyServiceWorker(t)))}async _get(t){const i=await this._withRetries(a=>S1(a,t));return this.localCache[t]=i,i}async _remove(t){return this._withPendingWrite(async()=>(await this._withRetries(i=>l_(i,t)),delete this.localCache[t],this.notifyServiceWorker(t)))}async _poll(){const t=await this._withRetries(l=>{const f=qc(l,!1).getAll();return new Dl(f).toPromise()});if(!t)return[];if(this.pendingWrites!==0)return[];const i=[],a=new Set;if(t.length!==0)for(const{fbase_key:l,value:f}of t)a.add(l),JSON.stringify(this.localCache[l])!==JSON.stringify(f)&&(this.notifyListeners(l,f),i.push(l));for(const l of Object.keys(this.localCache))this.localCache[l]&&!a.has(l)&&(this.notifyListeners(l,null),i.push(l));return i}notifyListeners(t,i){this.localCache[t]=i;const a=this.listeners[t];if(a)for(const l of Array.from(a))l(i)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),w1)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(t,i){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[t]||(this.listeners[t]=new Set,this._get(t)),this.listeners[t].add(i)}_removeListener(t,i){this.listeners[t]&&(this.listeners[t].delete(i),this.listeners[t].size===0&&delete this.listeners[t]),Object.keys(this.listeners).length===0&&this.stopPolling()}}s0.type="LOCAL";const I1=s0;new Rl(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function C1(r,t){return t?Hi(t):(ut(r._popupRedirectResolver,r,"argument-error"),r._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rm extends em{constructor(t){super("custom","custom"),this.params=t}_getIdTokenResponse(t){return Ba(t,this._buildIdpRequest())}_linkToIdToken(t,i){return Ba(t,this._buildIdpRequest(i))}_getReauthenticationResolver(t){return Ba(t,this._buildIdpRequest())}_buildIdpRequest(t){const i={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return t&&(i.idToken=t),i}}function D1(r){return $v(r.auth,new rm(r),r.bypassAuthState)}function O1(r){const{auth:t,user:i}=r;return ut(i,t,"internal-error"),s1(i,new rm(r),r.bypassAuthState)}async function N1(r){const{auth:t,user:i}=r;return ut(i,t,"internal-error"),r1(i,new rm(r),r.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class a0{constructor(t,i,a,l,f=!1){this.auth=t,this.resolver=a,this.user=l,this.bypassAuthState=f,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(i)?i:[i]}execute(){return new Promise(async(t,i)=>{this.pendingPromise={resolve:t,reject:i};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(a){this.reject(a)}})}async onAuthEvent(t){const{urlResponse:i,sessionId:a,postBody:l,tenantId:f,error:d,type:p}=t;if(d){this.reject(d);return}const y={auth:this.auth,requestUri:i,sessionId:a,tenantId:f||void 0,postBody:l||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(p)(y))}catch(v){this.reject(v)}}onError(t){this.reject(t)}getIdpTask(t){switch(t){case"signInViaPopup":case"signInViaRedirect":return D1;case"linkViaPopup":case"linkViaRedirect":return N1;case"reauthViaPopup":case"reauthViaRedirect":return O1;default:jn(this.auth,"internal-error")}}resolve(t){Ki(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(t),this.unregisterAndCleanUp()}reject(t){Ki(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(t),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const M1=new Rl(2e3,1e4);class xa extends a0{constructor(t,i,a,l,f){super(t,i,l,f),this.provider=a,this.authWindow=null,this.pollId=null,xa.currentPopupAction&&xa.currentPopupAction.cancel(),xa.currentPopupAction=this}async executeNotNull(){const t=await this.execute();return ut(t,this.auth,"internal-error"),t}async onExecution(){Ki(this.filter.length===1,"Popup operations only handle one event");const t=im();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],t),this.authWindow.associatedEvent=t,this.resolver._originValidation(this.auth).catch(i=>{this.reject(i)}),this.resolver._isIframeWebStorageSupported(this.auth,i=>{i||this.reject(oi(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var t;return((t=this.authWindow)===null||t===void 0?void 0:t.associatedEvent)||null}cancel(){this.reject(oi(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,xa.currentPopupAction=null}pollUserCancellation(){const t=()=>{var i,a;if(!((a=(i=this.authWindow)===null||i===void 0?void 0:i.window)===null||a===void 0)&&a.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(oi(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(t,M1.get())};t()}}xa.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const V1="pendingRedirect",hc=new Map;class k1 extends a0{constructor(t,i,a=!1){super(t,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],i,void 0,a),this.eventId=null}async execute(){let t=hc.get(this.auth._key());if(!t){try{const a=await L1(this.resolver,this.auth)?await super.execute():null;t=()=>Promise.resolve(a)}catch(i){t=()=>Promise.reject(i)}hc.set(this.auth._key(),t)}return this.bypassAuthState||hc.set(this.auth._key(),()=>Promise.resolve(null)),t()}async onAuthEvent(t){if(t.type==="signInViaRedirect")return super.onAuthEvent(t);if(t.type==="unknown"){this.resolve(null);return}if(t.eventId){const i=await this.auth._redirectUserForId(t.eventId);if(i)return this.user=i,super.onAuthEvent(t);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function L1(r,t){const i=P1(t),a=x1(r);if(!await a._isAvailable())return!1;const l=await a._get(i)==="true";return await a._remove(i),l}function U1(r,t){hc.set(r._key(),t)}function x1(r){return Hi(r._redirectPersistence)}function P1(r){return fc(V1,r.config.apiKey,r.name)}async function z1(r,t,i=!1){if(Dn(r.app))return Promise.reject(ji(r));const a=js(r),l=C1(a,t),d=await new k1(a,l,i).execute();return d&&!i&&(delete d.user._redirectEventId,await a._persistUserIfCurrent(d.user),await a._setRedirectUser(null,t)),d}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const B1=10*60*1e3;class H1{constructor(t){this.auth=t,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(t){this.consumers.add(t),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,t)&&(this.sendToConsumer(this.queuedRedirectEvent,t),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(t){this.consumers.delete(t)}onEvent(t){if(this.hasEventBeenHandled(t))return!1;let i=!1;return this.consumers.forEach(a=>{this.isEventForConsumer(t,a)&&(i=!0,this.sendToConsumer(t,a),this.saveEventToCache(t))}),this.hasHandledPotentialRedirect||!j1(t)||(this.hasHandledPotentialRedirect=!0,i||(this.queuedRedirectEvent=t,i=!0)),i}sendToConsumer(t,i){var a;if(t.error&&!o0(t)){const l=((a=t.error.code)===null||a===void 0?void 0:a.split("auth/")[1])||"internal-error";i.onError(oi(this.auth,l))}else i.onAuthEvent(t)}isEventForConsumer(t,i){const a=i.eventId===null||!!t.eventId&&t.eventId===i.eventId;return i.filter.includes(t.type)&&a}hasEventBeenHandled(t){return Date.now()-this.lastProcessedEventTime>=B1&&this.cachedEventUids.clear(),this.cachedEventUids.has(u_(t))}saveEventToCache(t){this.cachedEventUids.add(u_(t)),this.lastProcessedEventTime=Date.now()}}function u_(r){return[r.type,r.eventId,r.sessionId,r.tenantId].filter(t=>t).join("-")}function o0({type:r,error:t}){return r==="unknown"&&(t==null?void 0:t.code)==="auth/no-auth-event"}function j1(r){switch(r.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return o0(r);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function q1(r,t={}){return Kr(r,"GET","/v1/projects",t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const F1=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,G1=/^https?/;async function K1(r){if(r.config.emulator)return;const{authorizedDomains:t}=await q1(r);for(const i of t)try{if(Q1(i))return}catch{}jn(r,"unauthorized-domain")}function Q1(r){const t=Id(),{protocol:i,hostname:a}=new URL(t);if(r.startsWith("chrome-extension://")){const d=new URL(r);return d.hostname===""&&a===""?i==="chrome-extension:"&&r.replace("chrome-extension://","")===t.replace("chrome-extension://",""):i==="chrome-extension:"&&d.hostname===a}if(!G1.test(i))return!1;if(F1.test(r))return a===r;const l=r.replace(/\./g,"\\.");return new RegExp("^(.+\\."+l+"|"+l+")$","i").test(a)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Y1=new Rl(3e4,6e4);function c_(){const r=li().___jsl;if(r!=null&&r.H){for(const t of Object.keys(r.H))if(r.H[t].r=r.H[t].r||[],r.H[t].L=r.H[t].L||[],r.H[t].r=[...r.H[t].L],r.CP)for(let i=0;i<r.CP.length;i++)r.CP[i]=null}}function X1(r){return new Promise((t,i)=>{var a,l,f;function d(){c_(),gapi.load("gapi.iframes",{callback:()=>{t(gapi.iframes.getContext())},ontimeout:()=>{c_(),i(oi(r,"network-request-failed"))},timeout:Y1.get()})}if(!((l=(a=li().gapi)===null||a===void 0?void 0:a.iframes)===null||l===void 0)&&l.Iframe)t(gapi.iframes.getContext());else if(!((f=li().gapi)===null||f===void 0)&&f.load)d();else{const p=BS("iframefcb");return li()[p]=()=>{gapi.load?d():i(oi(r,"network-request-failed"))},Gv(`${zS()}?onload=${p}`).catch(y=>i(y))}}).catch(t=>{throw dc=null,t})}let dc=null;function $1(r){return dc=dc||X1(r),dc}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Z1=new Rl(5e3,15e3),W1="__/auth/iframe",J1="emulator/auth/iframe",tw={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},ew=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function nw(r){const t=r.config;ut(t.authDomain,r,"auth-domain-config-required");const i=t.emulator?Wd(t,J1):`https://${r.config.authDomain}/${W1}`,a={apiKey:t.apiKey,appName:r.name,v:Qa},l=ew.get(r.config.apiHost);l&&(a.eid=l);const f=r._getFrameworks();return f.length&&(a.fw=f.join(",")),`${i}?${wl(a).slice(1)}`}async function iw(r){const t=await $1(r),i=li().gapi;return ut(i,r,"internal-error"),t.open({where:document.body,url:nw(r),messageHandlersFilter:i.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:tw,dontclear:!0},a=>new Promise(async(l,f)=>{await a.restyle({setHideOnLeave:!1});const d=oi(r,"network-request-failed"),p=li().setTimeout(()=>{f(d)},Z1.get());function y(){li().clearTimeout(p),l(a)}a.ping(y).then(y,()=>{f(d)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rw={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},sw=500,aw=600,ow="_blank",lw="http://localhost";class f_{constructor(t){this.window=t,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function uw(r,t,i,a=sw,l=aw){const f=Math.max((window.screen.availHeight-l)/2,0).toString(),d=Math.max((window.screen.availWidth-a)/2,0).toString();let p="";const y=Object.assign(Object.assign({},rw),{width:a.toString(),height:l.toString(),top:f,left:d}),v=Be().toLowerCase();i&&(p=Pv(v)?ow:i),Uv(v)&&(t=t||lw,y.scrollbars="yes");const I=Object.entries(y).reduce((z,[q,Q])=>`${z}${q}=${Q},`,"");if(OS(v)&&p!=="_self")return cw(t||"",p),new f_(null);const D=window.open(t||"",p,I);ut(D,r,"popup-blocked");try{D.focus()}catch{}return new f_(D)}function cw(r,t){const i=document.createElement("a");i.href=r,i.target=t;const a=document.createEvent("MouseEvent");a.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),i.dispatchEvent(a)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fw="__/auth/handler",hw="emulator/auth/handler",dw=encodeURIComponent("fac");async function h_(r,t,i,a,l,f){ut(r.config.authDomain,r,"auth-domain-config-required"),ut(r.config.apiKey,r,"invalid-api-key");const d={apiKey:r.config.apiKey,appName:r.name,authType:i,redirectUrl:a,v:Qa,eventId:l};if(t instanceof Yv){t.setDefaultLanguage(r.languageCode),d.providerId=t.providerId||"",$b(t.getCustomParameters())||(d.customParameters=JSON.stringify(t.getCustomParameters()));for(const[I,D]of Object.entries({}))d[I]=D}if(t instanceof Cl){const I=t.getScopes().filter(D=>D!=="");I.length>0&&(d.scopes=I.join(","))}r.tenantId&&(d.tid=r.tenantId);const p=d;for(const I of Object.keys(p))p[I]===void 0&&delete p[I];const y=await r._getAppCheckToken(),v=y?`#${dw}=${encodeURIComponent(y)}`:"";return`${mw(r)}?${wl(p).slice(1)}${v}`}function mw({config:r}){return r.emulator?Wd(r,hw):`https://${r.authDomain}/${fw}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pd="webStorageSupport";class pw{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=e0,this._completeRedirectFn=z1,this._overrideRedirectResult=U1}async _openPopup(t,i,a,l){var f;Ki((f=this.eventManagers[t._key()])===null||f===void 0?void 0:f.manager,"_initialize() not called before _openPopup()");const d=await h_(t,i,a,Id(),l);return uw(t,d,im())}async _openRedirect(t,i,a,l){await this._originValidation(t);const f=await h_(t,i,a,Id(),l);return _1(f),new Promise(()=>{})}_initialize(t){const i=t._key();if(this.eventManagers[i]){const{manager:l,promise:f}=this.eventManagers[i];return l?Promise.resolve(l):(Ki(f,"If manager is not set, promise should be"),f)}const a=this.initAndGetManager(t);return this.eventManagers[i]={promise:a},a.catch(()=>{delete this.eventManagers[i]}),a}async initAndGetManager(t){const i=await iw(t),a=new H1(t);return i.register("authEvent",l=>(ut(l==null?void 0:l.authEvent,t,"invalid-auth-event"),{status:a.onEvent(l.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[t._key()]={manager:a},this.iframes[t._key()]=i,a}_isIframeWebStorageSupported(t,i){this.iframes[t._key()].send(pd,{type:pd},l=>{var f;const d=(f=l==null?void 0:l[0])===null||f===void 0?void 0:f[pd];d!==void 0&&i(!!d),jn(t,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(t){const i=t._key();return this.originValidationPromises[i]||(this.originValidationPromises[i]=K1(t)),this.originValidationPromises[i]}get _shouldInitProactively(){return qv()||xv()||tm()}}const gw=pw;var d_="@firebase/auth",m_="1.9.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yw{constructor(t){this.auth=t,this.internalListeners=new Map}getUid(){var t;return this.assertAuthConfigured(),((t=this.auth.currentUser)===null||t===void 0?void 0:t.uid)||null}async getToken(t){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(t)}:null}addAuthTokenListener(t){if(this.assertAuthConfigured(),this.internalListeners.has(t))return;const i=this.auth.onIdTokenChanged(a=>{t((a==null?void 0:a.stsTokenManager.accessToken)||null)});this.internalListeners.set(t,i),this.updateProactiveRefresh()}removeAuthTokenListener(t){this.assertAuthConfigured();const i=this.internalListeners.get(t);i&&(this.internalListeners.delete(t),i(),this.updateProactiveRefresh())}assertAuthConfigured(){ut(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _w(r){switch(r){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function vw(r){ui(new Hn("auth",(t,{options:i})=>{const a=t.getProvider("app").getImmediate(),l=t.getProvider("heartbeat"),f=t.getProvider("app-check-internal"),{apiKey:d,authDomain:p}=a.options;ut(d&&!d.includes(":"),"invalid-api-key",{appName:a.name});const y={apiKey:d,authDomain:p,clientPlatform:r,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Fv(r)},v=new US(a,l,f,y);return KS(v,i),v},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((t,i,a)=>{t.getProvider("auth-internal").initialize()})),ui(new Hn("auth-internal",t=>{const i=js(t.getProvider("auth").getImmediate());return(a=>new yw(a))(i)},"PRIVATE").setInstantiationMode("EXPLICIT")),On(d_,m_,_w(r)),On(d_,m_,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Tw=5*60,Ew=yv("authIdTokenMaxAge")||Tw;let p_=null;const bw=r=>async t=>{const i=t&&await t.getIdTokenResult(),a=i&&(new Date().getTime()-Date.parse(i.issuedAtTime))/1e3;if(a&&a>Ew)return;const l=i==null?void 0:i.token;p_!==l&&(p_=l,await fetch(r,{method:l?"POST":"DELETE",headers:l?{Authorization:`Bearer ${l}`}:{}}))};function Aw(r=Xd()){const t=Hs(r,"auth");if(t.isInitialized())return t.getImmediate();const i=GS(r,{popupRedirectResolver:gw,persistence:[I1,p1,e0]}),a=yv("authTokenSyncURL");if(a&&typeof isSecureContext=="boolean"&&isSecureContext){const f=new URL(a,location.origin);if(location.origin===f.origin){const d=bw(f.toString());c1(i,d,()=>d(i.currentUser)),u1(i,p=>d(p))}}const l=pv("auth");return l&&QS(i,`http://${l}`),i}function Sw(){var r,t;return(t=(r=document.getElementsByTagName("head"))===null||r===void 0?void 0:r[0])!==null&&t!==void 0?t:document}xS({loadJS(r){return new Promise((t,i)=>{const a=document.createElement("script");a.setAttribute("src",r),a.onload=t,a.onerror=l=>{const f=oi("internal-error");f.customData=l,i(f)},a.type="text/javascript",a.charset="UTF-8",Sw().appendChild(a)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});vw("Browser");var ww="firebase",Rw="11.4.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */On(ww,Rw,"app");const l0="@firebase/installations",sm="0.6.13";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const u0=1e4,c0=`w:${sm}`,f0="FIS_v2",Iw="https://firebaseinstallations.googleapis.com/v1",Cw=60*60*1e3,Dw="installations",Ow="Installations";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Nw={"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"not-registered":"Firebase Installation is not registered.","installation-not-found":"Firebase Installation not found.","request-failed":'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',"app-offline":"Could not process request. Application offline.","delete-pending-registration":"Can't delete installation while there is a pending registration request."},Vs=new Bs(Dw,Ow,Nw);function h0(r){return r instanceof qn&&r.code.includes("request-failed")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function d0({projectId:r}){return`${Iw}/projects/${r}/installations`}function m0(r){return{token:r.token,requestStatus:2,expiresIn:Vw(r.expiresIn),creationTime:Date.now()}}async function p0(r,t){const a=(await t.json()).error;return Vs.create("request-failed",{requestName:r,serverCode:a.code,serverMessage:a.message,serverStatus:a.status})}function g0({apiKey:r}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":r})}function Mw(r,{refreshToken:t}){const i=g0(r);return i.append("Authorization",kw(t)),i}async function y0(r){const t=await r();return t.status>=500&&t.status<600?r():t}function Vw(r){return Number(r.replace("s","000"))}function kw(r){return`${f0} ${r}`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Lw({appConfig:r,heartbeatServiceProvider:t},{fid:i}){const a=d0(r),l=g0(r),f=t.getImmediate({optional:!0});if(f){const v=await f.getHeartbeatsHeader();v&&l.append("x-firebase-client",v)}const d={fid:i,authVersion:f0,appId:r.appId,sdkVersion:c0},p={method:"POST",headers:l,body:JSON.stringify(d)},y=await y0(()=>fetch(a,p));if(y.ok){const v=await y.json();return{fid:v.fid||i,registrationStatus:2,refreshToken:v.refreshToken,authToken:m0(v.authToken)}}else throw await p0("Create Installation",y)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _0(r){return new Promise(t=>{setTimeout(t,r)})}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Uw(r){return btoa(String.fromCharCode(...r)).replace(/\+/g,"-").replace(/\//g,"_")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xw=/^[cdef][\w-]{21}$/,Nd="";function Pw(){try{const r=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(r),r[0]=112+r[0]%16;const i=zw(r);return xw.test(i)?i:Nd}catch{return Nd}}function zw(r){return Uw(r).substr(0,22)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Fc(r){return`${r.appName}!${r.appId}`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const v0=new Map;function T0(r,t){const i=Fc(r);E0(i,t),Bw(i,t)}function E0(r,t){const i=v0.get(r);if(i)for(const a of i)a(t)}function Bw(r,t){const i=Hw();i&&i.postMessage({key:r,fid:t}),jw()}let Rs=null;function Hw(){return!Rs&&"BroadcastChannel"in self&&(Rs=new BroadcastChannel("[Firebase] FID Change"),Rs.onmessage=r=>{E0(r.data.key,r.data.fid)}),Rs}function jw(){v0.size===0&&Rs&&(Rs.close(),Rs=null)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qw="firebase-installations-database",Fw=1,ks="firebase-installations-store";let gd=null;function am(){return gd||(gd=Av(qw,Fw,{upgrade:(r,t)=>{switch(t){case 0:r.createObjectStore(ks)}}})),gd}async function wc(r,t){const i=Fc(r),l=(await am()).transaction(ks,"readwrite"),f=l.objectStore(ks),d=await f.get(i);return await f.put(t,i),await l.done,(!d||d.fid!==t.fid)&&T0(r,t.fid),t}async function b0(r){const t=Fc(r),a=(await am()).transaction(ks,"readwrite");await a.objectStore(ks).delete(t),await a.done}async function Gc(r,t){const i=Fc(r),l=(await am()).transaction(ks,"readwrite"),f=l.objectStore(ks),d=await f.get(i),p=t(d);return p===void 0?await f.delete(i):await f.put(p,i),await l.done,p&&(!d||d.fid!==p.fid)&&T0(r,p.fid),p}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function om(r){let t;const i=await Gc(r.appConfig,a=>{const l=Gw(a),f=Kw(r,l);return t=f.registrationPromise,f.installationEntry});return i.fid===Nd?{installationEntry:await t}:{installationEntry:i,registrationPromise:t}}function Gw(r){const t=r||{fid:Pw(),registrationStatus:0};return A0(t)}function Kw(r,t){if(t.registrationStatus===0){if(!navigator.onLine){const l=Promise.reject(Vs.create("app-offline"));return{installationEntry:t,registrationPromise:l}}const i={fid:t.fid,registrationStatus:1,registrationTime:Date.now()},a=Qw(r,i);return{installationEntry:i,registrationPromise:a}}else return t.registrationStatus===1?{installationEntry:t,registrationPromise:Yw(r)}:{installationEntry:t}}async function Qw(r,t){try{const i=await Lw(r,t);return wc(r.appConfig,i)}catch(i){throw h0(i)&&i.customData.serverCode===409?await b0(r.appConfig):await wc(r.appConfig,{fid:t.fid,registrationStatus:0}),i}}async function Yw(r){let t=await g_(r.appConfig);for(;t.registrationStatus===1;)await _0(100),t=await g_(r.appConfig);if(t.registrationStatus===0){const{installationEntry:i,registrationPromise:a}=await om(r);return a||i}return t}function g_(r){return Gc(r,t=>{if(!t)throw Vs.create("installation-not-found");return A0(t)})}function A0(r){return Xw(r)?{fid:r.fid,registrationStatus:0}:r}function Xw(r){return r.registrationStatus===1&&r.registrationTime+u0<Date.now()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function $w({appConfig:r,heartbeatServiceProvider:t},i){const a=Zw(r,i),l=Mw(r,i),f=t.getImmediate({optional:!0});if(f){const v=await f.getHeartbeatsHeader();v&&l.append("x-firebase-client",v)}const d={installation:{sdkVersion:c0,appId:r.appId}},p={method:"POST",headers:l,body:JSON.stringify(d)},y=await y0(()=>fetch(a,p));if(y.ok){const v=await y.json();return m0(v)}else throw await p0("Generate Auth Token",y)}function Zw(r,{fid:t}){return`${d0(r)}/${t}/authTokens:generate`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function lm(r,t=!1){let i;const a=await Gc(r.appConfig,f=>{if(!S0(f))throw Vs.create("not-registered");const d=f.authToken;if(!t&&tR(d))return f;if(d.requestStatus===1)return i=Ww(r,t),f;{if(!navigator.onLine)throw Vs.create("app-offline");const p=nR(f);return i=Jw(r,p),p}});return i?await i:a.authToken}async function Ww(r,t){let i=await y_(r.appConfig);for(;i.authToken.requestStatus===1;)await _0(100),i=await y_(r.appConfig);const a=i.authToken;return a.requestStatus===0?lm(r,t):a}function y_(r){return Gc(r,t=>{if(!S0(t))throw Vs.create("not-registered");const i=t.authToken;return iR(i)?Object.assign(Object.assign({},t),{authToken:{requestStatus:0}}):t})}async function Jw(r,t){try{const i=await $w(r,t),a=Object.assign(Object.assign({},t),{authToken:i});return await wc(r.appConfig,a),i}catch(i){if(h0(i)&&(i.customData.serverCode===401||i.customData.serverCode===404))await b0(r.appConfig);else{const a=Object.assign(Object.assign({},t),{authToken:{requestStatus:0}});await wc(r.appConfig,a)}throw i}}function S0(r){return r!==void 0&&r.registrationStatus===2}function tR(r){return r.requestStatus===2&&!eR(r)}function eR(r){const t=Date.now();return t<r.creationTime||r.creationTime+r.expiresIn<t+Cw}function nR(r){const t={requestStatus:1,requestTime:Date.now()};return Object.assign(Object.assign({},r),{authToken:t})}function iR(r){return r.requestStatus===1&&r.requestTime+u0<Date.now()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function rR(r){const t=r,{installationEntry:i,registrationPromise:a}=await om(t);return a?a.catch(console.error):lm(t).catch(console.error),i.fid}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function sR(r,t=!1){const i=r;return await aR(i),(await lm(i,t)).token}async function aR(r){const{registrationPromise:t}=await om(r);t&&await t}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function oR(r){if(!r||!r.options)throw yd("App Configuration");if(!r.name)throw yd("App Name");const t=["projectId","apiKey","appId"];for(const i of t)if(!r.options[i])throw yd(i);return{appName:r.name,projectId:r.options.projectId,apiKey:r.options.apiKey,appId:r.options.appId}}function yd(r){return Vs.create("missing-app-config-values",{valueName:r})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const w0="installations",lR="installations-internal",uR=r=>{const t=r.getProvider("app").getImmediate(),i=oR(t),a=Hs(t,"heartbeat");return{app:t,appConfig:i,heartbeatServiceProvider:a,_delete:()=>Promise.resolve()}},cR=r=>{const t=r.getProvider("app").getImmediate(),i=Hs(t,w0).getImmediate();return{getId:()=>rR(i),getToken:l=>sR(i,l)}};function fR(){ui(new Hn(w0,uR,"PUBLIC")),ui(new Hn(lR,cR,"PRIVATE"))}fR();On(l0,sm);On(l0,sm,"esm2017");/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Rc="analytics",hR="firebase_id",dR="origin",mR=60*1e3,pR="https://firebase.googleapis.com/v1alpha/projects/-/apps/{app-id}/webConfig",um="https://www.googletagmanager.com/gtag/js";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tn=new Bc("@firebase/analytics");/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gR={"already-exists":"A Firebase Analytics instance with the appId {$id}  already exists. Only one Firebase Analytics instance can be created for each appId.","already-initialized":"initializeAnalytics() cannot be called again with different options than those it was initially called with. It can be called again with the same options to return the existing instance, or getAnalytics() can be used to get a reference to the already-initialized instance.","already-initialized-settings":"Firebase Analytics has already been initialized.settings() must be called before initializing any Analytics instanceor it will have no effect.","interop-component-reg-failed":"Firebase Analytics Interop Component failed to instantiate: {$reason}","invalid-analytics-context":"Firebase Analytics is not supported in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","indexeddb-unavailable":"IndexedDB unavailable or restricted in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","fetch-throttle":"The config fetch request timed out while in an exponential backoff state. Unix timestamp in milliseconds when fetch request throttling ends: {$throttleEndTimeMillis}.","config-fetch-failed":"Dynamic config fetch failed: [{$httpStatus}] {$responseMessage}","no-api-key":'The "apiKey" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid API key.',"no-app-id":'The "appId" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid app ID.',"no-client-id":'The "client_id" field is empty.',"invalid-gtag-resource":"Trusted Types detected an invalid gtag resource: {$gtagURL}."},cn=new Bs("analytics","Analytics",gR);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yR(r){if(!r.startsWith(um)){const t=cn.create("invalid-gtag-resource",{gtagURL:r});return tn.warn(t.message),""}return r}function R0(r){return Promise.all(r.map(t=>t.catch(i=>i)))}function _R(r,t){let i;return window.trustedTypes&&(i=window.trustedTypes.createPolicy(r,t)),i}function vR(r,t){const i=_R("firebase-js-sdk-policy",{createScriptURL:yR}),a=document.createElement("script"),l=`${um}?l=${r}&id=${t}`;a.src=i?i==null?void 0:i.createScriptURL(l):l,a.async=!0,document.head.appendChild(a)}function TR(r){let t=[];return Array.isArray(window[r])?t=window[r]:window[r]=t,t}async function ER(r,t,i,a,l,f){const d=a[l];try{if(d)await t[d];else{const y=(await R0(i)).find(v=>v.measurementId===l);y&&await t[y.appId]}}catch(p){tn.error(p)}r("config",l,f)}async function bR(r,t,i,a,l){try{let f=[];if(l&&l.send_to){let d=l.send_to;Array.isArray(d)||(d=[d]);const p=await R0(i);for(const y of d){const v=p.find(D=>D.measurementId===y),I=v&&t[v.appId];if(I)f.push(I);else{f=[];break}}}f.length===0&&(f=Object.values(t)),await Promise.all(f),r("event",a,l||{})}catch(f){tn.error(f)}}function AR(r,t,i,a){async function l(f,...d){try{if(f==="event"){const[p,y]=d;await bR(r,t,i,p,y)}else if(f==="config"){const[p,y]=d;await ER(r,t,i,a,p,y)}else if(f==="consent"){const[p,y]=d;r("consent",p,y)}else if(f==="get"){const[p,y,v]=d;r("get",p,y,v)}else if(f==="set"){const[p]=d;r("set",p)}else r(f,...d)}catch(p){tn.error(p)}}return l}function SR(r,t,i,a,l){let f=function(...d){window[a].push(arguments)};return window[l]&&typeof window[l]=="function"&&(f=window[l]),window[l]=AR(f,r,t,i),{gtagCore:f,wrappedGtag:window[l]}}function wR(r){const t=window.document.getElementsByTagName("script");for(const i of Object.values(t))if(i.src&&i.src.includes(um)&&i.src.includes(r))return i;return null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const RR=30,IR=1e3;class CR{constructor(t={},i=IR){this.throttleMetadata=t,this.intervalMillis=i}getThrottleMetadata(t){return this.throttleMetadata[t]}setThrottleMetadata(t,i){this.throttleMetadata[t]=i}deleteThrottleMetadata(t){delete this.throttleMetadata[t]}}const I0=new CR;function DR(r){return new Headers({Accept:"application/json","x-goog-api-key":r})}async function OR(r){var t;const{appId:i,apiKey:a}=r,l={method:"GET",headers:DR(a)},f=pR.replace("{app-id}",i),d=await fetch(f,l);if(d.status!==200&&d.status!==304){let p="";try{const y=await d.json();!((t=y.error)===null||t===void 0)&&t.message&&(p=y.error.message)}catch{}throw cn.create("config-fetch-failed",{httpStatus:d.status,responseMessage:p})}return d.json()}async function NR(r,t=I0,i){const{appId:a,apiKey:l,measurementId:f}=r.options;if(!a)throw cn.create("no-app-id");if(!l){if(f)return{measurementId:f,appId:a};throw cn.create("no-api-key")}const d=t.getThrottleMetadata(a)||{backoffCount:0,throttleEndTimeMillis:Date.now()},p=new kR;return setTimeout(async()=>{p.abort()},mR),C0({appId:a,apiKey:l,measurementId:f},d,p,t)}async function C0(r,{throttleEndTimeMillis:t,backoffCount:i},a,l=I0){var f;const{appId:d,measurementId:p}=r;try{await MR(a,t)}catch(y){if(p)return tn.warn(`Timed out fetching this Firebase app's measurement ID from the server. Falling back to the measurement ID ${p} provided in the "measurementId" field in the local Firebase config. [${y==null?void 0:y.message}]`),{appId:d,measurementId:p};throw y}try{const y=await OR(r);return l.deleteThrottleMetadata(d),y}catch(y){const v=y;if(!VR(v)){if(l.deleteThrottleMetadata(d),p)return tn.warn(`Failed to fetch this Firebase app's measurement ID from the server. Falling back to the measurement ID ${p} provided in the "measurementId" field in the local Firebase config. [${v==null?void 0:v.message}]`),{appId:d,measurementId:p};throw y}const I=Number((f=v==null?void 0:v.customData)===null||f===void 0?void 0:f.httpStatus)===503?jy(i,l.intervalMillis,RR):jy(i,l.intervalMillis),D={throttleEndTimeMillis:Date.now()+I,backoffCount:i+1};return l.setThrottleMetadata(d,D),tn.debug(`Calling attemptFetch again in ${I} millis`),C0(r,D,a,l)}}function MR(r,t){return new Promise((i,a)=>{const l=Math.max(t-Date.now(),0),f=setTimeout(i,l);r.addEventListener(()=>{clearTimeout(f),a(cn.create("fetch-throttle",{throttleEndTimeMillis:t}))})})}function VR(r){if(!(r instanceof qn)||!r.customData)return!1;const t=Number(r.customData.httpStatus);return t===429||t===500||t===503||t===504}class kR{constructor(){this.listeners=[]}addEventListener(t){this.listeners.push(t)}abort(){this.listeners.forEach(t=>t())}}async function LR(r,t,i,a,l){if(l&&l.global){r("event",i,a);return}else{const f=await t,d=Object.assign(Object.assign({},a),{send_to:f});r("event",i,d)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function UR(){if(vv())try{await Tv()}catch(r){return tn.warn(cn.create("indexeddb-unavailable",{errorInfo:r==null?void 0:r.toString()}).message),!1}else return tn.warn(cn.create("indexeddb-unavailable",{errorInfo:"IndexedDB is not available in this environment."}).message),!1;return!0}async function xR(r,t,i,a,l,f,d){var p;const y=NR(r);y.then(q=>{i[q.measurementId]=q.appId,r.options.measurementId&&q.measurementId!==r.options.measurementId&&tn.warn(`The measurement ID in the local Firebase config (${r.options.measurementId}) does not match the measurement ID fetched from the server (${q.measurementId}). To ensure analytics events are always sent to the correct Analytics property, update the measurement ID field in the local config or remove it from the local config.`)}).catch(q=>tn.error(q)),t.push(y);const v=UR().then(q=>{if(q)return a.getId()}),[I,D]=await Promise.all([y,v]);wR(f)||vR(f,I.measurementId),l("js",new Date);const z=(p=d==null?void 0:d.config)!==null&&p!==void 0?p:{};return z[dR]="firebase",z.update=!0,D!=null&&(z[hR]=D),l("config",I.measurementId,z),I.measurementId}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class PR{constructor(t){this.app=t}_delete(){return delete fl[this.app.options.appId],Promise.resolve()}}let fl={},__=[];const v_={};let _d="dataLayer",zR="gtag",T_,D0,E_=!1;function BR(){const r=[];if(_v()&&r.push("This is a browser extension environment."),Kb()||r.push("Cookies are not available."),r.length>0){const t=r.map((a,l)=>`(${l+1}) ${a}`).join(" "),i=cn.create("invalid-analytics-context",{errorInfo:t});tn.warn(i.message)}}function HR(r,t,i){BR();const a=r.options.appId;if(!a)throw cn.create("no-app-id");if(!r.options.apiKey)if(r.options.measurementId)tn.warn(`The "apiKey" field is empty in the local Firebase config. This is needed to fetch the latest measurement ID for this Firebase app. Falling back to the measurement ID ${r.options.measurementId} provided in the "measurementId" field in the local Firebase config.`);else throw cn.create("no-api-key");if(fl[a]!=null)throw cn.create("already-exists",{id:a});if(!E_){TR(_d);const{wrappedGtag:f,gtagCore:d}=SR(fl,__,v_,_d,zR);D0=f,T_=d,E_=!0}return fl[a]=xR(r,__,v_,t,T_,_d,i),new PR(r)}function jR(r=Xd()){r=He(r);const t=Hs(r,Rc);return t.isInitialized()?t.getImmediate():qR(r)}function qR(r,t={}){const i=Hs(r,Rc);if(i.isInitialized()){const l=i.getImmediate();if(Br(t,i.getOptions()))return l;throw cn.create("already-initialized")}return i.initialize({options:t})}function FR(r,t,i,a){r=He(r),LR(D0,fl[r.app.options.appId],t,i,a).catch(l=>tn.error(l))}const b_="@firebase/analytics",A_="0.10.12";function GR(){ui(new Hn(Rc,(t,{options:i})=>{const a=t.getProvider("app").getImmediate(),l=t.getProvider("installations-internal").getImmediate();return HR(a,l,i)},"PUBLIC")),ui(new Hn("analytics-internal",r,"PRIVATE")),On(b_,A_),On(b_,A_,"esm2017");function r(t){try{const i=t.getProvider(Rc).getImmediate();return{logEvent:(a,l,f)=>FR(i,a,l,f)}}catch(i){throw cn.create("interop-component-reg-failed",{reason:i})}}}GR();var S_=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var cm;(function(){var r;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function t(C,A){function b(){}b.prototype=A.prototype,C.D=A.prototype,C.prototype=new b,C.prototype.constructor=C,C.C=function(R,O,k){for(var w=Array(arguments.length-2),oe=2;oe<arguments.length;oe++)w[oe-2]=arguments[oe];return A.prototype[O].apply(R,w)}}function i(){this.blockSize=-1}function a(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}t(a,i),a.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function l(C,A,b){b||(b=0);var R=Array(16);if(typeof A=="string")for(var O=0;16>O;++O)R[O]=A.charCodeAt(b++)|A.charCodeAt(b++)<<8|A.charCodeAt(b++)<<16|A.charCodeAt(b++)<<24;else for(O=0;16>O;++O)R[O]=A[b++]|A[b++]<<8|A[b++]<<16|A[b++]<<24;A=C.g[0],b=C.g[1],O=C.g[2];var k=C.g[3],w=A+(k^b&(O^k))+R[0]+3614090360&4294967295;A=b+(w<<7&4294967295|w>>>25),w=k+(O^A&(b^O))+R[1]+3905402710&4294967295,k=A+(w<<12&4294967295|w>>>20),w=O+(b^k&(A^b))+R[2]+606105819&4294967295,O=k+(w<<17&4294967295|w>>>15),w=b+(A^O&(k^A))+R[3]+3250441966&4294967295,b=O+(w<<22&4294967295|w>>>10),w=A+(k^b&(O^k))+R[4]+4118548399&4294967295,A=b+(w<<7&4294967295|w>>>25),w=k+(O^A&(b^O))+R[5]+1200080426&4294967295,k=A+(w<<12&4294967295|w>>>20),w=O+(b^k&(A^b))+R[6]+2821735955&4294967295,O=k+(w<<17&4294967295|w>>>15),w=b+(A^O&(k^A))+R[7]+4249261313&4294967295,b=O+(w<<22&4294967295|w>>>10),w=A+(k^b&(O^k))+R[8]+1770035416&4294967295,A=b+(w<<7&4294967295|w>>>25),w=k+(O^A&(b^O))+R[9]+2336552879&4294967295,k=A+(w<<12&4294967295|w>>>20),w=O+(b^k&(A^b))+R[10]+4294925233&4294967295,O=k+(w<<17&4294967295|w>>>15),w=b+(A^O&(k^A))+R[11]+2304563134&4294967295,b=O+(w<<22&4294967295|w>>>10),w=A+(k^b&(O^k))+R[12]+1804603682&4294967295,A=b+(w<<7&4294967295|w>>>25),w=k+(O^A&(b^O))+R[13]+4254626195&4294967295,k=A+(w<<12&4294967295|w>>>20),w=O+(b^k&(A^b))+R[14]+2792965006&4294967295,O=k+(w<<17&4294967295|w>>>15),w=b+(A^O&(k^A))+R[15]+1236535329&4294967295,b=O+(w<<22&4294967295|w>>>10),w=A+(O^k&(b^O))+R[1]+4129170786&4294967295,A=b+(w<<5&4294967295|w>>>27),w=k+(b^O&(A^b))+R[6]+3225465664&4294967295,k=A+(w<<9&4294967295|w>>>23),w=O+(A^b&(k^A))+R[11]+643717713&4294967295,O=k+(w<<14&4294967295|w>>>18),w=b+(k^A&(O^k))+R[0]+3921069994&4294967295,b=O+(w<<20&4294967295|w>>>12),w=A+(O^k&(b^O))+R[5]+3593408605&4294967295,A=b+(w<<5&4294967295|w>>>27),w=k+(b^O&(A^b))+R[10]+38016083&4294967295,k=A+(w<<9&4294967295|w>>>23),w=O+(A^b&(k^A))+R[15]+3634488961&4294967295,O=k+(w<<14&4294967295|w>>>18),w=b+(k^A&(O^k))+R[4]+3889429448&4294967295,b=O+(w<<20&4294967295|w>>>12),w=A+(O^k&(b^O))+R[9]+568446438&4294967295,A=b+(w<<5&4294967295|w>>>27),w=k+(b^O&(A^b))+R[14]+3275163606&4294967295,k=A+(w<<9&4294967295|w>>>23),w=O+(A^b&(k^A))+R[3]+4107603335&4294967295,O=k+(w<<14&4294967295|w>>>18),w=b+(k^A&(O^k))+R[8]+1163531501&4294967295,b=O+(w<<20&4294967295|w>>>12),w=A+(O^k&(b^O))+R[13]+2850285829&4294967295,A=b+(w<<5&4294967295|w>>>27),w=k+(b^O&(A^b))+R[2]+4243563512&4294967295,k=A+(w<<9&4294967295|w>>>23),w=O+(A^b&(k^A))+R[7]+1735328473&4294967295,O=k+(w<<14&4294967295|w>>>18),w=b+(k^A&(O^k))+R[12]+2368359562&4294967295,b=O+(w<<20&4294967295|w>>>12),w=A+(b^O^k)+R[5]+4294588738&4294967295,A=b+(w<<4&4294967295|w>>>28),w=k+(A^b^O)+R[8]+2272392833&4294967295,k=A+(w<<11&4294967295|w>>>21),w=O+(k^A^b)+R[11]+1839030562&4294967295,O=k+(w<<16&4294967295|w>>>16),w=b+(O^k^A)+R[14]+4259657740&4294967295,b=O+(w<<23&4294967295|w>>>9),w=A+(b^O^k)+R[1]+2763975236&4294967295,A=b+(w<<4&4294967295|w>>>28),w=k+(A^b^O)+R[4]+1272893353&4294967295,k=A+(w<<11&4294967295|w>>>21),w=O+(k^A^b)+R[7]+4139469664&4294967295,O=k+(w<<16&4294967295|w>>>16),w=b+(O^k^A)+R[10]+3200236656&4294967295,b=O+(w<<23&4294967295|w>>>9),w=A+(b^O^k)+R[13]+681279174&4294967295,A=b+(w<<4&4294967295|w>>>28),w=k+(A^b^O)+R[0]+3936430074&4294967295,k=A+(w<<11&4294967295|w>>>21),w=O+(k^A^b)+R[3]+3572445317&4294967295,O=k+(w<<16&4294967295|w>>>16),w=b+(O^k^A)+R[6]+76029189&4294967295,b=O+(w<<23&4294967295|w>>>9),w=A+(b^O^k)+R[9]+3654602809&4294967295,A=b+(w<<4&4294967295|w>>>28),w=k+(A^b^O)+R[12]+3873151461&4294967295,k=A+(w<<11&4294967295|w>>>21),w=O+(k^A^b)+R[15]+530742520&4294967295,O=k+(w<<16&4294967295|w>>>16),w=b+(O^k^A)+R[2]+3299628645&4294967295,b=O+(w<<23&4294967295|w>>>9),w=A+(O^(b|~k))+R[0]+4096336452&4294967295,A=b+(w<<6&4294967295|w>>>26),w=k+(b^(A|~O))+R[7]+1126891415&4294967295,k=A+(w<<10&4294967295|w>>>22),w=O+(A^(k|~b))+R[14]+2878612391&4294967295,O=k+(w<<15&4294967295|w>>>17),w=b+(k^(O|~A))+R[5]+4237533241&4294967295,b=O+(w<<21&4294967295|w>>>11),w=A+(O^(b|~k))+R[12]+1700485571&4294967295,A=b+(w<<6&4294967295|w>>>26),w=k+(b^(A|~O))+R[3]+2399980690&4294967295,k=A+(w<<10&4294967295|w>>>22),w=O+(A^(k|~b))+R[10]+4293915773&4294967295,O=k+(w<<15&4294967295|w>>>17),w=b+(k^(O|~A))+R[1]+2240044497&4294967295,b=O+(w<<21&4294967295|w>>>11),w=A+(O^(b|~k))+R[8]+1873313359&4294967295,A=b+(w<<6&4294967295|w>>>26),w=k+(b^(A|~O))+R[15]+4264355552&4294967295,k=A+(w<<10&4294967295|w>>>22),w=O+(A^(k|~b))+R[6]+2734768916&4294967295,O=k+(w<<15&4294967295|w>>>17),w=b+(k^(O|~A))+R[13]+1309151649&4294967295,b=O+(w<<21&4294967295|w>>>11),w=A+(O^(b|~k))+R[4]+4149444226&4294967295,A=b+(w<<6&4294967295|w>>>26),w=k+(b^(A|~O))+R[11]+3174756917&4294967295,k=A+(w<<10&4294967295|w>>>22),w=O+(A^(k|~b))+R[2]+718787259&4294967295,O=k+(w<<15&4294967295|w>>>17),w=b+(k^(O|~A))+R[9]+3951481745&4294967295,C.g[0]=C.g[0]+A&4294967295,C.g[1]=C.g[1]+(O+(w<<21&4294967295|w>>>11))&4294967295,C.g[2]=C.g[2]+O&4294967295,C.g[3]=C.g[3]+k&4294967295}a.prototype.u=function(C,A){A===void 0&&(A=C.length);for(var b=A-this.blockSize,R=this.B,O=this.h,k=0;k<A;){if(O==0)for(;k<=b;)l(this,C,k),k+=this.blockSize;if(typeof C=="string"){for(;k<A;)if(R[O++]=C.charCodeAt(k++),O==this.blockSize){l(this,R),O=0;break}}else for(;k<A;)if(R[O++]=C[k++],O==this.blockSize){l(this,R),O=0;break}}this.h=O,this.o+=A},a.prototype.v=function(){var C=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);C[0]=128;for(var A=1;A<C.length-8;++A)C[A]=0;var b=8*this.o;for(A=C.length-8;A<C.length;++A)C[A]=b&255,b/=256;for(this.u(C),C=Array(16),A=b=0;4>A;++A)for(var R=0;32>R;R+=8)C[b++]=this.g[A]>>>R&255;return C};function f(C,A){var b=p;return Object.prototype.hasOwnProperty.call(b,C)?b[C]:b[C]=A(C)}function d(C,A){this.h=A;for(var b=[],R=!0,O=C.length-1;0<=O;O--){var k=C[O]|0;R&&k==A||(b[O]=k,R=!1)}this.g=b}var p={};function y(C){return-128<=C&&128>C?f(C,function(A){return new d([A|0],0>A?-1:0)}):new d([C|0],0>C?-1:0)}function v(C){if(isNaN(C)||!isFinite(C))return D;if(0>C)return Y(v(-C));for(var A=[],b=1,R=0;C>=b;R++)A[R]=C/b|0,b*=4294967296;return new d(A,0)}function I(C,A){if(C.length==0)throw Error("number format error: empty string");if(A=A||10,2>A||36<A)throw Error("radix out of range: "+A);if(C.charAt(0)=="-")return Y(I(C.substring(1),A));if(0<=C.indexOf("-"))throw Error('number format error: interior "-" character');for(var b=v(Math.pow(A,8)),R=D,O=0;O<C.length;O+=8){var k=Math.min(8,C.length-O),w=parseInt(C.substring(O,O+k),A);8>k?(k=v(Math.pow(A,k)),R=R.j(k).add(v(w))):(R=R.j(b),R=R.add(v(w)))}return R}var D=y(0),z=y(1),q=y(16777216);r=d.prototype,r.m=function(){if(W(this))return-Y(this).m();for(var C=0,A=1,b=0;b<this.g.length;b++){var R=this.i(b);C+=(0<=R?R:4294967296+R)*A,A*=4294967296}return C},r.toString=function(C){if(C=C||10,2>C||36<C)throw Error("radix out of range: "+C);if(Q(this))return"0";if(W(this))return"-"+Y(this).toString(C);for(var A=v(Math.pow(C,6)),b=this,R="";;){var O=it(b,A).g;b=et(b,O.j(A));var k=((0<b.g.length?b.g[0]:b.h)>>>0).toString(C);if(b=O,Q(b))return k+R;for(;6>k.length;)k="0"+k;R=k+R}},r.i=function(C){return 0>C?0:C<this.g.length?this.g[C]:this.h};function Q(C){if(C.h!=0)return!1;for(var A=0;A<C.g.length;A++)if(C.g[A]!=0)return!1;return!0}function W(C){return C.h==-1}r.l=function(C){return C=et(this,C),W(C)?-1:Q(C)?0:1};function Y(C){for(var A=C.g.length,b=[],R=0;R<A;R++)b[R]=~C.g[R];return new d(b,~C.h).add(z)}r.abs=function(){return W(this)?Y(this):this},r.add=function(C){for(var A=Math.max(this.g.length,C.g.length),b=[],R=0,O=0;O<=A;O++){var k=R+(this.i(O)&65535)+(C.i(O)&65535),w=(k>>>16)+(this.i(O)>>>16)+(C.i(O)>>>16);R=w>>>16,k&=65535,w&=65535,b[O]=w<<16|k}return new d(b,b[b.length-1]&-2147483648?-1:0)};function et(C,A){return C.add(Y(A))}r.j=function(C){if(Q(this)||Q(C))return D;if(W(this))return W(C)?Y(this).j(Y(C)):Y(Y(this).j(C));if(W(C))return Y(this.j(Y(C)));if(0>this.l(q)&&0>C.l(q))return v(this.m()*C.m());for(var A=this.g.length+C.g.length,b=[],R=0;R<2*A;R++)b[R]=0;for(R=0;R<this.g.length;R++)for(var O=0;O<C.g.length;O++){var k=this.i(R)>>>16,w=this.i(R)&65535,oe=C.i(O)>>>16,Ve=C.i(O)&65535;b[2*R+2*O]+=w*Ve,X(b,2*R+2*O),b[2*R+2*O+1]+=k*Ve,X(b,2*R+2*O+1),b[2*R+2*O+1]+=w*oe,X(b,2*R+2*O+1),b[2*R+2*O+2]+=k*oe,X(b,2*R+2*O+2)}for(R=0;R<A;R++)b[R]=b[2*R+1]<<16|b[2*R];for(R=A;R<2*A;R++)b[R]=0;return new d(b,0)};function X(C,A){for(;(C[A]&65535)!=C[A];)C[A+1]+=C[A]>>>16,C[A]&=65535,A++}function Z(C,A){this.g=C,this.h=A}function it(C,A){if(Q(A))throw Error("division by zero");if(Q(C))return new Z(D,D);if(W(C))return A=it(Y(C),A),new Z(Y(A.g),Y(A.h));if(W(A))return A=it(C,Y(A)),new Z(Y(A.g),A.h);if(30<C.g.length){if(W(C)||W(A))throw Error("slowDivide_ only works with positive integers.");for(var b=z,R=A;0>=R.l(C);)b=pt(b),R=pt(R);var O=ft(b,1),k=ft(R,1);for(R=ft(R,2),b=ft(b,2);!Q(R);){var w=k.add(R);0>=w.l(C)&&(O=O.add(b),k=w),R=ft(R,1),b=ft(b,1)}return A=et(C,O.j(A)),new Z(O,A)}for(O=D;0<=C.l(A);){for(b=Math.max(1,Math.floor(C.m()/A.m())),R=Math.ceil(Math.log(b)/Math.LN2),R=48>=R?1:Math.pow(2,R-48),k=v(b),w=k.j(A);W(w)||0<w.l(C);)b-=R,k=v(b),w=k.j(A);Q(k)&&(k=z),O=O.add(k),C=et(C,w)}return new Z(O,C)}r.A=function(C){return it(this,C).h},r.and=function(C){for(var A=Math.max(this.g.length,C.g.length),b=[],R=0;R<A;R++)b[R]=this.i(R)&C.i(R);return new d(b,this.h&C.h)},r.or=function(C){for(var A=Math.max(this.g.length,C.g.length),b=[],R=0;R<A;R++)b[R]=this.i(R)|C.i(R);return new d(b,this.h|C.h)},r.xor=function(C){for(var A=Math.max(this.g.length,C.g.length),b=[],R=0;R<A;R++)b[R]=this.i(R)^C.i(R);return new d(b,this.h^C.h)};function pt(C){for(var A=C.g.length+1,b=[],R=0;R<A;R++)b[R]=C.i(R)<<1|C.i(R-1)>>>31;return new d(b,C.h)}function ft(C,A){var b=A>>5;A%=32;for(var R=C.g.length-b,O=[],k=0;k<R;k++)O[k]=0<A?C.i(k+b)>>>A|C.i(k+b+1)<<32-A:C.i(k+b);return new d(O,C.h)}a.prototype.digest=a.prototype.v,a.prototype.reset=a.prototype.s,a.prototype.update=a.prototype.u,d.prototype.add=d.prototype.add,d.prototype.multiply=d.prototype.j,d.prototype.modulo=d.prototype.A,d.prototype.compare=d.prototype.l,d.prototype.toNumber=d.prototype.m,d.prototype.toString=d.prototype.toString,d.prototype.getBits=d.prototype.i,d.fromNumber=v,d.fromString=I,cm=d}).apply(typeof S_<"u"?S_:typeof self<"u"?self:typeof window<"u"?window:{});var sc=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var O0,ul,N0,mc,Md,M0,V0,k0;(function(){var r,t=typeof Object.defineProperties=="function"?Object.defineProperty:function(u,m,g){return u==Array.prototype||u==Object.prototype||(u[m]=g.value),u};function i(u){u=[typeof globalThis=="object"&&globalThis,u,typeof window=="object"&&window,typeof self=="object"&&self,typeof sc=="object"&&sc];for(var m=0;m<u.length;++m){var g=u[m];if(g&&g.Math==Math)return g}throw Error("Cannot find global object")}var a=i(this);function l(u,m){if(m)t:{var g=a;u=u.split(".");for(var E=0;E<u.length-1;E++){var L=u[E];if(!(L in g))break t;g=g[L]}u=u[u.length-1],E=g[u],m=m(E),m!=E&&m!=null&&t(g,u,{configurable:!0,writable:!0,value:m})}}function f(u,m){u instanceof String&&(u+="");var g=0,E=!1,L={next:function(){if(!E&&g<u.length){var P=g++;return{value:m(P,u[P]),done:!1}}return E=!0,{done:!0,value:void 0}}};return L[Symbol.iterator]=function(){return L},L}l("Array.prototype.values",function(u){return u||function(){return f(this,function(m,g){return g})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var d=d||{},p=this||self;function y(u){var m=typeof u;return m=m!="object"?m:u?Array.isArray(u)?"array":m:"null",m=="array"||m=="object"&&typeof u.length=="number"}function v(u){var m=typeof u;return m=="object"&&u!=null||m=="function"}function I(u,m,g){return u.call.apply(u.bind,arguments)}function D(u,m,g){if(!u)throw Error();if(2<arguments.length){var E=Array.prototype.slice.call(arguments,2);return function(){var L=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(L,E),u.apply(m,L)}}return function(){return u.apply(m,arguments)}}function z(u,m,g){return z=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?I:D,z.apply(null,arguments)}function q(u,m){var g=Array.prototype.slice.call(arguments,1);return function(){var E=g.slice();return E.push.apply(E,arguments),u.apply(this,E)}}function Q(u,m){function g(){}g.prototype=m.prototype,u.aa=m.prototype,u.prototype=new g,u.prototype.constructor=u,u.Qb=function(E,L,P){for(var $=Array(arguments.length-2),bt=2;bt<arguments.length;bt++)$[bt-2]=arguments[bt];return m.prototype[L].apply(E,$)}}function W(u){const m=u.length;if(0<m){const g=Array(m);for(let E=0;E<m;E++)g[E]=u[E];return g}return[]}function Y(u,m){for(let g=1;g<arguments.length;g++){const E=arguments[g];if(y(E)){const L=u.length||0,P=E.length||0;u.length=L+P;for(let $=0;$<P;$++)u[L+$]=E[$]}else u.push(E)}}class et{constructor(m,g){this.i=m,this.j=g,this.h=0,this.g=null}get(){let m;return 0<this.h?(this.h--,m=this.g,this.g=m.next,m.next=null):m=this.i(),m}}function X(u){return/^[\s\xa0]*$/.test(u)}function Z(){var u=p.navigator;return u&&(u=u.userAgent)?u:""}function it(u){return it[" "](u),u}it[" "]=function(){};var pt=Z().indexOf("Gecko")!=-1&&!(Z().toLowerCase().indexOf("webkit")!=-1&&Z().indexOf("Edge")==-1)&&!(Z().indexOf("Trident")!=-1||Z().indexOf("MSIE")!=-1)&&Z().indexOf("Edge")==-1;function ft(u,m,g){for(const E in u)m.call(g,u[E],E,u)}function C(u,m){for(const g in u)m.call(void 0,u[g],g,u)}function A(u){const m={};for(const g in u)m[g]=u[g];return m}const b="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function R(u,m){let g,E;for(let L=1;L<arguments.length;L++){E=arguments[L];for(g in E)u[g]=E[g];for(let P=0;P<b.length;P++)g=b[P],Object.prototype.hasOwnProperty.call(E,g)&&(u[g]=E[g])}}function O(u){var m=1;u=u.split(":");const g=[];for(;0<m&&u.length;)g.push(u.shift()),m--;return u.length&&g.push(u.join(":")),g}function k(u){p.setTimeout(()=>{throw u},0)}function w(){var u=Vt;let m=null;return u.g&&(m=u.g,u.g=u.g.next,u.g||(u.h=null),m.next=null),m}class oe{constructor(){this.h=this.g=null}add(m,g){const E=Ve.get();E.set(m,g),this.h?this.h.next=E:this.g=E,this.h=E}}var Ve=new et(()=>new J,u=>u.reset());class J{constructor(){this.next=this.g=this.h=null}set(m,g){this.h=m,this.g=g,this.next=null}reset(){this.next=this.g=this.h=null}}let ot,st=!1,Vt=new oe,qt=()=>{const u=p.Promise.resolve(void 0);ot=()=>{u.then(Yi)}};var Yi=()=>{for(var u;u=w();){try{u.h.call(u.g)}catch(g){k(g)}var m=Ve;m.j(u),100>m.h&&(m.h++,u.next=m.g,m.g=u)}st=!1};function ke(){this.s=this.s,this.C=this.C}ke.prototype.s=!1,ke.prototype.ma=function(){this.s||(this.s=!0,this.N())},ke.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function Pt(u,m){this.type=u,this.g=this.target=m,this.defaultPrevented=!1}Pt.prototype.h=function(){this.defaultPrevented=!0};var Tt=function(){if(!p.addEventListener||!Object.defineProperty)return!1;var u=!1,m=Object.defineProperty({},"passive",{get:function(){u=!0}});try{const g=()=>{};p.addEventListener("test",g,m),p.removeEventListener("test",g,m)}catch{}return u}();function me(u,m){if(Pt.call(this,u?u.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,u){var g=this.type=u.type,E=u.changedTouches&&u.changedTouches.length?u.changedTouches[0]:null;if(this.target=u.target||u.srcElement,this.g=m,m=u.relatedTarget){if(pt){t:{try{it(m.nodeName);var L=!0;break t}catch{}L=!1}L||(m=null)}}else g=="mouseover"?m=u.fromElement:g=="mouseout"&&(m=u.toElement);this.relatedTarget=m,E?(this.clientX=E.clientX!==void 0?E.clientX:E.pageX,this.clientY=E.clientY!==void 0?E.clientY:E.pageY,this.screenX=E.screenX||0,this.screenY=E.screenY||0):(this.clientX=u.clientX!==void 0?u.clientX:u.pageX,this.clientY=u.clientY!==void 0?u.clientY:u.pageY,this.screenX=u.screenX||0,this.screenY=u.screenY||0),this.button=u.button,this.key=u.key||"",this.ctrlKey=u.ctrlKey,this.altKey=u.altKey,this.shiftKey=u.shiftKey,this.metaKey=u.metaKey,this.pointerId=u.pointerId||0,this.pointerType=typeof u.pointerType=="string"?u.pointerType:Za[u.pointerType]||"",this.state=u.state,this.i=u,u.defaultPrevented&&me.aa.h.call(this)}}Q(me,Pt);var Za={2:"touch",3:"pen",4:"mouse"};me.prototype.h=function(){me.aa.h.call(this);var u=this.i;u.preventDefault?u.preventDefault():u.returnValue=!1};var Nn="closure_listenable_"+(1e6*Math.random()|0),fn=0;function ne(u,m,g,E,L){this.listener=u,this.proxy=null,this.src=m,this.type=g,this.capture=!!E,this.ha=L,this.key=++fn,this.da=this.fa=!1}function Ot(u){u.da=!0,u.listener=null,u.proxy=null,u.src=null,u.ha=null}function je(u){this.src=u,this.g={},this.h=0}je.prototype.add=function(u,m,g,E,L){var P=u.toString();u=this.g[P],u||(u=this.g[P]=[],this.h++);var $=hn(u,m,E,L);return-1<$?(m=u[$],g||(m.fa=!1)):(m=new ne(m,this.src,P,!!E,L),m.fa=g,u.push(m)),m};function hi(u,m){var g=m.type;if(g in u.g){var E=u.g[g],L=Array.prototype.indexOf.call(E,m,void 0),P;(P=0<=L)&&Array.prototype.splice.call(E,L,1),P&&(Ot(m),u.g[g].length==0&&(delete u.g[g],u.h--))}}function hn(u,m,g,E){for(var L=0;L<u.length;++L){var P=u[L];if(!P.da&&P.listener==m&&P.capture==!!g&&P.ha==E)return L}return-1}var Xi="closure_lm_"+(1e6*Math.random()|0),$i={};function di(u,m,g,E,L){if(Array.isArray(m)){for(var P=0;P<m.length;P++)di(u,m[P],g,E,L);return null}return g=xl(g),u&&u[Nn]?u.K(m,g,v(E)?!!E.capture:!1,L):Wa(u,m,g,!1,E,L)}function Wa(u,m,g,E,L,P){if(!m)throw Error("Invalid event type");var $=v(L)?!!L.capture:!!L,bt=Ja(u);if(bt||(u[Xi]=bt=new je(u)),g=bt.add(m,g,E,$,P),g.proxy)return g;if(E=Gs(),g.proxy=E,E.src=u,E.listener=g,u.addEventListener)Tt||(L=$),L===void 0&&(L=!1),u.addEventListener(m.toString(),E,L);else if(u.attachEvent)u.attachEvent(Qs(m.toString()),E);else if(u.addListener&&u.removeListener)u.addListener(E);else throw Error("addEventListener and attachEvent are unavailable.");return g}function Gs(){function u(g){return m.call(u.src,u.listener,g)}const m=af;return u}function Ks(u,m,g,E,L){if(Array.isArray(m))for(var P=0;P<m.length;P++)Ks(u,m[P],g,E,L);else E=v(E)?!!E.capture:!!E,g=xl(g),u&&u[Nn]?(u=u.i,m=String(m).toString(),m in u.g&&(P=u.g[m],g=hn(P,g,E,L),-1<g&&(Ot(P[g]),Array.prototype.splice.call(P,g,1),P.length==0&&(delete u.g[m],u.h--)))):u&&(u=Ja(u))&&(m=u.g[m.toString()],u=-1,m&&(u=hn(m,g,E,L)),(g=-1<u?m[u]:null)&&Qr(g))}function Qr(u){if(typeof u!="number"&&u&&!u.da){var m=u.src;if(m&&m[Nn])hi(m.i,u);else{var g=u.type,E=u.proxy;m.removeEventListener?m.removeEventListener(g,E,u.capture):m.detachEvent?m.detachEvent(Qs(g),E):m.addListener&&m.removeListener&&m.removeListener(E),(g=Ja(m))?(hi(g,u),g.h==0&&(g.src=null,m[Xi]=null)):Ot(u)}}}function Qs(u){return u in $i?$i[u]:$i[u]="on"+u}function af(u,m){if(u.da)u=!0;else{m=new me(m,this);var g=u.listener,E=u.ha||u.src;u.fa&&Qr(u),u=g.call(E,m)}return u}function Ja(u){return u=u[Xi],u instanceof je?u:null}var Xe="__closure_events_fn_"+(1e9*Math.random()>>>0);function xl(u){return typeof u=="function"?u:(u[Xe]||(u[Xe]=function(m){return u.handleEvent(m)}),u[Xe])}function le(){ke.call(this),this.i=new je(this),this.M=this,this.F=null}Q(le,ke),le.prototype[Nn]=!0,le.prototype.removeEventListener=function(u,m,g,E){Ks(this,u,m,g,E)};function pe(u,m){var g,E=u.F;if(E)for(g=[];E;E=E.F)g.push(E);if(u=u.M,E=m.type||m,typeof m=="string")m=new Pt(m,u);else if(m instanceof Pt)m.target=m.target||u;else{var L=m;m=new Pt(E,u),R(m,L)}if(L=!0,g)for(var P=g.length-1;0<=P;P--){var $=m.g=g[P];L=mi($,E,!0,m)&&L}if($=m.g=u,L=mi($,E,!0,m)&&L,L=mi($,E,!1,m)&&L,g)for(P=0;P<g.length;P++)$=m.g=g[P],L=mi($,E,!1,m)&&L}le.prototype.N=function(){if(le.aa.N.call(this),this.i){var u=this.i,m;for(m in u.g){for(var g=u.g[m],E=0;E<g.length;E++)Ot(g[E]);delete u.g[m],u.h--}}this.F=null},le.prototype.K=function(u,m,g,E){return this.i.add(String(u),m,!1,g,E)},le.prototype.L=function(u,m,g,E){return this.i.add(String(u),m,!0,g,E)};function mi(u,m,g,E){if(m=u.i.g[String(m)],!m)return!0;m=m.concat();for(var L=!0,P=0;P<m.length;++P){var $=m[P];if($&&!$.da&&$.capture==g){var bt=$.listener,ce=$.ha||$.src;$.fa&&hi(u.i,$),L=bt.call(ce,E)!==!1&&L}}return L&&!E.defaultPrevented}function Pl(u,m,g){if(typeof u=="function")g&&(u=z(u,g));else if(u&&typeof u.handleEvent=="function")u=z(u.handleEvent,u);else throw Error("Invalid listener argument");return 2147483647<Number(m)?-1:p.setTimeout(u,m||0)}function to(u){u.g=Pl(()=>{u.g=null,u.i&&(u.i=!1,to(u))},u.l);const m=u.h;u.h=null,u.m.apply(null,m)}class of extends ke{constructor(m,g){super(),this.m=m,this.l=g,this.h=null,this.i=!1,this.g=null}j(m){this.h=arguments,this.g?this.i=!0:to(this)}N(){super.N(),this.g&&(p.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Yr(u){ke.call(this),this.h=u,this.g={}}Q(Yr,ke);var Zi=[];function Le(u){ft(u.g,function(m,g){this.g.hasOwnProperty(g)&&Qr(m)},u),u.g={}}Yr.prototype.N=function(){Yr.aa.N.call(this),Le(this)},Yr.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var eo=p.JSON.stringify,Fn=p.JSON.parse,qe=class{stringify(u){return p.JSON.stringify(u,void 0)}parse(u){return p.JSON.parse(u,void 0)}};function no(){}no.prototype.h=null;function zl(u){return u.h||(u.h=u.i())}function Bl(){}var Gn={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function Wi(){Pt.call(this,"d")}Q(Wi,Pt);function Mn(){Pt.call(this,"c")}Q(Mn,Pt);var dn={},Ji=null;function Ys(){return Ji=Ji||new le}dn.La="serverreachability";function io(u){Pt.call(this,dn.La,u)}Q(io,Pt);function tr(u){const m=Ys();pe(m,new io(m))}dn.STAT_EVENT="statevent";function Xs(u,m){Pt.call(this,dn.STAT_EVENT,u),this.stat=m}Q(Xs,Pt);function te(u){const m=Ys();pe(m,new Xs(m,u))}dn.Ma="timingevent";function Hl(u,m){Pt.call(this,dn.Ma,u),this.size=m}Q(Hl,Pt);function er(u,m){if(typeof u!="function")throw Error("Fn must not be null and must be a function");return p.setTimeout(function(){u()},m)}function nr(){this.g=!0}nr.prototype.xa=function(){this.g=!1};function jl(u,m,g,E,L,P){u.info(function(){if(u.g)if(P)for(var $="",bt=P.split("&"),ce=0;ce<bt.length;ce++){var At=bt[ce].split("=");if(1<At.length){var _e=At[0];At=At[1];var fe=_e.split("_");$=2<=fe.length&&fe[1]=="type"?$+(_e+"="+At+"&"):$+(_e+"=redacted&")}}else $=null;else $=P;return"XMLHTTP REQ ("+E+") [attempt "+L+"]: "+m+`
`+g+`
`+$})}function ql(u,m,g,E,L,P,$){u.info(function(){return"XMLHTTP RESP ("+E+") [ attempt "+L+"]: "+m+`
`+g+`
`+P+" "+$})}function ir(u,m,g,E){u.info(function(){return"XMLHTTP TEXT ("+m+"): "+ge(u,g)+(E?" "+E:"")})}function Kn(u,m){u.info(function(){return"TIMEOUT: "+m})}nr.prototype.info=function(){};function ge(u,m){if(!u.g)return m;if(!m)return null;try{var g=JSON.parse(m);if(g){for(u=0;u<g.length;u++)if(Array.isArray(g[u])){var E=g[u];if(!(2>E.length)){var L=E[1];if(Array.isArray(L)&&!(1>L.length)){var P=L[0];if(P!="noop"&&P!="stop"&&P!="close")for(var $=1;$<L.length;$++)L[$]=""}}}}return eo(g)}catch{return m}}var ue={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},pi={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},Xr;function $s(){}Q($s,no),$s.prototype.g=function(){return new XMLHttpRequest},$s.prototype.i=function(){return{}},Xr=new $s;function Qn(u,m,g,E){this.j=u,this.i=m,this.l=g,this.R=E||1,this.U=new Yr(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new ro}function ro(){this.i=null,this.g="",this.h=!1}var rr={},$r={};function Vn(u,m,g){u.L=1,u.v=Jr(Yt(m)),u.m=g,u.P=!0,gi(u,null)}function gi(u,m){u.F=Date.now(),Gt(u),u.A=Yt(u.v);var g=u.A,E=u.R;Array.isArray(E)||(E=[String(E)]),vi(g.i,"t",E),u.C=0,g=u.j.J,u.h=new ro,u.g=iu(u.j,g?m:null,!u.m),0<u.O&&(u.M=new of(z(u.Y,u,u.g),u.O)),m=u.U,g=u.g,E=u.ca;var L="readystatechange";Array.isArray(L)||(L&&(Zi[0]=L.toString()),L=Zi);for(var P=0;P<L.length;P++){var $=di(g,L[P],E||m.handleEvent,!1,m.h||m);if(!$)break;m.g[$.key]=$}m=u.H?A(u.H):{},u.m?(u.u||(u.u="POST"),m["Content-Type"]="application/x-www-form-urlencoded",u.g.ea(u.A,u.u,u.m,m)):(u.u="GET",u.g.ea(u.A,u.u,null,m)),tr(),jl(u.i,u.u,u.A,u.l,u.R,u.m)}Qn.prototype.ca=function(u){u=u.target;const m=this.M;m&&_n(u)==3?m.j():this.Y(u)},Qn.prototype.Y=function(u){try{if(u==this.g)t:{const fe=_n(this.g);var m=this.g.Ba();const Ai=this.g.Z();if(!(3>fe)&&(fe!=3||this.g&&(this.h.h||this.g.oa()||Xl(this.g)))){this.J||fe!=4||m==7||(m==8||0>=Ai?tr(3):tr(2)),Zs(this);var g=this.g.Z();this.X=g;e:if(sr(this)){var E=Xl(this.g);u="";var L=E.length,P=_n(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){$e(this),nn(this);var $="";break e}this.h.i=new p.TextDecoder}for(m=0;m<L;m++)this.h.h=!0,u+=this.h.i.decode(E[m],{stream:!(P&&m==L-1)});E.length=0,this.h.g+=u,this.C=0,$=this.h.g}else $=this.g.oa();if(this.o=g==200,ql(this.i,this.u,this.A,this.l,this.R,fe,g),this.o){if(this.T&&!this.K){e:{if(this.g){var bt,ce=this.g;if((bt=ce.g?ce.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!X(bt)){var At=bt;break e}}At=null}if(g=At)ir(this.i,this.l,g,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,rn(this,g);else{this.o=!1,this.s=3,te(12),$e(this),nn(this);break t}}if(this.P){g=!0;let we;for(;!this.J&&this.C<$.length;)if(we=ar(this,$),we==$r){fe==4&&(this.s=4,te(14),g=!1),ir(this.i,this.l,null,"[Incomplete Response]");break}else if(we==rr){this.s=4,te(15),ir(this.i,this.l,$,"[Invalid Chunk]"),g=!1;break}else ir(this.i,this.l,we,null),rn(this,we);if(sr(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),fe!=4||$.length!=0||this.h.h||(this.s=1,te(16),g=!1),this.o=this.o&&g,!g)ir(this.i,this.l,$,"[Invalid Chunked Response]"),$e(this),nn(this);else if(0<$.length&&!this.W){this.W=!0;var _e=this.j;_e.g==this&&_e.ba&&!_e.M&&(_e.j.info("Great, no buffering proxy detected. Bytes received: "+$.length),as(_e),_e.M=!0,te(11))}}else ir(this.i,this.l,$,null),rn(this,$);fe==4&&$e(this),this.o&&!this.J&&(fe==4?tu(this.j,this):(this.o=!1,Gt(this)))}else df(this.g),g==400&&0<$.indexOf("Unknown SID")?(this.s=3,te(12)):(this.s=0,te(13)),$e(this),nn(this)}}}catch{}finally{}};function sr(u){return u.g?u.u=="GET"&&u.L!=2&&u.j.Ca:!1}function ar(u,m){var g=u.C,E=m.indexOf(`
`,g);return E==-1?$r:(g=Number(m.substring(g,E)),isNaN(g)?rr:(E+=1,E+g>m.length?$r:(m=m.slice(E,E+g),u.C=E+g,m)))}Qn.prototype.cancel=function(){this.J=!0,$e(this)};function Gt(u){u.S=Date.now()+u.I,so(u,u.I)}function so(u,m){if(u.B!=null)throw Error("WatchDog timer not null");u.B=er(z(u.ba,u),m)}function Zs(u){u.B&&(p.clearTimeout(u.B),u.B=null)}Qn.prototype.ba=function(){this.B=null;const u=Date.now();0<=u-this.S?(Kn(this.i,this.A),this.L!=2&&(tr(),te(17)),$e(this),this.s=2,nn(this)):so(this,this.S-u)};function nn(u){u.j.G==0||u.J||tu(u.j,u)}function $e(u){Zs(u);var m=u.M;m&&typeof m.ma=="function"&&m.ma(),u.M=null,Le(u.U),u.g&&(m=u.g,u.g=null,m.abort(),m.ma())}function rn(u,m){try{var g=u.j;if(g.G!=0&&(g.g==u||or(g.h,u))){if(!u.K&&or(g.h,u)&&g.G==3){try{var E=g.Da.g.parse(m)}catch{E=null}if(Array.isArray(E)&&E.length==3){var L=E;if(L[0]==0){t:if(!g.u){if(g.g)if(g.g.F+3e3<u.F)oa(g),sa(g);else break t;yo(g),te(18)}}else g.za=L[1],0<g.za-g.T&&37500>L[2]&&g.F&&g.v==0&&!g.C&&(g.C=er(z(g.Za,g),6e3));if(1>=Fl(g.h)&&g.ca){try{g.ca()}catch{}g.ca=void 0}}else bi(g,11)}else if((u.K||g.g==u)&&oa(g),!X(m))for(L=g.Da.g.parse(m),m=0;m<L.length;m++){let At=L[m];if(g.T=At[0],At=At[1],g.G==2)if(At[0]=="c"){g.K=At[1],g.ia=At[2];const _e=At[3];_e!=null&&(g.la=_e,g.j.info("VER="+g.la));const fe=At[4];fe!=null&&(g.Aa=fe,g.j.info("SVER="+g.Aa));const Ai=At[5];Ai!=null&&typeof Ai=="number"&&0<Ai&&(E=1.5*Ai,g.L=E,g.j.info("backChannelRequestTimeoutMs_="+E)),E=g;const we=u.g;if(we){const ti=we.g?we.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(ti){var P=E.h;P.g||ti.indexOf("spdy")==-1&&ti.indexOf("quic")==-1&&ti.indexOf("h2")==-1||(P.j=P.l,P.g=new Set,P.h&&(lr(P,P.h),P.h=null))}if(E.D){const vo=we.g?we.g.getResponseHeader("X-HTTP-Session-Id"):null;vo&&(E.ya=vo,Rt(E.I,E.D,vo))}}g.G=3,g.l&&g.l.ua(),g.ba&&(g.R=Date.now()-u.F,g.j.info("Handshake RTT: "+g.R+"ms")),E=g;var $=u;if(E.qa=nu(E,E.J?E.ia:null,E.W),$.K){mn(E.h,$);var bt=$,ce=E.L;ce&&(bt.I=ce),bt.B&&(Zs(bt),Gt(bt)),E.g=$}else Wl(E);0<g.i.length&&aa(g)}else At[0]!="stop"&&At[0]!="close"||bi(g,7);else g.G==3&&(At[0]=="stop"||At[0]=="close"?At[0]=="stop"?bi(g,7):po(g):At[0]!="noop"&&g.l&&g.l.ta(At),g.v=0)}}tr(4)}catch{}}var lf=class{constructor(u,m){this.g=u,this.map=m}};function ao(u){this.l=u||10,p.PerformanceNavigationTiming?(u=p.performance.getEntriesByType("navigation"),u=0<u.length&&(u[0].nextHopProtocol=="hq"||u[0].nextHopProtocol=="h2")):u=!!(p.chrome&&p.chrome.loadTimes&&p.chrome.loadTimes()&&p.chrome.loadTimes().wasFetchedViaSpdy),this.j=u?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function oo(u){return u.h?!0:u.g?u.g.size>=u.j:!1}function Fl(u){return u.h?1:u.g?u.g.size:0}function or(u,m){return u.h?u.h==m:u.g?u.g.has(m):!1}function lr(u,m){u.g?u.g.add(m):u.h=m}function mn(u,m){u.h&&u.h==m?u.h=null:u.g&&u.g.has(m)&&u.g.delete(m)}ao.prototype.cancel=function(){if(this.i=Fe(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const u of this.g.values())u.cancel();this.g.clear()}};function Fe(u){if(u.h!=null)return u.i.concat(u.h.D);if(u.g!=null&&u.g.size!==0){let m=u.i;for(const g of u.g.values())m=m.concat(g.D);return m}return W(u.i)}function Gl(u){if(u.V&&typeof u.V=="function")return u.V();if(typeof Map<"u"&&u instanceof Map||typeof Set<"u"&&u instanceof Set)return Array.from(u.values());if(typeof u=="string")return u.split("");if(y(u)){for(var m=[],g=u.length,E=0;E<g;E++)m.push(u[E]);return m}m=[],g=0;for(E in u)m[g++]=u[E];return m}function uf(u){if(u.na&&typeof u.na=="function")return u.na();if(!u.V||typeof u.V!="function"){if(typeof Map<"u"&&u instanceof Map)return Array.from(u.keys());if(!(typeof Set<"u"&&u instanceof Set)){if(y(u)||typeof u=="string"){var m=[];u=u.length;for(var g=0;g<u;g++)m.push(g);return m}m=[],g=0;for(const E in u)m[g++]=E;return m}}}function Zr(u,m){if(u.forEach&&typeof u.forEach=="function")u.forEach(m,void 0);else if(y(u)||typeof u=="string")Array.prototype.forEach.call(u,m,void 0);else for(var g=uf(u),E=Gl(u),L=E.length,P=0;P<L;P++)m.call(void 0,E[P],g&&g[P],u)}var lo=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function Ws(u,m){if(u){u=u.split("&");for(var g=0;g<u.length;g++){var E=u[g].indexOf("="),L=null;if(0<=E){var P=u[g].substring(0,E);L=u[g].substring(E+1)}else P=u[g];m(P,L?decodeURIComponent(L.replace(/\+/g," ")):"")}}}function yi(u){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,u instanceof yi){this.h=u.h,ur(this,u.j),this.o=u.o,this.g=u.g,Wr(this,u.s),this.l=u.l;var m=u.i,g=new Yn;g.i=m.i,m.g&&(g.g=new Map(m.g),g.h=m.h),Js(this,g),this.m=u.m}else u&&(m=String(u).match(lo))?(this.h=!1,ur(this,m[1]||"",!0),this.o=cr(m[2]||""),this.g=cr(m[3]||"",!0),Wr(this,m[4]),this.l=cr(m[5]||"",!0),Js(this,m[6]||"",!0),this.m=cr(m[7]||"")):(this.h=!1,this.i=new Yn(null,this.h))}yi.prototype.toString=function(){var u=[],m=this.j;m&&u.push(pn(m,uo,!0),":");var g=this.g;return(g||m=="file")&&(u.push("//"),(m=this.o)&&u.push(pn(m,uo,!0),"@"),u.push(encodeURIComponent(String(g)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),g=this.s,g!=null&&u.push(":",String(g))),(g=this.l)&&(this.g&&g.charAt(0)!="/"&&u.push("/"),u.push(pn(g,g.charAt(0)=="/"?co:Kl,!0))),(g=this.i.toString())&&u.push("?",g),(g=this.m)&&u.push("#",pn(g,hf)),u.join("")};function Yt(u){return new yi(u)}function ur(u,m,g){u.j=g?cr(m,!0):m,u.j&&(u.j=u.j.replace(/:$/,""))}function Wr(u,m){if(m){if(m=Number(m),isNaN(m)||0>m)throw Error("Bad port number "+m);u.s=m}else u.s=null}function Js(u,m,g){m instanceof Yn?(u.i=m,fo(u.i,u.h)):(g||(m=pn(m,ff)),u.i=new Yn(m,u.h))}function Rt(u,m,g){u.i.set(m,g)}function Jr(u){return Rt(u,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),u}function cr(u,m){return u?m?decodeURI(u.replace(/%25/g,"%2525")):decodeURIComponent(u):""}function pn(u,m,g){return typeof u=="string"?(u=encodeURI(u).replace(m,cf),g&&(u=u.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),u):null}function cf(u){return u=u.charCodeAt(0),"%"+(u>>4&15).toString(16)+(u&15).toString(16)}var uo=/[#\/\?@]/g,Kl=/[#\?:]/g,co=/[#\?]/g,ff=/[#\?@]/g,hf=/#/g;function Yn(u,m){this.h=this.g=null,this.i=u||null,this.j=!!m}function gn(u){u.g||(u.g=new Map,u.h=0,u.i&&Ws(u.i,function(m,g){u.add(decodeURIComponent(m.replace(/\+/g," ")),g)}))}r=Yn.prototype,r.add=function(u,m){gn(this),this.i=null,u=Ti(this,u);var g=this.g.get(u);return g||this.g.set(u,g=[]),g.push(m),this.h+=1,this};function ta(u,m){gn(u),m=Ti(u,m),u.g.has(m)&&(u.i=null,u.h-=u.g.get(m).length,u.g.delete(m))}function _i(u,m){return gn(u),m=Ti(u,m),u.g.has(m)}r.forEach=function(u,m){gn(this),this.g.forEach(function(g,E){g.forEach(function(L){u.call(m,L,E,this)},this)},this)},r.na=function(){gn(this);const u=Array.from(this.g.values()),m=Array.from(this.g.keys()),g=[];for(let E=0;E<m.length;E++){const L=u[E];for(let P=0;P<L.length;P++)g.push(m[E])}return g},r.V=function(u){gn(this);let m=[];if(typeof u=="string")_i(this,u)&&(m=m.concat(this.g.get(Ti(this,u))));else{u=Array.from(this.g.values());for(let g=0;g<u.length;g++)m=m.concat(u[g])}return m},r.set=function(u,m){return gn(this),this.i=null,u=Ti(this,u),_i(this,u)&&(this.h-=this.g.get(u).length),this.g.set(u,[m]),this.h+=1,this},r.get=function(u,m){return u?(u=this.V(u),0<u.length?String(u[0]):m):m};function vi(u,m,g){ta(u,m),0<g.length&&(u.i=null,u.g.set(Ti(u,m),W(g)),u.h+=g.length)}r.toString=function(){if(this.i)return this.i;if(!this.g)return"";const u=[],m=Array.from(this.g.keys());for(var g=0;g<m.length;g++){var E=m[g];const P=encodeURIComponent(String(E)),$=this.V(E);for(E=0;E<$.length;E++){var L=P;$[E]!==""&&(L+="="+encodeURIComponent(String($[E]))),u.push(L)}}return this.i=u.join("&")};function Ti(u,m){return m=String(m),u.j&&(m=m.toLowerCase()),m}function fo(u,m){m&&!u.j&&(gn(u),u.i=null,u.g.forEach(function(g,E){var L=E.toLowerCase();E!=L&&(ta(this,E),vi(this,L,g))},u)),u.j=m}function Ql(u,m){const g=new nr;if(p.Image){const E=new Image;E.onload=q(yn,g,"TestLoadImage: loaded",!0,m,E),E.onerror=q(yn,g,"TestLoadImage: error",!1,m,E),E.onabort=q(yn,g,"TestLoadImage: abort",!1,m,E),E.ontimeout=q(yn,g,"TestLoadImage: timeout",!1,m,E),p.setTimeout(function(){E.ontimeout&&E.ontimeout()},1e4),E.src=u}else m(!1)}function ts(u,m){const g=new nr,E=new AbortController,L=setTimeout(()=>{E.abort(),yn(g,"TestPingServer: timeout",!1,m)},1e4);fetch(u,{signal:E.signal}).then(P=>{clearTimeout(L),P.ok?yn(g,"TestPingServer: ok",!0,m):yn(g,"TestPingServer: server error",!1,m)}).catch(()=>{clearTimeout(L),yn(g,"TestPingServer: error",!1,m)})}function yn(u,m,g,E,L){try{L&&(L.onload=null,L.onerror=null,L.onabort=null,L.ontimeout=null),E(g)}catch{}}function es(){this.g=new qe}function Xn(u,m,g){const E=g||"";try{Zr(u,function(L,P){let $=L;v(L)&&($=eo(L)),m.push(E+P+"="+encodeURIComponent($))})}catch(L){throw m.push(E+"type="+encodeURIComponent("_badmap")),L}}function fr(u){this.l=u.Ub||null,this.j=u.eb||!1}Q(fr,no),fr.prototype.g=function(){return new Ei(this.l,this.j)},fr.prototype.i=function(u){return function(){return u}}({});function Ei(u,m){le.call(this),this.D=u,this.o=m,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}Q(Ei,le),r=Ei.prototype,r.open=function(u,m){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=u,this.A=m,this.readyState=1,Zn(this)},r.send=function(u){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const m={headers:this.u,method:this.B,credentials:this.m,cache:void 0};u&&(m.body=u),(this.D||p).fetch(new Request(this.A,m)).then(this.Sa.bind(this),this.ga.bind(this))},r.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,$n(this)),this.readyState=0},r.Sa=function(u){if(this.g&&(this.l=u,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=u.headers,this.readyState=2,Zn(this)),this.g&&(this.readyState=3,Zn(this),this.g)))if(this.responseType==="arraybuffer")u.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof p.ReadableStream<"u"&&"body"in u){if(this.j=u.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;ho(this)}else u.text().then(this.Ra.bind(this),this.ga.bind(this))};function ho(u){u.j.read().then(u.Pa.bind(u)).catch(u.ga.bind(u))}r.Pa=function(u){if(this.g){if(this.o&&u.value)this.response.push(u.value);else if(!this.o){var m=u.value?u.value:new Uint8Array(0);(m=this.v.decode(m,{stream:!u.done}))&&(this.response=this.responseText+=m)}u.done?$n(this):Zn(this),this.readyState==3&&ho(this)}},r.Ra=function(u){this.g&&(this.response=this.responseText=u,$n(this))},r.Qa=function(u){this.g&&(this.response=u,$n(this))},r.ga=function(){this.g&&$n(this)};function $n(u){u.readyState=4,u.l=null,u.j=null,u.v=null,Zn(u)}r.setRequestHeader=function(u,m){this.u.append(u,m)},r.getResponseHeader=function(u){return this.h&&this.h.get(u.toLowerCase())||""},r.getAllResponseHeaders=function(){if(!this.h)return"";const u=[],m=this.h.entries();for(var g=m.next();!g.done;)g=g.value,u.push(g[0]+": "+g[1]),g=m.next();return u.join(`\r
`)};function Zn(u){u.onreadystatechange&&u.onreadystatechange.call(u)}Object.defineProperty(Ei.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(u){this.m=u?"include":"same-origin"}});function mo(u){let m="";return ft(u,function(g,E){m+=E,m+=":",m+=g,m+=`\r
`}),m}function ye(u,m,g){t:{for(E in g){var E=!1;break t}E=!0}E||(g=mo(g),typeof u=="string"?g!=null&&encodeURIComponent(String(g)):Rt(u,m,g))}function Dt(u){le.call(this),this.headers=new Map,this.o=u||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}Q(Dt,le);var ea=/^https?$/i,ns=["POST","PUT"];r=Dt.prototype,r.Ha=function(u){this.J=u},r.ea=function(u,m,g,E){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+u);m=m?m.toUpperCase():"GET",this.D=u,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():Xr.g(),this.v=this.o?zl(this.o):zl(Xr),this.g.onreadystatechange=z(this.Ea,this);try{this.B=!0,this.g.open(m,String(u),!0),this.B=!1}catch(P){Yl(this,P);return}if(u=g||"",g=new Map(this.headers),E)if(Object.getPrototypeOf(E)===Object.prototype)for(var L in E)g.set(L,E[L]);else if(typeof E.keys=="function"&&typeof E.get=="function")for(const P of E.keys())g.set(P,E.get(P));else throw Error("Unknown input type for opt_headers: "+String(E));E=Array.from(g.keys()).find(P=>P.toLowerCase()=="content-type"),L=p.FormData&&u instanceof p.FormData,!(0<=Array.prototype.indexOf.call(ns,m,void 0))||E||L||g.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[P,$]of g)this.g.setRequestHeader(P,$);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{is(this),this.u=!0,this.g.send(u),this.u=!1}catch(P){Yl(this,P)}};function Yl(u,m){u.h=!1,u.g&&(u.j=!0,u.g.abort(),u.j=!1),u.l=m,u.m=5,na(u),Wn(u)}function na(u){u.A||(u.A=!0,pe(u,"complete"),pe(u,"error"))}r.abort=function(u){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=u||7,pe(this,"complete"),pe(this,"abort"),Wn(this))},r.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),Wn(this,!0)),Dt.aa.N.call(this)},r.Ea=function(){this.s||(this.B||this.u||this.j?ia(this):this.bb())},r.bb=function(){ia(this)};function ia(u){if(u.h&&typeof d<"u"&&(!u.v[1]||_n(u)!=4||u.Z()!=2)){if(u.u&&_n(u)==4)Pl(u.Ea,0,u);else if(pe(u,"readystatechange"),_n(u)==4){u.h=!1;try{const $=u.Z();t:switch($){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var m=!0;break t;default:m=!1}var g;if(!(g=m)){var E;if(E=$===0){var L=String(u.D).match(lo)[1]||null;!L&&p.self&&p.self.location&&(L=p.self.location.protocol.slice(0,-1)),E=!ea.test(L?L.toLowerCase():"")}g=E}if(g)pe(u,"complete"),pe(u,"success");else{u.m=6;try{var P=2<_n(u)?u.g.statusText:""}catch{P=""}u.l=P+" ["+u.Z()+"]",na(u)}}finally{Wn(u)}}}}function Wn(u,m){if(u.g){is(u);const g=u.g,E=u.v[0]?()=>{}:null;u.g=null,u.v=null,m||pe(u,"ready");try{g.onreadystatechange=E}catch{}}}function is(u){u.I&&(p.clearTimeout(u.I),u.I=null)}r.isActive=function(){return!!this.g};function _n(u){return u.g?u.g.readyState:0}r.Z=function(){try{return 2<_n(this)?this.g.status:-1}catch{return-1}},r.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},r.Oa=function(u){if(this.g){var m=this.g.responseText;return u&&m.indexOf(u)==0&&(m=m.substring(u.length)),Fn(m)}};function Xl(u){try{if(!u.g)return null;if("response"in u.g)return u.g.response;switch(u.H){case"":case"text":return u.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in u.g)return u.g.mozResponseArrayBuffer}return null}catch{return null}}function df(u){const m={};u=(u.g&&2<=_n(u)&&u.g.getAllResponseHeaders()||"").split(`\r
`);for(let E=0;E<u.length;E++){if(X(u[E]))continue;var g=O(u[E]);const L=g[0];if(g=g[1],typeof g!="string")continue;g=g.trim();const P=m[L]||[];m[L]=P,P.push(g)}C(m,function(E){return E.join(", ")})}r.Ba=function(){return this.m},r.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function rs(u,m,g){return g&&g.internalChannelParams&&g.internalChannelParams[u]||m}function ra(u){this.Aa=0,this.i=[],this.j=new nr,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=rs("failFast",!1,u),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=rs("baseRetryDelayMs",5e3,u),this.cb=rs("retryDelaySeedMs",1e4,u),this.Wa=rs("forwardChannelMaxRetries",2,u),this.wa=rs("forwardChannelRequestTimeoutMs",2e4,u),this.pa=u&&u.xmlHttpFactory||void 0,this.Xa=u&&u.Tb||void 0,this.Ca=u&&u.useFetchStreams||!1,this.L=void 0,this.J=u&&u.supportsCrossDomainXhr||!1,this.K="",this.h=new ao(u&&u.concurrentRequestLimit),this.Da=new es,this.P=u&&u.fastHandshake||!1,this.O=u&&u.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=u&&u.Rb||!1,u&&u.xa&&this.j.xa(),u&&u.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&u&&u.detectBufferingProxy||!1,this.ja=void 0,u&&u.longPollingTimeout&&0<u.longPollingTimeout&&(this.ja=u.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}r=ra.prototype,r.la=8,r.G=1,r.connect=function(u,m,g,E){te(0),this.W=u,this.H=m||{},g&&E!==void 0&&(this.H.OSID=g,this.H.OAID=E),this.F=this.X,this.I=nu(this,null,this.W),aa(this)};function po(u){if($l(u),u.G==3){var m=u.U++,g=Yt(u.I);if(Rt(g,"SID",u.K),Rt(g,"RID",m),Rt(g,"TYPE","terminate"),ss(u,g),m=new Qn(u,u.j,m),m.L=2,m.v=Jr(Yt(g)),g=!1,p.navigator&&p.navigator.sendBeacon)try{g=p.navigator.sendBeacon(m.v.toString(),"")}catch{}!g&&p.Image&&(new Image().src=m.v,g=!0),g||(m.g=iu(m.j,null),m.g.ea(m.v)),m.F=Date.now(),Gt(m)}eu(u)}function sa(u){u.g&&(as(u),u.g.cancel(),u.g=null)}function $l(u){sa(u),u.u&&(p.clearTimeout(u.u),u.u=null),oa(u),u.h.cancel(),u.s&&(typeof u.s=="number"&&p.clearTimeout(u.s),u.s=null)}function aa(u){if(!oo(u.h)&&!u.s){u.s=!0;var m=u.Ga;ot||qt(),st||(ot(),st=!0),Vt.add(m,u),u.B=0}}function mf(u,m){return Fl(u.h)>=u.h.j-(u.s?1:0)?!1:u.s?(u.i=m.D.concat(u.i),!0):u.G==1||u.G==2||u.B>=(u.Va?0:u.Wa)?!1:(u.s=er(z(u.Ga,u,m),_o(u,u.B)),u.B++,!0)}r.Ga=function(u){if(this.s)if(this.s=null,this.G==1){if(!u){this.U=Math.floor(1e5*Math.random()),u=this.U++;const L=new Qn(this,this.j,u);let P=this.o;if(this.S&&(P?(P=A(P),R(P,this.S)):P=this.S),this.m!==null||this.O||(L.H=P,P=null),this.P)t:{for(var m=0,g=0;g<this.i.length;g++){e:{var E=this.i[g];if("__data__"in E.map&&(E=E.map.__data__,typeof E=="string")){E=E.length;break e}E=void 0}if(E===void 0)break;if(m+=E,4096<m){m=g;break t}if(m===4096||g===this.i.length-1){m=g+1;break t}}m=1e3}else m=1e3;m=Zl(this,L,m),g=Yt(this.I),Rt(g,"RID",u),Rt(g,"CVER",22),this.D&&Rt(g,"X-HTTP-Session-Id",this.D),ss(this,g),P&&(this.O?m="headers="+encodeURIComponent(String(mo(P)))+"&"+m:this.m&&ye(g,this.m,P)),lr(this.h,L),this.Ua&&Rt(g,"TYPE","init"),this.P?(Rt(g,"$req",m),Rt(g,"SID","null"),L.T=!0,Vn(L,g,null)):Vn(L,g,m),this.G=2}}else this.G==3&&(u?go(this,u):this.i.length==0||oo(this.h)||go(this))};function go(u,m){var g;m?g=m.l:g=u.U++;const E=Yt(u.I);Rt(E,"SID",u.K),Rt(E,"RID",g),Rt(E,"AID",u.T),ss(u,E),u.m&&u.o&&ye(E,u.m,u.o),g=new Qn(u,u.j,g,u.B+1),u.m===null&&(g.H=u.o),m&&(u.i=m.D.concat(u.i)),m=Zl(u,g,1e3),g.I=Math.round(.5*u.wa)+Math.round(.5*u.wa*Math.random()),lr(u.h,g),Vn(g,E,m)}function ss(u,m){u.H&&ft(u.H,function(g,E){Rt(m,E,g)}),u.l&&Zr({},function(g,E){Rt(m,E,g)})}function Zl(u,m,g){g=Math.min(u.i.length,g);var E=u.l?z(u.l.Na,u.l,u):null;t:{var L=u.i;let P=-1;for(;;){const $=["count="+g];P==-1?0<g?(P=L[0].g,$.push("ofs="+P)):P=0:$.push("ofs="+P);let bt=!0;for(let ce=0;ce<g;ce++){let At=L[ce].g;const _e=L[ce].map;if(At-=P,0>At)P=Math.max(0,L[ce].g-100),bt=!1;else try{Xn(_e,$,"req"+At+"_")}catch{E&&E(_e)}}if(bt){E=$.join("&");break t}}}return u=u.i.splice(0,g),m.D=u,E}function Wl(u){if(!u.g&&!u.u){u.Y=1;var m=u.Fa;ot||qt(),st||(ot(),st=!0),Vt.add(m,u),u.v=0}}function yo(u){return u.g||u.u||3<=u.v?!1:(u.Y++,u.u=er(z(u.Fa,u),_o(u,u.v)),u.v++,!0)}r.Fa=function(){if(this.u=null,Jl(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var u=2*this.R;this.j.info("BP detection timer enabled: "+u),this.A=er(z(this.ab,this),u)}},r.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,te(10),sa(this),Jl(this))};function as(u){u.A!=null&&(p.clearTimeout(u.A),u.A=null)}function Jl(u){u.g=new Qn(u,u.j,"rpc",u.Y),u.m===null&&(u.g.H=u.o),u.g.O=0;var m=Yt(u.qa);Rt(m,"RID","rpc"),Rt(m,"SID",u.K),Rt(m,"AID",u.T),Rt(m,"CI",u.F?"0":"1"),!u.F&&u.ja&&Rt(m,"TO",u.ja),Rt(m,"TYPE","xmlhttp"),ss(u,m),u.m&&u.o&&ye(m,u.m,u.o),u.L&&(u.g.I=u.L);var g=u.g;u=u.ia,g.L=1,g.v=Jr(Yt(m)),g.m=null,g.P=!0,gi(g,u)}r.Za=function(){this.C!=null&&(this.C=null,sa(this),yo(this),te(19))};function oa(u){u.C!=null&&(p.clearTimeout(u.C),u.C=null)}function tu(u,m){var g=null;if(u.g==m){oa(u),as(u),u.g=null;var E=2}else if(or(u.h,m))g=m.D,mn(u.h,m),E=1;else return;if(u.G!=0){if(m.o)if(E==1){g=m.m?m.m.length:0,m=Date.now()-m.F;var L=u.B;E=Ys(),pe(E,new Hl(E,g)),aa(u)}else Wl(u);else if(L=m.s,L==3||L==0&&0<m.X||!(E==1&&mf(u,m)||E==2&&yo(u)))switch(g&&0<g.length&&(m=u.h,m.i=m.i.concat(g)),L){case 1:bi(u,5);break;case 4:bi(u,10);break;case 3:bi(u,6);break;default:bi(u,2)}}}function _o(u,m){let g=u.Ta+Math.floor(Math.random()*u.cb);return u.isActive()||(g*=2),g*m}function bi(u,m){if(u.j.info("Error code "+m),m==2){var g=z(u.fb,u),E=u.Xa;const L=!E;E=new yi(E||"//www.google.com/images/cleardot.gif"),p.location&&p.location.protocol=="http"||ur(E,"https"),Jr(E),L?Ql(E.toString(),g):ts(E.toString(),g)}else te(2);u.G=0,u.l&&u.l.sa(m),eu(u),$l(u)}r.fb=function(u){u?(this.j.info("Successfully pinged google.com"),te(2)):(this.j.info("Failed to ping google.com"),te(1))};function eu(u){if(u.G=0,u.ka=[],u.l){const m=Fe(u.h);(m.length!=0||u.i.length!=0)&&(Y(u.ka,m),Y(u.ka,u.i),u.h.i.length=0,W(u.i),u.i.length=0),u.l.ra()}}function nu(u,m,g){var E=g instanceof yi?Yt(g):new yi(g);if(E.g!="")m&&(E.g=m+"."+E.g),Wr(E,E.s);else{var L=p.location;E=L.protocol,m=m?m+"."+L.hostname:L.hostname,L=+L.port;var P=new yi(null);E&&ur(P,E),m&&(P.g=m),L&&Wr(P,L),g&&(P.l=g),E=P}return g=u.D,m=u.ya,g&&m&&Rt(E,g,m),Rt(E,"VER",u.la),ss(u,E),E}function iu(u,m,g){if(m&&!u.J)throw Error("Can't create secondary domain capable XhrIo object.");return m=u.Ca&&!u.pa?new Dt(new fr({eb:g})):new Dt(u.pa),m.Ha(u.J),m}r.isActive=function(){return!!this.l&&this.l.isActive(this)};function ru(){}r=ru.prototype,r.ua=function(){},r.ta=function(){},r.sa=function(){},r.ra=function(){},r.isActive=function(){return!0},r.Na=function(){};function la(){}la.prototype.g=function(u,m){return new Ge(u,m)};function Ge(u,m){le.call(this),this.g=new ra(m),this.l=u,this.h=m&&m.messageUrlParams||null,u=m&&m.messageHeaders||null,m&&m.clientProtocolHeaderRequired&&(u?u["X-Client-Protocol"]="webchannel":u={"X-Client-Protocol":"webchannel"}),this.g.o=u,u=m&&m.initMessageHeaders||null,m&&m.messageContentType&&(u?u["X-WebChannel-Content-Type"]=m.messageContentType:u={"X-WebChannel-Content-Type":m.messageContentType}),m&&m.va&&(u?u["X-WebChannel-Client-Profile"]=m.va:u={"X-WebChannel-Client-Profile":m.va}),this.g.S=u,(u=m&&m.Sb)&&!X(u)&&(this.g.m=u),this.v=m&&m.supportsCrossDomainXhr||!1,this.u=m&&m.sendRawJson||!1,(m=m&&m.httpSessionIdParam)&&!X(m)&&(this.g.D=m,u=this.h,u!==null&&m in u&&(u=this.h,m in u&&delete u[m])),this.j=new Jn(this)}Q(Ge,le),Ge.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},Ge.prototype.close=function(){po(this.g)},Ge.prototype.o=function(u){var m=this.g;if(typeof u=="string"){var g={};g.__data__=u,u=g}else this.u&&(g={},g.__data__=eo(u),u=g);m.i.push(new lf(m.Ya++,u)),m.G==3&&aa(m)},Ge.prototype.N=function(){this.g.l=null,delete this.j,po(this.g),delete this.g,Ge.aa.N.call(this)};function su(u){Wi.call(this),u.__headers__&&(this.headers=u.__headers__,this.statusCode=u.__status__,delete u.__headers__,delete u.__status__);var m=u.__sm__;if(m){t:{for(const g in m){u=g;break t}u=void 0}(this.i=u)&&(u=this.i,m=m!==null&&u in m?m[u]:void 0),this.data=m}else this.data=u}Q(su,Wi);function au(){Mn.call(this),this.status=1}Q(au,Mn);function Jn(u){this.g=u}Q(Jn,ru),Jn.prototype.ua=function(){pe(this.g,"a")},Jn.prototype.ta=function(u){pe(this.g,new su(u))},Jn.prototype.sa=function(u){pe(this.g,new au)},Jn.prototype.ra=function(){pe(this.g,"b")},la.prototype.createWebChannel=la.prototype.g,Ge.prototype.send=Ge.prototype.o,Ge.prototype.open=Ge.prototype.m,Ge.prototype.close=Ge.prototype.close,k0=function(){return new la},V0=function(){return Ys()},M0=dn,Md={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},ue.NO_ERROR=0,ue.TIMEOUT=8,ue.HTTP_ERROR=6,mc=ue,pi.COMPLETE="complete",N0=pi,Bl.EventType=Gn,Gn.OPEN="a",Gn.CLOSE="b",Gn.ERROR="c",Gn.MESSAGE="d",le.prototype.listen=le.prototype.K,ul=Bl,Dt.prototype.listenOnce=Dt.prototype.L,Dt.prototype.getLastError=Dt.prototype.Ka,Dt.prototype.getLastErrorCode=Dt.prototype.Ba,Dt.prototype.getStatus=Dt.prototype.Z,Dt.prototype.getResponseJson=Dt.prototype.Oa,Dt.prototype.getResponseText=Dt.prototype.oa,Dt.prototype.send=Dt.prototype.ea,Dt.prototype.setWithCredentials=Dt.prototype.Ha,O0=Dt}).apply(typeof sc<"u"?sc:typeof self<"u"?self:typeof window<"u"?window:{});const w_="@firebase/firestore",R_="4.7.9";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pe{constructor(t){this.uid=t}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(t){return t.uid===this.uid}}Pe.UNAUTHENTICATED=new Pe(null),Pe.GOOGLE_CREDENTIALS=new Pe("google-credentials-uid"),Pe.FIRST_PARTY=new Pe("first-party-uid"),Pe.MOCK_USER=new Pe("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Xa="11.4.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ls=new Bc("@firebase/firestore");function La(){return Ls.logLevel}function nt(r,...t){if(Ls.logLevel<=vt.DEBUG){const i=t.map(fm);Ls.debug(`Firestore (${Xa}): ${r}`,...i)}}function Us(r,...t){if(Ls.logLevel<=vt.ERROR){const i=t.map(fm);Ls.error(`Firestore (${Xa}): ${r}`,...i)}}function Kc(r,...t){if(Ls.logLevel<=vt.WARN){const i=t.map(fm);Ls.warn(`Firestore (${Xa}): ${r}`,...i)}}function fm(r){if(typeof r=="string")return r;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/return function(i){return JSON.stringify(i)}(r)}catch{return r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _t(r="Unexpected state"){const t=`FIRESTORE (${Xa}) INTERNAL ASSERTION FAILED: `+r;throw Us(t),new Error(t)}function Jt(r,t){r||_t()}function Ht(r,t){return r}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const K={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class ct extends qn{constructor(t,i){super(t,i),this.code=t,this.message=i,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cs{constructor(){this.promise=new Promise((t,i)=>{this.resolve=t,this.reject=i})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class L0{constructor(t,i){this.user=i,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${t}`)}}class KR{getToken(){return Promise.resolve(null)}invalidateToken(){}start(t,i){t.enqueueRetryable(()=>i(Pe.UNAUTHENTICATED))}shutdown(){}}class QR{constructor(t){this.token=t,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(t,i){this.changeListener=i,t.enqueueRetryable(()=>i(this.token.user))}shutdown(){this.changeListener=null}}class YR{constructor(t){this.t=t,this.currentUser=Pe.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(t,i){Jt(this.o===void 0);let a=this.i;const l=y=>this.i!==a?(a=this.i,i(y)):Promise.resolve();let f=new Cs;this.o=()=>{this.i++,this.currentUser=this.u(),f.resolve(),f=new Cs,t.enqueueRetryable(()=>l(this.currentUser))};const d=()=>{const y=f;t.enqueueRetryable(async()=>{await y.promise,await l(this.currentUser)})},p=y=>{nt("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=y,this.o&&(this.auth.addAuthTokenListener(this.o),d())};this.t.onInit(y=>p(y)),setTimeout(()=>{if(!this.auth){const y=this.t.getImmediate({optional:!0});y?p(y):(nt("FirebaseAuthCredentialsProvider","Auth not yet detected"),f.resolve(),f=new Cs)}},0),d()}getToken(){const t=this.i,i=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(i).then(a=>this.i!==t?(nt("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):a?(Jt(typeof a.accessToken=="string"),new L0(a.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const t=this.auth&&this.auth.getUid();return Jt(t===null||typeof t=="string"),new Pe(t)}}class XR{constructor(t,i,a){this.l=t,this.h=i,this.P=a,this.type="FirstParty",this.user=Pe.FIRST_PARTY,this.T=new Map}I(){return this.P?this.P():null}get headers(){this.T.set("X-Goog-AuthUser",this.l);const t=this.I();return t&&this.T.set("Authorization",t),this.h&&this.T.set("X-Goog-Iam-Authorization-Token",this.h),this.T}}class $R{constructor(t,i,a){this.l=t,this.h=i,this.P=a}getToken(){return Promise.resolve(new XR(this.l,this.h,this.P))}start(t,i){t.enqueueRetryable(()=>i(Pe.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class I_{constructor(t){this.value=t,this.type="AppCheck",this.headers=new Map,t&&t.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class ZR{constructor(t,i){this.A=i,this.forceRefresh=!1,this.appCheck=null,this.R=null,this.V=null,Dn(t)&&t.settings.appCheckToken&&(this.V=t.settings.appCheckToken)}start(t,i){Jt(this.o===void 0);const a=f=>{f.error!=null&&nt("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${f.error.message}`);const d=f.token!==this.R;return this.R=f.token,nt("FirebaseAppCheckTokenProvider",`Received ${d?"new":"existing"} token.`),d?i(f.token):Promise.resolve()};this.o=f=>{t.enqueueRetryable(()=>a(f))};const l=f=>{nt("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=f,this.o&&this.appCheck.addTokenListener(this.o)};this.A.onInit(f=>l(f)),setTimeout(()=>{if(!this.appCheck){const f=this.A.getImmediate({optional:!0});f?l(f):nt("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){if(this.V)return Promise.resolve(new I_(this.V));const t=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(t).then(i=>i?(Jt(typeof i.token=="string"),this.R=i.token,new I_(i.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function WR(r){const t=typeof self<"u"&&(self.crypto||self.msCrypto),i=new Uint8Array(r);if(t&&typeof t.getRandomValues=="function")t.getRandomValues(i);else for(let a=0;a<r;a++)i[a]=Math.floor(256*Math.random());return i}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class U0{static newId(){const t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",i=62*Math.floor(4.129032258064516);let a="";for(;a.length<20;){const l=WR(40);for(let f=0;f<l.length;++f)a.length<20&&l[f]<i&&(a+=t.charAt(l[f]%62))}return a}}function Nt(r,t){return r<t?-1:r>t?1:0}function ja(r,t,i){return r.length===t.length&&r.every((a,l)=>i(a,t[l]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const C_=-62135596800,D_=1e6;class Se{static now(){return Se.fromMillis(Date.now())}static fromDate(t){return Se.fromMillis(t.getTime())}static fromMillis(t){const i=Math.floor(t/1e3),a=Math.floor((t-1e3*i)*D_);return new Se(i,a)}constructor(t,i){if(this.seconds=t,this.nanoseconds=i,i<0)throw new ct(K.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+i);if(i>=1e9)throw new ct(K.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+i);if(t<C_)throw new ct(K.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t);if(t>=253402300800)throw new ct(K.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/D_}_compareTo(t){return this.seconds===t.seconds?Nt(this.nanoseconds,t.nanoseconds):Nt(this.seconds,t.seconds)}isEqual(t){return t.seconds===this.seconds&&t.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const t=this.seconds-C_;return String(t).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ft{static fromTimestamp(t){return new Ft(t)}static min(){return new Ft(new Se(0,0))}static max(){return new Ft(new Se(253402300799,999999999))}constructor(t){this.timestamp=t}compareTo(t){return this.timestamp._compareTo(t.timestamp)}isEqual(t){return this.timestamp.isEqual(t.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const O_="__name__";class ai{constructor(t,i,a){i===void 0?i=0:i>t.length&&_t(),a===void 0?a=t.length-i:a>t.length-i&&_t(),this.segments=t,this.offset=i,this.len=a}get length(){return this.len}isEqual(t){return ai.comparator(this,t)===0}child(t){const i=this.segments.slice(this.offset,this.limit());return t instanceof ai?t.forEach(a=>{i.push(a)}):i.push(t),this.construct(i)}limit(){return this.offset+this.length}popFirst(t){return t=t===void 0?1:t,this.construct(this.segments,this.offset+t,this.length-t)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(t){return this.segments[this.offset+t]}isEmpty(){return this.length===0}isPrefixOf(t){if(t.length<this.length)return!1;for(let i=0;i<this.length;i++)if(this.get(i)!==t.get(i))return!1;return!0}isImmediateParentOf(t){if(this.length+1!==t.length)return!1;for(let i=0;i<this.length;i++)if(this.get(i)!==t.get(i))return!1;return!0}forEach(t){for(let i=this.offset,a=this.limit();i<a;i++)t(this.segments[i])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(t,i){const a=Math.min(t.length,i.length);for(let l=0;l<a;l++){const f=ai.compareSegments(t.get(l),i.get(l));if(f!==0)return f}return Math.sign(t.length-i.length)}static compareSegments(t,i){const a=ai.isNumericId(t),l=ai.isNumericId(i);return a&&!l?-1:!a&&l?1:a&&l?ai.extractNumericId(t).compare(ai.extractNumericId(i)):t<i?-1:t>i?1:0}static isNumericId(t){return t.startsWith("__id")&&t.endsWith("__")}static extractNumericId(t){return cm.fromString(t.substring(4,t.length-2))}}class Wt extends ai{construct(t,i,a){return new Wt(t,i,a)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...t){const i=[];for(const a of t){if(a.indexOf("//")>=0)throw new ct(K.INVALID_ARGUMENT,`Invalid segment (${a}). Paths must not contain // in them.`);i.push(...a.split("/").filter(l=>l.length>0))}return new Wt(i)}static emptyPath(){return new Wt([])}}const JR=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Ne extends ai{construct(t,i,a){return new Ne(t,i,a)}static isValidIdentifier(t){return JR.test(t)}canonicalString(){return this.toArray().map(t=>(t=t.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Ne.isValidIdentifier(t)||(t="`"+t+"`"),t)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===O_}static keyField(){return new Ne([O_])}static fromServerFormat(t){const i=[];let a="",l=0;const f=()=>{if(a.length===0)throw new ct(K.INVALID_ARGUMENT,`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);i.push(a),a=""};let d=!1;for(;l<t.length;){const p=t[l];if(p==="\\"){if(l+1===t.length)throw new ct(K.INVALID_ARGUMENT,"Path has trailing escape character: "+t);const y=t[l+1];if(y!=="\\"&&y!=="."&&y!=="`")throw new ct(K.INVALID_ARGUMENT,"Path has invalid escape sequence: "+t);a+=y,l+=2}else p==="`"?(d=!d,l++):p!=="."||d?(a+=p,l++):(f(),l++)}if(f(),d)throw new ct(K.INVALID_ARGUMENT,"Unterminated ` in path: "+t);return new Ne(i)}static emptyPath(){return new Ne([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dt{constructor(t){this.path=t}static fromPath(t){return new dt(Wt.fromString(t))}static fromName(t){return new dt(Wt.fromString(t).popFirst(5))}static empty(){return new dt(Wt.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(t){return this.path.length>=2&&this.path.get(this.path.length-2)===t}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(t){return t!==null&&Wt.comparator(this.path,t.path)===0}toString(){return this.path.toString()}static comparator(t,i){return Wt.comparator(t.path,i.path)}static isDocumentKey(t){return t.length%2==0}static fromSegments(t){return new dt(new Wt(t.slice()))}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vl=-1;function tI(r,t){const i=r.toTimestamp().seconds,a=r.toTimestamp().nanoseconds+1,l=Ft.fromTimestamp(a===1e9?new Se(i+1,0):new Se(i,a));return new Hr(l,dt.empty(),t)}function eI(r){return new Hr(r.readTime,r.key,vl)}class Hr{constructor(t,i,a){this.readTime=t,this.documentKey=i,this.largestBatchId=a}static min(){return new Hr(Ft.min(),dt.empty(),vl)}static max(){return new Hr(Ft.max(),dt.empty(),vl)}}function nI(r,t){let i=r.readTime.compareTo(t.readTime);return i!==0?i:(i=dt.comparator(r.documentKey,t.documentKey),i!==0?i:Nt(r.largestBatchId,t.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const iI="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class rI{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(t){this.onCommittedListeners.push(t)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(t=>t())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function hm(r){if(r.code!==K.FAILED_PRECONDITION||r.message!==iI)throw r;nt("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class F{constructor(t){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,t(i=>{this.isDone=!0,this.result=i,this.nextCallback&&this.nextCallback(i)},i=>{this.isDone=!0,this.error=i,this.catchCallback&&this.catchCallback(i)})}catch(t){return this.next(void 0,t)}next(t,i){return this.callbackAttached&&_t(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(i,this.error):this.wrapSuccess(t,this.result):new F((a,l)=>{this.nextCallback=f=>{this.wrapSuccess(t,f).next(a,l)},this.catchCallback=f=>{this.wrapFailure(i,f).next(a,l)}})}toPromise(){return new Promise((t,i)=>{this.next(t,i)})}wrapUserFunction(t){try{const i=t();return i instanceof F?i:F.resolve(i)}catch(i){return F.reject(i)}}wrapSuccess(t,i){return t?this.wrapUserFunction(()=>t(i)):F.resolve(i)}wrapFailure(t,i){return t?this.wrapUserFunction(()=>t(i)):F.reject(i)}static resolve(t){return new F((i,a)=>{i(t)})}static reject(t){return new F((i,a)=>{a(t)})}static waitFor(t){return new F((i,a)=>{let l=0,f=0,d=!1;t.forEach(p=>{++l,p.next(()=>{++f,d&&f===l&&i()},y=>a(y))}),d=!0,f===l&&i()})}static or(t){let i=F.resolve(!1);for(const a of t)i=i.next(l=>l?F.resolve(l):a());return i}static forEach(t,i){const a=[];return t.forEach((l,f)=>{a.push(i.call(this,l,f))}),this.waitFor(a)}static mapArray(t,i){return new F((a,l)=>{const f=t.length,d=new Array(f);let p=0;for(let y=0;y<f;y++){const v=y;i(t[v]).next(I=>{d[v]=I,++p,p===f&&a(d)},I=>l(I))}})}static doWhile(t,i){return new F((a,l)=>{const f=()=>{t()===!0?i().next(()=>{f()},l):a()};f()})}}function sI(r){const t=r.match(/Android ([\d.]+)/i),i=t?t[1].split(".").slice(0,2).join("."):"-1";return Number(i)}function Ol(r){return r.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dm{constructor(t,i){this.previousValue=t,i&&(i.sequenceNumberHandler=a=>this.oe(a),this._e=a=>i.writeSequenceNumber(a))}oe(t){return this.previousValue=Math.max(t,this.previousValue),this.previousValue}next(){const t=++this.previousValue;return this._e&&this._e(t),t}}dm.ae=-1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mm=-1;function pm(r){return r==null}function Ic(r){return r===0&&1/r==-1/0}function aI(r){return typeof r=="number"&&Number.isInteger(r)&&!Ic(r)&&r<=Number.MAX_SAFE_INTEGER&&r>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const x0="";function oI(r){let t="";for(let i=0;i<r.length;i++)t.length>0&&(t=N_(t)),t=lI(r.get(i),t);return N_(t)}function lI(r,t){let i=t;const a=r.length;for(let l=0;l<a;l++){const f=r.charAt(l);switch(f){case"\0":i+="";break;case x0:i+="";break;default:i+=f}}return i}function N_(r){return r+x0+""}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function M_(r){let t=0;for(const i in r)Object.prototype.hasOwnProperty.call(r,i)&&t++;return t}function $a(r,t){for(const i in r)Object.prototype.hasOwnProperty.call(r,i)&&t(i,r[i])}function P0(r){for(const t in r)if(Object.prototype.hasOwnProperty.call(r,t))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class en{constructor(t,i){this.comparator=t,this.root=i||De.EMPTY}insert(t,i){return new en(this.comparator,this.root.insert(t,i,this.comparator).copy(null,null,De.BLACK,null,null))}remove(t){return new en(this.comparator,this.root.remove(t,this.comparator).copy(null,null,De.BLACK,null,null))}get(t){let i=this.root;for(;!i.isEmpty();){const a=this.comparator(t,i.key);if(a===0)return i.value;a<0?i=i.left:a>0&&(i=i.right)}return null}indexOf(t){let i=0,a=this.root;for(;!a.isEmpty();){const l=this.comparator(t,a.key);if(l===0)return i+a.left.size;l<0?a=a.left:(i+=a.left.size+1,a=a.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(t){return this.root.inorderTraversal(t)}forEach(t){this.inorderTraversal((i,a)=>(t(i,a),!1))}toString(){const t=[];return this.inorderTraversal((i,a)=>(t.push(`${i}:${a}`),!1)),`{${t.join(", ")}}`}reverseTraversal(t){return this.root.reverseTraversal(t)}getIterator(){return new ac(this.root,null,this.comparator,!1)}getIteratorFrom(t){return new ac(this.root,t,this.comparator,!1)}getReverseIterator(){return new ac(this.root,null,this.comparator,!0)}getReverseIteratorFrom(t){return new ac(this.root,t,this.comparator,!0)}}class ac{constructor(t,i,a,l){this.isReverse=l,this.nodeStack=[];let f=1;for(;!t.isEmpty();)if(f=i?a(t.key,i):1,i&&l&&(f*=-1),f<0)t=this.isReverse?t.left:t.right;else{if(f===0){this.nodeStack.push(t);break}this.nodeStack.push(t),t=this.isReverse?t.right:t.left}}getNext(){let t=this.nodeStack.pop();const i={key:t.key,value:t.value};if(this.isReverse)for(t=t.left;!t.isEmpty();)this.nodeStack.push(t),t=t.right;else for(t=t.right;!t.isEmpty();)this.nodeStack.push(t),t=t.left;return i}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const t=this.nodeStack[this.nodeStack.length-1];return{key:t.key,value:t.value}}}class De{constructor(t,i,a,l,f){this.key=t,this.value=i,this.color=a??De.RED,this.left=l??De.EMPTY,this.right=f??De.EMPTY,this.size=this.left.size+1+this.right.size}copy(t,i,a,l,f){return new De(t??this.key,i??this.value,a??this.color,l??this.left,f??this.right)}isEmpty(){return!1}inorderTraversal(t){return this.left.inorderTraversal(t)||t(this.key,this.value)||this.right.inorderTraversal(t)}reverseTraversal(t){return this.right.reverseTraversal(t)||t(this.key,this.value)||this.left.reverseTraversal(t)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(t,i,a){let l=this;const f=a(t,l.key);return l=f<0?l.copy(null,null,null,l.left.insert(t,i,a),null):f===0?l.copy(null,i,null,null,null):l.copy(null,null,null,null,l.right.insert(t,i,a)),l.fixUp()}removeMin(){if(this.left.isEmpty())return De.EMPTY;let t=this;return t.left.isRed()||t.left.left.isRed()||(t=t.moveRedLeft()),t=t.copy(null,null,null,t.left.removeMin(),null),t.fixUp()}remove(t,i){let a,l=this;if(i(t,l.key)<0)l.left.isEmpty()||l.left.isRed()||l.left.left.isRed()||(l=l.moveRedLeft()),l=l.copy(null,null,null,l.left.remove(t,i),null);else{if(l.left.isRed()&&(l=l.rotateRight()),l.right.isEmpty()||l.right.isRed()||l.right.left.isRed()||(l=l.moveRedRight()),i(t,l.key)===0){if(l.right.isEmpty())return De.EMPTY;a=l.right.min(),l=l.copy(a.key,a.value,null,null,l.right.removeMin())}l=l.copy(null,null,null,null,l.right.remove(t,i))}return l.fixUp()}isRed(){return this.color}fixUp(){let t=this;return t.right.isRed()&&!t.left.isRed()&&(t=t.rotateLeft()),t.left.isRed()&&t.left.left.isRed()&&(t=t.rotateRight()),t.left.isRed()&&t.right.isRed()&&(t=t.colorFlip()),t}moveRedLeft(){let t=this.colorFlip();return t.right.left.isRed()&&(t=t.copy(null,null,null,null,t.right.rotateRight()),t=t.rotateLeft(),t=t.colorFlip()),t}moveRedRight(){let t=this.colorFlip();return t.left.left.isRed()&&(t=t.rotateRight(),t=t.colorFlip()),t}rotateLeft(){const t=this.copy(null,null,De.RED,null,this.right.left);return this.right.copy(null,null,this.color,t,null)}rotateRight(){const t=this.copy(null,null,De.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,t)}colorFlip(){const t=this.left.copy(null,null,!this.left.color,null,null),i=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,t,i)}checkMaxDepth(){const t=this.check();return Math.pow(2,t)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw _t();const t=this.left.check();if(t!==this.right.check())throw _t();return t+(this.isRed()?0:1)}}De.EMPTY=null,De.RED=!0,De.BLACK=!1;De.EMPTY=new class{constructor(){this.size=0}get key(){throw _t()}get value(){throw _t()}get color(){throw _t()}get left(){throw _t()}get right(){throw _t()}copy(t,i,a,l,f){return this}insert(t,i,a){return new De(t,i)}remove(t,i){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Me{constructor(t){this.comparator=t,this.data=new en(this.comparator)}has(t){return this.data.get(t)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(t){return this.data.indexOf(t)}forEach(t){this.data.inorderTraversal((i,a)=>(t(i),!1))}forEachInRange(t,i){const a=this.data.getIteratorFrom(t[0]);for(;a.hasNext();){const l=a.getNext();if(this.comparator(l.key,t[1])>=0)return;i(l.key)}}forEachWhile(t,i){let a;for(a=i!==void 0?this.data.getIteratorFrom(i):this.data.getIterator();a.hasNext();)if(!t(a.getNext().key))return}firstAfterOrEqual(t){const i=this.data.getIteratorFrom(t);return i.hasNext()?i.getNext().key:null}getIterator(){return new V_(this.data.getIterator())}getIteratorFrom(t){return new V_(this.data.getIteratorFrom(t))}add(t){return this.copy(this.data.remove(t).insert(t,!0))}delete(t){return this.has(t)?this.copy(this.data.remove(t)):this}isEmpty(){return this.data.isEmpty()}unionWith(t){let i=this;return i.size<t.size&&(i=t,t=this),t.forEach(a=>{i=i.add(a)}),i}isEqual(t){if(!(t instanceof Me)||this.size!==t.size)return!1;const i=this.data.getIterator(),a=t.data.getIterator();for(;i.hasNext();){const l=i.getNext().key,f=a.getNext().key;if(this.comparator(l,f)!==0)return!1}return!0}toArray(){const t=[];return this.forEach(i=>{t.push(i)}),t}toString(){const t=[];return this.forEach(i=>t.push(i)),"SortedSet("+t.toString()+")"}copy(t){const i=new Me(this.comparator);return i.data=t,i}}class V_{constructor(t){this.iter=t}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bn{constructor(t){this.fields=t,t.sort(Ne.comparator)}static empty(){return new Bn([])}unionWith(t){let i=new Me(Ne.comparator);for(const a of this.fields)i=i.add(a);for(const a of t)i=i.add(a);return new Bn(i.toArray())}covers(t){for(const i of this.fields)if(i.isPrefixOf(t))return!0;return!1}isEqual(t){return ja(this.fields,t.fields,(i,a)=>i.isEqual(a))}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uI extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ci{constructor(t){this.binaryString=t}static fromBase64String(t){const i=function(l){try{return atob(l)}catch(f){throw typeof DOMException<"u"&&f instanceof DOMException?new uI("Invalid base64 string: "+f):f}}(t);return new ci(i)}static fromUint8Array(t){const i=function(l){let f="";for(let d=0;d<l.length;++d)f+=String.fromCharCode(l[d]);return f}(t);return new ci(i)}[Symbol.iterator](){let t=0;return{next:()=>t<this.binaryString.length?{value:this.binaryString.charCodeAt(t++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(i){return btoa(i)}(this.binaryString)}toUint8Array(){return function(i){const a=new Uint8Array(i.length);for(let l=0;l<i.length;l++)a[l]=i.charCodeAt(l);return a}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(t){return Nt(this.binaryString,t.binaryString)}isEqual(t){return this.binaryString===t.binaryString}}ci.EMPTY_BYTE_STRING=new ci("");const cI=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function xs(r){if(Jt(!!r),typeof r=="string"){let t=0;const i=cI.exec(r);if(Jt(!!i),i[1]){let l=i[1];l=(l+"000000000").substr(0,9),t=Number(l)}const a=new Date(r);return{seconds:Math.floor(a.getTime()/1e3),nanos:t}}return{seconds:Oe(r.seconds),nanos:Oe(r.nanos)}}function Oe(r){return typeof r=="number"?r:typeof r=="string"?Number(r):0}function qa(r){return typeof r=="string"?ci.fromBase64String(r):ci.fromUint8Array(r)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const z0="server_timestamp",B0="__type__",H0="__previous_value__",j0="__local_write_time__";function gm(r){var t,i;return((i=(((t=r==null?void 0:r.mapValue)===null||t===void 0?void 0:t.fields)||{})[B0])===null||i===void 0?void 0:i.stringValue)===z0}function ym(r){const t=r.mapValue.fields[H0];return gm(t)?ym(t):t}function Cc(r){const t=xs(r.mapValue.fields[j0].timestampValue);return new Se(t.seconds,t.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fI{constructor(t,i,a,l,f,d,p,y,v){this.databaseId=t,this.appId=i,this.persistenceKey=a,this.host=l,this.ssl=f,this.forceLongPolling=d,this.autoDetectLongPolling=p,this.longPollingOptions=y,this.useFetchStreams=v}}const Dc="(default)";class Oc{constructor(t,i){this.projectId=t,this.database=i||Dc}static empty(){return new Oc("","")}get isDefaultDatabase(){return this.database===Dc}isEqual(t){return t instanceof Oc&&t.projectId===this.projectId&&t.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const q0="__type__",hI="__max__",oc={mapValue:{}},F0="__vector__",Vd="value";function Ps(r){return"nullValue"in r?0:"booleanValue"in r?1:"integerValue"in r||"doubleValue"in r?2:"timestampValue"in r?3:"stringValue"in r?5:"bytesValue"in r?6:"referenceValue"in r?7:"geoPointValue"in r?8:"arrayValue"in r?9:"mapValue"in r?gm(r)?4:mI(r)?9007199254740991:dI(r)?10:11:_t()}function fi(r,t){if(r===t)return!0;const i=Ps(r);if(i!==Ps(t))return!1;switch(i){case 0:case 9007199254740991:return!0;case 1:return r.booleanValue===t.booleanValue;case 4:return Cc(r).isEqual(Cc(t));case 3:return function(l,f){if(typeof l.timestampValue=="string"&&typeof f.timestampValue=="string"&&l.timestampValue.length===f.timestampValue.length)return l.timestampValue===f.timestampValue;const d=xs(l.timestampValue),p=xs(f.timestampValue);return d.seconds===p.seconds&&d.nanos===p.nanos}(r,t);case 5:return r.stringValue===t.stringValue;case 6:return function(l,f){return qa(l.bytesValue).isEqual(qa(f.bytesValue))}(r,t);case 7:return r.referenceValue===t.referenceValue;case 8:return function(l,f){return Oe(l.geoPointValue.latitude)===Oe(f.geoPointValue.latitude)&&Oe(l.geoPointValue.longitude)===Oe(f.geoPointValue.longitude)}(r,t);case 2:return function(l,f){if("integerValue"in l&&"integerValue"in f)return Oe(l.integerValue)===Oe(f.integerValue);if("doubleValue"in l&&"doubleValue"in f){const d=Oe(l.doubleValue),p=Oe(f.doubleValue);return d===p?Ic(d)===Ic(p):isNaN(d)&&isNaN(p)}return!1}(r,t);case 9:return ja(r.arrayValue.values||[],t.arrayValue.values||[],fi);case 10:case 11:return function(l,f){const d=l.mapValue.fields||{},p=f.mapValue.fields||{};if(M_(d)!==M_(p))return!1;for(const y in d)if(d.hasOwnProperty(y)&&(p[y]===void 0||!fi(d[y],p[y])))return!1;return!0}(r,t);default:return _t()}}function Tl(r,t){return(r.values||[]).find(i=>fi(i,t))!==void 0}function Fa(r,t){if(r===t)return 0;const i=Ps(r),a=Ps(t);if(i!==a)return Nt(i,a);switch(i){case 0:case 9007199254740991:return 0;case 1:return Nt(r.booleanValue,t.booleanValue);case 2:return function(f,d){const p=Oe(f.integerValue||f.doubleValue),y=Oe(d.integerValue||d.doubleValue);return p<y?-1:p>y?1:p===y?0:isNaN(p)?isNaN(y)?0:-1:1}(r,t);case 3:return k_(r.timestampValue,t.timestampValue);case 4:return k_(Cc(r),Cc(t));case 5:return Nt(r.stringValue,t.stringValue);case 6:return function(f,d){const p=qa(f),y=qa(d);return p.compareTo(y)}(r.bytesValue,t.bytesValue);case 7:return function(f,d){const p=f.split("/"),y=d.split("/");for(let v=0;v<p.length&&v<y.length;v++){const I=Nt(p[v],y[v]);if(I!==0)return I}return Nt(p.length,y.length)}(r.referenceValue,t.referenceValue);case 8:return function(f,d){const p=Nt(Oe(f.latitude),Oe(d.latitude));return p!==0?p:Nt(Oe(f.longitude),Oe(d.longitude))}(r.geoPointValue,t.geoPointValue);case 9:return L_(r.arrayValue,t.arrayValue);case 10:return function(f,d){var p,y,v,I;const D=f.fields||{},z=d.fields||{},q=(p=D[Vd])===null||p===void 0?void 0:p.arrayValue,Q=(y=z[Vd])===null||y===void 0?void 0:y.arrayValue,W=Nt(((v=q==null?void 0:q.values)===null||v===void 0?void 0:v.length)||0,((I=Q==null?void 0:Q.values)===null||I===void 0?void 0:I.length)||0);return W!==0?W:L_(q,Q)}(r.mapValue,t.mapValue);case 11:return function(f,d){if(f===oc.mapValue&&d===oc.mapValue)return 0;if(f===oc.mapValue)return 1;if(d===oc.mapValue)return-1;const p=f.fields||{},y=Object.keys(p),v=d.fields||{},I=Object.keys(v);y.sort(),I.sort();for(let D=0;D<y.length&&D<I.length;++D){const z=Nt(y[D],I[D]);if(z!==0)return z;const q=Fa(p[y[D]],v[I[D]]);if(q!==0)return q}return Nt(y.length,I.length)}(r.mapValue,t.mapValue);default:throw _t()}}function k_(r,t){if(typeof r=="string"&&typeof t=="string"&&r.length===t.length)return Nt(r,t);const i=xs(r),a=xs(t),l=Nt(i.seconds,a.seconds);return l!==0?l:Nt(i.nanos,a.nanos)}function L_(r,t){const i=r.values||[],a=t.values||[];for(let l=0;l<i.length&&l<a.length;++l){const f=Fa(i[l],a[l]);if(f)return f}return Nt(i.length,a.length)}function Ga(r){return kd(r)}function kd(r){return"nullValue"in r?"null":"booleanValue"in r?""+r.booleanValue:"integerValue"in r?""+r.integerValue:"doubleValue"in r?""+r.doubleValue:"timestampValue"in r?function(i){const a=xs(i);return`time(${a.seconds},${a.nanos})`}(r.timestampValue):"stringValue"in r?r.stringValue:"bytesValue"in r?function(i){return qa(i).toBase64()}(r.bytesValue):"referenceValue"in r?function(i){return dt.fromName(i).toString()}(r.referenceValue):"geoPointValue"in r?function(i){return`geo(${i.latitude},${i.longitude})`}(r.geoPointValue):"arrayValue"in r?function(i){let a="[",l=!0;for(const f of i.values||[])l?l=!1:a+=",",a+=kd(f);return a+"]"}(r.arrayValue):"mapValue"in r?function(i){const a=Object.keys(i.fields||{}).sort();let l="{",f=!0;for(const d of a)f?f=!1:l+=",",l+=`${d}:${kd(i.fields[d])}`;return l+"}"}(r.mapValue):_t()}function pc(r){switch(Ps(r)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const t=ym(r);return t?16+pc(t):16;case 5:return 2*r.stringValue.length;case 6:return qa(r.bytesValue).approximateByteSize();case 7:return r.referenceValue.length;case 9:return function(a){return(a.values||[]).reduce((l,f)=>l+pc(f),0)}(r.arrayValue);case 10:case 11:return function(a){let l=0;return $a(a.fields,(f,d)=>{l+=f.length+pc(d)}),l}(r.mapValue);default:throw _t()}}function Ld(r){return!!r&&"integerValue"in r}function _m(r){return!!r&&"arrayValue"in r}function gc(r){return!!r&&"mapValue"in r}function dI(r){var t,i;return((i=(((t=r==null?void 0:r.mapValue)===null||t===void 0?void 0:t.fields)||{})[q0])===null||i===void 0?void 0:i.stringValue)===F0}function hl(r){if(r.geoPointValue)return{geoPointValue:Object.assign({},r.geoPointValue)};if(r.timestampValue&&typeof r.timestampValue=="object")return{timestampValue:Object.assign({},r.timestampValue)};if(r.mapValue){const t={mapValue:{fields:{}}};return $a(r.mapValue.fields,(i,a)=>t.mapValue.fields[i]=hl(a)),t}if(r.arrayValue){const t={arrayValue:{values:[]}};for(let i=0;i<(r.arrayValue.values||[]).length;++i)t.arrayValue.values[i]=hl(r.arrayValue.values[i]);return t}return Object.assign({},r)}function mI(r){return(((r.mapValue||{}).fields||{}).__type__||{}).stringValue===hI}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zn{constructor(t){this.value=t}static empty(){return new zn({mapValue:{}})}field(t){if(t.isEmpty())return this.value;{let i=this.value;for(let a=0;a<t.length-1;++a)if(i=(i.mapValue.fields||{})[t.get(a)],!gc(i))return null;return i=(i.mapValue.fields||{})[t.lastSegment()],i||null}}set(t,i){this.getFieldsMap(t.popLast())[t.lastSegment()]=hl(i)}setAll(t){let i=Ne.emptyPath(),a={},l=[];t.forEach((d,p)=>{if(!i.isImmediateParentOf(p)){const y=this.getFieldsMap(i);this.applyChanges(y,a,l),a={},l=[],i=p.popLast()}d?a[p.lastSegment()]=hl(d):l.push(p.lastSegment())});const f=this.getFieldsMap(i);this.applyChanges(f,a,l)}delete(t){const i=this.field(t.popLast());gc(i)&&i.mapValue.fields&&delete i.mapValue.fields[t.lastSegment()]}isEqual(t){return fi(this.value,t.value)}getFieldsMap(t){let i=this.value;i.mapValue.fields||(i.mapValue={fields:{}});for(let a=0;a<t.length;++a){let l=i.mapValue.fields[t.get(a)];gc(l)&&l.mapValue.fields||(l={mapValue:{fields:{}}},i.mapValue.fields[t.get(a)]=l),i=l}return i.mapValue.fields}applyChanges(t,i,a){$a(i,(l,f)=>t[l]=f);for(const l of a)delete t[l]}clone(){return new zn(hl(this.value))}}function G0(r){const t=[];return $a(r.fields,(i,a)=>{const l=new Ne([i]);if(gc(a)){const f=G0(a.mapValue).fields;if(f.length===0)t.push(l);else for(const d of f)t.push(l.child(d))}else t.push(l)}),new Bn(t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pn{constructor(t,i,a,l,f,d,p){this.key=t,this.documentType=i,this.version=a,this.readTime=l,this.createTime=f,this.data=d,this.documentState=p}static newInvalidDocument(t){return new Pn(t,0,Ft.min(),Ft.min(),Ft.min(),zn.empty(),0)}static newFoundDocument(t,i,a,l){return new Pn(t,1,i,Ft.min(),a,l,0)}static newNoDocument(t,i){return new Pn(t,2,i,Ft.min(),Ft.min(),zn.empty(),0)}static newUnknownDocument(t,i){return new Pn(t,3,i,Ft.min(),Ft.min(),zn.empty(),2)}convertToFoundDocument(t,i){return!this.createTime.isEqual(Ft.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=t),this.version=t,this.documentType=1,this.data=i,this.documentState=0,this}convertToNoDocument(t){return this.version=t,this.documentType=2,this.data=zn.empty(),this.documentState=0,this}convertToUnknownDocument(t){return this.version=t,this.documentType=3,this.data=zn.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=Ft.min(),this}setReadTime(t){return this.readTime=t,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(t){return t instanceof Pn&&this.key.isEqual(t.key)&&this.version.isEqual(t.version)&&this.documentType===t.documentType&&this.documentState===t.documentState&&this.data.isEqual(t.data)}mutableCopy(){return new Pn(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nc{constructor(t,i){this.position=t,this.inclusive=i}}function U_(r,t,i){let a=0;for(let l=0;l<r.position.length;l++){const f=t[l],d=r.position[l];if(f.field.isKeyField()?a=dt.comparator(dt.fromName(d.referenceValue),i.key):a=Fa(d,i.data.field(f.field)),f.dir==="desc"&&(a*=-1),a!==0)break}return a}function x_(r,t){if(r===null)return t===null;if(t===null||r.inclusive!==t.inclusive||r.position.length!==t.position.length)return!1;for(let i=0;i<r.position.length;i++)if(!fi(r.position[i],t.position[i]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mc{constructor(t,i="asc"){this.field=t,this.dir=i}}function pI(r,t){return r.dir===t.dir&&r.field.isEqual(t.field)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class K0{}class Ae extends K0{constructor(t,i,a){super(),this.field=t,this.op=i,this.value=a}static create(t,i,a){return t.isKeyField()?i==="in"||i==="not-in"?this.createKeyFieldInFilter(t,i,a):new yI(t,i,a):i==="array-contains"?new TI(t,a):i==="in"?new EI(t,a):i==="not-in"?new bI(t,a):i==="array-contains-any"?new AI(t,a):new Ae(t,i,a)}static createKeyFieldInFilter(t,i,a){return i==="in"?new _I(t,a):new vI(t,a)}matches(t){const i=t.data.field(this.field);return this.op==="!="?i!==null&&this.matchesComparison(Fa(i,this.value)):i!==null&&Ps(this.value)===Ps(i)&&this.matchesComparison(Fa(i,this.value))}matchesComparison(t){switch(this.op){case"<":return t<0;case"<=":return t<=0;case"==":return t===0;case"!=":return t!==0;case">":return t>0;case">=":return t>=0;default:return _t()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class jr extends K0{constructor(t,i){super(),this.filters=t,this.op=i,this.ce=null}static create(t,i){return new jr(t,i)}matches(t){return Q0(this)?this.filters.find(i=>!i.matches(t))===void 0:this.filters.find(i=>i.matches(t))!==void 0}getFlattenedFilters(){return this.ce!==null||(this.ce=this.filters.reduce((t,i)=>t.concat(i.getFlattenedFilters()),[])),this.ce}getFilters(){return Object.assign([],this.filters)}}function Q0(r){return r.op==="and"}function Y0(r){return gI(r)&&Q0(r)}function gI(r){for(const t of r.filters)if(t instanceof jr)return!1;return!0}function Ud(r){if(r instanceof Ae)return r.field.canonicalString()+r.op.toString()+Ga(r.value);if(Y0(r))return r.filters.map(t=>Ud(t)).join(",");{const t=r.filters.map(i=>Ud(i)).join(",");return`${r.op}(${t})`}}function X0(r,t){return r instanceof Ae?function(a,l){return l instanceof Ae&&a.op===l.op&&a.field.isEqual(l.field)&&fi(a.value,l.value)}(r,t):r instanceof jr?function(a,l){return l instanceof jr&&a.op===l.op&&a.filters.length===l.filters.length?a.filters.reduce((f,d,p)=>f&&X0(d,l.filters[p]),!0):!1}(r,t):void _t()}function $0(r){return r instanceof Ae?function(i){return`${i.field.canonicalString()} ${i.op} ${Ga(i.value)}`}(r):r instanceof jr?function(i){return i.op.toString()+" {"+i.getFilters().map($0).join(" ,")+"}"}(r):"Filter"}class yI extends Ae{constructor(t,i,a){super(t,i,a),this.key=dt.fromName(a.referenceValue)}matches(t){const i=dt.comparator(t.key,this.key);return this.matchesComparison(i)}}class _I extends Ae{constructor(t,i){super(t,"in",i),this.keys=Z0("in",i)}matches(t){return this.keys.some(i=>i.isEqual(t.key))}}class vI extends Ae{constructor(t,i){super(t,"not-in",i),this.keys=Z0("not-in",i)}matches(t){return!this.keys.some(i=>i.isEqual(t.key))}}function Z0(r,t){var i;return(((i=t.arrayValue)===null||i===void 0?void 0:i.values)||[]).map(a=>dt.fromName(a.referenceValue))}class TI extends Ae{constructor(t,i){super(t,"array-contains",i)}matches(t){const i=t.data.field(this.field);return _m(i)&&Tl(i.arrayValue,this.value)}}class EI extends Ae{constructor(t,i){super(t,"in",i)}matches(t){const i=t.data.field(this.field);return i!==null&&Tl(this.value.arrayValue,i)}}class bI extends Ae{constructor(t,i){super(t,"not-in",i)}matches(t){if(Tl(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const i=t.data.field(this.field);return i!==null&&!Tl(this.value.arrayValue,i)}}class AI extends Ae{constructor(t,i){super(t,"array-contains-any",i)}matches(t){const i=t.data.field(this.field);return!(!_m(i)||!i.arrayValue.values)&&i.arrayValue.values.some(a=>Tl(this.value.arrayValue,a))}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class SI{constructor(t,i=null,a=[],l=[],f=null,d=null,p=null){this.path=t,this.collectionGroup=i,this.orderBy=a,this.filters=l,this.limit=f,this.startAt=d,this.endAt=p,this.le=null}}function P_(r,t=null,i=[],a=[],l=null,f=null,d=null){return new SI(r,t,i,a,l,f,d)}function vm(r){const t=Ht(r);if(t.le===null){let i=t.path.canonicalString();t.collectionGroup!==null&&(i+="|cg:"+t.collectionGroup),i+="|f:",i+=t.filters.map(a=>Ud(a)).join(","),i+="|ob:",i+=t.orderBy.map(a=>function(f){return f.field.canonicalString()+f.dir}(a)).join(","),pm(t.limit)||(i+="|l:",i+=t.limit),t.startAt&&(i+="|lb:",i+=t.startAt.inclusive?"b:":"a:",i+=t.startAt.position.map(a=>Ga(a)).join(",")),t.endAt&&(i+="|ub:",i+=t.endAt.inclusive?"a:":"b:",i+=t.endAt.position.map(a=>Ga(a)).join(",")),t.le=i}return t.le}function Tm(r,t){if(r.limit!==t.limit||r.orderBy.length!==t.orderBy.length)return!1;for(let i=0;i<r.orderBy.length;i++)if(!pI(r.orderBy[i],t.orderBy[i]))return!1;if(r.filters.length!==t.filters.length)return!1;for(let i=0;i<r.filters.length;i++)if(!X0(r.filters[i],t.filters[i]))return!1;return r.collectionGroup===t.collectionGroup&&!!r.path.isEqual(t.path)&&!!x_(r.startAt,t.startAt)&&x_(r.endAt,t.endAt)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qc{constructor(t,i=null,a=[],l=[],f=null,d="F",p=null,y=null){this.path=t,this.collectionGroup=i,this.explicitOrderBy=a,this.filters=l,this.limit=f,this.limitType=d,this.startAt=p,this.endAt=y,this.he=null,this.Pe=null,this.Te=null,this.startAt,this.endAt}}function wI(r,t,i,a,l,f,d,p){return new Qc(r,t,i,a,l,f,d,p)}function RI(r){return new Qc(r)}function z_(r){return r.filters.length===0&&r.limit===null&&r.startAt==null&&r.endAt==null&&(r.explicitOrderBy.length===0||r.explicitOrderBy.length===1&&r.explicitOrderBy[0].field.isKeyField())}function II(r){return r.collectionGroup!==null}function dl(r){const t=Ht(r);if(t.he===null){t.he=[];const i=new Set;for(const f of t.explicitOrderBy)t.he.push(f),i.add(f.field.canonicalString());const a=t.explicitOrderBy.length>0?t.explicitOrderBy[t.explicitOrderBy.length-1].dir:"asc";(function(d){let p=new Me(Ne.comparator);return d.filters.forEach(y=>{y.getFlattenedFilters().forEach(v=>{v.isInequality()&&(p=p.add(v.field))})}),p})(t).forEach(f=>{i.has(f.canonicalString())||f.isKeyField()||t.he.push(new Mc(f,a))}),i.has(Ne.keyField().canonicalString())||t.he.push(new Mc(Ne.keyField(),a))}return t.he}function Ds(r){const t=Ht(r);return t.Pe||(t.Pe=CI(t,dl(r))),t.Pe}function CI(r,t){if(r.limitType==="F")return P_(r.path,r.collectionGroup,t,r.filters,r.limit,r.startAt,r.endAt);{t=t.map(l=>{const f=l.dir==="desc"?"asc":"desc";return new Mc(l.field,f)});const i=r.endAt?new Nc(r.endAt.position,r.endAt.inclusive):null,a=r.startAt?new Nc(r.startAt.position,r.startAt.inclusive):null;return P_(r.path,r.collectionGroup,t,r.filters,r.limit,i,a)}}function xd(r,t,i){return new Qc(r.path,r.collectionGroup,r.explicitOrderBy.slice(),r.filters.slice(),t,i,r.startAt,r.endAt)}function W0(r,t){return Tm(Ds(r),Ds(t))&&r.limitType===t.limitType}function J0(r){return`${vm(Ds(r))}|lt:${r.limitType}`}function al(r){return`Query(target=${function(i){let a=i.path.canonicalString();return i.collectionGroup!==null&&(a+=" collectionGroup="+i.collectionGroup),i.filters.length>0&&(a+=`, filters: [${i.filters.map(l=>$0(l)).join(", ")}]`),pm(i.limit)||(a+=", limit: "+i.limit),i.orderBy.length>0&&(a+=`, orderBy: [${i.orderBy.map(l=>function(d){return`${d.field.canonicalString()} (${d.dir})`}(l)).join(", ")}]`),i.startAt&&(a+=", startAt: ",a+=i.startAt.inclusive?"b:":"a:",a+=i.startAt.position.map(l=>Ga(l)).join(",")),i.endAt&&(a+=", endAt: ",a+=i.endAt.inclusive?"a:":"b:",a+=i.endAt.position.map(l=>Ga(l)).join(",")),`Target(${a})`}(Ds(r))}; limitType=${r.limitType})`}function Em(r,t){return t.isFoundDocument()&&function(a,l){const f=l.key.path;return a.collectionGroup!==null?l.key.hasCollectionId(a.collectionGroup)&&a.path.isPrefixOf(f):dt.isDocumentKey(a.path)?a.path.isEqual(f):a.path.isImmediateParentOf(f)}(r,t)&&function(a,l){for(const f of dl(a))if(!f.field.isKeyField()&&l.data.field(f.field)===null)return!1;return!0}(r,t)&&function(a,l){for(const f of a.filters)if(!f.matches(l))return!1;return!0}(r,t)&&function(a,l){return!(a.startAt&&!function(d,p,y){const v=U_(d,p,y);return d.inclusive?v<=0:v<0}(a.startAt,dl(a),l)||a.endAt&&!function(d,p,y){const v=U_(d,p,y);return d.inclusive?v>=0:v>0}(a.endAt,dl(a),l))}(r,t)}function DI(r){return(t,i)=>{let a=!1;for(const l of dl(r)){const f=OI(l,t,i);if(f!==0)return f;a=a||l.field.isKeyField()}return 0}}function OI(r,t,i){const a=r.field.isKeyField()?dt.comparator(t.key,i.key):function(f,d,p){const y=d.data.field(f),v=p.data.field(f);return y!==null&&v!==null?Fa(y,v):_t()}(r.field,t,i);switch(r.dir){case"asc":return a;case"desc":return-1*a;default:return _t()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qs{constructor(t,i){this.mapKeyFn=t,this.equalsFn=i,this.inner={},this.innerSize=0}get(t){const i=this.mapKeyFn(t),a=this.inner[i];if(a!==void 0){for(const[l,f]of a)if(this.equalsFn(l,t))return f}}has(t){return this.get(t)!==void 0}set(t,i){const a=this.mapKeyFn(t),l=this.inner[a];if(l===void 0)return this.inner[a]=[[t,i]],void this.innerSize++;for(let f=0;f<l.length;f++)if(this.equalsFn(l[f][0],t))return void(l[f]=[t,i]);l.push([t,i]),this.innerSize++}delete(t){const i=this.mapKeyFn(t),a=this.inner[i];if(a===void 0)return!1;for(let l=0;l<a.length;l++)if(this.equalsFn(a[l][0],t))return a.length===1?delete this.inner[i]:a.splice(l,1),this.innerSize--,!0;return!1}forEach(t){$a(this.inner,(i,a)=>{for(const[l,f]of a)t(l,f)})}isEmpty(){return P0(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const NI=new en(dt.comparator);function Vc(){return NI}const tT=new en(dt.comparator);function lc(...r){let t=tT;for(const i of r)t=t.insert(i.key,i);return t}function eT(r){let t=tT;return r.forEach((i,a)=>t=t.insert(i,a.overlayedDocument)),t}function Is(){return ml()}function nT(){return ml()}function ml(){return new qs(r=>r.toString(),(r,t)=>r.isEqual(t))}const MI=new en(dt.comparator),VI=new Me(dt.comparator);function ze(...r){let t=VI;for(const i of r)t=t.add(i);return t}const kI=new Me(Nt);function LI(){return kI}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bm(r,t){if(r.useProto3Json){if(isNaN(t))return{doubleValue:"NaN"};if(t===1/0)return{doubleValue:"Infinity"};if(t===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Ic(t)?"-0":t}}function iT(r){return{integerValue:""+r}}function UI(r,t){return aI(t)?iT(t):bm(r,t)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yc{constructor(){this._=void 0}}function xI(r,t,i){return r instanceof kc?function(l,f){const d={fields:{[B0]:{stringValue:z0},[j0]:{timestampValue:{seconds:l.seconds,nanos:l.nanoseconds}}}};return f&&gm(f)&&(f=ym(f)),f&&(d.fields[H0]=f),{mapValue:d}}(i,t):r instanceof El?sT(r,t):r instanceof bl?aT(r,t):function(l,f){const d=rT(l,f),p=B_(d)+B_(l.Ie);return Ld(d)&&Ld(l.Ie)?iT(p):bm(l.serializer,p)}(r,t)}function PI(r,t,i){return r instanceof El?sT(r,t):r instanceof bl?aT(r,t):i}function rT(r,t){return r instanceof Lc?function(a){return Ld(a)||function(f){return!!f&&"doubleValue"in f}(a)}(t)?t:{integerValue:0}:null}class kc extends Yc{}class El extends Yc{constructor(t){super(),this.elements=t}}function sT(r,t){const i=oT(t);for(const a of r.elements)i.some(l=>fi(l,a))||i.push(a);return{arrayValue:{values:i}}}class bl extends Yc{constructor(t){super(),this.elements=t}}function aT(r,t){let i=oT(t);for(const a of r.elements)i=i.filter(l=>!fi(l,a));return{arrayValue:{values:i}}}class Lc extends Yc{constructor(t,i){super(),this.serializer=t,this.Ie=i}}function B_(r){return Oe(r.integerValue||r.doubleValue)}function oT(r){return _m(r)&&r.arrayValue.values?r.arrayValue.values.slice():[]}function zI(r,t){return r.field.isEqual(t.field)&&function(a,l){return a instanceof El&&l instanceof El||a instanceof bl&&l instanceof bl?ja(a.elements,l.elements,fi):a instanceof Lc&&l instanceof Lc?fi(a.Ie,l.Ie):a instanceof kc&&l instanceof kc}(r.transform,t.transform)}class BI{constructor(t,i){this.version=t,this.transformResults=i}}class qi{constructor(t,i){this.updateTime=t,this.exists=i}static none(){return new qi}static exists(t){return new qi(void 0,t)}static updateTime(t){return new qi(t)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(t){return this.exists===t.exists&&(this.updateTime?!!t.updateTime&&this.updateTime.isEqual(t.updateTime):!t.updateTime)}}function yc(r,t){return r.updateTime!==void 0?t.isFoundDocument()&&t.version.isEqual(r.updateTime):r.exists===void 0||r.exists===t.isFoundDocument()}class Xc{}function lT(r,t){if(!r.hasLocalMutations||t&&t.fields.length===0)return null;if(t===null)return r.isNoDocument()?new cT(r.key,qi.none()):new Nl(r.key,r.data,qi.none());{const i=r.data,a=zn.empty();let l=new Me(Ne.comparator);for(let f of t.fields)if(!l.has(f)){let d=i.field(f);d===null&&f.length>1&&(f=f.popLast(),d=i.field(f)),d===null?a.delete(f):a.set(f,d),l=l.add(f)}return new Fs(r.key,a,new Bn(l.toArray()),qi.none())}}function HI(r,t,i){r instanceof Nl?function(l,f,d){const p=l.value.clone(),y=j_(l.fieldTransforms,f,d.transformResults);p.setAll(y),f.convertToFoundDocument(d.version,p).setHasCommittedMutations()}(r,t,i):r instanceof Fs?function(l,f,d){if(!yc(l.precondition,f))return void f.convertToUnknownDocument(d.version);const p=j_(l.fieldTransforms,f,d.transformResults),y=f.data;y.setAll(uT(l)),y.setAll(p),f.convertToFoundDocument(d.version,y).setHasCommittedMutations()}(r,t,i):function(l,f,d){f.convertToNoDocument(d.version).setHasCommittedMutations()}(0,t,i)}function pl(r,t,i,a){return r instanceof Nl?function(f,d,p,y){if(!yc(f.precondition,d))return p;const v=f.value.clone(),I=q_(f.fieldTransforms,y,d);return v.setAll(I),d.convertToFoundDocument(d.version,v).setHasLocalMutations(),null}(r,t,i,a):r instanceof Fs?function(f,d,p,y){if(!yc(f.precondition,d))return p;const v=q_(f.fieldTransforms,y,d),I=d.data;return I.setAll(uT(f)),I.setAll(v),d.convertToFoundDocument(d.version,I).setHasLocalMutations(),p===null?null:p.unionWith(f.fieldMask.fields).unionWith(f.fieldTransforms.map(D=>D.field))}(r,t,i,a):function(f,d,p){return yc(f.precondition,d)?(d.convertToNoDocument(d.version).setHasLocalMutations(),null):p}(r,t,i)}function jI(r,t){let i=null;for(const a of r.fieldTransforms){const l=t.data.field(a.field),f=rT(a.transform,l||null);f!=null&&(i===null&&(i=zn.empty()),i.set(a.field,f))}return i||null}function H_(r,t){return r.type===t.type&&!!r.key.isEqual(t.key)&&!!r.precondition.isEqual(t.precondition)&&!!function(a,l){return a===void 0&&l===void 0||!(!a||!l)&&ja(a,l,(f,d)=>zI(f,d))}(r.fieldTransforms,t.fieldTransforms)&&(r.type===0?r.value.isEqual(t.value):r.type!==1||r.data.isEqual(t.data)&&r.fieldMask.isEqual(t.fieldMask))}class Nl extends Xc{constructor(t,i,a,l=[]){super(),this.key=t,this.value=i,this.precondition=a,this.fieldTransforms=l,this.type=0}getFieldMask(){return null}}class Fs extends Xc{constructor(t,i,a,l,f=[]){super(),this.key=t,this.data=i,this.fieldMask=a,this.precondition=l,this.fieldTransforms=f,this.type=1}getFieldMask(){return this.fieldMask}}function uT(r){const t=new Map;return r.fieldMask.fields.forEach(i=>{if(!i.isEmpty()){const a=r.data.field(i);t.set(i,a)}}),t}function j_(r,t,i){const a=new Map;Jt(r.length===i.length);for(let l=0;l<i.length;l++){const f=r[l],d=f.transform,p=t.data.field(f.field);a.set(f.field,PI(d,p,i[l]))}return a}function q_(r,t,i){const a=new Map;for(const l of r){const f=l.transform,d=i.data.field(l.field);a.set(l.field,xI(f,d,t))}return a}class cT extends Xc{constructor(t,i){super(),this.key=t,this.precondition=i,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class qI extends Xc{constructor(t,i){super(),this.key=t,this.precondition=i,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class FI{constructor(t,i,a,l){this.batchId=t,this.localWriteTime=i,this.baseMutations=a,this.mutations=l}applyToRemoteDocument(t,i){const a=i.mutationResults;for(let l=0;l<this.mutations.length;l++){const f=this.mutations[l];f.key.isEqual(t.key)&&HI(f,t,a[l])}}applyToLocalView(t,i){for(const a of this.baseMutations)a.key.isEqual(t.key)&&(i=pl(a,t,i,this.localWriteTime));for(const a of this.mutations)a.key.isEqual(t.key)&&(i=pl(a,t,i,this.localWriteTime));return i}applyToLocalDocumentSet(t,i){const a=nT();return this.mutations.forEach(l=>{const f=t.get(l.key),d=f.overlayedDocument;let p=this.applyToLocalView(d,f.mutatedFields);p=i.has(l.key)?null:p;const y=lT(d,p);y!==null&&a.set(l.key,y),d.isValidDocument()||d.convertToNoDocument(Ft.min())}),a}keys(){return this.mutations.reduce((t,i)=>t.add(i.key),ze())}isEqual(t){return this.batchId===t.batchId&&ja(this.mutations,t.mutations,(i,a)=>H_(i,a))&&ja(this.baseMutations,t.baseMutations,(i,a)=>H_(i,a))}}class Am{constructor(t,i,a,l){this.batch=t,this.commitVersion=i,this.mutationResults=a,this.docVersions=l}static from(t,i,a){Jt(t.mutations.length===a.length);let l=function(){return MI}();const f=t.mutations;for(let d=0;d<f.length;d++)l=l.insert(f[d].key,a[d].version);return new Am(t,i,a,l)}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class GI{constructor(t,i){this.largestBatchId=t,this.mutation=i}getKey(){return this.mutation.key}isEqual(t){return t!==null&&this.mutation===t.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var ae,wt;function KI(r){switch(r){case K.OK:return _t();case K.CANCELLED:case K.UNKNOWN:case K.DEADLINE_EXCEEDED:case K.RESOURCE_EXHAUSTED:case K.INTERNAL:case K.UNAVAILABLE:case K.UNAUTHENTICATED:return!1;case K.INVALID_ARGUMENT:case K.NOT_FOUND:case K.ALREADY_EXISTS:case K.PERMISSION_DENIED:case K.FAILED_PRECONDITION:case K.ABORTED:case K.OUT_OF_RANGE:case K.UNIMPLEMENTED:case K.DATA_LOSS:return!0;default:return _t()}}function QI(r){if(r===void 0)return Us("GRPC error has no .code"),K.UNKNOWN;switch(r){case ae.OK:return K.OK;case ae.CANCELLED:return K.CANCELLED;case ae.UNKNOWN:return K.UNKNOWN;case ae.DEADLINE_EXCEEDED:return K.DEADLINE_EXCEEDED;case ae.RESOURCE_EXHAUSTED:return K.RESOURCE_EXHAUSTED;case ae.INTERNAL:return K.INTERNAL;case ae.UNAVAILABLE:return K.UNAVAILABLE;case ae.UNAUTHENTICATED:return K.UNAUTHENTICATED;case ae.INVALID_ARGUMENT:return K.INVALID_ARGUMENT;case ae.NOT_FOUND:return K.NOT_FOUND;case ae.ALREADY_EXISTS:return K.ALREADY_EXISTS;case ae.PERMISSION_DENIED:return K.PERMISSION_DENIED;case ae.FAILED_PRECONDITION:return K.FAILED_PRECONDITION;case ae.ABORTED:return K.ABORTED;case ae.OUT_OF_RANGE:return K.OUT_OF_RANGE;case ae.UNIMPLEMENTED:return K.UNIMPLEMENTED;case ae.DATA_LOSS:return K.DATA_LOSS;default:return _t()}}(wt=ae||(ae={}))[wt.OK=0]="OK",wt[wt.CANCELLED=1]="CANCELLED",wt[wt.UNKNOWN=2]="UNKNOWN",wt[wt.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",wt[wt.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",wt[wt.NOT_FOUND=5]="NOT_FOUND",wt[wt.ALREADY_EXISTS=6]="ALREADY_EXISTS",wt[wt.PERMISSION_DENIED=7]="PERMISSION_DENIED",wt[wt.UNAUTHENTICATED=16]="UNAUTHENTICATED",wt[wt.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",wt[wt.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",wt[wt.ABORTED=10]="ABORTED",wt[wt.OUT_OF_RANGE=11]="OUT_OF_RANGE",wt[wt.UNIMPLEMENTED=12]="UNIMPLEMENTED",wt[wt.INTERNAL=13]="INTERNAL",wt[wt.UNAVAILABLE=14]="UNAVAILABLE",wt[wt.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */new cm([4294967295,4294967295],0);class YI{constructor(t,i){this.databaseId=t,this.useProto3Json=i}}function Pd(r,t){return r.useProto3Json?`${new Date(1e3*t.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+t.nanoseconds).slice(-9)}Z`:{seconds:""+t.seconds,nanos:t.nanoseconds}}function XI(r,t){return r.useProto3Json?t.toBase64():t.toUint8Array()}function $I(r,t){return Pd(r,t.toTimestamp())}function Ha(r){return Jt(!!r),Ft.fromTimestamp(function(i){const a=xs(i);return new Se(a.seconds,a.nanos)}(r))}function fT(r,t){return zd(r,t).canonicalString()}function zd(r,t){const i=function(l){return new Wt(["projects",l.projectId,"databases",l.database])}(r).child("documents");return t===void 0?i:i.child(t)}function ZI(r){const t=Wt.fromString(r);return Jt(s2(t)),t}function Bd(r,t){return fT(r.databaseId,t.path)}function WI(r){const t=ZI(r);return t.length===4?Wt.emptyPath():t2(t)}function JI(r){return new Wt(["projects",r.databaseId.projectId,"databases",r.databaseId.database]).canonicalString()}function t2(r){return Jt(r.length>4&&r.get(4)==="documents"),r.popFirst(5)}function F_(r,t,i){return{name:Bd(r,t),fields:i.value.mapValue.fields}}function e2(r,t){let i;if(t instanceof Nl)i={update:F_(r,t.key,t.value)};else if(t instanceof cT)i={delete:Bd(r,t.key)};else if(t instanceof Fs)i={update:F_(r,t.key,t.data),updateMask:r2(t.fieldMask)};else{if(!(t instanceof qI))return _t();i={verify:Bd(r,t.key)}}return t.fieldTransforms.length>0&&(i.updateTransforms=t.fieldTransforms.map(a=>function(f,d){const p=d.transform;if(p instanceof kc)return{fieldPath:d.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(p instanceof El)return{fieldPath:d.field.canonicalString(),appendMissingElements:{values:p.elements}};if(p instanceof bl)return{fieldPath:d.field.canonicalString(),removeAllFromArray:{values:p.elements}};if(p instanceof Lc)return{fieldPath:d.field.canonicalString(),increment:p.Ie};throw _t()}(0,a))),t.precondition.isNone||(i.currentDocument=function(l,f){return f.updateTime!==void 0?{updateTime:$I(l,f.updateTime)}:f.exists!==void 0?{exists:f.exists}:_t()}(r,t.precondition)),i}function n2(r,t){return r&&r.length>0?(Jt(t!==void 0),r.map(i=>function(l,f){let d=l.updateTime?Ha(l.updateTime):Ha(f);return d.isEqual(Ft.min())&&(d=Ha(f)),new BI(d,l.transformResults||[])}(i,t))):[]}function i2(r){let t=WI(r.parent);const i=r.structuredQuery,a=i.from?i.from.length:0;let l=null;if(a>0){Jt(a===1);const I=i.from[0];I.allDescendants?l=I.collectionId:t=t.child(I.collectionId)}let f=[];i.where&&(f=function(D){const z=hT(D);return z instanceof jr&&Y0(z)?z.getFilters():[z]}(i.where));let d=[];i.orderBy&&(d=function(D){return D.map(z=>function(Q){return new Mc(Ua(Q.field),function(Y){switch(Y){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(Q.direction))}(z))}(i.orderBy));let p=null;i.limit&&(p=function(D){let z;return z=typeof D=="object"?D.value:D,pm(z)?null:z}(i.limit));let y=null;i.startAt&&(y=function(D){const z=!!D.before,q=D.values||[];return new Nc(q,z)}(i.startAt));let v=null;return i.endAt&&(v=function(D){const z=!D.before,q=D.values||[];return new Nc(q,z)}(i.endAt)),wI(t,l,d,f,p,"F",y,v)}function hT(r){return r.unaryFilter!==void 0?function(i){switch(i.unaryFilter.op){case"IS_NAN":const a=Ua(i.unaryFilter.field);return Ae.create(a,"==",{doubleValue:NaN});case"IS_NULL":const l=Ua(i.unaryFilter.field);return Ae.create(l,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const f=Ua(i.unaryFilter.field);return Ae.create(f,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const d=Ua(i.unaryFilter.field);return Ae.create(d,"!=",{nullValue:"NULL_VALUE"});default:return _t()}}(r):r.fieldFilter!==void 0?function(i){return Ae.create(Ua(i.fieldFilter.field),function(l){switch(l){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return _t()}}(i.fieldFilter.op),i.fieldFilter.value)}(r):r.compositeFilter!==void 0?function(i){return jr.create(i.compositeFilter.filters.map(a=>hT(a)),function(l){switch(l){case"AND":return"and";case"OR":return"or";default:return _t()}}(i.compositeFilter.op))}(r):_t()}function Ua(r){return Ne.fromServerFormat(r.fieldPath)}function r2(r){const t=[];return r.fields.forEach(i=>t.push(i.canonicalString())),{fieldPaths:t}}function s2(r){return r.length>=4&&r.get(0)==="projects"&&r.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class a2{constructor(t){this.Tt=t}}function o2(r){const t=i2({parent:r.parent,structuredQuery:r.structuredQuery});return r.limitType==="LAST"?xd(t,t.limit,"L"):t}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class l2{constructor(){this.Tn=new u2}addToCollectionParentIndex(t,i){return this.Tn.add(i),F.resolve()}getCollectionParents(t,i){return F.resolve(this.Tn.getEntries(i))}addFieldIndex(t,i){return F.resolve()}deleteFieldIndex(t,i){return F.resolve()}deleteAllFieldIndexes(t){return F.resolve()}createTargetIndexes(t,i){return F.resolve()}getDocumentsMatchingTarget(t,i){return F.resolve(null)}getIndexType(t,i){return F.resolve(0)}getFieldIndexes(t,i){return F.resolve([])}getNextCollectionGroupToUpdate(t){return F.resolve(null)}getMinOffset(t,i){return F.resolve(Hr.min())}getMinOffsetFromCollectionGroup(t,i){return F.resolve(Hr.min())}updateCollectionGroup(t,i,a){return F.resolve()}updateIndexEntries(t,i){return F.resolve()}}class u2{constructor(){this.index={}}add(t){const i=t.lastSegment(),a=t.popLast(),l=this.index[i]||new Me(Wt.comparator),f=!l.has(a);return this.index[i]=l.add(a),f}has(t){const i=t.lastSegment(),a=t.popLast(),l=this.index[i];return l&&l.has(a)}getEntries(t){return(this.index[t]||new Me(Wt.comparator)).toArray()}}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const G_={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},dT=41943040;class Je{static withCacheSize(t){return new Je(t,Je.DEFAULT_COLLECTION_PERCENTILE,Je.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(t,i,a){this.cacheSizeCollectionThreshold=t,this.percentileToCollect=i,this.maximumSequenceNumbersToCollect=a}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Je.DEFAULT_COLLECTION_PERCENTILE=10,Je.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,Je.DEFAULT=new Je(dT,Je.DEFAULT_COLLECTION_PERCENTILE,Je.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),Je.DISABLED=new Je(-1,0,0);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ka{constructor(t){this.$n=t}next(){return this.$n+=2,this.$n}static Kn(){return new Ka(0)}static Un(){return new Ka(-1)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const K_="LruGarbageCollector",c2=1048576;function Q_([r,t],[i,a]){const l=Nt(r,i);return l===0?Nt(t,a):l}class f2{constructor(t){this.Hn=t,this.buffer=new Me(Q_),this.Jn=0}Yn(){return++this.Jn}Zn(t){const i=[t,this.Yn()];if(this.buffer.size<this.Hn)this.buffer=this.buffer.add(i);else{const a=this.buffer.last();Q_(i,a)<0&&(this.buffer=this.buffer.delete(a).add(i))}}get maxValue(){return this.buffer.last()[0]}}class h2{constructor(t,i,a){this.garbageCollector=t,this.asyncQueue=i,this.localStore=a,this.Xn=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.er(6e4)}stop(){this.Xn&&(this.Xn.cancel(),this.Xn=null)}get started(){return this.Xn!==null}er(t){nt(K_,`Garbage collection scheduled in ${t}ms`),this.Xn=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",t,async()=>{this.Xn=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(i){Ol(i)?nt(K_,"Ignoring IndexedDB error during garbage collection: ",i):await hm(i)}await this.er(3e5)})}}class d2{constructor(t,i){this.tr=t,this.params=i}calculateTargetCount(t,i){return this.tr.nr(t).next(a=>Math.floor(i/100*a))}nthSequenceNumber(t,i){if(i===0)return F.resolve(dm.ae);const a=new f2(i);return this.tr.forEachTarget(t,l=>a.Zn(l.sequenceNumber)).next(()=>this.tr.rr(t,l=>a.Zn(l))).next(()=>a.maxValue)}removeTargets(t,i,a){return this.tr.removeTargets(t,i,a)}removeOrphanedDocuments(t,i){return this.tr.removeOrphanedDocuments(t,i)}collect(t,i){return this.params.cacheSizeCollectionThreshold===-1?(nt("LruGarbageCollector","Garbage collection skipped; disabled"),F.resolve(G_)):this.getCacheSize(t).next(a=>a<this.params.cacheSizeCollectionThreshold?(nt("LruGarbageCollector",`Garbage collection skipped; Cache size ${a} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),G_):this.ir(t,i))}getCacheSize(t){return this.tr.getCacheSize(t)}ir(t,i){let a,l,f,d,p,y,v;const I=Date.now();return this.calculateTargetCount(t,this.params.percentileToCollect).next(D=>(D>this.params.maximumSequenceNumbersToCollect?(nt("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${D}`),l=this.params.maximumSequenceNumbersToCollect):l=D,d=Date.now(),this.nthSequenceNumber(t,l))).next(D=>(a=D,p=Date.now(),this.removeTargets(t,a,i))).next(D=>(f=D,y=Date.now(),this.removeOrphanedDocuments(t,a))).next(D=>(v=Date.now(),La()<=vt.DEBUG&&nt("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${d-I}ms
	Determined least recently used ${l} in `+(p-d)+`ms
	Removed ${f} targets in `+(y-p)+`ms
	Removed ${D} documents in `+(v-y)+`ms
Total Duration: ${v-I}ms`),F.resolve({didRun:!0,sequenceNumbersCollected:l,targetsRemoved:f,documentsRemoved:D})))}}function m2(r,t){return new d2(r,t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class p2{constructor(){this.changes=new qs(t=>t.toString(),(t,i)=>t.isEqual(i)),this.changesApplied=!1}addEntry(t){this.assertNotApplied(),this.changes.set(t.key,t)}removeEntry(t,i){this.assertNotApplied(),this.changes.set(t,Pn.newInvalidDocument(t).setReadTime(i))}getEntry(t,i){this.assertNotApplied();const a=this.changes.get(i);return a!==void 0?F.resolve(a):this.getFromCache(t,i)}getEntries(t,i){return this.getAllFromCache(t,i)}apply(t){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(t)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class g2{constructor(t,i){this.overlayedDocument=t,this.mutatedFields=i}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class y2{constructor(t,i,a,l){this.remoteDocumentCache=t,this.mutationQueue=i,this.documentOverlayCache=a,this.indexManager=l}getDocument(t,i){let a=null;return this.documentOverlayCache.getOverlay(t,i).next(l=>(a=l,this.remoteDocumentCache.getEntry(t,i))).next(l=>(a!==null&&pl(a.mutation,l,Bn.empty(),Se.now()),l))}getDocuments(t,i){return this.remoteDocumentCache.getEntries(t,i).next(a=>this.getLocalViewOfDocuments(t,a,ze()).next(()=>a))}getLocalViewOfDocuments(t,i,a=ze()){const l=Is();return this.populateOverlays(t,l,i).next(()=>this.computeViews(t,i,l,a).next(f=>{let d=lc();return f.forEach((p,y)=>{d=d.insert(p,y.overlayedDocument)}),d}))}getOverlayedDocuments(t,i){const a=Is();return this.populateOverlays(t,a,i).next(()=>this.computeViews(t,i,a,ze()))}populateOverlays(t,i,a){const l=[];return a.forEach(f=>{i.has(f)||l.push(f)}),this.documentOverlayCache.getOverlays(t,l).next(f=>{f.forEach((d,p)=>{i.set(d,p)})})}computeViews(t,i,a,l){let f=Vc();const d=ml(),p=function(){return ml()}();return i.forEach((y,v)=>{const I=a.get(v.key);l.has(v.key)&&(I===void 0||I.mutation instanceof Fs)?f=f.insert(v.key,v):I!==void 0?(d.set(v.key,I.mutation.getFieldMask()),pl(I.mutation,v,I.mutation.getFieldMask(),Se.now())):d.set(v.key,Bn.empty())}),this.recalculateAndSaveOverlays(t,f).next(y=>(y.forEach((v,I)=>d.set(v,I)),i.forEach((v,I)=>{var D;return p.set(v,new g2(I,(D=d.get(v))!==null&&D!==void 0?D:null))}),p))}recalculateAndSaveOverlays(t,i){const a=ml();let l=new en((d,p)=>d-p),f=ze();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(t,i).next(d=>{for(const p of d)p.keys().forEach(y=>{const v=i.get(y);if(v===null)return;let I=a.get(y)||Bn.empty();I=p.applyToLocalView(v,I),a.set(y,I);const D=(l.get(p.batchId)||ze()).add(y);l=l.insert(p.batchId,D)})}).next(()=>{const d=[],p=l.getReverseIterator();for(;p.hasNext();){const y=p.getNext(),v=y.key,I=y.value,D=nT();I.forEach(z=>{if(!f.has(z)){const q=lT(i.get(z),a.get(z));q!==null&&D.set(z,q),f=f.add(z)}}),d.push(this.documentOverlayCache.saveOverlays(t,v,D))}return F.waitFor(d)}).next(()=>a)}recalculateAndSaveOverlaysForDocumentKeys(t,i){return this.remoteDocumentCache.getEntries(t,i).next(a=>this.recalculateAndSaveOverlays(t,a))}getDocumentsMatchingQuery(t,i,a,l){return function(d){return dt.isDocumentKey(d.path)&&d.collectionGroup===null&&d.filters.length===0}(i)?this.getDocumentsMatchingDocumentQuery(t,i.path):II(i)?this.getDocumentsMatchingCollectionGroupQuery(t,i,a,l):this.getDocumentsMatchingCollectionQuery(t,i,a,l)}getNextDocuments(t,i,a,l){return this.remoteDocumentCache.getAllFromCollectionGroup(t,i,a,l).next(f=>{const d=l-f.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(t,i,a.largestBatchId,l-f.size):F.resolve(Is());let p=vl,y=f;return d.next(v=>F.forEach(v,(I,D)=>(p<D.largestBatchId&&(p=D.largestBatchId),f.get(I)?F.resolve():this.remoteDocumentCache.getEntry(t,I).next(z=>{y=y.insert(I,z)}))).next(()=>this.populateOverlays(t,v,f)).next(()=>this.computeViews(t,y,v,ze())).next(I=>({batchId:p,changes:eT(I)})))})}getDocumentsMatchingDocumentQuery(t,i){return this.getDocument(t,new dt(i)).next(a=>{let l=lc();return a.isFoundDocument()&&(l=l.insert(a.key,a)),l})}getDocumentsMatchingCollectionGroupQuery(t,i,a,l){const f=i.collectionGroup;let d=lc();return this.indexManager.getCollectionParents(t,f).next(p=>F.forEach(p,y=>{const v=function(D,z){return new Qc(z,null,D.explicitOrderBy.slice(),D.filters.slice(),D.limit,D.limitType,D.startAt,D.endAt)}(i,y.child(f));return this.getDocumentsMatchingCollectionQuery(t,v,a,l).next(I=>{I.forEach((D,z)=>{d=d.insert(D,z)})})}).next(()=>d))}getDocumentsMatchingCollectionQuery(t,i,a,l){let f;return this.documentOverlayCache.getOverlaysForCollection(t,i.path,a.largestBatchId).next(d=>(f=d,this.remoteDocumentCache.getDocumentsMatchingQuery(t,i,a,f,l))).next(d=>{f.forEach((y,v)=>{const I=v.getKey();d.get(I)===null&&(d=d.insert(I,Pn.newInvalidDocument(I)))});let p=lc();return d.forEach((y,v)=>{const I=f.get(y);I!==void 0&&pl(I.mutation,v,Bn.empty(),Se.now()),Em(i,v)&&(p=p.insert(y,v))}),p})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _2{constructor(t){this.serializer=t,this.dr=new Map,this.Ar=new Map}getBundleMetadata(t,i){return F.resolve(this.dr.get(i))}saveBundleMetadata(t,i){return this.dr.set(i.id,function(l){return{id:l.id,version:l.version,createTime:Ha(l.createTime)}}(i)),F.resolve()}getNamedQuery(t,i){return F.resolve(this.Ar.get(i))}saveNamedQuery(t,i){return this.Ar.set(i.name,function(l){return{name:l.name,query:o2(l.bundledQuery),readTime:Ha(l.readTime)}}(i)),F.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class v2{constructor(){this.overlays=new en(dt.comparator),this.Rr=new Map}getOverlay(t,i){return F.resolve(this.overlays.get(i))}getOverlays(t,i){const a=Is();return F.forEach(i,l=>this.getOverlay(t,l).next(f=>{f!==null&&a.set(l,f)})).next(()=>a)}saveOverlays(t,i,a){return a.forEach((l,f)=>{this.Et(t,i,f)}),F.resolve()}removeOverlaysForBatchId(t,i,a){const l=this.Rr.get(a);return l!==void 0&&(l.forEach(f=>this.overlays=this.overlays.remove(f)),this.Rr.delete(a)),F.resolve()}getOverlaysForCollection(t,i,a){const l=Is(),f=i.length+1,d=new dt(i.child("")),p=this.overlays.getIteratorFrom(d);for(;p.hasNext();){const y=p.getNext().value,v=y.getKey();if(!i.isPrefixOf(v.path))break;v.path.length===f&&y.largestBatchId>a&&l.set(y.getKey(),y)}return F.resolve(l)}getOverlaysForCollectionGroup(t,i,a,l){let f=new en((v,I)=>v-I);const d=this.overlays.getIterator();for(;d.hasNext();){const v=d.getNext().value;if(v.getKey().getCollectionGroup()===i&&v.largestBatchId>a){let I=f.get(v.largestBatchId);I===null&&(I=Is(),f=f.insert(v.largestBatchId,I)),I.set(v.getKey(),v)}}const p=Is(),y=f.getIterator();for(;y.hasNext()&&(y.getNext().value.forEach((v,I)=>p.set(v,I)),!(p.size()>=l)););return F.resolve(p)}Et(t,i,a){const l=this.overlays.get(a.key);if(l!==null){const d=this.Rr.get(l.largestBatchId).delete(a.key);this.Rr.set(l.largestBatchId,d)}this.overlays=this.overlays.insert(a.key,new GI(i,a));let f=this.Rr.get(i);f===void 0&&(f=ze(),this.Rr.set(i,f)),this.Rr.set(i,f.add(a.key))}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class T2{constructor(){this.sessionToken=ci.EMPTY_BYTE_STRING}getSessionToken(t){return F.resolve(this.sessionToken)}setSessionToken(t,i){return this.sessionToken=i,F.resolve()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sm{constructor(){this.Vr=new Me(be.mr),this.gr=new Me(be.pr)}isEmpty(){return this.Vr.isEmpty()}addReference(t,i){const a=new be(t,i);this.Vr=this.Vr.add(a),this.gr=this.gr.add(a)}yr(t,i){t.forEach(a=>this.addReference(a,i))}removeReference(t,i){this.wr(new be(t,i))}br(t,i){t.forEach(a=>this.removeReference(a,i))}Sr(t){const i=new dt(new Wt([])),a=new be(i,t),l=new be(i,t+1),f=[];return this.gr.forEachInRange([a,l],d=>{this.wr(d),f.push(d.key)}),f}Dr(){this.Vr.forEach(t=>this.wr(t))}wr(t){this.Vr=this.Vr.delete(t),this.gr=this.gr.delete(t)}vr(t){const i=new dt(new Wt([])),a=new be(i,t),l=new be(i,t+1);let f=ze();return this.gr.forEachInRange([a,l],d=>{f=f.add(d.key)}),f}containsKey(t){const i=new be(t,0),a=this.Vr.firstAfterOrEqual(i);return a!==null&&t.isEqual(a.key)}}class be{constructor(t,i){this.key=t,this.Cr=i}static mr(t,i){return dt.comparator(t.key,i.key)||Nt(t.Cr,i.Cr)}static pr(t,i){return Nt(t.Cr,i.Cr)||dt.comparator(t.key,i.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class E2{constructor(t,i){this.indexManager=t,this.referenceDelegate=i,this.mutationQueue=[],this.Fr=1,this.Mr=new Me(be.mr)}checkEmpty(t){return F.resolve(this.mutationQueue.length===0)}addMutationBatch(t,i,a,l){const f=this.Fr;this.Fr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const d=new FI(f,i,a,l);this.mutationQueue.push(d);for(const p of l)this.Mr=this.Mr.add(new be(p.key,f)),this.indexManager.addToCollectionParentIndex(t,p.key.path.popLast());return F.resolve(d)}lookupMutationBatch(t,i){return F.resolve(this.Or(i))}getNextMutationBatchAfterBatchId(t,i){const a=i+1,l=this.Nr(a),f=l<0?0:l;return F.resolve(this.mutationQueue.length>f?this.mutationQueue[f]:null)}getHighestUnacknowledgedBatchId(){return F.resolve(this.mutationQueue.length===0?mm:this.Fr-1)}getAllMutationBatches(t){return F.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(t,i){const a=new be(i,0),l=new be(i,Number.POSITIVE_INFINITY),f=[];return this.Mr.forEachInRange([a,l],d=>{const p=this.Or(d.Cr);f.push(p)}),F.resolve(f)}getAllMutationBatchesAffectingDocumentKeys(t,i){let a=new Me(Nt);return i.forEach(l=>{const f=new be(l,0),d=new be(l,Number.POSITIVE_INFINITY);this.Mr.forEachInRange([f,d],p=>{a=a.add(p.Cr)})}),F.resolve(this.Br(a))}getAllMutationBatchesAffectingQuery(t,i){const a=i.path,l=a.length+1;let f=a;dt.isDocumentKey(f)||(f=f.child(""));const d=new be(new dt(f),0);let p=new Me(Nt);return this.Mr.forEachWhile(y=>{const v=y.key.path;return!!a.isPrefixOf(v)&&(v.length===l&&(p=p.add(y.Cr)),!0)},d),F.resolve(this.Br(p))}Br(t){const i=[];return t.forEach(a=>{const l=this.Or(a);l!==null&&i.push(l)}),i}removeMutationBatch(t,i){Jt(this.Lr(i.batchId,"removed")===0),this.mutationQueue.shift();let a=this.Mr;return F.forEach(i.mutations,l=>{const f=new be(l.key,i.batchId);return a=a.delete(f),this.referenceDelegate.markPotentiallyOrphaned(t,l.key)}).next(()=>{this.Mr=a})}qn(t){}containsKey(t,i){const a=new be(i,0),l=this.Mr.firstAfterOrEqual(a);return F.resolve(i.isEqual(l&&l.key))}performConsistencyCheck(t){return this.mutationQueue.length,F.resolve()}Lr(t,i){return this.Nr(t)}Nr(t){return this.mutationQueue.length===0?0:t-this.mutationQueue[0].batchId}Or(t){const i=this.Nr(t);return i<0||i>=this.mutationQueue.length?null:this.mutationQueue[i]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class b2{constructor(t){this.kr=t,this.docs=function(){return new en(dt.comparator)}(),this.size=0}setIndexManager(t){this.indexManager=t}addEntry(t,i){const a=i.key,l=this.docs.get(a),f=l?l.size:0,d=this.kr(i);return this.docs=this.docs.insert(a,{document:i.mutableCopy(),size:d}),this.size+=d-f,this.indexManager.addToCollectionParentIndex(t,a.path.popLast())}removeEntry(t){const i=this.docs.get(t);i&&(this.docs=this.docs.remove(t),this.size-=i.size)}getEntry(t,i){const a=this.docs.get(i);return F.resolve(a?a.document.mutableCopy():Pn.newInvalidDocument(i))}getEntries(t,i){let a=Vc();return i.forEach(l=>{const f=this.docs.get(l);a=a.insert(l,f?f.document.mutableCopy():Pn.newInvalidDocument(l))}),F.resolve(a)}getDocumentsMatchingQuery(t,i,a,l){let f=Vc();const d=i.path,p=new dt(d.child("__id-9223372036854775808__")),y=this.docs.getIteratorFrom(p);for(;y.hasNext();){const{key:v,value:{document:I}}=y.getNext();if(!d.isPrefixOf(v.path))break;v.path.length>d.length+1||nI(eI(I),a)<=0||(l.has(I.key)||Em(i,I))&&(f=f.insert(I.key,I.mutableCopy()))}return F.resolve(f)}getAllFromCollectionGroup(t,i,a,l){_t()}qr(t,i){return F.forEach(this.docs,a=>i(a))}newChangeBuffer(t){return new A2(this)}getSize(t){return F.resolve(this.size)}}class A2 extends p2{constructor(t){super(),this.Ir=t}applyChanges(t){const i=[];return this.changes.forEach((a,l)=>{l.isValidDocument()?i.push(this.Ir.addEntry(t,l)):this.Ir.removeEntry(a)}),F.waitFor(i)}getFromCache(t,i){return this.Ir.getEntry(t,i)}getAllFromCache(t,i){return this.Ir.getEntries(t,i)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class S2{constructor(t){this.persistence=t,this.Qr=new qs(i=>vm(i),Tm),this.lastRemoteSnapshotVersion=Ft.min(),this.highestTargetId=0,this.$r=0,this.Kr=new Sm,this.targetCount=0,this.Ur=Ka.Kn()}forEachTarget(t,i){return this.Qr.forEach((a,l)=>i(l)),F.resolve()}getLastRemoteSnapshotVersion(t){return F.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(t){return F.resolve(this.$r)}allocateTargetId(t){return this.highestTargetId=this.Ur.next(),F.resolve(this.highestTargetId)}setTargetsMetadata(t,i,a){return a&&(this.lastRemoteSnapshotVersion=a),i>this.$r&&(this.$r=i),F.resolve()}zn(t){this.Qr.set(t.target,t);const i=t.targetId;i>this.highestTargetId&&(this.Ur=new Ka(i),this.highestTargetId=i),t.sequenceNumber>this.$r&&(this.$r=t.sequenceNumber)}addTargetData(t,i){return this.zn(i),this.targetCount+=1,F.resolve()}updateTargetData(t,i){return this.zn(i),F.resolve()}removeTargetData(t,i){return this.Qr.delete(i.target),this.Kr.Sr(i.targetId),this.targetCount-=1,F.resolve()}removeTargets(t,i,a){let l=0;const f=[];return this.Qr.forEach((d,p)=>{p.sequenceNumber<=i&&a.get(p.targetId)===null&&(this.Qr.delete(d),f.push(this.removeMatchingKeysForTargetId(t,p.targetId)),l++)}),F.waitFor(f).next(()=>l)}getTargetCount(t){return F.resolve(this.targetCount)}getTargetData(t,i){const a=this.Qr.get(i)||null;return F.resolve(a)}addMatchingKeys(t,i,a){return this.Kr.yr(i,a),F.resolve()}removeMatchingKeys(t,i,a){this.Kr.br(i,a);const l=this.persistence.referenceDelegate,f=[];return l&&i.forEach(d=>{f.push(l.markPotentiallyOrphaned(t,d))}),F.waitFor(f)}removeMatchingKeysForTargetId(t,i){return this.Kr.Sr(i),F.resolve()}getMatchingKeysForTargetId(t,i){const a=this.Kr.vr(i);return F.resolve(a)}containsKey(t,i){return F.resolve(this.Kr.containsKey(i))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mT{constructor(t,i){this.Wr={},this.overlays={},this.Gr=new dm(0),this.zr=!1,this.zr=!0,this.jr=new T2,this.referenceDelegate=t(this),this.Hr=new S2(this),this.indexManager=new l2,this.remoteDocumentCache=function(l){return new b2(l)}(a=>this.referenceDelegate.Jr(a)),this.serializer=new a2(i),this.Yr=new _2(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.zr=!1,Promise.resolve()}get started(){return this.zr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(t){return this.indexManager}getDocumentOverlayCache(t){let i=this.overlays[t.toKey()];return i||(i=new v2,this.overlays[t.toKey()]=i),i}getMutationQueue(t,i){let a=this.Wr[t.toKey()];return a||(a=new E2(i,this.referenceDelegate),this.Wr[t.toKey()]=a),a}getGlobalsCache(){return this.jr}getTargetCache(){return this.Hr}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Yr}runTransaction(t,i,a){nt("MemoryPersistence","Starting transaction:",t);const l=new w2(this.Gr.next());return this.referenceDelegate.Zr(),a(l).next(f=>this.referenceDelegate.Xr(l).next(()=>f)).toPromise().then(f=>(l.raiseOnCommittedEvent(),f))}ei(t,i){return F.or(Object.values(this.Wr).map(a=>()=>a.containsKey(t,i)))}}class w2 extends rI{constructor(t){super(),this.currentSequenceNumber=t}}class wm{constructor(t){this.persistence=t,this.ti=new Sm,this.ni=null}static ri(t){return new wm(t)}get ii(){if(this.ni)return this.ni;throw _t()}addReference(t,i,a){return this.ti.addReference(a,i),this.ii.delete(a.toString()),F.resolve()}removeReference(t,i,a){return this.ti.removeReference(a,i),this.ii.add(a.toString()),F.resolve()}markPotentiallyOrphaned(t,i){return this.ii.add(i.toString()),F.resolve()}removeTarget(t,i){this.ti.Sr(i.targetId).forEach(l=>this.ii.add(l.toString()));const a=this.persistence.getTargetCache();return a.getMatchingKeysForTargetId(t,i.targetId).next(l=>{l.forEach(f=>this.ii.add(f.toString()))}).next(()=>a.removeTargetData(t,i))}Zr(){this.ni=new Set}Xr(t){const i=this.persistence.getRemoteDocumentCache().newChangeBuffer();return F.forEach(this.ii,a=>{const l=dt.fromPath(a);return this.si(t,l).next(f=>{f||i.removeEntry(l,Ft.min())})}).next(()=>(this.ni=null,i.apply(t)))}updateLimboDocument(t,i){return this.si(t,i).next(a=>{a?this.ii.delete(i.toString()):this.ii.add(i.toString())})}Jr(t){return 0}si(t,i){return F.or([()=>F.resolve(this.ti.containsKey(i)),()=>this.persistence.getTargetCache().containsKey(t,i),()=>this.persistence.ei(t,i)])}}class Uc{constructor(t,i){this.persistence=t,this.oi=new qs(a=>oI(a.path),(a,l)=>a.isEqual(l)),this.garbageCollector=m2(this,i)}static ri(t,i){return new Uc(t,i)}Zr(){}Xr(t){return F.resolve()}forEachTarget(t,i){return this.persistence.getTargetCache().forEachTarget(t,i)}nr(t){const i=this.sr(t);return this.persistence.getTargetCache().getTargetCount(t).next(a=>i.next(l=>a+l))}sr(t){let i=0;return this.rr(t,a=>{i++}).next(()=>i)}rr(t,i){return F.forEach(this.oi,(a,l)=>this.ar(t,a,l).next(f=>f?F.resolve():i(l)))}removeTargets(t,i,a){return this.persistence.getTargetCache().removeTargets(t,i,a)}removeOrphanedDocuments(t,i){let a=0;const l=this.persistence.getRemoteDocumentCache(),f=l.newChangeBuffer();return l.qr(t,d=>this.ar(t,d,i).next(p=>{p||(a++,f.removeEntry(d,Ft.min()))})).next(()=>f.apply(t)).next(()=>a)}markPotentiallyOrphaned(t,i){return this.oi.set(i,t.currentSequenceNumber),F.resolve()}removeTarget(t,i){const a=i.withSequenceNumber(t.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(t,a)}addReference(t,i,a){return this.oi.set(a,t.currentSequenceNumber),F.resolve()}removeReference(t,i,a){return this.oi.set(a,t.currentSequenceNumber),F.resolve()}updateLimboDocument(t,i){return this.oi.set(i,t.currentSequenceNumber),F.resolve()}Jr(t){let i=t.key.toString().length;return t.isFoundDocument()&&(i+=pc(t.data.value)),i}ar(t,i,a){return F.or([()=>this.persistence.ei(t,i),()=>this.persistence.getTargetCache().containsKey(t,i),()=>{const l=this.oi.get(i);return F.resolve(l!==void 0&&l>a)}])}getCacheSize(t){return this.persistence.getRemoteDocumentCache().getSize(t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rm{constructor(t,i,a,l){this.targetId=t,this.fromCache=i,this.Hi=a,this.Ji=l}static Yi(t,i){let a=ze(),l=ze();for(const f of i.docChanges)switch(f.type){case 0:a=a.add(f.doc.key);break;case 1:l=l.add(f.doc.key)}return new Rm(t,i.fromCache,a,l)}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class R2{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(t){this._documentReadCount+=t}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class I2{constructor(){this.Zi=!1,this.Xi=!1,this.es=100,this.ts=function(){return Gb()?8:sI(Be())>0?6:4}()}initialize(t,i){this.ns=t,this.indexManager=i,this.Zi=!0}getDocumentsMatchingQuery(t,i,a,l){const f={result:null};return this.rs(t,i).next(d=>{f.result=d}).next(()=>{if(!f.result)return this.ss(t,i,l,a).next(d=>{f.result=d})}).next(()=>{if(f.result)return;const d=new R2;return this._s(t,i,d).next(p=>{if(f.result=p,this.Xi)return this.us(t,i,d,p.size)})}).next(()=>f.result)}us(t,i,a,l){return a.documentReadCount<this.es?(La()<=vt.DEBUG&&nt("QueryEngine","SDK will not create cache indexes for query:",al(i),"since it only creates cache indexes for collection contains","more than or equal to",this.es,"documents"),F.resolve()):(La()<=vt.DEBUG&&nt("QueryEngine","Query:",al(i),"scans",a.documentReadCount,"local documents and returns",l,"documents as results."),a.documentReadCount>this.ts*l?(La()<=vt.DEBUG&&nt("QueryEngine","The SDK decides to create cache indexes for query:",al(i),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(t,Ds(i))):F.resolve())}rs(t,i){if(z_(i))return F.resolve(null);let a=Ds(i);return this.indexManager.getIndexType(t,a).next(l=>l===0?null:(i.limit!==null&&l===1&&(i=xd(i,null,"F"),a=Ds(i)),this.indexManager.getDocumentsMatchingTarget(t,a).next(f=>{const d=ze(...f);return this.ns.getDocuments(t,d).next(p=>this.indexManager.getMinOffset(t,a).next(y=>{const v=this.cs(i,p);return this.ls(i,v,d,y.readTime)?this.rs(t,xd(i,null,"F")):this.hs(t,v,i,y)}))})))}ss(t,i,a,l){return z_(i)||l.isEqual(Ft.min())?F.resolve(null):this.ns.getDocuments(t,a).next(f=>{const d=this.cs(i,f);return this.ls(i,d,a,l)?F.resolve(null):(La()<=vt.DEBUG&&nt("QueryEngine","Re-using previous result from %s to execute query: %s",l.toString(),al(i)),this.hs(t,d,i,tI(l,vl)).next(p=>p))})}cs(t,i){let a=new Me(DI(t));return i.forEach((l,f)=>{Em(t,f)&&(a=a.add(f))}),a}ls(t,i,a,l){if(t.limit===null)return!1;if(a.size!==i.size)return!0;const f=t.limitType==="F"?i.last():i.first();return!!f&&(f.hasPendingWrites||f.version.compareTo(l)>0)}_s(t,i,a){return La()<=vt.DEBUG&&nt("QueryEngine","Using full collection scan to execute query:",al(i)),this.ns.getDocumentsMatchingQuery(t,i,Hr.min(),a)}hs(t,i,a,l){return this.ns.getDocumentsMatchingQuery(t,a,l).next(f=>(i.forEach(d=>{f=f.insert(d.key,d)}),f))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const C2="LocalStore";class D2{constructor(t,i,a,l){this.persistence=t,this.Ps=i,this.serializer=l,this.Ts=new en(Nt),this.Is=new qs(f=>vm(f),Tm),this.Es=new Map,this.ds=t.getRemoteDocumentCache(),this.Hr=t.getTargetCache(),this.Yr=t.getBundleCache(),this.As(a)}As(t){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(t),this.indexManager=this.persistence.getIndexManager(t),this.mutationQueue=this.persistence.getMutationQueue(t,this.indexManager),this.localDocuments=new y2(this.ds,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.ds.setIndexManager(this.indexManager),this.Ps.initialize(this.localDocuments,this.indexManager)}collectGarbage(t){return this.persistence.runTransaction("Collect garbage","readwrite-primary",i=>t.collect(i,this.Ts))}}function O2(r,t,i,a){return new D2(r,t,i,a)}async function pT(r,t){const i=Ht(r);return await i.persistence.runTransaction("Handle user change","readonly",a=>{let l;return i.mutationQueue.getAllMutationBatches(a).next(f=>(l=f,i.As(t),i.mutationQueue.getAllMutationBatches(a))).next(f=>{const d=[],p=[];let y=ze();for(const v of l){d.push(v.batchId);for(const I of v.mutations)y=y.add(I.key)}for(const v of f){p.push(v.batchId);for(const I of v.mutations)y=y.add(I.key)}return i.localDocuments.getDocuments(a,y).next(v=>({Rs:v,removedBatchIds:d,addedBatchIds:p}))})})}function N2(r,t){const i=Ht(r);return i.persistence.runTransaction("Acknowledge batch","readwrite-primary",a=>{const l=t.batch.keys(),f=i.ds.newChangeBuffer({trackRemovals:!0});return function(p,y,v,I){const D=v.batch,z=D.keys();let q=F.resolve();return z.forEach(Q=>{q=q.next(()=>I.getEntry(y,Q)).next(W=>{const Y=v.docVersions.get(Q);Jt(Y!==null),W.version.compareTo(Y)<0&&(D.applyToRemoteDocument(W,v),W.isValidDocument()&&(W.setReadTime(v.commitVersion),I.addEntry(W)))})}),q.next(()=>p.mutationQueue.removeMutationBatch(y,D))}(i,a,t,f).next(()=>f.apply(a)).next(()=>i.mutationQueue.performConsistencyCheck(a)).next(()=>i.documentOverlayCache.removeOverlaysForBatchId(a,l,t.batch.batchId)).next(()=>i.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(a,function(p){let y=ze();for(let v=0;v<p.mutationResults.length;++v)p.mutationResults[v].transformResults.length>0&&(y=y.add(p.batch.mutations[v].key));return y}(t))).next(()=>i.localDocuments.getDocuments(a,l))})}function M2(r){const t=Ht(r);return t.persistence.runTransaction("Get last remote snapshot version","readonly",i=>t.Hr.getLastRemoteSnapshotVersion(i))}function V2(r,t){const i=Ht(r);return i.persistence.runTransaction("Get next mutation batch","readonly",a=>(t===void 0&&(t=mm),i.mutationQueue.getNextMutationBatchAfterBatchId(a,t)))}class Y_{constructor(){this.activeTargetIds=LI()}Ds(t){this.activeTargetIds=this.activeTargetIds.add(t)}vs(t){this.activeTargetIds=this.activeTargetIds.delete(t)}Ss(){const t={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(t)}}class k2{constructor(){this.ho=new Y_,this.Po={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(t){}updateMutationState(t,i,a){}addLocalQueryTarget(t,i=!0){return i&&this.ho.Ds(t),this.Po[t]||"not-current"}updateQueryState(t,i,a){this.Po[t]=i}removeLocalQueryTarget(t){this.ho.vs(t)}isLocalQueryTarget(t){return this.ho.activeTargetIds.has(t)}clearQueryState(t){delete this.Po[t]}getAllActiveQueryTargets(){return this.ho.activeTargetIds}isActiveQueryTarget(t){return this.ho.activeTargetIds.has(t)}start(){return this.ho=new Y_,Promise.resolve()}handleUserChange(t,i,a){}setOnlineState(t){}shutdown(){}writeSequenceNumber(t){}notifyBundleLoaded(t){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class L2{To(t){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const X_="ConnectivityMonitor";class $_{constructor(){this.Io=()=>this.Eo(),this.Ao=()=>this.Ro(),this.Vo=[],this.mo()}To(t){this.Vo.push(t)}shutdown(){window.removeEventListener("online",this.Io),window.removeEventListener("offline",this.Ao)}mo(){window.addEventListener("online",this.Io),window.addEventListener("offline",this.Ao)}Eo(){nt(X_,"Network connectivity changed: AVAILABLE");for(const t of this.Vo)t(0)}Ro(){nt(X_,"Network connectivity changed: UNAVAILABLE");for(const t of this.Vo)t(1)}static D(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let uc=null;function Hd(){return uc===null?uc=function(){return 268435456+Math.round(2147483648*Math.random())}():uc++,"0x"+uc.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vd="RestConnection",U2={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};class x2{get fo(){return!1}constructor(t){this.databaseInfo=t,this.databaseId=t.databaseId;const i=t.ssl?"https":"http",a=encodeURIComponent(this.databaseId.projectId),l=encodeURIComponent(this.databaseId.database);this.po=i+"://"+t.host,this.yo=`projects/${a}/databases/${l}`,this.wo=this.databaseId.database===Dc?`project_id=${a}`:`project_id=${a}&database_id=${l}`}bo(t,i,a,l,f){const d=Hd(),p=this.So(t,i.toUriEncodedString());nt(vd,`Sending RPC '${t}' ${d}:`,p,a);const y={"google-cloud-resource-prefix":this.yo,"x-goog-request-params":this.wo};return this.Do(y,l,f),this.vo(t,p,y,a).then(v=>(nt(vd,`Received RPC '${t}' ${d}: `,v),v),v=>{throw Kc(vd,`RPC '${t}' ${d} failed with error: `,v,"url: ",p,"request:",a),v})}Co(t,i,a,l,f,d){return this.bo(t,i,a,l,f)}Do(t,i,a){t["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+Xa}(),t["Content-Type"]="text/plain",this.databaseInfo.appId&&(t["X-Firebase-GMPID"]=this.databaseInfo.appId),i&&i.headers.forEach((l,f)=>t[f]=l),a&&a.headers.forEach((l,f)=>t[f]=l)}So(t,i){const a=U2[t];return`${this.po}/v1/${i}:${a}`}terminate(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class P2{constructor(t){this.Fo=t.Fo,this.Mo=t.Mo}xo(t){this.Oo=t}No(t){this.Bo=t}Lo(t){this.ko=t}onMessage(t){this.qo=t}close(){this.Mo()}send(t){this.Fo(t)}Qo(){this.Oo()}$o(){this.Bo()}Ko(t){this.ko(t)}Uo(t){this.qo(t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xe="WebChannelConnection";class z2 extends x2{constructor(t){super(t),this.forceLongPolling=t.forceLongPolling,this.autoDetectLongPolling=t.autoDetectLongPolling,this.useFetchStreams=t.useFetchStreams,this.longPollingOptions=t.longPollingOptions}vo(t,i,a,l){const f=Hd();return new Promise((d,p)=>{const y=new O0;y.setWithCredentials(!0),y.listenOnce(N0.COMPLETE,()=>{try{switch(y.getLastErrorCode()){case mc.NO_ERROR:const I=y.getResponseJson();nt(xe,`XHR for RPC '${t}' ${f} received:`,JSON.stringify(I)),d(I);break;case mc.TIMEOUT:nt(xe,`RPC '${t}' ${f} timed out`),p(new ct(K.DEADLINE_EXCEEDED,"Request time out"));break;case mc.HTTP_ERROR:const D=y.getStatus();if(nt(xe,`RPC '${t}' ${f} failed with status:`,D,"response text:",y.getResponseText()),D>0){let z=y.getResponseJson();Array.isArray(z)&&(z=z[0]);const q=z==null?void 0:z.error;if(q&&q.status&&q.message){const Q=function(Y){const et=Y.toLowerCase().replace(/_/g,"-");return Object.values(K).indexOf(et)>=0?et:K.UNKNOWN}(q.status);p(new ct(Q,q.message))}else p(new ct(K.UNKNOWN,"Server responded with status "+y.getStatus()))}else p(new ct(K.UNAVAILABLE,"Connection failed."));break;default:_t()}}finally{nt(xe,`RPC '${t}' ${f} completed.`)}});const v=JSON.stringify(l);nt(xe,`RPC '${t}' ${f} sending request:`,l),y.send(i,"POST",v,a,15)})}Wo(t,i,a){const l=Hd(),f=[this.po,"/","google.firestore.v1.Firestore","/",t,"/channel"],d=k0(),p=V0(),y={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},v=this.longPollingOptions.timeoutSeconds;v!==void 0&&(y.longPollingTimeout=Math.round(1e3*v)),this.useFetchStreams&&(y.useFetchStreams=!0),this.Do(y.initMessageHeaders,i,a),y.encodeInitMessageHeaders=!0;const I=f.join("");nt(xe,`Creating RPC '${t}' stream ${l}: ${I}`,y);const D=d.createWebChannel(I,y);let z=!1,q=!1;const Q=new P2({Fo:Y=>{q?nt(xe,`Not sending because RPC '${t}' stream ${l} is closed:`,Y):(z||(nt(xe,`Opening RPC '${t}' stream ${l} transport.`),D.open(),z=!0),nt(xe,`RPC '${t}' stream ${l} sending:`,Y),D.send(Y))},Mo:()=>D.close()}),W=(Y,et,X)=>{Y.listen(et,Z=>{try{X(Z)}catch(it){setTimeout(()=>{throw it},0)}})};return W(D,ul.EventType.OPEN,()=>{q||(nt(xe,`RPC '${t}' stream ${l} transport opened.`),Q.Qo())}),W(D,ul.EventType.CLOSE,()=>{q||(q=!0,nt(xe,`RPC '${t}' stream ${l} transport closed`),Q.Ko())}),W(D,ul.EventType.ERROR,Y=>{q||(q=!0,Kc(xe,`RPC '${t}' stream ${l} transport errored:`,Y),Q.Ko(new ct(K.UNAVAILABLE,"The operation could not be completed")))}),W(D,ul.EventType.MESSAGE,Y=>{var et;if(!q){const X=Y.data[0];Jt(!!X);const Z=X,it=(Z==null?void 0:Z.error)||((et=Z[0])===null||et===void 0?void 0:et.error);if(it){nt(xe,`RPC '${t}' stream ${l} received error:`,it);const pt=it.status;let ft=function(b){const R=ae[b];if(R!==void 0)return QI(R)}(pt),C=it.message;ft===void 0&&(ft=K.INTERNAL,C="Unknown error status: "+pt+" with message "+it.message),q=!0,Q.Ko(new ct(ft,C)),D.close()}else nt(xe,`RPC '${t}' stream ${l} received:`,X),Q.Uo(X)}}),W(p,M0.STAT_EVENT,Y=>{Y.stat===Md.PROXY?nt(xe,`RPC '${t}' stream ${l} detected buffering proxy`):Y.stat===Md.NOPROXY&&nt(xe,`RPC '${t}' stream ${l} detected no buffering proxy`)}),setTimeout(()=>{Q.$o()},0),Q}}function Td(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $c(r){return new YI(r,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gT{constructor(t,i,a=1e3,l=1.5,f=6e4){this.Ti=t,this.timerId=i,this.Go=a,this.zo=l,this.jo=f,this.Ho=0,this.Jo=null,this.Yo=Date.now(),this.reset()}reset(){this.Ho=0}Zo(){this.Ho=this.jo}Xo(t){this.cancel();const i=Math.floor(this.Ho+this.e_()),a=Math.max(0,Date.now()-this.Yo),l=Math.max(0,i-a);l>0&&nt("ExponentialBackoff",`Backing off for ${l} ms (base delay: ${this.Ho} ms, delay with jitter: ${i} ms, last attempt: ${a} ms ago)`),this.Jo=this.Ti.enqueueAfterDelay(this.timerId,l,()=>(this.Yo=Date.now(),t())),this.Ho*=this.zo,this.Ho<this.Go&&(this.Ho=this.Go),this.Ho>this.jo&&(this.Ho=this.jo)}t_(){this.Jo!==null&&(this.Jo.skipDelay(),this.Jo=null)}cancel(){this.Jo!==null&&(this.Jo.cancel(),this.Jo=null)}e_(){return(Math.random()-.5)*this.Ho}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Z_="PersistentStream";class B2{constructor(t,i,a,l,f,d,p,y){this.Ti=t,this.n_=a,this.r_=l,this.connection=f,this.authCredentialsProvider=d,this.appCheckCredentialsProvider=p,this.listener=y,this.state=0,this.i_=0,this.s_=null,this.o_=null,this.stream=null,this.__=0,this.a_=new gT(t,i)}u_(){return this.state===1||this.state===5||this.c_()}c_(){return this.state===2||this.state===3}start(){this.__=0,this.state!==4?this.auth():this.l_()}async stop(){this.u_()&&await this.close(0)}h_(){this.state=0,this.a_.reset()}P_(){this.c_()&&this.s_===null&&(this.s_=this.Ti.enqueueAfterDelay(this.n_,6e4,()=>this.T_()))}I_(t){this.E_(),this.stream.send(t)}async T_(){if(this.c_())return this.close(0)}E_(){this.s_&&(this.s_.cancel(),this.s_=null)}d_(){this.o_&&(this.o_.cancel(),this.o_=null)}async close(t,i){this.E_(),this.d_(),this.a_.cancel(),this.i_++,t!==4?this.a_.reset():i&&i.code===K.RESOURCE_EXHAUSTED?(Us(i.toString()),Us("Using maximum backoff delay to prevent overloading the backend."),this.a_.Zo()):i&&i.code===K.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.A_(),this.stream.close(),this.stream=null),this.state=t,await this.listener.Lo(i)}A_(){}auth(){this.state=1;const t=this.R_(this.i_),i=this.i_;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([a,l])=>{this.i_===i&&this.V_(a,l)},a=>{t(()=>{const l=new ct(K.UNKNOWN,"Fetching auth token failed: "+a.message);return this.m_(l)})})}V_(t,i){const a=this.R_(this.i_);this.stream=this.f_(t,i),this.stream.xo(()=>{a(()=>this.listener.xo())}),this.stream.No(()=>{a(()=>(this.state=2,this.o_=this.Ti.enqueueAfterDelay(this.r_,1e4,()=>(this.c_()&&(this.state=3),Promise.resolve())),this.listener.No()))}),this.stream.Lo(l=>{a(()=>this.m_(l))}),this.stream.onMessage(l=>{a(()=>++this.__==1?this.g_(l):this.onNext(l))})}l_(){this.state=5,this.a_.Xo(async()=>{this.state=0,this.start()})}m_(t){return nt(Z_,`close with error: ${t}`),this.stream=null,this.close(4,t)}R_(t){return i=>{this.Ti.enqueueAndForget(()=>this.i_===t?i():(nt(Z_,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class H2 extends B2{constructor(t,i,a,l,f,d){super(t,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",i,a,l,d),this.serializer=f}get b_(){return this.__>0}start(){this.lastStreamToken=void 0,super.start()}A_(){this.b_&&this.S_([])}f_(t,i){return this.connection.Wo("Write",t,i)}g_(t){return Jt(!!t.streamToken),this.lastStreamToken=t.streamToken,Jt(!t.writeResults||t.writeResults.length===0),this.listener.D_()}onNext(t){Jt(!!t.streamToken),this.lastStreamToken=t.streamToken,this.a_.reset();const i=n2(t.writeResults,t.commitTime),a=Ha(t.commitTime);return this.listener.v_(a,i)}C_(){const t={};t.database=JI(this.serializer),this.I_(t)}S_(t){const i={streamToken:this.lastStreamToken,writes:t.map(a=>e2(this.serializer,a))};this.I_(i)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class j2{}class q2 extends j2{constructor(t,i,a,l){super(),this.authCredentials=t,this.appCheckCredentials=i,this.connection=a,this.serializer=l,this.F_=!1}M_(){if(this.F_)throw new ct(K.FAILED_PRECONDITION,"The client has already been terminated.")}bo(t,i,a,l){return this.M_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([f,d])=>this.connection.bo(t,zd(i,a),l,f,d)).catch(f=>{throw f.name==="FirebaseError"?(f.code===K.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),f):new ct(K.UNKNOWN,f.toString())})}Co(t,i,a,l,f){return this.M_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([d,p])=>this.connection.Co(t,zd(i,a),l,d,p,f)).catch(d=>{throw d.name==="FirebaseError"?(d.code===K.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),d):new ct(K.UNKNOWN,d.toString())})}terminate(){this.F_=!0,this.connection.terminate()}}class F2{constructor(t,i){this.asyncQueue=t,this.onlineStateHandler=i,this.state="Unknown",this.x_=0,this.O_=null,this.N_=!0}B_(){this.x_===0&&(this.L_("Unknown"),this.O_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.O_=null,this.k_("Backend didn't respond within 10 seconds."),this.L_("Offline"),Promise.resolve())))}q_(t){this.state==="Online"?this.L_("Unknown"):(this.x_++,this.x_>=1&&(this.Q_(),this.k_(`Connection failed 1 times. Most recent error: ${t.toString()}`),this.L_("Offline")))}set(t){this.Q_(),this.x_=0,t==="Online"&&(this.N_=!1),this.L_(t)}L_(t){t!==this.state&&(this.state=t,this.onlineStateHandler(t))}k_(t){const i=`Could not reach Cloud Firestore backend. ${t}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.N_?(Us(i),this.N_=!1):nt("OnlineStateTracker",i)}Q_(){this.O_!==null&&(this.O_.cancel(),this.O_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ml="RemoteStore";class G2{constructor(t,i,a,l,f){this.localStore=t,this.datastore=i,this.asyncQueue=a,this.remoteSyncer={},this.K_=[],this.U_=new Map,this.W_=new Set,this.G_=[],this.z_=f,this.z_.To(d=>{a.enqueueAndForget(async()=>{kl(this)&&(nt(Ml,"Restarting streams for network reachability change."),await async function(y){const v=Ht(y);v.W_.add(4),await Vl(v),v.j_.set("Unknown"),v.W_.delete(4),await Zc(v)}(this))})}),this.j_=new F2(a,l)}}async function Zc(r){if(kl(r))for(const t of r.G_)await t(!0)}async function Vl(r){for(const t of r.G_)await t(!1)}function kl(r){return Ht(r).W_.size===0}async function yT(r,t,i){if(!Ol(t))throw t;r.W_.add(1),await Vl(r),r.j_.set("Offline"),i||(i=()=>M2(r.localStore)),r.asyncQueue.enqueueRetryable(async()=>{nt(Ml,"Retrying IndexedDB access"),await i(),r.W_.delete(1),await Zc(r)})}function _T(r,t){return t().catch(i=>yT(r,i,t))}async function Wc(r){const t=Ht(r),i=qr(t);let a=t.K_.length>0?t.K_[t.K_.length-1].batchId:mm;for(;K2(t);)try{const l=await V2(t.localStore,a);if(l===null){t.K_.length===0&&i.P_();break}a=l.batchId,Q2(t,l)}catch(l){await yT(t,l)}vT(t)&&TT(t)}function K2(r){return kl(r)&&r.K_.length<10}function Q2(r,t){r.K_.push(t);const i=qr(r);i.c_()&&i.b_&&i.S_(t.mutations)}function vT(r){return kl(r)&&!qr(r).u_()&&r.K_.length>0}function TT(r){qr(r).start()}async function Y2(r){qr(r).C_()}async function X2(r){const t=qr(r);for(const i of r.K_)t.S_(i.mutations)}async function $2(r,t,i){const a=r.K_.shift(),l=Am.from(a,t,i);await _T(r,()=>r.remoteSyncer.applySuccessfulWrite(l)),await Wc(r)}async function Z2(r,t){t&&qr(r).b_&&await async function(a,l){if(function(d){return KI(d)&&d!==K.ABORTED}(l.code)){const f=a.K_.shift();qr(a).h_(),await _T(a,()=>a.remoteSyncer.rejectFailedWrite(f.batchId,l)),await Wc(a)}}(r,t),vT(r)&&TT(r)}async function W_(r,t){const i=Ht(r);i.asyncQueue.verifyOperationInProgress(),nt(Ml,"RemoteStore received new credentials");const a=kl(i);i.W_.add(3),await Vl(i),a&&i.j_.set("Unknown"),await i.remoteSyncer.handleCredentialChange(t),i.W_.delete(3),await Zc(i)}async function W2(r,t){const i=Ht(r);t?(i.W_.delete(2),await Zc(i)):t||(i.W_.add(2),await Vl(i),i.j_.set("Unknown"))}function qr(r){return r.Y_||(r.Y_=function(i,a,l){const f=Ht(i);return f.M_(),new H2(a,f.connection,f.authCredentials,f.appCheckCredentials,f.serializer,l)}(r.datastore,r.asyncQueue,{xo:()=>Promise.resolve(),No:Y2.bind(null,r),Lo:Z2.bind(null,r),D_:X2.bind(null,r),v_:$2.bind(null,r)}),r.G_.push(async t=>{t?(r.Y_.h_(),await Wc(r)):(await r.Y_.stop(),r.K_.length>0&&(nt(Ml,`Stopping write stream with ${r.K_.length} pending writes`),r.K_=[]))})),r.Y_}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Im{constructor(t,i,a,l,f){this.asyncQueue=t,this.timerId=i,this.targetTimeMs=a,this.op=l,this.removalCallback=f,this.deferred=new Cs,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(d=>{})}get promise(){return this.deferred.promise}static createAndSchedule(t,i,a,l,f){const d=Date.now()+a,p=new Im(t,i,d,l,f);return p.start(a),p}start(t){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),t)}skipDelay(){return this.handleDelayElapsed()}cancel(t){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new ct(K.CANCELLED,"Operation cancelled"+(t?": "+t:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(t=>this.deferred.resolve(t))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function ET(r,t){if(Us("AsyncQueue",`${t}: ${r}`),Ol(r))return new ct(K.UNAVAILABLE,`${t}: ${r}`);throw r}class J2{constructor(){this.queries=J_(),this.onlineState="Unknown",this.ia=new Set}terminate(){(function(i,a){const l=Ht(i),f=l.queries;l.queries=J_(),f.forEach((d,p)=>{for(const y of p.ta)y.onError(a)})})(this,new ct(K.ABORTED,"Firestore shutting down"))}}function J_(){return new qs(r=>J0(r),W0)}function tC(r){r.ia.forEach(t=>{t.next()})}var tv,ev;(ev=tv||(tv={}))._a="default",ev.Cache="cache";const eC="SyncEngine";class nC{constructor(t,i,a,l,f,d){this.localStore=t,this.remoteStore=i,this.eventManager=a,this.sharedClientState=l,this.currentUser=f,this.maxConcurrentLimboResolutions=d,this.La={},this.ka=new qs(p=>J0(p),W0),this.qa=new Map,this.Qa=new Set,this.$a=new en(dt.comparator),this.Ka=new Map,this.Ua=new Sm,this.Wa={},this.Ga=new Map,this.za=Ka.Un(),this.onlineState="Unknown",this.ja=void 0}get isPrimaryClient(){return this.ja===!0}}async function iC(r,t,i){const a=oC(r);try{const l=await function(d,p){const y=Ht(d),v=Se.now(),I=p.reduce((q,Q)=>q.add(Q.key),ze());let D,z;return y.persistence.runTransaction("Locally write mutations","readwrite",q=>{let Q=Vc(),W=ze();return y.ds.getEntries(q,I).next(Y=>{Q=Y,Q.forEach((et,X)=>{X.isValidDocument()||(W=W.add(et))})}).next(()=>y.localDocuments.getOverlayedDocuments(q,Q)).next(Y=>{D=Y;const et=[];for(const X of p){const Z=jI(X,D.get(X.key).overlayedDocument);Z!=null&&et.push(new Fs(X.key,Z,G0(Z.value.mapValue),qi.exists(!0)))}return y.mutationQueue.addMutationBatch(q,v,et,p)}).next(Y=>{z=Y;const et=Y.applyToLocalDocumentSet(D,W);return y.documentOverlayCache.saveOverlays(q,Y.batchId,et)})}).then(()=>({batchId:z.batchId,changes:eT(D)}))}(a.localStore,t);a.sharedClientState.addPendingMutation(l.batchId),function(d,p,y){let v=d.Wa[d.currentUser.toKey()];v||(v=new en(Nt)),v=v.insert(p,y),d.Wa[d.currentUser.toKey()]=v}(a,l.batchId,i),await Jc(a,l.changes),await Wc(a.remoteStore)}catch(l){const f=ET(l,"Failed to persist write");i.reject(f)}}function nv(r,t,i){const a=Ht(r);if(a.isPrimaryClient&&i===0||!a.isPrimaryClient&&i===1){const l=[];a.ka.forEach((f,d)=>{const p=d.view.sa(t);p.snapshot&&l.push(p.snapshot)}),function(d,p){const y=Ht(d);y.onlineState=p;let v=!1;y.queries.forEach((I,D)=>{for(const z of D.ta)z.sa(p)&&(v=!0)}),v&&tC(y)}(a.eventManager,t),l.length&&a.La.p_(l),a.onlineState=t,a.isPrimaryClient&&a.sharedClientState.setOnlineState(t)}}async function rC(r,t){const i=Ht(r),a=t.batch.batchId;try{const l=await N2(i.localStore,t);AT(i,a,null),bT(i,a),i.sharedClientState.updateMutationState(a,"acknowledged"),await Jc(i,l)}catch(l){await hm(l)}}async function sC(r,t,i){const a=Ht(r);try{const l=await function(d,p){const y=Ht(d);return y.persistence.runTransaction("Reject batch","readwrite-primary",v=>{let I;return y.mutationQueue.lookupMutationBatch(v,p).next(D=>(Jt(D!==null),I=D.keys(),y.mutationQueue.removeMutationBatch(v,D))).next(()=>y.mutationQueue.performConsistencyCheck(v)).next(()=>y.documentOverlayCache.removeOverlaysForBatchId(v,I,p)).next(()=>y.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(v,I)).next(()=>y.localDocuments.getDocuments(v,I))})}(a.localStore,t);AT(a,t,i),bT(a,t),a.sharedClientState.updateMutationState(t,"rejected",i),await Jc(a,l)}catch(l){await hm(l)}}function bT(r,t){(r.Ga.get(t)||[]).forEach(i=>{i.resolve()}),r.Ga.delete(t)}function AT(r,t,i){const a=Ht(r);let l=a.Wa[a.currentUser.toKey()];if(l){const f=l.get(t);f&&(i?f.reject(i):f.resolve(),l=l.remove(t)),a.Wa[a.currentUser.toKey()]=l}}async function Jc(r,t,i){const a=Ht(r),l=[],f=[],d=[];a.ka.isEmpty()||(a.ka.forEach((p,y)=>{d.push(a.Ha(y,t,i).then(v=>{var I;if((v||i)&&a.isPrimaryClient){const D=v?!v.fromCache:(I=void 0)===null||I===void 0?void 0:I.current;a.sharedClientState.updateQueryState(y.targetId,D?"current":"not-current")}if(v){l.push(v);const D=Rm.Yi(y.targetId,v);f.push(D)}}))}),await Promise.all(d),a.La.p_(l),await async function(y,v){const I=Ht(y);try{await I.persistence.runTransaction("notifyLocalViewChanges","readwrite",D=>F.forEach(v,z=>F.forEach(z.Hi,q=>I.persistence.referenceDelegate.addReference(D,z.targetId,q)).next(()=>F.forEach(z.Ji,q=>I.persistence.referenceDelegate.removeReference(D,z.targetId,q)))))}catch(D){if(!Ol(D))throw D;nt(C2,"Failed to update sequence numbers: "+D)}for(const D of v){const z=D.targetId;if(!D.fromCache){const q=I.Ts.get(z),Q=q.snapshotVersion,W=q.withLastLimboFreeSnapshotVersion(Q);I.Ts=I.Ts.insert(z,W)}}}(a.localStore,f))}async function aC(r,t){const i=Ht(r);if(!i.currentUser.isEqual(t)){nt(eC,"User change. New user:",t.toKey());const a=await pT(i.localStore,t);i.currentUser=t,function(f,d){f.Ga.forEach(p=>{p.forEach(y=>{y.reject(new ct(K.CANCELLED,d))})}),f.Ga.clear()}(i,"'waitForPendingWrites' promise is rejected due to a user change."),i.sharedClientState.handleUserChange(t,a.removedBatchIds,a.addedBatchIds),await Jc(i,a.Rs)}}function oC(r){const t=Ht(r);return t.remoteStore.remoteSyncer.applySuccessfulWrite=rC.bind(null,t),t.remoteStore.remoteSyncer.rejectFailedWrite=sC.bind(null,t),t}class xc{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(t){this.serializer=$c(t.databaseInfo.databaseId),this.sharedClientState=this.Za(t),this.persistence=this.Xa(t),await this.persistence.start(),this.localStore=this.eu(t),this.gcScheduler=this.tu(t,this.localStore),this.indexBackfillerScheduler=this.nu(t,this.localStore)}tu(t,i){return null}nu(t,i){return null}eu(t){return O2(this.persistence,new I2,t.initialUser,this.serializer)}Xa(t){return new mT(wm.ri,this.serializer)}Za(t){return new k2}async terminate(){var t,i;(t=this.gcScheduler)===null||t===void 0||t.stop(),(i=this.indexBackfillerScheduler)===null||i===void 0||i.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}xc.provider={build:()=>new xc};class lC extends xc{constructor(t){super(),this.cacheSizeBytes=t}tu(t,i){Jt(this.persistence.referenceDelegate instanceof Uc);const a=this.persistence.referenceDelegate.garbageCollector;return new h2(a,t.asyncQueue,i)}Xa(t){const i=this.cacheSizeBytes!==void 0?Je.withCacheSize(this.cacheSizeBytes):Je.DEFAULT;return new mT(a=>Uc.ri(a,i),this.serializer)}}class jd{async initialize(t,i){this.localStore||(this.localStore=t.localStore,this.sharedClientState=t.sharedClientState,this.datastore=this.createDatastore(i),this.remoteStore=this.createRemoteStore(i),this.eventManager=this.createEventManager(i),this.syncEngine=this.createSyncEngine(i,!t.synchronizeTabs),this.sharedClientState.onlineStateHandler=a=>nv(this.syncEngine,a,1),this.remoteStore.remoteSyncer.handleCredentialChange=aC.bind(null,this.syncEngine),await W2(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(t){return function(){return new J2}()}createDatastore(t){const i=$c(t.databaseInfo.databaseId),a=function(f){return new z2(f)}(t.databaseInfo);return function(f,d,p,y){return new q2(f,d,p,y)}(t.authCredentials,t.appCheckCredentials,a,i)}createRemoteStore(t){return function(a,l,f,d,p){return new G2(a,l,f,d,p)}(this.localStore,this.datastore,t.asyncQueue,i=>nv(this.syncEngine,i,0),function(){return $_.D()?new $_:new L2}())}createSyncEngine(t,i){return function(l,f,d,p,y,v,I){const D=new nC(l,f,d,p,y,v);return I&&(D.ja=!0),D}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,t.initialUser,t.maxConcurrentLimboResolutions,i)}async terminate(){var t,i;await async function(l){const f=Ht(l);nt(Ml,"RemoteStore shutting down."),f.W_.add(5),await Vl(f),f.z_.shutdown(),f.j_.set("Unknown")}(this.remoteStore),(t=this.datastore)===null||t===void 0||t.terminate(),(i=this.eventManager)===null||i===void 0||i.terminate()}}jd.provider={build:()=>new jd};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Fr="FirestoreClient";class uC{constructor(t,i,a,l,f){this.authCredentials=t,this.appCheckCredentials=i,this.asyncQueue=a,this.databaseInfo=l,this.user=Pe.UNAUTHENTICATED,this.clientId=U0.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=f,this.authCredentials.start(a,async d=>{nt(Fr,"Received user=",d.uid),await this.authCredentialListener(d),this.user=d}),this.appCheckCredentials.start(a,d=>(nt(Fr,"Received new app check token=",d),this.appCheckCredentialListener(d,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(t){this.authCredentialListener=t}setAppCheckTokenChangeListener(t){this.appCheckCredentialListener=t}terminate(){this.asyncQueue.enterRestrictedMode();const t=new Cs;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),t.resolve()}catch(i){const a=ET(i,"Failed to shutdown persistence");t.reject(a)}}),t.promise}}async function Ed(r,t){r.asyncQueue.verifyOperationInProgress(),nt(Fr,"Initializing OfflineComponentProvider");const i=r.configuration;await t.initialize(i);let a=i.initialUser;r.setCredentialChangeListener(async l=>{a.isEqual(l)||(await pT(t.localStore,l),a=l)}),t.persistence.setDatabaseDeletedListener(()=>r.terminate()),r._offlineComponents=t}async function iv(r,t){r.asyncQueue.verifyOperationInProgress();const i=await cC(r);nt(Fr,"Initializing OnlineComponentProvider"),await t.initialize(i,r.configuration),r.setCredentialChangeListener(a=>W_(t.remoteStore,a)),r.setAppCheckTokenChangeListener((a,l)=>W_(t.remoteStore,l)),r._onlineComponents=t}async function cC(r){if(!r._offlineComponents)if(r._uninitializedComponentsProvider){nt(Fr,"Using user provided OfflineComponentProvider");try{await Ed(r,r._uninitializedComponentsProvider._offline)}catch(t){const i=t;if(!function(l){return l.name==="FirebaseError"?l.code===K.FAILED_PRECONDITION||l.code===K.UNIMPLEMENTED:!(typeof DOMException<"u"&&l instanceof DOMException)||l.code===22||l.code===20||l.code===11}(i))throw i;Kc("Error using user provided cache. Falling back to memory cache: "+i),await Ed(r,new xc)}}else nt(Fr,"Using default OfflineComponentProvider"),await Ed(r,new lC(void 0));return r._offlineComponents}async function fC(r){return r._onlineComponents||(r._uninitializedComponentsProvider?(nt(Fr,"Using user provided OnlineComponentProvider"),await iv(r,r._uninitializedComponentsProvider._online)):(nt(Fr,"Using default OnlineComponentProvider"),await iv(r,new jd))),r._onlineComponents}function hC(r){return fC(r).then(t=>t.syncEngine)}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ST(r){const t={};return r.timeoutSeconds!==void 0&&(t.timeoutSeconds=r.timeoutSeconds),t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rv=new Map;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wT(r,t,i){if(!i)throw new ct(K.INVALID_ARGUMENT,`Function ${r}() cannot be called with an empty ${t}.`)}function dC(r,t,i,a){if(t===!0&&a===!0)throw new ct(K.INVALID_ARGUMENT,`${r} and ${i} cannot be used together.`)}function sv(r){if(!dt.isDocumentKey(r))throw new ct(K.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${r} has ${r.length}.`)}function av(r){if(dt.isDocumentKey(r))throw new ct(K.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${r} has ${r.length}.`)}function Cm(r){if(r===void 0)return"undefined";if(r===null)return"null";if(typeof r=="string")return r.length>20&&(r=`${r.substring(0,20)}...`),JSON.stringify(r);if(typeof r=="number"||typeof r=="boolean")return""+r;if(typeof r=="object"){if(r instanceof Array)return"an array";{const t=function(a){return a.constructor?a.constructor.name:null}(r);return t?`a custom ${t} object`:"an object"}}return typeof r=="function"?"a function":_t()}function RT(r,t){if("_delegate"in r&&(r=r._delegate),!(r instanceof t)){if(t.name===r.constructor.name)throw new ct(K.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const i=Cm(r);throw new ct(K.INVALID_ARGUMENT,`Expected type '${t.name}', but it was: ${i}`)}}return r}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const IT="firestore.googleapis.com",ov=!0;class lv{constructor(t){var i,a;if(t.host===void 0){if(t.ssl!==void 0)throw new ct(K.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=IT,this.ssl=ov}else this.host=t.host,this.ssl=(i=t.ssl)!==null&&i!==void 0?i:ov;if(this.credentials=t.credentials,this.ignoreUndefinedProperties=!!t.ignoreUndefinedProperties,this.localCache=t.localCache,t.cacheSizeBytes===void 0)this.cacheSizeBytes=dT;else{if(t.cacheSizeBytes!==-1&&t.cacheSizeBytes<c2)throw new ct(K.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=t.cacheSizeBytes}dC("experimentalForceLongPolling",t.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",t.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!t.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:t.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!t.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=ST((a=t.experimentalLongPollingOptions)!==null&&a!==void 0?a:{}),function(f){if(f.timeoutSeconds!==void 0){if(isNaN(f.timeoutSeconds))throw new ct(K.INVALID_ARGUMENT,`invalid long polling timeout: ${f.timeoutSeconds} (must not be NaN)`);if(f.timeoutSeconds<5)throw new ct(K.INVALID_ARGUMENT,`invalid long polling timeout: ${f.timeoutSeconds} (minimum allowed value is 5)`);if(f.timeoutSeconds>30)throw new ct(K.INVALID_ARGUMENT,`invalid long polling timeout: ${f.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!t.useFetchStreams}isEqual(t){return this.host===t.host&&this.ssl===t.ssl&&this.credentials===t.credentials&&this.cacheSizeBytes===t.cacheSizeBytes&&this.experimentalForceLongPolling===t.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===t.experimentalAutoDetectLongPolling&&function(a,l){return a.timeoutSeconds===l.timeoutSeconds}(this.experimentalLongPollingOptions,t.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===t.ignoreUndefinedProperties&&this.useFetchStreams===t.useFetchStreams}}class tf{constructor(t,i,a,l){this._authCredentials=t,this._appCheckCredentials=i,this._databaseId=a,this._app=l,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new lv({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new ct(K.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(t){if(this._settingsFrozen)throw new ct(K.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new lv(t),this._emulatorOptions=t.emulatorOptions||{},t.credentials!==void 0&&(this._authCredentials=function(a){if(!a)return new KR;switch(a.type){case"firstParty":return new $R(a.sessionIndex||"0",a.iamToken||null,a.authTokenFactory||null);case"provider":return a.client;default:throw new ct(K.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(t.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(i){const a=rv.get(i);a&&(nt("ComponentProvider","Removing Datastore"),rv.delete(i),a.terminate())}(this),Promise.resolve()}}function mC(r,t,i,a={}){var l;const f=(r=RT(r,tf))._getSettings(),d=Object.assign(Object.assign({},f),{emulatorOptions:r._getEmulatorOptions()}),p=`${t}:${i}`;f.host!==IT&&f.host!==p&&Kc("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const y=Object.assign(Object.assign({},f),{host:p,ssl:!1,emulatorOptions:a});if(!Br(y,d)&&(r._setSettings(y),a.mockUserToken)){let v,I;if(typeof a.mockUserToken=="string")v=a.mockUserToken,I=Pe.MOCK_USER;else{v=zb(a.mockUserToken,(l=r._app)===null||l===void 0?void 0:l.options.projectId);const D=a.mockUserToken.sub||a.mockUserToken.user_id;if(!D)throw new ct(K.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");I=new Pe(D)}r._authCredentials=new QR(new L0(v,I))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dm{constructor(t,i,a){this.converter=i,this._query=a,this.type="query",this.firestore=t}withConverter(t){return new Dm(this.firestore,t,this._query)}}class Fi{constructor(t,i,a){this.converter=i,this._key=a,this.type="document",this.firestore=t}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new zr(this.firestore,this.converter,this._key.path.popLast())}withConverter(t){return new Fi(this.firestore,t,this._key)}}class zr extends Dm{constructor(t,i,a){super(t,i,RI(a)),this._path=a,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const t=this._path.popLast();return t.isEmpty()?null:new Fi(this.firestore,null,new dt(t))}withConverter(t){return new zr(this.firestore,t,this._path)}}function pC(r,t,...i){if(r=He(r),wT("collection","path",t),r instanceof tf){const a=Wt.fromString(t,...i);return av(a),new zr(r,null,a)}{if(!(r instanceof Fi||r instanceof zr))throw new ct(K.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const a=r._path.child(Wt.fromString(t,...i));return av(a),new zr(r.firestore,null,a)}}function gC(r,t,...i){if(r=He(r),arguments.length===1&&(t=U0.newId()),wT("doc","path",t),r instanceof tf){const a=Wt.fromString(t,...i);return sv(a),new Fi(r,null,new dt(a))}{if(!(r instanceof Fi||r instanceof zr))throw new ct(K.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const a=r._path.child(Wt.fromString(t,...i));return sv(a),new Fi(r.firestore,r instanceof zr?r.converter:null,new dt(a))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const uv="AsyncQueue";class cv{constructor(t=Promise.resolve()){this.Vu=[],this.mu=!1,this.fu=[],this.gu=null,this.pu=!1,this.yu=!1,this.wu=[],this.a_=new gT(this,"async_queue_retry"),this.bu=()=>{const a=Td();a&&nt(uv,"Visibility state changed to "+a.visibilityState),this.a_.t_()},this.Su=t;const i=Td();i&&typeof i.addEventListener=="function"&&i.addEventListener("visibilitychange",this.bu)}get isShuttingDown(){return this.mu}enqueueAndForget(t){this.enqueue(t)}enqueueAndForgetEvenWhileRestricted(t){this.Du(),this.vu(t)}enterRestrictedMode(t){if(!this.mu){this.mu=!0,this.yu=t||!1;const i=Td();i&&typeof i.removeEventListener=="function"&&i.removeEventListener("visibilitychange",this.bu)}}enqueue(t){if(this.Du(),this.mu)return new Promise(()=>{});const i=new Cs;return this.vu(()=>this.mu&&this.yu?Promise.resolve():(t().then(i.resolve,i.reject),i.promise)).then(()=>i.promise)}enqueueRetryable(t){this.enqueueAndForget(()=>(this.Vu.push(t),this.Cu()))}async Cu(){if(this.Vu.length!==0){try{await this.Vu[0](),this.Vu.shift(),this.a_.reset()}catch(t){if(!Ol(t))throw t;nt(uv,"Operation failed with retryable error: "+t)}this.Vu.length>0&&this.a_.Xo(()=>this.Cu())}}vu(t){const i=this.Su.then(()=>(this.pu=!0,t().catch(a=>{this.gu=a,this.pu=!1;const l=function(d){let p=d.message||"";return d.stack&&(p=d.stack.includes(d.message)?d.stack:d.message+`
`+d.stack),p}(a);throw Us("INTERNAL UNHANDLED ERROR: ",l),a}).then(a=>(this.pu=!1,a))));return this.Su=i,i}enqueueAfterDelay(t,i,a){this.Du(),this.wu.indexOf(t)>-1&&(i=0);const l=Im.createAndSchedule(this,t,i,a,f=>this.Fu(f));return this.fu.push(l),l}Du(){this.gu&&_t()}verifyOperationInProgress(){}async Mu(){let t;do t=this.Su,await t;while(t!==this.Su)}xu(t){for(const i of this.fu)if(i.timerId===t)return!0;return!1}Ou(t){return this.Mu().then(()=>{this.fu.sort((i,a)=>i.targetTimeMs-a.targetTimeMs);for(const i of this.fu)if(i.skipDelay(),t!=="all"&&i.timerId===t)break;return this.Mu()})}Nu(t){this.wu.push(t)}Fu(t){const i=this.fu.indexOf(t);this.fu.splice(i,1)}}class CT extends tf{constructor(t,i,a,l){super(t,i,a,l),this.type="firestore",this._queue=new cv,this._persistenceKey=(l==null?void 0:l.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const t=this._firestoreClient.terminate();this._queue=new cv(t),this._firestoreClient=void 0,await t}}}function yC(r,t){const i=typeof r=="object"?r:Xd(),a=typeof r=="string"?r:Dc,l=Hs(i,"firestore").getImmediate({identifier:a});if(!l._initialized){const f=xb("firestore");f&&mC(l,...f)}return l}function _C(r){if(r._terminated)throw new ct(K.FAILED_PRECONDITION,"The client has already been terminated.");return r._firestoreClient||vC(r),r._firestoreClient}function vC(r){var t,i,a;const l=r._freezeSettings(),f=function(p,y,v,I){return new fI(p,y,v,I.host,I.ssl,I.experimentalForceLongPolling,I.experimentalAutoDetectLongPolling,ST(I.experimentalLongPollingOptions),I.useFetchStreams)}(r._databaseId,((t=r._app)===null||t===void 0?void 0:t.options.appId)||"",r._persistenceKey,l);r._componentsProvider||!((i=l.localCache)===null||i===void 0)&&i._offlineComponentProvider&&(!((a=l.localCache)===null||a===void 0)&&a._onlineComponentProvider)&&(r._componentsProvider={_offline:l.localCache._offlineComponentProvider,_online:l.localCache._onlineComponentProvider}),r._firestoreClient=new uC(r._authCredentials,r._appCheckCredentials,r._queue,f,r._componentsProvider&&function(p){const y=p==null?void 0:p._online.build();return{_offline:p==null?void 0:p._offline.build(y),_online:y}}(r._componentsProvider))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Al{constructor(t){this._byteString=t}static fromBase64String(t){try{return new Al(ci.fromBase64String(t))}catch(i){throw new ct(K.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+i)}}static fromUint8Array(t){return new Al(ci.fromUint8Array(t))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(t){return this._byteString.isEqual(t._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class DT{constructor(...t){for(let i=0;i<t.length;++i)if(t[i].length===0)throw new ct(K.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Ne(t)}isEqual(t){return this._internalPath.isEqual(t._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class OT{constructor(t){this._methodName=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class NT{constructor(t,i){if(!isFinite(t)||t<-90||t>90)throw new ct(K.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+t);if(!isFinite(i)||i<-180||i>180)throw new ct(K.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+i);this._lat=t,this._long=i}get latitude(){return this._lat}get longitude(){return this._long}isEqual(t){return this._lat===t._lat&&this._long===t._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(t){return Nt(this._lat,t._lat)||Nt(this._long,t._long)}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class MT{constructor(t){this._values=(t||[]).map(i=>i)}toArray(){return this._values.map(t=>t)}isEqual(t){return function(a,l){if(a.length!==l.length)return!1;for(let f=0;f<a.length;++f)if(a[f]!==l[f])return!1;return!0}(this._values,t._values)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const TC=/^__.*__$/;class EC{constructor(t,i,a){this.data=t,this.fieldMask=i,this.fieldTransforms=a}toMutation(t,i){return this.fieldMask!==null?new Fs(t,this.data,this.fieldMask,i,this.fieldTransforms):new Nl(t,this.data,i,this.fieldTransforms)}}function VT(r){switch(r){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw _t()}}class Om{constructor(t,i,a,l,f,d){this.settings=t,this.databaseId=i,this.serializer=a,this.ignoreUndefinedProperties=l,f===void 0&&this.Bu(),this.fieldTransforms=f||[],this.fieldMask=d||[]}get path(){return this.settings.path}get Lu(){return this.settings.Lu}ku(t){return new Om(Object.assign(Object.assign({},this.settings),t),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}qu(t){var i;const a=(i=this.path)===null||i===void 0?void 0:i.child(t),l=this.ku({path:a,Qu:!1});return l.$u(t),l}Ku(t){var i;const a=(i=this.path)===null||i===void 0?void 0:i.child(t),l=this.ku({path:a,Qu:!1});return l.Bu(),l}Uu(t){return this.ku({path:void 0,Qu:!0})}Wu(t){return Pc(t,this.settings.methodName,this.settings.Gu||!1,this.path,this.settings.zu)}contains(t){return this.fieldMask.find(i=>t.isPrefixOf(i))!==void 0||this.fieldTransforms.find(i=>t.isPrefixOf(i.field))!==void 0}Bu(){if(this.path)for(let t=0;t<this.path.length;t++)this.$u(this.path.get(t))}$u(t){if(t.length===0)throw this.Wu("Document fields must not be empty");if(VT(this.Lu)&&TC.test(t))throw this.Wu('Document fields cannot begin and end with "__"')}}class bC{constructor(t,i,a){this.databaseId=t,this.ignoreUndefinedProperties=i,this.serializer=a||$c(t)}ju(t,i,a,l=!1){return new Om({Lu:t,methodName:i,zu:a,path:Ne.emptyPath(),Qu:!1,Gu:l},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function AC(r){const t=r._freezeSettings(),i=$c(r._databaseId);return new bC(r._databaseId,!!t.ignoreUndefinedProperties,i)}function SC(r,t,i,a,l,f={}){const d=r.ju(f.merge||f.mergeFields?2:0,t,i,l);xT("Data must be an object, but it was:",d,a);const p=LT(a,d);let y,v;if(f.merge)y=new Bn(d.fieldMask),v=d.fieldTransforms;else if(f.mergeFields){const I=[];for(const D of f.mergeFields){const z=wC(t,D,i);if(!d.contains(z))throw new ct(K.INVALID_ARGUMENT,`Field '${z}' is specified in your field mask but missing from your input data.`);CC(I,z)||I.push(z)}y=new Bn(I),v=d.fieldTransforms.filter(D=>y.covers(D.field))}else y=null,v=d.fieldTransforms;return new EC(new zn(p),y,v)}function kT(r,t){if(UT(r=He(r)))return xT("Unsupported field value:",t,r),LT(r,t);if(r instanceof OT)return function(a,l){if(!VT(l.Lu))throw l.Wu(`${a._methodName}() can only be used with update() and set()`);if(!l.path)throw l.Wu(`${a._methodName}() is not currently supported inside arrays`);const f=a._toFieldTransform(l);f&&l.fieldTransforms.push(f)}(r,t),null;if(r===void 0&&t.ignoreUndefinedProperties)return null;if(t.path&&t.fieldMask.push(t.path),r instanceof Array){if(t.settings.Qu&&t.Lu!==4)throw t.Wu("Nested arrays are not supported");return function(a,l){const f=[];let d=0;for(const p of a){let y=kT(p,l.Uu(d));y==null&&(y={nullValue:"NULL_VALUE"}),f.push(y),d++}return{arrayValue:{values:f}}}(r,t)}return function(a,l){if((a=He(a))===null)return{nullValue:"NULL_VALUE"};if(typeof a=="number")return UI(l.serializer,a);if(typeof a=="boolean")return{booleanValue:a};if(typeof a=="string")return{stringValue:a};if(a instanceof Date){const f=Se.fromDate(a);return{timestampValue:Pd(l.serializer,f)}}if(a instanceof Se){const f=new Se(a.seconds,1e3*Math.floor(a.nanoseconds/1e3));return{timestampValue:Pd(l.serializer,f)}}if(a instanceof NT)return{geoPointValue:{latitude:a.latitude,longitude:a.longitude}};if(a instanceof Al)return{bytesValue:XI(l.serializer,a._byteString)};if(a instanceof Fi){const f=l.databaseId,d=a.firestore._databaseId;if(!d.isEqual(f))throw l.Wu(`Document reference is for database ${d.projectId}/${d.database} but should be for database ${f.projectId}/${f.database}`);return{referenceValue:fT(a.firestore._databaseId||l.databaseId,a._key.path)}}if(a instanceof MT)return function(d,p){return{mapValue:{fields:{[q0]:{stringValue:F0},[Vd]:{arrayValue:{values:d.toArray().map(v=>{if(typeof v!="number")throw p.Wu("VectorValues must only contain numeric values.");return bm(p.serializer,v)})}}}}}}(a,l);throw l.Wu(`Unsupported field value: ${Cm(a)}`)}(r,t)}function LT(r,t){const i={};return P0(r)?t.path&&t.path.length>0&&t.fieldMask.push(t.path):$a(r,(a,l)=>{const f=kT(l,t.qu(a));f!=null&&(i[a]=f)}),{mapValue:{fields:i}}}function UT(r){return!(typeof r!="object"||r===null||r instanceof Array||r instanceof Date||r instanceof Se||r instanceof NT||r instanceof Al||r instanceof Fi||r instanceof OT||r instanceof MT)}function xT(r,t,i){if(!UT(i)||!function(l){return typeof l=="object"&&l!==null&&(Object.getPrototypeOf(l)===Object.prototype||Object.getPrototypeOf(l)===null)}(i)){const a=Cm(i);throw a==="an object"?t.Wu(r+" a custom object"):t.Wu(r+" "+a)}}function wC(r,t,i){if((t=He(t))instanceof DT)return t._internalPath;if(typeof t=="string")return IC(r,t);throw Pc("Field path arguments must be of type string or ",r,!1,void 0,i)}const RC=new RegExp("[~\\*/\\[\\]]");function IC(r,t,i){if(t.search(RC)>=0)throw Pc(`Invalid field path (${t}). Paths must not contain '~', '*', '/', '[', or ']'`,r,!1,void 0,i);try{return new DT(...t.split("."))._internalPath}catch{throw Pc(`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,r,!1,void 0,i)}}function Pc(r,t,i,a,l){const f=a&&!a.isEmpty(),d=l!==void 0;let p=`Function ${t}() called with invalid data`;i&&(p+=" (via `toFirestore()`)"),p+=". ";let y="";return(f||d)&&(y+=" (found",f&&(y+=` in field ${a}`),d&&(y+=` in document ${l}`),y+=")"),new ct(K.INVALID_ARGUMENT,p+r+y)}function CC(r,t){return r.some(i=>i.isEqual(t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function DC(r,t,i){let a;return a=r?r.toFirestore(t):t,a}function OC(r,t){const i=RT(r.firestore,CT),a=gC(r),l=DC(r.converter,t);return NC(i,[SC(AC(r.firestore),"addDoc",a._key,l,r.converter!==null,{}).toMutation(a._key,qi.exists(!1))]).then(()=>a)}function NC(r,t){return function(a,l){const f=new Cs;return a.asyncQueue.enqueueAndForget(async()=>iC(await hC(a),l,f)),f.promise}(_C(r),t)}(function(t,i=!0){(function(l){Xa=l})(Qa),ui(new Hn("firestore",(a,{instanceIdentifier:l,options:f})=>{const d=a.getProvider("app").getImmediate(),p=new CT(new YR(a.getProvider("auth-internal")),new ZR(d,a.getProvider("app-check-internal")),function(v,I){if(!Object.prototype.hasOwnProperty.apply(v.options,["projectId"]))throw new ct(K.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Oc(v.options.projectId,I)}(d,l),d);return f=Object.assign({useFetchStreams:i},f),p._setSettings(f),p},"PUBLIC").setMultipleInstances(!0)),On(w_,R_,t),On(w_,R_,"esm2017")})();function PT(r){var t,i,a="";if(typeof r=="string"||typeof r=="number")a+=r;else if(typeof r=="object")if(Array.isArray(r)){var l=r.length;for(t=0;t<l;t++)r[t]&&(i=PT(r[t]))&&(a&&(a+=" "),a+=i)}else for(i in r)r[i]&&(a&&(a+=" "),a+=i);return a}function Os(){for(var r,t,i=0,a="",l=arguments.length;i<l;i++)(r=arguments[i])&&(t=PT(r))&&(a&&(a+=" "),a+=t);return a}function MC(r){if(typeof document>"u")return;let t=document.head||document.getElementsByTagName("head")[0],i=document.createElement("style");i.type="text/css",t.firstChild?t.insertBefore(i,t.firstChild):t.appendChild(i),i.styleSheet?i.styleSheet.cssText=r:i.appendChild(document.createTextNode(r))}MC(`:root{--toastify-color-light: #fff;--toastify-color-dark: #121212;--toastify-color-info: #3498db;--toastify-color-success: #07bc0c;--toastify-color-warning: #f1c40f;--toastify-color-error: hsl(6, 78%, 57%);--toastify-color-transparent: rgba(255, 255, 255, .7);--toastify-icon-color-info: var(--toastify-color-info);--toastify-icon-color-success: var(--toastify-color-success);--toastify-icon-color-warning: var(--toastify-color-warning);--toastify-icon-color-error: var(--toastify-color-error);--toastify-container-width: fit-content;--toastify-toast-width: 320px;--toastify-toast-offset: 16px;--toastify-toast-top: max(var(--toastify-toast-offset), env(safe-area-inset-top));--toastify-toast-right: max(var(--toastify-toast-offset), env(safe-area-inset-right));--toastify-toast-left: max(var(--toastify-toast-offset), env(safe-area-inset-left));--toastify-toast-bottom: max(var(--toastify-toast-offset), env(safe-area-inset-bottom));--toastify-toast-background: #fff;--toastify-toast-padding: 14px;--toastify-toast-min-height: 64px;--toastify-toast-max-height: 800px;--toastify-toast-bd-radius: 6px;--toastify-toast-shadow: 0px 4px 12px rgba(0, 0, 0, .1);--toastify-font-family: sans-serif;--toastify-z-index: 9999;--toastify-text-color-light: #757575;--toastify-text-color-dark: #fff;--toastify-text-color-info: #fff;--toastify-text-color-success: #fff;--toastify-text-color-warning: #fff;--toastify-text-color-error: #fff;--toastify-spinner-color: #616161;--toastify-spinner-color-empty-area: #e0e0e0;--toastify-color-progress-light: linear-gradient(to right, #4cd964, #5ac8fa, #007aff, #34aadc, #5856d6, #ff2d55);--toastify-color-progress-dark: #bb86fc;--toastify-color-progress-info: var(--toastify-color-info);--toastify-color-progress-success: var(--toastify-color-success);--toastify-color-progress-warning: var(--toastify-color-warning);--toastify-color-progress-error: var(--toastify-color-error);--toastify-color-progress-bgo: .2}.Toastify__toast-container{z-index:var(--toastify-z-index);-webkit-transform:translate3d(0,0,var(--toastify-z-index));position:fixed;width:var(--toastify-container-width);box-sizing:border-box;color:#fff;display:flex;flex-direction:column}.Toastify__toast-container--top-left{top:var(--toastify-toast-top);left:var(--toastify-toast-left)}.Toastify__toast-container--top-center{top:var(--toastify-toast-top);left:50%;transform:translate(-50%);align-items:center}.Toastify__toast-container--top-right{top:var(--toastify-toast-top);right:var(--toastify-toast-right);align-items:end}.Toastify__toast-container--bottom-left{bottom:var(--toastify-toast-bottom);left:var(--toastify-toast-left)}.Toastify__toast-container--bottom-center{bottom:var(--toastify-toast-bottom);left:50%;transform:translate(-50%);align-items:center}.Toastify__toast-container--bottom-right{bottom:var(--toastify-toast-bottom);right:var(--toastify-toast-right);align-items:end}.Toastify__toast{--y: 0;position:relative;touch-action:none;width:var(--toastify-toast-width);min-height:var(--toastify-toast-min-height);box-sizing:border-box;margin-bottom:1rem;padding:var(--toastify-toast-padding);border-radius:var(--toastify-toast-bd-radius);box-shadow:var(--toastify-toast-shadow);max-height:var(--toastify-toast-max-height);font-family:var(--toastify-font-family);z-index:0;display:flex;flex:1 auto;align-items:center;word-break:break-word}@media only screen and (max-width: 480px){.Toastify__toast-container{width:100vw;left:env(safe-area-inset-left);margin:0}.Toastify__toast-container--top-left,.Toastify__toast-container--top-center,.Toastify__toast-container--top-right{top:env(safe-area-inset-top);transform:translate(0)}.Toastify__toast-container--bottom-left,.Toastify__toast-container--bottom-center,.Toastify__toast-container--bottom-right{bottom:env(safe-area-inset-bottom);transform:translate(0)}.Toastify__toast-container--rtl{right:env(safe-area-inset-right);left:initial}.Toastify__toast{--toastify-toast-width: 100%;margin-bottom:0;border-radius:0}}.Toastify__toast-container[data-stacked=true]{width:var(--toastify-toast-width)}.Toastify__toast--stacked{position:absolute;width:100%;transform:translate3d(0,var(--y),0) scale(var(--s));transition:transform .3s}.Toastify__toast--stacked[data-collapsed] .Toastify__toast-body,.Toastify__toast--stacked[data-collapsed] .Toastify__close-button{transition:opacity .1s}.Toastify__toast--stacked[data-collapsed=false]{overflow:visible}.Toastify__toast--stacked[data-collapsed=true]:not(:last-child)>*{opacity:0}.Toastify__toast--stacked:after{content:"";position:absolute;left:0;right:0;height:calc(var(--g) * 1px);bottom:100%}.Toastify__toast--stacked[data-pos=top]{top:0}.Toastify__toast--stacked[data-pos=bot]{bottom:0}.Toastify__toast--stacked[data-pos=bot].Toastify__toast--stacked:before{transform-origin:top}.Toastify__toast--stacked[data-pos=top].Toastify__toast--stacked:before{transform-origin:bottom}.Toastify__toast--stacked:before{content:"";position:absolute;left:0;right:0;bottom:0;height:100%;transform:scaleY(3);z-index:-1}.Toastify__toast--rtl{direction:rtl}.Toastify__toast--close-on-click{cursor:pointer}.Toastify__toast-icon{margin-inline-end:10px;width:22px;flex-shrink:0;display:flex}.Toastify--animate{animation-fill-mode:both;animation-duration:.5s}.Toastify--animate-icon{animation-fill-mode:both;animation-duration:.3s}.Toastify__toast-theme--dark{background:var(--toastify-color-dark);color:var(--toastify-text-color-dark)}.Toastify__toast-theme--light,.Toastify__toast-theme--colored.Toastify__toast--default{background:var(--toastify-color-light);color:var(--toastify-text-color-light)}.Toastify__toast-theme--colored.Toastify__toast--info{color:var(--toastify-text-color-info);background:var(--toastify-color-info)}.Toastify__toast-theme--colored.Toastify__toast--success{color:var(--toastify-text-color-success);background:var(--toastify-color-success)}.Toastify__toast-theme--colored.Toastify__toast--warning{color:var(--toastify-text-color-warning);background:var(--toastify-color-warning)}.Toastify__toast-theme--colored.Toastify__toast--error{color:var(--toastify-text-color-error);background:var(--toastify-color-error)}.Toastify__progress-bar-theme--light{background:var(--toastify-color-progress-light)}.Toastify__progress-bar-theme--dark{background:var(--toastify-color-progress-dark)}.Toastify__progress-bar--info{background:var(--toastify-color-progress-info)}.Toastify__progress-bar--success{background:var(--toastify-color-progress-success)}.Toastify__progress-bar--warning{background:var(--toastify-color-progress-warning)}.Toastify__progress-bar--error{background:var(--toastify-color-progress-error)}.Toastify__progress-bar-theme--colored.Toastify__progress-bar--info,.Toastify__progress-bar-theme--colored.Toastify__progress-bar--success,.Toastify__progress-bar-theme--colored.Toastify__progress-bar--warning,.Toastify__progress-bar-theme--colored.Toastify__progress-bar--error{background:var(--toastify-color-transparent)}.Toastify__close-button{color:#fff;position:absolute;top:6px;right:6px;background:transparent;outline:none;border:none;padding:0;cursor:pointer;opacity:.7;transition:.3s ease;z-index:1}.Toastify__toast--rtl .Toastify__close-button{left:6px;right:unset}.Toastify__close-button--light{color:#000;opacity:.3}.Toastify__close-button>svg{fill:currentColor;height:16px;width:14px}.Toastify__close-button:hover,.Toastify__close-button:focus{opacity:1}@keyframes Toastify__trackProgress{0%{transform:scaleX(1)}to{transform:scaleX(0)}}.Toastify__progress-bar{position:absolute;bottom:0;left:0;width:100%;height:100%;z-index:1;opacity:.7;transform-origin:left}.Toastify__progress-bar--animated{animation:Toastify__trackProgress linear 1 forwards}.Toastify__progress-bar--controlled{transition:transform .2s}.Toastify__progress-bar--rtl{right:0;left:initial;transform-origin:right;border-bottom-left-radius:initial}.Toastify__progress-bar--wrp{position:absolute;overflow:hidden;bottom:0;left:0;width:100%;height:5px;border-bottom-left-radius:var(--toastify-toast-bd-radius);border-bottom-right-radius:var(--toastify-toast-bd-radius)}.Toastify__progress-bar--wrp[data-hidden=true]{opacity:0}.Toastify__progress-bar--bg{opacity:var(--toastify-color-progress-bgo);width:100%;height:100%}.Toastify__spinner{width:20px;height:20px;box-sizing:border-box;border:2px solid;border-radius:100%;border-color:var(--toastify-spinner-color-empty-area);border-right-color:var(--toastify-spinner-color);animation:Toastify__spin .65s linear infinite}@keyframes Toastify__bounceInRight{0%,60%,75%,90%,to{animation-timing-function:cubic-bezier(.215,.61,.355,1)}0%{opacity:0;transform:translate3d(3000px,0,0)}60%{opacity:1;transform:translate3d(-25px,0,0)}75%{transform:translate3d(10px,0,0)}90%{transform:translate3d(-5px,0,0)}to{transform:none}}@keyframes Toastify__bounceOutRight{20%{opacity:1;transform:translate3d(-20px,var(--y),0)}to{opacity:0;transform:translate3d(2000px,var(--y),0)}}@keyframes Toastify__bounceInLeft{0%,60%,75%,90%,to{animation-timing-function:cubic-bezier(.215,.61,.355,1)}0%{opacity:0;transform:translate3d(-3000px,0,0)}60%{opacity:1;transform:translate3d(25px,0,0)}75%{transform:translate3d(-10px,0,0)}90%{transform:translate3d(5px,0,0)}to{transform:none}}@keyframes Toastify__bounceOutLeft{20%{opacity:1;transform:translate3d(20px,var(--y),0)}to{opacity:0;transform:translate3d(-2000px,var(--y),0)}}@keyframes Toastify__bounceInUp{0%,60%,75%,90%,to{animation-timing-function:cubic-bezier(.215,.61,.355,1)}0%{opacity:0;transform:translate3d(0,3000px,0)}60%{opacity:1;transform:translate3d(0,-20px,0)}75%{transform:translate3d(0,10px,0)}90%{transform:translate3d(0,-5px,0)}to{transform:translateZ(0)}}@keyframes Toastify__bounceOutUp{20%{transform:translate3d(0,calc(var(--y) - 10px),0)}40%,45%{opacity:1;transform:translate3d(0,calc(var(--y) + 20px),0)}to{opacity:0;transform:translate3d(0,-2000px,0)}}@keyframes Toastify__bounceInDown{0%,60%,75%,90%,to{animation-timing-function:cubic-bezier(.215,.61,.355,1)}0%{opacity:0;transform:translate3d(0,-3000px,0)}60%{opacity:1;transform:translate3d(0,25px,0)}75%{transform:translate3d(0,-10px,0)}90%{transform:translate3d(0,5px,0)}to{transform:none}}@keyframes Toastify__bounceOutDown{20%{transform:translate3d(0,calc(var(--y) - 10px),0)}40%,45%{opacity:1;transform:translate3d(0,calc(var(--y) + 20px),0)}to{opacity:0;transform:translate3d(0,2000px,0)}}.Toastify__bounce-enter--top-left,.Toastify__bounce-enter--bottom-left{animation-name:Toastify__bounceInLeft}.Toastify__bounce-enter--top-right,.Toastify__bounce-enter--bottom-right{animation-name:Toastify__bounceInRight}.Toastify__bounce-enter--top-center{animation-name:Toastify__bounceInDown}.Toastify__bounce-enter--bottom-center{animation-name:Toastify__bounceInUp}.Toastify__bounce-exit--top-left,.Toastify__bounce-exit--bottom-left{animation-name:Toastify__bounceOutLeft}.Toastify__bounce-exit--top-right,.Toastify__bounce-exit--bottom-right{animation-name:Toastify__bounceOutRight}.Toastify__bounce-exit--top-center{animation-name:Toastify__bounceOutUp}.Toastify__bounce-exit--bottom-center{animation-name:Toastify__bounceOutDown}@keyframes Toastify__zoomIn{0%{opacity:0;transform:scale3d(.3,.3,.3)}50%{opacity:1}}@keyframes Toastify__zoomOut{0%{opacity:1}50%{opacity:0;transform:translate3d(0,var(--y),0) scale3d(.3,.3,.3)}to{opacity:0}}.Toastify__zoom-enter{animation-name:Toastify__zoomIn}.Toastify__zoom-exit{animation-name:Toastify__zoomOut}@keyframes Toastify__flipIn{0%{transform:perspective(400px) rotateX(90deg);animation-timing-function:ease-in;opacity:0}40%{transform:perspective(400px) rotateX(-20deg);animation-timing-function:ease-in}60%{transform:perspective(400px) rotateX(10deg);opacity:1}80%{transform:perspective(400px) rotateX(-5deg)}to{transform:perspective(400px)}}@keyframes Toastify__flipOut{0%{transform:translate3d(0,var(--y),0) perspective(400px)}30%{transform:translate3d(0,var(--y),0) perspective(400px) rotateX(-20deg);opacity:1}to{transform:translate3d(0,var(--y),0) perspective(400px) rotateX(90deg);opacity:0}}.Toastify__flip-enter{animation-name:Toastify__flipIn}.Toastify__flip-exit{animation-name:Toastify__flipOut}@keyframes Toastify__slideInRight{0%{transform:translate3d(110%,0,0);visibility:visible}to{transform:translate3d(0,var(--y),0)}}@keyframes Toastify__slideInLeft{0%{transform:translate3d(-110%,0,0);visibility:visible}to{transform:translate3d(0,var(--y),0)}}@keyframes Toastify__slideInUp{0%{transform:translate3d(0,110%,0);visibility:visible}to{transform:translate3d(0,var(--y),0)}}@keyframes Toastify__slideInDown{0%{transform:translate3d(0,-110%,0);visibility:visible}to{transform:translate3d(0,var(--y),0)}}@keyframes Toastify__slideOutRight{0%{transform:translate3d(0,var(--y),0)}to{visibility:hidden;transform:translate3d(110%,var(--y),0)}}@keyframes Toastify__slideOutLeft{0%{transform:translate3d(0,var(--y),0)}to{visibility:hidden;transform:translate3d(-110%,var(--y),0)}}@keyframes Toastify__slideOutDown{0%{transform:translate3d(0,var(--y),0)}to{visibility:hidden;transform:translate3d(0,500px,0)}}@keyframes Toastify__slideOutUp{0%{transform:translate3d(0,var(--y),0)}to{visibility:hidden;transform:translate3d(0,-500px,0)}}.Toastify__slide-enter--top-left,.Toastify__slide-enter--bottom-left{animation-name:Toastify__slideInLeft}.Toastify__slide-enter--top-right,.Toastify__slide-enter--bottom-right{animation-name:Toastify__slideInRight}.Toastify__slide-enter--top-center{animation-name:Toastify__slideInDown}.Toastify__slide-enter--bottom-center{animation-name:Toastify__slideInUp}.Toastify__slide-exit--top-left,.Toastify__slide-exit--bottom-left{animation-name:Toastify__slideOutLeft;animation-timing-function:ease-in;animation-duration:.3s}.Toastify__slide-exit--top-right,.Toastify__slide-exit--bottom-right{animation-name:Toastify__slideOutRight;animation-timing-function:ease-in;animation-duration:.3s}.Toastify__slide-exit--top-center{animation-name:Toastify__slideOutUp;animation-timing-function:ease-in;animation-duration:.3s}.Toastify__slide-exit--bottom-center{animation-name:Toastify__slideOutDown;animation-timing-function:ease-in;animation-duration:.3s}@keyframes Toastify__spin{0%{transform:rotate(0)}to{transform:rotate(360deg)}}
`);var Ll=r=>typeof r=="number"&&!isNaN(r),zs=r=>typeof r=="string",Qi=r=>typeof r=="function",VC=r=>zs(r)||Ll(r),qd=r=>zs(r)||Qi(r)?r:null,kC=(r,t)=>r===!1||Ll(r)&&r>0?r:t,Fd=r=>Ut.isValidElement(r)||zs(r)||Qi(r)||Ll(r);function LC(r,t,i=300){let{scrollHeight:a,style:l}=r;requestAnimationFrame(()=>{l.minHeight="initial",l.height=a+"px",l.transition=`all ${i}ms`,requestAnimationFrame(()=>{l.height="0",l.padding="0",l.margin="0",setTimeout(t,i)})})}function UC({enter:r,exit:t,appendPosition:i=!1,collapse:a=!0,collapseDuration:l=300}){return function({children:f,position:d,preventExitTransition:p,done:y,nodeRef:v,isIn:I,playToast:D}){let z=i?`${r}--${d}`:r,q=i?`${t}--${d}`:t,Q=Ut.useRef(0);return Ut.useLayoutEffect(()=>{let W=v.current,Y=z.split(" "),et=X=>{X.target===v.current&&(D(),W.removeEventListener("animationend",et),W.removeEventListener("animationcancel",et),Q.current===0&&X.type!=="animationcancel"&&W.classList.remove(...Y))};W.classList.add(...Y),W.addEventListener("animationend",et),W.addEventListener("animationcancel",et)},[]),Ut.useEffect(()=>{let W=v.current,Y=()=>{W.removeEventListener("animationend",Y),a?LC(W,y,l):y()};I||(p?Y():(Q.current=1,W.className+=` ${q}`,W.addEventListener("animationend",Y)))},[I]),jt.createElement(jt.Fragment,null,f)}}function fv(r,t){return{content:zT(r.content,r.props),containerId:r.props.containerId,id:r.props.toastId,theme:r.props.theme,type:r.props.type,data:r.props.data||{},isLoading:r.props.isLoading,icon:r.props.icon,reason:r.removalReason,status:t}}function zT(r,t,i=!1){return Ut.isValidElement(r)&&!zs(r.type)?Ut.cloneElement(r,{closeToast:t.closeToast,toastProps:t,data:t.data,isPaused:i}):Qi(r)?r({closeToast:t.closeToast,toastProps:t,data:t.data,isPaused:i}):r}function xC({closeToast:r,theme:t,ariaLabel:i="close"}){return jt.createElement("button",{className:`Toastify__close-button Toastify__close-button--${t}`,type:"button",onClick:a=>{a.stopPropagation(),r(!0)},"aria-label":i},jt.createElement("svg",{"aria-hidden":"true",viewBox:"0 0 14 16"},jt.createElement("path",{fillRule:"evenodd",d:"M7.71 8.23l3.75 3.75-1.48 1.48-3.75-3.75-3.75 3.75L1 11.98l3.75-3.75L1 4.48 2.48 3l3.75 3.75L9.98 3l1.48 1.48-3.75 3.75z"})))}function PC({delay:r,isRunning:t,closeToast:i,type:a="default",hide:l,className:f,controlledProgress:d,progress:p,rtl:y,isIn:v,theme:I}){let D=l||d&&p===0,z={animationDuration:`${r}ms`,animationPlayState:t?"running":"paused"};d&&(z.transform=`scaleX(${p})`);let q=Os("Toastify__progress-bar",d?"Toastify__progress-bar--controlled":"Toastify__progress-bar--animated",`Toastify__progress-bar-theme--${I}`,`Toastify__progress-bar--${a}`,{"Toastify__progress-bar--rtl":y}),Q=Qi(f)?f({rtl:y,type:a,defaultClassName:q}):Os(q,f),W={[d&&p>=1?"onTransitionEnd":"onAnimationEnd"]:d&&p<1?null:()=>{v&&i()}};return jt.createElement("div",{className:"Toastify__progress-bar--wrp","data-hidden":D},jt.createElement("div",{className:`Toastify__progress-bar--bg Toastify__progress-bar-theme--${I} Toastify__progress-bar--${a}`}),jt.createElement("div",{role:"progressbar","aria-hidden":D?"true":"false","aria-label":"notification timer",className:Q,style:z,...W}))}var zC=1,BT=()=>`${zC++}`;function BC(r,t,i){let a=1,l=0,f=[],d=[],p=t,y=new Map,v=new Set,I=X=>(v.add(X),()=>v.delete(X)),D=()=>{d=Array.from(y.values()),v.forEach(X=>X())},z=({containerId:X,toastId:Z,updateId:it})=>{let pt=X?X!==r:r!==1,ft=y.has(Z)&&it==null;return pt||ft},q=(X,Z)=>{y.forEach(it=>{var pt;(Z==null||Z===it.props.toastId)&&((pt=it.toggle)==null||pt.call(it,X))})},Q=X=>{var Z,it;(it=(Z=X.props)==null?void 0:Z.onClose)==null||it.call(Z,X.removalReason),X.isActive=!1},W=X=>{if(X==null)y.forEach(Q);else{let Z=y.get(X);Z&&Q(Z)}D()},Y=()=>{l-=f.length,f=[]},et=X=>{var Z,it;let{toastId:pt,updateId:ft}=X.props,C=ft==null;X.staleId&&y.delete(X.staleId),X.isActive=!0,y.set(pt,X),D(),i(fv(X,C?"added":"updated")),C&&((it=(Z=X.props).onOpen)==null||it.call(Z))};return{id:r,props:p,observe:I,toggle:q,removeToast:W,toasts:y,clearQueue:Y,buildToast:(X,Z)=>{if(z(Z))return;let{toastId:it,updateId:pt,data:ft,staleId:C,delay:A}=Z,b=pt==null;b&&l++;let R={...p,style:p.toastStyle,key:a++,...Object.fromEntries(Object.entries(Z).filter(([k,w])=>w!=null)),toastId:it,updateId:pt,data:ft,isIn:!1,className:qd(Z.className||p.toastClassName),progressClassName:qd(Z.progressClassName||p.progressClassName),autoClose:Z.isLoading?!1:kC(Z.autoClose,p.autoClose),closeToast(k){y.get(it).removalReason=k,W(it)},deleteToast(){let k=y.get(it);if(k!=null){if(i(fv(k,"removed")),y.delete(it),l--,l<0&&(l=0),f.length>0){et(f.shift());return}D()}}};R.closeButton=p.closeButton,Z.closeButton===!1||Fd(Z.closeButton)?R.closeButton=Z.closeButton:Z.closeButton===!0&&(R.closeButton=Fd(p.closeButton)?p.closeButton:!0);let O={content:X,props:R,staleId:C};p.limit&&p.limit>0&&l>p.limit&&b?f.push(O):Ll(A)?setTimeout(()=>{et(O)},A):et(O)},setProps(X){p=X},setToggle:(X,Z)=>{let it=y.get(X);it&&(it.toggle=Z)},isToastActive:X=>{var Z;return(Z=y.get(X))==null?void 0:Z.isActive},getSnapshot:()=>d}}var Ye=new Map,Sl=[],Gd=new Set,HC=r=>Gd.forEach(t=>t(r)),HT=()=>Ye.size>0;function jC(){Sl.forEach(r=>qT(r.content,r.options)),Sl=[]}var qC=(r,{containerId:t})=>{var i;return(i=Ye.get(t||1))==null?void 0:i.toasts.get(r)};function jT(r,t){var i;if(t)return!!((i=Ye.get(t))!=null&&i.isToastActive(r));let a=!1;return Ye.forEach(l=>{l.isToastActive(r)&&(a=!0)}),a}function FC(r){if(!HT()){Sl=Sl.filter(t=>r!=null&&t.options.toastId!==r);return}if(r==null||VC(r))Ye.forEach(t=>{t.removeToast(r)});else if(r&&("containerId"in r||"id"in r)){let t=Ye.get(r.containerId);t?t.removeToast(r.id):Ye.forEach(i=>{i.removeToast(r.id)})}}var GC=(r={})=>{Ye.forEach(t=>{t.props.limit&&(!r.containerId||t.id===r.containerId)&&t.clearQueue()})};function qT(r,t){Fd(r)&&(HT()||Sl.push({content:r,options:t}),Ye.forEach(i=>{i.buildToast(r,t)}))}function KC(r){var t;(t=Ye.get(r.containerId||1))==null||t.setToggle(r.id,r.fn)}function FT(r,t){Ye.forEach(i=>{(t==null||!(t!=null&&t.containerId)||(t==null?void 0:t.containerId)===i.id)&&i.toggle(r,t==null?void 0:t.id)})}function QC(r){let t=r.containerId||1;return{subscribe(i){let a=BC(t,r,HC);Ye.set(t,a);let l=a.observe(i);return jC(),()=>{l(),Ye.delete(t)}},setProps(i){var a;(a=Ye.get(t))==null||a.setProps(i)},getSnapshot(){var i;return(i=Ye.get(t))==null?void 0:i.getSnapshot()}}}function YC(r){return Gd.add(r),()=>{Gd.delete(r)}}function XC(r){return r&&(zs(r.toastId)||Ll(r.toastId))?r.toastId:BT()}function Ul(r,t){return qT(r,t),t.toastId}function ef(r,t){return{...t,type:t&&t.type||r,toastId:XC(t)}}function nf(r){return(t,i)=>Ul(t,ef(r,i))}function Mt(r,t){return Ul(r,ef("default",t))}Mt.loading=(r,t)=>Ul(r,ef("default",{isLoading:!0,autoClose:!1,closeOnClick:!1,closeButton:!1,draggable:!1,...t}));function $C(r,{pending:t,error:i,success:a},l){let f;t&&(f=zs(t)?Mt.loading(t,l):Mt.loading(t.render,{...l,...t}));let d={isLoading:null,autoClose:null,closeOnClick:null,closeButton:null,draggable:null},p=(v,I,D)=>{if(I==null){Mt.dismiss(f);return}let z={type:v,...d,...l,data:D},q=zs(I)?{render:I}:I;return f?Mt.update(f,{...z,...q}):Mt(q.render,{...z,...q}),D},y=Qi(r)?r():r;return y.then(v=>p("success",a,v)).catch(v=>p("error",i,v)),y}Mt.promise=$C;Mt.success=nf("success");Mt.info=nf("info");Mt.error=nf("error");Mt.warning=nf("warning");Mt.warn=Mt.warning;Mt.dark=(r,t)=>Ul(r,ef("default",{theme:"dark",...t}));function ZC(r){FC(r)}Mt.dismiss=ZC;Mt.clearWaitingQueue=GC;Mt.isActive=jT;Mt.update=(r,t={})=>{let i=qC(r,t);if(i){let{props:a,content:l}=i,f={delay:100,...a,...t,toastId:t.toastId||r,updateId:BT()};f.toastId!==r&&(f.staleId=r);let d=f.render||l;delete f.render,Ul(d,f)}};Mt.done=r=>{Mt.update(r,{progress:1})};Mt.onChange=YC;Mt.play=r=>FT(!0,r);Mt.pause=r=>FT(!1,r);function WC(r){var t;let{subscribe:i,getSnapshot:a,setProps:l}=Ut.useRef(QC(r)).current;l(r);let f=(t=Ut.useSyncExternalStore(i,a,a))==null?void 0:t.slice();function d(p){if(!f)return[];let y=new Map;return r.newestOnTop&&f.reverse(),f.forEach(v=>{let{position:I}=v.props;y.has(I)||y.set(I,[]),y.get(I).push(v)}),Array.from(y,v=>p(v[0],v[1]))}return{getToastToRender:d,isToastActive:jT,count:f==null?void 0:f.length}}function JC(r){let[t,i]=Ut.useState(!1),[a,l]=Ut.useState(!1),f=Ut.useRef(null),d=Ut.useRef({start:0,delta:0,removalDistance:0,canCloseOnClick:!0,canDrag:!1,didMove:!1}).current,{autoClose:p,pauseOnHover:y,closeToast:v,onClick:I,closeOnClick:D}=r;KC({id:r.toastId,containerId:r.containerId,fn:i}),Ut.useEffect(()=>{if(r.pauseOnFocusLoss)return z(),()=>{q()}},[r.pauseOnFocusLoss]);function z(){document.hasFocus()||et(),window.addEventListener("focus",Y),window.addEventListener("blur",et)}function q(){window.removeEventListener("focus",Y),window.removeEventListener("blur",et)}function Q(C){if(r.draggable===!0||r.draggable===C.pointerType){X();let A=f.current;d.canCloseOnClick=!0,d.canDrag=!0,A.style.transition="none",r.draggableDirection==="x"?(d.start=C.clientX,d.removalDistance=A.offsetWidth*(r.draggablePercent/100)):(d.start=C.clientY,d.removalDistance=A.offsetHeight*(r.draggablePercent===80?r.draggablePercent*1.5:r.draggablePercent)/100)}}function W(C){let{top:A,bottom:b,left:R,right:O}=f.current.getBoundingClientRect();C.nativeEvent.type!=="touchend"&&r.pauseOnHover&&C.clientX>=R&&C.clientX<=O&&C.clientY>=A&&C.clientY<=b?et():Y()}function Y(){i(!0)}function et(){i(!1)}function X(){d.didMove=!1,document.addEventListener("pointermove",it),document.addEventListener("pointerup",pt)}function Z(){document.removeEventListener("pointermove",it),document.removeEventListener("pointerup",pt)}function it(C){let A=f.current;if(d.canDrag&&A){d.didMove=!0,t&&et(),r.draggableDirection==="x"?d.delta=C.clientX-d.start:d.delta=C.clientY-d.start,d.start!==C.clientX&&(d.canCloseOnClick=!1);let b=r.draggableDirection==="x"?`${d.delta}px, var(--y)`:`0, calc(${d.delta}px + var(--y))`;A.style.transform=`translate3d(${b},0)`,A.style.opacity=`${1-Math.abs(d.delta/d.removalDistance)}`}}function pt(){Z();let C=f.current;if(d.canDrag&&d.didMove&&C){if(d.canDrag=!1,Math.abs(d.delta)>d.removalDistance){l(!0),r.closeToast(!0),r.collapseAll();return}C.style.transition="transform 0.2s, opacity 0.2s",C.style.removeProperty("transform"),C.style.removeProperty("opacity")}}let ft={onPointerDown:Q,onPointerUp:W};return p&&y&&(ft.onMouseEnter=et,r.stacked||(ft.onMouseLeave=Y)),D&&(ft.onClick=C=>{I&&I(C),d.canCloseOnClick&&v(!0)}),{playToast:Y,pauseToast:et,isRunning:t,preventExitTransition:a,toastRef:f,eventHandlers:ft}}var tD=typeof window<"u"?Ut.useLayoutEffect:Ut.useEffect,rf=({theme:r,type:t,isLoading:i,...a})=>jt.createElement("svg",{viewBox:"0 0 24 24",width:"100%",height:"100%",fill:r==="colored"?"currentColor":`var(--toastify-icon-color-${t})`,...a});function eD(r){return jt.createElement(rf,{...r},jt.createElement("path",{d:"M23.32 17.191L15.438 2.184C14.728.833 13.416 0 11.996 0c-1.42 0-2.733.833-3.443 2.184L.533 17.448a4.744 4.744 0 000 4.368C1.243 23.167 2.555 24 3.975 24h16.05C22.22 24 24 22.044 24 19.632c0-.904-.251-1.746-.68-2.44zm-9.622 1.46c0 1.033-.724 1.823-1.698 1.823s-1.698-.79-1.698-1.822v-.043c0-1.028.724-1.822 1.698-1.822s1.698.79 1.698 1.822v.043zm.039-12.285l-.84 8.06c-.057.581-.408.943-.897.943-.49 0-.84-.367-.896-.942l-.84-8.065c-.057-.624.25-1.095.779-1.095h1.91c.528.005.84.476.784 1.1z"}))}function nD(r){return jt.createElement(rf,{...r},jt.createElement("path",{d:"M12 0a12 12 0 1012 12A12.013 12.013 0 0012 0zm.25 5a1.5 1.5 0 11-1.5 1.5 1.5 1.5 0 011.5-1.5zm2.25 13.5h-4a1 1 0 010-2h.75a.25.25 0 00.25-.25v-4.5a.25.25 0 00-.25-.25h-.75a1 1 0 010-2h1a2 2 0 012 2v4.75a.25.25 0 00.25.25h.75a1 1 0 110 2z"}))}function iD(r){return jt.createElement(rf,{...r},jt.createElement("path",{d:"M12 0a12 12 0 1012 12A12.014 12.014 0 0012 0zm6.927 8.2l-6.845 9.289a1.011 1.011 0 01-1.43.188l-4.888-3.908a1 1 0 111.25-1.562l4.076 3.261 6.227-8.451a1 1 0 111.61 1.183z"}))}function rD(r){return jt.createElement(rf,{...r},jt.createElement("path",{d:"M11.983 0a12.206 12.206 0 00-8.51 3.653A11.8 11.8 0 000 12.207 11.779 11.779 0 0011.8 24h.214A12.111 12.111 0 0024 11.791 11.766 11.766 0 0011.983 0zM10.5 16.542a1.476 1.476 0 011.449-1.53h.027a1.527 1.527 0 011.523 1.47 1.475 1.475 0 01-1.449 1.53h-.027a1.529 1.529 0 01-1.523-1.47zM11 12.5v-6a1 1 0 012 0v6a1 1 0 11-2 0z"}))}function sD(){return jt.createElement("div",{className:"Toastify__spinner"})}var Kd={info:nD,warning:eD,success:iD,error:rD,spinner:sD},aD=r=>r in Kd;function oD({theme:r,type:t,isLoading:i,icon:a}){let l=null,f={theme:r,type:t};return a===!1||(Qi(a)?l=a({...f,isLoading:i}):Ut.isValidElement(a)?l=Ut.cloneElement(a,f):i?l=Kd.spinner():aD(t)&&(l=Kd[t](f))),l}var lD=r=>{let{isRunning:t,preventExitTransition:i,toastRef:a,eventHandlers:l,playToast:f}=JC(r),{closeButton:d,children:p,autoClose:y,onClick:v,type:I,hideProgressBar:D,closeToast:z,transition:q,position:Q,className:W,style:Y,progressClassName:et,updateId:X,role:Z,progress:it,rtl:pt,toastId:ft,deleteToast:C,isIn:A,isLoading:b,closeOnClick:R,theme:O,ariaLabel:k}=r,w=Os("Toastify__toast",`Toastify__toast-theme--${O}`,`Toastify__toast--${I}`,{"Toastify__toast--rtl":pt},{"Toastify__toast--close-on-click":R}),oe=Qi(W)?W({rtl:pt,position:Q,type:I,defaultClassName:w}):Os(w,W),Ve=oD(r),J=!!it||!y,ot={closeToast:z,type:I,theme:O},st=null;return d===!1||(Qi(d)?st=d(ot):Ut.isValidElement(d)?st=Ut.cloneElement(d,ot):st=xC(ot)),jt.createElement(q,{isIn:A,done:C,position:Q,preventExitTransition:i,nodeRef:a,playToast:f},jt.createElement("div",{id:ft,tabIndex:0,onClick:v,"data-in":A,className:oe,...l,style:Y,ref:a,...A&&{role:Z,"aria-label":k}},Ve!=null&&jt.createElement("div",{className:Os("Toastify__toast-icon",{"Toastify--animate-icon Toastify__zoom-enter":!b})},Ve),zT(p,r,!t),st,!r.customProgressBar&&jt.createElement(PC,{...X&&!J?{key:`p-${X}`}:{},rtl:pt,theme:O,delay:y,isRunning:t,isIn:A,closeToast:z,hide:D,type:I,className:et,controlledProgress:J,progress:it||0})))},uD=(r,t=!1)=>({enter:`Toastify--animate Toastify__${r}-enter`,exit:`Toastify--animate Toastify__${r}-exit`,appendPosition:t}),cD=UC(uD("bounce",!0)),fD={position:"top-right",transition:cD,autoClose:5e3,closeButton:!0,pauseOnHover:!0,pauseOnFocusLoss:!0,draggable:"touch",draggablePercent:80,draggableDirection:"x",role:"alert",theme:"light","aria-label":"Notifications Alt+T",hotKeys:r=>r.altKey&&r.code==="KeyT"};function hD(r){let t={...fD,...r},i=r.stacked,[a,l]=Ut.useState(!0),f=Ut.useRef(null),{getToastToRender:d,isToastActive:p,count:y}=WC(t),{className:v,style:I,rtl:D,containerId:z,hotKeys:q}=t;function Q(Y){let et=Os("Toastify__toast-container",`Toastify__toast-container--${Y}`,{"Toastify__toast-container--rtl":D});return Qi(v)?v({position:Y,rtl:D,defaultClassName:et}):Os(et,qd(v))}function W(){i&&(l(!0),Mt.play())}return tD(()=>{var Y;if(i){let et=f.current.querySelectorAll('[data-in="true"]'),X=12,Z=(Y=t.position)==null?void 0:Y.includes("top"),it=0,pt=0;Array.from(et).reverse().forEach((ft,C)=>{let A=ft;A.classList.add("Toastify__toast--stacked"),C>0&&(A.dataset.collapsed=`${a}`),A.dataset.pos||(A.dataset.pos=Z?"top":"bot");let b=it*(a?.2:1)+(a?0:X*C);A.style.setProperty("--y",`${Z?b:b*-1}px`),A.style.setProperty("--g",`${X}`),A.style.setProperty("--s",`${1-(a?pt:0)}`),it+=A.offsetHeight,pt+=.025})}},[a,y,i]),Ut.useEffect(()=>{function Y(et){var X;let Z=f.current;q(et)&&((X=Z.querySelector('[tabIndex="0"]'))==null||X.focus(),l(!1),Mt.pause()),et.key==="Escape"&&(document.activeElement===Z||Z!=null&&Z.contains(document.activeElement))&&(l(!0),Mt.play())}return document.addEventListener("keydown",Y),()=>{document.removeEventListener("keydown",Y)}},[q]),jt.createElement("section",{ref:f,className:"Toastify",id:z,onMouseEnter:()=>{i&&(l(!1),Mt.pause())},onMouseLeave:W,"aria-live":"polite","aria-atomic":"false","aria-relevant":"additions text","aria-label":t["aria-label"]},d((Y,et)=>{let X=et.length?{...I}:{...I,pointerEvents:"none"};return jt.createElement("div",{tabIndex:-1,className:Q(Y),"data-stacked":i,style:X,key:`c-${Y}`},et.map(({content:Z,props:it})=>jt.createElement(lD,{...it,stacked:i,collapseAll:W,isIn:p(it.toastId,it.containerId),key:`t-${it.key}`},Z)))}))}const dD={apiKey:"AIzaSyAmhvxqddjJHwR-QhtLGxIm7edX4e5VcKg",authDomain:"netflix-clone-c288a.firebaseapp.com",projectId:"netflix-clone-c288a",storageBucket:"netflix-clone-c288a.firebasestorage.app",messagingSenderId:"1080317526851",appId:"1:1080317526851:web:223c4b73476e2ae58a25f6",measurementId:"G-4JSDSHX7RV"},Nm=Sv(dD);jR(Nm);const sf=Aw(Nm),mD=yC(Nm),ED=async(r,t,i)=>{try{const l=(await o1(sf,t,i)).user;await OC(pC(mD,"user"),{uid:l.uid,name:r,authProvider:"local",email:t})}catch(a){console.log(a),Mt.error(a.code.split("/")[1].split("-").join(" "))}},bD=async(r,t)=>{try{await l1(sf,r,t)}catch(i){console.log(i),Mt.error(i.code.split("/")[1].split("-").join(" "))}},AD=()=>{h1(sf)},pD=Ut.lazy(()=>Qd(()=>import("./Home-DTXRNX1S.js"),__vite__mapDeps([0,1,2,3]))),gD=Ut.lazy(()=>Qd(()=>import("./Login-QALdRw6G.js"),__vite__mapDeps([4,1,2,5]))),yD=Ut.lazy(()=>Qd(()=>import("./Player-CYsV5t23.js"),__vite__mapDeps([6,1,7]))),_D=()=>{const r=yb();return Ut.useEffect(()=>{f1(sf,async t=>{t?(console.log("Logged In"),r("/")):(console.log("Logged Out"),r("/login"))})},[]),We.jsxs("div",{children:[We.jsx(hD,{theme:"dark"}),We.jsx(Ut.Suspense,{fallback:We.jsx("div",{children:"Loading..."}),children:We.jsxs(_b,{children:[We.jsx(rd,{path:"/",element:We.jsx(pD,{})}),We.jsx(rd,{path:"/login",element:We.jsx(gD,{})}),We.jsx(rd,{path:"/player/:id",element:We.jsx(yD,{})})]})})]})};Rb.createRoot(document.getElementById("root")).render(We.jsx(Ut.StrictMode,{children:We.jsx(vb,{children:We.jsx(_D,{})})}));export{bD as a,We as j,AD as l,ED as s};
