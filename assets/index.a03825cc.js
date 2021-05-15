import{u as e,d as t,a as l,c as a,b as i}from"./role.749370db.js";import{r as s,o,c as n,b as d,H as r,j as u,h}from"./index.a9dbc9b5.js";import"./vendor.e7098c4c.js";const p=[{label:"编号",minWidth:"80",sortable:!0,poprs:[{popr:"id"}]},{label:"角色名称",overflowTooltip:!0,poprs:[{popr:"name"}]},{label:"描述",poprs:[{popr:"description"}]},{label:"用户数",poprs:[{popr:"adminCount"}]},{label:"添加时间",poprs:[{popr:"createTime"}]},{label:"是否启用",poprs:[{popr:"status",type:"switch",data:{activeColor:"store.getter.themeColo",inactiveText:"隐",activeText:"显"}}]},{label:"操作",minWidth:"100px",poprs:[{type:"btn",data:[{tip:"分配菜单",type:"primary",icon:"el-icon-more",emit:"occupyOne"},{tip:"分配资源",type:"primary",icon:"el-icon-turn-off",emit:"occupyTwo"},{tip:"编辑",type:"info",icon:"el-icon-edit-outline",emit:"update"},{tip:"删除",type:"danger",icon:"el-icon-delete",emit:"remove"}]}]}],c={pageNum:1,pageSize:5,keyword:null},m={id:null,name:null,description:null,adminCount:0,status:1},g={name:"roleList",data:()=>({config:p,listQuery:Object.assign({},c),list:null,total:null,listLoading:!1,dialogVisible:!1,role:Object.assign({},m),isEdit:!1}),created(){this.getList()},filters:{formatDateTime(e){if(null==e||""===e)return"N/A";let t=new Date(e);return formatDate(t,"yyyy-MM-dd hh:mm:ss")}},methods:{handleResetSearch(){this.listQuery=Object.assign({},c)},handleSearchList(){this.listQuery.pageNum=1,this.getList()},handleSizeChange(e){this.listQuery.pageNum=1,this.listQuery.pageSize=e,this.getList()},handleCurrentChange(e){this.listQuery.pageNum=e,this.getList()},handleAdd(){this.dialogVisible=!0,this.isEdit=!1,this.role=Object.assign({},m)},handleStatusChange(t,l){e(t.id,{status:t.status}).then((e=>{this.$message({type:"success",message:"修改成功!"})})),this.getList()},handleDelete(e,l){this.$confirm("是否要删除该角色?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then((()=>{let l=[];l.push(e.id);let a=new FormData;a.append("ids",l),t(a).then((e=>{this.$message({type:"success",message:"删除成功!"}),this.getList()}))}))},handleUpdate(e,t){this.dialogVisible=!0,this.isEdit=!0,this.role=JSON.parse(JSON.stringify(e)),console.log(this.role)},handleDialogConfirm(){this.$confirm("是否要确认?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then((()=>{this.isEdit?l(this.role.id,this.role).then((e=>{this.$message({message:"修改成功！",type:"success"}),this.dialogVisible=!1,this.getList()})):a(this.role).then((e=>{this.$message({message:"添加成功！",type:"success"}),this.dialogVisible=!1,this.getList()}))}))},handleSelectMenu(e,t){this.$router.push({path:"/ums/allocMenu",query:{roleId:e.id}})},handleSelectResource(e,t){this.$router.push({path:"/ums/allocResource",query:{roleId:e.id}})},getList(){this.listLoading=!0,i(this.listQuery).then((e=>{this.listLoading=!1,this.list=e.data.list,this.total=e.data.total}))}}},y={class:"app-container"},f={class:"operate-container"},b=d("div",null,[d("i",{class:"el-icon-search"}),d("span",null,"筛选搜索")],-1),w=h(" 查询搜索 "),V=h(" 重置 "),S={style:{"margin-top":"15px"}},C={class:"screenForm"},_={class:"operate-container"},v=d("div",null,[d("i",{class:"el-icon-tickets"}),d("span",null,"数据列表")],-1),x=h(" 添加 "),L=h("是"),O=h("否"),T=h("取 消"),D=h("确 定");g.render=function(e,t,l,a,i,h){const p=s("el-button"),c=s("el-input"),m=s("el-form-item"),g=s("el-form"),k=s("el-card"),Q=s("powerful-table"),U=s("el-radio"),j=s("el-radio-group"),N=s("el-drawer");return o(),n("div",y,[d(k,{class:"filter-container",style:{marginBottom:"20px"},shadow:e.defalutData.cardShadow},{default:r((()=>[d("div",f,[b,d("div",null,[d(p,{style:{float:"right"},type:"primary",onClick:t[1]||(t[1]=e=>h.getList())},{default:r((()=>[w])),_:1}),d(p,{style:{float:"right","margin-right":"15px"},onClick:t[2]||(t[2]=e=>h.handleResetSearch())},{default:r((()=>[V])),_:1})])]),d("div",S,[d(g,{inline:!0,model:i.listQuery},{default:r((()=>[d("div",C,[d(m,{label:"角色名："},{default:r((()=>[d(c,{modelValue:i.listQuery.keyword,"onUpdate:modelValue":t[3]||(t[3]=e=>i.listQuery.keyword=e),placeholder:"角色名称",clearable:""},null,8,["modelValue"])])),_:1})])])),_:1},8,["model"])])])),_:1},8,["shadow"]),d(k,{style:{marginBottom:"20px"},shadow:e.defalutData.cardShadow},{default:r((()=>[d("div",_,[v,d("div",null,[d(p,{type:"primary",class:"btn-add",onClick:t[4]||(t[4]=e=>h.handleAdd()),size:"mini"},{default:r((()=>[x])),_:1})])])])),_:1},8,["shadow"]),d(k,{shadow:e.defalutData.cardShadow},{default:r((()=>[d("div",null,[d(Q,{ref:"menuTable",list:i.list,header:i.config,isSelect:!1,total:i.total,tableName:"table",onSizeChange:h.getList,onSwitchChange:h.handleStatusChange,onOccupyOne:h.handleSelectMenu,onOccupyTwo:h.handleSelectResource,onUpdate:h.handleUpdate,onRemove:h.handleDelete},null,8,["list","header","total","onSizeChange","onSwitchChange","onOccupyOne","onOccupyTwo","onUpdate","onRemove"])])])),_:1},8,["shadow"]),d(N,{title:i.isEdit?"修改":"添加",modelValue:i.dialogVisible,"onUpdate:modelValue":t[11]||(t[11]=e=>i.dialogVisible=e),direction:"rtl",ref:"drawer"},{default:r((()=>[d(g,{model:i.role,ref:"roleForm","label-width":"150px"},{default:r((()=>[d(m,{label:"角色名称："},{default:r((()=>[d(c,{modelValue:i.role.name,"onUpdate:modelValue":t[5]||(t[5]=e=>i.role.name=e),style:{width:"250px"}},null,8,["modelValue"])])),_:1}),d(m,{label:"描述："},{default:r((()=>[d(c,{modelValue:i.role.description,"onUpdate:modelValue":t[6]||(t[6]=e=>i.role.description=e),type:"textarea",rows:5,style:{width:"250px"}},null,8,["modelValue"])])),_:1}),d(m,{label:"是否启用："},{default:r((()=>[i.dialogVisible?(o(),n(j,{key:0,modelValue:i.role.status,"onUpdate:modelValue":t[7]||(t[7]=e=>i.role.status=e)},{default:r((()=>[d(U,{label:1},{default:r((()=>[L])),_:1}),d(U,{label:0},{default:r((()=>[O])),_:1})])),_:1},8,["modelValue"])):u("",!0)])),_:1}),d(m,null,{default:r((()=>[d(j,{modelValue:i.role.status,"onUpdate:modelValue":t[10]||(t[10]=e=>i.role.status=e)},{default:r((()=>[d(p,{onClick:t[8]||(t[8]=e=>i.dialogVisible=!1)},{default:r((()=>[T])),_:1}),d(p,{type:"primary",onClick:t[9]||(t[9]=e=>h.handleDialogConfirm())},{default:r((()=>[D])),_:1})])),_:1},8,["modelValue"])])),_:1})])),_:1},8,["model"])])),_:1},8,["title","modelValue"])])};export default g;
