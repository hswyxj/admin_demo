(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-01bc"],{Y30O:function(n,t,e){"use strict";var o=e("ngPZ");e.n(o).a},c11S:function(n,t,e){"use strict";var o=e("gTgX");e.n(o).a},gTgX:function(n,t,e){},ngPZ:function(n,t,e){},ntYl:function(n,t,e){"use strict";e.r(t);var o=e("Yfch"),r={name:"Login",data:function(){return{loginForm:{username:"admin",password:"admin_password"},loginRules:{username:[{required:!0,trigger:"blur",validator:function(n,t,e){Object(o.b)(t)?e():e(new Error("请输入正确的用户名"))}}],password:[{required:!0,trigger:"blur",validator:function(n,t,e){t.length<8?e(new Error("密码不能少于8位")):e()}}]},passwordType:"password",loading:!1,showDialog:!1,redirect:void 0}},watch:{$route:{handler:function(n){this.redirect=n.query&&n.query.redirect},immediate:!0}},created:function(){},mounted:function(){""===this.loginForm.username?this.$refs.username.focus():""===this.loginForm.password&&this.$refs.password.focus()},destroyed:function(){},methods:{handleLogin:function(){var n=this;this.$refs.loginForm.validate(function(t){if(!t)return console.log("error submit!!"),!1;n.loading=!0,n.$store.dispatch("LoginByUsernamePwd",n.loginForm).then(function(){n.loading=!1,n.$router.push({path:n.redirect||"/"})}).catch(function(){n.loading=!1})})}}},s=(e("c11S"),e("Y30O"),e("KHd+")),i=Object(s.a)(r,function(){var n=this,t=n.$createElement,e=n._self._c||t;return e("div",{staticClass:"login-container"},[e("el-form",{ref:"loginForm",staticClass:"login-form",attrs:{model:n.loginForm,rules:n.loginRules,"auto-complete":"on","label-position":"left"}},[e("div",{staticClass:"title-container"},[e("h3",{staticClass:"title"},[n._v("\n        后台管理系统\n      ")])]),n._v(" "),e("el-form-item",{attrs:{prop:"username"}},[e("span",{staticClass:"svg-container"},[e("svg-icon",{attrs:{"icon-class":"user"}})],1),n._v(" "),e("el-input",{ref:"username",attrs:{placeholder:"用户账号",name:"username",type:"text","auto-complete":"on",clearable:""},model:{value:n.loginForm.username,callback:function(t){n.$set(n.loginForm,"username",t)},expression:"loginForm.username"}})],1),n._v(" "),e("el-form-item",{attrs:{prop:"password"}},[e("span",{staticClass:"svg-container"},[e("svg-icon",{attrs:{"icon-class":"password"}})],1),n._v(" "),e("el-input",{ref:"password",attrs:{placeholder:"用户密码",name:"password","auto-complete":"on",clearable:"","show-password":""},nativeOn:{keyup:function(t){return"button"in t||!n._k(t.keyCode,"enter",13,t.key,"Enter")?n.handleLogin(t):null}},model:{value:n.loginForm.password,callback:function(t){n.$set(n.loginForm,"password",t)},expression:"loginForm.password"}})],1),n._v(" "),e("el-button",{staticStyle:{width:"100%","margin-bottom":"30px"},attrs:{loading:n.loading,type:"primary"},nativeOn:{click:function(t){return t.preventDefault(),n.handleLogin(t)}}},[n._v("\n      登 录\n    ")]),n._v(" "),e("div",{staticStyle:{position:"relative"}},[e("div",{staticClass:"tips"},[e("span",[n._v("超级管理账号 : admin")]),n._v(" "),e("span",[n._v("密码 : admin_password")])]),n._v(" "),e("div",{staticClass:"tips"},[e("span",{staticStyle:{"margin-right":"18px"}},[n._v("\n          普通员工账号 : editor\n        ")]),n._v(" "),e("span",[n._v("密码 : editor_password")])])])],1)],1)},[],!1,null,"22ba7af4",null);i.options.__file="index.vue";t.default=i.exports}}]);