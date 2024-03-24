function cf(e,t){for(var n=0;n<t.length;n++){const r=t[n];if(typeof r!="string"&&!Array.isArray(r)){for(const o in r)if(o!=="default"&&!(o in e)){const l=Object.getOwnPropertyDescriptor(r,o);l&&Object.defineProperty(e,o,l.get?l:{enumerable:!0,get:()=>r[o]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))r(o);new MutationObserver(o=>{for(const l of o)if(l.type==="childList")for(const i of l.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&r(i)}).observe(document,{childList:!0,subtree:!0});function n(o){const l={};return o.integrity&&(l.integrity=o.integrity),o.referrerPolicy&&(l.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?l.credentials="include":o.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function r(o){if(o.ep)return;o.ep=!0;const l=n(o);fetch(o.href,l)}})();function ff(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var sc={exports:{}},Jo={},uc={exports:{}},T={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Mr=Symbol.for("react.element"),df=Symbol.for("react.portal"),pf=Symbol.for("react.fragment"),mf=Symbol.for("react.strict_mode"),hf=Symbol.for("react.profiler"),gf=Symbol.for("react.provider"),vf=Symbol.for("react.context"),yf=Symbol.for("react.forward_ref"),xf=Symbol.for("react.suspense"),wf=Symbol.for("react.memo"),Sf=Symbol.for("react.lazy"),Rs=Symbol.iterator;function kf(e){return e===null||typeof e!="object"?null:(e=Rs&&e[Rs]||e["@@iterator"],typeof e=="function"?e:null)}var cc={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},fc=Object.assign,dc={};function On(e,t,n){this.props=e,this.context=t,this.refs=dc,this.updater=n||cc}On.prototype.isReactComponent={};On.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};On.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function pc(){}pc.prototype=On.prototype;function Sa(e,t,n){this.props=e,this.context=t,this.refs=dc,this.updater=n||cc}var ka=Sa.prototype=new pc;ka.constructor=Sa;fc(ka,On.prototype);ka.isPureReactComponent=!0;var Ms=Array.isArray,mc=Object.prototype.hasOwnProperty,Ca={current:null},hc={key:!0,ref:!0,__self:!0,__source:!0};function gc(e,t,n){var r,o={},l=null,i=null;if(t!=null)for(r in t.ref!==void 0&&(i=t.ref),t.key!==void 0&&(l=""+t.key),t)mc.call(t,r)&&!hc.hasOwnProperty(r)&&(o[r]=t[r]);var a=arguments.length-2;if(a===1)o.children=n;else if(1<a){for(var s=Array(a),u=0;u<a;u++)s[u]=arguments[u+2];o.children=s}if(e&&e.defaultProps)for(r in a=e.defaultProps,a)o[r]===void 0&&(o[r]=a[r]);return{$$typeof:Mr,type:e,key:l,ref:i,props:o,_owner:Ca.current}}function Cf(e,t){return{$$typeof:Mr,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function Ea(e){return typeof e=="object"&&e!==null&&e.$$typeof===Mr}function Ef(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var Ts=/\/+/g;function Bl(e,t){return typeof e=="object"&&e!==null&&e.key!=null?Ef(""+e.key):t.toString(36)}function ao(e,t,n,r,o){var l=typeof e;(l==="undefined"||l==="boolean")&&(e=null);var i=!1;if(e===null)i=!0;else switch(l){case"string":case"number":i=!0;break;case"object":switch(e.$$typeof){case Mr:case df:i=!0}}if(i)return i=e,o=o(i),e=r===""?"."+Bl(i,0):r,Ms(o)?(n="",e!=null&&(n=e.replace(Ts,"$&/")+"/"),ao(o,t,n,"",function(u){return u})):o!=null&&(Ea(o)&&(o=Cf(o,n+(!o.key||i&&i.key===o.key?"":(""+o.key).replace(Ts,"$&/")+"/")+e)),t.push(o)),1;if(i=0,r=r===""?".":r+":",Ms(e))for(var a=0;a<e.length;a++){l=e[a];var s=r+Bl(l,a);i+=ao(l,t,n,s,o)}else if(s=kf(e),typeof s=="function")for(e=s.call(e),a=0;!(l=e.next()).done;)l=l.value,s=r+Bl(l,a++),i+=ao(l,t,n,s,o);else if(l==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return i}function Br(e,t,n){if(e==null)return e;var r=[],o=0;return ao(e,r,"","",function(l){return t.call(n,l,o++)}),r}function zf(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var we={current:null},so={transition:null},Nf={ReactCurrentDispatcher:we,ReactCurrentBatchConfig:so,ReactCurrentOwner:Ca};T.Children={map:Br,forEach:function(e,t,n){Br(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return Br(e,function(){t++}),t},toArray:function(e){return Br(e,function(t){return t})||[]},only:function(e){if(!Ea(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};T.Component=On;T.Fragment=pf;T.Profiler=hf;T.PureComponent=Sa;T.StrictMode=mf;T.Suspense=xf;T.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Nf;T.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=fc({},e.props),o=e.key,l=e.ref,i=e._owner;if(t!=null){if(t.ref!==void 0&&(l=t.ref,i=Ca.current),t.key!==void 0&&(o=""+t.key),e.type&&e.type.defaultProps)var a=e.type.defaultProps;for(s in t)mc.call(t,s)&&!hc.hasOwnProperty(s)&&(r[s]=t[s]===void 0&&a!==void 0?a[s]:t[s])}var s=arguments.length-2;if(s===1)r.children=n;else if(1<s){a=Array(s);for(var u=0;u<s;u++)a[u]=arguments[u+2];r.children=a}return{$$typeof:Mr,type:e.type,key:o,ref:l,props:r,_owner:i}};T.createContext=function(e){return e={$$typeof:vf,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:gf,_context:e},e.Consumer=e};T.createElement=gc;T.createFactory=function(e){var t=gc.bind(null,e);return t.type=e,t};T.createRef=function(){return{current:null}};T.forwardRef=function(e){return{$$typeof:yf,render:e}};T.isValidElement=Ea;T.lazy=function(e){return{$$typeof:Sf,_payload:{_status:-1,_result:e},_init:zf}};T.memo=function(e,t){return{$$typeof:wf,type:e,compare:t===void 0?null:t}};T.startTransition=function(e){var t=so.transition;so.transition={};try{e()}finally{so.transition=t}};T.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")};T.useCallback=function(e,t){return we.current.useCallback(e,t)};T.useContext=function(e){return we.current.useContext(e)};T.useDebugValue=function(){};T.useDeferredValue=function(e){return we.current.useDeferredValue(e)};T.useEffect=function(e,t){return we.current.useEffect(e,t)};T.useId=function(){return we.current.useId()};T.useImperativeHandle=function(e,t,n){return we.current.useImperativeHandle(e,t,n)};T.useInsertionEffect=function(e,t){return we.current.useInsertionEffect(e,t)};T.useLayoutEffect=function(e,t){return we.current.useLayoutEffect(e,t)};T.useMemo=function(e,t){return we.current.useMemo(e,t)};T.useReducer=function(e,t,n){return we.current.useReducer(e,t,n)};T.useRef=function(e){return we.current.useRef(e)};T.useState=function(e){return we.current.useState(e)};T.useSyncExternalStore=function(e,t,n){return we.current.useSyncExternalStore(e,t,n)};T.useTransition=function(){return we.current.useTransition()};T.version="18.2.0";uc.exports=T;var k=uc.exports;const ct=ff(k),xi=cf({__proto__:null,default:ct},[k]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Pf=k,_f=Symbol.for("react.element"),jf=Symbol.for("react.fragment"),Lf=Object.prototype.hasOwnProperty,Rf=Pf.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,Mf={key:!0,ref:!0,__self:!0,__source:!0};function vc(e,t,n){var r,o={},l=null,i=null;n!==void 0&&(l=""+n),t.key!==void 0&&(l=""+t.key),t.ref!==void 0&&(i=t.ref);for(r in t)Lf.call(t,r)&&!Mf.hasOwnProperty(r)&&(o[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)o[r]===void 0&&(o[r]=t[r]);return{$$typeof:_f,type:e,key:l,ref:i,props:o,_owner:Rf.current}}Jo.Fragment=jf;Jo.jsx=vc;Jo.jsxs=vc;sc.exports=Jo;var g=sc.exports,wi={},yc={exports:{}},Te={},xc={exports:{}},wc={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(j,R){var M=j.length;j.push(R);e:for(;0<M;){var J=M-1>>>1,oe=j[J];if(0<o(oe,R))j[J]=R,j[M]=oe,M=J;else break e}}function n(j){return j.length===0?null:j[0]}function r(j){if(j.length===0)return null;var R=j[0],M=j.pop();if(M!==R){j[0]=M;e:for(var J=0,oe=j.length,Ur=oe>>>1;J<Ur;){var At=2*(J+1)-1,Al=j[At],Bt=At+1,Ar=j[Bt];if(0>o(Al,M))Bt<oe&&0>o(Ar,Al)?(j[J]=Ar,j[Bt]=M,J=Bt):(j[J]=Al,j[At]=M,J=At);else if(Bt<oe&&0>o(Ar,M))j[J]=Ar,j[Bt]=M,J=Bt;else break e}}return R}function o(j,R){var M=j.sortIndex-R.sortIndex;return M!==0?M:j.id-R.id}if(typeof performance=="object"&&typeof performance.now=="function"){var l=performance;e.unstable_now=function(){return l.now()}}else{var i=Date,a=i.now();e.unstable_now=function(){return i.now()-a}}var s=[],u=[],m=1,d=null,h=3,w=!1,y=!1,v=!1,C=typeof setTimeout=="function"?setTimeout:null,f=typeof clearTimeout=="function"?clearTimeout:null,c=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function p(j){for(var R=n(u);R!==null;){if(R.callback===null)r(u);else if(R.startTime<=j)r(u),R.sortIndex=R.expirationTime,t(s,R);else break;R=n(u)}}function x(j){if(v=!1,p(j),!y)if(n(s)!==null)y=!0,Dl(z);else{var R=n(u);R!==null&&Ul(x,R.startTime-j)}}function z(j,R){y=!1,v&&(v=!1,f(L),L=-1),w=!0;var M=h;try{for(p(R),d=n(s);d!==null&&(!(d.expirationTime>R)||j&&!We());){var J=d.callback;if(typeof J=="function"){d.callback=null,h=d.priorityLevel;var oe=J(d.expirationTime<=R);R=e.unstable_now(),typeof oe=="function"?d.callback=oe:d===n(s)&&r(s),p(R)}else r(s);d=n(s)}if(d!==null)var Ur=!0;else{var At=n(u);At!==null&&Ul(x,At.startTime-R),Ur=!1}return Ur}finally{d=null,h=M,w=!1}}var P=!1,N=null,L=-1,Z=5,O=-1;function We(){return!(e.unstable_now()-O<Z)}function Un(){if(N!==null){var j=e.unstable_now();O=j;var R=!0;try{R=N(!0,j)}finally{R?An():(P=!1,N=null)}}else P=!1}var An;if(typeof c=="function")An=function(){c(Un)};else if(typeof MessageChannel<"u"){var Ls=new MessageChannel,uf=Ls.port2;Ls.port1.onmessage=Un,An=function(){uf.postMessage(null)}}else An=function(){C(Un,0)};function Dl(j){N=j,P||(P=!0,An())}function Ul(j,R){L=C(function(){j(e.unstable_now())},R)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(j){j.callback=null},e.unstable_continueExecution=function(){y||w||(y=!0,Dl(z))},e.unstable_forceFrameRate=function(j){0>j||125<j?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):Z=0<j?Math.floor(1e3/j):5},e.unstable_getCurrentPriorityLevel=function(){return h},e.unstable_getFirstCallbackNode=function(){return n(s)},e.unstable_next=function(j){switch(h){case 1:case 2:case 3:var R=3;break;default:R=h}var M=h;h=R;try{return j()}finally{h=M}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(j,R){switch(j){case 1:case 2:case 3:case 4:case 5:break;default:j=3}var M=h;h=j;try{return R()}finally{h=M}},e.unstable_scheduleCallback=function(j,R,M){var J=e.unstable_now();switch(typeof M=="object"&&M!==null?(M=M.delay,M=typeof M=="number"&&0<M?J+M:J):M=J,j){case 1:var oe=-1;break;case 2:oe=250;break;case 5:oe=1073741823;break;case 4:oe=1e4;break;default:oe=5e3}return oe=M+oe,j={id:m++,callback:R,priorityLevel:j,startTime:M,expirationTime:oe,sortIndex:-1},M>J?(j.sortIndex=M,t(u,j),n(s)===null&&j===n(u)&&(v?(f(L),L=-1):v=!0,Ul(x,M-J))):(j.sortIndex=oe,t(s,j),y||w||(y=!0,Dl(z))),j},e.unstable_shouldYield=We,e.unstable_wrapCallback=function(j){var R=h;return function(){var M=h;h=R;try{return j.apply(this,arguments)}finally{h=M}}}})(wc);xc.exports=wc;var Tf=xc.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Sc=k,Me=Tf;function S(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var kc=new Set,ur={};function tn(e,t){Nn(e,t),Nn(e+"Capture",t)}function Nn(e,t){for(ur[e]=t,e=0;e<t.length;e++)kc.add(t[e])}var dt=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Si=Object.prototype.hasOwnProperty,Of=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Os={},Is={};function If(e){return Si.call(Is,e)?!0:Si.call(Os,e)?!1:Of.test(e)?Is[e]=!0:(Os[e]=!0,!1)}function $f(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function Ff(e,t,n,r){if(t===null||typeof t>"u"||$f(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function Se(e,t,n,r,o,l,i){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=o,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=l,this.removeEmptyString=i}var de={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){de[e]=new Se(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];de[t]=new Se(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){de[e]=new Se(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){de[e]=new Se(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){de[e]=new Se(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){de[e]=new Se(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){de[e]=new Se(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){de[e]=new Se(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){de[e]=new Se(e,5,!1,e.toLowerCase(),null,!1,!1)});var za=/[\-:]([a-z])/g;function Na(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(za,Na);de[t]=new Se(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(za,Na);de[t]=new Se(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(za,Na);de[t]=new Se(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){de[e]=new Se(e,1,!1,e.toLowerCase(),null,!1,!1)});de.xlinkHref=new Se("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){de[e]=new Se(e,1,!1,e.toLowerCase(),null,!0,!0)});function Pa(e,t,n,r){var o=de.hasOwnProperty(t)?de[t]:null;(o!==null?o.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(Ff(t,n,o,r)&&(n=null),r||o===null?If(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):o.mustUseProperty?e[o.propertyName]=n===null?o.type===3?!1:"":n:(t=o.attributeName,r=o.attributeNamespace,n===null?e.removeAttribute(t):(o=o.type,n=o===3||o===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var gt=Sc.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Vr=Symbol.for("react.element"),an=Symbol.for("react.portal"),sn=Symbol.for("react.fragment"),_a=Symbol.for("react.strict_mode"),ki=Symbol.for("react.profiler"),Cc=Symbol.for("react.provider"),Ec=Symbol.for("react.context"),ja=Symbol.for("react.forward_ref"),Ci=Symbol.for("react.suspense"),Ei=Symbol.for("react.suspense_list"),La=Symbol.for("react.memo"),yt=Symbol.for("react.lazy"),zc=Symbol.for("react.offscreen"),$s=Symbol.iterator;function Bn(e){return e===null||typeof e!="object"?null:(e=$s&&e[$s]||e["@@iterator"],typeof e=="function"?e:null)}var X=Object.assign,Vl;function Zn(e){if(Vl===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);Vl=t&&t[1]||""}return`
`+Vl+e}var Wl=!1;function Hl(e,t){if(!e||Wl)return"";Wl=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(u){var r=u}Reflect.construct(e,[],t)}else{try{t.call()}catch(u){r=u}e.call(t.prototype)}else{try{throw Error()}catch(u){r=u}e()}}catch(u){if(u&&r&&typeof u.stack=="string"){for(var o=u.stack.split(`
`),l=r.stack.split(`
`),i=o.length-1,a=l.length-1;1<=i&&0<=a&&o[i]!==l[a];)a--;for(;1<=i&&0<=a;i--,a--)if(o[i]!==l[a]){if(i!==1||a!==1)do if(i--,a--,0>a||o[i]!==l[a]){var s=`
`+o[i].replace(" at new "," at ");return e.displayName&&s.includes("<anonymous>")&&(s=s.replace("<anonymous>",e.displayName)),s}while(1<=i&&0<=a);break}}}finally{Wl=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?Zn(e):""}function Df(e){switch(e.tag){case 5:return Zn(e.type);case 16:return Zn("Lazy");case 13:return Zn("Suspense");case 19:return Zn("SuspenseList");case 0:case 2:case 15:return e=Hl(e.type,!1),e;case 11:return e=Hl(e.type.render,!1),e;case 1:return e=Hl(e.type,!0),e;default:return""}}function zi(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case sn:return"Fragment";case an:return"Portal";case ki:return"Profiler";case _a:return"StrictMode";case Ci:return"Suspense";case Ei:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case Ec:return(e.displayName||"Context")+".Consumer";case Cc:return(e._context.displayName||"Context")+".Provider";case ja:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case La:return t=e.displayName||null,t!==null?t:zi(e.type)||"Memo";case yt:t=e._payload,e=e._init;try{return zi(e(t))}catch{}}return null}function Uf(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return zi(t);case 8:return t===_a?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function It(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Nc(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function Af(e){var t=Nc(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var o=n.get,l=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return o.call(this)},set:function(i){r=""+i,l.call(this,i)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(i){r=""+i},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Wr(e){e._valueTracker||(e._valueTracker=Af(e))}function Pc(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=Nc(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function Eo(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function Ni(e,t){var n=t.checked;return X({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function Fs(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=It(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function _c(e,t){t=t.checked,t!=null&&Pa(e,"checked",t,!1)}function Pi(e,t){_c(e,t);var n=It(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?_i(e,t.type,n):t.hasOwnProperty("defaultValue")&&_i(e,t.type,It(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function Ds(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function _i(e,t,n){(t!=="number"||Eo(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var Jn=Array.isArray;function xn(e,t,n,r){if(e=e.options,t){t={};for(var o=0;o<n.length;o++)t["$"+n[o]]=!0;for(n=0;n<e.length;n++)o=t.hasOwnProperty("$"+e[n].value),e[n].selected!==o&&(e[n].selected=o),o&&r&&(e[n].defaultSelected=!0)}else{for(n=""+It(n),t=null,o=0;o<e.length;o++){if(e[o].value===n){e[o].selected=!0,r&&(e[o].defaultSelected=!0);return}t!==null||e[o].disabled||(t=e[o])}t!==null&&(t.selected=!0)}}function ji(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(S(91));return X({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function Us(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(S(92));if(Jn(n)){if(1<n.length)throw Error(S(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:It(n)}}function jc(e,t){var n=It(t.value),r=It(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function As(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function Lc(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Li(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?Lc(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var Hr,Rc=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,o){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,o)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(Hr=Hr||document.createElement("div"),Hr.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=Hr.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function cr(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var er={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Bf=["Webkit","ms","Moz","O"];Object.keys(er).forEach(function(e){Bf.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),er[t]=er[e]})});function Mc(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||er.hasOwnProperty(e)&&er[e]?(""+t).trim():t+"px"}function Tc(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,o=Mc(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,o):e[n]=o}}var Vf=X({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Ri(e,t){if(t){if(Vf[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(S(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(S(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(S(61))}if(t.style!=null&&typeof t.style!="object")throw Error(S(62))}}function Mi(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Ti=null;function Ra(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Oi=null,wn=null,Sn=null;function Bs(e){if(e=Ir(e)){if(typeof Oi!="function")throw Error(S(280));var t=e.stateNode;t&&(t=nl(t),Oi(e.stateNode,e.type,t))}}function Oc(e){wn?Sn?Sn.push(e):Sn=[e]:wn=e}function Ic(){if(wn){var e=wn,t=Sn;if(Sn=wn=null,Bs(e),t)for(e=0;e<t.length;e++)Bs(t[e])}}function $c(e,t){return e(t)}function Fc(){}var Ql=!1;function Dc(e,t,n){if(Ql)return e(t,n);Ql=!0;try{return $c(e,t,n)}finally{Ql=!1,(wn!==null||Sn!==null)&&(Fc(),Ic())}}function fr(e,t){var n=e.stateNode;if(n===null)return null;var r=nl(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(S(231,t,typeof n));return n}var Ii=!1;if(dt)try{var Vn={};Object.defineProperty(Vn,"passive",{get:function(){Ii=!0}}),window.addEventListener("test",Vn,Vn),window.removeEventListener("test",Vn,Vn)}catch{Ii=!1}function Wf(e,t,n,r,o,l,i,a,s){var u=Array.prototype.slice.call(arguments,3);try{t.apply(n,u)}catch(m){this.onError(m)}}var tr=!1,zo=null,No=!1,$i=null,Hf={onError:function(e){tr=!0,zo=e}};function Qf(e,t,n,r,o,l,i,a,s){tr=!1,zo=null,Wf.apply(Hf,arguments)}function Yf(e,t,n,r,o,l,i,a,s){if(Qf.apply(this,arguments),tr){if(tr){var u=zo;tr=!1,zo=null}else throw Error(S(198));No||(No=!0,$i=u)}}function nn(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function Uc(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function Vs(e){if(nn(e)!==e)throw Error(S(188))}function Kf(e){var t=e.alternate;if(!t){if(t=nn(e),t===null)throw Error(S(188));return t!==e?null:e}for(var n=e,r=t;;){var o=n.return;if(o===null)break;var l=o.alternate;if(l===null){if(r=o.return,r!==null){n=r;continue}break}if(o.child===l.child){for(l=o.child;l;){if(l===n)return Vs(o),e;if(l===r)return Vs(o),t;l=l.sibling}throw Error(S(188))}if(n.return!==r.return)n=o,r=l;else{for(var i=!1,a=o.child;a;){if(a===n){i=!0,n=o,r=l;break}if(a===r){i=!0,r=o,n=l;break}a=a.sibling}if(!i){for(a=l.child;a;){if(a===n){i=!0,n=l,r=o;break}if(a===r){i=!0,r=l,n=o;break}a=a.sibling}if(!i)throw Error(S(189))}}if(n.alternate!==r)throw Error(S(190))}if(n.tag!==3)throw Error(S(188));return n.stateNode.current===n?e:t}function Ac(e){return e=Kf(e),e!==null?Bc(e):null}function Bc(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=Bc(e);if(t!==null)return t;e=e.sibling}return null}var Vc=Me.unstable_scheduleCallback,Ws=Me.unstable_cancelCallback,Xf=Me.unstable_shouldYield,Gf=Me.unstable_requestPaint,q=Me.unstable_now,Zf=Me.unstable_getCurrentPriorityLevel,Ma=Me.unstable_ImmediatePriority,Wc=Me.unstable_UserBlockingPriority,Po=Me.unstable_NormalPriority,Jf=Me.unstable_LowPriority,Hc=Me.unstable_IdlePriority,qo=null,rt=null;function qf(e){if(rt&&typeof rt.onCommitFiberRoot=="function")try{rt.onCommitFiberRoot(qo,e,void 0,(e.current.flags&128)===128)}catch{}}var Xe=Math.clz32?Math.clz32:td,bf=Math.log,ed=Math.LN2;function td(e){return e>>>=0,e===0?32:31-(bf(e)/ed|0)|0}var Qr=64,Yr=4194304;function qn(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function _o(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,o=e.suspendedLanes,l=e.pingedLanes,i=n&268435455;if(i!==0){var a=i&~o;a!==0?r=qn(a):(l&=i,l!==0&&(r=qn(l)))}else i=n&~o,i!==0?r=qn(i):l!==0&&(r=qn(l));if(r===0)return 0;if(t!==0&&t!==r&&!(t&o)&&(o=r&-r,l=t&-t,o>=l||o===16&&(l&4194240)!==0))return t;if(r&4&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-Xe(t),o=1<<n,r|=e[n],t&=~o;return r}function nd(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function rd(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,o=e.expirationTimes,l=e.pendingLanes;0<l;){var i=31-Xe(l),a=1<<i,s=o[i];s===-1?(!(a&n)||a&r)&&(o[i]=nd(a,t)):s<=t&&(e.expiredLanes|=a),l&=~a}}function Fi(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function Qc(){var e=Qr;return Qr<<=1,!(Qr&4194240)&&(Qr=64),e}function Yl(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function Tr(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-Xe(t),e[t]=n}function od(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var o=31-Xe(n),l=1<<o;t[o]=0,r[o]=-1,e[o]=-1,n&=~l}}function Ta(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-Xe(n),o=1<<r;o&t|e[r]&t&&(e[r]|=t),n&=~o}}var D=0;function Yc(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var Kc,Oa,Xc,Gc,Zc,Di=!1,Kr=[],zt=null,Nt=null,Pt=null,dr=new Map,pr=new Map,wt=[],ld="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Hs(e,t){switch(e){case"focusin":case"focusout":zt=null;break;case"dragenter":case"dragleave":Nt=null;break;case"mouseover":case"mouseout":Pt=null;break;case"pointerover":case"pointerout":dr.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":pr.delete(t.pointerId)}}function Wn(e,t,n,r,o,l){return e===null||e.nativeEvent!==l?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:l,targetContainers:[o]},t!==null&&(t=Ir(t),t!==null&&Oa(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,o!==null&&t.indexOf(o)===-1&&t.push(o),e)}function id(e,t,n,r,o){switch(t){case"focusin":return zt=Wn(zt,e,t,n,r,o),!0;case"dragenter":return Nt=Wn(Nt,e,t,n,r,o),!0;case"mouseover":return Pt=Wn(Pt,e,t,n,r,o),!0;case"pointerover":var l=o.pointerId;return dr.set(l,Wn(dr.get(l)||null,e,t,n,r,o)),!0;case"gotpointercapture":return l=o.pointerId,pr.set(l,Wn(pr.get(l)||null,e,t,n,r,o)),!0}return!1}function Jc(e){var t=Qt(e.target);if(t!==null){var n=nn(t);if(n!==null){if(t=n.tag,t===13){if(t=Uc(n),t!==null){e.blockedOn=t,Zc(e.priority,function(){Xc(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function uo(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=Ui(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);Ti=r,n.target.dispatchEvent(r),Ti=null}else return t=Ir(n),t!==null&&Oa(t),e.blockedOn=n,!1;t.shift()}return!0}function Qs(e,t,n){uo(e)&&n.delete(t)}function ad(){Di=!1,zt!==null&&uo(zt)&&(zt=null),Nt!==null&&uo(Nt)&&(Nt=null),Pt!==null&&uo(Pt)&&(Pt=null),dr.forEach(Qs),pr.forEach(Qs)}function Hn(e,t){e.blockedOn===t&&(e.blockedOn=null,Di||(Di=!0,Me.unstable_scheduleCallback(Me.unstable_NormalPriority,ad)))}function mr(e){function t(o){return Hn(o,e)}if(0<Kr.length){Hn(Kr[0],e);for(var n=1;n<Kr.length;n++){var r=Kr[n];r.blockedOn===e&&(r.blockedOn=null)}}for(zt!==null&&Hn(zt,e),Nt!==null&&Hn(Nt,e),Pt!==null&&Hn(Pt,e),dr.forEach(t),pr.forEach(t),n=0;n<wt.length;n++)r=wt[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<wt.length&&(n=wt[0],n.blockedOn===null);)Jc(n),n.blockedOn===null&&wt.shift()}var kn=gt.ReactCurrentBatchConfig,jo=!0;function sd(e,t,n,r){var o=D,l=kn.transition;kn.transition=null;try{D=1,Ia(e,t,n,r)}finally{D=o,kn.transition=l}}function ud(e,t,n,r){var o=D,l=kn.transition;kn.transition=null;try{D=4,Ia(e,t,n,r)}finally{D=o,kn.transition=l}}function Ia(e,t,n,r){if(jo){var o=Ui(e,t,n,r);if(o===null)ni(e,t,r,Lo,n),Hs(e,r);else if(id(o,e,t,n,r))r.stopPropagation();else if(Hs(e,r),t&4&&-1<ld.indexOf(e)){for(;o!==null;){var l=Ir(o);if(l!==null&&Kc(l),l=Ui(e,t,n,r),l===null&&ni(e,t,r,Lo,n),l===o)break;o=l}o!==null&&r.stopPropagation()}else ni(e,t,r,null,n)}}var Lo=null;function Ui(e,t,n,r){if(Lo=null,e=Ra(r),e=Qt(e),e!==null)if(t=nn(e),t===null)e=null;else if(n=t.tag,n===13){if(e=Uc(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return Lo=e,null}function qc(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Zf()){case Ma:return 1;case Wc:return 4;case Po:case Jf:return 16;case Hc:return 536870912;default:return 16}default:return 16}}var kt=null,$a=null,co=null;function bc(){if(co)return co;var e,t=$a,n=t.length,r,o="value"in kt?kt.value:kt.textContent,l=o.length;for(e=0;e<n&&t[e]===o[e];e++);var i=n-e;for(r=1;r<=i&&t[n-r]===o[l-r];r++);return co=o.slice(e,1<r?1-r:void 0)}function fo(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function Xr(){return!0}function Ys(){return!1}function Oe(e){function t(n,r,o,l,i){this._reactName=n,this._targetInst=o,this.type=r,this.nativeEvent=l,this.target=i,this.currentTarget=null;for(var a in e)e.hasOwnProperty(a)&&(n=e[a],this[a]=n?n(l):l[a]);return this.isDefaultPrevented=(l.defaultPrevented!=null?l.defaultPrevented:l.returnValue===!1)?Xr:Ys,this.isPropagationStopped=Ys,this}return X(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Xr)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Xr)},persist:function(){},isPersistent:Xr}),t}var In={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Fa=Oe(In),Or=X({},In,{view:0,detail:0}),cd=Oe(Or),Kl,Xl,Qn,bo=X({},Or,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Da,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Qn&&(Qn&&e.type==="mousemove"?(Kl=e.screenX-Qn.screenX,Xl=e.screenY-Qn.screenY):Xl=Kl=0,Qn=e),Kl)},movementY:function(e){return"movementY"in e?e.movementY:Xl}}),Ks=Oe(bo),fd=X({},bo,{dataTransfer:0}),dd=Oe(fd),pd=X({},Or,{relatedTarget:0}),Gl=Oe(pd),md=X({},In,{animationName:0,elapsedTime:0,pseudoElement:0}),hd=Oe(md),gd=X({},In,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),vd=Oe(gd),yd=X({},In,{data:0}),Xs=Oe(yd),xd={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},wd={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Sd={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function kd(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=Sd[e])?!!t[e]:!1}function Da(){return kd}var Cd=X({},Or,{key:function(e){if(e.key){var t=xd[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=fo(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?wd[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Da,charCode:function(e){return e.type==="keypress"?fo(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?fo(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Ed=Oe(Cd),zd=X({},bo,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Gs=Oe(zd),Nd=X({},Or,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Da}),Pd=Oe(Nd),_d=X({},In,{propertyName:0,elapsedTime:0,pseudoElement:0}),jd=Oe(_d),Ld=X({},bo,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Rd=Oe(Ld),Md=[9,13,27,32],Ua=dt&&"CompositionEvent"in window,nr=null;dt&&"documentMode"in document&&(nr=document.documentMode);var Td=dt&&"TextEvent"in window&&!nr,e0=dt&&(!Ua||nr&&8<nr&&11>=nr),Zs=" ",Js=!1;function t0(e,t){switch(e){case"keyup":return Md.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function n0(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var un=!1;function Od(e,t){switch(e){case"compositionend":return n0(t);case"keypress":return t.which!==32?null:(Js=!0,Zs);case"textInput":return e=t.data,e===Zs&&Js?null:e;default:return null}}function Id(e,t){if(un)return e==="compositionend"||!Ua&&t0(e,t)?(e=bc(),co=$a=kt=null,un=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return e0&&t.locale!=="ko"?null:t.data;default:return null}}var $d={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function qs(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!$d[e.type]:t==="textarea"}function r0(e,t,n,r){Oc(r),t=Ro(t,"onChange"),0<t.length&&(n=new Fa("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var rr=null,hr=null;function Fd(e){m0(e,0)}function el(e){var t=dn(e);if(Pc(t))return e}function Dd(e,t){if(e==="change")return t}var o0=!1;if(dt){var Zl;if(dt){var Jl="oninput"in document;if(!Jl){var bs=document.createElement("div");bs.setAttribute("oninput","return;"),Jl=typeof bs.oninput=="function"}Zl=Jl}else Zl=!1;o0=Zl&&(!document.documentMode||9<document.documentMode)}function eu(){rr&&(rr.detachEvent("onpropertychange",l0),hr=rr=null)}function l0(e){if(e.propertyName==="value"&&el(hr)){var t=[];r0(t,hr,e,Ra(e)),Dc(Fd,t)}}function Ud(e,t,n){e==="focusin"?(eu(),rr=t,hr=n,rr.attachEvent("onpropertychange",l0)):e==="focusout"&&eu()}function Ad(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return el(hr)}function Bd(e,t){if(e==="click")return el(t)}function Vd(e,t){if(e==="input"||e==="change")return el(t)}function Wd(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var Ze=typeof Object.is=="function"?Object.is:Wd;function gr(e,t){if(Ze(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var o=n[r];if(!Si.call(t,o)||!Ze(e[o],t[o]))return!1}return!0}function tu(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function nu(e,t){var n=tu(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=tu(n)}}function i0(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?i0(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function a0(){for(var e=window,t=Eo();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=Eo(e.document)}return t}function Aa(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function Hd(e){var t=a0(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&i0(n.ownerDocument.documentElement,n)){if(r!==null&&Aa(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var o=n.textContent.length,l=Math.min(r.start,o);r=r.end===void 0?l:Math.min(r.end,o),!e.extend&&l>r&&(o=r,r=l,l=o),o=nu(n,l);var i=nu(n,r);o&&i&&(e.rangeCount!==1||e.anchorNode!==o.node||e.anchorOffset!==o.offset||e.focusNode!==i.node||e.focusOffset!==i.offset)&&(t=t.createRange(),t.setStart(o.node,o.offset),e.removeAllRanges(),l>r?(e.addRange(t),e.extend(i.node,i.offset)):(t.setEnd(i.node,i.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var Qd=dt&&"documentMode"in document&&11>=document.documentMode,cn=null,Ai=null,or=null,Bi=!1;function ru(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Bi||cn==null||cn!==Eo(r)||(r=cn,"selectionStart"in r&&Aa(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),or&&gr(or,r)||(or=r,r=Ro(Ai,"onSelect"),0<r.length&&(t=new Fa("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=cn)))}function Gr(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var fn={animationend:Gr("Animation","AnimationEnd"),animationiteration:Gr("Animation","AnimationIteration"),animationstart:Gr("Animation","AnimationStart"),transitionend:Gr("Transition","TransitionEnd")},ql={},s0={};dt&&(s0=document.createElement("div").style,"AnimationEvent"in window||(delete fn.animationend.animation,delete fn.animationiteration.animation,delete fn.animationstart.animation),"TransitionEvent"in window||delete fn.transitionend.transition);function tl(e){if(ql[e])return ql[e];if(!fn[e])return e;var t=fn[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in s0)return ql[e]=t[n];return e}var u0=tl("animationend"),c0=tl("animationiteration"),f0=tl("animationstart"),d0=tl("transitionend"),p0=new Map,ou="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Ft(e,t){p0.set(e,t),tn(t,[e])}for(var bl=0;bl<ou.length;bl++){var ei=ou[bl],Yd=ei.toLowerCase(),Kd=ei[0].toUpperCase()+ei.slice(1);Ft(Yd,"on"+Kd)}Ft(u0,"onAnimationEnd");Ft(c0,"onAnimationIteration");Ft(f0,"onAnimationStart");Ft("dblclick","onDoubleClick");Ft("focusin","onFocus");Ft("focusout","onBlur");Ft(d0,"onTransitionEnd");Nn("onMouseEnter",["mouseout","mouseover"]);Nn("onMouseLeave",["mouseout","mouseover"]);Nn("onPointerEnter",["pointerout","pointerover"]);Nn("onPointerLeave",["pointerout","pointerover"]);tn("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));tn("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));tn("onBeforeInput",["compositionend","keypress","textInput","paste"]);tn("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));tn("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));tn("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var bn="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Xd=new Set("cancel close invalid load scroll toggle".split(" ").concat(bn));function lu(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,Yf(r,t,void 0,e),e.currentTarget=null}function m0(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],o=r.event;r=r.listeners;e:{var l=void 0;if(t)for(var i=r.length-1;0<=i;i--){var a=r[i],s=a.instance,u=a.currentTarget;if(a=a.listener,s!==l&&o.isPropagationStopped())break e;lu(o,a,u),l=s}else for(i=0;i<r.length;i++){if(a=r[i],s=a.instance,u=a.currentTarget,a=a.listener,s!==l&&o.isPropagationStopped())break e;lu(o,a,u),l=s}}}if(No)throw e=$i,No=!1,$i=null,e}function V(e,t){var n=t[Yi];n===void 0&&(n=t[Yi]=new Set);var r=e+"__bubble";n.has(r)||(h0(t,e,2,!1),n.add(r))}function ti(e,t,n){var r=0;t&&(r|=4),h0(n,e,r,t)}var Zr="_reactListening"+Math.random().toString(36).slice(2);function vr(e){if(!e[Zr]){e[Zr]=!0,kc.forEach(function(n){n!=="selectionchange"&&(Xd.has(n)||ti(n,!1,e),ti(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[Zr]||(t[Zr]=!0,ti("selectionchange",!1,t))}}function h0(e,t,n,r){switch(qc(t)){case 1:var o=sd;break;case 4:o=ud;break;default:o=Ia}n=o.bind(null,t,n,e),o=void 0,!Ii||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(o=!0),r?o!==void 0?e.addEventListener(t,n,{capture:!0,passive:o}):e.addEventListener(t,n,!0):o!==void 0?e.addEventListener(t,n,{passive:o}):e.addEventListener(t,n,!1)}function ni(e,t,n,r,o){var l=r;if(!(t&1)&&!(t&2)&&r!==null)e:for(;;){if(r===null)return;var i=r.tag;if(i===3||i===4){var a=r.stateNode.containerInfo;if(a===o||a.nodeType===8&&a.parentNode===o)break;if(i===4)for(i=r.return;i!==null;){var s=i.tag;if((s===3||s===4)&&(s=i.stateNode.containerInfo,s===o||s.nodeType===8&&s.parentNode===o))return;i=i.return}for(;a!==null;){if(i=Qt(a),i===null)return;if(s=i.tag,s===5||s===6){r=l=i;continue e}a=a.parentNode}}r=r.return}Dc(function(){var u=l,m=Ra(n),d=[];e:{var h=p0.get(e);if(h!==void 0){var w=Fa,y=e;switch(e){case"keypress":if(fo(n)===0)break e;case"keydown":case"keyup":w=Ed;break;case"focusin":y="focus",w=Gl;break;case"focusout":y="blur",w=Gl;break;case"beforeblur":case"afterblur":w=Gl;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":w=Ks;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":w=dd;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":w=Pd;break;case u0:case c0:case f0:w=hd;break;case d0:w=jd;break;case"scroll":w=cd;break;case"wheel":w=Rd;break;case"copy":case"cut":case"paste":w=vd;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":w=Gs}var v=(t&4)!==0,C=!v&&e==="scroll",f=v?h!==null?h+"Capture":null:h;v=[];for(var c=u,p;c!==null;){p=c;var x=p.stateNode;if(p.tag===5&&x!==null&&(p=x,f!==null&&(x=fr(c,f),x!=null&&v.push(yr(c,x,p)))),C)break;c=c.return}0<v.length&&(h=new w(h,y,null,n,m),d.push({event:h,listeners:v}))}}if(!(t&7)){e:{if(h=e==="mouseover"||e==="pointerover",w=e==="mouseout"||e==="pointerout",h&&n!==Ti&&(y=n.relatedTarget||n.fromElement)&&(Qt(y)||y[pt]))break e;if((w||h)&&(h=m.window===m?m:(h=m.ownerDocument)?h.defaultView||h.parentWindow:window,w?(y=n.relatedTarget||n.toElement,w=u,y=y?Qt(y):null,y!==null&&(C=nn(y),y!==C||y.tag!==5&&y.tag!==6)&&(y=null)):(w=null,y=u),w!==y)){if(v=Ks,x="onMouseLeave",f="onMouseEnter",c="mouse",(e==="pointerout"||e==="pointerover")&&(v=Gs,x="onPointerLeave",f="onPointerEnter",c="pointer"),C=w==null?h:dn(w),p=y==null?h:dn(y),h=new v(x,c+"leave",w,n,m),h.target=C,h.relatedTarget=p,x=null,Qt(m)===u&&(v=new v(f,c+"enter",y,n,m),v.target=p,v.relatedTarget=C,x=v),C=x,w&&y)t:{for(v=w,f=y,c=0,p=v;p;p=ln(p))c++;for(p=0,x=f;x;x=ln(x))p++;for(;0<c-p;)v=ln(v),c--;for(;0<p-c;)f=ln(f),p--;for(;c--;){if(v===f||f!==null&&v===f.alternate)break t;v=ln(v),f=ln(f)}v=null}else v=null;w!==null&&iu(d,h,w,v,!1),y!==null&&C!==null&&iu(d,C,y,v,!0)}}e:{if(h=u?dn(u):window,w=h.nodeName&&h.nodeName.toLowerCase(),w==="select"||w==="input"&&h.type==="file")var z=Dd;else if(qs(h))if(o0)z=Vd;else{z=Ad;var P=Ud}else(w=h.nodeName)&&w.toLowerCase()==="input"&&(h.type==="checkbox"||h.type==="radio")&&(z=Bd);if(z&&(z=z(e,u))){r0(d,z,n,m);break e}P&&P(e,h,u),e==="focusout"&&(P=h._wrapperState)&&P.controlled&&h.type==="number"&&_i(h,"number",h.value)}switch(P=u?dn(u):window,e){case"focusin":(qs(P)||P.contentEditable==="true")&&(cn=P,Ai=u,or=null);break;case"focusout":or=Ai=cn=null;break;case"mousedown":Bi=!0;break;case"contextmenu":case"mouseup":case"dragend":Bi=!1,ru(d,n,m);break;case"selectionchange":if(Qd)break;case"keydown":case"keyup":ru(d,n,m)}var N;if(Ua)e:{switch(e){case"compositionstart":var L="onCompositionStart";break e;case"compositionend":L="onCompositionEnd";break e;case"compositionupdate":L="onCompositionUpdate";break e}L=void 0}else un?t0(e,n)&&(L="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(L="onCompositionStart");L&&(e0&&n.locale!=="ko"&&(un||L!=="onCompositionStart"?L==="onCompositionEnd"&&un&&(N=bc()):(kt=m,$a="value"in kt?kt.value:kt.textContent,un=!0)),P=Ro(u,L),0<P.length&&(L=new Xs(L,e,null,n,m),d.push({event:L,listeners:P}),N?L.data=N:(N=n0(n),N!==null&&(L.data=N)))),(N=Td?Od(e,n):Id(e,n))&&(u=Ro(u,"onBeforeInput"),0<u.length&&(m=new Xs("onBeforeInput","beforeinput",null,n,m),d.push({event:m,listeners:u}),m.data=N))}m0(d,t)})}function yr(e,t,n){return{instance:e,listener:t,currentTarget:n}}function Ro(e,t){for(var n=t+"Capture",r=[];e!==null;){var o=e,l=o.stateNode;o.tag===5&&l!==null&&(o=l,l=fr(e,n),l!=null&&r.unshift(yr(e,l,o)),l=fr(e,t),l!=null&&r.push(yr(e,l,o))),e=e.return}return r}function ln(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function iu(e,t,n,r,o){for(var l=t._reactName,i=[];n!==null&&n!==r;){var a=n,s=a.alternate,u=a.stateNode;if(s!==null&&s===r)break;a.tag===5&&u!==null&&(a=u,o?(s=fr(n,l),s!=null&&i.unshift(yr(n,s,a))):o||(s=fr(n,l),s!=null&&i.push(yr(n,s,a)))),n=n.return}i.length!==0&&e.push({event:t,listeners:i})}var Gd=/\r\n?/g,Zd=/\u0000|\uFFFD/g;function au(e){return(typeof e=="string"?e:""+e).replace(Gd,`
`).replace(Zd,"")}function Jr(e,t,n){if(t=au(t),au(e)!==t&&n)throw Error(S(425))}function Mo(){}var Vi=null,Wi=null;function Hi(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Qi=typeof setTimeout=="function"?setTimeout:void 0,Jd=typeof clearTimeout=="function"?clearTimeout:void 0,su=typeof Promise=="function"?Promise:void 0,qd=typeof queueMicrotask=="function"?queueMicrotask:typeof su<"u"?function(e){return su.resolve(null).then(e).catch(bd)}:Qi;function bd(e){setTimeout(function(){throw e})}function ri(e,t){var n=t,r=0;do{var o=n.nextSibling;if(e.removeChild(n),o&&o.nodeType===8)if(n=o.data,n==="/$"){if(r===0){e.removeChild(o),mr(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=o}while(n);mr(t)}function _t(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function uu(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var $n=Math.random().toString(36).slice(2),tt="__reactFiber$"+$n,xr="__reactProps$"+$n,pt="__reactContainer$"+$n,Yi="__reactEvents$"+$n,ep="__reactListeners$"+$n,tp="__reactHandles$"+$n;function Qt(e){var t=e[tt];if(t)return t;for(var n=e.parentNode;n;){if(t=n[pt]||n[tt]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=uu(e);e!==null;){if(n=e[tt])return n;e=uu(e)}return t}e=n,n=e.parentNode}return null}function Ir(e){return e=e[tt]||e[pt],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function dn(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(S(33))}function nl(e){return e[xr]||null}var Ki=[],pn=-1;function Dt(e){return{current:e}}function W(e){0>pn||(e.current=Ki[pn],Ki[pn]=null,pn--)}function B(e,t){pn++,Ki[pn]=e.current,e.current=t}var $t={},ve=Dt($t),Ee=Dt(!1),Zt=$t;function Pn(e,t){var n=e.type.contextTypes;if(!n)return $t;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var o={},l;for(l in n)o[l]=t[l];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=o),o}function ze(e){return e=e.childContextTypes,e!=null}function To(){W(Ee),W(ve)}function cu(e,t,n){if(ve.current!==$t)throw Error(S(168));B(ve,t),B(Ee,n)}function g0(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var o in r)if(!(o in t))throw Error(S(108,Uf(e)||"Unknown",o));return X({},n,r)}function Oo(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||$t,Zt=ve.current,B(ve,e),B(Ee,Ee.current),!0}function fu(e,t,n){var r=e.stateNode;if(!r)throw Error(S(169));n?(e=g0(e,t,Zt),r.__reactInternalMemoizedMergedChildContext=e,W(Ee),W(ve),B(ve,e)):W(Ee),B(Ee,n)}var at=null,rl=!1,oi=!1;function v0(e){at===null?at=[e]:at.push(e)}function np(e){rl=!0,v0(e)}function Ut(){if(!oi&&at!==null){oi=!0;var e=0,t=D;try{var n=at;for(D=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}at=null,rl=!1}catch(o){throw at!==null&&(at=at.slice(e+1)),Vc(Ma,Ut),o}finally{D=t,oi=!1}}return null}var mn=[],hn=0,Io=null,$o=0,$e=[],Fe=0,Jt=null,st=1,ut="";function Wt(e,t){mn[hn++]=$o,mn[hn++]=Io,Io=e,$o=t}function y0(e,t,n){$e[Fe++]=st,$e[Fe++]=ut,$e[Fe++]=Jt,Jt=e;var r=st;e=ut;var o=32-Xe(r)-1;r&=~(1<<o),n+=1;var l=32-Xe(t)+o;if(30<l){var i=o-o%5;l=(r&(1<<i)-1).toString(32),r>>=i,o-=i,st=1<<32-Xe(t)+o|n<<o|r,ut=l+e}else st=1<<l|n<<o|r,ut=e}function Ba(e){e.return!==null&&(Wt(e,1),y0(e,1,0))}function Va(e){for(;e===Io;)Io=mn[--hn],mn[hn]=null,$o=mn[--hn],mn[hn]=null;for(;e===Jt;)Jt=$e[--Fe],$e[Fe]=null,ut=$e[--Fe],$e[Fe]=null,st=$e[--Fe],$e[Fe]=null}var Le=null,je=null,Q=!1,Ke=null;function x0(e,t){var n=De(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function du(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,Le=e,je=_t(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,Le=e,je=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=Jt!==null?{id:st,overflow:ut}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=De(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,Le=e,je=null,!0):!1;default:return!1}}function Xi(e){return(e.mode&1)!==0&&(e.flags&128)===0}function Gi(e){if(Q){var t=je;if(t){var n=t;if(!du(e,t)){if(Xi(e))throw Error(S(418));t=_t(n.nextSibling);var r=Le;t&&du(e,t)?x0(r,n):(e.flags=e.flags&-4097|2,Q=!1,Le=e)}}else{if(Xi(e))throw Error(S(418));e.flags=e.flags&-4097|2,Q=!1,Le=e}}}function pu(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;Le=e}function qr(e){if(e!==Le)return!1;if(!Q)return pu(e),Q=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!Hi(e.type,e.memoizedProps)),t&&(t=je)){if(Xi(e))throw w0(),Error(S(418));for(;t;)x0(e,t),t=_t(t.nextSibling)}if(pu(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(S(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){je=_t(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}je=null}}else je=Le?_t(e.stateNode.nextSibling):null;return!0}function w0(){for(var e=je;e;)e=_t(e.nextSibling)}function _n(){je=Le=null,Q=!1}function Wa(e){Ke===null?Ke=[e]:Ke.push(e)}var rp=gt.ReactCurrentBatchConfig;function Qe(e,t){if(e&&e.defaultProps){t=X({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}var Fo=Dt(null),Do=null,gn=null,Ha=null;function Qa(){Ha=gn=Do=null}function Ya(e){var t=Fo.current;W(Fo),e._currentValue=t}function Zi(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function Cn(e,t){Do=e,Ha=gn=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(Ce=!0),e.firstContext=null)}function Ae(e){var t=e._currentValue;if(Ha!==e)if(e={context:e,memoizedValue:t,next:null},gn===null){if(Do===null)throw Error(S(308));gn=e,Do.dependencies={lanes:0,firstContext:e}}else gn=gn.next=e;return t}var Yt=null;function Ka(e){Yt===null?Yt=[e]:Yt.push(e)}function S0(e,t,n,r){var o=t.interleaved;return o===null?(n.next=n,Ka(t)):(n.next=o.next,o.next=n),t.interleaved=n,mt(e,r)}function mt(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var xt=!1;function Xa(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function k0(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function ft(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function jt(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,I&2){var o=r.pending;return o===null?t.next=t:(t.next=o.next,o.next=t),r.pending=t,mt(e,n)}return o=r.interleaved,o===null?(t.next=t,Ka(r)):(t.next=o.next,o.next=t),r.interleaved=t,mt(e,n)}function po(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Ta(e,n)}}function mu(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var o=null,l=null;if(n=n.firstBaseUpdate,n!==null){do{var i={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};l===null?o=l=i:l=l.next=i,n=n.next}while(n!==null);l===null?o=l=t:l=l.next=t}else o=l=t;n={baseState:r.baseState,firstBaseUpdate:o,lastBaseUpdate:l,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function Uo(e,t,n,r){var o=e.updateQueue;xt=!1;var l=o.firstBaseUpdate,i=o.lastBaseUpdate,a=o.shared.pending;if(a!==null){o.shared.pending=null;var s=a,u=s.next;s.next=null,i===null?l=u:i.next=u,i=s;var m=e.alternate;m!==null&&(m=m.updateQueue,a=m.lastBaseUpdate,a!==i&&(a===null?m.firstBaseUpdate=u:a.next=u,m.lastBaseUpdate=s))}if(l!==null){var d=o.baseState;i=0,m=u=s=null,a=l;do{var h=a.lane,w=a.eventTime;if((r&h)===h){m!==null&&(m=m.next={eventTime:w,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var y=e,v=a;switch(h=t,w=n,v.tag){case 1:if(y=v.payload,typeof y=="function"){d=y.call(w,d,h);break e}d=y;break e;case 3:y.flags=y.flags&-65537|128;case 0:if(y=v.payload,h=typeof y=="function"?y.call(w,d,h):y,h==null)break e;d=X({},d,h);break e;case 2:xt=!0}}a.callback!==null&&a.lane!==0&&(e.flags|=64,h=o.effects,h===null?o.effects=[a]:h.push(a))}else w={eventTime:w,lane:h,tag:a.tag,payload:a.payload,callback:a.callback,next:null},m===null?(u=m=w,s=d):m=m.next=w,i|=h;if(a=a.next,a===null){if(a=o.shared.pending,a===null)break;h=a,a=h.next,h.next=null,o.lastBaseUpdate=h,o.shared.pending=null}}while(!0);if(m===null&&(s=d),o.baseState=s,o.firstBaseUpdate=u,o.lastBaseUpdate=m,t=o.shared.interleaved,t!==null){o=t;do i|=o.lane,o=o.next;while(o!==t)}else l===null&&(o.shared.lanes=0);bt|=i,e.lanes=i,e.memoizedState=d}}function hu(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],o=r.callback;if(o!==null){if(r.callback=null,r=n,typeof o!="function")throw Error(S(191,o));o.call(r)}}}var C0=new Sc.Component().refs;function Ji(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:X({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var ol={isMounted:function(e){return(e=e._reactInternals)?nn(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=xe(),o=Rt(e),l=ft(r,o);l.payload=t,n!=null&&(l.callback=n),t=jt(e,l,o),t!==null&&(Ge(t,e,o,r),po(t,e,o))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=xe(),o=Rt(e),l=ft(r,o);l.tag=1,l.payload=t,n!=null&&(l.callback=n),t=jt(e,l,o),t!==null&&(Ge(t,e,o,r),po(t,e,o))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=xe(),r=Rt(e),o=ft(n,r);o.tag=2,t!=null&&(o.callback=t),t=jt(e,o,r),t!==null&&(Ge(t,e,r,n),po(t,e,r))}};function gu(e,t,n,r,o,l,i){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,l,i):t.prototype&&t.prototype.isPureReactComponent?!gr(n,r)||!gr(o,l):!0}function E0(e,t,n){var r=!1,o=$t,l=t.contextType;return typeof l=="object"&&l!==null?l=Ae(l):(o=ze(t)?Zt:ve.current,r=t.contextTypes,l=(r=r!=null)?Pn(e,o):$t),t=new t(n,l),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=ol,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=o,e.__reactInternalMemoizedMaskedChildContext=l),t}function vu(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&ol.enqueueReplaceState(t,t.state,null)}function qi(e,t,n,r){var o=e.stateNode;o.props=n,o.state=e.memoizedState,o.refs=C0,Xa(e);var l=t.contextType;typeof l=="object"&&l!==null?o.context=Ae(l):(l=ze(t)?Zt:ve.current,o.context=Pn(e,l)),o.state=e.memoizedState,l=t.getDerivedStateFromProps,typeof l=="function"&&(Ji(e,t,l,n),o.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof o.getSnapshotBeforeUpdate=="function"||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(t=o.state,typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount(),t!==o.state&&ol.enqueueReplaceState(o,o.state,null),Uo(e,n,o,r),o.state=e.memoizedState),typeof o.componentDidMount=="function"&&(e.flags|=4194308)}function Yn(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(S(309));var r=n.stateNode}if(!r)throw Error(S(147,e));var o=r,l=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===l?t.ref:(t=function(i){var a=o.refs;a===C0&&(a=o.refs={}),i===null?delete a[l]:a[l]=i},t._stringRef=l,t)}if(typeof e!="string")throw Error(S(284));if(!n._owner)throw Error(S(290,e))}return e}function br(e,t){throw e=Object.prototype.toString.call(t),Error(S(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function yu(e){var t=e._init;return t(e._payload)}function z0(e){function t(f,c){if(e){var p=f.deletions;p===null?(f.deletions=[c],f.flags|=16):p.push(c)}}function n(f,c){if(!e)return null;for(;c!==null;)t(f,c),c=c.sibling;return null}function r(f,c){for(f=new Map;c!==null;)c.key!==null?f.set(c.key,c):f.set(c.index,c),c=c.sibling;return f}function o(f,c){return f=Mt(f,c),f.index=0,f.sibling=null,f}function l(f,c,p){return f.index=p,e?(p=f.alternate,p!==null?(p=p.index,p<c?(f.flags|=2,c):p):(f.flags|=2,c)):(f.flags|=1048576,c)}function i(f){return e&&f.alternate===null&&(f.flags|=2),f}function a(f,c,p,x){return c===null||c.tag!==6?(c=fi(p,f.mode,x),c.return=f,c):(c=o(c,p),c.return=f,c)}function s(f,c,p,x){var z=p.type;return z===sn?m(f,c,p.props.children,x,p.key):c!==null&&(c.elementType===z||typeof z=="object"&&z!==null&&z.$$typeof===yt&&yu(z)===c.type)?(x=o(c,p.props),x.ref=Yn(f,c,p),x.return=f,x):(x=xo(p.type,p.key,p.props,null,f.mode,x),x.ref=Yn(f,c,p),x.return=f,x)}function u(f,c,p,x){return c===null||c.tag!==4||c.stateNode.containerInfo!==p.containerInfo||c.stateNode.implementation!==p.implementation?(c=di(p,f.mode,x),c.return=f,c):(c=o(c,p.children||[]),c.return=f,c)}function m(f,c,p,x,z){return c===null||c.tag!==7?(c=Gt(p,f.mode,x,z),c.return=f,c):(c=o(c,p),c.return=f,c)}function d(f,c,p){if(typeof c=="string"&&c!==""||typeof c=="number")return c=fi(""+c,f.mode,p),c.return=f,c;if(typeof c=="object"&&c!==null){switch(c.$$typeof){case Vr:return p=xo(c.type,c.key,c.props,null,f.mode,p),p.ref=Yn(f,null,c),p.return=f,p;case an:return c=di(c,f.mode,p),c.return=f,c;case yt:var x=c._init;return d(f,x(c._payload),p)}if(Jn(c)||Bn(c))return c=Gt(c,f.mode,p,null),c.return=f,c;br(f,c)}return null}function h(f,c,p,x){var z=c!==null?c.key:null;if(typeof p=="string"&&p!==""||typeof p=="number")return z!==null?null:a(f,c,""+p,x);if(typeof p=="object"&&p!==null){switch(p.$$typeof){case Vr:return p.key===z?s(f,c,p,x):null;case an:return p.key===z?u(f,c,p,x):null;case yt:return z=p._init,h(f,c,z(p._payload),x)}if(Jn(p)||Bn(p))return z!==null?null:m(f,c,p,x,null);br(f,p)}return null}function w(f,c,p,x,z){if(typeof x=="string"&&x!==""||typeof x=="number")return f=f.get(p)||null,a(c,f,""+x,z);if(typeof x=="object"&&x!==null){switch(x.$$typeof){case Vr:return f=f.get(x.key===null?p:x.key)||null,s(c,f,x,z);case an:return f=f.get(x.key===null?p:x.key)||null,u(c,f,x,z);case yt:var P=x._init;return w(f,c,p,P(x._payload),z)}if(Jn(x)||Bn(x))return f=f.get(p)||null,m(c,f,x,z,null);br(c,x)}return null}function y(f,c,p,x){for(var z=null,P=null,N=c,L=c=0,Z=null;N!==null&&L<p.length;L++){N.index>L?(Z=N,N=null):Z=N.sibling;var O=h(f,N,p[L],x);if(O===null){N===null&&(N=Z);break}e&&N&&O.alternate===null&&t(f,N),c=l(O,c,L),P===null?z=O:P.sibling=O,P=O,N=Z}if(L===p.length)return n(f,N),Q&&Wt(f,L),z;if(N===null){for(;L<p.length;L++)N=d(f,p[L],x),N!==null&&(c=l(N,c,L),P===null?z=N:P.sibling=N,P=N);return Q&&Wt(f,L),z}for(N=r(f,N);L<p.length;L++)Z=w(N,f,L,p[L],x),Z!==null&&(e&&Z.alternate!==null&&N.delete(Z.key===null?L:Z.key),c=l(Z,c,L),P===null?z=Z:P.sibling=Z,P=Z);return e&&N.forEach(function(We){return t(f,We)}),Q&&Wt(f,L),z}function v(f,c,p,x){var z=Bn(p);if(typeof z!="function")throw Error(S(150));if(p=z.call(p),p==null)throw Error(S(151));for(var P=z=null,N=c,L=c=0,Z=null,O=p.next();N!==null&&!O.done;L++,O=p.next()){N.index>L?(Z=N,N=null):Z=N.sibling;var We=h(f,N,O.value,x);if(We===null){N===null&&(N=Z);break}e&&N&&We.alternate===null&&t(f,N),c=l(We,c,L),P===null?z=We:P.sibling=We,P=We,N=Z}if(O.done)return n(f,N),Q&&Wt(f,L),z;if(N===null){for(;!O.done;L++,O=p.next())O=d(f,O.value,x),O!==null&&(c=l(O,c,L),P===null?z=O:P.sibling=O,P=O);return Q&&Wt(f,L),z}for(N=r(f,N);!O.done;L++,O=p.next())O=w(N,f,L,O.value,x),O!==null&&(e&&O.alternate!==null&&N.delete(O.key===null?L:O.key),c=l(O,c,L),P===null?z=O:P.sibling=O,P=O);return e&&N.forEach(function(Un){return t(f,Un)}),Q&&Wt(f,L),z}function C(f,c,p,x){if(typeof p=="object"&&p!==null&&p.type===sn&&p.key===null&&(p=p.props.children),typeof p=="object"&&p!==null){switch(p.$$typeof){case Vr:e:{for(var z=p.key,P=c;P!==null;){if(P.key===z){if(z=p.type,z===sn){if(P.tag===7){n(f,P.sibling),c=o(P,p.props.children),c.return=f,f=c;break e}}else if(P.elementType===z||typeof z=="object"&&z!==null&&z.$$typeof===yt&&yu(z)===P.type){n(f,P.sibling),c=o(P,p.props),c.ref=Yn(f,P,p),c.return=f,f=c;break e}n(f,P);break}else t(f,P);P=P.sibling}p.type===sn?(c=Gt(p.props.children,f.mode,x,p.key),c.return=f,f=c):(x=xo(p.type,p.key,p.props,null,f.mode,x),x.ref=Yn(f,c,p),x.return=f,f=x)}return i(f);case an:e:{for(P=p.key;c!==null;){if(c.key===P)if(c.tag===4&&c.stateNode.containerInfo===p.containerInfo&&c.stateNode.implementation===p.implementation){n(f,c.sibling),c=o(c,p.children||[]),c.return=f,f=c;break e}else{n(f,c);break}else t(f,c);c=c.sibling}c=di(p,f.mode,x),c.return=f,f=c}return i(f);case yt:return P=p._init,C(f,c,P(p._payload),x)}if(Jn(p))return y(f,c,p,x);if(Bn(p))return v(f,c,p,x);br(f,p)}return typeof p=="string"&&p!==""||typeof p=="number"?(p=""+p,c!==null&&c.tag===6?(n(f,c.sibling),c=o(c,p),c.return=f,f=c):(n(f,c),c=fi(p,f.mode,x),c.return=f,f=c),i(f)):n(f,c)}return C}var jn=z0(!0),N0=z0(!1),$r={},ot=Dt($r),wr=Dt($r),Sr=Dt($r);function Kt(e){if(e===$r)throw Error(S(174));return e}function Ga(e,t){switch(B(Sr,t),B(wr,e),B(ot,$r),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:Li(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=Li(t,e)}W(ot),B(ot,t)}function Ln(){W(ot),W(wr),W(Sr)}function P0(e){Kt(Sr.current);var t=Kt(ot.current),n=Li(t,e.type);t!==n&&(B(wr,e),B(ot,n))}function Za(e){wr.current===e&&(W(ot),W(wr))}var Y=Dt(0);function Ao(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var li=[];function Ja(){for(var e=0;e<li.length;e++)li[e]._workInProgressVersionPrimary=null;li.length=0}var mo=gt.ReactCurrentDispatcher,ii=gt.ReactCurrentBatchConfig,qt=0,K=null,ne=null,ie=null,Bo=!1,lr=!1,kr=0,op=0;function pe(){throw Error(S(321))}function qa(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!Ze(e[n],t[n]))return!1;return!0}function ba(e,t,n,r,o,l){if(qt=l,K=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,mo.current=e===null||e.memoizedState===null?sp:up,e=n(r,o),lr){l=0;do{if(lr=!1,kr=0,25<=l)throw Error(S(301));l+=1,ie=ne=null,t.updateQueue=null,mo.current=cp,e=n(r,o)}while(lr)}if(mo.current=Vo,t=ne!==null&&ne.next!==null,qt=0,ie=ne=K=null,Bo=!1,t)throw Error(S(300));return e}function es(){var e=kr!==0;return kr=0,e}function qe(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return ie===null?K.memoizedState=ie=e:ie=ie.next=e,ie}function Be(){if(ne===null){var e=K.alternate;e=e!==null?e.memoizedState:null}else e=ne.next;var t=ie===null?K.memoizedState:ie.next;if(t!==null)ie=t,ne=e;else{if(e===null)throw Error(S(310));ne=e,e={memoizedState:ne.memoizedState,baseState:ne.baseState,baseQueue:ne.baseQueue,queue:ne.queue,next:null},ie===null?K.memoizedState=ie=e:ie=ie.next=e}return ie}function Cr(e,t){return typeof t=="function"?t(e):t}function ai(e){var t=Be(),n=t.queue;if(n===null)throw Error(S(311));n.lastRenderedReducer=e;var r=ne,o=r.baseQueue,l=n.pending;if(l!==null){if(o!==null){var i=o.next;o.next=l.next,l.next=i}r.baseQueue=o=l,n.pending=null}if(o!==null){l=o.next,r=r.baseState;var a=i=null,s=null,u=l;do{var m=u.lane;if((qt&m)===m)s!==null&&(s=s.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),r=u.hasEagerState?u.eagerState:e(r,u.action);else{var d={lane:m,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};s===null?(a=s=d,i=r):s=s.next=d,K.lanes|=m,bt|=m}u=u.next}while(u!==null&&u!==l);s===null?i=r:s.next=a,Ze(r,t.memoizedState)||(Ce=!0),t.memoizedState=r,t.baseState=i,t.baseQueue=s,n.lastRenderedState=r}if(e=n.interleaved,e!==null){o=e;do l=o.lane,K.lanes|=l,bt|=l,o=o.next;while(o!==e)}else o===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function si(e){var t=Be(),n=t.queue;if(n===null)throw Error(S(311));n.lastRenderedReducer=e;var r=n.dispatch,o=n.pending,l=t.memoizedState;if(o!==null){n.pending=null;var i=o=o.next;do l=e(l,i.action),i=i.next;while(i!==o);Ze(l,t.memoizedState)||(Ce=!0),t.memoizedState=l,t.baseQueue===null&&(t.baseState=l),n.lastRenderedState=l}return[l,r]}function _0(){}function j0(e,t){var n=K,r=Be(),o=t(),l=!Ze(r.memoizedState,o);if(l&&(r.memoizedState=o,Ce=!0),r=r.queue,ts(M0.bind(null,n,r,e),[e]),r.getSnapshot!==t||l||ie!==null&&ie.memoizedState.tag&1){if(n.flags|=2048,Er(9,R0.bind(null,n,r,o,t),void 0,null),ae===null)throw Error(S(349));qt&30||L0(n,t,o)}return o}function L0(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=K.updateQueue,t===null?(t={lastEffect:null,stores:null},K.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function R0(e,t,n,r){t.value=n,t.getSnapshot=r,T0(t)&&O0(e)}function M0(e,t,n){return n(function(){T0(t)&&O0(e)})}function T0(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!Ze(e,n)}catch{return!0}}function O0(e){var t=mt(e,1);t!==null&&Ge(t,e,1,-1)}function xu(e){var t=qe();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Cr,lastRenderedState:e},t.queue=e,e=e.dispatch=ap.bind(null,K,e),[t.memoizedState,e]}function Er(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=K.updateQueue,t===null?(t={lastEffect:null,stores:null},K.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function I0(){return Be().memoizedState}function ho(e,t,n,r){var o=qe();K.flags|=e,o.memoizedState=Er(1|t,n,void 0,r===void 0?null:r)}function ll(e,t,n,r){var o=Be();r=r===void 0?null:r;var l=void 0;if(ne!==null){var i=ne.memoizedState;if(l=i.destroy,r!==null&&qa(r,i.deps)){o.memoizedState=Er(t,n,l,r);return}}K.flags|=e,o.memoizedState=Er(1|t,n,l,r)}function wu(e,t){return ho(8390656,8,e,t)}function ts(e,t){return ll(2048,8,e,t)}function $0(e,t){return ll(4,2,e,t)}function F0(e,t){return ll(4,4,e,t)}function D0(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function U0(e,t,n){return n=n!=null?n.concat([e]):null,ll(4,4,D0.bind(null,t,e),n)}function ns(){}function A0(e,t){var n=Be();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&qa(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function B0(e,t){var n=Be();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&qa(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function V0(e,t,n){return qt&21?(Ze(n,t)||(n=Qc(),K.lanes|=n,bt|=n,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,Ce=!0),e.memoizedState=n)}function lp(e,t){var n=D;D=n!==0&&4>n?n:4,e(!0);var r=ii.transition;ii.transition={};try{e(!1),t()}finally{D=n,ii.transition=r}}function W0(){return Be().memoizedState}function ip(e,t,n){var r=Rt(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},H0(e))Q0(t,n);else if(n=S0(e,t,n,r),n!==null){var o=xe();Ge(n,e,r,o),Y0(n,t,r)}}function ap(e,t,n){var r=Rt(e),o={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(H0(e))Q0(t,o);else{var l=e.alternate;if(e.lanes===0&&(l===null||l.lanes===0)&&(l=t.lastRenderedReducer,l!==null))try{var i=t.lastRenderedState,a=l(i,n);if(o.hasEagerState=!0,o.eagerState=a,Ze(a,i)){var s=t.interleaved;s===null?(o.next=o,Ka(t)):(o.next=s.next,s.next=o),t.interleaved=o;return}}catch{}finally{}n=S0(e,t,o,r),n!==null&&(o=xe(),Ge(n,e,r,o),Y0(n,t,r))}}function H0(e){var t=e.alternate;return e===K||t!==null&&t===K}function Q0(e,t){lr=Bo=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function Y0(e,t,n){if(n&4194240){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Ta(e,n)}}var Vo={readContext:Ae,useCallback:pe,useContext:pe,useEffect:pe,useImperativeHandle:pe,useInsertionEffect:pe,useLayoutEffect:pe,useMemo:pe,useReducer:pe,useRef:pe,useState:pe,useDebugValue:pe,useDeferredValue:pe,useTransition:pe,useMutableSource:pe,useSyncExternalStore:pe,useId:pe,unstable_isNewReconciler:!1},sp={readContext:Ae,useCallback:function(e,t){return qe().memoizedState=[e,t===void 0?null:t],e},useContext:Ae,useEffect:wu,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,ho(4194308,4,D0.bind(null,t,e),n)},useLayoutEffect:function(e,t){return ho(4194308,4,e,t)},useInsertionEffect:function(e,t){return ho(4,2,e,t)},useMemo:function(e,t){var n=qe();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=qe();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=ip.bind(null,K,e),[r.memoizedState,e]},useRef:function(e){var t=qe();return e={current:e},t.memoizedState=e},useState:xu,useDebugValue:ns,useDeferredValue:function(e){return qe().memoizedState=e},useTransition:function(){var e=xu(!1),t=e[0];return e=lp.bind(null,e[1]),qe().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=K,o=qe();if(Q){if(n===void 0)throw Error(S(407));n=n()}else{if(n=t(),ae===null)throw Error(S(349));qt&30||L0(r,t,n)}o.memoizedState=n;var l={value:n,getSnapshot:t};return o.queue=l,wu(M0.bind(null,r,l,e),[e]),r.flags|=2048,Er(9,R0.bind(null,r,l,n,t),void 0,null),n},useId:function(){var e=qe(),t=ae.identifierPrefix;if(Q){var n=ut,r=st;n=(r&~(1<<32-Xe(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=kr++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=op++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},up={readContext:Ae,useCallback:A0,useContext:Ae,useEffect:ts,useImperativeHandle:U0,useInsertionEffect:$0,useLayoutEffect:F0,useMemo:B0,useReducer:ai,useRef:I0,useState:function(){return ai(Cr)},useDebugValue:ns,useDeferredValue:function(e){var t=Be();return V0(t,ne.memoizedState,e)},useTransition:function(){var e=ai(Cr)[0],t=Be().memoizedState;return[e,t]},useMutableSource:_0,useSyncExternalStore:j0,useId:W0,unstable_isNewReconciler:!1},cp={readContext:Ae,useCallback:A0,useContext:Ae,useEffect:ts,useImperativeHandle:U0,useInsertionEffect:$0,useLayoutEffect:F0,useMemo:B0,useReducer:si,useRef:I0,useState:function(){return si(Cr)},useDebugValue:ns,useDeferredValue:function(e){var t=Be();return ne===null?t.memoizedState=e:V0(t,ne.memoizedState,e)},useTransition:function(){var e=si(Cr)[0],t=Be().memoizedState;return[e,t]},useMutableSource:_0,useSyncExternalStore:j0,useId:W0,unstable_isNewReconciler:!1};function Rn(e,t){try{var n="",r=t;do n+=Df(r),r=r.return;while(r);var o=n}catch(l){o=`
Error generating stack: `+l.message+`
`+l.stack}return{value:e,source:t,stack:o,digest:null}}function ui(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function bi(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var fp=typeof WeakMap=="function"?WeakMap:Map;function K0(e,t,n){n=ft(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){Ho||(Ho=!0,ua=r),bi(e,t)},n}function X0(e,t,n){n=ft(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var o=t.value;n.payload=function(){return r(o)},n.callback=function(){bi(e,t)}}var l=e.stateNode;return l!==null&&typeof l.componentDidCatch=="function"&&(n.callback=function(){bi(e,t),typeof r!="function"&&(Lt===null?Lt=new Set([this]):Lt.add(this));var i=t.stack;this.componentDidCatch(t.value,{componentStack:i!==null?i:""})}),n}function Su(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new fp;var o=new Set;r.set(t,o)}else o=r.get(t),o===void 0&&(o=new Set,r.set(t,o));o.has(n)||(o.add(n),e=zp.bind(null,e,t,n),t.then(e,e))}function ku(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function Cu(e,t,n,r,o){return e.mode&1?(e.flags|=65536,e.lanes=o,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=ft(-1,1),t.tag=2,jt(n,t,1))),n.lanes|=1),e)}var dp=gt.ReactCurrentOwner,Ce=!1;function ye(e,t,n,r){t.child=e===null?N0(t,null,n,r):jn(t,e.child,n,r)}function Eu(e,t,n,r,o){n=n.render;var l=t.ref;return Cn(t,o),r=ba(e,t,n,r,l,o),n=es(),e!==null&&!Ce?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~o,ht(e,t,o)):(Q&&n&&Ba(t),t.flags|=1,ye(e,t,r,o),t.child)}function zu(e,t,n,r,o){if(e===null){var l=n.type;return typeof l=="function"&&!cs(l)&&l.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=l,G0(e,t,l,r,o)):(e=xo(n.type,null,r,t,t.mode,o),e.ref=t.ref,e.return=t,t.child=e)}if(l=e.child,!(e.lanes&o)){var i=l.memoizedProps;if(n=n.compare,n=n!==null?n:gr,n(i,r)&&e.ref===t.ref)return ht(e,t,o)}return t.flags|=1,e=Mt(l,r),e.ref=t.ref,e.return=t,t.child=e}function G0(e,t,n,r,o){if(e!==null){var l=e.memoizedProps;if(gr(l,r)&&e.ref===t.ref)if(Ce=!1,t.pendingProps=r=l,(e.lanes&o)!==0)e.flags&131072&&(Ce=!0);else return t.lanes=e.lanes,ht(e,t,o)}return ea(e,t,n,r,o)}function Z0(e,t,n){var r=t.pendingProps,o=r.children,l=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},B(yn,_e),_e|=n;else{if(!(n&1073741824))return e=l!==null?l.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,B(yn,_e),_e|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=l!==null?l.baseLanes:n,B(yn,_e),_e|=r}else l!==null?(r=l.baseLanes|n,t.memoizedState=null):r=n,B(yn,_e),_e|=r;return ye(e,t,o,n),t.child}function J0(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function ea(e,t,n,r,o){var l=ze(n)?Zt:ve.current;return l=Pn(t,l),Cn(t,o),n=ba(e,t,n,r,l,o),r=es(),e!==null&&!Ce?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~o,ht(e,t,o)):(Q&&r&&Ba(t),t.flags|=1,ye(e,t,n,o),t.child)}function Nu(e,t,n,r,o){if(ze(n)){var l=!0;Oo(t)}else l=!1;if(Cn(t,o),t.stateNode===null)go(e,t),E0(t,n,r),qi(t,n,r,o),r=!0;else if(e===null){var i=t.stateNode,a=t.memoizedProps;i.props=a;var s=i.context,u=n.contextType;typeof u=="object"&&u!==null?u=Ae(u):(u=ze(n)?Zt:ve.current,u=Pn(t,u));var m=n.getDerivedStateFromProps,d=typeof m=="function"||typeof i.getSnapshotBeforeUpdate=="function";d||typeof i.UNSAFE_componentWillReceiveProps!="function"&&typeof i.componentWillReceiveProps!="function"||(a!==r||s!==u)&&vu(t,i,r,u),xt=!1;var h=t.memoizedState;i.state=h,Uo(t,r,i,o),s=t.memoizedState,a!==r||h!==s||Ee.current||xt?(typeof m=="function"&&(Ji(t,n,m,r),s=t.memoizedState),(a=xt||gu(t,n,a,r,h,s,u))?(d||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount()),typeof i.componentDidMount=="function"&&(t.flags|=4194308)):(typeof i.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=s),i.props=r,i.state=s,i.context=u,r=a):(typeof i.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{i=t.stateNode,k0(e,t),a=t.memoizedProps,u=t.type===t.elementType?a:Qe(t.type,a),i.props=u,d=t.pendingProps,h=i.context,s=n.contextType,typeof s=="object"&&s!==null?s=Ae(s):(s=ze(n)?Zt:ve.current,s=Pn(t,s));var w=n.getDerivedStateFromProps;(m=typeof w=="function"||typeof i.getSnapshotBeforeUpdate=="function")||typeof i.UNSAFE_componentWillReceiveProps!="function"&&typeof i.componentWillReceiveProps!="function"||(a!==d||h!==s)&&vu(t,i,r,s),xt=!1,h=t.memoizedState,i.state=h,Uo(t,r,i,o);var y=t.memoizedState;a!==d||h!==y||Ee.current||xt?(typeof w=="function"&&(Ji(t,n,w,r),y=t.memoizedState),(u=xt||gu(t,n,u,r,h,y,s)||!1)?(m||typeof i.UNSAFE_componentWillUpdate!="function"&&typeof i.componentWillUpdate!="function"||(typeof i.componentWillUpdate=="function"&&i.componentWillUpdate(r,y,s),typeof i.UNSAFE_componentWillUpdate=="function"&&i.UNSAFE_componentWillUpdate(r,y,s)),typeof i.componentDidUpdate=="function"&&(t.flags|=4),typeof i.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof i.componentDidUpdate!="function"||a===e.memoizedProps&&h===e.memoizedState||(t.flags|=4),typeof i.getSnapshotBeforeUpdate!="function"||a===e.memoizedProps&&h===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=y),i.props=r,i.state=y,i.context=s,r=u):(typeof i.componentDidUpdate!="function"||a===e.memoizedProps&&h===e.memoizedState||(t.flags|=4),typeof i.getSnapshotBeforeUpdate!="function"||a===e.memoizedProps&&h===e.memoizedState||(t.flags|=1024),r=!1)}return ta(e,t,n,r,l,o)}function ta(e,t,n,r,o,l){J0(e,t);var i=(t.flags&128)!==0;if(!r&&!i)return o&&fu(t,n,!1),ht(e,t,l);r=t.stateNode,dp.current=t;var a=i&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&i?(t.child=jn(t,e.child,null,l),t.child=jn(t,null,a,l)):ye(e,t,a,l),t.memoizedState=r.state,o&&fu(t,n,!0),t.child}function q0(e){var t=e.stateNode;t.pendingContext?cu(e,t.pendingContext,t.pendingContext!==t.context):t.context&&cu(e,t.context,!1),Ga(e,t.containerInfo)}function Pu(e,t,n,r,o){return _n(),Wa(o),t.flags|=256,ye(e,t,n,r),t.child}var na={dehydrated:null,treeContext:null,retryLane:0};function ra(e){return{baseLanes:e,cachePool:null,transitions:null}}function b0(e,t,n){var r=t.pendingProps,o=Y.current,l=!1,i=(t.flags&128)!==0,a;if((a=i)||(a=e!==null&&e.memoizedState===null?!1:(o&2)!==0),a?(l=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(o|=1),B(Y,o&1),e===null)return Gi(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(i=r.children,e=r.fallback,l?(r=t.mode,l=t.child,i={mode:"hidden",children:i},!(r&1)&&l!==null?(l.childLanes=0,l.pendingProps=i):l=sl(i,r,0,null),e=Gt(e,r,n,null),l.return=t,e.return=t,l.sibling=e,t.child=l,t.child.memoizedState=ra(n),t.memoizedState=na,e):rs(t,i));if(o=e.memoizedState,o!==null&&(a=o.dehydrated,a!==null))return pp(e,t,i,r,a,o,n);if(l){l=r.fallback,i=t.mode,o=e.child,a=o.sibling;var s={mode:"hidden",children:r.children};return!(i&1)&&t.child!==o?(r=t.child,r.childLanes=0,r.pendingProps=s,t.deletions=null):(r=Mt(o,s),r.subtreeFlags=o.subtreeFlags&14680064),a!==null?l=Mt(a,l):(l=Gt(l,i,n,null),l.flags|=2),l.return=t,r.return=t,r.sibling=l,t.child=r,r=l,l=t.child,i=e.child.memoizedState,i=i===null?ra(n):{baseLanes:i.baseLanes|n,cachePool:null,transitions:i.transitions},l.memoizedState=i,l.childLanes=e.childLanes&~n,t.memoizedState=na,r}return l=e.child,e=l.sibling,r=Mt(l,{mode:"visible",children:r.children}),!(t.mode&1)&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function rs(e,t){return t=sl({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function eo(e,t,n,r){return r!==null&&Wa(r),jn(t,e.child,null,n),e=rs(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function pp(e,t,n,r,o,l,i){if(n)return t.flags&256?(t.flags&=-257,r=ui(Error(S(422))),eo(e,t,i,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(l=r.fallback,o=t.mode,r=sl({mode:"visible",children:r.children},o,0,null),l=Gt(l,o,i,null),l.flags|=2,r.return=t,l.return=t,r.sibling=l,t.child=r,t.mode&1&&jn(t,e.child,null,i),t.child.memoizedState=ra(i),t.memoizedState=na,l);if(!(t.mode&1))return eo(e,t,i,null);if(o.data==="$!"){if(r=o.nextSibling&&o.nextSibling.dataset,r)var a=r.dgst;return r=a,l=Error(S(419)),r=ui(l,r,void 0),eo(e,t,i,r)}if(a=(i&e.childLanes)!==0,Ce||a){if(r=ae,r!==null){switch(i&-i){case 4:o=2;break;case 16:o=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:o=32;break;case 536870912:o=268435456;break;default:o=0}o=o&(r.suspendedLanes|i)?0:o,o!==0&&o!==l.retryLane&&(l.retryLane=o,mt(e,o),Ge(r,e,o,-1))}return us(),r=ui(Error(S(421))),eo(e,t,i,r)}return o.data==="$?"?(t.flags|=128,t.child=e.child,t=Np.bind(null,e),o._reactRetry=t,null):(e=l.treeContext,je=_t(o.nextSibling),Le=t,Q=!0,Ke=null,e!==null&&($e[Fe++]=st,$e[Fe++]=ut,$e[Fe++]=Jt,st=e.id,ut=e.overflow,Jt=t),t=rs(t,r.children),t.flags|=4096,t)}function _u(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),Zi(e.return,t,n)}function ci(e,t,n,r,o){var l=e.memoizedState;l===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:o}:(l.isBackwards=t,l.rendering=null,l.renderingStartTime=0,l.last=r,l.tail=n,l.tailMode=o)}function e1(e,t,n){var r=t.pendingProps,o=r.revealOrder,l=r.tail;if(ye(e,t,r.children,n),r=Y.current,r&2)r=r&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&_u(e,n,t);else if(e.tag===19)_u(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(B(Y,r),!(t.mode&1))t.memoizedState=null;else switch(o){case"forwards":for(n=t.child,o=null;n!==null;)e=n.alternate,e!==null&&Ao(e)===null&&(o=n),n=n.sibling;n=o,n===null?(o=t.child,t.child=null):(o=n.sibling,n.sibling=null),ci(t,!1,o,n,l);break;case"backwards":for(n=null,o=t.child,t.child=null;o!==null;){if(e=o.alternate,e!==null&&Ao(e)===null){t.child=o;break}e=o.sibling,o.sibling=n,n=o,o=e}ci(t,!0,n,null,l);break;case"together":ci(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function go(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function ht(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),bt|=t.lanes,!(n&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(S(153));if(t.child!==null){for(e=t.child,n=Mt(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=Mt(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function mp(e,t,n){switch(t.tag){case 3:q0(t),_n();break;case 5:P0(t);break;case 1:ze(t.type)&&Oo(t);break;case 4:Ga(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,o=t.memoizedProps.value;B(Fo,r._currentValue),r._currentValue=o;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(B(Y,Y.current&1),t.flags|=128,null):n&t.child.childLanes?b0(e,t,n):(B(Y,Y.current&1),e=ht(e,t,n),e!==null?e.sibling:null);B(Y,Y.current&1);break;case 19:if(r=(n&t.childLanes)!==0,e.flags&128){if(r)return e1(e,t,n);t.flags|=128}if(o=t.memoizedState,o!==null&&(o.rendering=null,o.tail=null,o.lastEffect=null),B(Y,Y.current),r)break;return null;case 22:case 23:return t.lanes=0,Z0(e,t,n)}return ht(e,t,n)}var t1,oa,n1,r1;t1=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};oa=function(){};n1=function(e,t,n,r){var o=e.memoizedProps;if(o!==r){e=t.stateNode,Kt(ot.current);var l=null;switch(n){case"input":o=Ni(e,o),r=Ni(e,r),l=[];break;case"select":o=X({},o,{value:void 0}),r=X({},r,{value:void 0}),l=[];break;case"textarea":o=ji(e,o),r=ji(e,r),l=[];break;default:typeof o.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=Mo)}Ri(n,r);var i;n=null;for(u in o)if(!r.hasOwnProperty(u)&&o.hasOwnProperty(u)&&o[u]!=null)if(u==="style"){var a=o[u];for(i in a)a.hasOwnProperty(i)&&(n||(n={}),n[i]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(ur.hasOwnProperty(u)?l||(l=[]):(l=l||[]).push(u,null));for(u in r){var s=r[u];if(a=o!=null?o[u]:void 0,r.hasOwnProperty(u)&&s!==a&&(s!=null||a!=null))if(u==="style")if(a){for(i in a)!a.hasOwnProperty(i)||s&&s.hasOwnProperty(i)||(n||(n={}),n[i]="");for(i in s)s.hasOwnProperty(i)&&a[i]!==s[i]&&(n||(n={}),n[i]=s[i])}else n||(l||(l=[]),l.push(u,n)),n=s;else u==="dangerouslySetInnerHTML"?(s=s?s.__html:void 0,a=a?a.__html:void 0,s!=null&&a!==s&&(l=l||[]).push(u,s)):u==="children"?typeof s!="string"&&typeof s!="number"||(l=l||[]).push(u,""+s):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(ur.hasOwnProperty(u)?(s!=null&&u==="onScroll"&&V("scroll",e),l||a===s||(l=[])):(l=l||[]).push(u,s))}n&&(l=l||[]).push("style",n);var u=l;(t.updateQueue=u)&&(t.flags|=4)}};r1=function(e,t,n,r){n!==r&&(t.flags|=4)};function Kn(e,t){if(!Q)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function me(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var o=e.child;o!==null;)n|=o.lanes|o.childLanes,r|=o.subtreeFlags&14680064,r|=o.flags&14680064,o.return=e,o=o.sibling;else for(o=e.child;o!==null;)n|=o.lanes|o.childLanes,r|=o.subtreeFlags,r|=o.flags,o.return=e,o=o.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function hp(e,t,n){var r=t.pendingProps;switch(Va(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return me(t),null;case 1:return ze(t.type)&&To(),me(t),null;case 3:return r=t.stateNode,Ln(),W(Ee),W(ve),Ja(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(qr(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,Ke!==null&&(da(Ke),Ke=null))),oa(e,t),me(t),null;case 5:Za(t);var o=Kt(Sr.current);if(n=t.type,e!==null&&t.stateNode!=null)n1(e,t,n,r,o),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(S(166));return me(t),null}if(e=Kt(ot.current),qr(t)){r=t.stateNode,n=t.type;var l=t.memoizedProps;switch(r[tt]=t,r[xr]=l,e=(t.mode&1)!==0,n){case"dialog":V("cancel",r),V("close",r);break;case"iframe":case"object":case"embed":V("load",r);break;case"video":case"audio":for(o=0;o<bn.length;o++)V(bn[o],r);break;case"source":V("error",r);break;case"img":case"image":case"link":V("error",r),V("load",r);break;case"details":V("toggle",r);break;case"input":Fs(r,l),V("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!l.multiple},V("invalid",r);break;case"textarea":Us(r,l),V("invalid",r)}Ri(n,l),o=null;for(var i in l)if(l.hasOwnProperty(i)){var a=l[i];i==="children"?typeof a=="string"?r.textContent!==a&&(l.suppressHydrationWarning!==!0&&Jr(r.textContent,a,e),o=["children",a]):typeof a=="number"&&r.textContent!==""+a&&(l.suppressHydrationWarning!==!0&&Jr(r.textContent,a,e),o=["children",""+a]):ur.hasOwnProperty(i)&&a!=null&&i==="onScroll"&&V("scroll",r)}switch(n){case"input":Wr(r),Ds(r,l,!0);break;case"textarea":Wr(r),As(r);break;case"select":case"option":break;default:typeof l.onClick=="function"&&(r.onclick=Mo)}r=o,t.updateQueue=r,r!==null&&(t.flags|=4)}else{i=o.nodeType===9?o:o.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=Lc(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=i.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=i.createElement(n,{is:r.is}):(e=i.createElement(n),n==="select"&&(i=e,r.multiple?i.multiple=!0:r.size&&(i.size=r.size))):e=i.createElementNS(e,n),e[tt]=t,e[xr]=r,t1(e,t,!1,!1),t.stateNode=e;e:{switch(i=Mi(n,r),n){case"dialog":V("cancel",e),V("close",e),o=r;break;case"iframe":case"object":case"embed":V("load",e),o=r;break;case"video":case"audio":for(o=0;o<bn.length;o++)V(bn[o],e);o=r;break;case"source":V("error",e),o=r;break;case"img":case"image":case"link":V("error",e),V("load",e),o=r;break;case"details":V("toggle",e),o=r;break;case"input":Fs(e,r),o=Ni(e,r),V("invalid",e);break;case"option":o=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},o=X({},r,{value:void 0}),V("invalid",e);break;case"textarea":Us(e,r),o=ji(e,r),V("invalid",e);break;default:o=r}Ri(n,o),a=o;for(l in a)if(a.hasOwnProperty(l)){var s=a[l];l==="style"?Tc(e,s):l==="dangerouslySetInnerHTML"?(s=s?s.__html:void 0,s!=null&&Rc(e,s)):l==="children"?typeof s=="string"?(n!=="textarea"||s!=="")&&cr(e,s):typeof s=="number"&&cr(e,""+s):l!=="suppressContentEditableWarning"&&l!=="suppressHydrationWarning"&&l!=="autoFocus"&&(ur.hasOwnProperty(l)?s!=null&&l==="onScroll"&&V("scroll",e):s!=null&&Pa(e,l,s,i))}switch(n){case"input":Wr(e),Ds(e,r,!1);break;case"textarea":Wr(e),As(e);break;case"option":r.value!=null&&e.setAttribute("value",""+It(r.value));break;case"select":e.multiple=!!r.multiple,l=r.value,l!=null?xn(e,!!r.multiple,l,!1):r.defaultValue!=null&&xn(e,!!r.multiple,r.defaultValue,!0);break;default:typeof o.onClick=="function"&&(e.onclick=Mo)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return me(t),null;case 6:if(e&&t.stateNode!=null)r1(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(S(166));if(n=Kt(Sr.current),Kt(ot.current),qr(t)){if(r=t.stateNode,n=t.memoizedProps,r[tt]=t,(l=r.nodeValue!==n)&&(e=Le,e!==null))switch(e.tag){case 3:Jr(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&Jr(r.nodeValue,n,(e.mode&1)!==0)}l&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[tt]=t,t.stateNode=r}return me(t),null;case 13:if(W(Y),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(Q&&je!==null&&t.mode&1&&!(t.flags&128))w0(),_n(),t.flags|=98560,l=!1;else if(l=qr(t),r!==null&&r.dehydrated!==null){if(e===null){if(!l)throw Error(S(318));if(l=t.memoizedState,l=l!==null?l.dehydrated:null,!l)throw Error(S(317));l[tt]=t}else _n(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;me(t),l=!1}else Ke!==null&&(da(Ke),Ke=null),l=!0;if(!l)return t.flags&65536?t:null}return t.flags&128?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,t.mode&1&&(e===null||Y.current&1?re===0&&(re=3):us())),t.updateQueue!==null&&(t.flags|=4),me(t),null);case 4:return Ln(),oa(e,t),e===null&&vr(t.stateNode.containerInfo),me(t),null;case 10:return Ya(t.type._context),me(t),null;case 17:return ze(t.type)&&To(),me(t),null;case 19:if(W(Y),l=t.memoizedState,l===null)return me(t),null;if(r=(t.flags&128)!==0,i=l.rendering,i===null)if(r)Kn(l,!1);else{if(re!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(i=Ao(e),i!==null){for(t.flags|=128,Kn(l,!1),r=i.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)l=n,e=r,l.flags&=14680066,i=l.alternate,i===null?(l.childLanes=0,l.lanes=e,l.child=null,l.subtreeFlags=0,l.memoizedProps=null,l.memoizedState=null,l.updateQueue=null,l.dependencies=null,l.stateNode=null):(l.childLanes=i.childLanes,l.lanes=i.lanes,l.child=i.child,l.subtreeFlags=0,l.deletions=null,l.memoizedProps=i.memoizedProps,l.memoizedState=i.memoizedState,l.updateQueue=i.updateQueue,l.type=i.type,e=i.dependencies,l.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return B(Y,Y.current&1|2),t.child}e=e.sibling}l.tail!==null&&q()>Mn&&(t.flags|=128,r=!0,Kn(l,!1),t.lanes=4194304)}else{if(!r)if(e=Ao(i),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),Kn(l,!0),l.tail===null&&l.tailMode==="hidden"&&!i.alternate&&!Q)return me(t),null}else 2*q()-l.renderingStartTime>Mn&&n!==1073741824&&(t.flags|=128,r=!0,Kn(l,!1),t.lanes=4194304);l.isBackwards?(i.sibling=t.child,t.child=i):(n=l.last,n!==null?n.sibling=i:t.child=i,l.last=i)}return l.tail!==null?(t=l.tail,l.rendering=t,l.tail=t.sibling,l.renderingStartTime=q(),t.sibling=null,n=Y.current,B(Y,r?n&1|2:n&1),t):(me(t),null);case 22:case 23:return ss(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&t.mode&1?_e&1073741824&&(me(t),t.subtreeFlags&6&&(t.flags|=8192)):me(t),null;case 24:return null;case 25:return null}throw Error(S(156,t.tag))}function gp(e,t){switch(Va(t),t.tag){case 1:return ze(t.type)&&To(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return Ln(),W(Ee),W(ve),Ja(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return Za(t),null;case 13:if(W(Y),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(S(340));_n()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return W(Y),null;case 4:return Ln(),null;case 10:return Ya(t.type._context),null;case 22:case 23:return ss(),null;case 24:return null;default:return null}}var to=!1,ge=!1,vp=typeof WeakSet=="function"?WeakSet:Set,_=null;function vn(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){G(e,t,r)}else n.current=null}function la(e,t,n){try{n()}catch(r){G(e,t,r)}}var ju=!1;function yp(e,t){if(Vi=jo,e=a0(),Aa(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var o=r.anchorOffset,l=r.focusNode;r=r.focusOffset;try{n.nodeType,l.nodeType}catch{n=null;break e}var i=0,a=-1,s=-1,u=0,m=0,d=e,h=null;t:for(;;){for(var w;d!==n||o!==0&&d.nodeType!==3||(a=i+o),d!==l||r!==0&&d.nodeType!==3||(s=i+r),d.nodeType===3&&(i+=d.nodeValue.length),(w=d.firstChild)!==null;)h=d,d=w;for(;;){if(d===e)break t;if(h===n&&++u===o&&(a=i),h===l&&++m===r&&(s=i),(w=d.nextSibling)!==null)break;d=h,h=d.parentNode}d=w}n=a===-1||s===-1?null:{start:a,end:s}}else n=null}n=n||{start:0,end:0}}else n=null;for(Wi={focusedElem:e,selectionRange:n},jo=!1,_=t;_!==null;)if(t=_,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,_=e;else for(;_!==null;){t=_;try{var y=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(y!==null){var v=y.memoizedProps,C=y.memoizedState,f=t.stateNode,c=f.getSnapshotBeforeUpdate(t.elementType===t.type?v:Qe(t.type,v),C);f.__reactInternalSnapshotBeforeUpdate=c}break;case 3:var p=t.stateNode.containerInfo;p.nodeType===1?p.textContent="":p.nodeType===9&&p.documentElement&&p.removeChild(p.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(S(163))}}catch(x){G(t,t.return,x)}if(e=t.sibling,e!==null){e.return=t.return,_=e;break}_=t.return}return y=ju,ju=!1,y}function ir(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var o=r=r.next;do{if((o.tag&e)===e){var l=o.destroy;o.destroy=void 0,l!==void 0&&la(t,n,l)}o=o.next}while(o!==r)}}function il(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function ia(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function o1(e){var t=e.alternate;t!==null&&(e.alternate=null,o1(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[tt],delete t[xr],delete t[Yi],delete t[ep],delete t[tp])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function l1(e){return e.tag===5||e.tag===3||e.tag===4}function Lu(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||l1(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function aa(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=Mo));else if(r!==4&&(e=e.child,e!==null))for(aa(e,t,n),e=e.sibling;e!==null;)aa(e,t,n),e=e.sibling}function sa(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(sa(e,t,n),e=e.sibling;e!==null;)sa(e,t,n),e=e.sibling}var ue=null,Ye=!1;function vt(e,t,n){for(n=n.child;n!==null;)i1(e,t,n),n=n.sibling}function i1(e,t,n){if(rt&&typeof rt.onCommitFiberUnmount=="function")try{rt.onCommitFiberUnmount(qo,n)}catch{}switch(n.tag){case 5:ge||vn(n,t);case 6:var r=ue,o=Ye;ue=null,vt(e,t,n),ue=r,Ye=o,ue!==null&&(Ye?(e=ue,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):ue.removeChild(n.stateNode));break;case 18:ue!==null&&(Ye?(e=ue,n=n.stateNode,e.nodeType===8?ri(e.parentNode,n):e.nodeType===1&&ri(e,n),mr(e)):ri(ue,n.stateNode));break;case 4:r=ue,o=Ye,ue=n.stateNode.containerInfo,Ye=!0,vt(e,t,n),ue=r,Ye=o;break;case 0:case 11:case 14:case 15:if(!ge&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){o=r=r.next;do{var l=o,i=l.destroy;l=l.tag,i!==void 0&&(l&2||l&4)&&la(n,t,i),o=o.next}while(o!==r)}vt(e,t,n);break;case 1:if(!ge&&(vn(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(a){G(n,t,a)}vt(e,t,n);break;case 21:vt(e,t,n);break;case 22:n.mode&1?(ge=(r=ge)||n.memoizedState!==null,vt(e,t,n),ge=r):vt(e,t,n);break;default:vt(e,t,n)}}function Ru(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new vp),t.forEach(function(r){var o=Pp.bind(null,e,r);n.has(r)||(n.add(r),r.then(o,o))})}}function He(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var o=n[r];try{var l=e,i=t,a=i;e:for(;a!==null;){switch(a.tag){case 5:ue=a.stateNode,Ye=!1;break e;case 3:ue=a.stateNode.containerInfo,Ye=!0;break e;case 4:ue=a.stateNode.containerInfo,Ye=!0;break e}a=a.return}if(ue===null)throw Error(S(160));i1(l,i,o),ue=null,Ye=!1;var s=o.alternate;s!==null&&(s.return=null),o.return=null}catch(u){G(o,t,u)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)a1(t,e),t=t.sibling}function a1(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(He(t,e),Je(e),r&4){try{ir(3,e,e.return),il(3,e)}catch(v){G(e,e.return,v)}try{ir(5,e,e.return)}catch(v){G(e,e.return,v)}}break;case 1:He(t,e),Je(e),r&512&&n!==null&&vn(n,n.return);break;case 5:if(He(t,e),Je(e),r&512&&n!==null&&vn(n,n.return),e.flags&32){var o=e.stateNode;try{cr(o,"")}catch(v){G(e,e.return,v)}}if(r&4&&(o=e.stateNode,o!=null)){var l=e.memoizedProps,i=n!==null?n.memoizedProps:l,a=e.type,s=e.updateQueue;if(e.updateQueue=null,s!==null)try{a==="input"&&l.type==="radio"&&l.name!=null&&_c(o,l),Mi(a,i);var u=Mi(a,l);for(i=0;i<s.length;i+=2){var m=s[i],d=s[i+1];m==="style"?Tc(o,d):m==="dangerouslySetInnerHTML"?Rc(o,d):m==="children"?cr(o,d):Pa(o,m,d,u)}switch(a){case"input":Pi(o,l);break;case"textarea":jc(o,l);break;case"select":var h=o._wrapperState.wasMultiple;o._wrapperState.wasMultiple=!!l.multiple;var w=l.value;w!=null?xn(o,!!l.multiple,w,!1):h!==!!l.multiple&&(l.defaultValue!=null?xn(o,!!l.multiple,l.defaultValue,!0):xn(o,!!l.multiple,l.multiple?[]:"",!1))}o[xr]=l}catch(v){G(e,e.return,v)}}break;case 6:if(He(t,e),Je(e),r&4){if(e.stateNode===null)throw Error(S(162));o=e.stateNode,l=e.memoizedProps;try{o.nodeValue=l}catch(v){G(e,e.return,v)}}break;case 3:if(He(t,e),Je(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{mr(t.containerInfo)}catch(v){G(e,e.return,v)}break;case 4:He(t,e),Je(e);break;case 13:He(t,e),Je(e),o=e.child,o.flags&8192&&(l=o.memoizedState!==null,o.stateNode.isHidden=l,!l||o.alternate!==null&&o.alternate.memoizedState!==null||(is=q())),r&4&&Ru(e);break;case 22:if(m=n!==null&&n.memoizedState!==null,e.mode&1?(ge=(u=ge)||m,He(t,e),ge=u):He(t,e),Je(e),r&8192){if(u=e.memoizedState!==null,(e.stateNode.isHidden=u)&&!m&&e.mode&1)for(_=e,m=e.child;m!==null;){for(d=_=m;_!==null;){switch(h=_,w=h.child,h.tag){case 0:case 11:case 14:case 15:ir(4,h,h.return);break;case 1:vn(h,h.return);var y=h.stateNode;if(typeof y.componentWillUnmount=="function"){r=h,n=h.return;try{t=r,y.props=t.memoizedProps,y.state=t.memoizedState,y.componentWillUnmount()}catch(v){G(r,n,v)}}break;case 5:vn(h,h.return);break;case 22:if(h.memoizedState!==null){Tu(d);continue}}w!==null?(w.return=h,_=w):Tu(d)}m=m.sibling}e:for(m=null,d=e;;){if(d.tag===5){if(m===null){m=d;try{o=d.stateNode,u?(l=o.style,typeof l.setProperty=="function"?l.setProperty("display","none","important"):l.display="none"):(a=d.stateNode,s=d.memoizedProps.style,i=s!=null&&s.hasOwnProperty("display")?s.display:null,a.style.display=Mc("display",i))}catch(v){G(e,e.return,v)}}}else if(d.tag===6){if(m===null)try{d.stateNode.nodeValue=u?"":d.memoizedProps}catch(v){G(e,e.return,v)}}else if((d.tag!==22&&d.tag!==23||d.memoizedState===null||d===e)&&d.child!==null){d.child.return=d,d=d.child;continue}if(d===e)break e;for(;d.sibling===null;){if(d.return===null||d.return===e)break e;m===d&&(m=null),d=d.return}m===d&&(m=null),d.sibling.return=d.return,d=d.sibling}}break;case 19:He(t,e),Je(e),r&4&&Ru(e);break;case 21:break;default:He(t,e),Je(e)}}function Je(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(l1(n)){var r=n;break e}n=n.return}throw Error(S(160))}switch(r.tag){case 5:var o=r.stateNode;r.flags&32&&(cr(o,""),r.flags&=-33);var l=Lu(e);sa(e,l,o);break;case 3:case 4:var i=r.stateNode.containerInfo,a=Lu(e);aa(e,a,i);break;default:throw Error(S(161))}}catch(s){G(e,e.return,s)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function xp(e,t,n){_=e,s1(e)}function s1(e,t,n){for(var r=(e.mode&1)!==0;_!==null;){var o=_,l=o.child;if(o.tag===22&&r){var i=o.memoizedState!==null||to;if(!i){var a=o.alternate,s=a!==null&&a.memoizedState!==null||ge;a=to;var u=ge;if(to=i,(ge=s)&&!u)for(_=o;_!==null;)i=_,s=i.child,i.tag===22&&i.memoizedState!==null?Ou(o):s!==null?(s.return=i,_=s):Ou(o);for(;l!==null;)_=l,s1(l),l=l.sibling;_=o,to=a,ge=u}Mu(e)}else o.subtreeFlags&8772&&l!==null?(l.return=o,_=l):Mu(e)}}function Mu(e){for(;_!==null;){var t=_;if(t.flags&8772){var n=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:ge||il(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!ge)if(n===null)r.componentDidMount();else{var o=t.elementType===t.type?n.memoizedProps:Qe(t.type,n.memoizedProps);r.componentDidUpdate(o,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var l=t.updateQueue;l!==null&&hu(t,l,r);break;case 3:var i=t.updateQueue;if(i!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}hu(t,i,n)}break;case 5:var a=t.stateNode;if(n===null&&t.flags&4){n=a;var s=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":s.autoFocus&&n.focus();break;case"img":s.src&&(n.src=s.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var u=t.alternate;if(u!==null){var m=u.memoizedState;if(m!==null){var d=m.dehydrated;d!==null&&mr(d)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(S(163))}ge||t.flags&512&&ia(t)}catch(h){G(t,t.return,h)}}if(t===e){_=null;break}if(n=t.sibling,n!==null){n.return=t.return,_=n;break}_=t.return}}function Tu(e){for(;_!==null;){var t=_;if(t===e){_=null;break}var n=t.sibling;if(n!==null){n.return=t.return,_=n;break}_=t.return}}function Ou(e){for(;_!==null;){var t=_;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{il(4,t)}catch(s){G(t,n,s)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var o=t.return;try{r.componentDidMount()}catch(s){G(t,o,s)}}var l=t.return;try{ia(t)}catch(s){G(t,l,s)}break;case 5:var i=t.return;try{ia(t)}catch(s){G(t,i,s)}}}catch(s){G(t,t.return,s)}if(t===e){_=null;break}var a=t.sibling;if(a!==null){a.return=t.return,_=a;break}_=t.return}}var wp=Math.ceil,Wo=gt.ReactCurrentDispatcher,os=gt.ReactCurrentOwner,Ue=gt.ReactCurrentBatchConfig,I=0,ae=null,ee=null,fe=0,_e=0,yn=Dt(0),re=0,zr=null,bt=0,al=0,ls=0,ar=null,ke=null,is=0,Mn=1/0,it=null,Ho=!1,ua=null,Lt=null,no=!1,Ct=null,Qo=0,sr=0,ca=null,vo=-1,yo=0;function xe(){return I&6?q():vo!==-1?vo:vo=q()}function Rt(e){return e.mode&1?I&2&&fe!==0?fe&-fe:rp.transition!==null?(yo===0&&(yo=Qc()),yo):(e=D,e!==0||(e=window.event,e=e===void 0?16:qc(e.type)),e):1}function Ge(e,t,n,r){if(50<sr)throw sr=0,ca=null,Error(S(185));Tr(e,n,r),(!(I&2)||e!==ae)&&(e===ae&&(!(I&2)&&(al|=n),re===4&&St(e,fe)),Ne(e,r),n===1&&I===0&&!(t.mode&1)&&(Mn=q()+500,rl&&Ut()))}function Ne(e,t){var n=e.callbackNode;rd(e,t);var r=_o(e,e===ae?fe:0);if(r===0)n!==null&&Ws(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&Ws(n),t===1)e.tag===0?np(Iu.bind(null,e)):v0(Iu.bind(null,e)),qd(function(){!(I&6)&&Ut()}),n=null;else{switch(Yc(r)){case 1:n=Ma;break;case 4:n=Wc;break;case 16:n=Po;break;case 536870912:n=Hc;break;default:n=Po}n=g1(n,u1.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function u1(e,t){if(vo=-1,yo=0,I&6)throw Error(S(327));var n=e.callbackNode;if(En()&&e.callbackNode!==n)return null;var r=_o(e,e===ae?fe:0);if(r===0)return null;if(r&30||r&e.expiredLanes||t)t=Yo(e,r);else{t=r;var o=I;I|=2;var l=f1();(ae!==e||fe!==t)&&(it=null,Mn=q()+500,Xt(e,t));do try{Cp();break}catch(a){c1(e,a)}while(!0);Qa(),Wo.current=l,I=o,ee!==null?t=0:(ae=null,fe=0,t=re)}if(t!==0){if(t===2&&(o=Fi(e),o!==0&&(r=o,t=fa(e,o))),t===1)throw n=zr,Xt(e,0),St(e,r),Ne(e,q()),n;if(t===6)St(e,r);else{if(o=e.current.alternate,!(r&30)&&!Sp(o)&&(t=Yo(e,r),t===2&&(l=Fi(e),l!==0&&(r=l,t=fa(e,l))),t===1))throw n=zr,Xt(e,0),St(e,r),Ne(e,q()),n;switch(e.finishedWork=o,e.finishedLanes=r,t){case 0:case 1:throw Error(S(345));case 2:Ht(e,ke,it);break;case 3:if(St(e,r),(r&130023424)===r&&(t=is+500-q(),10<t)){if(_o(e,0)!==0)break;if(o=e.suspendedLanes,(o&r)!==r){xe(),e.pingedLanes|=e.suspendedLanes&o;break}e.timeoutHandle=Qi(Ht.bind(null,e,ke,it),t);break}Ht(e,ke,it);break;case 4:if(St(e,r),(r&4194240)===r)break;for(t=e.eventTimes,o=-1;0<r;){var i=31-Xe(r);l=1<<i,i=t[i],i>o&&(o=i),r&=~l}if(r=o,r=q()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*wp(r/1960))-r,10<r){e.timeoutHandle=Qi(Ht.bind(null,e,ke,it),r);break}Ht(e,ke,it);break;case 5:Ht(e,ke,it);break;default:throw Error(S(329))}}}return Ne(e,q()),e.callbackNode===n?u1.bind(null,e):null}function fa(e,t){var n=ar;return e.current.memoizedState.isDehydrated&&(Xt(e,t).flags|=256),e=Yo(e,t),e!==2&&(t=ke,ke=n,t!==null&&da(t)),e}function da(e){ke===null?ke=e:ke.push.apply(ke,e)}function Sp(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var o=n[r],l=o.getSnapshot;o=o.value;try{if(!Ze(l(),o))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function St(e,t){for(t&=~ls,t&=~al,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-Xe(t),r=1<<n;e[n]=-1,t&=~r}}function Iu(e){if(I&6)throw Error(S(327));En();var t=_o(e,0);if(!(t&1))return Ne(e,q()),null;var n=Yo(e,t);if(e.tag!==0&&n===2){var r=Fi(e);r!==0&&(t=r,n=fa(e,r))}if(n===1)throw n=zr,Xt(e,0),St(e,t),Ne(e,q()),n;if(n===6)throw Error(S(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,Ht(e,ke,it),Ne(e,q()),null}function as(e,t){var n=I;I|=1;try{return e(t)}finally{I=n,I===0&&(Mn=q()+500,rl&&Ut())}}function en(e){Ct!==null&&Ct.tag===0&&!(I&6)&&En();var t=I;I|=1;var n=Ue.transition,r=D;try{if(Ue.transition=null,D=1,e)return e()}finally{D=r,Ue.transition=n,I=t,!(I&6)&&Ut()}}function ss(){_e=yn.current,W(yn)}function Xt(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,Jd(n)),ee!==null)for(n=ee.return;n!==null;){var r=n;switch(Va(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&To();break;case 3:Ln(),W(Ee),W(ve),Ja();break;case 5:Za(r);break;case 4:Ln();break;case 13:W(Y);break;case 19:W(Y);break;case 10:Ya(r.type._context);break;case 22:case 23:ss()}n=n.return}if(ae=e,ee=e=Mt(e.current,null),fe=_e=t,re=0,zr=null,ls=al=bt=0,ke=ar=null,Yt!==null){for(t=0;t<Yt.length;t++)if(n=Yt[t],r=n.interleaved,r!==null){n.interleaved=null;var o=r.next,l=n.pending;if(l!==null){var i=l.next;l.next=o,r.next=i}n.pending=r}Yt=null}return e}function c1(e,t){do{var n=ee;try{if(Qa(),mo.current=Vo,Bo){for(var r=K.memoizedState;r!==null;){var o=r.queue;o!==null&&(o.pending=null),r=r.next}Bo=!1}if(qt=0,ie=ne=K=null,lr=!1,kr=0,os.current=null,n===null||n.return===null){re=1,zr=t,ee=null;break}e:{var l=e,i=n.return,a=n,s=t;if(t=fe,a.flags|=32768,s!==null&&typeof s=="object"&&typeof s.then=="function"){var u=s,m=a,d=m.tag;if(!(m.mode&1)&&(d===0||d===11||d===15)){var h=m.alternate;h?(m.updateQueue=h.updateQueue,m.memoizedState=h.memoizedState,m.lanes=h.lanes):(m.updateQueue=null,m.memoizedState=null)}var w=ku(i);if(w!==null){w.flags&=-257,Cu(w,i,a,l,t),w.mode&1&&Su(l,u,t),t=w,s=u;var y=t.updateQueue;if(y===null){var v=new Set;v.add(s),t.updateQueue=v}else y.add(s);break e}else{if(!(t&1)){Su(l,u,t),us();break e}s=Error(S(426))}}else if(Q&&a.mode&1){var C=ku(i);if(C!==null){!(C.flags&65536)&&(C.flags|=256),Cu(C,i,a,l,t),Wa(Rn(s,a));break e}}l=s=Rn(s,a),re!==4&&(re=2),ar===null?ar=[l]:ar.push(l),l=i;do{switch(l.tag){case 3:l.flags|=65536,t&=-t,l.lanes|=t;var f=K0(l,s,t);mu(l,f);break e;case 1:a=s;var c=l.type,p=l.stateNode;if(!(l.flags&128)&&(typeof c.getDerivedStateFromError=="function"||p!==null&&typeof p.componentDidCatch=="function"&&(Lt===null||!Lt.has(p)))){l.flags|=65536,t&=-t,l.lanes|=t;var x=X0(l,a,t);mu(l,x);break e}}l=l.return}while(l!==null)}p1(n)}catch(z){t=z,ee===n&&n!==null&&(ee=n=n.return);continue}break}while(!0)}function f1(){var e=Wo.current;return Wo.current=Vo,e===null?Vo:e}function us(){(re===0||re===3||re===2)&&(re=4),ae===null||!(bt&268435455)&&!(al&268435455)||St(ae,fe)}function Yo(e,t){var n=I;I|=2;var r=f1();(ae!==e||fe!==t)&&(it=null,Xt(e,t));do try{kp();break}catch(o){c1(e,o)}while(!0);if(Qa(),I=n,Wo.current=r,ee!==null)throw Error(S(261));return ae=null,fe=0,re}function kp(){for(;ee!==null;)d1(ee)}function Cp(){for(;ee!==null&&!Xf();)d1(ee)}function d1(e){var t=h1(e.alternate,e,_e);e.memoizedProps=e.pendingProps,t===null?p1(e):ee=t,os.current=null}function p1(e){var t=e;do{var n=t.alternate;if(e=t.return,t.flags&32768){if(n=gp(n,t),n!==null){n.flags&=32767,ee=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{re=6,ee=null;return}}else if(n=hp(n,t,_e),n!==null){ee=n;return}if(t=t.sibling,t!==null){ee=t;return}ee=t=e}while(t!==null);re===0&&(re=5)}function Ht(e,t,n){var r=D,o=Ue.transition;try{Ue.transition=null,D=1,Ep(e,t,n,r)}finally{Ue.transition=o,D=r}return null}function Ep(e,t,n,r){do En();while(Ct!==null);if(I&6)throw Error(S(327));n=e.finishedWork;var o=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(S(177));e.callbackNode=null,e.callbackPriority=0;var l=n.lanes|n.childLanes;if(od(e,l),e===ae&&(ee=ae=null,fe=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||no||(no=!0,g1(Po,function(){return En(),null})),l=(n.flags&15990)!==0,n.subtreeFlags&15990||l){l=Ue.transition,Ue.transition=null;var i=D;D=1;var a=I;I|=4,os.current=null,yp(e,n),a1(n,e),Hd(Wi),jo=!!Vi,Wi=Vi=null,e.current=n,xp(n),Gf(),I=a,D=i,Ue.transition=l}else e.current=n;if(no&&(no=!1,Ct=e,Qo=o),l=e.pendingLanes,l===0&&(Lt=null),qf(n.stateNode),Ne(e,q()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)o=t[n],r(o.value,{componentStack:o.stack,digest:o.digest});if(Ho)throw Ho=!1,e=ua,ua=null,e;return Qo&1&&e.tag!==0&&En(),l=e.pendingLanes,l&1?e===ca?sr++:(sr=0,ca=e):sr=0,Ut(),null}function En(){if(Ct!==null){var e=Yc(Qo),t=Ue.transition,n=D;try{if(Ue.transition=null,D=16>e?16:e,Ct===null)var r=!1;else{if(e=Ct,Ct=null,Qo=0,I&6)throw Error(S(331));var o=I;for(I|=4,_=e.current;_!==null;){var l=_,i=l.child;if(_.flags&16){var a=l.deletions;if(a!==null){for(var s=0;s<a.length;s++){var u=a[s];for(_=u;_!==null;){var m=_;switch(m.tag){case 0:case 11:case 15:ir(8,m,l)}var d=m.child;if(d!==null)d.return=m,_=d;else for(;_!==null;){m=_;var h=m.sibling,w=m.return;if(o1(m),m===u){_=null;break}if(h!==null){h.return=w,_=h;break}_=w}}}var y=l.alternate;if(y!==null){var v=y.child;if(v!==null){y.child=null;do{var C=v.sibling;v.sibling=null,v=C}while(v!==null)}}_=l}}if(l.subtreeFlags&2064&&i!==null)i.return=l,_=i;else e:for(;_!==null;){if(l=_,l.flags&2048)switch(l.tag){case 0:case 11:case 15:ir(9,l,l.return)}var f=l.sibling;if(f!==null){f.return=l.return,_=f;break e}_=l.return}}var c=e.current;for(_=c;_!==null;){i=_;var p=i.child;if(i.subtreeFlags&2064&&p!==null)p.return=i,_=p;else e:for(i=c;_!==null;){if(a=_,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:il(9,a)}}catch(z){G(a,a.return,z)}if(a===i){_=null;break e}var x=a.sibling;if(x!==null){x.return=a.return,_=x;break e}_=a.return}}if(I=o,Ut(),rt&&typeof rt.onPostCommitFiberRoot=="function")try{rt.onPostCommitFiberRoot(qo,e)}catch{}r=!0}return r}finally{D=n,Ue.transition=t}}return!1}function $u(e,t,n){t=Rn(n,t),t=K0(e,t,1),e=jt(e,t,1),t=xe(),e!==null&&(Tr(e,1,t),Ne(e,t))}function G(e,t,n){if(e.tag===3)$u(e,e,n);else for(;t!==null;){if(t.tag===3){$u(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(Lt===null||!Lt.has(r))){e=Rn(n,e),e=X0(t,e,1),t=jt(t,e,1),e=xe(),t!==null&&(Tr(t,1,e),Ne(t,e));break}}t=t.return}}function zp(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=xe(),e.pingedLanes|=e.suspendedLanes&n,ae===e&&(fe&n)===n&&(re===4||re===3&&(fe&130023424)===fe&&500>q()-is?Xt(e,0):ls|=n),Ne(e,t)}function m1(e,t){t===0&&(e.mode&1?(t=Yr,Yr<<=1,!(Yr&130023424)&&(Yr=4194304)):t=1);var n=xe();e=mt(e,t),e!==null&&(Tr(e,t,n),Ne(e,n))}function Np(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),m1(e,n)}function Pp(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,o=e.memoizedState;o!==null&&(n=o.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(S(314))}r!==null&&r.delete(t),m1(e,n)}var h1;h1=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||Ee.current)Ce=!0;else{if(!(e.lanes&n)&&!(t.flags&128))return Ce=!1,mp(e,t,n);Ce=!!(e.flags&131072)}else Ce=!1,Q&&t.flags&1048576&&y0(t,$o,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;go(e,t),e=t.pendingProps;var o=Pn(t,ve.current);Cn(t,n),o=ba(null,t,r,e,o,n);var l=es();return t.flags|=1,typeof o=="object"&&o!==null&&typeof o.render=="function"&&o.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,ze(r)?(l=!0,Oo(t)):l=!1,t.memoizedState=o.state!==null&&o.state!==void 0?o.state:null,Xa(t),o.updater=ol,t.stateNode=o,o._reactInternals=t,qi(t,r,e,n),t=ta(null,t,r,!0,l,n)):(t.tag=0,Q&&l&&Ba(t),ye(null,t,o,n),t=t.child),t;case 16:r=t.elementType;e:{switch(go(e,t),e=t.pendingProps,o=r._init,r=o(r._payload),t.type=r,o=t.tag=jp(r),e=Qe(r,e),o){case 0:t=ea(null,t,r,e,n);break e;case 1:t=Nu(null,t,r,e,n);break e;case 11:t=Eu(null,t,r,e,n);break e;case 14:t=zu(null,t,r,Qe(r.type,e),n);break e}throw Error(S(306,r,""))}return t;case 0:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:Qe(r,o),ea(e,t,r,o,n);case 1:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:Qe(r,o),Nu(e,t,r,o,n);case 3:e:{if(q0(t),e===null)throw Error(S(387));r=t.pendingProps,l=t.memoizedState,o=l.element,k0(e,t),Uo(t,r,null,n);var i=t.memoizedState;if(r=i.element,l.isDehydrated)if(l={element:r,isDehydrated:!1,cache:i.cache,pendingSuspenseBoundaries:i.pendingSuspenseBoundaries,transitions:i.transitions},t.updateQueue.baseState=l,t.memoizedState=l,t.flags&256){o=Rn(Error(S(423)),t),t=Pu(e,t,r,n,o);break e}else if(r!==o){o=Rn(Error(S(424)),t),t=Pu(e,t,r,n,o);break e}else for(je=_t(t.stateNode.containerInfo.firstChild),Le=t,Q=!0,Ke=null,n=N0(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(_n(),r===o){t=ht(e,t,n);break e}ye(e,t,r,n)}t=t.child}return t;case 5:return P0(t),e===null&&Gi(t),r=t.type,o=t.pendingProps,l=e!==null?e.memoizedProps:null,i=o.children,Hi(r,o)?i=null:l!==null&&Hi(r,l)&&(t.flags|=32),J0(e,t),ye(e,t,i,n),t.child;case 6:return e===null&&Gi(t),null;case 13:return b0(e,t,n);case 4:return Ga(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=jn(t,null,r,n):ye(e,t,r,n),t.child;case 11:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:Qe(r,o),Eu(e,t,r,o,n);case 7:return ye(e,t,t.pendingProps,n),t.child;case 8:return ye(e,t,t.pendingProps.children,n),t.child;case 12:return ye(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,o=t.pendingProps,l=t.memoizedProps,i=o.value,B(Fo,r._currentValue),r._currentValue=i,l!==null)if(Ze(l.value,i)){if(l.children===o.children&&!Ee.current){t=ht(e,t,n);break e}}else for(l=t.child,l!==null&&(l.return=t);l!==null;){var a=l.dependencies;if(a!==null){i=l.child;for(var s=a.firstContext;s!==null;){if(s.context===r){if(l.tag===1){s=ft(-1,n&-n),s.tag=2;var u=l.updateQueue;if(u!==null){u=u.shared;var m=u.pending;m===null?s.next=s:(s.next=m.next,m.next=s),u.pending=s}}l.lanes|=n,s=l.alternate,s!==null&&(s.lanes|=n),Zi(l.return,n,t),a.lanes|=n;break}s=s.next}}else if(l.tag===10)i=l.type===t.type?null:l.child;else if(l.tag===18){if(i=l.return,i===null)throw Error(S(341));i.lanes|=n,a=i.alternate,a!==null&&(a.lanes|=n),Zi(i,n,t),i=l.sibling}else i=l.child;if(i!==null)i.return=l;else for(i=l;i!==null;){if(i===t){i=null;break}if(l=i.sibling,l!==null){l.return=i.return,i=l;break}i=i.return}l=i}ye(e,t,o.children,n),t=t.child}return t;case 9:return o=t.type,r=t.pendingProps.children,Cn(t,n),o=Ae(o),r=r(o),t.flags|=1,ye(e,t,r,n),t.child;case 14:return r=t.type,o=Qe(r,t.pendingProps),o=Qe(r.type,o),zu(e,t,r,o,n);case 15:return G0(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:Qe(r,o),go(e,t),t.tag=1,ze(r)?(e=!0,Oo(t)):e=!1,Cn(t,n),E0(t,r,o),qi(t,r,o,n),ta(null,t,r,!0,e,n);case 19:return e1(e,t,n);case 22:return Z0(e,t,n)}throw Error(S(156,t.tag))};function g1(e,t){return Vc(e,t)}function _p(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function De(e,t,n,r){return new _p(e,t,n,r)}function cs(e){return e=e.prototype,!(!e||!e.isReactComponent)}function jp(e){if(typeof e=="function")return cs(e)?1:0;if(e!=null){if(e=e.$$typeof,e===ja)return 11;if(e===La)return 14}return 2}function Mt(e,t){var n=e.alternate;return n===null?(n=De(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function xo(e,t,n,r,o,l){var i=2;if(r=e,typeof e=="function")cs(e)&&(i=1);else if(typeof e=="string")i=5;else e:switch(e){case sn:return Gt(n.children,o,l,t);case _a:i=8,o|=8;break;case ki:return e=De(12,n,t,o|2),e.elementType=ki,e.lanes=l,e;case Ci:return e=De(13,n,t,o),e.elementType=Ci,e.lanes=l,e;case Ei:return e=De(19,n,t,o),e.elementType=Ei,e.lanes=l,e;case zc:return sl(n,o,l,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case Cc:i=10;break e;case Ec:i=9;break e;case ja:i=11;break e;case La:i=14;break e;case yt:i=16,r=null;break e}throw Error(S(130,e==null?e:typeof e,""))}return t=De(i,n,t,o),t.elementType=e,t.type=r,t.lanes=l,t}function Gt(e,t,n,r){return e=De(7,e,r,t),e.lanes=n,e}function sl(e,t,n,r){return e=De(22,e,r,t),e.elementType=zc,e.lanes=n,e.stateNode={isHidden:!1},e}function fi(e,t,n){return e=De(6,e,null,t),e.lanes=n,e}function di(e,t,n){return t=De(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function Lp(e,t,n,r,o){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Yl(0),this.expirationTimes=Yl(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Yl(0),this.identifierPrefix=r,this.onRecoverableError=o,this.mutableSourceEagerHydrationData=null}function fs(e,t,n,r,o,l,i,a,s){return e=new Lp(e,t,n,a,s),t===1?(t=1,l===!0&&(t|=8)):t=0,l=De(3,null,null,t),e.current=l,l.stateNode=e,l.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Xa(l),e}function Rp(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:an,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function v1(e){if(!e)return $t;e=e._reactInternals;e:{if(nn(e)!==e||e.tag!==1)throw Error(S(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(ze(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(S(171))}if(e.tag===1){var n=e.type;if(ze(n))return g0(e,n,t)}return t}function y1(e,t,n,r,o,l,i,a,s){return e=fs(n,r,!0,e,o,l,i,a,s),e.context=v1(null),n=e.current,r=xe(),o=Rt(n),l=ft(r,o),l.callback=t??null,jt(n,l,o),e.current.lanes=o,Tr(e,o,r),Ne(e,r),e}function ul(e,t,n,r){var o=t.current,l=xe(),i=Rt(o);return n=v1(n),t.context===null?t.context=n:t.pendingContext=n,t=ft(l,i),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=jt(o,t,i),e!==null&&(Ge(e,o,i,l),po(e,o,i)),i}function Ko(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function Fu(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function ds(e,t){Fu(e,t),(e=e.alternate)&&Fu(e,t)}function Mp(){return null}var x1=typeof reportError=="function"?reportError:function(e){console.error(e)};function ps(e){this._internalRoot=e}cl.prototype.render=ps.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(S(409));ul(e,t,null,null)};cl.prototype.unmount=ps.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;en(function(){ul(null,e,null,null)}),t[pt]=null}};function cl(e){this._internalRoot=e}cl.prototype.unstable_scheduleHydration=function(e){if(e){var t=Gc();e={blockedOn:null,target:e,priority:t};for(var n=0;n<wt.length&&t!==0&&t<wt[n].priority;n++);wt.splice(n,0,e),n===0&&Jc(e)}};function ms(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function fl(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function Du(){}function Tp(e,t,n,r,o){if(o){if(typeof r=="function"){var l=r;r=function(){var u=Ko(i);l.call(u)}}var i=y1(t,r,e,0,null,!1,!1,"",Du);return e._reactRootContainer=i,e[pt]=i.current,vr(e.nodeType===8?e.parentNode:e),en(),i}for(;o=e.lastChild;)e.removeChild(o);if(typeof r=="function"){var a=r;r=function(){var u=Ko(s);a.call(u)}}var s=fs(e,0,!1,null,null,!1,!1,"",Du);return e._reactRootContainer=s,e[pt]=s.current,vr(e.nodeType===8?e.parentNode:e),en(function(){ul(t,s,n,r)}),s}function dl(e,t,n,r,o){var l=n._reactRootContainer;if(l){var i=l;if(typeof o=="function"){var a=o;o=function(){var s=Ko(i);a.call(s)}}ul(t,i,e,o)}else i=Tp(n,t,e,o,r);return Ko(i)}Kc=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=qn(t.pendingLanes);n!==0&&(Ta(t,n|1),Ne(t,q()),!(I&6)&&(Mn=q()+500,Ut()))}break;case 13:en(function(){var r=mt(e,1);if(r!==null){var o=xe();Ge(r,e,1,o)}}),ds(e,1)}};Oa=function(e){if(e.tag===13){var t=mt(e,134217728);if(t!==null){var n=xe();Ge(t,e,134217728,n)}ds(e,134217728)}};Xc=function(e){if(e.tag===13){var t=Rt(e),n=mt(e,t);if(n!==null){var r=xe();Ge(n,e,t,r)}ds(e,t)}};Gc=function(){return D};Zc=function(e,t){var n=D;try{return D=e,t()}finally{D=n}};Oi=function(e,t,n){switch(t){case"input":if(Pi(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var o=nl(r);if(!o)throw Error(S(90));Pc(r),Pi(r,o)}}}break;case"textarea":jc(e,n);break;case"select":t=n.value,t!=null&&xn(e,!!n.multiple,t,!1)}};$c=as;Fc=en;var Op={usingClientEntryPoint:!1,Events:[Ir,dn,nl,Oc,Ic,as]},Xn={findFiberByHostInstance:Qt,bundleType:0,version:"18.2.0",rendererPackageName:"react-dom"},Ip={bundleType:Xn.bundleType,version:Xn.version,rendererPackageName:Xn.rendererPackageName,rendererConfig:Xn.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:gt.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=Ac(e),e===null?null:e.stateNode},findFiberByHostInstance:Xn.findFiberByHostInstance||Mp,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.2.0-next-9e3b772b8-20220608"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var ro=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!ro.isDisabled&&ro.supportsFiber)try{qo=ro.inject(Ip),rt=ro}catch{}}Te.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Op;Te.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!ms(t))throw Error(S(200));return Rp(e,t,null,n)};Te.createRoot=function(e,t){if(!ms(e))throw Error(S(299));var n=!1,r="",o=x1;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(o=t.onRecoverableError)),t=fs(e,1,!1,null,null,n,!1,r,o),e[pt]=t.current,vr(e.nodeType===8?e.parentNode:e),new ps(t)};Te.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(S(188)):(e=Object.keys(e).join(","),Error(S(268,e)));return e=Ac(t),e=e===null?null:e.stateNode,e};Te.flushSync=function(e){return en(e)};Te.hydrate=function(e,t,n){if(!fl(t))throw Error(S(200));return dl(null,e,t,!0,n)};Te.hydrateRoot=function(e,t,n){if(!ms(e))throw Error(S(405));var r=n!=null&&n.hydratedSources||null,o=!1,l="",i=x1;if(n!=null&&(n.unstable_strictMode===!0&&(o=!0),n.identifierPrefix!==void 0&&(l=n.identifierPrefix),n.onRecoverableError!==void 0&&(i=n.onRecoverableError)),t=y1(t,null,e,1,n??null,o,!1,l,i),e[pt]=t.current,vr(e),r)for(e=0;e<r.length;e++)n=r[e],o=n._getVersion,o=o(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,o]:t.mutableSourceEagerHydrationData.push(n,o);return new cl(t)};Te.render=function(e,t,n){if(!fl(t))throw Error(S(200));return dl(null,e,t,!1,n)};Te.unmountComponentAtNode=function(e){if(!fl(e))throw Error(S(40));return e._reactRootContainer?(en(function(){dl(null,null,e,!1,function(){e._reactRootContainer=null,e[pt]=null})}),!0):!1};Te.unstable_batchedUpdates=as;Te.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!fl(n))throw Error(S(200));if(e==null||e._reactInternals===void 0)throw Error(S(38));return dl(e,t,n,!1,r)};Te.version="18.2.0-next-9e3b772b8-20220608";function w1(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(w1)}catch(e){console.error(e)}}w1(),yc.exports=Te;var $p=yc.exports,Uu=$p;wi.createRoot=Uu.createRoot,wi.hydrateRoot=Uu.hydrateRoot;/**
 * @remix-run/router v1.14.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Nr(){return Nr=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Nr.apply(this,arguments)}var Et;(function(e){e.Pop="POP",e.Push="PUSH",e.Replace="REPLACE"})(Et||(Et={}));const Au="popstate";function Fp(e){e===void 0&&(e={});function t(r,o){let{pathname:l,search:i,hash:a}=r.location;return pa("",{pathname:l,search:i,hash:a},o.state&&o.state.usr||null,o.state&&o.state.key||"default")}function n(r,o){return typeof o=="string"?o:Xo(o)}return Up(t,n,null,e)}function te(e,t){if(e===!1||e===null||typeof e>"u")throw new Error(t)}function hs(e,t){if(!e){typeof console<"u"&&console.warn(t);try{throw new Error(t)}catch{}}}function Dp(){return Math.random().toString(36).substr(2,8)}function Bu(e,t){return{usr:e.state,key:e.key,idx:t}}function pa(e,t,n,r){return n===void 0&&(n=null),Nr({pathname:typeof e=="string"?e:e.pathname,search:"",hash:""},typeof t=="string"?Fn(t):t,{state:n,key:t&&t.key||r||Dp()})}function Xo(e){let{pathname:t="/",search:n="",hash:r=""}=e;return n&&n!=="?"&&(t+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(t+=r.charAt(0)==="#"?r:"#"+r),t}function Fn(e){let t={};if(e){let n=e.indexOf("#");n>=0&&(t.hash=e.substr(n),e=e.substr(0,n));let r=e.indexOf("?");r>=0&&(t.search=e.substr(r),e=e.substr(0,r)),e&&(t.pathname=e)}return t}function Up(e,t,n,r){r===void 0&&(r={});let{window:o=document.defaultView,v5Compat:l=!1}=r,i=o.history,a=Et.Pop,s=null,u=m();u==null&&(u=0,i.replaceState(Nr({},i.state,{idx:u}),""));function m(){return(i.state||{idx:null}).idx}function d(){a=Et.Pop;let C=m(),f=C==null?null:C-u;u=C,s&&s({action:a,location:v.location,delta:f})}function h(C,f){a=Et.Push;let c=pa(v.location,C,f);n&&n(c,C),u=m()+1;let p=Bu(c,u),x=v.createHref(c);try{i.pushState(p,"",x)}catch(z){if(z instanceof DOMException&&z.name==="DataCloneError")throw z;o.location.assign(x)}l&&s&&s({action:a,location:v.location,delta:1})}function w(C,f){a=Et.Replace;let c=pa(v.location,C,f);n&&n(c,C),u=m();let p=Bu(c,u),x=v.createHref(c);i.replaceState(p,"",x),l&&s&&s({action:a,location:v.location,delta:0})}function y(C){let f=o.location.origin!=="null"?o.location.origin:o.location.href,c=typeof C=="string"?C:Xo(C);return te(f,"No window.location.(origin|href) available to create URL for href: "+c),new URL(c,f)}let v={get action(){return a},get location(){return e(o,i)},listen(C){if(s)throw new Error("A history only accepts one active listener");return o.addEventListener(Au,d),s=C,()=>{o.removeEventListener(Au,d),s=null}},createHref(C){return t(o,C)},createURL:y,encodeLocation(C){let f=y(C);return{pathname:f.pathname,search:f.search,hash:f.hash}},push:h,replace:w,go(C){return i.go(C)}};return v}var Vu;(function(e){e.data="data",e.deferred="deferred",e.redirect="redirect",e.error="error"})(Vu||(Vu={}));function Ap(e,t,n){n===void 0&&(n="/");let r=typeof t=="string"?Fn(t):t,o=gs(r.pathname||"/",n);if(o==null)return null;let l=S1(e);Bp(l);let i=null;for(let a=0;i==null&&a<l.length;++a)i=Zp(l[a],bp(o));return i}function S1(e,t,n,r){t===void 0&&(t=[]),n===void 0&&(n=[]),r===void 0&&(r="");let o=(l,i,a)=>{let s={relativePath:a===void 0?l.path||"":a,caseSensitive:l.caseSensitive===!0,childrenIndex:i,route:l};s.relativePath.startsWith("/")&&(te(s.relativePath.startsWith(r),'Absolute route path "'+s.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),s.relativePath=s.relativePath.slice(r.length));let u=Tt([r,s.relativePath]),m=n.concat(s);l.children&&l.children.length>0&&(te(l.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+u+'".')),S1(l.children,t,m,u)),!(l.path==null&&!l.index)&&t.push({path:u,score:Xp(u,l.index),routesMeta:m})};return e.forEach((l,i)=>{var a;if(l.path===""||!((a=l.path)!=null&&a.includes("?")))o(l,i);else for(let s of k1(l.path))o(l,i,s)}),t}function k1(e){let t=e.split("/");if(t.length===0)return[];let[n,...r]=t,o=n.endsWith("?"),l=n.replace(/\?$/,"");if(r.length===0)return o?[l,""]:[l];let i=k1(r.join("/")),a=[];return a.push(...i.map(s=>s===""?l:[l,s].join("/"))),o&&a.push(...i),a.map(s=>e.startsWith("/")&&s===""?"/":s)}function Bp(e){e.sort((t,n)=>t.score!==n.score?n.score-t.score:Gp(t.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const Vp=/^:\w+$/,Wp=3,Hp=2,Qp=1,Yp=10,Kp=-2,Wu=e=>e==="*";function Xp(e,t){let n=e.split("/"),r=n.length;return n.some(Wu)&&(r+=Kp),t&&(r+=Hp),n.filter(o=>!Wu(o)).reduce((o,l)=>o+(Vp.test(l)?Wp:l===""?Qp:Yp),r)}function Gp(e,t){return e.length===t.length&&e.slice(0,-1).every((r,o)=>r===t[o])?e[e.length-1]-t[t.length-1]:0}function Zp(e,t){let{routesMeta:n}=e,r={},o="/",l=[];for(let i=0;i<n.length;++i){let a=n[i],s=i===n.length-1,u=o==="/"?t:t.slice(o.length)||"/",m=Jp({path:a.relativePath,caseSensitive:a.caseSensitive,end:s},u);if(!m)return null;Object.assign(r,m.params);let d=a.route;l.push({params:r,pathname:Tt([o,m.pathname]),pathnameBase:o2(Tt([o,m.pathnameBase])),route:d}),m.pathnameBase!=="/"&&(o=Tt([o,m.pathnameBase]))}return l}function Jp(e,t){typeof e=="string"&&(e={path:e,caseSensitive:!1,end:!0});let[n,r]=qp(e.path,e.caseSensitive,e.end),o=t.match(n);if(!o)return null;let l=o[0],i=l.replace(/(.)\/+$/,"$1"),a=o.slice(1);return{params:r.reduce((u,m,d)=>{let{paramName:h,isOptional:w}=m;if(h==="*"){let v=a[d]||"";i=l.slice(0,l.length-v.length).replace(/(.)\/+$/,"$1")}const y=a[d];return w&&!y?u[h]=void 0:u[h]=e2(y||"",h),u},{}),pathname:l,pathnameBase:i,pattern:e}}function qp(e,t,n){t===void 0&&(t=!1),n===void 0&&(n=!0),hs(e==="*"||!e.endsWith("*")||e.endsWith("/*"),'Route path "'+e+'" will be treated as if it were '+('"'+e.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+e.replace(/\*$/,"/*")+'".'));let r=[],o="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:(\w+)(\?)?/g,(i,a,s)=>(r.push({paramName:a,isOptional:s!=null}),s?"/?([^\\/]+)?":"/([^\\/]+)"));return e.endsWith("*")?(r.push({paramName:"*"}),o+=e==="*"||e==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?o+="\\/*$":e!==""&&e!=="/"&&(o+="(?:(?=\\/|$))"),[new RegExp(o,t?void 0:"i"),r]}function bp(e){try{return decodeURI(e)}catch(t){return hs(!1,'The URL path "'+e+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+t+").")),e}}function e2(e,t){try{return decodeURIComponent(e)}catch(n){return hs(!1,'The value for the URL param "'+t+'" will not be decoded because'+(' the string "'+e+'" is a malformed URL segment. This is probably')+(" due to a bad percent encoding ("+n+").")),e}}function gs(e,t){if(t==="/")return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let n=t.endsWith("/")?t.length-1:t.length,r=e.charAt(n);return r&&r!=="/"?null:e.slice(n)||"/"}function t2(e,t){t===void 0&&(t="/");let{pathname:n,search:r="",hash:o=""}=typeof e=="string"?Fn(e):e;return{pathname:n?n.startsWith("/")?n:n2(n,t):t,search:l2(r),hash:i2(o)}}function n2(e,t){let n=t.replace(/\/+$/,"").split("/");return e.split("/").forEach(o=>{o===".."?n.length>1&&n.pop():o!=="."&&n.push(o)}),n.length>1?n.join("/"):"/"}function pi(e,t,n,r){return"Cannot include a '"+e+"' character in a manually specified "+("`to."+t+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function r2(e){return e.filter((t,n)=>n===0||t.route.path&&t.route.path.length>0)}function C1(e,t){let n=r2(e);return t?n.map((r,o)=>o===e.length-1?r.pathname:r.pathnameBase):n.map(r=>r.pathnameBase)}function E1(e,t,n,r){r===void 0&&(r=!1);let o;typeof e=="string"?o=Fn(e):(o=Nr({},e),te(!o.pathname||!o.pathname.includes("?"),pi("?","pathname","search",o)),te(!o.pathname||!o.pathname.includes("#"),pi("#","pathname","hash",o)),te(!o.search||!o.search.includes("#"),pi("#","search","hash",o)));let l=e===""||o.pathname==="",i=l?"/":o.pathname,a;if(i==null)a=n;else{let d=t.length-1;if(!r&&i.startsWith("..")){let h=i.split("/");for(;h[0]==="..";)h.shift(),d-=1;o.pathname=h.join("/")}a=d>=0?t[d]:"/"}let s=t2(o,a),u=i&&i!=="/"&&i.endsWith("/"),m=(l||i===".")&&n.endsWith("/");return!s.pathname.endsWith("/")&&(u||m)&&(s.pathname+="/"),s}const Tt=e=>e.join("/").replace(/\/\/+/g,"/"),o2=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),l2=e=>!e||e==="?"?"":e.startsWith("?")?e:"?"+e,i2=e=>!e||e==="#"?"":e.startsWith("#")?e:"#"+e;function a2(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.internal=="boolean"&&"data"in e}const z1=["post","put","patch","delete"];new Set(z1);const s2=["get",...z1];new Set(s2);/**
 * React Router v6.21.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Pr(){return Pr=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Pr.apply(this,arguments)}const vs=k.createContext(null),u2=k.createContext(null),rn=k.createContext(null),pl=k.createContext(null),on=k.createContext({outlet:null,matches:[],isDataRoute:!1}),N1=k.createContext(null);function c2(e,t){let{relative:n}=t===void 0?{}:t;Fr()||te(!1);let{basename:r,navigator:o}=k.useContext(rn),{hash:l,pathname:i,search:a}=_1(e,{relative:n}),s=i;return r!=="/"&&(s=i==="/"?r:Tt([r,i])),o.createHref({pathname:s,search:a,hash:l})}function Fr(){return k.useContext(pl)!=null}function ml(){return Fr()||te(!1),k.useContext(pl).location}function P1(e){k.useContext(rn).static||k.useLayoutEffect(e)}function f2(){let{isDataRoute:e}=k.useContext(on);return e?E2():d2()}function d2(){Fr()||te(!1);let e=k.useContext(vs),{basename:t,future:n,navigator:r}=k.useContext(rn),{matches:o}=k.useContext(on),{pathname:l}=ml(),i=JSON.stringify(C1(o,n.v7_relativeSplatPath)),a=k.useRef(!1);return P1(()=>{a.current=!0}),k.useCallback(function(u,m){if(m===void 0&&(m={}),!a.current)return;if(typeof u=="number"){r.go(u);return}let d=E1(u,JSON.parse(i),l,m.relative==="path");e==null&&t!=="/"&&(d.pathname=d.pathname==="/"?t:Tt([t,d.pathname])),(m.replace?r.replace:r.push)(d,m.state,m)},[t,r,i,l,e])}function _1(e,t){let{relative:n}=t===void 0?{}:t,{future:r}=k.useContext(rn),{matches:o}=k.useContext(on),{pathname:l}=ml(),i=JSON.stringify(C1(o,r.v7_relativeSplatPath));return k.useMemo(()=>E1(e,JSON.parse(i),l,n==="path"),[e,i,l,n])}function p2(e,t){return m2(e,t)}function m2(e,t,n,r){Fr()||te(!1);let{navigator:o}=k.useContext(rn),{matches:l}=k.useContext(on),i=l[l.length-1],a=i?i.params:{};i&&i.pathname;let s=i?i.pathnameBase:"/";i&&i.route;let u=ml(),m;if(t){var d;let C=typeof t=="string"?Fn(t):t;s==="/"||(d=C.pathname)!=null&&d.startsWith(s)||te(!1),m=C}else m=u;let h=m.pathname||"/",w=s==="/"?h:h.slice(s.length)||"/",y=Ap(e,{pathname:w}),v=x2(y&&y.map(C=>Object.assign({},C,{params:Object.assign({},a,C.params),pathname:Tt([s,o.encodeLocation?o.encodeLocation(C.pathname).pathname:C.pathname]),pathnameBase:C.pathnameBase==="/"?s:Tt([s,o.encodeLocation?o.encodeLocation(C.pathnameBase).pathname:C.pathnameBase])})),l,n,r);return t&&v?k.createElement(pl.Provider,{value:{location:Pr({pathname:"/",search:"",hash:"",state:null,key:"default"},m),navigationType:Et.Pop}},v):v}function h2(){let e=C2(),t=a2(e)?e.status+" "+e.statusText:e instanceof Error?e.message:JSON.stringify(e),n=e instanceof Error?e.stack:null,o={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"},l=null;return k.createElement(k.Fragment,null,k.createElement("h2",null,"Unexpected Application Error!"),k.createElement("h3",{style:{fontStyle:"italic"}},t),n?k.createElement("pre",{style:o},n):null,l)}const g2=k.createElement(h2,null);class v2 extends k.Component{constructor(t){super(t),this.state={location:t.location,revalidation:t.revalidation,error:t.error}}static getDerivedStateFromError(t){return{error:t}}static getDerivedStateFromProps(t,n){return n.location!==t.location||n.revalidation!=="idle"&&t.revalidation==="idle"?{error:t.error,location:t.location,revalidation:t.revalidation}:{error:t.error!==void 0?t.error:n.error,location:n.location,revalidation:t.revalidation||n.revalidation}}componentDidCatch(t,n){console.error("React Router caught the following error during render",t,n)}render(){return this.state.error!==void 0?k.createElement(on.Provider,{value:this.props.routeContext},k.createElement(N1.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function y2(e){let{routeContext:t,match:n,children:r}=e,o=k.useContext(vs);return o&&o.static&&o.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(o.staticContext._deepestRenderedBoundaryId=n.route.id),k.createElement(on.Provider,{value:t},r)}function x2(e,t,n,r){var o;if(t===void 0&&(t=[]),n===void 0&&(n=null),r===void 0&&(r=null),e==null){var l;if((l=n)!=null&&l.errors)e=n.matches;else return null}let i=e,a=(o=n)==null?void 0:o.errors;if(a!=null){let m=i.findIndex(d=>d.route.id&&(a==null?void 0:a[d.route.id]));m>=0||te(!1),i=i.slice(0,Math.min(i.length,m+1))}let s=!1,u=-1;if(n&&r&&r.v7_partialHydration)for(let m=0;m<i.length;m++){let d=i[m];if((d.route.HydrateFallback||d.route.hydrateFallbackElement)&&(u=m),d.route.id){let{loaderData:h,errors:w}=n,y=d.route.loader&&h[d.route.id]===void 0&&(!w||w[d.route.id]===void 0);if(d.route.lazy||y){s=!0,u>=0?i=i.slice(0,u+1):i=[i[0]];break}}}return i.reduceRight((m,d,h)=>{let w,y=!1,v=null,C=null;n&&(w=a&&d.route.id?a[d.route.id]:void 0,v=d.route.errorElement||g2,s&&(u<0&&h===0?(z2("route-fallback",!1),y=!0,C=null):u===h&&(y=!0,C=d.route.hydrateFallbackElement||null)));let f=t.concat(i.slice(0,h+1)),c=()=>{let p;return w?p=v:y?p=C:d.route.Component?p=k.createElement(d.route.Component,null):d.route.element?p=d.route.element:p=m,k.createElement(y2,{match:d,routeContext:{outlet:m,matches:f,isDataRoute:n!=null},children:p})};return n&&(d.route.ErrorBoundary||d.route.errorElement||h===0)?k.createElement(v2,{location:n.location,revalidation:n.revalidation,component:v,error:w,children:c(),routeContext:{outlet:null,matches:f,isDataRoute:!0}}):c()},null)}var j1=function(e){return e.UseBlocker="useBlocker",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e}(j1||{}),Go=function(e){return e.UseBlocker="useBlocker",e.UseLoaderData="useLoaderData",e.UseActionData="useActionData",e.UseRouteError="useRouteError",e.UseNavigation="useNavigation",e.UseRouteLoaderData="useRouteLoaderData",e.UseMatches="useMatches",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e.UseRouteId="useRouteId",e}(Go||{});function w2(e){let t=k.useContext(vs);return t||te(!1),t}function S2(e){let t=k.useContext(u2);return t||te(!1),t}function k2(e){let t=k.useContext(on);return t||te(!1),t}function L1(e){let t=k2(),n=t.matches[t.matches.length-1];return n.route.id||te(!1),n.route.id}function C2(){var e;let t=k.useContext(N1),n=S2(Go.UseRouteError),r=L1(Go.UseRouteError);return t!==void 0?t:(e=n.errors)==null?void 0:e[r]}function E2(){let{router:e}=w2(j1.UseNavigateStable),t=L1(Go.UseNavigateStable),n=k.useRef(!1);return P1(()=>{n.current=!0}),k.useCallback(function(o,l){l===void 0&&(l={}),n.current&&(typeof o=="number"?e.navigate(o):e.navigate(o,Pr({fromRouteId:t},l)))},[e,t])}const Hu={};function z2(e,t,n){!t&&!Hu[e]&&(Hu[e]=!0)}function wo(e){te(!1)}function N2(e){let{basename:t="/",children:n=null,location:r,navigationType:o=Et.Pop,navigator:l,static:i=!1,future:a}=e;Fr()&&te(!1);let s=t.replace(/^\/*/,"/"),u=k.useMemo(()=>({basename:s,navigator:l,static:i,future:Pr({v7_relativeSplatPath:!1},a)}),[s,a,l,i]);typeof r=="string"&&(r=Fn(r));let{pathname:m="/",search:d="",hash:h="",state:w=null,key:y="default"}=r,v=k.useMemo(()=>{let C=gs(m,s);return C==null?null:{location:{pathname:C,search:d,hash:h,state:w,key:y},navigationType:o}},[s,m,d,h,w,y,o]);return v==null?null:k.createElement(rn.Provider,{value:u},k.createElement(pl.Provider,{children:n,value:v}))}function P2(e){let{children:t,location:n}=e;return p2(ma(t),n)}new Promise(()=>{});function ma(e,t){t===void 0&&(t=[]);let n=[];return k.Children.forEach(e,(r,o)=>{if(!k.isValidElement(r))return;let l=[...t,o];if(r.type===k.Fragment){n.push.apply(n,ma(r.props.children,l));return}r.type!==wo&&te(!1),!r.props.index||!r.props.children||te(!1);let i={id:r.props.id||l.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(i.children=ma(r.props.children,l)),n.push(i)}),n}/**
 * React Router DOM v6.21.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function ha(){return ha=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},ha.apply(this,arguments)}function _2(e,t){if(e==null)return{};var n={},r=Object.keys(e),o,l;for(l=0;l<r.length;l++)o=r[l],!(t.indexOf(o)>=0)&&(n[o]=e[o]);return n}function j2(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}function L2(e,t){return e.button===0&&(!t||t==="_self")&&!j2(e)}const R2=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","unstable_viewTransition"],M2="startTransition",Qu=xi[M2];function T2(e){let{basename:t,children:n,future:r,window:o}=e,l=k.useRef();l.current==null&&(l.current=Fp({window:o,v5Compat:!0}));let i=l.current,[a,s]=k.useState({action:i.action,location:i.location}),{v7_startTransition:u}=r||{},m=k.useCallback(d=>{u&&Qu?Qu(()=>s(d)):s(d)},[s,u]);return k.useLayoutEffect(()=>i.listen(m),[i,m]),k.createElement(N2,{basename:t,children:n,location:a.location,navigationType:a.action,navigator:i,future:r})}const O2=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",I2=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,mi=k.forwardRef(function(t,n){let{onClick:r,relative:o,reloadDocument:l,replace:i,state:a,target:s,to:u,preventScrollReset:m,unstable_viewTransition:d}=t,h=_2(t,R2),{basename:w}=k.useContext(rn),y,v=!1;if(typeof u=="string"&&I2.test(u)&&(y=u,O2))try{let p=new URL(window.location.href),x=u.startsWith("//")?new URL(p.protocol+u):new URL(u),z=gs(x.pathname,w);x.origin===p.origin&&z!=null?u=z+x.search+x.hash:v=!0}catch{}let C=c2(u,{relative:o}),f=$2(u,{replace:i,state:a,target:s,preventScrollReset:m,relative:o,unstable_viewTransition:d});function c(p){r&&r(p),p.defaultPrevented||f(p)}return k.createElement("a",ha({},h,{href:y||C,onClick:v||l?r:c,ref:n,target:s}))});var Yu;(function(e){e.UseScrollRestoration="useScrollRestoration",e.UseSubmit="useSubmit",e.UseSubmitFetcher="useSubmitFetcher",e.UseFetcher="useFetcher",e.useViewTransitionState="useViewTransitionState"})(Yu||(Yu={}));var Ku;(function(e){e.UseFetcher="useFetcher",e.UseFetchers="useFetchers",e.UseScrollRestoration="useScrollRestoration"})(Ku||(Ku={}));function $2(e,t){let{target:n,replace:r,state:o,preventScrollReset:l,relative:i,unstable_viewTransition:a}=t===void 0?{}:t,s=f2(),u=ml(),m=_1(e,{relative:i});return k.useCallback(d=>{if(L2(d,n)){d.preventDefault();let h=r!==void 0?r:Xo(u)===Xo(m);s(e,{replace:h,state:o,preventScrollReset:l,relative:i,unstable_viewTransition:a})}},[u,s,m,r,o,n,e,l,i,a])}var R1={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},Xu=ct.createContext&&ct.createContext(R1),Ot=function(){return Ot=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++){t=arguments[n];for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o])}return e},Ot.apply(this,arguments)},F2=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var o=0,r=Object.getOwnPropertySymbols(e);o<r.length;o++)t.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(n[r[o]]=e[r[o]]);return n};function M1(e){return e&&e.map(function(t,n){return ct.createElement(t.tag,Ot({key:n},t.attr),M1(t.child))})}function H(e){return function(t){return ct.createElement(D2,Ot({attr:Ot({},e.attr)},t),M1(e.child))}}function D2(e){var t=function(n){var r=e.attr,o=e.size,l=e.title,i=F2(e,["attr","size","title"]),a=o||n.size||"1em",s;return n.className&&(s=n.className),e.className&&(s=(s?s+" ":"")+e.className),ct.createElement("svg",Ot({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},n.attr,r,i,{className:s,style:Ot(Ot({color:e.color||n.color},n.style),e.style),height:a,width:a,xmlns:"http://www.w3.org/2000/svg"}),l&&ct.createElement("title",null,l),e.children)};return Xu!==void 0?ct.createElement(Xu.Consumer,null,function(n){return t(n)}):t(R1)}function hi(e){return H({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M480 32l-64 368-223.3 80L0 400l19.6-94.8h82l-8 40.6L210 390.2l134.1-44.4 18.8-97.1H29.5l16-82h333.7l10.5-52.7H56.3l16.3-82H480z"}}]})(e)}function T1(e){return H({tag:"svg",attr:{viewBox:"0 0 496 512"},child:[{tag:"path",attr:{d:"M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"}}]})(e)}function U2(e){return H({tag:"svg",attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"}}]})(e)}function A2(e){return H({tag:"svg",attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M448 360V24c0-13.3-10.7-24-24-24H96C43 0 0 43 0 96v320c0 53 43 96 96 96h328c13.3 0 24-10.7 24-24v-16c0-7.5-3.5-14.3-8.9-18.7-4.2-15.4-4.2-59.3 0-74.7 5.4-4.3 8.9-11.1 8.9-18.6zM128 134c0-3.3 2.7-6 6-6h212c3.3 0 6 2.7 6 6v20c0 3.3-2.7 6-6 6H134c-3.3 0-6-2.7-6-6v-20zm0 64c0-3.3 2.7-6 6-6h212c3.3 0 6 2.7 6 6v20c0 3.3-2.7 6-6 6H134c-3.3 0-6-2.7-6-6v-20zm253.4 250H96c-17.7 0-32-14.3-32-32 0-17.6 14.4-32 32-32h285.4c-1.9 17.1-1.9 46.9 0 64z"}}]})(e)}function B2(e){return H({tag:"svg",attr:{viewBox:"0 0 576 512"},child:[{tag:"path",attr:{d:"M280.37 148.26L96 300.11V464a16 16 0 0 0 16 16l112.06-.29a16 16 0 0 0 15.92-16V368a16 16 0 0 1 16-16h64a16 16 0 0 1 16 16v95.64a16 16 0 0 0 16 16.05L464 480a16 16 0 0 0 16-16V300L295.67 148.26a12.19 12.19 0 0 0-15.3 0zM571.6 251.47L488 182.56V44.05a12 12 0 0 0-12-12h-56a12 12 0 0 0-12 12v72.61L318.47 43a48 48 0 0 0-61 0L4.34 251.47a12 12 0 0 0-1.6 16.9l25.5 31A12 12 0 0 0 45.15 301l235.22-193.74a12.19 12.19 0 0 1 15.3 0L530.9 301a12 12 0 0 0 16.9-1.6l25.5-31a12 12 0 0 0-1.7-16.93z"}}]})(e)}function V2(e){return H({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{fill:"none",d:"M0 0h24v24H0z"}},{tag:"path",attr:{d:"M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"}}]})(e)}function W2(e){return H({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{fill:"none",d:"M0 0h24v24H0z"}},{tag:"path",attr:{d:"M12 9c1.65 0 3 1.35 3 3s-1.35 3-3 3-3-1.35-3-3 1.35-3 3-3m0-2c-2.76 0-5 2.24-5 5s2.24 5 5 5 5-2.24 5-5-2.24-5-5-5zM2 13h2c.55 0 1-.45 1-1s-.45-1-1-1H2c-.55 0-1 .45-1 1s.45 1 1 1zm18 0h2c.55 0 1-.45 1-1s-.45-1-1-1h-2c-.55 0-1 .45-1 1s.45 1 1 1zM11 2v2c0 .55.45 1 1 1s1-.45 1-1V2c0-.55-.45-1-1-1s-1 .45-1 1zm0 18v2c0 .55.45 1 1 1s1-.45 1-1v-2c0-.55-.45-1-1-1s-1 .45-1 1zM5.99 4.58a.996.996 0 00-1.41 0 .996.996 0 000 1.41l1.06 1.06c.39.39 1.03.39 1.41 0s.39-1.03 0-1.41L5.99 4.58zm12.37 12.37a.996.996 0 00-1.41 0 .996.996 0 000 1.41l1.06 1.06c.39.39 1.03.39 1.41 0a.996.996 0 000-1.41l-1.06-1.06zm1.06-10.96a.996.996 0 000-1.41.996.996 0 00-1.41 0l-1.06 1.06c-.39.39-.39 1.03 0 1.41s1.03.39 1.41 0l1.06-1.06zM7.05 18.36a.996.996 0 000-1.41.996.996 0 00-1.41 0l-1.06 1.06c-.39.39-.39 1.03 0 1.41s1.03.39 1.41 0l1.06-1.06z"}}]})(e)}function H2(e){return H({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{fill:"none",d:"M0 0h24v24H0V0z"}},{tag:"path",attr:{d:"M14 4c.34 0 .68.02 1.01.07C13.1 6.23 12 9.05 12 12s1.1 5.77 3.01 7.93c-.33.05-.67.07-1.01.07-4.41 0-8-3.59-8-8s3.59-8 8-8m0-2C8.48 2 4 6.48 4 12s4.48 10 10 10c1.82 0 3.53-.5 5-1.35-2.99-1.73-5-4.95-5-8.65s2.01-6.92 5-8.65A9.973 9.973 0 0014 2z"}}]})(e)}function Q2({title:e,image:t,description:n,tecnologies:r,github:o}){return g.jsxs("section",{className:"w-[340px] bg-slate-50 dark:bg-[#191919] hover:shadow-lg shadow-md dark:hover:shadow-neutral-950  rounded-md transition-all duration-500 overflow-hidden ",children:[g.jsx("figure",{className:"h-48 rounded-b-xl overflow-hidden",children:g.jsx("img",{src:t,alt:e,className:"object-fill hover:scale-110 duration-500 w-full h-full overflow-hidden"})}),g.jsxs("section",{className:"px-4 py-4 flex flex-col gap-4",children:[g.jsxs("article",{className:"flex flex-col gap-2 h-28",children:[g.jsx("h3",{className:"text-lg font-semibold text-secondary",children:e}),g.jsx("p",{className:"text-sm font-medium text-primary",children:n})]}),g.jsx("article",{className:"flex flex-row px-1  gap-6 text-xl text-[#242424] dark:text-gray-300",children:r==null?void 0:r.map(({tecnologie:l},i)=>g.jsx("span",{children:l},i))}),g.jsxs("article",{className:"flex gap-3",children:[g.jsxs("button",{className:"flex items-center justify-evenly bg-[#242424] dark:bg-gray-300 dark:text-gray-950  py-1 rounded-md text-white hover:text-gray-300 dark:hover:text-gray-800 font-semibold text-sm w-20 duration-500 transition-colors",children:["Demo ",g.jsx(V2,{})]}),g.jsxs("a",{href:o,target:"_blank",className:"flex items-center justify-evenly border border-[#242424] dark:border-gray-300  dark:text-gray-300  py-1 rounded-md text-[#242424] hover:text-gray-300 dark:hover:text-gray-700 font-semibold text-sm w-20 duration-500 transition-colors",rel:"noreferrer",children:["Git ",g.jsx(T1,{})]})]})]})]})}function Y2(e){return H({tag:"svg",attr:{role:"img",viewBox:"0 0 24 24"},child:[{tag:"title",attr:{},child:[]},{tag:"path",attr:{d:"M1.5 0h21l-1.91 21.563L11.977 24l-8.565-2.438L1.5 0zm17.09 4.413L5.41 4.41l.213 2.622 10.125.002-.255 2.716h-6.64l.24 2.573h6.182l-.366 3.523-2.91.804-2.956-.81-.188-2.11h-2.61l.29 3.855L12 19.288l5.373-1.53L18.59 4.414z"}}]})(e)}function K2(e){return H({tag:"svg",attr:{role:"img",viewBox:"0 0 24 24"},child:[{tag:"title",attr:{},child:[]},{tag:"path",attr:{d:"M24 18.588a1.529 1.529 0 01-1.895-.72l-3.45-4.771-.5-.667-4.003 5.444a1.466 1.466 0 01-1.802.708l5.158-6.92-4.798-6.251a1.595 1.595 0 011.9.666l3.576 4.83 3.596-4.81a1.435 1.435 0 011.788-.668L21.708 7.9l-2.522 3.283a.666.666 0 000 .994l4.804 6.412zM.002 11.576l.42-2.075c1.154-4.103 5.858-5.81 9.094-3.27 1.895 1.489 2.368 3.597 2.275 5.973H1.116C.943 16.447 4.005 19.009 7.92 17.7a4.078 4.078 0 002.582-2.876c.207-.666.548-.78 1.174-.588a5.417 5.417 0 01-2.589 3.957 6.272 6.272 0 01-7.306-.933 6.575 6.575 0 01-1.64-3.858c0-.235-.08-.455-.134-.666A88.33 88.33 0 010 11.577zm1.127-.286h9.654c-.06-3.076-2.001-5.258-4.59-5.278-2.882-.04-4.944 2.094-5.071 5.264z"}}]})(e)}function Gu(e){return H({tag:"svg",attr:{role:"img",viewBox:"0 0 24 24"},child:[{tag:"title",attr:{},child:[]},{tag:"path",attr:{d:"M3.89 15.672L6.255.461A.542.542 0 017.27.288l2.543 4.771zm16.794 3.692l-2.25-14a.54.54 0 00-.919-.295L3.316 19.365l7.856 4.427a1.621 1.621 0 001.588 0zM14.3 7.147l-1.82-3.482a.542.542 0 00-.96 0L3.53 17.984z"}}]})(e)}function Zu(e){return H({tag:"svg",attr:{role:"img",viewBox:"0 0 24 24"},child:[{tag:"title",attr:{},child:[]},{tag:"path",attr:{d:"M1.5 0h21l-1.91 21.563L11.977 24l-8.564-2.438L1.5 0zm7.031 9.75l-.232-2.718 10.059.003.23-2.622L5.412 4.41l.698 8.01h9.126l-.326 3.426-2.91.804-2.955-.81-.188-2.11H6.248l.33 4.171L12 19.351l5.379-1.443.744-8.157H8.531z"}}]})(e)}function X2(e){return H({tag:"svg",attr:{role:"img",viewBox:"0 0 24 24"},child:[{tag:"title",attr:{},child:[]},{tag:"path",attr:{d:"M0 0h24v24H0V0zm22.034 18.276c-.175-1.095-.888-2.015-3.003-2.873-.736-.345-1.554-.585-1.797-1.14-.091-.33-.105-.51-.046-.705.15-.646.915-.84 1.515-.66.39.12.75.42.976.9 1.034-.676 1.034-.676 1.755-1.125-.27-.42-.404-.601-.586-.78-.63-.705-1.469-1.065-2.834-1.034l-.705.089c-.676.165-1.32.525-1.71 1.005-1.14 1.291-.811 3.541.569 4.471 1.365 1.02 3.361 1.244 3.616 2.205.24 1.17-.87 1.545-1.966 1.41-.811-.18-1.26-.586-1.755-1.336l-1.83 1.051c.21.48.45.689.81 1.109 1.74 1.756 6.09 1.666 6.871-1.004.029-.09.24-.705.074-1.65l.046.067zm-8.983-7.245h-2.248c0 1.938-.009 3.864-.009 5.805 0 1.232.063 2.363-.138 2.711-.33.689-1.18.601-1.566.48-.396-.196-.597-.466-.83-.855-.063-.105-.11-.196-.127-.196l-1.825 1.125c.305.63.75 1.172 1.324 1.517.855.51 2.004.675 3.207.405.783-.226 1.458-.691 1.811-1.411.51-.93.402-2.07.397-3.346.012-2.054 0-4.109 0-6.179l.004-.056z"}}]})(e)}function G2(e){return H({tag:"svg",attr:{role:"img",viewBox:"0 0 24 24"},child:[{tag:"title",attr:{},child:[]},{tag:"path",attr:{d:"M20.229 15.793a.666.666 0 0 0 .244-.243.666.666 0 0 0 .09-.333l.012-3.858a.666.666 0 0 1 .09-.333.666.666 0 0 1 .245-.243L23 9.58a.667.667 0 0 1 .333-.088.667.667 0 0 1 .333.09.667.667 0 0 1 .244.243.666.666 0 0 1 .089.333v7.014a.667.667 0 0 1-.335.578l-7.893 4.534a.666.666 0 0 1-.662 0l-6.194-3.542a.667.667 0 0 1-.246-.244.667.667 0 0 1-.09-.335v-3.537c0-.004.004-.006.008-.004s.008 0 .008-.005v-.004c0-.003.002-.005.004-.007l5.102-2.93c.004-.003.002-.01-.003-.01a.005.005 0 0 1-.004-.002.005.005 0 0 1-.001-.004l.01-3.467a.667.667 0 0 0-.333-.58.667.667 0 0 0-.667 0L8.912 9.799a.667.667 0 0 1-.665 0l-3.804-2.19a.667.667 0 0 0-.999.577v6.267a.667.667 0 0 1-.332.577.666.666 0 0 1-.332.09.667.667 0 0 1-.333-.088L.336 13.825a.667.667 0 0 1-.246-.244.667.667 0 0 1-.09-.336L.019 2.292a.667.667 0 0 1 .998-.577l7.23 4.153a.667.667 0 0 0 .665 0l7.228-4.153a.666.666 0 0 1 .333-.088.666.666 0 0 1 .333.09.667.667 0 0 1 .244.244.667.667 0 0 1 .088.333V13.25c0 .117-.03.232-.089.334a.667.667 0 0 1-.245.244l-3.785 2.18a.667.667 0 0 0-.245.245.666.666 0 0 0-.089.334.667.667 0 0 0 .09.334.666.666 0 0 0 .247.244l2.088 1.189a.67.67 0 0 0 .33.087.667.667 0 0 0 .332-.089l4.457-2.56Zm.438-9.828a.666.666 0 0 0 .09.335.666.666 0 0 0 .248.244.667.667 0 0 0 .67-.008l2.001-1.2a.666.666 0 0 0 .237-.243.667.667 0 0 0 .087-.329V2.32a.667.667 0 0 0-.091-.335.667.667 0 0 0-.584-.33.667.667 0 0 0-.334.094l-2 1.2a.666.666 0 0 0-.238.243.668.668 0 0 0-.086.329v2.445Z"}}]})(e)}function Z2(e){return H({tag:"svg",attr:{role:"img",viewBox:"0 0 24 24"},child:[{tag:"title",attr:{},child:[]},{tag:"path",attr:{d:"M11.998,24c-0.321,0-0.641-0.084-0.922-0.247l-2.936-1.737c-0.438-0.245-0.224-0.332-0.08-0.383 c0.585-0.203,0.703-0.25,1.328-0.604c0.065-0.037,0.151-0.023,0.218,0.017l2.256,1.339c0.082,0.045,0.197,0.045,0.272,0l8.795-5.076 c0.082-0.047,0.134-0.141,0.134-0.238V6.921c0-0.099-0.053-0.192-0.137-0.242l-8.791-5.072c-0.081-0.047-0.189-0.047-0.271,0 L3.075,6.68C2.99,6.729,2.936,6.825,2.936,6.921v10.15c0,0.097,0.054,0.189,0.139,0.235l2.409,1.392 c1.307,0.654,2.108-0.116,2.108-0.89V7.787c0-0.142,0.114-0.253,0.256-0.253h1.115c0.139,0,0.255,0.112,0.255,0.253v10.021 c0,1.745-0.95,2.745-2.604,2.745c-0.508,0-0.909,0-2.026-0.551L2.28,18.675c-0.57-0.329-0.922-0.945-0.922-1.604V6.921 c0-0.659,0.353-1.275,0.922-1.603l8.795-5.082c0.557-0.315,1.296-0.315,1.848,0l8.794,5.082c0.57,0.329,0.924,0.944,0.924,1.603 v10.15c0,0.659-0.354,1.273-0.924,1.604l-8.794,5.078C12.643,23.916,12.324,24,11.998,24z M19.099,13.993 c0-1.9-1.284-2.406-3.987-2.763c-2.731-0.361-3.009-0.548-3.009-1.187c0-0.528,0.235-1.233,2.258-1.233 c1.807,0,2.473,0.389,2.747,1.607c0.024,0.115,0.129,0.199,0.247,0.199h1.141c0.071,0,0.138-0.031,0.186-0.081 c0.048-0.054,0.074-0.123,0.067-0.196c-0.177-2.098-1.571-3.076-4.388-3.076c-2.508,0-4.004,1.058-4.004,2.833 c0,1.925,1.488,2.457,3.895,2.695c2.88,0.282,3.103,0.703,3.103,1.269c0,0.983-0.789,1.402-2.642,1.402 c-2.327,0-2.839-0.584-3.011-1.742c-0.02-0.124-0.126-0.215-0.253-0.215h-1.137c-0.141,0-0.254,0.112-0.254,0.253 c0,1.482,0.806,3.248,4.655,3.248C17.501,17.007,19.099,15.91,19.099,13.993z"}}]})(e)}function Vt(e){return H({tag:"svg",attr:{role:"img",viewBox:"0 0 24 24"},child:[{tag:"title",attr:{},child:[]},{tag:"path",attr:{d:"M14.23 12.004a2.236 2.236 0 0 1-2.235 2.236 2.236 2.236 0 0 1-2.236-2.236 2.236 2.236 0 0 1 2.235-2.236 2.236 2.236 0 0 1 2.236 2.236zm2.648-10.69c-1.346 0-3.107.96-4.888 2.622-1.78-1.653-3.542-2.602-4.887-2.602-.41 0-.783.093-1.106.278-1.375.793-1.683 3.264-.973 6.365C1.98 8.917 0 10.42 0 12.004c0 1.59 1.99 3.097 5.043 4.03-.704 3.113-.39 5.588.988 6.38.32.187.69.275 1.102.275 1.345 0 3.107-.96 4.888-2.624 1.78 1.654 3.542 2.603 4.887 2.603.41 0 .783-.09 1.106-.275 1.374-.792 1.683-3.263.973-6.365C22.02 15.096 24 13.59 24 12.004c0-1.59-1.99-3.097-5.043-4.032.704-3.11.39-5.587-.988-6.38-.318-.184-.688-.277-1.092-.278zm-.005 1.09v.006c.225 0 .406.044.558.127.666.382.955 1.835.73 3.704-.054.46-.142.945-.25 1.44-.96-.236-2.006-.417-3.107-.534-.66-.905-1.345-1.727-2.035-2.447 1.592-1.48 3.087-2.292 4.105-2.295zm-9.77.02c1.012 0 2.514.808 4.11 2.28-.686.72-1.37 1.537-2.02 2.442-1.107.117-2.154.298-3.113.538-.112-.49-.195-.964-.254-1.42-.23-1.868.054-3.32.714-3.707.19-.09.4-.127.563-.132zm4.882 3.05c.455.468.91.992 1.36 1.564-.44-.02-.89-.034-1.345-.034-.46 0-.915.01-1.36.034.44-.572.895-1.096 1.345-1.565zM12 8.1c.74 0 1.477.034 2.202.093.406.582.802 1.203 1.183 1.86.372.64.71 1.29 1.018 1.946-.308.655-.646 1.31-1.013 1.95-.38.66-.773 1.288-1.18 1.87-.728.063-1.466.098-2.21.098-.74 0-1.477-.035-2.202-.093-.406-.582-.802-1.204-1.183-1.86-.372-.64-.71-1.29-1.018-1.946.303-.657.646-1.313 1.013-1.954.38-.66.773-1.286 1.18-1.868.728-.064 1.466-.098 2.21-.098zm-3.635.254c-.24.377-.48.763-.704 1.16-.225.39-.435.782-.635 1.174-.265-.656-.49-1.31-.676-1.947.64-.15 1.315-.283 2.015-.386zm7.26 0c.695.103 1.365.23 2.006.387-.18.632-.405 1.282-.66 1.933-.2-.39-.41-.783-.64-1.174-.225-.392-.465-.774-.705-1.146zm3.063.675c.484.15.944.317 1.375.498 1.732.74 2.852 1.708 2.852 2.476-.005.768-1.125 1.74-2.857 2.475-.42.18-.88.342-1.355.493-.28-.958-.646-1.956-1.1-2.98.45-1.017.81-2.01 1.085-2.964zm-13.395.004c.278.96.645 1.957 1.1 2.98-.45 1.017-.812 2.01-1.086 2.964-.484-.15-.944-.318-1.37-.5-1.732-.737-2.852-1.706-2.852-2.474 0-.768 1.12-1.742 2.852-2.476.42-.18.88-.342 1.356-.494zm11.678 4.28c.265.657.49 1.312.676 1.948-.64.157-1.316.29-2.016.39.24-.375.48-.762.705-1.158.225-.39.435-.788.636-1.18zm-9.945.02c.2.392.41.783.64 1.175.23.39.465.772.705 1.143-.695-.102-1.365-.23-2.006-.386.18-.63.406-1.282.66-1.933zM17.92 16.32c.112.493.2.968.254 1.423.23 1.868-.054 3.32-.714 3.708-.147.09-.338.128-.563.128-1.012 0-2.514-.807-4.11-2.28.686-.72 1.37-1.536 2.02-2.44 1.107-.118 2.154-.3 3.113-.54zm-11.83.01c.96.234 2.006.415 3.107.532.66.905 1.345 1.727 2.035 2.446-1.595 1.483-3.092 2.295-4.11 2.295-.22-.005-.406-.05-.553-.132-.666-.38-.955-1.834-.73-3.703.054-.46.142-.944.25-1.438zm4.56.64c.44.02.89.034 1.345.034.46 0 .915-.01 1.36-.034-.44.572-.895 1.095-1.345 1.565-.455-.47-.91-.993-1.36-1.565z"}}]})(e)}function gi(e){return H({tag:"svg",attr:{role:"img",viewBox:"0 0 24 24"},child:[{tag:"title",attr:{},child:[]},{tag:"path",attr:{d:"M12.118 5.466a2.306 2.306 0 00-.623.08c-.278.067-.702.332-.953.583-.41.423-.49.609-.662 1.469-.08.423.41 1.43.847 1.734.45.317 1.085.502 2.065.608 1.429.16 1.84.636 1.84 2.197 0 1.377-.385 1.747-1.96 1.906-1.707.172-2.58.834-2.765 2.117-.106.781.41 1.76 1.125 2.091 1.627.768 3.15-.198 3.467-2.196.211-1.284.622-1.642 1.998-1.747 1.588-.133 2.409-.675 2.713-1.787.278-1.02-.304-2.157-1.297-2.554-.264-.106-.873-.238-1.35-.291-1.495-.16-1.879-.424-2.038-1.39-.225-1.337-.317-1.562-.794-2.09a2.174 2.174 0 00-1.613-.73zm-4.785 4.36a2.145 2.145 0 00-.497.048c-1.469.318-2.17 2.051-1.35 3.295 1.178 1.774 3.944.953 3.97-1.177.012-1.193-.98-2.143-2.123-2.166zM2.089 14.19a2.22 2.22 0 00-.427.052c-2.158.476-2.237 3.626-.106 4.182.53.145.582.145 1.111.013 1.191-.318 1.866-1.456 1.549-2.607-.278-1.02-1.144-1.664-2.127-1.64zm19.824.008c-.233.002-.477.058-.784.162-1.39.477-1.866 2.092-.98 3.336.557.794 1.96 1.058 2.82.516 1.416-.874 1.363-3.057-.093-3.746-.38-.186-.663-.271-.963-.268z"}}]})(e)}function Ju(e){return H({tag:"svg",attr:{role:"img",viewBox:"0 0 24 24"},child:[{tag:"title",attr:{},child:[]},{tag:"path",attr:{d:"M16.634 16.504c.87-.075 1.543-.84 1.5-1.754-.047-.914-.796-1.648-1.709-1.648h-.061a1.71 1.71 0 00-1.648 1.769c.03.479.226.869.494 1.153-1.048 2.038-2.621 3.536-5.005 4.795-1.603.838-3.296 1.154-4.944.93-1.378-.195-2.456-.81-3.116-1.799-.988-1.499-1.078-3.116-.255-4.734.6-1.17 1.499-2.023 2.099-2.443a9.96 9.96 0 01-.42-1.543C-.868 14.408-.416 18.752.932 20.805c1.004 1.498 3.057 2.456 5.304 2.456.6 0 1.23-.044 1.843-.194 3.897-.749 6.848-3.086 8.541-6.532zm5.348-3.746c-2.32-2.728-5.738-4.226-9.634-4.226h-.51c-.253-.554-.837-.899-1.498-.899h-.045c-.943 0-1.678.81-1.647 1.753.03.898.794 1.648 1.708 1.648h.074a1.69 1.69 0 001.499-1.049h.555c2.309 0 4.495.674 6.488 1.992 1.527 1.005 2.622 2.323 3.237 3.897.538 1.288.509 2.547-.045 3.597-.855 1.647-2.294 2.517-4.196 2.517-1.199 0-2.367-.375-2.967-.644-.36.298-.96.793-1.394 1.093 1.318.598 2.652.943 3.94.943 2.922 0 5.094-1.647 5.919-3.236.898-1.798.824-4.824-1.47-7.416zM6.49 17.042c.03.899.793 1.648 1.708 1.648h.06a1.688 1.688 0 001.648-1.768c0-.9-.779-1.647-1.693-1.647h-.06c-.06 0-.15 0-.226.029-1.243-2.098-1.768-4.347-1.572-6.772.12-1.828.72-3.417 1.797-4.735.9-1.124 2.593-1.68 3.747-1.708 3.236-.061 4.585 3.971 4.689 5.574l1.498.45C17.741 3.197 14.686.62 11.764.62 9.02.62 6.49 2.613 5.47 5.535 4.077 9.43 4.991 13.177 6.7 16.174c-.15.195-.24.539-.21.868z"}}]})(e)}function J2(e){return H({tag:"svg",attr:{role:"img",viewBox:"0 0 24 24"},child:[{tag:"title",attr:{},child:[]},{tag:"path",attr:{d:"M12 0c6.627 0 12 5.373 12 12s-5.373 12-12 12S0 18.627 0 12 5.373 0 12 0zM9.615 15.998c.175.645.156 1.248-.024 1.792l-.065.18c-.024.061-.052.12-.078.176-.14.29-.326.56-.555.81-.698.759-1.672 1.047-2.09.805-.45-.262-.226-1.335.584-2.19.871-.918 2.12-1.509 2.12-1.509v-.003l.108-.061zm9.911-10.861c-.542-2.133-4.077-2.834-7.422-1.645-1.989.707-4.144 1.818-5.693 3.267C4.568 8.48 4.275 9.98 4.396 10.607c.427 2.211 3.457 3.657 4.703 4.73v.006c-.367.18-3.056 1.529-3.686 2.925-.675 1.47.105 2.521.615 2.655 1.575.436 3.195-.36 4.065-1.649.84-1.261.766-2.881.404-3.676.496-.135 1.08-.195 1.83-.104 2.101.24 2.521 1.56 2.43 2.1-.09.539-.523.854-.674.944-.15.091-.195.12-.181.181.015.09.091.09.21.075.165-.03 1.096-.45 1.141-1.471.045-1.29-1.186-2.729-3.375-2.7-.9.016-1.471.091-1.875.256-.03-.045-.061-.075-.105-.105-1.35-1.455-3.855-2.475-3.75-4.41.03-.705.285-2.564 4.8-4.814 3.705-1.846 6.661-1.335 7.171-.21.733 1.604-1.576 4.59-5.431 5.024-1.47.165-2.235-.404-2.431-.615-.209-.225-.239-.24-.314-.194-.12.06-.045.255 0 .375.12.3.585.825 1.396 1.095.704.225 2.43.359 4.5-.45 2.324-.899 4.139-3.405 3.614-5.505l.073.067z"}}]})(e)}function q2(e){return H({tag:"svg",attr:{role:"img",viewBox:"0 0 24 24"},child:[{tag:"title",attr:{},child:[]},{tag:"path",attr:{d:"M16.214 6.762l-.075.391c-.116.741-.074.953.244 1.228l.307.254-.318 1.418c-.19.846-.423 1.555-.571 1.788-.127.201-.275.497-.307.656-.053.19-.233.381-.508.55-.243.138-.72.508-1.058.805-.27.243-.456.392-.557.456l-.33.261c-.106.17-.166.307-.189.411-.023.107-.01.178.024.23.033.05.09.085.168.107a.954.954 0 00.282.023 3 3 0 00.632-.112c.07-.019.125-.037.173-.053.074-.091.245-.263.548-.562.804-.793 1.111-1.227.794-1.11-.117.042-.064-.064.137-.276.424-.413.667-1.037 1.175-2.994.402-1.545.402-1.567.698-1.567.139 0 .532.024.532.024V6.762h-.902zm3.839 3.165c-.064 0-.17.096-.233.202-.116.19.021.306 1.767 1.396 1.037.657 1.873 1.217 1.852 1.26-.021.031-.868.582-1.883 1.217-1.842 1.142-1.852 1.153-1.683 1.386.212.275 0 .37 2.391-1.122L24 13.155v-.836l-1.937-1.196c-1.047-.656-1.957-1.185-2.01-1.196zm-16.085.117c-.053 0-.963.54-2.01 1.185L0 12.425v.836l1.947 1.217c1.08.666 1.99 1.217 2.032 1.217.042 0 .127-.096.212-.212.127-.201.02-.286-1.768-1.418C.72 12.996.54 12.848.71 12.732c.106-.074.91-.572 1.778-1.111 1.979-1.217 1.873-1.133 1.714-1.387-.063-.105-.17-.2-.233-.19zm8.684.023c-.292-.002-.92.443-2.8 1.978-.081.193-.088.326-.051.412.024.059.068.1.129.13.06.03.138.048.224.055.171.015.373-.012.536-.044l.11-.025a.386.386 0 01.144-.118c.116-.064.603-.508 1.09-.984.857-.868 1.058-1.26.709-1.387a.24.24 0 00-.09-.017zm2.196.603c-.257.007-.72.305-1.513.938-.398.323-.65.497-.785.533l-.524.414c-.197.36-.226.583-.174.706a.25.25 0 00.138.134.644.644 0 00.24.045 2.18 2.18 0 00.58-.085 3.466 3.466 0 00.291-.092l.029-.012.053-.028c.1-.129.33-.372.618-.652.91-.878 1.375-1.502 1.28-1.735-.043-.113-.117-.17-.233-.166zm-2.424 1.08c-.074.008-.24.136-.539.398-.432.382-.903.602-1.066.504a3.97 3.97 0 01-.114.024c-.166.033-.373.06-.558.045a.708.708 0 01-.252-.063.337.337 0 01-.168-.17c-.037-.09-.037-.202.005-.345l-.65.534-1.471 1.217V15.867l4.82-3.797a.41.41 0 01.016-.123c.037-.134.035-.202-.023-.196zm2.074.639c-.073 0-.195.103-.39.31-.265.283-.682.557-.903.613l-.034.018a2.191 2.191 0 01-.11.042c-.06.02-.138.044-.228.068-.18.049-.404.094-.604.089a.732.732 0 01-.275-.054.344.344 0 01-.184-.18c-.058-.139-.035-.334.092-.611L7.61 16.033v1.205h1.868l3.962-3.112c.103-.114.258-.27.467-.465.56-.519.687-.698.687-.963 0-.206-.023-.31-.096-.31zm.943 1.95l-.339.338c-.19.18-.529.402-.761.497l-.046.02-.003.005-.01.01c-.009.007-.013.008-.02.011a3.432 3.432 0 01-.282.093 3.058 3.058 0 01-.65.115 1.035 1.035 0 01-.31-.027.364.364 0 01-.218-.144c-.048-.074-.062-.173-.035-.295a1.11 1.11 0 01.095-.25l-3.197 2.526h4.252l.508-.582c.698-.814 1.016-1.396 1.016-1.894z"}}]})(e)}function b2(e){return H({tag:"svg",attr:{role:"img",viewBox:"0 0 24 24"},child:[{tag:"title",attr:{},child:[]},{tag:"path",attr:{d:"M12.001,4.8c-3.2,0-5.2,1.6-6,4.8c1.2-1.6,2.6-2.2,4.2-1.8c0.913,0.228,1.565,0.89,2.288,1.624 C13.666,10.618,15.027,12,18.001,12c3.2,0,5.2-1.6,6-4.8c-1.2,1.6-2.6,2.2-4.2,1.8c-0.913-0.228-1.565-0.89-2.288-1.624 C16.337,6.182,14.976,4.8,12.001,4.8z M6.001,12c-3.2,0-5.2,1.6-6,4.8c1.2-1.6,2.6-2.2,4.2-1.8c0.913,0.228,1.565,0.89,2.288,1.624 c1.177,1.194,2.538,2.576,5.512,2.576c3.2,0,5.2-1.6,6-4.8c-1.2,1.6-2.6,2.2-4.2,1.8c-0.913-0.228-1.565-0.89-2.288-1.624 C10.337,13.382,8.976,12,6.001,12z"}}]})(e)}function em(e){return H({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M10.74 12.89v-.11c.06-.15.12-.29.19-.43a5.15 5.15 0 0 0 .26-3.74.86.86 0 0 0-.66-.74 3.12 3.12 0 0 0-2.08.61v.18a11.34 11.34 0 0 1-.06 2.41 2.37 2.37 0 0 0 .62 2 2 2 0 0 0 1.43.63 8.05 8.05 0 0 1 .3-.81zM10 8.58a.36.36 0 0 1-.09-.23.19.19 0 0 1 .09-.12.74.74 0 0 1 .48-.07c.25 0 .5.16.48.34a.51.51 0 0 1-.49.33h-.06a.63.63 0 0 1-.41-.25z"}},{tag:"path",attr:{d:"M7.88 11a12.58 12.58 0 0 0 .06-2.3v-.28a7 7 0 0 1 1.54-4.55c-1-.32-3.4-1-4.87.1-.9.64-1.32 1.84-1.23 3.55a24.85 24.85 0 0 0 1 4.4c.68 2.22 1.45 3.62 2.11 3.85.1 0 .41.13.86-.41.64-.76 1.23-1.41 1.5-1.7l-.19-.19A2.89 2.89 0 0 1 7.88 11zm3.5 3.4c-.16-.06-.24-.1-.42.11a2.52 2.52 0 0 0-.29.35c-.35.43-.5.58-1.51.79a2 2 0 0 0-.4.11 1 1 0 0 0 .37.16 2.21 2.21 0 0 0 2.5-.8.41.41 0 0 0 0-.35.59.59 0 0 0-.25-.37zm6.29-5.82a5.29 5.29 0 0 0 .08-.79c-.66-.08-1.42-.07-1.72.36-.58.83.56 2.88 1 3.75a4.34 4.34 0 0 1 .26.48 1.79 1.79 0 0 0 .15.31 3.72 3.72 0 0 0 .16-2.13 7.51 7.51 0 0 1-.07-1.05 6 6 0 0 1 .14-.93zm-.56-.16a.6.6 0 0 1-.32.17h-.06a.47.47 0 0 1-.44-.3c0-.14.2-.24.44-.28s.48 0 .5.15a.38.38 0 0 1-.12.26z"}},{tag:"path",attr:{d:"M17 4.88a6.06 6.06 0 0 1 1.37 2.57.71.71 0 0 1 0 .15 5.67 5.67 0 0 1-.09 1.06 7.11 7.11 0 0 0-.09.86 6.61 6.61 0 0 0 .07 1 4 4 0 0 1-.36 2.71l.07.08c2.22-3.49 3-7.54 2.29-8.43a4.77 4.77 0 0 0-3.81-1.8 7.34 7.34 0 0 0-1.63.16A6.17 6.17 0 0 1 17 4.88z"}},{tag:"path",attr:{d:"M21.65 14c-.07-.2-.37-.85-1.47-.62a6.28 6.28 0 0 1-1 .13 19.74 19.74 0 0 0 2.06-4.88c.37-1.45.66-3.39-.11-4.38A5.91 5.91 0 0 0 16.37 2a8.44 8.44 0 0 0-2.46.35 9.38 9.38 0 0 0-1.45-.14 4.8 4.8 0 0 0-2.46.62 12.22 12.22 0 0 0-1.77-.44A5.44 5.44 0 0 0 4 3.05c-1.24.87-1.81 2.39-1.71 4.52a26.28 26.28 0 0 0 1 4.67A15.76 15.76 0 0 0 4.4 15a3.39 3.39 0 0 0 1.75 1.83 1.71 1.71 0 0 0 1.69-.37 2 2 0 0 0 1 .59 3.65 3.65 0 0 0 2.35-.14v.81a8.46 8.46 0 0 0 .31 2.36 1 1 0 0 1 0 .13 3 3 0 0 0 .71 1.24 2.08 2.08 0 0 0 1.49.56 3 3 0 0 0 .7-.08 3.27 3.27 0 0 0 2.21-1.27 7.34 7.34 0 0 0 .91-4v-.26h.17a5.24 5.24 0 0 0 2.4-.4c.45-.23 1.91-1 1.56-2zm-1.81 1.47a4.7 4.7 0 0 1-1.8.34 2.62 2.62 0 0 1-.79-.1c-.1.94-.32 2.69-.45 3.42a2.47 2.47 0 0 1-2.25 2.3 3.23 3.23 0 0 1-.66.07A2 2 0 0 1 12 20a16.77 16.77 0 0 1-.28-4.06 2.56 2.56 0 0 1-1.78.66 3.94 3.94 0 0 1-.94-.13c-.09 0-.87-.23-.86-.73s.66-.59.9-.64c.86-.18.92-.25 1.19-.59a2.79 2.79 0 0 1 .19-.24 2.56 2.56 0 0 1-1.11-.3c-.23.25-.86.93-1.54 1.74a1.43 1.43 0 0 1-1.11.63 1.23 1.23 0 0 1-.35 0C5.43 16 4.6 14.55 3.84 12a25.21 25.21 0 0 1-1-4.53c-.1-1.92.4-3.28 1.47-4 1.92-1.36 5-.31 5.7-.06a4 4 0 0 1 2.41-.66 5.58 5.58 0 0 1 1.4.18 7.51 7.51 0 0 1 2.5-.4 5.35 5.35 0 0 1 4.32 2c.69.88.23 3 0 3.89a18.84 18.84 0 0 1-2.41 5.41c.16.11.65.31 2 0 .46-.1.73 0 .82.25.22.55-.7 1.13-1.21 1.37z"}},{tag:"path",attr:{d:"M17.43 13.59a4 4 0 0 1-.62-1c0-.07-.12-.24-.23-.43-.58-1-1.79-3.22-1-4.34a2.16 2.16 0 0 1 2.12-.61 6.28 6.28 0 0 0-1.13-1.94 5.41 5.41 0 0 0-4.13-2 3.34 3.34 0 0 0-2.55.95A5.82 5.82 0 0 0 8.51 7.8l.15-.08A3.7 3.7 0 0 1 10 7.3a1.45 1.45 0 0 1 1.76 1.19 5.73 5.73 0 0 1-.29 4.09 3.29 3.29 0 0 0-.17.39v.11c-.1.27-.19.52-.25.73a.94.94 0 0 1 .57.07 1.16 1.16 0 0 1 .62.74v.16a.28.28 0 0 1 0 .09 22.22 22.22 0 0 0 .22 4.9 1.5 1.5 0 0 0 2 1.09A1.92 1.92 0 0 0 16.25 19c.15-.88.45-3.35.49-3.88 0-1.06.52-1.27.84-1.36z"}},{tag:"path",attr:{d:"m18 14.33-.08-.06h-.12c-.26.07-.5.14-.47.8a1.9 1.9 0 0 0 .93.12 4.29 4.29 0 0 0 1.38-.29 3 3 0 0 0 .79-.52 3.47 3.47 0 0 1-2.43-.05z"}}]})(e)}function tm(e){return H({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{fill:"none",strokeWidth:"2",d:"M9,15 L9,23 L1,23 L1,15 L9,15 Z M23,15 L23,23 L15,23 L15,15 L23,15 Z M9,1 L9,9 L1,9 L1,1 L9,1 Z M23,1 L23,9 L15,9 L15,1 L23,1 Z"}}]})(e)}const nm=[{id:1,img:"svg/html-5.svg"},{id:2,img:"svg/css-3_official.svg"},{id:3,img:"svg/javascript.svg"},{id:4,img:"svg/react.svg"},{id:5,img:"svg/tailwindcss-icon.svg"},{id:6,img:"svg/nextjs-icon.svg"},{id:7,img:"svg/git-icon.svg"},{id:8,img:"svg/github-icon.svg"},{id:9,img:"svg/postgresql.svg"},{id:10,img:"svg/java.svg"},{id:11,img:"svg/sass.svg"}],rm=[{id:1,title:"Disney Plus Clone App",image:"images/disney-plus-clone.png",description:"It allows users to browse content with features such as authentication and multi-page. features and an immersive user experience. ",tecnologies:[{tecnologie:g.jsx(Vt,{})},{tecnologie:g.jsx(Ju,{})},{tecnologie:g.jsx(Gu,{})},{tecnologie:g.jsx(gi,{})}],github:"https://github.com/Chencho34/disney-plus-clone-app",demo:""},{id:2,title:"KTM Web Page",image:"images/ktm-clone.png",description:"Minimalist web design with semantic HTML5 and KTM-inspired BEM-CSS3 styles to showcase motorcycles in a modern way.",tecnologies:[{tecnologie:g.jsx(Zu,{})},{tecnologie:g.jsx(hi,{})}],github:"https://github.com/Chencho34/ktm-web-page",demo:""},{id:3,title:"Pokedex | PokeApi",image:"images/pokedex.png",description:"In progress...",tecnologies:[{tecnologie:g.jsx(Vt,{})},{tecnologie:g.jsx(b2,{})},{tecnologie:g.jsx(gi,{})}],github:"https://github.com/Chencho34/pokedex-with-poke-api",demo:""},{id:4,title:"Tic-Tac-Toe",image:"images/tic-tac-toe.png",description:"Implementation of Tic-Tac-Toe with ReactJS, Canvas Confetti for visual effects, Local Storage for saving progress and CSS3 for stylization.",tecnologies:[{tecnologie:g.jsx(Vt,{})},{tecnologie:g.jsx(hi,{})}],github:"https://github.com/Chencho34/tic-tac-toe",demo:""},{id:5,title:"Tesla Clone",image:"images/tesla-clone.png",description:"This is a Tesla Homepage clone with React animations, Styled Components, React Reveal and Redux for advanced functionality.",tecnologies:[{tecnologie:g.jsx(Vt,{})},{tecnologie:g.jsx(Ju,{})},{tecnologie:g.jsx(q2,{})}],github:"https://github.com/Chencho34/tesla-clon",demo:""},{id:6,title:"Login Form | Firebase",image:"images/login-page.png",description:"React Form: User management with Firebase, routing with React Router Dom and attractive and modular design with CSS3 (BEM).",tecnologies:[{tecnologie:g.jsx(Vt,{})},{tecnologie:g.jsx(Gu,{})},{tecnologie:g.jsx(hi,{})}],github:"https://github.com/Chencho34/login-form-firebase",demo:""},{id:7,title:"Todo App",image:"images/todo-app.png",description:"Task list with React, Node, Express, PostgreSQL with CRUD operations, using a REST API for the efficient exchange of HTTP data between client and server.",tecnologies:[{tecnologie:g.jsx(Vt,{})},{tecnologie:g.jsx(em,{})},{tecnologie:g.jsx(K2,{})},{tecnologie:g.jsx(Z2,{})},{tecnologie:g.jsx(gi,{})},{tecnologie:g.jsx(G2,{})}],github:"https://github.com/Chencho34/todo-app-pern-stack",demo:""},{id:8,title:"Landing Page",image:"images/landing-pg.png",description:"mechanical workshop: attractive design, outstanding services, seamless experience and compelling call to action for customers.",tecnologies:[{tecnologie:g.jsx(Vt,{})},{tecnologie:g.jsx(Y2,{})}],github:"https://github.com/Chencho34/mechanical-website",demo:""},{id:9,title:"Interactive Card Form",image:"images/card-form.png",description:"Interactive form with attractive design, developed with HTML5, SASS and JavaScript. Includes validations and error control.",tecnologies:[{tecnologie:g.jsx(Zu,{})},{tecnologie:g.jsx(J2,{})},{tecnologie:g.jsx(X2,{})}],github:"https://github.com/Chencho34/interactive-card-form",demo:""}],qu=[{id:1,icon:g.jsx(B2,{size:13}),item:"Home",to:"MyPortfolio/"},{id:2,icon:g.jsx(A2,{size:13}),item:"About",to:"MyPortfolio/about"},{id:3,icon:g.jsx(tm,{size:13}),item:"Projects",to:"MyPortfolio/projects"}];function om(e){return H({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none"},child:[{tag:"path",attr:{d:"M6.2253 4.81108C5.83477 4.42056 5.20161 4.42056 4.81108 4.81108C4.42056 5.20161 4.42056 5.83477 4.81108 6.2253L10.5858 12L4.81114 17.7747C4.42062 18.1652 4.42062 18.7984 4.81114 19.1889C5.20167 19.5794 5.83483 19.5794 6.22535 19.1889L12 13.4142L17.7747 19.1889C18.1652 19.5794 18.7984 19.5794 19.1889 19.1889C19.5794 18.7984 19.5794 18.1652 19.1889 17.7747L13.4142 12L19.189 6.2253C19.5795 5.83477 19.5795 5.20161 19.189 4.81108C18.7985 4.42056 18.1653 4.42056 17.7748 4.81108L12 10.5858L6.2253 4.81108Z",fill:"currentColor"}}]})(e)}function lm(e){return H({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none"},child:[{tag:"path",attr:{d:"M4 6C4 5.44772 4.44772 5 5 5H19C19.5523 5 20 5.44772 20 6C20 6.55228 19.5523 7 19 7H5C4.44772 7 4 6.55228 4 6Z",fill:"currentColor"}},{tag:"path",attr:{d:"M4 18C4 17.4477 4.44772 17 5 17H19C19.5523 17 20 17.4477 20 18C20 18.5523 19.5523 19 19 19H5C4.44772 19 4 18.5523 4 18Z",fill:"currentColor"}},{tag:"path",attr:{d:"M11 11C10.4477 11 10 11.4477 10 12C10 12.5523 10.4477 13 11 13H19C19.5523 13 20 12.5523 20 12C20 11.4477 19.5523 11 19 11H11Z",fill:"currentColor"}}]})(e)}function bu(){const[e,t]=k.useState(!0),[n,r]=k.useState(()=>window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light");k.useEffect(()=>{n==="dark"?document.querySelector("html").classList.add("dark"):document.querySelector("html").classList.remove("dark")},[n]);const o=()=>{r(l=>l==="light"?"dark":"light"),t(!e)};return g.jsx("section",{className:"text-gray-500 cursor-pointer hover:text-[#2196f3]",children:e?g.jsx(W2,{onClick:o,size:22}):g.jsx(H2,{onClick:o,size:22})})}function im(){const[e,t]=k.useState(0),n=a=>t(a);k.useEffect(()=>{t(1)},[]);const[r,o]=k.useState(!1),l=()=>o(!r),i=()=>o(!r);return g.jsxs(g.Fragment,{children:[g.jsx("nav",{className:"h-16 w-full fixed top-0 bg-slate-100/90 dark:bg-[#242424]/90 transition-all duration-500 backdrop-blur-sm z-10",children:g.jsxs("section",{className:"w-10/12 mx-auto flex items-center h-full justify-between",children:[g.jsx(mi,{onClick:()=>n(1),className:"text-3xl font-bold text-[hsl(207,90%,54%)] tracking-widest",to:"MyPortfolio/",children:"Checho"}),g.jsxs("section",{className:"hidden md:flex flex-row items-center gap-6",children:[g.jsx("ul",{className:"flex flex-row gap-9 text-gray-500 font-normal text-md",children:qu.map(({icon:a,id:s,item:u,to:m})=>g.jsx("li",{onClick:()=>n(s),className:`hover:text-[#2196f3] ${e===s?"text-[#2196f3]":""}`,children:g.jsxs(mi,{className:"flex items-center gap-1.5",to:m,children:[a,u]})},s))}),g.jsx(bu,{})]}),g.jsx("article",{className:"md:hidden flex text-gray-500 cursor-pointer",children:r?g.jsx(om,{onClick:l,size:27}):g.jsx(lm,{onClick:l,size:27})})]})}),r&&g.jsx("section",{className:"md:hidden block fixed top-16 right-0 left-0 z-50 h-auto bg-slate-100/90 dark:bg-[#242424]/90 shadow-md rounded-b-3xl backdrop-blur-sm",children:g.jsxs("article",{className:"flex flex-col gap-7 px-10 py-6",children:[g.jsx("ul",{className:"flex flex-col items-end gap-9 text-gray-400 font-normal text-md",children:qu.map(({icon:a,id:s,item:u,to:m})=>g.jsx("li",{onClick:()=>n(s),className:`hover:text-[#2196f3] ${e===s?"text-[#2196f3]":""}`,children:g.jsxs(mi,{onClick:i,className:"flex flex-row-reverse items-center gap-1.5",to:m,children:[a,u]})},s))}),g.jsx("div",{className:"w-[100%] h-0.5 mx-auto bg-gradient-to-r from-blue-500 to-cyan-400 rounded-lg"}),g.jsxs("article",{className:"flex items-center justify-around",children:[g.jsx("p",{className:"text-gray-400",children:"Switch theme"}),g.jsx(bu,{})]})]})})]})}function O1({children:e}){return g.jsx("main",{className:"h-auto md:h-screen w-full bg-light dark:bg-dark transition-colors duration-500",children:e})}function I1({children:e}){return g.jsx("section",{className:"w-4/5 h-full mx-auto flex items-center justify-between pt-28 pb-16",children:e})}const am="https://Chencho34.github.io/MyPortfolio/cv-armando.pdf";function sm(e){if(e.sheet)return e.sheet;for(var t=0;t<document.styleSheets.length;t++)if(document.styleSheets[t].ownerNode===e)return document.styleSheets[t]}function um(e){var t=document.createElement("style");return t.setAttribute("data-emotion",e.key),e.nonce!==void 0&&t.setAttribute("nonce",e.nonce),t.appendChild(document.createTextNode("")),t.setAttribute("data-s",""),t}var cm=function(){function e(n){var r=this;this._insertTag=function(o){var l;r.tags.length===0?r.insertionPoint?l=r.insertionPoint.nextSibling:r.prepend?l=r.container.firstChild:l=r.before:l=r.tags[r.tags.length-1].nextSibling,r.container.insertBefore(o,l),r.tags.push(o)},this.isSpeedy=n.speedy===void 0?!0:n.speedy,this.tags=[],this.ctr=0,this.nonce=n.nonce,this.key=n.key,this.container=n.container,this.prepend=n.prepend,this.insertionPoint=n.insertionPoint,this.before=null}var t=e.prototype;return t.hydrate=function(r){r.forEach(this._insertTag)},t.insert=function(r){this.ctr%(this.isSpeedy?65e3:1)===0&&this._insertTag(um(this));var o=this.tags[this.tags.length-1];if(this.isSpeedy){var l=sm(o);try{l.insertRule(r,l.cssRules.length)}catch{}}else o.appendChild(document.createTextNode(r));this.ctr++},t.flush=function(){this.tags.forEach(function(r){return r.parentNode&&r.parentNode.removeChild(r)}),this.tags=[],this.ctr=0},e}(),he="-ms-",Zo="-moz-",$="-webkit-",$1="comm",ys="rule",xs="decl",fm="@import",F1="@keyframes",dm="@layer",pm=Math.abs,hl=String.fromCharCode,mm=Object.assign;function hm(e,t){return ce(e,0)^45?(((t<<2^ce(e,0))<<2^ce(e,1))<<2^ce(e,2))<<2^ce(e,3):0}function D1(e){return e.trim()}function gm(e,t){return(e=t.exec(e))?e[0]:e}function F(e,t,n){return e.replace(t,n)}function ga(e,t){return e.indexOf(t)}function ce(e,t){return e.charCodeAt(t)|0}function _r(e,t,n){return e.slice(t,n)}function be(e){return e.length}function ws(e){return e.length}function oo(e,t){return t.push(e),e}function vm(e,t){return e.map(t).join("")}var gl=1,Tn=1,U1=0,Pe=0,b=0,Dn="";function vl(e,t,n,r,o,l,i){return{value:e,root:t,parent:n,type:r,props:o,children:l,line:gl,column:Tn,length:i,return:""}}function Gn(e,t){return mm(vl("",null,null,"",null,null,0),e,{length:-e.length},t)}function ym(){return b}function xm(){return b=Pe>0?ce(Dn,--Pe):0,Tn--,b===10&&(Tn=1,gl--),b}function Re(){return b=Pe<U1?ce(Dn,Pe++):0,Tn++,b===10&&(Tn=1,gl++),b}function lt(){return ce(Dn,Pe)}function So(){return Pe}function Dr(e,t){return _r(Dn,e,t)}function jr(e){switch(e){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function A1(e){return gl=Tn=1,U1=be(Dn=e),Pe=0,[]}function B1(e){return Dn="",e}function ko(e){return D1(Dr(Pe-1,va(e===91?e+2:e===40?e+1:e)))}function wm(e){for(;(b=lt())&&b<33;)Re();return jr(e)>2||jr(b)>3?"":" "}function Sm(e,t){for(;--t&&Re()&&!(b<48||b>102||b>57&&b<65||b>70&&b<97););return Dr(e,So()+(t<6&&lt()==32&&Re()==32))}function va(e){for(;Re();)switch(b){case e:return Pe;case 34:case 39:e!==34&&e!==39&&va(b);break;case 40:e===41&&va(e);break;case 92:Re();break}return Pe}function km(e,t){for(;Re()&&e+b!==57;)if(e+b===84&&lt()===47)break;return"/*"+Dr(t,Pe-1)+"*"+hl(e===47?e:Re())}function Cm(e){for(;!jr(lt());)Re();return Dr(e,Pe)}function Em(e){return B1(Co("",null,null,null,[""],e=A1(e),0,[0],e))}function Co(e,t,n,r,o,l,i,a,s){for(var u=0,m=0,d=i,h=0,w=0,y=0,v=1,C=1,f=1,c=0,p="",x=o,z=l,P=r,N=p;C;)switch(y=c,c=Re()){case 40:if(y!=108&&ce(N,d-1)==58){ga(N+=F(ko(c),"&","&\f"),"&\f")!=-1&&(f=-1);break}case 34:case 39:case 91:N+=ko(c);break;case 9:case 10:case 13:case 32:N+=wm(y);break;case 92:N+=Sm(So()-1,7);continue;case 47:switch(lt()){case 42:case 47:oo(zm(km(Re(),So()),t,n),s);break;default:N+="/"}break;case 123*v:a[u++]=be(N)*f;case 125*v:case 59:case 0:switch(c){case 0:case 125:C=0;case 59+m:f==-1&&(N=F(N,/\f/g,"")),w>0&&be(N)-d&&oo(w>32?tc(N+";",r,n,d-1):tc(F(N," ","")+";",r,n,d-2),s);break;case 59:N+=";";default:if(oo(P=ec(N,t,n,u,m,o,a,p,x=[],z=[],d),l),c===123)if(m===0)Co(N,t,P,P,x,l,d,a,z);else switch(h===99&&ce(N,3)===110?100:h){case 100:case 108:case 109:case 115:Co(e,P,P,r&&oo(ec(e,P,P,0,0,o,a,p,o,x=[],d),z),o,z,d,a,r?x:z);break;default:Co(N,P,P,P,[""],z,0,a,z)}}u=m=w=0,v=f=1,p=N="",d=i;break;case 58:d=1+be(N),w=y;default:if(v<1){if(c==123)--v;else if(c==125&&v++==0&&xm()==125)continue}switch(N+=hl(c),c*v){case 38:f=m>0?1:(N+="\f",-1);break;case 44:a[u++]=(be(N)-1)*f,f=1;break;case 64:lt()===45&&(N+=ko(Re())),h=lt(),m=d=be(p=N+=Cm(So())),c++;break;case 45:y===45&&be(N)==2&&(v=0)}}return l}function ec(e,t,n,r,o,l,i,a,s,u,m){for(var d=o-1,h=o===0?l:[""],w=ws(h),y=0,v=0,C=0;y<r;++y)for(var f=0,c=_r(e,d+1,d=pm(v=i[y])),p=e;f<w;++f)(p=D1(v>0?h[f]+" "+c:F(c,/&\f/g,h[f])))&&(s[C++]=p);return vl(e,t,n,o===0?ys:a,s,u,m)}function zm(e,t,n){return vl(e,t,n,$1,hl(ym()),_r(e,2,-2),0)}function tc(e,t,n,r){return vl(e,t,n,xs,_r(e,0,r),_r(e,r+1,-1),r)}function zn(e,t){for(var n="",r=ws(e),o=0;o<r;o++)n+=t(e[o],o,e,t)||"";return n}function Nm(e,t,n,r){switch(e.type){case dm:if(e.children.length)break;case fm:case xs:return e.return=e.return||e.value;case $1:return"";case F1:return e.return=e.value+"{"+zn(e.children,r)+"}";case ys:e.value=e.props.join(",")}return be(n=zn(e.children,r))?e.return=e.value+"{"+n+"}":""}function Pm(e){var t=ws(e);return function(n,r,o,l){for(var i="",a=0;a<t;a++)i+=e[a](n,r,o,l)||"";return i}}function _m(e){return function(t){t.root||(t=t.return)&&e(t)}}function jm(e){var t=Object.create(null);return function(n){return t[n]===void 0&&(t[n]=e(n)),t[n]}}var Lm=function(t,n,r){for(var o=0,l=0;o=l,l=lt(),o===38&&l===12&&(n[r]=1),!jr(l);)Re();return Dr(t,Pe)},Rm=function(t,n){var r=-1,o=44;do switch(jr(o)){case 0:o===38&&lt()===12&&(n[r]=1),t[r]+=Lm(Pe-1,n,r);break;case 2:t[r]+=ko(o);break;case 4:if(o===44){t[++r]=lt()===58?"&\f":"",n[r]=t[r].length;break}default:t[r]+=hl(o)}while(o=Re());return t},Mm=function(t,n){return B1(Rm(A1(t),n))},nc=new WeakMap,Tm=function(t){if(!(t.type!=="rule"||!t.parent||t.length<1)){for(var n=t.value,r=t.parent,o=t.column===r.column&&t.line===r.line;r.type!=="rule";)if(r=r.parent,!r)return;if(!(t.props.length===1&&n.charCodeAt(0)!==58&&!nc.get(r))&&!o){nc.set(t,!0);for(var l=[],i=Mm(n,l),a=r.props,s=0,u=0;s<i.length;s++)for(var m=0;m<a.length;m++,u++)t.props[u]=l[s]?i[s].replace(/&\f/g,a[m]):a[m]+" "+i[s]}}},Om=function(t){if(t.type==="decl"){var n=t.value;n.charCodeAt(0)===108&&n.charCodeAt(2)===98&&(t.return="",t.value="")}};function V1(e,t){switch(hm(e,t)){case 5103:return $+"print-"+e+e;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return $+e+e;case 5349:case 4246:case 4810:case 6968:case 2756:return $+e+Zo+e+he+e+e;case 6828:case 4268:return $+e+he+e+e;case 6165:return $+e+he+"flex-"+e+e;case 5187:return $+e+F(e,/(\w+).+(:[^]+)/,$+"box-$1$2"+he+"flex-$1$2")+e;case 5443:return $+e+he+"flex-item-"+F(e,/flex-|-self/,"")+e;case 4675:return $+e+he+"flex-line-pack"+F(e,/align-content|flex-|-self/,"")+e;case 5548:return $+e+he+F(e,"shrink","negative")+e;case 5292:return $+e+he+F(e,"basis","preferred-size")+e;case 6060:return $+"box-"+F(e,"-grow","")+$+e+he+F(e,"grow","positive")+e;case 4554:return $+F(e,/([^-])(transform)/g,"$1"+$+"$2")+e;case 6187:return F(F(F(e,/(zoom-|grab)/,$+"$1"),/(image-set)/,$+"$1"),e,"")+e;case 5495:case 3959:return F(e,/(image-set\([^]*)/,$+"$1$`$1");case 4968:return F(F(e,/(.+:)(flex-)?(.*)/,$+"box-pack:$3"+he+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+$+e+e;case 4095:case 3583:case 4068:case 2532:return F(e,/(.+)-inline(.+)/,$+"$1$2")+e;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(be(e)-1-t>6)switch(ce(e,t+1)){case 109:if(ce(e,t+4)!==45)break;case 102:return F(e,/(.+:)(.+)-([^]+)/,"$1"+$+"$2-$3$1"+Zo+(ce(e,t+3)==108?"$3":"$2-$3"))+e;case 115:return~ga(e,"stretch")?V1(F(e,"stretch","fill-available"),t)+e:e}break;case 4949:if(ce(e,t+1)!==115)break;case 6444:switch(ce(e,be(e)-3-(~ga(e,"!important")&&10))){case 107:return F(e,":",":"+$)+e;case 101:return F(e,/(.+:)([^;!]+)(;|!.+)?/,"$1"+$+(ce(e,14)===45?"inline-":"")+"box$3$1"+$+"$2$3$1"+he+"$2box$3")+e}break;case 5936:switch(ce(e,t+11)){case 114:return $+e+he+F(e,/[svh]\w+-[tblr]{2}/,"tb")+e;case 108:return $+e+he+F(e,/[svh]\w+-[tblr]{2}/,"tb-rl")+e;case 45:return $+e+he+F(e,/[svh]\w+-[tblr]{2}/,"lr")+e}return $+e+he+e+e}return e}var Im=function(t,n,r,o){if(t.length>-1&&!t.return)switch(t.type){case xs:t.return=V1(t.value,t.length);break;case F1:return zn([Gn(t,{value:F(t.value,"@","@"+$)})],o);case ys:if(t.length)return vm(t.props,function(l){switch(gm(l,/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":return zn([Gn(t,{props:[F(l,/:(read-\w+)/,":"+Zo+"$1")]})],o);case"::placeholder":return zn([Gn(t,{props:[F(l,/:(plac\w+)/,":"+$+"input-$1")]}),Gn(t,{props:[F(l,/:(plac\w+)/,":"+Zo+"$1")]}),Gn(t,{props:[F(l,/:(plac\w+)/,he+"input-$1")]})],o)}return""})}},$m=[Im],Fm=function(t){var n=t.key;if(n==="css"){var r=document.querySelectorAll("style[data-emotion]:not([data-s])");Array.prototype.forEach.call(r,function(v){var C=v.getAttribute("data-emotion");C.indexOf(" ")!==-1&&(document.head.appendChild(v),v.setAttribute("data-s",""))})}var o=t.stylisPlugins||$m,l={},i,a=[];i=t.container||document.head,Array.prototype.forEach.call(document.querySelectorAll('style[data-emotion^="'+n+' "]'),function(v){for(var C=v.getAttribute("data-emotion").split(" "),f=1;f<C.length;f++)l[C[f]]=!0;a.push(v)});var s,u=[Tm,Om];{var m,d=[Nm,_m(function(v){m.insert(v)})],h=Pm(u.concat(o,d)),w=function(C){return zn(Em(C),h)};s=function(C,f,c,p){m=c,w(C?C+"{"+f.styles+"}":f.styles),p&&(y.inserted[f.name]=!0)}}var y={key:n,sheet:new cm({key:n,container:i,nonce:t.nonce,speedy:t.speedy,prepend:t.prepend,insertionPoint:t.insertionPoint}),nonce:t.nonce,inserted:l,registered:{},insert:s};return y.sheet.hydrate(a),y},W1={exports:{}},U={};/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var se=typeof Symbol=="function"&&Symbol.for,Ss=se?Symbol.for("react.element"):60103,ks=se?Symbol.for("react.portal"):60106,yl=se?Symbol.for("react.fragment"):60107,xl=se?Symbol.for("react.strict_mode"):60108,wl=se?Symbol.for("react.profiler"):60114,Sl=se?Symbol.for("react.provider"):60109,kl=se?Symbol.for("react.context"):60110,Cs=se?Symbol.for("react.async_mode"):60111,Cl=se?Symbol.for("react.concurrent_mode"):60111,El=se?Symbol.for("react.forward_ref"):60112,zl=se?Symbol.for("react.suspense"):60113,Dm=se?Symbol.for("react.suspense_list"):60120,Nl=se?Symbol.for("react.memo"):60115,Pl=se?Symbol.for("react.lazy"):60116,Um=se?Symbol.for("react.block"):60121,Am=se?Symbol.for("react.fundamental"):60117,Bm=se?Symbol.for("react.responder"):60118,Vm=se?Symbol.for("react.scope"):60119;function Ie(e){if(typeof e=="object"&&e!==null){var t=e.$$typeof;switch(t){case Ss:switch(e=e.type,e){case Cs:case Cl:case yl:case wl:case xl:case zl:return e;default:switch(e=e&&e.$$typeof,e){case kl:case El:case Pl:case Nl:case Sl:return e;default:return t}}case ks:return t}}}function H1(e){return Ie(e)===Cl}U.AsyncMode=Cs;U.ConcurrentMode=Cl;U.ContextConsumer=kl;U.ContextProvider=Sl;U.Element=Ss;U.ForwardRef=El;U.Fragment=yl;U.Lazy=Pl;U.Memo=Nl;U.Portal=ks;U.Profiler=wl;U.StrictMode=xl;U.Suspense=zl;U.isAsyncMode=function(e){return H1(e)||Ie(e)===Cs};U.isConcurrentMode=H1;U.isContextConsumer=function(e){return Ie(e)===kl};U.isContextProvider=function(e){return Ie(e)===Sl};U.isElement=function(e){return typeof e=="object"&&e!==null&&e.$$typeof===Ss};U.isForwardRef=function(e){return Ie(e)===El};U.isFragment=function(e){return Ie(e)===yl};U.isLazy=function(e){return Ie(e)===Pl};U.isMemo=function(e){return Ie(e)===Nl};U.isPortal=function(e){return Ie(e)===ks};U.isProfiler=function(e){return Ie(e)===wl};U.isStrictMode=function(e){return Ie(e)===xl};U.isSuspense=function(e){return Ie(e)===zl};U.isValidElementType=function(e){return typeof e=="string"||typeof e=="function"||e===yl||e===Cl||e===wl||e===xl||e===zl||e===Dm||typeof e=="object"&&e!==null&&(e.$$typeof===Pl||e.$$typeof===Nl||e.$$typeof===Sl||e.$$typeof===kl||e.$$typeof===El||e.$$typeof===Am||e.$$typeof===Bm||e.$$typeof===Vm||e.$$typeof===Um)};U.typeOf=Ie;W1.exports=U;var Wm=W1.exports,Q1=Wm,Hm={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},Qm={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},Y1={};Y1[Q1.ForwardRef]=Hm;Y1[Q1.Memo]=Qm;var Ym=!0;function K1(e,t,n){var r="";return n.split(" ").forEach(function(o){e[o]!==void 0?t.push(e[o]+";"):r+=o+" "}),r}var Es=function(t,n,r){var o=t.key+"-"+n.name;(r===!1||Ym===!1)&&t.registered[o]===void 0&&(t.registered[o]=n.styles)},X1=function(t,n,r){Es(t,n,r);var o=t.key+"-"+n.name;if(t.inserted[n.name]===void 0){var l=n;do t.insert(n===l?"."+o:"",l,t.sheet,!0),l=l.next;while(l!==void 0)}};function Km(e){for(var t=0,n,r=0,o=e.length;o>=4;++r,o-=4)n=e.charCodeAt(r)&255|(e.charCodeAt(++r)&255)<<8|(e.charCodeAt(++r)&255)<<16|(e.charCodeAt(++r)&255)<<24,n=(n&65535)*1540483477+((n>>>16)*59797<<16),n^=n>>>24,t=(n&65535)*1540483477+((n>>>16)*59797<<16)^(t&65535)*1540483477+((t>>>16)*59797<<16);switch(o){case 3:t^=(e.charCodeAt(r+2)&255)<<16;case 2:t^=(e.charCodeAt(r+1)&255)<<8;case 1:t^=e.charCodeAt(r)&255,t=(t&65535)*1540483477+((t>>>16)*59797<<16)}return t^=t>>>13,t=(t&65535)*1540483477+((t>>>16)*59797<<16),((t^t>>>15)>>>0).toString(36)}var Xm={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},Gm=/[A-Z]|^ms/g,Zm=/_EMO_([^_]+?)_([^]*?)_EMO_/g,G1=function(t){return t.charCodeAt(1)===45},rc=function(t){return t!=null&&typeof t!="boolean"},vi=jm(function(e){return G1(e)?e:e.replace(Gm,"-$&").toLowerCase()}),oc=function(t,n){switch(t){case"animation":case"animationName":if(typeof n=="string")return n.replace(Zm,function(r,o,l){return et={name:o,styles:l,next:et},o})}return Xm[t]!==1&&!G1(t)&&typeof n=="number"&&n!==0?n+"px":n};function Lr(e,t,n){if(n==null)return"";if(n.__emotion_styles!==void 0)return n;switch(typeof n){case"boolean":return"";case"object":{if(n.anim===1)return et={name:n.name,styles:n.styles,next:et},n.name;if(n.styles!==void 0){var r=n.next;if(r!==void 0)for(;r!==void 0;)et={name:r.name,styles:r.styles,next:et},r=r.next;var o=n.styles+";";return o}return Jm(e,t,n)}case"function":{if(e!==void 0){var l=et,i=n(e);return et=l,Lr(e,t,i)}break}}if(t==null)return n;var a=t[n];return a!==void 0?a:n}function Jm(e,t,n){var r="";if(Array.isArray(n))for(var o=0;o<n.length;o++)r+=Lr(e,t,n[o])+";";else for(var l in n){var i=n[l];if(typeof i!="object")t!=null&&t[i]!==void 0?r+=l+"{"+t[i]+"}":rc(i)&&(r+=vi(l)+":"+oc(l,i)+";");else if(Array.isArray(i)&&typeof i[0]=="string"&&(t==null||t[i[0]]===void 0))for(var a=0;a<i.length;a++)rc(i[a])&&(r+=vi(l)+":"+oc(l,i[a])+";");else{var s=Lr(e,t,i);switch(l){case"animation":case"animationName":{r+=vi(l)+":"+s+";";break}default:r+=l+"{"+s+"}"}}}return r}var lc=/label:\s*([^\s;\n{]+)\s*(;|$)/g,et,zs=function(t,n,r){if(t.length===1&&typeof t[0]=="object"&&t[0]!==null&&t[0].styles!==void 0)return t[0];var o=!0,l="";et=void 0;var i=t[0];i==null||i.raw===void 0?(o=!1,l+=Lr(r,n,i)):l+=i[0];for(var a=1;a<t.length;a++)l+=Lr(r,n,t[a]),o&&(l+=i[a]);lc.lastIndex=0;for(var s="",u;(u=lc.exec(l))!==null;)s+="-"+u[1];var m=Km(l)+s;return{name:m,styles:l,next:et}},qm=function(t){return t()},bm=xi.useInsertionEffect?xi.useInsertionEffect:!1,Z1=bm||qm,Ns={}.hasOwnProperty,J1=k.createContext(typeof HTMLElement<"u"?Fm({key:"css"}):null);J1.Provider;var q1=function(t){return k.forwardRef(function(n,r){var o=k.useContext(J1);return t(n,o,r)})},b1=k.createContext({}),ya="__EMOTION_TYPE_PLEASE_DO_NOT_USE__",e3=function(t,n){var r={};for(var o in n)Ns.call(n,o)&&(r[o]=n[o]);return r[ya]=t,r},t3=function(t){var n=t.cache,r=t.serialized,o=t.isStringTag;return Es(n,r,o),Z1(function(){return X1(n,r,o)}),null},n3=q1(function(e,t,n){var r=e.css;typeof r=="string"&&t.registered[r]!==void 0&&(r=t.registered[r]);var o=e[ya],l=[r],i="";typeof e.className=="string"?i=K1(t.registered,l,e.className):e.className!=null&&(i=e.className+" ");var a=zs(l,void 0,k.useContext(b1));i+=t.key+"-"+a.name;var s={};for(var u in e)Ns.call(e,u)&&u!=="css"&&u!==ya&&(s[u]=e[u]);return s.ref=n,s.className=i,k.createElement(k.Fragment,null,k.createElement(t3,{cache:t,serialized:a,isStringTag:typeof o=="string"}),k.createElement(o,s))}),r3=n3,o3=g.Fragment;function le(e,t,n){return Ns.call(t,"css")?g.jsx(r3,e3(e,t),n):g.jsx(e,t,n)}function ef(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return zs(t)}var E=function(){var t=ef.apply(void 0,arguments),n="animation-"+t.name;return{name:n,styles:"@keyframes "+n+"{"+t.styles+"}",anim:1,toString:function(){return"_EMO_"+this.name+"_"+this.styles+"_EMO_"}}},l3=function e(t){for(var n=t.length,r=0,o="";r<n;r++){var l=t[r];if(l!=null){var i=void 0;switch(typeof l){case"boolean":break;case"object":{if(Array.isArray(l))i=e(l);else{i="";for(var a in l)l[a]&&a&&(i&&(i+=" "),i+=a)}break}default:i=l}i&&(o&&(o+=" "),o+=i)}}return o};function i3(e,t,n){var r=[],o=K1(e,r,n);return r.length<2?n:o+t(r)}var a3=function(t){var n=t.cache,r=t.serializedArr;return Z1(function(){for(var o=0;o<r.length;o++)X1(n,r[o],!1)}),null},yi=q1(function(e,t){var n=!1,r=[],o=function(){for(var u=arguments.length,m=new Array(u),d=0;d<u;d++)m[d]=arguments[d];var h=zs(m,t.registered);return r.push(h),Es(t,h,!1),t.key+"-"+h.name},l=function(){for(var u=arguments.length,m=new Array(u),d=0;d<u;d++)m[d]=arguments[d];return i3(t.registered,o,l3(m))},i={css:o,cx:l,theme:k.useContext(b1)},a=e.children(i);return n=!0,k.createElement(k.Fragment,null,k.createElement(a3,{cache:t,serializedArr:r}),a)}),s3=Object.defineProperty,u3=(e,t,n)=>t in e?s3(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,lo=(e,t,n)=>(u3(e,typeof t!="symbol"?t+"":t,n),n),xa=new Map,io=new WeakMap,ic=0,c3=void 0;function f3(e){return e?(io.has(e)||(ic+=1,io.set(e,ic.toString())),io.get(e)):"0"}function d3(e){return Object.keys(e).sort().filter(t=>e[t]!==void 0).map(t=>`${t}_${t==="root"?f3(e.root):e[t]}`).toString()}function p3(e){let t=d3(e),n=xa.get(t);if(!n){const r=new Map;let o;const l=new IntersectionObserver(i=>{i.forEach(a=>{var s;const u=a.isIntersecting&&o.some(m=>a.intersectionRatio>=m);e.trackVisibility&&typeof a.isVisible>"u"&&(a.isVisible=u),(s=r.get(a.target))==null||s.forEach(m=>{m(u,a)})})},e);o=l.thresholds||(Array.isArray(e.threshold)?e.threshold:[e.threshold||0]),n={id:t,observer:l,elements:r},xa.set(t,n)}return n}function tf(e,t,n={},r=c3){if(typeof window.IntersectionObserver>"u"&&r!==void 0){const s=e.getBoundingClientRect();return t(r,{isIntersecting:r,target:e,intersectionRatio:typeof n.threshold=="number"?n.threshold:0,time:0,boundingClientRect:s,intersectionRect:s,rootBounds:s}),()=>{}}const{id:o,observer:l,elements:i}=p3(n);let a=i.get(e)||[];return i.has(e)||i.set(e,a),a.push(t),l.observe(e),function(){a.splice(a.indexOf(t),1),a.length===0&&(i.delete(e),l.unobserve(e)),i.size===0&&(l.disconnect(),xa.delete(o))}}function m3(e){return typeof e.children!="function"}var ac=class extends k.Component{constructor(e){super(e),lo(this,"node",null),lo(this,"_unobserveCb",null),lo(this,"handleNode",t=>{this.node&&(this.unobserve(),!t&&!this.props.triggerOnce&&!this.props.skip&&this.setState({inView:!!this.props.initialInView,entry:void 0})),this.node=t||null,this.observeNode()}),lo(this,"handleChange",(t,n)=>{t&&this.props.triggerOnce&&this.unobserve(),m3(this.props)||this.setState({inView:t,entry:n}),this.props.onChange&&this.props.onChange(t,n)}),this.state={inView:!!e.initialInView,entry:void 0}}componentDidMount(){this.unobserve(),this.observeNode()}componentDidUpdate(e){(e.rootMargin!==this.props.rootMargin||e.root!==this.props.root||e.threshold!==this.props.threshold||e.skip!==this.props.skip||e.trackVisibility!==this.props.trackVisibility||e.delay!==this.props.delay)&&(this.unobserve(),this.observeNode())}componentWillUnmount(){this.unobserve()}observeNode(){if(!this.node||this.props.skip)return;const{threshold:e,root:t,rootMargin:n,trackVisibility:r,delay:o,fallbackInView:l}=this.props;this._unobserveCb=tf(this.node,this.handleChange,{threshold:e,root:t,rootMargin:n,trackVisibility:r,delay:o},l)}unobserve(){this._unobserveCb&&(this._unobserveCb(),this._unobserveCb=null)}render(){const{children:e}=this.props;if(typeof e=="function"){const{inView:w,entry:y}=this.state;return e({inView:w,entry:y,ref:this.handleNode})}const{as:t,triggerOnce:n,threshold:r,root:o,rootMargin:l,onChange:i,skip:a,trackVisibility:s,delay:u,initialInView:m,fallbackInView:d,...h}=this.props;return k.createElement(t||"div",{ref:this.handleNode,...h},e)}};function nf({threshold:e,delay:t,trackVisibility:n,rootMargin:r,root:o,triggerOnce:l,skip:i,initialInView:a,fallbackInView:s,onChange:u}={}){var m;const[d,h]=k.useState(null),w=k.useRef(),[y,v]=k.useState({inView:!!a,entry:void 0});w.current=u,k.useEffect(()=>{if(i||!d)return;let p;return p=tf(d,(x,z)=>{v({inView:x,entry:z}),w.current&&w.current(x,z),z.isIntersecting&&l&&p&&(p(),p=void 0)},{root:o,rootMargin:r,threshold:e,trackVisibility:n,delay:t},s),()=>{p&&p()}},[Array.isArray(e)?e.toString():e,d,o,r,l,i,n,s,t]);const C=(m=y.entry)==null?void 0:m.target,f=k.useRef();!d&&C&&!l&&!i&&f.current!==C&&(f.current=C,v({inView:!!a,entry:void 0}));const c=[h,y.inView,y.entry];return c.ref=c[0],c.inView=c[1],c.entry=c[2],c}var rf={exports:{}},A={};/**
 * @license React
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ps=Symbol.for("react.element"),_s=Symbol.for("react.portal"),_l=Symbol.for("react.fragment"),jl=Symbol.for("react.strict_mode"),Ll=Symbol.for("react.profiler"),Rl=Symbol.for("react.provider"),Ml=Symbol.for("react.context"),h3=Symbol.for("react.server_context"),Tl=Symbol.for("react.forward_ref"),Ol=Symbol.for("react.suspense"),Il=Symbol.for("react.suspense_list"),$l=Symbol.for("react.memo"),Fl=Symbol.for("react.lazy"),g3=Symbol.for("react.offscreen"),of;of=Symbol.for("react.module.reference");function Ve(e){if(typeof e=="object"&&e!==null){var t=e.$$typeof;switch(t){case Ps:switch(e=e.type,e){case _l:case Ll:case jl:case Ol:case Il:return e;default:switch(e=e&&e.$$typeof,e){case h3:case Ml:case Tl:case Fl:case $l:case Rl:return e;default:return t}}case _s:return t}}}A.ContextConsumer=Ml;A.ContextProvider=Rl;A.Element=Ps;A.ForwardRef=Tl;A.Fragment=_l;A.Lazy=Fl;A.Memo=$l;A.Portal=_s;A.Profiler=Ll;A.StrictMode=jl;A.Suspense=Ol;A.SuspenseList=Il;A.isAsyncMode=function(){return!1};A.isConcurrentMode=function(){return!1};A.isContextConsumer=function(e){return Ve(e)===Ml};A.isContextProvider=function(e){return Ve(e)===Rl};A.isElement=function(e){return typeof e=="object"&&e!==null&&e.$$typeof===Ps};A.isForwardRef=function(e){return Ve(e)===Tl};A.isFragment=function(e){return Ve(e)===_l};A.isLazy=function(e){return Ve(e)===Fl};A.isMemo=function(e){return Ve(e)===$l};A.isPortal=function(e){return Ve(e)===_s};A.isProfiler=function(e){return Ve(e)===Ll};A.isStrictMode=function(e){return Ve(e)===jl};A.isSuspense=function(e){return Ve(e)===Ol};A.isSuspenseList=function(e){return Ve(e)===Il};A.isValidElementType=function(e){return typeof e=="string"||typeof e=="function"||e===_l||e===Ll||e===jl||e===Ol||e===Il||e===g3||typeof e=="object"&&e!==null&&(e.$$typeof===Fl||e.$$typeof===$l||e.$$typeof===Rl||e.$$typeof===Ml||e.$$typeof===Tl||e.$$typeof===of||e.getModuleId!==void 0)};A.typeOf=Ve;rf.exports=A;var v3=rf.exports;E`
  from,
  20%,
  53%,
  to {
    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
    transform: translate3d(0, 0, 0);
  }

  40%,
  43% {
    animation-timing-function: cubic-bezier(0.755, 0.05, 0.855, 0.06);
    transform: translate3d(0, -30px, 0) scaleY(1.1);
  }

  70% {
    animation-timing-function: cubic-bezier(0.755, 0.05, 0.855, 0.06);
    transform: translate3d(0, -15px, 0) scaleY(1.05);
  }

  80% {
    transition-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
    transform: translate3d(0, 0, 0) scaleY(0.95);
  }

  90% {
    transform: translate3d(0, -4px, 0) scaleY(1.02);
  }
`;E`
  from,
  50%,
  to {
    opacity: 1;
  }

  25%,
  75% {
    opacity: 0;
  }
`;E`
  0% {
    transform: translateX(0);
  }

  6.5% {
    transform: translateX(-6px) rotateY(-9deg);
  }

  18.5% {
    transform: translateX(5px) rotateY(7deg);
  }

  31.5% {
    transform: translateX(-3px) rotateY(-5deg);
  }

  43.5% {
    transform: translateX(2px) rotateY(3deg);
  }

  50% {
    transform: translateX(0);
  }
`;E`
  0% {
    transform: scale(1);
  }

  14% {
    transform: scale(1.3);
  }

  28% {
    transform: scale(1);
  }

  42% {
    transform: scale(1.3);
  }

  70% {
    transform: scale(1);
  }
`;E`
  from,
  11.1%,
  to {
    transform: translate3d(0, 0, 0);
  }

  22.2% {
    transform: skewX(-12.5deg) skewY(-12.5deg);
  }

  33.3% {
    transform: skewX(6.25deg) skewY(6.25deg);
  }

  44.4% {
    transform: skewX(-3.125deg) skewY(-3.125deg);
  }

  55.5% {
    transform: skewX(1.5625deg) skewY(1.5625deg);
  }

  66.6% {
    transform: skewX(-0.78125deg) skewY(-0.78125deg);
  }

  77.7% {
    transform: skewX(0.390625deg) skewY(0.390625deg);
  }

  88.8% {
    transform: skewX(-0.1953125deg) skewY(-0.1953125deg);
  }
`;E`
  from {
    transform: scale3d(1, 1, 1);
  }

  50% {
    transform: scale3d(1.05, 1.05, 1.05);
  }

  to {
    transform: scale3d(1, 1, 1);
  }
`;E`
  from {
    transform: scale3d(1, 1, 1);
  }

  30% {
    transform: scale3d(1.25, 0.75, 1);
  }

  40% {
    transform: scale3d(0.75, 1.25, 1);
  }

  50% {
    transform: scale3d(1.15, 0.85, 1);
  }

  65% {
    transform: scale3d(0.95, 1.05, 1);
  }

  75% {
    transform: scale3d(1.05, 0.95, 1);
  }

  to {
    transform: scale3d(1, 1, 1);
  }
`;E`
  from,
  to {
    transform: translate3d(0, 0, 0);
  }

  10%,
  30%,
  50%,
  70%,
  90% {
    transform: translate3d(-10px, 0, 0);
  }

  20%,
  40%,
  60%,
  80% {
    transform: translate3d(10px, 0, 0);
  }
`;E`
  from,
  to {
    transform: translate3d(0, 0, 0);
  }

  10%,
  30%,
  50%,
  70%,
  90% {
    transform: translate3d(-10px, 0, 0);
  }

  20%,
  40%,
  60%,
  80% {
    transform: translate3d(10px, 0, 0);
  }
`;E`
  from,
  to {
    transform: translate3d(0, 0, 0);
  }

  10%,
  30%,
  50%,
  70%,
  90% {
    transform: translate3d(0, -10px, 0);
  }

  20%,
  40%,
  60%,
  80% {
    transform: translate3d(0, 10px, 0);
  }
`;E`
  20% {
    transform: rotate3d(0, 0, 1, 15deg);
  }

  40% {
    transform: rotate3d(0, 0, 1, -10deg);
  }

  60% {
    transform: rotate3d(0, 0, 1, 5deg);
  }

  80% {
    transform: rotate3d(0, 0, 1, -5deg);
  }

  to {
    transform: rotate3d(0, 0, 1, 0deg);
  }
`;E`
  from {
    transform: scale3d(1, 1, 1);
  }

  10%,
  20% {
    transform: scale3d(0.9, 0.9, 0.9) rotate3d(0, 0, 1, -3deg);
  }

  30%,
  50%,
  70%,
  90% {
    transform: scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, 3deg);
  }

  40%,
  60%,
  80% {
    transform: scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, -3deg);
  }

  to {
    transform: scale3d(1, 1, 1);
  }
`;E`
  from {
    transform: translate3d(0, 0, 0);
  }

  15% {
    transform: translate3d(-25%, 0, 0) rotate3d(0, 0, 1, -5deg);
  }

  30% {
    transform: translate3d(20%, 0, 0) rotate3d(0, 0, 1, 3deg);
  }

  45% {
    transform: translate3d(-15%, 0, 0) rotate3d(0, 0, 1, -3deg);
  }

  60% {
    transform: translate3d(10%, 0, 0) rotate3d(0, 0, 1, 2deg);
  }

  75% {
    transform: translate3d(-5%, 0, 0) rotate3d(0, 0, 1, -1deg);
  }

  to {
    transform: translate3d(0, 0, 0);
  }
`;const y3=E`
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
`,x3=E`
  from {
    opacity: 0;
    transform: translate3d(-100%, 100%, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,w3=E`
  from {
    opacity: 0;
    transform: translate3d(100%, 100%, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,S3=E`
  from {
    opacity: 0;
    transform: translate3d(0, -100%, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,k3=E`
  from {
    opacity: 0;
    transform: translate3d(0, -2000px, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,js=E`
  from {
    opacity: 0;
    transform: translate3d(-100%, 0, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,C3=E`
  from {
    opacity: 0;
    transform: translate3d(-2000px, 0, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,E3=E`
  from {
    opacity: 0;
    transform: translate3d(100%, 0, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,z3=E`
  from {
    opacity: 0;
    transform: translate3d(2000px, 0, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,N3=E`
  from {
    opacity: 0;
    transform: translate3d(-100%, -100%, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,P3=E`
  from {
    opacity: 0;
    transform: translate3d(100%, -100%, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,_3=E`
  from {
    opacity: 0;
    transform: translate3d(0, 100%, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,j3=E`
  from {
    opacity: 0;
    transform: translate3d(0, 2000px, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`;function L3({duration:e=1e3,delay:t=0,timingFunction:n="ease",keyframes:r=js,iterationCount:o=1}){return ef`
    animation-duration: ${e}ms;
    animation-timing-function: ${n};
    animation-delay: ${t}ms;
    animation-name: ${r};
    animation-direction: normal;
    animation-fill-mode: both;
    animation-iteration-count: ${o};

    @media (prefers-reduced-motion: reduce) {
      animation: none;
    }
  `}function R3(e){return e==null}function M3(e){return typeof e=="string"||typeof e=="number"||typeof e=="boolean"}function lf(e,t){return n=>n?e():t()}function Rr(e){return lf(e,()=>null)}function wa(e){return Rr(()=>({opacity:0}))(e)}const af=e=>{const{cascade:t=!1,damping:n=.5,delay:r=0,duration:o=1e3,fraction:l=0,keyframes:i=js,triggerOnce:a=!1,className:s,style:u,childClassName:m,childStyle:d,children:h,onVisibilityChange:w}=e,y=k.useMemo(()=>L3({keyframes:i,duration:o}),[o,i]);return R3(h)?null:M3(h)?le(O3,{...e,animationStyles:y,children:String(h)}):v3.isFragment(h)?le(sf,{...e,animationStyles:y}):le(o3,{children:k.Children.map(h,(v,C)=>{if(!k.isValidElement(v))return null;const f=r+(t?C*o*n:0);switch(v.type){case"ol":case"ul":return le(yi,{children:({cx:c})=>le(v.type,{...v.props,className:c(s,v.props.className),style:Object.assign({},u,v.props.style),children:le(af,{...e,children:v.props.children})})});case"li":return le(ac,{threshold:l,triggerOnce:a,onChange:w,children:({inView:c,ref:p})=>le(yi,{children:({cx:x})=>le(v.type,{...v.props,ref:p,className:x(m,v.props.className),css:Rr(()=>y)(c),style:Object.assign({},d,v.props.style,wa(!c),{animationDelay:f+"ms"})})})});default:return le(ac,{threshold:l,triggerOnce:a,onChange:w,children:({inView:c,ref:p})=>le("div",{ref:p,className:s,css:Rr(()=>y)(c),style:Object.assign({},u,wa(!c),{animationDelay:f+"ms"}),children:le(yi,{children:({cx:x})=>le(v.type,{...v.props,className:x(m,v.props.className),style:Object.assign({},d,v.props.style)})})})})}})})},T3={display:"inline-block",whiteSpace:"pre"},O3=e=>{const{animationStyles:t,cascade:n=!1,damping:r=.5,delay:o=0,duration:l=1e3,fraction:i=0,triggerOnce:a=!1,className:s,style:u,children:m,onVisibilityChange:d}=e,{ref:h,inView:w}=nf({triggerOnce:a,threshold:i,onChange:d});return lf(()=>le("div",{ref:h,className:s,style:Object.assign({},u,T3),children:m.split("").map((y,v)=>le("span",{css:Rr(()=>t)(w),style:{animationDelay:o+v*l*r+"ms"},children:y},v))}),()=>le(sf,{...e,children:m}))(n)},sf=e=>{const{animationStyles:t,fraction:n=0,triggerOnce:r=!1,className:o,style:l,children:i,onVisibilityChange:a}=e,{ref:s,inView:u}=nf({triggerOnce:r,threshold:n,onChange:a});return le("div",{ref:s,className:o,css:Rr(()=>t)(u),style:Object.assign({},l,wa(!u)),children:i})};E`
  from,
  20%,
  40%,
  60%,
  80%,
  to {
    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
  }

  0% {
    opacity: 0;
    transform: scale3d(0.3, 0.3, 0.3);
  }

  20% {
    transform: scale3d(1.1, 1.1, 1.1);
  }

  40% {
    transform: scale3d(0.9, 0.9, 0.9);
  }

  60% {
    opacity: 1;
    transform: scale3d(1.03, 1.03, 1.03);
  }

  80% {
    transform: scale3d(0.97, 0.97, 0.97);
  }

  to {
    opacity: 1;
    transform: scale3d(1, 1, 1);
  }
`;E`
  from,
  60%,
  75%,
  90%,
  to {
    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
  }

  0% {
    opacity: 0;
    transform: translate3d(0, -3000px, 0) scaleY(3);
  }

  60% {
    opacity: 1;
    transform: translate3d(0, 25px, 0) scaleY(0.9);
  }

  75% {
    transform: translate3d(0, -10px, 0) scaleY(0.95);
  }

  90% {
    transform: translate3d(0, 5px, 0) scaleY(0.985);
  }

  to {
    transform: translate3d(0, 0, 0);
  }
`;E`
  from,
  60%,
  75%,
  90%,
  to {
    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
  }

  0% {
    opacity: 0;
    transform: translate3d(-3000px, 0, 0) scaleX(3);
  }

  60% {
    opacity: 1;
    transform: translate3d(25px, 0, 0) scaleX(1);
  }

  75% {
    transform: translate3d(-10px, 0, 0) scaleX(0.98);
  }

  90% {
    transform: translate3d(5px, 0, 0) scaleX(0.995);
  }

  to {
    transform: translate3d(0, 0, 0);
  }
`;E`
  from,
  60%,
  75%,
  90%,
  to {
    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
  }

  from {
    opacity: 0;
    transform: translate3d(3000px, 0, 0) scaleX(3);
  }

  60% {
    opacity: 1;
    transform: translate3d(-25px, 0, 0) scaleX(1);
  }

  75% {
    transform: translate3d(10px, 0, 0) scaleX(0.98);
  }

  90% {
    transform: translate3d(-5px, 0, 0) scaleX(0.995);
  }

  to {
    transform: translate3d(0, 0, 0);
  }
`;E`
  from,
  60%,
  75%,
  90%,
  to {
    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
  }

  from {
    opacity: 0;
    transform: translate3d(0, 3000px, 0) scaleY(5);
  }

  60% {
    opacity: 1;
    transform: translate3d(0, -20px, 0) scaleY(0.9);
  }

  75% {
    transform: translate3d(0, 10px, 0) scaleY(0.95);
  }

  90% {
    transform: translate3d(0, -5px, 0) scaleY(0.985);
  }

  to {
    transform: translate3d(0, 0, 0);
  }
`;E`
  20% {
    transform: scale3d(0.9, 0.9, 0.9);
  }

  50%,
  55% {
    opacity: 1;
    transform: scale3d(1.1, 1.1, 1.1);
  }

  to {
    opacity: 0;
    transform: scale3d(0.3, 0.3, 0.3);
  }
`;E`
  20% {
    transform: translate3d(0, 10px, 0) scaleY(0.985);
  }

  40%,
  45% {
    opacity: 1;
    transform: translate3d(0, -20px, 0) scaleY(0.9);
  }

  to {
    opacity: 0;
    transform: translate3d(0, 2000px, 0) scaleY(3);
  }
`;E`
  20% {
    opacity: 1;
    transform: translate3d(20px, 0, 0) scaleX(0.9);
  }

  to {
    opacity: 0;
    transform: translate3d(-2000px, 0, 0) scaleX(2);
  }
`;E`
  20% {
    opacity: 1;
    transform: translate3d(-20px, 0, 0) scaleX(0.9);
  }

  to {
    opacity: 0;
    transform: translate3d(2000px, 0, 0) scaleX(2);
  }
`;E`
  20% {
    transform: translate3d(0, -10px, 0) scaleY(0.985);
  }

  40%,
  45% {
    opacity: 1;
    transform: translate3d(0, 20px, 0) scaleY(0.9);
  }

  to {
    opacity: 0;
    transform: translate3d(0, -2000px, 0) scaleY(3);
  }
`;const I3=E`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
  }
`,$3=E`
  from {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }

  to {
    opacity: 0;
    transform: translate3d(-100%, 100%, 0);
  }
`,F3=E`
  from {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }

  to {
    opacity: 0;
    transform: translate3d(100%, 100%, 0);
  }
`,D3=E`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(0, 100%, 0);
  }
`,U3=E`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(0, 2000px, 0);
  }
`,A3=E`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(-100%, 0, 0);
  }
`,B3=E`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(-2000px, 0, 0);
  }
`,V3=E`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(100%, 0, 0);
  }
`,W3=E`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(2000px, 0, 0);
  }
`,H3=E`
  from {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }

  to {
    opacity: 0;
    transform: translate3d(-100%, -100%, 0);
  }
`,Q3=E`
  from {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }

  to {
    opacity: 0;
    transform: translate3d(100%, -100%, 0);
  }
`,Y3=E`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(0, -100%, 0);
  }
`,K3=E`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(0, -2000px, 0);
  }
`;function X3(e,t,n){switch(n){case"bottom-left":return t?$3:x3;case"bottom-right":return t?F3:w3;case"down":return e?t?U3:k3:t?D3:S3;case"left":return e?t?B3:C3:t?A3:js;case"right":return e?t?W3:z3:t?V3:E3;case"top-left":return t?H3:N3;case"top-right":return t?Q3:P3;case"up":return e?t?K3:j3:t?Y3:_3;default:return t?I3:y3}}const nt=e=>{const{big:t=!1,direction:n,reverse:r=!1,...o}=e,l=k.useMemo(()=>X3(t,r,n),[t,n,r]);return le(af,{keyframes:l,...o})};E`
  from {
    transform: perspective(400px) scale3d(1, 1, 1) translate3d(0, 0, 0) rotate3d(0, 1, 0, -360deg);
    animation-timing-function: ease-out;
  }

  40% {
    transform: perspective(400px) scale3d(1, 1, 1) translate3d(0, 0, 150px)
      rotate3d(0, 1, 0, -190deg);
    animation-timing-function: ease-out;
  }

  50% {
    transform: perspective(400px) scale3d(1, 1, 1) translate3d(0, 0, 150px)
      rotate3d(0, 1, 0, -170deg);
    animation-timing-function: ease-in;
  }

  80% {
    transform: perspective(400px) scale3d(0.95, 0.95, 0.95) translate3d(0, 0, 0)
      rotate3d(0, 1, 0, 0deg);
    animation-timing-function: ease-in;
  }

  to {
    transform: perspective(400px) scale3d(1, 1, 1) translate3d(0, 0, 0) rotate3d(0, 1, 0, 0deg);
    animation-timing-function: ease-in;
  }
`;E`
  from {
    transform: perspective(400px) rotate3d(1, 0, 0, 90deg);
    animation-timing-function: ease-in;
    opacity: 0;
  }

  40% {
    transform: perspective(400px) rotate3d(1, 0, 0, -20deg);
    animation-timing-function: ease-in;
  }

  60% {
    transform: perspective(400px) rotate3d(1, 0, 0, 10deg);
    opacity: 1;
  }

  80% {
    transform: perspective(400px) rotate3d(1, 0, 0, -5deg);
  }

  to {
    transform: perspective(400px);
  }
`;E`
  from {
    transform: perspective(400px) rotate3d(0, 1, 0, 90deg);
    animation-timing-function: ease-in;
    opacity: 0;
  }

  40% {
    transform: perspective(400px) rotate3d(0, 1, 0, -20deg);
    animation-timing-function: ease-in;
  }

  60% {
    transform: perspective(400px) rotate3d(0, 1, 0, 10deg);
    opacity: 1;
  }

  80% {
    transform: perspective(400px) rotate3d(0, 1, 0, -5deg);
  }

  to {
    transform: perspective(400px);
  }
`;E`
  from {
    transform: perspective(400px);
  }

  30% {
    transform: perspective(400px) rotate3d(1, 0, 0, -20deg);
    opacity: 1;
  }

  to {
    transform: perspective(400px) rotate3d(1, 0, 0, 90deg);
    opacity: 0;
  }
`;E`
  from {
    transform: perspective(400px);
  }

  30% {
    transform: perspective(400px) rotate3d(0, 1, 0, -15deg);
    opacity: 1;
  }

  to {
    transform: perspective(400px) rotate3d(0, 1, 0, 90deg);
    opacity: 0;
  }
`;E`
  0% {
    animation-timing-function: ease-in-out;
  }

  20%,
  60% {
    transform: rotate3d(0, 0, 1, 80deg);
    animation-timing-function: ease-in-out;
  }

  40%,
  80% {
    transform: rotate3d(0, 0, 1, 60deg);
    animation-timing-function: ease-in-out;
    opacity: 1;
  }

  to {
    transform: translate3d(0, 700px, 0);
    opacity: 0;
  }
`;E`
  from {
    opacity: 0;
    transform: scale(0.1) rotate(30deg);
    transform-origin: center bottom;
  }

  50% {
    transform: rotate(-10deg);
  }

  70% {
    transform: rotate(3deg);
  }

  to {
    opacity: 1;
    transform: scale(1);
  }
`;E`
  from {
    opacity: 0;
    transform: translate3d(-100%, 0, 0) rotate3d(0, 0, 1, -120deg);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`;E`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(100%, 0, 0) rotate3d(0, 0, 1, 120deg);
  }
`;E`
  from {
    transform: rotate3d(0, 0, 1, -200deg);
    opacity: 0;
  }

  to {
    transform: translate3d(0, 0, 0);
    opacity: 1;
  }
`;E`
  from {
    transform: rotate3d(0, 0, 1, -45deg);
    opacity: 0;
  }

  to {
    transform: translate3d(0, 0, 0);
    opacity: 1;
  }
`;E`
  from {
    transform: rotate3d(0, 0, 1, 45deg);
    opacity: 0;
  }

  to {
    transform: translate3d(0, 0, 0);
    opacity: 1;
  }
`;E`
  from {
    transform: rotate3d(0, 0, 1, 45deg);
    opacity: 0;
  }

  to {
    transform: translate3d(0, 0, 0);
    opacity: 1;
  }
`;E`
  from {
    transform: rotate3d(0, 0, 1, -90deg);
    opacity: 0;
  }

  to {
    transform: translate3d(0, 0, 0);
    opacity: 1;
  }
`;E`
  from {
    opacity: 1;
  }

  to {
    transform: rotate3d(0, 0, 1, 200deg);
    opacity: 0;
  }
`;E`
  from {
    opacity: 1;
  }

  to {
    transform: rotate3d(0, 0, 1, 45deg);
    opacity: 0;
  }
`;E`
  from {
    opacity: 1;
  }

  to {
    transform: rotate3d(0, 0, 1, -45deg);
    opacity: 0;
  }
`;E`
  from {
    opacity: 1;
  }

  to {
    transform: rotate3d(0, 0, 1, -45deg);
    opacity: 0;
  }
`;E`
  from {
    opacity: 1;
  }

  to {
    transform: rotate3d(0, 0, 1, 90deg);
    opacity: 0;
  }
`;E`
  from {
    transform: translate3d(0, -100%, 0);
    visibility: visible;
  }

  to {
    transform: translate3d(0, 0, 0);
  }
`;E`
  from {
    transform: translate3d(-100%, 0, 0);
    visibility: visible;
  }

  to {
    transform: translate3d(0, 0, 0);
  }
`;E`
  from {
    transform: translate3d(100%, 0, 0);
    visibility: visible;
  }

  to {
    transform: translate3d(0, 0, 0);
  }
`;E`
  from {
    transform: translate3d(0, 100%, 0);
    visibility: visible;
  }

  to {
    transform: translate3d(0, 0, 0);
  }
`;E`
  from {
    transform: translate3d(0, 0, 0);
  }

  to {
    visibility: hidden;
    transform: translate3d(0, 100%, 0);
  }
`;E`
  from {
    transform: translate3d(0, 0, 0);
  }

  to {
    visibility: hidden;
    transform: translate3d(-100%, 0, 0);
  }
`;E`
  from {
    transform: translate3d(0, 0, 0);
  }

  to {
    visibility: hidden;
    transform: translate3d(100%, 0, 0);
  }
`;E`
  from {
    transform: translate3d(0, 0, 0);
  }

  to {
    visibility: hidden;
    transform: translate3d(0, -100%, 0);
  }
`;E`
  from {
    opacity: 0;
    transform: scale3d(0.3, 0.3, 0.3);
  }

  50% {
    opacity: 1;
  }
`;E`
  from {
    opacity: 0;
    transform: scale3d(0.1, 0.1, 0.1) translate3d(0, -1000px, 0);
    animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
  }

  60% {
    opacity: 1;
    transform: scale3d(0.475, 0.475, 0.475) translate3d(0, 60px, 0);
    animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);
  }
`;E`
  from {
    opacity: 0;
    transform: scale3d(0.1, 0.1, 0.1) translate3d(-1000px, 0, 0);
    animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
  }

  60% {
    opacity: 1;
    transform: scale3d(0.475, 0.475, 0.475) translate3d(10px, 0, 0);
    animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);
  }
`;E`
  from {
    opacity: 0;
    transform: scale3d(0.1, 0.1, 0.1) translate3d(1000px, 0, 0);
    animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
  }

  60% {
    opacity: 1;
    transform: scale3d(0.475, 0.475, 0.475) translate3d(-10px, 0, 0);
    animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);
  }
`;E`
  from {
    opacity: 0;
    transform: scale3d(0.1, 0.1, 0.1) translate3d(0, 1000px, 0);
    animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
  }

  60% {
    opacity: 1;
    transform: scale3d(0.475, 0.475, 0.475) translate3d(0, -60px, 0);
    animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);
  }
`;E`
  from {
    opacity: 1;
  }

  50% {
    opacity: 0;
    transform: scale3d(0.3, 0.3, 0.3);
  }

  to {
    opacity: 0;
  }
`;E`
  40% {
    opacity: 1;
    transform: scale3d(0.475, 0.475, 0.475) translate3d(0, -60px, 0);
    animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
  }

  to {
    opacity: 0;
    transform: scale3d(0.1, 0.1, 0.1) translate3d(0, 2000px, 0);
    animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);
  }
`;E`
  40% {
    opacity: 1;
    transform: scale3d(0.475, 0.475, 0.475) translate3d(42px, 0, 0);
  }

  to {
    opacity: 0;
    transform: scale(0.1) translate3d(-2000px, 0, 0);
  }
`;E`
  40% {
    opacity: 1;
    transform: scale3d(0.475, 0.475, 0.475) translate3d(-42px, 0, 0);
  }

  to {
    opacity: 0;
    transform: scale(0.1) translate3d(2000px, 0, 0);
  }
`;E`
  40% {
    opacity: 1;
    transform: scale3d(0.475, 0.475, 0.475) translate3d(0, 60px, 0);
    animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
  }

  to {
    opacity: 0;
    transform: scale3d(0.1, 0.1, 0.1) translate3d(0, -2000px, 0);
    animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);
  }
`;function G3(){return g.jsx(O1,{children:g.jsx(I1,{children:g.jsx(nt,{direction:"left",duration:400,children:g.jsxs("article",{className:"flex flex-col gap-4",children:[g.jsxs("h1",{className:"text-6xl font-bold tracking-wider leading-tight dark:text-gray-300",children:["Hello ",g.jsx("br",{})," im ",g.jsx("span",{className:"text-secondary",children:"Armando"})]}),g.jsx("h2",{className:"text-3xl text-secondary font-semibold",children:"Front-End Web Developer"}),g.jsx("p",{className:"text-lg text-primary font-medium max-w-[700px]",children:"¡Hola! Soy Armando, un desarrollo web autodidacta. Mi fascinación por la creación de sitios web comenzó como un hobby y ha evolucionado en una dedicación constante. Dispuesto a explorar continuamente nuevas tecnologías para mejorar mis habilidades."}),g.jsx("ul",{className:"flex gap-6",children:g.jsxs(nt,{direction:"left",duration:400,children:[g.jsx("li",{children:g.jsx("a",{href:"https://github.com/Chencho34",target:"BLANK",children:g.jsx(T1,{className:"dark:fill-gray-300",size:22})})}),g.jsx("li",{children:g.jsx("a",{href:"https://www.linkedin.com/in/armando-cr/",target:"BLANK",children:g.jsx(U2,{className:"dark:fill-gray-300",size:22})})})]})}),g.jsx(nt,{direction:"left",duration:400,children:g.jsx("a",{href:am,download:"cv-armando.pdf",target:"_blank",rel:"noreferrer",children:g.jsx("button",{className:"bg-[#161616] dark:bg-gray-300 dark:text-[#161616] rounded-sm px-7 text-white font-semibold text-sm py-0.5 dark:hover:bg-gray-200 dark:hover:text-gray-500 hover:bg-[#262626] hover:text-gray-300 transition-colors",children:"CV"})})})]})})})})}function Z3(){return g.jsx(g.Fragment,{children:rm.map(({id:e,title:t,image:n,description:r,tecnologies:o,github:l})=>g.jsx(nt,{duration:400,children:g.jsx(Q2,{image:n,title:t,description:r,tecnologies:o,github:l},e)},e))})}function J3(){return g.jsx("main",{className:"h-auto lg:h-screen w-full bg-light dark:bg-dark transition-colors duration-500",children:g.jsxs("article",{className:"w-[90%] h-full mx-auto lg:flex",children:[g.jsx("section",{className:"lg:w-[35%] lg:p-0 pt-28 pb-12 h-full flex items-center justify-center",children:g.jsx(nt,{direction:"left",duration:400,triggerOnce:!0,children:g.jsxs("p",{className:"flex flex-col  text-6xl/tight font-bold text-[#242424] dark:text-gray-300 tracking-widest ",children:["Welcome ",g.jsx("span",{children:"To My"})," Projects"]})})}),g.jsx("section",{className:"lg:w-[65%]  h-full lg:h-auto overflow-hidden overflow-y-auto no-scrollbar",children:g.jsx("article",{className:"grid  2xl:grid-cols-2 xl:grid-cols-2  place-items-center lg:pt-32 lg:pb-16 py-4 gap-8",children:g.jsx(Z3,{})})})]})})}function q3(){return g.jsx(O1,{children:g.jsx(I1,{children:g.jsxs("section",{className:"flex flex-col justify-center w-full gap-8",children:[g.jsx(nt,{direction:"left",duration:300,children:g.jsx("h1",{className:"text-6xl/tight font-bold text-[#242424] dark:text-gray-300  mb-10",children:"Welcome"})}),g.jsxs("section",{className:"flex flex-col gap-20",children:[g.jsxs("article",{className:"lg:flex gap-9 items-start justify-between",children:[g.jsx(nt,{direction:"left",duration:400,children:g.jsxs("article",{className:"w-40",children:[g.jsx("div",{className:"w-20 h-[3px] bg-gradient-to-r from-blue-500 to-cyan-400 rounded-lg"}),g.jsx("h1",{className:"text-4xl font-bold text-[#242424] dark:text-gray-300 tracking-widest pb-4",children:"About"})]})}),g.jsx(nt,{duration:400,direction:"down",children:g.jsx("p",{className:"text-sm font-medium text-primary text-balance lg:w-[500px]",children:"Hola! Soy Armando, un universitario de 21 años apasionado del desarrollo web autodidacta. Mi fascinación por la creación de sitios web comenzó como un hobby y ha evolucionado en una dedicación constante. El desarrollo web me ha permitido adquirir un amplio conocimiento en diferentes áreas, desde el diseño frontend hasta la implementación backend."})})]}),g.jsxs("article",{className:"lg:flex items-start gap-9 justify-between",children:[g.jsx(nt,{direction:"left",duration:400,delay:400,children:g.jsxs("article",{className:"w-40",children:[g.jsx("div",{className:"w-20 h-[3px] bg-gradient-to-r from-blue-500 to-cyan-400 rounded-lg"}),g.jsx("h1",{className:"text-4xl font-bold text-[#242424] dark:text-gray-300 tracking-widest pb-4",children:"Skills"})]})}),g.jsx(nt,{duration:400,direction:"down",delay:400,children:g.jsx("figure",{className:"flex gap-9 flex-wrap lg:w-[500px]",children:nm.map(({id:e,img:t})=>g.jsx("div",{className:"p-2 dark:bg-[#242424] rounded-xl",children:g.jsx("img",{className:"h-6 w-6 hover:scale-150 duration-150 hover:rotate-3",src:t},e)},e))})})]})]})]})})})}function b3(){return g.jsxs(g.Fragment,{children:[g.jsx(im,{}),g.jsxs(P2,{children:[g.jsx(wo,{path:"MyPortfolio/",index:!0,element:g.jsx(G3,{})}),g.jsx(wo,{path:"MyPortfolio/about",element:g.jsx(q3,{})}),g.jsx(wo,{path:"MyPortfolio/projects",element:g.jsx(J3,{})})]})]})}wi.createRoot(document.getElementById("root")).render(g.jsx(ct.StrictMode,{children:g.jsx(T2,{children:g.jsx(b3,{})})}));
