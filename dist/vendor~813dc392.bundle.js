(window.webpackJsonp=window.webpackJsonp||[]).push([[25],{"0rDn":function(e,t,r){"use strict";var n=r("TqRt");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=n(r("lwsE")),u=n(r("W8MJ")),i=function(){function e(){(0,a.default)(this,e)}return(0,u.default)(e,null,[{key:"isLongEnough",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:8;return e.length>=t}},{key:"uppercaseCount",value:function(e){return e.split("").filter((function(e){return e===e.toUpperCase()})).length}},{key:"lowercaseCount",value:function(e){return e.split("").filter((function(e){return e!==e.toUpperCase()})).length}},{key:"specialCharCount",value:function(e){return e.replace(/[0-9a-zA-Z]/gi,"").length}},{key:"hasError",value:function(e){return this.isLongEnough(e)?this.uppercaseCount(e)<2?"Passwords must have at least two uppercase letters":this.lowercaseCount(e)<2?"Passwords must have at least two lowercase letters":this.specialCharCount(e)<2&&"Passwords must have at least two special characters (like # or @)":"Your password is not long enough (8 characters)"}}]),e}();t.default=i},"9pT+":function(e,t,r){"use strict";var n=r("TqRt");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a,u=n(r("o0o1")),i=n(r("yXPU")),c=n(r("lwsE")),o=n(r("W8MJ")),s=function(){function e(){(0,c.default)(this,e)}var t,r,n,s;return(0,o.default)(e,null,[{key:"init",value:function(e){a=e}},{key:"getSalt",value:(s=(0,i.default)(u.default.mark((function e(){return u.default.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",a.getSalt());case 1:case"end":return e.stop()}}),e)}))),function(){return s.apply(this,arguments)})},{key:"getSeed",value:(n=(0,i.default)(u.default.mark((function e(){return u.default.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",a.get());case 1:case"end":return e.stop()}}),e)}))),function(){return n.apply(this,arguments)})},{key:"setSeed",value:(r=(0,i.default)(u.default.mark((function e(t){return u.default.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",a.set(t));case 1:case"end":return e.stop()}}),e)}))),function(e){return r.apply(this,arguments)})},{key:"clear",value:(t=(0,i.default)(u.default.mark((function e(){return u.default.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",a.clear());case 1:case"end":return e.stop()}}),e)}))),function(){return t.apply(this,arguments)})}]),e}();t.default=s},I2xi:function(e,t,r){"use strict";var n=r("284h"),a=r("TqRt");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var u=a(r("o0o1")),i=a(r("yXPU")),c=a(r("lwsE")),o=a(r("W8MJ")),s=n(r("qjwK")),l=a(r("pk5N")),f=r("F+MN"),d=a(r("IMve")),p=function(){function e(){(0,c.default)(this,e)}var t,r;return(0,o.default)(e,null,[{key:"addOrUpdate",value:(r=(0,i.default)(u.default.mark((function e(t){var r,n;return u.default.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.recipient=t.recipient.trim(),t.name=t.name.trim(),r=l.default.get().state.scatter.clone(),t.name.length){e.next=5;break}return e.abrupt("return",{error:"Invalid contact name"});case 5:if(t.recipient.length){e.next=7;break}return e.abrupt("return",{error:"Invalid contact account / address"});case 7:if(!r.contacts.find((function(e){return e.id!==t.id&&e.recipient.toLowerCase()===t.recipient.toLowerCase()}))){e.next=9;break}return e.abrupt("return",{error:"Contact Exists"});case 9:if(!r.contacts.find((function(e){return e.id!==t.id&&e.name.toLowerCase()===t.name.toLowerCase()}))){e.next=11;break}return e.abrupt("return",{error:"Contact Name Exists"});case 11:return(n=r.contacts.find((function(e){return e.id===t.id})))?(n.recipient=t.recipient,n.name=t.name,n.blockchain=t.blockchain):r.contacts.push(t),e.abrupt("return",l.default.get().dispatch(s.SET_SCATTER,r));case 14:case"end":return e.stop()}}),e)}))),function(e){return r.apply(this,arguments)})},{key:"remove",value:(t=(0,i.default)(u.default.mark((function e(t){var r;return u.default.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return(r=l.default.get().state.scatter.clone()).contacts=r.contacts.filter((function(e){return e.id!==t.id})),e.abrupt("return",l.default.get().dispatch(s.SET_SCATTER,r));case 3:case"end":return e.stop()}}),e)}))),function(e){return t.apply(this,arguments)})},{key:"validate",value:function(e,t){return!f.BlockchainsArray.map((function(e){return e.value})).includes(e)||d.default.plugin(e).isValidRecipient(t)}}]),e}();t.default=p},O1cq:function(e,t,r){"use strict";var n=r("284h"),a=r("TqRt");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var u,i=a(r("o0o1")),c=a(r("yXPU")),o=a(r("lwsE")),s=a(r("W8MJ")),l=r("F+MN"),f=a(r("IMve")),d=n(r("qjwK")),p=a(r("lkGv")),v=a(r("Hxfq")),h=a(r("hfoK")),y=a(r("pk5N")),k=a(r("SDtL")),b=a(r("9pT+")),g=function(){function e(){(0,o.default)(this,e)}var t,r,n,a,g,w,T,m,x;return(0,s.default)(e,null,[{key:"init",value:function(e){u=e}},{key:"getImportedKeyBlockchains",value:function(e){var t=[];return l.BlockchainsArray.map((function(r){try{f.default.plugin(r.value).validPrivateKey(e)&&t.push(r.value)}catch(e){}})),t}},{key:"isValidPrivateKey",value:function(e){return!!this.getImportedKeyBlockchains(e.privateKey).length}},{key:"convertHexPrivateToBuffer",value:function(e){if("string"!=typeof e.privateKey)return!1;var t=!1;l.BlockchainsArray.map((function(r){if(!t)try{var n=f.default.plugin(r.value);n.validPrivateKey(e.privateKey)&&(e.privateKey=n.hexPrivateToBuffer(e.privateKey),t=!0)}catch(e){}}))}},{key:"makePublicKeys",value:(x=(0,c.default)(i.default.mark((function e(t){var r=this;return i.default.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.publicKeys=[],e.abrupt("return",Promise.all(l.BlockchainsArray.map((function(e){return r.addPublicKey(t,e.value)}))));case 2:case"end":return e.stop()}}),e)}))),function(e){return x.apply(this,arguments)})},{key:"addPublicKey",value:(m=(0,c.default)(i.default.mark((function e(t,r){var n,a,u,c,o=arguments;return i.default.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n=o.length>2&&void 0!==o[2]&&o[2],!t.publicKeys.find((function(e){return e.blockchain===r}))){e.next=3;break}return e.abrupt("return",!0);case 3:if(!t.isEncrypted()||n){e.next=7;break}return e.abrupt("return",!1);case 7:if(!t.isEncrypted()||!n){e.next=12;break}return e.next=10,b.default.getSeed();case 10:a=e.sent,t.decrypt(a);case 12:e.prev=12,u=f.default.plugin(r),"string"!=typeof(c=t.privateKey)&&(c=u.bufferToHexPrivate(c)),t.publicKeys.push({blockchain:r,key:u.privateToPublic(c,t.fork)}),e.next=23;break;case 19:return e.prev=19,e.t0=e.catch(12),console.log("err",e.t0),e.abrupt("return",!1);case 23:return e.abrupt("return",!0);case 24:case"end":return e.stop()}}),e,null,[[12,19]])}))),function(e,t){return m.apply(this,arguments)})},{key:"generateKeyPair",value:(T=(0,c.default)(i.default.mark((function e(t){return i.default.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,p.default.generatePrivateKey();case 2:return t.privateKey=e.sent,e.abrupt("return",!0);case 4:case"end":return e.stop()}}),e)}))),function(e){return T.apply(this,arguments)})},{key:"convertKey",value:function(e,t){var r=e.clone();return r.id=k.default.text(24),r.name="".concat((0,l.blockchainName)(t)," copy of ").concat(e.name),r.blockchains=[t],r.createdAt=+new Date,r}},{key:"saveKeyPair",value:(w=(0,c.default)(i.default.mark((function e(t){var r;return i.default.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.name.length||(t.name="Key-".concat(k.default.text(8))),t.isUnique()){e.next=3;break}return e.abrupt("return",{error:"Keypair already exists."});case 3:return(r=y.default.get().state.scatter.clone()).keychain.keypairs.push(v.default.fromJson(t)),e.abrupt("return",y.default.get().dispatch(d.SET_SCATTER,r));case 6:case"end":return e.stop()}}),e)}))),function(e){return w.apply(this,arguments)})},{key:"updateKeyPair",value:(g=(0,c.default)(i.default.mark((function e(t){var r;return i.default.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.name.length){e.next=2;break}return e.abrupt("return");case 2:return(r=y.default.get().state.scatter.clone()).keychain.keypairs.find((function(e){return e.unique()===t.unique()})).name=t.name,r.keychain.keypairs.find((function(e){return e.unique()===t.unique()})).blockchains=t.blockchains,e.abrupt("return",y.default.get().dispatch(d.SET_SCATTER,r));case 6:case"end":return e.stop()}}),e)}))),function(e){return g.apply(this,arguments)})},{key:"removeKeyPair",value:(a=(0,c.default)(i.default.mark((function e(t){var r;return i.default.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return(r=y.default.get().state.scatter.clone()).keychain.removeKeyPair(t),e.abrupt("return",y.default.get().dispatch(d.SET_SCATTER,r));case 3:case"end":return e.stop()}}),e)}))),function(e){return a.apply(this,arguments)})},{key:"getKeyPairFromPublicKey",value:function(e){arguments.length>1&&void 0!==arguments[1]&&arguments[1];var t=y.default.get().state.scatter.keychain.keypairs.find((function(t){return t.publicKeys.find((function(t){return t.key===e}))}));if(t)return t.clone();var r=y.default.get().state.scatter.keychain.identities.find((function(t){return t.publicKey===e}));return r?v.default.fromJson({name:r.name,publicKeys:[{blockchain:l.Blockchains.EOSIO,key:e}],privateKey:r.privateKey}):null}},{key:"publicToPrivate",value:(n=(0,c.default)(i.default.mark((function e(t){var r,n;return i.default.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!u){e.next=6;break}return e.next=3,u(t);case 3:if(!1===(r=e.sent)){e.next=6;break}return e.abrupt("return",r);case 6:return n=this.getKeyPairFromPublicKey(t,!0),e.t0=n,e.next=10,b.default.getSeed();case 10:if(e.t1=e.sent,e.t0.decrypt.call(e.t0,e.t1),!n){e.next=14;break}return e.abrupt("return",n.privateKey);case 14:return e.abrupt("return",null);case 15:case"end":return e.stop()}}),e,this)}))),function(e){return n.apply(this,arguments)})},{key:"getHardwareKeyList",value:(r=(0,c.default)(i.default.mark((function e(t){var r,n,a=this,u=arguments;return i.default.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(r=u.length>1&&void 0!==u[1]?u[1]:0,n=u.length>2&&void 0!==u[2]?u[2]:0,"function"==typeof t.interface.getAddress){e.next=4;break}return e.abrupt("return",!1);case 4:if(!(n>=5)){e.next=6;break}return e.abrupt("return",!1);case 6:return e.abrupt("return",t.interface.getAddress(r).catch(function(){var e=(0,c.default)(i.default.mark((function e(u){return i.default.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!u.toString().match("CLA_NOT_SUPPORTED")&&!u.toString().match("Cannot write to HID device")){e.next=4;break}return e.next=3,h.default.openConnections();case 3:return e.abrupt("return",a.getHardwareKeyList(t,r,n++));case 4:return e.abrupt("return",!1);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()));case 7:case"end":return e.stop()}}),e)}))),function(e){return r.apply(this,arguments)})},{key:"loadFromHardware",value:(t=(0,c.default)(i.default.mark((function e(t){var r,n=this,a=arguments;return i.default.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(r=a.length>1&&void 0!==a[1]?a[1]:0,"function"==typeof t.external.interface.getPublicKey){e.next=3;break}return e.abrupt("return",!1);case 3:if(!(r>=5)){e.next=5;break}return e.abrupt("return",!1);case 5:return e.abrupt("return",t.external.interface.getPublicKey().then((function(e){return!!f.default.plugin(t.external.blockchain).validPublicKey(e)&&(t.external.publicKey=e,t.publicKeys.push({blockchain:t.external.blockchain,key:e}),!0)})).catch(function(){var e=(0,c.default)(i.default.mark((function e(a){return i.default.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!a.toString().match("Cannot write to HID device")){e.next=4;break}return e.next=3,h.default.openConnections();case 3:return e.abrupt("return",n.loadFromHardware(t,r++));case 4:return e.abrupt("return",!1);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()));case 6:case"end":return e.stop()}}),e)}))),function(e){return t.apply(this,arguments)})},{key:"isHardware",value:function(e){var t=this.getKeyPairFromPublicKey(e);if(!t)throw new Error("Keypair doesnt exist on keychain");return null!==t.external}}]),e}();t.default=g},ONSl:function(e,t,r){"use strict";var n=r("284h"),a=r("TqRt");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var u=a(r("o0o1")),i=a(r("yXPU")),c=a(r("lwsE")),o=a(r("W8MJ")),s=n(r("qjwK")),l=a(r("eaOo")),f=a(r("GwxU")),d=a(r("pk5N")),p=a(r("KLk5")),v=function(e,t){e.settings.tokens=e.settings.tokens.filter((function(e){return e.unique()!==t.unique()})),e.settings.blacklistTokens=e.settings.blacklistTokens.filter((function(e){return e.unique()!==t.unique()})),e.settings.displayToken===t.unique()&&(e.settings.displayToken=null)},h=function(){function e(){(0,c.default)(this,e)}var t,r,n;return(0,o.default)(e,null,[{key:"addToken",value:(n=(0,i.default)(u.default.mark((function e(t){var r,n,a=arguments;return u.default.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(r=a.length>1&&void 0!==a[1]&&a[1],n=d.default.get().state.scatter.clone(),!d.default.get().state.scatter.networkTokens().find((function(e){return e.unique()===t.unique()}))){e.next=4;break}return e.abrupt("return",!0);case 4:if(t.symbol.length){e.next=6;break}return e.abrupt("return",{error:"Symbol Missing"});case 6:if(t.contract.length){e.next=8;break}return e.abrupt("return",{error:"Contract missing"});case 8:if(r||!n.settings.tokens.find((function(e){return e.unique()===t.unique()}))){e.next=10;break}return e.abrupt("return",{error:"Token exists already (whitelist)"});case 10:if(!r||!n.settings.blacklistTokens.find((function(e){return e.unique()===t.unique()}))){e.next=12;break}return e.abrupt("return",{error:"Token exists already (blacklist)"});case 12:return t.name.trim().length||(t.name=t.symbol),v(n,t),r?n.settings.blacklistTokens.unshift(t):n.settings.tokens.unshift(t),e.abrupt("return",d.default.get().dispatch(s.SET_SCATTER,n));case 16:case"end":return e.stop()}}),e)}))),function(e){return n.apply(this,arguments)})},{key:"removeToken",value:function(e){var t=d.default.get().state.scatter.clone();if(d.default.get().state.scatter.networkTokens().find((function(t){return t.unique()===e.unique()})))return!0;v(t,e),d.default.get().dispatch(s.SET_SCATTER,t)}},{key:"hasToken",value:function(e){var t=d.default.get().state.scatter.clone();return!!p.default.totalBalances(!0).totals[e.unique()]||!!t.settings.tokens.find((function(t){return t.unique()===e.unique()}))||!!t.settings.blacklistTokens.find((function(t){return t.unique()===e.unique()}))}},{key:"setDisplayCurrency",value:(r=(0,i.default)(u.default.mark((function e(t){var r;return u.default.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return(r=d.default.get().state.scatter.clone()).settings.displayCurrency=t,e.abrupt("return",d.default.get().dispatch(s.SET_SCATTER,r));case 3:case"end":return e.stop()}}),e)}))),function(e){return r.apply(this,arguments)})},{key:"setDisplayToken",value:(t=(0,i.default)(u.default.mark((function e(t){var r;return u.default.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return(r=d.default.get().state.scatter.clone()).settings.displayToken=t instanceof f.default?t.uniqueWithChain():t,e.abrupt("return",d.default.get().dispatch(s.SET_SCATTER,r));case 3:case"end":return e.stop()}}),e)}))),function(e){return t.apply(this,arguments)})},{key:"formatAmount",value:function(e,t){for(var r=arguments.length>2&&void 0!==arguments[2]&&arguments[2],n=r?"div":"times",a="",u=0;u<t.decimals;u++)a+="0";return new l.default(e.toString(10),10)[n]("1".concat(a)).toString(10)}}]),e}();t.default=h},SDtL:function(e,t,r){"use strict";var n=r("TqRt");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=n(r("lwsE")),u=n(r("W8MJ")),i="undefined"==typeof window?r("HEbw"):null,c=function(){function e(){(0,a.default)(this,e)}return(0,u.default)(e,null,[{key:"rand",value:function(){return i?parseInt(i.randomBytes(8).toString("hex"),16)/0x10000000000000000:(e=new Uint32Array(1),window.crypto.getRandomValues(e),e[0]/4294967296);var e}},{key:"text",value:function(t){for(var r="",n="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",a=0;a<t;a++)r+=n.charAt(Math.floor(e.rand()*n.length));return r}},{key:"numeric",value:function(t){var r=11;if(t>r)return e.numeric(r)+e.numeric(t-r);var n=(r=Math.pow(10,t+1))/10;return(""+(Math.floor(e.rand()*(r-n+1))+n)).substring(1)}}]),e}();t.default=c},SUCZ:function(e,t,r){"use strict";var n=r("TqRt");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=n(r("I2xi")),u=n(r("z/LQ")),i=n(r("b8Vv")),c=n(r("btL5")),o=n(r("pk5N")),s=n(r("ONSl")),l=n(r("YRtA")),f={ContactService:a.default,Framework:u.default,SingletonService:i.default,SocketService:c.default,StoreService:o.default,TokenService:s.default,EventService:l.default};t.default=f},Srzz:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.setPopupsAsConsole=t.SHOW_POPUPS_AS_CONSOLE=t.RUNNING_TESTS=void 0;t.RUNNING_TESTS=!1;var n=!1;t.SHOW_POPUPS_AS_CONSOLE=n;t.setPopupsAsConsole=function(e){return t.SHOW_POPUPS_AS_CONSOLE=n=e}},UYLU:function(e,t,r){"use strict";var n=r("TqRt");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=n(r("cDf5")),u=n(r("lwsE")),i=n(r("W8MJ")),c=function(){function e(){(0,u.default)(this,e)}return(0,i.default)(e,null,[{key:"distinct",value:function(e){return e.reduce((function(e,t){return e.includes(t)?e:e.concat(t)}),[])}},{key:"flatten",value:function(e){var t=this;return Array.isArray(e)?e.reduce((function(e,r){return e.concat(Array.isArray(r)?t.flatten(r):r)}),[]):e}},{key:"flattenObject",value:function(e){var t=this;return"object"!==(0,a.default)(e)?this.flatten(e):this.flatten(Object.keys(e).map((function(r){return t.flattenObject(e[r])})))}},{key:"shuffle",value:function(e){for(var t=e.length-1;t>0;t--){var r=Math.floor(Math.random()*(t+1)),n=[e[r],e[t]];e[t]=n[0],e[r]=n[1]}return e}},{key:"objectTake",value:function(e,t){var r={};return Object.keys(e).length<t?e:(Object.keys(e).map((function(n){Object.keys(r).length>=t||(r[n]=e[n])})),r)}}]),e}();t.default=c},XtJ5:function(e,t,r){"use strict";var n=r("TqRt");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=n(r("hfoK")),u=n(r("O1cq")),i=n(r("sZoq")),c=n(r("9pT+")),o=n(r("r6PA")),s={HardwareService:a.default,KeyPairService:u.default,QRService:i.default,Seeder:c.default,SigningService:o.default};t.default=s},YRtA:function(e,t,r){"use strict";var n=r("TqRt");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a,u=n(r("lwsE")),i=n(r("W8MJ")),c=function(){function e(){(0,u.default)(this,e)}return(0,i.default)(e,null,[{key:"init",value:function(e){a=e}},{key:"emit",value:function(e,t){return a(e,t)}}]),e}();t.default=c},YhWJ:function(e,t,r){"use strict";var n=r("284h"),a=r("TqRt");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var u=a(r("lkGv")),i=n(r("upjY")),c=a(r("zugy")),o=n(r("oYQz")),s=a(r("SDtL")),l=a(r("w+eT")),f=a(r("UYLU")),d=n(r("Srzz")),p={Crypto:u.default,DateHelpers:i,Hasher:c.default,Http:o,IdGenerator:s.default,Mnemonic:l.default,ObjectHelpers:f.default,TestingHelper:d};t.default=p},b8Vv:function(e,t,r){"use strict";var n=r("284h"),a=r("TqRt");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var u=a(r("o0o1")),i=a(r("yXPU")),c=a(r("lwsE")),o=a(r("W8MJ")),s=(n(r("qjwK")),a(r("5lq1"))),l=a(r("TmN8")),f=a(r("eOAV")),d=(a(r("pk5N")),a(r("btL5"))),p=a(r("x0xh")),v=a(r("IMve")),h=r("F+MN"),y=!1,k=function(){function e(){(0,c.default)(this,e)}var t;return(0,o.default)(e,null,[{key:"init",value:(t=(0,i.default)(u.default.mark((function e(){return u.default.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!y){e.next=2;break}return e.abrupt("return",!0);case 2:return y=!0,v.default.plugin(h.Blockchains.TRX).init(),d.default.initialize(),p.default.getApps(),l.default.watchPrices(),f.default.removeDanglingPermissions(),s.default.fixOrphanedAccounts(),e.abrupt("return",!0);case 10:case"end":return e.stop()}}),e)}))),function(){return t.apply(this,arguments)})}]),e}();t.default=k},btL5:function(e,t,r){"use strict";var n=r("284h"),a=r("TqRt");Object.defineProperty(t,"__esModule",{value:!0}),t.default=t.getCerts=t.handlePairedResponse=t.handleApiResponse=void 0;var u,i=a(r("lwsE")),c=a(r("W8MJ")),o=a(r("o0o1")),s=a(r("yXPU")),l=a(r("Z4q2")),f=a(r("zAsq")),d=n(r("qjwK")),p=a(r("pk5N")),v=a(r("YRtA")),h=function(e,t,r,n){return u.emit(e,t,r,n)},y=function(e,t){return u.getNewKey(e,t)},k=function(){var e=(0,s.default)(o.default.mark((function e(t,r){var n,a,u;return o.default.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n=p.default.get().state.scatter.keychain.findApp(t.data.payload.origin),a=function(){var e=(0,s.default)(o.default.mark((function e(){var r;return o.default.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=p.default.get().state.scatter.clone(),n.nextNonce=t.data.nextNonce,r.keychain.updateOrPushApp(n),e.abrupt("return",p.default.get().dispatch(d.SET_SCATTER,r));case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),u=function(){var e=(0,s.default)(o.default.mark((function e(){var t;return o.default.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return(t=p.default.get().state.scatter.clone()).keychain.removeApp(n),e.abrupt("return",p.default.get().dispatch(d.SET_SCATTER,t));case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),n){e.next=5;break}return e.abrupt("return");case 5:if(n.checkKey(t.data.appkey)){e.next=7;break}return e.abrupt("return");case 7:if(!n.nextNonce.length||n.checkNonce(t.data.nonce)){e.next=12;break}return e.next=10,u();case 10:e.next=14;break;case 12:return e.next=14,a();case 14:l.default.handler(Object.assign(t.data,{plugin:t.plugin})).then((function(e){h(n.origin,r,"api",e)}));case 15:case"end":return e.stop()}}),e)})));return function(t,r){return e.apply(this,arguments)}}();t.handleApiResponse=k;var b=function(){var e=(0,s.default)(o.default.mark((function e(t,r){var n,a,u,i,c;return o.default.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n=p.default.get().state.scatter,a=n.keychain.findApp(t.data.origin),u={type:"linkApp",payload:t.data},!t.data.passthrough){e.next=5;break}return e.abrupt("return",h(t.data.origin,r,"paired",a&&a.checkKey(t.data.appkey)));case 5:if(i=function(){var e=(0,s.default)(o.default.mark((function e(){var a,u,i,c=arguments;return o.default.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=c.length>0&&void 0!==c[0]?c[0]:null,u=new f.default(t.data.origin,a||t.data.appkey),(i=n.clone()).keychain.updateOrPushApp(u),e.next=6,p.default.get().dispatch(d.SET_SCATTER,i);case 6:h(t.data.origin,r,"paired",!0);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),c=function(){var e=(0,s.default)(o.default.mark((function e(){var n;return o.default.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,y(t.data.origin,r);case 2:if((n=e.sent).data.origin===t.data.origin&&-1!==n.data.appkey.indexOf("appkey:")){e.next=5;break}return e.abrupt("return",h(t.data.origin,r,"paired",!1));case 5:return e.abrupt("return",i(n.data.appkey));case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),!a){e.next=15;break}if(!a.checkKey(t.data.appkey)){e.next=12;break}return e.abrupt("return",h(t.data.origin,r,"paired",!0));case 12:v.default.emit("popout",u).then(function(){var e=(0,s.default)(o.default.mark((function e(n){return o.default.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!n.result){e.next=5;break}return e.abrupt("return",c());case 5:h(t.data.origin,r,"paired",!1);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}());case 13:e.next=16;break;case 15:return e.abrupt("return",c());case 16:case"end":return e.stop()}}),e)})));return function(t,r){return e.apply(this,arguments)}}();t.handlePairedResponse=b;var g=function(){var e=(0,s.default)(o.default.mark((function e(){return o.default.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",fetch("https://certs.get-scatter.com?rand="+Math.round(100*Math.random()+1)).then((function(e){return e.json()})).then((function(e){return e.hasOwnProperty("key")&&e.hasOwnProperty("cert")?e:(v.default.emit("no_certs"),null)})).catch((function(){return console.error("Could not fetch certs. Probably due to a proxy, vpn, or firewall.")})));case 1:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();t.getCerts=g;var w=function(){function e(){(0,i.default)(this,e)}var t,r,n,a;return(0,c.default)(e,null,[{key:"init",value:function(e){u=e}},{key:"initialize",value:(a=(0,s.default)(o.default.mark((function e(){return o.default.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",u.initialize());case 1:case"end":return e.stop()}}),e)}))),function(){return a.apply(this,arguments)})},{key:"close",value:(n=(0,s.default)(o.default.mark((function e(){return o.default.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",u.close());case 1:case"end":return e.stop()}}),e)}))),function(){return n.apply(this,arguments)})},{key:"sendEvent",value:(r=(0,s.default)(o.default.mark((function e(t,r,n){return o.default.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",u.sendEvent(t,r,n));case 1:case"end":return e.stop()}}),e)}))),function(e,t,n){return r.apply(this,arguments)})},{key:"broadcastEvent",value:(t=(0,s.default)(o.default.mark((function e(t,r){return o.default.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",u.broadcastEvent(t,r));case 1:case"end":return e.stop()}}),e)}))),function(e,r){return t.apply(this,arguments)})}]),e}();t.default=w},"gW+t":function(e,t,r){"use strict";var n=r("284h");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a={constants:n(r("qjwK"))};t.default=a},hfoK:function(e,t,r){"use strict";var n=r("TqRt");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a,u=n(r("o0o1")),i=n(r("yXPU")),c=n(r("lwsE")),o=n(r("W8MJ")),s="You must initialize the hardware service first.",l=function(){function e(){(0,c.default)(this,e)}var t,r,n;return(0,o.default)(e,null,[{key:"init",value:function(e){a=e}},{key:"openConnections",value:(n=(0,i.default)(u.default.mark((function e(){var t,r=arguments;return u.default.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t=r.length>0&&void 0!==r[0]&&r[0],a){e.next=3;break}return e.abrupt("return",console.error(s));case 3:return e.abrupt("return",this.openConnections(t));case 4:case"end":return e.stop()}}),e,this)}))),function(){return n.apply(this,arguments)})},{key:"checkHardware",value:(r=(0,i.default)(u.default.mark((function e(t){return u.default.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(a){e.next=2;break}return e.abrupt("return",console.error(s));case 2:return e.abrupt("return",a.checkHardware(t));case 3:case"end":return e.stop()}}),e)}))),function(e){return r.apply(this,arguments)})},{key:"sign",value:(t=(0,i.default)(u.default.mark((function e(t,r,n){return u.default.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(a){e.next=2;break}return e.abrupt("return",console.error(s));case 2:return e.abrupt("return",a.sign(t,r,n));case 3:case"end":return e.stop()}}),e)}))),function(e,r,n){return t.apply(this,arguments)})}]),e}();t.default=l},lkGv:function(e,t,r){"use strict";var n=r("TqRt");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=n(r("o0o1")),u=n(r("yXPU")),i=n(r("lwsE")),c=n(r("W8MJ")),o=n(r("Giuh")),s=n(r("IMve")),l=o.default.PrivateKey,f=function(){function e(){(0,i.default)(this,e)}var t;return(0,c.default)(e,null,[{key:"generatePrivateKey",value:(t=(0,u.default)(a.default.mark((function e(){return a.default.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,l.randomKey();case 2:return e.abrupt("return",e.sent.toBuffer());case 3:case"end":return e.stop()}}),e)}))),function(){return t.apply(this,arguments)})},{key:"bufferToPrivateKey",value:function(e,t){return s.default.plugin(t).bufferToHexPrivate(e)}},{key:"privateKeyToBuffer",value:function(e,t){return s.default.plugin(t).hexPrivateToBuffer(e)}},{key:"bufferToHash",value:function(e){return o.default.sha256(e)}}]),e}();t.default=f},oYQz:function(e,t,r){"use strict";var n=r("TqRt");Object.defineProperty(t,"__esModule",{value:!0}),t.post=t.get=void 0;var a=n(r("o0o1")),u=n(r("yXPU")),i=function(){var e=(0,u.default)(a.default.mark((function e(t){return a.default.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",Promise.race([fetch(t).then((function(e){return e.json()})).catch((function(){return null})),new Promise((function(e){return setTimeout((function(){return e(null)}),6e4)}))]));case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();t.get=i;var c=function(){var e=(0,u.default)(a.default.mark((function e(t,r){return a.default.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",Promise.race([fetch(t,{method:"POST",headers:{Accept:"application/json, text/plain, */*","Content-Type":"application/json"},body:JSON.stringify(r)}).then((function(e){return e.json()})).catch((function(){return null})),new Promise((function(e){return setTimeout((function(){return e(null)}),12e4)}))]));case 1:case"end":return e.stop()}}),e)})));return function(t,r){return e.apply(this,arguments)}}();t.post=c},pk5N:function(e,t,r){"use strict";var n=r("284h"),a=r("TqRt");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var u,i=a(r("lwsE")),c=a(r("W8MJ")),o=(n(r("qjwK")),function(){function e(){(0,i.default)(this,e)}return(0,c.default)(e,null,[{key:"init",value:function(e){u=e}},{key:"get",value:function(){return u}}]),e}());t.default=o},qjwK:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.SET_PRICE_DATA=t.LOAD_HISTORY=t.DELTA_HISTORY=t.UPDATE_HISTORY=t.SET_PRICES=t.REMOVE_BALANCES=t.SET_BALANCES=t.HOLD_SCATTER=t.LOAD_SCATTER=t.SET_SCATTER=t.ADD_RESOURCES=t.SET_RESOURCES=t.SET_DAPP_LOGO=t.SET_DAPP_DATA=void 0;t.SET_DAPP_DATA="setDappData";t.SET_DAPP_LOGO="setDappLogo";t.SET_RESOURCES="setResources";t.ADD_RESOURCES="addResources";t.SET_SCATTER="setScatter";t.LOAD_SCATTER="loadScatter";t.HOLD_SCATTER="holdScatter";t.SET_BALANCES="setBalances";t.REMOVE_BALANCES="removeBalances";t.SET_PRICES="setPrices";t.UPDATE_HISTORY="updateHistory";t.DELTA_HISTORY="deltaHistory";t.LOAD_HISTORY="loadHistory";t.SET_PRICE_DATA="setPriceData"},r6PA:function(e,t,r){"use strict";var n=r("TqRt");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a,u=n(r("lwsE")),i=n(r("W8MJ")),c=n(r("IMve")),o=n(r("O1cq")),s=n(r("hfoK")),l=function(){function e(){(0,u.default)(this,e)}return(0,i.default)(e,null,[{key:"init",value:function(e){a=e}},{key:"sign",value:function(e,t,r){var n=arguments.length>3&&void 0!==arguments[3]&&arguments[3],u=arguments.length>4&&void 0!==arguments[4]&&arguments[4];return a?a(e,r,t,n,u):o.default.isHardware(r)?s.default.sign(e,r,t):c.default.plugin(e.blockchain).signer(t,r,n,u)}}]),e}();t.default=l},sZoq:function(e,t,r){"use strict";var n=r("TqRt");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=n(r("J4zp")),u=n(r("o0o1")),i=n(r("yXPU")),c=n(r("lwsE")),o=n(r("W8MJ")),s=n(r("0FX9")),l=n(r("5lvq")),f=n(r("w+eT")),d=n(r("9pT+")),p=function(){function e(){(0,c.default)(this,e)}var t,r;return(0,o.default)(e,null,[{key:"createQR",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;return new Promise(function(){var r=(0,i.default)(u.default.mark((function r(n){var a,i,c;return u.default.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:if(t&&t.length){r.next=4;break}n(s.default.toDataURL(JSON.stringify({data:e,salt:d.default.getSalt()}),{errorCorrectionLevel:"L"})),r.next=12;break;case 4:return r.next=6,d.default.getSeed();case 6:return a=r.sent,r.next=9,f.default.generateMnemonic(t,d.default.getSalt());case 9:i=r.sent[1],c=l.default.encrypt(l.default.decrypt(e,a),i),n(s.default.toDataURL(JSON.stringify({data:c,salt:d.default.getSalt()}),{errorCorrectionLevel:"L"}));case 12:case"end":return r.stop()}}),r)})));return function(e){return r.apply(this,arguments)}}())}},{key:"createUnEncryptedQR",value:(r=(0,i.default)(u.default.mark((function e(t){return u.default.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",s.default.toDataURL(JSON.stringify(t),{errorCorrectionLevel:"L"}));case 1:case"end":return e.stop()}}),e)}))),function(e){return r.apply(this,arguments)})},{key:"decryptQR",value:(t=(0,i.default)(u.default.mark((function e(t,r,n){var i,c,o;return u.default.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,f.default.generateMnemonic(n,r);case 2:return i=e.sent,(c=(0,a.default)(i,2))[0],o=c[1],e.prev=6,e.abrupt("return",l.default.decrypt(t,o));case 10:return e.prev=10,e.t0=e.catch(6),console.error("Error decrypting QR: ",e.t0),e.abrupt("return",null);case 14:case"end":return e.stop()}}),e,null,[[6,10]])}))),function(e,r,n){return t.apply(this,arguments)})}]),e}();t.default=p},upjY:function(e,t,r){"use strict";var n=r("TqRt");Object.defineProperty(t,"__esModule",{value:!0}),t.utcToLocal=t.daysOld=t.hourNow=t.dateId=void 0;var a=n(r("J4zp"));t.dateId=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,t=new Date;t.setDate(t.getDate()-e);var r=t.getUTCDate(),n=t.getUTCMonth()+1,a=t.getUTCFullYear();return"".concat(r,"-").concat(n,"-").concat(a)};t.hourNow=function(){return(new Date).getHours()};t.daysOld=function(e,t){var r=e.split("-"),n=(0,a.default)(r,3),u=n[0],i=n[1],c=n[2],o=new Date,s=new Date(o.getTime()-24*t*60*60*1e3);return new Date(c,i-1,u,0,0,0,0)<s};t.utcToLocal=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,r=e.split("-"),n=(0,a.default)(r,3),u=n[0],i=n[1],c=n[2],o=new Date;o.setUTCDate(u),o.setUTCMonth(i),o.setUTCFullYear(c),o.setUTCHours(t);var s=o.getDate(),l=o.getMonth(),f=o.getFullYear();return["".concat(s,"-").concat(l,"-").concat(f),o.getHours()]}},"w+eT":function(e,t,r){"use strict";var n=r("TqRt");Object.defineProperty(t,"__esModule",{value:!0}),t.default=t.Mnemonic=void 0;var a=n(r("o0o1")),u=n(r("yXPU")),i=n(r("lwsE")),c=n(r("W8MJ")),o=n(r("zugy")),s=n(r("AKX1")),l=function(){function e(){(0,i.default)(this,e)}var t,r;return(0,c.default)(e,null,[{key:"generateMnemonic",value:(r=(0,u.default)(a.default.mark((function e(t){var r,n,u,i=arguments;return a.default.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=i.length>1&&void 0!==i[1]?i[1]:null,e.next=3,o.default.secureHash(t,r);case 3:return n=e.sent,u=s.default.entropyToMnemonic(n),e.abrupt("return",[u,s.default.mnemonicToSeedHex(u)]);case 6:case"end":return e.stop()}}),e)}))),function(e){return r.apply(this,arguments)})},{key:"mnemonicToSeed",value:(t=(0,u.default)(a.default.mark((function e(t){return a.default.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",s.default.mnemonicToSeedHex(t));case 1:case"end":return e.stop()}}),e)}))),function(e){return t.apply(this,arguments)})}]),e}();t.Mnemonic=l;var f=l;t.default=f},"z/LQ":function(e,t,r){"use strict";var n=r("TqRt");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a,u=n(r("lwsE")),i=n(r("W8MJ")),c=function(){function e(){(0,u.default)(this,e)}return(0,i.default)(e,null,[{key:"init",value:function(e){a=e}},{key:"getVersion",value:function(){return a.getVersion()}},{key:"pushNotification",value:function(e,t){return a.pushNotification(e,t)}},{key:"triggerDeepLink",value:function(e){}}]),e}();t.default=c},zugy:function(e,t,r){"use strict";var n=r("TqRt");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=n(r("o0o1")),u=n(r("yXPU")),i=n(r("lwsE")),c=n(r("W8MJ")),o=n(r("9pT+")),s=r("Giuh"),l=r("agzX"),f=function(){function e(){(0,i.default)(this,e)}var t;return(0,c.default)(e,null,[{key:"unsaltedQuickHash",value:function(e){return s.sha256(e)}},{key:"secureHash",value:(t=(0,u.default)(a.default.mark((function e(t){var r,n=arguments;return a.default.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=n.length>1&&void 0!==n[1]?n[1]:null,e.abrupt("return",new Promise(function(){var e=(0,u.default)(a.default.mark((function e(n){return a.default.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(r){e.next=7;break}return e.next=3,o.default.getSalt();case 3:if(e.t0=e.sent,e.t0){e.next=6;break}e.t0="SALT_ME";case 6:r=e.t0;case 7:l(t,r,{N:16384,r:8,p:1,dkLen:16,encoding:"hex"},(function(e){n(e)}));case 8:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()));case 2:case"end":return e.stop()}}),e)}))),function(e){return t.apply(this,arguments)})}]),e}();t.default=f}}]);