// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
!function(r,e){"object"==typeof exports&&"undefined"!=typeof module?module.exports=e():"function"==typeof define&&define.amd?define(e):(r="undefined"!=typeof globalThis?globalThis:r||self).iterBesselj1=e()}(this,(function(){"use strict";var r="function"==typeof Object.defineProperty?Object.defineProperty:null;var e=Object.defineProperty;function t(r){return"number"==typeof r}function n(r){var e,t="";for(e=0;e<r;e++)t+="0";return t}function o(r,e,t){var o=!1,i=e-r.length;return i<0||(function(r){return"-"===r[0]}(r)&&(o=!0,r=r.substr(1)),r=t?r+n(i):n(i)+r,o&&(r="-"+r)),r}var i=String.prototype.toLowerCase,a=String.prototype.toUpperCase;function u(r){var e,n,u;switch(r.specifier){case"b":e=2;break;case"o":e=8;break;case"x":case"X":e=16;break;default:e=10}if(n=r.arg,u=parseInt(n,10),!isFinite(u)){if(!t(n))throw new Error("invalid integer. Value: "+n);u=0}return u<0&&("u"===r.specifier||10!==e)&&(u=4294967295+u+1),u<0?(n=(-u).toString(e),r.precision&&(n=o(n,r.precision,r.padRight)),n="-"+n):(n=u.toString(e),u||r.precision?r.precision&&(n=o(n,r.precision,r.padRight)):n="",r.sign&&(n=r.sign+n)),16===e&&(r.alternate&&(n="0x"+n),n=r.specifier===a.call(r.specifier)?a.call(n):i.call(n)),8===e&&r.alternate&&"0"!==n.charAt(0)&&(n="0"+n),n}var c=Math.abs,f=String.prototype.toLowerCase,l=String.prototype.toUpperCase,s=String.prototype.replace,p=/e\+(\d)$/,y=/e-(\d)$/,v=/^(\d+)$/,d=/^(\d+)e/,g=/\.0$/,b=/\.0*e/,h=/(\..*[^0])0*e/;function w(r){var e,n,o=parseFloat(r.arg);if(!isFinite(o)){if(!t(r.arg))throw new Error("invalid floating-point number. Value: "+n);o=r.arg}switch(r.specifier){case"e":case"E":n=o.toExponential(r.precision);break;case"f":case"F":n=o.toFixed(r.precision);break;case"g":case"G":c(o)<1e-4?((e=r.precision)>0&&(e-=1),n=o.toExponential(e)):n=o.toPrecision(r.precision),r.alternate||(n=s.call(n,h,"$1e"),n=s.call(n,b,"e"),n=s.call(n,g,""));break;default:throw new Error("invalid double notation. Value: "+r.specifier)}return n=s.call(n,p,"e+0$1"),n=s.call(n,y,"e-0$1"),r.alternate&&(n=s.call(n,v,"$1."),n=s.call(n,d,"$1.e")),o>=0&&r.sign&&(n=r.sign+n),n=r.specifier===l.call(r.specifier)?l.call(n):f.call(n)}function m(r){var e,t="";for(e=0;e<r;e++)t+=" ";return t}var j=String.fromCharCode,A=Array.isArray;function _(r){return r!=r}function E(r){var e={};return e.specifier=r.specifier,e.precision=void 0===r.precision?1:r.precision,e.width=r.width,e.flags=r.flags||"",e.mapping=r.mapping,e}function x(r){var e,t,n,i,a,c,f,l,s,p,y,v,d;if(!A(r))throw new TypeError("invalid argument. First argument must be an array. Value: `"+r+"`.");for(c="",f=1,l=0;l<r.length;l++)if(n=r[l],"string"==typeof n)c+=n;else{if(e=void 0!==n.precision,!(n=E(n)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+l+"`. Value: `"+n+"`.");for(n.mapping&&(f=n.mapping),t=n.flags,s=0;s<t.length;s++)switch(i=t.charAt(s)){case" ":n.sign=" ";break;case"+":n.sign="+";break;case"-":n.padRight=!0,n.padZeros=!1;break;case"0":n.padZeros=t.indexOf("-")<0;break;case"#":n.alternate=!0;break;default:throw new Error("invalid flag: "+i)}if("*"===n.width){if(n.width=parseInt(arguments[f],10),f+=1,_(n.width))throw new TypeError("the argument for * width at position "+f+" is not a number. Value: `"+n.width+"`.");n.width<0&&(n.padRight=!0,n.width=-n.width)}if(e&&"*"===n.precision){if(n.precision=parseInt(arguments[f],10),f+=1,_(n.precision))throw new TypeError("the argument for * precision at position "+f+" is not a number. Value: `"+n.precision+"`.");n.precision<0&&(n.precision=1,e=!1)}switch(n.arg=arguments[f],n.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":e&&(n.padZeros=!1),n.arg=u(n);break;case"s":n.maxWidth=e?n.precision:-1,n.arg=String(n.arg);break;case"c":if(!_(n.arg)){if((a=parseInt(n.arg,10))<0||a>127)throw new Error("invalid character code. Value: "+n.arg);n.arg=_(a)?String(n.arg):j(a)}break;case"e":case"E":case"f":case"F":case"g":case"G":e||(n.precision=6),n.arg=w(n);break;default:throw new Error("invalid specifier: "+n.specifier)}n.maxWidth>=0&&n.arg.length>n.maxWidth&&(n.arg=n.arg.substring(0,n.maxWidth)),n.padZeros?n.arg=o(n.arg,n.width||n.precision,n.padRight):n.width&&(n.arg=(p=n.arg,y=n.width,v=n.padRight,d=void 0,(d=y-p.length)<0?p:p=v?p+m(d):m(d)+p)),c+=n.arg||"",f+=1}return c}var O=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function S(r){var e={mapping:r[1]?parseInt(r[1],10):void 0,flags:r[2],width:r[3],precision:r[5],specifier:r[6]};return"."===r[4]&&void 0===r[5]&&(e.precision="1"),e}function U(r){var e,t,n,o;for(t=[],o=0,n=O.exec(r);n;)(e=r.slice(o,O.lastIndex-n[0].length)).length&&t.push(e),t.push(S(n)),o=O.lastIndex,n=O.exec(r);return(e=r.slice(o)).length&&t.push(e),t}function T(r){var e,t;if("string"!=typeof r)throw new TypeError(T("invalid argument. First argument must be a string. Value: `%s`.",r));for(e=[U(r)],t=1;t<arguments.length;t++)e.push(arguments[t]);return x.apply(null,e)}var F,I=Object.prototype,N=I.toString,k=I.__defineGetter__,V=I.__defineSetter__,P=I.__lookupGetter__,G=I.__lookupSetter__;F=function(){try{return r({},"x",{}),!0}catch(r){return!1}}()?e:function(r,e,t){var n,o,i,a;if("object"!=typeof r||null===r||"[object Array]"===N.call(r))throw new TypeError(T("invalid argument. First argument must be an object. Value: `%s`.",r));if("object"!=typeof t||null===t||"[object Array]"===N.call(t))throw new TypeError(T("invalid argument. Property descriptor must be an object. Value: `%s`.",t));if((o="value"in t)&&(P.call(r,e)||G.call(r,e)?(n=r.__proto__,r.__proto__=I,delete r[e],r[e]=t.value,r.__proto__=n):r[e]=t.value),i="get"in t,a="set"in t,o&&(i||a))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return i&&k&&k.call(r,e,t.get),a&&V&&V.call(r,e,t.set),r};var L=F;function $(r,e,t){L(r,e,{configurable:!1,enumerable:!1,writable:!1,value:t})}var C=/./;function B(r){return"boolean"==typeof r}var H="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function W(){return H&&"symbol"==typeof Symbol.toStringTag}var M=Object.prototype.toString;var R=Object.prototype.hasOwnProperty;function Z(r,e){return null!=r&&R.call(r,e)}var X="function"==typeof Symbol?Symbol:void 0,Y="function"==typeof X?X.toStringTag:"";var q=W()?function(r){var e,t,n;if(null==r)return M.call(r);t=r[Y],e=Z(r,Y);try{r[Y]=void 0}catch(e){return M.call(r)}return n=M.call(r),e?r[Y]=t:delete r[Y],n}:function(r){return M.call(r)},z=Boolean,D=Boolean.prototype.toString;var J=W();function K(r){return"object"==typeof r&&(r instanceof z||(J?function(r){try{return D.call(r),!0}catch(r){return!1}}(r):"[object Boolean]"===q(r)))}function Q(r){return B(r)||K(r)}$(Q,"isPrimitive",B),$(Q,"isObject",K);var rr="object"==typeof self?self:null,er="object"==typeof window?window:null,tr="object"==typeof global?global:null,nr="object"==typeof globalThis?globalThis:null;var or=function(r){if(arguments.length){if(!B(r))throw new TypeError(T("invalid argument. Must provide a boolean. Value: `%s`.",r));if(r)return new Function("return this;")()}if(nr)return nr;if(rr)return rr;if(er)return er;if(tr)return tr;throw new Error("unexpected error. Unable to resolve global object.")}(),ir=or.document&&or.document.childNodes,ar=Int8Array;function ur(){return/^\s*function\s*([^(]*)/i}var cr=/^\s*function\s*([^(]*)/i;$(ur,"REGEXP",cr);var fr=Array.isArray?Array.isArray:function(r){return"[object Array]"===q(r)};function lr(r){return null!==r&&"object"==typeof r}function sr(r){var e,t,n,o;if(("Object"===(t=q(r).slice(8,-1))||"Error"===t)&&r.constructor){if("string"==typeof(n=r.constructor).name)return n.name;if(e=cr.exec(n.toString()))return e[1]}return lr(o=r)&&(o._isBuffer||o.constructor&&"function"==typeof o.constructor.isBuffer&&o.constructor.isBuffer(o))?"Buffer":t}$(lr,"isObjectLikeArray",function(r){if("function"!=typeof r)throw new TypeError(T("invalid argument. Must provide a function. Value: `%s`.",r));return function(e){var t,n;if(!fr(e))return!1;if(0===(t=e.length))return!1;for(n=0;n<t;n++)if(!1===r(e[n]))return!1;return!0}}(lr));var pr="function"==typeof C||"object"==typeof ar||"function"==typeof ir?function(r){return sr(r).toLowerCase()}:function(r){var e;return null===r?"null":"object"===(e=typeof r)?sr(r).toLowerCase():e};function yr(r){return"function"===pr(r)}function vr(r){return"number"==typeof r}var dr=Number,gr=dr.prototype.toString;var br=W();function hr(r){return"object"==typeof r&&(r instanceof dr||(br?function(r){try{return gr.call(r),!0}catch(r){return!1}}(r):"[object Number]"===q(r)))}function wr(r){return vr(r)||hr(r)}$(wr,"isPrimitive",vr),$(wr,"isObject",hr);var mr="function"==typeof X&&"symbol"==typeof X("foo")&&Z(X,"iterator")&&"symbol"==typeof X.iterator?Symbol.iterator:null;var jr,Ar=Object,_r=Object.getPrototypeOf;jr=yr(Object.getPrototypeOf)?_r:function(r){var e=function(r){return r.__proto__}(r);return e||null===e?e:"[object Function]"===q(r.constructor)?r.constructor.prototype:r instanceof Object?Object.prototype:null};var Er=jr;var xr=Object.prototype;function Or(r){var e;return!!function(r){return"object"==typeof r&&null!==r&&!fr(r)}(r)&&(e=function(r){return null==r?null:(r=Ar(r),Er(r))}(r),!e||!Z(r,"constructor")&&Z(e,"constructor")&&yr(e.constructor)&&"[object Function]"===q(e.constructor)&&Z(e,"isPrototypeOf")&&yr(e.isPrototypeOf)&&(e===xr||function(r){var e;for(e in r)if(!Z(r,e))return!1;return!0}(r)))}function Sr(r,e,t){var n,o,i,a,u,c;if(c=typeof(u=r),null===u||"object"!==c&&"function"!==c||!yr(u.next))throw new TypeError(T("invalid argument. First argument must be an iterator protocol-compliant object. Value: `%s`.",r));if(!yr(e))throw new TypeError(T("invalid argument. Second argument must be a function. Value: `%s`.",e));if(n={invalid:NaN},arguments.length>2&&(i=function(r,e){return Or(e)?(Z(e,"invalid")&&(r.invalid=e.invalid),null):new TypeError(T("invalid argument. Options argument must be an object. Value: `%s`.",e))}(n,t),i))throw i;return $(o={},"next",(function(){var t;if(a)return{done:!0};if((t=r.next()).done)return a=!0,t;return{value:vr(t.value)?e(t.value):n.invalid,done:!1}})),$(o,"return",(function(r){if(a=!0,arguments.length)return{value:r,done:!0};return{done:!0}})),mr&&yr(r[mr])&&$(o,mr,(function(){return Sr(r[mr](),e,n)})),o}var Ur=Math.sqrt;function Tr(r){return Math.abs(r)}var Fr=2147483647,Ir=2146435072,Nr="function"==typeof Uint32Array;var kr="function"==typeof Uint32Array?Uint32Array:null;var Vr,Pr="function"==typeof Uint32Array?Uint32Array:void 0;Vr=function(){var r,e,t;if("function"!=typeof kr)return!1;try{e=new kr(e=[1,3.14,-3.14,4294967296,4294967297]),t=e,r=(Nr&&t instanceof Uint32Array||"[object Uint32Array]"===q(t))&&1===e[0]&&3===e[1]&&4294967293===e[2]&&0===e[3]&&1===e[4]}catch(e){r=!1}return r}()?Pr:function(){throw new Error("not implemented")};var Gr=Vr,Lr="function"==typeof Float64Array;var $r="function"==typeof Float64Array?Float64Array:null;var Cr,Br="function"==typeof Float64Array?Float64Array:void 0;Cr=function(){var r,e,t;if("function"!=typeof $r)return!1;try{e=new $r([1,3.14,-3.14,NaN]),t=e,r=(Lr&&t instanceof Float64Array||"[object Float64Array]"===q(t))&&1===e[0]&&3.14===e[1]&&-3.14===e[2]&&e[3]!=e[3]}catch(e){r=!1}return r}()?Br:function(){throw new Error("not implemented")};var Hr=Cr,Wr="function"==typeof Uint8Array;var Mr="function"==typeof Uint8Array?Uint8Array:null;var Rr,Zr="function"==typeof Uint8Array?Uint8Array:void 0;Rr=function(){var r,e,t;if("function"!=typeof Mr)return!1;try{e=new Mr(e=[1,3.14,-3.14,256,257]),t=e,r=(Wr&&t instanceof Uint8Array||"[object Uint8Array]"===q(t))&&1===e[0]&&3===e[1]&&253===e[2]&&0===e[3]&&1===e[4]}catch(e){r=!1}return r}()?Zr:function(){throw new Error("not implemented")};var Xr=Rr,Yr="function"==typeof Uint16Array;var qr="function"==typeof Uint16Array?Uint16Array:null;var zr,Dr="function"==typeof Uint16Array?Uint16Array:void 0;zr=function(){var r,e,t;if("function"!=typeof qr)return!1;try{e=new qr(e=[1,3.14,-3.14,65536,65537]),t=e,r=(Yr&&t instanceof Uint16Array||"[object Uint16Array]"===q(t))&&1===e[0]&&3===e[1]&&65533===e[2]&&0===e[3]&&1===e[4]}catch(e){r=!1}return r}()?Dr:function(){throw new Error("not implemented")};var Jr,Kr={uint16:zr,uint8:Xr};(Jr=new Kr.uint16(1))[0]=4660;var Qr=52===new Kr.uint8(Jr.buffer)[0],re=!0===Qr?1:0,ee=new Hr(1),te=new Gr(ee.buffer);function ne(r){return ee[0]=r,te[re]}var oe,ie,ae=1048575,ue=!0===Qr?0:1,ce=new Hr(1),fe=new Gr(ce.buffer);!0===Qr?(oe=1,ie=0):(oe=0,ie=1);var le={HIGH:oe,LOW:ie},se=new Hr(1),pe=new Gr(se.buffer),ye=le.HIGH,ve=le.LOW;function de(r,e){return pe[ye]=r,pe[ve]=e,se[0]}var ge=Math.floor,be=Number.POSITIVE_INFINITY,he=dr.NEGATIVE_INFINITY,we=1023,me=1023,je=-1023,Ae=-1074;function _e(r){return r!=r}function Ee(r){return r===be||r===he}var xe,Oe,Se=2147483648;!0===Qr?(xe=1,Oe=0):(xe=0,Oe=1);var Ue={HIGH:xe,LOW:Oe},Te=new Hr(1),Fe=new Gr(Te.buffer),Ie=Ue.HIGH,Ne=Ue.LOW;function ke(r,e,t,n){return Te[0]=r,e[n]=Fe[Ie],e[n+t]=Fe[Ne],e}function Ve(r){return ke(r,[0,0],1,0)}$(Ve,"assign",ke);var Pe=[0,0];var Ge=22250738585072014e-324,Le=4503599627370496;function $e(r,e,t,n){return _e(r)||Ee(r)?(e[n]=r,e[n+t]=0,e):0!==r&&Tr(r)<Ge?(e[n]=r*Le,e[n+t]=-52,e):(e[n]=r,e[n+t]=0,e)}$((function(r){return $e(r,[0,0],1,0)}),"assign",$e);var Ce=2220446049250313e-31,Be=2148532223,He=[0,0],We=[0,0];function Me(r,e){var t,n,o,i,a,u;return 0===e||0===r||_e(r)||Ee(r)?r:($e(r,He,1,0),r=He[0],e+=He[1],e+=function(r){var e=ne(r);return(e=(e&Ir)>>>20)-we|0}(r),e<Ae?(o=0,i=r,Ve.assign(o,Pe,1,0),a=Pe[0],a&=Fr,u=ne(i),de(a|=u&=Se,Pe[1])):e>me?r<0?he:be:(e<=je?(e+=52,n=Ce):n=1,Ve.assign(r,We,1,0),t=We[0],t&=Be,n*de(t|=e+we<<20,We[1])))}function Re(r){return function(r,e){var t,n;for(t=[],n=0;n<e;n++)t.push(r);return t}(0,r)}var Ze=[10680707,7228996,1387004,2578385,16069853,12639074,9804092,4427841,16666979,11263675,12935607,2387514,4345298,14681673,3074569,13734428,16653803,1880361,10960616,8533493,3062596,8710556,7349940,6258241,3772886,3769171,3798172,8675211,12450088,3874808,9961438,366607,15675153,9132554,7151469,3571407,2607881,12013382,4155038,6285869,7677882,13102053,15825725,473591,9065106,15363067,6271263,9264392,5636912,4652155,7056368,13614112,10155062,1944035,9527646,15080200,6658437,6231200,6832269,16767104,5075751,3212806,1398474,7579849,6349435,12618859],Xe=[1.570796251296997,7.549789415861596e-8,5390302529957765e-30,3282003415807913e-37,1270655753080676e-44,12293330898111133e-52,27337005381646456e-60,21674168387780482e-67],Ye=16777216,qe=5.960464477539063e-8,ze=Re(20),De=Re(20),Je=Re(20),Ke=Re(20);function Qe(r,e,t,n,o,i,a,u,c){var f,l,s,p,y,v,d,g,b;for(p=i,b=n[t],g=t,y=0;g>0;y++)l=qe*b|0,Ke[y]=b-Ye*l|0,b=n[g-1]+l,g-=1;if(b=Me(b,o),b-=8*ge(.125*b),b-=d=0|b,s=0,o>0?(d+=y=Ke[t-1]>>24-o,Ke[t-1]-=y<<24-o,s=Ke[t-1]>>23-o):0===o?s=Ke[t-1]>>23:b>=.5&&(s=2),s>0){for(d+=1,f=0,y=0;y<t;y++)g=Ke[y],0===f?0!==g&&(f=1,Ke[y]=16777216-g):Ke[y]=16777215-g;if(o>0)switch(o){case 1:Ke[t-1]&=8388607;break;case 2:Ke[t-1]&=4194303}2===s&&(b=1-b,0!==f&&(b-=Me(1,o)))}if(0===b){for(g=0,y=t-1;y>=i;y--)g|=Ke[y];if(0===g){for(v=1;0===Ke[i-v];v++);for(y=t+1;y<=t+v;y++){for(c[u+y]=Ze[a+y],l=0,g=0;g<=u;g++)l+=r[g]*c[u+(y-g)];n[y]=l}return Qe(r,e,t+=v,n,o,i,a,u,c)}}if(0===b)for(t-=1,o-=24;0===Ke[t];)t-=1,o-=24;else(b=Me(b,-o))>=Ye?(l=qe*b|0,Ke[t]=b-Ye*l|0,o+=24,Ke[t+=1]=l):Ke[t]=0|b;for(l=Me(1,o),y=t;y>=0;y--)n[y]=l*Ke[y],l*=qe;for(y=t;y>=0;y--){for(l=0,v=0;v<=p&&v<=t-y;v++)l+=Xe[v]*n[y+v];Je[t-y]=l}for(l=0,y=t;y>=0;y--)l+=Je[y];for(e[0]=0===s?l:-l,l=Je[0]-l,y=1;y<=t;y++)l+=Je[y];return e[1]=0===s?l:-l,7&d}function rt(r,e,t,n){var o,i,a,u,c,f,l;for(4,(i=(t-3)/24|0)<0&&(i=0),u=t-24*(i+1),f=i-(a=n-1),l=a+4,c=0;c<=l;c++)ze[c]=f<0?0:Ze[f],f+=1;for(c=0;c<=4;c++){for(o=0,f=0;f<=a;f++)o+=r[f]*ze[a+(c-f)];De[c]=o}return 4,Qe(r,e,4,De,u,4,i,a,ze)}var et=Math.round,tt=.6366197723675814,nt=1.5707963267341256,ot=6077100506506192e-26,it=6077100506303966e-26,at=20222662487959506e-37,ut=20222662487111665e-37,ct=84784276603689e-45,ft=2047;function lt(r,e,t){var n,o,i,a,u;return i=r-(n=et(r*tt))*nt,a=n*ot,u=e>>20|0,t[0]=i-a,u-(ne(t[0])>>20&ft)>16&&(a=n*at-((o=i)-(i=o-(a=n*it))-a),t[0]=i-a,u-(ne(t[0])>>20&ft)>49&&(a=n*ct-((o=i)-(i=o-(a=n*ut))-a),t[0]=i-a)),t[1]=i-t[0]-a,n}var st=0,pt=16777216,yt=1.5707963267341256,vt=6077100506506192e-26,dt=2*vt,gt=3*vt,bt=4*vt,ht=598523,wt=1072243195,mt=1073928572,jt=1074752122,At=1074977148,_t=1075183036,Et=1075388923,xt=1075594811,Ot=1094263291,St=[0,0,0],Ut=[0,0];function Tt(r,e){var t,n,o,i,a,u,c;if((o=ne(r)&Fr|0)<=wt)return e[0]=r,e[1]=0,0;if(o<=jt)return(o&ae)===ht?lt(r,o,e):o<=mt?r>0?(c=r-yt,e[0]=c-vt,e[1]=c-e[0]-vt,1):(c=r+yt,e[0]=c+vt,e[1]=c-e[0]+vt,-1):r>0?(c=r-2*yt,e[0]=c-dt,e[1]=c-e[0]-dt,2):(c=r+2*yt,e[0]=c+dt,e[1]=c-e[0]+dt,-2);if(o<=xt)return o<=_t?o===At?lt(r,o,e):r>0?(c=r-3*yt,e[0]=c-gt,e[1]=c-e[0]-gt,3):(c=r+3*yt,e[0]=c+gt,e[1]=c-e[0]+gt,-3):o===Et?lt(r,o,e):r>0?(c=r-4*yt,e[0]=c-bt,e[1]=c-e[0]-bt,4):(c=r+4*yt,e[0]=c+bt,e[1]=c-e[0]+bt,-4);if(o<Ot)return lt(r,o,e);if(o>=Ir)return e[0]=NaN,e[1]=NaN,0;for(t=function(r){return ce[0]=r,fe[ue]}(r),c=de(o-((n=(o>>20)-1046)<<20|0),t),a=0;a<2;a++)St[a]=0|c,c=(c-St[a])*pt;for(St[2]=c,i=3;St[i-1]===st;)i-=1;return u=rt(St,Ut,n,i),r<0?(e[0]=-Ut[0],e[1]=-Ut[1],-u):(e[0]=Ut[0],e[1]=Ut[1],u)}var Ft=-.16666666666666632,It=.00833333333332249,Nt=-.0001984126982985795,kt=27557313707070068e-22,Vt=-2.5050760253406863e-8,Pt=1.58969099521155e-10,Gt=.0416666666666666,Lt=-.001388888888887411,$t=2480158728947673e-20,Ct=-2.7557314351390663e-7,Bt=2.087572321298175e-9,Ht=-11359647557788195e-27;function Wt(r,e,t,n,o){var i,a,u,c,f;return a=It+(f=r*r)*(Nt+f*kt)+f*(c=f*f)*(Vt+f*Pt),u=f*r,t[o]=0===e?r+u*(Ft+f*a):r-(f*(.5*e-u*a)-e-u*Ft),a=f*(Gt+f*(Lt+f*$t)),a+=c*c*(Ct+f*(Bt+f*Ht)),c=1-(i=.5*f),t[o+n]=c+(1-c-i+(f*a-r*e)),t}var Mt=1072243195,Rt=1044381696,Zt=[0,0];function Xt(r,e,t,n){var o,i;if(o=ne(r),(o&=Fr)<=Mt)return o<Rt&&0==(0|r)&&(e[n]=r,e[n+t]=0),Wt(r,0,e,t,n);if(o>=Ir)return e[n]=NaN,e[n+t]=NaN,e;switch(i=Tt(r,Zt),Wt(Zt[0],Zt[1],e,t,n),3&i){case 1:return o=e[n+t],e[n+t]=-e[n],e[n]=o,e;case 2:return e[n]*=-1,e[n+t]*=-1,e;case 3:return o=-e[n+t],e[n+t]=e[n],e[n]=o,e;default:return e}}$((function(r){return Xt(r,[0,0],1,0)}),"assign",Xt);var Yt=1.772453850905516;var qt=3.8317059702075125,zt=7.015586669815619,Dt=981,Jt=-.0003252797924876844,Kt=1796,Qt=-38330184381246464e-21,rn=[0,0];function en(r){var e,t,n,o,i,a,u,c;return c=Tr(r),0===r||c===be?0:(c<=4?(i=function(r){var e,t;return 0===r?-.03405537391318949:((r<0?-r:r)<=1?(e=r*(6678104126.14924+r*(r*(980629.0409895825+r*(r*(10.650724020080236+-.010767857011487301*r)-4461.579298277507))-115486967.64841276))-142585098013.66644,t=4186860446082.0176+r*(42091902282.58013+r*(202283751.40097034+r*(591176.1449417479+r*(1074.227223951738+r*(1+0*r)))))):(e=(r=1/r)*(10.650724020080236+r*(r*(980629.0409895825+r*(r*(6678104126.14924+-142585098013.66644*r)-115486967.64841276))-4461.579298277507))-.010767857011487301,t=0+r*(1+r*(1074.227223951738+r*(591176.1449417479+r*(202283751.40097034+r*(42091902282.58013+4186860446082.0176*r)))))),e/t)}(a=r*r),e=(u=c*(c+qt)*(c-Dt/256-Jt))*i):c<=8?(i=function(r){var e,t;return 0===r?-.010158790774176108:((r<0?-r:r)<=1?(e=r*(1660853173129901.8+r*(r*(355806656709.1062+r*(r*(5079326.614801118+r*(4.6179191852758255*r-7502.334222078161))-1811393126.9860668))-36658018905416.664))-0x3e45840c066730,t=0x17f1d1995ae4fb00+r*(0x3cda8dbce6f4c4+r*(84899346165481.42+r*(276227772862.44086+r*(648725028.9959639+r*(1126712.5065029138+r*(1388.6978985861358+1*r))))))):(e=4.6179191852758255+(r=1/r)*(r*(5079326.614801118+r*(r*(355806656709.1062+r*(r*(1660853173129901.8+-0x3e45840c066730*r)-36658018905416.664))-1811393126.9860668))-7502.334222078161),t=1+r*(1388.6978985861358+r*(1126712.5065029138+r*(648725028.9959639+r*(276227772862.44086+r*(84899346165481.42+r*(0x3cda8dbce6f4c4+0x17f1d1995ae4fb00*r))))))),e/t)}(a=r*r),e=(u=c*(c+zt)*(c-Kt/256-Qt))*i):(t=function(r){var e,t;return 0===r?1:((r<0?-r:r)<=1?(e=r*(r*(r*(r*(r*(0*r-1611.6166443246102)-109824.05543459347)-1523529.3511811374)-6603373.248364939)-9942246.505077641)-4435757.816794128,t=r*(r*(r*(r*(r*(1*r-1455.0094401904962)-107263.8599110382)-1511809.5066341609)-6585339.4797230875)-9934124.389934586)-4435757.816794128):(e=0+(r=1/r)*(r*(r*(r*(r*(-4435757.816794128*r-9942246.505077641)-6603373.248364939)-1523529.3511811374)-109824.05543459347)-1611.6166443246102),t=1+r*(r*(r*(r*(r*(-4435757.816794128*r-9934124.389934586)-6585339.4797230875)-1511809.5066341609)-107263.8599110382)-1455.0094401904962)),e/t)}(o=(a=8/c)*a),n=function(r){var e,t;return 0===r?.046875:((r<0?-r:r)<=1?(e=33220.913409857225+r*(85145.1606753357+r*(66178.83658127084+r*(18494.262873223866+r*(1706.375429020768+r*(35.26513384663603+0*r))))),t=708712.8194102874+r*(1819458.0422439973+r*(1419460.669603721+r*(400294.43582266977+r*(37890.2297457722+r*(863.8367769604992+1*r)))))):(e=0+(r=1/r)*(35.26513384663603+r*(1706.375429020768+r*(18494.262873223866+r*(66178.83658127084+r*(85145.1606753357+33220.913409857225*r))))),t=1+r*(863.8367769604992+r*(37890.2297457722+r*(400294.43582266977+r*(1419460.669603721+r*(1819458.0422439973+708712.8194102874*r)))))),e/t)}(o),u=1/(Ur(c)*Yt),Xt(c,rn,1,0),e=u*(t*(rn[0]-rn[1])+a*n*(rn[0]+rn[1]))),r<0&&(e*=-1),e)}return function(r){return Sr(r,en)}}));
//# sourceMappingURL=index.js.map