(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-5ef3"],{JCNI:function(t,e,a){"use strict";a.d(e,"c",function(){return n}),a.d(e,"d",function(){return l}),a.d(e,"b",function(){return s}),a.d(e,"e",function(){return o}),a.d(e,"a",function(){return r});var i=a("t3Un");function n(t){return Object(i.a)({url:"/article/list",method:"get",params:t})}function l(t){return Object(i.a)({url:"/article/pv",method:"get",params:{pv:t}})}function s(t){return Object(i.a)({url:"/article/create",method:"post",data:t})}function o(t){return Object(i.a)({url:"/article/update",method:"post",data:t})}function r(t){return Object(i.a)({url:"/article/batchremove",method:"delete",data:t})}},Lcw6:function(t,e,a){"use strict";var i=a("qULk");a.n(i).a},jUE0:function(t,e,a){},qULk:function(t,e,a){},uL9R:function(t,e,a){"use strict";a.r(e);var i=a("FyfS"),n=a.n(i),l=a("P2sY"),s=a.n(l),o=a("JCNI"),r=(a("jUE0"),"@@wavesContext");function c(t,e){function a(a){var i=s()({},e.value),n=s()({ele:t,type:"hit",color:"rgba(0, 0, 0, 0.15)"},i),l=n.ele;if(l){l.style.position="relative",l.style.overflow="hidden";var o=l.getBoundingClientRect(),r=l.querySelector(".waves-ripple");switch(r?r.className="waves-ripple":((r=document.createElement("span")).className="waves-ripple",r.style.height=r.style.width=Math.max(o.width,o.height)+"px",l.appendChild(r)),n.type){case"center":r.style.top=o.height/2-r.offsetHeight/2+"px",r.style.left=o.width/2-r.offsetWidth/2+"px";break;default:r.style.top=(a.pageY-o.top-r.offsetHeight/2-document.documentElement.scrollTop||document.body.scrollTop)+"px",r.style.left=(a.pageX-o.left-r.offsetWidth/2-document.documentElement.scrollLeft||document.body.scrollLeft)+"px"}return r.style.backgroundColor=n.color,r.className="waves-ripple z-active",!1}}return t[r]?t[r].removeHandle=a:t[r]={removeHandle:a},a}var u={bind:function(t,e){t.addEventListener("click",c(t,e),!1)},update:function(t,e){t.removeEventListener("click",t[r].removeHandle,!1),t.addEventListener("click",c(t,e),!1)},unbind:function(t){t.removeEventListener("click",t[r].removeHandle,!1),t[r]=null,delete t[r]}},d=function(t){t.directive("waves",u)};window.Vue&&(window.waves=u,Vue.use(d)),u.install=d;var p=u,m=a("7Qib");Math.easeInOutQuad=function(t,e,a,i){return(t/=i/2)<1?a/2*t*t+e:-a/2*(--t*(t-2)-1)+e};var f=window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||function(t){window.setTimeout(t,1e3/60)};function h(t,e,a){var i=document.documentElement.scrollTop||document.body.parentNode.scrollTop||document.body.scrollTop,n=t-i,l=0;e=void 0===e?500:e;!function t(){l+=20,function(t){document.documentElement.scrollTop=t,document.body.parentNode.scrollTop=t,document.body.scrollTop=t}(Math.easeInOutQuad(l,i,n,e)),l<e?f(t):a&&"function"==typeof a&&a()}()}var v={name:"Pagination",props:{total:{required:!0,type:Number},page:{type:Number,default:1},limit:{type:Number,default:20},pageSizes:{type:Array,default:function(){return[10,20,30,50]}},layout:{type:String,default:"total, sizes, prev, pager, next, jumper"},background:{type:Boolean,default:!0},autoScroll:{type:Boolean,default:!0},hidden:{type:Boolean,default:!1}},computed:{currentPage:{get:function(){return this.page},set:function(t){this.$emit("update:page",t)}},pageSize:{get:function(){return this.limit},set:function(t){this.$emit("update:limit",t)}}},methods:{handleSizeChange:function(t){this.$emit("pagination",{page:this.currentPage,limit:t}),this.autoScroll&&h(0,800)},handleCurrentChange:function(t){this.$emit("pagination",{page:t,limit:this.pageSize}),this.autoScroll&&h(0,800)}}},g=(a("Lcw6"),a("KHd+")),y=Object(g.a)(v,function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"pagination-container",class:{hidden:t.hidden}},[a("el-pagination",t._b({attrs:{background:t.background,"current-page":t.currentPage,"page-size":t.pageSize,layout:t.layout,"page-sizes":t.pageSizes,total:t.total},on:{"update:currentPage":function(e){t.currentPage=e},"update:pageSize":function(e){t.pageSize=e},"size-change":t.handleSizeChange,"current-change":t.handleCurrentChange}},"el-pagination",t.$attrs,!1))],1)},[],!1,null,"331ed7d4",null);y.options.__file="index.vue";var b=y.exports,w=[{key:"published",display_name:"已发布"},{key:"draft",display_name:"草稿"},{key:"deleted",display_name:"已删除"}],_=w.reduce(function(t,e){return t[e.key]=e.display_name,t},{}),k={name:"ComplexTable",components:{Pagination:b},directives:{waves:p},filters:{statusFilter:function(t){return _[t]}},data:function(){return{tableKey:0,list:[],total:0,sels:[],listLoading:!0,listQuery:{page:1,limit:20,importance:void 0,title:void 0,status:void 0,sort:"+id"},importanceOptions:[1,2,3],calendarStatusOptions:w,sortOptions:[{label:"ID正序",key:"+id"},{label:"ID倒序",key:"-id"}],showReviewer:!0,temp:{id:void 0,importance:1,remark:"",timestamp:new Date,title:"",status:"published"},dialogFormVisible:!1,dialogStatus:"",textMap:{update:"编辑修改页",create:"新增数据页"},dialogPvVisible:!1,pvData:[],rules:{timestamp:[{type:"date",required:!0,message:"请选择时间",trigger:"change"}],title:[{required:!0,message:"请输入标题",trigger:"blur"}]},downloadLoading:!1}},created:function(){this.getList()},methods:{getList:function(){var t=this;this.listLoading=!0,Object(o.c)(this.listQuery).then(function(e){t.list=e.data.items,t.total=e.data.total,t.mockLists=e.data.mockList,setTimeout(function(){t.listLoading=!1},1500)})},handleFilter:function(){this.getList()},handleModifyStatus:function(t,e){this.$message({message:"操作成功",type:"success"}),t.status=e},sortChange:function(t){var e=t.prop,a=t.order;"id"===e&&this.sortByID(a)},sortByID:function(t){this.listQuery.sort="ascending"===t?"+id":"-id",this.handleFilter()},resetTemp:function(){this.temp={id:void 0,importance:1,remark:"",timestamp:new Date,title:"",status:"published"}},handleCreate:function(){var t=this;this.resetTemp(),this.dialogStatus="create",this.dialogFormVisible=!0,this.$nextTick(function(){t.$refs.dataForm.clearValidate()})},createData:function(){var t=this;this.$refs.dataForm.validate(function(e){e&&(t.temp.id=parseInt(100*Math.random())+1024,t.temp.author="test",Object(o.b)(t.temp).then(function(){t.list.unshift(t.temp),t.dialogFormVisible=!1,t.$notify({title:"成功",message:"创建成功",type:"success",duration:2e3})}))})},handleUpdate:function(t){var e=this;this.temp=s()({},t),this.temp.timestamp=new Date(this.temp.timestamp),this.dialogStatus="update",this.dialogFormVisible=!0,this.$nextTick(function(){e.$refs.dataForm.clearValidate()})},updateData:function(){var t=this;this.$refs.dataForm.validate(function(e){if(e){var a=s()({},t.temp);a.timestamp=+new Date(a.timestamp),Object(o.e)(a).then(function(){var e=!0,a=!1,i=void 0;try{for(var l,s=n()(t.list);!(e=(l=s.next()).done);e=!0){var o=l.value;if(o.id===t.temp.id){var r=t.list.indexOf(o);t.list.splice(r,1,t.temp);break}}}catch(t){a=!0,i=t}finally{try{!e&&s.return&&s.return()}finally{if(a)throw i}}t.dialogFormVisible=!1,t.$notify({title:"成功",message:"更新成功",type:"success",duration:2e3})})}})},handleDelete:function(t){this.$notify({title:"成功",message:"删除成功",type:"success",duration:2e3});var e=this.list.indexOf(t);this.list.splice(e,1)},handleFetchPv:function(t){var e=this;Object(o.d)(t).then(function(t){e.pvData=t.data.pvData,e.dialogPvVisible=!0})},selsChange:function(t){this.sels=t},batchRemove:function(){var t=this,e=this.sels.map(function(t){return t.id}).toString();this.$confirm("确认删除选中记录吗？","提示",{type:"warning"}).then(function(){var a={ids:e};Object(o.a)(a).then(function(e){t.$message({message:"删除成功",type:"success",duration:2e3}),t.getList()})}).catch(function(){})},handleDownload:function(){var t=this,e=(new Date).getTime(),i=Object(m.d)(e,"{y}-{m}-{d} {h}:{i}");this.downloadLoading=!0,Promise.all([a.e("chunk-545b"),a.e("chunk-4cd6")]).then(a.bind(null,"S/jZ")).then(function(e){var a=t.formatJson(["timestamp","title","author","reviewer","importance","status"],t.mockLists);e.export_json_to_excel({header:["时间","标题","作者","审核人","重要性","状态"],data:a,filename:i+"excel模板"}),t.downloadLoading=!1})},formatJson:function(t,e){return e.map(function(e){return t.map(function(t){return"timestamp"===t?Object(m.d)(e[t]):e[t]})})}}},x=Object(g.a)(k,function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"app-container"},[a("div",{staticClass:"filter-container"},[a("el-input",{staticClass:"filter-item",staticStyle:{width:"200px"},attrs:{placeholder:"标题"},nativeOn:{keyup:function(e){return"button"in e||!t._k(e.keyCode,"enter",13,e.key,"Enter")?t.handleFilter(e):null}},model:{value:t.listQuery.title,callback:function(e){t.$set(t.listQuery,"title",e)},expression:"listQuery.title"}}),t._v(" "),a("el-select",{staticClass:"filter-item",staticStyle:{width:"90px"},attrs:{placeholder:"重要性",clearable:""},model:{value:t.listQuery.importance,callback:function(e){t.$set(t.listQuery,"importance",e)},expression:"listQuery.importance"}},t._l(t.importanceOptions,function(t){return a("el-option",{key:t,attrs:{label:t,value:t}})})),t._v(" "),a("el-select",{staticClass:"filter-item",staticStyle:{width:"130px"},attrs:{placeholder:"状态",clearable:""},model:{value:t.listQuery.status,callback:function(e){t.$set(t.listQuery,"status",e)},expression:"listQuery.status"}},t._l(t.calendarStatusOptions,function(t){return a("el-option",{key:t.key,attrs:{label:t.display_name,value:t.key}})})),t._v(" "),a("el-select",{staticClass:"filter-item",staticStyle:{width:"140px"},on:{change:t.handleFilter},model:{value:t.listQuery.sort,callback:function(e){t.$set(t.listQuery,"sort",e)},expression:"listQuery.sort"}},t._l(t.sortOptions,function(t){return a("el-option",{key:t.key,attrs:{label:t.label,value:t.key}})})),t._v(" "),a("el-button",{directives:[{name:"waves",rawName:"v-waves"}],staticClass:"filter-item",attrs:{type:"primary",icon:"el-icon-search"},on:{click:t.handleFilter}},[t._v("搜索")]),t._v(" "),a("el-button",{staticClass:"filter-item",staticStyle:{"margin-left":"10px"},attrs:{type:"primary",icon:"el-icon-edit"},on:{click:t.handleCreate}},[t._v("新增")]),t._v(" "),a("el-button",{directives:[{name:"waves",rawName:"v-waves"}],staticClass:"filter-item",attrs:{loading:t.downloadLoading,type:"primary",icon:"el-icon-download"},on:{click:t.handleDownload}},[t._v("导出")]),t._v(" "),a("el-checkbox",{staticClass:"filter-item",staticStyle:{"margin-left":"15px"},on:{change:function(e){t.tableKey=t.tableKey+1}},model:{value:t.showReviewer,callback:function(e){t.showReviewer=e},expression:"showReviewer"}},[t._v("审核人")])],1),t._v(" "),a("el-table",{directives:[{name:"loading",rawName:"v-loading",value:t.listLoading,expression:"listLoading"}],key:t.tableKey,staticStyle:{width:"100%"},attrs:{data:t.list,border:"",fit:"","highlight-current-row":""},on:{"sort-change":t.sortChange,"selection-change":t.selsChange}},[a("el-table-column",{attrs:{type:"selection",width:"55"}}),t._v(" "),a("el-table-column",{attrs:{label:"序号",prop:"id",sortable:"custom",align:"center",width:"65"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("span",[t._v(t._s(e.row.id))])]}}])}),t._v(" "),a("el-table-column",{attrs:{label:"时间",width:"150px",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("span",[t._v(t._s(t._f("parseTime")(e.row.timestamp,"{y}-{m}-{d} {h}:{i}")))])]}}])}),t._v(" "),a("el-table-column",{attrs:{label:"标题","min-width":"150px"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("span",{staticClass:"link-type",on:{click:function(a){t.handleUpdate(e.row)}}},[t._v(t._s(e.row.title))])]}}])}),t._v(" "),a("el-table-column",{attrs:{label:"作者",width:"110px",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("span",[t._v(t._s(e.row.author))])]}}])}),t._v(" "),t.showReviewer?a("el-table-column",{attrs:{label:"审核人",width:"110px",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("span",{staticStyle:{color:"red"}},[t._v(t._s(e.row.reviewer))])]}}])}):t._e(),t._v(" "),a("el-table-column",{attrs:{label:"重要性",width:"80px"},scopedSlots:t._u([{key:"default",fn:function(e){return t._l(+e.row.importance,function(t){return a("svg-icon",{key:t,staticClass:"meta-item__icon",attrs:{"icon-class":"star"}})})}}])}),t._v(" "),a("el-table-column",{attrs:{label:"阅读数",align:"center",width:"95"},scopedSlots:t._u([{key:"default",fn:function(e){return[e.row.pageviews?a("span",{staticClass:"link-type",on:{click:function(a){t.handleFetchPv(e.row.pageviews)}}},[t._v(t._s(e.row.pageviews))]):a("span",[t._v("0")])]}}])}),t._v(" "),a("el-table-column",{attrs:{label:"状态","class-name":"status-col",width:"100"},scopedSlots:t._u([{key:"default",fn:function(e){return["published"===e.row.status?a("el-tag",{attrs:{type:"success"}},[t._v(t._s(t._f("statusFilter")(e.row.status)))]):t._e(),t._v(" "),"draft"===e.row.status?a("el-tag",{attrs:{type:"info"}},[t._v(t._s(t._f("statusFilter")(e.row.status)))]):t._e(),t._v(" "),"deleted"===e.row.status?a("el-tag",{attrs:{type:"danger"}},[t._v(t._s(t._f("statusFilter")(e.row.status)))]):t._e()]}}])}),t._v(" "),a("el-table-column",{attrs:{label:"操作",align:"center",width:"230","class-name":"small-padding fixed-width"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("el-button",{attrs:{type:"primary",size:"mini"},on:{click:function(a){t.handleUpdate(e.row)}}},[t._v("编辑")]),t._v(" "),"published"!=e.row.status?a("el-button",{attrs:{size:"mini",type:"success"},on:{click:function(a){t.handleModifyStatus(e.row,"published")}}},[t._v("发布\n        ")]):t._e(),t._v(" "),"draft"!=e.row.status?a("el-button",{attrs:{size:"mini"},on:{click:function(a){t.handleModifyStatus(e.row,"draft")}}},[t._v("草稿\n        ")]):t._e(),t._v(" "),"deleted"!=e.row.status?a("el-button",{attrs:{size:"mini",type:"danger"},on:{click:function(a){t.handleModifyStatus(e.row,"deleted")}}},[t._v("删除\n        ")]):t._e()]}}])})],1),t._v(" "),a("el-col",{staticClass:"toolbar",attrs:{span:24}},[a("el-button",{attrs:{disabled:0===t.sels.length,type:"danger"},on:{click:t.batchRemove}},[t._v("批量删除")]),t._v(" "),a("pagination",{directives:[{name:"show",rawName:"v-show",value:t.total>0,expression:"total>0"}],attrs:{total:t.total,page:t.listQuery.page,limit:t.listQuery.limit},on:{"update:page":function(e){t.$set(t.listQuery,"page",e)},"update:limit":function(e){t.$set(t.listQuery,"limit",e)},"current-change":t.handleUpdate,pagination:t.getList}})],1),t._v(" "),a("el-dialog",{attrs:{title:t.textMap[t.dialogStatus],visible:t.dialogFormVisible,"close-on-click-modal":!1},on:{"update:visible":function(e){t.dialogFormVisible=e}}},[a("el-form",{ref:"dataForm",staticStyle:{width:"400px","margin-left":"50px"},attrs:{rules:t.rules,model:t.temp,"label-position":"left","label-width":"70px"}},[a("el-form-item",{attrs:{label:"时间",prop:"timestamp"}},[a("el-date-picker",{attrs:{type:"datetime",placeholder:"Please pick a date"},model:{value:t.temp.timestamp,callback:function(e){t.$set(t.temp,"timestamp",e)},expression:"temp.timestamp"}})],1),t._v(" "),a("el-form-item",{attrs:{label:"标题",prop:"title"}},[a("el-input",{model:{value:t.temp.title,callback:function(e){t.$set(t.temp,"title",e)},expression:"temp.title"}})],1),t._v(" "),a("el-form-item",{attrs:{label:"状态"}},[a("el-select",{staticClass:"filter-item",attrs:{placeholder:"Please select"},model:{value:t.temp.status,callback:function(e){t.$set(t.temp,"status",e)},expression:"temp.status"}},t._l(t.calendarStatusOptions,function(t){return a("el-option",{key:t.key,attrs:{label:t.display_name,value:t.key}})}))],1),t._v(" "),a("el-form-item",{attrs:{label:"重要性"}},[a("el-rate",{staticStyle:{"margin-top":"8px"},attrs:{colors:["#99A9BF","#F7BA2A","#FF9900"],max:3},model:{value:t.temp.importance,callback:function(e){t.$set(t.temp,"importance",e)},expression:"temp.importance"}})],1),t._v(" "),a("el-form-item",{attrs:{label:"点评"}},[a("el-input",{attrs:{autosize:{minRows:2,maxRows:4},type:"textarea",placeholder:"Please input"},model:{value:t.temp.remark,callback:function(e){t.$set(t.temp,"remark",e)},expression:"temp.remark"}})],1)],1),t._v(" "),a("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{on:{click:function(e){t.dialogFormVisible=!1}}},[t._v("取消")]),t._v(" "),a("el-button",{attrs:{type:"primary"},on:{click:function(e){"create"===t.dialogStatus?t.createData():t.updateData()}}},[t._v("确认")])],1)],1),t._v(" "),a("el-dialog",{attrs:{visible:t.dialogPvVisible,title:"Reading statistics"},on:{"update:visible":function(e){t.dialogPvVisible=e}}},[a("el-table",{staticStyle:{width:"100%"},attrs:{data:t.pvData,border:"",fit:"","highlight-current-row":""}},[a("el-table-column",{attrs:{prop:"key",label:"Channel"}}),t._v(" "),a("el-table-column",{attrs:{prop:"pv",label:"Pv"}})],1),t._v(" "),a("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{attrs:{type:"primary"},on:{click:function(e){t.dialogPvVisible=!1}}},[t._v("确认")])],1)],1)],1)},[],!1,null,null,null);x.options.__file="complexTable2.vue";e.default=x.exports}}]);