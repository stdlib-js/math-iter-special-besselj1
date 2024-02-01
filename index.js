// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
!function(r,e){"object"==typeof exports&&"undefined"!=typeof module?module.exports=e():"function"==typeof define&&define.amd?define(e):(r="undefined"!=typeof globalThis?globalThis:r||self).iterBesselj1=e()}(this,(function(){"use strict";var r="function"==typeof Object.defineProperty?Object.defineProperty:null;var e=Object.defineProperty;function t(r){return"number"==typeof r}function n(r){var e,t="";for(e=0;e<r;e++)t+="0";return t}function o(r,e,t){var o=!1,i=e-r.length;return i<0||(function(r){return"-"===r[0]}(r)&&(o=!0,r=r.substr(1)),r=t?r+n(i):n(i)+r,o&&(r="-"+r)),r}var i=String.prototype.toLowerCase,a=String.prototype.toUpperCase;function u(r){var e,n,u;switch(r.specifier){case"b":e=2;break;case"o":e=8;break;case"x":case"X":e=16;break;default:e=10}if(n=r.arg,u=parseInt(n,10),!isFinite(u)){if(!t(n))throw new Error("invalid integer. Value: "+n);u=0}return u<0&&("u"===r.specifier||10!==e)&&(u=4294967295+u+1),u<0?(n=(-u).toString(e),r.precision&&(n=o(n,r.precision,r.padRight)),n="-"+n):(n=u.toString(e),u||r.precision?r.precision&&(n=o(n,r.precision,r.padRight)):n="",r.sign&&(n=r.sign+n)),16===e&&(r.alternate&&(n="0x"+n),n=r.specifier===a.call(r.specifier)?a.call(n):i.call(n)),8===e&&r.alternate&&"0"!==n.charAt(0)&&(n="0"+n),n}function c(r){return"string"==typeof r}var f=Math.abs,l=String.prototype.toLowerCase,s=String.prototype.toUpperCase,p=String.prototype.replace,y=/e\+(\d)$/,v=/e-(\d)$/,d=/^(\d+)$/,g=/^(\d+)e/,b=/\.0$/,h=/\.0*e/,w=/(\..*[^0])0*e/;function m(r){var e,n,o=parseFloat(r.arg);if(!isFinite(o)){if(!t(r.arg))throw new Error("invalid floating-point number. Value: "+n);o=r.arg}switch(r.specifier){case"e":case"E":n=o.toExponential(r.precision);break;case"f":case"F":n=o.toFixed(r.precision);break;case"g":case"G":f(o)<1e-4?((e=r.precision)>0&&(e-=1),n=o.toExponential(e)):n=o.toPrecision(r.precision),r.alternate||(n=p.call(n,w,"$1e"),n=p.call(n,h,"e"),n=p.call(n,b,""));break;default:throw new Error("invalid double notation. Value: "+r.specifier)}return n=p.call(n,y,"e+0$1"),n=p.call(n,v,"e-0$1"),r.alternate&&(n=p.call(n,d,"$1."),n=p.call(n,g,"$1.e")),o>=0&&r.sign&&(n=r.sign+n),n=r.specifier===s.call(r.specifier)?s.call(n):l.call(n)}function j(r){var e,t="";for(e=0;e<r;e++)t+=" ";return t}function A(r,e,t){var n=e-r.length;return n<0?r:r=t?r+j(n):j(n)+r}var _=String.fromCharCode,E=isNaN,x=Array.isArray;function O(r){var e={};return e.specifier=r.specifier,e.precision=void 0===r.precision?1:r.precision,e.width=r.width,e.flags=r.flags||"",e.mapping=r.mapping,e}function S(r){var e,t,n,i,a,f,l,s,p;if(!x(r))throw new TypeError("invalid argument. First argument must be an array. Value: `"+r+"`.");for(f="",l=1,s=0;s<r.length;s++)if(c(n=r[s]))f+=n;else{if(e=void 0!==n.precision,!(n=O(n)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+s+"`. Value: `"+n+"`.");for(n.mapping&&(l=n.mapping),t=n.flags,p=0;p<t.length;p++)switch(i=t.charAt(p)){case" ":n.sign=" ";break;case"+":n.sign="+";break;case"-":n.padRight=!0,n.padZeros=!1;break;case"0":n.padZeros=t.indexOf("-")<0;break;case"#":n.alternate=!0;break;default:throw new Error("invalid flag: "+i)}if("*"===n.width){if(n.width=parseInt(arguments[l],10),l+=1,E(n.width))throw new TypeError("the argument for * width at position "+l+" is not a number. Value: `"+n.width+"`.");n.width<0&&(n.padRight=!0,n.width=-n.width)}if(e&&"*"===n.precision){if(n.precision=parseInt(arguments[l],10),l+=1,E(n.precision))throw new TypeError("the argument for * precision at position "+l+" is not a number. Value: `"+n.precision+"`.");n.precision<0&&(n.precision=1,e=!1)}switch(n.arg=arguments[l],n.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":e&&(n.padZeros=!1),n.arg=u(n);break;case"s":n.maxWidth=e?n.precision:-1;break;case"c":if(!E(n.arg)){if((a=parseInt(n.arg,10))<0||a>127)throw new Error("invalid character code. Value: "+n.arg);n.arg=E(a)?String(n.arg):_(a)}break;case"e":case"E":case"f":case"F":case"g":case"G":e||(n.precision=6),n.arg=m(n);break;default:throw new Error("invalid specifier: "+n.specifier)}n.maxWidth>=0&&n.arg.length>n.maxWidth&&(n.arg=n.arg.substring(0,n.maxWidth)),n.padZeros?n.arg=o(n.arg,n.width||n.precision,n.padRight):n.width&&(n.arg=A(n.arg,n.width,n.padRight)),f+=n.arg||"",l+=1}return f}var U=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function N(r){var e={mapping:r[1]?parseInt(r[1],10):void 0,flags:r[2],width:r[3],precision:r[5],specifier:r[6]};return"."===r[4]&&void 0===r[5]&&(e.precision="1"),e}function T(r){var e,t,n,o;for(t=[],o=0,n=U.exec(r);n;)(e=r.slice(o,U.lastIndex-n[0].length)).length&&t.push(e),t.push(N(n)),o=U.lastIndex,n=U.exec(r);return(e=r.slice(o)).length&&t.push(e),t}function F(r){return"string"==typeof r}function I(r){var e,t,n;if(!F(r))throw new TypeError(I("invalid argument. First argument must be a string. Value: `%s`.",r));for(e=T(r),(t=new Array(arguments.length))[0]=e,n=1;n<t.length;n++)t[n]=arguments[n];return S.apply(null,t)}var k,V=Object.prototype,P=V.toString,G=V.__defineGetter__,L=V.__defineSetter__,$=V.__lookupGetter__,C=V.__lookupSetter__;k=function(){try{return r({},"x",{}),!0}catch(r){return!1}}()?e:function(r,e,t){var n,o,i,a;if("object"!=typeof r||null===r||"[object Array]"===P.call(r))throw new TypeError(I("invalid argument. First argument must be an object. Value: `%s`.",r));if("object"!=typeof t||null===t||"[object Array]"===P.call(t))throw new TypeError(I("invalid argument. Property descriptor must be an object. Value: `%s`.",t));if((o="value"in t)&&($.call(r,e)||C.call(r,e)?(n=r.__proto__,r.__proto__=V,delete r[e],r[e]=t.value,r.__proto__=n):r[e]=t.value),i="get"in t,a="set"in t,o&&(i||a))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return i&&G&&G.call(r,e,t.get),a&&L&&L.call(r,e,t.set),r};var B=k;function H(r,e,t){B(r,e,{configurable:!1,enumerable:!1,writable:!1,value:t})}var W=/./;function M(r){return"boolean"==typeof r}var R="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function Z(){return R&&"symbol"==typeof Symbol.toStringTag}var X=Object.prototype.toString;var Y=Object.prototype.hasOwnProperty;function q(r,e){return null!=r&&Y.call(r,e)}var z="function"==typeof Symbol?Symbol:void 0,D="function"==typeof z?z.toStringTag:"";var J=Z()?function(r){var e,t,n;if(null==r)return X.call(r);t=r[D],e=q(r,D);try{r[D]=void 0}catch(e){return X.call(r)}return n=X.call(r),e?r[D]=t:delete r[D],n}:function(r){return X.call(r)},K=Boolean,Q=Boolean.prototype.toString;var rr=Z();function er(r){return"object"==typeof r&&(r instanceof K||(rr?function(r){try{return Q.call(r),!0}catch(r){return!1}}(r):"[object Boolean]"===J(r)))}function tr(r){return M(r)||er(r)}function nr(){return new Function("return this;")()}H(tr,"isPrimitive",M),H(tr,"isObject",er);var or="object"==typeof self?self:null,ir="object"==typeof window?window:null,ar="object"==typeof global?global:null,ur="object"==typeof globalThis?globalThis:null;var cr=function(r){if(arguments.length){if(!M(r))throw new TypeError(I("invalid argument. Must provide a boolean. Value: `%s`.",r));if(r)return nr()}if(ur)return ur;if(or)return or;if(ir)return ir;if(ar)return ar;throw new Error("unexpected error. Unable to resolve global object.")}(),fr=cr.document&&cr.document.childNodes,lr=Int8Array;function sr(){return/^\s*function\s*([^(]*)/i}var pr=/^\s*function\s*([^(]*)/i;H(sr,"REGEXP",pr);var yr=Array.isArray?Array.isArray:function(r){return"[object Array]"===J(r)};function vr(r){return null!==r&&"object"==typeof r}function dr(r){var e,t,n,o;if(("Object"===(t=J(r).slice(8,-1))||"Error"===t)&&r.constructor){if("string"==typeof(n=r.constructor).name)return n.name;if(e=pr.exec(n.toString()))return e[1]}return vr(o=r)&&(o._isBuffer||o.constructor&&"function"==typeof o.constructor.isBuffer&&o.constructor.isBuffer(o))?"Buffer":t}H(vr,"isObjectLikeArray",function(r){if("function"!=typeof r)throw new TypeError(I("invalid argument. Must provide a function. Value: `%s`.",r));return function(e){var t,n;if(!yr(e))return!1;if(0===(t=e.length))return!1;for(n=0;n<t;n++)if(!1===r(e[n]))return!1;return!0}}(vr));var gr="function"==typeof W||"object"==typeof lr||"function"==typeof fr?function(r){return dr(r).toLowerCase()}:function(r){var e;return null===r?"null":"object"===(e=typeof r)?dr(r).toLowerCase():e};function br(r){return"function"===gr(r)}function hr(r){var e=typeof r;return null!==r&&("object"===e||"function"===e)&&br(r.next)}function wr(r){return"number"==typeof r}var mr=Number,jr=mr.prototype.toString;var Ar=Z();function _r(r){return"object"==typeof r&&(r instanceof mr||(Ar?function(r){try{return jr.call(r),!0}catch(r){return!1}}(r):"[object Number]"===J(r)))}function Er(r){return wr(r)||_r(r)}H(Er,"isPrimitive",wr),H(Er,"isObject",_r);var xr="function"==typeof z&&"symbol"==typeof z("foo")&&q(z,"iterator")&&"symbol"==typeof z.iterator?Symbol.iterator:null;var Or,Sr=Object,Ur=Object.getPrototypeOf;Or=br(Object.getPrototypeOf)?Ur:function(r){var e=function(r){return r.__proto__}(r);return e||null===e?e:"[object Function]"===J(r.constructor)?r.constructor.prototype:r instanceof Object?Object.prototype:null};var Nr=Or;var Tr=Object.prototype;function Fr(r){var e;return!!function(r){return"object"==typeof r&&null!==r&&!yr(r)}(r)&&(e=function(r){return null==r?null:(r=Sr(r),Nr(r))}(r),!e||!q(r,"constructor")&&q(e,"constructor")&&br(e.constructor)&&"[object Function]"===J(e.constructor)&&q(e,"isPrototypeOf")&&br(e.isPrototypeOf)&&(e===Tr||function(r){var e;for(e in r)if(!q(r,e))return!1;return!0}(r)))}function Ir(r,e){return Fr(e)?(q(e,"invalid")&&(r.invalid=e.invalid),null):new TypeError(I("invalid argument. Options argument must be an object. Value: `%s`.",e))}function kr(r,e,t){var n,o,i,a;if(!hr(r))throw new TypeError(I("invalid argument. First argument must be an iterator protocol-compliant object. Value: `%s`.",r));if(!br(e))throw new TypeError(I("invalid argument. Second argument must be a function. Value: `%s`.",e));if(n={invalid:NaN},arguments.length>2&&(i=Ir(n,t)))throw i;return H(o={},"next",u),H(o,"return",c),xr&&br(r[xr])&&H(o,xr,f),o;function u(){var t;return a?{done:!0}:(t=r.next()).done?(a=!0,t):{value:wr(t.value)?e(t.value):n.invalid,done:!1}}function c(r){return a=!0,arguments.length?{value:r,done:!0}:{done:!0}}function f(){return kr(r[xr](),e,n)}}var Vr=Math.sqrt;function Pr(r){return Math.abs(r)}var Gr=2147483647,Lr=2146435072,$r="function"==typeof Uint32Array;var Cr="function"==typeof Uint32Array?Uint32Array:null;var Br,Hr="function"==typeof Uint32Array?Uint32Array:void 0;Br=function(){var r,e,t;if("function"!=typeof Cr)return!1;try{e=new Cr(e=[1,3.14,-3.14,4294967296,4294967297]),t=e,r=($r&&t instanceof Uint32Array||"[object Uint32Array]"===J(t))&&1===e[0]&&3===e[1]&&4294967293===e[2]&&0===e[3]&&1===e[4]}catch(e){r=!1}return r}()?Hr:function(){throw new Error("not implemented")};var Wr=Br,Mr="function"==typeof Float64Array;var Rr="function"==typeof Float64Array?Float64Array:null;var Zr,Xr="function"==typeof Float64Array?Float64Array:void 0;Zr=function(){var r,e,t;if("function"!=typeof Rr)return!1;try{e=new Rr([1,3.14,-3.14,NaN]),t=e,r=(Mr&&t instanceof Float64Array||"[object Float64Array]"===J(t))&&1===e[0]&&3.14===e[1]&&-3.14===e[2]&&e[3]!=e[3]}catch(e){r=!1}return r}()?Xr:function(){throw new Error("not implemented")};var Yr=Zr,qr="function"==typeof Uint8Array;var zr="function"==typeof Uint8Array?Uint8Array:null;var Dr,Jr="function"==typeof Uint8Array?Uint8Array:void 0;Dr=function(){var r,e,t;if("function"!=typeof zr)return!1;try{e=new zr(e=[1,3.14,-3.14,256,257]),t=e,r=(qr&&t instanceof Uint8Array||"[object Uint8Array]"===J(t))&&1===e[0]&&3===e[1]&&253===e[2]&&0===e[3]&&1===e[4]}catch(e){r=!1}return r}()?Jr:function(){throw new Error("not implemented")};var Kr=Dr,Qr="function"==typeof Uint16Array;var re="function"==typeof Uint16Array?Uint16Array:null;var ee,te="function"==typeof Uint16Array?Uint16Array:void 0;ee=function(){var r,e,t;if("function"!=typeof re)return!1;try{e=new re(e=[1,3.14,-3.14,65536,65537]),t=e,r=(Qr&&t instanceof Uint16Array||"[object Uint16Array]"===J(t))&&1===e[0]&&3===e[1]&&65533===e[2]&&0===e[3]&&1===e[4]}catch(e){r=!1}return r}()?te:function(){throw new Error("not implemented")};var ne,oe={uint16:ee,uint8:Kr};(ne=new oe.uint16(1))[0]=4660;var ie=52===new oe.uint8(ne.buffer)[0],ae=!0===ie?1:0,ue=new Yr(1),ce=new Wr(ue.buffer);function fe(r){return ue[0]=r,ce[ae]}var le,se,pe=!0===ie?0:1,ye=new Yr(1),ve=new Wr(ye.buffer);!0===ie?(le=1,se=0):(le=0,se=1);var de={HIGH:le,LOW:se},ge=new Yr(1),be=new Wr(ge.buffer),he=de.HIGH,we=de.LOW;function me(r,e){return be[he]=r,be[we]=e,ge[0]}var je=Math.floor,Ae=Number.POSITIVE_INFINITY,_e=mr.NEGATIVE_INFINITY;function Ee(r){return r!=r}function xe(r){return r===Ae||r===_e}var Oe,Se;!0===ie?(Oe=1,Se=0):(Oe=0,Se=1);var Ue={HIGH:Oe,LOW:Se},Ne=new Yr(1),Te=new Wr(Ne.buffer),Fe=Ue.HIGH,Ie=Ue.LOW;function ke(r,e,t,n){return Ne[0]=r,e[n]=Te[Fe],e[n+t]=Te[Ie],e}function Ve(r){return ke(r,[0,0],1,0)}H(Ve,"assign",ke);var Pe=[0,0];function Ge(r,e,t,n){return Ee(r)||xe(r)?(e[n]=r,e[n+t]=0,e):0!==r&&Pr(r)<22250738585072014e-324?(e[n]=4503599627370496*r,e[n+t]=-52,e):(e[n]=r,e[n+t]=0,e)}H((function(r){return Ge(r,[0,0],1,0)}),"assign",Ge);var Le=[0,0],$e=[0,0];function Ce(r,e){var t,n,o,i,a,u;return 0===e||0===r||Ee(r)||xe(r)?r:(Ge(r,Le,1,0),e+=Le[1],e+=function(r){var e=fe(r);return(e=(e&Lr)>>>20)-1023|0}(r=Le[0]),e<-1074?(o=0,i=r,Ve.assign(o,Pe,1,0),a=Pe[0],a&=Gr,u=fe(i),me(a|=u&=2147483648,Pe[1])):e>1023?r<0?_e:Ae:(e<=-1023?(e+=52,n=2220446049250313e-31):n=1,Ve.assign(r,$e,1,0),t=$e[0],t&=2148532223,n*me(t|=e+1023<<20,$e[1])))}function Be(r){return function(r,e){var t,n;for(t=[],n=0;n<e;n++)t.push(r);return t}(0,r)}var He=[10680707,7228996,1387004,2578385,16069853,12639074,9804092,4427841,16666979,11263675,12935607,2387514,4345298,14681673,3074569,13734428,16653803,1880361,10960616,8533493,3062596,8710556,7349940,6258241,3772886,3769171,3798172,8675211,12450088,3874808,9961438,366607,15675153,9132554,7151469,3571407,2607881,12013382,4155038,6285869,7677882,13102053,15825725,473591,9065106,15363067,6271263,9264392,5636912,4652155,7056368,13614112,10155062,1944035,9527646,15080200,6658437,6231200,6832269,16767104,5075751,3212806,1398474,7579849,6349435,12618859],We=[1.570796251296997,7.549789415861596e-8,5390302529957765e-30,3282003415807913e-37,1270655753080676e-44,12293330898111133e-52,27337005381646456e-60,21674168387780482e-67],Me=16777216,Re=5.960464477539063e-8,Ze=Be(20),Xe=Be(20),Ye=Be(20),qe=Be(20);function ze(r,e,t,n,o,i,a,u,c){var f,l,s,p,y,v,d,g,b;for(p=i,b=n[t],g=t,y=0;g>0;y++)l=Re*b|0,qe[y]=b-Me*l|0,b=n[g-1]+l,g-=1;if(b=Ce(b,o),b-=8*je(.125*b),b-=d=0|b,s=0,o>0?(d+=y=qe[t-1]>>24-o,qe[t-1]-=y<<24-o,s=qe[t-1]>>23-o):0===o?s=qe[t-1]>>23:b>=.5&&(s=2),s>0){for(d+=1,f=0,y=0;y<t;y++)g=qe[y],0===f?0!==g&&(f=1,qe[y]=16777216-g):qe[y]=16777215-g;if(o>0)switch(o){case 1:qe[t-1]&=8388607;break;case 2:qe[t-1]&=4194303}2===s&&(b=1-b,0!==f&&(b-=Ce(1,o)))}if(0===b){for(g=0,y=t-1;y>=i;y--)g|=qe[y];if(0===g){for(v=1;0===qe[i-v];v++);for(y=t+1;y<=t+v;y++){for(c[u+y]=He[a+y],l=0,g=0;g<=u;g++)l+=r[g]*c[u+(y-g)];n[y]=l}return ze(r,e,t+=v,n,o,i,a,u,c)}}if(0===b)for(t-=1,o-=24;0===qe[t];)t-=1,o-=24;else(b=Ce(b,-o))>=Me?(l=Re*b|0,qe[t]=b-Me*l|0,o+=24,qe[t+=1]=l):qe[t]=0|b;for(l=Ce(1,o),y=t;y>=0;y--)n[y]=l*qe[y],l*=Re;for(y=t;y>=0;y--){for(l=0,v=0;v<=p&&v<=t-y;v++)l+=We[v]*n[y+v];Ye[t-y]=l}for(l=0,y=t;y>=0;y--)l+=Ye[y];for(e[0]=0===s?l:-l,l=Ye[0]-l,y=1;y<=t;y++)l+=Ye[y];return e[1]=0===s?l:-l,7&d}function De(r,e,t,n){var o,i,a,u,c,f,l;for(4,(i=(t-3)/24|0)<0&&(i=0),u=t-24*(i+1),f=i-(a=n-1),l=a+4,c=0;c<=l;c++)Ze[c]=f<0?0:He[f],f+=1;for(c=0;c<=4;c++){for(o=0,f=0;f<=a;f++)o+=r[f]*Ze[a+(c-f)];Xe[c]=o}return 4,ze(r,e,4,Xe,u,4,i,a,Ze)}var Je=Math.round;function Ke(r,e,t){var n,o,i,a,u;return i=r-1.5707963267341256*(n=Je(.6366197723675814*r)),a=6077100506506192e-26*n,u=e>>20|0,t[0]=i-a,u-(fe(t[0])>>20&2047)>16&&(a=20222662487959506e-37*n-((o=i)-(i=o-(a=6077100506303966e-26*n))-a),t[0]=i-a,u-(fe(t[0])>>20&2047)>49&&(a=84784276603689e-45*n-((o=i)-(i=o-(a=20222662487111665e-37*n))-a),t[0]=i-a)),t[1]=i-t[0]-a,n}var Qe=1.5707963267341256,rt=6077100506506192e-26,et=2*rt,tt=3*rt,nt=4*rt,ot=[0,0,0],it=[0,0];function at(r,e){var t,n,o,i,a,u,c;if((o=fe(r)&Gr|0)<=1072243195)return e[0]=r,e[1]=0,0;if(o<=1074752122)return 598523==(1048575&o)?Ke(r,o,e):o<=1073928572?r>0?(c=r-Qe,e[0]=c-rt,e[1]=c-e[0]-rt,1):(c=r+Qe,e[0]=c+rt,e[1]=c-e[0]+rt,-1):r>0?(c=r-2*Qe,e[0]=c-et,e[1]=c-e[0]-et,2):(c=r+2*Qe,e[0]=c+et,e[1]=c-e[0]+et,-2);if(o<=1075594811)return o<=1075183036?1074977148===o?Ke(r,o,e):r>0?(c=r-3*Qe,e[0]=c-tt,e[1]=c-e[0]-tt,3):(c=r+3*Qe,e[0]=c+tt,e[1]=c-e[0]+tt,-3):1075388923===o?Ke(r,o,e):r>0?(c=r-4*Qe,e[0]=c-nt,e[1]=c-e[0]-nt,4):(c=r+4*Qe,e[0]=c+nt,e[1]=c-e[0]+nt,-4);if(o<1094263291)return Ke(r,o,e);if(o>=Lr)return e[0]=NaN,e[1]=NaN,0;for(t=function(r){return ye[0]=r,ve[pe]}(r),c=me(o-((n=(o>>20)-1046)<<20|0),t),a=0;a<2;a++)ot[a]=0|c,c=16777216*(c-ot[a]);for(ot[2]=c,i=3;0===ot[i-1];)i-=1;return u=De(ot,it,n,i),r<0?(e[0]=-it[0],e[1]=-it[1],-u):(e[0]=it[0],e[1]=it[1],u)}var ut=-.16666666666666632;function ct(r,e,t,n,o){var i,a,u,c,f;return a=.00833333333332249+(f=r*r)*(27557313707070068e-22*f-.0001984126982985795)+f*(c=f*f)*(1.58969099521155e-10*f-2.5050760253406863e-8),u=f*r,t[o]=0===e?r+u*(ut+f*a):r-(f*(.5*e-u*a)-e-u*ut),a=f*(.0416666666666666+f*(2480158728947673e-20*f-.001388888888887411)),a+=c*c*(f*(2.087572321298175e-9+-11359647557788195e-27*f)-2.7557314351390663e-7),c=1-(i=.5*f),t[o+n]=c+(1-c-i+(f*a-r*e)),t}var ft=[0,0];function lt(r,e,t,n){var o,i;if(o=fe(r),(o&=Gr)<=1072243195)return o<1044381696&&0==(0|r)&&(e[n]=r,e[n+t]=0),ct(r,0,e,t,n);if(o>=Lr)return e[n]=NaN,e[n+t]=NaN,e;switch(i=at(r,ft),ct(ft[0],ft[1],e,t,n),3&i){case 1:return o=e[n+t],e[n+t]=-e[n],e[n]=o,e;case 2:return e[n]*=-1,e[n+t]*=-1,e;case 3:return o=-e[n+t],e[n+t]=e[n],e[n]=o,e;default:return e}}H((function(r){return lt(r,[0,0],1,0)}),"assign",lt);var st=[0,0];function pt(r){var e,t,n,o,i,a,u,c;return c=Pr(r),0===r||c===Ae?0:(c<=4?(i=function(r){var e,t;return 0===r?-.03405537391318949:((r<0?-r:r)<=1?(e=r*(6678104126.14924+r*(r*(980629.0409895825+r*(r*(10.650724020080236+-.010767857011487301*r)-4461.579298277507))-115486967.64841276))-142585098013.66644,t=4186860446082.0176+r*(42091902282.58013+r*(202283751.40097034+r*(591176.1449417479+r*(1074.227223951738+r*(1+0*r)))))):(e=(r=1/r)*(10.650724020080236+r*(r*(980629.0409895825+r*(r*(6678104126.14924+-142585098013.66644*r)-115486967.64841276))-4461.579298277507))-.010767857011487301,t=0+r*(1+r*(1074.227223951738+r*(591176.1449417479+r*(202283751.40097034+r*(42091902282.58013+4186860446082.0176*r)))))),e/t)}(a=r*r),e=(u=c*(c+3.8317059702075125)*(c-981/256- -.0003252797924876844))*i):c<=8?(i=function(r){var e,t;return 0===r?-.010158790774176108:((r<0?-r:r)<=1?(e=r*(1660853173129901.8+r*(r*(355806656709.1062+r*(r*(5079326.614801118+r*(4.6179191852758255*r-7502.334222078161))-1811393126.9860668))-36658018905416.664))-0x3e45840c066730,t=0x17f1d1995ae4fb00+r*(0x3cda8dbce6f4c4+r*(84899346165481.42+r*(276227772862.44086+r*(648725028.9959639+r*(1126712.5065029138+r*(1388.6978985861358+1*r))))))):(e=4.6179191852758255+(r=1/r)*(r*(5079326.614801118+r*(r*(355806656709.1062+r*(r*(1660853173129901.8+-0x3e45840c066730*r)-36658018905416.664))-1811393126.9860668))-7502.334222078161),t=1+r*(1388.6978985861358+r*(1126712.5065029138+r*(648725028.9959639+r*(276227772862.44086+r*(84899346165481.42+r*(0x3cda8dbce6f4c4+0x17f1d1995ae4fb00*r))))))),e/t)}(a=r*r),e=(u=c*(c+7.015586669815619)*(c-7.015625- -38330184381246464e-21))*i):(t=function(r){var e,t;return 0===r?1:((r<0?-r:r)<=1?(e=r*(r*(r*(r*(r*(0*r-1611.6166443246102)-109824.05543459347)-1523529.3511811374)-6603373.248364939)-9942246.505077641)-4435757.816794128,t=r*(r*(r*(r*(r*(1*r-1455.0094401904962)-107263.8599110382)-1511809.5066341609)-6585339.4797230875)-9934124.389934586)-4435757.816794128):(e=0+(r=1/r)*(r*(r*(r*(r*(-4435757.816794128*r-9942246.505077641)-6603373.248364939)-1523529.3511811374)-109824.05543459347)-1611.6166443246102),t=1+r*(r*(r*(r*(r*(-4435757.816794128*r-9934124.389934586)-6585339.4797230875)-1511809.5066341609)-107263.8599110382)-1455.0094401904962)),e/t)}(o=(a=8/c)*a),n=function(r){var e,t;return 0===r?.046875:((r<0?-r:r)<=1?(e=33220.913409857225+r*(85145.1606753357+r*(66178.83658127084+r*(18494.262873223866+r*(1706.375429020768+r*(35.26513384663603+0*r))))),t=708712.8194102874+r*(1819458.0422439973+r*(1419460.669603721+r*(400294.43582266977+r*(37890.2297457722+r*(863.8367769604992+1*r)))))):(e=0+(r=1/r)*(35.26513384663603+r*(1706.375429020768+r*(18494.262873223866+r*(66178.83658127084+r*(85145.1606753357+33220.913409857225*r))))),t=1+r*(863.8367769604992+r*(37890.2297457722+r*(400294.43582266977+r*(1419460.669603721+r*(1819458.0422439973+708712.8194102874*r)))))),e/t)}(o),u=1/(1.772453850905516*Vr(c)),lt(c,st,1,0),e=u*(t*(st[0]-st[1])+a*n*(st[0]+st[1]))),r<0&&(e*=-1),e)}return function(r){return kr(r,pt)}}));
//# sourceMappingURL=index.js.map
