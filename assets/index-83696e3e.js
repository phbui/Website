var jC=(t,e)=>()=>(e||t((e={exports:{}}).exports,e),e.exports);var JN=jC(Js=>{(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))i(s);new MutationObserver(s=>{for(const o of s)if(o.type==="childList")for(const l of o.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&i(l)}).observe(document,{childList:!0,subtree:!0});function n(s){const o={};return s.integrity&&(o.integrity=s.integrity),s.referrerPolicy&&(o.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?o.credentials="include":s.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function i(s){if(s.ep)return;s.ep=!0;const o=n(s);fetch(s.href,o)}})();var ll=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function tS(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var nS={exports:{}},Tf={},iS={exports:{}},pt={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var tu=Symbol.for("react.element"),qC=Symbol.for("react.portal"),YC=Symbol.for("react.fragment"),$C=Symbol.for("react.strict_mode"),KC=Symbol.for("react.profiler"),ZC=Symbol.for("react.provider"),QC=Symbol.for("react.context"),JC=Symbol.for("react.forward_ref"),e2=Symbol.for("react.suspense"),t2=Symbol.for("react.memo"),n2=Symbol.for("react.lazy"),Av=Symbol.iterator;function i2(t){return t===null||typeof t!="object"?null:(t=Av&&t[Av]||t["@@iterator"],typeof t=="function"?t:null)}var rS={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},sS=Object.assign,oS={};function Ba(t,e,n){this.props=t,this.context=e,this.refs=oS,this.updater=n||rS}Ba.prototype.isReactComponent={};Ba.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};Ba.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function aS(){}aS.prototype=Ba.prototype;function lm(t,e,n){this.props=t,this.context=e,this.refs=oS,this.updater=n||rS}var um=lm.prototype=new aS;um.constructor=lm;sS(um,Ba.prototype);um.isPureReactComponent=!0;var Rv=Array.isArray,lS=Object.prototype.hasOwnProperty,cm={current:null},uS={key:!0,ref:!0,__self:!0,__source:!0};function cS(t,e,n){var i,s={},o=null,l=null;if(e!=null)for(i in e.ref!==void 0&&(l=e.ref),e.key!==void 0&&(o=""+e.key),e)lS.call(e,i)&&!uS.hasOwnProperty(i)&&(s[i]=e[i]);var u=arguments.length-2;if(u===1)s.children=n;else if(1<u){for(var f=Array(u),d=0;d<u;d++)f[d]=arguments[d+2];s.children=f}if(t&&t.defaultProps)for(i in u=t.defaultProps,u)s[i]===void 0&&(s[i]=u[i]);return{$$typeof:tu,type:t,key:o,ref:l,props:s,_owner:cm.current}}function r2(t,e){return{$$typeof:tu,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function fm(t){return typeof t=="object"&&t!==null&&t.$$typeof===tu}function s2(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var Cv=/\/+/g;function ih(t,e){return typeof t=="object"&&t!==null&&t.key!=null?s2(""+t.key):e.toString(36)}function Oc(t,e,n,i,s){var o=typeof t;(o==="undefined"||o==="boolean")&&(t=null);var l=!1;if(t===null)l=!0;else switch(o){case"string":case"number":l=!0;break;case"object":switch(t.$$typeof){case tu:case qC:l=!0}}if(l)return l=t,s=s(l),t=i===""?"."+ih(l,0):i,Rv(s)?(n="",t!=null&&(n=t.replace(Cv,"$&/")+"/"),Oc(s,e,n,"",function(d){return d})):s!=null&&(fm(s)&&(s=r2(s,n+(!s.key||l&&l.key===s.key?"":(""+s.key).replace(Cv,"$&/")+"/")+t)),e.push(s)),1;if(l=0,i=i===""?".":i+":",Rv(t))for(var u=0;u<t.length;u++){o=t[u];var f=i+ih(o,u);l+=Oc(o,e,n,f,s)}else if(f=i2(t),typeof f=="function")for(t=f.call(t),u=0;!(o=t.next()).done;)o=o.value,f=i+ih(o,u++),l+=Oc(o,e,n,f,s);else if(o==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return l}function Qu(t,e,n){if(t==null)return t;var i=[],s=0;return Oc(t,i,"","",function(o){return e.call(n,o,s++)}),i}function o2(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var Hn={current:null},Bc={transition:null},a2={ReactCurrentDispatcher:Hn,ReactCurrentBatchConfig:Bc,ReactCurrentOwner:cm};pt.Children={map:Qu,forEach:function(t,e,n){Qu(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return Qu(t,function(){e++}),e},toArray:function(t){return Qu(t,function(e){return e})||[]},only:function(t){if(!fm(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};pt.Component=Ba;pt.Fragment=YC;pt.Profiler=KC;pt.PureComponent=lm;pt.StrictMode=$C;pt.Suspense=e2;pt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=a2;pt.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var i=sS({},t.props),s=t.key,o=t.ref,l=t._owner;if(e!=null){if(e.ref!==void 0&&(o=e.ref,l=cm.current),e.key!==void 0&&(s=""+e.key),t.type&&t.type.defaultProps)var u=t.type.defaultProps;for(f in e)lS.call(e,f)&&!uS.hasOwnProperty(f)&&(i[f]=e[f]===void 0&&u!==void 0?u[f]:e[f])}var f=arguments.length-2;if(f===1)i.children=n;else if(1<f){u=Array(f);for(var d=0;d<f;d++)u[d]=arguments[d+2];i.children=u}return{$$typeof:tu,type:t.type,key:s,ref:o,props:i,_owner:l}};pt.createContext=function(t){return t={$$typeof:QC,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:ZC,_context:t},t.Consumer=t};pt.createElement=cS;pt.createFactory=function(t){var e=cS.bind(null,t);return e.type=t,e};pt.createRef=function(){return{current:null}};pt.forwardRef=function(t){return{$$typeof:JC,render:t}};pt.isValidElement=fm;pt.lazy=function(t){return{$$typeof:n2,_payload:{_status:-1,_result:t},_init:o2}};pt.memo=function(t,e){return{$$typeof:t2,type:t,compare:e===void 0?null:e}};pt.startTransition=function(t){var e=Bc.transition;Bc.transition={};try{t()}finally{Bc.transition=e}};pt.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")};pt.useCallback=function(t,e){return Hn.current.useCallback(t,e)};pt.useContext=function(t){return Hn.current.useContext(t)};pt.useDebugValue=function(){};pt.useDeferredValue=function(t){return Hn.current.useDeferredValue(t)};pt.useEffect=function(t,e){return Hn.current.useEffect(t,e)};pt.useId=function(){return Hn.current.useId()};pt.useImperativeHandle=function(t,e,n){return Hn.current.useImperativeHandle(t,e,n)};pt.useInsertionEffect=function(t,e){return Hn.current.useInsertionEffect(t,e)};pt.useLayoutEffect=function(t,e){return Hn.current.useLayoutEffect(t,e)};pt.useMemo=function(t,e){return Hn.current.useMemo(t,e)};pt.useReducer=function(t,e,n){return Hn.current.useReducer(t,e,n)};pt.useRef=function(t){return Hn.current.useRef(t)};pt.useState=function(t){return Hn.current.useState(t)};pt.useSyncExternalStore=function(t,e,n){return Hn.current.useSyncExternalStore(t,e,n)};pt.useTransition=function(){return Hn.current.useTransition()};pt.version="18.2.0";iS.exports=pt;var Nt=iS.exports;const fS=tS(Nt);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var l2=Nt,u2=Symbol.for("react.element"),c2=Symbol.for("react.fragment"),f2=Object.prototype.hasOwnProperty,d2=l2.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,h2={key:!0,ref:!0,__self:!0,__source:!0};function dS(t,e,n){var i,s={},o=null,l=null;n!==void 0&&(o=""+n),e.key!==void 0&&(o=""+e.key),e.ref!==void 0&&(l=e.ref);for(i in e)f2.call(e,i)&&!h2.hasOwnProperty(i)&&(s[i]=e[i]);if(t&&t.defaultProps)for(i in e=t.defaultProps,e)s[i]===void 0&&(s[i]=e[i]);return{$$typeof:u2,type:t,key:o,ref:l,props:s,_owner:d2.current}}Tf.Fragment=c2;Tf.jsx=dS;Tf.jsxs=dS;nS.exports=Tf;var de=nS.exports,hS={exports:{}},vi={},pS={exports:{}},mS={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(z,te){var Y=z.length;z.push(te);e:for(;0<Y;){var V=Y-1>>>1,$=z[V];if(0<s($,te))z[V]=te,z[Y]=$,Y=V;else break e}}function n(z){return z.length===0?null:z[0]}function i(z){if(z.length===0)return null;var te=z[0],Y=z.pop();if(Y!==te){z[0]=Y;e:for(var V=0,$=z.length,ye=$>>>1;V<ye;){var xe=2*(V+1)-1,Me=z[xe],De=xe+1,je=z[De];if(0>s(Me,Y))De<$&&0>s(je,Me)?(z[V]=je,z[De]=Y,V=De):(z[V]=Me,z[xe]=Y,V=xe);else if(De<$&&0>s(je,Y))z[V]=je,z[De]=Y,V=De;else break e}}return te}function s(z,te){var Y=z.sortIndex-te.sortIndex;return Y!==0?Y:z.id-te.id}if(typeof performance=="object"&&typeof performance.now=="function"){var o=performance;t.unstable_now=function(){return o.now()}}else{var l=Date,u=l.now();t.unstable_now=function(){return l.now()-u}}var f=[],d=[],p=1,g=null,_=3,x=!1,E=!1,T=!1,v=typeof setTimeout=="function"?setTimeout:null,h=typeof clearTimeout=="function"?clearTimeout:null,y=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function S(z){for(var te=n(d);te!==null;){if(te.callback===null)i(d);else if(te.startTime<=z)i(d),te.sortIndex=te.expirationTime,e(f,te);else break;te=n(d)}}function w(z){if(T=!1,S(z),!E)if(n(f)!==null)E=!0,fe(P);else{var te=n(d);te!==null&&ee(w,te.startTime-z)}}function P(z,te){E=!1,T&&(T=!1,h(H),H=-1),x=!0;var Y=_;try{for(S(te),g=n(f);g!==null&&(!(g.expirationTime>te)||z&&!oe());){var V=g.callback;if(typeof V=="function"){g.callback=null,_=g.priorityLevel;var $=V(g.expirationTime<=te);te=t.unstable_now(),typeof $=="function"?g.callback=$:g===n(f)&&i(f),S(te)}else i(f);g=n(f)}if(g!==null)var ye=!0;else{var xe=n(d);xe!==null&&ee(w,xe.startTime-te),ye=!1}return ye}finally{g=null,_=Y,x=!1}}var I=!1,D=null,H=-1,C=5,U=-1;function oe(){return!(t.unstable_now()-U<C)}function he(){if(D!==null){var z=t.unstable_now();U=z;var te=!0;try{te=D(!0,z)}finally{te?q():(I=!1,D=null)}}else I=!1}var q;if(typeof y=="function")q=function(){y(he)};else if(typeof MessageChannel<"u"){var J=new MessageChannel,ie=J.port2;J.port1.onmessage=he,q=function(){ie.postMessage(null)}}else q=function(){v(he,0)};function fe(z){D=z,I||(I=!0,q())}function ee(z,te){H=v(function(){z(t.unstable_now())},te)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(z){z.callback=null},t.unstable_continueExecution=function(){E||x||(E=!0,fe(P))},t.unstable_forceFrameRate=function(z){0>z||125<z?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):C=0<z?Math.floor(1e3/z):5},t.unstable_getCurrentPriorityLevel=function(){return _},t.unstable_getFirstCallbackNode=function(){return n(f)},t.unstable_next=function(z){switch(_){case 1:case 2:case 3:var te=3;break;default:te=_}var Y=_;_=te;try{return z()}finally{_=Y}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(z,te){switch(z){case 1:case 2:case 3:case 4:case 5:break;default:z=3}var Y=_;_=z;try{return te()}finally{_=Y}},t.unstable_scheduleCallback=function(z,te,Y){var V=t.unstable_now();switch(typeof Y=="object"&&Y!==null?(Y=Y.delay,Y=typeof Y=="number"&&0<Y?V+Y:V):Y=V,z){case 1:var $=-1;break;case 2:$=250;break;case 5:$=1073741823;break;case 4:$=1e4;break;default:$=5e3}return $=Y+$,z={id:p++,callback:te,priorityLevel:z,startTime:Y,expirationTime:$,sortIndex:-1},Y>V?(z.sortIndex=Y,e(d,z),n(f)===null&&z===n(d)&&(T?(h(H),H=-1):T=!0,ee(w,Y-V))):(z.sortIndex=$,e(f,z),E||x||(E=!0,fe(P))),z},t.unstable_shouldYield=oe,t.unstable_wrapCallback=function(z){var te=_;return function(){var Y=_;_=te;try{return z.apply(this,arguments)}finally{_=Y}}}})(mS);pS.exports=mS;var p2=pS.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var gS=Nt,_i=p2;function me(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var _S=new Set,Fl={};function vo(t,e){Ra(t,e),Ra(t+"Capture",e)}function Ra(t,e){for(Fl[t]=e,t=0;t<e.length;t++)_S.add(e[t])}var Wr=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),sp=Object.prototype.hasOwnProperty,m2=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Lv={},Pv={};function g2(t){return sp.call(Pv,t)?!0:sp.call(Lv,t)?!1:m2.test(t)?Pv[t]=!0:(Lv[t]=!0,!1)}function _2(t,e,n,i){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return i?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function v2(t,e,n,i){if(e===null||typeof e>"u"||_2(t,e,n,i))return!0;if(i)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function Gn(t,e,n,i,s,o,l){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=i,this.attributeNamespace=s,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=o,this.removeEmptyString=l}var Tn={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){Tn[t]=new Gn(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];Tn[e]=new Gn(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){Tn[t]=new Gn(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){Tn[t]=new Gn(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){Tn[t]=new Gn(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){Tn[t]=new Gn(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){Tn[t]=new Gn(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){Tn[t]=new Gn(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){Tn[t]=new Gn(t,5,!1,t.toLowerCase(),null,!1,!1)});var dm=/[\-:]([a-z])/g;function hm(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(dm,hm);Tn[e]=new Gn(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(dm,hm);Tn[e]=new Gn(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(dm,hm);Tn[e]=new Gn(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){Tn[t]=new Gn(t,1,!1,t.toLowerCase(),null,!1,!1)});Tn.xlinkHref=new Gn("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){Tn[t]=new Gn(t,1,!1,t.toLowerCase(),null,!0,!0)});function pm(t,e,n,i){var s=Tn.hasOwnProperty(e)?Tn[e]:null;(s!==null?s.type!==0:i||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(v2(e,n,s,i)&&(n=null),i||s===null?g2(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):s.mustUseProperty?t[s.propertyName]=n===null?s.type===3?!1:"":n:(e=s.attributeName,i=s.attributeNamespace,n===null?t.removeAttribute(e):(s=s.type,n=s===3||s===4&&n===!0?"":""+n,i?t.setAttributeNS(i,e,n):t.setAttribute(e,n))))}var $r=gS.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Ju=Symbol.for("react.element"),ra=Symbol.for("react.portal"),sa=Symbol.for("react.fragment"),mm=Symbol.for("react.strict_mode"),op=Symbol.for("react.profiler"),vS=Symbol.for("react.provider"),xS=Symbol.for("react.context"),gm=Symbol.for("react.forward_ref"),ap=Symbol.for("react.suspense"),lp=Symbol.for("react.suspense_list"),_m=Symbol.for("react.memo"),fs=Symbol.for("react.lazy"),SS=Symbol.for("react.offscreen"),bv=Symbol.iterator;function ul(t){return t===null||typeof t!="object"?null:(t=bv&&t[bv]||t["@@iterator"],typeof t=="function"?t:null)}var jt=Object.assign,rh;function yl(t){if(rh===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);rh=e&&e[1]||""}return`
`+rh+t}var sh=!1;function oh(t,e){if(!t||sh)return"";sh=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(d){var i=d}Reflect.construct(t,[],e)}else{try{e.call()}catch(d){i=d}t.call(e.prototype)}else{try{throw Error()}catch(d){i=d}t()}}catch(d){if(d&&i&&typeof d.stack=="string"){for(var s=d.stack.split(`
`),o=i.stack.split(`
`),l=s.length-1,u=o.length-1;1<=l&&0<=u&&s[l]!==o[u];)u--;for(;1<=l&&0<=u;l--,u--)if(s[l]!==o[u]){if(l!==1||u!==1)do if(l--,u--,0>u||s[l]!==o[u]){var f=`
`+s[l].replace(" at new "," at ");return t.displayName&&f.includes("<anonymous>")&&(f=f.replace("<anonymous>",t.displayName)),f}while(1<=l&&0<=u);break}}}finally{sh=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?yl(t):""}function x2(t){switch(t.tag){case 5:return yl(t.type);case 16:return yl("Lazy");case 13:return yl("Suspense");case 19:return yl("SuspenseList");case 0:case 2:case 15:return t=oh(t.type,!1),t;case 11:return t=oh(t.type.render,!1),t;case 1:return t=oh(t.type,!0),t;default:return""}}function up(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case sa:return"Fragment";case ra:return"Portal";case op:return"Profiler";case mm:return"StrictMode";case ap:return"Suspense";case lp:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case xS:return(t.displayName||"Context")+".Consumer";case vS:return(t._context.displayName||"Context")+".Provider";case gm:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case _m:return e=t.displayName||null,e!==null?e:up(t.type)||"Memo";case fs:e=t._payload,t=t._init;try{return up(t(e))}catch{}}return null}function S2(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return up(e);case 8:return e===mm?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function Ls(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function yS(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function y2(t){var e=yS(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),i=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var s=n.get,o=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return s.call(this)},set:function(l){i=""+l,o.call(this,l)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return i},setValue:function(l){i=""+l},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function ec(t){t._valueTracker||(t._valueTracker=y2(t))}function MS(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),i="";return t&&(i=yS(t)?t.checked?"true":"false":t.value),t=i,t!==n?(e.setValue(t),!0):!1}function Kc(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function cp(t,e){var n=e.checked;return jt({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function Uv(t,e){var n=e.defaultValue==null?"":e.defaultValue,i=e.checked!=null?e.checked:e.defaultChecked;n=Ls(e.value!=null?e.value:n),t._wrapperState={initialChecked:i,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function ES(t,e){e=e.checked,e!=null&&pm(t,"checked",e,!1)}function fp(t,e){ES(t,e);var n=Ls(e.value),i=e.type;if(n!=null)i==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(i==="submit"||i==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?dp(t,e.type,n):e.hasOwnProperty("defaultValue")&&dp(t,e.type,Ls(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function Dv(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var i=e.type;if(!(i!=="submit"&&i!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function dp(t,e,n){(e!=="number"||Kc(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var Ml=Array.isArray;function va(t,e,n,i){if(t=t.options,e){e={};for(var s=0;s<n.length;s++)e["$"+n[s]]=!0;for(n=0;n<t.length;n++)s=e.hasOwnProperty("$"+t[n].value),t[n].selected!==s&&(t[n].selected=s),s&&i&&(t[n].defaultSelected=!0)}else{for(n=""+Ls(n),e=null,s=0;s<t.length;s++){if(t[s].value===n){t[s].selected=!0,i&&(t[s].defaultSelected=!0);return}e!==null||t[s].disabled||(e=t[s])}e!==null&&(e.selected=!0)}}function hp(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(me(91));return jt({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function Iv(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(me(92));if(Ml(n)){if(1<n.length)throw Error(me(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:Ls(n)}}function TS(t,e){var n=Ls(e.value),i=Ls(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),i!=null&&(t.defaultValue=""+i)}function Nv(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function wS(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function pp(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?wS(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var tc,AS=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,i,s){MSApp.execUnsafeLocalFunction(function(){return t(e,n,i,s)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(tc=tc||document.createElement("div"),tc.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=tc.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function Ol(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var Al={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},M2=["Webkit","ms","Moz","O"];Object.keys(Al).forEach(function(t){M2.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),Al[e]=Al[t]})});function RS(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||Al.hasOwnProperty(t)&&Al[t]?(""+e).trim():e+"px"}function CS(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var i=n.indexOf("--")===0,s=RS(n,e[n],i);n==="float"&&(n="cssFloat"),i?t.setProperty(n,s):t[n]=s}}var E2=jt({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function mp(t,e){if(e){if(E2[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(me(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(me(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(me(61))}if(e.style!=null&&typeof e.style!="object")throw Error(me(62))}}function gp(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var _p=null;function vm(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var vp=null,xa=null,Sa=null;function Fv(t){if(t=ru(t)){if(typeof vp!="function")throw Error(me(280));var e=t.stateNode;e&&(e=Lf(e),vp(t.stateNode,t.type,e))}}function LS(t){xa?Sa?Sa.push(t):Sa=[t]:xa=t}function PS(){if(xa){var t=xa,e=Sa;if(Sa=xa=null,Fv(t),e)for(t=0;t<e.length;t++)Fv(e[t])}}function bS(t,e){return t(e)}function US(){}var ah=!1;function DS(t,e,n){if(ah)return t(e,n);ah=!0;try{return bS(t,e,n)}finally{ah=!1,(xa!==null||Sa!==null)&&(US(),PS())}}function Bl(t,e){var n=t.stateNode;if(n===null)return null;var i=Lf(n);if(i===null)return null;n=i[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(i=!i.disabled)||(t=t.type,i=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!i;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(me(231,e,typeof n));return n}var xp=!1;if(Wr)try{var cl={};Object.defineProperty(cl,"passive",{get:function(){xp=!0}}),window.addEventListener("test",cl,cl),window.removeEventListener("test",cl,cl)}catch{xp=!1}function T2(t,e,n,i,s,o,l,u,f){var d=Array.prototype.slice.call(arguments,3);try{e.apply(n,d)}catch(p){this.onError(p)}}var Rl=!1,Zc=null,Qc=!1,Sp=null,w2={onError:function(t){Rl=!0,Zc=t}};function A2(t,e,n,i,s,o,l,u,f){Rl=!1,Zc=null,T2.apply(w2,arguments)}function R2(t,e,n,i,s,o,l,u,f){if(A2.apply(this,arguments),Rl){if(Rl){var d=Zc;Rl=!1,Zc=null}else throw Error(me(198));Qc||(Qc=!0,Sp=d)}}function xo(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function IS(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function Ov(t){if(xo(t)!==t)throw Error(me(188))}function C2(t){var e=t.alternate;if(!e){if(e=xo(t),e===null)throw Error(me(188));return e!==t?null:t}for(var n=t,i=e;;){var s=n.return;if(s===null)break;var o=s.alternate;if(o===null){if(i=s.return,i!==null){n=i;continue}break}if(s.child===o.child){for(o=s.child;o;){if(o===n)return Ov(s),t;if(o===i)return Ov(s),e;o=o.sibling}throw Error(me(188))}if(n.return!==i.return)n=s,i=o;else{for(var l=!1,u=s.child;u;){if(u===n){l=!0,n=s,i=o;break}if(u===i){l=!0,i=s,n=o;break}u=u.sibling}if(!l){for(u=o.child;u;){if(u===n){l=!0,n=o,i=s;break}if(u===i){l=!0,i=o,n=s;break}u=u.sibling}if(!l)throw Error(me(189))}}if(n.alternate!==i)throw Error(me(190))}if(n.tag!==3)throw Error(me(188));return n.stateNode.current===n?t:e}function NS(t){return t=C2(t),t!==null?FS(t):null}function FS(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=FS(t);if(e!==null)return e;t=t.sibling}return null}var OS=_i.unstable_scheduleCallback,Bv=_i.unstable_cancelCallback,L2=_i.unstable_shouldYield,P2=_i.unstable_requestPaint,Qt=_i.unstable_now,b2=_i.unstable_getCurrentPriorityLevel,xm=_i.unstable_ImmediatePriority,BS=_i.unstable_UserBlockingPriority,Jc=_i.unstable_NormalPriority,U2=_i.unstable_LowPriority,zS=_i.unstable_IdlePriority,wf=null,fr=null;function D2(t){if(fr&&typeof fr.onCommitFiberRoot=="function")try{fr.onCommitFiberRoot(wf,t,void 0,(t.current.flags&128)===128)}catch{}}var er=Math.clz32?Math.clz32:F2,I2=Math.log,N2=Math.LN2;function F2(t){return t>>>=0,t===0?32:31-(I2(t)/N2|0)|0}var nc=64,ic=4194304;function El(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function ef(t,e){var n=t.pendingLanes;if(n===0)return 0;var i=0,s=t.suspendedLanes,o=t.pingedLanes,l=n&268435455;if(l!==0){var u=l&~s;u!==0?i=El(u):(o&=l,o!==0&&(i=El(o)))}else l=n&~s,l!==0?i=El(l):o!==0&&(i=El(o));if(i===0)return 0;if(e!==0&&e!==i&&!(e&s)&&(s=i&-i,o=e&-e,s>=o||s===16&&(o&4194240)!==0))return e;if(i&4&&(i|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=i;0<e;)n=31-er(e),s=1<<n,i|=t[n],e&=~s;return i}function O2(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function B2(t,e){for(var n=t.suspendedLanes,i=t.pingedLanes,s=t.expirationTimes,o=t.pendingLanes;0<o;){var l=31-er(o),u=1<<l,f=s[l];f===-1?(!(u&n)||u&i)&&(s[l]=O2(u,e)):f<=e&&(t.expiredLanes|=u),o&=~u}}function yp(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function kS(){var t=nc;return nc<<=1,!(nc&4194240)&&(nc=64),t}function lh(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function nu(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-er(e),t[e]=n}function z2(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var i=t.eventTimes;for(t=t.expirationTimes;0<n;){var s=31-er(n),o=1<<s;e[s]=0,i[s]=-1,t[s]=-1,n&=~o}}function Sm(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var i=31-er(n),s=1<<i;s&e|t[i]&e&&(t[i]|=e),n&=~s}}var wt=0;function HS(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var GS,ym,VS,WS,XS,Mp=!1,rc=[],xs=null,Ss=null,ys=null,zl=new Map,kl=new Map,hs=[],k2="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function zv(t,e){switch(t){case"focusin":case"focusout":xs=null;break;case"dragenter":case"dragleave":Ss=null;break;case"mouseover":case"mouseout":ys=null;break;case"pointerover":case"pointerout":zl.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":kl.delete(e.pointerId)}}function fl(t,e,n,i,s,o){return t===null||t.nativeEvent!==o?(t={blockedOn:e,domEventName:n,eventSystemFlags:i,nativeEvent:o,targetContainers:[s]},e!==null&&(e=ru(e),e!==null&&ym(e)),t):(t.eventSystemFlags|=i,e=t.targetContainers,s!==null&&e.indexOf(s)===-1&&e.push(s),t)}function H2(t,e,n,i,s){switch(e){case"focusin":return xs=fl(xs,t,e,n,i,s),!0;case"dragenter":return Ss=fl(Ss,t,e,n,i,s),!0;case"mouseover":return ys=fl(ys,t,e,n,i,s),!0;case"pointerover":var o=s.pointerId;return zl.set(o,fl(zl.get(o)||null,t,e,n,i,s)),!0;case"gotpointercapture":return o=s.pointerId,kl.set(o,fl(kl.get(o)||null,t,e,n,i,s)),!0}return!1}function jS(t){var e=eo(t.target);if(e!==null){var n=xo(e);if(n!==null){if(e=n.tag,e===13){if(e=IS(n),e!==null){t.blockedOn=e,XS(t.priority,function(){VS(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function zc(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=Ep(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var i=new n.constructor(n.type,n);_p=i,n.target.dispatchEvent(i),_p=null}else return e=ru(n),e!==null&&ym(e),t.blockedOn=n,!1;e.shift()}return!0}function kv(t,e,n){zc(t)&&n.delete(e)}function G2(){Mp=!1,xs!==null&&zc(xs)&&(xs=null),Ss!==null&&zc(Ss)&&(Ss=null),ys!==null&&zc(ys)&&(ys=null),zl.forEach(kv),kl.forEach(kv)}function dl(t,e){t.blockedOn===e&&(t.blockedOn=null,Mp||(Mp=!0,_i.unstable_scheduleCallback(_i.unstable_NormalPriority,G2)))}function Hl(t){function e(s){return dl(s,t)}if(0<rc.length){dl(rc[0],t);for(var n=1;n<rc.length;n++){var i=rc[n];i.blockedOn===t&&(i.blockedOn=null)}}for(xs!==null&&dl(xs,t),Ss!==null&&dl(Ss,t),ys!==null&&dl(ys,t),zl.forEach(e),kl.forEach(e),n=0;n<hs.length;n++)i=hs[n],i.blockedOn===t&&(i.blockedOn=null);for(;0<hs.length&&(n=hs[0],n.blockedOn===null);)jS(n),n.blockedOn===null&&hs.shift()}var ya=$r.ReactCurrentBatchConfig,tf=!0;function V2(t,e,n,i){var s=wt,o=ya.transition;ya.transition=null;try{wt=1,Mm(t,e,n,i)}finally{wt=s,ya.transition=o}}function W2(t,e,n,i){var s=wt,o=ya.transition;ya.transition=null;try{wt=4,Mm(t,e,n,i)}finally{wt=s,ya.transition=o}}function Mm(t,e,n,i){if(tf){var s=Ep(t,e,n,i);if(s===null)vh(t,e,i,nf,n),zv(t,i);else if(H2(s,t,e,n,i))i.stopPropagation();else if(zv(t,i),e&4&&-1<k2.indexOf(t)){for(;s!==null;){var o=ru(s);if(o!==null&&GS(o),o=Ep(t,e,n,i),o===null&&vh(t,e,i,nf,n),o===s)break;s=o}s!==null&&i.stopPropagation()}else vh(t,e,i,null,n)}}var nf=null;function Ep(t,e,n,i){if(nf=null,t=vm(i),t=eo(t),t!==null)if(e=xo(t),e===null)t=null;else if(n=e.tag,n===13){if(t=IS(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return nf=t,null}function qS(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(b2()){case xm:return 1;case BS:return 4;case Jc:case U2:return 16;case zS:return 536870912;default:return 16}default:return 16}}var ms=null,Em=null,kc=null;function YS(){if(kc)return kc;var t,e=Em,n=e.length,i,s="value"in ms?ms.value:ms.textContent,o=s.length;for(t=0;t<n&&e[t]===s[t];t++);var l=n-t;for(i=1;i<=l&&e[n-i]===s[o-i];i++);return kc=s.slice(t,1<i?1-i:void 0)}function Hc(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function sc(){return!0}function Hv(){return!1}function xi(t){function e(n,i,s,o,l){this._reactName=n,this._targetInst=s,this.type=i,this.nativeEvent=o,this.target=l,this.currentTarget=null;for(var u in t)t.hasOwnProperty(u)&&(n=t[u],this[u]=n?n(o):o[u]);return this.isDefaultPrevented=(o.defaultPrevented!=null?o.defaultPrevented:o.returnValue===!1)?sc:Hv,this.isPropagationStopped=Hv,this}return jt(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=sc)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=sc)},persist:function(){},isPersistent:sc}),e}var za={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Tm=xi(za),iu=jt({},za,{view:0,detail:0}),X2=xi(iu),uh,ch,hl,Af=jt({},iu,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:wm,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==hl&&(hl&&t.type==="mousemove"?(uh=t.screenX-hl.screenX,ch=t.screenY-hl.screenY):ch=uh=0,hl=t),uh)},movementY:function(t){return"movementY"in t?t.movementY:ch}}),Gv=xi(Af),j2=jt({},Af,{dataTransfer:0}),q2=xi(j2),Y2=jt({},iu,{relatedTarget:0}),fh=xi(Y2),$2=jt({},za,{animationName:0,elapsedTime:0,pseudoElement:0}),K2=xi($2),Z2=jt({},za,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),Q2=xi(Z2),J2=jt({},za,{data:0}),Vv=xi(J2),eL={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},tL={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},nL={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function iL(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=nL[t])?!!e[t]:!1}function wm(){return iL}var rL=jt({},iu,{key:function(t){if(t.key){var e=eL[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=Hc(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?tL[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:wm,charCode:function(t){return t.type==="keypress"?Hc(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Hc(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),sL=xi(rL),oL=jt({},Af,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Wv=xi(oL),aL=jt({},iu,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:wm}),lL=xi(aL),uL=jt({},za,{propertyName:0,elapsedTime:0,pseudoElement:0}),cL=xi(uL),fL=jt({},Af,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),dL=xi(fL),hL=[9,13,27,32],Am=Wr&&"CompositionEvent"in window,Cl=null;Wr&&"documentMode"in document&&(Cl=document.documentMode);var pL=Wr&&"TextEvent"in window&&!Cl,$S=Wr&&(!Am||Cl&&8<Cl&&11>=Cl),Xv=String.fromCharCode(32),jv=!1;function KS(t,e){switch(t){case"keyup":return hL.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function ZS(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var oa=!1;function mL(t,e){switch(t){case"compositionend":return ZS(e);case"keypress":return e.which!==32?null:(jv=!0,Xv);case"textInput":return t=e.data,t===Xv&&jv?null:t;default:return null}}function gL(t,e){if(oa)return t==="compositionend"||!Am&&KS(t,e)?(t=YS(),kc=Em=ms=null,oa=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return $S&&e.locale!=="ko"?null:e.data;default:return null}}var _L={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function qv(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!_L[t.type]:e==="textarea"}function QS(t,e,n,i){LS(i),e=rf(e,"onChange"),0<e.length&&(n=new Tm("onChange","change",null,n,i),t.push({event:n,listeners:e}))}var Ll=null,Gl=null;function vL(t){uy(t,0)}function Rf(t){var e=ua(t);if(MS(e))return t}function xL(t,e){if(t==="change")return e}var JS=!1;if(Wr){var dh;if(Wr){var hh="oninput"in document;if(!hh){var Yv=document.createElement("div");Yv.setAttribute("oninput","return;"),hh=typeof Yv.oninput=="function"}dh=hh}else dh=!1;JS=dh&&(!document.documentMode||9<document.documentMode)}function $v(){Ll&&(Ll.detachEvent("onpropertychange",ey),Gl=Ll=null)}function ey(t){if(t.propertyName==="value"&&Rf(Gl)){var e=[];QS(e,Gl,t,vm(t)),DS(vL,e)}}function SL(t,e,n){t==="focusin"?($v(),Ll=e,Gl=n,Ll.attachEvent("onpropertychange",ey)):t==="focusout"&&$v()}function yL(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return Rf(Gl)}function ML(t,e){if(t==="click")return Rf(e)}function EL(t,e){if(t==="input"||t==="change")return Rf(e)}function TL(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var nr=typeof Object.is=="function"?Object.is:TL;function Vl(t,e){if(nr(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),i=Object.keys(e);if(n.length!==i.length)return!1;for(i=0;i<n.length;i++){var s=n[i];if(!sp.call(e,s)||!nr(t[s],e[s]))return!1}return!0}function Kv(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function Zv(t,e){var n=Kv(t);t=0;for(var i;n;){if(n.nodeType===3){if(i=t+n.textContent.length,t<=e&&i>=e)return{node:n,offset:e-t};t=i}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Kv(n)}}function ty(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?ty(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function ny(){for(var t=window,e=Kc();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=Kc(t.document)}return e}function Rm(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function wL(t){var e=ny(),n=t.focusedElem,i=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&ty(n.ownerDocument.documentElement,n)){if(i!==null&&Rm(n)){if(e=i.start,t=i.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var s=n.textContent.length,o=Math.min(i.start,s);i=i.end===void 0?o:Math.min(i.end,s),!t.extend&&o>i&&(s=i,i=o,o=s),s=Zv(n,o);var l=Zv(n,i);s&&l&&(t.rangeCount!==1||t.anchorNode!==s.node||t.anchorOffset!==s.offset||t.focusNode!==l.node||t.focusOffset!==l.offset)&&(e=e.createRange(),e.setStart(s.node,s.offset),t.removeAllRanges(),o>i?(t.addRange(e),t.extend(l.node,l.offset)):(e.setEnd(l.node,l.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var AL=Wr&&"documentMode"in document&&11>=document.documentMode,aa=null,Tp=null,Pl=null,wp=!1;function Qv(t,e,n){var i=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;wp||aa==null||aa!==Kc(i)||(i=aa,"selectionStart"in i&&Rm(i)?i={start:i.selectionStart,end:i.selectionEnd}:(i=(i.ownerDocument&&i.ownerDocument.defaultView||window).getSelection(),i={anchorNode:i.anchorNode,anchorOffset:i.anchorOffset,focusNode:i.focusNode,focusOffset:i.focusOffset}),Pl&&Vl(Pl,i)||(Pl=i,i=rf(Tp,"onSelect"),0<i.length&&(e=new Tm("onSelect","select",null,e,n),t.push({event:e,listeners:i}),e.target=aa)))}function oc(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var la={animationend:oc("Animation","AnimationEnd"),animationiteration:oc("Animation","AnimationIteration"),animationstart:oc("Animation","AnimationStart"),transitionend:oc("Transition","TransitionEnd")},ph={},iy={};Wr&&(iy=document.createElement("div").style,"AnimationEvent"in window||(delete la.animationend.animation,delete la.animationiteration.animation,delete la.animationstart.animation),"TransitionEvent"in window||delete la.transitionend.transition);function Cf(t){if(ph[t])return ph[t];if(!la[t])return t;var e=la[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in iy)return ph[t]=e[n];return t}var ry=Cf("animationend"),sy=Cf("animationiteration"),oy=Cf("animationstart"),ay=Cf("transitionend"),ly=new Map,Jv="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Us(t,e){ly.set(t,e),vo(e,[t])}for(var mh=0;mh<Jv.length;mh++){var gh=Jv[mh],RL=gh.toLowerCase(),CL=gh[0].toUpperCase()+gh.slice(1);Us(RL,"on"+CL)}Us(ry,"onAnimationEnd");Us(sy,"onAnimationIteration");Us(oy,"onAnimationStart");Us("dblclick","onDoubleClick");Us("focusin","onFocus");Us("focusout","onBlur");Us(ay,"onTransitionEnd");Ra("onMouseEnter",["mouseout","mouseover"]);Ra("onMouseLeave",["mouseout","mouseover"]);Ra("onPointerEnter",["pointerout","pointerover"]);Ra("onPointerLeave",["pointerout","pointerover"]);vo("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));vo("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));vo("onBeforeInput",["compositionend","keypress","textInput","paste"]);vo("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));vo("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));vo("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Tl="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),LL=new Set("cancel close invalid load scroll toggle".split(" ").concat(Tl));function e0(t,e,n){var i=t.type||"unknown-event";t.currentTarget=n,R2(i,e,void 0,t),t.currentTarget=null}function uy(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var i=t[n],s=i.event;i=i.listeners;e:{var o=void 0;if(e)for(var l=i.length-1;0<=l;l--){var u=i[l],f=u.instance,d=u.currentTarget;if(u=u.listener,f!==o&&s.isPropagationStopped())break e;e0(s,u,d),o=f}else for(l=0;l<i.length;l++){if(u=i[l],f=u.instance,d=u.currentTarget,u=u.listener,f!==o&&s.isPropagationStopped())break e;e0(s,u,d),o=f}}}if(Qc)throw t=Sp,Qc=!1,Sp=null,t}function It(t,e){var n=e[Pp];n===void 0&&(n=e[Pp]=new Set);var i=t+"__bubble";n.has(i)||(cy(e,t,2,!1),n.add(i))}function _h(t,e,n){var i=0;e&&(i|=4),cy(n,t,i,e)}var ac="_reactListening"+Math.random().toString(36).slice(2);function Wl(t){if(!t[ac]){t[ac]=!0,_S.forEach(function(n){n!=="selectionchange"&&(LL.has(n)||_h(n,!1,t),_h(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[ac]||(e[ac]=!0,_h("selectionchange",!1,e))}}function cy(t,e,n,i){switch(qS(e)){case 1:var s=V2;break;case 4:s=W2;break;default:s=Mm}n=s.bind(null,e,n,t),s=void 0,!xp||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(s=!0),i?s!==void 0?t.addEventListener(e,n,{capture:!0,passive:s}):t.addEventListener(e,n,!0):s!==void 0?t.addEventListener(e,n,{passive:s}):t.addEventListener(e,n,!1)}function vh(t,e,n,i,s){var o=i;if(!(e&1)&&!(e&2)&&i!==null)e:for(;;){if(i===null)return;var l=i.tag;if(l===3||l===4){var u=i.stateNode.containerInfo;if(u===s||u.nodeType===8&&u.parentNode===s)break;if(l===4)for(l=i.return;l!==null;){var f=l.tag;if((f===3||f===4)&&(f=l.stateNode.containerInfo,f===s||f.nodeType===8&&f.parentNode===s))return;l=l.return}for(;u!==null;){if(l=eo(u),l===null)return;if(f=l.tag,f===5||f===6){i=o=l;continue e}u=u.parentNode}}i=i.return}DS(function(){var d=o,p=vm(n),g=[];e:{var _=ly.get(t);if(_!==void 0){var x=Tm,E=t;switch(t){case"keypress":if(Hc(n)===0)break e;case"keydown":case"keyup":x=sL;break;case"focusin":E="focus",x=fh;break;case"focusout":E="blur",x=fh;break;case"beforeblur":case"afterblur":x=fh;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":x=Gv;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":x=q2;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":x=lL;break;case ry:case sy:case oy:x=K2;break;case ay:x=cL;break;case"scroll":x=X2;break;case"wheel":x=dL;break;case"copy":case"cut":case"paste":x=Q2;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":x=Wv}var T=(e&4)!==0,v=!T&&t==="scroll",h=T?_!==null?_+"Capture":null:_;T=[];for(var y=d,S;y!==null;){S=y;var w=S.stateNode;if(S.tag===5&&w!==null&&(S=w,h!==null&&(w=Bl(y,h),w!=null&&T.push(Xl(y,w,S)))),v)break;y=y.return}0<T.length&&(_=new x(_,E,null,n,p),g.push({event:_,listeners:T}))}}if(!(e&7)){e:{if(_=t==="mouseover"||t==="pointerover",x=t==="mouseout"||t==="pointerout",_&&n!==_p&&(E=n.relatedTarget||n.fromElement)&&(eo(E)||E[Xr]))break e;if((x||_)&&(_=p.window===p?p:(_=p.ownerDocument)?_.defaultView||_.parentWindow:window,x?(E=n.relatedTarget||n.toElement,x=d,E=E?eo(E):null,E!==null&&(v=xo(E),E!==v||E.tag!==5&&E.tag!==6)&&(E=null)):(x=null,E=d),x!==E)){if(T=Gv,w="onMouseLeave",h="onMouseEnter",y="mouse",(t==="pointerout"||t==="pointerover")&&(T=Wv,w="onPointerLeave",h="onPointerEnter",y="pointer"),v=x==null?_:ua(x),S=E==null?_:ua(E),_=new T(w,y+"leave",x,n,p),_.target=v,_.relatedTarget=S,w=null,eo(p)===d&&(T=new T(h,y+"enter",E,n,p),T.target=S,T.relatedTarget=v,w=T),v=w,x&&E)t:{for(T=x,h=E,y=0,S=T;S;S=ko(S))y++;for(S=0,w=h;w;w=ko(w))S++;for(;0<y-S;)T=ko(T),y--;for(;0<S-y;)h=ko(h),S--;for(;y--;){if(T===h||h!==null&&T===h.alternate)break t;T=ko(T),h=ko(h)}T=null}else T=null;x!==null&&t0(g,_,x,T,!1),E!==null&&v!==null&&t0(g,v,E,T,!0)}}e:{if(_=d?ua(d):window,x=_.nodeName&&_.nodeName.toLowerCase(),x==="select"||x==="input"&&_.type==="file")var P=xL;else if(qv(_))if(JS)P=EL;else{P=yL;var I=SL}else(x=_.nodeName)&&x.toLowerCase()==="input"&&(_.type==="checkbox"||_.type==="radio")&&(P=ML);if(P&&(P=P(t,d))){QS(g,P,n,p);break e}I&&I(t,_,d),t==="focusout"&&(I=_._wrapperState)&&I.controlled&&_.type==="number"&&dp(_,"number",_.value)}switch(I=d?ua(d):window,t){case"focusin":(qv(I)||I.contentEditable==="true")&&(aa=I,Tp=d,Pl=null);break;case"focusout":Pl=Tp=aa=null;break;case"mousedown":wp=!0;break;case"contextmenu":case"mouseup":case"dragend":wp=!1,Qv(g,n,p);break;case"selectionchange":if(AL)break;case"keydown":case"keyup":Qv(g,n,p)}var D;if(Am)e:{switch(t){case"compositionstart":var H="onCompositionStart";break e;case"compositionend":H="onCompositionEnd";break e;case"compositionupdate":H="onCompositionUpdate";break e}H=void 0}else oa?KS(t,n)&&(H="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(H="onCompositionStart");H&&($S&&n.locale!=="ko"&&(oa||H!=="onCompositionStart"?H==="onCompositionEnd"&&oa&&(D=YS()):(ms=p,Em="value"in ms?ms.value:ms.textContent,oa=!0)),I=rf(d,H),0<I.length&&(H=new Vv(H,t,null,n,p),g.push({event:H,listeners:I}),D?H.data=D:(D=ZS(n),D!==null&&(H.data=D)))),(D=pL?mL(t,n):gL(t,n))&&(d=rf(d,"onBeforeInput"),0<d.length&&(p=new Vv("onBeforeInput","beforeinput",null,n,p),g.push({event:p,listeners:d}),p.data=D))}uy(g,e)})}function Xl(t,e,n){return{instance:t,listener:e,currentTarget:n}}function rf(t,e){for(var n=e+"Capture",i=[];t!==null;){var s=t,o=s.stateNode;s.tag===5&&o!==null&&(s=o,o=Bl(t,n),o!=null&&i.unshift(Xl(t,o,s)),o=Bl(t,e),o!=null&&i.push(Xl(t,o,s))),t=t.return}return i}function ko(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function t0(t,e,n,i,s){for(var o=e._reactName,l=[];n!==null&&n!==i;){var u=n,f=u.alternate,d=u.stateNode;if(f!==null&&f===i)break;u.tag===5&&d!==null&&(u=d,s?(f=Bl(n,o),f!=null&&l.unshift(Xl(n,f,u))):s||(f=Bl(n,o),f!=null&&l.push(Xl(n,f,u)))),n=n.return}l.length!==0&&t.push({event:e,listeners:l})}var PL=/\r\n?/g,bL=/\u0000|\uFFFD/g;function n0(t){return(typeof t=="string"?t:""+t).replace(PL,`
`).replace(bL,"")}function lc(t,e,n){if(e=n0(e),n0(t)!==e&&n)throw Error(me(425))}function sf(){}var Ap=null,Rp=null;function Cp(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var Lp=typeof setTimeout=="function"?setTimeout:void 0,UL=typeof clearTimeout=="function"?clearTimeout:void 0,i0=typeof Promise=="function"?Promise:void 0,DL=typeof queueMicrotask=="function"?queueMicrotask:typeof i0<"u"?function(t){return i0.resolve(null).then(t).catch(IL)}:Lp;function IL(t){setTimeout(function(){throw t})}function xh(t,e){var n=e,i=0;do{var s=n.nextSibling;if(t.removeChild(n),s&&s.nodeType===8)if(n=s.data,n==="/$"){if(i===0){t.removeChild(s),Hl(e);return}i--}else n!=="$"&&n!=="$?"&&n!=="$!"||i++;n=s}while(n);Hl(e)}function Ms(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function r0(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var ka=Math.random().toString(36).slice(2),ur="__reactFiber$"+ka,jl="__reactProps$"+ka,Xr="__reactContainer$"+ka,Pp="__reactEvents$"+ka,NL="__reactListeners$"+ka,FL="__reactHandles$"+ka;function eo(t){var e=t[ur];if(e)return e;for(var n=t.parentNode;n;){if(e=n[Xr]||n[ur]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=r0(t);t!==null;){if(n=t[ur])return n;t=r0(t)}return e}t=n,n=t.parentNode}return null}function ru(t){return t=t[ur]||t[Xr],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function ua(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(me(33))}function Lf(t){return t[jl]||null}var bp=[],ca=-1;function Ds(t){return{current:t}}function Ft(t){0>ca||(t.current=bp[ca],bp[ca]=null,ca--)}function bt(t,e){ca++,bp[ca]=t.current,t.current=e}var Ps={},Dn=Ds(Ps),Zn=Ds(!1),co=Ps;function Ca(t,e){var n=t.type.contextTypes;if(!n)return Ps;var i=t.stateNode;if(i&&i.__reactInternalMemoizedUnmaskedChildContext===e)return i.__reactInternalMemoizedMaskedChildContext;var s={},o;for(o in n)s[o]=e[o];return i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=s),s}function Qn(t){return t=t.childContextTypes,t!=null}function of(){Ft(Zn),Ft(Dn)}function s0(t,e,n){if(Dn.current!==Ps)throw Error(me(168));bt(Dn,e),bt(Zn,n)}function fy(t,e,n){var i=t.stateNode;if(e=e.childContextTypes,typeof i.getChildContext!="function")return n;i=i.getChildContext();for(var s in i)if(!(s in e))throw Error(me(108,S2(t)||"Unknown",s));return jt({},n,i)}function af(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||Ps,co=Dn.current,bt(Dn,t),bt(Zn,Zn.current),!0}function o0(t,e,n){var i=t.stateNode;if(!i)throw Error(me(169));n?(t=fy(t,e,co),i.__reactInternalMemoizedMergedChildContext=t,Ft(Zn),Ft(Dn),bt(Dn,t)):Ft(Zn),bt(Zn,n)}var Nr=null,Pf=!1,Sh=!1;function dy(t){Nr===null?Nr=[t]:Nr.push(t)}function OL(t){Pf=!0,dy(t)}function Is(){if(!Sh&&Nr!==null){Sh=!0;var t=0,e=wt;try{var n=Nr;for(wt=1;t<n.length;t++){var i=n[t];do i=i(!0);while(i!==null)}Nr=null,Pf=!1}catch(s){throw Nr!==null&&(Nr=Nr.slice(t+1)),OS(xm,Is),s}finally{wt=e,Sh=!1}}return null}var fa=[],da=0,lf=null,uf=0,bi=[],Ui=0,fo=null,Or=1,Br="";function Ys(t,e){fa[da++]=uf,fa[da++]=lf,lf=t,uf=e}function hy(t,e,n){bi[Ui++]=Or,bi[Ui++]=Br,bi[Ui++]=fo,fo=t;var i=Or;t=Br;var s=32-er(i)-1;i&=~(1<<s),n+=1;var o=32-er(e)+s;if(30<o){var l=s-s%5;o=(i&(1<<l)-1).toString(32),i>>=l,s-=l,Or=1<<32-er(e)+s|n<<s|i,Br=o+t}else Or=1<<o|n<<s|i,Br=t}function Cm(t){t.return!==null&&(Ys(t,1),hy(t,1,0))}function Lm(t){for(;t===lf;)lf=fa[--da],fa[da]=null,uf=fa[--da],fa[da]=null;for(;t===fo;)fo=bi[--Ui],bi[Ui]=null,Br=bi[--Ui],bi[Ui]=null,Or=bi[--Ui],bi[Ui]=null}var hi=null,di=null,kt=!1,Ki=null;function py(t,e){var n=Ni(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function a0(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,hi=t,di=Ms(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,hi=t,di=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=fo!==null?{id:Or,overflow:Br}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=Ni(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,hi=t,di=null,!0):!1;default:return!1}}function Up(t){return(t.mode&1)!==0&&(t.flags&128)===0}function Dp(t){if(kt){var e=di;if(e){var n=e;if(!a0(t,e)){if(Up(t))throw Error(me(418));e=Ms(n.nextSibling);var i=hi;e&&a0(t,e)?py(i,n):(t.flags=t.flags&-4097|2,kt=!1,hi=t)}}else{if(Up(t))throw Error(me(418));t.flags=t.flags&-4097|2,kt=!1,hi=t}}}function l0(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;hi=t}function uc(t){if(t!==hi)return!1;if(!kt)return l0(t),kt=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!Cp(t.type,t.memoizedProps)),e&&(e=di)){if(Up(t))throw my(),Error(me(418));for(;e;)py(t,e),e=Ms(e.nextSibling)}if(l0(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(me(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){di=Ms(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}di=null}}else di=hi?Ms(t.stateNode.nextSibling):null;return!0}function my(){for(var t=di;t;)t=Ms(t.nextSibling)}function La(){di=hi=null,kt=!1}function Pm(t){Ki===null?Ki=[t]:Ki.push(t)}var BL=$r.ReactCurrentBatchConfig;function Yi(t,e){if(t&&t.defaultProps){e=jt({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}var cf=Ds(null),ff=null,ha=null,bm=null;function Um(){bm=ha=ff=null}function Dm(t){var e=cf.current;Ft(cf),t._currentValue=e}function Ip(t,e,n){for(;t!==null;){var i=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,i!==null&&(i.childLanes|=e)):i!==null&&(i.childLanes&e)!==e&&(i.childLanes|=e),t===n)break;t=t.return}}function Ma(t,e){ff=t,bm=ha=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(Kn=!0),t.firstContext=null)}function Oi(t){var e=t._currentValue;if(bm!==t)if(t={context:t,memoizedValue:e,next:null},ha===null){if(ff===null)throw Error(me(308));ha=t,ff.dependencies={lanes:0,firstContext:t}}else ha=ha.next=t;return e}var to=null;function Im(t){to===null?to=[t]:to.push(t)}function gy(t,e,n,i){var s=e.interleaved;return s===null?(n.next=n,Im(e)):(n.next=s.next,s.next=n),e.interleaved=n,jr(t,i)}function jr(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var ds=!1;function Nm(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function _y(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function Hr(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function Es(t,e,n){var i=t.updateQueue;if(i===null)return null;if(i=i.shared,St&2){var s=i.pending;return s===null?e.next=e:(e.next=s.next,s.next=e),i.pending=e,jr(t,n)}return s=i.interleaved,s===null?(e.next=e,Im(i)):(e.next=s.next,s.next=e),i.interleaved=e,jr(t,n)}function Gc(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,Sm(t,n)}}function u0(t,e){var n=t.updateQueue,i=t.alternate;if(i!==null&&(i=i.updateQueue,n===i)){var s=null,o=null;if(n=n.firstBaseUpdate,n!==null){do{var l={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};o===null?s=o=l:o=o.next=l,n=n.next}while(n!==null);o===null?s=o=e:o=o.next=e}else s=o=e;n={baseState:i.baseState,firstBaseUpdate:s,lastBaseUpdate:o,shared:i.shared,effects:i.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function df(t,e,n,i){var s=t.updateQueue;ds=!1;var o=s.firstBaseUpdate,l=s.lastBaseUpdate,u=s.shared.pending;if(u!==null){s.shared.pending=null;var f=u,d=f.next;f.next=null,l===null?o=d:l.next=d,l=f;var p=t.alternate;p!==null&&(p=p.updateQueue,u=p.lastBaseUpdate,u!==l&&(u===null?p.firstBaseUpdate=d:u.next=d,p.lastBaseUpdate=f))}if(o!==null){var g=s.baseState;l=0,p=d=f=null,u=o;do{var _=u.lane,x=u.eventTime;if((i&_)===_){p!==null&&(p=p.next={eventTime:x,lane:0,tag:u.tag,payload:u.payload,callback:u.callback,next:null});e:{var E=t,T=u;switch(_=e,x=n,T.tag){case 1:if(E=T.payload,typeof E=="function"){g=E.call(x,g,_);break e}g=E;break e;case 3:E.flags=E.flags&-65537|128;case 0:if(E=T.payload,_=typeof E=="function"?E.call(x,g,_):E,_==null)break e;g=jt({},g,_);break e;case 2:ds=!0}}u.callback!==null&&u.lane!==0&&(t.flags|=64,_=s.effects,_===null?s.effects=[u]:_.push(u))}else x={eventTime:x,lane:_,tag:u.tag,payload:u.payload,callback:u.callback,next:null},p===null?(d=p=x,f=g):p=p.next=x,l|=_;if(u=u.next,u===null){if(u=s.shared.pending,u===null)break;_=u,u=_.next,_.next=null,s.lastBaseUpdate=_,s.shared.pending=null}}while(1);if(p===null&&(f=g),s.baseState=f,s.firstBaseUpdate=d,s.lastBaseUpdate=p,e=s.shared.interleaved,e!==null){s=e;do l|=s.lane,s=s.next;while(s!==e)}else o===null&&(s.shared.lanes=0);po|=l,t.lanes=l,t.memoizedState=g}}function c0(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var i=t[e],s=i.callback;if(s!==null){if(i.callback=null,i=n,typeof s!="function")throw Error(me(191,s));s.call(i)}}}var vy=new gS.Component().refs;function Np(t,e,n,i){e=t.memoizedState,n=n(i,e),n=n==null?e:jt({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var bf={isMounted:function(t){return(t=t._reactInternals)?xo(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var i=kn(),s=ws(t),o=Hr(i,s);o.payload=e,n!=null&&(o.callback=n),e=Es(t,o,s),e!==null&&(tr(e,t,s,i),Gc(e,t,s))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var i=kn(),s=ws(t),o=Hr(i,s);o.tag=1,o.payload=e,n!=null&&(o.callback=n),e=Es(t,o,s),e!==null&&(tr(e,t,s,i),Gc(e,t,s))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=kn(),i=ws(t),s=Hr(n,i);s.tag=2,e!=null&&(s.callback=e),e=Es(t,s,i),e!==null&&(tr(e,t,i,n),Gc(e,t,i))}};function f0(t,e,n,i,s,o,l){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(i,o,l):e.prototype&&e.prototype.isPureReactComponent?!Vl(n,i)||!Vl(s,o):!0}function xy(t,e,n){var i=!1,s=Ps,o=e.contextType;return typeof o=="object"&&o!==null?o=Oi(o):(s=Qn(e)?co:Dn.current,i=e.contextTypes,o=(i=i!=null)?Ca(t,s):Ps),e=new e(n,o),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=bf,t.stateNode=e,e._reactInternals=t,i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=s,t.__reactInternalMemoizedMaskedChildContext=o),e}function d0(t,e,n,i){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,i),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,i),e.state!==t&&bf.enqueueReplaceState(e,e.state,null)}function Fp(t,e,n,i){var s=t.stateNode;s.props=n,s.state=t.memoizedState,s.refs=vy,Nm(t);var o=e.contextType;typeof o=="object"&&o!==null?s.context=Oi(o):(o=Qn(e)?co:Dn.current,s.context=Ca(t,o)),s.state=t.memoizedState,o=e.getDerivedStateFromProps,typeof o=="function"&&(Np(t,e,o,n),s.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof s.getSnapshotBeforeUpdate=="function"||typeof s.UNSAFE_componentWillMount!="function"&&typeof s.componentWillMount!="function"||(e=s.state,typeof s.componentWillMount=="function"&&s.componentWillMount(),typeof s.UNSAFE_componentWillMount=="function"&&s.UNSAFE_componentWillMount(),e!==s.state&&bf.enqueueReplaceState(s,s.state,null),df(t,n,s,i),s.state=t.memoizedState),typeof s.componentDidMount=="function"&&(t.flags|=4194308)}function pl(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(me(309));var i=n.stateNode}if(!i)throw Error(me(147,t));var s=i,o=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===o?e.ref:(e=function(l){var u=s.refs;u===vy&&(u=s.refs={}),l===null?delete u[o]:u[o]=l},e._stringRef=o,e)}if(typeof t!="string")throw Error(me(284));if(!n._owner)throw Error(me(290,t))}return t}function cc(t,e){throw t=Object.prototype.toString.call(e),Error(me(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function h0(t){var e=t._init;return e(t._payload)}function Sy(t){function e(h,y){if(t){var S=h.deletions;S===null?(h.deletions=[y],h.flags|=16):S.push(y)}}function n(h,y){if(!t)return null;for(;y!==null;)e(h,y),y=y.sibling;return null}function i(h,y){for(h=new Map;y!==null;)y.key!==null?h.set(y.key,y):h.set(y.index,y),y=y.sibling;return h}function s(h,y){return h=As(h,y),h.index=0,h.sibling=null,h}function o(h,y,S){return h.index=S,t?(S=h.alternate,S!==null?(S=S.index,S<y?(h.flags|=2,y):S):(h.flags|=2,y)):(h.flags|=1048576,y)}function l(h){return t&&h.alternate===null&&(h.flags|=2),h}function u(h,y,S,w){return y===null||y.tag!==6?(y=Rh(S,h.mode,w),y.return=h,y):(y=s(y,S),y.return=h,y)}function f(h,y,S,w){var P=S.type;return P===sa?p(h,y,S.props.children,w,S.key):y!==null&&(y.elementType===P||typeof P=="object"&&P!==null&&P.$$typeof===fs&&h0(P)===y.type)?(w=s(y,S.props),w.ref=pl(h,y,S),w.return=h,w):(w=Yc(S.type,S.key,S.props,null,h.mode,w),w.ref=pl(h,y,S),w.return=h,w)}function d(h,y,S,w){return y===null||y.tag!==4||y.stateNode.containerInfo!==S.containerInfo||y.stateNode.implementation!==S.implementation?(y=Ch(S,h.mode,w),y.return=h,y):(y=s(y,S.children||[]),y.return=h,y)}function p(h,y,S,w,P){return y===null||y.tag!==7?(y=so(S,h.mode,w,P),y.return=h,y):(y=s(y,S),y.return=h,y)}function g(h,y,S){if(typeof y=="string"&&y!==""||typeof y=="number")return y=Rh(""+y,h.mode,S),y.return=h,y;if(typeof y=="object"&&y!==null){switch(y.$$typeof){case Ju:return S=Yc(y.type,y.key,y.props,null,h.mode,S),S.ref=pl(h,null,y),S.return=h,S;case ra:return y=Ch(y,h.mode,S),y.return=h,y;case fs:var w=y._init;return g(h,w(y._payload),S)}if(Ml(y)||ul(y))return y=so(y,h.mode,S,null),y.return=h,y;cc(h,y)}return null}function _(h,y,S,w){var P=y!==null?y.key:null;if(typeof S=="string"&&S!==""||typeof S=="number")return P!==null?null:u(h,y,""+S,w);if(typeof S=="object"&&S!==null){switch(S.$$typeof){case Ju:return S.key===P?f(h,y,S,w):null;case ra:return S.key===P?d(h,y,S,w):null;case fs:return P=S._init,_(h,y,P(S._payload),w)}if(Ml(S)||ul(S))return P!==null?null:p(h,y,S,w,null);cc(h,S)}return null}function x(h,y,S,w,P){if(typeof w=="string"&&w!==""||typeof w=="number")return h=h.get(S)||null,u(y,h,""+w,P);if(typeof w=="object"&&w!==null){switch(w.$$typeof){case Ju:return h=h.get(w.key===null?S:w.key)||null,f(y,h,w,P);case ra:return h=h.get(w.key===null?S:w.key)||null,d(y,h,w,P);case fs:var I=w._init;return x(h,y,S,I(w._payload),P)}if(Ml(w)||ul(w))return h=h.get(S)||null,p(y,h,w,P,null);cc(y,w)}return null}function E(h,y,S,w){for(var P=null,I=null,D=y,H=y=0,C=null;D!==null&&H<S.length;H++){D.index>H?(C=D,D=null):C=D.sibling;var U=_(h,D,S[H],w);if(U===null){D===null&&(D=C);break}t&&D&&U.alternate===null&&e(h,D),y=o(U,y,H),I===null?P=U:I.sibling=U,I=U,D=C}if(H===S.length)return n(h,D),kt&&Ys(h,H),P;if(D===null){for(;H<S.length;H++)D=g(h,S[H],w),D!==null&&(y=o(D,y,H),I===null?P=D:I.sibling=D,I=D);return kt&&Ys(h,H),P}for(D=i(h,D);H<S.length;H++)C=x(D,h,H,S[H],w),C!==null&&(t&&C.alternate!==null&&D.delete(C.key===null?H:C.key),y=o(C,y,H),I===null?P=C:I.sibling=C,I=C);return t&&D.forEach(function(oe){return e(h,oe)}),kt&&Ys(h,H),P}function T(h,y,S,w){var P=ul(S);if(typeof P!="function")throw Error(me(150));if(S=P.call(S),S==null)throw Error(me(151));for(var I=P=null,D=y,H=y=0,C=null,U=S.next();D!==null&&!U.done;H++,U=S.next()){D.index>H?(C=D,D=null):C=D.sibling;var oe=_(h,D,U.value,w);if(oe===null){D===null&&(D=C);break}t&&D&&oe.alternate===null&&e(h,D),y=o(oe,y,H),I===null?P=oe:I.sibling=oe,I=oe,D=C}if(U.done)return n(h,D),kt&&Ys(h,H),P;if(D===null){for(;!U.done;H++,U=S.next())U=g(h,U.value,w),U!==null&&(y=o(U,y,H),I===null?P=U:I.sibling=U,I=U);return kt&&Ys(h,H),P}for(D=i(h,D);!U.done;H++,U=S.next())U=x(D,h,H,U.value,w),U!==null&&(t&&U.alternate!==null&&D.delete(U.key===null?H:U.key),y=o(U,y,H),I===null?P=U:I.sibling=U,I=U);return t&&D.forEach(function(he){return e(h,he)}),kt&&Ys(h,H),P}function v(h,y,S,w){if(typeof S=="object"&&S!==null&&S.type===sa&&S.key===null&&(S=S.props.children),typeof S=="object"&&S!==null){switch(S.$$typeof){case Ju:e:{for(var P=S.key,I=y;I!==null;){if(I.key===P){if(P=S.type,P===sa){if(I.tag===7){n(h,I.sibling),y=s(I,S.props.children),y.return=h,h=y;break e}}else if(I.elementType===P||typeof P=="object"&&P!==null&&P.$$typeof===fs&&h0(P)===I.type){n(h,I.sibling),y=s(I,S.props),y.ref=pl(h,I,S),y.return=h,h=y;break e}n(h,I);break}else e(h,I);I=I.sibling}S.type===sa?(y=so(S.props.children,h.mode,w,S.key),y.return=h,h=y):(w=Yc(S.type,S.key,S.props,null,h.mode,w),w.ref=pl(h,y,S),w.return=h,h=w)}return l(h);case ra:e:{for(I=S.key;y!==null;){if(y.key===I)if(y.tag===4&&y.stateNode.containerInfo===S.containerInfo&&y.stateNode.implementation===S.implementation){n(h,y.sibling),y=s(y,S.children||[]),y.return=h,h=y;break e}else{n(h,y);break}else e(h,y);y=y.sibling}y=Ch(S,h.mode,w),y.return=h,h=y}return l(h);case fs:return I=S._init,v(h,y,I(S._payload),w)}if(Ml(S))return E(h,y,S,w);if(ul(S))return T(h,y,S,w);cc(h,S)}return typeof S=="string"&&S!==""||typeof S=="number"?(S=""+S,y!==null&&y.tag===6?(n(h,y.sibling),y=s(y,S),y.return=h,h=y):(n(h,y),y=Rh(S,h.mode,w),y.return=h,h=y),l(h)):n(h,y)}return v}var Pa=Sy(!0),yy=Sy(!1),su={},dr=Ds(su),ql=Ds(su),Yl=Ds(su);function no(t){if(t===su)throw Error(me(174));return t}function Fm(t,e){switch(bt(Yl,e),bt(ql,t),bt(dr,su),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:pp(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=pp(e,t)}Ft(dr),bt(dr,e)}function ba(){Ft(dr),Ft(ql),Ft(Yl)}function My(t){no(Yl.current);var e=no(dr.current),n=pp(e,t.type);e!==n&&(bt(ql,t),bt(dr,n))}function Om(t){ql.current===t&&(Ft(dr),Ft(ql))}var Wt=Ds(0);function hf(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var yh=[];function Bm(){for(var t=0;t<yh.length;t++)yh[t]._workInProgressVersionPrimary=null;yh.length=0}var Vc=$r.ReactCurrentDispatcher,Mh=$r.ReactCurrentBatchConfig,ho=0,Xt=null,ln=null,mn=null,pf=!1,bl=!1,$l=0,zL=0;function Cn(){throw Error(me(321))}function zm(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!nr(t[n],e[n]))return!1;return!0}function km(t,e,n,i,s,o){if(ho=o,Xt=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,Vc.current=t===null||t.memoizedState===null?VL:WL,t=n(i,s),bl){o=0;do{if(bl=!1,$l=0,25<=o)throw Error(me(301));o+=1,mn=ln=null,e.updateQueue=null,Vc.current=XL,t=n(i,s)}while(bl)}if(Vc.current=mf,e=ln!==null&&ln.next!==null,ho=0,mn=ln=Xt=null,pf=!1,e)throw Error(me(300));return t}function Hm(){var t=$l!==0;return $l=0,t}function ar(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return mn===null?Xt.memoizedState=mn=t:mn=mn.next=t,mn}function Bi(){if(ln===null){var t=Xt.alternate;t=t!==null?t.memoizedState:null}else t=ln.next;var e=mn===null?Xt.memoizedState:mn.next;if(e!==null)mn=e,ln=t;else{if(t===null)throw Error(me(310));ln=t,t={memoizedState:ln.memoizedState,baseState:ln.baseState,baseQueue:ln.baseQueue,queue:ln.queue,next:null},mn===null?Xt.memoizedState=mn=t:mn=mn.next=t}return mn}function Kl(t,e){return typeof e=="function"?e(t):e}function Eh(t){var e=Bi(),n=e.queue;if(n===null)throw Error(me(311));n.lastRenderedReducer=t;var i=ln,s=i.baseQueue,o=n.pending;if(o!==null){if(s!==null){var l=s.next;s.next=o.next,o.next=l}i.baseQueue=s=o,n.pending=null}if(s!==null){o=s.next,i=i.baseState;var u=l=null,f=null,d=o;do{var p=d.lane;if((ho&p)===p)f!==null&&(f=f.next={lane:0,action:d.action,hasEagerState:d.hasEagerState,eagerState:d.eagerState,next:null}),i=d.hasEagerState?d.eagerState:t(i,d.action);else{var g={lane:p,action:d.action,hasEagerState:d.hasEagerState,eagerState:d.eagerState,next:null};f===null?(u=f=g,l=i):f=f.next=g,Xt.lanes|=p,po|=p}d=d.next}while(d!==null&&d!==o);f===null?l=i:f.next=u,nr(i,e.memoizedState)||(Kn=!0),e.memoizedState=i,e.baseState=l,e.baseQueue=f,n.lastRenderedState=i}if(t=n.interleaved,t!==null){s=t;do o=s.lane,Xt.lanes|=o,po|=o,s=s.next;while(s!==t)}else s===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function Th(t){var e=Bi(),n=e.queue;if(n===null)throw Error(me(311));n.lastRenderedReducer=t;var i=n.dispatch,s=n.pending,o=e.memoizedState;if(s!==null){n.pending=null;var l=s=s.next;do o=t(o,l.action),l=l.next;while(l!==s);nr(o,e.memoizedState)||(Kn=!0),e.memoizedState=o,e.baseQueue===null&&(e.baseState=o),n.lastRenderedState=o}return[o,i]}function Ey(){}function Ty(t,e){var n=Xt,i=Bi(),s=e(),o=!nr(i.memoizedState,s);if(o&&(i.memoizedState=s,Kn=!0),i=i.queue,Gm(Ry.bind(null,n,i,t),[t]),i.getSnapshot!==e||o||mn!==null&&mn.memoizedState.tag&1){if(n.flags|=2048,Zl(9,Ay.bind(null,n,i,s,e),void 0,null),gn===null)throw Error(me(349));ho&30||wy(n,e,s)}return s}function wy(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=Xt.updateQueue,e===null?(e={lastEffect:null,stores:null},Xt.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function Ay(t,e,n,i){e.value=n,e.getSnapshot=i,Cy(e)&&Ly(t)}function Ry(t,e,n){return n(function(){Cy(e)&&Ly(t)})}function Cy(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!nr(t,n)}catch{return!0}}function Ly(t){var e=jr(t,1);e!==null&&tr(e,t,1,-1)}function p0(t){var e=ar();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Kl,lastRenderedState:t},e.queue=t,t=t.dispatch=GL.bind(null,Xt,t),[e.memoizedState,t]}function Zl(t,e,n,i){return t={tag:t,create:e,destroy:n,deps:i,next:null},e=Xt.updateQueue,e===null?(e={lastEffect:null,stores:null},Xt.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(i=n.next,n.next=t,t.next=i,e.lastEffect=t)),t}function Py(){return Bi().memoizedState}function Wc(t,e,n,i){var s=ar();Xt.flags|=t,s.memoizedState=Zl(1|e,n,void 0,i===void 0?null:i)}function Uf(t,e,n,i){var s=Bi();i=i===void 0?null:i;var o=void 0;if(ln!==null){var l=ln.memoizedState;if(o=l.destroy,i!==null&&zm(i,l.deps)){s.memoizedState=Zl(e,n,o,i);return}}Xt.flags|=t,s.memoizedState=Zl(1|e,n,o,i)}function m0(t,e){return Wc(8390656,8,t,e)}function Gm(t,e){return Uf(2048,8,t,e)}function by(t,e){return Uf(4,2,t,e)}function Uy(t,e){return Uf(4,4,t,e)}function Dy(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function Iy(t,e,n){return n=n!=null?n.concat([t]):null,Uf(4,4,Dy.bind(null,e,t),n)}function Vm(){}function Ny(t,e){var n=Bi();e=e===void 0?null:e;var i=n.memoizedState;return i!==null&&e!==null&&zm(e,i[1])?i[0]:(n.memoizedState=[t,e],t)}function Fy(t,e){var n=Bi();e=e===void 0?null:e;var i=n.memoizedState;return i!==null&&e!==null&&zm(e,i[1])?i[0]:(t=t(),n.memoizedState=[t,e],t)}function Oy(t,e,n){return ho&21?(nr(n,e)||(n=kS(),Xt.lanes|=n,po|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,Kn=!0),t.memoizedState=n)}function kL(t,e){var n=wt;wt=n!==0&&4>n?n:4,t(!0);var i=Mh.transition;Mh.transition={};try{t(!1),e()}finally{wt=n,Mh.transition=i}}function By(){return Bi().memoizedState}function HL(t,e,n){var i=ws(t);if(n={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null},zy(t))ky(e,n);else if(n=gy(t,e,n,i),n!==null){var s=kn();tr(n,t,i,s),Hy(n,e,i)}}function GL(t,e,n){var i=ws(t),s={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null};if(zy(t))ky(e,s);else{var o=t.alternate;if(t.lanes===0&&(o===null||o.lanes===0)&&(o=e.lastRenderedReducer,o!==null))try{var l=e.lastRenderedState,u=o(l,n);if(s.hasEagerState=!0,s.eagerState=u,nr(u,l)){var f=e.interleaved;f===null?(s.next=s,Im(e)):(s.next=f.next,f.next=s),e.interleaved=s;return}}catch{}finally{}n=gy(t,e,s,i),n!==null&&(s=kn(),tr(n,t,i,s),Hy(n,e,i))}}function zy(t){var e=t.alternate;return t===Xt||e!==null&&e===Xt}function ky(t,e){bl=pf=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function Hy(t,e,n){if(n&4194240){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,Sm(t,n)}}var mf={readContext:Oi,useCallback:Cn,useContext:Cn,useEffect:Cn,useImperativeHandle:Cn,useInsertionEffect:Cn,useLayoutEffect:Cn,useMemo:Cn,useReducer:Cn,useRef:Cn,useState:Cn,useDebugValue:Cn,useDeferredValue:Cn,useTransition:Cn,useMutableSource:Cn,useSyncExternalStore:Cn,useId:Cn,unstable_isNewReconciler:!1},VL={readContext:Oi,useCallback:function(t,e){return ar().memoizedState=[t,e===void 0?null:e],t},useContext:Oi,useEffect:m0,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,Wc(4194308,4,Dy.bind(null,e,t),n)},useLayoutEffect:function(t,e){return Wc(4194308,4,t,e)},useInsertionEffect:function(t,e){return Wc(4,2,t,e)},useMemo:function(t,e){var n=ar();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var i=ar();return e=n!==void 0?n(e):e,i.memoizedState=i.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},i.queue=t,t=t.dispatch=HL.bind(null,Xt,t),[i.memoizedState,t]},useRef:function(t){var e=ar();return t={current:t},e.memoizedState=t},useState:p0,useDebugValue:Vm,useDeferredValue:function(t){return ar().memoizedState=t},useTransition:function(){var t=p0(!1),e=t[0];return t=kL.bind(null,t[1]),ar().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var i=Xt,s=ar();if(kt){if(n===void 0)throw Error(me(407));n=n()}else{if(n=e(),gn===null)throw Error(me(349));ho&30||wy(i,e,n)}s.memoizedState=n;var o={value:n,getSnapshot:e};return s.queue=o,m0(Ry.bind(null,i,o,t),[t]),i.flags|=2048,Zl(9,Ay.bind(null,i,o,n,e),void 0,null),n},useId:function(){var t=ar(),e=gn.identifierPrefix;if(kt){var n=Br,i=Or;n=(i&~(1<<32-er(i)-1)).toString(32)+n,e=":"+e+"R"+n,n=$l++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=zL++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},WL={readContext:Oi,useCallback:Ny,useContext:Oi,useEffect:Gm,useImperativeHandle:Iy,useInsertionEffect:by,useLayoutEffect:Uy,useMemo:Fy,useReducer:Eh,useRef:Py,useState:function(){return Eh(Kl)},useDebugValue:Vm,useDeferredValue:function(t){var e=Bi();return Oy(e,ln.memoizedState,t)},useTransition:function(){var t=Eh(Kl)[0],e=Bi().memoizedState;return[t,e]},useMutableSource:Ey,useSyncExternalStore:Ty,useId:By,unstable_isNewReconciler:!1},XL={readContext:Oi,useCallback:Ny,useContext:Oi,useEffect:Gm,useImperativeHandle:Iy,useInsertionEffect:by,useLayoutEffect:Uy,useMemo:Fy,useReducer:Th,useRef:Py,useState:function(){return Th(Kl)},useDebugValue:Vm,useDeferredValue:function(t){var e=Bi();return ln===null?e.memoizedState=t:Oy(e,ln.memoizedState,t)},useTransition:function(){var t=Th(Kl)[0],e=Bi().memoizedState;return[t,e]},useMutableSource:Ey,useSyncExternalStore:Ty,useId:By,unstable_isNewReconciler:!1};function Ua(t,e){try{var n="",i=e;do n+=x2(i),i=i.return;while(i);var s=n}catch(o){s=`
Error generating stack: `+o.message+`
`+o.stack}return{value:t,source:e,stack:s,digest:null}}function wh(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function Op(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var jL=typeof WeakMap=="function"?WeakMap:Map;function Gy(t,e,n){n=Hr(-1,n),n.tag=3,n.payload={element:null};var i=e.value;return n.callback=function(){_f||(_f=!0,qp=i),Op(t,e)},n}function Vy(t,e,n){n=Hr(-1,n),n.tag=3;var i=t.type.getDerivedStateFromError;if(typeof i=="function"){var s=e.value;n.payload=function(){return i(s)},n.callback=function(){Op(t,e)}}var o=t.stateNode;return o!==null&&typeof o.componentDidCatch=="function"&&(n.callback=function(){Op(t,e),typeof i!="function"&&(Ts===null?Ts=new Set([this]):Ts.add(this));var l=e.stack;this.componentDidCatch(e.value,{componentStack:l!==null?l:""})}),n}function g0(t,e,n){var i=t.pingCache;if(i===null){i=t.pingCache=new jL;var s=new Set;i.set(e,s)}else s=i.get(e),s===void 0&&(s=new Set,i.set(e,s));s.has(n)||(s.add(n),t=oP.bind(null,t,e,n),e.then(t,t))}function _0(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function v0(t,e,n,i,s){return t.mode&1?(t.flags|=65536,t.lanes=s,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=Hr(-1,1),e.tag=2,Es(n,e,1))),n.lanes|=1),t)}var qL=$r.ReactCurrentOwner,Kn=!1;function Bn(t,e,n,i){e.child=t===null?yy(e,null,n,i):Pa(e,t.child,n,i)}function x0(t,e,n,i,s){n=n.render;var o=e.ref;return Ma(e,s),i=km(t,e,n,i,o,s),n=Hm(),t!==null&&!Kn?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~s,qr(t,e,s)):(kt&&n&&Cm(e),e.flags|=1,Bn(t,e,i,s),e.child)}function S0(t,e,n,i,s){if(t===null){var o=n.type;return typeof o=="function"&&!Zm(o)&&o.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=o,Wy(t,e,o,i,s)):(t=Yc(n.type,null,i,e,e.mode,s),t.ref=e.ref,t.return=e,e.child=t)}if(o=t.child,!(t.lanes&s)){var l=o.memoizedProps;if(n=n.compare,n=n!==null?n:Vl,n(l,i)&&t.ref===e.ref)return qr(t,e,s)}return e.flags|=1,t=As(o,i),t.ref=e.ref,t.return=e,e.child=t}function Wy(t,e,n,i,s){if(t!==null){var o=t.memoizedProps;if(Vl(o,i)&&t.ref===e.ref)if(Kn=!1,e.pendingProps=i=o,(t.lanes&s)!==0)t.flags&131072&&(Kn=!0);else return e.lanes=t.lanes,qr(t,e,s)}return Bp(t,e,n,i,s)}function Xy(t,e,n){var i=e.pendingProps,s=i.children,o=t!==null?t.memoizedState:null;if(i.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},bt(ma,fi),fi|=n;else{if(!(n&1073741824))return t=o!==null?o.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,bt(ma,fi),fi|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},i=o!==null?o.baseLanes:n,bt(ma,fi),fi|=i}else o!==null?(i=o.baseLanes|n,e.memoizedState=null):i=n,bt(ma,fi),fi|=i;return Bn(t,e,s,n),e.child}function jy(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function Bp(t,e,n,i,s){var o=Qn(n)?co:Dn.current;return o=Ca(e,o),Ma(e,s),n=km(t,e,n,i,o,s),i=Hm(),t!==null&&!Kn?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~s,qr(t,e,s)):(kt&&i&&Cm(e),e.flags|=1,Bn(t,e,n,s),e.child)}function y0(t,e,n,i,s){if(Qn(n)){var o=!0;af(e)}else o=!1;if(Ma(e,s),e.stateNode===null)Xc(t,e),xy(e,n,i),Fp(e,n,i,s),i=!0;else if(t===null){var l=e.stateNode,u=e.memoizedProps;l.props=u;var f=l.context,d=n.contextType;typeof d=="object"&&d!==null?d=Oi(d):(d=Qn(n)?co:Dn.current,d=Ca(e,d));var p=n.getDerivedStateFromProps,g=typeof p=="function"||typeof l.getSnapshotBeforeUpdate=="function";g||typeof l.UNSAFE_componentWillReceiveProps!="function"&&typeof l.componentWillReceiveProps!="function"||(u!==i||f!==d)&&d0(e,l,i,d),ds=!1;var _=e.memoizedState;l.state=_,df(e,i,l,s),f=e.memoizedState,u!==i||_!==f||Zn.current||ds?(typeof p=="function"&&(Np(e,n,p,i),f=e.memoizedState),(u=ds||f0(e,n,u,i,_,f,d))?(g||typeof l.UNSAFE_componentWillMount!="function"&&typeof l.componentWillMount!="function"||(typeof l.componentWillMount=="function"&&l.componentWillMount(),typeof l.UNSAFE_componentWillMount=="function"&&l.UNSAFE_componentWillMount()),typeof l.componentDidMount=="function"&&(e.flags|=4194308)):(typeof l.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=i,e.memoizedState=f),l.props=i,l.state=f,l.context=d,i=u):(typeof l.componentDidMount=="function"&&(e.flags|=4194308),i=!1)}else{l=e.stateNode,_y(t,e),u=e.memoizedProps,d=e.type===e.elementType?u:Yi(e.type,u),l.props=d,g=e.pendingProps,_=l.context,f=n.contextType,typeof f=="object"&&f!==null?f=Oi(f):(f=Qn(n)?co:Dn.current,f=Ca(e,f));var x=n.getDerivedStateFromProps;(p=typeof x=="function"||typeof l.getSnapshotBeforeUpdate=="function")||typeof l.UNSAFE_componentWillReceiveProps!="function"&&typeof l.componentWillReceiveProps!="function"||(u!==g||_!==f)&&d0(e,l,i,f),ds=!1,_=e.memoizedState,l.state=_,df(e,i,l,s);var E=e.memoizedState;u!==g||_!==E||Zn.current||ds?(typeof x=="function"&&(Np(e,n,x,i),E=e.memoizedState),(d=ds||f0(e,n,d,i,_,E,f)||!1)?(p||typeof l.UNSAFE_componentWillUpdate!="function"&&typeof l.componentWillUpdate!="function"||(typeof l.componentWillUpdate=="function"&&l.componentWillUpdate(i,E,f),typeof l.UNSAFE_componentWillUpdate=="function"&&l.UNSAFE_componentWillUpdate(i,E,f)),typeof l.componentDidUpdate=="function"&&(e.flags|=4),typeof l.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof l.componentDidUpdate!="function"||u===t.memoizedProps&&_===t.memoizedState||(e.flags|=4),typeof l.getSnapshotBeforeUpdate!="function"||u===t.memoizedProps&&_===t.memoizedState||(e.flags|=1024),e.memoizedProps=i,e.memoizedState=E),l.props=i,l.state=E,l.context=f,i=d):(typeof l.componentDidUpdate!="function"||u===t.memoizedProps&&_===t.memoizedState||(e.flags|=4),typeof l.getSnapshotBeforeUpdate!="function"||u===t.memoizedProps&&_===t.memoizedState||(e.flags|=1024),i=!1)}return zp(t,e,n,i,o,s)}function zp(t,e,n,i,s,o){jy(t,e);var l=(e.flags&128)!==0;if(!i&&!l)return s&&o0(e,n,!1),qr(t,e,o);i=e.stateNode,qL.current=e;var u=l&&typeof n.getDerivedStateFromError!="function"?null:i.render();return e.flags|=1,t!==null&&l?(e.child=Pa(e,t.child,null,o),e.child=Pa(e,null,u,o)):Bn(t,e,u,o),e.memoizedState=i.state,s&&o0(e,n,!0),e.child}function qy(t){var e=t.stateNode;e.pendingContext?s0(t,e.pendingContext,e.pendingContext!==e.context):e.context&&s0(t,e.context,!1),Fm(t,e.containerInfo)}function M0(t,e,n,i,s){return La(),Pm(s),e.flags|=256,Bn(t,e,n,i),e.child}var kp={dehydrated:null,treeContext:null,retryLane:0};function Hp(t){return{baseLanes:t,cachePool:null,transitions:null}}function Yy(t,e,n){var i=e.pendingProps,s=Wt.current,o=!1,l=(e.flags&128)!==0,u;if((u=l)||(u=t!==null&&t.memoizedState===null?!1:(s&2)!==0),u?(o=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(s|=1),bt(Wt,s&1),t===null)return Dp(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(l=i.children,t=i.fallback,o?(i=e.mode,o=e.child,l={mode:"hidden",children:l},!(i&1)&&o!==null?(o.childLanes=0,o.pendingProps=l):o=Nf(l,i,0,null),t=so(t,i,n,null),o.return=e,t.return=e,o.sibling=t,e.child=o,e.child.memoizedState=Hp(n),e.memoizedState=kp,t):Wm(e,l));if(s=t.memoizedState,s!==null&&(u=s.dehydrated,u!==null))return YL(t,e,l,i,u,s,n);if(o){o=i.fallback,l=e.mode,s=t.child,u=s.sibling;var f={mode:"hidden",children:i.children};return!(l&1)&&e.child!==s?(i=e.child,i.childLanes=0,i.pendingProps=f,e.deletions=null):(i=As(s,f),i.subtreeFlags=s.subtreeFlags&14680064),u!==null?o=As(u,o):(o=so(o,l,n,null),o.flags|=2),o.return=e,i.return=e,i.sibling=o,e.child=i,i=o,o=e.child,l=t.child.memoizedState,l=l===null?Hp(n):{baseLanes:l.baseLanes|n,cachePool:null,transitions:l.transitions},o.memoizedState=l,o.childLanes=t.childLanes&~n,e.memoizedState=kp,i}return o=t.child,t=o.sibling,i=As(o,{mode:"visible",children:i.children}),!(e.mode&1)&&(i.lanes=n),i.return=e,i.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=i,e.memoizedState=null,i}function Wm(t,e){return e=Nf({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function fc(t,e,n,i){return i!==null&&Pm(i),Pa(e,t.child,null,n),t=Wm(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function YL(t,e,n,i,s,o,l){if(n)return e.flags&256?(e.flags&=-257,i=wh(Error(me(422))),fc(t,e,l,i)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(o=i.fallback,s=e.mode,i=Nf({mode:"visible",children:i.children},s,0,null),o=so(o,s,l,null),o.flags|=2,i.return=e,o.return=e,i.sibling=o,e.child=i,e.mode&1&&Pa(e,t.child,null,l),e.child.memoizedState=Hp(l),e.memoizedState=kp,o);if(!(e.mode&1))return fc(t,e,l,null);if(s.data==="$!"){if(i=s.nextSibling&&s.nextSibling.dataset,i)var u=i.dgst;return i=u,o=Error(me(419)),i=wh(o,i,void 0),fc(t,e,l,i)}if(u=(l&t.childLanes)!==0,Kn||u){if(i=gn,i!==null){switch(l&-l){case 4:s=2;break;case 16:s=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:s=32;break;case 536870912:s=268435456;break;default:s=0}s=s&(i.suspendedLanes|l)?0:s,s!==0&&s!==o.retryLane&&(o.retryLane=s,jr(t,s),tr(i,t,s,-1))}return Km(),i=wh(Error(me(421))),fc(t,e,l,i)}return s.data==="$?"?(e.flags|=128,e.child=t.child,e=aP.bind(null,t),s._reactRetry=e,null):(t=o.treeContext,di=Ms(s.nextSibling),hi=e,kt=!0,Ki=null,t!==null&&(bi[Ui++]=Or,bi[Ui++]=Br,bi[Ui++]=fo,Or=t.id,Br=t.overflow,fo=e),e=Wm(e,i.children),e.flags|=4096,e)}function E0(t,e,n){t.lanes|=e;var i=t.alternate;i!==null&&(i.lanes|=e),Ip(t.return,e,n)}function Ah(t,e,n,i,s){var o=t.memoizedState;o===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:i,tail:n,tailMode:s}:(o.isBackwards=e,o.rendering=null,o.renderingStartTime=0,o.last=i,o.tail=n,o.tailMode=s)}function $y(t,e,n){var i=e.pendingProps,s=i.revealOrder,o=i.tail;if(Bn(t,e,i.children,n),i=Wt.current,i&2)i=i&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&E0(t,n,e);else if(t.tag===19)E0(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}i&=1}if(bt(Wt,i),!(e.mode&1))e.memoizedState=null;else switch(s){case"forwards":for(n=e.child,s=null;n!==null;)t=n.alternate,t!==null&&hf(t)===null&&(s=n),n=n.sibling;n=s,n===null?(s=e.child,e.child=null):(s=n.sibling,n.sibling=null),Ah(e,!1,s,n,o);break;case"backwards":for(n=null,s=e.child,e.child=null;s!==null;){if(t=s.alternate,t!==null&&hf(t)===null){e.child=s;break}t=s.sibling,s.sibling=n,n=s,s=t}Ah(e,!0,n,null,o);break;case"together":Ah(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function Xc(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function qr(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),po|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(me(153));if(e.child!==null){for(t=e.child,n=As(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=As(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function $L(t,e,n){switch(e.tag){case 3:qy(e),La();break;case 5:My(e);break;case 1:Qn(e.type)&&af(e);break;case 4:Fm(e,e.stateNode.containerInfo);break;case 10:var i=e.type._context,s=e.memoizedProps.value;bt(cf,i._currentValue),i._currentValue=s;break;case 13:if(i=e.memoizedState,i!==null)return i.dehydrated!==null?(bt(Wt,Wt.current&1),e.flags|=128,null):n&e.child.childLanes?Yy(t,e,n):(bt(Wt,Wt.current&1),t=qr(t,e,n),t!==null?t.sibling:null);bt(Wt,Wt.current&1);break;case 19:if(i=(n&e.childLanes)!==0,t.flags&128){if(i)return $y(t,e,n);e.flags|=128}if(s=e.memoizedState,s!==null&&(s.rendering=null,s.tail=null,s.lastEffect=null),bt(Wt,Wt.current),i)break;return null;case 22:case 23:return e.lanes=0,Xy(t,e,n)}return qr(t,e,n)}var Ky,Gp,Zy,Qy;Ky=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Gp=function(){};Zy=function(t,e,n,i){var s=t.memoizedProps;if(s!==i){t=e.stateNode,no(dr.current);var o=null;switch(n){case"input":s=cp(t,s),i=cp(t,i),o=[];break;case"select":s=jt({},s,{value:void 0}),i=jt({},i,{value:void 0}),o=[];break;case"textarea":s=hp(t,s),i=hp(t,i),o=[];break;default:typeof s.onClick!="function"&&typeof i.onClick=="function"&&(t.onclick=sf)}mp(n,i);var l;n=null;for(d in s)if(!i.hasOwnProperty(d)&&s.hasOwnProperty(d)&&s[d]!=null)if(d==="style"){var u=s[d];for(l in u)u.hasOwnProperty(l)&&(n||(n={}),n[l]="")}else d!=="dangerouslySetInnerHTML"&&d!=="children"&&d!=="suppressContentEditableWarning"&&d!=="suppressHydrationWarning"&&d!=="autoFocus"&&(Fl.hasOwnProperty(d)?o||(o=[]):(o=o||[]).push(d,null));for(d in i){var f=i[d];if(u=s!=null?s[d]:void 0,i.hasOwnProperty(d)&&f!==u&&(f!=null||u!=null))if(d==="style")if(u){for(l in u)!u.hasOwnProperty(l)||f&&f.hasOwnProperty(l)||(n||(n={}),n[l]="");for(l in f)f.hasOwnProperty(l)&&u[l]!==f[l]&&(n||(n={}),n[l]=f[l])}else n||(o||(o=[]),o.push(d,n)),n=f;else d==="dangerouslySetInnerHTML"?(f=f?f.__html:void 0,u=u?u.__html:void 0,f!=null&&u!==f&&(o=o||[]).push(d,f)):d==="children"?typeof f!="string"&&typeof f!="number"||(o=o||[]).push(d,""+f):d!=="suppressContentEditableWarning"&&d!=="suppressHydrationWarning"&&(Fl.hasOwnProperty(d)?(f!=null&&d==="onScroll"&&It("scroll",t),o||u===f||(o=[])):(o=o||[]).push(d,f))}n&&(o=o||[]).push("style",n);var d=o;(e.updateQueue=d)&&(e.flags|=4)}};Qy=function(t,e,n,i){n!==i&&(e.flags|=4)};function ml(t,e){if(!kt)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var i=null;n!==null;)n.alternate!==null&&(i=n),n=n.sibling;i===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:i.sibling=null}}function Ln(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,i=0;if(e)for(var s=t.child;s!==null;)n|=s.lanes|s.childLanes,i|=s.subtreeFlags&14680064,i|=s.flags&14680064,s.return=t,s=s.sibling;else for(s=t.child;s!==null;)n|=s.lanes|s.childLanes,i|=s.subtreeFlags,i|=s.flags,s.return=t,s=s.sibling;return t.subtreeFlags|=i,t.childLanes=n,e}function KL(t,e,n){var i=e.pendingProps;switch(Lm(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Ln(e),null;case 1:return Qn(e.type)&&of(),Ln(e),null;case 3:return i=e.stateNode,ba(),Ft(Zn),Ft(Dn),Bm(),i.pendingContext&&(i.context=i.pendingContext,i.pendingContext=null),(t===null||t.child===null)&&(uc(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,Ki!==null&&(Kp(Ki),Ki=null))),Gp(t,e),Ln(e),null;case 5:Om(e);var s=no(Yl.current);if(n=e.type,t!==null&&e.stateNode!=null)Zy(t,e,n,i,s),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!i){if(e.stateNode===null)throw Error(me(166));return Ln(e),null}if(t=no(dr.current),uc(e)){i=e.stateNode,n=e.type;var o=e.memoizedProps;switch(i[ur]=e,i[jl]=o,t=(e.mode&1)!==0,n){case"dialog":It("cancel",i),It("close",i);break;case"iframe":case"object":case"embed":It("load",i);break;case"video":case"audio":for(s=0;s<Tl.length;s++)It(Tl[s],i);break;case"source":It("error",i);break;case"img":case"image":case"link":It("error",i),It("load",i);break;case"details":It("toggle",i);break;case"input":Uv(i,o),It("invalid",i);break;case"select":i._wrapperState={wasMultiple:!!o.multiple},It("invalid",i);break;case"textarea":Iv(i,o),It("invalid",i)}mp(n,o),s=null;for(var l in o)if(o.hasOwnProperty(l)){var u=o[l];l==="children"?typeof u=="string"?i.textContent!==u&&(o.suppressHydrationWarning!==!0&&lc(i.textContent,u,t),s=["children",u]):typeof u=="number"&&i.textContent!==""+u&&(o.suppressHydrationWarning!==!0&&lc(i.textContent,u,t),s=["children",""+u]):Fl.hasOwnProperty(l)&&u!=null&&l==="onScroll"&&It("scroll",i)}switch(n){case"input":ec(i),Dv(i,o,!0);break;case"textarea":ec(i),Nv(i);break;case"select":case"option":break;default:typeof o.onClick=="function"&&(i.onclick=sf)}i=s,e.updateQueue=i,i!==null&&(e.flags|=4)}else{l=s.nodeType===9?s:s.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=wS(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=l.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof i.is=="string"?t=l.createElement(n,{is:i.is}):(t=l.createElement(n),n==="select"&&(l=t,i.multiple?l.multiple=!0:i.size&&(l.size=i.size))):t=l.createElementNS(t,n),t[ur]=e,t[jl]=i,Ky(t,e,!1,!1),e.stateNode=t;e:{switch(l=gp(n,i),n){case"dialog":It("cancel",t),It("close",t),s=i;break;case"iframe":case"object":case"embed":It("load",t),s=i;break;case"video":case"audio":for(s=0;s<Tl.length;s++)It(Tl[s],t);s=i;break;case"source":It("error",t),s=i;break;case"img":case"image":case"link":It("error",t),It("load",t),s=i;break;case"details":It("toggle",t),s=i;break;case"input":Uv(t,i),s=cp(t,i),It("invalid",t);break;case"option":s=i;break;case"select":t._wrapperState={wasMultiple:!!i.multiple},s=jt({},i,{value:void 0}),It("invalid",t);break;case"textarea":Iv(t,i),s=hp(t,i),It("invalid",t);break;default:s=i}mp(n,s),u=s;for(o in u)if(u.hasOwnProperty(o)){var f=u[o];o==="style"?CS(t,f):o==="dangerouslySetInnerHTML"?(f=f?f.__html:void 0,f!=null&&AS(t,f)):o==="children"?typeof f=="string"?(n!=="textarea"||f!=="")&&Ol(t,f):typeof f=="number"&&Ol(t,""+f):o!=="suppressContentEditableWarning"&&o!=="suppressHydrationWarning"&&o!=="autoFocus"&&(Fl.hasOwnProperty(o)?f!=null&&o==="onScroll"&&It("scroll",t):f!=null&&pm(t,o,f,l))}switch(n){case"input":ec(t),Dv(t,i,!1);break;case"textarea":ec(t),Nv(t);break;case"option":i.value!=null&&t.setAttribute("value",""+Ls(i.value));break;case"select":t.multiple=!!i.multiple,o=i.value,o!=null?va(t,!!i.multiple,o,!1):i.defaultValue!=null&&va(t,!!i.multiple,i.defaultValue,!0);break;default:typeof s.onClick=="function"&&(t.onclick=sf)}switch(n){case"button":case"input":case"select":case"textarea":i=!!i.autoFocus;break e;case"img":i=!0;break e;default:i=!1}}i&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return Ln(e),null;case 6:if(t&&e.stateNode!=null)Qy(t,e,t.memoizedProps,i);else{if(typeof i!="string"&&e.stateNode===null)throw Error(me(166));if(n=no(Yl.current),no(dr.current),uc(e)){if(i=e.stateNode,n=e.memoizedProps,i[ur]=e,(o=i.nodeValue!==n)&&(t=hi,t!==null))switch(t.tag){case 3:lc(i.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&lc(i.nodeValue,n,(t.mode&1)!==0)}o&&(e.flags|=4)}else i=(n.nodeType===9?n:n.ownerDocument).createTextNode(i),i[ur]=e,e.stateNode=i}return Ln(e),null;case 13:if(Ft(Wt),i=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(kt&&di!==null&&e.mode&1&&!(e.flags&128))my(),La(),e.flags|=98560,o=!1;else if(o=uc(e),i!==null&&i.dehydrated!==null){if(t===null){if(!o)throw Error(me(318));if(o=e.memoizedState,o=o!==null?o.dehydrated:null,!o)throw Error(me(317));o[ur]=e}else La(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;Ln(e),o=!1}else Ki!==null&&(Kp(Ki),Ki=null),o=!0;if(!o)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(i=i!==null,i!==(t!==null&&t.memoizedState!==null)&&i&&(e.child.flags|=8192,e.mode&1&&(t===null||Wt.current&1?un===0&&(un=3):Km())),e.updateQueue!==null&&(e.flags|=4),Ln(e),null);case 4:return ba(),Gp(t,e),t===null&&Wl(e.stateNode.containerInfo),Ln(e),null;case 10:return Dm(e.type._context),Ln(e),null;case 17:return Qn(e.type)&&of(),Ln(e),null;case 19:if(Ft(Wt),o=e.memoizedState,o===null)return Ln(e),null;if(i=(e.flags&128)!==0,l=o.rendering,l===null)if(i)ml(o,!1);else{if(un!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(l=hf(t),l!==null){for(e.flags|=128,ml(o,!1),i=l.updateQueue,i!==null&&(e.updateQueue=i,e.flags|=4),e.subtreeFlags=0,i=n,n=e.child;n!==null;)o=n,t=i,o.flags&=14680066,l=o.alternate,l===null?(o.childLanes=0,o.lanes=t,o.child=null,o.subtreeFlags=0,o.memoizedProps=null,o.memoizedState=null,o.updateQueue=null,o.dependencies=null,o.stateNode=null):(o.childLanes=l.childLanes,o.lanes=l.lanes,o.child=l.child,o.subtreeFlags=0,o.deletions=null,o.memoizedProps=l.memoizedProps,o.memoizedState=l.memoizedState,o.updateQueue=l.updateQueue,o.type=l.type,t=l.dependencies,o.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return bt(Wt,Wt.current&1|2),e.child}t=t.sibling}o.tail!==null&&Qt()>Da&&(e.flags|=128,i=!0,ml(o,!1),e.lanes=4194304)}else{if(!i)if(t=hf(l),t!==null){if(e.flags|=128,i=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),ml(o,!0),o.tail===null&&o.tailMode==="hidden"&&!l.alternate&&!kt)return Ln(e),null}else 2*Qt()-o.renderingStartTime>Da&&n!==1073741824&&(e.flags|=128,i=!0,ml(o,!1),e.lanes=4194304);o.isBackwards?(l.sibling=e.child,e.child=l):(n=o.last,n!==null?n.sibling=l:e.child=l,o.last=l)}return o.tail!==null?(e=o.tail,o.rendering=e,o.tail=e.sibling,o.renderingStartTime=Qt(),e.sibling=null,n=Wt.current,bt(Wt,i?n&1|2:n&1),e):(Ln(e),null);case 22:case 23:return $m(),i=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==i&&(e.flags|=8192),i&&e.mode&1?fi&1073741824&&(Ln(e),e.subtreeFlags&6&&(e.flags|=8192)):Ln(e),null;case 24:return null;case 25:return null}throw Error(me(156,e.tag))}function ZL(t,e){switch(Lm(e),e.tag){case 1:return Qn(e.type)&&of(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return ba(),Ft(Zn),Ft(Dn),Bm(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return Om(e),null;case 13:if(Ft(Wt),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(me(340));La()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return Ft(Wt),null;case 4:return ba(),null;case 10:return Dm(e.type._context),null;case 22:case 23:return $m(),null;case 24:return null;default:return null}}var dc=!1,Un=!1,QL=typeof WeakSet=="function"?WeakSet:Set,Le=null;function pa(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(i){$t(t,e,i)}else n.current=null}function Vp(t,e,n){try{n()}catch(i){$t(t,e,i)}}var T0=!1;function JL(t,e){if(Ap=tf,t=ny(),Rm(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var i=n.getSelection&&n.getSelection();if(i&&i.rangeCount!==0){n=i.anchorNode;var s=i.anchorOffset,o=i.focusNode;i=i.focusOffset;try{n.nodeType,o.nodeType}catch{n=null;break e}var l=0,u=-1,f=-1,d=0,p=0,g=t,_=null;t:for(;;){for(var x;g!==n||s!==0&&g.nodeType!==3||(u=l+s),g!==o||i!==0&&g.nodeType!==3||(f=l+i),g.nodeType===3&&(l+=g.nodeValue.length),(x=g.firstChild)!==null;)_=g,g=x;for(;;){if(g===t)break t;if(_===n&&++d===s&&(u=l),_===o&&++p===i&&(f=l),(x=g.nextSibling)!==null)break;g=_,_=g.parentNode}g=x}n=u===-1||f===-1?null:{start:u,end:f}}else n=null}n=n||{start:0,end:0}}else n=null;for(Rp={focusedElem:t,selectionRange:n},tf=!1,Le=e;Le!==null;)if(e=Le,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,Le=t;else for(;Le!==null;){e=Le;try{var E=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(E!==null){var T=E.memoizedProps,v=E.memoizedState,h=e.stateNode,y=h.getSnapshotBeforeUpdate(e.elementType===e.type?T:Yi(e.type,T),v);h.__reactInternalSnapshotBeforeUpdate=y}break;case 3:var S=e.stateNode.containerInfo;S.nodeType===1?S.textContent="":S.nodeType===9&&S.documentElement&&S.removeChild(S.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(me(163))}}catch(w){$t(e,e.return,w)}if(t=e.sibling,t!==null){t.return=e.return,Le=t;break}Le=e.return}return E=T0,T0=!1,E}function Ul(t,e,n){var i=e.updateQueue;if(i=i!==null?i.lastEffect:null,i!==null){var s=i=i.next;do{if((s.tag&t)===t){var o=s.destroy;s.destroy=void 0,o!==void 0&&Vp(e,n,o)}s=s.next}while(s!==i)}}function Df(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var i=n.create;n.destroy=i()}n=n.next}while(n!==e)}}function Wp(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function Jy(t){var e=t.alternate;e!==null&&(t.alternate=null,Jy(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[ur],delete e[jl],delete e[Pp],delete e[NL],delete e[FL])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function eM(t){return t.tag===5||t.tag===3||t.tag===4}function w0(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||eM(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Xp(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=sf));else if(i!==4&&(t=t.child,t!==null))for(Xp(t,e,n),t=t.sibling;t!==null;)Xp(t,e,n),t=t.sibling}function jp(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(i!==4&&(t=t.child,t!==null))for(jp(t,e,n),t=t.sibling;t!==null;)jp(t,e,n),t=t.sibling}var Sn=null,$i=!1;function os(t,e,n){for(n=n.child;n!==null;)tM(t,e,n),n=n.sibling}function tM(t,e,n){if(fr&&typeof fr.onCommitFiberUnmount=="function")try{fr.onCommitFiberUnmount(wf,n)}catch{}switch(n.tag){case 5:Un||pa(n,e);case 6:var i=Sn,s=$i;Sn=null,os(t,e,n),Sn=i,$i=s,Sn!==null&&($i?(t=Sn,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):Sn.removeChild(n.stateNode));break;case 18:Sn!==null&&($i?(t=Sn,n=n.stateNode,t.nodeType===8?xh(t.parentNode,n):t.nodeType===1&&xh(t,n),Hl(t)):xh(Sn,n.stateNode));break;case 4:i=Sn,s=$i,Sn=n.stateNode.containerInfo,$i=!0,os(t,e,n),Sn=i,$i=s;break;case 0:case 11:case 14:case 15:if(!Un&&(i=n.updateQueue,i!==null&&(i=i.lastEffect,i!==null))){s=i=i.next;do{var o=s,l=o.destroy;o=o.tag,l!==void 0&&(o&2||o&4)&&Vp(n,e,l),s=s.next}while(s!==i)}os(t,e,n);break;case 1:if(!Un&&(pa(n,e),i=n.stateNode,typeof i.componentWillUnmount=="function"))try{i.props=n.memoizedProps,i.state=n.memoizedState,i.componentWillUnmount()}catch(u){$t(n,e,u)}os(t,e,n);break;case 21:os(t,e,n);break;case 22:n.mode&1?(Un=(i=Un)||n.memoizedState!==null,os(t,e,n),Un=i):os(t,e,n);break;default:os(t,e,n)}}function A0(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new QL),e.forEach(function(i){var s=lP.bind(null,t,i);n.has(i)||(n.add(i),i.then(s,s))})}}function Vi(t,e){var n=e.deletions;if(n!==null)for(var i=0;i<n.length;i++){var s=n[i];try{var o=t,l=e,u=l;e:for(;u!==null;){switch(u.tag){case 5:Sn=u.stateNode,$i=!1;break e;case 3:Sn=u.stateNode.containerInfo,$i=!0;break e;case 4:Sn=u.stateNode.containerInfo,$i=!0;break e}u=u.return}if(Sn===null)throw Error(me(160));tM(o,l,s),Sn=null,$i=!1;var f=s.alternate;f!==null&&(f.return=null),s.return=null}catch(d){$t(s,e,d)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)nM(e,t),e=e.sibling}function nM(t,e){var n=t.alternate,i=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(Vi(e,t),or(t),i&4){try{Ul(3,t,t.return),Df(3,t)}catch(T){$t(t,t.return,T)}try{Ul(5,t,t.return)}catch(T){$t(t,t.return,T)}}break;case 1:Vi(e,t),or(t),i&512&&n!==null&&pa(n,n.return);break;case 5:if(Vi(e,t),or(t),i&512&&n!==null&&pa(n,n.return),t.flags&32){var s=t.stateNode;try{Ol(s,"")}catch(T){$t(t,t.return,T)}}if(i&4&&(s=t.stateNode,s!=null)){var o=t.memoizedProps,l=n!==null?n.memoizedProps:o,u=t.type,f=t.updateQueue;if(t.updateQueue=null,f!==null)try{u==="input"&&o.type==="radio"&&o.name!=null&&ES(s,o),gp(u,l);var d=gp(u,o);for(l=0;l<f.length;l+=2){var p=f[l],g=f[l+1];p==="style"?CS(s,g):p==="dangerouslySetInnerHTML"?AS(s,g):p==="children"?Ol(s,g):pm(s,p,g,d)}switch(u){case"input":fp(s,o);break;case"textarea":TS(s,o);break;case"select":var _=s._wrapperState.wasMultiple;s._wrapperState.wasMultiple=!!o.multiple;var x=o.value;x!=null?va(s,!!o.multiple,x,!1):_!==!!o.multiple&&(o.defaultValue!=null?va(s,!!o.multiple,o.defaultValue,!0):va(s,!!o.multiple,o.multiple?[]:"",!1))}s[jl]=o}catch(T){$t(t,t.return,T)}}break;case 6:if(Vi(e,t),or(t),i&4){if(t.stateNode===null)throw Error(me(162));s=t.stateNode,o=t.memoizedProps;try{s.nodeValue=o}catch(T){$t(t,t.return,T)}}break;case 3:if(Vi(e,t),or(t),i&4&&n!==null&&n.memoizedState.isDehydrated)try{Hl(e.containerInfo)}catch(T){$t(t,t.return,T)}break;case 4:Vi(e,t),or(t);break;case 13:Vi(e,t),or(t),s=t.child,s.flags&8192&&(o=s.memoizedState!==null,s.stateNode.isHidden=o,!o||s.alternate!==null&&s.alternate.memoizedState!==null||(qm=Qt())),i&4&&A0(t);break;case 22:if(p=n!==null&&n.memoizedState!==null,t.mode&1?(Un=(d=Un)||p,Vi(e,t),Un=d):Vi(e,t),or(t),i&8192){if(d=t.memoizedState!==null,(t.stateNode.isHidden=d)&&!p&&t.mode&1)for(Le=t,p=t.child;p!==null;){for(g=Le=p;Le!==null;){switch(_=Le,x=_.child,_.tag){case 0:case 11:case 14:case 15:Ul(4,_,_.return);break;case 1:pa(_,_.return);var E=_.stateNode;if(typeof E.componentWillUnmount=="function"){i=_,n=_.return;try{e=i,E.props=e.memoizedProps,E.state=e.memoizedState,E.componentWillUnmount()}catch(T){$t(i,n,T)}}break;case 5:pa(_,_.return);break;case 22:if(_.memoizedState!==null){C0(g);continue}}x!==null?(x.return=_,Le=x):C0(g)}p=p.sibling}e:for(p=null,g=t;;){if(g.tag===5){if(p===null){p=g;try{s=g.stateNode,d?(o=s.style,typeof o.setProperty=="function"?o.setProperty("display","none","important"):o.display="none"):(u=g.stateNode,f=g.memoizedProps.style,l=f!=null&&f.hasOwnProperty("display")?f.display:null,u.style.display=RS("display",l))}catch(T){$t(t,t.return,T)}}}else if(g.tag===6){if(p===null)try{g.stateNode.nodeValue=d?"":g.memoizedProps}catch(T){$t(t,t.return,T)}}else if((g.tag!==22&&g.tag!==23||g.memoizedState===null||g===t)&&g.child!==null){g.child.return=g,g=g.child;continue}if(g===t)break e;for(;g.sibling===null;){if(g.return===null||g.return===t)break e;p===g&&(p=null),g=g.return}p===g&&(p=null),g.sibling.return=g.return,g=g.sibling}}break;case 19:Vi(e,t),or(t),i&4&&A0(t);break;case 21:break;default:Vi(e,t),or(t)}}function or(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(eM(n)){var i=n;break e}n=n.return}throw Error(me(160))}switch(i.tag){case 5:var s=i.stateNode;i.flags&32&&(Ol(s,""),i.flags&=-33);var o=w0(t);jp(t,o,s);break;case 3:case 4:var l=i.stateNode.containerInfo,u=w0(t);Xp(t,u,l);break;default:throw Error(me(161))}}catch(f){$t(t,t.return,f)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function eP(t,e,n){Le=t,iM(t)}function iM(t,e,n){for(var i=(t.mode&1)!==0;Le!==null;){var s=Le,o=s.child;if(s.tag===22&&i){var l=s.memoizedState!==null||dc;if(!l){var u=s.alternate,f=u!==null&&u.memoizedState!==null||Un;u=dc;var d=Un;if(dc=l,(Un=f)&&!d)for(Le=s;Le!==null;)l=Le,f=l.child,l.tag===22&&l.memoizedState!==null?L0(s):f!==null?(f.return=l,Le=f):L0(s);for(;o!==null;)Le=o,iM(o),o=o.sibling;Le=s,dc=u,Un=d}R0(t)}else s.subtreeFlags&8772&&o!==null?(o.return=s,Le=o):R0(t)}}function R0(t){for(;Le!==null;){var e=Le;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:Un||Df(5,e);break;case 1:var i=e.stateNode;if(e.flags&4&&!Un)if(n===null)i.componentDidMount();else{var s=e.elementType===e.type?n.memoizedProps:Yi(e.type,n.memoizedProps);i.componentDidUpdate(s,n.memoizedState,i.__reactInternalSnapshotBeforeUpdate)}var o=e.updateQueue;o!==null&&c0(e,o,i);break;case 3:var l=e.updateQueue;if(l!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}c0(e,l,n)}break;case 5:var u=e.stateNode;if(n===null&&e.flags&4){n=u;var f=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":f.autoFocus&&n.focus();break;case"img":f.src&&(n.src=f.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var d=e.alternate;if(d!==null){var p=d.memoizedState;if(p!==null){var g=p.dehydrated;g!==null&&Hl(g)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(me(163))}Un||e.flags&512&&Wp(e)}catch(_){$t(e,e.return,_)}}if(e===t){Le=null;break}if(n=e.sibling,n!==null){n.return=e.return,Le=n;break}Le=e.return}}function C0(t){for(;Le!==null;){var e=Le;if(e===t){Le=null;break}var n=e.sibling;if(n!==null){n.return=e.return,Le=n;break}Le=e.return}}function L0(t){for(;Le!==null;){var e=Le;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{Df(4,e)}catch(f){$t(e,n,f)}break;case 1:var i=e.stateNode;if(typeof i.componentDidMount=="function"){var s=e.return;try{i.componentDidMount()}catch(f){$t(e,s,f)}}var o=e.return;try{Wp(e)}catch(f){$t(e,o,f)}break;case 5:var l=e.return;try{Wp(e)}catch(f){$t(e,l,f)}}}catch(f){$t(e,e.return,f)}if(e===t){Le=null;break}var u=e.sibling;if(u!==null){u.return=e.return,Le=u;break}Le=e.return}}var tP=Math.ceil,gf=$r.ReactCurrentDispatcher,Xm=$r.ReactCurrentOwner,Fi=$r.ReactCurrentBatchConfig,St=0,gn=null,nn=null,Mn=0,fi=0,ma=Ds(0),un=0,Ql=null,po=0,If=0,jm=0,Dl=null,Yn=null,qm=0,Da=1/0,Ir=null,_f=!1,qp=null,Ts=null,hc=!1,gs=null,vf=0,Il=0,Yp=null,jc=-1,qc=0;function kn(){return St&6?Qt():jc!==-1?jc:jc=Qt()}function ws(t){return t.mode&1?St&2&&Mn!==0?Mn&-Mn:BL.transition!==null?(qc===0&&(qc=kS()),qc):(t=wt,t!==0||(t=window.event,t=t===void 0?16:qS(t.type)),t):1}function tr(t,e,n,i){if(50<Il)throw Il=0,Yp=null,Error(me(185));nu(t,n,i),(!(St&2)||t!==gn)&&(t===gn&&(!(St&2)&&(If|=n),un===4&&ps(t,Mn)),Jn(t,i),n===1&&St===0&&!(e.mode&1)&&(Da=Qt()+500,Pf&&Is()))}function Jn(t,e){var n=t.callbackNode;B2(t,e);var i=ef(t,t===gn?Mn:0);if(i===0)n!==null&&Bv(n),t.callbackNode=null,t.callbackPriority=0;else if(e=i&-i,t.callbackPriority!==e){if(n!=null&&Bv(n),e===1)t.tag===0?OL(P0.bind(null,t)):dy(P0.bind(null,t)),DL(function(){!(St&6)&&Is()}),n=null;else{switch(HS(i)){case 1:n=xm;break;case 4:n=BS;break;case 16:n=Jc;break;case 536870912:n=zS;break;default:n=Jc}n=fM(n,rM.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function rM(t,e){if(jc=-1,qc=0,St&6)throw Error(me(327));var n=t.callbackNode;if(Ea()&&t.callbackNode!==n)return null;var i=ef(t,t===gn?Mn:0);if(i===0)return null;if(i&30||i&t.expiredLanes||e)e=xf(t,i);else{e=i;var s=St;St|=2;var o=oM();(gn!==t||Mn!==e)&&(Ir=null,Da=Qt()+500,ro(t,e));do try{rP();break}catch(u){sM(t,u)}while(1);Um(),gf.current=o,St=s,nn!==null?e=0:(gn=null,Mn=0,e=un)}if(e!==0){if(e===2&&(s=yp(t),s!==0&&(i=s,e=$p(t,s))),e===1)throw n=Ql,ro(t,0),ps(t,i),Jn(t,Qt()),n;if(e===6)ps(t,i);else{if(s=t.current.alternate,!(i&30)&&!nP(s)&&(e=xf(t,i),e===2&&(o=yp(t),o!==0&&(i=o,e=$p(t,o))),e===1))throw n=Ql,ro(t,0),ps(t,i),Jn(t,Qt()),n;switch(t.finishedWork=s,t.finishedLanes=i,e){case 0:case 1:throw Error(me(345));case 2:$s(t,Yn,Ir);break;case 3:if(ps(t,i),(i&130023424)===i&&(e=qm+500-Qt(),10<e)){if(ef(t,0)!==0)break;if(s=t.suspendedLanes,(s&i)!==i){kn(),t.pingedLanes|=t.suspendedLanes&s;break}t.timeoutHandle=Lp($s.bind(null,t,Yn,Ir),e);break}$s(t,Yn,Ir);break;case 4:if(ps(t,i),(i&4194240)===i)break;for(e=t.eventTimes,s=-1;0<i;){var l=31-er(i);o=1<<l,l=e[l],l>s&&(s=l),i&=~o}if(i=s,i=Qt()-i,i=(120>i?120:480>i?480:1080>i?1080:1920>i?1920:3e3>i?3e3:4320>i?4320:1960*tP(i/1960))-i,10<i){t.timeoutHandle=Lp($s.bind(null,t,Yn,Ir),i);break}$s(t,Yn,Ir);break;case 5:$s(t,Yn,Ir);break;default:throw Error(me(329))}}}return Jn(t,Qt()),t.callbackNode===n?rM.bind(null,t):null}function $p(t,e){var n=Dl;return t.current.memoizedState.isDehydrated&&(ro(t,e).flags|=256),t=xf(t,e),t!==2&&(e=Yn,Yn=n,e!==null&&Kp(e)),t}function Kp(t){Yn===null?Yn=t:Yn.push.apply(Yn,t)}function nP(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var i=0;i<n.length;i++){var s=n[i],o=s.getSnapshot;s=s.value;try{if(!nr(o(),s))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function ps(t,e){for(e&=~jm,e&=~If,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-er(e),i=1<<n;t[n]=-1,e&=~i}}function P0(t){if(St&6)throw Error(me(327));Ea();var e=ef(t,0);if(!(e&1))return Jn(t,Qt()),null;var n=xf(t,e);if(t.tag!==0&&n===2){var i=yp(t);i!==0&&(e=i,n=$p(t,i))}if(n===1)throw n=Ql,ro(t,0),ps(t,e),Jn(t,Qt()),n;if(n===6)throw Error(me(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,$s(t,Yn,Ir),Jn(t,Qt()),null}function Ym(t,e){var n=St;St|=1;try{return t(e)}finally{St=n,St===0&&(Da=Qt()+500,Pf&&Is())}}function mo(t){gs!==null&&gs.tag===0&&!(St&6)&&Ea();var e=St;St|=1;var n=Fi.transition,i=wt;try{if(Fi.transition=null,wt=1,t)return t()}finally{wt=i,Fi.transition=n,St=e,!(St&6)&&Is()}}function $m(){fi=ma.current,Ft(ma)}function ro(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,UL(n)),nn!==null)for(n=nn.return;n!==null;){var i=n;switch(Lm(i),i.tag){case 1:i=i.type.childContextTypes,i!=null&&of();break;case 3:ba(),Ft(Zn),Ft(Dn),Bm();break;case 5:Om(i);break;case 4:ba();break;case 13:Ft(Wt);break;case 19:Ft(Wt);break;case 10:Dm(i.type._context);break;case 22:case 23:$m()}n=n.return}if(gn=t,nn=t=As(t.current,null),Mn=fi=e,un=0,Ql=null,jm=If=po=0,Yn=Dl=null,to!==null){for(e=0;e<to.length;e++)if(n=to[e],i=n.interleaved,i!==null){n.interleaved=null;var s=i.next,o=n.pending;if(o!==null){var l=o.next;o.next=s,i.next=l}n.pending=i}to=null}return t}function sM(t,e){do{var n=nn;try{if(Um(),Vc.current=mf,pf){for(var i=Xt.memoizedState;i!==null;){var s=i.queue;s!==null&&(s.pending=null),i=i.next}pf=!1}if(ho=0,mn=ln=Xt=null,bl=!1,$l=0,Xm.current=null,n===null||n.return===null){un=1,Ql=e,nn=null;break}e:{var o=t,l=n.return,u=n,f=e;if(e=Mn,u.flags|=32768,f!==null&&typeof f=="object"&&typeof f.then=="function"){var d=f,p=u,g=p.tag;if(!(p.mode&1)&&(g===0||g===11||g===15)){var _=p.alternate;_?(p.updateQueue=_.updateQueue,p.memoizedState=_.memoizedState,p.lanes=_.lanes):(p.updateQueue=null,p.memoizedState=null)}var x=_0(l);if(x!==null){x.flags&=-257,v0(x,l,u,o,e),x.mode&1&&g0(o,d,e),e=x,f=d;var E=e.updateQueue;if(E===null){var T=new Set;T.add(f),e.updateQueue=T}else E.add(f);break e}else{if(!(e&1)){g0(o,d,e),Km();break e}f=Error(me(426))}}else if(kt&&u.mode&1){var v=_0(l);if(v!==null){!(v.flags&65536)&&(v.flags|=256),v0(v,l,u,o,e),Pm(Ua(f,u));break e}}o=f=Ua(f,u),un!==4&&(un=2),Dl===null?Dl=[o]:Dl.push(o),o=l;do{switch(o.tag){case 3:o.flags|=65536,e&=-e,o.lanes|=e;var h=Gy(o,f,e);u0(o,h);break e;case 1:u=f;var y=o.type,S=o.stateNode;if(!(o.flags&128)&&(typeof y.getDerivedStateFromError=="function"||S!==null&&typeof S.componentDidCatch=="function"&&(Ts===null||!Ts.has(S)))){o.flags|=65536,e&=-e,o.lanes|=e;var w=Vy(o,u,e);u0(o,w);break e}}o=o.return}while(o!==null)}lM(n)}catch(P){e=P,nn===n&&n!==null&&(nn=n=n.return);continue}break}while(1)}function oM(){var t=gf.current;return gf.current=mf,t===null?mf:t}function Km(){(un===0||un===3||un===2)&&(un=4),gn===null||!(po&268435455)&&!(If&268435455)||ps(gn,Mn)}function xf(t,e){var n=St;St|=2;var i=oM();(gn!==t||Mn!==e)&&(Ir=null,ro(t,e));do try{iP();break}catch(s){sM(t,s)}while(1);if(Um(),St=n,gf.current=i,nn!==null)throw Error(me(261));return gn=null,Mn=0,un}function iP(){for(;nn!==null;)aM(nn)}function rP(){for(;nn!==null&&!L2();)aM(nn)}function aM(t){var e=cM(t.alternate,t,fi);t.memoizedProps=t.pendingProps,e===null?lM(t):nn=e,Xm.current=null}function lM(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=ZL(n,e),n!==null){n.flags&=32767,nn=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{un=6,nn=null;return}}else if(n=KL(n,e,fi),n!==null){nn=n;return}if(e=e.sibling,e!==null){nn=e;return}nn=e=t}while(e!==null);un===0&&(un=5)}function $s(t,e,n){var i=wt,s=Fi.transition;try{Fi.transition=null,wt=1,sP(t,e,n,i)}finally{Fi.transition=s,wt=i}return null}function sP(t,e,n,i){do Ea();while(gs!==null);if(St&6)throw Error(me(327));n=t.finishedWork;var s=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(me(177));t.callbackNode=null,t.callbackPriority=0;var o=n.lanes|n.childLanes;if(z2(t,o),t===gn&&(nn=gn=null,Mn=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||hc||(hc=!0,fM(Jc,function(){return Ea(),null})),o=(n.flags&15990)!==0,n.subtreeFlags&15990||o){o=Fi.transition,Fi.transition=null;var l=wt;wt=1;var u=St;St|=4,Xm.current=null,JL(t,n),nM(n,t),wL(Rp),tf=!!Ap,Rp=Ap=null,t.current=n,eP(n),P2(),St=u,wt=l,Fi.transition=o}else t.current=n;if(hc&&(hc=!1,gs=t,vf=s),o=t.pendingLanes,o===0&&(Ts=null),D2(n.stateNode),Jn(t,Qt()),e!==null)for(i=t.onRecoverableError,n=0;n<e.length;n++)s=e[n],i(s.value,{componentStack:s.stack,digest:s.digest});if(_f)throw _f=!1,t=qp,qp=null,t;return vf&1&&t.tag!==0&&Ea(),o=t.pendingLanes,o&1?t===Yp?Il++:(Il=0,Yp=t):Il=0,Is(),null}function Ea(){if(gs!==null){var t=HS(vf),e=Fi.transition,n=wt;try{if(Fi.transition=null,wt=16>t?16:t,gs===null)var i=!1;else{if(t=gs,gs=null,vf=0,St&6)throw Error(me(331));var s=St;for(St|=4,Le=t.current;Le!==null;){var o=Le,l=o.child;if(Le.flags&16){var u=o.deletions;if(u!==null){for(var f=0;f<u.length;f++){var d=u[f];for(Le=d;Le!==null;){var p=Le;switch(p.tag){case 0:case 11:case 15:Ul(8,p,o)}var g=p.child;if(g!==null)g.return=p,Le=g;else for(;Le!==null;){p=Le;var _=p.sibling,x=p.return;if(Jy(p),p===d){Le=null;break}if(_!==null){_.return=x,Le=_;break}Le=x}}}var E=o.alternate;if(E!==null){var T=E.child;if(T!==null){E.child=null;do{var v=T.sibling;T.sibling=null,T=v}while(T!==null)}}Le=o}}if(o.subtreeFlags&2064&&l!==null)l.return=o,Le=l;else e:for(;Le!==null;){if(o=Le,o.flags&2048)switch(o.tag){case 0:case 11:case 15:Ul(9,o,o.return)}var h=o.sibling;if(h!==null){h.return=o.return,Le=h;break e}Le=o.return}}var y=t.current;for(Le=y;Le!==null;){l=Le;var S=l.child;if(l.subtreeFlags&2064&&S!==null)S.return=l,Le=S;else e:for(l=y;Le!==null;){if(u=Le,u.flags&2048)try{switch(u.tag){case 0:case 11:case 15:Df(9,u)}}catch(P){$t(u,u.return,P)}if(u===l){Le=null;break e}var w=u.sibling;if(w!==null){w.return=u.return,Le=w;break e}Le=u.return}}if(St=s,Is(),fr&&typeof fr.onPostCommitFiberRoot=="function")try{fr.onPostCommitFiberRoot(wf,t)}catch{}i=!0}return i}finally{wt=n,Fi.transition=e}}return!1}function b0(t,e,n){e=Ua(n,e),e=Gy(t,e,1),t=Es(t,e,1),e=kn(),t!==null&&(nu(t,1,e),Jn(t,e))}function $t(t,e,n){if(t.tag===3)b0(t,t,n);else for(;e!==null;){if(e.tag===3){b0(e,t,n);break}else if(e.tag===1){var i=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof i.componentDidCatch=="function"&&(Ts===null||!Ts.has(i))){t=Ua(n,t),t=Vy(e,t,1),e=Es(e,t,1),t=kn(),e!==null&&(nu(e,1,t),Jn(e,t));break}}e=e.return}}function oP(t,e,n){var i=t.pingCache;i!==null&&i.delete(e),e=kn(),t.pingedLanes|=t.suspendedLanes&n,gn===t&&(Mn&n)===n&&(un===4||un===3&&(Mn&130023424)===Mn&&500>Qt()-qm?ro(t,0):jm|=n),Jn(t,e)}function uM(t,e){e===0&&(t.mode&1?(e=ic,ic<<=1,!(ic&130023424)&&(ic=4194304)):e=1);var n=kn();t=jr(t,e),t!==null&&(nu(t,e,n),Jn(t,n))}function aP(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),uM(t,n)}function lP(t,e){var n=0;switch(t.tag){case 13:var i=t.stateNode,s=t.memoizedState;s!==null&&(n=s.retryLane);break;case 19:i=t.stateNode;break;default:throw Error(me(314))}i!==null&&i.delete(e),uM(t,n)}var cM;cM=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||Zn.current)Kn=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return Kn=!1,$L(t,e,n);Kn=!!(t.flags&131072)}else Kn=!1,kt&&e.flags&1048576&&hy(e,uf,e.index);switch(e.lanes=0,e.tag){case 2:var i=e.type;Xc(t,e),t=e.pendingProps;var s=Ca(e,Dn.current);Ma(e,n),s=km(null,e,i,t,s,n);var o=Hm();return e.flags|=1,typeof s=="object"&&s!==null&&typeof s.render=="function"&&s.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,Qn(i)?(o=!0,af(e)):o=!1,e.memoizedState=s.state!==null&&s.state!==void 0?s.state:null,Nm(e),s.updater=bf,e.stateNode=s,s._reactInternals=e,Fp(e,i,t,n),e=zp(null,e,i,!0,o,n)):(e.tag=0,kt&&o&&Cm(e),Bn(null,e,s,n),e=e.child),e;case 16:i=e.elementType;e:{switch(Xc(t,e),t=e.pendingProps,s=i._init,i=s(i._payload),e.type=i,s=e.tag=cP(i),t=Yi(i,t),s){case 0:e=Bp(null,e,i,t,n);break e;case 1:e=y0(null,e,i,t,n);break e;case 11:e=x0(null,e,i,t,n);break e;case 14:e=S0(null,e,i,Yi(i.type,t),n);break e}throw Error(me(306,i,""))}return e;case 0:return i=e.type,s=e.pendingProps,s=e.elementType===i?s:Yi(i,s),Bp(t,e,i,s,n);case 1:return i=e.type,s=e.pendingProps,s=e.elementType===i?s:Yi(i,s),y0(t,e,i,s,n);case 3:e:{if(qy(e),t===null)throw Error(me(387));i=e.pendingProps,o=e.memoizedState,s=o.element,_y(t,e),df(e,i,null,n);var l=e.memoizedState;if(i=l.element,o.isDehydrated)if(o={element:i,isDehydrated:!1,cache:l.cache,pendingSuspenseBoundaries:l.pendingSuspenseBoundaries,transitions:l.transitions},e.updateQueue.baseState=o,e.memoizedState=o,e.flags&256){s=Ua(Error(me(423)),e),e=M0(t,e,i,n,s);break e}else if(i!==s){s=Ua(Error(me(424)),e),e=M0(t,e,i,n,s);break e}else for(di=Ms(e.stateNode.containerInfo.firstChild),hi=e,kt=!0,Ki=null,n=yy(e,null,i,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(La(),i===s){e=qr(t,e,n);break e}Bn(t,e,i,n)}e=e.child}return e;case 5:return My(e),t===null&&Dp(e),i=e.type,s=e.pendingProps,o=t!==null?t.memoizedProps:null,l=s.children,Cp(i,s)?l=null:o!==null&&Cp(i,o)&&(e.flags|=32),jy(t,e),Bn(t,e,l,n),e.child;case 6:return t===null&&Dp(e),null;case 13:return Yy(t,e,n);case 4:return Fm(e,e.stateNode.containerInfo),i=e.pendingProps,t===null?e.child=Pa(e,null,i,n):Bn(t,e,i,n),e.child;case 11:return i=e.type,s=e.pendingProps,s=e.elementType===i?s:Yi(i,s),x0(t,e,i,s,n);case 7:return Bn(t,e,e.pendingProps,n),e.child;case 8:return Bn(t,e,e.pendingProps.children,n),e.child;case 12:return Bn(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(i=e.type._context,s=e.pendingProps,o=e.memoizedProps,l=s.value,bt(cf,i._currentValue),i._currentValue=l,o!==null)if(nr(o.value,l)){if(o.children===s.children&&!Zn.current){e=qr(t,e,n);break e}}else for(o=e.child,o!==null&&(o.return=e);o!==null;){var u=o.dependencies;if(u!==null){l=o.child;for(var f=u.firstContext;f!==null;){if(f.context===i){if(o.tag===1){f=Hr(-1,n&-n),f.tag=2;var d=o.updateQueue;if(d!==null){d=d.shared;var p=d.pending;p===null?f.next=f:(f.next=p.next,p.next=f),d.pending=f}}o.lanes|=n,f=o.alternate,f!==null&&(f.lanes|=n),Ip(o.return,n,e),u.lanes|=n;break}f=f.next}}else if(o.tag===10)l=o.type===e.type?null:o.child;else if(o.tag===18){if(l=o.return,l===null)throw Error(me(341));l.lanes|=n,u=l.alternate,u!==null&&(u.lanes|=n),Ip(l,n,e),l=o.sibling}else l=o.child;if(l!==null)l.return=o;else for(l=o;l!==null;){if(l===e){l=null;break}if(o=l.sibling,o!==null){o.return=l.return,l=o;break}l=l.return}o=l}Bn(t,e,s.children,n),e=e.child}return e;case 9:return s=e.type,i=e.pendingProps.children,Ma(e,n),s=Oi(s),i=i(s),e.flags|=1,Bn(t,e,i,n),e.child;case 14:return i=e.type,s=Yi(i,e.pendingProps),s=Yi(i.type,s),S0(t,e,i,s,n);case 15:return Wy(t,e,e.type,e.pendingProps,n);case 17:return i=e.type,s=e.pendingProps,s=e.elementType===i?s:Yi(i,s),Xc(t,e),e.tag=1,Qn(i)?(t=!0,af(e)):t=!1,Ma(e,n),xy(e,i,s),Fp(e,i,s,n),zp(null,e,i,!0,t,n);case 19:return $y(t,e,n);case 22:return Xy(t,e,n)}throw Error(me(156,e.tag))};function fM(t,e){return OS(t,e)}function uP(t,e,n,i){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=i,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Ni(t,e,n,i){return new uP(t,e,n,i)}function Zm(t){return t=t.prototype,!(!t||!t.isReactComponent)}function cP(t){if(typeof t=="function")return Zm(t)?1:0;if(t!=null){if(t=t.$$typeof,t===gm)return 11;if(t===_m)return 14}return 2}function As(t,e){var n=t.alternate;return n===null?(n=Ni(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function Yc(t,e,n,i,s,o){var l=2;if(i=t,typeof t=="function")Zm(t)&&(l=1);else if(typeof t=="string")l=5;else e:switch(t){case sa:return so(n.children,s,o,e);case mm:l=8,s|=8;break;case op:return t=Ni(12,n,e,s|2),t.elementType=op,t.lanes=o,t;case ap:return t=Ni(13,n,e,s),t.elementType=ap,t.lanes=o,t;case lp:return t=Ni(19,n,e,s),t.elementType=lp,t.lanes=o,t;case SS:return Nf(n,s,o,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case vS:l=10;break e;case xS:l=9;break e;case gm:l=11;break e;case _m:l=14;break e;case fs:l=16,i=null;break e}throw Error(me(130,t==null?t:typeof t,""))}return e=Ni(l,n,e,s),e.elementType=t,e.type=i,e.lanes=o,e}function so(t,e,n,i){return t=Ni(7,t,i,e),t.lanes=n,t}function Nf(t,e,n,i){return t=Ni(22,t,i,e),t.elementType=SS,t.lanes=n,t.stateNode={isHidden:!1},t}function Rh(t,e,n){return t=Ni(6,t,null,e),t.lanes=n,t}function Ch(t,e,n){return e=Ni(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function fP(t,e,n,i,s){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=lh(0),this.expirationTimes=lh(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=lh(0),this.identifierPrefix=i,this.onRecoverableError=s,this.mutableSourceEagerHydrationData=null}function Qm(t,e,n,i,s,o,l,u,f){return t=new fP(t,e,n,u,f),e===1?(e=1,o===!0&&(e|=8)):e=0,o=Ni(3,null,null,e),t.current=o,o.stateNode=t,o.memoizedState={element:i,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Nm(o),t}function dP(t,e,n){var i=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:ra,key:i==null?null:""+i,children:t,containerInfo:e,implementation:n}}function dM(t){if(!t)return Ps;t=t._reactInternals;e:{if(xo(t)!==t||t.tag!==1)throw Error(me(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(Qn(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(me(171))}if(t.tag===1){var n=t.type;if(Qn(n))return fy(t,n,e)}return e}function hM(t,e,n,i,s,o,l,u,f){return t=Qm(n,i,!0,t,s,o,l,u,f),t.context=dM(null),n=t.current,i=kn(),s=ws(n),o=Hr(i,s),o.callback=e??null,Es(n,o,s),t.current.lanes=s,nu(t,s,i),Jn(t,i),t}function Ff(t,e,n,i){var s=e.current,o=kn(),l=ws(s);return n=dM(n),e.context===null?e.context=n:e.pendingContext=n,e=Hr(o,l),e.payload={element:t},i=i===void 0?null:i,i!==null&&(e.callback=i),t=Es(s,e,l),t!==null&&(tr(t,s,l,o),Gc(t,s,l)),l}function Sf(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function U0(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function Jm(t,e){U0(t,e),(t=t.alternate)&&U0(t,e)}function hP(){return null}var pM=typeof reportError=="function"?reportError:function(t){console.error(t)};function eg(t){this._internalRoot=t}Of.prototype.render=eg.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(me(409));Ff(t,e,null,null)};Of.prototype.unmount=eg.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;mo(function(){Ff(null,t,null,null)}),e[Xr]=null}};function Of(t){this._internalRoot=t}Of.prototype.unstable_scheduleHydration=function(t){if(t){var e=WS();t={blockedOn:null,target:t,priority:e};for(var n=0;n<hs.length&&e!==0&&e<hs[n].priority;n++);hs.splice(n,0,t),n===0&&jS(t)}};function tg(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function Bf(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function D0(){}function pP(t,e,n,i,s){if(s){if(typeof i=="function"){var o=i;i=function(){var d=Sf(l);o.call(d)}}var l=hM(e,i,t,0,null,!1,!1,"",D0);return t._reactRootContainer=l,t[Xr]=l.current,Wl(t.nodeType===8?t.parentNode:t),mo(),l}for(;s=t.lastChild;)t.removeChild(s);if(typeof i=="function"){var u=i;i=function(){var d=Sf(f);u.call(d)}}var f=Qm(t,0,!1,null,null,!1,!1,"",D0);return t._reactRootContainer=f,t[Xr]=f.current,Wl(t.nodeType===8?t.parentNode:t),mo(function(){Ff(e,f,n,i)}),f}function zf(t,e,n,i,s){var o=n._reactRootContainer;if(o){var l=o;if(typeof s=="function"){var u=s;s=function(){var f=Sf(l);u.call(f)}}Ff(e,l,t,s)}else l=pP(n,e,t,s,i);return Sf(l)}GS=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=El(e.pendingLanes);n!==0&&(Sm(e,n|1),Jn(e,Qt()),!(St&6)&&(Da=Qt()+500,Is()))}break;case 13:mo(function(){var i=jr(t,1);if(i!==null){var s=kn();tr(i,t,1,s)}}),Jm(t,1)}};ym=function(t){if(t.tag===13){var e=jr(t,134217728);if(e!==null){var n=kn();tr(e,t,134217728,n)}Jm(t,134217728)}};VS=function(t){if(t.tag===13){var e=ws(t),n=jr(t,e);if(n!==null){var i=kn();tr(n,t,e,i)}Jm(t,e)}};WS=function(){return wt};XS=function(t,e){var n=wt;try{return wt=t,e()}finally{wt=n}};vp=function(t,e,n){switch(e){case"input":if(fp(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var i=n[e];if(i!==t&&i.form===t.form){var s=Lf(i);if(!s)throw Error(me(90));MS(i),fp(i,s)}}}break;case"textarea":TS(t,n);break;case"select":e=n.value,e!=null&&va(t,!!n.multiple,e,!1)}};bS=Ym;US=mo;var mP={usingClientEntryPoint:!1,Events:[ru,ua,Lf,LS,PS,Ym]},gl={findFiberByHostInstance:eo,bundleType:0,version:"18.2.0",rendererPackageName:"react-dom"},gP={bundleType:gl.bundleType,version:gl.version,rendererPackageName:gl.rendererPackageName,rendererConfig:gl.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:$r.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=NS(t),t===null?null:t.stateNode},findFiberByHostInstance:gl.findFiberByHostInstance||hP,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.2.0-next-9e3b772b8-20220608"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var pc=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!pc.isDisabled&&pc.supportsFiber)try{wf=pc.inject(gP),fr=pc}catch{}}vi.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=mP;vi.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!tg(e))throw Error(me(200));return dP(t,e,null,n)};vi.createRoot=function(t,e){if(!tg(t))throw Error(me(299));var n=!1,i="",s=pM;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(i=e.identifierPrefix),e.onRecoverableError!==void 0&&(s=e.onRecoverableError)),e=Qm(t,1,!1,null,null,n,!1,i,s),t[Xr]=e.current,Wl(t.nodeType===8?t.parentNode:t),new eg(e)};vi.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(me(188)):(t=Object.keys(t).join(","),Error(me(268,t)));return t=NS(e),t=t===null?null:t.stateNode,t};vi.flushSync=function(t){return mo(t)};vi.hydrate=function(t,e,n){if(!Bf(e))throw Error(me(200));return zf(null,t,e,!0,n)};vi.hydrateRoot=function(t,e,n){if(!tg(t))throw Error(me(405));var i=n!=null&&n.hydratedSources||null,s=!1,o="",l=pM;if(n!=null&&(n.unstable_strictMode===!0&&(s=!0),n.identifierPrefix!==void 0&&(o=n.identifierPrefix),n.onRecoverableError!==void 0&&(l=n.onRecoverableError)),e=hM(e,null,t,1,n??null,s,!1,o,l),t[Xr]=e.current,Wl(t),i)for(t=0;t<i.length;t++)n=i[t],s=n._getVersion,s=s(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,s]:e.mutableSourceEagerHydrationData.push(n,s);return new Of(e)};vi.render=function(t,e,n){if(!Bf(e))throw Error(me(200));return zf(null,t,e,!1,n)};vi.unmountComponentAtNode=function(t){if(!Bf(t))throw Error(me(40));return t._reactRootContainer?(mo(function(){zf(null,null,t,!1,function(){t._reactRootContainer=null,t[Xr]=null})}),!0):!1};vi.unstable_batchedUpdates=Ym;vi.unstable_renderSubtreeIntoContainer=function(t,e,n,i){if(!Bf(n))throw Error(me(200));if(t==null||t._reactInternals===void 0)throw Error(me(38));return zf(t,e,n,!1,i)};vi.version="18.2.0-next-9e3b772b8-20220608";function mM(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(mM)}catch(t){console.error(t)}}mM(),hS.exports=vi;var _P=hS.exports;const vP=tS(_P);/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const ng="154",xP=0,I0=1,SP=2,gM=1,yP=2,Dr=3,bs=0,ei=1,Fr=2,Rs=0,Ta=1,N0=2,F0=3,O0=4,MP=5,ia=100,EP=101,TP=102,B0=103,z0=104,wP=200,AP=201,RP=202,CP=203,_M=204,vM=205,LP=206,PP=207,bP=208,UP=209,DP=210,IP=0,NP=1,FP=2,Zp=3,OP=4,BP=5,zP=6,kP=7,xM=0,HP=1,GP=2,Gr=0,VP=1,WP=2,XP=3,jP=4,qP=5,SM=300,Ia=301,Na=302,Qp=303,Jp=304,kf=306,em=1e3,Qi=1001,tm=1002,zn=1003,k0=1004,Lh=1005,Di=1006,YP=1007,Jl=1008,Cs=1009,$P=1010,KP=1011,ig=1012,yM=1013,_s=1014,vs=1015,eu=1016,MM=1017,EM=1018,oo=1020,ZP=1021,Ji=1023,QP=1024,JP=1025,ao=1026,Fa=1027,eb=1028,TM=1029,tb=1030,wM=1031,AM=1033,Ph=33776,bh=33777,Uh=33778,Dh=33779,H0=35840,G0=35841,V0=35842,W0=35843,nb=36196,X0=37492,j0=37496,q0=37808,Y0=37809,$0=37810,K0=37811,Z0=37812,Q0=37813,J0=37814,ex=37815,tx=37816,nx=37817,ix=37818,rx=37819,sx=37820,ox=37821,Ih=36492,ib=36283,ax=36284,lx=36285,ux=36286,RM=3e3,lo=3001,rb=3200,sb=3201,ob=0,ab=1,uo="",ot="srgb",hr="srgb-linear",CM="display-p3",Nh=7680,lb=519,ub=512,cb=513,fb=514,db=515,hb=516,pb=517,mb=518,gb=519,cx=35044,fx="300 es",nm=1035,zr=2e3,yf=2001;class Ha{addEventListener(e,n){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(n)===-1&&i[e].push(n)}hasEventListener(e,n){if(this._listeners===void 0)return!1;const i=this._listeners;return i[e]!==void 0&&i[e].indexOf(n)!==-1}removeEventListener(e,n){if(this._listeners===void 0)return;const s=this._listeners[e];if(s!==void 0){const o=s.indexOf(n);o!==-1&&s.splice(o,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const i=this._listeners[e.type];if(i!==void 0){e.target=this;const s=i.slice(0);for(let o=0,l=s.length;o<l;o++)s[o].call(this,e);e.target=null}}}const Pn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Fh=Math.PI/180,im=180/Math.PI;function ou(){const t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Pn[t&255]+Pn[t>>8&255]+Pn[t>>16&255]+Pn[t>>24&255]+"-"+Pn[e&255]+Pn[e>>8&255]+"-"+Pn[e>>16&15|64]+Pn[e>>24&255]+"-"+Pn[n&63|128]+Pn[n>>8&255]+"-"+Pn[n>>16&255]+Pn[n>>24&255]+Pn[i&255]+Pn[i>>8&255]+Pn[i>>16&255]+Pn[i>>24&255]).toLowerCase()}function $n(t,e,n){return Math.max(e,Math.min(n,t))}function _b(t,e){return(t%e+e)%e}function Oh(t,e,n){return(1-n)*t+n*e}function dx(t){return(t&t-1)===0&&t!==0}function rm(t){return Math.pow(2,Math.floor(Math.log(t)/Math.LN2))}function mc(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return t/4294967295;case Uint16Array:return t/65535;case Uint8Array:return t/255;case Int32Array:return Math.max(t/2147483647,-1);case Int16Array:return Math.max(t/32767,-1);case Int8Array:return Math.max(t/127,-1);default:throw new Error("Invalid component type.")}}function li(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return Math.round(t*4294967295);case Uint16Array:return Math.round(t*65535);case Uint8Array:return Math.round(t*255);case Int32Array:return Math.round(t*2147483647);case Int16Array:return Math.round(t*32767);case Int8Array:return Math.round(t*127);default:throw new Error("Invalid component type.")}}class Ct{constructor(e=0,n=0){Ct.prototype.isVector2=!0,this.x=e,this.y=n}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,n){return this.x=e,this.y=n,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const n=this.x,i=this.y,s=e.elements;return this.x=s[0]*n+s[3]*i+s[6],this.y=s[1]*n+s[4]*i+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos($n(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y;return n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this}rotateAround(e,n){const i=Math.cos(n),s=Math.sin(n),o=this.x-e.x,l=this.y-e.y;return this.x=o*i-l*s+e.x,this.y=o*s+l*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class ct{constructor(e,n,i,s,o,l,u,f,d){ct.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,n,i,s,o,l,u,f,d)}set(e,n,i,s,o,l,u,f,d){const p=this.elements;return p[0]=e,p[1]=s,p[2]=u,p[3]=n,p[4]=o,p[5]=f,p[6]=i,p[7]=l,p[8]=d,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],this}extractBasis(e,n,i){return e.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const n=e.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,s=n.elements,o=this.elements,l=i[0],u=i[3],f=i[6],d=i[1],p=i[4],g=i[7],_=i[2],x=i[5],E=i[8],T=s[0],v=s[3],h=s[6],y=s[1],S=s[4],w=s[7],P=s[2],I=s[5],D=s[8];return o[0]=l*T+u*y+f*P,o[3]=l*v+u*S+f*I,o[6]=l*h+u*w+f*D,o[1]=d*T+p*y+g*P,o[4]=d*v+p*S+g*I,o[7]=d*h+p*w+g*D,o[2]=_*T+x*y+E*P,o[5]=_*v+x*S+E*I,o[8]=_*h+x*w+E*D,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=e,n[4]*=e,n[7]*=e,n[2]*=e,n[5]*=e,n[8]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[1],s=e[2],o=e[3],l=e[4],u=e[5],f=e[6],d=e[7],p=e[8];return n*l*p-n*u*d-i*o*p+i*u*f+s*o*d-s*l*f}invert(){const e=this.elements,n=e[0],i=e[1],s=e[2],o=e[3],l=e[4],u=e[5],f=e[6],d=e[7],p=e[8],g=p*l-u*d,_=u*f-p*o,x=d*o-l*f,E=n*g+i*_+s*x;if(E===0)return this.set(0,0,0,0,0,0,0,0,0);const T=1/E;return e[0]=g*T,e[1]=(s*d-p*i)*T,e[2]=(u*i-s*l)*T,e[3]=_*T,e[4]=(p*n-s*f)*T,e[5]=(s*o-u*n)*T,e[6]=x*T,e[7]=(i*f-d*n)*T,e[8]=(l*n-i*o)*T,this}transpose(){let e;const n=this.elements;return e=n[1],n[1]=n[3],n[3]=e,e=n[2],n[2]=n[6],n[6]=e,e=n[5],n[5]=n[7],n[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const n=this.elements;return e[0]=n[0],e[1]=n[3],e[2]=n[6],e[3]=n[1],e[4]=n[4],e[5]=n[7],e[6]=n[2],e[7]=n[5],e[8]=n[8],this}setUvTransform(e,n,i,s,o,l,u){const f=Math.cos(o),d=Math.sin(o);return this.set(i*f,i*d,-i*(f*l+d*u)+l+e,-s*d,s*f,-s*(-d*l+f*u)+u+n,0,0,1),this}scale(e,n){return this.premultiply(Bh.makeScale(e,n)),this}rotate(e){return this.premultiply(Bh.makeRotation(-e)),this}translate(e,n){return this.premultiply(Bh.makeTranslation(e,n)),this}makeTranslation(e,n){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,n,0,0,1),this}makeRotation(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,i,n,0,0,0,1),this}makeScale(e,n){return this.set(e,0,0,0,n,0,0,0,1),this}equals(e){const n=this.elements,i=e.elements;for(let s=0;s<9;s++)if(n[s]!==i[s])return!1;return!0}fromArray(e,n=0){for(let i=0;i<9;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Bh=new ct;function LM(t){for(let e=t.length-1;e>=0;--e)if(t[e]>=65535)return!0;return!1}function Mf(t){return document.createElementNS("http://www.w3.org/1999/xhtml",t)}const hx={};function Nl(t){t in hx||(hx[t]=!0,console.warn(t))}function wa(t){return t<.04045?t*.0773993808:Math.pow(t*.9478672986+.0521327014,2.4)}function zh(t){return t<.0031308?t*12.92:1.055*Math.pow(t,.41666)-.055}const vb=new ct().fromArray([.8224621,.0331941,.0170827,.177538,.9668058,.0723974,-1e-7,1e-7,.9105199]),xb=new ct().fromArray([1.2249401,-.0420569,-.0196376,-.2249404,1.0420571,-.0786361,1e-7,0,1.0982735]);function Sb(t){return t.convertSRGBToLinear().applyMatrix3(xb)}function yb(t){return t.applyMatrix3(vb).convertLinearToSRGB()}const Mb={[hr]:t=>t,[ot]:t=>t.convertSRGBToLinear(),[CM]:Sb},Eb={[hr]:t=>t,[ot]:t=>t.convertLinearToSRGB(),[CM]:yb},Wi={enabled:!0,get legacyMode(){return console.warn("THREE.ColorManagement: .legacyMode=false renamed to .enabled=true in r150."),!this.enabled},set legacyMode(t){console.warn("THREE.ColorManagement: .legacyMode=false renamed to .enabled=true in r150."),this.enabled=!t},get workingColorSpace(){return hr},set workingColorSpace(t){console.warn("THREE.ColorManagement: .workingColorSpace is readonly.")},convert:function(t,e,n){if(this.enabled===!1||e===n||!e||!n)return t;const i=Mb[e],s=Eb[n];if(i===void 0||s===void 0)throw new Error(`Unsupported color space conversion, "${e}" to "${n}".`);return s(i(t))},fromWorkingColorSpace:function(t,e){return this.convert(t,this.workingColorSpace,e)},toWorkingColorSpace:function(t,e){return this.convert(t,e,this.workingColorSpace)}};let Ho;class PM{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{Ho===void 0&&(Ho=Mf("canvas")),Ho.width=e.width,Ho.height=e.height;const i=Ho.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),n=Ho}return n.width>2048||n.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),n.toDataURL("image/jpeg",.6)):n.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const n=Mf("canvas");n.width=e.width,n.height=e.height;const i=n.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const s=i.getImageData(0,0,e.width,e.height),o=s.data;for(let l=0;l<o.length;l++)o[l]=wa(o[l]/255)*255;return i.putImageData(s,0,0),n}else if(e.data){const n=e.data.slice(0);for(let i=0;i<n.length;i++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[i]=Math.floor(wa(n[i]/255)*255):n[i]=wa(n[i]);return{data:n,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let Tb=0;class bM{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Tb++}),this.uuid=ou(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},s=this.data;if(s!==null){let o;if(Array.isArray(s)){o=[];for(let l=0,u=s.length;l<u;l++)s[l].isDataTexture?o.push(kh(s[l].image)):o.push(kh(s[l]))}else o=kh(s);i.url=o}return n||(e.images[this.uuid]=i),i}}function kh(t){return typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap?PM.getDataURL(t):t.data?{data:Array.from(t.data),width:t.width,height:t.height,type:t.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let wb=0;class pi extends Ha{constructor(e=pi.DEFAULT_IMAGE,n=pi.DEFAULT_MAPPING,i=Qi,s=Qi,o=Di,l=Jl,u=Ji,f=Cs,d=pi.DEFAULT_ANISOTROPY,p=uo){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:wb++}),this.uuid=ou(),this.name="",this.source=new bM(e),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=i,this.wrapT=s,this.magFilter=o,this.minFilter=l,this.anisotropy=d,this.format=u,this.internalFormat=null,this.type=f,this.offset=new Ct(0,0),this.repeat=new Ct(1,1),this.center=new Ct(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ct,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof p=="string"?this.colorSpace=p:(Nl("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=p===lo?ot:uo),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),n||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==SM)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case em:e.x=e.x-Math.floor(e.x);break;case Qi:e.x=e.x<0?0:1;break;case tm:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case em:e.y=e.y-Math.floor(e.y);break;case Qi:e.y=e.y<0?0:1;break;case tm:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return Nl("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===ot?lo:RM}set encoding(e){Nl("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=e===lo?ot:uo}}pi.DEFAULT_IMAGE=null;pi.DEFAULT_MAPPING=SM;pi.DEFAULT_ANISOTROPY=1;class yn{constructor(e=0,n=0,i=0,s=1){yn.prototype.isVector4=!0,this.x=e,this.y=n,this.z=i,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,n,i,s){return this.x=e,this.y=n,this.z=i,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this.w=e.w+n.w,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this.w+=e.w*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this.w=e.w-n.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const n=this.x,i=this.y,s=this.z,o=this.w,l=e.elements;return this.x=l[0]*n+l[4]*i+l[8]*s+l[12]*o,this.y=l[1]*n+l[5]*i+l[9]*s+l[13]*o,this.z=l[2]*n+l[6]*i+l[10]*s+l[14]*o,this.w=l[3]*n+l[7]*i+l[11]*s+l[15]*o,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const n=Math.sqrt(1-e.w*e.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/n,this.y=e.y/n,this.z=e.z/n),this}setAxisAngleFromRotationMatrix(e){let n,i,s,o;const f=e.elements,d=f[0],p=f[4],g=f[8],_=f[1],x=f[5],E=f[9],T=f[2],v=f[6],h=f[10];if(Math.abs(p-_)<.01&&Math.abs(g-T)<.01&&Math.abs(E-v)<.01){if(Math.abs(p+_)<.1&&Math.abs(g+T)<.1&&Math.abs(E+v)<.1&&Math.abs(d+x+h-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;const S=(d+1)/2,w=(x+1)/2,P=(h+1)/2,I=(p+_)/4,D=(g+T)/4,H=(E+v)/4;return S>w&&S>P?S<.01?(i=0,s=.707106781,o=.707106781):(i=Math.sqrt(S),s=I/i,o=D/i):w>P?w<.01?(i=.707106781,s=0,o=.707106781):(s=Math.sqrt(w),i=I/s,o=H/s):P<.01?(i=.707106781,s=.707106781,o=0):(o=Math.sqrt(P),i=D/o,s=H/o),this.set(i,s,o,n),this}let y=Math.sqrt((v-E)*(v-E)+(g-T)*(g-T)+(_-p)*(_-p));return Math.abs(y)<.001&&(y=1),this.x=(v-E)/y,this.y=(g-T)/y,this.z=(_-p)/y,this.w=Math.acos((d+x+h-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this.z=Math.max(e.z,Math.min(n.z,this.z)),this.w=Math.max(e.w,Math.min(n.w,this.w)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this.z=Math.max(e,Math.min(n,this.z)),this.w=Math.max(e,Math.min(n,this.w)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this.w=this.w<0?Math.ceil(this.w):Math.floor(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this.w+=(e.w-this.w)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this.w=e.w+(n.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this.w=e[n+3],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e[n+3]=this.w,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this.w=e.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class go extends Ha{constructor(e=1,n=1,i={}){super(),this.isWebGLRenderTarget=!0,this.width=e,this.height=n,this.depth=1,this.scissor=new yn(0,0,e,n),this.scissorTest=!1,this.viewport=new yn(0,0,e,n);const s={width:e,height:n,depth:1};i.encoding!==void 0&&(Nl("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),i.colorSpace=i.encoding===lo?ot:uo),this.texture=new pi(s,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=i.generateMipmaps!==void 0?i.generateMipmaps:!1,this.texture.internalFormat=i.internalFormat!==void 0?i.internalFormat:null,this.texture.minFilter=i.minFilter!==void 0?i.minFilter:Di,this.depthBuffer=i.depthBuffer!==void 0?i.depthBuffer:!0,this.stencilBuffer=i.stencilBuffer!==void 0?i.stencilBuffer:!1,this.depthTexture=i.depthTexture!==void 0?i.depthTexture:null,this.samples=i.samples!==void 0?i.samples:0}setSize(e,n,i=1){(this.width!==e||this.height!==n||this.depth!==i)&&(this.width=e,this.height=n,this.depth=i,this.texture.image.width=e,this.texture.image.height=n,this.texture.image.depth=i,this.dispose()),this.viewport.set(0,0,e,n),this.scissor.set(0,0,e,n)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;const n=Object.assign({},e.texture.image);return this.texture.source=new bM(n),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class UM extends pi{constructor(e=null,n=1,i=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:n,height:i,depth:s},this.magFilter=zn,this.minFilter=zn,this.wrapR=Qi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Ab extends pi{constructor(e=null,n=1,i=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:n,height:i,depth:s},this.magFilter=zn,this.minFilter=zn,this.wrapR=Qi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class au{constructor(e=0,n=0,i=0,s=1){this.isQuaternion=!0,this._x=e,this._y=n,this._z=i,this._w=s}static slerpFlat(e,n,i,s,o,l,u){let f=i[s+0],d=i[s+1],p=i[s+2],g=i[s+3];const _=o[l+0],x=o[l+1],E=o[l+2],T=o[l+3];if(u===0){e[n+0]=f,e[n+1]=d,e[n+2]=p,e[n+3]=g;return}if(u===1){e[n+0]=_,e[n+1]=x,e[n+2]=E,e[n+3]=T;return}if(g!==T||f!==_||d!==x||p!==E){let v=1-u;const h=f*_+d*x+p*E+g*T,y=h>=0?1:-1,S=1-h*h;if(S>Number.EPSILON){const P=Math.sqrt(S),I=Math.atan2(P,h*y);v=Math.sin(v*I)/P,u=Math.sin(u*I)/P}const w=u*y;if(f=f*v+_*w,d=d*v+x*w,p=p*v+E*w,g=g*v+T*w,v===1-u){const P=1/Math.sqrt(f*f+d*d+p*p+g*g);f*=P,d*=P,p*=P,g*=P}}e[n]=f,e[n+1]=d,e[n+2]=p,e[n+3]=g}static multiplyQuaternionsFlat(e,n,i,s,o,l){const u=i[s],f=i[s+1],d=i[s+2],p=i[s+3],g=o[l],_=o[l+1],x=o[l+2],E=o[l+3];return e[n]=u*E+p*g+f*x-d*_,e[n+1]=f*E+p*_+d*g-u*x,e[n+2]=d*E+p*x+u*_-f*g,e[n+3]=p*E-u*g-f*_-d*x,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,n,i,s){return this._x=e,this._y=n,this._z=i,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,n){const i=e._x,s=e._y,o=e._z,l=e._order,u=Math.cos,f=Math.sin,d=u(i/2),p=u(s/2),g=u(o/2),_=f(i/2),x=f(s/2),E=f(o/2);switch(l){case"XYZ":this._x=_*p*g+d*x*E,this._y=d*x*g-_*p*E,this._z=d*p*E+_*x*g,this._w=d*p*g-_*x*E;break;case"YXZ":this._x=_*p*g+d*x*E,this._y=d*x*g-_*p*E,this._z=d*p*E-_*x*g,this._w=d*p*g+_*x*E;break;case"ZXY":this._x=_*p*g-d*x*E,this._y=d*x*g+_*p*E,this._z=d*p*E+_*x*g,this._w=d*p*g-_*x*E;break;case"ZYX":this._x=_*p*g-d*x*E,this._y=d*x*g+_*p*E,this._z=d*p*E-_*x*g,this._w=d*p*g+_*x*E;break;case"YZX":this._x=_*p*g+d*x*E,this._y=d*x*g+_*p*E,this._z=d*p*E-_*x*g,this._w=d*p*g-_*x*E;break;case"XZY":this._x=_*p*g-d*x*E,this._y=d*x*g-_*p*E,this._z=d*p*E+_*x*g,this._w=d*p*g+_*x*E;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+l)}return n!==!1&&this._onChangeCallback(),this}setFromAxisAngle(e,n){const i=n/2,s=Math.sin(i);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const n=e.elements,i=n[0],s=n[4],o=n[8],l=n[1],u=n[5],f=n[9],d=n[2],p=n[6],g=n[10],_=i+u+g;if(_>0){const x=.5/Math.sqrt(_+1);this._w=.25/x,this._x=(p-f)*x,this._y=(o-d)*x,this._z=(l-s)*x}else if(i>u&&i>g){const x=2*Math.sqrt(1+i-u-g);this._w=(p-f)/x,this._x=.25*x,this._y=(s+l)/x,this._z=(o+d)/x}else if(u>g){const x=2*Math.sqrt(1+u-i-g);this._w=(o-d)/x,this._x=(s+l)/x,this._y=.25*x,this._z=(f+p)/x}else{const x=2*Math.sqrt(1+g-i-u);this._w=(l-s)/x,this._x=(o+d)/x,this._y=(f+p)/x,this._z=.25*x}return this._onChangeCallback(),this}setFromUnitVectors(e,n){let i=e.dot(n)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*n.z-e.z*n.y,this._y=e.z*n.x-e.x*n.z,this._z=e.x*n.y-e.y*n.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs($n(this.dot(e),-1,1)))}rotateTowards(e,n){const i=this.angleTo(e);if(i===0)return this;const s=Math.min(1,n/i);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,n){const i=e._x,s=e._y,o=e._z,l=e._w,u=n._x,f=n._y,d=n._z,p=n._w;return this._x=i*p+l*u+s*d-o*f,this._y=s*p+l*f+o*u-i*d,this._z=o*p+l*d+i*f-s*u,this._w=l*p-i*u-s*f-o*d,this._onChangeCallback(),this}slerp(e,n){if(n===0)return this;if(n===1)return this.copy(e);const i=this._x,s=this._y,o=this._z,l=this._w;let u=l*e._w+i*e._x+s*e._y+o*e._z;if(u<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,u=-u):this.copy(e),u>=1)return this._w=l,this._x=i,this._y=s,this._z=o,this;const f=1-u*u;if(f<=Number.EPSILON){const x=1-n;return this._w=x*l+n*this._w,this._x=x*i+n*this._x,this._y=x*s+n*this._y,this._z=x*o+n*this._z,this.normalize(),this._onChangeCallback(),this}const d=Math.sqrt(f),p=Math.atan2(d,u),g=Math.sin((1-n)*p)/d,_=Math.sin(n*p)/d;return this._w=l*g+this._w*_,this._x=i*g+this._x*_,this._y=s*g+this._y*_,this._z=o*g+this._z*_,this._onChangeCallback(),this}slerpQuaternions(e,n,i){return this.copy(e).slerp(n,i)}random(){const e=Math.random(),n=Math.sqrt(1-e),i=Math.sqrt(e),s=2*Math.PI*Math.random(),o=2*Math.PI*Math.random();return this.set(n*Math.cos(s),i*Math.sin(o),i*Math.cos(o),n*Math.sin(s))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,n=0){return this._x=e[n],this._y=e[n+1],this._z=e[n+2],this._w=e[n+3],this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._w,e}fromBufferAttribute(e,n){return this._x=e.getX(n),this._y=e.getY(n),this._z=e.getZ(n),this._w=e.getW(n),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class Z{constructor(e=0,n=0,i=0){Z.prototype.isVector3=!0,this.x=e,this.y=n,this.z=i}set(e,n,i){return i===void 0&&(i=this.z),this.x=e,this.y=n,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,n){return this.x=e.x*n.x,this.y=e.y*n.y,this.z=e.z*n.z,this}applyEuler(e){return this.applyQuaternion(px.setFromEuler(e))}applyAxisAngle(e,n){return this.applyQuaternion(px.setFromAxisAngle(e,n))}applyMatrix3(e){const n=this.x,i=this.y,s=this.z,o=e.elements;return this.x=o[0]*n+o[3]*i+o[6]*s,this.y=o[1]*n+o[4]*i+o[7]*s,this.z=o[2]*n+o[5]*i+o[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const n=this.x,i=this.y,s=this.z,o=e.elements,l=1/(o[3]*n+o[7]*i+o[11]*s+o[15]);return this.x=(o[0]*n+o[4]*i+o[8]*s+o[12])*l,this.y=(o[1]*n+o[5]*i+o[9]*s+o[13])*l,this.z=(o[2]*n+o[6]*i+o[10]*s+o[14])*l,this}applyQuaternion(e){const n=this.x,i=this.y,s=this.z,o=e.x,l=e.y,u=e.z,f=e.w,d=f*n+l*s-u*i,p=f*i+u*n-o*s,g=f*s+o*i-l*n,_=-o*n-l*i-u*s;return this.x=d*f+_*-o+p*-u-g*-l,this.y=p*f+_*-l+g*-o-d*-u,this.z=g*f+_*-u+d*-l-p*-o,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const n=this.x,i=this.y,s=this.z,o=e.elements;return this.x=o[0]*n+o[4]*i+o[8]*s,this.y=o[1]*n+o[5]*i+o[9]*s,this.z=o[2]*n+o[6]*i+o[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this.z=Math.max(e.z,Math.min(n.z,this.z)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this.z=Math.max(e,Math.min(n,this.z)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,n){const i=e.x,s=e.y,o=e.z,l=n.x,u=n.y,f=n.z;return this.x=s*f-o*u,this.y=o*l-i*f,this.z=i*u-s*l,this}projectOnVector(e){const n=e.lengthSq();if(n===0)return this.set(0,0,0);const i=e.dot(this)/n;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return Hh.copy(this).projectOnVector(e),this.sub(Hh)}reflect(e){return this.sub(Hh.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos($n(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y,s=this.z-e.z;return n*n+i*i+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,n,i){const s=Math.sin(n)*e;return this.x=s*Math.sin(i),this.y=Math.cos(n)*e,this.z=s*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,n,i){return this.x=e*Math.sin(n),this.y=i,this.z=e*Math.cos(n),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(e){const n=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=n,this.y=i,this.z=s,this}setFromMatrixColumn(e,n){return this.fromArray(e.elements,n*4)}setFromMatrix3Column(e,n){return this.fromArray(e.elements,n*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=(Math.random()-.5)*2,n=Math.random()*Math.PI*2,i=Math.sqrt(1-e**2);return this.x=i*Math.cos(n),this.y=i*Math.sin(n),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Hh=new Z,px=new au;class lu{constructor(e=new Z(1/0,1/0,1/0),n=new Z(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=n}set(e,n){return this.min.copy(e),this.max.copy(n),this}setFromArray(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n+=3)this.expandByPoint(Rr.fromArray(e,n));return this}setFromBufferAttribute(e){this.makeEmpty();for(let n=0,i=e.count;n<i;n++)this.expandByPoint(Rr.fromBufferAttribute(e,n));return this}setFromPoints(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n++)this.expandByPoint(e[n]);return this}setFromCenterAndSize(e,n){const i=Rr.copy(n).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,n=!1){return this.makeEmpty(),this.expandByObject(e,n)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,n=!1){if(e.updateWorldMatrix(!1,!1),e.boundingBox!==void 0)e.boundingBox===null&&e.computeBoundingBox(),Go.copy(e.boundingBox),Go.applyMatrix4(e.matrixWorld),this.union(Go);else{const s=e.geometry;if(s!==void 0)if(n&&s.attributes!==void 0&&s.attributes.position!==void 0){const o=s.attributes.position;for(let l=0,u=o.count;l<u;l++)Rr.fromBufferAttribute(o,l).applyMatrix4(e.matrixWorld),this.expandByPoint(Rr)}else s.boundingBox===null&&s.computeBoundingBox(),Go.copy(s.boundingBox),Go.applyMatrix4(e.matrixWorld),this.union(Go)}const i=e.children;for(let s=0,o=i.length;s<o;s++)this.expandByObject(i[s],n);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,n){return n.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,Rr),Rr.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let n,i;return e.normal.x>0?(n=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(n=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(n+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(n+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(n+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(n+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),n<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(_l),gc.subVectors(this.max,_l),Vo.subVectors(e.a,_l),Wo.subVectors(e.b,_l),Xo.subVectors(e.c,_l),as.subVectors(Wo,Vo),ls.subVectors(Xo,Wo),Ws.subVectors(Vo,Xo);let n=[0,-as.z,as.y,0,-ls.z,ls.y,0,-Ws.z,Ws.y,as.z,0,-as.x,ls.z,0,-ls.x,Ws.z,0,-Ws.x,-as.y,as.x,0,-ls.y,ls.x,0,-Ws.y,Ws.x,0];return!Gh(n,Vo,Wo,Xo,gc)||(n=[1,0,0,0,1,0,0,0,1],!Gh(n,Vo,Wo,Xo,gc))?!1:(_c.crossVectors(as,ls),n=[_c.x,_c.y,_c.z],Gh(n,Vo,Wo,Xo,gc))}clampPoint(e,n){return n.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Rr).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Rr).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Ar[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Ar[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Ar[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Ar[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Ar[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Ar[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Ar[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Ar[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Ar),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const Ar=[new Z,new Z,new Z,new Z,new Z,new Z,new Z,new Z],Rr=new Z,Go=new lu,Vo=new Z,Wo=new Z,Xo=new Z,as=new Z,ls=new Z,Ws=new Z,_l=new Z,gc=new Z,_c=new Z,Xs=new Z;function Gh(t,e,n,i,s){for(let o=0,l=t.length-3;o<=l;o+=3){Xs.fromArray(t,o);const u=s.x*Math.abs(Xs.x)+s.y*Math.abs(Xs.y)+s.z*Math.abs(Xs.z),f=e.dot(Xs),d=n.dot(Xs),p=i.dot(Xs);if(Math.max(-Math.max(f,d,p),Math.min(f,d,p))>u)return!1}return!0}const Rb=new lu,vl=new Z,Vh=new Z;class rg{constructor(e=new Z,n=-1){this.center=e,this.radius=n}set(e,n){return this.center.copy(e),this.radius=n,this}setFromPoints(e,n){const i=this.center;n!==void 0?i.copy(n):Rb.setFromPoints(e).getCenter(i);let s=0;for(let o=0,l=e.length;o<l;o++)s=Math.max(s,i.distanceToSquared(e[o]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const n=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=n*n}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,n){const i=this.center.distanceToSquared(e);return n.copy(e),i>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;vl.subVectors(e,this.center);const n=vl.lengthSq();if(n>this.radius*this.radius){const i=Math.sqrt(n),s=(i-this.radius)*.5;this.center.addScaledVector(vl,s/i),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Vh.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(vl.copy(e.center).add(Vh)),this.expandByPoint(vl.copy(e.center).sub(Vh))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Cr=new Z,Wh=new Z,vc=new Z,us=new Z,Xh=new Z,xc=new Z,jh=new Z;class Cb{constructor(e=new Z,n=new Z(0,0,-1)){this.origin=e,this.direction=n}set(e,n){return this.origin.copy(e),this.direction.copy(n),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,n){return n.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Cr)),this}closestPointToPoint(e,n){n.subVectors(e,this.origin);const i=n.dot(this.direction);return i<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const n=Cr.subVectors(e,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(e):(Cr.copy(this.origin).addScaledVector(this.direction,n),Cr.distanceToSquared(e))}distanceSqToSegment(e,n,i,s){Wh.copy(e).add(n).multiplyScalar(.5),vc.copy(n).sub(e).normalize(),us.copy(this.origin).sub(Wh);const o=e.distanceTo(n)*.5,l=-this.direction.dot(vc),u=us.dot(this.direction),f=-us.dot(vc),d=us.lengthSq(),p=Math.abs(1-l*l);let g,_,x,E;if(p>0)if(g=l*f-u,_=l*u-f,E=o*p,g>=0)if(_>=-E)if(_<=E){const T=1/p;g*=T,_*=T,x=g*(g+l*_+2*u)+_*(l*g+_+2*f)+d}else _=o,g=Math.max(0,-(l*_+u)),x=-g*g+_*(_+2*f)+d;else _=-o,g=Math.max(0,-(l*_+u)),x=-g*g+_*(_+2*f)+d;else _<=-E?(g=Math.max(0,-(-l*o+u)),_=g>0?-o:Math.min(Math.max(-o,-f),o),x=-g*g+_*(_+2*f)+d):_<=E?(g=0,_=Math.min(Math.max(-o,-f),o),x=_*(_+2*f)+d):(g=Math.max(0,-(l*o+u)),_=g>0?o:Math.min(Math.max(-o,-f),o),x=-g*g+_*(_+2*f)+d);else _=l>0?-o:o,g=Math.max(0,-(l*_+u)),x=-g*g+_*(_+2*f)+d;return i&&i.copy(this.origin).addScaledVector(this.direction,g),s&&s.copy(Wh).addScaledVector(vc,_),x}intersectSphere(e,n){Cr.subVectors(e.center,this.origin);const i=Cr.dot(this.direction),s=Cr.dot(Cr)-i*i,o=e.radius*e.radius;if(s>o)return null;const l=Math.sqrt(o-s),u=i-l,f=i+l;return f<0?null:u<0?this.at(f,n):this.at(u,n)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const n=e.normal.dot(this.direction);if(n===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/n;return i>=0?i:null}intersectPlane(e,n){const i=this.distanceToPlane(e);return i===null?null:this.at(i,n)}intersectsPlane(e){const n=e.distanceToPoint(this.origin);return n===0||e.normal.dot(this.direction)*n<0}intersectBox(e,n){let i,s,o,l,u,f;const d=1/this.direction.x,p=1/this.direction.y,g=1/this.direction.z,_=this.origin;return d>=0?(i=(e.min.x-_.x)*d,s=(e.max.x-_.x)*d):(i=(e.max.x-_.x)*d,s=(e.min.x-_.x)*d),p>=0?(o=(e.min.y-_.y)*p,l=(e.max.y-_.y)*p):(o=(e.max.y-_.y)*p,l=(e.min.y-_.y)*p),i>l||o>s||((o>i||isNaN(i))&&(i=o),(l<s||isNaN(s))&&(s=l),g>=0?(u=(e.min.z-_.z)*g,f=(e.max.z-_.z)*g):(u=(e.max.z-_.z)*g,f=(e.min.z-_.z)*g),i>f||u>s)||((u>i||i!==i)&&(i=u),(f<s||s!==s)&&(s=f),s<0)?null:this.at(i>=0?i:s,n)}intersectsBox(e){return this.intersectBox(e,Cr)!==null}intersectTriangle(e,n,i,s,o){Xh.subVectors(n,e),xc.subVectors(i,e),jh.crossVectors(Xh,xc);let l=this.direction.dot(jh),u;if(l>0){if(s)return null;u=1}else if(l<0)u=-1,l=-l;else return null;us.subVectors(this.origin,e);const f=u*this.direction.dot(xc.crossVectors(us,xc));if(f<0)return null;const d=u*this.direction.dot(Xh.cross(us));if(d<0||f+d>l)return null;const p=-u*us.dot(jh);return p<0?null:this.at(p/l,o)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class En{constructor(e,n,i,s,o,l,u,f,d,p,g,_,x,E,T,v){En.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,n,i,s,o,l,u,f,d,p,g,_,x,E,T,v)}set(e,n,i,s,o,l,u,f,d,p,g,_,x,E,T,v){const h=this.elements;return h[0]=e,h[4]=n,h[8]=i,h[12]=s,h[1]=o,h[5]=l,h[9]=u,h[13]=f,h[2]=d,h[6]=p,h[10]=g,h[14]=_,h[3]=x,h[7]=E,h[11]=T,h[15]=v,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new En().fromArray(this.elements)}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],n[9]=i[9],n[10]=i[10],n[11]=i[11],n[12]=i[12],n[13]=i[13],n[14]=i[14],n[15]=i[15],this}copyPosition(e){const n=this.elements,i=e.elements;return n[12]=i[12],n[13]=i[13],n[14]=i[14],this}setFromMatrix3(e){const n=e.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(e,n,i){return e.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,n,i){return this.set(e.x,n.x,i.x,0,e.y,n.y,i.y,0,e.z,n.z,i.z,0,0,0,0,1),this}extractRotation(e){const n=this.elements,i=e.elements,s=1/jo.setFromMatrixColumn(e,0).length(),o=1/jo.setFromMatrixColumn(e,1).length(),l=1/jo.setFromMatrixColumn(e,2).length();return n[0]=i[0]*s,n[1]=i[1]*s,n[2]=i[2]*s,n[3]=0,n[4]=i[4]*o,n[5]=i[5]*o,n[6]=i[6]*o,n[7]=0,n[8]=i[8]*l,n[9]=i[9]*l,n[10]=i[10]*l,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(e){const n=this.elements,i=e.x,s=e.y,o=e.z,l=Math.cos(i),u=Math.sin(i),f=Math.cos(s),d=Math.sin(s),p=Math.cos(o),g=Math.sin(o);if(e.order==="XYZ"){const _=l*p,x=l*g,E=u*p,T=u*g;n[0]=f*p,n[4]=-f*g,n[8]=d,n[1]=x+E*d,n[5]=_-T*d,n[9]=-u*f,n[2]=T-_*d,n[6]=E+x*d,n[10]=l*f}else if(e.order==="YXZ"){const _=f*p,x=f*g,E=d*p,T=d*g;n[0]=_+T*u,n[4]=E*u-x,n[8]=l*d,n[1]=l*g,n[5]=l*p,n[9]=-u,n[2]=x*u-E,n[6]=T+_*u,n[10]=l*f}else if(e.order==="ZXY"){const _=f*p,x=f*g,E=d*p,T=d*g;n[0]=_-T*u,n[4]=-l*g,n[8]=E+x*u,n[1]=x+E*u,n[5]=l*p,n[9]=T-_*u,n[2]=-l*d,n[6]=u,n[10]=l*f}else if(e.order==="ZYX"){const _=l*p,x=l*g,E=u*p,T=u*g;n[0]=f*p,n[4]=E*d-x,n[8]=_*d+T,n[1]=f*g,n[5]=T*d+_,n[9]=x*d-E,n[2]=-d,n[6]=u*f,n[10]=l*f}else if(e.order==="YZX"){const _=l*f,x=l*d,E=u*f,T=u*d;n[0]=f*p,n[4]=T-_*g,n[8]=E*g+x,n[1]=g,n[5]=l*p,n[9]=-u*p,n[2]=-d*p,n[6]=x*g+E,n[10]=_-T*g}else if(e.order==="XZY"){const _=l*f,x=l*d,E=u*f,T=u*d;n[0]=f*p,n[4]=-g,n[8]=d*p,n[1]=_*g+T,n[5]=l*p,n[9]=x*g-E,n[2]=E*g-x,n[6]=u*p,n[10]=T*g+_}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Lb,e,Pb)}lookAt(e,n,i){const s=this.elements;return ui.subVectors(e,n),ui.lengthSq()===0&&(ui.z=1),ui.normalize(),cs.crossVectors(i,ui),cs.lengthSq()===0&&(Math.abs(i.z)===1?ui.x+=1e-4:ui.z+=1e-4,ui.normalize(),cs.crossVectors(i,ui)),cs.normalize(),Sc.crossVectors(ui,cs),s[0]=cs.x,s[4]=Sc.x,s[8]=ui.x,s[1]=cs.y,s[5]=Sc.y,s[9]=ui.y,s[2]=cs.z,s[6]=Sc.z,s[10]=ui.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,s=n.elements,o=this.elements,l=i[0],u=i[4],f=i[8],d=i[12],p=i[1],g=i[5],_=i[9],x=i[13],E=i[2],T=i[6],v=i[10],h=i[14],y=i[3],S=i[7],w=i[11],P=i[15],I=s[0],D=s[4],H=s[8],C=s[12],U=s[1],oe=s[5],he=s[9],q=s[13],J=s[2],ie=s[6],fe=s[10],ee=s[14],z=s[3],te=s[7],Y=s[11],V=s[15];return o[0]=l*I+u*U+f*J+d*z,o[4]=l*D+u*oe+f*ie+d*te,o[8]=l*H+u*he+f*fe+d*Y,o[12]=l*C+u*q+f*ee+d*V,o[1]=p*I+g*U+_*J+x*z,o[5]=p*D+g*oe+_*ie+x*te,o[9]=p*H+g*he+_*fe+x*Y,o[13]=p*C+g*q+_*ee+x*V,o[2]=E*I+T*U+v*J+h*z,o[6]=E*D+T*oe+v*ie+h*te,o[10]=E*H+T*he+v*fe+h*Y,o[14]=E*C+T*q+v*ee+h*V,o[3]=y*I+S*U+w*J+P*z,o[7]=y*D+S*oe+w*ie+P*te,o[11]=y*H+S*he+w*fe+P*Y,o[15]=y*C+S*q+w*ee+P*V,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[4]*=e,n[8]*=e,n[12]*=e,n[1]*=e,n[5]*=e,n[9]*=e,n[13]*=e,n[2]*=e,n[6]*=e,n[10]*=e,n[14]*=e,n[3]*=e,n[7]*=e,n[11]*=e,n[15]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[4],s=e[8],o=e[12],l=e[1],u=e[5],f=e[9],d=e[13],p=e[2],g=e[6],_=e[10],x=e[14],E=e[3],T=e[7],v=e[11],h=e[15];return E*(+o*f*g-s*d*g-o*u*_+i*d*_+s*u*x-i*f*x)+T*(+n*f*x-n*d*_+o*l*_-s*l*x+s*d*p-o*f*p)+v*(+n*d*g-n*u*x-o*l*g+i*l*x+o*u*p-i*d*p)+h*(-s*u*p-n*f*g+n*u*_+s*l*g-i*l*_+i*f*p)}transpose(){const e=this.elements;let n;return n=e[1],e[1]=e[4],e[4]=n,n=e[2],e[2]=e[8],e[8]=n,n=e[6],e[6]=e[9],e[9]=n,n=e[3],e[3]=e[12],e[12]=n,n=e[7],e[7]=e[13],e[13]=n,n=e[11],e[11]=e[14],e[14]=n,this}setPosition(e,n,i){const s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=n,s[14]=i),this}invert(){const e=this.elements,n=e[0],i=e[1],s=e[2],o=e[3],l=e[4],u=e[5],f=e[6],d=e[7],p=e[8],g=e[9],_=e[10],x=e[11],E=e[12],T=e[13],v=e[14],h=e[15],y=g*v*d-T*_*d+T*f*x-u*v*x-g*f*h+u*_*h,S=E*_*d-p*v*d-E*f*x+l*v*x+p*f*h-l*_*h,w=p*T*d-E*g*d+E*u*x-l*T*x-p*u*h+l*g*h,P=E*g*f-p*T*f-E*u*_+l*T*_+p*u*v-l*g*v,I=n*y+i*S+s*w+o*P;if(I===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const D=1/I;return e[0]=y*D,e[1]=(T*_*o-g*v*o-T*s*x+i*v*x+g*s*h-i*_*h)*D,e[2]=(u*v*o-T*f*o+T*s*d-i*v*d-u*s*h+i*f*h)*D,e[3]=(g*f*o-u*_*o-g*s*d+i*_*d+u*s*x-i*f*x)*D,e[4]=S*D,e[5]=(p*v*o-E*_*o+E*s*x-n*v*x-p*s*h+n*_*h)*D,e[6]=(E*f*o-l*v*o-E*s*d+n*v*d+l*s*h-n*f*h)*D,e[7]=(l*_*o-p*f*o+p*s*d-n*_*d-l*s*x+n*f*x)*D,e[8]=w*D,e[9]=(E*g*o-p*T*o-E*i*x+n*T*x+p*i*h-n*g*h)*D,e[10]=(l*T*o-E*u*o+E*i*d-n*T*d-l*i*h+n*u*h)*D,e[11]=(p*u*o-l*g*o-p*i*d+n*g*d+l*i*x-n*u*x)*D,e[12]=P*D,e[13]=(p*T*s-E*g*s+E*i*_-n*T*_-p*i*v+n*g*v)*D,e[14]=(E*u*s-l*T*s-E*i*f+n*T*f+l*i*v-n*u*v)*D,e[15]=(l*g*s-p*u*s+p*i*f-n*g*f-l*i*_+n*u*_)*D,this}scale(e){const n=this.elements,i=e.x,s=e.y,o=e.z;return n[0]*=i,n[4]*=s,n[8]*=o,n[1]*=i,n[5]*=s,n[9]*=o,n[2]*=i,n[6]*=s,n[10]*=o,n[3]*=i,n[7]*=s,n[11]*=o,this}getMaxScaleOnAxis(){const e=this.elements,n=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(n,i,s))}makeTranslation(e,n,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,n,0,0,1,i,0,0,0,1),this}makeRotationX(e){const n=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,n,-i,0,0,i,n,0,0,0,0,1),this}makeRotationY(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,0,i,0,0,1,0,0,-i,0,n,0,0,0,0,1),this}makeRotationZ(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,0,i,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,n){const i=Math.cos(n),s=Math.sin(n),o=1-i,l=e.x,u=e.y,f=e.z,d=o*l,p=o*u;return this.set(d*l+i,d*u-s*f,d*f+s*u,0,d*u+s*f,p*u+i,p*f-s*l,0,d*f-s*u,p*f+s*l,o*f*f+i,0,0,0,0,1),this}makeScale(e,n,i){return this.set(e,0,0,0,0,n,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,n,i,s,o,l){return this.set(1,i,o,0,e,1,l,0,n,s,1,0,0,0,0,1),this}compose(e,n,i){const s=this.elements,o=n._x,l=n._y,u=n._z,f=n._w,d=o+o,p=l+l,g=u+u,_=o*d,x=o*p,E=o*g,T=l*p,v=l*g,h=u*g,y=f*d,S=f*p,w=f*g,P=i.x,I=i.y,D=i.z;return s[0]=(1-(T+h))*P,s[1]=(x+w)*P,s[2]=(E-S)*P,s[3]=0,s[4]=(x-w)*I,s[5]=(1-(_+h))*I,s[6]=(v+y)*I,s[7]=0,s[8]=(E+S)*D,s[9]=(v-y)*D,s[10]=(1-(_+T))*D,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,n,i){const s=this.elements;let o=jo.set(s[0],s[1],s[2]).length();const l=jo.set(s[4],s[5],s[6]).length(),u=jo.set(s[8],s[9],s[10]).length();this.determinant()<0&&(o=-o),e.x=s[12],e.y=s[13],e.z=s[14],Xi.copy(this);const d=1/o,p=1/l,g=1/u;return Xi.elements[0]*=d,Xi.elements[1]*=d,Xi.elements[2]*=d,Xi.elements[4]*=p,Xi.elements[5]*=p,Xi.elements[6]*=p,Xi.elements[8]*=g,Xi.elements[9]*=g,Xi.elements[10]*=g,n.setFromRotationMatrix(Xi),i.x=o,i.y=l,i.z=u,this}makePerspective(e,n,i,s,o,l,u=zr){const f=this.elements,d=2*o/(n-e),p=2*o/(i-s),g=(n+e)/(n-e),_=(i+s)/(i-s);let x,E;if(u===zr)x=-(l+o)/(l-o),E=-2*l*o/(l-o);else if(u===yf)x=-l/(l-o),E=-l*o/(l-o);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+u);return f[0]=d,f[4]=0,f[8]=g,f[12]=0,f[1]=0,f[5]=p,f[9]=_,f[13]=0,f[2]=0,f[6]=0,f[10]=x,f[14]=E,f[3]=0,f[7]=0,f[11]=-1,f[15]=0,this}makeOrthographic(e,n,i,s,o,l,u=zr){const f=this.elements,d=1/(n-e),p=1/(i-s),g=1/(l-o),_=(n+e)*d,x=(i+s)*p;let E,T;if(u===zr)E=(l+o)*g,T=-2*g;else if(u===yf)E=o*g,T=-1*g;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+u);return f[0]=2*d,f[4]=0,f[8]=0,f[12]=-_,f[1]=0,f[5]=2*p,f[9]=0,f[13]=-x,f[2]=0,f[6]=0,f[10]=T,f[14]=-E,f[3]=0,f[7]=0,f[11]=0,f[15]=1,this}equals(e){const n=this.elements,i=e.elements;for(let s=0;s<16;s++)if(n[s]!==i[s])return!1;return!0}fromArray(e,n=0){for(let i=0;i<16;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e[n+9]=i[9],e[n+10]=i[10],e[n+11]=i[11],e[n+12]=i[12],e[n+13]=i[13],e[n+14]=i[14],e[n+15]=i[15],e}}const jo=new Z,Xi=new En,Lb=new Z(0,0,0),Pb=new Z(1,1,1),cs=new Z,Sc=new Z,ui=new Z,mx=new En,gx=new au;class Hf{constructor(e=0,n=0,i=0,s=Hf.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=n,this._z=i,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,n,i,s=this._order){return this._x=e,this._y=n,this._z=i,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,n=this._order,i=!0){const s=e.elements,o=s[0],l=s[4],u=s[8],f=s[1],d=s[5],p=s[9],g=s[2],_=s[6],x=s[10];switch(n){case"XYZ":this._y=Math.asin($n(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(-p,x),this._z=Math.atan2(-l,o)):(this._x=Math.atan2(_,d),this._z=0);break;case"YXZ":this._x=Math.asin(-$n(p,-1,1)),Math.abs(p)<.9999999?(this._y=Math.atan2(u,x),this._z=Math.atan2(f,d)):(this._y=Math.atan2(-g,o),this._z=0);break;case"ZXY":this._x=Math.asin($n(_,-1,1)),Math.abs(_)<.9999999?(this._y=Math.atan2(-g,x),this._z=Math.atan2(-l,d)):(this._y=0,this._z=Math.atan2(f,o));break;case"ZYX":this._y=Math.asin(-$n(g,-1,1)),Math.abs(g)<.9999999?(this._x=Math.atan2(_,x),this._z=Math.atan2(f,o)):(this._x=0,this._z=Math.atan2(-l,d));break;case"YZX":this._z=Math.asin($n(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(-p,d),this._y=Math.atan2(-g,o)):(this._x=0,this._y=Math.atan2(u,x));break;case"XZY":this._z=Math.asin(-$n(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(_,d),this._y=Math.atan2(u,o)):(this._x=Math.atan2(-p,x),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,n,i){return mx.makeRotationFromQuaternion(e),this.setFromRotationMatrix(mx,n,i)}setFromVector3(e,n=this._order){return this.set(e.x,e.y,e.z,n)}reorder(e){return gx.setFromEuler(this),this.setFromQuaternion(gx,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Hf.DEFAULT_ORDER="XYZ";class DM{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let bb=0;const _x=new Z,qo=new au,Lr=new En,yc=new Z,xl=new Z,Ub=new Z,Db=new au,vx=new Z(1,0,0),xx=new Z(0,1,0),Sx=new Z(0,0,1),Ib={type:"added"},yx={type:"removed"};class mi extends Ha{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:bb++}),this.uuid=ou(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=mi.DEFAULT_UP.clone();const e=new Z,n=new Hf,i=new au,s=new Z(1,1,1);function o(){i.setFromEuler(n,!1)}function l(){n.setFromQuaternion(i,void 0,!1)}n._onChange(o),i._onChange(l),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new En},normalMatrix:{value:new ct}}),this.matrix=new En,this.matrixWorld=new En,this.matrixAutoUpdate=mi.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.matrixWorldAutoUpdate=mi.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.layers=new DM,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,n){this.quaternion.setFromAxisAngle(e,n)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,n){return qo.setFromAxisAngle(e,n),this.quaternion.multiply(qo),this}rotateOnWorldAxis(e,n){return qo.setFromAxisAngle(e,n),this.quaternion.premultiply(qo),this}rotateX(e){return this.rotateOnAxis(vx,e)}rotateY(e){return this.rotateOnAxis(xx,e)}rotateZ(e){return this.rotateOnAxis(Sx,e)}translateOnAxis(e,n){return _x.copy(e).applyQuaternion(this.quaternion),this.position.add(_x.multiplyScalar(n)),this}translateX(e){return this.translateOnAxis(vx,e)}translateY(e){return this.translateOnAxis(xx,e)}translateZ(e){return this.translateOnAxis(Sx,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Lr.copy(this.matrixWorld).invert())}lookAt(e,n,i){e.isVector3?yc.copy(e):yc.set(e,n,i);const s=this.parent;this.updateWorldMatrix(!0,!1),xl.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Lr.lookAt(xl,yc,this.up):Lr.lookAt(yc,xl,this.up),this.quaternion.setFromRotationMatrix(Lr),s&&(Lr.extractRotation(s.matrixWorld),qo.setFromRotationMatrix(Lr),this.quaternion.premultiply(qo.invert()))}add(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(Ib)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const n=this.children.indexOf(e);return n!==-1&&(e.parent=null,this.children.splice(n,1),e.dispatchEvent(yx)),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){for(let e=0;e<this.children.length;e++){const n=this.children[e];n.parent=null,n.dispatchEvent(yx)}return this.children.length=0,this}attach(e){return this.updateWorldMatrix(!0,!1),Lr.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Lr.multiply(e.parent.matrixWorld)),e.applyMatrix4(Lr),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,n){if(this[e]===n)return this;for(let i=0,s=this.children.length;i<s;i++){const l=this.children[i].getObjectByProperty(e,n);if(l!==void 0)return l}}getObjectsByProperty(e,n){let i=[];this[e]===n&&i.push(this);for(let s=0,o=this.children.length;s<o;s++){const l=this.children[s].getObjectsByProperty(e,n);l.length>0&&(i=i.concat(l))}return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(xl,e,Ub),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(xl,Db,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return e.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(e){e(this);const n=this.children;for(let i=0,s=n.length;i<s;i++)n[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const n=this.children;for(let i=0,s=n.length;i<s;i++)n[i].traverseVisible(e)}traverseAncestors(e){const n=this.parent;n!==null&&(e(n),n.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const n=this.children;for(let i=0,s=n.length;i<s;i++){const o=n[i];(o.matrixWorldAutoUpdate===!0||e===!0)&&o.updateMatrixWorld(e)}}updateWorldMatrix(e,n){const i=this.parent;if(e===!0&&i!==null&&i.matrixWorldAutoUpdate===!0&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),n===!0){const s=this.children;for(let o=0,l=s.length;o<l;o++){const u=s[o];u.matrixWorldAutoUpdate===!0&&u.updateWorldMatrix(!1,!0)}}}toJSON(e){const n=e===void 0||typeof e=="string",i={};n&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON()));function o(u,f){return u[f.uuid]===void 0&&(u[f.uuid]=f.toJSON(e)),f.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=o(e.geometries,this.geometry);const u=this.geometry.parameters;if(u!==void 0&&u.shapes!==void 0){const f=u.shapes;if(Array.isArray(f))for(let d=0,p=f.length;d<p;d++){const g=f[d];o(e.shapes,g)}else o(e.shapes,f)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(o(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const u=[];for(let f=0,d=this.material.length;f<d;f++)u.push(o(e.materials,this.material[f]));s.material=u}else s.material=o(e.materials,this.material);if(this.children.length>0){s.children=[];for(let u=0;u<this.children.length;u++)s.children.push(this.children[u].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let u=0;u<this.animations.length;u++){const f=this.animations[u];s.animations.push(o(e.animations,f))}}if(n){const u=l(e.geometries),f=l(e.materials),d=l(e.textures),p=l(e.images),g=l(e.shapes),_=l(e.skeletons),x=l(e.animations),E=l(e.nodes);u.length>0&&(i.geometries=u),f.length>0&&(i.materials=f),d.length>0&&(i.textures=d),p.length>0&&(i.images=p),g.length>0&&(i.shapes=g),_.length>0&&(i.skeletons=_),x.length>0&&(i.animations=x),E.length>0&&(i.nodes=E)}return i.object=s,i;function l(u){const f=[];for(const d in u){const p=u[d];delete p.metadata,f.push(p)}return f}}clone(e){return new this.constructor().copy(this,e)}copy(e,n=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations,this.userData=JSON.parse(JSON.stringify(e.userData)),n===!0)for(let i=0;i<e.children.length;i++){const s=e.children[i];this.add(s.clone())}return this}}mi.DEFAULT_UP=new Z(0,1,0);mi.DEFAULT_MATRIX_AUTO_UPDATE=!0;mi.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const ji=new Z,Pr=new Z,qh=new Z,br=new Z,Yo=new Z,$o=new Z,Mx=new Z,Yh=new Z,$h=new Z,Kh=new Z;let Mc=!1;class Zi{constructor(e=new Z,n=new Z,i=new Z){this.a=e,this.b=n,this.c=i}static getNormal(e,n,i,s){s.subVectors(i,n),ji.subVectors(e,n),s.cross(ji);const o=s.lengthSq();return o>0?s.multiplyScalar(1/Math.sqrt(o)):s.set(0,0,0)}static getBarycoord(e,n,i,s,o){ji.subVectors(s,n),Pr.subVectors(i,n),qh.subVectors(e,n);const l=ji.dot(ji),u=ji.dot(Pr),f=ji.dot(qh),d=Pr.dot(Pr),p=Pr.dot(qh),g=l*d-u*u;if(g===0)return o.set(-2,-1,-1);const _=1/g,x=(d*f-u*p)*_,E=(l*p-u*f)*_;return o.set(1-x-E,E,x)}static containsPoint(e,n,i,s){return this.getBarycoord(e,n,i,s,br),br.x>=0&&br.y>=0&&br.x+br.y<=1}static getUV(e,n,i,s,o,l,u,f){return Mc===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),Mc=!0),this.getInterpolation(e,n,i,s,o,l,u,f)}static getInterpolation(e,n,i,s,o,l,u,f){return this.getBarycoord(e,n,i,s,br),f.setScalar(0),f.addScaledVector(o,br.x),f.addScaledVector(l,br.y),f.addScaledVector(u,br.z),f}static isFrontFacing(e,n,i,s){return ji.subVectors(i,n),Pr.subVectors(e,n),ji.cross(Pr).dot(s)<0}set(e,n,i){return this.a.copy(e),this.b.copy(n),this.c.copy(i),this}setFromPointsAndIndices(e,n,i,s){return this.a.copy(e[n]),this.b.copy(e[i]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,n,i,s){return this.a.fromBufferAttribute(e,n),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return ji.subVectors(this.c,this.b),Pr.subVectors(this.a,this.b),ji.cross(Pr).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Zi.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,n){return Zi.getBarycoord(e,this.a,this.b,this.c,n)}getUV(e,n,i,s,o){return Mc===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),Mc=!0),Zi.getInterpolation(e,this.a,this.b,this.c,n,i,s,o)}getInterpolation(e,n,i,s,o){return Zi.getInterpolation(e,this.a,this.b,this.c,n,i,s,o)}containsPoint(e){return Zi.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Zi.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,n){const i=this.a,s=this.b,o=this.c;let l,u;Yo.subVectors(s,i),$o.subVectors(o,i),Yh.subVectors(e,i);const f=Yo.dot(Yh),d=$o.dot(Yh);if(f<=0&&d<=0)return n.copy(i);$h.subVectors(e,s);const p=Yo.dot($h),g=$o.dot($h);if(p>=0&&g<=p)return n.copy(s);const _=f*g-p*d;if(_<=0&&f>=0&&p<=0)return l=f/(f-p),n.copy(i).addScaledVector(Yo,l);Kh.subVectors(e,o);const x=Yo.dot(Kh),E=$o.dot(Kh);if(E>=0&&x<=E)return n.copy(o);const T=x*d-f*E;if(T<=0&&d>=0&&E<=0)return u=d/(d-E),n.copy(i).addScaledVector($o,u);const v=p*E-x*g;if(v<=0&&g-p>=0&&x-E>=0)return Mx.subVectors(o,s),u=(g-p)/(g-p+(x-E)),n.copy(s).addScaledVector(Mx,u);const h=1/(v+T+_);return l=T*h,u=_*h,n.copy(i).addScaledVector(Yo,l).addScaledVector($o,u)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}let Nb=0;class Gf extends Ha{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Nb++}),this.uuid=ou(),this.name="",this.type="Material",this.blending=Ta,this.side=bs,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=_M,this.blendDst=vM,this.blendEquation=ia,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.depthFunc=Zp,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=lb,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Nh,this.stencilZFail=Nh,this.stencilZPass=Nh,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const n in e){const i=e[n];if(i===void 0){console.warn(`THREE.Material: parameter '${n}' has value of undefined.`);continue}const s=this[n];if(s===void 0){console.warn(`THREE.Material: '${n}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(i):s&&s.isVector3&&i&&i.isVector3?s.copy(i):this[n]=i}}toJSON(e){const n=e===void 0||typeof e=="string";n&&(e={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Ta&&(i.blending=this.blending),this.side!==bs&&(i.side=this.side),this.vertexColors&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=this.transparent),i.depthFunc=this.depthFunc,i.depthTest=this.depthTest,i.depthWrite=this.depthWrite,i.colorWrite=this.colorWrite,i.stencilWrite=this.stencilWrite,i.stencilWriteMask=this.stencilWriteMask,i.stencilFunc=this.stencilFunc,i.stencilRef=this.stencilRef,i.stencilFuncMask=this.stencilFuncMask,i.stencilFail=this.stencilFail,i.stencilZFail=this.stencilZFail,i.stencilZPass=this.stencilZPass,this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=this.alphaHash),this.alphaToCoverage===!0&&(i.alphaToCoverage=this.alphaToCoverage),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=this.premultipliedAlpha),this.forceSinglePass===!0&&(i.forceSinglePass=this.forceSinglePass),this.wireframe===!0&&(i.wireframe=this.wireframe),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=this.flatShading),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function s(o){const l=[];for(const u in o){const f=o[u];delete f.metadata,l.push(f)}return l}if(n){const o=s(e.textures),l=s(e.images);o.length>0&&(i.textures=o),l.length>0&&(i.images=l)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const n=e.clippingPlanes;let i=null;if(n!==null){const s=n.length;i=new Array(s);for(let o=0;o!==s;++o)i[o]=n[o].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}const IM={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},qi={h:0,s:0,l:0},Ec={h:0,s:0,l:0};function Zh(t,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?t+(e-t)*6*n:n<1/2?e:n<2/3?t+(e-t)*6*(2/3-n):t}class Pt{constructor(e,n,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,n,i)}set(e,n,i){if(n===void 0&&i===void 0){const s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,n,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,n=ot){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Wi.toWorkingColorSpace(this,n),this}setRGB(e,n,i,s=Wi.workingColorSpace){return this.r=e,this.g=n,this.b=i,Wi.toWorkingColorSpace(this,s),this}setHSL(e,n,i,s=Wi.workingColorSpace){if(e=_b(e,1),n=$n(n,0,1),i=$n(i,0,1),n===0)this.r=this.g=this.b=i;else{const o=i<=.5?i*(1+n):i+n-i*n,l=2*i-o;this.r=Zh(l,o,e+1/3),this.g=Zh(l,o,e),this.b=Zh(l,o,e-1/3)}return Wi.toWorkingColorSpace(this,s),this}setStyle(e,n=ot){function i(o){o!==void 0&&parseFloat(o)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let o;const l=s[1],u=s[2];switch(l){case"rgb":case"rgba":if(o=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(u))return i(o[4]),this.setRGB(Math.min(255,parseInt(o[1],10))/255,Math.min(255,parseInt(o[2],10))/255,Math.min(255,parseInt(o[3],10))/255,n);if(o=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(u))return i(o[4]),this.setRGB(Math.min(100,parseInt(o[1],10))/100,Math.min(100,parseInt(o[2],10))/100,Math.min(100,parseInt(o[3],10))/100,n);break;case"hsl":case"hsla":if(o=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(u))return i(o[4]),this.setHSL(parseFloat(o[1])/360,parseFloat(o[2])/100,parseFloat(o[3])/100,n);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){const o=s[1],l=o.length;if(l===3)return this.setRGB(parseInt(o.charAt(0),16)/15,parseInt(o.charAt(1),16)/15,parseInt(o.charAt(2),16)/15,n);if(l===6)return this.setHex(parseInt(o,16),n);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,n);return this}setColorName(e,n=ot){const i=IM[e.toLowerCase()];return i!==void 0?this.setHex(i,n):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=wa(e.r),this.g=wa(e.g),this.b=wa(e.b),this}copyLinearToSRGB(e){return this.r=zh(e.r),this.g=zh(e.g),this.b=zh(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=ot){return Wi.fromWorkingColorSpace(bn.copy(this),e),Math.round($n(bn.r*255,0,255))*65536+Math.round($n(bn.g*255,0,255))*256+Math.round($n(bn.b*255,0,255))}getHexString(e=ot){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,n=Wi.workingColorSpace){Wi.fromWorkingColorSpace(bn.copy(this),n);const i=bn.r,s=bn.g,o=bn.b,l=Math.max(i,s,o),u=Math.min(i,s,o);let f,d;const p=(u+l)/2;if(u===l)f=0,d=0;else{const g=l-u;switch(d=p<=.5?g/(l+u):g/(2-l-u),l){case i:f=(s-o)/g+(s<o?6:0);break;case s:f=(o-i)/g+2;break;case o:f=(i-s)/g+4;break}f/=6}return e.h=f,e.s=d,e.l=p,e}getRGB(e,n=Wi.workingColorSpace){return Wi.fromWorkingColorSpace(bn.copy(this),n),e.r=bn.r,e.g=bn.g,e.b=bn.b,e}getStyle(e=ot){Wi.fromWorkingColorSpace(bn.copy(this),e);const n=bn.r,i=bn.g,s=bn.b;return e!==ot?`color(${e} ${n.toFixed(3)} ${i.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(i*255)},${Math.round(s*255)})`}offsetHSL(e,n,i){return this.getHSL(qi),qi.h+=e,qi.s+=n,qi.l+=i,this.setHSL(qi.h,qi.s,qi.l),this}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,n){return this.r=e.r+n.r,this.g=e.g+n.g,this.b=e.b+n.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,n){return this.r+=(e.r-this.r)*n,this.g+=(e.g-this.g)*n,this.b+=(e.b-this.b)*n,this}lerpColors(e,n,i){return this.r=e.r+(n.r-e.r)*i,this.g=e.g+(n.g-e.g)*i,this.b=e.b+(n.b-e.b)*i,this}lerpHSL(e,n){this.getHSL(qi),e.getHSL(Ec);const i=Oh(qi.h,Ec.h,n),s=Oh(qi.s,Ec.s,n),o=Oh(qi.l,Ec.l,n);return this.setHSL(i,s,o),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const n=this.r,i=this.g,s=this.b,o=e.elements;return this.r=o[0]*n+o[3]*i+o[6]*s,this.g=o[1]*n+o[4]*i+o[7]*s,this.b=o[2]*n+o[5]*i+o[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,n=0){return this.r=e[n],this.g=e[n+1],this.b=e[n+2],this}toArray(e=[],n=0){return e[n]=this.r,e[n+1]=this.g,e[n+2]=this.b,e}fromBufferAttribute(e,n){return this.r=e.getX(n),this.g=e.getY(n),this.b=e.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const bn=new Pt;Pt.NAMES=IM;class sg extends Gf{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Pt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=xM,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const tn=new Z,Tc=new Ct;class gi{constructor(e,n,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=n,this.count=e!==void 0?e.length/n:0,this.normalized=i,this.usage=cx,this.updateRange={offset:0,count:-1},this.gpuType=vs,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,n,i){e*=this.itemSize,i*=n.itemSize;for(let s=0,o=this.itemSize;s<o;s++)this.array[e+s]=n.array[i+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let n=0,i=this.count;n<i;n++)Tc.fromBufferAttribute(this,n),Tc.applyMatrix3(e),this.setXY(n,Tc.x,Tc.y);else if(this.itemSize===3)for(let n=0,i=this.count;n<i;n++)tn.fromBufferAttribute(this,n),tn.applyMatrix3(e),this.setXYZ(n,tn.x,tn.y,tn.z);return this}applyMatrix4(e){for(let n=0,i=this.count;n<i;n++)tn.fromBufferAttribute(this,n),tn.applyMatrix4(e),this.setXYZ(n,tn.x,tn.y,tn.z);return this}applyNormalMatrix(e){for(let n=0,i=this.count;n<i;n++)tn.fromBufferAttribute(this,n),tn.applyNormalMatrix(e),this.setXYZ(n,tn.x,tn.y,tn.z);return this}transformDirection(e){for(let n=0,i=this.count;n<i;n++)tn.fromBufferAttribute(this,n),tn.transformDirection(e),this.setXYZ(n,tn.x,tn.y,tn.z);return this}set(e,n=0){return this.array.set(e,n),this}getX(e){let n=this.array[e*this.itemSize];return this.normalized&&(n=mc(n,this.array)),n}setX(e,n){return this.normalized&&(n=li(n,this.array)),this.array[e*this.itemSize]=n,this}getY(e){let n=this.array[e*this.itemSize+1];return this.normalized&&(n=mc(n,this.array)),n}setY(e,n){return this.normalized&&(n=li(n,this.array)),this.array[e*this.itemSize+1]=n,this}getZ(e){let n=this.array[e*this.itemSize+2];return this.normalized&&(n=mc(n,this.array)),n}setZ(e,n){return this.normalized&&(n=li(n,this.array)),this.array[e*this.itemSize+2]=n,this}getW(e){let n=this.array[e*this.itemSize+3];return this.normalized&&(n=mc(n,this.array)),n}setW(e,n){return this.normalized&&(n=li(n,this.array)),this.array[e*this.itemSize+3]=n,this}setXY(e,n,i){return e*=this.itemSize,this.normalized&&(n=li(n,this.array),i=li(i,this.array)),this.array[e+0]=n,this.array[e+1]=i,this}setXYZ(e,n,i,s){return e*=this.itemSize,this.normalized&&(n=li(n,this.array),i=li(i,this.array),s=li(s,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=s,this}setXYZW(e,n,i,s,o){return e*=this.itemSize,this.normalized&&(n=li(n,this.array),i=li(i,this.array),s=li(s,this.array),o=li(o,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=s,this.array[e+3]=o,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==cx&&(e.usage=this.usage),(this.updateRange.offset!==0||this.updateRange.count!==-1)&&(e.updateRange=this.updateRange),e}}class NM extends gi{constructor(e,n,i){super(new Uint16Array(e),n,i)}}class FM extends gi{constructor(e,n,i){super(new Uint32Array(e),n,i)}}class Vr extends gi{constructor(e,n,i){super(new Float32Array(e),n,i)}}let Fb=0;const Pi=new En,Qh=new mi,Ko=new Z,ci=new lu,Sl=new lu,pn=new Z;class Yr extends Ha{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Fb++}),this.uuid=ou(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(LM(e)?FM:NM)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,n){return this.attributes[e]=n,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,n,i=0){this.groups.push({start:e,count:n,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,n){this.drawRange.start=e,this.drawRange.count=n}applyMatrix4(e){const n=this.attributes.position;n!==void 0&&(n.applyMatrix4(e),n.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const o=new ct().getNormalMatrix(e);i.applyNormalMatrix(o),i.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Pi.makeRotationFromQuaternion(e),this.applyMatrix4(Pi),this}rotateX(e){return Pi.makeRotationX(e),this.applyMatrix4(Pi),this}rotateY(e){return Pi.makeRotationY(e),this.applyMatrix4(Pi),this}rotateZ(e){return Pi.makeRotationZ(e),this.applyMatrix4(Pi),this}translate(e,n,i){return Pi.makeTranslation(e,n,i),this.applyMatrix4(Pi),this}scale(e,n,i){return Pi.makeScale(e,n,i),this.applyMatrix4(Pi),this}lookAt(e){return Qh.lookAt(e),Qh.updateMatrix(),this.applyMatrix4(Qh.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ko).negate(),this.translate(Ko.x,Ko.y,Ko.z),this}setFromPoints(e){const n=[];for(let i=0,s=e.length;i<s;i++){const o=e[i];n.push(o.x,o.y,o.z||0)}return this.setAttribute("position",new Vr(n,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new lu);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new Z(-1/0,-1/0,-1/0),new Z(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),n)for(let i=0,s=n.length;i<s;i++){const o=n[i];ci.setFromBufferAttribute(o),this.morphTargetsRelative?(pn.addVectors(this.boundingBox.min,ci.min),this.boundingBox.expandByPoint(pn),pn.addVectors(this.boundingBox.max,ci.max),this.boundingBox.expandByPoint(pn)):(this.boundingBox.expandByPoint(ci.min),this.boundingBox.expandByPoint(ci.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new rg);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new Z,1/0);return}if(e){const i=this.boundingSphere.center;if(ci.setFromBufferAttribute(e),n)for(let o=0,l=n.length;o<l;o++){const u=n[o];Sl.setFromBufferAttribute(u),this.morphTargetsRelative?(pn.addVectors(ci.min,Sl.min),ci.expandByPoint(pn),pn.addVectors(ci.max,Sl.max),ci.expandByPoint(pn)):(ci.expandByPoint(Sl.min),ci.expandByPoint(Sl.max))}ci.getCenter(i);let s=0;for(let o=0,l=e.count;o<l;o++)pn.fromBufferAttribute(e,o),s=Math.max(s,i.distanceToSquared(pn));if(n)for(let o=0,l=n.length;o<l;o++){const u=n[o],f=this.morphTargetsRelative;for(let d=0,p=u.count;d<p;d++)pn.fromBufferAttribute(u,d),f&&(Ko.fromBufferAttribute(e,d),pn.add(Ko)),s=Math.max(s,i.distanceToSquared(pn))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,n=this.attributes;if(e===null||n.position===void 0||n.normal===void 0||n.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=e.array,s=n.position.array,o=n.normal.array,l=n.uv.array,u=s.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new gi(new Float32Array(4*u),4));const f=this.getAttribute("tangent").array,d=[],p=[];for(let U=0;U<u;U++)d[U]=new Z,p[U]=new Z;const g=new Z,_=new Z,x=new Z,E=new Ct,T=new Ct,v=new Ct,h=new Z,y=new Z;function S(U,oe,he){g.fromArray(s,U*3),_.fromArray(s,oe*3),x.fromArray(s,he*3),E.fromArray(l,U*2),T.fromArray(l,oe*2),v.fromArray(l,he*2),_.sub(g),x.sub(g),T.sub(E),v.sub(E);const q=1/(T.x*v.y-v.x*T.y);isFinite(q)&&(h.copy(_).multiplyScalar(v.y).addScaledVector(x,-T.y).multiplyScalar(q),y.copy(x).multiplyScalar(T.x).addScaledVector(_,-v.x).multiplyScalar(q),d[U].add(h),d[oe].add(h),d[he].add(h),p[U].add(y),p[oe].add(y),p[he].add(y))}let w=this.groups;w.length===0&&(w=[{start:0,count:i.length}]);for(let U=0,oe=w.length;U<oe;++U){const he=w[U],q=he.start,J=he.count;for(let ie=q,fe=q+J;ie<fe;ie+=3)S(i[ie+0],i[ie+1],i[ie+2])}const P=new Z,I=new Z,D=new Z,H=new Z;function C(U){D.fromArray(o,U*3),H.copy(D);const oe=d[U];P.copy(oe),P.sub(D.multiplyScalar(D.dot(oe))).normalize(),I.crossVectors(H,oe);const q=I.dot(p[U])<0?-1:1;f[U*4]=P.x,f[U*4+1]=P.y,f[U*4+2]=P.z,f[U*4+3]=q}for(let U=0,oe=w.length;U<oe;++U){const he=w[U],q=he.start,J=he.count;for(let ie=q,fe=q+J;ie<fe;ie+=3)C(i[ie+0]),C(i[ie+1]),C(i[ie+2])}}computeVertexNormals(){const e=this.index,n=this.getAttribute("position");if(n!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new gi(new Float32Array(n.count*3),3),this.setAttribute("normal",i);else for(let _=0,x=i.count;_<x;_++)i.setXYZ(_,0,0,0);const s=new Z,o=new Z,l=new Z,u=new Z,f=new Z,d=new Z,p=new Z,g=new Z;if(e)for(let _=0,x=e.count;_<x;_+=3){const E=e.getX(_+0),T=e.getX(_+1),v=e.getX(_+2);s.fromBufferAttribute(n,E),o.fromBufferAttribute(n,T),l.fromBufferAttribute(n,v),p.subVectors(l,o),g.subVectors(s,o),p.cross(g),u.fromBufferAttribute(i,E),f.fromBufferAttribute(i,T),d.fromBufferAttribute(i,v),u.add(p),f.add(p),d.add(p),i.setXYZ(E,u.x,u.y,u.z),i.setXYZ(T,f.x,f.y,f.z),i.setXYZ(v,d.x,d.y,d.z)}else for(let _=0,x=n.count;_<x;_+=3)s.fromBufferAttribute(n,_+0),o.fromBufferAttribute(n,_+1),l.fromBufferAttribute(n,_+2),p.subVectors(l,o),g.subVectors(s,o),p.cross(g),i.setXYZ(_+0,p.x,p.y,p.z),i.setXYZ(_+1,p.x,p.y,p.z),i.setXYZ(_+2,p.x,p.y,p.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let n=0,i=e.count;n<i;n++)pn.fromBufferAttribute(e,n),pn.normalize(),e.setXYZ(n,pn.x,pn.y,pn.z)}toNonIndexed(){function e(u,f){const d=u.array,p=u.itemSize,g=u.normalized,_=new d.constructor(f.length*p);let x=0,E=0;for(let T=0,v=f.length;T<v;T++){u.isInterleavedBufferAttribute?x=f[T]*u.data.stride+u.offset:x=f[T]*p;for(let h=0;h<p;h++)_[E++]=d[x++]}return new gi(_,p,g)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const n=new Yr,i=this.index.array,s=this.attributes;for(const u in s){const f=s[u],d=e(f,i);n.setAttribute(u,d)}const o=this.morphAttributes;for(const u in o){const f=[],d=o[u];for(let p=0,g=d.length;p<g;p++){const _=d[p],x=e(_,i);f.push(x)}n.morphAttributes[u]=f}n.morphTargetsRelative=this.morphTargetsRelative;const l=this.groups;for(let u=0,f=l.length;u<f;u++){const d=l[u];n.addGroup(d.start,d.count,d.materialIndex)}return n}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const f=this.parameters;for(const d in f)f[d]!==void 0&&(e[d]=f[d]);return e}e.data={attributes:{}};const n=this.index;n!==null&&(e.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});const i=this.attributes;for(const f in i){const d=i[f];e.data.attributes[f]=d.toJSON(e.data)}const s={};let o=!1;for(const f in this.morphAttributes){const d=this.morphAttributes[f],p=[];for(let g=0,_=d.length;g<_;g++){const x=d[g];p.push(x.toJSON(e.data))}p.length>0&&(s[f]=p,o=!0)}o&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);const l=this.groups;l.length>0&&(e.data.groups=JSON.parse(JSON.stringify(l)));const u=this.boundingSphere;return u!==null&&(e.data.boundingSphere={center:u.center.toArray(),radius:u.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const n={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone(n));const s=e.attributes;for(const d in s){const p=s[d];this.setAttribute(d,p.clone(n))}const o=e.morphAttributes;for(const d in o){const p=[],g=o[d];for(let _=0,x=g.length;_<x;_++)p.push(g[_].clone(n));this.morphAttributes[d]=p}this.morphTargetsRelative=e.morphTargetsRelative;const l=e.groups;for(let d=0,p=l.length;d<p;d++){const g=l[d];this.addGroup(g.start,g.count,g.materialIndex)}const u=e.boundingBox;u!==null&&(this.boundingBox=u.clone());const f=e.boundingSphere;return f!==null&&(this.boundingSphere=f.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Ex=new En,js=new Cb,wc=new rg,Tx=new Z,Zo=new Z,Qo=new Z,Jo=new Z,Jh=new Z,Ac=new Z,Rc=new Ct,Cc=new Ct,Lc=new Ct,wx=new Z,Ax=new Z,Rx=new Z,Pc=new Z,bc=new Z;class kr extends mi{constructor(e=new Yr,n=new sg){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=n,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=e.material,this.geometry=e.geometry,this}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const s=n[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let o=0,l=s.length;o<l;o++){const u=s[o].name||String(o);this.morphTargetInfluences.push(0),this.morphTargetDictionary[u]=o}}}}getVertexPosition(e,n){const i=this.geometry,s=i.attributes.position,o=i.morphAttributes.position,l=i.morphTargetsRelative;n.fromBufferAttribute(s,e);const u=this.morphTargetInfluences;if(o&&u){Ac.set(0,0,0);for(let f=0,d=o.length;f<d;f++){const p=u[f],g=o[f];p!==0&&(Jh.fromBufferAttribute(g,e),l?Ac.addScaledVector(Jh,p):Ac.addScaledVector(Jh.sub(n),p))}n.add(Ac)}return n}raycast(e,n){const i=this.geometry,s=this.material,o=this.matrixWorld;s!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),wc.copy(i.boundingSphere),wc.applyMatrix4(o),js.copy(e.ray).recast(e.near),!(wc.containsPoint(js.origin)===!1&&(js.intersectSphere(wc,Tx)===null||js.origin.distanceToSquared(Tx)>(e.far-e.near)**2))&&(Ex.copy(o).invert(),js.copy(e.ray).applyMatrix4(Ex),!(i.boundingBox!==null&&js.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,n,js)))}_computeIntersections(e,n,i){let s;const o=this.geometry,l=this.material,u=o.index,f=o.attributes.position,d=o.attributes.uv,p=o.attributes.uv1,g=o.attributes.normal,_=o.groups,x=o.drawRange;if(u!==null)if(Array.isArray(l))for(let E=0,T=_.length;E<T;E++){const v=_[E],h=l[v.materialIndex],y=Math.max(v.start,x.start),S=Math.min(u.count,Math.min(v.start+v.count,x.start+x.count));for(let w=y,P=S;w<P;w+=3){const I=u.getX(w),D=u.getX(w+1),H=u.getX(w+2);s=Uc(this,h,e,i,d,p,g,I,D,H),s&&(s.faceIndex=Math.floor(w/3),s.face.materialIndex=v.materialIndex,n.push(s))}}else{const E=Math.max(0,x.start),T=Math.min(u.count,x.start+x.count);for(let v=E,h=T;v<h;v+=3){const y=u.getX(v),S=u.getX(v+1),w=u.getX(v+2);s=Uc(this,l,e,i,d,p,g,y,S,w),s&&(s.faceIndex=Math.floor(v/3),n.push(s))}}else if(f!==void 0)if(Array.isArray(l))for(let E=0,T=_.length;E<T;E++){const v=_[E],h=l[v.materialIndex],y=Math.max(v.start,x.start),S=Math.min(f.count,Math.min(v.start+v.count,x.start+x.count));for(let w=y,P=S;w<P;w+=3){const I=w,D=w+1,H=w+2;s=Uc(this,h,e,i,d,p,g,I,D,H),s&&(s.faceIndex=Math.floor(w/3),s.face.materialIndex=v.materialIndex,n.push(s))}}else{const E=Math.max(0,x.start),T=Math.min(f.count,x.start+x.count);for(let v=E,h=T;v<h;v+=3){const y=v,S=v+1,w=v+2;s=Uc(this,l,e,i,d,p,g,y,S,w),s&&(s.faceIndex=Math.floor(v/3),n.push(s))}}}}function Ob(t,e,n,i,s,o,l,u){let f;if(e.side===ei?f=i.intersectTriangle(l,o,s,!0,u):f=i.intersectTriangle(s,o,l,e.side===bs,u),f===null)return null;bc.copy(u),bc.applyMatrix4(t.matrixWorld);const d=n.ray.origin.distanceTo(bc);return d<n.near||d>n.far?null:{distance:d,point:bc.clone(),object:t}}function Uc(t,e,n,i,s,o,l,u,f,d){t.getVertexPosition(u,Zo),t.getVertexPosition(f,Qo),t.getVertexPosition(d,Jo);const p=Ob(t,e,n,i,Zo,Qo,Jo,Pc);if(p){s&&(Rc.fromBufferAttribute(s,u),Cc.fromBufferAttribute(s,f),Lc.fromBufferAttribute(s,d),p.uv=Zi.getInterpolation(Pc,Zo,Qo,Jo,Rc,Cc,Lc,new Ct)),o&&(Rc.fromBufferAttribute(o,u),Cc.fromBufferAttribute(o,f),Lc.fromBufferAttribute(o,d),p.uv1=Zi.getInterpolation(Pc,Zo,Qo,Jo,Rc,Cc,Lc,new Ct),p.uv2=p.uv1),l&&(wx.fromBufferAttribute(l,u),Ax.fromBufferAttribute(l,f),Rx.fromBufferAttribute(l,d),p.normal=Zi.getInterpolation(Pc,Zo,Qo,Jo,wx,Ax,Rx,new Z),p.normal.dot(i.direction)>0&&p.normal.multiplyScalar(-1));const g={a:u,b:f,c:d,normal:new Z,materialIndex:0};Zi.getNormal(Zo,Qo,Jo,g.normal),p.face=g}return p}class uu extends Yr{constructor(e=1,n=1,i=1,s=1,o=1,l=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:n,depth:i,widthSegments:s,heightSegments:o,depthSegments:l};const u=this;s=Math.floor(s),o=Math.floor(o),l=Math.floor(l);const f=[],d=[],p=[],g=[];let _=0,x=0;E("z","y","x",-1,-1,i,n,e,l,o,0),E("z","y","x",1,-1,i,n,-e,l,o,1),E("x","z","y",1,1,e,i,n,s,l,2),E("x","z","y",1,-1,e,i,-n,s,l,3),E("x","y","z",1,-1,e,n,i,s,o,4),E("x","y","z",-1,-1,e,n,-i,s,o,5),this.setIndex(f),this.setAttribute("position",new Vr(d,3)),this.setAttribute("normal",new Vr(p,3)),this.setAttribute("uv",new Vr(g,2));function E(T,v,h,y,S,w,P,I,D,H,C){const U=w/D,oe=P/H,he=w/2,q=P/2,J=I/2,ie=D+1,fe=H+1;let ee=0,z=0;const te=new Z;for(let Y=0;Y<fe;Y++){const V=Y*oe-q;for(let $=0;$<ie;$++){const ye=$*U-he;te[T]=ye*y,te[v]=V*S,te[h]=J,d.push(te.x,te.y,te.z),te[T]=0,te[v]=0,te[h]=I>0?1:-1,p.push(te.x,te.y,te.z),g.push($/D),g.push(1-Y/H),ee+=1}}for(let Y=0;Y<H;Y++)for(let V=0;V<D;V++){const $=_+V+ie*Y,ye=_+V+ie*(Y+1),xe=_+(V+1)+ie*(Y+1),Me=_+(V+1)+ie*Y;f.push($,ye,Me),f.push(ye,xe,Me),z+=6}u.addGroup(x,z,C),x+=z,_+=ee}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new uu(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Oa(t){const e={};for(const n in t){e[n]={};for(const i in t[n]){const s=t[n][i];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[n][i]=null):e[n][i]=s.clone():Array.isArray(s)?e[n][i]=s.slice():e[n][i]=s}}return e}function On(t){const e={};for(let n=0;n<t.length;n++){const i=Oa(t[n]);for(const s in i)e[s]=i[s]}return e}function Bb(t){const e=[];for(let n=0;n<t.length;n++)e.push(t[n].clone());return e}function OM(t){return t.getRenderTarget()===null?t.outputColorSpace:hr}const zb={clone:Oa,merge:On};var kb=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Hb=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class _o extends Gf{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=kb,this.fragmentShader=Hb,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Oa(e.uniforms),this.uniformsGroups=Bb(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const n=super.toJSON(e);n.glslVersion=this.glslVersion,n.uniforms={};for(const s in this.uniforms){const l=this.uniforms[s].value;l&&l.isTexture?n.uniforms[s]={type:"t",value:l.toJSON(e).uuid}:l&&l.isColor?n.uniforms[s]={type:"c",value:l.getHex()}:l&&l.isVector2?n.uniforms[s]={type:"v2",value:l.toArray()}:l&&l.isVector3?n.uniforms[s]={type:"v3",value:l.toArray()}:l&&l.isVector4?n.uniforms[s]={type:"v4",value:l.toArray()}:l&&l.isMatrix3?n.uniforms[s]={type:"m3",value:l.toArray()}:l&&l.isMatrix4?n.uniforms[s]={type:"m4",value:l.toArray()}:n.uniforms[s]={value:l}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;const i={};for(const s in this.extensions)this.extensions[s]===!0&&(i[s]=!0);return Object.keys(i).length>0&&(n.extensions=i),n}}class BM extends mi{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new En,this.projectionMatrix=new En,this.projectionMatrixInverse=new En,this.coordinateSystem=zr}copy(e,n){return super.copy(e,n),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return e.set(-n[8],-n[9],-n[10]).normalize()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,n){super.updateWorldMatrix(e,n),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class Ii extends BM{constructor(e=50,n=1,i=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=s,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const n=.5*this.getFilmHeight()/e;this.fov=im*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Fh*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return im*2*Math.atan(Math.tan(Fh*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,n,i,s,o,l){this.aspect=e/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=s,this.view.width=o,this.view.height=l,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let n=e*Math.tan(Fh*.5*this.fov)/this.zoom,i=2*n,s=this.aspect*i,o=-.5*s;const l=this.view;if(this.view!==null&&this.view.enabled){const f=l.fullWidth,d=l.fullHeight;o+=l.offsetX*s/f,n-=l.offsetY*i/d,s*=l.width/f,i*=l.height/d}const u=this.filmOffset;u!==0&&(o+=e*u/this.getFilmWidth()),this.projectionMatrix.makePerspective(o,o+s,n,n-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}}const ea=-90,ta=1;class Gb extends mi{constructor(e,n,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null;const s=new Ii(ea,ta,e,n);s.layers=this.layers,this.add(s);const o=new Ii(ea,ta,e,n);o.layers=this.layers,this.add(o);const l=new Ii(ea,ta,e,n);l.layers=this.layers,this.add(l);const u=new Ii(ea,ta,e,n);u.layers=this.layers,this.add(u);const f=new Ii(ea,ta,e,n);f.layers=this.layers,this.add(f);const d=new Ii(ea,ta,e,n);d.layers=this.layers,this.add(d)}updateCoordinateSystem(){const e=this.coordinateSystem,n=this.children.concat(),[i,s,o,l,u,f]=n;for(const d of n)this.remove(d);if(e===zr)i.up.set(0,1,0),i.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),o.up.set(0,0,-1),o.lookAt(0,1,0),l.up.set(0,0,1),l.lookAt(0,-1,0),u.up.set(0,1,0),u.lookAt(0,0,1),f.up.set(0,1,0),f.lookAt(0,0,-1);else if(e===yf)i.up.set(0,-1,0),i.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),o.up.set(0,0,1),o.lookAt(0,1,0),l.up.set(0,0,-1),l.lookAt(0,-1,0),u.up.set(0,-1,0),u.lookAt(0,0,1),f.up.set(0,-1,0),f.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const d of n)this.add(d),d.updateMatrixWorld()}update(e,n){this.parent===null&&this.updateMatrixWorld();const i=this.renderTarget;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,o,l,u,f,d]=this.children,p=e.getRenderTarget(),g=e.toneMapping,_=e.xr.enabled;e.toneMapping=Gr,e.xr.enabled=!1;const x=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0),e.render(n,s),e.setRenderTarget(i,1),e.render(n,o),e.setRenderTarget(i,2),e.render(n,l),e.setRenderTarget(i,3),e.render(n,u),e.setRenderTarget(i,4),e.render(n,f),i.texture.generateMipmaps=x,e.setRenderTarget(i,5),e.render(n,d),e.setRenderTarget(p),e.toneMapping=g,e.xr.enabled=_,i.texture.needsPMREMUpdate=!0}}class zM extends pi{constructor(e,n,i,s,o,l,u,f,d,p){e=e!==void 0?e:[],n=n!==void 0?n:Ia,super(e,n,i,s,o,l,u,f,d,p),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Vb extends go{constructor(e=1,n={}){super(e,e,n),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},s=[i,i,i,i,i,i];n.encoding!==void 0&&(Nl("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),n.colorSpace=n.encoding===lo?ot:uo),this.texture=new zM(s,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=n.generateMipmaps!==void 0?n.generateMipmaps:!1,this.texture.minFilter=n.minFilter!==void 0?n.minFilter:Di}fromEquirectangularTexture(e,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},s=new uu(5,5,5),o=new _o({name:"CubemapFromEquirect",uniforms:Oa(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:ei,blending:Rs});o.uniforms.tEquirect.value=n;const l=new kr(s,o),u=n.minFilter;return n.minFilter===Jl&&(n.minFilter=Di),new Gb(1,10,this).update(e,l),n.minFilter=u,l.geometry.dispose(),l.material.dispose(),this}clear(e,n,i,s){const o=e.getRenderTarget();for(let l=0;l<6;l++)e.setRenderTarget(this,l),e.clear(n,i,s);e.setRenderTarget(o)}}const ep=new Z,Wb=new Z,Xb=new ct;class Ks{constructor(e=new Z(1,0,0),n=0){this.isPlane=!0,this.normal=e,this.constant=n}set(e,n){return this.normal.copy(e),this.constant=n,this}setComponents(e,n,i,s){return this.normal.set(e,n,i),this.constant=s,this}setFromNormalAndCoplanarPoint(e,n){return this.normal.copy(e),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(e,n,i){const s=ep.subVectors(i,n).cross(Wb.subVectors(e,n)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,n){return n.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,n){const i=e.delta(ep),s=this.normal.dot(i);if(s===0)return this.distanceToPoint(e.start)===0?n.copy(e.start):null;const o=-(e.start.dot(this.normal)+this.constant)/s;return o<0||o>1?null:n.copy(e.start).addScaledVector(i,o)}intersectsLine(e){const n=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return n<0&&i>0||i<0&&n>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,n){const i=n||Xb.getNormalMatrix(e),s=this.coplanarPoint(ep).applyMatrix4(e),o=this.normal.applyMatrix3(i).normalize();return this.constant=-s.dot(o),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const qs=new rg,Dc=new Z;class kM{constructor(e=new Ks,n=new Ks,i=new Ks,s=new Ks,o=new Ks,l=new Ks){this.planes=[e,n,i,s,o,l]}set(e,n,i,s,o,l){const u=this.planes;return u[0].copy(e),u[1].copy(n),u[2].copy(i),u[3].copy(s),u[4].copy(o),u[5].copy(l),this}copy(e){const n=this.planes;for(let i=0;i<6;i++)n[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,n=zr){const i=this.planes,s=e.elements,o=s[0],l=s[1],u=s[2],f=s[3],d=s[4],p=s[5],g=s[6],_=s[7],x=s[8],E=s[9],T=s[10],v=s[11],h=s[12],y=s[13],S=s[14],w=s[15];if(i[0].setComponents(f-o,_-d,v-x,w-h).normalize(),i[1].setComponents(f+o,_+d,v+x,w+h).normalize(),i[2].setComponents(f+l,_+p,v+E,w+y).normalize(),i[3].setComponents(f-l,_-p,v-E,w-y).normalize(),i[4].setComponents(f-u,_-g,v-T,w-S).normalize(),n===zr)i[5].setComponents(f+u,_+g,v+T,w+S).normalize();else if(n===yf)i[5].setComponents(u,g,T,S).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),qs.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const n=e.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),qs.copy(n.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(qs)}intersectsSprite(e){return qs.center.set(0,0,0),qs.radius=.7071067811865476,qs.applyMatrix4(e.matrixWorld),this.intersectsSphere(qs)}intersectsSphere(e){const n=this.planes,i=e.center,s=-e.radius;for(let o=0;o<6;o++)if(n[o].distanceToPoint(i)<s)return!1;return!0}intersectsBox(e){const n=this.planes;for(let i=0;i<6;i++){const s=n[i];if(Dc.x=s.normal.x>0?e.max.x:e.min.x,Dc.y=s.normal.y>0?e.max.y:e.min.y,Dc.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(Dc)<0)return!1}return!0}containsPoint(e){const n=this.planes;for(let i=0;i<6;i++)if(n[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function HM(){let t=null,e=!1,n=null,i=null;function s(o,l){n(o,l),i=t.requestAnimationFrame(s)}return{start:function(){e!==!0&&n!==null&&(i=t.requestAnimationFrame(s),e=!0)},stop:function(){t.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(o){n=o},setContext:function(o){t=o}}}function jb(t,e){const n=e.isWebGL2,i=new WeakMap;function s(d,p){const g=d.array,_=d.usage,x=t.createBuffer();t.bindBuffer(p,x),t.bufferData(p,g,_),d.onUploadCallback();let E;if(g instanceof Float32Array)E=t.FLOAT;else if(g instanceof Uint16Array)if(d.isFloat16BufferAttribute)if(n)E=t.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else E=t.UNSIGNED_SHORT;else if(g instanceof Int16Array)E=t.SHORT;else if(g instanceof Uint32Array)E=t.UNSIGNED_INT;else if(g instanceof Int32Array)E=t.INT;else if(g instanceof Int8Array)E=t.BYTE;else if(g instanceof Uint8Array)E=t.UNSIGNED_BYTE;else if(g instanceof Uint8ClampedArray)E=t.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+g);return{buffer:x,type:E,bytesPerElement:g.BYTES_PER_ELEMENT,version:d.version}}function o(d,p,g){const _=p.array,x=p.updateRange;t.bindBuffer(g,d),x.count===-1?t.bufferSubData(g,0,_):(n?t.bufferSubData(g,x.offset*_.BYTES_PER_ELEMENT,_,x.offset,x.count):t.bufferSubData(g,x.offset*_.BYTES_PER_ELEMENT,_.subarray(x.offset,x.offset+x.count)),x.count=-1),p.onUploadCallback()}function l(d){return d.isInterleavedBufferAttribute&&(d=d.data),i.get(d)}function u(d){d.isInterleavedBufferAttribute&&(d=d.data);const p=i.get(d);p&&(t.deleteBuffer(p.buffer),i.delete(d))}function f(d,p){if(d.isGLBufferAttribute){const _=i.get(d);(!_||_.version<d.version)&&i.set(d,{buffer:d.buffer,type:d.type,bytesPerElement:d.elementSize,version:d.version});return}d.isInterleavedBufferAttribute&&(d=d.data);const g=i.get(d);g===void 0?i.set(d,s(d,p)):g.version<d.version&&(o(g.buffer,d,p),g.version=d.version)}return{get:l,remove:u,update:f}}class og extends Yr{constructor(e=1,n=1,i=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:n,widthSegments:i,heightSegments:s};const o=e/2,l=n/2,u=Math.floor(i),f=Math.floor(s),d=u+1,p=f+1,g=e/u,_=n/f,x=[],E=[],T=[],v=[];for(let h=0;h<p;h++){const y=h*_-l;for(let S=0;S<d;S++){const w=S*g-o;E.push(w,-y,0),T.push(0,0,1),v.push(S/u),v.push(1-h/f)}}for(let h=0;h<f;h++)for(let y=0;y<u;y++){const S=y+d*h,w=y+d*(h+1),P=y+1+d*(h+1),I=y+1+d*h;x.push(S,w,I),x.push(w,P,I)}this.setIndex(x),this.setAttribute("position",new Vr(E,3)),this.setAttribute("normal",new Vr(T,3)),this.setAttribute("uv",new Vr(v,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new og(e.width,e.height,e.widthSegments,e.heightSegments)}}var qb=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Yb=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,$b=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Kb=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Zb=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,Qb=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Jb=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,eU=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,tU=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,nU=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,iU=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,rU=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			 return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float R21 = R12;
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,sU=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = dFdx( surf_pos.xyz );
		vec3 vSigmaY = dFdy( surf_pos.xyz );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,oU=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#pragma unroll_loop_start
	for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
		plane = clippingPlanes[ i ];
		if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
	}
	#pragma unroll_loop_end
	#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
		bool clipped = true;
		#pragma unroll_loop_start
		for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
		}
		#pragma unroll_loop_end
		if ( clipped ) discard;
	#endif
#endif`,aU=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,lU=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,uU=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,cU=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,fU=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,dU=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,hU=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,pU=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
struct GeometricContext {
	vec3 position;
	vec3 normal;
	vec3 viewDir;
#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal;
#endif
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,mU=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_v0 0.339
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_v1 0.276
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_v4 0.046
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_v5 0.016
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_v6 0.0038
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,gU=`vec3 transformedNormal = objectNormal;
#ifdef USE_INSTANCING
	mat3 m = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( m[ 0 ], m[ 0 ] ), dot( m[ 1 ], m[ 1 ] ), dot( m[ 2 ], m[ 2 ] ) );
	transformedNormal = m * transformedNormal;
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	vec3 transformedTangent = ( modelViewMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,_U=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,vU=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,xU=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,SU=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,yU="gl_FragColor = linearToOutputTexel( gl_FragColor );",MU=`vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,EU=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,TU=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,wU=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,AU=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,RU=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,CU=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,LU=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,PU=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,bU=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,UU=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,DU=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,IU=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,NU=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,FU=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in GeometricContext geometry, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in GeometricContext geometry, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,OU=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
uniform vec3 lightProbe[ 9 ];
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	#if defined ( LEGACY_LIGHTS )
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#else
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#endif
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, const in GeometricContext geometry, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometry.position;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometry.position;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,BU=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,zU=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,kU=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometry.normal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,HU=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,GU=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,VU=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( geometryNormal ) ), abs( dFdy( geometryNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	anisotropyV /= material.anisotropy;
	material.anisotropy = saturate( material.anisotropy );
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x - tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x + tbn[ 0 ] * anisotropyV.y;
#endif`,WU=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecular = vec3( 0.0 );
vec3 sheenSpecular = vec3( 0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometry.normal;
		vec3 viewDir = geometry.viewDir;
		vec3 position = geometry.position;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometry.clearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecular += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometry.viewDir, geometry.clearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * BRDF_Sheen( directLight.direction, geometry.viewDir, geometry.normal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometry.viewDir, geometry.normal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecular += clearcoatRadiance * EnvironmentBRDF( geometry.clearcoatNormal, geometry.viewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * material.sheenColor * IBLSheenBRDF( geometry.normal, geometry.viewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,XU=`
GeometricContext geometry;
geometry.position = - vViewPosition;
geometry.normal = normal;
geometry.viewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
#ifdef USE_CLEARCOAT
	geometry.clearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometry.viewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometry, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	irradiance += getLightProbeIrradiance( lightProbe, geometry.normal );
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometry.normal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,jU=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometry.normal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometry.viewDir, geometry.normal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometry.viewDir, geometry.normal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometry.viewDir, geometry.clearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,qU=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometry, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometry, material, reflectedLight );
#endif`,YU=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,$U=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,KU=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,ZU=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,QU=`#ifdef USE_MAP
	diffuseColor *= texture2D( map, vMapUv );
#endif`,JU=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,eD=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,tD=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,nD=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,iD=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,rD=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,sD=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,oD=`#ifdef USE_MORPHTARGETS
	uniform float morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;
		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;
			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,aD=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,lD=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 geometryNormal = normal;`,uD=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,cD=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,fD=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,dD=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,hD=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,pD=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = geometryNormal;
#endif`,mD=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,gD=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,_D=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,vD=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,xD=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,SD=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,yD=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,MD=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,ED=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,TD=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,wD=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,AD=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return shadow;
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
			) * ( 1.0 / 9.0 );
		#else
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`,RD=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,CD=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,LD=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,PD=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,bD=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	uniform int boneTextureSize;
	mat4 getBoneMatrix( const in float i ) {
		float j = i * 4.0;
		float x = mod( j, float( boneTextureSize ) );
		float y = floor( j / float( boneTextureSize ) );
		float dx = 1.0 / float( boneTextureSize );
		float dy = 1.0 / float( boneTextureSize );
		y = dy * ( y + 0.5 );
		vec4 v1 = texture2D( boneTexture, vec2( dx * ( x + 0.5 ), y ) );
		vec4 v2 = texture2D( boneTexture, vec2( dx * ( x + 1.5 ), y ) );
		vec4 v3 = texture2D( boneTexture, vec2( dx * ( x + 2.5 ), y ) );
		vec4 v4 = texture2D( boneTexture, vec2( dx * ( x + 3.5 ), y ) );
		mat4 bone = mat4( v1, v2, v3, v4 );
		return bone;
	}
#endif`,UD=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,DD=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,ID=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,ND=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,FD=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,OD=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,BD=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,zD=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,kD=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,HD=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,GD=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,VD=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const WD=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,XD=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,jD=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,qD=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,YD=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,$D=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,KD=`#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,ZD=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,QD=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,JD=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,eI=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,tI=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,nI=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,iI=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,rI=`#include <common>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,sI=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,oI=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,aI=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,lI=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,uI=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,cI=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,fI=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), opacity );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,dI=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,hI=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,pI=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,mI=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecular;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometry.clearcoatNormal, geometry.viewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + clearcoatSpecular * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,gI=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,_I=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,vI=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,xI=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,SI=`#include <common>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,yI=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,MI=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,EI=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,st={alphahash_fragment:qb,alphahash_pars_fragment:Yb,alphamap_fragment:$b,alphamap_pars_fragment:Kb,alphatest_fragment:Zb,alphatest_pars_fragment:Qb,aomap_fragment:Jb,aomap_pars_fragment:eU,begin_vertex:tU,beginnormal_vertex:nU,bsdfs:iU,iridescence_fragment:rU,bumpmap_pars_fragment:sU,clipping_planes_fragment:oU,clipping_planes_pars_fragment:aU,clipping_planes_pars_vertex:lU,clipping_planes_vertex:uU,color_fragment:cU,color_pars_fragment:fU,color_pars_vertex:dU,color_vertex:hU,common:pU,cube_uv_reflection_fragment:mU,defaultnormal_vertex:gU,displacementmap_pars_vertex:_U,displacementmap_vertex:vU,emissivemap_fragment:xU,emissivemap_pars_fragment:SU,colorspace_fragment:yU,colorspace_pars_fragment:MU,envmap_fragment:EU,envmap_common_pars_fragment:TU,envmap_pars_fragment:wU,envmap_pars_vertex:AU,envmap_physical_pars_fragment:BU,envmap_vertex:RU,fog_vertex:CU,fog_pars_vertex:LU,fog_fragment:PU,fog_pars_fragment:bU,gradientmap_pars_fragment:UU,lightmap_fragment:DU,lightmap_pars_fragment:IU,lights_lambert_fragment:NU,lights_lambert_pars_fragment:FU,lights_pars_begin:OU,lights_toon_fragment:zU,lights_toon_pars_fragment:kU,lights_phong_fragment:HU,lights_phong_pars_fragment:GU,lights_physical_fragment:VU,lights_physical_pars_fragment:WU,lights_fragment_begin:XU,lights_fragment_maps:jU,lights_fragment_end:qU,logdepthbuf_fragment:YU,logdepthbuf_pars_fragment:$U,logdepthbuf_pars_vertex:KU,logdepthbuf_vertex:ZU,map_fragment:QU,map_pars_fragment:JU,map_particle_fragment:eD,map_particle_pars_fragment:tD,metalnessmap_fragment:nD,metalnessmap_pars_fragment:iD,morphcolor_vertex:rD,morphnormal_vertex:sD,morphtarget_pars_vertex:oD,morphtarget_vertex:aD,normal_fragment_begin:lD,normal_fragment_maps:uD,normal_pars_fragment:cD,normal_pars_vertex:fD,normal_vertex:dD,normalmap_pars_fragment:hD,clearcoat_normal_fragment_begin:pD,clearcoat_normal_fragment_maps:mD,clearcoat_pars_fragment:gD,iridescence_pars_fragment:_D,opaque_fragment:vD,packing:xD,premultiplied_alpha_fragment:SD,project_vertex:yD,dithering_fragment:MD,dithering_pars_fragment:ED,roughnessmap_fragment:TD,roughnessmap_pars_fragment:wD,shadowmap_pars_fragment:AD,shadowmap_pars_vertex:RD,shadowmap_vertex:CD,shadowmask_pars_fragment:LD,skinbase_vertex:PD,skinning_pars_vertex:bD,skinning_vertex:UD,skinnormal_vertex:DD,specularmap_fragment:ID,specularmap_pars_fragment:ND,tonemapping_fragment:FD,tonemapping_pars_fragment:OD,transmission_fragment:BD,transmission_pars_fragment:zD,uv_pars_fragment:kD,uv_pars_vertex:HD,uv_vertex:GD,worldpos_vertex:VD,background_vert:WD,background_frag:XD,backgroundCube_vert:jD,backgroundCube_frag:qD,cube_vert:YD,cube_frag:$D,depth_vert:KD,depth_frag:ZD,distanceRGBA_vert:QD,distanceRGBA_frag:JD,equirect_vert:eI,equirect_frag:tI,linedashed_vert:nI,linedashed_frag:iI,meshbasic_vert:rI,meshbasic_frag:sI,meshlambert_vert:oI,meshlambert_frag:aI,meshmatcap_vert:lI,meshmatcap_frag:uI,meshnormal_vert:cI,meshnormal_frag:fI,meshphong_vert:dI,meshphong_frag:hI,meshphysical_vert:pI,meshphysical_frag:mI,meshtoon_vert:gI,meshtoon_frag:_I,points_vert:vI,points_frag:xI,shadow_vert:SI,shadow_frag:yI,sprite_vert:MI,sprite_frag:EI},Ee={common:{diffuse:{value:new Pt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ct},alphaMap:{value:null},alphaMapTransform:{value:new ct},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ct}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ct}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ct}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ct},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ct},normalScale:{value:new Ct(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ct},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ct}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ct}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ct}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Pt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Pt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ct},alphaTest:{value:0},uvTransform:{value:new ct}},sprite:{diffuse:{value:new Pt(16777215)},opacity:{value:1},center:{value:new Ct(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ct},alphaMap:{value:null},alphaMapTransform:{value:new ct},alphaTest:{value:0}}},lr={basic:{uniforms:On([Ee.common,Ee.specularmap,Ee.envmap,Ee.aomap,Ee.lightmap,Ee.fog]),vertexShader:st.meshbasic_vert,fragmentShader:st.meshbasic_frag},lambert:{uniforms:On([Ee.common,Ee.specularmap,Ee.envmap,Ee.aomap,Ee.lightmap,Ee.emissivemap,Ee.bumpmap,Ee.normalmap,Ee.displacementmap,Ee.fog,Ee.lights,{emissive:{value:new Pt(0)}}]),vertexShader:st.meshlambert_vert,fragmentShader:st.meshlambert_frag},phong:{uniforms:On([Ee.common,Ee.specularmap,Ee.envmap,Ee.aomap,Ee.lightmap,Ee.emissivemap,Ee.bumpmap,Ee.normalmap,Ee.displacementmap,Ee.fog,Ee.lights,{emissive:{value:new Pt(0)},specular:{value:new Pt(1118481)},shininess:{value:30}}]),vertexShader:st.meshphong_vert,fragmentShader:st.meshphong_frag},standard:{uniforms:On([Ee.common,Ee.envmap,Ee.aomap,Ee.lightmap,Ee.emissivemap,Ee.bumpmap,Ee.normalmap,Ee.displacementmap,Ee.roughnessmap,Ee.metalnessmap,Ee.fog,Ee.lights,{emissive:{value:new Pt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:st.meshphysical_vert,fragmentShader:st.meshphysical_frag},toon:{uniforms:On([Ee.common,Ee.aomap,Ee.lightmap,Ee.emissivemap,Ee.bumpmap,Ee.normalmap,Ee.displacementmap,Ee.gradientmap,Ee.fog,Ee.lights,{emissive:{value:new Pt(0)}}]),vertexShader:st.meshtoon_vert,fragmentShader:st.meshtoon_frag},matcap:{uniforms:On([Ee.common,Ee.bumpmap,Ee.normalmap,Ee.displacementmap,Ee.fog,{matcap:{value:null}}]),vertexShader:st.meshmatcap_vert,fragmentShader:st.meshmatcap_frag},points:{uniforms:On([Ee.points,Ee.fog]),vertexShader:st.points_vert,fragmentShader:st.points_frag},dashed:{uniforms:On([Ee.common,Ee.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:st.linedashed_vert,fragmentShader:st.linedashed_frag},depth:{uniforms:On([Ee.common,Ee.displacementmap]),vertexShader:st.depth_vert,fragmentShader:st.depth_frag},normal:{uniforms:On([Ee.common,Ee.bumpmap,Ee.normalmap,Ee.displacementmap,{opacity:{value:1}}]),vertexShader:st.meshnormal_vert,fragmentShader:st.meshnormal_frag},sprite:{uniforms:On([Ee.sprite,Ee.fog]),vertexShader:st.sprite_vert,fragmentShader:st.sprite_frag},background:{uniforms:{uvTransform:{value:new ct},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:st.background_vert,fragmentShader:st.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:st.backgroundCube_vert,fragmentShader:st.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:st.cube_vert,fragmentShader:st.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:st.equirect_vert,fragmentShader:st.equirect_frag},distanceRGBA:{uniforms:On([Ee.common,Ee.displacementmap,{referencePosition:{value:new Z},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:st.distanceRGBA_vert,fragmentShader:st.distanceRGBA_frag},shadow:{uniforms:On([Ee.lights,Ee.fog,{color:{value:new Pt(0)},opacity:{value:1}}]),vertexShader:st.shadow_vert,fragmentShader:st.shadow_frag}};lr.physical={uniforms:On([lr.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ct},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ct},clearcoatNormalScale:{value:new Ct(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ct},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ct},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ct},sheen:{value:0},sheenColor:{value:new Pt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ct},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ct},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ct},transmissionSamplerSize:{value:new Ct},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ct},attenuationDistance:{value:0},attenuationColor:{value:new Pt(0)},specularColor:{value:new Pt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ct},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ct},anisotropyVector:{value:new Ct},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ct}}]),vertexShader:st.meshphysical_vert,fragmentShader:st.meshphysical_frag};const Ic={r:0,b:0,g:0};function TI(t,e,n,i,s,o,l){const u=new Pt(0);let f=o===!0?0:1,d,p,g=null,_=0,x=null;function E(v,h){let y=!1,S=h.isScene===!0?h.background:null;switch(S&&S.isTexture&&(S=(h.backgroundBlurriness>0?n:e).get(S)),S===null?T(u,f):S&&S.isColor&&(T(S,1),y=!0),t.xr.getEnvironmentBlendMode()){case"opaque":y=!0;break;case"additive":i.buffers.color.setClear(0,0,0,1,l),y=!0;break;case"alpha-blend":i.buffers.color.setClear(0,0,0,0,l),y=!0;break}(t.autoClear||y)&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),S&&(S.isCubeTexture||S.mapping===kf)?(p===void 0&&(p=new kr(new uu(1,1,1),new _o({name:"BackgroundCubeMaterial",uniforms:Oa(lr.backgroundCube.uniforms),vertexShader:lr.backgroundCube.vertexShader,fragmentShader:lr.backgroundCube.fragmentShader,side:ei,depthTest:!1,depthWrite:!1,fog:!1})),p.geometry.deleteAttribute("normal"),p.geometry.deleteAttribute("uv"),p.onBeforeRender=function(I,D,H){this.matrixWorld.copyPosition(H.matrixWorld)},Object.defineProperty(p.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(p)),p.material.uniforms.envMap.value=S,p.material.uniforms.flipEnvMap.value=S.isCubeTexture&&S.isRenderTargetTexture===!1?-1:1,p.material.uniforms.backgroundBlurriness.value=h.backgroundBlurriness,p.material.uniforms.backgroundIntensity.value=h.backgroundIntensity,p.material.toneMapped=S.colorSpace!==ot,(g!==S||_!==S.version||x!==t.toneMapping)&&(p.material.needsUpdate=!0,g=S,_=S.version,x=t.toneMapping),p.layers.enableAll(),v.unshift(p,p.geometry,p.material,0,0,null)):S&&S.isTexture&&(d===void 0&&(d=new kr(new og(2,2),new _o({name:"BackgroundMaterial",uniforms:Oa(lr.background.uniforms),vertexShader:lr.background.vertexShader,fragmentShader:lr.background.fragmentShader,side:bs,depthTest:!1,depthWrite:!1,fog:!1})),d.geometry.deleteAttribute("normal"),Object.defineProperty(d.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(d)),d.material.uniforms.t2D.value=S,d.material.uniforms.backgroundIntensity.value=h.backgroundIntensity,d.material.toneMapped=S.colorSpace!==ot,S.matrixAutoUpdate===!0&&S.updateMatrix(),d.material.uniforms.uvTransform.value.copy(S.matrix),(g!==S||_!==S.version||x!==t.toneMapping)&&(d.material.needsUpdate=!0,g=S,_=S.version,x=t.toneMapping),d.layers.enableAll(),v.unshift(d,d.geometry,d.material,0,0,null))}function T(v,h){v.getRGB(Ic,OM(t)),i.buffers.color.setClear(Ic.r,Ic.g,Ic.b,h,l)}return{getClearColor:function(){return u},setClearColor:function(v,h=1){u.set(v),f=h,T(u,f)},getClearAlpha:function(){return f},setClearAlpha:function(v){f=v,T(u,f)},render:E}}function wI(t,e,n,i){const s=t.getParameter(t.MAX_VERTEX_ATTRIBS),o=i.isWebGL2?null:e.get("OES_vertex_array_object"),l=i.isWebGL2||o!==null,u={},f=v(null);let d=f,p=!1;function g(J,ie,fe,ee,z){let te=!1;if(l){const Y=T(ee,fe,ie);d!==Y&&(d=Y,x(d.object)),te=h(J,ee,fe,z),te&&y(J,ee,fe,z)}else{const Y=ie.wireframe===!0;(d.geometry!==ee.id||d.program!==fe.id||d.wireframe!==Y)&&(d.geometry=ee.id,d.program=fe.id,d.wireframe=Y,te=!0)}z!==null&&n.update(z,t.ELEMENT_ARRAY_BUFFER),(te||p)&&(p=!1,H(J,ie,fe,ee),z!==null&&t.bindBuffer(t.ELEMENT_ARRAY_BUFFER,n.get(z).buffer))}function _(){return i.isWebGL2?t.createVertexArray():o.createVertexArrayOES()}function x(J){return i.isWebGL2?t.bindVertexArray(J):o.bindVertexArrayOES(J)}function E(J){return i.isWebGL2?t.deleteVertexArray(J):o.deleteVertexArrayOES(J)}function T(J,ie,fe){const ee=fe.wireframe===!0;let z=u[J.id];z===void 0&&(z={},u[J.id]=z);let te=z[ie.id];te===void 0&&(te={},z[ie.id]=te);let Y=te[ee];return Y===void 0&&(Y=v(_()),te[ee]=Y),Y}function v(J){const ie=[],fe=[],ee=[];for(let z=0;z<s;z++)ie[z]=0,fe[z]=0,ee[z]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:ie,enabledAttributes:fe,attributeDivisors:ee,object:J,attributes:{},index:null}}function h(J,ie,fe,ee){const z=d.attributes,te=ie.attributes;let Y=0;const V=fe.getAttributes();for(const $ in V)if(V[$].location>=0){const xe=z[$];let Me=te[$];if(Me===void 0&&($==="instanceMatrix"&&J.instanceMatrix&&(Me=J.instanceMatrix),$==="instanceColor"&&J.instanceColor&&(Me=J.instanceColor)),xe===void 0||xe.attribute!==Me||Me&&xe.data!==Me.data)return!0;Y++}return d.attributesNum!==Y||d.index!==ee}function y(J,ie,fe,ee){const z={},te=ie.attributes;let Y=0;const V=fe.getAttributes();for(const $ in V)if(V[$].location>=0){let xe=te[$];xe===void 0&&($==="instanceMatrix"&&J.instanceMatrix&&(xe=J.instanceMatrix),$==="instanceColor"&&J.instanceColor&&(xe=J.instanceColor));const Me={};Me.attribute=xe,xe&&xe.data&&(Me.data=xe.data),z[$]=Me,Y++}d.attributes=z,d.attributesNum=Y,d.index=ee}function S(){const J=d.newAttributes;for(let ie=0,fe=J.length;ie<fe;ie++)J[ie]=0}function w(J){P(J,0)}function P(J,ie){const fe=d.newAttributes,ee=d.enabledAttributes,z=d.attributeDivisors;fe[J]=1,ee[J]===0&&(t.enableVertexAttribArray(J),ee[J]=1),z[J]!==ie&&((i.isWebGL2?t:e.get("ANGLE_instanced_arrays"))[i.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](J,ie),z[J]=ie)}function I(){const J=d.newAttributes,ie=d.enabledAttributes;for(let fe=0,ee=ie.length;fe<ee;fe++)ie[fe]!==J[fe]&&(t.disableVertexAttribArray(fe),ie[fe]=0)}function D(J,ie,fe,ee,z,te,Y){Y===!0?t.vertexAttribIPointer(J,ie,fe,z,te):t.vertexAttribPointer(J,ie,fe,ee,z,te)}function H(J,ie,fe,ee){if(i.isWebGL2===!1&&(J.isInstancedMesh||ee.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;S();const z=ee.attributes,te=fe.getAttributes(),Y=ie.defaultAttributeValues;for(const V in te){const $=te[V];if($.location>=0){let ye=z[V];if(ye===void 0&&(V==="instanceMatrix"&&J.instanceMatrix&&(ye=J.instanceMatrix),V==="instanceColor"&&J.instanceColor&&(ye=J.instanceColor)),ye!==void 0){const xe=ye.normalized,Me=ye.itemSize,De=n.get(ye);if(De===void 0)continue;const je=De.buffer,ze=De.type,mt=De.bytesPerElement,wn=i.isWebGL2===!0&&(ze===t.INT||ze===t.UNSIGNED_INT||ye.gpuType===yM);if(ye.isInterleavedBufferAttribute){const et=ye.data,X=et.stride,rn=ye.offset;if(et.isInstancedInterleavedBuffer){for(let Ne=0;Ne<$.locationSize;Ne++)P($.location+Ne,et.meshPerAttribute);J.isInstancedMesh!==!0&&ee._maxInstanceCount===void 0&&(ee._maxInstanceCount=et.meshPerAttribute*et.count)}else for(let Ne=0;Ne<$.locationSize;Ne++)w($.location+Ne);t.bindBuffer(t.ARRAY_BUFFER,je);for(let Ne=0;Ne<$.locationSize;Ne++)D($.location+Ne,Me/$.locationSize,ze,xe,X*mt,(rn+Me/$.locationSize*Ne)*mt,wn)}else{if(ye.isInstancedBufferAttribute){for(let et=0;et<$.locationSize;et++)P($.location+et,ye.meshPerAttribute);J.isInstancedMesh!==!0&&ee._maxInstanceCount===void 0&&(ee._maxInstanceCount=ye.meshPerAttribute*ye.count)}else for(let et=0;et<$.locationSize;et++)w($.location+et);t.bindBuffer(t.ARRAY_BUFFER,je);for(let et=0;et<$.locationSize;et++)D($.location+et,Me/$.locationSize,ze,xe,Me*mt,Me/$.locationSize*et*mt,wn)}}else if(Y!==void 0){const xe=Y[V];if(xe!==void 0)switch(xe.length){case 2:t.vertexAttrib2fv($.location,xe);break;case 3:t.vertexAttrib3fv($.location,xe);break;case 4:t.vertexAttrib4fv($.location,xe);break;default:t.vertexAttrib1fv($.location,xe)}}}}I()}function C(){he();for(const J in u){const ie=u[J];for(const fe in ie){const ee=ie[fe];for(const z in ee)E(ee[z].object),delete ee[z];delete ie[fe]}delete u[J]}}function U(J){if(u[J.id]===void 0)return;const ie=u[J.id];for(const fe in ie){const ee=ie[fe];for(const z in ee)E(ee[z].object),delete ee[z];delete ie[fe]}delete u[J.id]}function oe(J){for(const ie in u){const fe=u[ie];if(fe[J.id]===void 0)continue;const ee=fe[J.id];for(const z in ee)E(ee[z].object),delete ee[z];delete fe[J.id]}}function he(){q(),p=!0,d!==f&&(d=f,x(d.object))}function q(){f.geometry=null,f.program=null,f.wireframe=!1}return{setup:g,reset:he,resetDefaultState:q,dispose:C,releaseStatesOfGeometry:U,releaseStatesOfProgram:oe,initAttributes:S,enableAttribute:w,disableUnusedAttributes:I}}function AI(t,e,n,i){const s=i.isWebGL2;let o;function l(d){o=d}function u(d,p){t.drawArrays(o,d,p),n.update(p,o,1)}function f(d,p,g){if(g===0)return;let _,x;if(s)_=t,x="drawArraysInstanced";else if(_=e.get("ANGLE_instanced_arrays"),x="drawArraysInstancedANGLE",_===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}_[x](o,d,p,g),n.update(p,o,g)}this.setMode=l,this.render=u,this.renderInstances=f}function RI(t,e,n){let i;function s(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){const D=e.get("EXT_texture_filter_anisotropic");i=t.getParameter(D.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function o(D){if(D==="highp"){if(t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.HIGH_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.HIGH_FLOAT).precision>0)return"highp";D="mediump"}return D==="mediump"&&t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.MEDIUM_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}const l=typeof WebGL2RenderingContext<"u"&&t.constructor.name==="WebGL2RenderingContext";let u=n.precision!==void 0?n.precision:"highp";const f=o(u);f!==u&&(console.warn("THREE.WebGLRenderer:",u,"not supported, using",f,"instead."),u=f);const d=l||e.has("WEBGL_draw_buffers"),p=n.logarithmicDepthBuffer===!0,g=t.getParameter(t.MAX_TEXTURE_IMAGE_UNITS),_=t.getParameter(t.MAX_VERTEX_TEXTURE_IMAGE_UNITS),x=t.getParameter(t.MAX_TEXTURE_SIZE),E=t.getParameter(t.MAX_CUBE_MAP_TEXTURE_SIZE),T=t.getParameter(t.MAX_VERTEX_ATTRIBS),v=t.getParameter(t.MAX_VERTEX_UNIFORM_VECTORS),h=t.getParameter(t.MAX_VARYING_VECTORS),y=t.getParameter(t.MAX_FRAGMENT_UNIFORM_VECTORS),S=_>0,w=l||e.has("OES_texture_float"),P=S&&w,I=l?t.getParameter(t.MAX_SAMPLES):0;return{isWebGL2:l,drawBuffers:d,getMaxAnisotropy:s,getMaxPrecision:o,precision:u,logarithmicDepthBuffer:p,maxTextures:g,maxVertexTextures:_,maxTextureSize:x,maxCubemapSize:E,maxAttributes:T,maxVertexUniforms:v,maxVaryings:h,maxFragmentUniforms:y,vertexTextures:S,floatFragmentTextures:w,floatVertexTextures:P,maxSamples:I}}function CI(t){const e=this;let n=null,i=0,s=!1,o=!1;const l=new Ks,u=new ct,f={value:null,needsUpdate:!1};this.uniform=f,this.numPlanes=0,this.numIntersection=0,this.init=function(g,_){const x=g.length!==0||_||i!==0||s;return s=_,i=g.length,x},this.beginShadows=function(){o=!0,p(null)},this.endShadows=function(){o=!1},this.setGlobalState=function(g,_){n=p(g,_,0)},this.setState=function(g,_,x){const E=g.clippingPlanes,T=g.clipIntersection,v=g.clipShadows,h=t.get(g);if(!s||E===null||E.length===0||o&&!v)o?p(null):d();else{const y=o?0:i,S=y*4;let w=h.clippingState||null;f.value=w,w=p(E,_,S,x);for(let P=0;P!==S;++P)w[P]=n[P];h.clippingState=w,this.numIntersection=T?this.numPlanes:0,this.numPlanes+=y}};function d(){f.value!==n&&(f.value=n,f.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function p(g,_,x,E){const T=g!==null?g.length:0;let v=null;if(T!==0){if(v=f.value,E!==!0||v===null){const h=x+T*4,y=_.matrixWorldInverse;u.getNormalMatrix(y),(v===null||v.length<h)&&(v=new Float32Array(h));for(let S=0,w=x;S!==T;++S,w+=4)l.copy(g[S]).applyMatrix4(y,u),l.normal.toArray(v,w),v[w+3]=l.constant}f.value=v,f.needsUpdate=!0}return e.numPlanes=T,e.numIntersection=0,v}}function LI(t){let e=new WeakMap;function n(l,u){return u===Qp?l.mapping=Ia:u===Jp&&(l.mapping=Na),l}function i(l){if(l&&l.isTexture&&l.isRenderTargetTexture===!1){const u=l.mapping;if(u===Qp||u===Jp)if(e.has(l)){const f=e.get(l).texture;return n(f,l.mapping)}else{const f=l.image;if(f&&f.height>0){const d=new Vb(f.height/2);return d.fromEquirectangularTexture(t,l),e.set(l,d),l.addEventListener("dispose",s),n(d.texture,l.mapping)}else return null}}return l}function s(l){const u=l.target;u.removeEventListener("dispose",s);const f=e.get(u);f!==void 0&&(e.delete(u),f.dispose())}function o(){e=new WeakMap}return{get:i,dispose:o}}class PI extends BM{constructor(e=-1,n=1,i=1,s=-1,o=.1,l=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=n,this.top=i,this.bottom=s,this.near=o,this.far=l,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,n,i,s,o,l){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=s,this.view.width=o,this.view.height=l,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let o=i-e,l=i+e,u=s+n,f=s-n;if(this.view!==null&&this.view.enabled){const d=(this.right-this.left)/this.view.fullWidth/this.zoom,p=(this.top-this.bottom)/this.view.fullHeight/this.zoom;o+=d*this.view.offsetX,l=o+d*this.view.width,u-=p*this.view.offsetY,f=u-p*this.view.height}this.projectionMatrix.makeOrthographic(o,l,u,f,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}}const ga=4,Cx=[.125,.215,.35,.446,.526,.582],Qs=20,tp=new PI,Lx=new Pt;let np=null;const Zs=(1+Math.sqrt(5))/2,na=1/Zs,Px=[new Z(1,1,1),new Z(-1,1,1),new Z(1,1,-1),new Z(-1,1,-1),new Z(0,Zs,na),new Z(0,Zs,-na),new Z(na,0,Zs),new Z(-na,0,Zs),new Z(Zs,na,0),new Z(-Zs,na,0)];class bx{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,n=0,i=.1,s=100){np=this._renderer.getRenderTarget(),this._setSize(256);const o=this._allocateTargets();return o.depthBuffer=!0,this._sceneToCubeUV(e,i,s,o),n>0&&this._blur(o,0,0,n),this._applyPMREM(o),this._cleanup(o),o}fromEquirectangular(e,n=null){return this._fromTexture(e,n)}fromCubemap(e,n=null){return this._fromTexture(e,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Ix(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Dx(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(np),e.scissorTest=!1,Nc(e,0,0,e.width,e.height)}_fromTexture(e,n){e.mapping===Ia||e.mapping===Na?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),np=this._renderer.getRenderTarget();const i=n||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,i={magFilter:Di,minFilter:Di,generateMipmaps:!1,type:eu,format:Ji,colorSpace:hr,depthBuffer:!1},s=Ux(e,n,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Ux(e,n,i);const{_lodMax:o}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=bI(o)),this._blurMaterial=UI(o,e,n)}return s}_compileMaterial(e){const n=new kr(this._lodPlanes[0],e);this._renderer.compile(n,tp)}_sceneToCubeUV(e,n,i,s){const u=new Ii(90,1,n,i),f=[1,-1,1,1,1,1],d=[1,1,1,-1,-1,-1],p=this._renderer,g=p.autoClear,_=p.toneMapping;p.getClearColor(Lx),p.toneMapping=Gr,p.autoClear=!1;const x=new sg({name:"PMREM.Background",side:ei,depthWrite:!1,depthTest:!1}),E=new kr(new uu,x);let T=!1;const v=e.background;v?v.isColor&&(x.color.copy(v),e.background=null,T=!0):(x.color.copy(Lx),T=!0);for(let h=0;h<6;h++){const y=h%3;y===0?(u.up.set(0,f[h],0),u.lookAt(d[h],0,0)):y===1?(u.up.set(0,0,f[h]),u.lookAt(0,d[h],0)):(u.up.set(0,f[h],0),u.lookAt(0,0,d[h]));const S=this._cubeSize;Nc(s,y*S,h>2?S:0,S,S),p.setRenderTarget(s),T&&p.render(E,u),p.render(e,u)}E.geometry.dispose(),E.material.dispose(),p.toneMapping=_,p.autoClear=g,e.background=v}_textureToCubeUV(e,n){const i=this._renderer,s=e.mapping===Ia||e.mapping===Na;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Ix()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Dx());const o=s?this._cubemapMaterial:this._equirectMaterial,l=new kr(this._lodPlanes[0],o),u=o.uniforms;u.envMap.value=e;const f=this._cubeSize;Nc(n,0,0,3*f,2*f),i.setRenderTarget(n),i.render(l,tp)}_applyPMREM(e){const n=this._renderer,i=n.autoClear;n.autoClear=!1;for(let s=1;s<this._lodPlanes.length;s++){const o=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),l=Px[(s-1)%Px.length];this._blur(e,s-1,s,o,l)}n.autoClear=i}_blur(e,n,i,s,o){const l=this._pingPongRenderTarget;this._halfBlur(e,l,n,i,s,"latitudinal",o),this._halfBlur(l,e,i,i,s,"longitudinal",o)}_halfBlur(e,n,i,s,o,l,u){const f=this._renderer,d=this._blurMaterial;l!=="latitudinal"&&l!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const p=3,g=new kr(this._lodPlanes[s],d),_=d.uniforms,x=this._sizeLods[i]-1,E=isFinite(o)?Math.PI/(2*x):2*Math.PI/(2*Qs-1),T=o/E,v=isFinite(o)?1+Math.floor(p*T):Qs;v>Qs&&console.warn(`sigmaRadians, ${o}, is too large and will clip, as it requested ${v} samples when the maximum is set to ${Qs}`);const h=[];let y=0;for(let D=0;D<Qs;++D){const H=D/T,C=Math.exp(-H*H/2);h.push(C),D===0?y+=C:D<v&&(y+=2*C)}for(let D=0;D<h.length;D++)h[D]=h[D]/y;_.envMap.value=e.texture,_.samples.value=v,_.weights.value=h,_.latitudinal.value=l==="latitudinal",u&&(_.poleAxis.value=u);const{_lodMax:S}=this;_.dTheta.value=E,_.mipInt.value=S-i;const w=this._sizeLods[s],P=3*w*(s>S-ga?s-S+ga:0),I=4*(this._cubeSize-w);Nc(n,P,I,3*w,2*w),f.setRenderTarget(n),f.render(g,tp)}}function bI(t){const e=[],n=[],i=[];let s=t;const o=t-ga+1+Cx.length;for(let l=0;l<o;l++){const u=Math.pow(2,s);n.push(u);let f=1/u;l>t-ga?f=Cx[l-t+ga-1]:l===0&&(f=0),i.push(f);const d=1/(u-2),p=-d,g=1+d,_=[p,p,g,p,g,g,p,p,g,g,p,g],x=6,E=6,T=3,v=2,h=1,y=new Float32Array(T*E*x),S=new Float32Array(v*E*x),w=new Float32Array(h*E*x);for(let I=0;I<x;I++){const D=I%3*2/3-1,H=I>2?0:-1,C=[D,H,0,D+2/3,H,0,D+2/3,H+1,0,D,H,0,D+2/3,H+1,0,D,H+1,0];y.set(C,T*E*I),S.set(_,v*E*I);const U=[I,I,I,I,I,I];w.set(U,h*E*I)}const P=new Yr;P.setAttribute("position",new gi(y,T)),P.setAttribute("uv",new gi(S,v)),P.setAttribute("faceIndex",new gi(w,h)),e.push(P),s>ga&&s--}return{lodPlanes:e,sizeLods:n,sigmas:i}}function Ux(t,e,n){const i=new go(t,e,n);return i.texture.mapping=kf,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Nc(t,e,n,i,s){t.viewport.set(e,n,i,s),t.scissor.set(e,n,i,s)}function UI(t,e,n){const i=new Float32Array(Qs),s=new Z(0,1,0);return new _o({name:"SphericalGaussianBlur",defines:{n:Qs,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${t}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:ag(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Rs,depthTest:!1,depthWrite:!1})}function Dx(){return new _o({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:ag(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Rs,depthTest:!1,depthWrite:!1})}function Ix(){return new _o({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:ag(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Rs,depthTest:!1,depthWrite:!1})}function ag(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function DI(t){let e=new WeakMap,n=null;function i(u){if(u&&u.isTexture){const f=u.mapping,d=f===Qp||f===Jp,p=f===Ia||f===Na;if(d||p)if(u.isRenderTargetTexture&&u.needsPMREMUpdate===!0){u.needsPMREMUpdate=!1;let g=e.get(u);return n===null&&(n=new bx(t)),g=d?n.fromEquirectangular(u,g):n.fromCubemap(u,g),e.set(u,g),g.texture}else{if(e.has(u))return e.get(u).texture;{const g=u.image;if(d&&g&&g.height>0||p&&g&&s(g)){n===null&&(n=new bx(t));const _=d?n.fromEquirectangular(u):n.fromCubemap(u);return e.set(u,_),u.addEventListener("dispose",o),_.texture}else return null}}}return u}function s(u){let f=0;const d=6;for(let p=0;p<d;p++)u[p]!==void 0&&f++;return f===d}function o(u){const f=u.target;f.removeEventListener("dispose",o);const d=e.get(f);d!==void 0&&(e.delete(f),d.dispose())}function l(){e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:i,dispose:l}}function II(t){const e={};function n(i){if(e[i]!==void 0)return e[i];let s;switch(i){case"WEBGL_depth_texture":s=t.getExtension("WEBGL_depth_texture")||t.getExtension("MOZ_WEBGL_depth_texture")||t.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=t.getExtension("EXT_texture_filter_anisotropic")||t.getExtension("MOZ_EXT_texture_filter_anisotropic")||t.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=t.getExtension("WEBGL_compressed_texture_s3tc")||t.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=t.getExtension("WEBGL_compressed_texture_pvrtc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=t.getExtension(i)}return e[i]=s,s}return{has:function(i){return n(i)!==null},init:function(i){i.isWebGL2?n("EXT_color_buffer_float"):(n("WEBGL_depth_texture"),n("OES_texture_float"),n("OES_texture_half_float"),n("OES_texture_half_float_linear"),n("OES_standard_derivatives"),n("OES_element_index_uint"),n("OES_vertex_array_object"),n("ANGLE_instanced_arrays")),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture")},get:function(i){const s=n(i);return s===null&&console.warn("THREE.WebGLRenderer: "+i+" extension not supported."),s}}}function NI(t,e,n,i){const s={},o=new WeakMap;function l(g){const _=g.target;_.index!==null&&e.remove(_.index);for(const E in _.attributes)e.remove(_.attributes[E]);for(const E in _.morphAttributes){const T=_.morphAttributes[E];for(let v=0,h=T.length;v<h;v++)e.remove(T[v])}_.removeEventListener("dispose",l),delete s[_.id];const x=o.get(_);x&&(e.remove(x),o.delete(_)),i.releaseStatesOfGeometry(_),_.isInstancedBufferGeometry===!0&&delete _._maxInstanceCount,n.memory.geometries--}function u(g,_){return s[_.id]===!0||(_.addEventListener("dispose",l),s[_.id]=!0,n.memory.geometries++),_}function f(g){const _=g.attributes;for(const E in _)e.update(_[E],t.ARRAY_BUFFER);const x=g.morphAttributes;for(const E in x){const T=x[E];for(let v=0,h=T.length;v<h;v++)e.update(T[v],t.ARRAY_BUFFER)}}function d(g){const _=[],x=g.index,E=g.attributes.position;let T=0;if(x!==null){const y=x.array;T=x.version;for(let S=0,w=y.length;S<w;S+=3){const P=y[S+0],I=y[S+1],D=y[S+2];_.push(P,I,I,D,D,P)}}else{const y=E.array;T=E.version;for(let S=0,w=y.length/3-1;S<w;S+=3){const P=S+0,I=S+1,D=S+2;_.push(P,I,I,D,D,P)}}const v=new(LM(_)?FM:NM)(_,1);v.version=T;const h=o.get(g);h&&e.remove(h),o.set(g,v)}function p(g){const _=o.get(g);if(_){const x=g.index;x!==null&&_.version<x.version&&d(g)}else d(g);return o.get(g)}return{get:u,update:f,getWireframeAttribute:p}}function FI(t,e,n,i){const s=i.isWebGL2;let o;function l(_){o=_}let u,f;function d(_){u=_.type,f=_.bytesPerElement}function p(_,x){t.drawElements(o,x,u,_*f),n.update(x,o,1)}function g(_,x,E){if(E===0)return;let T,v;if(s)T=t,v="drawElementsInstanced";else if(T=e.get("ANGLE_instanced_arrays"),v="drawElementsInstancedANGLE",T===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}T[v](o,x,u,_*f,E),n.update(x,o,E)}this.setMode=l,this.setIndex=d,this.render=p,this.renderInstances=g}function OI(t){const e={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function i(o,l,u){switch(n.calls++,l){case t.TRIANGLES:n.triangles+=u*(o/3);break;case t.LINES:n.lines+=u*(o/2);break;case t.LINE_STRIP:n.lines+=u*(o-1);break;case t.LINE_LOOP:n.lines+=u*o;break;case t.POINTS:n.points+=u*o;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",l);break}}function s(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:e,render:n,programs:null,autoReset:!0,reset:s,update:i}}function BI(t,e){return t[0]-e[0]}function zI(t,e){return Math.abs(e[1])-Math.abs(t[1])}function kI(t,e,n){const i={},s=new Float32Array(8),o=new WeakMap,l=new yn,u=[];for(let d=0;d<8;d++)u[d]=[d,0];function f(d,p,g){const _=d.morphTargetInfluences;if(e.isWebGL2===!0){const E=p.morphAttributes.position||p.morphAttributes.normal||p.morphAttributes.color,T=E!==void 0?E.length:0;let v=o.get(p);if(v===void 0||v.count!==T){let ie=function(){q.dispose(),o.delete(p),p.removeEventListener("dispose",ie)};var x=ie;v!==void 0&&v.texture.dispose();const S=p.morphAttributes.position!==void 0,w=p.morphAttributes.normal!==void 0,P=p.morphAttributes.color!==void 0,I=p.morphAttributes.position||[],D=p.morphAttributes.normal||[],H=p.morphAttributes.color||[];let C=0;S===!0&&(C=1),w===!0&&(C=2),P===!0&&(C=3);let U=p.attributes.position.count*C,oe=1;U>e.maxTextureSize&&(oe=Math.ceil(U/e.maxTextureSize),U=e.maxTextureSize);const he=new Float32Array(U*oe*4*T),q=new UM(he,U,oe,T);q.type=vs,q.needsUpdate=!0;const J=C*4;for(let fe=0;fe<T;fe++){const ee=I[fe],z=D[fe],te=H[fe],Y=U*oe*4*fe;for(let V=0;V<ee.count;V++){const $=V*J;S===!0&&(l.fromBufferAttribute(ee,V),he[Y+$+0]=l.x,he[Y+$+1]=l.y,he[Y+$+2]=l.z,he[Y+$+3]=0),w===!0&&(l.fromBufferAttribute(z,V),he[Y+$+4]=l.x,he[Y+$+5]=l.y,he[Y+$+6]=l.z,he[Y+$+7]=0),P===!0&&(l.fromBufferAttribute(te,V),he[Y+$+8]=l.x,he[Y+$+9]=l.y,he[Y+$+10]=l.z,he[Y+$+11]=te.itemSize===4?l.w:1)}}v={count:T,texture:q,size:new Ct(U,oe)},o.set(p,v),p.addEventListener("dispose",ie)}let h=0;for(let S=0;S<_.length;S++)h+=_[S];const y=p.morphTargetsRelative?1:1-h;g.getUniforms().setValue(t,"morphTargetBaseInfluence",y),g.getUniforms().setValue(t,"morphTargetInfluences",_),g.getUniforms().setValue(t,"morphTargetsTexture",v.texture,n),g.getUniforms().setValue(t,"morphTargetsTextureSize",v.size)}else{const E=_===void 0?0:_.length;let T=i[p.id];if(T===void 0||T.length!==E){T=[];for(let w=0;w<E;w++)T[w]=[w,0];i[p.id]=T}for(let w=0;w<E;w++){const P=T[w];P[0]=w,P[1]=_[w]}T.sort(zI);for(let w=0;w<8;w++)w<E&&T[w][1]?(u[w][0]=T[w][0],u[w][1]=T[w][1]):(u[w][0]=Number.MAX_SAFE_INTEGER,u[w][1]=0);u.sort(BI);const v=p.morphAttributes.position,h=p.morphAttributes.normal;let y=0;for(let w=0;w<8;w++){const P=u[w],I=P[0],D=P[1];I!==Number.MAX_SAFE_INTEGER&&D?(v&&p.getAttribute("morphTarget"+w)!==v[I]&&p.setAttribute("morphTarget"+w,v[I]),h&&p.getAttribute("morphNormal"+w)!==h[I]&&p.setAttribute("morphNormal"+w,h[I]),s[w]=D,y+=D):(v&&p.hasAttribute("morphTarget"+w)===!0&&p.deleteAttribute("morphTarget"+w),h&&p.hasAttribute("morphNormal"+w)===!0&&p.deleteAttribute("morphNormal"+w),s[w]=0)}const S=p.morphTargetsRelative?1:1-y;g.getUniforms().setValue(t,"morphTargetBaseInfluence",S),g.getUniforms().setValue(t,"morphTargetInfluences",s)}}return{update:f}}function HI(t,e,n,i){let s=new WeakMap;function o(f){const d=i.render.frame,p=f.geometry,g=e.get(f,p);if(s.get(g)!==d&&(e.update(g),s.set(g,d)),f.isInstancedMesh&&(f.hasEventListener("dispose",u)===!1&&f.addEventListener("dispose",u),s.get(f)!==d&&(n.update(f.instanceMatrix,t.ARRAY_BUFFER),f.instanceColor!==null&&n.update(f.instanceColor,t.ARRAY_BUFFER),s.set(f,d))),f.isSkinnedMesh){const _=f.skeleton;s.get(_)!==d&&(_.update(),s.set(_,d))}return g}function l(){s=new WeakMap}function u(f){const d=f.target;d.removeEventListener("dispose",u),n.remove(d.instanceMatrix),d.instanceColor!==null&&n.remove(d.instanceColor)}return{update:o,dispose:l}}const GM=new pi,VM=new UM,WM=new Ab,XM=new zM,Nx=[],Fx=[],Ox=new Float32Array(16),Bx=new Float32Array(9),zx=new Float32Array(4);function Ga(t,e,n){const i=t[0];if(i<=0||i>0)return t;const s=e*n;let o=Nx[s];if(o===void 0&&(o=new Float32Array(s),Nx[s]=o),e!==0){i.toArray(o,0);for(let l=1,u=0;l!==e;++l)u+=n,t[l].toArray(o,u)}return o}function cn(t,e){if(t.length!==e.length)return!1;for(let n=0,i=t.length;n<i;n++)if(t[n]!==e[n])return!1;return!0}function fn(t,e){for(let n=0,i=e.length;n<i;n++)t[n]=e[n]}function Vf(t,e){let n=Fx[e];n===void 0&&(n=new Int32Array(e),Fx[e]=n);for(let i=0;i!==e;++i)n[i]=t.allocateTextureUnit();return n}function GI(t,e){const n=this.cache;n[0]!==e&&(t.uniform1f(this.addr,e),n[0]=e)}function VI(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2f(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(cn(n,e))return;t.uniform2fv(this.addr,e),fn(n,e)}}function WI(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3f(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else if(e.r!==void 0)(n[0]!==e.r||n[1]!==e.g||n[2]!==e.b)&&(t.uniform3f(this.addr,e.r,e.g,e.b),n[0]=e.r,n[1]=e.g,n[2]=e.b);else{if(cn(n,e))return;t.uniform3fv(this.addr,e),fn(n,e)}}function XI(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4f(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(cn(n,e))return;t.uniform4fv(this.addr,e),fn(n,e)}}function jI(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(cn(n,e))return;t.uniformMatrix2fv(this.addr,!1,e),fn(n,e)}else{if(cn(n,i))return;zx.set(i),t.uniformMatrix2fv(this.addr,!1,zx),fn(n,i)}}function qI(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(cn(n,e))return;t.uniformMatrix3fv(this.addr,!1,e),fn(n,e)}else{if(cn(n,i))return;Bx.set(i),t.uniformMatrix3fv(this.addr,!1,Bx),fn(n,i)}}function YI(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(cn(n,e))return;t.uniformMatrix4fv(this.addr,!1,e),fn(n,e)}else{if(cn(n,i))return;Ox.set(i),t.uniformMatrix4fv(this.addr,!1,Ox),fn(n,i)}}function $I(t,e){const n=this.cache;n[0]!==e&&(t.uniform1i(this.addr,e),n[0]=e)}function KI(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2i(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(cn(n,e))return;t.uniform2iv(this.addr,e),fn(n,e)}}function ZI(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3i(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(cn(n,e))return;t.uniform3iv(this.addr,e),fn(n,e)}}function QI(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4i(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(cn(n,e))return;t.uniform4iv(this.addr,e),fn(n,e)}}function JI(t,e){const n=this.cache;n[0]!==e&&(t.uniform1ui(this.addr,e),n[0]=e)}function e3(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2ui(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(cn(n,e))return;t.uniform2uiv(this.addr,e),fn(n,e)}}function t3(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3ui(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(cn(n,e))return;t.uniform3uiv(this.addr,e),fn(n,e)}}function n3(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4ui(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(cn(n,e))return;t.uniform4uiv(this.addr,e),fn(n,e)}}function i3(t,e,n){const i=this.cache,s=n.allocateTextureUnit();i[0]!==s&&(t.uniform1i(this.addr,s),i[0]=s),n.setTexture2D(e||GM,s)}function r3(t,e,n){const i=this.cache,s=n.allocateTextureUnit();i[0]!==s&&(t.uniform1i(this.addr,s),i[0]=s),n.setTexture3D(e||WM,s)}function s3(t,e,n){const i=this.cache,s=n.allocateTextureUnit();i[0]!==s&&(t.uniform1i(this.addr,s),i[0]=s),n.setTextureCube(e||XM,s)}function o3(t,e,n){const i=this.cache,s=n.allocateTextureUnit();i[0]!==s&&(t.uniform1i(this.addr,s),i[0]=s),n.setTexture2DArray(e||VM,s)}function a3(t){switch(t){case 5126:return GI;case 35664:return VI;case 35665:return WI;case 35666:return XI;case 35674:return jI;case 35675:return qI;case 35676:return YI;case 5124:case 35670:return $I;case 35667:case 35671:return KI;case 35668:case 35672:return ZI;case 35669:case 35673:return QI;case 5125:return JI;case 36294:return e3;case 36295:return t3;case 36296:return n3;case 35678:case 36198:case 36298:case 36306:case 35682:return i3;case 35679:case 36299:case 36307:return r3;case 35680:case 36300:case 36308:case 36293:return s3;case 36289:case 36303:case 36311:case 36292:return o3}}function l3(t,e){t.uniform1fv(this.addr,e)}function u3(t,e){const n=Ga(e,this.size,2);t.uniform2fv(this.addr,n)}function c3(t,e){const n=Ga(e,this.size,3);t.uniform3fv(this.addr,n)}function f3(t,e){const n=Ga(e,this.size,4);t.uniform4fv(this.addr,n)}function d3(t,e){const n=Ga(e,this.size,4);t.uniformMatrix2fv(this.addr,!1,n)}function h3(t,e){const n=Ga(e,this.size,9);t.uniformMatrix3fv(this.addr,!1,n)}function p3(t,e){const n=Ga(e,this.size,16);t.uniformMatrix4fv(this.addr,!1,n)}function m3(t,e){t.uniform1iv(this.addr,e)}function g3(t,e){t.uniform2iv(this.addr,e)}function _3(t,e){t.uniform3iv(this.addr,e)}function v3(t,e){t.uniform4iv(this.addr,e)}function x3(t,e){t.uniform1uiv(this.addr,e)}function S3(t,e){t.uniform2uiv(this.addr,e)}function y3(t,e){t.uniform3uiv(this.addr,e)}function M3(t,e){t.uniform4uiv(this.addr,e)}function E3(t,e,n){const i=this.cache,s=e.length,o=Vf(n,s);cn(i,o)||(t.uniform1iv(this.addr,o),fn(i,o));for(let l=0;l!==s;++l)n.setTexture2D(e[l]||GM,o[l])}function T3(t,e,n){const i=this.cache,s=e.length,o=Vf(n,s);cn(i,o)||(t.uniform1iv(this.addr,o),fn(i,o));for(let l=0;l!==s;++l)n.setTexture3D(e[l]||WM,o[l])}function w3(t,e,n){const i=this.cache,s=e.length,o=Vf(n,s);cn(i,o)||(t.uniform1iv(this.addr,o),fn(i,o));for(let l=0;l!==s;++l)n.setTextureCube(e[l]||XM,o[l])}function A3(t,e,n){const i=this.cache,s=e.length,o=Vf(n,s);cn(i,o)||(t.uniform1iv(this.addr,o),fn(i,o));for(let l=0;l!==s;++l)n.setTexture2DArray(e[l]||VM,o[l])}function R3(t){switch(t){case 5126:return l3;case 35664:return u3;case 35665:return c3;case 35666:return f3;case 35674:return d3;case 35675:return h3;case 35676:return p3;case 5124:case 35670:return m3;case 35667:case 35671:return g3;case 35668:case 35672:return _3;case 35669:case 35673:return v3;case 5125:return x3;case 36294:return S3;case 36295:return y3;case 36296:return M3;case 35678:case 36198:case 36298:case 36306:case 35682:return E3;case 35679:case 36299:case 36307:return T3;case 35680:case 36300:case 36308:case 36293:return w3;case 36289:case 36303:case 36311:case 36292:return A3}}class C3{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.setValue=a3(n.type)}}class L3{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.size=n.size,this.setValue=R3(n.type)}}class P3{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,n,i){const s=this.seq;for(let o=0,l=s.length;o!==l;++o){const u=s[o];u.setValue(e,n[u.id],i)}}}const ip=/(\w+)(\])?(\[|\.)?/g;function kx(t,e){t.seq.push(e),t.map[e.id]=e}function b3(t,e,n){const i=t.name,s=i.length;for(ip.lastIndex=0;;){const o=ip.exec(i),l=ip.lastIndex;let u=o[1];const f=o[2]==="]",d=o[3];if(f&&(u=u|0),d===void 0||d==="["&&l+2===s){kx(n,d===void 0?new C3(u,t,e):new L3(u,t,e));break}else{let g=n.map[u];g===void 0&&(g=new P3(u),kx(n,g)),n=g}}}class $c{constructor(e,n){this.seq=[],this.map={};const i=e.getProgramParameter(n,e.ACTIVE_UNIFORMS);for(let s=0;s<i;++s){const o=e.getActiveUniform(n,s),l=e.getUniformLocation(n,o.name);b3(o,l,this)}}setValue(e,n,i,s){const o=this.map[n];o!==void 0&&o.setValue(e,i,s)}setOptional(e,n,i){const s=n[i];s!==void 0&&this.setValue(e,i,s)}static upload(e,n,i,s){for(let o=0,l=n.length;o!==l;++o){const u=n[o],f=i[u.id];f.needsUpdate!==!1&&u.setValue(e,f.value,s)}}static seqWithValue(e,n){const i=[];for(let s=0,o=e.length;s!==o;++s){const l=e[s];l.id in n&&i.push(l)}return i}}function Hx(t,e,n){const i=t.createShader(e);return t.shaderSource(i,n),t.compileShader(i),i}let U3=0;function D3(t,e){const n=t.split(`
`),i=[],s=Math.max(e-6,0),o=Math.min(e+6,n.length);for(let l=s;l<o;l++){const u=l+1;i.push(`${u===e?">":" "} ${u}: ${n[l]}`)}return i.join(`
`)}function I3(t){switch(t){case hr:return["Linear","( value )"];case ot:return["sRGB","( value )"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",t),["Linear","( value )"]}}function Gx(t,e,n){const i=t.getShaderParameter(e,t.COMPILE_STATUS),s=t.getShaderInfoLog(e).trim();if(i&&s==="")return"";const o=/ERROR: 0:(\d+)/.exec(s);if(o){const l=parseInt(o[1]);return n.toUpperCase()+`

`+s+`

`+D3(t.getShaderSource(e),l)}else return s}function N3(t,e){const n=I3(e);return"vec4 "+t+"( vec4 value ) { return LinearTo"+n[0]+n[1]+"; }"}function F3(t,e){let n;switch(e){case VP:n="Linear";break;case WP:n="Reinhard";break;case XP:n="OptimizedCineon";break;case jP:n="ACESFilmic";break;case qP:n="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),n="Linear"}return"vec3 "+t+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}function O3(t){return[t.extensionDerivatives||t.envMapCubeUVHeight||t.bumpMap||t.normalMapTangentSpace||t.clearcoatNormalMap||t.flatShading||t.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(t.extensionFragDepth||t.logarithmicDepthBuffer)&&t.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",t.extensionDrawBuffers&&t.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(t.extensionShaderTextureLOD||t.envMap||t.transmission)&&t.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(wl).join(`
`)}function B3(t){const e=[];for(const n in t){const i=t[n];i!==!1&&e.push("#define "+n+" "+i)}return e.join(`
`)}function z3(t,e){const n={},i=t.getProgramParameter(e,t.ACTIVE_ATTRIBUTES);for(let s=0;s<i;s++){const o=t.getActiveAttrib(e,s),l=o.name;let u=1;o.type===t.FLOAT_MAT2&&(u=2),o.type===t.FLOAT_MAT3&&(u=3),o.type===t.FLOAT_MAT4&&(u=4),n[l]={type:o.type,location:t.getAttribLocation(e,l),locationSize:u}}return n}function wl(t){return t!==""}function Vx(t,e){const n=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return t.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Wx(t,e){return t.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const k3=/^[ \t]*#include +<([\w\d./]+)>/gm;function sm(t){return t.replace(k3,G3)}const H3=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function G3(t,e){let n=st[e];if(n===void 0){const i=H3.get(e);if(i!==void 0)n=st[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return sm(n)}const V3=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Xx(t){return t.replace(V3,W3)}function W3(t,e,n,i){let s="";for(let o=parseInt(e);o<parseInt(n);o++)s+=i.replace(/\[\s*i\s*\]/g,"[ "+o+" ]").replace(/UNROLLED_LOOP_INDEX/g,o);return s}function jx(t){let e="precision "+t.precision+` float;
precision `+t.precision+" int;";return t.precision==="highp"?e+=`
#define HIGH_PRECISION`:t.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:t.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function X3(t){let e="SHADOWMAP_TYPE_BASIC";return t.shadowMapType===gM?e="SHADOWMAP_TYPE_PCF":t.shadowMapType===yP?e="SHADOWMAP_TYPE_PCF_SOFT":t.shadowMapType===Dr&&(e="SHADOWMAP_TYPE_VSM"),e}function j3(t){let e="ENVMAP_TYPE_CUBE";if(t.envMap)switch(t.envMapMode){case Ia:case Na:e="ENVMAP_TYPE_CUBE";break;case kf:e="ENVMAP_TYPE_CUBE_UV";break}return e}function q3(t){let e="ENVMAP_MODE_REFLECTION";if(t.envMap)switch(t.envMapMode){case Na:e="ENVMAP_MODE_REFRACTION";break}return e}function Y3(t){let e="ENVMAP_BLENDING_NONE";if(t.envMap)switch(t.combine){case xM:e="ENVMAP_BLENDING_MULTIPLY";break;case HP:e="ENVMAP_BLENDING_MIX";break;case GP:e="ENVMAP_BLENDING_ADD";break}return e}function $3(t){const e=t.envMapCubeUVHeight;if(e===null)return null;const n=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,n),7*16)),texelHeight:i,maxMip:n}}function K3(t,e,n,i){const s=t.getContext(),o=n.defines;let l=n.vertexShader,u=n.fragmentShader;const f=X3(n),d=j3(n),p=q3(n),g=Y3(n),_=$3(n),x=n.isWebGL2?"":O3(n),E=B3(o),T=s.createProgram();let v,h,y=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(v=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,E].filter(wl).join(`
`),v.length>0&&(v+=`
`),h=[x,"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,E].filter(wl).join(`
`),h.length>0&&(h+=`
`)):(v=[jx(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,E,n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+p:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors&&n.isWebGL2?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0&&n.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",n.morphTargetsCount>0&&n.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0&&n.isWebGL2?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+f:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.useLegacyLights?"#define LEGACY_LIGHTS":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.logarithmicDepthBuffer&&n.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(wl).join(`
`),h=[x,jx(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,E,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+d:"",n.envMap?"#define "+p:"",n.envMap?"#define "+g:"",_?"#define CUBEUV_TEXEL_WIDTH "+_.texelWidth:"",_?"#define CUBEUV_TEXEL_HEIGHT "+_.texelHeight:"",_?"#define CUBEUV_MAX_MIP "+_.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+f:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.useLegacyLights?"#define LEGACY_LIGHTS":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.logarithmicDepthBuffer&&n.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==Gr?"#define TONE_MAPPING":"",n.toneMapping!==Gr?st.tonemapping_pars_fragment:"",n.toneMapping!==Gr?F3("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",st.colorspace_pars_fragment,N3("linearToOutputTexel",n.outputColorSpace),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(wl).join(`
`)),l=sm(l),l=Vx(l,n),l=Wx(l,n),u=sm(u),u=Vx(u,n),u=Wx(u,n),l=Xx(l),u=Xx(u),n.isWebGL2&&n.isRawShaderMaterial!==!0&&(y=`#version 300 es
`,v=["precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+v,h=["#define varying in",n.glslVersion===fx?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===fx?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+h);const S=y+v+l,w=y+h+u,P=Hx(s,s.VERTEX_SHADER,S),I=Hx(s,s.FRAGMENT_SHADER,w);if(s.attachShader(T,P),s.attachShader(T,I),n.index0AttributeName!==void 0?s.bindAttribLocation(T,0,n.index0AttributeName):n.morphTargets===!0&&s.bindAttribLocation(T,0,"position"),s.linkProgram(T),t.debug.checkShaderErrors){const C=s.getProgramInfoLog(T).trim(),U=s.getShaderInfoLog(P).trim(),oe=s.getShaderInfoLog(I).trim();let he=!0,q=!0;if(s.getProgramParameter(T,s.LINK_STATUS)===!1)if(he=!1,typeof t.debug.onShaderError=="function")t.debug.onShaderError(s,T,P,I);else{const J=Gx(s,P,"vertex"),ie=Gx(s,I,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(T,s.VALIDATE_STATUS)+`

Program Info Log: `+C+`
`+J+`
`+ie)}else C!==""?console.warn("THREE.WebGLProgram: Program Info Log:",C):(U===""||oe==="")&&(q=!1);q&&(this.diagnostics={runnable:he,programLog:C,vertexShader:{log:U,prefix:v},fragmentShader:{log:oe,prefix:h}})}s.deleteShader(P),s.deleteShader(I);let D;this.getUniforms=function(){return D===void 0&&(D=new $c(s,T)),D};let H;return this.getAttributes=function(){return H===void 0&&(H=z3(s,T)),H},this.destroy=function(){i.releaseStatesOfProgram(this),s.deleteProgram(T),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=U3++,this.cacheKey=e,this.usedTimes=1,this.program=T,this.vertexShader=P,this.fragmentShader=I,this}let Z3=0;class Q3{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const n=e.vertexShader,i=e.fragmentShader,s=this._getShaderStage(n),o=this._getShaderStage(i),l=this._getShaderCacheForMaterial(e);return l.has(s)===!1&&(l.add(s),s.usedTimes++),l.has(o)===!1&&(l.add(o),o.usedTimes++),this}remove(e){const n=this.materialCache.get(e);for(const i of n)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const n=this.materialCache;let i=n.get(e);return i===void 0&&(i=new Set,n.set(e,i)),i}_getShaderStage(e){const n=this.shaderCache;let i=n.get(e);return i===void 0&&(i=new J3(e),n.set(e,i)),i}}class J3{constructor(e){this.id=Z3++,this.code=e,this.usedTimes=0}}function eN(t,e,n,i,s,o,l){const u=new DM,f=new Q3,d=[],p=s.isWebGL2,g=s.logarithmicDepthBuffer,_=s.vertexTextures;let x=s.precision;const E={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function T(C){return C===0?"uv":`uv${C}`}function v(C,U,oe,he,q){const J=he.fog,ie=q.geometry,fe=C.isMeshStandardMaterial?he.environment:null,ee=(C.isMeshStandardMaterial?n:e).get(C.envMap||fe),z=ee&&ee.mapping===kf?ee.image.height:null,te=E[C.type];C.precision!==null&&(x=s.getMaxPrecision(C.precision),x!==C.precision&&console.warn("THREE.WebGLProgram.getParameters:",C.precision,"not supported, using",x,"instead."));const Y=ie.morphAttributes.position||ie.morphAttributes.normal||ie.morphAttributes.color,V=Y!==void 0?Y.length:0;let $=0;ie.morphAttributes.position!==void 0&&($=1),ie.morphAttributes.normal!==void 0&&($=2),ie.morphAttributes.color!==void 0&&($=3);let ye,xe,Me,De;if(te){const ti=lr[te];ye=ti.vertexShader,xe=ti.fragmentShader}else ye=C.vertexShader,xe=C.fragmentShader,f.update(C),Me=f.getVertexShaderID(C),De=f.getFragmentShaderID(C);const je=t.getRenderTarget(),ze=q.isInstancedMesh===!0,mt=!!C.map,wn=!!C.matcap,et=!!ee,X=!!C.aoMap,rn=!!C.lightMap,Ne=!!C.bumpMap,$e=!!C.normalMap,Ke=!!C.displacementMap,vt=!!C.emissiveMap,ut=!!C.metalnessMap,it=!!C.roughnessMap,xt=C.anisotropy>0,Et=C.clearcoat>0,qt=C.iridescence>0,N=C.sheen>0,L=C.transmission>0,ne=xt&&!!C.anisotropyMap,_e=Et&&!!C.clearcoatMap,ge=Et&&!!C.clearcoatNormalMap,Se=Et&&!!C.clearcoatRoughnessMap,Fe=qt&&!!C.iridescenceMap,Te=qt&&!!C.iridescenceThicknessMap,le=N&&!!C.sheenColorMap,Oe=N&&!!C.sheenRoughnessMap,Be=!!C.specularMap,ke=!!C.specularColorMap,be=!!C.specularIntensityMap,Ue=L&&!!C.transmissionMap,tt=L&&!!C.thicknessMap,At=!!C.gradientMap,B=!!C.alphaMap,we=C.alphaTest>0,Q=!!C.alphaHash,ve=!!C.extensions,Re=!!ie.attributes.uv1,_t=!!ie.attributes.uv2,Ut=!!ie.attributes.uv3;return{isWebGL2:p,shaderID:te,shaderType:C.type,shaderName:C.name,vertexShader:ye,fragmentShader:xe,defines:C.defines,customVertexShaderID:Me,customFragmentShaderID:De,isRawShaderMaterial:C.isRawShaderMaterial===!0,glslVersion:C.glslVersion,precision:x,instancing:ze,instancingColor:ze&&q.instanceColor!==null,supportsVertexTextures:_,outputColorSpace:je===null?t.outputColorSpace:je.isXRRenderTarget===!0?je.texture.colorSpace:hr,map:mt,matcap:wn,envMap:et,envMapMode:et&&ee.mapping,envMapCubeUVHeight:z,aoMap:X,lightMap:rn,bumpMap:Ne,normalMap:$e,displacementMap:_&&Ke,emissiveMap:vt,normalMapObjectSpace:$e&&C.normalMapType===ab,normalMapTangentSpace:$e&&C.normalMapType===ob,metalnessMap:ut,roughnessMap:it,anisotropy:xt,anisotropyMap:ne,clearcoat:Et,clearcoatMap:_e,clearcoatNormalMap:ge,clearcoatRoughnessMap:Se,iridescence:qt,iridescenceMap:Fe,iridescenceThicknessMap:Te,sheen:N,sheenColorMap:le,sheenRoughnessMap:Oe,specularMap:Be,specularColorMap:ke,specularIntensityMap:be,transmission:L,transmissionMap:Ue,thicknessMap:tt,gradientMap:At,opaque:C.transparent===!1&&C.blending===Ta,alphaMap:B,alphaTest:we,alphaHash:Q,combine:C.combine,mapUv:mt&&T(C.map.channel),aoMapUv:X&&T(C.aoMap.channel),lightMapUv:rn&&T(C.lightMap.channel),bumpMapUv:Ne&&T(C.bumpMap.channel),normalMapUv:$e&&T(C.normalMap.channel),displacementMapUv:Ke&&T(C.displacementMap.channel),emissiveMapUv:vt&&T(C.emissiveMap.channel),metalnessMapUv:ut&&T(C.metalnessMap.channel),roughnessMapUv:it&&T(C.roughnessMap.channel),anisotropyMapUv:ne&&T(C.anisotropyMap.channel),clearcoatMapUv:_e&&T(C.clearcoatMap.channel),clearcoatNormalMapUv:ge&&T(C.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Se&&T(C.clearcoatRoughnessMap.channel),iridescenceMapUv:Fe&&T(C.iridescenceMap.channel),iridescenceThicknessMapUv:Te&&T(C.iridescenceThicknessMap.channel),sheenColorMapUv:le&&T(C.sheenColorMap.channel),sheenRoughnessMapUv:Oe&&T(C.sheenRoughnessMap.channel),specularMapUv:Be&&T(C.specularMap.channel),specularColorMapUv:ke&&T(C.specularColorMap.channel),specularIntensityMapUv:be&&T(C.specularIntensityMap.channel),transmissionMapUv:Ue&&T(C.transmissionMap.channel),thicknessMapUv:tt&&T(C.thicknessMap.channel),alphaMapUv:B&&T(C.alphaMap.channel),vertexTangents:!!ie.attributes.tangent&&($e||xt),vertexColors:C.vertexColors,vertexAlphas:C.vertexColors===!0&&!!ie.attributes.color&&ie.attributes.color.itemSize===4,vertexUv1s:Re,vertexUv2s:_t,vertexUv3s:Ut,pointsUvs:q.isPoints===!0&&!!ie.attributes.uv&&(mt||B),fog:!!J,useFog:C.fog===!0,fogExp2:J&&J.isFogExp2,flatShading:C.flatShading===!0,sizeAttenuation:C.sizeAttenuation===!0,logarithmicDepthBuffer:g,skinning:q.isSkinnedMesh===!0,morphTargets:ie.morphAttributes.position!==void 0,morphNormals:ie.morphAttributes.normal!==void 0,morphColors:ie.morphAttributes.color!==void 0,morphTargetsCount:V,morphTextureStride:$,numDirLights:U.directional.length,numPointLights:U.point.length,numSpotLights:U.spot.length,numSpotLightMaps:U.spotLightMap.length,numRectAreaLights:U.rectArea.length,numHemiLights:U.hemi.length,numDirLightShadows:U.directionalShadowMap.length,numPointLightShadows:U.pointShadowMap.length,numSpotLightShadows:U.spotShadowMap.length,numSpotLightShadowsWithMaps:U.numSpotLightShadowsWithMaps,numClippingPlanes:l.numPlanes,numClipIntersection:l.numIntersection,dithering:C.dithering,shadowMapEnabled:t.shadowMap.enabled&&oe.length>0,shadowMapType:t.shadowMap.type,toneMapping:C.toneMapped?t.toneMapping:Gr,useLegacyLights:t.useLegacyLights,premultipliedAlpha:C.premultipliedAlpha,doubleSided:C.side===Fr,flipSided:C.side===ei,useDepthPacking:C.depthPacking>=0,depthPacking:C.depthPacking||0,index0AttributeName:C.index0AttributeName,extensionDerivatives:ve&&C.extensions.derivatives===!0,extensionFragDepth:ve&&C.extensions.fragDepth===!0,extensionDrawBuffers:ve&&C.extensions.drawBuffers===!0,extensionShaderTextureLOD:ve&&C.extensions.shaderTextureLOD===!0,rendererExtensionFragDepth:p||i.has("EXT_frag_depth"),rendererExtensionDrawBuffers:p||i.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:p||i.has("EXT_shader_texture_lod"),customProgramCacheKey:C.customProgramCacheKey()}}function h(C){const U=[];if(C.shaderID?U.push(C.shaderID):(U.push(C.customVertexShaderID),U.push(C.customFragmentShaderID)),C.defines!==void 0)for(const oe in C.defines)U.push(oe),U.push(C.defines[oe]);return C.isRawShaderMaterial===!1&&(y(U,C),S(U,C),U.push(t.outputColorSpace)),U.push(C.customProgramCacheKey),U.join()}function y(C,U){C.push(U.precision),C.push(U.outputColorSpace),C.push(U.envMapMode),C.push(U.envMapCubeUVHeight),C.push(U.mapUv),C.push(U.alphaMapUv),C.push(U.lightMapUv),C.push(U.aoMapUv),C.push(U.bumpMapUv),C.push(U.normalMapUv),C.push(U.displacementMapUv),C.push(U.emissiveMapUv),C.push(U.metalnessMapUv),C.push(U.roughnessMapUv),C.push(U.anisotropyMapUv),C.push(U.clearcoatMapUv),C.push(U.clearcoatNormalMapUv),C.push(U.clearcoatRoughnessMapUv),C.push(U.iridescenceMapUv),C.push(U.iridescenceThicknessMapUv),C.push(U.sheenColorMapUv),C.push(U.sheenRoughnessMapUv),C.push(U.specularMapUv),C.push(U.specularColorMapUv),C.push(U.specularIntensityMapUv),C.push(U.transmissionMapUv),C.push(U.thicknessMapUv),C.push(U.combine),C.push(U.fogExp2),C.push(U.sizeAttenuation),C.push(U.morphTargetsCount),C.push(U.morphAttributeCount),C.push(U.numDirLights),C.push(U.numPointLights),C.push(U.numSpotLights),C.push(U.numSpotLightMaps),C.push(U.numHemiLights),C.push(U.numRectAreaLights),C.push(U.numDirLightShadows),C.push(U.numPointLightShadows),C.push(U.numSpotLightShadows),C.push(U.numSpotLightShadowsWithMaps),C.push(U.shadowMapType),C.push(U.toneMapping),C.push(U.numClippingPlanes),C.push(U.numClipIntersection),C.push(U.depthPacking)}function S(C,U){u.disableAll(),U.isWebGL2&&u.enable(0),U.supportsVertexTextures&&u.enable(1),U.instancing&&u.enable(2),U.instancingColor&&u.enable(3),U.matcap&&u.enable(4),U.envMap&&u.enable(5),U.normalMapObjectSpace&&u.enable(6),U.normalMapTangentSpace&&u.enable(7),U.clearcoat&&u.enable(8),U.iridescence&&u.enable(9),U.alphaTest&&u.enable(10),U.vertexColors&&u.enable(11),U.vertexAlphas&&u.enable(12),U.vertexUv1s&&u.enable(13),U.vertexUv2s&&u.enable(14),U.vertexUv3s&&u.enable(15),U.vertexTangents&&u.enable(16),U.anisotropy&&u.enable(17),C.push(u.mask),u.disableAll(),U.fog&&u.enable(0),U.useFog&&u.enable(1),U.flatShading&&u.enable(2),U.logarithmicDepthBuffer&&u.enable(3),U.skinning&&u.enable(4),U.morphTargets&&u.enable(5),U.morphNormals&&u.enable(6),U.morphColors&&u.enable(7),U.premultipliedAlpha&&u.enable(8),U.shadowMapEnabled&&u.enable(9),U.useLegacyLights&&u.enable(10),U.doubleSided&&u.enable(11),U.flipSided&&u.enable(12),U.useDepthPacking&&u.enable(13),U.dithering&&u.enable(14),U.transmission&&u.enable(15),U.sheen&&u.enable(16),U.opaque&&u.enable(17),U.pointsUvs&&u.enable(18),C.push(u.mask)}function w(C){const U=E[C.type];let oe;if(U){const he=lr[U];oe=zb.clone(he.uniforms)}else oe=C.uniforms;return oe}function P(C,U){let oe;for(let he=0,q=d.length;he<q;he++){const J=d[he];if(J.cacheKey===U){oe=J,++oe.usedTimes;break}}return oe===void 0&&(oe=new K3(t,U,C,o),d.push(oe)),oe}function I(C){if(--C.usedTimes===0){const U=d.indexOf(C);d[U]=d[d.length-1],d.pop(),C.destroy()}}function D(C){f.remove(C)}function H(){f.dispose()}return{getParameters:v,getProgramCacheKey:h,getUniforms:w,acquireProgram:P,releaseProgram:I,releaseShaderCache:D,programs:d,dispose:H}}function tN(){let t=new WeakMap;function e(o){let l=t.get(o);return l===void 0&&(l={},t.set(o,l)),l}function n(o){t.delete(o)}function i(o,l,u){t.get(o)[l]=u}function s(){t=new WeakMap}return{get:e,remove:n,update:i,dispose:s}}function nN(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.material.id!==e.material.id?t.material.id-e.material.id:t.z!==e.z?t.z-e.z:t.id-e.id}function qx(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.z!==e.z?e.z-t.z:t.id-e.id}function Yx(){const t=[];let e=0;const n=[],i=[],s=[];function o(){e=0,n.length=0,i.length=0,s.length=0}function l(g,_,x,E,T,v){let h=t[e];return h===void 0?(h={id:g.id,object:g,geometry:_,material:x,groupOrder:E,renderOrder:g.renderOrder,z:T,group:v},t[e]=h):(h.id=g.id,h.object=g,h.geometry=_,h.material=x,h.groupOrder=E,h.renderOrder=g.renderOrder,h.z=T,h.group=v),e++,h}function u(g,_,x,E,T,v){const h=l(g,_,x,E,T,v);x.transmission>0?i.push(h):x.transparent===!0?s.push(h):n.push(h)}function f(g,_,x,E,T,v){const h=l(g,_,x,E,T,v);x.transmission>0?i.unshift(h):x.transparent===!0?s.unshift(h):n.unshift(h)}function d(g,_){n.length>1&&n.sort(g||nN),i.length>1&&i.sort(_||qx),s.length>1&&s.sort(_||qx)}function p(){for(let g=e,_=t.length;g<_;g++){const x=t[g];if(x.id===null)break;x.id=null,x.object=null,x.geometry=null,x.material=null,x.group=null}}return{opaque:n,transmissive:i,transparent:s,init:o,push:u,unshift:f,finish:p,sort:d}}function iN(){let t=new WeakMap;function e(i,s){const o=t.get(i);let l;return o===void 0?(l=new Yx,t.set(i,[l])):s>=o.length?(l=new Yx,o.push(l)):l=o[s],l}function n(){t=new WeakMap}return{get:e,dispose:n}}function rN(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={direction:new Z,color:new Pt};break;case"SpotLight":n={position:new Z,direction:new Z,color:new Pt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new Z,color:new Pt,distance:0,decay:0};break;case"HemisphereLight":n={direction:new Z,skyColor:new Pt,groundColor:new Pt};break;case"RectAreaLight":n={color:new Pt,position:new Z,halfWidth:new Z,halfHeight:new Z};break}return t[e.id]=n,n}}}function sN(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ct};break;case"SpotLight":n={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ct};break;case"PointLight":n={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ct,shadowCameraNear:1,shadowCameraFar:1e3};break}return t[e.id]=n,n}}}let oN=0;function aN(t,e){return(e.castShadow?2:0)-(t.castShadow?2:0)+(e.map?1:0)-(t.map?1:0)}function lN(t,e){const n=new rN,i=sN(),s={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0};for(let p=0;p<9;p++)s.probe.push(new Z);const o=new Z,l=new En,u=new En;function f(p,g){let _=0,x=0,E=0;for(let oe=0;oe<9;oe++)s.probe[oe].set(0,0,0);let T=0,v=0,h=0,y=0,S=0,w=0,P=0,I=0,D=0,H=0;p.sort(aN);const C=g===!0?Math.PI:1;for(let oe=0,he=p.length;oe<he;oe++){const q=p[oe],J=q.color,ie=q.intensity,fe=q.distance,ee=q.shadow&&q.shadow.map?q.shadow.map.texture:null;if(q.isAmbientLight)_+=J.r*ie*C,x+=J.g*ie*C,E+=J.b*ie*C;else if(q.isLightProbe)for(let z=0;z<9;z++)s.probe[z].addScaledVector(q.sh.coefficients[z],ie);else if(q.isDirectionalLight){const z=n.get(q);if(z.color.copy(q.color).multiplyScalar(q.intensity*C),q.castShadow){const te=q.shadow,Y=i.get(q);Y.shadowBias=te.bias,Y.shadowNormalBias=te.normalBias,Y.shadowRadius=te.radius,Y.shadowMapSize=te.mapSize,s.directionalShadow[T]=Y,s.directionalShadowMap[T]=ee,s.directionalShadowMatrix[T]=q.shadow.matrix,w++}s.directional[T]=z,T++}else if(q.isSpotLight){const z=n.get(q);z.position.setFromMatrixPosition(q.matrixWorld),z.color.copy(J).multiplyScalar(ie*C),z.distance=fe,z.coneCos=Math.cos(q.angle),z.penumbraCos=Math.cos(q.angle*(1-q.penumbra)),z.decay=q.decay,s.spot[h]=z;const te=q.shadow;if(q.map&&(s.spotLightMap[D]=q.map,D++,te.updateMatrices(q),q.castShadow&&H++),s.spotLightMatrix[h]=te.matrix,q.castShadow){const Y=i.get(q);Y.shadowBias=te.bias,Y.shadowNormalBias=te.normalBias,Y.shadowRadius=te.radius,Y.shadowMapSize=te.mapSize,s.spotShadow[h]=Y,s.spotShadowMap[h]=ee,I++}h++}else if(q.isRectAreaLight){const z=n.get(q);z.color.copy(J).multiplyScalar(ie),z.halfWidth.set(q.width*.5,0,0),z.halfHeight.set(0,q.height*.5,0),s.rectArea[y]=z,y++}else if(q.isPointLight){const z=n.get(q);if(z.color.copy(q.color).multiplyScalar(q.intensity*C),z.distance=q.distance,z.decay=q.decay,q.castShadow){const te=q.shadow,Y=i.get(q);Y.shadowBias=te.bias,Y.shadowNormalBias=te.normalBias,Y.shadowRadius=te.radius,Y.shadowMapSize=te.mapSize,Y.shadowCameraNear=te.camera.near,Y.shadowCameraFar=te.camera.far,s.pointShadow[v]=Y,s.pointShadowMap[v]=ee,s.pointShadowMatrix[v]=q.shadow.matrix,P++}s.point[v]=z,v++}else if(q.isHemisphereLight){const z=n.get(q);z.skyColor.copy(q.color).multiplyScalar(ie*C),z.groundColor.copy(q.groundColor).multiplyScalar(ie*C),s.hemi[S]=z,S++}}y>0&&(e.isWebGL2||t.has("OES_texture_float_linear")===!0?(s.rectAreaLTC1=Ee.LTC_FLOAT_1,s.rectAreaLTC2=Ee.LTC_FLOAT_2):t.has("OES_texture_half_float_linear")===!0?(s.rectAreaLTC1=Ee.LTC_HALF_1,s.rectAreaLTC2=Ee.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),s.ambient[0]=_,s.ambient[1]=x,s.ambient[2]=E;const U=s.hash;(U.directionalLength!==T||U.pointLength!==v||U.spotLength!==h||U.rectAreaLength!==y||U.hemiLength!==S||U.numDirectionalShadows!==w||U.numPointShadows!==P||U.numSpotShadows!==I||U.numSpotMaps!==D)&&(s.directional.length=T,s.spot.length=h,s.rectArea.length=y,s.point.length=v,s.hemi.length=S,s.directionalShadow.length=w,s.directionalShadowMap.length=w,s.pointShadow.length=P,s.pointShadowMap.length=P,s.spotShadow.length=I,s.spotShadowMap.length=I,s.directionalShadowMatrix.length=w,s.pointShadowMatrix.length=P,s.spotLightMatrix.length=I+D-H,s.spotLightMap.length=D,s.numSpotLightShadowsWithMaps=H,U.directionalLength=T,U.pointLength=v,U.spotLength=h,U.rectAreaLength=y,U.hemiLength=S,U.numDirectionalShadows=w,U.numPointShadows=P,U.numSpotShadows=I,U.numSpotMaps=D,s.version=oN++)}function d(p,g){let _=0,x=0,E=0,T=0,v=0;const h=g.matrixWorldInverse;for(let y=0,S=p.length;y<S;y++){const w=p[y];if(w.isDirectionalLight){const P=s.directional[_];P.direction.setFromMatrixPosition(w.matrixWorld),o.setFromMatrixPosition(w.target.matrixWorld),P.direction.sub(o),P.direction.transformDirection(h),_++}else if(w.isSpotLight){const P=s.spot[E];P.position.setFromMatrixPosition(w.matrixWorld),P.position.applyMatrix4(h),P.direction.setFromMatrixPosition(w.matrixWorld),o.setFromMatrixPosition(w.target.matrixWorld),P.direction.sub(o),P.direction.transformDirection(h),E++}else if(w.isRectAreaLight){const P=s.rectArea[T];P.position.setFromMatrixPosition(w.matrixWorld),P.position.applyMatrix4(h),u.identity(),l.copy(w.matrixWorld),l.premultiply(h),u.extractRotation(l),P.halfWidth.set(w.width*.5,0,0),P.halfHeight.set(0,w.height*.5,0),P.halfWidth.applyMatrix4(u),P.halfHeight.applyMatrix4(u),T++}else if(w.isPointLight){const P=s.point[x];P.position.setFromMatrixPosition(w.matrixWorld),P.position.applyMatrix4(h),x++}else if(w.isHemisphereLight){const P=s.hemi[v];P.direction.setFromMatrixPosition(w.matrixWorld),P.direction.transformDirection(h),v++}}}return{setup:f,setupView:d,state:s}}function $x(t,e){const n=new lN(t,e),i=[],s=[];function o(){i.length=0,s.length=0}function l(g){i.push(g)}function u(g){s.push(g)}function f(g){n.setup(i,g)}function d(g){n.setupView(i,g)}return{init:o,state:{lightsArray:i,shadowsArray:s,lights:n},setupLights:f,setupLightsView:d,pushLight:l,pushShadow:u}}function uN(t,e){let n=new WeakMap;function i(o,l=0){const u=n.get(o);let f;return u===void 0?(f=new $x(t,e),n.set(o,[f])):l>=u.length?(f=new $x(t,e),u.push(f)):f=u[l],f}function s(){n=new WeakMap}return{get:i,dispose:s}}class cN extends Gf{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=rb,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class fN extends Gf{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const dN=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,hN=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function pN(t,e,n){let i=new kM;const s=new Ct,o=new Ct,l=new yn,u=new cN({depthPacking:sb}),f=new fN,d={},p=n.maxTextureSize,g={[bs]:ei,[ei]:bs,[Fr]:Fr},_=new _o({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ct},radius:{value:4}},vertexShader:dN,fragmentShader:hN}),x=_.clone();x.defines.HORIZONTAL_PASS=1;const E=new Yr;E.setAttribute("position",new gi(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const T=new kr(E,_),v=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=gM;let h=this.type;this.render=function(P,I,D){if(v.enabled===!1||v.autoUpdate===!1&&v.needsUpdate===!1||P.length===0)return;const H=t.getRenderTarget(),C=t.getActiveCubeFace(),U=t.getActiveMipmapLevel(),oe=t.state;oe.setBlending(Rs),oe.buffers.color.setClear(1,1,1,1),oe.buffers.depth.setTest(!0),oe.setScissorTest(!1);const he=h!==Dr&&this.type===Dr,q=h===Dr&&this.type!==Dr;for(let J=0,ie=P.length;J<ie;J++){const fe=P[J],ee=fe.shadow;if(ee===void 0){console.warn("THREE.WebGLShadowMap:",fe,"has no shadow.");continue}if(ee.autoUpdate===!1&&ee.needsUpdate===!1)continue;s.copy(ee.mapSize);const z=ee.getFrameExtents();if(s.multiply(z),o.copy(ee.mapSize),(s.x>p||s.y>p)&&(s.x>p&&(o.x=Math.floor(p/z.x),s.x=o.x*z.x,ee.mapSize.x=o.x),s.y>p&&(o.y=Math.floor(p/z.y),s.y=o.y*z.y,ee.mapSize.y=o.y)),ee.map===null||he===!0||q===!0){const Y=this.type!==Dr?{minFilter:zn,magFilter:zn}:{};ee.map!==null&&ee.map.dispose(),ee.map=new go(s.x,s.y,Y),ee.map.texture.name=fe.name+".shadowMap",ee.camera.updateProjectionMatrix()}t.setRenderTarget(ee.map),t.clear();const te=ee.getViewportCount();for(let Y=0;Y<te;Y++){const V=ee.getViewport(Y);l.set(o.x*V.x,o.y*V.y,o.x*V.z,o.y*V.w),oe.viewport(l),ee.updateMatrices(fe,Y),i=ee.getFrustum(),w(I,D,ee.camera,fe,this.type)}ee.isPointLightShadow!==!0&&this.type===Dr&&y(ee,D),ee.needsUpdate=!1}h=this.type,v.needsUpdate=!1,t.setRenderTarget(H,C,U)};function y(P,I){const D=e.update(T);_.defines.VSM_SAMPLES!==P.blurSamples&&(_.defines.VSM_SAMPLES=P.blurSamples,x.defines.VSM_SAMPLES=P.blurSamples,_.needsUpdate=!0,x.needsUpdate=!0),P.mapPass===null&&(P.mapPass=new go(s.x,s.y)),_.uniforms.shadow_pass.value=P.map.texture,_.uniforms.resolution.value=P.mapSize,_.uniforms.radius.value=P.radius,t.setRenderTarget(P.mapPass),t.clear(),t.renderBufferDirect(I,null,D,_,T,null),x.uniforms.shadow_pass.value=P.mapPass.texture,x.uniforms.resolution.value=P.mapSize,x.uniforms.radius.value=P.radius,t.setRenderTarget(P.map),t.clear(),t.renderBufferDirect(I,null,D,x,T,null)}function S(P,I,D,H){let C=null;const U=D.isPointLight===!0?P.customDistanceMaterial:P.customDepthMaterial;if(U!==void 0)C=U;else if(C=D.isPointLight===!0?f:u,t.localClippingEnabled&&I.clipShadows===!0&&Array.isArray(I.clippingPlanes)&&I.clippingPlanes.length!==0||I.displacementMap&&I.displacementScale!==0||I.alphaMap&&I.alphaTest>0||I.map&&I.alphaTest>0){const oe=C.uuid,he=I.uuid;let q=d[oe];q===void 0&&(q={},d[oe]=q);let J=q[he];J===void 0&&(J=C.clone(),q[he]=J),C=J}if(C.visible=I.visible,C.wireframe=I.wireframe,H===Dr?C.side=I.shadowSide!==null?I.shadowSide:I.side:C.side=I.shadowSide!==null?I.shadowSide:g[I.side],C.alphaMap=I.alphaMap,C.alphaTest=I.alphaTest,C.map=I.map,C.clipShadows=I.clipShadows,C.clippingPlanes=I.clippingPlanes,C.clipIntersection=I.clipIntersection,C.displacementMap=I.displacementMap,C.displacementScale=I.displacementScale,C.displacementBias=I.displacementBias,C.wireframeLinewidth=I.wireframeLinewidth,C.linewidth=I.linewidth,D.isPointLight===!0&&C.isMeshDistanceMaterial===!0){const oe=t.properties.get(C);oe.light=D}return C}function w(P,I,D,H,C){if(P.visible===!1)return;if(P.layers.test(I.layers)&&(P.isMesh||P.isLine||P.isPoints)&&(P.castShadow||P.receiveShadow&&C===Dr)&&(!P.frustumCulled||i.intersectsObject(P))){P.modelViewMatrix.multiplyMatrices(D.matrixWorldInverse,P.matrixWorld);const he=e.update(P),q=P.material;if(Array.isArray(q)){const J=he.groups;for(let ie=0,fe=J.length;ie<fe;ie++){const ee=J[ie],z=q[ee.materialIndex];if(z&&z.visible){const te=S(P,z,H,C);t.renderBufferDirect(D,null,he,te,P,ee)}}}else if(q.visible){const J=S(P,q,H,C);t.renderBufferDirect(D,null,he,J,P,null)}}const oe=P.children;for(let he=0,q=oe.length;he<q;he++)w(oe[he],I,D,H,C)}}function mN(t,e,n){const i=n.isWebGL2;function s(){let B=!1;const we=new yn;let Q=null;const ve=new yn(0,0,0,0);return{setMask:function(Re){Q!==Re&&!B&&(t.colorMask(Re,Re,Re,Re),Q=Re)},setLocked:function(Re){B=Re},setClear:function(Re,_t,Ut,Jt,ti){ti===!0&&(Re*=Jt,_t*=Jt,Ut*=Jt),we.set(Re,_t,Ut,Jt),ve.equals(we)===!1&&(t.clearColor(Re,_t,Ut,Jt),ve.copy(we))},reset:function(){B=!1,Q=null,ve.set(-1,0,0,0)}}}function o(){let B=!1,we=null,Q=null,ve=null;return{setTest:function(Re){Re?je(t.DEPTH_TEST):ze(t.DEPTH_TEST)},setMask:function(Re){we!==Re&&!B&&(t.depthMask(Re),we=Re)},setFunc:function(Re){if(Q!==Re){switch(Re){case IP:t.depthFunc(t.NEVER);break;case NP:t.depthFunc(t.ALWAYS);break;case FP:t.depthFunc(t.LESS);break;case Zp:t.depthFunc(t.LEQUAL);break;case OP:t.depthFunc(t.EQUAL);break;case BP:t.depthFunc(t.GEQUAL);break;case zP:t.depthFunc(t.GREATER);break;case kP:t.depthFunc(t.NOTEQUAL);break;default:t.depthFunc(t.LEQUAL)}Q=Re}},setLocked:function(Re){B=Re},setClear:function(Re){ve!==Re&&(t.clearDepth(Re),ve=Re)},reset:function(){B=!1,we=null,Q=null,ve=null}}}function l(){let B=!1,we=null,Q=null,ve=null,Re=null,_t=null,Ut=null,Jt=null,ti=null;return{setTest:function(Ot){B||(Ot?je(t.STENCIL_TEST):ze(t.STENCIL_TEST))},setMask:function(Ot){we!==Ot&&!B&&(t.stencilMask(Ot),we=Ot)},setFunc:function(Ot,Si,_n){(Q!==Ot||ve!==Si||Re!==_n)&&(t.stencilFunc(Ot,Si,_n),Q=Ot,ve=Si,Re=_n)},setOp:function(Ot,Si,_n){(_t!==Ot||Ut!==Si||Jt!==_n)&&(t.stencilOp(Ot,Si,_n),_t=Ot,Ut=Si,Jt=_n)},setLocked:function(Ot){B=Ot},setClear:function(Ot){ti!==Ot&&(t.clearStencil(Ot),ti=Ot)},reset:function(){B=!1,we=null,Q=null,ve=null,Re=null,_t=null,Ut=null,Jt=null,ti=null}}}const u=new s,f=new o,d=new l,p=new WeakMap,g=new WeakMap;let _={},x={},E=new WeakMap,T=[],v=null,h=!1,y=null,S=null,w=null,P=null,I=null,D=null,H=null,C=!1,U=null,oe=null,he=null,q=null,J=null;const ie=t.getParameter(t.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let fe=!1,ee=0;const z=t.getParameter(t.VERSION);z.indexOf("WebGL")!==-1?(ee=parseFloat(/^WebGL (\d)/.exec(z)[1]),fe=ee>=1):z.indexOf("OpenGL ES")!==-1&&(ee=parseFloat(/^OpenGL ES (\d)/.exec(z)[1]),fe=ee>=2);let te=null,Y={};const V=t.getParameter(t.SCISSOR_BOX),$=t.getParameter(t.VIEWPORT),ye=new yn().fromArray(V),xe=new yn().fromArray($);function Me(B,we,Q,ve){const Re=new Uint8Array(4),_t=t.createTexture();t.bindTexture(B,_t),t.texParameteri(B,t.TEXTURE_MIN_FILTER,t.NEAREST),t.texParameteri(B,t.TEXTURE_MAG_FILTER,t.NEAREST);for(let Ut=0;Ut<Q;Ut++)i&&(B===t.TEXTURE_3D||B===t.TEXTURE_2D_ARRAY)?t.texImage3D(we,0,t.RGBA,1,1,ve,0,t.RGBA,t.UNSIGNED_BYTE,Re):t.texImage2D(we+Ut,0,t.RGBA,1,1,0,t.RGBA,t.UNSIGNED_BYTE,Re);return _t}const De={};De[t.TEXTURE_2D]=Me(t.TEXTURE_2D,t.TEXTURE_2D,1),De[t.TEXTURE_CUBE_MAP]=Me(t.TEXTURE_CUBE_MAP,t.TEXTURE_CUBE_MAP_POSITIVE_X,6),i&&(De[t.TEXTURE_2D_ARRAY]=Me(t.TEXTURE_2D_ARRAY,t.TEXTURE_2D_ARRAY,1,1),De[t.TEXTURE_3D]=Me(t.TEXTURE_3D,t.TEXTURE_3D,1,1)),u.setClear(0,0,0,1),f.setClear(1),d.setClear(0),je(t.DEPTH_TEST),f.setFunc(Zp),Ke(!1),vt(I0),je(t.CULL_FACE),Ne(Rs);function je(B){_[B]!==!0&&(t.enable(B),_[B]=!0)}function ze(B){_[B]!==!1&&(t.disable(B),_[B]=!1)}function mt(B,we){return x[B]!==we?(t.bindFramebuffer(B,we),x[B]=we,i&&(B===t.DRAW_FRAMEBUFFER&&(x[t.FRAMEBUFFER]=we),B===t.FRAMEBUFFER&&(x[t.DRAW_FRAMEBUFFER]=we)),!0):!1}function wn(B,we){let Q=T,ve=!1;if(B)if(Q=E.get(we),Q===void 0&&(Q=[],E.set(we,Q)),B.isWebGLMultipleRenderTargets){const Re=B.texture;if(Q.length!==Re.length||Q[0]!==t.COLOR_ATTACHMENT0){for(let _t=0,Ut=Re.length;_t<Ut;_t++)Q[_t]=t.COLOR_ATTACHMENT0+_t;Q.length=Re.length,ve=!0}}else Q[0]!==t.COLOR_ATTACHMENT0&&(Q[0]=t.COLOR_ATTACHMENT0,ve=!0);else Q[0]!==t.BACK&&(Q[0]=t.BACK,ve=!0);ve&&(n.isWebGL2?t.drawBuffers(Q):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(Q))}function et(B){return v!==B?(t.useProgram(B),v=B,!0):!1}const X={[ia]:t.FUNC_ADD,[EP]:t.FUNC_SUBTRACT,[TP]:t.FUNC_REVERSE_SUBTRACT};if(i)X[B0]=t.MIN,X[z0]=t.MAX;else{const B=e.get("EXT_blend_minmax");B!==null&&(X[B0]=B.MIN_EXT,X[z0]=B.MAX_EXT)}const rn={[wP]:t.ZERO,[AP]:t.ONE,[RP]:t.SRC_COLOR,[_M]:t.SRC_ALPHA,[DP]:t.SRC_ALPHA_SATURATE,[bP]:t.DST_COLOR,[LP]:t.DST_ALPHA,[CP]:t.ONE_MINUS_SRC_COLOR,[vM]:t.ONE_MINUS_SRC_ALPHA,[UP]:t.ONE_MINUS_DST_COLOR,[PP]:t.ONE_MINUS_DST_ALPHA};function Ne(B,we,Q,ve,Re,_t,Ut,Jt){if(B===Rs){h===!0&&(ze(t.BLEND),h=!1);return}if(h===!1&&(je(t.BLEND),h=!0),B!==MP){if(B!==y||Jt!==C){if((S!==ia||I!==ia)&&(t.blendEquation(t.FUNC_ADD),S=ia,I=ia),Jt)switch(B){case Ta:t.blendFuncSeparate(t.ONE,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case N0:t.blendFunc(t.ONE,t.ONE);break;case F0:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case O0:t.blendFuncSeparate(t.ZERO,t.SRC_COLOR,t.ZERO,t.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",B);break}else switch(B){case Ta:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case N0:t.blendFunc(t.SRC_ALPHA,t.ONE);break;case F0:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case O0:t.blendFunc(t.ZERO,t.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",B);break}w=null,P=null,D=null,H=null,y=B,C=Jt}return}Re=Re||we,_t=_t||Q,Ut=Ut||ve,(we!==S||Re!==I)&&(t.blendEquationSeparate(X[we],X[Re]),S=we,I=Re),(Q!==w||ve!==P||_t!==D||Ut!==H)&&(t.blendFuncSeparate(rn[Q],rn[ve],rn[_t],rn[Ut]),w=Q,P=ve,D=_t,H=Ut),y=B,C=!1}function $e(B,we){B.side===Fr?ze(t.CULL_FACE):je(t.CULL_FACE);let Q=B.side===ei;we&&(Q=!Q),Ke(Q),B.blending===Ta&&B.transparent===!1?Ne(Rs):Ne(B.blending,B.blendEquation,B.blendSrc,B.blendDst,B.blendEquationAlpha,B.blendSrcAlpha,B.blendDstAlpha,B.premultipliedAlpha),f.setFunc(B.depthFunc),f.setTest(B.depthTest),f.setMask(B.depthWrite),u.setMask(B.colorWrite);const ve=B.stencilWrite;d.setTest(ve),ve&&(d.setMask(B.stencilWriteMask),d.setFunc(B.stencilFunc,B.stencilRef,B.stencilFuncMask),d.setOp(B.stencilFail,B.stencilZFail,B.stencilZPass)),it(B.polygonOffset,B.polygonOffsetFactor,B.polygonOffsetUnits),B.alphaToCoverage===!0?je(t.SAMPLE_ALPHA_TO_COVERAGE):ze(t.SAMPLE_ALPHA_TO_COVERAGE)}function Ke(B){U!==B&&(B?t.frontFace(t.CW):t.frontFace(t.CCW),U=B)}function vt(B){B!==xP?(je(t.CULL_FACE),B!==oe&&(B===I0?t.cullFace(t.BACK):B===SP?t.cullFace(t.FRONT):t.cullFace(t.FRONT_AND_BACK))):ze(t.CULL_FACE),oe=B}function ut(B){B!==he&&(fe&&t.lineWidth(B),he=B)}function it(B,we,Q){B?(je(t.POLYGON_OFFSET_FILL),(q!==we||J!==Q)&&(t.polygonOffset(we,Q),q=we,J=Q)):ze(t.POLYGON_OFFSET_FILL)}function xt(B){B?je(t.SCISSOR_TEST):ze(t.SCISSOR_TEST)}function Et(B){B===void 0&&(B=t.TEXTURE0+ie-1),te!==B&&(t.activeTexture(B),te=B)}function qt(B,we,Q){Q===void 0&&(te===null?Q=t.TEXTURE0+ie-1:Q=te);let ve=Y[Q];ve===void 0&&(ve={type:void 0,texture:void 0},Y[Q]=ve),(ve.type!==B||ve.texture!==we)&&(te!==Q&&(t.activeTexture(Q),te=Q),t.bindTexture(B,we||De[B]),ve.type=B,ve.texture=we)}function N(){const B=Y[te];B!==void 0&&B.type!==void 0&&(t.bindTexture(B.type,null),B.type=void 0,B.texture=void 0)}function L(){try{t.compressedTexImage2D.apply(t,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function ne(){try{t.compressedTexImage3D.apply(t,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function _e(){try{t.texSubImage2D.apply(t,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function ge(){try{t.texSubImage3D.apply(t,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function Se(){try{t.compressedTexSubImage2D.apply(t,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function Fe(){try{t.compressedTexSubImage3D.apply(t,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function Te(){try{t.texStorage2D.apply(t,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function le(){try{t.texStorage3D.apply(t,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function Oe(){try{t.texImage2D.apply(t,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function Be(){try{t.texImage3D.apply(t,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function ke(B){ye.equals(B)===!1&&(t.scissor(B.x,B.y,B.z,B.w),ye.copy(B))}function be(B){xe.equals(B)===!1&&(t.viewport(B.x,B.y,B.z,B.w),xe.copy(B))}function Ue(B,we){let Q=g.get(we);Q===void 0&&(Q=new WeakMap,g.set(we,Q));let ve=Q.get(B);ve===void 0&&(ve=t.getUniformBlockIndex(we,B.name),Q.set(B,ve))}function tt(B,we){const ve=g.get(we).get(B);p.get(we)!==ve&&(t.uniformBlockBinding(we,ve,B.__bindingPointIndex),p.set(we,ve))}function At(){t.disable(t.BLEND),t.disable(t.CULL_FACE),t.disable(t.DEPTH_TEST),t.disable(t.POLYGON_OFFSET_FILL),t.disable(t.SCISSOR_TEST),t.disable(t.STENCIL_TEST),t.disable(t.SAMPLE_ALPHA_TO_COVERAGE),t.blendEquation(t.FUNC_ADD),t.blendFunc(t.ONE,t.ZERO),t.blendFuncSeparate(t.ONE,t.ZERO,t.ONE,t.ZERO),t.colorMask(!0,!0,!0,!0),t.clearColor(0,0,0,0),t.depthMask(!0),t.depthFunc(t.LESS),t.clearDepth(1),t.stencilMask(4294967295),t.stencilFunc(t.ALWAYS,0,4294967295),t.stencilOp(t.KEEP,t.KEEP,t.KEEP),t.clearStencil(0),t.cullFace(t.BACK),t.frontFace(t.CCW),t.polygonOffset(0,0),t.activeTexture(t.TEXTURE0),t.bindFramebuffer(t.FRAMEBUFFER,null),i===!0&&(t.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),t.bindFramebuffer(t.READ_FRAMEBUFFER,null)),t.useProgram(null),t.lineWidth(1),t.scissor(0,0,t.canvas.width,t.canvas.height),t.viewport(0,0,t.canvas.width,t.canvas.height),_={},te=null,Y={},x={},E=new WeakMap,T=[],v=null,h=!1,y=null,S=null,w=null,P=null,I=null,D=null,H=null,C=!1,U=null,oe=null,he=null,q=null,J=null,ye.set(0,0,t.canvas.width,t.canvas.height),xe.set(0,0,t.canvas.width,t.canvas.height),u.reset(),f.reset(),d.reset()}return{buffers:{color:u,depth:f,stencil:d},enable:je,disable:ze,bindFramebuffer:mt,drawBuffers:wn,useProgram:et,setBlending:Ne,setMaterial:$e,setFlipSided:Ke,setCullFace:vt,setLineWidth:ut,setPolygonOffset:it,setScissorTest:xt,activeTexture:Et,bindTexture:qt,unbindTexture:N,compressedTexImage2D:L,compressedTexImage3D:ne,texImage2D:Oe,texImage3D:Be,updateUBOMapping:Ue,uniformBlockBinding:tt,texStorage2D:Te,texStorage3D:le,texSubImage2D:_e,texSubImage3D:ge,compressedTexSubImage2D:Se,compressedTexSubImage3D:Fe,scissor:ke,viewport:be,reset:At}}function gN(t,e,n,i,s,o,l){const u=s.isWebGL2,f=s.maxTextures,d=s.maxCubemapSize,p=s.maxTextureSize,g=s.maxSamples,_=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,x=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),E=new WeakMap;let T;const v=new WeakMap;let h=!1;try{h=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function y(N,L){return h?new OffscreenCanvas(N,L):Mf("canvas")}function S(N,L,ne,_e){let ge=1;if((N.width>_e||N.height>_e)&&(ge=_e/Math.max(N.width,N.height)),ge<1||L===!0)if(typeof HTMLImageElement<"u"&&N instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&N instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&N instanceof ImageBitmap){const Se=L?rm:Math.floor,Fe=Se(ge*N.width),Te=Se(ge*N.height);T===void 0&&(T=y(Fe,Te));const le=ne?y(Fe,Te):T;return le.width=Fe,le.height=Te,le.getContext("2d").drawImage(N,0,0,Fe,Te),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+N.width+"x"+N.height+") to ("+Fe+"x"+Te+")."),le}else return"data"in N&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+N.width+"x"+N.height+")."),N;return N}function w(N){return dx(N.width)&&dx(N.height)}function P(N){return u?!1:N.wrapS!==Qi||N.wrapT!==Qi||N.minFilter!==zn&&N.minFilter!==Di}function I(N,L){return N.generateMipmaps&&L&&N.minFilter!==zn&&N.minFilter!==Di}function D(N){t.generateMipmap(N)}function H(N,L,ne,_e,ge=!1){if(u===!1)return L;if(N!==null){if(t[N]!==void 0)return t[N];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+N+"'")}let Se=L;return L===t.RED&&(ne===t.FLOAT&&(Se=t.R32F),ne===t.HALF_FLOAT&&(Se=t.R16F),ne===t.UNSIGNED_BYTE&&(Se=t.R8)),L===t.RG&&(ne===t.FLOAT&&(Se=t.RG32F),ne===t.HALF_FLOAT&&(Se=t.RG16F),ne===t.UNSIGNED_BYTE&&(Se=t.RG8)),L===t.RGBA&&(ne===t.FLOAT&&(Se=t.RGBA32F),ne===t.HALF_FLOAT&&(Se=t.RGBA16F),ne===t.UNSIGNED_BYTE&&(Se=_e===ot&&ge===!1?t.SRGB8_ALPHA8:t.RGBA8),ne===t.UNSIGNED_SHORT_4_4_4_4&&(Se=t.RGBA4),ne===t.UNSIGNED_SHORT_5_5_5_1&&(Se=t.RGB5_A1)),(Se===t.R16F||Se===t.R32F||Se===t.RG16F||Se===t.RG32F||Se===t.RGBA16F||Se===t.RGBA32F)&&e.get("EXT_color_buffer_float"),Se}function C(N,L,ne){return I(N,ne)===!0||N.isFramebufferTexture&&N.minFilter!==zn&&N.minFilter!==Di?Math.log2(Math.max(L.width,L.height))+1:N.mipmaps!==void 0&&N.mipmaps.length>0?N.mipmaps.length:N.isCompressedTexture&&Array.isArray(N.image)?L.mipmaps.length:1}function U(N){return N===zn||N===k0||N===Lh?t.NEAREST:t.LINEAR}function oe(N){const L=N.target;L.removeEventListener("dispose",oe),q(L),L.isVideoTexture&&E.delete(L)}function he(N){const L=N.target;L.removeEventListener("dispose",he),ie(L)}function q(N){const L=i.get(N);if(L.__webglInit===void 0)return;const ne=N.source,_e=v.get(ne);if(_e){const ge=_e[L.__cacheKey];ge.usedTimes--,ge.usedTimes===0&&J(N),Object.keys(_e).length===0&&v.delete(ne)}i.remove(N)}function J(N){const L=i.get(N);t.deleteTexture(L.__webglTexture);const ne=N.source,_e=v.get(ne);delete _e[L.__cacheKey],l.memory.textures--}function ie(N){const L=N.texture,ne=i.get(N),_e=i.get(L);if(_e.__webglTexture!==void 0&&(t.deleteTexture(_e.__webglTexture),l.memory.textures--),N.depthTexture&&N.depthTexture.dispose(),N.isWebGLCubeRenderTarget)for(let ge=0;ge<6;ge++)t.deleteFramebuffer(ne.__webglFramebuffer[ge]),ne.__webglDepthbuffer&&t.deleteRenderbuffer(ne.__webglDepthbuffer[ge]);else{if(t.deleteFramebuffer(ne.__webglFramebuffer),ne.__webglDepthbuffer&&t.deleteRenderbuffer(ne.__webglDepthbuffer),ne.__webglMultisampledFramebuffer&&t.deleteFramebuffer(ne.__webglMultisampledFramebuffer),ne.__webglColorRenderbuffer)for(let ge=0;ge<ne.__webglColorRenderbuffer.length;ge++)ne.__webglColorRenderbuffer[ge]&&t.deleteRenderbuffer(ne.__webglColorRenderbuffer[ge]);ne.__webglDepthRenderbuffer&&t.deleteRenderbuffer(ne.__webglDepthRenderbuffer)}if(N.isWebGLMultipleRenderTargets)for(let ge=0,Se=L.length;ge<Se;ge++){const Fe=i.get(L[ge]);Fe.__webglTexture&&(t.deleteTexture(Fe.__webglTexture),l.memory.textures--),i.remove(L[ge])}i.remove(L),i.remove(N)}let fe=0;function ee(){fe=0}function z(){const N=fe;return N>=f&&console.warn("THREE.WebGLTextures: Trying to use "+N+" texture units while this GPU supports only "+f),fe+=1,N}function te(N){const L=[];return L.push(N.wrapS),L.push(N.wrapT),L.push(N.wrapR||0),L.push(N.magFilter),L.push(N.minFilter),L.push(N.anisotropy),L.push(N.internalFormat),L.push(N.format),L.push(N.type),L.push(N.generateMipmaps),L.push(N.premultiplyAlpha),L.push(N.flipY),L.push(N.unpackAlignment),L.push(N.colorSpace),L.join()}function Y(N,L){const ne=i.get(N);if(N.isVideoTexture&&Et(N),N.isRenderTargetTexture===!1&&N.version>0&&ne.__version!==N.version){const _e=N.image;if(_e===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(_e.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{mt(ne,N,L);return}}n.bindTexture(t.TEXTURE_2D,ne.__webglTexture,t.TEXTURE0+L)}function V(N,L){const ne=i.get(N);if(N.version>0&&ne.__version!==N.version){mt(ne,N,L);return}n.bindTexture(t.TEXTURE_2D_ARRAY,ne.__webglTexture,t.TEXTURE0+L)}function $(N,L){const ne=i.get(N);if(N.version>0&&ne.__version!==N.version){mt(ne,N,L);return}n.bindTexture(t.TEXTURE_3D,ne.__webglTexture,t.TEXTURE0+L)}function ye(N,L){const ne=i.get(N);if(N.version>0&&ne.__version!==N.version){wn(ne,N,L);return}n.bindTexture(t.TEXTURE_CUBE_MAP,ne.__webglTexture,t.TEXTURE0+L)}const xe={[em]:t.REPEAT,[Qi]:t.CLAMP_TO_EDGE,[tm]:t.MIRRORED_REPEAT},Me={[zn]:t.NEAREST,[k0]:t.NEAREST_MIPMAP_NEAREST,[Lh]:t.NEAREST_MIPMAP_LINEAR,[Di]:t.LINEAR,[YP]:t.LINEAR_MIPMAP_NEAREST,[Jl]:t.LINEAR_MIPMAP_LINEAR},De={[ub]:t.NEVER,[gb]:t.ALWAYS,[cb]:t.LESS,[db]:t.LEQUAL,[fb]:t.EQUAL,[mb]:t.GEQUAL,[hb]:t.GREATER,[pb]:t.NOTEQUAL};function je(N,L,ne){if(ne?(t.texParameteri(N,t.TEXTURE_WRAP_S,xe[L.wrapS]),t.texParameteri(N,t.TEXTURE_WRAP_T,xe[L.wrapT]),(N===t.TEXTURE_3D||N===t.TEXTURE_2D_ARRAY)&&t.texParameteri(N,t.TEXTURE_WRAP_R,xe[L.wrapR]),t.texParameteri(N,t.TEXTURE_MAG_FILTER,Me[L.magFilter]),t.texParameteri(N,t.TEXTURE_MIN_FILTER,Me[L.minFilter])):(t.texParameteri(N,t.TEXTURE_WRAP_S,t.CLAMP_TO_EDGE),t.texParameteri(N,t.TEXTURE_WRAP_T,t.CLAMP_TO_EDGE),(N===t.TEXTURE_3D||N===t.TEXTURE_2D_ARRAY)&&t.texParameteri(N,t.TEXTURE_WRAP_R,t.CLAMP_TO_EDGE),(L.wrapS!==Qi||L.wrapT!==Qi)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),t.texParameteri(N,t.TEXTURE_MAG_FILTER,U(L.magFilter)),t.texParameteri(N,t.TEXTURE_MIN_FILTER,U(L.minFilter)),L.minFilter!==zn&&L.minFilter!==Di&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),L.compareFunction&&(t.texParameteri(N,t.TEXTURE_COMPARE_MODE,t.COMPARE_REF_TO_TEXTURE),t.texParameteri(N,t.TEXTURE_COMPARE_FUNC,De[L.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){const _e=e.get("EXT_texture_filter_anisotropic");if(L.magFilter===zn||L.minFilter!==Lh&&L.minFilter!==Jl||L.type===vs&&e.has("OES_texture_float_linear")===!1||u===!1&&L.type===eu&&e.has("OES_texture_half_float_linear")===!1)return;(L.anisotropy>1||i.get(L).__currentAnisotropy)&&(t.texParameterf(N,_e.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(L.anisotropy,s.getMaxAnisotropy())),i.get(L).__currentAnisotropy=L.anisotropy)}}function ze(N,L){let ne=!1;N.__webglInit===void 0&&(N.__webglInit=!0,L.addEventListener("dispose",oe));const _e=L.source;let ge=v.get(_e);ge===void 0&&(ge={},v.set(_e,ge));const Se=te(L);if(Se!==N.__cacheKey){ge[Se]===void 0&&(ge[Se]={texture:t.createTexture(),usedTimes:0},l.memory.textures++,ne=!0),ge[Se].usedTimes++;const Fe=ge[N.__cacheKey];Fe!==void 0&&(ge[N.__cacheKey].usedTimes--,Fe.usedTimes===0&&J(L)),N.__cacheKey=Se,N.__webglTexture=ge[Se].texture}return ne}function mt(N,L,ne){let _e=t.TEXTURE_2D;(L.isDataArrayTexture||L.isCompressedArrayTexture)&&(_e=t.TEXTURE_2D_ARRAY),L.isData3DTexture&&(_e=t.TEXTURE_3D);const ge=ze(N,L),Se=L.source;n.bindTexture(_e,N.__webglTexture,t.TEXTURE0+ne);const Fe=i.get(Se);if(Se.version!==Fe.__version||ge===!0){n.activeTexture(t.TEXTURE0+ne),t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,L.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,L.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,L.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,t.NONE);const Te=P(L)&&w(L.image)===!1;let le=S(L.image,Te,!1,p);le=qt(L,le);const Oe=w(le)||u,Be=o.convert(L.format,L.colorSpace);let ke=o.convert(L.type),be=H(L.internalFormat,Be,ke,L.colorSpace);je(_e,L,Oe);let Ue;const tt=L.mipmaps,At=u&&L.isVideoTexture!==!0,B=Fe.__version===void 0||ge===!0,we=C(L,le,Oe);if(L.isDepthTexture)be=t.DEPTH_COMPONENT,u?L.type===vs?be=t.DEPTH_COMPONENT32F:L.type===_s?be=t.DEPTH_COMPONENT24:L.type===oo?be=t.DEPTH24_STENCIL8:be=t.DEPTH_COMPONENT16:L.type===vs&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),L.format===ao&&be===t.DEPTH_COMPONENT&&L.type!==ig&&L.type!==_s&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),L.type=_s,ke=o.convert(L.type)),L.format===Fa&&be===t.DEPTH_COMPONENT&&(be=t.DEPTH_STENCIL,L.type!==oo&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),L.type=oo,ke=o.convert(L.type))),B&&(At?n.texStorage2D(t.TEXTURE_2D,1,be,le.width,le.height):n.texImage2D(t.TEXTURE_2D,0,be,le.width,le.height,0,Be,ke,null));else if(L.isDataTexture)if(tt.length>0&&Oe){At&&B&&n.texStorage2D(t.TEXTURE_2D,we,be,tt[0].width,tt[0].height);for(let Q=0,ve=tt.length;Q<ve;Q++)Ue=tt[Q],At?n.texSubImage2D(t.TEXTURE_2D,Q,0,0,Ue.width,Ue.height,Be,ke,Ue.data):n.texImage2D(t.TEXTURE_2D,Q,be,Ue.width,Ue.height,0,Be,ke,Ue.data);L.generateMipmaps=!1}else At?(B&&n.texStorage2D(t.TEXTURE_2D,we,be,le.width,le.height),n.texSubImage2D(t.TEXTURE_2D,0,0,0,le.width,le.height,Be,ke,le.data)):n.texImage2D(t.TEXTURE_2D,0,be,le.width,le.height,0,Be,ke,le.data);else if(L.isCompressedTexture)if(L.isCompressedArrayTexture){At&&B&&n.texStorage3D(t.TEXTURE_2D_ARRAY,we,be,tt[0].width,tt[0].height,le.depth);for(let Q=0,ve=tt.length;Q<ve;Q++)Ue=tt[Q],L.format!==Ji?Be!==null?At?n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,Q,0,0,0,Ue.width,Ue.height,le.depth,Be,Ue.data,0,0):n.compressedTexImage3D(t.TEXTURE_2D_ARRAY,Q,be,Ue.width,Ue.height,le.depth,0,Ue.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):At?n.texSubImage3D(t.TEXTURE_2D_ARRAY,Q,0,0,0,Ue.width,Ue.height,le.depth,Be,ke,Ue.data):n.texImage3D(t.TEXTURE_2D_ARRAY,Q,be,Ue.width,Ue.height,le.depth,0,Be,ke,Ue.data)}else{At&&B&&n.texStorage2D(t.TEXTURE_2D,we,be,tt[0].width,tt[0].height);for(let Q=0,ve=tt.length;Q<ve;Q++)Ue=tt[Q],L.format!==Ji?Be!==null?At?n.compressedTexSubImage2D(t.TEXTURE_2D,Q,0,0,Ue.width,Ue.height,Be,Ue.data):n.compressedTexImage2D(t.TEXTURE_2D,Q,be,Ue.width,Ue.height,0,Ue.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):At?n.texSubImage2D(t.TEXTURE_2D,Q,0,0,Ue.width,Ue.height,Be,ke,Ue.data):n.texImage2D(t.TEXTURE_2D,Q,be,Ue.width,Ue.height,0,Be,ke,Ue.data)}else if(L.isDataArrayTexture)At?(B&&n.texStorage3D(t.TEXTURE_2D_ARRAY,we,be,le.width,le.height,le.depth),n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,0,le.width,le.height,le.depth,Be,ke,le.data)):n.texImage3D(t.TEXTURE_2D_ARRAY,0,be,le.width,le.height,le.depth,0,Be,ke,le.data);else if(L.isData3DTexture)At?(B&&n.texStorage3D(t.TEXTURE_3D,we,be,le.width,le.height,le.depth),n.texSubImage3D(t.TEXTURE_3D,0,0,0,0,le.width,le.height,le.depth,Be,ke,le.data)):n.texImage3D(t.TEXTURE_3D,0,be,le.width,le.height,le.depth,0,Be,ke,le.data);else if(L.isFramebufferTexture){if(B)if(At)n.texStorage2D(t.TEXTURE_2D,we,be,le.width,le.height);else{let Q=le.width,ve=le.height;for(let Re=0;Re<we;Re++)n.texImage2D(t.TEXTURE_2D,Re,be,Q,ve,0,Be,ke,null),Q>>=1,ve>>=1}}else if(tt.length>0&&Oe){At&&B&&n.texStorage2D(t.TEXTURE_2D,we,be,tt[0].width,tt[0].height);for(let Q=0,ve=tt.length;Q<ve;Q++)Ue=tt[Q],At?n.texSubImage2D(t.TEXTURE_2D,Q,0,0,Be,ke,Ue):n.texImage2D(t.TEXTURE_2D,Q,be,Be,ke,Ue);L.generateMipmaps=!1}else At?(B&&n.texStorage2D(t.TEXTURE_2D,we,be,le.width,le.height),n.texSubImage2D(t.TEXTURE_2D,0,0,0,Be,ke,le)):n.texImage2D(t.TEXTURE_2D,0,be,Be,ke,le);I(L,Oe)&&D(_e),Fe.__version=Se.version,L.onUpdate&&L.onUpdate(L)}N.__version=L.version}function wn(N,L,ne){if(L.image.length!==6)return;const _e=ze(N,L),ge=L.source;n.bindTexture(t.TEXTURE_CUBE_MAP,N.__webglTexture,t.TEXTURE0+ne);const Se=i.get(ge);if(ge.version!==Se.__version||_e===!0){n.activeTexture(t.TEXTURE0+ne),t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,L.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,L.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,L.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,t.NONE);const Fe=L.isCompressedTexture||L.image[0].isCompressedTexture,Te=L.image[0]&&L.image[0].isDataTexture,le=[];for(let Q=0;Q<6;Q++)!Fe&&!Te?le[Q]=S(L.image[Q],!1,!0,d):le[Q]=Te?L.image[Q].image:L.image[Q],le[Q]=qt(L,le[Q]);const Oe=le[0],Be=w(Oe)||u,ke=o.convert(L.format,L.colorSpace),be=o.convert(L.type),Ue=H(L.internalFormat,ke,be,L.colorSpace),tt=u&&L.isVideoTexture!==!0,At=Se.__version===void 0||_e===!0;let B=C(L,Oe,Be);je(t.TEXTURE_CUBE_MAP,L,Be);let we;if(Fe){tt&&At&&n.texStorage2D(t.TEXTURE_CUBE_MAP,B,Ue,Oe.width,Oe.height);for(let Q=0;Q<6;Q++){we=le[Q].mipmaps;for(let ve=0;ve<we.length;ve++){const Re=we[ve];L.format!==Ji?ke!==null?tt?n.compressedTexSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Q,ve,0,0,Re.width,Re.height,ke,Re.data):n.compressedTexImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Q,ve,Ue,Re.width,Re.height,0,Re.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):tt?n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Q,ve,0,0,Re.width,Re.height,ke,be,Re.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Q,ve,Ue,Re.width,Re.height,0,ke,be,Re.data)}}}else{we=L.mipmaps,tt&&At&&(we.length>0&&B++,n.texStorage2D(t.TEXTURE_CUBE_MAP,B,Ue,le[0].width,le[0].height));for(let Q=0;Q<6;Q++)if(Te){tt?n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,0,0,le[Q].width,le[Q].height,ke,be,le[Q].data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,Ue,le[Q].width,le[Q].height,0,ke,be,le[Q].data);for(let ve=0;ve<we.length;ve++){const _t=we[ve].image[Q].image;tt?n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Q,ve+1,0,0,_t.width,_t.height,ke,be,_t.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Q,ve+1,Ue,_t.width,_t.height,0,ke,be,_t.data)}}else{tt?n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,0,0,ke,be,le[Q]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,Ue,ke,be,le[Q]);for(let ve=0;ve<we.length;ve++){const Re=we[ve];tt?n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Q,ve+1,0,0,ke,be,Re.image[Q]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Q,ve+1,Ue,ke,be,Re.image[Q])}}}I(L,Be)&&D(t.TEXTURE_CUBE_MAP),Se.__version=ge.version,L.onUpdate&&L.onUpdate(L)}N.__version=L.version}function et(N,L,ne,_e,ge){const Se=o.convert(ne.format,ne.colorSpace),Fe=o.convert(ne.type),Te=H(ne.internalFormat,Se,Fe,ne.colorSpace);i.get(L).__hasExternalTextures||(ge===t.TEXTURE_3D||ge===t.TEXTURE_2D_ARRAY?n.texImage3D(ge,0,Te,L.width,L.height,L.depth,0,Se,Fe,null):n.texImage2D(ge,0,Te,L.width,L.height,0,Se,Fe,null)),n.bindFramebuffer(t.FRAMEBUFFER,N),xt(L)?_.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,_e,ge,i.get(ne).__webglTexture,0,it(L)):(ge===t.TEXTURE_2D||ge>=t.TEXTURE_CUBE_MAP_POSITIVE_X&&ge<=t.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&t.framebufferTexture2D(t.FRAMEBUFFER,_e,ge,i.get(ne).__webglTexture,0),n.bindFramebuffer(t.FRAMEBUFFER,null)}function X(N,L,ne){if(t.bindRenderbuffer(t.RENDERBUFFER,N),L.depthBuffer&&!L.stencilBuffer){let _e=t.DEPTH_COMPONENT16;if(ne||xt(L)){const ge=L.depthTexture;ge&&ge.isDepthTexture&&(ge.type===vs?_e=t.DEPTH_COMPONENT32F:ge.type===_s&&(_e=t.DEPTH_COMPONENT24));const Se=it(L);xt(L)?_.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,Se,_e,L.width,L.height):t.renderbufferStorageMultisample(t.RENDERBUFFER,Se,_e,L.width,L.height)}else t.renderbufferStorage(t.RENDERBUFFER,_e,L.width,L.height);t.framebufferRenderbuffer(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.RENDERBUFFER,N)}else if(L.depthBuffer&&L.stencilBuffer){const _e=it(L);ne&&xt(L)===!1?t.renderbufferStorageMultisample(t.RENDERBUFFER,_e,t.DEPTH24_STENCIL8,L.width,L.height):xt(L)?_.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,_e,t.DEPTH24_STENCIL8,L.width,L.height):t.renderbufferStorage(t.RENDERBUFFER,t.DEPTH_STENCIL,L.width,L.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.RENDERBUFFER,N)}else{const _e=L.isWebGLMultipleRenderTargets===!0?L.texture:[L.texture];for(let ge=0;ge<_e.length;ge++){const Se=_e[ge],Fe=o.convert(Se.format,Se.colorSpace),Te=o.convert(Se.type),le=H(Se.internalFormat,Fe,Te,Se.colorSpace),Oe=it(L);ne&&xt(L)===!1?t.renderbufferStorageMultisample(t.RENDERBUFFER,Oe,le,L.width,L.height):xt(L)?_.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,Oe,le,L.width,L.height):t.renderbufferStorage(t.RENDERBUFFER,le,L.width,L.height)}}t.bindRenderbuffer(t.RENDERBUFFER,null)}function rn(N,L){if(L&&L.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(n.bindFramebuffer(t.FRAMEBUFFER,N),!(L.depthTexture&&L.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(L.depthTexture).__webglTexture||L.depthTexture.image.width!==L.width||L.depthTexture.image.height!==L.height)&&(L.depthTexture.image.width=L.width,L.depthTexture.image.height=L.height,L.depthTexture.needsUpdate=!0),Y(L.depthTexture,0);const _e=i.get(L.depthTexture).__webglTexture,ge=it(L);if(L.depthTexture.format===ao)xt(L)?_.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.TEXTURE_2D,_e,0,ge):t.framebufferTexture2D(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.TEXTURE_2D,_e,0);else if(L.depthTexture.format===Fa)xt(L)?_.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.TEXTURE_2D,_e,0,ge):t.framebufferTexture2D(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.TEXTURE_2D,_e,0);else throw new Error("Unknown depthTexture format")}function Ne(N){const L=i.get(N),ne=N.isWebGLCubeRenderTarget===!0;if(N.depthTexture&&!L.__autoAllocateDepthBuffer){if(ne)throw new Error("target.depthTexture not supported in Cube render targets");rn(L.__webglFramebuffer,N)}else if(ne){L.__webglDepthbuffer=[];for(let _e=0;_e<6;_e++)n.bindFramebuffer(t.FRAMEBUFFER,L.__webglFramebuffer[_e]),L.__webglDepthbuffer[_e]=t.createRenderbuffer(),X(L.__webglDepthbuffer[_e],N,!1)}else n.bindFramebuffer(t.FRAMEBUFFER,L.__webglFramebuffer),L.__webglDepthbuffer=t.createRenderbuffer(),X(L.__webglDepthbuffer,N,!1);n.bindFramebuffer(t.FRAMEBUFFER,null)}function $e(N,L,ne){const _e=i.get(N);L!==void 0&&et(_e.__webglFramebuffer,N,N.texture,t.COLOR_ATTACHMENT0,t.TEXTURE_2D),ne!==void 0&&Ne(N)}function Ke(N){const L=N.texture,ne=i.get(N),_e=i.get(L);N.addEventListener("dispose",he),N.isWebGLMultipleRenderTargets!==!0&&(_e.__webglTexture===void 0&&(_e.__webglTexture=t.createTexture()),_e.__version=L.version,l.memory.textures++);const ge=N.isWebGLCubeRenderTarget===!0,Se=N.isWebGLMultipleRenderTargets===!0,Fe=w(N)||u;if(ge){ne.__webglFramebuffer=[];for(let Te=0;Te<6;Te++)ne.__webglFramebuffer[Te]=t.createFramebuffer()}else{if(ne.__webglFramebuffer=t.createFramebuffer(),Se)if(s.drawBuffers){const Te=N.texture;for(let le=0,Oe=Te.length;le<Oe;le++){const Be=i.get(Te[le]);Be.__webglTexture===void 0&&(Be.__webglTexture=t.createTexture(),l.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(u&&N.samples>0&&xt(N)===!1){const Te=Se?L:[L];ne.__webglMultisampledFramebuffer=t.createFramebuffer(),ne.__webglColorRenderbuffer=[],n.bindFramebuffer(t.FRAMEBUFFER,ne.__webglMultisampledFramebuffer);for(let le=0;le<Te.length;le++){const Oe=Te[le];ne.__webglColorRenderbuffer[le]=t.createRenderbuffer(),t.bindRenderbuffer(t.RENDERBUFFER,ne.__webglColorRenderbuffer[le]);const Be=o.convert(Oe.format,Oe.colorSpace),ke=o.convert(Oe.type),be=H(Oe.internalFormat,Be,ke,Oe.colorSpace,N.isXRRenderTarget===!0),Ue=it(N);t.renderbufferStorageMultisample(t.RENDERBUFFER,Ue,be,N.width,N.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+le,t.RENDERBUFFER,ne.__webglColorRenderbuffer[le])}t.bindRenderbuffer(t.RENDERBUFFER,null),N.depthBuffer&&(ne.__webglDepthRenderbuffer=t.createRenderbuffer(),X(ne.__webglDepthRenderbuffer,N,!0)),n.bindFramebuffer(t.FRAMEBUFFER,null)}}if(ge){n.bindTexture(t.TEXTURE_CUBE_MAP,_e.__webglTexture),je(t.TEXTURE_CUBE_MAP,L,Fe);for(let Te=0;Te<6;Te++)et(ne.__webglFramebuffer[Te],N,L,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+Te);I(L,Fe)&&D(t.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(Se){const Te=N.texture;for(let le=0,Oe=Te.length;le<Oe;le++){const Be=Te[le],ke=i.get(Be);n.bindTexture(t.TEXTURE_2D,ke.__webglTexture),je(t.TEXTURE_2D,Be,Fe),et(ne.__webglFramebuffer,N,Be,t.COLOR_ATTACHMENT0+le,t.TEXTURE_2D),I(Be,Fe)&&D(t.TEXTURE_2D)}n.unbindTexture()}else{let Te=t.TEXTURE_2D;(N.isWebGL3DRenderTarget||N.isWebGLArrayRenderTarget)&&(u?Te=N.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),n.bindTexture(Te,_e.__webglTexture),je(Te,L,Fe),et(ne.__webglFramebuffer,N,L,t.COLOR_ATTACHMENT0,Te),I(L,Fe)&&D(Te),n.unbindTexture()}N.depthBuffer&&Ne(N)}function vt(N){const L=w(N)||u,ne=N.isWebGLMultipleRenderTargets===!0?N.texture:[N.texture];for(let _e=0,ge=ne.length;_e<ge;_e++){const Se=ne[_e];if(I(Se,L)){const Fe=N.isWebGLCubeRenderTarget?t.TEXTURE_CUBE_MAP:t.TEXTURE_2D,Te=i.get(Se).__webglTexture;n.bindTexture(Fe,Te),D(Fe),n.unbindTexture()}}}function ut(N){if(u&&N.samples>0&&xt(N)===!1){const L=N.isWebGLMultipleRenderTargets?N.texture:[N.texture],ne=N.width,_e=N.height;let ge=t.COLOR_BUFFER_BIT;const Se=[],Fe=N.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,Te=i.get(N),le=N.isWebGLMultipleRenderTargets===!0;if(le)for(let Oe=0;Oe<L.length;Oe++)n.bindFramebuffer(t.FRAMEBUFFER,Te.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+Oe,t.RENDERBUFFER,null),n.bindFramebuffer(t.FRAMEBUFFER,Te.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+Oe,t.TEXTURE_2D,null,0);n.bindFramebuffer(t.READ_FRAMEBUFFER,Te.__webglMultisampledFramebuffer),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,Te.__webglFramebuffer);for(let Oe=0;Oe<L.length;Oe++){Se.push(t.COLOR_ATTACHMENT0+Oe),N.depthBuffer&&Se.push(Fe);const Be=Te.__ignoreDepthValues!==void 0?Te.__ignoreDepthValues:!1;if(Be===!1&&(N.depthBuffer&&(ge|=t.DEPTH_BUFFER_BIT),N.stencilBuffer&&(ge|=t.STENCIL_BUFFER_BIT)),le&&t.framebufferRenderbuffer(t.READ_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.RENDERBUFFER,Te.__webglColorRenderbuffer[Oe]),Be===!0&&(t.invalidateFramebuffer(t.READ_FRAMEBUFFER,[Fe]),t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,[Fe])),le){const ke=i.get(L[Oe]).__webglTexture;t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,ke,0)}t.blitFramebuffer(0,0,ne,_e,0,0,ne,_e,ge,t.NEAREST),x&&t.invalidateFramebuffer(t.READ_FRAMEBUFFER,Se)}if(n.bindFramebuffer(t.READ_FRAMEBUFFER,null),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),le)for(let Oe=0;Oe<L.length;Oe++){n.bindFramebuffer(t.FRAMEBUFFER,Te.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+Oe,t.RENDERBUFFER,Te.__webglColorRenderbuffer[Oe]);const Be=i.get(L[Oe]).__webglTexture;n.bindFramebuffer(t.FRAMEBUFFER,Te.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+Oe,t.TEXTURE_2D,Be,0)}n.bindFramebuffer(t.DRAW_FRAMEBUFFER,Te.__webglMultisampledFramebuffer)}}function it(N){return Math.min(g,N.samples)}function xt(N){const L=i.get(N);return u&&N.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&L.__useRenderToTexture!==!1}function Et(N){const L=l.render.frame;E.get(N)!==L&&(E.set(N,L),N.update())}function qt(N,L){const ne=N.colorSpace,_e=N.format,ge=N.type;return N.isCompressedTexture===!0||N.format===nm||ne!==hr&&ne!==uo&&(ne===ot?u===!1?e.has("EXT_sRGB")===!0&&_e===Ji?(N.format=nm,N.minFilter=Di,N.generateMipmaps=!1):L=PM.sRGBToLinear(L):(_e!==Ji||ge!==Cs)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",ne)),L}this.allocateTextureUnit=z,this.resetTextureUnits=ee,this.setTexture2D=Y,this.setTexture2DArray=V,this.setTexture3D=$,this.setTextureCube=ye,this.rebindTextures=$e,this.setupRenderTarget=Ke,this.updateRenderTargetMipmap=vt,this.updateMultisampleRenderTarget=ut,this.setupDepthRenderbuffer=Ne,this.setupFrameBufferTexture=et,this.useMultisampledRTT=xt}function _N(t,e,n){const i=n.isWebGL2;function s(o,l=uo){let u;if(o===Cs)return t.UNSIGNED_BYTE;if(o===MM)return t.UNSIGNED_SHORT_4_4_4_4;if(o===EM)return t.UNSIGNED_SHORT_5_5_5_1;if(o===$P)return t.BYTE;if(o===KP)return t.SHORT;if(o===ig)return t.UNSIGNED_SHORT;if(o===yM)return t.INT;if(o===_s)return t.UNSIGNED_INT;if(o===vs)return t.FLOAT;if(o===eu)return i?t.HALF_FLOAT:(u=e.get("OES_texture_half_float"),u!==null?u.HALF_FLOAT_OES:null);if(o===ZP)return t.ALPHA;if(o===Ji)return t.RGBA;if(o===QP)return t.LUMINANCE;if(o===JP)return t.LUMINANCE_ALPHA;if(o===ao)return t.DEPTH_COMPONENT;if(o===Fa)return t.DEPTH_STENCIL;if(o===nm)return u=e.get("EXT_sRGB"),u!==null?u.SRGB_ALPHA_EXT:null;if(o===eb)return t.RED;if(o===TM)return t.RED_INTEGER;if(o===tb)return t.RG;if(o===wM)return t.RG_INTEGER;if(o===AM)return t.RGBA_INTEGER;if(o===Ph||o===bh||o===Uh||o===Dh)if(l===ot)if(u=e.get("WEBGL_compressed_texture_s3tc_srgb"),u!==null){if(o===Ph)return u.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(o===bh)return u.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(o===Uh)return u.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(o===Dh)return u.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(u=e.get("WEBGL_compressed_texture_s3tc"),u!==null){if(o===Ph)return u.COMPRESSED_RGB_S3TC_DXT1_EXT;if(o===bh)return u.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(o===Uh)return u.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(o===Dh)return u.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(o===H0||o===G0||o===V0||o===W0)if(u=e.get("WEBGL_compressed_texture_pvrtc"),u!==null){if(o===H0)return u.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(o===G0)return u.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(o===V0)return u.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(o===W0)return u.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(o===nb)return u=e.get("WEBGL_compressed_texture_etc1"),u!==null?u.COMPRESSED_RGB_ETC1_WEBGL:null;if(o===X0||o===j0)if(u=e.get("WEBGL_compressed_texture_etc"),u!==null){if(o===X0)return l===ot?u.COMPRESSED_SRGB8_ETC2:u.COMPRESSED_RGB8_ETC2;if(o===j0)return l===ot?u.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:u.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(o===q0||o===Y0||o===$0||o===K0||o===Z0||o===Q0||o===J0||o===ex||o===tx||o===nx||o===ix||o===rx||o===sx||o===ox)if(u=e.get("WEBGL_compressed_texture_astc"),u!==null){if(o===q0)return l===ot?u.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:u.COMPRESSED_RGBA_ASTC_4x4_KHR;if(o===Y0)return l===ot?u.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:u.COMPRESSED_RGBA_ASTC_5x4_KHR;if(o===$0)return l===ot?u.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:u.COMPRESSED_RGBA_ASTC_5x5_KHR;if(o===K0)return l===ot?u.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:u.COMPRESSED_RGBA_ASTC_6x5_KHR;if(o===Z0)return l===ot?u.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:u.COMPRESSED_RGBA_ASTC_6x6_KHR;if(o===Q0)return l===ot?u.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:u.COMPRESSED_RGBA_ASTC_8x5_KHR;if(o===J0)return l===ot?u.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:u.COMPRESSED_RGBA_ASTC_8x6_KHR;if(o===ex)return l===ot?u.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:u.COMPRESSED_RGBA_ASTC_8x8_KHR;if(o===tx)return l===ot?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:u.COMPRESSED_RGBA_ASTC_10x5_KHR;if(o===nx)return l===ot?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:u.COMPRESSED_RGBA_ASTC_10x6_KHR;if(o===ix)return l===ot?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:u.COMPRESSED_RGBA_ASTC_10x8_KHR;if(o===rx)return l===ot?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:u.COMPRESSED_RGBA_ASTC_10x10_KHR;if(o===sx)return l===ot?u.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:u.COMPRESSED_RGBA_ASTC_12x10_KHR;if(o===ox)return l===ot?u.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:u.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(o===Ih)if(u=e.get("EXT_texture_compression_bptc"),u!==null){if(o===Ih)return l===ot?u.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:u.COMPRESSED_RGBA_BPTC_UNORM_EXT}else return null;if(o===ib||o===ax||o===lx||o===ux)if(u=e.get("EXT_texture_compression_rgtc"),u!==null){if(o===Ih)return u.COMPRESSED_RED_RGTC1_EXT;if(o===ax)return u.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(o===lx)return u.COMPRESSED_RED_GREEN_RGTC2_EXT;if(o===ux)return u.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return o===oo?i?t.UNSIGNED_INT_24_8:(u=e.get("WEBGL_depth_texture"),u!==null?u.UNSIGNED_INT_24_8_WEBGL:null):t[o]!==void 0?t[o]:null}return{convert:s}}class vN extends Ii{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}let Fc=class extends mi{constructor(){super(),this.isGroup=!0,this.type="Group"}};const xN={type:"move"};class rp{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Fc,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Fc,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new Z,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new Z),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Fc,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new Z,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new Z),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const n=this._hand;if(n)for(const i of e.hand.values())this._getHandJoint(n,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,n,i){let s=null,o=null,l=null;const u=this._targetRay,f=this._grip,d=this._hand;if(e&&n.session.visibilityState!=="visible-blurred"){if(d&&e.hand){l=!0;for(const T of e.hand.values()){const v=n.getJointPose(T,i),h=this._getHandJoint(d,T);v!==null&&(h.matrix.fromArray(v.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.matrixWorldNeedsUpdate=!0,h.jointRadius=v.radius),h.visible=v!==null}const p=d.joints["index-finger-tip"],g=d.joints["thumb-tip"],_=p.position.distanceTo(g.position),x=.02,E=.005;d.inputState.pinching&&_>x+E?(d.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!d.inputState.pinching&&_<=x-E&&(d.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else f!==null&&e.gripSpace&&(o=n.getPose(e.gripSpace,i),o!==null&&(f.matrix.fromArray(o.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,o.linearVelocity?(f.hasLinearVelocity=!0,f.linearVelocity.copy(o.linearVelocity)):f.hasLinearVelocity=!1,o.angularVelocity?(f.hasAngularVelocity=!0,f.angularVelocity.copy(o.angularVelocity)):f.hasAngularVelocity=!1));u!==null&&(s=n.getPose(e.targetRaySpace,i),s===null&&o!==null&&(s=o),s!==null&&(u.matrix.fromArray(s.transform.matrix),u.matrix.decompose(u.position,u.rotation,u.scale),u.matrixWorldNeedsUpdate=!0,s.linearVelocity?(u.hasLinearVelocity=!0,u.linearVelocity.copy(s.linearVelocity)):u.hasLinearVelocity=!1,s.angularVelocity?(u.hasAngularVelocity=!0,u.angularVelocity.copy(s.angularVelocity)):u.hasAngularVelocity=!1,this.dispatchEvent(xN)))}return u!==null&&(u.visible=s!==null),f!==null&&(f.visible=o!==null),d!==null&&(d.visible=l!==null),this}_getHandJoint(e,n){if(e.joints[n.jointName]===void 0){const i=new Fc;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[n.jointName]=i,e.add(i)}return e.joints[n.jointName]}}class SN extends pi{constructor(e,n,i,s,o,l,u,f,d,p){if(p=p!==void 0?p:ao,p!==ao&&p!==Fa)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&p===ao&&(i=_s),i===void 0&&p===Fa&&(i=oo),super(null,s,o,l,u,f,p,i,d),this.isDepthTexture=!0,this.image={width:e,height:n},this.magFilter=u!==void 0?u:zn,this.minFilter=f!==void 0?f:zn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const n=super.toJSON(e);return this.compareFunction!==null&&(n.compareFunction=this.compareFunction),n}}class yN extends Ha{constructor(e,n){super();const i=this;let s=null,o=1,l=null,u="local-floor",f=1,d=null,p=null,g=null,_=null,x=null,E=null;const T=n.getContextAttributes();let v=null,h=null;const y=[],S=[],w=new Ii;w.layers.enable(1),w.viewport=new yn;const P=new Ii;P.layers.enable(2),P.viewport=new yn;const I=[w,P],D=new vN;D.layers.enable(1),D.layers.enable(2);let H=null,C=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(V){let $=y[V];return $===void 0&&($=new rp,y[V]=$),$.getTargetRaySpace()},this.getControllerGrip=function(V){let $=y[V];return $===void 0&&($=new rp,y[V]=$),$.getGripSpace()},this.getHand=function(V){let $=y[V];return $===void 0&&($=new rp,y[V]=$),$.getHandSpace()};function U(V){const $=S.indexOf(V.inputSource);if($===-1)return;const ye=y[$];ye!==void 0&&(ye.update(V.inputSource,V.frame,d||l),ye.dispatchEvent({type:V.type,data:V.inputSource}))}function oe(){s.removeEventListener("select",U),s.removeEventListener("selectstart",U),s.removeEventListener("selectend",U),s.removeEventListener("squeeze",U),s.removeEventListener("squeezestart",U),s.removeEventListener("squeezeend",U),s.removeEventListener("end",oe),s.removeEventListener("inputsourceschange",he);for(let V=0;V<y.length;V++){const $=S[V];$!==null&&(S[V]=null,y[V].disconnect($))}H=null,C=null,e.setRenderTarget(v),x=null,_=null,g=null,s=null,h=null,Y.stop(),i.isPresenting=!1,i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(V){o=V,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(V){u=V,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return d||l},this.setReferenceSpace=function(V){d=V},this.getBaseLayer=function(){return _!==null?_:x},this.getBinding=function(){return g},this.getFrame=function(){return E},this.getSession=function(){return s},this.setSession=async function(V){if(s=V,s!==null){if(v=e.getRenderTarget(),s.addEventListener("select",U),s.addEventListener("selectstart",U),s.addEventListener("selectend",U),s.addEventListener("squeeze",U),s.addEventListener("squeezestart",U),s.addEventListener("squeezeend",U),s.addEventListener("end",oe),s.addEventListener("inputsourceschange",he),T.xrCompatible!==!0&&await n.makeXRCompatible(),s.renderState.layers===void 0||e.capabilities.isWebGL2===!1){const $={antialias:s.renderState.layers===void 0?T.antialias:!0,alpha:!0,depth:T.depth,stencil:T.stencil,framebufferScaleFactor:o};x=new XRWebGLLayer(s,n,$),s.updateRenderState({baseLayer:x}),h=new go(x.framebufferWidth,x.framebufferHeight,{format:Ji,type:Cs,colorSpace:e.outputColorSpace,stencilBuffer:T.stencil})}else{let $=null,ye=null,xe=null;T.depth&&(xe=T.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,$=T.stencil?Fa:ao,ye=T.stencil?oo:_s);const Me={colorFormat:n.RGBA8,depthFormat:xe,scaleFactor:o};g=new XRWebGLBinding(s,n),_=g.createProjectionLayer(Me),s.updateRenderState({layers:[_]}),h=new go(_.textureWidth,_.textureHeight,{format:Ji,type:Cs,depthTexture:new SN(_.textureWidth,_.textureHeight,ye,void 0,void 0,void 0,void 0,void 0,void 0,$),stencilBuffer:T.stencil,colorSpace:e.outputColorSpace,samples:T.antialias?4:0});const De=e.properties.get(h);De.__ignoreDepthValues=_.ignoreDepthValues}h.isXRRenderTarget=!0,this.setFoveation(f),d=null,l=await s.requestReferenceSpace(u),Y.setContext(s),Y.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode};function he(V){for(let $=0;$<V.removed.length;$++){const ye=V.removed[$],xe=S.indexOf(ye);xe>=0&&(S[xe]=null,y[xe].disconnect(ye))}for(let $=0;$<V.added.length;$++){const ye=V.added[$];let xe=S.indexOf(ye);if(xe===-1){for(let De=0;De<y.length;De++)if(De>=S.length){S.push(ye),xe=De;break}else if(S[De]===null){S[De]=ye,xe=De;break}if(xe===-1)break}const Me=y[xe];Me&&Me.connect(ye)}}const q=new Z,J=new Z;function ie(V,$,ye){q.setFromMatrixPosition($.matrixWorld),J.setFromMatrixPosition(ye.matrixWorld);const xe=q.distanceTo(J),Me=$.projectionMatrix.elements,De=ye.projectionMatrix.elements,je=Me[14]/(Me[10]-1),ze=Me[14]/(Me[10]+1),mt=(Me[9]+1)/Me[5],wn=(Me[9]-1)/Me[5],et=(Me[8]-1)/Me[0],X=(De[8]+1)/De[0],rn=je*et,Ne=je*X,$e=xe/(-et+X),Ke=$e*-et;$.matrixWorld.decompose(V.position,V.quaternion,V.scale),V.translateX(Ke),V.translateZ($e),V.matrixWorld.compose(V.position,V.quaternion,V.scale),V.matrixWorldInverse.copy(V.matrixWorld).invert();const vt=je+$e,ut=ze+$e,it=rn-Ke,xt=Ne+(xe-Ke),Et=mt*ze/ut*vt,qt=wn*ze/ut*vt;V.projectionMatrix.makePerspective(it,xt,Et,qt,vt,ut),V.projectionMatrixInverse.copy(V.projectionMatrix).invert()}function fe(V,$){$===null?V.matrixWorld.copy(V.matrix):V.matrixWorld.multiplyMatrices($.matrixWorld,V.matrix),V.matrixWorldInverse.copy(V.matrixWorld).invert()}this.updateCamera=function(V){if(s===null)return;D.near=P.near=w.near=V.near,D.far=P.far=w.far=V.far,(H!==D.near||C!==D.far)&&(s.updateRenderState({depthNear:D.near,depthFar:D.far}),H=D.near,C=D.far);const $=V.parent,ye=D.cameras;fe(D,$);for(let xe=0;xe<ye.length;xe++)fe(ye[xe],$);ye.length===2?ie(D,w,P):D.projectionMatrix.copy(w.projectionMatrix),ee(V,D,$)};function ee(V,$,ye){ye===null?V.matrix.copy($.matrixWorld):(V.matrix.copy(ye.matrixWorld),V.matrix.invert(),V.matrix.multiply($.matrixWorld)),V.matrix.decompose(V.position,V.quaternion,V.scale),V.updateMatrixWorld(!0);const xe=V.children;for(let Me=0,De=xe.length;Me<De;Me++)xe[Me].updateMatrixWorld(!0);V.projectionMatrix.copy($.projectionMatrix),V.projectionMatrixInverse.copy($.projectionMatrixInverse),V.isPerspectiveCamera&&(V.fov=im*2*Math.atan(1/V.projectionMatrix.elements[5]),V.zoom=1)}this.getCamera=function(){return D},this.getFoveation=function(){if(!(_===null&&x===null))return f},this.setFoveation=function(V){f=V,_!==null&&(_.fixedFoveation=V),x!==null&&x.fixedFoveation!==void 0&&(x.fixedFoveation=V)};let z=null;function te(V,$){if(p=$.getViewerPose(d||l),E=$,p!==null){const ye=p.views;x!==null&&(e.setRenderTargetFramebuffer(h,x.framebuffer),e.setRenderTarget(h));let xe=!1;ye.length!==D.cameras.length&&(D.cameras.length=0,xe=!0);for(let Me=0;Me<ye.length;Me++){const De=ye[Me];let je=null;if(x!==null)je=x.getViewport(De);else{const mt=g.getViewSubImage(_,De);je=mt.viewport,Me===0&&(e.setRenderTargetTextures(h,mt.colorTexture,_.ignoreDepthValues?void 0:mt.depthStencilTexture),e.setRenderTarget(h))}let ze=I[Me];ze===void 0&&(ze=new Ii,ze.layers.enable(Me),ze.viewport=new yn,I[Me]=ze),ze.matrix.fromArray(De.transform.matrix),ze.matrix.decompose(ze.position,ze.quaternion,ze.scale),ze.projectionMatrix.fromArray(De.projectionMatrix),ze.projectionMatrixInverse.copy(ze.projectionMatrix).invert(),ze.viewport.set(je.x,je.y,je.width,je.height),Me===0&&(D.matrix.copy(ze.matrix),D.matrix.decompose(D.position,D.quaternion,D.scale)),xe===!0&&D.cameras.push(ze)}}for(let ye=0;ye<y.length;ye++){const xe=S[ye],Me=y[ye];xe!==null&&Me!==void 0&&Me.update(xe,$,d||l)}z&&z(V,$),$.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:$}),E=null}const Y=new HM;Y.setAnimationLoop(te),this.setAnimationLoop=function(V){z=V},this.dispose=function(){}}}function MN(t,e){function n(v,h){v.matrixAutoUpdate===!0&&v.updateMatrix(),h.value.copy(v.matrix)}function i(v,h){h.color.getRGB(v.fogColor.value,OM(t)),h.isFog?(v.fogNear.value=h.near,v.fogFar.value=h.far):h.isFogExp2&&(v.fogDensity.value=h.density)}function s(v,h,y,S,w){h.isMeshBasicMaterial||h.isMeshLambertMaterial?o(v,h):h.isMeshToonMaterial?(o(v,h),g(v,h)):h.isMeshPhongMaterial?(o(v,h),p(v,h)):h.isMeshStandardMaterial?(o(v,h),_(v,h),h.isMeshPhysicalMaterial&&x(v,h,w)):h.isMeshMatcapMaterial?(o(v,h),E(v,h)):h.isMeshDepthMaterial?o(v,h):h.isMeshDistanceMaterial?(o(v,h),T(v,h)):h.isMeshNormalMaterial?o(v,h):h.isLineBasicMaterial?(l(v,h),h.isLineDashedMaterial&&u(v,h)):h.isPointsMaterial?f(v,h,y,S):h.isSpriteMaterial?d(v,h):h.isShadowMaterial?(v.color.value.copy(h.color),v.opacity.value=h.opacity):h.isShaderMaterial&&(h.uniformsNeedUpdate=!1)}function o(v,h){v.opacity.value=h.opacity,h.color&&v.diffuse.value.copy(h.color),h.emissive&&v.emissive.value.copy(h.emissive).multiplyScalar(h.emissiveIntensity),h.map&&(v.map.value=h.map,n(h.map,v.mapTransform)),h.alphaMap&&(v.alphaMap.value=h.alphaMap,n(h.alphaMap,v.alphaMapTransform)),h.bumpMap&&(v.bumpMap.value=h.bumpMap,n(h.bumpMap,v.bumpMapTransform),v.bumpScale.value=h.bumpScale,h.side===ei&&(v.bumpScale.value*=-1)),h.normalMap&&(v.normalMap.value=h.normalMap,n(h.normalMap,v.normalMapTransform),v.normalScale.value.copy(h.normalScale),h.side===ei&&v.normalScale.value.negate()),h.displacementMap&&(v.displacementMap.value=h.displacementMap,n(h.displacementMap,v.displacementMapTransform),v.displacementScale.value=h.displacementScale,v.displacementBias.value=h.displacementBias),h.emissiveMap&&(v.emissiveMap.value=h.emissiveMap,n(h.emissiveMap,v.emissiveMapTransform)),h.specularMap&&(v.specularMap.value=h.specularMap,n(h.specularMap,v.specularMapTransform)),h.alphaTest>0&&(v.alphaTest.value=h.alphaTest);const y=e.get(h).envMap;if(y&&(v.envMap.value=y,v.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,v.reflectivity.value=h.reflectivity,v.ior.value=h.ior,v.refractionRatio.value=h.refractionRatio),h.lightMap){v.lightMap.value=h.lightMap;const S=t.useLegacyLights===!0?Math.PI:1;v.lightMapIntensity.value=h.lightMapIntensity*S,n(h.lightMap,v.lightMapTransform)}h.aoMap&&(v.aoMap.value=h.aoMap,v.aoMapIntensity.value=h.aoMapIntensity,n(h.aoMap,v.aoMapTransform))}function l(v,h){v.diffuse.value.copy(h.color),v.opacity.value=h.opacity,h.map&&(v.map.value=h.map,n(h.map,v.mapTransform))}function u(v,h){v.dashSize.value=h.dashSize,v.totalSize.value=h.dashSize+h.gapSize,v.scale.value=h.scale}function f(v,h,y,S){v.diffuse.value.copy(h.color),v.opacity.value=h.opacity,v.size.value=h.size*y,v.scale.value=S*.5,h.map&&(v.map.value=h.map,n(h.map,v.uvTransform)),h.alphaMap&&(v.alphaMap.value=h.alphaMap,n(h.alphaMap,v.alphaMapTransform)),h.alphaTest>0&&(v.alphaTest.value=h.alphaTest)}function d(v,h){v.diffuse.value.copy(h.color),v.opacity.value=h.opacity,v.rotation.value=h.rotation,h.map&&(v.map.value=h.map,n(h.map,v.mapTransform)),h.alphaMap&&(v.alphaMap.value=h.alphaMap,n(h.alphaMap,v.alphaMapTransform)),h.alphaTest>0&&(v.alphaTest.value=h.alphaTest)}function p(v,h){v.specular.value.copy(h.specular),v.shininess.value=Math.max(h.shininess,1e-4)}function g(v,h){h.gradientMap&&(v.gradientMap.value=h.gradientMap)}function _(v,h){v.metalness.value=h.metalness,h.metalnessMap&&(v.metalnessMap.value=h.metalnessMap,n(h.metalnessMap,v.metalnessMapTransform)),v.roughness.value=h.roughness,h.roughnessMap&&(v.roughnessMap.value=h.roughnessMap,n(h.roughnessMap,v.roughnessMapTransform)),e.get(h).envMap&&(v.envMapIntensity.value=h.envMapIntensity)}function x(v,h,y){v.ior.value=h.ior,h.sheen>0&&(v.sheenColor.value.copy(h.sheenColor).multiplyScalar(h.sheen),v.sheenRoughness.value=h.sheenRoughness,h.sheenColorMap&&(v.sheenColorMap.value=h.sheenColorMap,n(h.sheenColorMap,v.sheenColorMapTransform)),h.sheenRoughnessMap&&(v.sheenRoughnessMap.value=h.sheenRoughnessMap,n(h.sheenRoughnessMap,v.sheenRoughnessMapTransform))),h.clearcoat>0&&(v.clearcoat.value=h.clearcoat,v.clearcoatRoughness.value=h.clearcoatRoughness,h.clearcoatMap&&(v.clearcoatMap.value=h.clearcoatMap,n(h.clearcoatMap,v.clearcoatMapTransform)),h.clearcoatRoughnessMap&&(v.clearcoatRoughnessMap.value=h.clearcoatRoughnessMap,n(h.clearcoatRoughnessMap,v.clearcoatRoughnessMapTransform)),h.clearcoatNormalMap&&(v.clearcoatNormalMap.value=h.clearcoatNormalMap,n(h.clearcoatNormalMap,v.clearcoatNormalMapTransform),v.clearcoatNormalScale.value.copy(h.clearcoatNormalScale),h.side===ei&&v.clearcoatNormalScale.value.negate())),h.iridescence>0&&(v.iridescence.value=h.iridescence,v.iridescenceIOR.value=h.iridescenceIOR,v.iridescenceThicknessMinimum.value=h.iridescenceThicknessRange[0],v.iridescenceThicknessMaximum.value=h.iridescenceThicknessRange[1],h.iridescenceMap&&(v.iridescenceMap.value=h.iridescenceMap,n(h.iridescenceMap,v.iridescenceMapTransform)),h.iridescenceThicknessMap&&(v.iridescenceThicknessMap.value=h.iridescenceThicknessMap,n(h.iridescenceThicknessMap,v.iridescenceThicknessMapTransform))),h.transmission>0&&(v.transmission.value=h.transmission,v.transmissionSamplerMap.value=y.texture,v.transmissionSamplerSize.value.set(y.width,y.height),h.transmissionMap&&(v.transmissionMap.value=h.transmissionMap,n(h.transmissionMap,v.transmissionMapTransform)),v.thickness.value=h.thickness,h.thicknessMap&&(v.thicknessMap.value=h.thicknessMap,n(h.thicknessMap,v.thicknessMapTransform)),v.attenuationDistance.value=h.attenuationDistance,v.attenuationColor.value.copy(h.attenuationColor)),h.anisotropy>0&&(v.anisotropyVector.value.set(h.anisotropy*Math.cos(h.anisotropyRotation),h.anisotropy*Math.sin(h.anisotropyRotation)),h.anisotropyMap&&(v.anisotropyMap.value=h.anisotropyMap,n(h.anisotropyMap,v.anisotropyMapTransform))),v.specularIntensity.value=h.specularIntensity,v.specularColor.value.copy(h.specularColor),h.specularColorMap&&(v.specularColorMap.value=h.specularColorMap,n(h.specularColorMap,v.specularColorMapTransform)),h.specularIntensityMap&&(v.specularIntensityMap.value=h.specularIntensityMap,n(h.specularIntensityMap,v.specularIntensityMapTransform))}function E(v,h){h.matcap&&(v.matcap.value=h.matcap)}function T(v,h){const y=e.get(h).light;v.referencePosition.value.setFromMatrixPosition(y.matrixWorld),v.nearDistance.value=y.shadow.camera.near,v.farDistance.value=y.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:s}}function EN(t,e,n,i){let s={},o={},l=[];const u=n.isWebGL2?t.getParameter(t.MAX_UNIFORM_BUFFER_BINDINGS):0;function f(y,S){const w=S.program;i.uniformBlockBinding(y,w)}function d(y,S){let w=s[y.id];w===void 0&&(E(y),w=p(y),s[y.id]=w,y.addEventListener("dispose",v));const P=S.program;i.updateUBOMapping(y,P);const I=e.render.frame;o[y.id]!==I&&(_(y),o[y.id]=I)}function p(y){const S=g();y.__bindingPointIndex=S;const w=t.createBuffer(),P=y.__size,I=y.usage;return t.bindBuffer(t.UNIFORM_BUFFER,w),t.bufferData(t.UNIFORM_BUFFER,P,I),t.bindBuffer(t.UNIFORM_BUFFER,null),t.bindBufferBase(t.UNIFORM_BUFFER,S,w),w}function g(){for(let y=0;y<u;y++)if(l.indexOf(y)===-1)return l.push(y),y;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function _(y){const S=s[y.id],w=y.uniforms,P=y.__cache;t.bindBuffer(t.UNIFORM_BUFFER,S);for(let I=0,D=w.length;I<D;I++){const H=w[I];if(x(H,I,P)===!0){const C=H.__offset,U=Array.isArray(H.value)?H.value:[H.value];let oe=0;for(let he=0;he<U.length;he++){const q=U[he],J=T(q);typeof q=="number"?(H.__data[0]=q,t.bufferSubData(t.UNIFORM_BUFFER,C+oe,H.__data)):q.isMatrix3?(H.__data[0]=q.elements[0],H.__data[1]=q.elements[1],H.__data[2]=q.elements[2],H.__data[3]=q.elements[0],H.__data[4]=q.elements[3],H.__data[5]=q.elements[4],H.__data[6]=q.elements[5],H.__data[7]=q.elements[0],H.__data[8]=q.elements[6],H.__data[9]=q.elements[7],H.__data[10]=q.elements[8],H.__data[11]=q.elements[0]):(q.toArray(H.__data,oe),oe+=J.storage/Float32Array.BYTES_PER_ELEMENT)}t.bufferSubData(t.UNIFORM_BUFFER,C,H.__data)}}t.bindBuffer(t.UNIFORM_BUFFER,null)}function x(y,S,w){const P=y.value;if(w[S]===void 0){if(typeof P=="number")w[S]=P;else{const I=Array.isArray(P)?P:[P],D=[];for(let H=0;H<I.length;H++)D.push(I[H].clone());w[S]=D}return!0}else if(typeof P=="number"){if(w[S]!==P)return w[S]=P,!0}else{const I=Array.isArray(w[S])?w[S]:[w[S]],D=Array.isArray(P)?P:[P];for(let H=0;H<I.length;H++){const C=I[H];if(C.equals(D[H])===!1)return C.copy(D[H]),!0}}return!1}function E(y){const S=y.uniforms;let w=0;const P=16;let I=0;for(let D=0,H=S.length;D<H;D++){const C=S[D],U={boundary:0,storage:0},oe=Array.isArray(C.value)?C.value:[C.value];for(let he=0,q=oe.length;he<q;he++){const J=oe[he],ie=T(J);U.boundary+=ie.boundary,U.storage+=ie.storage}if(C.__data=new Float32Array(U.storage/Float32Array.BYTES_PER_ELEMENT),C.__offset=w,D>0){I=w%P;const he=P-I;I!==0&&he-U.boundary<0&&(w+=P-I,C.__offset=w)}w+=U.storage}return I=w%P,I>0&&(w+=P-I),y.__size=w,y.__cache={},this}function T(y){const S={boundary:0,storage:0};return typeof y=="number"?(S.boundary=4,S.storage=4):y.isVector2?(S.boundary=8,S.storage=8):y.isVector3||y.isColor?(S.boundary=16,S.storage=12):y.isVector4?(S.boundary=16,S.storage=16):y.isMatrix3?(S.boundary=48,S.storage=48):y.isMatrix4?(S.boundary=64,S.storage=64):y.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",y),S}function v(y){const S=y.target;S.removeEventListener("dispose",v);const w=l.indexOf(S.__bindingPointIndex);l.splice(w,1),t.deleteBuffer(s[S.id]),delete s[S.id],delete o[S.id]}function h(){for(const y in s)t.deleteBuffer(s[y]);l=[],s={},o={}}return{bind:f,update:d,dispose:h}}function TN(){const t=Mf("canvas");return t.style.display="block",t}class jM{constructor(e={}){const{canvas:n=TN(),context:i=null,depth:s=!0,stencil:o=!0,alpha:l=!1,antialias:u=!1,premultipliedAlpha:f=!0,preserveDrawingBuffer:d=!1,powerPreference:p="default",failIfMajorPerformanceCaveat:g=!1}=e;this.isWebGLRenderer=!0;let _;i!==null?_=i.getContextAttributes().alpha:_=l;const x=new Uint32Array(4),E=new Int32Array(4);let T=null,v=null;const h=[],y=[];this.domElement=n,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.outputColorSpace=ot,this.useLegacyLights=!0,this.toneMapping=Gr,this.toneMappingExposure=1;const S=this;let w=!1,P=0,I=0,D=null,H=-1,C=null;const U=new yn,oe=new yn;let he=null;const q=new Pt(0);let J=0,ie=n.width,fe=n.height,ee=1,z=null,te=null;const Y=new yn(0,0,ie,fe),V=new yn(0,0,ie,fe);let $=!1;const ye=new kM;let xe=!1,Me=!1,De=null;const je=new En,ze=new Ct,mt=new Z,wn={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function et(){return D===null?ee:1}let X=i;function rn(b,j){for(let re=0;re<b.length;re++){const W=b[re],ae=n.getContext(W,j);if(ae!==null)return ae}return null}try{const b={alpha:!0,depth:s,stencil:o,antialias:u,premultipliedAlpha:f,preserveDrawingBuffer:d,powerPreference:p,failIfMajorPerformanceCaveat:g};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${ng}`),n.addEventListener("webglcontextlost",we,!1),n.addEventListener("webglcontextrestored",Q,!1),n.addEventListener("webglcontextcreationerror",ve,!1),X===null){const j=["webgl2","webgl","experimental-webgl"];if(S.isWebGL1Renderer===!0&&j.shift(),X=rn(j,b),X===null)throw rn(j)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext<"u"&&X instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),X.getShaderPrecisionFormat===void 0&&(X.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(b){throw console.error("THREE.WebGLRenderer: "+b.message),b}let Ne,$e,Ke,vt,ut,it,xt,Et,qt,N,L,ne,_e,ge,Se,Fe,Te,le,Oe,Be,ke,be,Ue,tt;function At(){Ne=new II(X),$e=new RI(X,Ne,e),Ne.init($e),be=new _N(X,Ne,$e),Ke=new mN(X,Ne,$e),vt=new OI(X),ut=new tN,it=new gN(X,Ne,Ke,ut,$e,be,vt),xt=new LI(S),Et=new DI(S),qt=new jb(X,$e),Ue=new wI(X,Ne,qt,$e),N=new NI(X,qt,vt,Ue),L=new HI(X,N,qt,vt),Oe=new kI(X,$e,it),Fe=new CI(ut),ne=new eN(S,xt,Et,Ne,$e,Ue,Fe),_e=new MN(S,ut),ge=new iN,Se=new uN(Ne,$e),le=new TI(S,xt,Et,Ke,L,_,f),Te=new pN(S,L,$e),tt=new EN(X,vt,$e,Ke),Be=new AI(X,Ne,vt,$e),ke=new FI(X,Ne,vt,$e),vt.programs=ne.programs,S.capabilities=$e,S.extensions=Ne,S.properties=ut,S.renderLists=ge,S.shadowMap=Te,S.state=Ke,S.info=vt}At();const B=new yN(S,X);this.xr=B,this.getContext=function(){return X},this.getContextAttributes=function(){return X.getContextAttributes()},this.forceContextLoss=function(){const b=Ne.get("WEBGL_lose_context");b&&b.loseContext()},this.forceContextRestore=function(){const b=Ne.get("WEBGL_lose_context");b&&b.restoreContext()},this.getPixelRatio=function(){return ee},this.setPixelRatio=function(b){b!==void 0&&(ee=b,this.setSize(ie,fe,!1))},this.getSize=function(b){return b.set(ie,fe)},this.setSize=function(b,j,re=!0){if(B.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}ie=b,fe=j,n.width=Math.floor(b*ee),n.height=Math.floor(j*ee),re===!0&&(n.style.width=b+"px",n.style.height=j+"px"),this.setViewport(0,0,b,j)},this.getDrawingBufferSize=function(b){return b.set(ie*ee,fe*ee).floor()},this.setDrawingBufferSize=function(b,j,re){ie=b,fe=j,ee=re,n.width=Math.floor(b*re),n.height=Math.floor(j*re),this.setViewport(0,0,b,j)},this.getCurrentViewport=function(b){return b.copy(U)},this.getViewport=function(b){return b.copy(Y)},this.setViewport=function(b,j,re,W){b.isVector4?Y.set(b.x,b.y,b.z,b.w):Y.set(b,j,re,W),Ke.viewport(U.copy(Y).multiplyScalar(ee).floor())},this.getScissor=function(b){return b.copy(V)},this.setScissor=function(b,j,re,W){b.isVector4?V.set(b.x,b.y,b.z,b.w):V.set(b,j,re,W),Ke.scissor(oe.copy(V).multiplyScalar(ee).floor())},this.getScissorTest=function(){return $},this.setScissorTest=function(b){Ke.setScissorTest($=b)},this.setOpaqueSort=function(b){z=b},this.setTransparentSort=function(b){te=b},this.getClearColor=function(b){return b.copy(le.getClearColor())},this.setClearColor=function(){le.setClearColor.apply(le,arguments)},this.getClearAlpha=function(){return le.getClearAlpha()},this.setClearAlpha=function(){le.setClearAlpha.apply(le,arguments)},this.clear=function(b=!0,j=!0,re=!0){let W=0;if(b){let ae=!1;if(D!==null){const Pe=D.texture.format;ae=Pe===AM||Pe===wM||Pe===TM}if(ae){const Pe=D.texture.type,He=Pe===Cs||Pe===_s||Pe===ig||Pe===oo||Pe===MM||Pe===EM,qe=le.getClearColor(),Xe=le.getClearAlpha(),at=qe.r,Ye=qe.g,Je=qe.b;He?(x[0]=at,x[1]=Ye,x[2]=Je,x[3]=Xe,X.clearBufferuiv(X.COLOR,0,x)):(E[0]=at,E[1]=Ye,E[2]=Je,E[3]=Xe,X.clearBufferiv(X.COLOR,0,E))}else W|=X.COLOR_BUFFER_BIT}j&&(W|=X.DEPTH_BUFFER_BIT),re&&(W|=X.STENCIL_BUFFER_BIT),X.clear(W)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){n.removeEventListener("webglcontextlost",we,!1),n.removeEventListener("webglcontextrestored",Q,!1),n.removeEventListener("webglcontextcreationerror",ve,!1),ge.dispose(),Se.dispose(),ut.dispose(),xt.dispose(),Et.dispose(),L.dispose(),Ue.dispose(),tt.dispose(),ne.dispose(),B.dispose(),B.removeEventListener("sessionstart",Ot),B.removeEventListener("sessionend",Si),De&&(De.dispose(),De=null),_n.stop()};function we(b){b.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),w=!0}function Q(){console.log("THREE.WebGLRenderer: Context Restored."),w=!1;const b=vt.autoReset,j=Te.enabled,re=Te.autoUpdate,W=Te.needsUpdate,ae=Te.type;At(),vt.autoReset=b,Te.enabled=j,Te.autoUpdate=re,Te.needsUpdate=W,Te.type=ae}function ve(b){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",b.statusMessage)}function Re(b){const j=b.target;j.removeEventListener("dispose",Re),_t(j)}function _t(b){Ut(b),ut.remove(b)}function Ut(b){const j=ut.get(b).programs;j!==void 0&&(j.forEach(function(re){ne.releaseProgram(re)}),b.isShaderMaterial&&ne.releaseShaderCache(b))}this.renderBufferDirect=function(b,j,re,W,ae,Pe){j===null&&(j=wn);const He=ae.isMesh&&ae.matrixWorld.determinant()<0,qe=Wf(b,j,re,W,ae);Ke.setMaterial(W,He);let Xe=re.index,at=1;W.wireframe===!0&&(Xe=N.getWireframeAttribute(re),at=2);const Ye=re.drawRange,Je=re.attributes.position;let Bt=Ye.start*at,Ht=(Ye.start+Ye.count)*at;Pe!==null&&(Bt=Math.max(Bt,Pe.start*at),Ht=Math.min(Ht,(Pe.start+Pe.count)*at)),Xe!==null?(Bt=Math.max(Bt,0),Ht=Math.min(Ht,Xe.count)):Je!=null&&(Bt=Math.max(Bt,0),Ht=Math.min(Ht,Je.count));const Vn=Ht-Bt;if(Vn<0||Vn===1/0)return;Ue.setup(ae,W,qe,re,Xe);let yi,Gt=Be;if(Xe!==null&&(yi=qt.get(Xe),Gt=ke,Gt.setIndex(yi)),ae.isMesh)W.wireframe===!0?(Ke.setLineWidth(W.wireframeLinewidth*et()),Gt.setMode(X.LINES)):Gt.setMode(X.TRIANGLES);else if(ae.isLine){let dt=W.linewidth;dt===void 0&&(dt=1),Ke.setLineWidth(dt*et()),ae.isLineSegments?Gt.setMode(X.LINES):ae.isLineLoop?Gt.setMode(X.LINE_LOOP):Gt.setMode(X.LINE_STRIP)}else ae.isPoints?Gt.setMode(X.POINTS):ae.isSprite&&Gt.setMode(X.TRIANGLES);if(ae.isInstancedMesh)Gt.renderInstances(Bt,Vn,ae.count);else if(re.isInstancedBufferGeometry){const dt=re._maxInstanceCount!==void 0?re._maxInstanceCount:1/0,Wa=Math.min(re.instanceCount,dt);Gt.renderInstances(Bt,Vn,Wa)}else Gt.render(Bt,Vn)},this.compile=function(b,j){function re(W,ae,Pe){W.transparent===!0&&W.side===Fr&&W.forceSinglePass===!1?(W.side=ei,W.needsUpdate=!0,Mo(W,ae,Pe),W.side=bs,W.needsUpdate=!0,Mo(W,ae,Pe),W.side=Fr):Mo(W,ae,Pe)}v=Se.get(b),v.init(),y.push(v),b.traverseVisible(function(W){W.isLight&&W.layers.test(j.layers)&&(v.pushLight(W),W.castShadow&&v.pushShadow(W))}),v.setupLights(S.useLegacyLights),b.traverse(function(W){const ae=W.material;if(ae)if(Array.isArray(ae))for(let Pe=0;Pe<ae.length;Pe++){const He=ae[Pe];re(He,b,W)}else re(ae,b,W)}),y.pop(),v=null};let Jt=null;function ti(b){Jt&&Jt(b)}function Ot(){_n.stop()}function Si(){_n.start()}const _n=new HM;_n.setAnimationLoop(ti),typeof self<"u"&&_n.setContext(self),this.setAnimationLoop=function(b){Jt=b,B.setAnimationLoop(b),b===null?_n.stop():_n.start()},B.addEventListener("sessionstart",Ot),B.addEventListener("sessionend",Si),this.render=function(b,j){if(j!==void 0&&j.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(w===!0)return;b.matrixWorldAutoUpdate===!0&&b.updateMatrixWorld(),j.parent===null&&j.matrixWorldAutoUpdate===!0&&j.updateMatrixWorld(),B.enabled===!0&&B.isPresenting===!0&&(B.cameraAutoUpdate===!0&&B.updateCamera(j),j=B.getCamera()),b.isScene===!0&&b.onBeforeRender(S,b,j,D),v=Se.get(b,y.length),v.init(),y.push(v),je.multiplyMatrices(j.projectionMatrix,j.matrixWorldInverse),ye.setFromProjectionMatrix(je),Me=this.localClippingEnabled,xe=Fe.init(this.clippingPlanes,Me),T=ge.get(b,h.length),T.init(),h.push(T),So(b,j,0,S.sortObjects),T.finish(),S.sortObjects===!0&&T.sort(z,te),this.info.render.frame++,xe===!0&&Fe.beginShadows();const re=v.state.shadowsArray;if(Te.render(re,b,j),xe===!0&&Fe.endShadows(),this.info.autoReset===!0&&this.info.reset(),le.render(T,b),v.setupLights(S.useLegacyLights),j.isArrayCamera){const W=j.cameras;for(let ae=0,Pe=W.length;ae<Pe;ae++){const He=W[ae];cu(T,b,He,He.viewport)}}else cu(T,b,j);D!==null&&(it.updateMultisampleRenderTarget(D),it.updateRenderTargetMipmap(D)),b.isScene===!0&&b.onAfterRender(S,b,j),Ue.resetDefaultState(),H=-1,C=null,y.pop(),y.length>0?v=y[y.length-1]:v=null,h.pop(),h.length>0?T=h[h.length-1]:T=null};function So(b,j,re,W){if(b.visible===!1)return;if(b.layers.test(j.layers)){if(b.isGroup)re=b.renderOrder;else if(b.isLOD)b.autoUpdate===!0&&b.update(j);else if(b.isLight)v.pushLight(b),b.castShadow&&v.pushShadow(b);else if(b.isSprite){if(!b.frustumCulled||ye.intersectsSprite(b)){W&&mt.setFromMatrixPosition(b.matrixWorld).applyMatrix4(je);const He=L.update(b),qe=b.material;qe.visible&&T.push(b,He,qe,re,mt.z,null)}}else if((b.isMesh||b.isLine||b.isPoints)&&(!b.frustumCulled||ye.intersectsObject(b))){const He=L.update(b),qe=b.material;if(W&&(b.boundingSphere!==void 0?(b.boundingSphere===null&&b.computeBoundingSphere(),mt.copy(b.boundingSphere.center)):(He.boundingSphere===null&&He.computeBoundingSphere(),mt.copy(He.boundingSphere.center)),mt.applyMatrix4(b.matrixWorld).applyMatrix4(je)),Array.isArray(qe)){const Xe=He.groups;for(let at=0,Ye=Xe.length;at<Ye;at++){const Je=Xe[at],Bt=qe[Je.materialIndex];Bt&&Bt.visible&&T.push(b,He,Bt,re,mt.z,Je)}}else qe.visible&&T.push(b,He,qe,re,mt.z,null)}}const Pe=b.children;for(let He=0,qe=Pe.length;He<qe;He++)So(Pe[He],j,re,W)}function cu(b,j,re,W){const ae=b.opaque,Pe=b.transmissive,He=b.transparent;v.setupLightsView(re),xe===!0&&Fe.setGlobalState(S.clippingPlanes,re),Pe.length>0&&Va(ae,Pe,j,re),W&&Ke.viewport(U.copy(W)),ae.length>0&&yo(ae,j,re),Pe.length>0&&yo(Pe,j,re),He.length>0&&yo(He,j,re),Ke.buffers.depth.setTest(!0),Ke.buffers.depth.setMask(!0),Ke.buffers.color.setMask(!0),Ke.setPolygonOffset(!1)}function Va(b,j,re,W){const ae=$e.isWebGL2;De===null&&(De=new go(1,1,{generateMipmaps:!0,type:Ne.has("EXT_color_buffer_half_float")?eu:Cs,minFilter:Jl,samples:ae?4:0})),S.getDrawingBufferSize(ze),ae?De.setSize(ze.x,ze.y):De.setSize(rm(ze.x),rm(ze.y));const Pe=S.getRenderTarget();S.setRenderTarget(De),S.getClearColor(q),J=S.getClearAlpha(),J<1&&S.setClearColor(16777215,.5),S.clear();const He=S.toneMapping;S.toneMapping=Gr,yo(b,re,W),it.updateMultisampleRenderTarget(De),it.updateRenderTargetMipmap(De);let qe=!1;for(let Xe=0,at=j.length;Xe<at;Xe++){const Ye=j[Xe],Je=Ye.object,Bt=Ye.geometry,Ht=Ye.material,Vn=Ye.group;if(Ht.side===Fr&&Je.layers.test(W.layers)){const yi=Ht.side;Ht.side=ei,Ht.needsUpdate=!0,fu(Je,re,W,Bt,Ht,Vn),Ht.side=yi,Ht.needsUpdate=!0,qe=!0}}qe===!0&&(it.updateMultisampleRenderTarget(De),it.updateRenderTargetMipmap(De)),S.setRenderTarget(Pe),S.setClearColor(q,J),S.toneMapping=He}function yo(b,j,re){const W=j.isScene===!0?j.overrideMaterial:null;for(let ae=0,Pe=b.length;ae<Pe;ae++){const He=b[ae],qe=He.object,Xe=He.geometry,at=W===null?He.material:W,Ye=He.group;qe.layers.test(re.layers)&&fu(qe,j,re,Xe,at,Ye)}}function fu(b,j,re,W,ae,Pe){b.onBeforeRender(S,j,re,W,ae,Pe),b.modelViewMatrix.multiplyMatrices(re.matrixWorldInverse,b.matrixWorld),b.normalMatrix.getNormalMatrix(b.modelViewMatrix),ae.onBeforeRender(S,j,re,W,b,Pe),ae.transparent===!0&&ae.side===Fr&&ae.forceSinglePass===!1?(ae.side=ei,ae.needsUpdate=!0,S.renderBufferDirect(re,j,W,ae,b,Pe),ae.side=bs,ae.needsUpdate=!0,S.renderBufferDirect(re,j,W,ae,b,Pe),ae.side=Fr):S.renderBufferDirect(re,j,W,ae,b,Pe),b.onAfterRender(S,j,re,W,ae,Pe)}function Mo(b,j,re){j.isScene!==!0&&(j=wn);const W=ut.get(b),ae=v.state.lights,Pe=v.state.shadowsArray,He=ae.state.version,qe=ne.getParameters(b,ae.state,Pe,j,re),Xe=ne.getProgramCacheKey(qe);let at=W.programs;W.environment=b.isMeshStandardMaterial?j.environment:null,W.fog=j.fog,W.envMap=(b.isMeshStandardMaterial?Et:xt).get(b.envMap||W.environment),at===void 0&&(b.addEventListener("dispose",Re),at=new Map,W.programs=at);let Ye=at.get(Xe);if(Ye!==void 0){if(W.currentProgram===Ye&&W.lightsStateVersion===He)return du(b,qe),Ye}else qe.uniforms=ne.getUniforms(b),b.onBuild(re,qe,S),b.onBeforeCompile(qe,S),Ye=ne.acquireProgram(qe,Xe),at.set(Xe,Ye),W.uniforms=qe.uniforms;const Je=W.uniforms;(!b.isShaderMaterial&&!b.isRawShaderMaterial||b.clipping===!0)&&(Je.clippingPlanes=Fe.uniform),du(b,qe),W.needsLights=jf(b),W.lightsStateVersion=He,W.needsLights&&(Je.ambientLightColor.value=ae.state.ambient,Je.lightProbe.value=ae.state.probe,Je.directionalLights.value=ae.state.directional,Je.directionalLightShadows.value=ae.state.directionalShadow,Je.spotLights.value=ae.state.spot,Je.spotLightShadows.value=ae.state.spotShadow,Je.rectAreaLights.value=ae.state.rectArea,Je.ltc_1.value=ae.state.rectAreaLTC1,Je.ltc_2.value=ae.state.rectAreaLTC2,Je.pointLights.value=ae.state.point,Je.pointLightShadows.value=ae.state.pointShadow,Je.hemisphereLights.value=ae.state.hemi,Je.directionalShadowMap.value=ae.state.directionalShadowMap,Je.directionalShadowMatrix.value=ae.state.directionalShadowMatrix,Je.spotShadowMap.value=ae.state.spotShadowMap,Je.spotLightMatrix.value=ae.state.spotLightMatrix,Je.spotLightMap.value=ae.state.spotLightMap,Je.pointShadowMap.value=ae.state.pointShadowMap,Je.pointShadowMatrix.value=ae.state.pointShadowMatrix);const Bt=Ye.getUniforms(),Ht=$c.seqWithValue(Bt.seq,Je);return W.currentProgram=Ye,W.uniformsList=Ht,Ye}function du(b,j){const re=ut.get(b);re.outputColorSpace=j.outputColorSpace,re.instancing=j.instancing,re.skinning=j.skinning,re.morphTargets=j.morphTargets,re.morphNormals=j.morphNormals,re.morphColors=j.morphColors,re.morphTargetsCount=j.morphTargetsCount,re.numClippingPlanes=j.numClippingPlanes,re.numIntersection=j.numClipIntersection,re.vertexAlphas=j.vertexAlphas,re.vertexTangents=j.vertexTangents,re.toneMapping=j.toneMapping}function Wf(b,j,re,W,ae){j.isScene!==!0&&(j=wn),it.resetTextureUnits();const Pe=j.fog,He=W.isMeshStandardMaterial?j.environment:null,qe=D===null?S.outputColorSpace:D.isXRRenderTarget===!0?D.texture.colorSpace:hr,Xe=(W.isMeshStandardMaterial?Et:xt).get(W.envMap||He),at=W.vertexColors===!0&&!!re.attributes.color&&re.attributes.color.itemSize===4,Ye=!!re.attributes.tangent&&(!!W.normalMap||W.anisotropy>0),Je=!!re.morphAttributes.position,Bt=!!re.morphAttributes.normal,Ht=!!re.morphAttributes.color,Vn=W.toneMapped?S.toneMapping:Gr,yi=re.morphAttributes.position||re.morphAttributes.normal||re.morphAttributes.color,Gt=yi!==void 0?yi.length:0,dt=ut.get(W),Wa=v.state.lights;if(xe===!0&&(Me===!0||b!==C)){const dn=b===C&&W.id===H;Fe.setState(W,b,dn)}let en=!1;W.version===dt.__version?(dt.needsLights&&dt.lightsStateVersion!==Wa.state.version||dt.outputColorSpace!==qe||ae.isInstancedMesh&&dt.instancing===!1||!ae.isInstancedMesh&&dt.instancing===!0||ae.isSkinnedMesh&&dt.skinning===!1||!ae.isSkinnedMesh&&dt.skinning===!0||dt.envMap!==Xe||W.fog===!0&&dt.fog!==Pe||dt.numClippingPlanes!==void 0&&(dt.numClippingPlanes!==Fe.numPlanes||dt.numIntersection!==Fe.numIntersection)||dt.vertexAlphas!==at||dt.vertexTangents!==Ye||dt.morphTargets!==Je||dt.morphNormals!==Bt||dt.morphColors!==Ht||dt.toneMapping!==Vn||$e.isWebGL2===!0&&dt.morphTargetsCount!==Gt)&&(en=!0):(en=!0,dt.__version=W.version);let mr=dt.currentProgram;en===!0&&(mr=Mo(W,j,ae));let Xa=!1,Kr=!1,Eo=!1;const sn=mr.getUniforms(),gr=dt.uniforms;if(Ke.useProgram(mr.program)&&(Xa=!0,Kr=!0,Eo=!0),W.id!==H&&(H=W.id,Kr=!0),Xa||C!==b){if(sn.setValue(X,"projectionMatrix",b.projectionMatrix),$e.logarithmicDepthBuffer&&sn.setValue(X,"logDepthBufFC",2/(Math.log(b.far+1)/Math.LN2)),C!==b&&(C=b,Kr=!0,Eo=!0),W.isShaderMaterial||W.isMeshPhongMaterial||W.isMeshToonMaterial||W.isMeshStandardMaterial||W.envMap){const dn=sn.map.cameraPosition;dn!==void 0&&dn.setValue(X,mt.setFromMatrixPosition(b.matrixWorld))}(W.isMeshPhongMaterial||W.isMeshToonMaterial||W.isMeshLambertMaterial||W.isMeshBasicMaterial||W.isMeshStandardMaterial||W.isShaderMaterial)&&sn.setValue(X,"isOrthographic",b.isOrthographicCamera===!0),(W.isMeshPhongMaterial||W.isMeshToonMaterial||W.isMeshLambertMaterial||W.isMeshBasicMaterial||W.isMeshStandardMaterial||W.isShaderMaterial||W.isShadowMaterial||ae.isSkinnedMesh)&&sn.setValue(X,"viewMatrix",b.matrixWorldInverse)}if(ae.isSkinnedMesh){sn.setOptional(X,ae,"bindMatrix"),sn.setOptional(X,ae,"bindMatrixInverse");const dn=ae.skeleton;dn&&($e.floatVertexTextures?(dn.boneTexture===null&&dn.computeBoneTexture(),sn.setValue(X,"boneTexture",dn.boneTexture,it),sn.setValue(X,"boneTextureSize",dn.boneTextureSize)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}const To=re.morphAttributes;if((To.position!==void 0||To.normal!==void 0||To.color!==void 0&&$e.isWebGL2===!0)&&Oe.update(ae,re,mr),(Kr||dt.receiveShadow!==ae.receiveShadow)&&(dt.receiveShadow=ae.receiveShadow,sn.setValue(X,"receiveShadow",ae.receiveShadow)),W.isMeshGouraudMaterial&&W.envMap!==null&&(gr.envMap.value=Xe,gr.flipEnvMap.value=Xe.isCubeTexture&&Xe.isRenderTargetTexture===!1?-1:1),Kr&&(sn.setValue(X,"toneMappingExposure",S.toneMappingExposure),dt.needsLights&&Xf(gr,Eo),Pe&&W.fog===!0&&_e.refreshFogUniforms(gr,Pe),_e.refreshMaterialUniforms(gr,W,ee,fe,De),$c.upload(X,dt.uniformsList,gr,it)),W.isShaderMaterial&&W.uniformsNeedUpdate===!0&&($c.upload(X,dt.uniformsList,gr,it),W.uniformsNeedUpdate=!1),W.isSpriteMaterial&&sn.setValue(X,"center",ae.center),sn.setValue(X,"modelViewMatrix",ae.modelViewMatrix),sn.setValue(X,"normalMatrix",ae.normalMatrix),sn.setValue(X,"modelMatrix",ae.matrixWorld),W.isShaderMaterial||W.isRawShaderMaterial){const dn=W.uniformsGroups;for(let wo=0,qf=dn.length;wo<qf;wo++)if($e.isWebGL2){const ja=dn[wo];tt.update(ja,mr),tt.bind(ja,mr)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return mr}function Xf(b,j){b.ambientLightColor.needsUpdate=j,b.lightProbe.needsUpdate=j,b.directionalLights.needsUpdate=j,b.directionalLightShadows.needsUpdate=j,b.pointLights.needsUpdate=j,b.pointLightShadows.needsUpdate=j,b.spotLights.needsUpdate=j,b.spotLightShadows.needsUpdate=j,b.rectAreaLights.needsUpdate=j,b.hemisphereLights.needsUpdate=j}function jf(b){return b.isMeshLambertMaterial||b.isMeshToonMaterial||b.isMeshPhongMaterial||b.isMeshStandardMaterial||b.isShadowMaterial||b.isShaderMaterial&&b.lights===!0}this.getActiveCubeFace=function(){return P},this.getActiveMipmapLevel=function(){return I},this.getRenderTarget=function(){return D},this.setRenderTargetTextures=function(b,j,re){ut.get(b.texture).__webglTexture=j,ut.get(b.depthTexture).__webglTexture=re;const W=ut.get(b);W.__hasExternalTextures=!0,W.__hasExternalTextures&&(W.__autoAllocateDepthBuffer=re===void 0,W.__autoAllocateDepthBuffer||Ne.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),W.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(b,j){const re=ut.get(b);re.__webglFramebuffer=j,re.__useDefaultFramebuffer=j===void 0},this.setRenderTarget=function(b,j=0,re=0){D=b,P=j,I=re;let W=!0,ae=null,Pe=!1,He=!1;if(b){const Xe=ut.get(b);Xe.__useDefaultFramebuffer!==void 0?(Ke.bindFramebuffer(X.FRAMEBUFFER,null),W=!1):Xe.__webglFramebuffer===void 0?it.setupRenderTarget(b):Xe.__hasExternalTextures&&it.rebindTextures(b,ut.get(b.texture).__webglTexture,ut.get(b.depthTexture).__webglTexture);const at=b.texture;(at.isData3DTexture||at.isDataArrayTexture||at.isCompressedArrayTexture)&&(He=!0);const Ye=ut.get(b).__webglFramebuffer;b.isWebGLCubeRenderTarget?(ae=Ye[j],Pe=!0):$e.isWebGL2&&b.samples>0&&it.useMultisampledRTT(b)===!1?ae=ut.get(b).__webglMultisampledFramebuffer:ae=Ye,U.copy(b.viewport),oe.copy(b.scissor),he=b.scissorTest}else U.copy(Y).multiplyScalar(ee).floor(),oe.copy(V).multiplyScalar(ee).floor(),he=$;if(Ke.bindFramebuffer(X.FRAMEBUFFER,ae)&&$e.drawBuffers&&W&&Ke.drawBuffers(b,ae),Ke.viewport(U),Ke.scissor(oe),Ke.setScissorTest(he),Pe){const Xe=ut.get(b.texture);X.framebufferTexture2D(X.FRAMEBUFFER,X.COLOR_ATTACHMENT0,X.TEXTURE_CUBE_MAP_POSITIVE_X+j,Xe.__webglTexture,re)}else if(He){const Xe=ut.get(b.texture),at=j||0;X.framebufferTextureLayer(X.FRAMEBUFFER,X.COLOR_ATTACHMENT0,Xe.__webglTexture,re||0,at)}H=-1},this.readRenderTargetPixels=function(b,j,re,W,ae,Pe,He){if(!(b&&b.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let qe=ut.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&He!==void 0&&(qe=qe[He]),qe){Ke.bindFramebuffer(X.FRAMEBUFFER,qe);try{const Xe=b.texture,at=Xe.format,Ye=Xe.type;if(at!==Ji&&be.convert(at)!==X.getParameter(X.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const Je=Ye===eu&&(Ne.has("EXT_color_buffer_half_float")||$e.isWebGL2&&Ne.has("EXT_color_buffer_float"));if(Ye!==Cs&&be.convert(Ye)!==X.getParameter(X.IMPLEMENTATION_COLOR_READ_TYPE)&&!(Ye===vs&&($e.isWebGL2||Ne.has("OES_texture_float")||Ne.has("WEBGL_color_buffer_float")))&&!Je){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}j>=0&&j<=b.width-W&&re>=0&&re<=b.height-ae&&X.readPixels(j,re,W,ae,be.convert(at),be.convert(Ye),Pe)}finally{const Xe=D!==null?ut.get(D).__webglFramebuffer:null;Ke.bindFramebuffer(X.FRAMEBUFFER,Xe)}}},this.copyFramebufferToTexture=function(b,j,re=0){const W=Math.pow(2,-re),ae=Math.floor(j.image.width*W),Pe=Math.floor(j.image.height*W);it.setTexture2D(j,0),X.copyTexSubImage2D(X.TEXTURE_2D,re,0,0,b.x,b.y,ae,Pe),Ke.unbindTexture()},this.copyTextureToTexture=function(b,j,re,W=0){const ae=j.image.width,Pe=j.image.height,He=be.convert(re.format),qe=be.convert(re.type);it.setTexture2D(re,0),X.pixelStorei(X.UNPACK_FLIP_Y_WEBGL,re.flipY),X.pixelStorei(X.UNPACK_PREMULTIPLY_ALPHA_WEBGL,re.premultiplyAlpha),X.pixelStorei(X.UNPACK_ALIGNMENT,re.unpackAlignment),j.isDataTexture?X.texSubImage2D(X.TEXTURE_2D,W,b.x,b.y,ae,Pe,He,qe,j.image.data):j.isCompressedTexture?X.compressedTexSubImage2D(X.TEXTURE_2D,W,b.x,b.y,j.mipmaps[0].width,j.mipmaps[0].height,He,j.mipmaps[0].data):X.texSubImage2D(X.TEXTURE_2D,W,b.x,b.y,He,qe,j.image),W===0&&re.generateMipmaps&&X.generateMipmap(X.TEXTURE_2D),Ke.unbindTexture()},this.copyTextureToTexture3D=function(b,j,re,W,ae=0){if(S.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const Pe=b.max.x-b.min.x+1,He=b.max.y-b.min.y+1,qe=b.max.z-b.min.z+1,Xe=be.convert(W.format),at=be.convert(W.type);let Ye;if(W.isData3DTexture)it.setTexture3D(W,0),Ye=X.TEXTURE_3D;else if(W.isDataArrayTexture)it.setTexture2DArray(W,0),Ye=X.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}X.pixelStorei(X.UNPACK_FLIP_Y_WEBGL,W.flipY),X.pixelStorei(X.UNPACK_PREMULTIPLY_ALPHA_WEBGL,W.premultiplyAlpha),X.pixelStorei(X.UNPACK_ALIGNMENT,W.unpackAlignment);const Je=X.getParameter(X.UNPACK_ROW_LENGTH),Bt=X.getParameter(X.UNPACK_IMAGE_HEIGHT),Ht=X.getParameter(X.UNPACK_SKIP_PIXELS),Vn=X.getParameter(X.UNPACK_SKIP_ROWS),yi=X.getParameter(X.UNPACK_SKIP_IMAGES),Gt=re.isCompressedTexture?re.mipmaps[0]:re.image;X.pixelStorei(X.UNPACK_ROW_LENGTH,Gt.width),X.pixelStorei(X.UNPACK_IMAGE_HEIGHT,Gt.height),X.pixelStorei(X.UNPACK_SKIP_PIXELS,b.min.x),X.pixelStorei(X.UNPACK_SKIP_ROWS,b.min.y),X.pixelStorei(X.UNPACK_SKIP_IMAGES,b.min.z),re.isDataTexture||re.isData3DTexture?X.texSubImage3D(Ye,ae,j.x,j.y,j.z,Pe,He,qe,Xe,at,Gt.data):re.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),X.compressedTexSubImage3D(Ye,ae,j.x,j.y,j.z,Pe,He,qe,Xe,Gt.data)):X.texSubImage3D(Ye,ae,j.x,j.y,j.z,Pe,He,qe,Xe,at,Gt),X.pixelStorei(X.UNPACK_ROW_LENGTH,Je),X.pixelStorei(X.UNPACK_IMAGE_HEIGHT,Bt),X.pixelStorei(X.UNPACK_SKIP_PIXELS,Ht),X.pixelStorei(X.UNPACK_SKIP_ROWS,Vn),X.pixelStorei(X.UNPACK_SKIP_IMAGES,yi),ae===0&&W.generateMipmaps&&X.generateMipmap(Ye),Ke.unbindTexture()},this.initTexture=function(b){b.isCubeTexture?it.setTextureCube(b,0):b.isData3DTexture?it.setTexture3D(b,0):b.isDataArrayTexture||b.isCompressedArrayTexture?it.setTexture2DArray(b,0):it.setTexture2D(b,0),Ke.unbindTexture()},this.resetState=function(){P=0,I=0,D=null,Ke.reset(),Ue.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return zr}get physicallyCorrectLights(){return console.warn("THREE.WebGLRenderer: the property .physicallyCorrectLights has been removed. Set renderer.useLegacyLights instead."),!this.useLegacyLights}set physicallyCorrectLights(e){console.warn("THREE.WebGLRenderer: the property .physicallyCorrectLights has been removed. Set renderer.useLegacyLights instead."),this.useLegacyLights=!e}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===ot?lo:RM}set outputEncoding(e){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=e===lo?ot:hr}}class wN extends jM{}wN.prototype.isWebGL1Renderer=!0;class AN extends mi{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,n){return super.copy(e,n),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const n=super.toJSON(e);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(n.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(n.object.backgroundIntensity=this.backgroundIntensity),n}}const Kx={enabled:!1,files:{},add:function(t,e){this.enabled!==!1&&(this.files[t]=e)},get:function(t){if(this.enabled!==!1)return this.files[t]},remove:function(t){delete this.files[t]},clear:function(){this.files={}}};class RN{constructor(e,n,i){const s=this;let o=!1,l=0,u=0,f;const d=[];this.onStart=void 0,this.onLoad=e,this.onProgress=n,this.onError=i,this.itemStart=function(p){u++,o===!1&&s.onStart!==void 0&&s.onStart(p,l,u),o=!0},this.itemEnd=function(p){l++,s.onProgress!==void 0&&s.onProgress(p,l,u),l===u&&(o=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(p){s.onError!==void 0&&s.onError(p)},this.resolveURL=function(p){return f?f(p):p},this.setURLModifier=function(p){return f=p,this},this.addHandler=function(p,g){return d.push(p,g),this},this.removeHandler=function(p){const g=d.indexOf(p);return g!==-1&&d.splice(g,2),this},this.getHandler=function(p){for(let g=0,_=d.length;g<_;g+=2){const x=d[g],E=d[g+1];if(x.global&&(x.lastIndex=0),x.test(p))return E}return null}}}const CN=new RN;class lg{constructor(e){this.manager=e!==void 0?e:CN,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,n){const i=this;return new Promise(function(s,o){i.load(e,s,n,o)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}lg.DEFAULT_MATERIAL_NAME="__DEFAULT";const Ur={};class LN extends Error{constructor(e,n){super(e),this.response=n}}class PN extends lg{constructor(e){super(e)}load(e,n,i,s){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const o=Kx.get(e);if(o!==void 0)return this.manager.itemStart(e),setTimeout(()=>{n&&n(o),this.manager.itemEnd(e)},0),o;if(Ur[e]!==void 0){Ur[e].push({onLoad:n,onProgress:i,onError:s});return}Ur[e]=[],Ur[e].push({onLoad:n,onProgress:i,onError:s});const l=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),u=this.mimeType,f=this.responseType;fetch(l).then(d=>{if(d.status===200||d.status===0){if(d.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||d.body===void 0||d.body.getReader===void 0)return d;const p=Ur[e],g=d.body.getReader(),_=d.headers.get("Content-Length")||d.headers.get("X-File-Size"),x=_?parseInt(_):0,E=x!==0;let T=0;const v=new ReadableStream({start(h){y();function y(){g.read().then(({done:S,value:w})=>{if(S)h.close();else{T+=w.byteLength;const P=new ProgressEvent("progress",{lengthComputable:E,loaded:T,total:x});for(let I=0,D=p.length;I<D;I++){const H=p[I];H.onProgress&&H.onProgress(P)}h.enqueue(w),y()}})}}});return new Response(v)}else throw new LN(`fetch for "${d.url}" responded with ${d.status}: ${d.statusText}`,d)}).then(d=>{switch(f){case"arraybuffer":return d.arrayBuffer();case"blob":return d.blob();case"document":return d.text().then(p=>new DOMParser().parseFromString(p,u));case"json":return d.json();default:if(u===void 0)return d.text();{const g=/charset="?([^;"\s]*)"?/i.exec(u),_=g&&g[1]?g[1].toLowerCase():void 0,x=new TextDecoder(_);return d.arrayBuffer().then(E=>x.decode(E))}}}).then(d=>{Kx.add(e,d);const p=Ur[e];delete Ur[e];for(let g=0,_=p.length;g<_;g++){const x=p[g];x.onLoad&&x.onLoad(d)}}).catch(d=>{const p=Ur[e];if(p===void 0)throw this.manager.itemError(e),d;delete Ur[e];for(let g=0,_=p.length;g<_;g++){const x=p[g];x.onError&&x.onError(d)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:ng}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=ng);class bN extends lg{constructor(e){super(e)}load(e,n,i,s){const o=this,l=new PN(this.manager);l.setPath(this.path),l.setResponseType("arraybuffer"),l.setRequestHeader(this.requestHeader),l.setWithCredentials(this.withCredentials),l.load(e,function(u){try{n(o.parse(u))}catch(f){s?s(f):console.error(f),o.manager.itemError(e)}},i,s)}parse(e){function n(d){const p=new DataView(d),g=32/8*3+32/8*3*3+16/8,_=p.getUint32(80,!0);if(80+32/8+_*g===p.byteLength)return!0;const E=[115,111,108,105,100];for(let T=0;T<5;T++)if(i(E,p,T))return!1;return!0}function i(d,p,g){for(let _=0,x=d.length;_<x;_++)if(d[_]!==p.getUint8(g+_))return!1;return!0}function s(d){const p=new DataView(d),g=p.getUint32(80,!0);let _,x,E,T=!1,v,h,y,S,w;for(let oe=0;oe<80-10;oe++)p.getUint32(oe,!1)==1129270351&&p.getUint8(oe+4)==82&&p.getUint8(oe+5)==61&&(T=!0,v=new Float32Array(g*3*3),h=p.getUint8(oe+6)/255,y=p.getUint8(oe+7)/255,S=p.getUint8(oe+8)/255,w=p.getUint8(oe+9)/255);const P=84,I=12*4+2,D=new Yr,H=new Float32Array(g*3*3),C=new Float32Array(g*3*3),U=new Pt;for(let oe=0;oe<g;oe++){const he=P+oe*I,q=p.getFloat32(he,!0),J=p.getFloat32(he+4,!0),ie=p.getFloat32(he+8,!0);if(T){const fe=p.getUint16(he+48,!0);fe&32768?(_=h,x=y,E=S):(_=(fe&31)/31,x=(fe>>5&31)/31,E=(fe>>10&31)/31)}for(let fe=1;fe<=3;fe++){const ee=he+fe*12,z=oe*3*3+(fe-1)*3;H[z]=p.getFloat32(ee,!0),H[z+1]=p.getFloat32(ee+4,!0),H[z+2]=p.getFloat32(ee+8,!0),C[z]=q,C[z+1]=J,C[z+2]=ie,T&&(U.set(_,x,E).convertSRGBToLinear(),v[z]=U.r,v[z+1]=U.g,v[z+2]=U.b)}}return D.setAttribute("position",new gi(H,3)),D.setAttribute("normal",new gi(C,3)),T&&(D.setAttribute("color",new gi(v,3)),D.hasColors=!0,D.alpha=w),D}function o(d){const p=new Yr,g=/solid([\s\S]*?)endsolid/g,_=/facet([\s\S]*?)endfacet/g;let x=0;const E=/[\s]+([+-]?(?:\d*)(?:\.\d*)?(?:[eE][+-]?\d+)?)/.source,T=new RegExp("vertex"+E+E+E,"g"),v=new RegExp("normal"+E+E+E,"g"),h=[],y=[],S=new Z;let w,P=0,I=0,D=0;for(;(w=g.exec(d))!==null;){I=D;const H=w[0];for(;(w=_.exec(H))!==null;){let oe=0,he=0;const q=w[0];for(;(w=v.exec(q))!==null;)S.x=parseFloat(w[1]),S.y=parseFloat(w[2]),S.z=parseFloat(w[3]),he++;for(;(w=T.exec(q))!==null;)h.push(parseFloat(w[1]),parseFloat(w[2]),parseFloat(w[3])),y.push(S.x,S.y,S.z),oe++,D++;he!==1&&console.error("THREE.STLLoader: Something isn't right with the normal of face number "+x),oe!==3&&console.error("THREE.STLLoader: Something isn't right with the vertices of face number "+x),x++}const C=I,U=D-I;p.addGroup(C,U,P),P++}return p.setAttribute("position",new Vr(h,3)),p.setAttribute("normal",new Vr(y,3)),p}function l(d){return typeof d!="string"?new TextDecoder().decode(d):d}function u(d){if(typeof d=="string"){const p=new Uint8Array(d.length);for(let g=0;g<d.length;g++)p[g]=d.charCodeAt(g)&255;return p.buffer||p}else return d}const f=u(e);return n(f)?s(f):o(l(e))}}var Ef={exports:{}};/**
 * @license
 * Lodash <https://lodash.com/>
 * Copyright OpenJS Foundation and other contributors <https://openjsf.org/>
 * Released under MIT license <https://lodash.com/license>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 */Ef.exports;(function(t,e){(function(){var n,i="4.17.21",s=200,o="Unsupported core-js use. Try https://npms.io/search?q=ponyfill.",l="Expected a function",u="Invalid `variable` option passed into `_.template`",f="__lodash_hash_undefined__",d=500,p="__lodash_placeholder__",g=1,_=2,x=4,E=1,T=2,v=1,h=2,y=4,S=8,w=16,P=32,I=64,D=128,H=256,C=512,U=30,oe="...",he=800,q=16,J=1,ie=2,fe=3,ee=1/0,z=9007199254740991,te=17976931348623157e292,Y=0/0,V=4294967295,$=V-1,ye=V>>>1,xe=[["ary",D],["bind",v],["bindKey",h],["curry",S],["curryRight",w],["flip",C],["partial",P],["partialRight",I],["rearg",H]],Me="[object Arguments]",De="[object Array]",je="[object AsyncFunction]",ze="[object Boolean]",mt="[object Date]",wn="[object DOMException]",et="[object Error]",X="[object Function]",rn="[object GeneratorFunction]",Ne="[object Map]",$e="[object Number]",Ke="[object Null]",vt="[object Object]",ut="[object Promise]",it="[object Proxy]",xt="[object RegExp]",Et="[object Set]",qt="[object String]",N="[object Symbol]",L="[object Undefined]",ne="[object WeakMap]",_e="[object WeakSet]",ge="[object ArrayBuffer]",Se="[object DataView]",Fe="[object Float32Array]",Te="[object Float64Array]",le="[object Int8Array]",Oe="[object Int16Array]",Be="[object Int32Array]",ke="[object Uint8Array]",be="[object Uint8ClampedArray]",Ue="[object Uint16Array]",tt="[object Uint32Array]",At=/\b__p \+= '';/g,B=/\b(__p \+=) '' \+/g,we=/(__e\(.*?\)|\b__t\)) \+\n'';/g,Q=/&(?:amp|lt|gt|quot|#39);/g,ve=/[&<>"']/g,Re=RegExp(Q.source),_t=RegExp(ve.source),Ut=/<%-([\s\S]+?)%>/g,Jt=/<%([\s\S]+?)%>/g,ti=/<%=([\s\S]+?)%>/g,Ot=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,Si=/^\w*$/,_n=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,So=/[\\^$.*+?()[\]{}|]/g,cu=RegExp(So.source),Va=/^\s+/,yo=/\s/,fu=/\{(?:\n\/\* \[wrapped with .+\] \*\/)?\n?/,Mo=/\{\n\/\* \[wrapped with (.+)\] \*/,du=/,? & /,Wf=/[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g,Xf=/[()=,{}\[\]\/\s]/,jf=/\\(\\)?/g,b=/\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g,j=/\w*$/,re=/^[-+]0x[0-9a-f]+$/i,W=/^0b[01]+$/i,ae=/^\[object .+?Constructor\]$/,Pe=/^0o[0-7]+$/i,He=/^(?:0|[1-9]\d*)$/,qe=/[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g,Xe=/($^)/,at=/['\n\r\u2028\u2029\\]/g,Ye="\\ud800-\\udfff",Je="\\u0300-\\u036f",Bt="\\ufe20-\\ufe2f",Ht="\\u20d0-\\u20ff",Vn=Je+Bt+Ht,yi="\\u2700-\\u27bf",Gt="a-z\\xdf-\\xf6\\xf8-\\xff",dt="\\xac\\xb1\\xd7\\xf7",Wa="\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf",en="\\u2000-\\u206f",mr=" \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000",Xa="A-Z\\xc0-\\xd6\\xd8-\\xde",Kr="\\ufe0e\\ufe0f",Eo=dt+Wa+en+mr,sn="['’]",gr="["+Ye+"]",To="["+Eo+"]",dn="["+Vn+"]",wo="\\d+",qf="["+yi+"]",ja="["+Gt+"]",cg="[^"+Ye+Eo+wo+yi+Gt+Xa+"]",Yf="\\ud83c[\\udffb-\\udfff]",YM="(?:"+dn+"|"+Yf+")",fg="[^"+Ye+"]",$f="(?:\\ud83c[\\udde6-\\uddff]){2}",Kf="[\\ud800-\\udbff][\\udc00-\\udfff]",Ao="["+Xa+"]",dg="\\u200d",hg="(?:"+ja+"|"+cg+")",$M="(?:"+Ao+"|"+cg+")",pg="(?:"+sn+"(?:d|ll|m|re|s|t|ve))?",mg="(?:"+sn+"(?:D|LL|M|RE|S|T|VE))?",gg=YM+"?",_g="["+Kr+"]?",KM="(?:"+dg+"(?:"+[fg,$f,Kf].join("|")+")"+_g+gg+")*",ZM="\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])",QM="\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])",vg=_g+gg+KM,JM="(?:"+[qf,$f,Kf].join("|")+")"+vg,eE="(?:"+[fg+dn+"?",dn,$f,Kf,gr].join("|")+")",tE=RegExp(sn,"g"),nE=RegExp(dn,"g"),Zf=RegExp(Yf+"(?="+Yf+")|"+eE+vg,"g"),iE=RegExp([Ao+"?"+ja+"+"+pg+"(?="+[To,Ao,"$"].join("|")+")",$M+"+"+mg+"(?="+[To,Ao+hg,"$"].join("|")+")",Ao+"?"+hg+"+"+pg,Ao+"+"+mg,QM,ZM,wo,JM].join("|"),"g"),rE=RegExp("["+dg+Ye+Vn+Kr+"]"),sE=/[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/,oE=["Array","Buffer","DataView","Date","Error","Float32Array","Float64Array","Function","Int8Array","Int16Array","Int32Array","Map","Math","Object","Promise","RegExp","Set","String","Symbol","TypeError","Uint8Array","Uint8ClampedArray","Uint16Array","Uint32Array","WeakMap","_","clearTimeout","isFinite","parseInt","setTimeout"],aE=-1,Dt={};Dt[Fe]=Dt[Te]=Dt[le]=Dt[Oe]=Dt[Be]=Dt[ke]=Dt[be]=Dt[Ue]=Dt[tt]=!0,Dt[Me]=Dt[De]=Dt[ge]=Dt[ze]=Dt[Se]=Dt[mt]=Dt[et]=Dt[X]=Dt[Ne]=Dt[$e]=Dt[vt]=Dt[xt]=Dt[Et]=Dt[qt]=Dt[ne]=!1;var Lt={};Lt[Me]=Lt[De]=Lt[ge]=Lt[Se]=Lt[ze]=Lt[mt]=Lt[Fe]=Lt[Te]=Lt[le]=Lt[Oe]=Lt[Be]=Lt[Ne]=Lt[$e]=Lt[vt]=Lt[xt]=Lt[Et]=Lt[qt]=Lt[N]=Lt[ke]=Lt[be]=Lt[Ue]=Lt[tt]=!0,Lt[et]=Lt[X]=Lt[ne]=!1;var lE={À:"A",Á:"A",Â:"A",Ã:"A",Ä:"A",Å:"A",à:"a",á:"a",â:"a",ã:"a",ä:"a",å:"a",Ç:"C",ç:"c",Ð:"D",ð:"d",È:"E",É:"E",Ê:"E",Ë:"E",è:"e",é:"e",ê:"e",ë:"e",Ì:"I",Í:"I",Î:"I",Ï:"I",ì:"i",í:"i",î:"i",ï:"i",Ñ:"N",ñ:"n",Ò:"O",Ó:"O",Ô:"O",Õ:"O",Ö:"O",Ø:"O",ò:"o",ó:"o",ô:"o",õ:"o",ö:"o",ø:"o",Ù:"U",Ú:"U",Û:"U",Ü:"U",ù:"u",ú:"u",û:"u",ü:"u",Ý:"Y",ý:"y",ÿ:"y",Æ:"Ae",æ:"ae",Þ:"Th",þ:"th",ß:"ss",Ā:"A",Ă:"A",Ą:"A",ā:"a",ă:"a",ą:"a",Ć:"C",Ĉ:"C",Ċ:"C",Č:"C",ć:"c",ĉ:"c",ċ:"c",č:"c",Ď:"D",Đ:"D",ď:"d",đ:"d",Ē:"E",Ĕ:"E",Ė:"E",Ę:"E",Ě:"E",ē:"e",ĕ:"e",ė:"e",ę:"e",ě:"e",Ĝ:"G",Ğ:"G",Ġ:"G",Ģ:"G",ĝ:"g",ğ:"g",ġ:"g",ģ:"g",Ĥ:"H",Ħ:"H",ĥ:"h",ħ:"h",Ĩ:"I",Ī:"I",Ĭ:"I",Į:"I",İ:"I",ĩ:"i",ī:"i",ĭ:"i",į:"i",ı:"i",Ĵ:"J",ĵ:"j",Ķ:"K",ķ:"k",ĸ:"k",Ĺ:"L",Ļ:"L",Ľ:"L",Ŀ:"L",Ł:"L",ĺ:"l",ļ:"l",ľ:"l",ŀ:"l",ł:"l",Ń:"N",Ņ:"N",Ň:"N",Ŋ:"N",ń:"n",ņ:"n",ň:"n",ŋ:"n",Ō:"O",Ŏ:"O",Ő:"O",ō:"o",ŏ:"o",ő:"o",Ŕ:"R",Ŗ:"R",Ř:"R",ŕ:"r",ŗ:"r",ř:"r",Ś:"S",Ŝ:"S",Ş:"S",Š:"S",ś:"s",ŝ:"s",ş:"s",š:"s",Ţ:"T",Ť:"T",Ŧ:"T",ţ:"t",ť:"t",ŧ:"t",Ũ:"U",Ū:"U",Ŭ:"U",Ů:"U",Ű:"U",Ų:"U",ũ:"u",ū:"u",ŭ:"u",ů:"u",ű:"u",ų:"u",Ŵ:"W",ŵ:"w",Ŷ:"Y",ŷ:"y",Ÿ:"Y",Ź:"Z",Ż:"Z",Ž:"Z",ź:"z",ż:"z",ž:"z",Ĳ:"IJ",ĳ:"ij",Œ:"Oe",œ:"oe",ŉ:"'n",ſ:"s"},uE={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"},cE={"&amp;":"&","&lt;":"<","&gt;":">","&quot;":'"',"&#39;":"'"},fE={"\\":"\\","'":"'","\n":"n","\r":"r","\u2028":"u2028","\u2029":"u2029"},dE=parseFloat,hE=parseInt,xg=typeof ll=="object"&&ll&&ll.Object===Object&&ll,pE=typeof self=="object"&&self&&self.Object===Object&&self,vn=xg||pE||Function("return this")(),Qf=e&&!e.nodeType&&e,Ns=Qf&&!0&&t&&!t.nodeType&&t,Sg=Ns&&Ns.exports===Qf,Jf=Sg&&xg.process,Mi=function(){try{var k=Ns&&Ns.require&&Ns.require("util").types;return k||Jf&&Jf.binding&&Jf.binding("util")}catch{}}(),yg=Mi&&Mi.isArrayBuffer,Mg=Mi&&Mi.isDate,Eg=Mi&&Mi.isMap,Tg=Mi&&Mi.isRegExp,wg=Mi&&Mi.isSet,Ag=Mi&&Mi.isTypedArray;function ni(k,se,K){switch(K.length){case 0:return k.call(se);case 1:return k.call(se,K[0]);case 2:return k.call(se,K[0],K[1]);case 3:return k.call(se,K[0],K[1],K[2])}return k.apply(se,K)}function mE(k,se,K,Ce){for(var Ze=-1,yt=k==null?0:k.length;++Ze<yt;){var on=k[Ze];se(Ce,on,K(on),k)}return Ce}function Ei(k,se){for(var K=-1,Ce=k==null?0:k.length;++K<Ce&&se(k[K],K,k)!==!1;);return k}function gE(k,se){for(var K=k==null?0:k.length;K--&&se(k[K],K,k)!==!1;);return k}function Rg(k,se){for(var K=-1,Ce=k==null?0:k.length;++K<Ce;)if(!se(k[K],K,k))return!1;return!0}function Zr(k,se){for(var K=-1,Ce=k==null?0:k.length,Ze=0,yt=[];++K<Ce;){var on=k[K];se(on,K,k)&&(yt[Ze++]=on)}return yt}function hu(k,se){var K=k==null?0:k.length;return!!K&&Ro(k,se,0)>-1}function ed(k,se,K){for(var Ce=-1,Ze=k==null?0:k.length;++Ce<Ze;)if(K(se,k[Ce]))return!0;return!1}function zt(k,se){for(var K=-1,Ce=k==null?0:k.length,Ze=Array(Ce);++K<Ce;)Ze[K]=se(k[K],K,k);return Ze}function Qr(k,se){for(var K=-1,Ce=se.length,Ze=k.length;++K<Ce;)k[Ze+K]=se[K];return k}function td(k,se,K,Ce){var Ze=-1,yt=k==null?0:k.length;for(Ce&&yt&&(K=k[++Ze]);++Ze<yt;)K=se(K,k[Ze],Ze,k);return K}function _E(k,se,K,Ce){var Ze=k==null?0:k.length;for(Ce&&Ze&&(K=k[--Ze]);Ze--;)K=se(K,k[Ze],Ze,k);return K}function nd(k,se){for(var K=-1,Ce=k==null?0:k.length;++K<Ce;)if(se(k[K],K,k))return!0;return!1}var vE=id("length");function xE(k){return k.split("")}function SE(k){return k.match(Wf)||[]}function Cg(k,se,K){var Ce;return K(k,function(Ze,yt,on){if(se(Ze,yt,on))return Ce=yt,!1}),Ce}function pu(k,se,K,Ce){for(var Ze=k.length,yt=K+(Ce?1:-1);Ce?yt--:++yt<Ze;)if(se(k[yt],yt,k))return yt;return-1}function Ro(k,se,K){return se===se?UE(k,se,K):pu(k,Lg,K)}function yE(k,se,K,Ce){for(var Ze=K-1,yt=k.length;++Ze<yt;)if(Ce(k[Ze],se))return Ze;return-1}function Lg(k){return k!==k}function Pg(k,se){var K=k==null?0:k.length;return K?sd(k,se)/K:Y}function id(k){return function(se){return se==null?n:se[k]}}function rd(k){return function(se){return k==null?n:k[se]}}function bg(k,se,K,Ce,Ze){return Ze(k,function(yt,on,Rt){K=Ce?(Ce=!1,yt):se(K,yt,on,Rt)}),K}function ME(k,se){var K=k.length;for(k.sort(se);K--;)k[K]=k[K].value;return k}function sd(k,se){for(var K,Ce=-1,Ze=k.length;++Ce<Ze;){var yt=se(k[Ce]);yt!==n&&(K=K===n?yt:K+yt)}return K}function od(k,se){for(var K=-1,Ce=Array(k);++K<k;)Ce[K]=se(K);return Ce}function EE(k,se){return zt(se,function(K){return[K,k[K]]})}function Ug(k){return k&&k.slice(0,Fg(k)+1).replace(Va,"")}function ii(k){return function(se){return k(se)}}function ad(k,se){return zt(se,function(K){return k[K]})}function qa(k,se){return k.has(se)}function Dg(k,se){for(var K=-1,Ce=k.length;++K<Ce&&Ro(se,k[K],0)>-1;);return K}function Ig(k,se){for(var K=k.length;K--&&Ro(se,k[K],0)>-1;);return K}function TE(k,se){for(var K=k.length,Ce=0;K--;)k[K]===se&&++Ce;return Ce}var wE=rd(lE),AE=rd(uE);function RE(k){return"\\"+fE[k]}function CE(k,se){return k==null?n:k[se]}function Co(k){return rE.test(k)}function LE(k){return sE.test(k)}function PE(k){for(var se,K=[];!(se=k.next()).done;)K.push(se.value);return K}function ld(k){var se=-1,K=Array(k.size);return k.forEach(function(Ce,Ze){K[++se]=[Ze,Ce]}),K}function Ng(k,se){return function(K){return k(se(K))}}function Jr(k,se){for(var K=-1,Ce=k.length,Ze=0,yt=[];++K<Ce;){var on=k[K];(on===se||on===p)&&(k[K]=p,yt[Ze++]=K)}return yt}function mu(k){var se=-1,K=Array(k.size);return k.forEach(function(Ce){K[++se]=Ce}),K}function bE(k){var se=-1,K=Array(k.size);return k.forEach(function(Ce){K[++se]=[Ce,Ce]}),K}function UE(k,se,K){for(var Ce=K-1,Ze=k.length;++Ce<Ze;)if(k[Ce]===se)return Ce;return-1}function DE(k,se,K){for(var Ce=K+1;Ce--;)if(k[Ce]===se)return Ce;return Ce}function Lo(k){return Co(k)?NE(k):vE(k)}function zi(k){return Co(k)?FE(k):xE(k)}function Fg(k){for(var se=k.length;se--&&yo.test(k.charAt(se)););return se}var IE=rd(cE);function NE(k){for(var se=Zf.lastIndex=0;Zf.test(k);)++se;return se}function FE(k){return k.match(Zf)||[]}function OE(k){return k.match(iE)||[]}var BE=function k(se){se=se==null?vn:Po.defaults(vn.Object(),se,Po.pick(vn,oE));var K=se.Array,Ce=se.Date,Ze=se.Error,yt=se.Function,on=se.Math,Rt=se.Object,ud=se.RegExp,zE=se.String,Ti=se.TypeError,gu=K.prototype,kE=yt.prototype,bo=Rt.prototype,_u=se["__core-js_shared__"],vu=kE.toString,Tt=bo.hasOwnProperty,HE=0,Og=function(){var r=/[^.]+$/.exec(_u&&_u.keys&&_u.keys.IE_PROTO||"");return r?"Symbol(src)_1."+r:""}(),xu=bo.toString,GE=vu.call(Rt),VE=vn._,WE=ud("^"+vu.call(Tt).replace(So,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$"),Su=Sg?se.Buffer:n,es=se.Symbol,yu=se.Uint8Array,Bg=Su?Su.allocUnsafe:n,Mu=Ng(Rt.getPrototypeOf,Rt),zg=Rt.create,kg=bo.propertyIsEnumerable,Eu=gu.splice,Hg=es?es.isConcatSpreadable:n,Ya=es?es.iterator:n,Fs=es?es.toStringTag:n,Tu=function(){try{var r=Hs(Rt,"defineProperty");return r({},"",{}),r}catch{}}(),XE=se.clearTimeout!==vn.clearTimeout&&se.clearTimeout,jE=Ce&&Ce.now!==vn.Date.now&&Ce.now,qE=se.setTimeout!==vn.setTimeout&&se.setTimeout,wu=on.ceil,Au=on.floor,cd=Rt.getOwnPropertySymbols,YE=Su?Su.isBuffer:n,Gg=se.isFinite,$E=gu.join,KE=Ng(Rt.keys,Rt),an=on.max,An=on.min,ZE=Ce.now,QE=se.parseInt,Vg=on.random,JE=gu.reverse,fd=Hs(se,"DataView"),$a=Hs(se,"Map"),dd=Hs(se,"Promise"),Uo=Hs(se,"Set"),Ka=Hs(se,"WeakMap"),Za=Hs(Rt,"create"),Ru=Ka&&new Ka,Do={},e1=Gs(fd),t1=Gs($a),n1=Gs(dd),i1=Gs(Uo),r1=Gs(Ka),Cu=es?es.prototype:n,Qa=Cu?Cu.valueOf:n,Wg=Cu?Cu.toString:n;function A(r){if(Yt(r)&&!Qe(r)&&!(r instanceof ht)){if(r instanceof wi)return r;if(Tt.call(r,"__wrapped__"))return X_(r)}return new wi(r)}var Io=function(){function r(){}return function(a){if(!Vt(a))return{};if(zg)return zg(a);r.prototype=a;var c=new r;return r.prototype=n,c}}();function Lu(){}function wi(r,a){this.__wrapped__=r,this.__actions__=[],this.__chain__=!!a,this.__index__=0,this.__values__=n}A.templateSettings={escape:Ut,evaluate:Jt,interpolate:ti,variable:"",imports:{_:A}},A.prototype=Lu.prototype,A.prototype.constructor=A,wi.prototype=Io(Lu.prototype),wi.prototype.constructor=wi;function ht(r){this.__wrapped__=r,this.__actions__=[],this.__dir__=1,this.__filtered__=!1,this.__iteratees__=[],this.__takeCount__=V,this.__views__=[]}function s1(){var r=new ht(this.__wrapped__);return r.__actions__=Wn(this.__actions__),r.__dir__=this.__dir__,r.__filtered__=this.__filtered__,r.__iteratees__=Wn(this.__iteratees__),r.__takeCount__=this.__takeCount__,r.__views__=Wn(this.__views__),r}function o1(){if(this.__filtered__){var r=new ht(this);r.__dir__=-1,r.__filtered__=!0}else r=this.clone(),r.__dir__*=-1;return r}function a1(){var r=this.__wrapped__.value(),a=this.__dir__,c=Qe(r),m=a<0,M=c?r.length:0,R=xT(0,M,this.__views__),F=R.start,O=R.end,G=O-F,ue=m?O:F-1,ce=this.__iteratees__,pe=ce.length,Ae=0,Ie=An(G,this.__takeCount__);if(!c||!m&&M==G&&Ie==G)return p_(r,this.__actions__);var Ve=[];e:for(;G--&&Ae<Ie;){ue+=a;for(var rt=-1,We=r[ue];++rt<pe;){var ft=ce[rt],gt=ft.iteratee,oi=ft.type,Fn=gt(We);if(oi==ie)We=Fn;else if(!Fn){if(oi==J)continue e;break e}}Ve[Ae++]=We}return Ve}ht.prototype=Io(Lu.prototype),ht.prototype.constructor=ht;function Os(r){var a=-1,c=r==null?0:r.length;for(this.clear();++a<c;){var m=r[a];this.set(m[0],m[1])}}function l1(){this.__data__=Za?Za(null):{},this.size=0}function u1(r){var a=this.has(r)&&delete this.__data__[r];return this.size-=a?1:0,a}function c1(r){var a=this.__data__;if(Za){var c=a[r];return c===f?n:c}return Tt.call(a,r)?a[r]:n}function f1(r){var a=this.__data__;return Za?a[r]!==n:Tt.call(a,r)}function d1(r,a){var c=this.__data__;return this.size+=this.has(r)?0:1,c[r]=Za&&a===n?f:a,this}Os.prototype.clear=l1,Os.prototype.delete=u1,Os.prototype.get=c1,Os.prototype.has=f1,Os.prototype.set=d1;function _r(r){var a=-1,c=r==null?0:r.length;for(this.clear();++a<c;){var m=r[a];this.set(m[0],m[1])}}function h1(){this.__data__=[],this.size=0}function p1(r){var a=this.__data__,c=Pu(a,r);if(c<0)return!1;var m=a.length-1;return c==m?a.pop():Eu.call(a,c,1),--this.size,!0}function m1(r){var a=this.__data__,c=Pu(a,r);return c<0?n:a[c][1]}function g1(r){return Pu(this.__data__,r)>-1}function _1(r,a){var c=this.__data__,m=Pu(c,r);return m<0?(++this.size,c.push([r,a])):c[m][1]=a,this}_r.prototype.clear=h1,_r.prototype.delete=p1,_r.prototype.get=m1,_r.prototype.has=g1,_r.prototype.set=_1;function vr(r){var a=-1,c=r==null?0:r.length;for(this.clear();++a<c;){var m=r[a];this.set(m[0],m[1])}}function v1(){this.size=0,this.__data__={hash:new Os,map:new($a||_r),string:new Os}}function x1(r){var a=Gu(this,r).delete(r);return this.size-=a?1:0,a}function S1(r){return Gu(this,r).get(r)}function y1(r){return Gu(this,r).has(r)}function M1(r,a){var c=Gu(this,r),m=c.size;return c.set(r,a),this.size+=c.size==m?0:1,this}vr.prototype.clear=v1,vr.prototype.delete=x1,vr.prototype.get=S1,vr.prototype.has=y1,vr.prototype.set=M1;function Bs(r){var a=-1,c=r==null?0:r.length;for(this.__data__=new vr;++a<c;)this.add(r[a])}function E1(r){return this.__data__.set(r,f),this}function T1(r){return this.__data__.has(r)}Bs.prototype.add=Bs.prototype.push=E1,Bs.prototype.has=T1;function ki(r){var a=this.__data__=new _r(r);this.size=a.size}function w1(){this.__data__=new _r,this.size=0}function A1(r){var a=this.__data__,c=a.delete(r);return this.size=a.size,c}function R1(r){return this.__data__.get(r)}function C1(r){return this.__data__.has(r)}function L1(r,a){var c=this.__data__;if(c instanceof _r){var m=c.__data__;if(!$a||m.length<s-1)return m.push([r,a]),this.size=++c.size,this;c=this.__data__=new vr(m)}return c.set(r,a),this.size=c.size,this}ki.prototype.clear=w1,ki.prototype.delete=A1,ki.prototype.get=R1,ki.prototype.has=C1,ki.prototype.set=L1;function Xg(r,a){var c=Qe(r),m=!c&&Vs(r),M=!c&&!m&&ss(r),R=!c&&!m&&!M&&Bo(r),F=c||m||M||R,O=F?od(r.length,zE):[],G=O.length;for(var ue in r)(a||Tt.call(r,ue))&&!(F&&(ue=="length"||M&&(ue=="offset"||ue=="parent")||R&&(ue=="buffer"||ue=="byteLength"||ue=="byteOffset")||Mr(ue,G)))&&O.push(ue);return O}function jg(r){var a=r.length;return a?r[Ed(0,a-1)]:n}function P1(r,a){return Vu(Wn(r),zs(a,0,r.length))}function b1(r){return Vu(Wn(r))}function hd(r,a,c){(c!==n&&!Hi(r[a],c)||c===n&&!(a in r))&&xr(r,a,c)}function Ja(r,a,c){var m=r[a];(!(Tt.call(r,a)&&Hi(m,c))||c===n&&!(a in r))&&xr(r,a,c)}function Pu(r,a){for(var c=r.length;c--;)if(Hi(r[c][0],a))return c;return-1}function U1(r,a,c,m){return ts(r,function(M,R,F){a(m,M,c(M),F)}),m}function qg(r,a){return r&&rr(a,hn(a),r)}function D1(r,a){return r&&rr(a,jn(a),r)}function xr(r,a,c){a=="__proto__"&&Tu?Tu(r,a,{configurable:!0,enumerable:!0,value:c,writable:!0}):r[a]=c}function pd(r,a){for(var c=-1,m=a.length,M=K(m),R=r==null;++c<m;)M[c]=R?n:Yd(r,a[c]);return M}function zs(r,a,c){return r===r&&(c!==n&&(r=r<=c?r:c),a!==n&&(r=r>=a?r:a)),r}function Ai(r,a,c,m,M,R){var F,O=a&g,G=a&_,ue=a&x;if(c&&(F=M?c(r,m,M,R):c(r)),F!==n)return F;if(!Vt(r))return r;var ce=Qe(r);if(ce){if(F=yT(r),!O)return Wn(r,F)}else{var pe=Rn(r),Ae=pe==X||pe==rn;if(ss(r))return __(r,O);if(pe==vt||pe==Me||Ae&&!M){if(F=G||Ae?{}:F_(r),!O)return G?cT(r,D1(F,r)):uT(r,qg(F,r))}else{if(!Lt[pe])return M?r:{};F=MT(r,pe,O)}}R||(R=new ki);var Ie=R.get(r);if(Ie)return Ie;R.set(r,F),fv(r)?r.forEach(function(We){F.add(Ai(We,a,c,We,r,R))}):uv(r)&&r.forEach(function(We,ft){F.set(ft,Ai(We,a,c,ft,r,R))});var Ve=ue?G?Id:Dd:G?jn:hn,rt=ce?n:Ve(r);return Ei(rt||r,function(We,ft){rt&&(ft=We,We=r[ft]),Ja(F,ft,Ai(We,a,c,ft,r,R))}),F}function I1(r){var a=hn(r);return function(c){return Yg(c,r,a)}}function Yg(r,a,c){var m=c.length;if(r==null)return!m;for(r=Rt(r);m--;){var M=c[m],R=a[M],F=r[M];if(F===n&&!(M in r)||!R(F))return!1}return!0}function $g(r,a,c){if(typeof r!="function")throw new Ti(l);return ol(function(){r.apply(n,c)},a)}function el(r,a,c,m){var M=-1,R=hu,F=!0,O=r.length,G=[],ue=a.length;if(!O)return G;c&&(a=zt(a,ii(c))),m?(R=ed,F=!1):a.length>=s&&(R=qa,F=!1,a=new Bs(a));e:for(;++M<O;){var ce=r[M],pe=c==null?ce:c(ce);if(ce=m||ce!==0?ce:0,F&&pe===pe){for(var Ae=ue;Ae--;)if(a[Ae]===pe)continue e;G.push(ce)}else R(a,pe,m)||G.push(ce)}return G}var ts=M_(ir),Kg=M_(gd,!0);function N1(r,a){var c=!0;return ts(r,function(m,M,R){return c=!!a(m,M,R),c}),c}function bu(r,a,c){for(var m=-1,M=r.length;++m<M;){var R=r[m],F=a(R);if(F!=null&&(O===n?F===F&&!si(F):c(F,O)))var O=F,G=R}return G}function F1(r,a,c,m){var M=r.length;for(c=nt(c),c<0&&(c=-c>M?0:M+c),m=m===n||m>M?M:nt(m),m<0&&(m+=M),m=c>m?0:hv(m);c<m;)r[c++]=a;return r}function Zg(r,a){var c=[];return ts(r,function(m,M,R){a(m,M,R)&&c.push(m)}),c}function xn(r,a,c,m,M){var R=-1,F=r.length;for(c||(c=TT),M||(M=[]);++R<F;){var O=r[R];a>0&&c(O)?a>1?xn(O,a-1,c,m,M):Qr(M,O):m||(M[M.length]=O)}return M}var md=E_(),Qg=E_(!0);function ir(r,a){return r&&md(r,a,hn)}function gd(r,a){return r&&Qg(r,a,hn)}function Uu(r,a){return Zr(a,function(c){return Er(r[c])})}function ks(r,a){a=is(a,r);for(var c=0,m=a.length;r!=null&&c<m;)r=r[sr(a[c++])];return c&&c==m?r:n}function Jg(r,a,c){var m=a(r);return Qe(r)?m:Qr(m,c(r))}function In(r){return r==null?r===n?L:Ke:Fs&&Fs in Rt(r)?vT(r):bT(r)}function _d(r,a){return r>a}function O1(r,a){return r!=null&&Tt.call(r,a)}function B1(r,a){return r!=null&&a in Rt(r)}function z1(r,a,c){return r>=An(a,c)&&r<an(a,c)}function vd(r,a,c){for(var m=c?ed:hu,M=r[0].length,R=r.length,F=R,O=K(R),G=1/0,ue=[];F--;){var ce=r[F];F&&a&&(ce=zt(ce,ii(a))),G=An(ce.length,G),O[F]=!c&&(a||M>=120&&ce.length>=120)?new Bs(F&&ce):n}ce=r[0];var pe=-1,Ae=O[0];e:for(;++pe<M&&ue.length<G;){var Ie=ce[pe],Ve=a?a(Ie):Ie;if(Ie=c||Ie!==0?Ie:0,!(Ae?qa(Ae,Ve):m(ue,Ve,c))){for(F=R;--F;){var rt=O[F];if(!(rt?qa(rt,Ve):m(r[F],Ve,c)))continue e}Ae&&Ae.push(Ve),ue.push(Ie)}}return ue}function k1(r,a,c,m){return ir(r,function(M,R,F){a(m,c(M),R,F)}),m}function tl(r,a,c){a=is(a,r),r=k_(r,a);var m=r==null?r:r[sr(Ci(a))];return m==null?n:ni(m,r,c)}function e_(r){return Yt(r)&&In(r)==Me}function H1(r){return Yt(r)&&In(r)==ge}function G1(r){return Yt(r)&&In(r)==mt}function nl(r,a,c,m,M){return r===a?!0:r==null||a==null||!Yt(r)&&!Yt(a)?r!==r&&a!==a:V1(r,a,c,m,nl,M)}function V1(r,a,c,m,M,R){var F=Qe(r),O=Qe(a),G=F?De:Rn(r),ue=O?De:Rn(a);G=G==Me?vt:G,ue=ue==Me?vt:ue;var ce=G==vt,pe=ue==vt,Ae=G==ue;if(Ae&&ss(r)){if(!ss(a))return!1;F=!0,ce=!1}if(Ae&&!ce)return R||(R=new ki),F||Bo(r)?D_(r,a,c,m,M,R):gT(r,a,G,c,m,M,R);if(!(c&E)){var Ie=ce&&Tt.call(r,"__wrapped__"),Ve=pe&&Tt.call(a,"__wrapped__");if(Ie||Ve){var rt=Ie?r.value():r,We=Ve?a.value():a;return R||(R=new ki),M(rt,We,c,m,R)}}return Ae?(R||(R=new ki),_T(r,a,c,m,M,R)):!1}function W1(r){return Yt(r)&&Rn(r)==Ne}function xd(r,a,c,m){var M=c.length,R=M,F=!m;if(r==null)return!R;for(r=Rt(r);M--;){var O=c[M];if(F&&O[2]?O[1]!==r[O[0]]:!(O[0]in r))return!1}for(;++M<R;){O=c[M];var G=O[0],ue=r[G],ce=O[1];if(F&&O[2]){if(ue===n&&!(G in r))return!1}else{var pe=new ki;if(m)var Ae=m(ue,ce,G,r,a,pe);if(!(Ae===n?nl(ce,ue,E|T,m,pe):Ae))return!1}}return!0}function t_(r){if(!Vt(r)||AT(r))return!1;var a=Er(r)?WE:ae;return a.test(Gs(r))}function X1(r){return Yt(r)&&In(r)==xt}function j1(r){return Yt(r)&&Rn(r)==Et}function q1(r){return Yt(r)&&$u(r.length)&&!!Dt[In(r)]}function n_(r){return typeof r=="function"?r:r==null?qn:typeof r=="object"?Qe(r)?s_(r[0],r[1]):r_(r):Tv(r)}function Sd(r){if(!sl(r))return KE(r);var a=[];for(var c in Rt(r))Tt.call(r,c)&&c!="constructor"&&a.push(c);return a}function Y1(r){if(!Vt(r))return PT(r);var a=sl(r),c=[];for(var m in r)m=="constructor"&&(a||!Tt.call(r,m))||c.push(m);return c}function yd(r,a){return r<a}function i_(r,a){var c=-1,m=Xn(r)?K(r.length):[];return ts(r,function(M,R,F){m[++c]=a(M,R,F)}),m}function r_(r){var a=Fd(r);return a.length==1&&a[0][2]?B_(a[0][0],a[0][1]):function(c){return c===r||xd(c,r,a)}}function s_(r,a){return Bd(r)&&O_(a)?B_(sr(r),a):function(c){var m=Yd(c,r);return m===n&&m===a?$d(c,r):nl(a,m,E|T)}}function Du(r,a,c,m,M){r!==a&&md(a,function(R,F){if(M||(M=new ki),Vt(R))$1(r,a,F,c,Du,m,M);else{var O=m?m(kd(r,F),R,F+"",r,a,M):n;O===n&&(O=R),hd(r,F,O)}},jn)}function $1(r,a,c,m,M,R,F){var O=kd(r,c),G=kd(a,c),ue=F.get(G);if(ue){hd(r,c,ue);return}var ce=R?R(O,G,c+"",r,a,F):n,pe=ce===n;if(pe){var Ae=Qe(G),Ie=!Ae&&ss(G),Ve=!Ae&&!Ie&&Bo(G);ce=G,Ae||Ie||Ve?Qe(O)?ce=O:Kt(O)?ce=Wn(O):Ie?(pe=!1,ce=__(G,!0)):Ve?(pe=!1,ce=v_(G,!0)):ce=[]:al(G)||Vs(G)?(ce=O,Vs(O)?ce=pv(O):(!Vt(O)||Er(O))&&(ce=F_(G))):pe=!1}pe&&(F.set(G,ce),M(ce,G,m,R,F),F.delete(G)),hd(r,c,ce)}function o_(r,a){var c=r.length;if(c)return a+=a<0?c:0,Mr(a,c)?r[a]:n}function a_(r,a,c){a.length?a=zt(a,function(R){return Qe(R)?function(F){return ks(F,R.length===1?R[0]:R)}:R}):a=[qn];var m=-1;a=zt(a,ii(Ge()));var M=i_(r,function(R,F,O){var G=zt(a,function(ue){return ue(R)});return{criteria:G,index:++m,value:R}});return ME(M,function(R,F){return lT(R,F,c)})}function K1(r,a){return l_(r,a,function(c,m){return $d(r,m)})}function l_(r,a,c){for(var m=-1,M=a.length,R={};++m<M;){var F=a[m],O=ks(r,F);c(O,F)&&il(R,is(F,r),O)}return R}function Z1(r){return function(a){return ks(a,r)}}function Md(r,a,c,m){var M=m?yE:Ro,R=-1,F=a.length,O=r;for(r===a&&(a=Wn(a)),c&&(O=zt(r,ii(c)));++R<F;)for(var G=0,ue=a[R],ce=c?c(ue):ue;(G=M(O,ce,G,m))>-1;)O!==r&&Eu.call(O,G,1),Eu.call(r,G,1);return r}function u_(r,a){for(var c=r?a.length:0,m=c-1;c--;){var M=a[c];if(c==m||M!==R){var R=M;Mr(M)?Eu.call(r,M,1):Ad(r,M)}}return r}function Ed(r,a){return r+Au(Vg()*(a-r+1))}function Q1(r,a,c,m){for(var M=-1,R=an(wu((a-r)/(c||1)),0),F=K(R);R--;)F[m?R:++M]=r,r+=c;return F}function Td(r,a){var c="";if(!r||a<1||a>z)return c;do a%2&&(c+=r),a=Au(a/2),a&&(r+=r);while(a);return c}function lt(r,a){return Hd(z_(r,a,qn),r+"")}function J1(r){return jg(zo(r))}function eT(r,a){var c=zo(r);return Vu(c,zs(a,0,c.length))}function il(r,a,c,m){if(!Vt(r))return r;a=is(a,r);for(var M=-1,R=a.length,F=R-1,O=r;O!=null&&++M<R;){var G=sr(a[M]),ue=c;if(G==="__proto__"||G==="constructor"||G==="prototype")return r;if(M!=F){var ce=O[G];ue=m?m(ce,G,O):n,ue===n&&(ue=Vt(ce)?ce:Mr(a[M+1])?[]:{})}Ja(O,G,ue),O=O[G]}return r}var c_=Ru?function(r,a){return Ru.set(r,a),r}:qn,tT=Tu?function(r,a){return Tu(r,"toString",{configurable:!0,enumerable:!1,value:Zd(a),writable:!0})}:qn;function nT(r){return Vu(zo(r))}function Ri(r,a,c){var m=-1,M=r.length;a<0&&(a=-a>M?0:M+a),c=c>M?M:c,c<0&&(c+=M),M=a>c?0:c-a>>>0,a>>>=0;for(var R=K(M);++m<M;)R[m]=r[m+a];return R}function iT(r,a){var c;return ts(r,function(m,M,R){return c=a(m,M,R),!c}),!!c}function Iu(r,a,c){var m=0,M=r==null?m:r.length;if(typeof a=="number"&&a===a&&M<=ye){for(;m<M;){var R=m+M>>>1,F=r[R];F!==null&&!si(F)&&(c?F<=a:F<a)?m=R+1:M=R}return M}return wd(r,a,qn,c)}function wd(r,a,c,m){var M=0,R=r==null?0:r.length;if(R===0)return 0;a=c(a);for(var F=a!==a,O=a===null,G=si(a),ue=a===n;M<R;){var ce=Au((M+R)/2),pe=c(r[ce]),Ae=pe!==n,Ie=pe===null,Ve=pe===pe,rt=si(pe);if(F)var We=m||Ve;else ue?We=Ve&&(m||Ae):O?We=Ve&&Ae&&(m||!Ie):G?We=Ve&&Ae&&!Ie&&(m||!rt):Ie||rt?We=!1:We=m?pe<=a:pe<a;We?M=ce+1:R=ce}return An(R,$)}function f_(r,a){for(var c=-1,m=r.length,M=0,R=[];++c<m;){var F=r[c],O=a?a(F):F;if(!c||!Hi(O,G)){var G=O;R[M++]=F===0?0:F}}return R}function d_(r){return typeof r=="number"?r:si(r)?Y:+r}function ri(r){if(typeof r=="string")return r;if(Qe(r))return zt(r,ri)+"";if(si(r))return Wg?Wg.call(r):"";var a=r+"";return a=="0"&&1/r==-ee?"-0":a}function ns(r,a,c){var m=-1,M=hu,R=r.length,F=!0,O=[],G=O;if(c)F=!1,M=ed;else if(R>=s){var ue=a?null:pT(r);if(ue)return mu(ue);F=!1,M=qa,G=new Bs}else G=a?[]:O;e:for(;++m<R;){var ce=r[m],pe=a?a(ce):ce;if(ce=c||ce!==0?ce:0,F&&pe===pe){for(var Ae=G.length;Ae--;)if(G[Ae]===pe)continue e;a&&G.push(pe),O.push(ce)}else M(G,pe,c)||(G!==O&&G.push(pe),O.push(ce))}return O}function Ad(r,a){return a=is(a,r),r=k_(r,a),r==null||delete r[sr(Ci(a))]}function h_(r,a,c,m){return il(r,a,c(ks(r,a)),m)}function Nu(r,a,c,m){for(var M=r.length,R=m?M:-1;(m?R--:++R<M)&&a(r[R],R,r););return c?Ri(r,m?0:R,m?R+1:M):Ri(r,m?R+1:0,m?M:R)}function p_(r,a){var c=r;return c instanceof ht&&(c=c.value()),td(a,function(m,M){return M.func.apply(M.thisArg,Qr([m],M.args))},c)}function Rd(r,a,c){var m=r.length;if(m<2)return m?ns(r[0]):[];for(var M=-1,R=K(m);++M<m;)for(var F=r[M],O=-1;++O<m;)O!=M&&(R[M]=el(R[M]||F,r[O],a,c));return ns(xn(R,1),a,c)}function m_(r,a,c){for(var m=-1,M=r.length,R=a.length,F={};++m<M;){var O=m<R?a[m]:n;c(F,r[m],O)}return F}function Cd(r){return Kt(r)?r:[]}function Ld(r){return typeof r=="function"?r:qn}function is(r,a){return Qe(r)?r:Bd(r,a)?[r]:W_(Mt(r))}var rT=lt;function rs(r,a,c){var m=r.length;return c=c===n?m:c,!a&&c>=m?r:Ri(r,a,c)}var g_=XE||function(r){return vn.clearTimeout(r)};function __(r,a){if(a)return r.slice();var c=r.length,m=Bg?Bg(c):new r.constructor(c);return r.copy(m),m}function Pd(r){var a=new r.constructor(r.byteLength);return new yu(a).set(new yu(r)),a}function sT(r,a){var c=a?Pd(r.buffer):r.buffer;return new r.constructor(c,r.byteOffset,r.byteLength)}function oT(r){var a=new r.constructor(r.source,j.exec(r));return a.lastIndex=r.lastIndex,a}function aT(r){return Qa?Rt(Qa.call(r)):{}}function v_(r,a){var c=a?Pd(r.buffer):r.buffer;return new r.constructor(c,r.byteOffset,r.length)}function x_(r,a){if(r!==a){var c=r!==n,m=r===null,M=r===r,R=si(r),F=a!==n,O=a===null,G=a===a,ue=si(a);if(!O&&!ue&&!R&&r>a||R&&F&&G&&!O&&!ue||m&&F&&G||!c&&G||!M)return 1;if(!m&&!R&&!ue&&r<a||ue&&c&&M&&!m&&!R||O&&c&&M||!F&&M||!G)return-1}return 0}function lT(r,a,c){for(var m=-1,M=r.criteria,R=a.criteria,F=M.length,O=c.length;++m<F;){var G=x_(M[m],R[m]);if(G){if(m>=O)return G;var ue=c[m];return G*(ue=="desc"?-1:1)}}return r.index-a.index}function S_(r,a,c,m){for(var M=-1,R=r.length,F=c.length,O=-1,G=a.length,ue=an(R-F,0),ce=K(G+ue),pe=!m;++O<G;)ce[O]=a[O];for(;++M<F;)(pe||M<R)&&(ce[c[M]]=r[M]);for(;ue--;)ce[O++]=r[M++];return ce}function y_(r,a,c,m){for(var M=-1,R=r.length,F=-1,O=c.length,G=-1,ue=a.length,ce=an(R-O,0),pe=K(ce+ue),Ae=!m;++M<ce;)pe[M]=r[M];for(var Ie=M;++G<ue;)pe[Ie+G]=a[G];for(;++F<O;)(Ae||M<R)&&(pe[Ie+c[F]]=r[M++]);return pe}function Wn(r,a){var c=-1,m=r.length;for(a||(a=K(m));++c<m;)a[c]=r[c];return a}function rr(r,a,c,m){var M=!c;c||(c={});for(var R=-1,F=a.length;++R<F;){var O=a[R],G=m?m(c[O],r[O],O,c,r):n;G===n&&(G=r[O]),M?xr(c,O,G):Ja(c,O,G)}return c}function uT(r,a){return rr(r,Od(r),a)}function cT(r,a){return rr(r,I_(r),a)}function Fu(r,a){return function(c,m){var M=Qe(c)?mE:U1,R=a?a():{};return M(c,r,Ge(m,2),R)}}function No(r){return lt(function(a,c){var m=-1,M=c.length,R=M>1?c[M-1]:n,F=M>2?c[2]:n;for(R=r.length>3&&typeof R=="function"?(M--,R):n,F&&Nn(c[0],c[1],F)&&(R=M<3?n:R,M=1),a=Rt(a);++m<M;){var O=c[m];O&&r(a,O,m,R)}return a})}function M_(r,a){return function(c,m){if(c==null)return c;if(!Xn(c))return r(c,m);for(var M=c.length,R=a?M:-1,F=Rt(c);(a?R--:++R<M)&&m(F[R],R,F)!==!1;);return c}}function E_(r){return function(a,c,m){for(var M=-1,R=Rt(a),F=m(a),O=F.length;O--;){var G=F[r?O:++M];if(c(R[G],G,R)===!1)break}return a}}function fT(r,a,c){var m=a&v,M=rl(r);function R(){var F=this&&this!==vn&&this instanceof R?M:r;return F.apply(m?c:this,arguments)}return R}function T_(r){return function(a){a=Mt(a);var c=Co(a)?zi(a):n,m=c?c[0]:a.charAt(0),M=c?rs(c,1).join(""):a.slice(1);return m[r]()+M}}function Fo(r){return function(a){return td(Mv(yv(a).replace(tE,"")),r,"")}}function rl(r){return function(){var a=arguments;switch(a.length){case 0:return new r;case 1:return new r(a[0]);case 2:return new r(a[0],a[1]);case 3:return new r(a[0],a[1],a[2]);case 4:return new r(a[0],a[1],a[2],a[3]);case 5:return new r(a[0],a[1],a[2],a[3],a[4]);case 6:return new r(a[0],a[1],a[2],a[3],a[4],a[5]);case 7:return new r(a[0],a[1],a[2],a[3],a[4],a[5],a[6])}var c=Io(r.prototype),m=r.apply(c,a);return Vt(m)?m:c}}function dT(r,a,c){var m=rl(r);function M(){for(var R=arguments.length,F=K(R),O=R,G=Oo(M);O--;)F[O]=arguments[O];var ue=R<3&&F[0]!==G&&F[R-1]!==G?[]:Jr(F,G);if(R-=ue.length,R<c)return L_(r,a,Ou,M.placeholder,n,F,ue,n,n,c-R);var ce=this&&this!==vn&&this instanceof M?m:r;return ni(ce,this,F)}return M}function w_(r){return function(a,c,m){var M=Rt(a);if(!Xn(a)){var R=Ge(c,3);a=hn(a),c=function(O){return R(M[O],O,M)}}var F=r(a,c,m);return F>-1?M[R?a[F]:F]:n}}function A_(r){return yr(function(a){var c=a.length,m=c,M=wi.prototype.thru;for(r&&a.reverse();m--;){var R=a[m];if(typeof R!="function")throw new Ti(l);if(M&&!F&&Hu(R)=="wrapper")var F=new wi([],!0)}for(m=F?m:c;++m<c;){R=a[m];var O=Hu(R),G=O=="wrapper"?Nd(R):n;G&&zd(G[0])&&G[1]==(D|S|P|H)&&!G[4].length&&G[9]==1?F=F[Hu(G[0])].apply(F,G[3]):F=R.length==1&&zd(R)?F[O]():F.thru(R)}return function(){var ue=arguments,ce=ue[0];if(F&&ue.length==1&&Qe(ce))return F.plant(ce).value();for(var pe=0,Ae=c?a[pe].apply(this,ue):ce;++pe<c;)Ae=a[pe].call(this,Ae);return Ae}})}function Ou(r,a,c,m,M,R,F,O,G,ue){var ce=a&D,pe=a&v,Ae=a&h,Ie=a&(S|w),Ve=a&C,rt=Ae?n:rl(r);function We(){for(var ft=arguments.length,gt=K(ft),oi=ft;oi--;)gt[oi]=arguments[oi];if(Ie)var Fn=Oo(We),ai=TE(gt,Fn);if(m&&(gt=S_(gt,m,M,Ie)),R&&(gt=y_(gt,R,F,Ie)),ft-=ai,Ie&&ft<ue){var Zt=Jr(gt,Fn);return L_(r,a,Ou,We.placeholder,c,gt,Zt,O,G,ue-ft)}var Gi=pe?c:this,wr=Ae?Gi[r]:r;return ft=gt.length,O?gt=UT(gt,O):Ve&&ft>1&&gt.reverse(),ce&&G<ft&&(gt.length=G),this&&this!==vn&&this instanceof We&&(wr=rt||rl(wr)),wr.apply(Gi,gt)}return We}function R_(r,a){return function(c,m){return k1(c,r,a(m),{})}}function Bu(r,a){return function(c,m){var M;if(c===n&&m===n)return a;if(c!==n&&(M=c),m!==n){if(M===n)return m;typeof c=="string"||typeof m=="string"?(c=ri(c),m=ri(m)):(c=d_(c),m=d_(m)),M=r(c,m)}return M}}function bd(r){return yr(function(a){return a=zt(a,ii(Ge())),lt(function(c){var m=this;return r(a,function(M){return ni(M,m,c)})})})}function zu(r,a){a=a===n?" ":ri(a);var c=a.length;if(c<2)return c?Td(a,r):a;var m=Td(a,wu(r/Lo(a)));return Co(a)?rs(zi(m),0,r).join(""):m.slice(0,r)}function hT(r,a,c,m){var M=a&v,R=rl(r);function F(){for(var O=-1,G=arguments.length,ue=-1,ce=m.length,pe=K(ce+G),Ae=this&&this!==vn&&this instanceof F?R:r;++ue<ce;)pe[ue]=m[ue];for(;G--;)pe[ue++]=arguments[++O];return ni(Ae,M?c:this,pe)}return F}function C_(r){return function(a,c,m){return m&&typeof m!="number"&&Nn(a,c,m)&&(c=m=n),a=Tr(a),c===n?(c=a,a=0):c=Tr(c),m=m===n?a<c?1:-1:Tr(m),Q1(a,c,m,r)}}function ku(r){return function(a,c){return typeof a=="string"&&typeof c=="string"||(a=Li(a),c=Li(c)),r(a,c)}}function L_(r,a,c,m,M,R,F,O,G,ue){var ce=a&S,pe=ce?F:n,Ae=ce?n:F,Ie=ce?R:n,Ve=ce?n:R;a|=ce?P:I,a&=~(ce?I:P),a&y||(a&=~(v|h));var rt=[r,a,M,Ie,pe,Ve,Ae,O,G,ue],We=c.apply(n,rt);return zd(r)&&H_(We,rt),We.placeholder=m,G_(We,r,a)}function Ud(r){var a=on[r];return function(c,m){if(c=Li(c),m=m==null?0:An(nt(m),292),m&&Gg(c)){var M=(Mt(c)+"e").split("e"),R=a(M[0]+"e"+(+M[1]+m));return M=(Mt(R)+"e").split("e"),+(M[0]+"e"+(+M[1]-m))}return a(c)}}var pT=Uo&&1/mu(new Uo([,-0]))[1]==ee?function(r){return new Uo(r)}:eh;function P_(r){return function(a){var c=Rn(a);return c==Ne?ld(a):c==Et?bE(a):EE(a,r(a))}}function Sr(r,a,c,m,M,R,F,O){var G=a&h;if(!G&&typeof r!="function")throw new Ti(l);var ue=m?m.length:0;if(ue||(a&=~(P|I),m=M=n),F=F===n?F:an(nt(F),0),O=O===n?O:nt(O),ue-=M?M.length:0,a&I){var ce=m,pe=M;m=M=n}var Ae=G?n:Nd(r),Ie=[r,a,c,m,M,ce,pe,R,F,O];if(Ae&&LT(Ie,Ae),r=Ie[0],a=Ie[1],c=Ie[2],m=Ie[3],M=Ie[4],O=Ie[9]=Ie[9]===n?G?0:r.length:an(Ie[9]-ue,0),!O&&a&(S|w)&&(a&=~(S|w)),!a||a==v)var Ve=fT(r,a,c);else a==S||a==w?Ve=dT(r,a,O):(a==P||a==(v|P))&&!M.length?Ve=hT(r,a,c,m):Ve=Ou.apply(n,Ie);var rt=Ae?c_:H_;return G_(rt(Ve,Ie),r,a)}function b_(r,a,c,m){return r===n||Hi(r,bo[c])&&!Tt.call(m,c)?a:r}function U_(r,a,c,m,M,R){return Vt(r)&&Vt(a)&&(R.set(a,r),Du(r,a,n,U_,R),R.delete(a)),r}function mT(r){return al(r)?n:r}function D_(r,a,c,m,M,R){var F=c&E,O=r.length,G=a.length;if(O!=G&&!(F&&G>O))return!1;var ue=R.get(r),ce=R.get(a);if(ue&&ce)return ue==a&&ce==r;var pe=-1,Ae=!0,Ie=c&T?new Bs:n;for(R.set(r,a),R.set(a,r);++pe<O;){var Ve=r[pe],rt=a[pe];if(m)var We=F?m(rt,Ve,pe,a,r,R):m(Ve,rt,pe,r,a,R);if(We!==n){if(We)continue;Ae=!1;break}if(Ie){if(!nd(a,function(ft,gt){if(!qa(Ie,gt)&&(Ve===ft||M(Ve,ft,c,m,R)))return Ie.push(gt)})){Ae=!1;break}}else if(!(Ve===rt||M(Ve,rt,c,m,R))){Ae=!1;break}}return R.delete(r),R.delete(a),Ae}function gT(r,a,c,m,M,R,F){switch(c){case Se:if(r.byteLength!=a.byteLength||r.byteOffset!=a.byteOffset)return!1;r=r.buffer,a=a.buffer;case ge:return!(r.byteLength!=a.byteLength||!R(new yu(r),new yu(a)));case ze:case mt:case $e:return Hi(+r,+a);case et:return r.name==a.name&&r.message==a.message;case xt:case qt:return r==a+"";case Ne:var O=ld;case Et:var G=m&E;if(O||(O=mu),r.size!=a.size&&!G)return!1;var ue=F.get(r);if(ue)return ue==a;m|=T,F.set(r,a);var ce=D_(O(r),O(a),m,M,R,F);return F.delete(r),ce;case N:if(Qa)return Qa.call(r)==Qa.call(a)}return!1}function _T(r,a,c,m,M,R){var F=c&E,O=Dd(r),G=O.length,ue=Dd(a),ce=ue.length;if(G!=ce&&!F)return!1;for(var pe=G;pe--;){var Ae=O[pe];if(!(F?Ae in a:Tt.call(a,Ae)))return!1}var Ie=R.get(r),Ve=R.get(a);if(Ie&&Ve)return Ie==a&&Ve==r;var rt=!0;R.set(r,a),R.set(a,r);for(var We=F;++pe<G;){Ae=O[pe];var ft=r[Ae],gt=a[Ae];if(m)var oi=F?m(gt,ft,Ae,a,r,R):m(ft,gt,Ae,r,a,R);if(!(oi===n?ft===gt||M(ft,gt,c,m,R):oi)){rt=!1;break}We||(We=Ae=="constructor")}if(rt&&!We){var Fn=r.constructor,ai=a.constructor;Fn!=ai&&"constructor"in r&&"constructor"in a&&!(typeof Fn=="function"&&Fn instanceof Fn&&typeof ai=="function"&&ai instanceof ai)&&(rt=!1)}return R.delete(r),R.delete(a),rt}function yr(r){return Hd(z_(r,n,Y_),r+"")}function Dd(r){return Jg(r,hn,Od)}function Id(r){return Jg(r,jn,I_)}var Nd=Ru?function(r){return Ru.get(r)}:eh;function Hu(r){for(var a=r.name+"",c=Do[a],m=Tt.call(Do,a)?c.length:0;m--;){var M=c[m],R=M.func;if(R==null||R==r)return M.name}return a}function Oo(r){var a=Tt.call(A,"placeholder")?A:r;return a.placeholder}function Ge(){var r=A.iteratee||Qd;return r=r===Qd?n_:r,arguments.length?r(arguments[0],arguments[1]):r}function Gu(r,a){var c=r.__data__;return wT(a)?c[typeof a=="string"?"string":"hash"]:c.map}function Fd(r){for(var a=hn(r),c=a.length;c--;){var m=a[c],M=r[m];a[c]=[m,M,O_(M)]}return a}function Hs(r,a){var c=CE(r,a);return t_(c)?c:n}function vT(r){var a=Tt.call(r,Fs),c=r[Fs];try{r[Fs]=n;var m=!0}catch{}var M=xu.call(r);return m&&(a?r[Fs]=c:delete r[Fs]),M}var Od=cd?function(r){return r==null?[]:(r=Rt(r),Zr(cd(r),function(a){return kg.call(r,a)}))}:th,I_=cd?function(r){for(var a=[];r;)Qr(a,Od(r)),r=Mu(r);return a}:th,Rn=In;(fd&&Rn(new fd(new ArrayBuffer(1)))!=Se||$a&&Rn(new $a)!=Ne||dd&&Rn(dd.resolve())!=ut||Uo&&Rn(new Uo)!=Et||Ka&&Rn(new Ka)!=ne)&&(Rn=function(r){var a=In(r),c=a==vt?r.constructor:n,m=c?Gs(c):"";if(m)switch(m){case e1:return Se;case t1:return Ne;case n1:return ut;case i1:return Et;case r1:return ne}return a});function xT(r,a,c){for(var m=-1,M=c.length;++m<M;){var R=c[m],F=R.size;switch(R.type){case"drop":r+=F;break;case"dropRight":a-=F;break;case"take":a=An(a,r+F);break;case"takeRight":r=an(r,a-F);break}}return{start:r,end:a}}function ST(r){var a=r.match(Mo);return a?a[1].split(du):[]}function N_(r,a,c){a=is(a,r);for(var m=-1,M=a.length,R=!1;++m<M;){var F=sr(a[m]);if(!(R=r!=null&&c(r,F)))break;r=r[F]}return R||++m!=M?R:(M=r==null?0:r.length,!!M&&$u(M)&&Mr(F,M)&&(Qe(r)||Vs(r)))}function yT(r){var a=r.length,c=new r.constructor(a);return a&&typeof r[0]=="string"&&Tt.call(r,"index")&&(c.index=r.index,c.input=r.input),c}function F_(r){return typeof r.constructor=="function"&&!sl(r)?Io(Mu(r)):{}}function MT(r,a,c){var m=r.constructor;switch(a){case ge:return Pd(r);case ze:case mt:return new m(+r);case Se:return sT(r,c);case Fe:case Te:case le:case Oe:case Be:case ke:case be:case Ue:case tt:return v_(r,c);case Ne:return new m;case $e:case qt:return new m(r);case xt:return oT(r);case Et:return new m;case N:return aT(r)}}function ET(r,a){var c=a.length;if(!c)return r;var m=c-1;return a[m]=(c>1?"& ":"")+a[m],a=a.join(c>2?", ":" "),r.replace(fu,`{
/* [wrapped with `+a+`] */
`)}function TT(r){return Qe(r)||Vs(r)||!!(Hg&&r&&r[Hg])}function Mr(r,a){var c=typeof r;return a=a??z,!!a&&(c=="number"||c!="symbol"&&He.test(r))&&r>-1&&r%1==0&&r<a}function Nn(r,a,c){if(!Vt(c))return!1;var m=typeof a;return(m=="number"?Xn(c)&&Mr(a,c.length):m=="string"&&a in c)?Hi(c[a],r):!1}function Bd(r,a){if(Qe(r))return!1;var c=typeof r;return c=="number"||c=="symbol"||c=="boolean"||r==null||si(r)?!0:Si.test(r)||!Ot.test(r)||a!=null&&r in Rt(a)}function wT(r){var a=typeof r;return a=="string"||a=="number"||a=="symbol"||a=="boolean"?r!=="__proto__":r===null}function zd(r){var a=Hu(r),c=A[a];if(typeof c!="function"||!(a in ht.prototype))return!1;if(r===c)return!0;var m=Nd(c);return!!m&&r===m[0]}function AT(r){return!!Og&&Og in r}var RT=_u?Er:nh;function sl(r){var a=r&&r.constructor,c=typeof a=="function"&&a.prototype||bo;return r===c}function O_(r){return r===r&&!Vt(r)}function B_(r,a){return function(c){return c==null?!1:c[r]===a&&(a!==n||r in Rt(c))}}function CT(r){var a=qu(r,function(m){return c.size===d&&c.clear(),m}),c=a.cache;return a}function LT(r,a){var c=r[1],m=a[1],M=c|m,R=M<(v|h|D),F=m==D&&c==S||m==D&&c==H&&r[7].length<=a[8]||m==(D|H)&&a[7].length<=a[8]&&c==S;if(!(R||F))return r;m&v&&(r[2]=a[2],M|=c&v?0:y);var O=a[3];if(O){var G=r[3];r[3]=G?S_(G,O,a[4]):O,r[4]=G?Jr(r[3],p):a[4]}return O=a[5],O&&(G=r[5],r[5]=G?y_(G,O,a[6]):O,r[6]=G?Jr(r[5],p):a[6]),O=a[7],O&&(r[7]=O),m&D&&(r[8]=r[8]==null?a[8]:An(r[8],a[8])),r[9]==null&&(r[9]=a[9]),r[0]=a[0],r[1]=M,r}function PT(r){var a=[];if(r!=null)for(var c in Rt(r))a.push(c);return a}function bT(r){return xu.call(r)}function z_(r,a,c){return a=an(a===n?r.length-1:a,0),function(){for(var m=arguments,M=-1,R=an(m.length-a,0),F=K(R);++M<R;)F[M]=m[a+M];M=-1;for(var O=K(a+1);++M<a;)O[M]=m[M];return O[a]=c(F),ni(r,this,O)}}function k_(r,a){return a.length<2?r:ks(r,Ri(a,0,-1))}function UT(r,a){for(var c=r.length,m=An(a.length,c),M=Wn(r);m--;){var R=a[m];r[m]=Mr(R,c)?M[R]:n}return r}function kd(r,a){if(!(a==="constructor"&&typeof r[a]=="function")&&a!="__proto__")return r[a]}var H_=V_(c_),ol=qE||function(r,a){return vn.setTimeout(r,a)},Hd=V_(tT);function G_(r,a,c){var m=a+"";return Hd(r,ET(m,DT(ST(m),c)))}function V_(r){var a=0,c=0;return function(){var m=ZE(),M=q-(m-c);if(c=m,M>0){if(++a>=he)return arguments[0]}else a=0;return r.apply(n,arguments)}}function Vu(r,a){var c=-1,m=r.length,M=m-1;for(a=a===n?m:a;++c<a;){var R=Ed(c,M),F=r[R];r[R]=r[c],r[c]=F}return r.length=a,r}var W_=CT(function(r){var a=[];return r.charCodeAt(0)===46&&a.push(""),r.replace(_n,function(c,m,M,R){a.push(M?R.replace(jf,"$1"):m||c)}),a});function sr(r){if(typeof r=="string"||si(r))return r;var a=r+"";return a=="0"&&1/r==-ee?"-0":a}function Gs(r){if(r!=null){try{return vu.call(r)}catch{}try{return r+""}catch{}}return""}function DT(r,a){return Ei(xe,function(c){var m="_."+c[0];a&c[1]&&!hu(r,m)&&r.push(m)}),r.sort()}function X_(r){if(r instanceof ht)return r.clone();var a=new wi(r.__wrapped__,r.__chain__);return a.__actions__=Wn(r.__actions__),a.__index__=r.__index__,a.__values__=r.__values__,a}function IT(r,a,c){(c?Nn(r,a,c):a===n)?a=1:a=an(nt(a),0);var m=r==null?0:r.length;if(!m||a<1)return[];for(var M=0,R=0,F=K(wu(m/a));M<m;)F[R++]=Ri(r,M,M+=a);return F}function NT(r){for(var a=-1,c=r==null?0:r.length,m=0,M=[];++a<c;){var R=r[a];R&&(M[m++]=R)}return M}function FT(){var r=arguments.length;if(!r)return[];for(var a=K(r-1),c=arguments[0],m=r;m--;)a[m-1]=arguments[m];return Qr(Qe(c)?Wn(c):[c],xn(a,1))}var OT=lt(function(r,a){return Kt(r)?el(r,xn(a,1,Kt,!0)):[]}),BT=lt(function(r,a){var c=Ci(a);return Kt(c)&&(c=n),Kt(r)?el(r,xn(a,1,Kt,!0),Ge(c,2)):[]}),zT=lt(function(r,a){var c=Ci(a);return Kt(c)&&(c=n),Kt(r)?el(r,xn(a,1,Kt,!0),n,c):[]});function kT(r,a,c){var m=r==null?0:r.length;return m?(a=c||a===n?1:nt(a),Ri(r,a<0?0:a,m)):[]}function HT(r,a,c){var m=r==null?0:r.length;return m?(a=c||a===n?1:nt(a),a=m-a,Ri(r,0,a<0?0:a)):[]}function GT(r,a){return r&&r.length?Nu(r,Ge(a,3),!0,!0):[]}function VT(r,a){return r&&r.length?Nu(r,Ge(a,3),!0):[]}function WT(r,a,c,m){var M=r==null?0:r.length;return M?(c&&typeof c!="number"&&Nn(r,a,c)&&(c=0,m=M),F1(r,a,c,m)):[]}function j_(r,a,c){var m=r==null?0:r.length;if(!m)return-1;var M=c==null?0:nt(c);return M<0&&(M=an(m+M,0)),pu(r,Ge(a,3),M)}function q_(r,a,c){var m=r==null?0:r.length;if(!m)return-1;var M=m-1;return c!==n&&(M=nt(c),M=c<0?an(m+M,0):An(M,m-1)),pu(r,Ge(a,3),M,!0)}function Y_(r){var a=r==null?0:r.length;return a?xn(r,1):[]}function XT(r){var a=r==null?0:r.length;return a?xn(r,ee):[]}function jT(r,a){var c=r==null?0:r.length;return c?(a=a===n?1:nt(a),xn(r,a)):[]}function qT(r){for(var a=-1,c=r==null?0:r.length,m={};++a<c;){var M=r[a];m[M[0]]=M[1]}return m}function $_(r){return r&&r.length?r[0]:n}function YT(r,a,c){var m=r==null?0:r.length;if(!m)return-1;var M=c==null?0:nt(c);return M<0&&(M=an(m+M,0)),Ro(r,a,M)}function $T(r){var a=r==null?0:r.length;return a?Ri(r,0,-1):[]}var KT=lt(function(r){var a=zt(r,Cd);return a.length&&a[0]===r[0]?vd(a):[]}),ZT=lt(function(r){var a=Ci(r),c=zt(r,Cd);return a===Ci(c)?a=n:c.pop(),c.length&&c[0]===r[0]?vd(c,Ge(a,2)):[]}),QT=lt(function(r){var a=Ci(r),c=zt(r,Cd);return a=typeof a=="function"?a:n,a&&c.pop(),c.length&&c[0]===r[0]?vd(c,n,a):[]});function JT(r,a){return r==null?"":$E.call(r,a)}function Ci(r){var a=r==null?0:r.length;return a?r[a-1]:n}function ew(r,a,c){var m=r==null?0:r.length;if(!m)return-1;var M=m;return c!==n&&(M=nt(c),M=M<0?an(m+M,0):An(M,m-1)),a===a?DE(r,a,M):pu(r,Lg,M,!0)}function tw(r,a){return r&&r.length?o_(r,nt(a)):n}var nw=lt(K_);function K_(r,a){return r&&r.length&&a&&a.length?Md(r,a):r}function iw(r,a,c){return r&&r.length&&a&&a.length?Md(r,a,Ge(c,2)):r}function rw(r,a,c){return r&&r.length&&a&&a.length?Md(r,a,n,c):r}var sw=yr(function(r,a){var c=r==null?0:r.length,m=pd(r,a);return u_(r,zt(a,function(M){return Mr(M,c)?+M:M}).sort(x_)),m});function ow(r,a){var c=[];if(!(r&&r.length))return c;var m=-1,M=[],R=r.length;for(a=Ge(a,3);++m<R;){var F=r[m];a(F,m,r)&&(c.push(F),M.push(m))}return u_(r,M),c}function Gd(r){return r==null?r:JE.call(r)}function aw(r,a,c){var m=r==null?0:r.length;return m?(c&&typeof c!="number"&&Nn(r,a,c)?(a=0,c=m):(a=a==null?0:nt(a),c=c===n?m:nt(c)),Ri(r,a,c)):[]}function lw(r,a){return Iu(r,a)}function uw(r,a,c){return wd(r,a,Ge(c,2))}function cw(r,a){var c=r==null?0:r.length;if(c){var m=Iu(r,a);if(m<c&&Hi(r[m],a))return m}return-1}function fw(r,a){return Iu(r,a,!0)}function dw(r,a,c){return wd(r,a,Ge(c,2),!0)}function hw(r,a){var c=r==null?0:r.length;if(c){var m=Iu(r,a,!0)-1;if(Hi(r[m],a))return m}return-1}function pw(r){return r&&r.length?f_(r):[]}function mw(r,a){return r&&r.length?f_(r,Ge(a,2)):[]}function gw(r){var a=r==null?0:r.length;return a?Ri(r,1,a):[]}function _w(r,a,c){return r&&r.length?(a=c||a===n?1:nt(a),Ri(r,0,a<0?0:a)):[]}function vw(r,a,c){var m=r==null?0:r.length;return m?(a=c||a===n?1:nt(a),a=m-a,Ri(r,a<0?0:a,m)):[]}function xw(r,a){return r&&r.length?Nu(r,Ge(a,3),!1,!0):[]}function Sw(r,a){return r&&r.length?Nu(r,Ge(a,3)):[]}var yw=lt(function(r){return ns(xn(r,1,Kt,!0))}),Mw=lt(function(r){var a=Ci(r);return Kt(a)&&(a=n),ns(xn(r,1,Kt,!0),Ge(a,2))}),Ew=lt(function(r){var a=Ci(r);return a=typeof a=="function"?a:n,ns(xn(r,1,Kt,!0),n,a)});function Tw(r){return r&&r.length?ns(r):[]}function ww(r,a){return r&&r.length?ns(r,Ge(a,2)):[]}function Aw(r,a){return a=typeof a=="function"?a:n,r&&r.length?ns(r,n,a):[]}function Vd(r){if(!(r&&r.length))return[];var a=0;return r=Zr(r,function(c){if(Kt(c))return a=an(c.length,a),!0}),od(a,function(c){return zt(r,id(c))})}function Z_(r,a){if(!(r&&r.length))return[];var c=Vd(r);return a==null?c:zt(c,function(m){return ni(a,n,m)})}var Rw=lt(function(r,a){return Kt(r)?el(r,a):[]}),Cw=lt(function(r){return Rd(Zr(r,Kt))}),Lw=lt(function(r){var a=Ci(r);return Kt(a)&&(a=n),Rd(Zr(r,Kt),Ge(a,2))}),Pw=lt(function(r){var a=Ci(r);return a=typeof a=="function"?a:n,Rd(Zr(r,Kt),n,a)}),bw=lt(Vd);function Uw(r,a){return m_(r||[],a||[],Ja)}function Dw(r,a){return m_(r||[],a||[],il)}var Iw=lt(function(r){var a=r.length,c=a>1?r[a-1]:n;return c=typeof c=="function"?(r.pop(),c):n,Z_(r,c)});function Q_(r){var a=A(r);return a.__chain__=!0,a}function Nw(r,a){return a(r),r}function Wu(r,a){return a(r)}var Fw=yr(function(r){var a=r.length,c=a?r[0]:0,m=this.__wrapped__,M=function(R){return pd(R,r)};return a>1||this.__actions__.length||!(m instanceof ht)||!Mr(c)?this.thru(M):(m=m.slice(c,+c+(a?1:0)),m.__actions__.push({func:Wu,args:[M],thisArg:n}),new wi(m,this.__chain__).thru(function(R){return a&&!R.length&&R.push(n),R}))});function Ow(){return Q_(this)}function Bw(){return new wi(this.value(),this.__chain__)}function zw(){this.__values__===n&&(this.__values__=dv(this.value()));var r=this.__index__>=this.__values__.length,a=r?n:this.__values__[this.__index__++];return{done:r,value:a}}function kw(){return this}function Hw(r){for(var a,c=this;c instanceof Lu;){var m=X_(c);m.__index__=0,m.__values__=n,a?M.__wrapped__=m:a=m;var M=m;c=c.__wrapped__}return M.__wrapped__=r,a}function Gw(){var r=this.__wrapped__;if(r instanceof ht){var a=r;return this.__actions__.length&&(a=new ht(this)),a=a.reverse(),a.__actions__.push({func:Wu,args:[Gd],thisArg:n}),new wi(a,this.__chain__)}return this.thru(Gd)}function Vw(){return p_(this.__wrapped__,this.__actions__)}var Ww=Fu(function(r,a,c){Tt.call(r,c)?++r[c]:xr(r,c,1)});function Xw(r,a,c){var m=Qe(r)?Rg:N1;return c&&Nn(r,a,c)&&(a=n),m(r,Ge(a,3))}function jw(r,a){var c=Qe(r)?Zr:Zg;return c(r,Ge(a,3))}var qw=w_(j_),Yw=w_(q_);function $w(r,a){return xn(Xu(r,a),1)}function Kw(r,a){return xn(Xu(r,a),ee)}function Zw(r,a,c){return c=c===n?1:nt(c),xn(Xu(r,a),c)}function J_(r,a){var c=Qe(r)?Ei:ts;return c(r,Ge(a,3))}function ev(r,a){var c=Qe(r)?gE:Kg;return c(r,Ge(a,3))}var Qw=Fu(function(r,a,c){Tt.call(r,c)?r[c].push(a):xr(r,c,[a])});function Jw(r,a,c,m){r=Xn(r)?r:zo(r),c=c&&!m?nt(c):0;var M=r.length;return c<0&&(c=an(M+c,0)),Ku(r)?c<=M&&r.indexOf(a,c)>-1:!!M&&Ro(r,a,c)>-1}var eA=lt(function(r,a,c){var m=-1,M=typeof a=="function",R=Xn(r)?K(r.length):[];return ts(r,function(F){R[++m]=M?ni(a,F,c):tl(F,a,c)}),R}),tA=Fu(function(r,a,c){xr(r,c,a)});function Xu(r,a){var c=Qe(r)?zt:i_;return c(r,Ge(a,3))}function nA(r,a,c,m){return r==null?[]:(Qe(a)||(a=a==null?[]:[a]),c=m?n:c,Qe(c)||(c=c==null?[]:[c]),a_(r,a,c))}var iA=Fu(function(r,a,c){r[c?0:1].push(a)},function(){return[[],[]]});function rA(r,a,c){var m=Qe(r)?td:bg,M=arguments.length<3;return m(r,Ge(a,4),c,M,ts)}function sA(r,a,c){var m=Qe(r)?_E:bg,M=arguments.length<3;return m(r,Ge(a,4),c,M,Kg)}function oA(r,a){var c=Qe(r)?Zr:Zg;return c(r,Yu(Ge(a,3)))}function aA(r){var a=Qe(r)?jg:J1;return a(r)}function lA(r,a,c){(c?Nn(r,a,c):a===n)?a=1:a=nt(a);var m=Qe(r)?P1:eT;return m(r,a)}function uA(r){var a=Qe(r)?b1:nT;return a(r)}function cA(r){if(r==null)return 0;if(Xn(r))return Ku(r)?Lo(r):r.length;var a=Rn(r);return a==Ne||a==Et?r.size:Sd(r).length}function fA(r,a,c){var m=Qe(r)?nd:iT;return c&&Nn(r,a,c)&&(a=n),m(r,Ge(a,3))}var dA=lt(function(r,a){if(r==null)return[];var c=a.length;return c>1&&Nn(r,a[0],a[1])?a=[]:c>2&&Nn(a[0],a[1],a[2])&&(a=[a[0]]),a_(r,xn(a,1),[])}),ju=jE||function(){return vn.Date.now()};function hA(r,a){if(typeof a!="function")throw new Ti(l);return r=nt(r),function(){if(--r<1)return a.apply(this,arguments)}}function tv(r,a,c){return a=c?n:a,a=r&&a==null?r.length:a,Sr(r,D,n,n,n,n,a)}function nv(r,a){var c;if(typeof a!="function")throw new Ti(l);return r=nt(r),function(){return--r>0&&(c=a.apply(this,arguments)),r<=1&&(a=n),c}}var Wd=lt(function(r,a,c){var m=v;if(c.length){var M=Jr(c,Oo(Wd));m|=P}return Sr(r,m,a,c,M)}),iv=lt(function(r,a,c){var m=v|h;if(c.length){var M=Jr(c,Oo(iv));m|=P}return Sr(a,m,r,c,M)});function rv(r,a,c){a=c?n:a;var m=Sr(r,S,n,n,n,n,n,a);return m.placeholder=rv.placeholder,m}function sv(r,a,c){a=c?n:a;var m=Sr(r,w,n,n,n,n,n,a);return m.placeholder=sv.placeholder,m}function ov(r,a,c){var m,M,R,F,O,G,ue=0,ce=!1,pe=!1,Ae=!0;if(typeof r!="function")throw new Ti(l);a=Li(a)||0,Vt(c)&&(ce=!!c.leading,pe="maxWait"in c,R=pe?an(Li(c.maxWait)||0,a):R,Ae="trailing"in c?!!c.trailing:Ae);function Ie(Zt){var Gi=m,wr=M;return m=M=n,ue=Zt,F=r.apply(wr,Gi),F}function Ve(Zt){return ue=Zt,O=ol(ft,a),ce?Ie(Zt):F}function rt(Zt){var Gi=Zt-G,wr=Zt-ue,wv=a-Gi;return pe?An(wv,R-wr):wv}function We(Zt){var Gi=Zt-G,wr=Zt-ue;return G===n||Gi>=a||Gi<0||pe&&wr>=R}function ft(){var Zt=ju();if(We(Zt))return gt(Zt);O=ol(ft,rt(Zt))}function gt(Zt){return O=n,Ae&&m?Ie(Zt):(m=M=n,F)}function oi(){O!==n&&g_(O),ue=0,m=G=M=O=n}function Fn(){return O===n?F:gt(ju())}function ai(){var Zt=ju(),Gi=We(Zt);if(m=arguments,M=this,G=Zt,Gi){if(O===n)return Ve(G);if(pe)return g_(O),O=ol(ft,a),Ie(G)}return O===n&&(O=ol(ft,a)),F}return ai.cancel=oi,ai.flush=Fn,ai}var pA=lt(function(r,a){return $g(r,1,a)}),mA=lt(function(r,a,c){return $g(r,Li(a)||0,c)});function gA(r){return Sr(r,C)}function qu(r,a){if(typeof r!="function"||a!=null&&typeof a!="function")throw new Ti(l);var c=function(){var m=arguments,M=a?a.apply(this,m):m[0],R=c.cache;if(R.has(M))return R.get(M);var F=r.apply(this,m);return c.cache=R.set(M,F)||R,F};return c.cache=new(qu.Cache||vr),c}qu.Cache=vr;function Yu(r){if(typeof r!="function")throw new Ti(l);return function(){var a=arguments;switch(a.length){case 0:return!r.call(this);case 1:return!r.call(this,a[0]);case 2:return!r.call(this,a[0],a[1]);case 3:return!r.call(this,a[0],a[1],a[2])}return!r.apply(this,a)}}function _A(r){return nv(2,r)}var vA=rT(function(r,a){a=a.length==1&&Qe(a[0])?zt(a[0],ii(Ge())):zt(xn(a,1),ii(Ge()));var c=a.length;return lt(function(m){for(var M=-1,R=An(m.length,c);++M<R;)m[M]=a[M].call(this,m[M]);return ni(r,this,m)})}),Xd=lt(function(r,a){var c=Jr(a,Oo(Xd));return Sr(r,P,n,a,c)}),av=lt(function(r,a){var c=Jr(a,Oo(av));return Sr(r,I,n,a,c)}),xA=yr(function(r,a){return Sr(r,H,n,n,n,a)});function SA(r,a){if(typeof r!="function")throw new Ti(l);return a=a===n?a:nt(a),lt(r,a)}function yA(r,a){if(typeof r!="function")throw new Ti(l);return a=a==null?0:an(nt(a),0),lt(function(c){var m=c[a],M=rs(c,0,a);return m&&Qr(M,m),ni(r,this,M)})}function MA(r,a,c){var m=!0,M=!0;if(typeof r!="function")throw new Ti(l);return Vt(c)&&(m="leading"in c?!!c.leading:m,M="trailing"in c?!!c.trailing:M),ov(r,a,{leading:m,maxWait:a,trailing:M})}function EA(r){return tv(r,1)}function TA(r,a){return Xd(Ld(a),r)}function wA(){if(!arguments.length)return[];var r=arguments[0];return Qe(r)?r:[r]}function AA(r){return Ai(r,x)}function RA(r,a){return a=typeof a=="function"?a:n,Ai(r,x,a)}function CA(r){return Ai(r,g|x)}function LA(r,a){return a=typeof a=="function"?a:n,Ai(r,g|x,a)}function PA(r,a){return a==null||Yg(r,a,hn(a))}function Hi(r,a){return r===a||r!==r&&a!==a}var bA=ku(_d),UA=ku(function(r,a){return r>=a}),Vs=e_(function(){return arguments}())?e_:function(r){return Yt(r)&&Tt.call(r,"callee")&&!kg.call(r,"callee")},Qe=K.isArray,DA=yg?ii(yg):H1;function Xn(r){return r!=null&&$u(r.length)&&!Er(r)}function Kt(r){return Yt(r)&&Xn(r)}function IA(r){return r===!0||r===!1||Yt(r)&&In(r)==ze}var ss=YE||nh,NA=Mg?ii(Mg):G1;function FA(r){return Yt(r)&&r.nodeType===1&&!al(r)}function OA(r){if(r==null)return!0;if(Xn(r)&&(Qe(r)||typeof r=="string"||typeof r.splice=="function"||ss(r)||Bo(r)||Vs(r)))return!r.length;var a=Rn(r);if(a==Ne||a==Et)return!r.size;if(sl(r))return!Sd(r).length;for(var c in r)if(Tt.call(r,c))return!1;return!0}function BA(r,a){return nl(r,a)}function zA(r,a,c){c=typeof c=="function"?c:n;var m=c?c(r,a):n;return m===n?nl(r,a,n,c):!!m}function jd(r){if(!Yt(r))return!1;var a=In(r);return a==et||a==wn||typeof r.message=="string"&&typeof r.name=="string"&&!al(r)}function kA(r){return typeof r=="number"&&Gg(r)}function Er(r){if(!Vt(r))return!1;var a=In(r);return a==X||a==rn||a==je||a==it}function lv(r){return typeof r=="number"&&r==nt(r)}function $u(r){return typeof r=="number"&&r>-1&&r%1==0&&r<=z}function Vt(r){var a=typeof r;return r!=null&&(a=="object"||a=="function")}function Yt(r){return r!=null&&typeof r=="object"}var uv=Eg?ii(Eg):W1;function HA(r,a){return r===a||xd(r,a,Fd(a))}function GA(r,a,c){return c=typeof c=="function"?c:n,xd(r,a,Fd(a),c)}function VA(r){return cv(r)&&r!=+r}function WA(r){if(RT(r))throw new Ze(o);return t_(r)}function XA(r){return r===null}function jA(r){return r==null}function cv(r){return typeof r=="number"||Yt(r)&&In(r)==$e}function al(r){if(!Yt(r)||In(r)!=vt)return!1;var a=Mu(r);if(a===null)return!0;var c=Tt.call(a,"constructor")&&a.constructor;return typeof c=="function"&&c instanceof c&&vu.call(c)==GE}var qd=Tg?ii(Tg):X1;function qA(r){return lv(r)&&r>=-z&&r<=z}var fv=wg?ii(wg):j1;function Ku(r){return typeof r=="string"||!Qe(r)&&Yt(r)&&In(r)==qt}function si(r){return typeof r=="symbol"||Yt(r)&&In(r)==N}var Bo=Ag?ii(Ag):q1;function YA(r){return r===n}function $A(r){return Yt(r)&&Rn(r)==ne}function KA(r){return Yt(r)&&In(r)==_e}var ZA=ku(yd),QA=ku(function(r,a){return r<=a});function dv(r){if(!r)return[];if(Xn(r))return Ku(r)?zi(r):Wn(r);if(Ya&&r[Ya])return PE(r[Ya]());var a=Rn(r),c=a==Ne?ld:a==Et?mu:zo;return c(r)}function Tr(r){if(!r)return r===0?r:0;if(r=Li(r),r===ee||r===-ee){var a=r<0?-1:1;return a*te}return r===r?r:0}function nt(r){var a=Tr(r),c=a%1;return a===a?c?a-c:a:0}function hv(r){return r?zs(nt(r),0,V):0}function Li(r){if(typeof r=="number")return r;if(si(r))return Y;if(Vt(r)){var a=typeof r.valueOf=="function"?r.valueOf():r;r=Vt(a)?a+"":a}if(typeof r!="string")return r===0?r:+r;r=Ug(r);var c=W.test(r);return c||Pe.test(r)?hE(r.slice(2),c?2:8):re.test(r)?Y:+r}function pv(r){return rr(r,jn(r))}function JA(r){return r?zs(nt(r),-z,z):r===0?r:0}function Mt(r){return r==null?"":ri(r)}var eR=No(function(r,a){if(sl(a)||Xn(a)){rr(a,hn(a),r);return}for(var c in a)Tt.call(a,c)&&Ja(r,c,a[c])}),mv=No(function(r,a){rr(a,jn(a),r)}),Zu=No(function(r,a,c,m){rr(a,jn(a),r,m)}),tR=No(function(r,a,c,m){rr(a,hn(a),r,m)}),nR=yr(pd);function iR(r,a){var c=Io(r);return a==null?c:qg(c,a)}var rR=lt(function(r,a){r=Rt(r);var c=-1,m=a.length,M=m>2?a[2]:n;for(M&&Nn(a[0],a[1],M)&&(m=1);++c<m;)for(var R=a[c],F=jn(R),O=-1,G=F.length;++O<G;){var ue=F[O],ce=r[ue];(ce===n||Hi(ce,bo[ue])&&!Tt.call(r,ue))&&(r[ue]=R[ue])}return r}),sR=lt(function(r){return r.push(n,U_),ni(gv,n,r)});function oR(r,a){return Cg(r,Ge(a,3),ir)}function aR(r,a){return Cg(r,Ge(a,3),gd)}function lR(r,a){return r==null?r:md(r,Ge(a,3),jn)}function uR(r,a){return r==null?r:Qg(r,Ge(a,3),jn)}function cR(r,a){return r&&ir(r,Ge(a,3))}function fR(r,a){return r&&gd(r,Ge(a,3))}function dR(r){return r==null?[]:Uu(r,hn(r))}function hR(r){return r==null?[]:Uu(r,jn(r))}function Yd(r,a,c){var m=r==null?n:ks(r,a);return m===n?c:m}function pR(r,a){return r!=null&&N_(r,a,O1)}function $d(r,a){return r!=null&&N_(r,a,B1)}var mR=R_(function(r,a,c){a!=null&&typeof a.toString!="function"&&(a=xu.call(a)),r[a]=c},Zd(qn)),gR=R_(function(r,a,c){a!=null&&typeof a.toString!="function"&&(a=xu.call(a)),Tt.call(r,a)?r[a].push(c):r[a]=[c]},Ge),_R=lt(tl);function hn(r){return Xn(r)?Xg(r):Sd(r)}function jn(r){return Xn(r)?Xg(r,!0):Y1(r)}function vR(r,a){var c={};return a=Ge(a,3),ir(r,function(m,M,R){xr(c,a(m,M,R),m)}),c}function xR(r,a){var c={};return a=Ge(a,3),ir(r,function(m,M,R){xr(c,M,a(m,M,R))}),c}var SR=No(function(r,a,c){Du(r,a,c)}),gv=No(function(r,a,c,m){Du(r,a,c,m)}),yR=yr(function(r,a){var c={};if(r==null)return c;var m=!1;a=zt(a,function(R){return R=is(R,r),m||(m=R.length>1),R}),rr(r,Id(r),c),m&&(c=Ai(c,g|_|x,mT));for(var M=a.length;M--;)Ad(c,a[M]);return c});function MR(r,a){return _v(r,Yu(Ge(a)))}var ER=yr(function(r,a){return r==null?{}:K1(r,a)});function _v(r,a){if(r==null)return{};var c=zt(Id(r),function(m){return[m]});return a=Ge(a),l_(r,c,function(m,M){return a(m,M[0])})}function TR(r,a,c){a=is(a,r);var m=-1,M=a.length;for(M||(M=1,r=n);++m<M;){var R=r==null?n:r[sr(a[m])];R===n&&(m=M,R=c),r=Er(R)?R.call(r):R}return r}function wR(r,a,c){return r==null?r:il(r,a,c)}function AR(r,a,c,m){return m=typeof m=="function"?m:n,r==null?r:il(r,a,c,m)}var vv=P_(hn),xv=P_(jn);function RR(r,a,c){var m=Qe(r),M=m||ss(r)||Bo(r);if(a=Ge(a,4),c==null){var R=r&&r.constructor;M?c=m?new R:[]:Vt(r)?c=Er(R)?Io(Mu(r)):{}:c={}}return(M?Ei:ir)(r,function(F,O,G){return a(c,F,O,G)}),c}function CR(r,a){return r==null?!0:Ad(r,a)}function LR(r,a,c){return r==null?r:h_(r,a,Ld(c))}function PR(r,a,c,m){return m=typeof m=="function"?m:n,r==null?r:h_(r,a,Ld(c),m)}function zo(r){return r==null?[]:ad(r,hn(r))}function bR(r){return r==null?[]:ad(r,jn(r))}function UR(r,a,c){return c===n&&(c=a,a=n),c!==n&&(c=Li(c),c=c===c?c:0),a!==n&&(a=Li(a),a=a===a?a:0),zs(Li(r),a,c)}function DR(r,a,c){return a=Tr(a),c===n?(c=a,a=0):c=Tr(c),r=Li(r),z1(r,a,c)}function IR(r,a,c){if(c&&typeof c!="boolean"&&Nn(r,a,c)&&(a=c=n),c===n&&(typeof a=="boolean"?(c=a,a=n):typeof r=="boolean"&&(c=r,r=n)),r===n&&a===n?(r=0,a=1):(r=Tr(r),a===n?(a=r,r=0):a=Tr(a)),r>a){var m=r;r=a,a=m}if(c||r%1||a%1){var M=Vg();return An(r+M*(a-r+dE("1e-"+((M+"").length-1))),a)}return Ed(r,a)}var NR=Fo(function(r,a,c){return a=a.toLowerCase(),r+(c?Sv(a):a)});function Sv(r){return Kd(Mt(r).toLowerCase())}function yv(r){return r=Mt(r),r&&r.replace(qe,wE).replace(nE,"")}function FR(r,a,c){r=Mt(r),a=ri(a);var m=r.length;c=c===n?m:zs(nt(c),0,m);var M=c;return c-=a.length,c>=0&&r.slice(c,M)==a}function OR(r){return r=Mt(r),r&&_t.test(r)?r.replace(ve,AE):r}function BR(r){return r=Mt(r),r&&cu.test(r)?r.replace(So,"\\$&"):r}var zR=Fo(function(r,a,c){return r+(c?"-":"")+a.toLowerCase()}),kR=Fo(function(r,a,c){return r+(c?" ":"")+a.toLowerCase()}),HR=T_("toLowerCase");function GR(r,a,c){r=Mt(r),a=nt(a);var m=a?Lo(r):0;if(!a||m>=a)return r;var M=(a-m)/2;return zu(Au(M),c)+r+zu(wu(M),c)}function VR(r,a,c){r=Mt(r),a=nt(a);var m=a?Lo(r):0;return a&&m<a?r+zu(a-m,c):r}function WR(r,a,c){r=Mt(r),a=nt(a);var m=a?Lo(r):0;return a&&m<a?zu(a-m,c)+r:r}function XR(r,a,c){return c||a==null?a=0:a&&(a=+a),QE(Mt(r).replace(Va,""),a||0)}function jR(r,a,c){return(c?Nn(r,a,c):a===n)?a=1:a=nt(a),Td(Mt(r),a)}function qR(){var r=arguments,a=Mt(r[0]);return r.length<3?a:a.replace(r[1],r[2])}var YR=Fo(function(r,a,c){return r+(c?"_":"")+a.toLowerCase()});function $R(r,a,c){return c&&typeof c!="number"&&Nn(r,a,c)&&(a=c=n),c=c===n?V:c>>>0,c?(r=Mt(r),r&&(typeof a=="string"||a!=null&&!qd(a))&&(a=ri(a),!a&&Co(r))?rs(zi(r),0,c):r.split(a,c)):[]}var KR=Fo(function(r,a,c){return r+(c?" ":"")+Kd(a)});function ZR(r,a,c){return r=Mt(r),c=c==null?0:zs(nt(c),0,r.length),a=ri(a),r.slice(c,c+a.length)==a}function QR(r,a,c){var m=A.templateSettings;c&&Nn(r,a,c)&&(a=n),r=Mt(r),a=Zu({},a,m,b_);var M=Zu({},a.imports,m.imports,b_),R=hn(M),F=ad(M,R),O,G,ue=0,ce=a.interpolate||Xe,pe="__p += '",Ae=ud((a.escape||Xe).source+"|"+ce.source+"|"+(ce===ti?b:Xe).source+"|"+(a.evaluate||Xe).source+"|$","g"),Ie="//# sourceURL="+(Tt.call(a,"sourceURL")?(a.sourceURL+"").replace(/\s/g," "):"lodash.templateSources["+ ++aE+"]")+`
`;r.replace(Ae,function(We,ft,gt,oi,Fn,ai){return gt||(gt=oi),pe+=r.slice(ue,ai).replace(at,RE),ft&&(O=!0,pe+=`' +
__e(`+ft+`) +
'`),Fn&&(G=!0,pe+=`';
`+Fn+`;
__p += '`),gt&&(pe+=`' +
((__t = (`+gt+`)) == null ? '' : __t) +
'`),ue=ai+We.length,We}),pe+=`';
`;var Ve=Tt.call(a,"variable")&&a.variable;if(!Ve)pe=`with (obj) {
`+pe+`
}
`;else if(Xf.test(Ve))throw new Ze(u);pe=(G?pe.replace(At,""):pe).replace(B,"$1").replace(we,"$1;"),pe="function("+(Ve||"obj")+`) {
`+(Ve?"":`obj || (obj = {});
`)+"var __t, __p = ''"+(O?", __e = _.escape":"")+(G?`, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
`:`;
`)+pe+`return __p
}`;var rt=Ev(function(){return yt(R,Ie+"return "+pe).apply(n,F)});if(rt.source=pe,jd(rt))throw rt;return rt}function JR(r){return Mt(r).toLowerCase()}function eC(r){return Mt(r).toUpperCase()}function tC(r,a,c){if(r=Mt(r),r&&(c||a===n))return Ug(r);if(!r||!(a=ri(a)))return r;var m=zi(r),M=zi(a),R=Dg(m,M),F=Ig(m,M)+1;return rs(m,R,F).join("")}function nC(r,a,c){if(r=Mt(r),r&&(c||a===n))return r.slice(0,Fg(r)+1);if(!r||!(a=ri(a)))return r;var m=zi(r),M=Ig(m,zi(a))+1;return rs(m,0,M).join("")}function iC(r,a,c){if(r=Mt(r),r&&(c||a===n))return r.replace(Va,"");if(!r||!(a=ri(a)))return r;var m=zi(r),M=Dg(m,zi(a));return rs(m,M).join("")}function rC(r,a){var c=U,m=oe;if(Vt(a)){var M="separator"in a?a.separator:M;c="length"in a?nt(a.length):c,m="omission"in a?ri(a.omission):m}r=Mt(r);var R=r.length;if(Co(r)){var F=zi(r);R=F.length}if(c>=R)return r;var O=c-Lo(m);if(O<1)return m;var G=F?rs(F,0,O).join(""):r.slice(0,O);if(M===n)return G+m;if(F&&(O+=G.length-O),qd(M)){if(r.slice(O).search(M)){var ue,ce=G;for(M.global||(M=ud(M.source,Mt(j.exec(M))+"g")),M.lastIndex=0;ue=M.exec(ce);)var pe=ue.index;G=G.slice(0,pe===n?O:pe)}}else if(r.indexOf(ri(M),O)!=O){var Ae=G.lastIndexOf(M);Ae>-1&&(G=G.slice(0,Ae))}return G+m}function sC(r){return r=Mt(r),r&&Re.test(r)?r.replace(Q,IE):r}var oC=Fo(function(r,a,c){return r+(c?" ":"")+a.toUpperCase()}),Kd=T_("toUpperCase");function Mv(r,a,c){return r=Mt(r),a=c?n:a,a===n?LE(r)?OE(r):SE(r):r.match(a)||[]}var Ev=lt(function(r,a){try{return ni(r,n,a)}catch(c){return jd(c)?c:new Ze(c)}}),aC=yr(function(r,a){return Ei(a,function(c){c=sr(c),xr(r,c,Wd(r[c],r))}),r});function lC(r){var a=r==null?0:r.length,c=Ge();return r=a?zt(r,function(m){if(typeof m[1]!="function")throw new Ti(l);return[c(m[0]),m[1]]}):[],lt(function(m){for(var M=-1;++M<a;){var R=r[M];if(ni(R[0],this,m))return ni(R[1],this,m)}})}function uC(r){return I1(Ai(r,g))}function Zd(r){return function(){return r}}function cC(r,a){return r==null||r!==r?a:r}var fC=A_(),dC=A_(!0);function qn(r){return r}function Qd(r){return n_(typeof r=="function"?r:Ai(r,g))}function hC(r){return r_(Ai(r,g))}function pC(r,a){return s_(r,Ai(a,g))}var mC=lt(function(r,a){return function(c){return tl(c,r,a)}}),gC=lt(function(r,a){return function(c){return tl(r,c,a)}});function Jd(r,a,c){var m=hn(a),M=Uu(a,m);c==null&&!(Vt(a)&&(M.length||!m.length))&&(c=a,a=r,r=this,M=Uu(a,hn(a)));var R=!(Vt(c)&&"chain"in c)||!!c.chain,F=Er(r);return Ei(M,function(O){var G=a[O];r[O]=G,F&&(r.prototype[O]=function(){var ue=this.__chain__;if(R||ue){var ce=r(this.__wrapped__),pe=ce.__actions__=Wn(this.__actions__);return pe.push({func:G,args:arguments,thisArg:r}),ce.__chain__=ue,ce}return G.apply(r,Qr([this.value()],arguments))})}),r}function _C(){return vn._===this&&(vn._=VE),this}function eh(){}function vC(r){return r=nt(r),lt(function(a){return o_(a,r)})}var xC=bd(zt),SC=bd(Rg),yC=bd(nd);function Tv(r){return Bd(r)?id(sr(r)):Z1(r)}function MC(r){return function(a){return r==null?n:ks(r,a)}}var EC=C_(),TC=C_(!0);function th(){return[]}function nh(){return!1}function wC(){return{}}function AC(){return""}function RC(){return!0}function CC(r,a){if(r=nt(r),r<1||r>z)return[];var c=V,m=An(r,V);a=Ge(a),r-=V;for(var M=od(m,a);++c<r;)a(c);return M}function LC(r){return Qe(r)?zt(r,sr):si(r)?[r]:Wn(W_(Mt(r)))}function PC(r){var a=++HE;return Mt(r)+a}var bC=Bu(function(r,a){return r+a},0),UC=Ud("ceil"),DC=Bu(function(r,a){return r/a},1),IC=Ud("floor");function NC(r){return r&&r.length?bu(r,qn,_d):n}function FC(r,a){return r&&r.length?bu(r,Ge(a,2),_d):n}function OC(r){return Pg(r,qn)}function BC(r,a){return Pg(r,Ge(a,2))}function zC(r){return r&&r.length?bu(r,qn,yd):n}function kC(r,a){return r&&r.length?bu(r,Ge(a,2),yd):n}var HC=Bu(function(r,a){return r*a},1),GC=Ud("round"),VC=Bu(function(r,a){return r-a},0);function WC(r){return r&&r.length?sd(r,qn):0}function XC(r,a){return r&&r.length?sd(r,Ge(a,2)):0}return A.after=hA,A.ary=tv,A.assign=eR,A.assignIn=mv,A.assignInWith=Zu,A.assignWith=tR,A.at=nR,A.before=nv,A.bind=Wd,A.bindAll=aC,A.bindKey=iv,A.castArray=wA,A.chain=Q_,A.chunk=IT,A.compact=NT,A.concat=FT,A.cond=lC,A.conforms=uC,A.constant=Zd,A.countBy=Ww,A.create=iR,A.curry=rv,A.curryRight=sv,A.debounce=ov,A.defaults=rR,A.defaultsDeep=sR,A.defer=pA,A.delay=mA,A.difference=OT,A.differenceBy=BT,A.differenceWith=zT,A.drop=kT,A.dropRight=HT,A.dropRightWhile=GT,A.dropWhile=VT,A.fill=WT,A.filter=jw,A.flatMap=$w,A.flatMapDeep=Kw,A.flatMapDepth=Zw,A.flatten=Y_,A.flattenDeep=XT,A.flattenDepth=jT,A.flip=gA,A.flow=fC,A.flowRight=dC,A.fromPairs=qT,A.functions=dR,A.functionsIn=hR,A.groupBy=Qw,A.initial=$T,A.intersection=KT,A.intersectionBy=ZT,A.intersectionWith=QT,A.invert=mR,A.invertBy=gR,A.invokeMap=eA,A.iteratee=Qd,A.keyBy=tA,A.keys=hn,A.keysIn=jn,A.map=Xu,A.mapKeys=vR,A.mapValues=xR,A.matches=hC,A.matchesProperty=pC,A.memoize=qu,A.merge=SR,A.mergeWith=gv,A.method=mC,A.methodOf=gC,A.mixin=Jd,A.negate=Yu,A.nthArg=vC,A.omit=yR,A.omitBy=MR,A.once=_A,A.orderBy=nA,A.over=xC,A.overArgs=vA,A.overEvery=SC,A.overSome=yC,A.partial=Xd,A.partialRight=av,A.partition=iA,A.pick=ER,A.pickBy=_v,A.property=Tv,A.propertyOf=MC,A.pull=nw,A.pullAll=K_,A.pullAllBy=iw,A.pullAllWith=rw,A.pullAt=sw,A.range=EC,A.rangeRight=TC,A.rearg=xA,A.reject=oA,A.remove=ow,A.rest=SA,A.reverse=Gd,A.sampleSize=lA,A.set=wR,A.setWith=AR,A.shuffle=uA,A.slice=aw,A.sortBy=dA,A.sortedUniq=pw,A.sortedUniqBy=mw,A.split=$R,A.spread=yA,A.tail=gw,A.take=_w,A.takeRight=vw,A.takeRightWhile=xw,A.takeWhile=Sw,A.tap=Nw,A.throttle=MA,A.thru=Wu,A.toArray=dv,A.toPairs=vv,A.toPairsIn=xv,A.toPath=LC,A.toPlainObject=pv,A.transform=RR,A.unary=EA,A.union=yw,A.unionBy=Mw,A.unionWith=Ew,A.uniq=Tw,A.uniqBy=ww,A.uniqWith=Aw,A.unset=CR,A.unzip=Vd,A.unzipWith=Z_,A.update=LR,A.updateWith=PR,A.values=zo,A.valuesIn=bR,A.without=Rw,A.words=Mv,A.wrap=TA,A.xor=Cw,A.xorBy=Lw,A.xorWith=Pw,A.zip=bw,A.zipObject=Uw,A.zipObjectDeep=Dw,A.zipWith=Iw,A.entries=vv,A.entriesIn=xv,A.extend=mv,A.extendWith=Zu,Jd(A,A),A.add=bC,A.attempt=Ev,A.camelCase=NR,A.capitalize=Sv,A.ceil=UC,A.clamp=UR,A.clone=AA,A.cloneDeep=CA,A.cloneDeepWith=LA,A.cloneWith=RA,A.conformsTo=PA,A.deburr=yv,A.defaultTo=cC,A.divide=DC,A.endsWith=FR,A.eq=Hi,A.escape=OR,A.escapeRegExp=BR,A.every=Xw,A.find=qw,A.findIndex=j_,A.findKey=oR,A.findLast=Yw,A.findLastIndex=q_,A.findLastKey=aR,A.floor=IC,A.forEach=J_,A.forEachRight=ev,A.forIn=lR,A.forInRight=uR,A.forOwn=cR,A.forOwnRight=fR,A.get=Yd,A.gt=bA,A.gte=UA,A.has=pR,A.hasIn=$d,A.head=$_,A.identity=qn,A.includes=Jw,A.indexOf=YT,A.inRange=DR,A.invoke=_R,A.isArguments=Vs,A.isArray=Qe,A.isArrayBuffer=DA,A.isArrayLike=Xn,A.isArrayLikeObject=Kt,A.isBoolean=IA,A.isBuffer=ss,A.isDate=NA,A.isElement=FA,A.isEmpty=OA,A.isEqual=BA,A.isEqualWith=zA,A.isError=jd,A.isFinite=kA,A.isFunction=Er,A.isInteger=lv,A.isLength=$u,A.isMap=uv,A.isMatch=HA,A.isMatchWith=GA,A.isNaN=VA,A.isNative=WA,A.isNil=jA,A.isNull=XA,A.isNumber=cv,A.isObject=Vt,A.isObjectLike=Yt,A.isPlainObject=al,A.isRegExp=qd,A.isSafeInteger=qA,A.isSet=fv,A.isString=Ku,A.isSymbol=si,A.isTypedArray=Bo,A.isUndefined=YA,A.isWeakMap=$A,A.isWeakSet=KA,A.join=JT,A.kebabCase=zR,A.last=Ci,A.lastIndexOf=ew,A.lowerCase=kR,A.lowerFirst=HR,A.lt=ZA,A.lte=QA,A.max=NC,A.maxBy=FC,A.mean=OC,A.meanBy=BC,A.min=zC,A.minBy=kC,A.stubArray=th,A.stubFalse=nh,A.stubObject=wC,A.stubString=AC,A.stubTrue=RC,A.multiply=HC,A.nth=tw,A.noConflict=_C,A.noop=eh,A.now=ju,A.pad=GR,A.padEnd=VR,A.padStart=WR,A.parseInt=XR,A.random=IR,A.reduce=rA,A.reduceRight=sA,A.repeat=jR,A.replace=qR,A.result=TR,A.round=GC,A.runInContext=k,A.sample=aA,A.size=cA,A.snakeCase=YR,A.some=fA,A.sortedIndex=lw,A.sortedIndexBy=uw,A.sortedIndexOf=cw,A.sortedLastIndex=fw,A.sortedLastIndexBy=dw,A.sortedLastIndexOf=hw,A.startCase=KR,A.startsWith=ZR,A.subtract=VC,A.sum=WC,A.sumBy=XC,A.template=QR,A.times=CC,A.toFinite=Tr,A.toInteger=nt,A.toLength=hv,A.toLower=JR,A.toNumber=Li,A.toSafeInteger=JA,A.toString=Mt,A.toUpper=eC,A.trim=tC,A.trimEnd=nC,A.trimStart=iC,A.truncate=rC,A.unescape=sC,A.uniqueId=PC,A.upperCase=oC,A.upperFirst=Kd,A.each=J_,A.eachRight=ev,A.first=$_,Jd(A,function(){var r={};return ir(A,function(a,c){Tt.call(A.prototype,c)||(r[c]=a)}),r}(),{chain:!1}),A.VERSION=i,Ei(["bind","bindKey","curry","curryRight","partial","partialRight"],function(r){A[r].placeholder=A}),Ei(["drop","take"],function(r,a){ht.prototype[r]=function(c){c=c===n?1:an(nt(c),0);var m=this.__filtered__&&!a?new ht(this):this.clone();return m.__filtered__?m.__takeCount__=An(c,m.__takeCount__):m.__views__.push({size:An(c,V),type:r+(m.__dir__<0?"Right":"")}),m},ht.prototype[r+"Right"]=function(c){return this.reverse()[r](c).reverse()}}),Ei(["filter","map","takeWhile"],function(r,a){var c=a+1,m=c==J||c==fe;ht.prototype[r]=function(M){var R=this.clone();return R.__iteratees__.push({iteratee:Ge(M,3),type:c}),R.__filtered__=R.__filtered__||m,R}}),Ei(["head","last"],function(r,a){var c="take"+(a?"Right":"");ht.prototype[r]=function(){return this[c](1).value()[0]}}),Ei(["initial","tail"],function(r,a){var c="drop"+(a?"":"Right");ht.prototype[r]=function(){return this.__filtered__?new ht(this):this[c](1)}}),ht.prototype.compact=function(){return this.filter(qn)},ht.prototype.find=function(r){return this.filter(r).head()},ht.prototype.findLast=function(r){return this.reverse().find(r)},ht.prototype.invokeMap=lt(function(r,a){return typeof r=="function"?new ht(this):this.map(function(c){return tl(c,r,a)})}),ht.prototype.reject=function(r){return this.filter(Yu(Ge(r)))},ht.prototype.slice=function(r,a){r=nt(r);var c=this;return c.__filtered__&&(r>0||a<0)?new ht(c):(r<0?c=c.takeRight(-r):r&&(c=c.drop(r)),a!==n&&(a=nt(a),c=a<0?c.dropRight(-a):c.take(a-r)),c)},ht.prototype.takeRightWhile=function(r){return this.reverse().takeWhile(r).reverse()},ht.prototype.toArray=function(){return this.take(V)},ir(ht.prototype,function(r,a){var c=/^(?:filter|find|map|reject)|While$/.test(a),m=/^(?:head|last)$/.test(a),M=A[m?"take"+(a=="last"?"Right":""):a],R=m||/^find/.test(a);M&&(A.prototype[a]=function(){var F=this.__wrapped__,O=m?[1]:arguments,G=F instanceof ht,ue=O[0],ce=G||Qe(F),pe=function(ft){var gt=M.apply(A,Qr([ft],O));return m&&Ae?gt[0]:gt};ce&&c&&typeof ue=="function"&&ue.length!=1&&(G=ce=!1);var Ae=this.__chain__,Ie=!!this.__actions__.length,Ve=R&&!Ae,rt=G&&!Ie;if(!R&&ce){F=rt?F:new ht(this);var We=r.apply(F,O);return We.__actions__.push({func:Wu,args:[pe],thisArg:n}),new wi(We,Ae)}return Ve&&rt?r.apply(this,O):(We=this.thru(pe),Ve?m?We.value()[0]:We.value():We)})}),Ei(["pop","push","shift","sort","splice","unshift"],function(r){var a=gu[r],c=/^(?:push|sort|unshift)$/.test(r)?"tap":"thru",m=/^(?:pop|shift)$/.test(r);A.prototype[r]=function(){var M=arguments;if(m&&!this.__chain__){var R=this.value();return a.apply(Qe(R)?R:[],M)}return this[c](function(F){return a.apply(Qe(F)?F:[],M)})}}),ir(ht.prototype,function(r,a){var c=A[a];if(c){var m=c.name+"";Tt.call(Do,m)||(Do[m]=[]),Do[m].push({name:a,func:c})}}),Do[Ou(n,h).name]=[{name:"wrapper",func:n}],ht.prototype.clone=s1,ht.prototype.reverse=o1,ht.prototype.value=a1,A.prototype.at=Fw,A.prototype.chain=Ow,A.prototype.commit=Bw,A.prototype.next=zw,A.prototype.plant=Hw,A.prototype.reverse=Gw,A.prototype.toJSON=A.prototype.valueOf=A.prototype.value=Vw,A.prototype.first=A.prototype.head,Ya&&(A.prototype[Ya]=kw),A},Po=BE();Ns?((Ns.exports=Po)._=Po,Qf._=Po):vn._=Po}).call(ll)})(Ef,Ef.exports);var Zx=Ef.exports,Aa=Object.freeze({Linear:Object.freeze({None:function(t){return t},In:function(t){return this.None(t)},Out:function(t){return this.None(t)},InOut:function(t){return this.None(t)}}),Quadratic:Object.freeze({In:function(t){return t*t},Out:function(t){return t*(2-t)},InOut:function(t){return(t*=2)<1?.5*t*t:-.5*(--t*(t-2)-1)}}),Cubic:Object.freeze({In:function(t){return t*t*t},Out:function(t){return--t*t*t+1},InOut:function(t){return(t*=2)<1?.5*t*t*t:.5*((t-=2)*t*t+2)}}),Quartic:Object.freeze({In:function(t){return t*t*t*t},Out:function(t){return 1- --t*t*t*t},InOut:function(t){return(t*=2)<1?.5*t*t*t*t:-.5*((t-=2)*t*t*t-2)}}),Quintic:Object.freeze({In:function(t){return t*t*t*t*t},Out:function(t){return--t*t*t*t*t+1},InOut:function(t){return(t*=2)<1?.5*t*t*t*t*t:.5*((t-=2)*t*t*t*t+2)}}),Sinusoidal:Object.freeze({In:function(t){return 1-Math.sin((1-t)*Math.PI/2)},Out:function(t){return Math.sin(t*Math.PI/2)},InOut:function(t){return .5*(1-Math.sin(Math.PI*(.5-t)))}}),Exponential:Object.freeze({In:function(t){return t===0?0:Math.pow(1024,t-1)},Out:function(t){return t===1?1:1-Math.pow(2,-10*t)},InOut:function(t){return t===0?0:t===1?1:(t*=2)<1?.5*Math.pow(1024,t-1):.5*(-Math.pow(2,-10*(t-1))+2)}}),Circular:Object.freeze({In:function(t){return 1-Math.sqrt(1-t*t)},Out:function(t){return Math.sqrt(1- --t*t)},InOut:function(t){return(t*=2)<1?-.5*(Math.sqrt(1-t*t)-1):.5*(Math.sqrt(1-(t-=2)*t)+1)}}),Elastic:Object.freeze({In:function(t){return t===0?0:t===1?1:-Math.pow(2,10*(t-1))*Math.sin((t-1.1)*5*Math.PI)},Out:function(t){return t===0?0:t===1?1:Math.pow(2,-10*t)*Math.sin((t-.1)*5*Math.PI)+1},InOut:function(t){return t===0?0:t===1?1:(t*=2,t<1?-.5*Math.pow(2,10*(t-1))*Math.sin((t-1.1)*5*Math.PI):.5*Math.pow(2,-10*(t-1))*Math.sin((t-1.1)*5*Math.PI)+1)}}),Back:Object.freeze({In:function(t){var e=1.70158;return t===1?1:t*t*((e+1)*t-e)},Out:function(t){var e=1.70158;return t===0?0:--t*t*((e+1)*t+e)+1},InOut:function(t){var e=2.5949095;return(t*=2)<1?.5*(t*t*((e+1)*t-e)):.5*((t-=2)*t*((e+1)*t+e)+2)}}),Bounce:Object.freeze({In:function(t){return 1-Aa.Bounce.Out(1-t)},Out:function(t){return t<1/2.75?7.5625*t*t:t<2/2.75?7.5625*(t-=1.5/2.75)*t+.75:t<2.5/2.75?7.5625*(t-=2.25/2.75)*t+.9375:7.5625*(t-=2.625/2.75)*t+.984375},InOut:function(t){return t<.5?Aa.Bounce.In(t*2)*.5:Aa.Bounce.Out(t*2-1)*.5+.5}}),generatePow:function(t){return t===void 0&&(t=4),t=t<Number.EPSILON?Number.EPSILON:t,t=t>1e4?1e4:t,{In:function(e){return Math.pow(e,t)},Out:function(e){return 1-Math.pow(1-e,t)},InOut:function(e){return e<.5?Math.pow(e*2,t)/2:(1-Math.pow(2-e*2,t))/2+.5}}}}),_a=function(){return performance.now()},qM=function(){function t(){this._tweens={},this._tweensAddedDuringUpdate={}}return t.prototype.getAll=function(){var e=this;return Object.keys(this._tweens).map(function(n){return e._tweens[n]})},t.prototype.removeAll=function(){this._tweens={}},t.prototype.add=function(e){this._tweens[e.getId()]=e,this._tweensAddedDuringUpdate[e.getId()]=e},t.prototype.remove=function(e){delete this._tweens[e.getId()],delete this._tweensAddedDuringUpdate[e.getId()]},t.prototype.update=function(e,n){e===void 0&&(e=_a()),n===void 0&&(n=!1);var i=Object.keys(this._tweens);if(i.length===0)return!1;for(;i.length>0;){this._tweensAddedDuringUpdate={};for(var s=0;s<i.length;s++){var o=this._tweens[i[s]],l=!n;o&&o.update(e,l)===!1&&!n&&delete this._tweens[i[s]]}i=Object.keys(this._tweensAddedDuringUpdate)}return!0},t}(),io={Linear:function(t,e){var n=t.length-1,i=n*e,s=Math.floor(i),o=io.Utils.Linear;return e<0?o(t[0],t[1],i):e>1?o(t[n],t[n-1],n-i):o(t[s],t[s+1>n?n:s+1],i-s)},Bezier:function(t,e){for(var n=0,i=t.length-1,s=Math.pow,o=io.Utils.Bernstein,l=0;l<=i;l++)n+=s(1-e,i-l)*s(e,l)*t[l]*o(i,l);return n},CatmullRom:function(t,e){var n=t.length-1,i=n*e,s=Math.floor(i),o=io.Utils.CatmullRom;return t[0]===t[n]?(e<0&&(s=Math.floor(i=n*(1+e))),o(t[(s-1+n)%n],t[s],t[(s+1)%n],t[(s+2)%n],i-s)):e<0?t[0]-(o(t[0],t[0],t[1],t[1],-i)-t[0]):e>1?t[n]-(o(t[n],t[n],t[n-1],t[n-1],i-n)-t[n]):o(t[s?s-1:0],t[s],t[n<s+1?n:s+1],t[n<s+2?n:s+2],i-s)},Utils:{Linear:function(t,e,n){return(e-t)*n+t},Bernstein:function(t,e){var n=io.Utils.Factorial;return n(t)/n(e)/n(t-e)},Factorial:function(){var t=[1];return function(e){var n=1;if(t[e])return t[e];for(var i=e;i>1;i--)n*=i;return t[e]=n,n}}(),CatmullRom:function(t,e,n,i,s){var o=(n-t)*.5,l=(i-e)*.5,u=s*s,f=s*u;return(2*e-2*n+o+l)*f+(-3*e+3*n-2*o-l)*u+o*s+e}}},ug=function(){function t(){}return t.nextId=function(){return t._nextId++},t._nextId=0,t}(),om=new qM,UN=function(){function t(e,n){n===void 0&&(n=om),this._object=e,this._group=n,this._isPaused=!1,this._pauseStart=0,this._valuesStart={},this._valuesEnd={},this._valuesStartRepeat={},this._duration=1e3,this._isDynamic=!1,this._initialRepeat=0,this._repeat=0,this._yoyo=!1,this._isPlaying=!1,this._reversed=!1,this._delayTime=0,this._startTime=0,this._easingFunction=Aa.Linear.None,this._interpolationFunction=io.Linear,this._chainedTweens=[],this._onStartCallbackFired=!1,this._onEveryStartCallbackFired=!1,this._id=ug.nextId(),this._isChainStopped=!1,this._propertiesAreSetUp=!1,this._goToEnd=!1}return t.prototype.getId=function(){return this._id},t.prototype.isPlaying=function(){return this._isPlaying},t.prototype.isPaused=function(){return this._isPaused},t.prototype.to=function(e,n){if(n===void 0&&(n=1e3),this._isPlaying)throw new Error("Can not call Tween.to() while Tween is already started or paused. Stop the Tween first.");return this._valuesEnd=e,this._propertiesAreSetUp=!1,this._duration=n,this},t.prototype.duration=function(e){return e===void 0&&(e=1e3),this._duration=e,this},t.prototype.dynamic=function(e){return e===void 0&&(e=!1),this._isDynamic=e,this},t.prototype.start=function(e,n){if(e===void 0&&(e=_a()),n===void 0&&(n=!1),this._isPlaying)return this;if(this._group&&this._group.add(this),this._repeat=this._initialRepeat,this._reversed){this._reversed=!1;for(var i in this._valuesStartRepeat)this._swapEndStartRepeatValues(i),this._valuesStart[i]=this._valuesStartRepeat[i]}if(this._isPlaying=!0,this._isPaused=!1,this._onStartCallbackFired=!1,this._onEveryStartCallbackFired=!1,this._isChainStopped=!1,this._startTime=e,this._startTime+=this._delayTime,!this._propertiesAreSetUp||n){if(this._propertiesAreSetUp=!0,!this._isDynamic){var s={};for(var o in this._valuesEnd)s[o]=this._valuesEnd[o];this._valuesEnd=s}this._setupProperties(this._object,this._valuesStart,this._valuesEnd,this._valuesStartRepeat,n)}return this},t.prototype.startFromCurrentValues=function(e){return this.start(e,!0)},t.prototype._setupProperties=function(e,n,i,s,o){for(var l in i){var u=e[l],f=Array.isArray(u),d=f?"array":typeof u,p=!f&&Array.isArray(i[l]);if(!(d==="undefined"||d==="function")){if(p){var g=i[l];if(g.length===0)continue;for(var _=[u],x=0,E=g.length;x<E;x+=1){var T=this._handleRelativeValue(u,g[x]);if(isNaN(T)){p=!1,console.warn("Found invalid interpolation list. Skipping.");break}_.push(T)}p&&(i[l]=_)}if((d==="object"||f)&&u&&!p){n[l]=f?[]:{};var v=u;for(var h in v)n[l][h]=v[h];s[l]=f?[]:{};var g=i[l];if(!this._isDynamic){var y={};for(var h in g)y[h]=g[h];i[l]=g=y}this._setupProperties(v,n[l],g,s[l],o)}else(typeof n[l]>"u"||o)&&(n[l]=u),f||(n[l]*=1),p?s[l]=i[l].slice().reverse():s[l]=n[l]||0}}},t.prototype.stop=function(){return this._isChainStopped||(this._isChainStopped=!0,this.stopChainedTweens()),this._isPlaying?(this._group&&this._group.remove(this),this._isPlaying=!1,this._isPaused=!1,this._onStopCallback&&this._onStopCallback(this._object),this):this},t.prototype.end=function(){return this._goToEnd=!0,this.update(1/0),this},t.prototype.pause=function(e){return e===void 0&&(e=_a()),this._isPaused||!this._isPlaying?this:(this._isPaused=!0,this._pauseStart=e,this._group&&this._group.remove(this),this)},t.prototype.resume=function(e){return e===void 0&&(e=_a()),!this._isPaused||!this._isPlaying?this:(this._isPaused=!1,this._startTime+=e-this._pauseStart,this._pauseStart=0,this._group&&this._group.add(this),this)},t.prototype.stopChainedTweens=function(){for(var e=0,n=this._chainedTweens.length;e<n;e++)this._chainedTweens[e].stop();return this},t.prototype.group=function(e){return e===void 0&&(e=om),this._group=e,this},t.prototype.delay=function(e){return e===void 0&&(e=0),this._delayTime=e,this},t.prototype.repeat=function(e){return e===void 0&&(e=0),this._initialRepeat=e,this._repeat=e,this},t.prototype.repeatDelay=function(e){return this._repeatDelayTime=e,this},t.prototype.yoyo=function(e){return e===void 0&&(e=!1),this._yoyo=e,this},t.prototype.easing=function(e){return e===void 0&&(e=Aa.Linear.None),this._easingFunction=e,this},t.prototype.interpolation=function(e){return e===void 0&&(e=io.Linear),this._interpolationFunction=e,this},t.prototype.chain=function(){for(var e=[],n=0;n<arguments.length;n++)e[n]=arguments[n];return this._chainedTweens=e,this},t.prototype.onStart=function(e){return this._onStartCallback=e,this},t.prototype.onEveryStart=function(e){return this._onEveryStartCallback=e,this},t.prototype.onUpdate=function(e){return this._onUpdateCallback=e,this},t.prototype.onRepeat=function(e){return this._onRepeatCallback=e,this},t.prototype.onComplete=function(e){return this._onCompleteCallback=e,this},t.prototype.onStop=function(e){return this._onStopCallback=e,this},t.prototype.update=function(e,n){if(e===void 0&&(e=_a()),n===void 0&&(n=!0),this._isPaused)return!0;var i,s,o=this._startTime+this._duration;if(!this._goToEnd&&!this._isPlaying){if(e>o)return!1;n&&this.start(e,!0)}if(this._goToEnd=!1,e<this._startTime)return!0;this._onStartCallbackFired===!1&&(this._onStartCallback&&this._onStartCallback(this._object),this._onStartCallbackFired=!0),this._onEveryStartCallbackFired===!1&&(this._onEveryStartCallback&&this._onEveryStartCallback(this._object),this._onEveryStartCallbackFired=!0),s=(e-this._startTime)/this._duration,s=this._duration===0||s>1?1:s;var l=this._easingFunction(s);if(this._updateProperties(this._object,this._valuesStart,this._valuesEnd,l),this._onUpdateCallback&&this._onUpdateCallback(this._object,s),s===1)if(this._repeat>0){isFinite(this._repeat)&&this._repeat--;for(i in this._valuesStartRepeat)!this._yoyo&&typeof this._valuesEnd[i]=="string"&&(this._valuesStartRepeat[i]=this._valuesStartRepeat[i]+parseFloat(this._valuesEnd[i])),this._yoyo&&this._swapEndStartRepeatValues(i),this._valuesStart[i]=this._valuesStartRepeat[i];return this._yoyo&&(this._reversed=!this._reversed),this._repeatDelayTime!==void 0?this._startTime=e+this._repeatDelayTime:this._startTime=e+this._delayTime,this._onRepeatCallback&&this._onRepeatCallback(this._object),this._onEveryStartCallbackFired=!1,!0}else{this._onCompleteCallback&&this._onCompleteCallback(this._object);for(var u=0,f=this._chainedTweens.length;u<f;u++)this._chainedTweens[u].start(this._startTime+this._duration,!1);return this._isPlaying=!1,!1}return!0},t.prototype._updateProperties=function(e,n,i,s){for(var o in i)if(n[o]!==void 0){var l=n[o]||0,u=i[o],f=Array.isArray(e[o]),d=Array.isArray(u),p=!f&&d;p?e[o]=this._interpolationFunction(u,s):typeof u=="object"&&u?this._updateProperties(e[o],l,u,s):(u=this._handleRelativeValue(l,u),typeof u=="number"&&(e[o]=l+(u-l)*s))}},t.prototype._handleRelativeValue=function(e,n){return typeof n!="string"?n:n.charAt(0)==="+"||n.charAt(0)==="-"?e+parseFloat(n):parseFloat(n)},t.prototype._swapEndStartRepeatValues=function(e){var n=this._valuesStartRepeat[e],i=this._valuesEnd[e];typeof i=="string"?this._valuesStartRepeat[e]=this._valuesStartRepeat[e]+parseFloat(i):this._valuesStartRepeat[e]=this._valuesEnd[e],this._valuesEnd[e]=n},t}(),DN="21.0.0",IN=ug.nextId,pr=om,NN=pr.getAll.bind(pr),FN=pr.removeAll.bind(pr),ON=pr.add.bind(pr),BN=pr.remove.bind(pr),zN=pr.update.bind(pr),Js={Easing:Aa,Group:qM,Interpolation:io,now:_a,Sequence:ug,nextId:IN,Tween:UN,VERSION:DN,getAll:NN,removeAll:FN,add:ON,remove:BN,update:zN};const kN=(t,e)=>{const n=[];for(let i=0;i<t.length-1;i++)for(let s=0;s<=e;s++){const o=s/e,l={x:t[i].position.x*(1-o)+t[i+1].position.x*o,y:t[i].position.y*(1-o)+t[i+1].position.y*o,z:t[i].position.z*(1-o)+t[i+1].position.z*o},u={x:t[i].rotation.x*(1-o)+t[i+1].rotation.x*o,y:t[i].rotation.y*(1-o)+t[i+1].rotation.y*o,z:t[i].rotation.z*(1-o)+t[i+1].rotation.z*o};n.push({position:l,rotation:u})}return n.push(t[t.length-1]),n},HN=fS.memo(()=>{const t=Nt.useRef(null),e=Nt.useRef(null),n=Nt.useRef(null),i=Nt.useRef(null),[s,o,l]=Nt.useMemo(()=>[0,.7,1.25],[]),u=Nt.useMemo(()=>[{position:{x:s,y:o,z:l},rotation:{x:0,y:0,z:0}},{position:{x:1,y:1,z:0},rotation:{x:0,y:2,z:0}},{position:{x:-1,y:1,z:0},rotation:{x:0,y:-2,z:0}},{position:{x:0,y:1,z:-2},rotation:{x:0,y:-3,z:0}}],[s,o,l]),f=10,d=Nt.useMemo(()=>kN(u,f),[u,f]),[p,g]=Nt.useState(0),_=30;let x=0;const E=Nt.useCallback((h=0)=>{const y=h-x,S=1e3/_;y>S&&(x=h-y%S,Js.update(),i.current.render(e.current,n.current)),requestAnimationFrame(E)},[]),T=Nt.useCallback(Zx.debounce(()=>{n.current.aspect=window.innerWidth/window.innerHeight,n.current.updateProjectionMatrix(),i.current.setSize(window.innerWidth,window.innerHeight)},200),[]),v=Nt.useCallback(Zx.throttle(()=>{const h=window.pageYOffset||document.documentElement.scrollTop;let y=Math.floor(h/(document.body.offsetHeight/d.length));if(y=Math.max(0,y),y=Math.min(d.length-1,y),y!==p){const S={x:n.current.position.x,y:n.current.position.y,z:n.current.position.z},w={x:n.current.rotation.x,y:n.current.rotation.y,z:n.current.rotation.z};new Js.Tween(S).to(d[y].position,1e3).easing(Js.Easing.Quadratic.Out).onUpdate(()=>{n.current.position.set(S.x,S.y,S.z)}).start(),new Js.Tween(w).to(d[y].rotation,1e3).easing(Js.Easing.Quadratic.Out).onUpdate(()=>{n.current.rotation.set(w.x,w.y,w.z)}).start(),g(y)}},200),[p,d]);return Nt.useEffect(()=>{let h,y,S;h=new AN,y=new Ii(75,window.innerWidth/window.innerHeight,.1,1e3),S=new jM({antialias:!1,precision:"lowp",alpha:!1}),S.setSize(window.innerWidth,window.innerHeight),S.setClearColor(16777215,0),e.current=h,n.current=y,i.current=S,t.current&&t.current.appendChild(S.domElement);const w=new bN;return fetch("https://raw.githubusercontent.com/phbui/phbui.github.io/main/src/assets/gundam.stl").then(I=>I.arrayBuffer()).then(I=>{const D=w.parse(I),H=new sg({color:16777215,wireframe:!0,wireframeLinewidth:10}),C=new kr(D,H);C.frustumCulled=!0,C.rotation.x=-Math.PI/2,C.scale.set(.01,.01,.01),e.current.add(C)}).catch(I=>console.error("Error loading STL file:",I)),y.position.x=s,y.position.y=o,y.position.z=l,E(),()=>{t.current&&t.current.removeChild(S.domElement)}},[E,s,o,l]),Nt.useEffect(()=>(window.addEventListener("resize",T),window.addEventListener("scroll",v),()=>{window.removeEventListener("resize",T),window.removeEventListener("scroll",v)}),[T,v]),de.jsx("div",{ref:t})}),cr=({text:t})=>{const e=Nt.useRef(null),n="ABCDEFGHIJKLMNOPQRSTUVWXYZ";return Nt.useEffect(()=>{let i=null;const s=l=>{let u=0;clearInterval(i),i=setInterval(()=>{l.target.innerText=t.split("").map((f,d)=>d<u?f:n[Math.floor(Math.random()*26)]).join(""),u>=t.length&&clearInterval(i),u+=1/3},30)},o=e.current;return o.addEventListener("mouseover",s),()=>{clearInterval(i),o.removeEventListener("mouseover",s)}},[t,n]),de.jsx("span",{className:"links",ref:e,onClick:i=>{i.stopPropagation()},children:t})},GN=({homeRef:t,projectsRef:e,aboutRef:n,contactRef:i})=>{const s=Nt.useCallback(o=>()=>{const{current:l}=o;window.scrollTo({top:l.offsetTop-window.innerHeight/2+l.offsetHeight*3,behavior:"smooth"})},[]);return de.jsxs("div",{className:"accentLine",children:[de.jsx("pre",{className:"preText",children:de.jsx("a",{onClick:s(t),className:"navBar",children:de.jsx(cr,{text:"home"})})}),de.jsx("pre",{className:"preText",children:de.jsx("a",{onClick:s(e),className:"navBar",children:de.jsx(cr,{text:"projects"})})}),de.jsx("pre",{className:"preText",children:de.jsx("a",{onClick:s(n),className:"navBar",children:de.jsx(cr,{text:"about"})})}),de.jsx("pre",{className:"preText",children:de.jsx("a",{onClick:s(i),className:"navBar",children:de.jsx(cr,{text:"contact"})})})]})},VN="/assets/Philip Bui Resume-f797366c.pdf",Qx=({children:t})=>{const[e,n]=Nt.useState(0),i=l=>{l.stopPropagation(),n(u=>(u+1)%t.length)},s=l=>{l.stopPropagation(),n(u=>u===0?t.length-1:u-1)},o=(l,u)=>{l.stopPropagation(),n(u)};return de.jsxs(de.Fragment,{children:[de.jsx("button",{className:"carousel-button prev",onClick:s,children:"❮"}),de.jsx("div",{className:"carousel-content",children:t.map((l,u)=>de.jsx("div",{className:`carousel-item ${u===e?"active":""}`,children:l},u))}),de.jsx("button",{className:"carousel-button next",onClick:i,children:"❯"}),de.jsx("div",{className:"carousel-indicators",children:t.map((l,u)=>de.jsx("span",{className:`indicator ${u===e?"active":""}`,onClick:f=>o(f,u)},u))})]})},Jx=({img:t,title:e,link:n,text:i,download:s})=>de.jsxs("div",{className:"projectItem",children:[de.jsx("a",{href:n,download:s,children:de.jsx("img",{className:"projectIMG",src:t})}),de.jsxs("div",{className:"projectTextHolder",children:[de.jsx("pre",{className:"preText projectText",children:de.jsx("a",{href:n,download:s,children:de.jsx(cr,{text:e})})}),de.jsx("pre",{className:"preText projectText",children:i})]})]}),WN="/assets/chatgpt-1d833fe7.jpg",eS="/assets/wpi-47d99374.jpg",XN="/assets/mgbwh-ab0eb310.jpg",jN="/assets/main-era-3b5e4cc4.jpg",qN="/assets/untitled-1a018dab.jpg",YN="/assets/tarot-b4411c73.jpg",am="/assets/tufts-ab11cf4d.jpg",$N=[{img:am,title:"Computer Vision-Guided Sphero Swarm Navigation",link:"https://www.are.na/block/33345533",text:"A framework for Sphero swarm navigation using probabilistic methods and computer vision, developed for Tufts' CS robotics research."},{img:eS,title:"Worcester PermitPro",link:"https://www.are.na/block/26865313",text:"A blockchain-based smart contract system that aims to streamline low-income housing development in Worcester for WPI's MQP Program."},{img:am,title:"Robot System Study: Manual vs Autonomous Controls",link:"https://www.are.na/block/33345530",text:"Explored human preferences in manual vs autonomous control of Sphero robots, emphasizing trust and adaptability in navigation systems."},{img:WN,title:"ChatGPT, How Do I Design?",link:"https://www.are.na/block/26865380",text:"This paper advocates for harmonious human-AI co-creation in creativity, acknowledging benefits, challenges, and ethics."},{img:eS,title:"NitroCycle",link:"https://github.com/IQP-NCPOGD/nitrocycle",text:"An augmented reality game about nitrogen cycles in farming made for Boys & Girls Club for the WPI's IQP program."},{img:XN,title:"Brigham and Women's MSRS",link:"https://github.com/phbui/BWH-Medical-Service-Request-System",text:"A medical service request system (MSRS) made for Mass General Brigham and Women's Hospital for WPI's Software Engineering course."}],KN=[{img:qN,title:"Untitled Boston",link:"https://untitled.boston/",text:"A website I made for my start-up entertainment consultancy, Untitled Boston."},{img:YN,title:"Tarot Cards",link:"https://objectivephi.github.io/",text:"A little tarot card reader I made on my downtime at work."},{img:jN,title:"Main Era",link:"https://main-era.github.io/",text:"A website I made for a Boston-based, indie punk band."},{img:am,title:"Haven",link:"https://www.are.na/block/26865372",text:"A live map for anonymous incident reporting and resource location designed for Tuft's Spring 2024 Producthon."}],ZN=()=>{const[t,e]=Nt.useState(null),n=i=>{e(t===i?null:i)};return de.jsxs("div",{className:"projects-container",children:[de.jsxs("div",{className:"section",style:{width:t==="academic"?"100%":t===null?"50%":"0%",height:t==="academic"?"100%":"80px",transition:"all 0.5s ease"},onClick:()=>n("academic"),children:[de.jsx("pre",{className:"section-title",children:"Academic (📓)"}),de.jsx("div",{className:"carousel-container",style:{height:t==="academic"?"calc(20vh + 1rem)":"0%",overflow:"hidden",transition:"all 0.5s ease"},children:de.jsx(Qx,{children:$N.map((i,s)=>de.jsx(Jx,{img:i.img,title:i.title,link:i.link,text:i.text,download:i.download},s))})})]}),de.jsxs("div",{className:"section",style:{width:t==="miscellaneous"?"100%":t===null?"50%":"0%",height:t==="miscellaneous"?"100%":"80px",transition:"all 0.5s ease"},onClick:()=>n("miscellaneous"),children:[de.jsx("pre",{className:"section-title",children:"Miscellaneous (✪)"}),de.jsx("div",{className:"carousel-container",style:{height:t==="miscellaneous"?"calc(20vh + 1rem)":"0%",overflow:"hidden",transition:"all 0.5s ease"},children:de.jsx(Qx,{children:KN.map((i,s)=>de.jsx(Jx,{img:i.img,title:i.title,link:i.link,text:i.text},s))})})]})]})},QN=()=>{const t=Nt.useRef(null),e=Nt.useRef(null),n=Nt.useRef(null),i=Nt.useRef(null);return de.jsxs("div",{className:"mainContainer",children:[de.jsx("div",{className:"background"}),de.jsx(GN,{homeRef:t,projectsRef:e,aboutRef:n,contactRef:i}),de.jsx("div",{className:"canvasHolder",children:de.jsx(HN,{})}),de.jsxs("div",{className:"accentHolder",children:[de.jsx("div",{className:"topLeft",children:de.jsx("p",{className:"accentText verticalText",children:"+---|=============-"})}),de.jsx("div",{className:"topLeft",children:de.jsx("p",{className:"accentText",children:"+---|=============-"})}),de.jsx("div",{className:"bottomRight rightSword",children:de.jsx("p",{className:"accentText verticalText",children:"-=============|---+"})}),de.jsx("div",{className:"bottomRight",children:de.jsx("p",{className:"accentText",children:"-=============|---+"})})]}),de.jsxs("div",{ref:t,className:"textBox",style:{margin:"0 25vw 10vh 0"},children:[de.jsx("pre",{children:"Hello, my name is Phi (Φ),"}),de.jsx("pre",{children:"I am interested in the intersection"}),de.jsx("pre",{children:"between humans and technology."})]}),de.jsx("div",{ref:e,className:"textBox",style:{margin:"0 15vw -25vh 0"},children:de.jsx("pre",{children:"Check out some of my work:"})}),de.jsx(ZN,{}),de.jsx("div",{ref:n,className:"textBox",style:{margin:"5vh -15vw 10vh 0"},children:de.jsx("pre",{children:"Some stuff about me:"})}),de.jsxs("div",{className:"textBox",style:{margin:"0 -12.5vw 10vh 0"},children:[de.jsx("pre",{children:"const About = (phi_bui) => {"}),de.jsxs("pre",{children:["  const resume = fetch('",de.jsx("a",{href:VN,download:"Philip Bui - Resume.pdf",children:de.jsx(cr,{text:"resume.pdf"})}),"');"]}),de.jsx("pre",{children:"  let undergrad = 'B.S. in CS @ WPI';"}),de.jsx("pre",{children:"  let grad = 'M.S. in HRI @ Tufts';"}),de.jsx("br",{}),de.jsxs("pre",{children:[" ","  const ",de.jsx("span",{style:{textDecoration:"underline"},children:"industry_experience"})," = () => {"]}),de.jsxs("pre",{children:[" ","    return ["]}),de.jsxs("pre",{children:[" ","      {Amazon: 'Operations Intern'},"]}),de.jsxs("pre",{children:[" ","      {ProsperOn: 'Website Developer'},"]}),de.jsxs("pre",{children:[" ","      {enLabel: 'Full-Stack Software Engineer'}"]}),de.jsxs("pre",{children:[" ","    ];"]}),de.jsx("br",{}),de.jsxs("pre",{children:[" ","  const ",de.jsx("span",{style:{textDecoration:"underline"},children:"research_experience"})," = () => {"]}),de.jsxs("pre",{children:[" ","    return ["]}),de.jsxs("pre",{children:[" ","      {Tufts: 'Human Interaction Lab'},"]}),de.jsxs("pre",{children:[" ","    ];"]}),de.jsxs("pre",{children:[" ","  };"]}),de.jsx("pre",{children:"}"})]}),de.jsx("div",{ref:i,className:"textBox",style:{margin:"0 32.5vw 10vh 0"},children:de.jsx("pre",{children:"Get in contact with me:"})}),de.jsxs("div",{className:"textBox",children:[de.jsxs("pre",{children:["const Contact = {            "," "]}),de.jsxs("pre",{children:["  {email: ",de.jsx("a",{href:"mailto:bilphui@gmail.com",children:de.jsx(cr,{text:"bilphui@gmail.com"})}),"},"]}),de.jsxs("pre",{children:["  {linkedin: ",de.jsx("a",{href:"https://www.linkedin.com/in/phi-bui/",children:de.jsx(cr,{text:"phi-bui"})}),"},"]}),de.jsxs("pre",{children:["  {github: ",de.jsx("a",{href:"https://github.com/phbui",children:de.jsx(cr,{text:"phbui"})}),"},"]}),de.jsxs("pre",{children:["  {instagram: ",de.jsx("a",{href:"https://www.instagram.com/objectivephi/",children:de.jsx(cr,{text:"@objectivephi"})}),"}"]}),de.jsx("pre",{children:"}"})]})]})};vP.render(de.jsx(fS.StrictMode,{children:de.jsx(QN,{})}),document.getElementById("root"))});export default JN();