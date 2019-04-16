(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-0d0674ee"],{"1d4e":function(e,t,r){"use strict";r.r(t);var n=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"app-container"},[r("el-button",{attrs:{type:"primary"},on:{click:e.handleAddRole}},[e._v("新增用户")]),e._v(" "),r("el-table",{staticStyle:{width:"100%","margin-top":"30px"},attrs:{data:e.rolesList,border:""}},[r("el-table-column",{attrs:{align:"center",label:"角色归属",width:"220"},scopedSlots:e._u([{key:"default",fn:function(t){var r=t.row;return[e._v(e._s(r.name))]}}])}),e._v(" "),r("el-table-column",{attrs:{align:"center",label:"用户账号",width:"220"},scopedSlots:e._u([{key:"default",fn:function(t){var r=t.row;return[e._v(e._s(r.username))]}}])}),e._v(" "),r("el-table-column",{attrs:{align:"center",label:"手机号码",width:"220"},scopedSlots:e._u([{key:"default",fn:function(t){var r=t.row;return[e._v(e._s(r.iphonenum))]}}])}),e._v(" "),r("el-table-column",{attrs:{align:"center",label:"用户邮箱",width:"220"},scopedSlots:e._u([{key:"default",fn:function(t){var r=t.row;return[e._v(e._s(r.email))]}}])}),e._v(" "),r("el-table-column",{attrs:{align:"header-center",label:"描述"},scopedSlots:e._u([{key:"default",fn:function(t){var r=t.row;return[e._v(e._s(r.description))]}}])}),e._v(" "),r("el-table-column",{attrs:{label:"更新时间",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){var n=t.row;return[r("span",[e._v(e._s(e._f("parseTime")(n.update_time,"{y}-{m}-{d} {h}:{i}")))])]}}])}),e._v(" "),r("el-table-column",{attrs:{align:"center",label:"操作"},scopedSlots:e._u([{key:"default",fn:function(t){var n=t.row;return[r("el-button",{attrs:{type:"primary",size:"small"},on:{click:function(t){return e.handleEdit({row:n})}}},[e._v("编辑修改")]),e._v(" "),r("el-button",{attrs:{type:"danger",size:"small"},on:{click:function(t){return e.handleDelete({row:n})}}},[e._v("删除")])]}}])})],1),e._v(" "),r("el-dialog",{attrs:{visible:e.dialogVisible,title:"edit"===e.dialogType?"编辑用户资料":"新增用户"},on:{"update:visible":function(t){e.dialogVisible=t}}},[r("el-form",{ref:"role",attrs:{model:e.role,rules:e.rules,"label-width":"80px","label-position":"left"}},[r("el-form-item",{attrs:{label:"角色归属",prop:"name"}},[r("el-select",{attrs:{placeholder:"角色选择"},model:{value:e.role.name,callback:function(t){e.$set(e.role,"name",t)},expression:"role.name"}},e._l(e.rolelistname,function(e){return r("el-option",{key:e,attrs:{label:e,value:e}})}),1)],1),e._v(" "),r("el-form-item",{attrs:{label:"用户账号",prop:"username"}},[r("el-input",{attrs:{placeholder:"请输入用户账号",clearable:""},model:{value:e.role.username,callback:function(t){e.$set(e.role,"username",t)},expression:"role.username"}})],1),e._v(" "),r("el-form-item",{attrs:{label:"用户密码",prop:"password"}},[r("el-input",{attrs:{placeholder:"请输入用户密码","show-password":"",clearable:""},model:{value:e.role.password,callback:function(t){e.$set(e.role,"password",t)},expression:"role.password"}})],1),e._v(" "),r("el-form-item",{attrs:{label:"手机号码",prop:"iphonenum"}},[r("el-input",{attrs:{placeholder:"请输入用户手机号码",oninput:"if(value.length>11)value=value.slice(0,11)",clearable:""},model:{value:e.role.iphonenum,callback:function(t){e.$set(e.role,"iphonenum",e._n(t))},expression:"role.iphonenum"}})],1),e._v(" "),r("el-form-item",{attrs:{label:"用户邮箱",prop:"email"}},[r("el-input",{attrs:{placeholder:"请输入用户邮箱",clearable:""},model:{value:e.role.email,callback:function(t){e.$set(e.role,"email",t)},expression:"role.email"}})],1),e._v(" "),r("el-form-item",{attrs:{label:"用户描述"}},[r("el-input",{attrs:{autosize:{minRows:3,maxRows:4},type:"textarea",placeholder:"请输入用户描述"},model:{value:e.role.description,callback:function(t){e.$set(e.role,"description",t)},expression:"role.description"}})],1)],1),e._v(" "),r("div",{staticStyle:{"text-align":"right"}},[r("el-button",{attrs:{type:"danger"},on:{click:function(t){e.dialogVisible=!1}}},[e._v("取消")]),e._v(" "),r("el-button",{attrs:{type:"primary"},on:{click:function(t){return e.confirmRole("role")}}},[e._v("确认")])],1)],1)],1)},a=[],l=(r("7f7f"),r("96cf"),r("3b8d")),i=r("5176"),o=r.n(i),s=(r("6b54"),r("ed08")),c=r("cc5e"),u={key:"",name:"",username:"",password:"",email:"",update_time:"",description:""},d={data:function(){var e=function(e,t,r){if(!t)return r(new Error("请输入用户手机号码"));setTimeout(function(){11!==t.toString().length?r(new Error("用户手机号码必须11位")):r()},1e3)},t=function(e,t,r){t?(t.toString().length<8&&r(new Error("用户密码必须8位以上")),r()):r(new Error("请输入用户密码"))};return{role:o()({},u),rolesList:[],rolelistname:[],dialogVisible:!1,dialogType:"new",checkStrictly:!1,rules:{name:[{required:!0,message:"请选择角色组",trigger:"change"}],username:[{required:!0,message:"请输入用户账号",trigger:"blur"},{min:4,message:"用户账号长度 4 个字符以上",trigger:"blur"}],password:[{validator:t,required:!0,trigger:"blur"}],iphonenum:[{validator:e,required:!0,trigger:"blur"},{type:"number",message:"手机号码必须为数字值"}],email:[{required:!0,message:"请输入用户邮箱",trigger:"blur"}]}}},created:function(){this.getRoles(),this.getRoleslistname()},methods:{getRoles:function(){var e=Object(l["a"])(regeneratorRuntime.mark(function e(){var t;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,Object(c["c"])();case 2:t=e.sent,this.rolesList=t.data;case 4:case"end":return e.stop()}},e,this)}));function t(){return e.apply(this,arguments)}return t}(),getRoleslistname:function(){var e=Object(l["a"])(regeneratorRuntime.mark(function e(){var t;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,Object(c["d"])();case 2:t=e.sent,this.rolelistname=t.data;case 4:case"end":return e.stop()}},e,this)}));function t(){return e.apply(this,arguments)}return t}(),handleAddRole:function(){var e=this;this.role=o()({},u),this.dialogType="new",this.dialogVisible=!0,this.$nextTick(function(){e.$refs["role"].clearValidate()})},handleEdit:function(e){var t=e.row;this.dialogType="edit",this.dialogVisible=!0,this.role=Object(s["a"])(t)},handleDelete:function(e){var t=this,r=e.$index,n=e.row;this.$confirm("确定要删除该角色吗?","Warning",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(Object(l["a"])(regeneratorRuntime.mark(function e(){return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,Object(c["b"])(n.key);case 2:t.rolesList.splice(r,1),t.$message({type:"success",message:"删除成功"});case 4:case"end":return e.stop()}},e)}))).catch(function(e){console.error(e)})},handleUpdate:function(){var e=Object(l["a"])(regeneratorRuntime.mark(function e(){var t,r,n,a;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:if(t="edit"===this.dialogType,this.role.update_time=(new Date).getTime(),!t){e.next=15;break}return e.next=5,Object(c["f"])(this.role.key,this.role);case 5:r=0;case 6:if(!(r<this.rolesList.length)){e.next=13;break}if(this.rolesList[r].key!==this.role.key){e.next=10;break}return this.rolesList.splice(r,1,o()({},this.role)),e.abrupt("break",13);case 10:r++,e.next=6;break;case 13:e.next=22;break;case 15:return Object(c["a"])(this.role),e.next=18,Object(c["a"])(this.role);case 18:n=e.sent,a=n.data,this.role.key=a.key,this.rolesList.push(this.role);case 22:case"end":return e.stop()}},e,this)}));function t(){return e.apply(this,arguments)}return t}(),confirmRole:function(e){var t=this;this.$refs[e].validate(function(e){if(e){t.handleUpdate();var r=t.role,n=r.description,a=r.name,l=r.username;t.dialogVisible=!1,t.$notify({title:"成功",dangerouslyUseHTMLString:!0,message:"\n            <div>角色归属: ".concat(a,"</div>\n            <div>角色名称: ").concat(l,"</div>\n            <div>描述: ").concat(n,"</div>\n          "),type:"success"})}})}}},p=d,m=(r("bb4e"),r("2877")),f=Object(m["a"])(p,n,a,!1,null,"a7415ad8",null);t["default"]=f.exports},"3d9e":function(e,t,r){},5176:function(e,t,r){e.exports=r("51b6")},bb4e:function(e,t,r){"use strict";var n=r("3d9e"),a=r.n(n);a.a},cc5e:function(e,t,r){"use strict";r.d(t,"e",function(){return a}),r.d(t,"d",function(){return l}),r.d(t,"c",function(){return i}),r.d(t,"a",function(){return o}),r.d(t,"f",function(){return s}),r.d(t,"b",function(){return c});var n=r("b775");function a(){return Object(n["a"])({url:"/routes",method:"get"})}function l(){return Object(n["a"])({url:"/rolelistname",method:"get"})}function i(){return Object(n["a"])({url:"/roles",method:"get"})}function o(e){return Object(n["a"])({url:"/role",method:"post",data:e})}function s(e,t){return Object(n["a"])({url:"/role/".concat(e),method:"put",data:t})}function c(e){return Object(n["a"])({url:"/role/".concat(e),method:"delete"})}}}]);