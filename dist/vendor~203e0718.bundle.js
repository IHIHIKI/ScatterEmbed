(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{"0CSc":function(r,t,e){"use strict";var n=e("IdCN"),o=Object.prototype.toString,i=Object.prototype.hasOwnProperty,f=function(r,t,e){for(var n=0,o=r.length;n<o;n++)i.call(r,n)&&(null==e?t(r[n],n,r):t.call(e,r[n],n,r))},u=function(r,t,e){for(var n=0,o=r.length;n<o;n++)null==e?t(r.charAt(n),n,r):t.call(e,r.charAt(n),n,r)},a=function(r,t,e){for(var n in r)i.call(r,n)&&(null==e?t(r[n],n,r):t.call(e,r[n],n,r))};r.exports=function(r,t,e){if(!n(t))throw new TypeError("iterator must be a function");var i;arguments.length>=3&&(i=e),"[object Array]"===o.call(r)?f(r,t,i):"string"==typeof r?u(r,t,i):a(r,t,i)}},AAEA:function(r,t,e){"use strict";(function(t){var n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(r){return typeof r}:function(r){return r&&"function"==typeof Symbol&&r.constructor===Symbol&&r!==Symbol.prototype?"symbol":typeof r},o=function(r,t){if(Array.isArray(r))return r;if(Symbol.iterator in Object(r))return function(r,t){var e=[],n=!0,o=!1,i=void 0;try{for(var f,u=r[Symbol.iterator]();!(n=(f=u.next()).done)&&(e.push(f.value),!t||e.length!==t);n=!0);}catch(r){o=!0,i=r}finally{try{!n&&u.return&&u.return()}finally{if(o)throw i}}return e}(r,t);throw new TypeError("Invalid attempt to destructure non-iterable instance")};var i=e("OZ/i"),f=e("DGy1").Long,u=e("9lTW"),a={bytes:function(){return[h]},string:function(){return[B]},vector:function(r){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];return[p,{type:r,sorted:t}]},optional:function(r){return[y,{type:r}]},time:function(){return[j]},map:function(r){return[l,{annotation:r}]},static_variant:function(r){return[s,{types:r}]},fixed_string16:function(){return[B,{maxLen:16}]},fixed_string32:function(){return[B,{maxLen:32}]},fixed_bytes16:function(){return[h,{len:16}]},fixed_bytes20:function(){return[h,{len:20}]},fixed_bytes28:function(){return[h,{len:28}]},fixed_bytes32:function(){return[h,{len:32}]},fixed_bytes33:function(){return[h,{len:33}]},fixed_bytes64:function(){return[h,{len:64}]},fixed_bytes65:function(){return[h,{len:65}]},uint8:function(){return[b,{bits:8}]},uint16:function(){return[b,{bits:16}]},uint32:function(){return[b,{bits:32}]},uint64:function(){return[b,{bits:64}]},uint128:function(){return[d,{bits:128}]},uint224:function(){return[d,{bits:224}]},uint256:function(){return[d,{bits:256}]},uint512:function(){return[d,{bits:512}]},varuint32:function(){return[b,{bits:32,variable:!0}]},int8:function(){return[b,{signed:!0,bits:8}]},int16:function(){return[b,{signed:!0,bits:16}]},int32:function(){return[b,{signed:!0,bits:32}]},int64:function(){return[b,{signed:!0,bits:64}]},int128:function(){return[d,{signed:!0,bits:128}]},int224:function(){return[d,{signed:!0,bits:224}]},int256:function(){return[d,{signed:!0,bits:256}]},int512:function(){return[d,{signed:!0,bits:512}]},varint32:function(){return[b,{signed:!0,bits:32,variable:!0}]},float32:function(){return[m,{bits:32}]},float64:function(){return[m,{bits:64}]}};function c(r,t,e,n,i,f){var u=(n?i[r]:a[r]).apply(void 0,function(r){if(Array.isArray(r)){for(var t=0,e=Array(r.length);t<r.length;t++)e[t]=r[t];return e}return Array.from(r)}(e)),c=o(u,2),l=c[0],s=c[1],p=void 0===s?{}:s,y=Object.assign(p,t);y.typeName=r;var v=l(y,n,f);return v.typeName=r,v}r.exports=function(r){r=Object.assign({defaults:!1,debug:!1,customTypes:{}},r);var t=Object.assign({},a,r.customTypes),e=function(e){return function(n,o){return n[o]=function(){for(var i=arguments.length,f=Array(i),u=0;u<i;u++)f[u]=arguments[u];var a=c(o,r,f,e,t,n);return a},n}},n=Object.keys(a).reduce(e(),{}),o=Object.keys(r.customTypes||{}).reduce(e(n),{});return Object.assign({},n,o,{config:r})};var l=function(r){var t=o(r.annotation,2),e=t[0],n=t[1];if(!A(e))throw new TypeError("map<type1, > unknown");if(!A(n))throw new TypeError("map<, type2> unknown");return{fromByteBuffer:function(t){for(var o=t.readVarint32(),i={},f=0;f<o;f++)i[e.fromByteBuffer(t)]=n.fromByteBuffer(t);return r.debug&&console.log("0x"+o.toString(16),"(map.fromByteBuffer length)",i),i},appendByteBuffer:function(t,o){O(o,r);var i=Object.keys(o);t.writeVarint32(i.length),r.debug&&console.log("0x"+i.length.toString(16),"(map.appendByteBuffer length)",i);var f=!0,u=!1,a=void 0;try{for(var c,l=i[Symbol.iterator]();!(f=(c=l.next()).done);f=!0){var s=c.value,p=o[s];e.appendByteBuffer(t,s),n.appendByteBuffer(t,p)}}catch(r){u=!0,a=r}finally{try{!f&&l.return&&l.return()}finally{if(u)throw a}}},fromObject:function(t){O(t,r);var o={};for(var i in t)o[e.fromObject(i)]=n.fromObject(t[i]);return o},toObject:function(t){if(r.defaults&&null==t)return function(r,t,e){return t in r?Object.defineProperty(r,t,{value:e,enumerable:!0,configurable:!0,writable:!0}):r[t]=e,r}({},e.toObject(null),n.toObject(null));O(t,r);var o={};for(var i in t)o[e.toObject(i)]=n.toObject(t[i]);return o}}},s=function(r){var t=r.types;return{fromByteBuffer:function(e){var n=e.readVarint32(),o=t[n];return r.debug&&console.error("static_variant id "+n+" (0x"+n.toString(16)+")"),u(o,"static_variant invalid type position "+n),[n,o.fromByteBuffer(e)]},appendByteBuffer:function(r,e){u(Array.isArray(e)&&2===e.length,"Required tuple");var n=e[0],o=t[n];u(o,"type "+n),r.writeVarint32(n),o.appendByteBuffer(r,e[1])},fromObject:function(r){u(Array.isArray(r)&&2===r.length,"Required tuple");var e=r[0],n=t[e];return u(n,"type "+e),[e,n.fromObject(r[1])]},toObject:function(e){if(r.defaults&&null==e)return[0,t[0].toObject(null,debug)];u(Array.isArray(e)&&2===e.length,"Required tuple");var n=e[0],o=t[n];return u(o,"type "+n),[n,o.toObject(e[1])]}}},p=function(r){var t=r.type,e=r.sorted;if(!A(t))throw new TypeError("vector type should be a serializer");return{fromByteBuffer:function(e){var n=e.readVarint32();r.debug&&console.log("fromByteBuffer vector length",n,"(0x"+n.toString(16)+")");for(var o=[],i=0;i<n;i++)o.push(t.fromByteBuffer(e));return o},appendByteBuffer:function(n,o){null==o&&(o=[]),O(o,r),n.writeVarint32(o.length),!0===e&&(o=E(t,Object.assign([],o))),r.debug&&console.log("0x"+o.length.toString(16),"(vector.appendByteBuffer length)",o);var i=!0,f=!1,u=void 0;try{for(var a,c=o[Symbol.iterator]();!(i=(a=c.next()).done);i=!0){var l=a.value;t.appendByteBuffer(n,l)}}catch(r){f=!0,u=r}finally{try{!i&&c.return&&c.return()}finally{if(f)throw u}}},fromObject:function(n){null==n&&(n=[]),O(n,r);var o=[],i=!0,f=!1,u=void 0;try{for(var a,c=n[Symbol.iterator]();!(i=(a=c.next()).done);i=!0){var l=a.value;o.push(t.fromObject(l))}}catch(r){f=!0,u=r}finally{try{!i&&c.return&&c.return()}finally{if(f)throw u}}return!0===e&&(o=E(t,Object.assign([],o))),o},toObject:function(n){if(r.defaults&&null==n)return[t.toObject(n)];null==n&&(n=[]),O(n,r),!0===e&&(n=E(t,Object.assign([],n)));var o=[],i=!0,f=!1,u=void 0;try{for(var a,c=n[Symbol.iterator]();!(i=(a=c.next()).done);i=!0){var l=a.value;o.push(t.toObject(l))}}catch(r){f=!0,u=r}finally{try{!i&&c.return&&c.return()}finally{if(f)throw u}}return o}}},y=function(r){var t=r.type;if(!A(t))throw new TypeError("optional parameter should be a serializer");return{fromByteBuffer:function(r){return 1!==r.readUint8()?null:t.fromByteBuffer(r)},appendByteBuffer:function(r,e){null!=e?(r.writeUint8(1),t.appendByteBuffer(r,e)):r.writeUint8(0)},fromObject:function(r){return null==r?null:t.fromObject(r)},toObject:function(e){return null!=e||r.defaults?t.toObject(e):null}}},v=function(r){var t=r.signed,e=void 0!==t&&t,n=r.bits;return r.variable?"Varint"+n+(e?"ZigZag":""):(e?"Int":"Uint")+n},b=function(r){return{fromByteBuffer:function(t){var e=t["read"+v(r)]();return f.isLong(e)?e.toString():e},appendByteBuffer:function(t,e){t["write"+v(r)](e)},fromObject:function(t){return S(t,r),t},toObject:function(t){return r.defaults&&null==t?r.bits>53?"0":0:(S(t,r),f.isLong(t)?t.toString():t)}}},d=function(r){var e=r.signed,n=void 0!==e&&e,o=r.bits,f=o/8;return{fromByteBuffer:function(e){var u=e.copy(e.offset,e.offset+f);e.skip(f);var a=new i(u.toHex(),"hex"),c=a.toArrayLike(t,"le",f);a=new i(c.toString("hex"),"hex"),n&&(a=a.fromTwos(o));var l=a.toString();return S(l,r),o>53?l:a.toNumber()},appendByteBuffer:function(e,u){S(u,r);var a=new i(u);n&&(a=a.toTwos(o));var c=a.toArrayLike(t,"le",f);e.append(c.toString("binary"),"binary")},fromObject:function(t){return S(t,r),t},toObject:function(t){return r.defaults&&null==t?r.bits>53?"0":0:(S(t,r),t)}}},g=e("RnXq"),m=function(r){var e=r.bits,n=32===e?"Float":64===e?"Double":null;u(n,"unsupported float bit size: "+e);var o=e/8;return{fromByteBuffer:function(r){var e=r.copy(r.offset,r.offset+o);r.skip(o);var i=t.from(e.toBinary(),"binary");return g["read"+n+"LE"](i)},appendByteBuffer:function(r,t){var e=[];g["write"+n+"LE"](e,t),r.append(e)},fromObject:function(r){return r},toObject:function(t){return r.defaults&&null==t?0:t}}},h=function(r){return{fromByteBuffer:function(e){var n=r.len,o=void 0;if(null==n){var i=e.readVarint32();o=e.copy(e.offset,e.offset+i),e.skip(i)}else o=e.copy(e.offset,e.offset+n),e.skip(n);return t.from(o.toBinary(),"binary")},appendByteBuffer:function(t,e){null==r.len&&t.writeVarint32(e.length),t.append(e.toString("binary"),"binary")},fromObject:function(e){return"string"==typeof e?e=t.from(e,"hex"):e instanceof Array?e=t.from(e):e instanceof Uint8Array&&(e=t.from(e)),O(e,r),e},toObject:function(t){var e=r.defaults,n=r.len;return e&&null==t?Array(n?n+1:1).join("00"):(O(t,r),t.toString("hex"))},compare:function(r,e){return t.compare(r,e)}}},B=function(r){return{fromByteBuffer:function(r){return r.readVString()},appendByteBuffer:function(t,e){O(e,r),t.writeVString(e.toString())},fromObject:function(t){return O(t,r),t},toObject:function(t){return r.defaults&&null==t?"":(O(t,r),t)}}},j=function(r){return{fromByteBuffer:function(r){return r.readUint32()},appendByteBuffer:function(t,e){O(e,r),t.writeUint32(e)},fromObject:function(t){if(O(t,r),"number"==typeof t)return t;if(t.getTime)return Math.floor(t.getTime()/1e3);if("string"!=typeof t)throw new Error("Unknown date type: "+t);return"string"!=typeof t||/Z$/.test(t)||(t+="Z"),Math.floor(new Date(t).getTime()/1e3)},toObject:function(t){if(r.defaults&&null==t)return new Date(0).toISOString().split(".")[0];O(t,r),S(t,T(r,{bits:32}));var e=parseInt(t);return new Date(1e3*e).toISOString().split(".")[0]}}},O=function(r,t){if(N(r))throw new Error("Required "+t.typeName);if(null!=t.len){if(null==r.length)throw new Error('len validation requries a "length" property');var e=t.len;if(r.length!==e)throw new Error(t.typeName+" length "+r.length+" does not equal "+e)}if(null!=t.maxLen){var n=t.maxLen;if(null==r.length)throw new Error('maxLen validation requries a "length" property');if(r.length>n)throw new Error(t.typeName+" length "+r.length+" exceeds maxLen "+n)}},w=new i,x=new i("1");function S(r,t){if(N(r))throw new Error("Required "+t.typeName);var e=t.signed,n=void 0!==e&&e,o=t.bits,f=void 0===o?54:o;if(r=String(r).trim(),n&&!/^-?[0-9]+$/.test(r)||!n&&!/^[0-9]+$/.test(r))throw new Error("Number format "+t.typeName+" "+r);var u=n?D(f):L(f),a=n?k(f):w,c=new i(r);if(c.cmp(a)<0||c.cmp(u)>0)throw new Error("Overflow "+t.typeName+" "+r+", max "+u.toString()+", min "+a.toString()+", signed "+n+", bits "+f)}var A=function(r){return"object"===(void 0===r?"undefined":n(r))&&"function"==typeof r.fromByteBuffer&&"function"==typeof r.appendByteBuffer&&"function"==typeof r.fromObject&&"function"==typeof r.toObject},E=function(r,t){return r.compare?t.sort(r.compare):t.sort()},T=function(){return Object.assign.apply(Object,arguments)},N=function(r){return null==r},L=function(r){return new i(1).ishln(r).isub(x)},D=function(r){return new i(1).ishln(r-1).isub(x)},k=function(r){return new i(1).ishln(r-1).ineg()}}).call(this,e("HDXh").Buffer)},D3zA:function(r,t,e){"use strict";var n=e("aI7X");r.exports=Function.prototype.bind||n},Mlzg:function(r,t,e){"use strict";(function(t){var n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(r){return typeof r}:function(r){return r&&"function"==typeof Symbol&&r.constructor===Symbol&&r!==Symbol.prototype?"symbol":typeof r},o=e("AAEA"),i=e("xr2V"),f=e("9lTW"),u=i.create;r.exports=function(r){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};if("object"!==(void 0===r?"undefined":n(r)))throw new TypeError("definitions is a required parameter");if(t.customTypes)for(var e in r=Object.assign({},r),t.customTypes)delete r[e];var i=o(t),f=u(r,i),l=f.errors,s=f.structs,p=function r(t,e){var n=Object.assign({},t,e),o=u(n,i),f=o.structs;return{errors:o.errors,structs:f,extend:function(t){return r(n,t)},fromBuffer:a(i,f),toBuffer:c(i,f)}};return{errors:l,structs:s,types:i,extend:function(t){return p(r,t)},fromBuffer:a(i,s),toBuffer:c(i,s)}};var a=function(r,e){return function(o,u){f.equal(void 0===o?"undefined":n(o),"string","typeName (type or struct name)"),"string"==typeof u&&(u=t.from(u,"hex")),f(t.isBuffer(u),"expecting buf<hex|Buffer>");var a=r[o];return a=a?a():e[o],f(a,"missing type or struct: "+o),i.fromBuffer(a,u)}},c=function(r,t){return function(e,o){f.equal(void 0===e?"undefined":n(e),"string","typeName (type or struct name)"),f(null!=o,"value is required");var u=r[e];return u=u?u():t[e],f(u,"missing type or struct: "+e),i.toBuffer(u,o)}};r.exports.fromBuffer=i.fromBuffer,r.exports.toBuffer=i.toBuffer}).call(this,e("HDXh").Buffer)},N1pS:function(r,t){r.exports=o,o.default=o,o.stable=f,o.stableStringify=f;var e=[],n=[];function o(r,t,o){var i;for(!function r(t,o,i,f){var u;if("object"==typeof t&&null!==t){for(u=0;u<i.length;u++)if(i[u]===t){var a=Object.getOwnPropertyDescriptor(f,o);return void(void 0!==a.get?a.configurable?(Object.defineProperty(f,o,{value:"[Circular]"}),e.push([f,o,t,a])):n.push([t,o]):(f[o]="[Circular]",e.push([f,o,t])))}if(i.push(t),Array.isArray(t))for(u=0;u<t.length;u++)r(t[u],u,i,t);else{var c=Object.keys(t);for(u=0;u<c.length;u++){var l=c[u];r(t[l],l,i,t)}}i.pop()}}(r,"",[],void 0),i=0===n.length?JSON.stringify(r,t,o):JSON.stringify(r,u(t),o);0!==e.length;){var f=e.pop();4===f.length?Object.defineProperty(f[0],f[1],f[3]):f[0][f[1]]=f[2]}return i}function i(r,t){return r<t?-1:r>t?1:0}function f(r,t,o){var f,a=function r(t,o,f,u){var a;if("object"==typeof t&&null!==t){for(a=0;a<f.length;a++)if(f[a]===t){var c=Object.getOwnPropertyDescriptor(u,o);return void(void 0!==c.get?c.configurable?(Object.defineProperty(u,o,{value:"[Circular]"}),e.push([u,o,t,c])):n.push([t,o]):(u[o]="[Circular]",e.push([u,o,t])))}if("function"==typeof t.toJSON)return;if(f.push(t),Array.isArray(t))for(a=0;a<t.length;a++)r(t[a],a,f,t);else{var l={},s=Object.keys(t).sort(i);for(a=0;a<s.length;a++){var p=s[a];r(t[p],p,f,t),l[p]=t[p]}if(void 0===u)return l;e.push([u,o,t]),u[o]=l}f.pop()}}(r,"",[],void 0)||r;for(f=0===n.length?JSON.stringify(a,t,o):JSON.stringify(a,u(t),o);0!==e.length;){var c=e.pop();4===c.length?Object.defineProperty(c[0],c[1],c[3]):c[0][c[1]]=c[2]}return f}function u(r){return r=void 0!==r?r:function(r,t){return t},function(t,e){if(n.length>0)for(var o=0;o<n.length;o++){var i=n[o];if(i[1]===t&&i[0]===e){e="[Circular]",n.splice(o,1);break}}return r.call(this,t,e)}}},aI7X:function(r,t,e){"use strict";var n="Function.prototype.bind called on incompatible ",o=Array.prototype.slice,i=Object.prototype.toString;r.exports=function(r){var t=this;if("function"!=typeof t||"[object Function]"!==i.call(t))throw new TypeError(n+t);for(var e,f=o.call(arguments,1),u=function(){if(this instanceof e){var n=t.apply(this,f.concat(o.call(arguments)));return Object(n)===n?n:this}return t.apply(r,f.concat(o.call(arguments)))},a=Math.max(0,t.length-f.length),c=[],l=0;l<a;l++)c.push("$"+l);if(e=Function("binder","return function ("+c.join(",")+"){ return binder.apply(this,arguments); }")(u),t.prototype){var s=function(){};s.prototype=t.prototype,e.prototype=new s,s.prototype=null}return e}},gAlf:function(r,t,e){"use strict";var n=e("DGy1");r.exports=function(r){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{debug:!1};t=Object.assign({override:{}},t);var e={},o=void 0,i=void 0;return{compare:function(r,t){var e=r[i],n=t[i];return o&&o.compare?o.compare(e,n):e>n?1:e<n?-1:0},add:function(r,t){e[r]=t,null==o&&(o=t,i=r)},fields:e,fromByteBuffer:function(n){var o={},i=null;try{for(i in e){var f=e[i];try{var u=n.offset;if(""===i)o=f.fromByteBuffer(n,t);else{var a=t.override[r+"."+i+".fromByteBuffer"];a?a({fields:e,object:o,b:n,config:t}):o[i]=f.fromByteBuffer(n,t)}if(t.debug)if(f.struct)console.error(f.struct);else{var c=void 0;try{c=f.toObject(""===i?o:o[i],t)}catch(r){c=""}var l=n.copy(u,n.offset);console.error("fromByteBuffer",r+"."+i,"'"+c+"'",l.toHex())}}catch(t){throw console.error(t+" in "+r+"."+i),n.printDebug(),t}}}catch(t){throw t.message+=" in "+r+"."+i,t}return o},appendByteBuffer:function(n,o){var i=null;try{for(i in e){var f=e[i];if(""===i)f.appendByteBuffer(n,o);else{var u=t.override[r+"."+i+".appendByteBuffer"];u?u({fields:e,object:o,b:n}):f.appendByteBuffer(n,o[i])}}}catch(t){try{t.message+=" "+r+"."+i+" = "+JSON.stringify(o[i])}catch(e){t.message+=" "+r+"."+i+" = "+o[i]}throw t}},fromObject:function(n){var o=t.override[r+".fromObject"];if(o){var i=o(n);if(null!=i)return i}var f={},u=null;try{for(u in e){var a=e[u];if(""===u){var c=a.fromObject(n);Object.assign(f,c)}else{var l=t.override[r+"."+u+".fromObject"];if(l)l({fields:e,object:n,result:f});else{var s=n[u],p=a.fromObject(s);f[u]=p}}}}catch(t){throw t.message+=" "+r+"."+u,t}return f},toObject:function(){var o=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},i=t.override[r+".toObject"];if(i){var f=i(o);if(null!=f)return f}var u={},a=null;try{for(a in e){var c=e[a],l=t.override[r+"."+a+".toObject"];if(l)l({fields:e,object:o,result:u,config:t});else if(""===a){var s=c.toObject(o,t);Object.assign(u,s)}else{var p=c.toObject(o?o[a]:null,t);u[a]=p}if(t.debug)try{var y=new n(n.DEFAULT_CAPACITY,n.LITTLE_ENDIAN);if(null!=o){var v=o[a];if(v){var b=t.override[r+"."+a+".appendByteBuffer"];l&&b?b({fields:e,object:o,b:y}):c.appendByteBuffer(y,v)}}y=y.copy(0,y.offset),console.error("toObject",r+"."+a,"'"+u[a]+"'",y.toHex())}catch(t){t.message=r+"."+a+" "+t.message,console.error(t)}}}catch(t){throw t.message+=" "+r+"."+a,t}return u}}}},vgmO:function(r,t,e){(function(t){var e;e="undefined"!=typeof window?window:void 0!==t?t:"undefined"!=typeof self?self:{},r.exports=e}).call(this,e("yLpj"))},xr2V:function(r,t,e){"use strict";(function(t){var n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(r){return typeof r}:function(r){return r&&"function"==typeof Symbol&&r.constructor===Symbol&&r!==Symbol.prototype?"symbol":typeof r},o=e("DGy1"),i=e("gAlf");r.exports={create:function(r,t){var e=arguments.length>2&&void 0!==arguments[2]?arguments[2]:t.config,o=[];e.sort||(e.sort={});for(var a in r){var c=r[a],l=c.base,s=c.fields,p=void 0===c?"undefined":n(c);if("object"===p){if(!l&&!s){o.push("Expecting "+a+".fields or "+a+".base");continue}if(l&&"string"!=typeof l&&o.push("Expecting string "+a+".base"),s)if("object"!==(void 0===s?"undefined":n(s)))o.push("Expecting object "+a+".fields");else for(var y in s)"string"!=typeof s[y]&&o.push("Expecting string in "+a+".fields."+y)}else if("string"!==p){o.push("Expecting object or string under "+a+", instead got "+(void 0===c?"undefined":n(c)));continue}}var v={};for(var b in r){var d=r[b];"object"===(void 0===d?"undefined":n(d))&&(v[b]=i(b,e))}for(var g in r){var m=r[g];if("string"==typeof m){var h=t[m];if(h)t[g]=h;else{var B=S(g,m);B?v[g]=B:o.push("Unrecognized type or struct "+g+"."+m)}}}for(var j in r){var O=v[j];if(O){var w=r[j];if("object"===(void 0===w?"undefined":n(w))&&w.base){l=w.base;var x=v[l];if(!x){o.push("Missing "+l+" in "+j+".base");continue}O.add("",u(x))}}}function S(r,n,i,u){var a=f(n);if(!a)return null;var c=a.name,l=a.annotation,s=a.arrayType,p=void 0;if(l){var y=t[c];if(null==y)return o.push("Missing "+c+" in "+n),null;var b=[],d=!0,g=!1,m=void 0;try{for(var h,B=l[Symbol.iterator]();!(d=(h=B.next()).done);d=!0){var j=h.value,O=S(r,j,null,u);if(!O)return o.push("Missing "+j+" in "+n),null;b.push(O)}}catch(r){g=!0,m=r}finally{try{!d&&B.return&&B.return()}finally{if(g)throw m}}p=y(b)}else if(null==s){var w=v[c];if(w)return w;var x=t[c];if(!x)return null;p=x(i)}else if(""===s){var A=S(r,a.name,null,u);if(!A)return null;var E=e.sort[r+"."+u]||!1;p=t.vector(A,E)}else if(s.length>0){var T=S(r,a.arrayType,null,u);if(!T)return o.push("Missing "+a.arrayType+" in "+n),null;var N=S(r,a.name,T,u);if(!N)return o.push("Missing "+a.name+" in "+n),null;p=N}return a.optional?t.optional(p):p}for(var A in r){var E=v[A];if(E){var T=r[A];if(T.fields){s=T.fields;for(var N in s){var L=s[N],D=S(A,L,null,N);D?E.add(N,D):o.push("Missing "+L+" in "+A+".fields."+N)}}}}if(o.length)return{errors:o};return{errors:o,structs:v}},toBuffer:function(r,e){var n=r.fromObject(e);return t.from(function(r,t){var e=new o(o.DEFAULT_CAPACITY,o.LITTLE_ENDIAN);return r.appendByteBuffer(e,t),e.copy(0,e.offset)}(r,n).toBinary(),"binary")},fromBuffer:function(r,t){var e=!(arguments.length>2&&void 0!==arguments[2])||arguments[2],n=o.fromBinary(t.toString("binary"),o.LITTLE_ENDIAN),i=r.fromByteBuffer(n);return e?r.toObject(i):i}};var f=function(r){if(!r||"string"!=typeof r)return null;var t=(r=r.trim()).match(/<(.*)>/);if(t){var e=t?t[1].replace(/ /g,"").split(","):null;return{name:r=r.replace(t[0],"").trim(),annotation:e}}var n=r.match(/\[(.*)\]/),o=n?n[1].trim():null;n&&(r=r.replace(n[0],"").trim());var i=!1;return/\?$/.test(r)&&(r=r.substring(0,r.length-1),i=!0),{name:r,arrayType:o,optional:i}},u=function(r){return{fromByteBuffer:function(t){return r.fromByteBuffer(t)},appendByteBuffer:function(t,e){r.appendByteBuffer(t,e)},fromObject:function(t){return r.fromObject(t)},toObject:function(t){return r.toObject(t)}}}}).call(this,e("HDXh").Buffer)}}]);