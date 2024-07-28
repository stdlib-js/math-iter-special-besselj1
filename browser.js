// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
var r,e;r=this,e=function(){"use strict";var r="function"==typeof Object.defineProperty?Object.defineProperty:null,e=Object.defineProperty;function t(r){return"number"==typeof r}function n(r){var e,t="";for(e=0;e<r;e++)t+="0";return t}function o(r,e,t){var o=!1,i=e-r.length;return i<0||(function(r){return"-"===r[0]}(r)&&(o=!0,r=r.substr(1)),r=t?r+n(i):n(i)+r,o&&(r="-"+r)),r}var i=String.prototype.toLowerCase,a=String.prototype.toUpperCase;function u(r){var e,n,u;switch(r.specifier){case"b":e=2;break;case"o":e=8;break;case"x":case"X":e=16;break;default:e=10}if(n=r.arg,u=parseInt(n,10),!isFinite(u)){if(!t(n))throw new Error("invalid integer. Value: "+n);u=0}return u<0&&("u"===r.specifier||10!==e)&&(u=4294967295+u+1),u<0?(n=(-u).toString(e),r.precision&&(n=o(n,r.precision,r.padRight)),n="-"+n):(n=u.toString(e),u||r.precision?r.precision&&(n=o(n,r.precision,r.padRight)):n="",r.sign&&(n=r.sign+n)),16===e&&(r.alternate&&(n="0x"+n),n=r.specifier===a.call(r.specifier)?a.call(n):i.call(n)),8===e&&r.alternate&&"0"!==n.charAt(0)&&(n="0"+n),n}var c=Math.abs,f=String.prototype.toLowerCase,l=String.prototype.toUpperCase,s=String.prototype.replace,p=/e\+(\d)$/,y=/e-(\d)$/,d=/^(\d+)$/,v=/^(\d+)e/,g=/\.0$/,b=/\.0*e/,h=/(\..*[^0])0*e/;function w(r){var e,n,o=parseFloat(r.arg);if(!isFinite(o)){if(!t(r.arg))throw new Error("invalid floating-point number. Value: "+n);o=r.arg}switch(r.specifier){case"e":case"E":n=o.toExponential(r.precision);break;case"f":case"F":n=o.toFixed(r.precision);break;case"g":case"G":c(o)<1e-4?((e=r.precision)>0&&(e-=1),n=o.toExponential(e)):n=o.toPrecision(r.precision),r.alternate||(n=s.call(n,h,"$1e"),n=s.call(n,b,"e"),n=s.call(n,g,""));break;default:throw new Error("invalid double notation. Value: "+r.specifier)}return n=s.call(n,p,"e+0$1"),n=s.call(n,y,"e-0$1"),r.alternate&&(n=s.call(n,d,"$1."),n=s.call(n,v,"$1.e")),o>=0&&r.sign&&(n=r.sign+n),n=r.specifier===l.call(r.specifier)?l.call(n):f.call(n)}function m(r){var e,t="";for(e=0;e<r;e++)t+=" ";return t}var j=String.fromCharCode,A=Array.isArray;function _(r){return r!=r}function E(r){var e={};return e.specifier=r.specifier,e.precision=void 0===r.precision?1:r.precision,e.width=r.width,e.flags=r.flags||"",e.mapping=r.mapping,e}function x(r){var e,t,n,i,a,c,f,l,s,p,y,d,v;if(!A(r))throw new TypeError("invalid argument. First argument must be an array. Value: `"+r+"`.");for(c="",f=1,l=0;l<r.length;l++)if("string"==typeof(n=r[l]))c+=n;else{if(e=void 0!==n.precision,!(n=E(n)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+l+"`. Value: `"+n+"`.");for(n.mapping&&(f=n.mapping),t=n.flags,s=0;s<t.length;s++)switch(i=t.charAt(s)){case" ":n.sign=" ";break;case"+":n.sign="+";break;case"-":n.padRight=!0,n.padZeros=!1;break;case"0":n.padZeros=t.indexOf("-")<0;break;case"#":n.alternate=!0;break;default:throw new Error("invalid flag: "+i)}if("*"===n.width){if(n.width=parseInt(arguments[f],10),f+=1,_(n.width))throw new TypeError("the argument for * width at position "+f+" is not a number. Value: `"+n.width+"`.");n.width<0&&(n.padRight=!0,n.width=-n.width)}if(e&&"*"===n.precision){if(n.precision=parseInt(arguments[f],10),f+=1,_(n.precision))throw new TypeError("the argument for * precision at position "+f+" is not a number. Value: `"+n.precision+"`.");n.precision<0&&(n.precision=1,e=!1)}switch(n.arg=arguments[f],n.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":e&&(n.padZeros=!1),n.arg=u(n);break;case"s":n.maxWidth=e?n.precision:-1,n.arg=String(n.arg);break;case"c":if(!_(n.arg)){if((a=parseInt(n.arg,10))<0||a>127)throw new Error("invalid character code. Value: "+n.arg);n.arg=_(a)?String(n.arg):j(a)}break;case"e":case"E":case"f":case"F":case"g":case"G":e||(n.precision=6),n.arg=w(n);break;default:throw new Error("invalid specifier: "+n.specifier)}n.maxWidth>=0&&n.arg.length>n.maxWidth&&(n.arg=n.arg.substring(0,n.maxWidth)),n.padZeros?n.arg=o(n.arg,n.width||n.precision,n.padRight):n.width&&(n.arg=(p=n.arg,y=n.width,d=n.padRight,v=void 0,(v=y-p.length)<0?p:p=d?p+m(v):m(v)+p)),c+=n.arg||"",f+=1}return c}var O=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function S(r){var e={mapping:r[1]?parseInt(r[1],10):void 0,flags:r[2],width:r[3],precision:r[5],specifier:r[6]};return"."===r[4]&&void 0===r[5]&&(e.precision="1"),e}function U(r){var e,t,n,o;for(t=[],o=0,n=O.exec(r);n;)(e=r.slice(o,O.lastIndex-n[0].length)).length&&t.push(e),t.push(S(n)),o=O.lastIndex,n=O.exec(r);return(e=r.slice(o)).length&&t.push(e),t}function T(r){var e,t;if("string"!=typeof r)throw new TypeError(T("invalid argument. First argument must be a string. Value: `%s`.",r));for(e=[U(r)],t=1;t<arguments.length;t++)e.push(arguments[t]);return x.apply(null,e)}var F,I=Object.prototype,N=I.toString,k=I.__defineGetter__,V=I.__defineSetter__,P=I.__lookupGetter__,G=I.__lookupSetter__;F=function(){try{return r({},"x",{}),!0}catch(r){return!1}}()?e:function(r,e,t){var n,o,i,a;if("object"!=typeof r||null===r||"[object Array]"===N.call(r))throw new TypeError(T("invalid argument. First argument must be an object. Value: `%s`.",r));if("object"!=typeof t||null===t||"[object Array]"===N.call(t))throw new TypeError(T("invalid argument. Property descriptor must be an object. Value: `%s`.",t));if((o="value"in t)&&(P.call(r,e)||G.call(r,e)?(n=r.__proto__,r.__proto__=I,delete r[e],r[e]=t.value,r.__proto__=n):r[e]=t.value),i="get"in t,a="set"in t,o&&(i||a))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return i&&k&&k.call(r,e,t.get),a&&V&&V.call(r,e,t.set),r};var L=F;function $(r,e,t){L(r,e,{configurable:!1,enumerable:!1,writable:!1,value:t})}var C=/./;function B(r){return"boolean"==typeof r}var H="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function W(){return H&&"symbol"==typeof Symbol.toStringTag}var M=Object.prototype.toString,R=Object.prototype.hasOwnProperty;function Z(r,e){return null!=r&&R.call(r,e)}var X="function"==typeof Symbol?Symbol:void 0,Y="function"==typeof X?X.toStringTag:"",q=W()?function(r){var e,t,n;if(null==r)return M.call(r);t=r[Y],e=Z(r,Y);try{r[Y]=void 0}catch(e){return M.call(r)}return n=M.call(r),e?r[Y]=t:delete r[Y],n}:function(r){return M.call(r)},z=Boolean,D=Boolean.prototype.toString,J=W();function K(r){return"object"==typeof r&&(r instanceof z||(J?function(r){try{return D.call(r),!0}catch(r){return!1}}(r):"[object Boolean]"===q(r)))}function Q(r){return B(r)||K(r)}$(Q,"isPrimitive",B),$(Q,"isObject",K);var rr="object"==typeof self?self:null,er="object"==typeof window?window:null,tr="object"==typeof globalThis?globalThis:null,nr=function(r){if(arguments.length){if(!B(r))throw new TypeError(T("invalid argument. Must provide a boolean. Value: `%s`.",r));if(r)return new Function("return this;")()}if(tr)return tr;if(rr)return rr;if(er)return er;throw new Error("unexpected error. Unable to resolve global object.")}(),or=nr.document&&nr.document.childNodes,ir=Int8Array;function ar(){return/^\s*function\s*([^(]*)/i}var ur=/^\s*function\s*([^(]*)/i;$(ar,"REGEXP",ur);var cr=Array.isArray?Array.isArray:function(r){return"[object Array]"===q(r)};function fr(r){return null!==r&&"object"==typeof r}function lr(r){var e,t,n,o;if(("Object"===(t=q(r).slice(8,-1))||"Error"===t)&&r.constructor){if("string"==typeof(n=r.constructor).name)return n.name;if(e=ur.exec(n.toString()))return e[1]}return fr(o=r)&&(o._isBuffer||o.constructor&&"function"==typeof o.constructor.isBuffer&&o.constructor.isBuffer(o))?"Buffer":t}$(fr,"isObjectLikeArray",function(r){if("function"!=typeof r)throw new TypeError(T("invalid argument. Must provide a function. Value: `%s`.",r));return function(e){var t,n;if(!cr(e))return!1;if(0===(t=e.length))return!1;for(n=0;n<t;n++)if(!1===r(e[n]))return!1;return!0}}(fr));var sr="function"==typeof C||"object"==typeof ir||"function"==typeof or?function(r){return lr(r).toLowerCase()}:function(r){var e;return null===r?"null":"object"==(e=typeof r)?lr(r).toLowerCase():e};function pr(r){return"function"===sr(r)}function yr(r){return"number"==typeof r}var dr=Number,vr=dr.prototype.toString,gr=W();function br(r){return"object"==typeof r&&(r instanceof dr||(gr?function(r){try{return vr.call(r),!0}catch(r){return!1}}(r):"[object Number]"===q(r)))}function hr(r){return yr(r)||br(r)}$(hr,"isPrimitive",yr),$(hr,"isObject",br);var wr,mr="function"==typeof X&&"symbol"==typeof X("foo")&&Z(X,"iterator")&&"symbol"==typeof X.iterator?Symbol.iterator:null,jr=Object,Ar=Object.getPrototypeOf;wr=pr(Object.getPrototypeOf)?Ar:function(r){var e=function(r){return r.__proto__}(r);return e||null===e?e:"[object Function]"===q(r.constructor)?r.constructor.prototype:r instanceof Object?Object.prototype:null};var _r=wr,Er=Object.prototype;function xr(r){var e;return!!function(r){return"object"==typeof r&&null!==r&&!cr(r)}(r)&&(e=function(r){return null==r?null:(r=jr(r),_r(r))}(r),!e||!Z(r,"constructor")&&Z(e,"constructor")&&pr(e.constructor)&&"[object Function]"===q(e.constructor)&&Z(e,"isPrototypeOf")&&pr(e.isPrototypeOf)&&(e===Er||function(r){var e;for(e in r)if(!Z(r,e))return!1;return!0}(r)))}function Or(r,e,t){var n,o,i,a,u,c;if(c=typeof(u=r),null===u||"object"!==c&&"function"!==c||!pr(u.next))throw new TypeError(T("invalid argument. First argument must be an iterator protocol-compliant object. Value: `%s`.",r));if(!pr(e))throw new TypeError(T("invalid argument. Second argument must be a function. Value: `%s`.",e));if(n={invalid:NaN},arguments.length>2&&(i=function(r,e){return xr(e)?(Z(e,"invalid")&&(r.invalid=e.invalid),null):new TypeError(T("invalid argument. Options argument must be an object. Value: `%s`.",e))}(n,t),i))throw i;return $(o={},"next",(function(){var t;return a?{done:!0}:(t=r.next()).done?(a=!0,t):{value:yr(t.value)?e(t.value):n.invalid,done:!1}})),$(o,"return",(function(r){return a=!0,arguments.length?{value:r,done:!0}:{done:!0}})),mr&&pr(r[mr])&&$(o,mr,(function(){return Or(r[mr](),e,n)})),o}var Sr=Math.sqrt;function Ur(r){return Math.abs(r)}var Tr,Fr=2147483647,Ir=2146435072,Nr="function"==typeof Uint32Array,kr="function"==typeof Uint32Array?Uint32Array:null,Vr="function"==typeof Uint32Array?Uint32Array:void 0;Tr=function(){var r,e,t;if("function"!=typeof kr)return!1;try{e=new kr(e=[1,3.14,-3.14,4294967296,4294967297]),t=e,r=(Nr&&t instanceof Uint32Array||"[object Uint32Array]"===q(t))&&1===e[0]&&3===e[1]&&4294967293===e[2]&&0===e[3]&&1===e[4]}catch(e){r=!1}return r}()?Vr:function(){throw new Error("not implemented")};var Pr,Gr=Tr,Lr="function"==typeof Float64Array,$r="function"==typeof Float64Array?Float64Array:null,Cr="function"==typeof Float64Array?Float64Array:void 0;Pr=function(){var r,e,t;if("function"!=typeof $r)return!1;try{e=new $r([1,3.14,-3.14,NaN]),t=e,r=(Lr&&t instanceof Float64Array||"[object Float64Array]"===q(t))&&1===e[0]&&3.14===e[1]&&-3.14===e[2]&&e[3]!=e[3]}catch(e){r=!1}return r}()?Cr:function(){throw new Error("not implemented")};var Br,Hr=Pr,Wr="function"==typeof Uint8Array,Mr="function"==typeof Uint8Array?Uint8Array:null,Rr="function"==typeof Uint8Array?Uint8Array:void 0;Br=function(){var r,e,t;if("function"!=typeof Mr)return!1;try{e=new Mr(e=[1,3.14,-3.14,256,257]),t=e,r=(Wr&&t instanceof Uint8Array||"[object Uint8Array]"===q(t))&&1===e[0]&&3===e[1]&&253===e[2]&&0===e[3]&&1===e[4]}catch(e){r=!1}return r}()?Rr:function(){throw new Error("not implemented")};var Zr,Xr=Br,Yr="function"==typeof Uint16Array,qr="function"==typeof Uint16Array?Uint16Array:null,zr="function"==typeof Uint16Array?Uint16Array:void 0;Zr=function(){var r,e,t;if("function"!=typeof qr)return!1;try{e=new qr(e=[1,3.14,-3.14,65536,65537]),t=e,r=(Yr&&t instanceof Uint16Array||"[object Uint16Array]"===q(t))&&1===e[0]&&3===e[1]&&65533===e[2]&&0===e[3]&&1===e[4]}catch(e){r=!1}return r}()?zr:function(){throw new Error("not implemented")};var Dr,Jr={uint16:Zr,uint8:Xr};(Dr=new Jr.uint16(1))[0]=4660;var Kr=52===new Jr.uint8(Dr.buffer)[0],Qr=!0===Kr?1:0,re=new Hr(1),ee=new Gr(re.buffer);function te(r){return re[0]=r,ee[Qr]}var ne,oe,ie=1048575,ae=!0===Kr?0:1,ue=new Hr(1),ce=new Gr(ue.buffer);!0===Kr?(ne=1,oe=0):(ne=0,oe=1);var fe={HIGH:ne,LOW:oe},le=new Hr(1),se=new Gr(le.buffer),pe=fe.HIGH,ye=fe.LOW;function de(r,e){return se[pe]=r,se[ye]=e,le[0]}var ve=Math.floor,ge=Number.POSITIVE_INFINITY,be=dr.NEGATIVE_INFINITY,he=1023,we=1023,me=-1023,je=-1074;function Ae(r){return r!=r}function _e(r){return r===ge||r===be}var Ee,xe,Oe=2147483648;!0===Kr?(Ee=1,xe=0):(Ee=0,xe=1);var Se={HIGH:Ee,LOW:xe},Ue=new Hr(1),Te=new Gr(Ue.buffer),Fe=Se.HIGH,Ie=Se.LOW;function Ne(r,e,t,n){return Ue[0]=r,e[n]=Te[Fe],e[n+t]=Te[Ie],e}function ke(r){return Ne(r,[0,0],1,0)}$(ke,"assign",Ne);var Ve=[0,0],Pe=22250738585072014e-324,Ge=4503599627370496;function Le(r,e,t,n){return Ae(r)||_e(r)?(e[n]=r,e[n+t]=0,e):0!==r&&Ur(r)<Pe?(e[n]=r*Ge,e[n+t]=-52,e):(e[n]=r,e[n+t]=0,e)}$((function(r){return Le(r,[0,0],1,0)}),"assign",Le);var $e=2220446049250313e-31,Ce=2148532223,Be=[0,0],He=[0,0];function We(r,e){var t,n,o,i,a,u;return 0===e||0===r||Ae(r)||_e(r)?r:(Le(r,Be,1,0),r=Be[0],e+=Be[1],e+=function(r){var e=te(r);return(e=(e&Ir)>>>20)-he|0}(r),e<je?(o=0,i=r,ke.assign(o,Ve,1,0),a=Ve[0],a&=Fr,u=te(i),de(a|=u&=Oe,Ve[1])):e>we?r<0?be:ge:(e<=me?(e+=52,n=$e):n=1,ke.assign(r,He,1,0),t=He[0],t&=Ce,n*de(t|=e+he<<20,He[1])))}function Me(r){return function(r,e){var t,n;for(t=[],n=0;n<e;n++)t.push(r);return t}(0,r)}var Re=[10680707,7228996,1387004,2578385,16069853,12639074,9804092,4427841,16666979,11263675,12935607,2387514,4345298,14681673,3074569,13734428,16653803,1880361,10960616,8533493,3062596,8710556,7349940,6258241,3772886,3769171,3798172,8675211,12450088,3874808,9961438,366607,15675153,9132554,7151469,3571407,2607881,12013382,4155038,6285869,7677882,13102053,15825725,473591,9065106,15363067,6271263,9264392,5636912,4652155,7056368,13614112,10155062,1944035,9527646,15080200,6658437,6231200,6832269,16767104,5075751,3212806,1398474,7579849,6349435,12618859],Ze=[1.570796251296997,7.549789415861596e-8,5390302529957765e-30,3282003415807913e-37,1270655753080676e-44,12293330898111133e-52,27337005381646456e-60,21674168387780482e-67],Xe=16777216,Ye=5.960464477539063e-8,qe=Me(20),ze=Me(20),De=Me(20),Je=Me(20);function Ke(r,e,t,n,o,i,a,u,c){var f,l,s,p,y,d,v,g,b;for(p=i,b=n[t],g=t,y=0;g>0;y++)l=Ye*b|0,Je[y]=b-Xe*l|0,b=n[g-1]+l,g-=1;if(b=We(b,o),b-=8*ve(.125*b),b-=v=0|b,s=0,o>0?(v+=y=Je[t-1]>>24-o,Je[t-1]-=y<<24-o,s=Je[t-1]>>23-o):0===o?s=Je[t-1]>>23:b>=.5&&(s=2),s>0){for(v+=1,f=0,y=0;y<t;y++)g=Je[y],0===f?0!==g&&(f=1,Je[y]=16777216-g):Je[y]=16777215-g;if(o>0)switch(o){case 1:Je[t-1]&=8388607;break;case 2:Je[t-1]&=4194303}2===s&&(b=1-b,0!==f&&(b-=We(1,o)))}if(0===b){for(g=0,y=t-1;y>=i;y--)g|=Je[y];if(0===g){for(d=1;0===Je[i-d];d++);for(y=t+1;y<=t+d;y++){for(c[u+y]=Re[a+y],l=0,g=0;g<=u;g++)l+=r[g]*c[u+(y-g)];n[y]=l}return Ke(r,e,t+=d,n,o,i,a,u,c)}}if(0===b)for(t-=1,o-=24;0===Je[t];)t-=1,o-=24;else(b=We(b,-o))>=Xe?(l=Ye*b|0,Je[t]=b-Xe*l|0,o+=24,Je[t+=1]=l):Je[t]=0|b;for(l=We(1,o),y=t;y>=0;y--)n[y]=l*Je[y],l*=Ye;for(y=t;y>=0;y--){for(l=0,d=0;d<=p&&d<=t-y;d++)l+=Ze[d]*n[y+d];De[t-y]=l}for(l=0,y=t;y>=0;y--)l+=De[y];for(e[0]=0===s?l:-l,l=De[0]-l,y=1;y<=t;y++)l+=De[y];return e[1]=0===s?l:-l,7&v}function Qe(r,e,t,n){var o,i,a,u,c,f,l;for((i=(t-3)/24|0)<0&&(i=0),u=t-24*(i+1),f=i-(a=n-1),l=a+4,c=0;c<=l;c++)qe[c]=f<0?0:Re[f],f+=1;for(c=0;c<=4;c++){for(o=0,f=0;f<=a;f++)o+=r[f]*qe[a+(c-f)];ze[c]=o}return Ke(r,e,4,ze,u,4,i,a,qe)}var rt=Math.round,et=.6366197723675814,tt=1.5707963267341256,nt=6077100506506192e-26,ot=6077100506303966e-26,it=20222662487959506e-37,at=20222662487111665e-37,ut=84784276603689e-45,ct=2047;function ft(r,e,t){var n,o,i,a,u;return i=r-(n=rt(r*et))*tt,a=n*nt,u=e>>20|0,t[0]=i-a,u-(te(t[0])>>20&ct)>16&&(a=n*it-((o=i)-(i=o-(a=n*ot))-a),t[0]=i-a,u-(te(t[0])>>20&ct)>49&&(a=n*ut-((o=i)-(i=o-(a=n*at))-a),t[0]=i-a)),t[1]=i-t[0]-a,n}var lt=0,st=16777216,pt=1.5707963267341256,yt=6077100506506192e-26,dt=2*yt,vt=3*yt,gt=4*yt,bt=598523,ht=1072243195,wt=1073928572,mt=1074752122,jt=1074977148,At=1075183036,_t=1075388923,Et=1075594811,xt=1094263291,Ot=[0,0,0],St=[0,0];function Ut(r,e){var t,n,o,i,a,u,c;if((o=te(r)&Fr|0)<=ht)return e[0]=r,e[1]=0,0;if(o<=mt)return(o&ie)===bt?ft(r,o,e):o<=wt?r>0?(c=r-pt,e[0]=c-yt,e[1]=c-e[0]-yt,1):(c=r+pt,e[0]=c+yt,e[1]=c-e[0]+yt,-1):r>0?(c=r-2*pt,e[0]=c-dt,e[1]=c-e[0]-dt,2):(c=r+2*pt,e[0]=c+dt,e[1]=c-e[0]+dt,-2);if(o<=Et)return o<=At?o===jt?ft(r,o,e):r>0?(c=r-3*pt,e[0]=c-vt,e[1]=c-e[0]-vt,3):(c=r+3*pt,e[0]=c+vt,e[1]=c-e[0]+vt,-3):o===_t?ft(r,o,e):r>0?(c=r-4*pt,e[0]=c-gt,e[1]=c-e[0]-gt,4):(c=r+4*pt,e[0]=c+gt,e[1]=c-e[0]+gt,-4);if(o<xt)return ft(r,o,e);if(o>=Ir)return e[0]=NaN,e[1]=NaN,0;for(t=function(r){return ue[0]=r,ce[ae]}(r),c=de(o-((n=(o>>20)-1046)<<20|0),t),a=0;a<2;a++)Ot[a]=0|c,c=(c-Ot[a])*st;for(Ot[2]=c,i=3;Ot[i-1]===lt;)i-=1;return u=Qe(Ot,St,n,i),r<0?(e[0]=-St[0],e[1]=-St[1],-u):(e[0]=St[0],e[1]=St[1],u)}var Tt=-.16666666666666632,Ft=.00833333333332249,It=-.0001984126982985795,Nt=27557313707070068e-22,kt=-2.5050760253406863e-8,Vt=1.58969099521155e-10,Pt=.0416666666666666,Gt=-.001388888888887411,Lt=2480158728947673e-20,$t=-2.7557314351390663e-7,Ct=2.087572321298175e-9,Bt=-11359647557788195e-27;function Ht(r,e,t,n,o){var i,a,u,c,f;return a=Ft+(f=r*r)*(It+f*Nt)+f*(c=f*f)*(kt+f*Vt),u=f*r,t[o]=0===e?r+u*(Tt+f*a):r-(f*(.5*e-u*a)-e-u*Tt),a=f*(Pt+f*(Gt+f*Lt)),a+=c*c*($t+f*(Ct+f*Bt)),c=1-(i=.5*f),t[o+n]=c+(1-c-i+(f*a-r*e)),t}var Wt=1072243195,Mt=1044381696,Rt=[0,0];function Zt(r,e,t,n){var o,i;if(o=te(r),(o&=Fr)<=Wt)return o<Mt&&0==(0|r)&&(e[n]=r,e[n+t]=0),Ht(r,0,e,t,n);if(o>=Ir)return e[n]=NaN,e[n+t]=NaN,e;switch(i=Ut(r,Rt),Ht(Rt[0],Rt[1],e,t,n),3&i){case 1:return o=e[n+t],e[n+t]=-e[n],e[n]=o,e;case 2:return e[n]*=-1,e[n+t]*=-1,e;case 3:return o=-e[n+t],e[n+t]=e[n],e[n]=o,e;default:return e}}$((function(r){return Zt(r,[0,0],1,0)}),"assign",Zt);var Xt=1.772453850905516,Yt=3.8317059702075125,qt=7.015586669815619,zt=981,Dt=-.0003252797924876844,Jt=1796,Kt=-38330184381246464e-21,Qt=[0,0];function rn(r){var e,t,n,o,i,a,u,c;return c=Ur(r),0===r||c===ge?0:(c<=4?(i=function(r){var e,t;return 0===r?-.03405537391318949:((r<0?-r:r)<=1?(e=r*(6678104126.14924+r*(r*(980629.0409895825+r*(r*(10.650724020080236+-.010767857011487301*r)-4461.579298277507))-115486967.64841276))-142585098013.66644,t=4186860446082.0176+r*(42091902282.58013+r*(202283751.40097034+r*(591176.1449417479+r*(1074.227223951738+r*(1+0*r)))))):(e=(r=1/r)*(10.650724020080236+r*(r*(980629.0409895825+r*(r*(6678104126.14924+-142585098013.66644*r)-115486967.64841276))-4461.579298277507))-.010767857011487301,t=0+r*(1+r*(1074.227223951738+r*(591176.1449417479+r*(202283751.40097034+r*(42091902282.58013+4186860446082.0176*r)))))),e/t)}(a=r*r),e=(u=c*(c+Yt)*(c-zt/256-Dt))*i):c<=8?(i=function(r){var e,t;return 0===r?-.010158790774176108:((r<0?-r:r)<=1?(e=r*(1660853173129901.8+r*(r*(355806656709.1062+r*(r*(5079326.614801118+r*(4.6179191852758255*r-7502.334222078161))-1811393126.9860668))-36658018905416.664))-0x3e45840c066730,t=0x17f1d1995ae4fb00+r*(0x3cda8dbce6f4c4+r*(84899346165481.42+r*(276227772862.44086+r*(648725028.9959639+r*(1126712.5065029138+r*(1388.6978985861358+1*r))))))):(e=4.6179191852758255+(r=1/r)*(r*(5079326.614801118+r*(r*(355806656709.1062+r*(r*(1660853173129901.8+-0x3e45840c066730*r)-36658018905416.664))-1811393126.9860668))-7502.334222078161),t=1+r*(1388.6978985861358+r*(1126712.5065029138+r*(648725028.9959639+r*(276227772862.44086+r*(84899346165481.42+r*(0x3cda8dbce6f4c4+0x17f1d1995ae4fb00*r))))))),e/t)}(a=r*r),e=(u=c*(c+qt)*(c-Jt/256-Kt))*i):(t=function(r){var e,t;return 0===r?1:((r<0?-r:r)<=1?(e=r*(r*(r*(r*(r*(0*r-1611.6166443246102)-109824.05543459347)-1523529.3511811374)-6603373.248364939)-9942246.505077641)-4435757.816794128,t=r*(r*(r*(r*(r*(1*r-1455.0094401904962)-107263.8599110382)-1511809.5066341609)-6585339.4797230875)-9934124.389934586)-4435757.816794128):(e=0+(r=1/r)*(r*(r*(r*(r*(-4435757.816794128*r-9942246.505077641)-6603373.248364939)-1523529.3511811374)-109824.05543459347)-1611.6166443246102),t=1+r*(r*(r*(r*(r*(-4435757.816794128*r-9934124.389934586)-6585339.4797230875)-1511809.5066341609)-107263.8599110382)-1455.0094401904962)),e/t)}(o=(a=8/c)*a),n=function(r){var e,t;return 0===r?.046875:((r<0?-r:r)<=1?(e=33220.913409857225+r*(85145.1606753357+r*(66178.83658127084+r*(18494.262873223866+r*(1706.375429020768+r*(35.26513384663603+0*r))))),t=708712.8194102874+r*(1819458.0422439973+r*(1419460.669603721+r*(400294.43582266977+r*(37890.2297457722+r*(863.8367769604992+1*r)))))):(e=0+(r=1/r)*(35.26513384663603+r*(1706.375429020768+r*(18494.262873223866+r*(66178.83658127084+r*(85145.1606753357+33220.913409857225*r))))),t=1+r*(863.8367769604992+r*(37890.2297457722+r*(400294.43582266977+r*(1419460.669603721+r*(1819458.0422439973+708712.8194102874*r)))))),e/t)}(o),u=1/(Sr(c)*Xt),Zt(c,Qt,1,0),e=u*(t*(Qt[0]-Qt[1])+a*n*(Qt[0]+Qt[1]))),r<0&&(e*=-1),e)}return function(r){return Or(r,rn)}},"object"==typeof exports&&"undefined"!=typeof module?module.exports=e():"function"==typeof define&&define.amd?define(e):(r="undefined"!=typeof globalThis?globalThis:r||self).iterBesselj1=e();
//# sourceMappingURL=browser.js.map
