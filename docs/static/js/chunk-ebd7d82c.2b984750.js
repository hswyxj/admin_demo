(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-ebd7d82c"],{"12d9":function(e,t,n){},"2c92":function(e,t,n){"use strict";n.r(t);var r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"app-container"},[n("el-table",{staticStyle:{width:"100%","margin-top":"30px"},attrs:{data:e.rolechannelLists,border:""}},[n("el-table-column",{attrs:{align:"center",label:"角色归属",width:"220"},scopedSlots:e._u([{key:"default",fn:function(t){var n=t.row;return[e._v(e._s(n.role_name))]}}])}),e._v(" "),n("el-table-column",{attrs:{align:"center",label:"渠道列表"},scopedSlots:e._u([{key:"default",fn:function(t){var r=t.row;return e._l(r.channel_name,(function(t){return n("el-tag",{key:t.id,attrs:{label:t.name,value:t.name}},[e._v(e._s(t.name))])}))}}])}),e._v(" "),n("el-table-column",{attrs:{align:"header-center",label:"描述"},scopedSlots:e._u([{key:"default",fn:function(t){var n=t.row;return[e._v(e._s(n.description))]}}])}),e._v(" "),n("el-table-column",{attrs:{label:"更新时间",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){var r=t.row;return[n("span",[e._v(e._s(e._f("parseTime")(r.update_time,"{y}-{m}-{d} {h}:{i}")))])]}}])}),e._v(" "),n("el-table-column",{attrs:{align:"center",label:"操作"},scopedSlots:e._u([{key:"default",fn:function(t){var r=t.row;return[e.checkPermission(["admin"])?n("el-button",{attrs:{type:"primary",size:"small"},on:{click:function(t){return e.handleEdit({row:r})}}},[e._v("编辑修改")]):e._e()]}}])})],1),e._v(" "),n("el-dialog",{attrs:{visible:e.dialogVisible,title:"edit"===e.dialogType?"编辑渠道权限":""},on:{"update:visible":function(t){e.dialogVisible=t}}},[n("el-form",{ref:"channel",attrs:{model:e.channel,rules:e.rules,"label-width":"80px","label-position":"left"}},[n("el-form-item",{attrs:{label:"角色归属",prop:"role_name"}},[n("el-select",{attrs:{width:"220",placeholder:"角色选择",clearable:""},model:{value:e.channel.role_name,callback:function(t){e.$set(e.channel,"role_name",t)},expression:"channel.role_name"}},e._l(e.rolesnamelist,(function(e){return n("el-option",{key:e.value,attrs:{label:e,value:e}})})),1)],1),e._v(" "),n("el-form-item",{attrs:{label:"渠道列表",prop:"channel_name"}},[n("el-tree",{ref:"tree",staticClass:"permission-tree",attrs:{"check-strictly":e.checkStrictly,data:e.routesData,props:e.defaultProps,"show-checkbox":"","node-key":"id","default-expand-all":"","highlight-current":""}})],1),e._v(" "),n("el-form-item",{attrs:{label:"用户描述",prop:"description"}},[n("el-input",{attrs:{autosize:{minRows:3,maxRows:4},type:"textarea",placeholder:"请输入用户描述"},model:{value:e.channel.description,callback:function(t){e.$set(e.channel,"description",t)},expression:"channel.description"}})],1)],1),e._v(" "),n("div",{staticStyle:{"text-align":"right"}},[n("el-button",{attrs:{type:"danger"},on:{click:function(t){e.dialogVisible=!1}}},[e._v("取消")]),e._v(" "),n("el-button",{attrs:{type:"primary"},on:{click:function(t){e.confirmRole("channel")||e.getCheckedNodes()}}},[e._v("确认")])],1)],1)],1)},a=[],i=(n("96cf"),n("3b8d")),c=n("ed08"),l=n("6dfa"),o=n("cc5e"),s=n("e350"),u={id:"",role_name:"",channel_name:[],game_package_name:"",update_user:"",description:""},d={data:function(){return{checkAll:!1,channel:Object.assign({},u),rolechannelLists:[],channellist:[],rolesnamelist:[],isIndeterminate:!0,dialogVisible:!1,dialogType:"new",rules:{role_name:[{required:!0,message:"请选择角色组",trigger:"change"}],channel_name:[{type:"array",required:!0,message:"请至少选择一个渠道",trigger:"change"}]},checkStrictly:!1,defaultProps:{children:"children",label:"name"}}},computed:{routesData:function(){return this.channellist}},created:function(){this.getRolechannels(),this.getChannellist(),this.getRoleslistname()},methods:{checkPermission:s["a"],getRolechannels:function(){var e=Object(i["a"])(regeneratorRuntime.mark((function e(){var t;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,Object(l["b"])();case 2:t=e.sent,this.rolechannelLists=t.data;case 4:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}(),getChannellist:function(){var e=Object(i["a"])(regeneratorRuntime.mark((function e(){var t;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,Object(l["a"])();case 2:t=e.sent,this.channellist=t.data;case 4:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}(),getRoleslistname:function(){var e=Object(i["a"])(regeneratorRuntime.mark((function e(){var t;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,Object(o["d"])();case 2:t=e.sent,this.rolesnamelist=t.data;case 4:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}(),handleEdit:function(e){var t=this,n=e.row;this.dialogType="edit",this.dialogVisible=!0,this.checkStrictly=!0,this.channel=Object(c["a"])(n),this.$nextTick((function(){t.checkStrictly=!1,t.$refs.tree.setCheckedNodes(n.channel_name)}))},confirmRole:function(){var e=Object(i["a"])(regeneratorRuntime.mark((function e(t){var n=this;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:this.$refs[t].validate((function(e){var t="edit"===n.dialogType;if(e){if(n.channel.update_time=(new Date).getTime(),n.channel.channel_name=n.$refs.tree.getCheckedNodes(),t){Object(l["c"])(n.channel.id,n.channel);for(var r=0;r<n.rolechannelLists.length;r++)if(n.rolechannelLists[r].id===n.channel.id){n.rolechannelLists.splice(r,1,Object.assign({},n.channel));break}}var a=n.channel,i=a.description,c=a.role_name,o=a.game_package_name;n.dialogVisible=!1,n.$notify({title:"成功",dangerouslyUseHTMLString:!0,message:"\n            <div>角色归属: ".concat(c,"</div>\n            <div>包体名称: ").concat(o,"</div>\n            <div>描述: ").concat(i,"</div>\n          "),type:"success"})}}));case 1:case"end":return e.stop()}}),e,this)})));function t(t){return e.apply(this,arguments)}return t}()}},h=d,f=(n("979e"),n("2877")),m=Object(f["a"])(h,r,a,!1,null,"26c54f88",null);t["default"]=m.exports},"6dfa":function(e,t,n){"use strict";n.d(t,"b",(function(){return a})),n.d(t,"a",(function(){return i})),n.d(t,"c",(function(){return c}));var r=n("b775");function a(){return Object(r["a"])({url:"/channels",method:"get"})}function i(){return Object(r["a"])({url:"/channelnameslist",method:"get"})}function c(e,t){return Object(r["a"])({url:"/channel/".concat(e),method:"put",params:{data:t}})}},"979e":function(e,t,n){"use strict";var r=n("12d9"),a=n.n(r);a.a},cc5e:function(e,t,n){"use strict";n.d(t,"e",(function(){return a})),n.d(t,"d",(function(){return i})),n.d(t,"c",(function(){return c})),n.d(t,"a",(function(){return l})),n.d(t,"f",(function(){return o})),n.d(t,"b",(function(){return s}));var r=n("b775");function a(){return Object(r["a"])({url:"/routes",method:"get"})}function i(){return Object(r["a"])({url:"/rolelistname",method:"get"})}function c(){return Object(r["a"])({url:"/roles",method:"get"})}function l(e){return Object(r["a"])({url:"/role",method:"post",data:e})}function o(e,t){return Object(r["a"])({url:"/role/".concat(e),method:"put",data:t})}function s(e){return Object(r["a"])({url:"/role/".concat(e),method:"delete"})}},e350:function(e,t,n){"use strict";n.d(t,"a",(function(){return a}));n("6762"),n("2fdb");var r=n("4360");function a(e){if(e&&e instanceof Array&&e.length>0){var t=r["a"].getters&&r["a"].getters.roles,n=e,a=t.some((function(e){return n.includes(e)}));return!!a}return console.error("need roles! Like v-permission=\"['admin','editor']\""),!1}}}]);