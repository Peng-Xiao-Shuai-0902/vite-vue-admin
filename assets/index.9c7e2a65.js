import{u as e,c as t,a,b as l,d as r}from"./menu.cdc383a4.js";import{r as o,o as n,m as i,w as u,a as s,c as d,g as m,F as c,i as p,h,k as g,K as f,d as v,I as b,e as y,b as F,J as w,D as V,p as x,l as _,s as S,q as U,v as $}from"./vendor.b8cb168b.js";import"./index.d53a521a.js";const k=[{label:"编号",minWidth:"80",sortable:!0,props:[{prop:"id"}]},{label:"菜单名称",overflowTooltip:!0,props:[{prop:"title"}]},{label:"菜单级数",props:[{prop:"level",filter:[{key:0,value:"一级"},{key:1,value:"二级"}]}]},{label:"前端名称",props:[{prop:"name"}]},{label:"前端图标",props:[{type:"iconfont",prop:"icon",data:{style:{fontSize:"24px"},class:["viteIcon"]}}]},{label:"是否显示",props:[{prop:"hidden",type:"switch",data:{activeValue:0,inactiveValue:1,activeColor:"store.getter.themeColo",inactiveText:"隐",activeText:"显"}}]},{label:"排序",sortable:!0,props:[{prop:"sort"}]},{label:"操作",minWidth:"180px",props:[{type:"btn",data:[{tip:"查看下级",type:"primary",icon:"el-icon-view",emit:"query"},{tip:"编辑",type:"info",icon:"el-icon-edit-outline",emit:"update"},{tip:"删除",type:"danger",icon:"el-icon-delete",emit:"remove"}]}]}],C={name:"MenuDetail",props:{dialog:{type:Boolean,default:!1},currentFrom:{type:Object,default:()=>{}},selectMenuList:{type:Array,default:()=>[]}},data:()=>({rules:{title:[{required:!0,message:"请输入菜单名称",trigger:"blur"},{min:2,max:140,message:"长度在 2 到 140 个字符",trigger:"blur"}],name:[{required:!0,message:"请输入前端名称",trigger:"blur"},{min:2,max:140,message:"长度在 2 到 140 个字符",trigger:"blur"}],icon:[{required:!0,message:"请输入前端图标",trigger:"blur"},{min:2,max:140,message:"长度在 2 到 140 个字符",trigger:"blur"}]}}),emits:["update:currentFrom","update:dialog","refresh"],methods:{close(){this.$emit("update:dialog",!1),this.$emit("update:currentFrom",{parentId:0,hidden:0,sort:0})},onSubmit(a){this.$refs[a].validate((l=>{if(!l)return this.$message({message:"验证失败",type:"error",duration:1e3}),!1;this.$confirm("是否提交数据","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then((()=>{this.currentFrom.id?e(this.currentFrom.id,this.currentFrom).then((e=>{this.$message({message:"修改成功",type:"success",duration:1e3}),this.$emit("update:dialog",!1)})):t(this.currentFrom).then((e=>{this.$refs[a].resetFields(),this.resetForm(a),this.$message({message:"提交成功",type:"success",duration:1e3}),this.$emit("update:dialog",!1)})),setTimeout((()=>{this.$emit("refresh")}),300)}))}))},resetForm(e){this.$refs[e].resetFields(),this.$emit("update:currentFrom",{parentId:0,hidden:0,sort:0})}}},L=f("是"),D=f("否"),I=f("提交"),T=f("重置");C.render=function(e,t,a,l,r,f){const v=o("el-input"),b=o("el-form-item"),y=o("el-option"),F=o("el-select"),w=o("el-radio"),V=o("el-radio-group"),x=o("el-button"),_=o("el-form"),S=o("el-drawer");return n(),i(S,{title:a.currentFrom.id?"修改":"添加",modelValue:a.dialog,"onUpdate:modelValue":t[8]||(t[8]=e=>a.dialog=e),direction:"rtl",ref:"drawer",onClose:f.close},{default:u((()=>[s(_,{model:a.currentFrom,rules:r.rules,ref:"menuFrom","label-width":"100px",style:{padding:"0 20px"}},{default:u((()=>[s(b,{label:"菜单名称：",prop:"title"},{default:u((()=>[s(v,{modelValue:a.currentFrom.title,"onUpdate:modelValue":t[0]||(t[0]=e=>a.currentFrom.title=e)},null,8,["modelValue"])])),_:1}),s(b,{label:"上级菜单："},{default:u((()=>[s(F,{modelValue:a.currentFrom.parentId,"onUpdate:modelValue":t[1]||(t[1]=e=>a.currentFrom.parentId=e),style:{width:"100%"},placeholder:"请选择菜单"},{default:u((()=>[(n(!0),d(c,null,m(a.selectMenuList,(e=>(n(),i(y,{key:e.id,label:e.title,value:e.id},null,8,["label","value"])))),128))])),_:1},8,["modelValue"])])),_:1}),s(b,{label:"前端名称：",prop:"name"},{default:u((()=>[s(v,{modelValue:a.currentFrom.name,"onUpdate:modelValue":t[2]||(t[2]=e=>a.currentFrom.name=e)},null,8,["modelValue"])])),_:1}),s(b,{label:"前端图标：",prop:"icon"},{default:u((()=>[s(v,{modelValue:a.currentFrom.icon,"onUpdate:modelValue":t[3]||(t[3]=e=>a.currentFrom.icon=e),style:{width:"80%"}},null,8,["modelValue"]),p("i",{class:h([a.currentFrom.icon,e.defaultData.iconfont]),style:{"margin-left":"10px","font-size":"24px"}},null,2)])),_:1}),s(b,{label:"是否显示："},{default:u((()=>[a.dialog?(n(),i(V,{key:0,modelValue:a.currentFrom.hidden,"onUpdate:modelValue":t[4]||(t[4]=e=>a.currentFrom.hidden=e)},{default:u((()=>[s(w,{label:0},{default:u((()=>[L])),_:1}),s(w,{label:1},{default:u((()=>[D])),_:1})])),_:1},8,["modelValue"])):g("",!0)])),_:1}),s(b,{label:"排序："},{default:u((()=>[s(v,{modelValue:a.currentFrom.sort,"onUpdate:modelValue":t[5]||(t[5]=e=>a.currentFrom.sort=e)},null,8,["modelValue"])])),_:1}),s(b,null,{default:u((()=>[s(x,{type:"primary",onClick:t[6]||(t[6]=e=>f.onSubmit("menuFrom"))},{default:u((()=>[I])),_:1}),a.currentFrom.id?g("",!0):(n(),i(x,{key:0,onClick:t[7]||(t[7]=e=>f.resetForm("menuFrom"))},{default:u((()=>[T])),_:1}))])),_:1})])),_:1},8,["model","rules"])])),_:1},8,["title","modelValue","onClose"])};const z=[{id:0,title:"无上级菜单"}],M=v({components:{update:C},setup(){const e=b().ctx;y(),F();let t=w({value:[]}),o=w({value:[]});console.log(o.value);let n=V(0),i=w(k),u=w({pageNum:1,pageSize:10}),s=V(0),d=w({value:[]}),m=V(!1),c=w({value:{}});function p(e){0==s.value&&(d.value=[z],o.value=z,console.log(123,d)),Object.assign(u,e||u),a(s.value,u).then((e=>{t.value=w(e.data.list),n.value=e.data.total}))}return p(),{list:t,total:n,config:i,listQuery:u,parentId:s,upParent:d,isDialog:m,currentFrom:c,allList:o,handleAddMenu:function(){m.value=!0,c.value={parentId:s.value,hidden:0,sort:0},console.log("添加",c)},getList:p,backUp:function(){u.pageNum=1,s.value=d.value[d.value.length-1][0].parentId,o.value=d.value[d.value.length-1],d.value.splice(d.value.length-1,1),p()},handleHiddenChange:function(t,a){l(t.id,{hidden:t.hidden}).then((t=>{e.$message({message:"修改成功",type:"success",duration:1e3})}))},handleShowNextLevel:function({row:e,index:t}){console.log(d.value),d.value.push([e]),o.value=d.value[d.value.length-1],s.value=e.id,p()},handleUpdate:function({row:e,index:t}){m.value=!0,c.value=w(JSON.parse(JSON.stringify(e)))},handleDelete:function({row:t,index:a}){r(t.id).then((t=>{e.$message({message:"删除成功",type:"success",duration:1e3}),p()}))}}}});x("data-v-c0332272");const N={class:"app-container"},j={class:"operate-container"},q=p("div",null,[p("i",{class:"el-icon-tickets"}),p("span",null,"数据列表")],-1),O=p("i",{class:"el-icon-back"},null,-1),B=f("返回上级 "),R=f(" 添加 ");_(),M.render=function(e,t,a,l,r,i){const m=o("el-button"),c=o("el-card"),h=o("powerful-table"),g=o("update");return n(),d("div",N,[s(c,{style:{marginBottom:"20px"},shadow:e.defaultData.cardShadow},{default:u((()=>[p("div",j,[q,p("div",null,[s(S,{name:"fadeOpticy"},{default:u((()=>[U(s(m,{type:"primary",class:"btn-add",onClick:t[0]||(t[0]=t=>e.backUp()),size:"mini"},{default:u((()=>[O,B])),_:1},512),[[$,e.upParent.value.length>1]])])),_:1}),s(m,{type:"primary",class:"btn-add",onClick:t[1]||(t[1]=t=>e.handleAddMenu()),size:"mini"},{default:u((()=>[R])),_:1})])])])),_:1},8,["shadow"]),s(c,{shadow:e.defaultData.cardShadow},{default:u((()=>[p("div",null,[s(h,{ref:"menuTable",list:e.list.value,header:e.config,isSelect:!1,total:e.total,tableName:"menuTable",onSizeChange:e.getList,onSwitchChange:e.handleHiddenChange,onQuery:e.handleShowNextLevel,onUpdate:e.handleUpdate,onRemove:e.handleDelete},null,8,["list","header","total","onSizeChange","onSwitchChange","onQuery","onUpdate","onRemove"])])])),_:1},8,["shadow"]),s(g,{dialog:e.isDialog,"onUpdate:dialog":t[2]||(t[2]=t=>e.isDialog=t),currentFrom:e.currentFrom.value,"onUpdate:currentFrom":t[3]||(t[3]=t=>e.currentFrom.value=t),selectMenuList:e.allList.value,onRefresh:e.getList},null,8,["dialog","currentFrom","selectMenuList","onRefresh"])])},M.__scopeId="data-v-c0332272";export default M;
