(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-7a4d696f"],{1912:function(e,n,t){"use strict";var o=t("827a"),r=t.n(o);r.a},2017:function(e,n,t){"use strict";var o=t("3b76"),r=t.n(o);r.a},"3b76":function(e,n,t){},"827a":function(e,n,t){},"9ed6":function(e,n,t){"use strict";t.r(n);var o=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",{staticClass:"login-container"},[t("el-form",{ref:"loginForm",staticClass:"login-form",attrs:{model:e.loginForm,rules:e.loginRules,"auto-complete":"on","label-position":"left"}},[t("div",{staticClass:"title-container"},[t("h3",{staticClass:"title"},[e._v("\n        后台管理系统\n      ")])]),e._v(" "),t("el-form-item",{attrs:{prop:"username"}},[t("span",{staticClass:"svg-container"},[t("svg-icon",{attrs:{"icon-class":"user"}})],1),e._v(" "),t("el-input",{ref:"username",attrs:{placeholder:"用户账号",name:"username",type:"text","auto-complete":"on",clearable:""},model:{value:e.loginForm.username,callback:function(n){e.$set(e.loginForm,"username",n)},expression:"loginForm.username"}})],1),e._v(" "),t("el-form-item",{attrs:{prop:"password"}},[t("span",{staticClass:"svg-container"},[t("svg-icon",{attrs:{"icon-class":"password"}})],1),e._v(" "),t("el-input",{ref:"password",attrs:{placeholder:"用户密码",name:"password","auto-complete":"on",clearable:"","show-password":""},nativeOn:{keyup:function(n){return!n.type.indexOf("key")&&e._k(n.keyCode,"enter",13,n.key,"Enter")?null:e.handleLogin(n)}},model:{value:e.loginForm.password,callback:function(n){e.$set(e.loginForm,"password",n)},expression:"loginForm.password"}})],1),e._v(" "),t("el-button",{staticStyle:{width:"100%","margin-bottom":"30px"},attrs:{loading:e.loading,type:"primary"},nativeOn:{click:function(n){return n.preventDefault(),e.handleLogin(n)}}},[e._v("\n      登 录\n    ")]),e._v(" "),t("div",{staticStyle:{position:"relative"}},[t("div",{staticClass:"tips"},[t("span",[e._v("超级管理账号 : admin")]),e._v(" "),t("span",[e._v("密码 : admin_password")])]),e._v(" "),t("div",{staticClass:"tips"},[t("span",{staticStyle:{"margin-right":"18px"}},[e._v("\n          普通员工账号 : editor\n        ")]),e._v(" "),t("span",[e._v("密码 : editor_password")])])])],1)],1)},r=[],s=t("61f7"),a={name:"Login",data:function(){var e=function(e,n,t){Object(s["b"])(n)?t():t(new Error("请输入正确的用户名"))},n=function(e,n,t){n.length<8?t(new Error("密码不能少于8位")):t()};return{loginForm:{username:"admin",password:"admin_password"},loginRules:{username:[{required:!0,trigger:"blur",validator:e}],password:[{required:!0,trigger:"blur",validator:n}]},passwordType:"password",loading:!1,showDialog:!1,redirect:void 0}},watch:{$route:{handler:function(e){this.redirect=e.query&&e.query.redirect},immediate:!0}},created:function(){},mounted:function(){""===this.loginForm.username?this.$refs.username.focus():""===this.loginForm.password&&this.$refs.password.focus()},destroyed:function(){},methods:{handleLogin:function(){var e=this;this.$refs.loginForm.validate(function(n){if(!n)return console.log("error submit!!"),!1;e.loading=!0,e.$store.dispatch("user/login",e.loginForm).then(function(){e.$router.push({path:e.redirect||"/"}),e.loading=!1}).catch(function(){e.loading=!1})})}}},i=a,l=(t("2017"),t("1912"),t("2877")),c=Object(l["a"])(i,o,r,!1,null,"03013512",null);n["default"]=c.exports}}]);