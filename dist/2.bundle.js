(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{"8Yeu":function(t,e,n){"use strict";var i=n("M1sK");n.n(i).a},BbN7:function(t,e,n){(t.exports=n("JPst")(!1)).push([t.i,".app-login[data-v-9e37784a]{display:flex;justify-content:center;align-items:center;border:1px solid #dadada;border-top:0;height:calc(100vh - 40px)}.app-login .app-details[data-v-9e37784a]{margin-top:-60px}.app-login .requirements[data-v-9e37784a]{min-width:400px;text-align:left;max-width:80%;margin:10px auto}.app-login .requirements .authorities .select[data-v-9e37784a]{margin-top:-7px}.app-login .requirements .dangerous-authority[data-v-9e37784a]{background:#ff0707;border:1px solid #cb0606;color:#fff;font-size:10px;margin-bottom:10px;margin-top:-7px;padding:10px;border-radius:10px}.app-login .requirements .boxes[data-v-9e37784a]{width:100%}.app-login .requirements .boxes .box[data-v-9e37784a]{width:100%}.app-login .requirements .requirement[data-v-9e37784a]{padding:10px 0;display:flex;align-items:center;position:relative}.app-login .requirements .requirement label[data-v-9e37784a]{font-size:10px;padding-top:2px}.app-login .requirements .requirement .icon[data-v-9e37784a]{padding-right:5px;align-self:flex-start;color:#7a7a7a;margin-left:-8px}.app-login .requirements .requirement .icon.bubble[data-v-9e37784a]{padding:3px 2px;border-radius:50%;background:#0799ff;border:1px solid #0778dd;color:#fff;font-size:9px;cursor:pointer}.app-login .requirements .requirement .icon.bubble:hover ~ .bubble-explainer[data-v-9e37784a]{display:block}.app-login .requirements .requirement .bubble-explainer[data-v-9e37784a]{position:absolute;right:-10px;bottom:calc(100% - 10px);width:380px;font-size:10px;background:#fff;color:#333;box-shadow:0 2px 4px rgba(7,155,232,0.23),0 8px 24px rgba(7,155,232,0.23);padding:20px;border-radius:10px;display:none;z-index:999999}.app-login .requirements .requirement .text[data-v-9e37784a]{flex:1;font-size:10px}.app-login .requirements .requirement.all-accounts[data-v-9e37784a]{margin-top:10px;padding-top:20px;border-top:1px solid #dfe0e1}.app-login .requirements .requirement.all-accounts .icon[data-v-9e37784a]:first-child{color:#0799ff}.app-login .requirements .requirement.all-accounts .network-accounts-list[data-v-9e37784a]{max-height:100px;overflow-y:auto}.app-login .requirements .requirement.all-accounts .network-accounts[data-v-9e37784a]{font-size:10px;font-weight:bold;display:inline-block;margin-right:5px}.app-login .requirements .requirement.all-accounts .network-accounts .name[data-v-9e37784a]{color:#0799ff;text-decoration:underline}.app-login .requirements .requirement.personal[data-v-9e37784a]{margin-top:10px;padding-top:20px;border-top:1px solid #dfe0e1}.app-login .requirements .requirement.no-accounts[data-v-9e37784a]{text-align:center;width:350px;display:flex;justify-content:center;align-items:center;flex-direction:column;border:1px solid #0799ff;border-radius:10px;margin:20px auto 10px;padding:20px}.app-login .requirements .requirement.no-accounts .network-name[data-v-9e37784a]{font-size:14px;font-weight:bold;margin-bottom:5px}.app-login .actions[data-v-9e37784a]{margin-top:30px;position:absolute;bottom:30px;right:30px;left:30px;display:flex;justify-content:space-between}\n",""])},GM6d:function(t,e,n){"use strict";var i=n("ztac");n.n(i).a},IeaP:function(t,e,n){"use strict";var i=n("lSNA"),a=n.n(i),s=n("L2JU");function o(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,i)}return n}var r={components:{Scatter:n("wg2a").a},props:["app","suffix"],computed:function(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?o(n,!0).forEach((function(e){a()(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):o(n).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}({},Object(s.d)(["appReputation"]),{},Object(s.c)(["ridlEnabled"]),{unknownReputation:function(){return void 0===this.appReputation},trusted:function(){return this.appReputation&&parseFloat(this.appReputation.decimal)>0},untrusted:function(){return this.appReputation&&parseFloat(this.appReputation.decimal)<0}})},c=(n("GM6d"),n("KHd+")),l=Object(c.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{staticClass:"app-details"},[t.untrusted?n("figure",{staticClass:"logo scam"},[n("i",{staticClass:"icon-attention"})]):n("figure",{staticClass:"logo",class:{border:"Scatter"!==t.app.applink&&!t.app.img}},["Scatter"===t.app.applink?n("Scatter"):t.app.img?n("img",{attrs:{src:t.app.img}}):n("span",[t._v("No Image")])],1),t._v(" "),t.ridlEnabled&&"Scatter"!==t.app.applink?n("section",[!1===t.appReputation?n("figure",{staticClass:"reputation"},[n("i",{staticClass:"icon-spin4 animate-spin"}),t._v(" loading reputation")]):n("section",[t.unknownReputation?n("figure",{staticClass:"reputation"},[t._v("Unknown Reputation")]):t._e(),t._v(" "),t.trusted?n("figure",{staticClass:"reputation trusted"},[t._v("Trustworthy")]):t._e(),t._v(" "),t.untrusted?n("figure",{staticClass:"reputation untrusted"},[t._v("Known Scam")]):t._e()])]):t._e(),t._v(" "),n("figure",{staticClass:"name"},[n("b",[t._v(t._s(t.app.name))]),t._v(" "),t.suffix?n("span",[t._v(t._s(t.suffix))]):t._e()])])}),[],!1,null,"22b9e1d6",null);e.a=l.exports},M1sK:function(t,e,n){var i=n("QBFQ");"string"==typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);(0,n("SZ7m").default)("66bb7c78",i,!0,{})},QBFQ:function(t,e,n){(t.exports=n("JPst")(!1)).push([t.i,".fields-title[data-v-0a29a3fd]{margin:-20px -30px 0;padding:20px 30px;background:linear-gradient(180deg, #007fd7 0%, #0799ff 100%);color:#fff;font-size:18px;margin-bottom:20px}.required-fields[data-v-0a29a3fd]{padding:20px 0 0}\n",""])},"QXd/":function(t,e,n){var i=n("BbN7");"string"==typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);(0,n("SZ7m").default)("7a93268a",i,!0,{})},iTtS:function(t,e,n){"use strict";var i=n("QXd/");n.n(i).a},leBm:function(t,e,n){"use strict";n.r(e);var i=n("lSNA"),a=n.n(i),s=n("L2JU"),o=n("EY8S"),r=n("78si"),c=n.n(r),l=n("psvp"),u=n("IfgB"),p=n("Gbp+"),d=(n("F+MN"),n("+nw1")),f=n("IeaP");function g(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,i)}return n}n("8olR");var h={props:["popup","expanded"],components:{PopOutApp:f.a,RequiredFields:l.a},data:function(){return{account:null,selectedAccounts:[],searchTerms:"",selectedLocation:null,selectedIdentity:null,showingAll:!1,loginAll:!1,loadingReputation:!1,reputation:null}},created:function(){var t=this;this.loginAll=this.popup.data.type===d.LOGIN_ALL,this.validAccounts.length&&(this.account=this.validAccounts[0]),this.selectIdentity(this.identities.sort((function(e,n){return n.id===t.scatter.keychain.lastUsedIdentity?1:e.id===t.scatter.keychain.lastUsedIdentity?-1:0}))[0])},computed:function(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?g(n,!0).forEach((function(e){a()(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):g(n).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}({},Object(s.d)(["scatter","balances"]),{},Object(s.c)(["identity","identities","accounts","networks","locations"]),{appData:function(){return this.popup.data.props.appData},validAccounts:function(){var t=this.accountRequirements.map((function(t){return c.a.fromJson(t).unique()}));return this.selectedAccounts.map((function(e){t.splice(t.indexOf(e.network().unique()),1)})),this.accounts.filter((function(e){return t.includes(e.networkUnique)})).sort((function(t,e){return"active"===e.authority?1:0})).reduce((function(t,e){return t.find((function(t){return e.network().unique()===t.network().unique()&&e.sendable()===t.sendable()}))||t.push(e),t}),[]).sort((function(t,e){return e.logins-t.logins}))},requestedNetworks:function(){var t=this;return this.accountRequirements.map((function(e){var n=c.a.fromJson(e);return t.networks.find((function(t){return t.unique()===n.unique()}))}))},network:function(){return c.a.fromJson(this.accountRequirements[0]||{})},savedNetwork:function(){var t=this;return this.networks.find((function(e){return e.unique()===t.network.unique()}))},payload:function(){return this.popup.payload()},isValidIdentity:function(){return this.selectedIdentity.hasRequiredFields(this.fields,this.selectedLocation)},fields:function(){return o.IdentityRequiredFields.fromJson(this.payload.fields)},personalFields:function(){return this.fields.personal},locationFields:function(){return this.fields.location},missingFields:function(){return!(!this.personalFields.length&&!this.locationFields.length)&&!this.identity.hasRequiredFields(this.fields)},identityRequirements:function(){return this.fields.personal.concat(this.fields.location).join(", ")},accountRequirements:function(){return this.fields.accounts||[]},allRequirementsMet:function(){return!this.accountRequirements.length||!!this.validAccounts.length},onlyIdentityLogin:function(){return!this.fields.personal.length&&!this.fields.location.length&&!this.fields.accounts.length}}),methods:{returnResult:function(t){this.$emit("returned",t)},selectTokenAndAccount:function(){var t=this;u.a.push(p.a.selectAccount((function(e){e&&(t.account=e)}),this.validAccounts))},login:function(){this.returnResult({identity:this.selectedIdentity,location:this.selectedLocation,accounts:this.account?[this.account]:[],missingFields:this.missingFields})},selectIdentity:function(t){this.selectedIdentity=t.clone(),t.getLocation()?this.selectedLocation=t.getLocation().clone():this.locations.length&&(this.selectedLocation=this.locations[0].clone())}}},m=(n("iTtS"),n("KHd+")),b=Object(m.a)(h,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",[n("PopOutHead",{attrs:{"id-selector":"1",identity:t.selectedIdentity},on:{closed:t.returnResult,identity:t.selectIdentity}}),t._v(" "),n("section",{staticClass:"app-login"},[n("section",[n("PopOutApp",{attrs:{app:t.appData,suffix:t.account?"will see:":""}}),t._v(" "),n("section",{staticClass:"requirements"},[!t.loginAll&&t.validAccounts.length?n("section",{staticClass:"requirement account"},[n("section",{staticClass:"boxes"},[n("section",{staticClass:"box account-selector",on:{click:t.selectTokenAndAccount}},[n("section",[n("figure",{staticClass:"name"},[t._v(t._s(t.account.sendable()))]),t._v(" "),n("figure",{staticClass:"network"},[t._v(t._s(t.account.network().name))])]),t._v(" "),n("figure",{staticClass:"chevron icon-dot-3"})])])]):t._e(),t._v(" "),!t.loginAll&&t.account&&"owner"===t.account.authority?n("section",{staticClass:"dangerous-authority"},[t._v("\n\t\t\t\t\tYou are signing in with your Owner permission. This is dangerous.\n\t\t\t\t")]):t._e(),t._v(" "),!t.loginAll&&t.account&&t.account.authorities(!1).length>1?n("section",{staticClass:"authorities"},[n("Select",{attrs:{bordered:"1",options:t.account.authorities(!1),parser:function(t){return t.authority},iconparser:function(t){return"owner"===t.authority?{class:"icon-attention red"}:""},selected:t.account},on:{selected:function(e){return t.account=e}}})],1):t.loginAll&&t.validAccounts.length?n("section",{staticClass:"requirement all-accounts"},[n("figure",{staticClass:"icon icon-network"}),t._v(" "),n("section",{staticClass:"text"},[n("label",[t._v("All accounts for:")]),t._v(" "),n("section",{staticClass:"network-accounts-list"},t._l(t.requestedNetworks,(function(e,i){return n("section",{staticClass:"network-accounts"},[n("span",{staticClass:"name"},[t._v(t._s(e.name)+" ("+t._s(e.accounts(!0).length)+" accounts)")]),t._v(" "),i+1<t.requestedNetworks.length?n("span",[t._v(",")]):t._e()])})),0)]),t._v(" "),n("figure",{staticClass:"icon bubble icon-help"}),t._v(" "),n("section",{staticClass:"bubble-explainer"},[n("b",[t._v(t._s(t.appData.name))]),t._v(" is requesting to view every account for a specified network.\n\t\t\t\t\t\tThis means that it will be able to request transaction signatures for any account that you have linked to any of the requested networks.\n\t\t\t\t\t")])]):t._e(),t._v(" "),t.onlyIdentityLogin?n("section",{staticClass:"requirement personal"},[n("figure",{staticClass:"icon icon-check"}),t._v(" "),t._m(0)]):t._e(),t._v(" "),t.requestedNetworks.length&&!t.validAccounts.length?n("section",{staticClass:"requirement no-accounts"},[t.savedNetwork?n("figure",{staticClass:"network-name"},[t._v(t._s(t.savedNetwork.name))]):t._e(),t._v(" "),t._m(1)]):t._e(),t._v(" "),t.allRequirementsMet&&t.identityRequirements.length?n("section",{staticClass:"requirement personal"},[n("figure",{staticClass:"icon icon-user"}),t._v(" "),n("figure",{staticClass:"text"},[n("label",[t._v("Personal information:")]),t._v("\n\t\t\t\t\t\t"+t._s(t.identityRequirements)+"\n\t\t\t\t\t")]),t._v(" "),n("figure",{staticClass:"icon bubble icon-help"}),t._v(" "),n("section",{staticClass:"bubble-explainer"},[n("b",[t._v(t._s(t.appData.name))]),t._v(" is requesting personal information.\n\t\t\t\t\t\tIt will only be able to see what is being requested, and nothing else you may have filled out in your Scatter identity.\n\t\t\t\t\t")])]):t._e()])],1),t._v(" "),n("section",{staticClass:"actions"},[n("Button",{attrs:{big:"1",text:"Cancel"},nativeOn:{click:function(e){return t.returnResult(null)}}}),t._v(" "),n("Button",{staticStyle:{padding:"0 20px"},attrs:{big:"1",disabled:!t.allRequirementsMet,blue:"1",text:"Allow"},nativeOn:{click:function(e){return t.login(e)}}})],1)])],1)}),[function(){var t=this.$createElement,e=this._self._c||t;return e("figure",{staticClass:"text"},[e("b",[this._v("This application isn't requesting any information or accounts.")]),this._v(" "),e("br"),this._v("\n\t\t\t\t\t\tThe only information this application will receive is basic Identity information like your username.\n\t\t\t\t\t")])},function(){var t=this.$createElement,e=this._self._c||t;return e("figure",{staticClass:"text"},[e("b",[this._v("You don't have accounts for this network")]),this._v(" "),e("br"),this._v("\n\t\t\t\t\t\tYou need to create an account before being able to use apps.\n\t\t\t\t\t")])}],!1,null,"9e37784a",null);e.default=b.exports},psvp:function(t,e,n){"use strict";n("L2JU");var i={props:["fields","identity","selectedIdentity","selectedLocation","clonedLocation"],data:function(){return{}},computed:{identityRequirements:function(){return this.personalFields.concat(this.locationFields).join(", ")},personalFields:function(){return this.fields.personal},locationFields:function(){return this.fields.location}},methods:{fieldValueFor:function(t){var e=arguments.length>1&&void 0!==arguments[1]&&arguments[1];return e?this.identity.getPropertyValueByName(t,this.selectedLocation):this.selectedIdentity.getPropertyValueByName(t,this.clonedLocation)}}},a=(n("8Yeu"),n("KHd+")),s=Object(a.a)(i,(function(){var t=this.$createElement,e=this._self._c||t;return e("section",{staticClass:"required-fields"},[e("section",{staticClass:"fields-title"},[this._v("\n\t\tRequired Identity Fields\n\t")]),this._v(" "),e("section",[e("label",[this._v("Personal information:")]),this._v(" "),e("figure",{staticClass:"text"},[this._v("\n\t\t\t"+this._s(this.identityRequirements)+"\n\t\t")])])])}),[],!1,null,"0a29a3fd",null);e.a=s.exports},q9U9:function(t,e,n){(t.exports=n("JPst")(!1)).push([t.i,".reputation[data-v-22b9e1d6]{padding:5px 12px;border-radius:40px;font-size:10px;margin-bottom:10px;margin-top:-5px;font-weight:bold;background:#f3f6f7;color:#c8c8c8}.reputation.trusted[data-v-22b9e1d6]{background:#159F00;color:#fff}.reputation.untrusted[data-v-22b9e1d6]{background:#ff0707;color:#fff}.app-details[data-v-22b9e1d6]{text-align:center;display:flex;flex-direction:column;justify-content:center;align-items:center}.app-details .logo[data-v-22b9e1d6]{display:flex;align-items:center;justify-content:center;height:100px;width:100px;border-radius:10px;padding:5px;margin-bottom:20px}.app-details .logo.border[data-v-22b9e1d6]{background:#f3f6f7;border:1px solid #dfe0e1}.app-details .logo img[data-v-22b9e1d6]{height:100%;width:100%}.app-details .logo span[data-v-22b9e1d6]{font-size:10px;font-weight:bold;color:#7a7a7a}.app-details .logo.scam[data-v-22b9e1d6]{font-size:48px;border-radius:50%;color:#ff0707;background:#f3f6f7;border:1px solid #dfe0e1;animation:pulsate 0.5s ease infinite}.app-details .name[data-v-22b9e1d6]{font-size:14px}\n",""])},ztac:function(t,e,n){var i=n("q9U9");"string"==typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);(0,n("SZ7m").default)("efe49fc8",i,!0,{})}}]);