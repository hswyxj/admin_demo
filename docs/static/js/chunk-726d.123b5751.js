(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-726d"],{"144x":function(t,e,r){"use strict";r.r(e);var n=r("QbLZ"),o=r.n(n),i=r("m1cH"),a=r.n(i),l=r("FyfS"),s=r.n(l),c=r("14Xm"),u=r.n(c),h=r("D3Ub"),f=r.n(h),d=r("P2sY"),p=r.n(d),v=r("33yf"),y=r.n(v),g=r("7Qib"),m=r("t3Un");function w(t){return Object(m.a)({url:"/roles/"+t,method:"delete"})}function b(t){return Object(m.a)({url:"/roles",method:"post",data:t})}function x(t,e){return Object(m.a)({url:"/roles/"+t,method:"put",data:e})}var k={key:"",name:"",password:"",description:"",routes:[]},_={data:function(){return{role:p()({},k),routes:[],rolesList:[],dialogVisible:!1,dialogType:"new",checkStrictly:!1,defaultProps:{children:"children",label:"title"}}},computed:{routesData:function(){return this.routes}},created:function(){this.getRoutes(),this.getRoles()},methods:{getRoutes:function(){var t=this;return f()(u.a.mark(function e(){var r;return u.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(m.a)({url:"/routes",method:"get"});case 2:r=e.sent,t.serviceRoutes=r.data,t.routes=t.generateRoutes(r.data);case 5:case"end":return e.stop()}},e,t)}))()},getRoles:function(){var t=this;return f()(u.a.mark(function e(){var r;return u.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(m.a)({url:"/roles",method:"get"});case 2:r=e.sent,t.rolesList=r.data;case 4:case"end":return e.stop()}},e,t)}))()},generateRoutes:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"/",r=[],n=!0,o=!1,i=void 0;try{for(var a,l=s()(t);!(n=(a=l.next()).done);n=!0){var c=a.value;if(!c.hidden){var u=this.onlyOneShowingChild(c.children,c);c.children&&u&&!c.alwaysShow&&(c=u);var h={path:y.a.resolve(e,c.path),title:c.meta&&c.meta.title};c.children&&(h.children=this.generateRoutes(c.children,h.path)),r.push(h)}}}catch(t){o=!0,i=t}finally{try{!n&&l.return&&l.return()}finally{if(o)throw i}}return r},generateArr:function(t){var e=this,r=[];return t.forEach(function(t){if(r.push(t),t.children){var n=e.generateArr(t.children);n.length>0&&(r=[].concat(a()(r),a()(n)))}}),r},handleAddRole:function(){this.role=p()({},k),this.$refs.tree&&this.$refs.tree.setCheckedNodes([]),this.dialogType="new",this.dialogVisible=!0},handleEdit:function(t){var e=this;this.dialogType="edit",this.dialogVisible=!0,this.checkStrictly=!0,this.role=Object(g.a)(t.row),this.$nextTick(function(){var t=e.generateRoutes(e.role.routes);e.$refs.tree.setCheckedNodes(e.generateArr(t)),e.checkStrictly=!1})},handleDelete:function(t){var e=this,r=t.$index,n=t.row;this.$confirm("确定要删除该角色吗?","Warning",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(f()(u.a.mark(function t(){return u.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,w(n.id);case 2:e.rolesList.splice(r,1),e.$message({type:"success",message:"删除成功"});case 4:case"end":return t.stop()}},t,e)}))).catch(function(t){console.error(t)})},generateTree:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"/",r=arguments[2],n=[],o=!0,i=!1,a=void 0;try{for(var l,c=s()(t);!(o=(l=c.next()).done);o=!0){var u=l.value,h=y.a.resolve(e,u.path);u.children&&(u.children=this.generateTree(u.children,h,r)),(r.includes(h)||u.children&&u.children.length>=1)&&n.push(u)}}catch(t){i=!0,a=t}finally{try{!o&&c.return&&c.return()}finally{if(i)throw a}}return n},confirmRole:function(){var t=this;return f()(u.a.mark(function e(){var r,n,o,i,a,l,s,c,h;return u.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(r="edit"===t.dialogType,n=t.$refs.tree.getCheckedKeys(),t.role.routes=t.generateTree(Object(g.a)(t.serviceRoutes),"/",n),!r){e.next=16;break}return e.next=6,x(t.role.key,t.role);case 6:o=0;case 7:if(!(o<t.rolesList.length)){e.next=14;break}if(t.rolesList[o].key!==t.role.key){e.next=11;break}return t.rolesList.splice(o,1,p()({},t.role)),e.abrupt("break",14);case 11:o++,e.next=7;break;case 14:e.next=22;break;case 16:return e.next=18,b(t.role);case 18:i=e.sent,a=i.data,t.role.key=a,t.rolesList.push(t.role);case 22:l=t.role,s=l.description,c=l.key,h=l.name,t.dialogVisible=!1,t.$notify({title:"Success",dangerouslyUseHTMLString:!0,message:"\n            <div>Role Key: "+c+"</div>\n            <div>Role Nmae: "+h+"</div>\n            <div>Description: "+s+"</div>\n          ",type:"success"});case 25:case"end":return e.stop()}},e,t)}))()},onlyOneShowingChild:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],e=arguments[1],r=null,n=t.filter(function(t){return!t.hidden});return 1===n.length?((r=n[0]).path=y.a.resolve(e.path,r.path),r):0===n.length&&(r=o()({},e,{path:"",noShowingChildren:!0}))}}},L=(r("pyJt"),r("KHd+")),R=Object(L.a)(_,function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"app-container"},[r("el-button",{attrs:{type:"primary"},on:{click:t.handleAddRole}},[t._v("新增角色")]),t._v(" "),r("el-table",{staticStyle:{width:"100%","margin-top":"30px"},attrs:{data:t.rolesList,border:""}},[r("el-table-column",{attrs:{align:"center",label:"角色标识",width:"220"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v(t._s(e.row.key))]}}])}),t._v(" "),r("el-table-column",{attrs:{align:"center",label:"角色账号",width:"220"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v(t._s(e.row.name))]}}])}),t._v(" "),r("el-table-column",{attrs:{align:"header-center",label:"描述"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v(t._s(e.row.description))]}}])}),t._v(" "),r("el-table-column",{attrs:{align:"center",label:"操作"},scopedSlots:t._u([{key:"default",fn:function(e){return[r("el-button",{attrs:{type:"primary",size:"small"},on:{click:function(r){t.handleEdit(e)}}},[t._v("修改")]),t._v(" "),r("el-button",{attrs:{type:"danger",size:"small"},on:{click:function(r){t.handleDelete(e)}}},[t._v("删除")])]}}])})],1),t._v(" "),r("el-dialog",{attrs:{visible:t.dialogVisible,title:"edit"===t.dialogType?"Edit Role":"New Role"},on:{"update:visible":function(e){t.dialogVisible=e}}},[r("el-form",{attrs:{model:t.role,"label-width":"80px","label-position":"left"}},[r("el-form-item",{attrs:{label:"角色账号"}},[r("el-input",{attrs:{placeholder:"Role Name"},model:{value:t.role.name,callback:function(e){t.$set(t.role,"name",e)},expression:"role.name"}})],1),t._v(" "),r("el-form-item",{attrs:{label:"角色密码"}},[r("el-input",{attrs:{placeholder:"Role password"},model:{value:t.role.password,callback:function(e){t.$set(t.role,"password",e)},expression:"role.password"}})],1),t._v(" "),r("el-form-item",{attrs:{label:"角色描述"}},[r("el-input",{attrs:{autosize:{minRows:2,maxRows:4},type:"textarea",placeholder:"Role Description"},model:{value:t.role.description,callback:function(e){t.$set(t.role,"description",e)},expression:"role.description"}})],1),t._v(" "),r("el-form-item",{attrs:{label:"权限菜单"}},[r("el-tree",{ref:"tree",staticClass:"permission-tree",attrs:{"check-strictly":t.checkStrictly,data:t.routesData,props:t.defaultProps,"show-checkbox":"","node-key":"path"}})],1)],1),t._v(" "),r("div",{staticStyle:{"text-align":"right"}},[r("el-button",{attrs:{type:"danger"},on:{click:function(e){t.dialogVisible=!1}}},[t._v("取消")]),t._v(" "),r("el-button",{attrs:{type:"primary"},on:{click:t.confirmRole}},[t._v("确认")])],1)],1)],1)},[],!1,null,"0ab900d2",null);R.options.__file="role.vue";e.default=R.exports},"14Xm":function(t,e,r){t.exports=r("u938")},D3Ub:function(t,e,r){"use strict";e.__esModule=!0;var n=function(t){return t&&t.__esModule?t:{default:t}}(r("4d7F"));e.default=function(t){return function(){var e=t.apply(this,arguments);return new n.default(function(t,r){return function o(i,a){try{var l=e[i](a),s=l.value}catch(t){return void r(t)}if(!l.done)return n.default.resolve(s).then(function(t){o("next",t)},function(t){o("throw",t)});t(s)}("next")})}}},gI1N:function(t,e,r){},ls82:function(t,e){!function(e){"use strict";var r,n=Object.prototype,o=n.hasOwnProperty,i="function"==typeof Symbol?Symbol:{},a=i.iterator||"@@iterator",l=i.asyncIterator||"@@asyncIterator",s=i.toStringTag||"@@toStringTag",c="object"==typeof t,u=e.regeneratorRuntime;if(u)c&&(t.exports=u);else{(u=e.regeneratorRuntime=c?t.exports:{}).wrap=b;var h="suspendedStart",f="suspendedYield",d="executing",p="completed",v={},y={};y[a]=function(){return this};var g=Object.getPrototypeOf,m=g&&g(g(N([])));m&&m!==n&&o.call(m,a)&&(y=m);var w=L.prototype=k.prototype=Object.create(y);_.prototype=w.constructor=L,L.constructor=_,L[s]=_.displayName="GeneratorFunction",u.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===_||"GeneratorFunction"===(e.displayName||e.name))},u.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,L):(t.__proto__=L,s in t||(t[s]="GeneratorFunction")),t.prototype=Object.create(w),t},u.awrap=function(t){return{__await:t}},R(E.prototype),E.prototype[l]=function(){return this},u.AsyncIterator=E,u.async=function(t,e,r,n){var o=new E(b(t,e,r,n));return u.isGeneratorFunction(e)?o:o.next().then(function(t){return t.done?t.value:o.next()})},R(w),w[s]="Generator",w[a]=function(){return this},w.toString=function(){return"[object Generator]"},u.keys=function(t){var e=[];for(var r in t)e.push(r);return e.reverse(),function r(){for(;e.length;){var n=e.pop();if(n in t)return r.value=n,r.done=!1,r}return r.done=!0,r}},u.values=N,T.prototype={constructor:T,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=r,this.done=!1,this.delegate=null,this.method="next",this.arg=r,this.tryEntries.forEach(j),!t)for(var e in this)"t"===e.charAt(0)&&o.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=r)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function n(n,o){return l.type="throw",l.arg=t,e.next=n,o&&(e.method="next",e.arg=r),!!o}for(var i=this.tryEntries.length-1;i>=0;--i){var a=this.tryEntries[i],l=a.completion;if("root"===a.tryLoc)return n("end");if(a.tryLoc<=this.prev){var s=o.call(a,"catchLoc"),c=o.call(a,"finallyLoc");if(s&&c){if(this.prev<a.catchLoc)return n(a.catchLoc,!0);if(this.prev<a.finallyLoc)return n(a.finallyLoc)}else if(s){if(this.prev<a.catchLoc)return n(a.catchLoc,!0)}else{if(!c)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return n(a.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var n=this.tryEntries[r];if(n.tryLoc<=this.prev&&o.call(n,"finallyLoc")&&this.prev<n.finallyLoc){var i=n;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=e&&e<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=t,a.arg=e,i?(this.method="next",this.next=i.finallyLoc,v):this.complete(a)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),v},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),j(r),v}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var o=n.arg;j(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,n){return this.delegate={iterator:N(t),resultName:e,nextLoc:n},"next"===this.method&&(this.arg=r),v}}}function b(t,e,r,n){var o=e&&e.prototype instanceof k?e:k,i=Object.create(o.prototype),a=new T(n||[]);return i._invoke=function(t,e,r){var n=h;return function(o,i){if(n===d)throw new Error("Generator is already running");if(n===p){if("throw"===o)throw i;return $()}for(r.method=o,r.arg=i;;){var a=r.delegate;if(a){var l=O(a,r);if(l){if(l===v)continue;return l}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if(n===h)throw n=p,r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n=d;var s=x(t,e,r);if("normal"===s.type){if(n=r.done?p:f,s.arg===v)continue;return{value:s.arg,done:r.done}}"throw"===s.type&&(n=p,r.method="throw",r.arg=s.arg)}}}(t,r,a),i}function x(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(t){return{type:"throw",arg:t}}}function k(){}function _(){}function L(){}function R(t){["next","throw","return"].forEach(function(e){t[e]=function(t){return this._invoke(e,t)}})}function E(t){var e;this._invoke=function(r,n){function i(){return new Promise(function(e,i){!function e(r,n,i,a){var l=x(t[r],t,n);if("throw"!==l.type){var s=l.arg,c=s.value;return c&&"object"==typeof c&&o.call(c,"__await")?Promise.resolve(c.__await).then(function(t){e("next",t,i,a)},function(t){e("throw",t,i,a)}):Promise.resolve(c).then(function(t){s.value=t,i(s)},a)}a(l.arg)}(r,n,e,i)})}return e=e?e.then(i,i):i()}}function O(t,e){var n=t.iterator[e.method];if(n===r){if(e.delegate=null,"throw"===e.method){if(t.iterator.return&&(e.method="return",e.arg=r,O(t,e),"throw"===e.method))return v;e.method="throw",e.arg=new TypeError("The iterator does not provide a 'throw' method")}return v}var o=x(n,t.iterator,e.arg);if("throw"===o.type)return e.method="throw",e.arg=o.arg,e.delegate=null,v;var i=o.arg;return i?i.done?(e[t.resultName]=i.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=r),e.delegate=null,v):i:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,v)}function S(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function j(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function T(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(S,this),this.reset(!0)}function N(t){if(t){var e=t[a];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var n=-1,i=function e(){for(;++n<t.length;)if(o.call(t,n))return e.value=t[n],e.done=!1,e;return e.value=r,e.done=!0,e};return i.next=i}}return{next:$}}function $(){return{value:r,done:!0}}}(function(){return this}()||Function("return this")())},pyJt:function(t,e,r){"use strict";var n=r("gI1N");r.n(n).a},u938:function(t,e,r){var n=function(){return this}()||Function("return this")(),o=n.regeneratorRuntime&&Object.getOwnPropertyNames(n).indexOf("regeneratorRuntime")>=0,i=o&&n.regeneratorRuntime;if(n.regeneratorRuntime=void 0,t.exports=r("ls82"),o)n.regeneratorRuntime=i;else try{delete n.regeneratorRuntime}catch(t){n.regeneratorRuntime=void 0}}}]);