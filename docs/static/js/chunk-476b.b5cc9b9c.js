(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-476b"],{c11S:function(t,n,e){"use strict";var o=e("gTgX");e.n(o).a},gTgX:function(t,n,e){},mpwn:function(t,n,e){},ntYl:function(t,n,e){"use strict";e.r(n);var o=e("Yfch"),s={name:"Login",data:function(){return{loginForm:{username:"",password:""},loginRules:{username:[{required:!0,trigger:"blur",validator:function(t,n,e){Object(o.b)(n)?e():e(new Error("请输入正确的用户名"))}}],password:[{required:!0,trigger:"blur",validator:function(t,n,e){n.length<8?e(new Error("密码不能少于8位")):e()}}]},passwordType:"password",loading:!1,showDialog:!1,redirect:void 0}},watch:{$route:{handler:function(t){this.redirect=t.query&&t.query.redirect},immediate:!0}},created:function(){},destroyed:function(){},methods:{showPwd:function(){"password"===this.passwordType?this.passwordType="":this.passwordType="password"},handleLogin:function(){var t=this;this.$refs.loginForm.validate(function(n){if(!n)return console.log("error submit!!"),!1;t.loading=!0,t.$store.dispatch("LoginByUsernamePwd",t.loginForm).then(function(){t.loading=!1,t.$router.push({path:t.redirect||"/"})}).catch(function(){t.loading=!1})})},afterQRScan:function(){}}},r=(e("c11S"),e("sS2t"),e("KHd+")),a=Object(r.a)(s,function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"login-container"},[e("el-form",{ref:"loginForm",staticClass:"login-form",attrs:{model:t.loginForm,rules:t.loginRules,"auto-complete":"on","label-position":"left"}},[e("div",{staticClass:"title-container"},[e("h3",{staticClass:"title"},[t._v("\n        后台管理系统\n      ")])]),t._v(" "),e("el-form-item",{attrs:{prop:"username"}},[e("span",{staticClass:"svg-container"},[e("svg-icon",{attrs:{"icon-class":"user"}})],1),t._v(" "),e("el-input",{attrs:{placeholder:"用户账号",name:"username",type:"text","auto-complete":"on",clearable:""},model:{value:t.loginForm.username,callback:function(n){t.$set(t.loginForm,"username",n)},expression:"loginForm.username"}})],1),t._v(" "),e("el-form-item",{attrs:{prop:"password"}},[e("span",{staticClass:"svg-container"},[e("svg-icon",{attrs:{"icon-class":"password"}})],1),t._v(" "),e("el-input",{attrs:{placeholder:"用户密码",name:"password","auto-complete":"on",clearable:"","show-password":""},nativeOn:{keyup:function(n){return"button"in n||!t._k(n.keyCode,"enter",13,n.key,"Enter")?t.handleLogin(n):null}},model:{value:t.loginForm.password,callback:function(n){t.$set(t.loginForm,"password",n)},expression:"loginForm.password"}})],1),t._v(" "),e("el-button",{staticStyle:{width:"100%","margin-bottom":"30px"},attrs:{loading:t.loading,type:"primary"},nativeOn:{click:function(n){return n.preventDefault(),t.handleLogin(n)}}},[t._v("\n      登 录\n    ")]),t._v(" "),e("div",{staticStyle:{position:"relative"}},[e("div",{staticClass:"tips"},[e("span",[t._v("试用管理账号 : admin")]),t._v(" "),e("span",[t._v("试用密码 : admin_password")])]),t._v(" "),e("div",{staticClass:"tips"},[e("span",{staticStyle:{"margin-right":"18px"}},[t._v("\n          试用普通账号 : editor\n        ")]),t._v(" "),e("span",[t._v("试用密码 : editor_password")])])])],1)],1)},[],!1,null,"6a250050",null);a.options.__file="index.vue";n.default=a.exports},sS2t:function(t,n,e){"use strict";var o=e("mpwn");e.n(o).a}}]);