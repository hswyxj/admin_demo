(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-2522"],{"14Xm":function(e,t,n){e.exports=n("u938")},"8+UL":function(e,t,n){"use strict";var r=n("86Sc");n.n(r).a},"86Sc":function(e,t,n){},D3Ub:function(e,t,n){"use strict";t.__esModule=!0;var r=function(e){return e&&e.__esModule?e:{default:e}}(n("4d7F"));t.default=function(e){return function(){var t=e.apply(this,arguments);return new r.default(function(e,n){return function a(o,i){try{var l=t[o](i),c=l.value}catch(e){return void n(e)}if(!l.done)return r.default.resolve(c).then(function(e){a("next",e)},function(e){a("throw",e)});e(c)}("next")})}}},Fewq:function(e,t,n){"use strict";n.r(t);var r=n("14Xm"),a=n.n(r),o=n("D3Ub"),i=n.n(o),l=n("P2sY"),c=n.n(l),s=n("7Qib"),u=n("t3Un");function h(e){return Object(u.a)({url:"/channel",method:"post",params:{data:e}})}function f(e,t){return Object(u.a)({url:"/channel/"+e,method:"put",params:{data:t}})}var d={id:"",role_name:"",channel_name:[],channel_namelist:[],game_package_name:"",update_user:"",description:""},p={data:function(){return{checkAll:!1,channel:c()({},d),rolechannelList:[],isIndeterminate:!0,dialogVisible:!1,dialogType:"new",checkStrictly:!1,rules:{role_name:[{required:!0,message:"请选择角色组",trigger:"change"}],channel_name:[{type:"array",required:!0,message:"请至少选择一个渠道",trigger:"change"}]}}},created:function(){this.getRolechannels()},methods:{getRolechannels:function(){var e=this;return i()(a.a.mark(function t(){var n;return a.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Object(u.a)({url:"/channel",method:"get"});case 2:n=t.sent,e.rolechannelList=n.data;case 4:case"end":return t.stop()}},t,e)}))()},handleCheckAllChange:function(e){this.channel.channel_name=e?this.channel.channel_namelist:[],this.isIndeterminate=!1},handleCheckedchannelnamesChange:function(e){var t=e.length;this.checkAll=t===this.channel.channel_namelist.length,this.isIndeterminate=t>0&&t<this.channel.channel_namelist.length},handleEdit:function(e){this.dialogType="edit",this.dialogVisible=!0,this.channel=Object(s.a)(e.row)},confirmRole:function(e){var t=this;return i()(a.a.mark(function n(){return a.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:t.$refs[e].validate(function(e){var n="edit"===t.dialogType;if(e){if(n){t.channel.update_time=(new Date).getTime(),f(t.channel.id,t.channel);for(var r=0;r<t.rolechannelList.length;r++)if(t.rolechannelList[r].id===t.channel.id){t.rolechannelList.splice(r,1,c()({},t.channel));break}}else{var a=h(t.channel).data;t.channel.id=a,t.rolechannelList.push(t.channel)}var o=t.channel,i=o.description,l=o.role_name,s=o.channel_name,u=o.game_package_name;t.dialogVisible=!1,t.$notify({title:"成功",dangerouslyUseHTMLString:!0,message:"\n            <div>角色归属: "+l+"</div>\n            <div>渠道名称: "+s+"</div>\n            <div>包体名称: "+u+"</div>\n            <div>描述: "+i+"</div>\n          ",type:"success"})}});case 1:case"end":return n.stop()}},n,t)}))()}}},m=(n("8+UL"),n("KHd+")),v=Object(m.a)(p,function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"app-container"},[n("el-table",{staticStyle:{width:"100%","margin-top":"30px"},attrs:{data:e.rolechannelList,border:""}},[n("el-table-column",{attrs:{align:"center",label:"角色归属",width:"220"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v(e._s(t.row.role_name))]}}])}),e._v(" "),n("el-table-column",{attrs:{align:"center",label:"渠道列表"},scopedSlots:e._u([{key:"default",fn:function(t){return e._l(t.row.channel_name,function(t){return n("el-tag",{key:t,attrs:{label:t,value:t}},[e._v(e._s(t))])})}}])}),e._v(" "),n("el-table-column",{attrs:{align:"header-center",label:"描述"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v(e._s(t.row.description))]}}])}),e._v(" "),n("el-table-column",{attrs:{label:"更新时间",width:"150px",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[n("span",[e._v(e._s(e._f("parseTime")(t.row.update_time,"{y}-{m}-{d} {h}:{i}")))])]}}])}),e._v(" "),n("el-table-column",{attrs:{align:"center",label:"操作"},scopedSlots:e._u([{key:"default",fn:function(t){return[n("el-button",{attrs:{type:"primary",size:"small"},on:{click:function(n){e.handleEdit(t)}}},[e._v("编辑修改")])]}}])})],1),e._v(" "),n("el-dialog",{attrs:{visible:e.dialogVisible,title:"edit"===e.dialogType?"编辑渠道权限":""},on:{"update:visible":function(t){e.dialogVisible=t}}},[n("el-form",{ref:"channel",attrs:{model:e.channel,rules:e.rules,"label-width":"80px","label-position":"left"}},[n("el-form-item",{attrs:{label:"角色归属",prop:"role_name"}},[n("el-select",{attrs:{width:"220",placeholder:"角色选择",clearable:""},model:{value:e.channel.role_name,callback:function(t){e.$set(e.channel,"role_name",t)},expression:"channel.role_name"}},e._l(e.rolechannelList,function(e){return n("el-option",{key:e.id,attrs:{label:e.role_name,value:e.role_name}})}))],1),e._v(" "),n("el-form-item",{attrs:{label:"渠道列表",prop:"channel_name"}},[n("el-checkbox",{attrs:{indeterminate:e.isIndeterminate},on:{change:e.handleCheckAllChange},model:{value:e.checkAll,callback:function(t){e.checkAll=t},expression:"checkAll"}},[e._v("全选")]),e._v(" "),n("el-checkbox-group",{on:{change:e.handleCheckedchannelnamesChange},model:{value:e.channel.channel_name,callback:function(t){e.$set(e.channel,"channel_name",t)},expression:"channel.channel_name"}},e._l(e.channel.channel_namelist,function(e){return n("el-checkbox",{key:e,attrs:{label:e,value:e,name:"channel_name"}})}))],1),e._v(" "),n("el-form-item",{attrs:{label:"用户描述",prop:"description"}},[n("el-input",{attrs:{autosize:{minRows:3,maxRows:4},type:"textarea",placeholder:"请输入用户描述"},model:{value:e.channel.description,callback:function(t){e.$set(e.channel,"description",t)},expression:"channel.description"}})],1)],1),e._v(" "),n("div",{staticStyle:{"text-align":"right"}},[n("el-button",{attrs:{type:"danger"},on:{click:function(t){e.dialogVisible=!1}}},[e._v("取消")]),e._v(" "),n("el-button",{attrs:{type:"primary"},on:{click:function(t){e.confirmRole("channel")}}},[e._v("确认")])],1)],1)],1)},[],!1,null,"ae8ce19c",null);v.options.__file="role_channel.vue";t.default=v.exports},ls82:function(e,t){!function(t){"use strict";var n,r=Object.prototype,a=r.hasOwnProperty,o="function"==typeof Symbol?Symbol:{},i=o.iterator||"@@iterator",l=o.asyncIterator||"@@asyncIterator",c=o.toStringTag||"@@toStringTag",s="object"==typeof e,u=t.regeneratorRuntime;if(u)s&&(e.exports=u);else{(u=t.regeneratorRuntime=s?e.exports:{}).wrap=w;var h="suspendedStart",f="suspendedYield",d="executing",p="completed",m={},v={};v[i]=function(){return this};var g=Object.getPrototypeOf,y=g&&g(g(A([])));y&&y!==r&&a.call(y,i)&&(v=y);var _=L.prototype=x.prototype=Object.create(v);k.prototype=_.constructor=L,L.constructor=k,L[c]=k.displayName="GeneratorFunction",u.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===k||"GeneratorFunction"===(t.displayName||t.name))},u.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,L):(e.__proto__=L,c in e||(e[c]="GeneratorFunction")),e.prototype=Object.create(_),e},u.awrap=function(e){return{__await:e}},E(O.prototype),O.prototype[l]=function(){return this},u.AsyncIterator=O,u.async=function(e,t,n,r){var a=new O(w(e,t,n,r));return u.isGeneratorFunction(t)?a:a.next().then(function(e){return e.done?e.value:a.next()})},E(_),_[c]="Generator",_[i]=function(){return this},_.toString=function(){return"[object Generator]"},u.keys=function(e){var t=[];for(var n in e)t.push(n);return t.reverse(),function n(){for(;t.length;){var r=t.pop();if(r in e)return n.value=r,n.done=!1,n}return n.done=!0,n}},u.values=A,T.prototype={constructor:T,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=n,this.done=!1,this.delegate=null,this.method="next",this.arg=n,this.tryEntries.forEach(R),!e)for(var t in this)"t"===t.charAt(0)&&a.call(this,t)&&!isNaN(+t.slice(1))&&(this[t]=n)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var t=this;function r(r,a){return l.type="throw",l.arg=e,t.next=r,a&&(t.method="next",t.arg=n),!!a}for(var o=this.tryEntries.length-1;o>=0;--o){var i=this.tryEntries[o],l=i.completion;if("root"===i.tryLoc)return r("end");if(i.tryLoc<=this.prev){var c=a.call(i,"catchLoc"),s=a.call(i,"finallyLoc");if(c&&s){if(this.prev<i.catchLoc)return r(i.catchLoc,!0);if(this.prev<i.finallyLoc)return r(i.finallyLoc)}else if(c){if(this.prev<i.catchLoc)return r(i.catchLoc,!0)}else{if(!s)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return r(i.finallyLoc)}}}},abrupt:function(e,t){for(var n=this.tryEntries.length-1;n>=0;--n){var r=this.tryEntries[n];if(r.tryLoc<=this.prev&&a.call(r,"finallyLoc")&&this.prev<r.finallyLoc){var o=r;break}}o&&("break"===e||"continue"===e)&&o.tryLoc<=t&&t<=o.finallyLoc&&(o=null);var i=o?o.completion:{};return i.type=e,i.arg=t,o?(this.method="next",this.next=o.finallyLoc,m):this.complete(i)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),m},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var n=this.tryEntries[t];if(n.finallyLoc===e)return this.complete(n.completion,n.afterLoc),R(n),m}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var n=this.tryEntries[t];if(n.tryLoc===e){var r=n.completion;if("throw"===r.type){var a=r.arg;R(n)}return a}}throw new Error("illegal catch attempt")},delegateYield:function(e,t,r){return this.delegate={iterator:A(e),resultName:t,nextLoc:r},"next"===this.method&&(this.arg=n),m}}}function w(e,t,n,r){var a=t&&t.prototype instanceof x?t:x,o=Object.create(a.prototype),i=new T(r||[]);return o._invoke=function(e,t,n){var r=h;return function(a,o){if(r===d)throw new Error("Generator is already running");if(r===p){if("throw"===a)throw o;return C()}for(n.method=a,n.arg=o;;){var i=n.delegate;if(i){var l=j(i,n);if(l){if(l===m)continue;return l}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if(r===h)throw r=p,n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);r=d;var c=b(e,t,n);if("normal"===c.type){if(r=n.done?p:f,c.arg===m)continue;return{value:c.arg,done:n.done}}"throw"===c.type&&(r=p,n.method="throw",n.arg=c.arg)}}}(e,n,i),o}function b(e,t,n){try{return{type:"normal",arg:e.call(t,n)}}catch(e){return{type:"throw",arg:e}}}function x(){}function k(){}function L(){}function E(e){["next","throw","return"].forEach(function(t){e[t]=function(e){return this._invoke(t,e)}})}function O(e){var t;this._invoke=function(n,r){function o(){return new Promise(function(t,o){!function t(n,r,o,i){var l=b(e[n],e,r);if("throw"!==l.type){var c=l.arg,s=c.value;return s&&"object"==typeof s&&a.call(s,"__await")?Promise.resolve(s.__await).then(function(e){t("next",e,o,i)},function(e){t("throw",e,o,i)}):Promise.resolve(s).then(function(e){c.value=e,o(c)},i)}i(l.arg)}(n,r,t,o)})}return t=t?t.then(o,o):o()}}function j(e,t){var r=e.iterator[t.method];if(r===n){if(t.delegate=null,"throw"===t.method){if(e.iterator.return&&(t.method="return",t.arg=n,j(e,t),"throw"===t.method))return m;t.method="throw",t.arg=new TypeError("The iterator does not provide a 'throw' method")}return m}var a=b(r,e.iterator,t.arg);if("throw"===a.type)return t.method="throw",t.arg=a.arg,t.delegate=null,m;var o=a.arg;return o?o.done?(t[e.resultName]=o.value,t.next=e.nextLoc,"return"!==t.method&&(t.method="next",t.arg=n),t.delegate=null,m):o:(t.method="throw",t.arg=new TypeError("iterator result is not an object"),t.delegate=null,m)}function S(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function R(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function T(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(S,this),this.reset(!0)}function A(e){if(e){var t=e[i];if(t)return t.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var r=-1,o=function t(){for(;++r<e.length;)if(a.call(e,r))return t.value=e[r],t.done=!1,t;return t.value=n,t.done=!0,t};return o.next=o}}return{next:C}}function C(){return{value:n,done:!0}}}(function(){return this}()||Function("return this")())},u938:function(e,t,n){var r=function(){return this}()||Function("return this")(),a=r.regeneratorRuntime&&Object.getOwnPropertyNames(r).indexOf("regeneratorRuntime")>=0,o=a&&r.regeneratorRuntime;if(r.regeneratorRuntime=void 0,e.exports=n("ls82"),a)r.regeneratorRuntime=o;else try{delete r.regeneratorRuntime}catch(e){r.regeneratorRuntime=void 0}}}]);