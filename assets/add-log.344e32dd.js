import{p as e,g as a}from"./index.c62c85b9.js";import{d as l,u as t,y as r,E as o,p as d,j as s,r as n,o as p,c as i,a as u,t as c,m,G as g}from"./vendor.60adb4b8.js";const f=[{label:"账号名",props:[{prop:"name"}]},{label:"问题信息",props:[{prop:"info"}]},{label:"问题地址",props:[{type:"href",prop:"url",data:{prop:"url",style:{fontWeight:"bold"}}}]},{label:"问题详情",props:[{prop:"error"}]},{label:"问题时间",props:[{prop:"time"}]},{label:"问题类型",props:[{prop:"type"}]}];var h=l({name:"error-log",setup(l,d){const s=t(),n=r(0),p=r([]),i=s.getters.getBugs,u=o({pageNum:1,pageSize:10}),c=o({value:0,operates:[{label:"上传",value:0}]}),m=o({url:"",info:"",error:"",type:"Info",name:s.state.user.userInfo.username,time:e(new Date)}),g=e=>{Object.assign(u,e||{}),a(u).then((e=>{p.value=e.data.list,n.value=e.data.total}))};g();return{list:p,sList:i,operateData:c,addQuery:m,total:n,handleBatchChange:e=>{console.log("上传")},addLog:()=>{s.commit("setErrorLog",JSON.parse(JSON.stringify(m)))},getList:g,config:f}}});const y=m();d("data-v-842bfa5c");const b={class:"operate-container"},v=u("i",{class:"viteIcon viteyumaobi",style:{"margin-right":"5px"}},null,-1),V={style:{margin:"15px 0"}},_={class:"screenForm"},w=g("提交"),Q=u("div",{style:{margin:"15px 0"}},"新问题",-1),L=u("div",{style:{margin:"15px 0"}},"历史问题",-1);s();const S=y(((e,a,l,t,r,o)=>{const d=n("el-input"),s=n("el-form-item"),m=n("el-button"),g=n("el-form"),f=n("powerful-table"),h=n("el-card");return p(),i(h,{shadow:e.defaultData.cardShadow},{default:y((()=>[u("div",b,[u("div",null,[v,u("span",null,c(e.t("add.log")),1)])]),u("div",V,[u(g,{inline:!0,model:e.addQuery},{default:y((()=>[u("div",_,[u(s,null,{default:y((()=>[u(d,{modelValue:e.addQuery.info,"onUpdate:modelValue":a[1]||(a[1]=a=>e.addQuery.info=a),placeholder:"请输入问题信息",style:{width:"80%"},clearable:""},null,8,["modelValue"])])),_:1}),u(s,{prop:"url"},{default:y((()=>[u(d,{modelValue:e.addQuery.url,"onUpdate:modelValue":a[2]||(a[2]=a=>e.addQuery.url=a),placeholder:"请输入问题地址",style:{width:"80%"},clearable:""},null,8,["modelValue"])])),_:1}),u(s,{prop:"error"},{default:y((()=>[u(d,{modelValue:e.addQuery.error,"onUpdate:modelValue":a[3]||(a[3]=a=>e.addQuery.error=a),placeholder:"请输入问题详情",style:{width:"80%"},clearable:""},null,8,["modelValue"])])),_:1}),u(s,null,{default:y((()=>[u(m,{type:"primary",onClick:e.addLog},{default:y((()=>[w])),_:1},8,["onClick"])])),_:1})])])),_:1},8,["model"])]),Q,u(f,{list:e.sList,header:e.config,isPagination:!1,isSelect:"",operateData:e.operateData,onBatchOperate:e.handleBatchChange},null,8,["list","header","operateData","onBatchOperate"]),L,u(f,{ref:"Table",list:e.list,header:e.config,total:e.total,onSizeChange:e.getList},null,8,["list","header","total","onSizeChange"])])),_:1},8,["shadow"])}));h.render=S,h.__scopeId="data-v-842bfa5c";export default h;
