(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-fe34ace6"],{2017:function(t,e,o){"use strict";var n=o("3b76"),s=o.n(n);s.a},"3b76":function(t,e,o){},"5b45":function(t,e,o){"use strict";var n=o("e98a"),s=o.n(n);s.a},"9ed6":function(t,e,o){"use strict";o.r(e);var n=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"login-container"},[o("el-form",{ref:"loginForm",staticClass:"login-form",attrs:{model:t.loginForm,rules:t.loginRules,"auto-complete":"on","label-position":"left"}},[o("div",{staticClass:"title-container"},[o("h3",{staticClass:"title"},[t._v("\n        后台管理系统\n      ")])]),t._v(" "),o("el-form-item",{attrs:{prop:"username"}},[o("span",{staticClass:"svg-container"},[o("svg-icon",{attrs:{"icon-class":"user"}})],1),t._v(" "),o("el-input",{ref:"username",attrs:{placeholder:"用户账号",name:"username",type:"text","auto-complete":"on",clearable:""},model:{value:t.loginForm.username,callback:function(e){t.$set(t.loginForm,"username",e)},expression:"loginForm.username"}})],1),t._v(" "),o("el-tooltip",{attrs:{content:"大写锁定已开启",placement:"right",manual:""},model:{value:t.capsTooltip,callback:function(e){t.capsTooltip=e},expression:"capsTooltip"}},[o("el-form-item",{attrs:{prop:"password"}},[o("span",{staticClass:"svg-container"},[o("svg-icon",{attrs:{"icon-class":"password"}})],1),t._v(" "),o("el-input",{key:t.passwordType,ref:"password",attrs:{type:t.passwordType,placeholder:"用户密码",name:"password","auto-complete":"on",clearable:"","show-password":""},on:{blur:function(e){t.capsTooltip=!1}},nativeOn:{keyup:[function(e){return t.checkCapslock(e)},function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.handleLogin(e)}]},model:{value:t.loginForm.password,callback:function(e){t.$set(t.loginForm,"password",e)},expression:"loginForm.password"}})],1)],1),t._v(" "),o("el-button",{staticStyle:{width:"100%","margin-bottom":"30px"},attrs:{loading:t.loading,type:"primary"},nativeOn:{click:function(e){return e.preventDefault(),t.handleLogin(e)}}},[t._v("\n      登 录\n    ")]),t._v(" "),o("div",{staticStyle:{position:"relative"}},[o("div",{staticClass:"tips"},[o("span",[t._v("超级管理账号 : admin")]),t._v(" "),o("span",[t._v("密码 : admin_password")])]),t._v(" "),o("div",{staticClass:"tips"},[o("span",{staticStyle:{"margin-right":"18px"}},[t._v("\n          普通员工账号 : editor\n        ")]),t._v(" "),o("span",[t._v("密码 : editor_password")])])])],1)],1)},s=[],a=o("61f7"),i={name:"Login",data:function(){var t=function(t,e,o){Object(a["b"])(e)?o():o(new Error("请输入正确的用户名"))},e=function(t,e,o){e.length<8?o(new Error("密码不能少于8位")):o()};return{loginForm:{username:"admin",password:"admin_password"},loginRules:{username:[{required:!0,trigger:"blur",validator:t}],password:[{required:!0,trigger:"blur",validator:e}]},passwordType:"password",capsTooltip:!1,loading:!1,showDialog:!1,redirect:void 0}},watch:{$route:{handler:function(t){this.redirect=t.query&&t.query.redirect},immediate:!0}},created:function(){},mounted:function(){""===this.loginForm.username?this.$refs.username.focus():""===this.loginForm.password&&this.$refs.password.focus()},destroyed:function(){},methods:{checkCapslock:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=t.shiftKey,o=t.key;o&&1===o.length&&(this.capsTooltip=!!(e&&o>="a"&&o<="z"||!e&&o>="A"&&o<="Z")),"CapsLock"===o&&!0===this.capsTooltip&&(this.capsTooltip=!1)},handleLogin:function(){var t=this;this.$refs.loginForm.validate(function(e){if(!e)return console.log("error submit!!"),!1;t.loading=!0,t.$store.dispatch("user/login",t.loginForm).then(function(){t.$router.push({path:t.redirect||"/"}),t.loading=!1}).catch(function(){t.loading=!1})})}}},r=i,l=(o("2017"),o("5b45"),o("2877")),c=Object(l["a"])(r,n,s,!1,null,"70665d5e",null);e["default"]=c.exports},e98a:function(t,e,o){}}]);