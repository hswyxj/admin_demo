(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-3f57756f"],{"8fa9":function(e,t,r){},cc5e:function(e,t,r){"use strict";r.d(t,"e",function(){return i}),r.d(t,"d",function(){return a}),r.d(t,"c",function(){return o}),r.d(t,"a",function(){return s}),r.d(t,"f",function(){return l}),r.d(t,"b",function(){return c});var n=r("b775");function i(){return Object(n["a"])({url:"/routes",method:"get"})}function a(){return Object(n["a"])({url:"/rolelistname",method:"get"})}function o(){return Object(n["a"])({url:"/roles",method:"get"})}function s(e){return Object(n["a"])({url:"/role",method:"post",data:e})}function l(e,t){return Object(n["a"])({url:"/role/".concat(e),method:"put",data:t})}function c(e){return Object(n["a"])({url:"/role/".concat(e),method:"delete"})}},d78e:function(e,t,r){"use strict";r.r(t);var n=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"app-container"},[r("el-button",{attrs:{type:"primary"},on:{click:e.handleAddRole}},[e._v("新增角色")]),e._v(" "),r("el-table",{staticStyle:{width:"100%","margin-top":"30px"},attrs:{data:e.rolesList,border:""}},[r("el-table-column",{attrs:{align:"center",label:"角色标识",width:"220"},scopedSlots:e._u([{key:"default",fn:function(t){var r=t.row;return[e._v(e._s(r.key))]}}])}),e._v(" "),r("el-table-column",{attrs:{align:"center",label:"角色名称",width:"220"},scopedSlots:e._u([{key:"default",fn:function(t){var r=t.row;return[e._v(e._s(r.name))]}}])}),e._v(" "),r("el-table-column",{attrs:{align:"header-center",label:"描述"},scopedSlots:e._u([{key:"default",fn:function(t){var r=t.row;return[e._v(e._s(r.description))]}}])}),e._v(" "),r("el-table-column",{attrs:{label:"更新时间",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){var n=t.row;return[r("span",[e._v(e._s(e._f("parseTime")(n.update_time,"{y}-{m}-{d} {h}:{i}")))])]}}])}),e._v(" "),r("el-table-column",{attrs:{align:"center",label:"操作"},scopedSlots:e._u([{key:"default",fn:function(t){var n=t.row;return[e.checkPermission(["admin"])?r("el-button",{attrs:{type:"primary",size:"small"},on:{click:function(t){return e.handleEdit({row:n})}}},[e._v("编辑修改")]):e._e()]}}])})],1),e._v(" "),r("el-dialog",{attrs:{visible:e.dialogVisible,title:"edit"===e.dialogType?"编辑角色":"新增角色"},on:{"update:visible":function(t){e.dialogVisible=t}}},[r("el-form",{attrs:{model:e.role,"label-width":"80px","label-position":"left"}},[r("el-form-item",{attrs:{label:"角色名称"}},[r("el-input",{attrs:{placeholder:"请输入角色名称"},model:{value:e.role.name,callback:function(t){e.$set(e.role,"name",t)},expression:"role.name"}})],1),e._v(" "),r("el-form-item",{attrs:{label:"角色描述"}},[r("el-input",{attrs:{autosize:{minRows:2,maxRows:4},type:"textarea",placeholder:"请输入角色描述"},model:{value:e.role.description,callback:function(t){e.$set(e.role,"description",t)},expression:"role.description"}})],1),e._v(" "),r("el-form-item",{attrs:{label:"菜单权限"}},[r("el-tree",{ref:"tree",staticClass:"permission-tree",attrs:{"check-strictly":e.checkStrictly,data:e.routesData,props:e.defaultProps,"show-checkbox":"","node-key":"path"}})],1)],1),e._v(" "),r("div",{staticStyle:{"text-align":"right"}},[r("el-button",{attrs:{type:"danger"},on:{click:function(t){e.dialogVisible=!1}}},[e._v("取消")]),e._v(" "),r("el-button",{attrs:{type:"primary"},on:{click:e.confirmRole}},[e._v("确认")])],1)],1)],1)},i=[],a=r("cebc"),o=(r("7f7f"),r("6762"),r("2fdb"),r("75fc")),s=(r("ac6a"),r("5d73")),l=r.n(s),c=(r("96cf"),r("3b8d")),u=r("5176"),d=r.n(u),h=r("df7c"),f=r.n(h),p=r("ed08"),v=r("cc5e"),b=r("e350"),g={key:"",name:"",description:"",update_time:"",routes:[]},m={data:function(){return{role:d()({},g),routes:[],rolesList:[],dialogVisible:!1,dialogType:"new",checkStrictly:!1,defaultProps:{children:"children",label:"title"}}},computed:{routesData:function(){return this.routes}},created:function(){this.getRoutes(),this.getRoles()},methods:{checkPermission:b["a"],getRoutes:function(){var e=Object(c["a"])(regeneratorRuntime.mark(function e(){var t;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,Object(v["e"])();case 2:t=e.sent,this.serviceRoutes=t.data,this.routes=this.generateRoutes(t.data);case 5:case"end":return e.stop()}},e,this)}));function t(){return e.apply(this,arguments)}return t}(),getRoles:function(){var e=Object(c["a"])(regeneratorRuntime.mark(function e(){var t;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,Object(v["c"])();case 2:t=e.sent,this.rolesList=t.data;case 4:case"end":return e.stop()}},e,this)}));function t(){return e.apply(this,arguments)}return t}(),generateRoutes:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"/",r=[],n=!0,i=!1,a=void 0;try{for(var o,s=l()(e);!(n=(o=s.next()).done);n=!0){var c=o.value;if(!c.hidden){var u=this.onlyOneShowingChild(c.children,c);c.children&&u&&!c.alwaysShow&&(c=u);var d={path:f.a.resolve(t,c.path),title:c.meta&&c.meta.title};c.children&&(d.children=this.generateRoutes(c.children,d.path)),r.push(d)}}}catch(h){i=!0,a=h}finally{try{n||null==s.return||s.return()}finally{if(i)throw a}}return r},generateArr:function(e){var t=this,r=[];return e.forEach(function(e){if(r.push(e),e.children){var n=t.generateArr(e.children);n.length>0&&(r=[].concat(Object(o["a"])(r),Object(o["a"])(n)))}}),r},handleAddRole:function(){this.role=d()({},g),this.$refs.tree&&this.$refs.tree.setCheckedNodes([]),this.dialogType="new",this.dialogVisible=!0},handleEdit:function(e){var t=this,r=e.row;this.dialogType="edit",this.dialogVisible=!0,this.checkStrictly=!0,this.role=Object(p["a"])(r),this.$nextTick(function(){var e=t.generateRoutes(t.role.routes);t.$refs.tree.setCheckedNodes(t.generateArr(e)),t.checkStrictly=!1})},handleDelete:function(e){var t=this,r=e.$index,n=e.row;this.$confirm("确定要删除该角色吗?","Warning",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(Object(c["a"])(regeneratorRuntime.mark(function e(){return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,Object(v["b"])(n.key);case 2:t.rolesList.splice(r,1),t.$message({type:"success",message:"删除成功"});case 4:case"end":return e.stop()}},e)}))).catch(function(e){console.error(e)})},generateTree:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"/",r=arguments.length>2?arguments[2]:void 0,n=[],i=!0,a=!1,o=void 0;try{for(var s,c=l()(e);!(i=(s=c.next()).done);i=!0){var u=s.value,d=f.a.resolve(t,u.path);u.children&&(u.children=this.generateTree(u.children,d,r)),(r.includes(d)||u.children&&u.children.length>=1)&&n.push(u)}}catch(h){a=!0,o=h}finally{try{i||null==c.return||c.return()}finally{if(a)throw o}}return n},confirmRole:function(){var e=Object(c["a"])(regeneratorRuntime.mark(function e(){var t,r,n,i,a,o,s,l,c;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:if(t="edit"===this.dialogType,r=this.$refs.tree.getCheckedKeys(),this.role.routes=this.generateTree(Object(p["a"])(this.serviceRoutes),"/",r),this.role.update_time=(new Date).getTime(),!t){e.next=17;break}return e.next=7,Object(v["f"])(this.role.key,this.role);case 7:n=0;case 8:if(!(n<this.rolesList.length)){e.next=15;break}if(this.rolesList[n].key!==this.role.key){e.next=12;break}return this.rolesList.splice(n,1,d()({},this.role)),e.abrupt("break",15);case 12:n++,e.next=8;break;case 15:e.next=23;break;case 17:return e.next=19,Object(v["a"])(this.role);case 19:i=e.sent,a=i.data,this.role.key=a.key,this.rolesList.push(this.role);case 23:o=this.role,s=o.description,l=o.key,c=o.name,this.dialogVisible=!1,this.$notify({title:"成功",dangerouslyUseHTMLString:!0,message:"\n            <div>角色标识: ".concat(l,"</div>\n            <div>角色名称: ").concat(c,"</div>\n            <div>描述: ").concat(s,"</div>\n          "),type:"success"});case 26:case"end":return e.stop()}},e,this)}));function t(){return e.apply(this,arguments)}return t}(),onlyOneShowingChild:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0,r=null,n=e.filter(function(e){return!e.hidden});return 1===n.length?(r=n[0],r.path=f.a.resolve(t.path,r.path),r):0===n.length&&(r=Object(a["a"])({},t,{path:"",noShowingChildren:!0}),r)}}},y=m,k=(r("fad0"),r("2877")),w=Object(k["a"])(y,n,i,!1,null,"e0bbf632",null);t["default"]=w.exports},e350:function(e,t,r){"use strict";r.d(t,"a",function(){return i});r("6762"),r("2fdb");var n=r("4360");function i(e){if(e&&e instanceof Array&&e.length>0){var t=n["a"].getters&&n["a"].getters.roles,r=e,i=t.some(function(e){return r.includes(e)});return!!i}return console.error("need roles! Like v-permission=\"['admin','editor']\""),!1}},fad0:function(e,t,r){"use strict";var n=r("8fa9"),i=r.n(n);i.a}}]);