import{s as W,u as q,a8 as C,a9 as S,aa as K,ab as M,q as E,r as V,A as b,d as G,a as H,e as P,o as d,f as _,g as r,w as o,k as n,j as m,n as s,J as x,K as N,x as B,B as X,ac as Y,ad as Z,l as ee,p as te,E as ae,ae as le,af as oe,ag as se}from"./index-d0d9e9f9.js";import{E as re}from"./dialog-01d092e0.js";/* empty css             */import{E as ne,a as ie}from"./form-item-e0a55f95.js";const pe=c=>W({url:"admin/roleList",params:c}),ue={icon:"",id:-1,roles:[],username:"",status:-1,createTime:""},de=()=>{const c=q(),f=[{label:"编号",minWidth:"80",sortable:!0,props:[{prop:"id"}]},{label:"帐号",overflowTooltip:!0,props:[{prop:"username"}]},{label:"角色",props:[{type:"slot",prop:"",slotName:"roles"}]},{label:"是否启用",props:[{prop:"status",type:"switch",data:C({property:v=>({activeColor:c.themeColor.primary,inactiveValue:0,activeValue:1,beforeChange:()=>(v.id==1&&b.warning("不允许停用！"),!0)})})}]},{label:"添加时间",props:[{prop:"createTime"}]},{label:"操作",minWidth:"180px",props:[{type:"btn",prop:"",data:C([{text:"分配角色",params:"occupyOne",property:{type:"primary",icon:S(K)}},{text:"删除",params:"remove",property:{type:"danger",icon:S(M)}}])}]}],i=E({role:!1,edit:!1}),l=E({list:[],header:f,total:0,listQuery:{pageNum:1,pageSize:10,username:""}}),p=V({...ue}),u=V([]);return{header:f,switchs:i,powerfulTableData:l,currentForm:p,roleLists:u}},me={class:"app-container"},ce={class:"operate-container"},fe={style:{"margin-top":"15px"}},ge={class:"screenForm"},he=G({__name:"index",setup(c){const{header:f,switchs:i,powerfulTableData:l,currentForm:p,roleLists:u}=de(),v=H(),g=()=>{Y(l.listQuery).then(t=>{l.list=t.data.data.list,l.total=t.data.data.total})};(()=>{pe({pageNum:1,pageSize:100}).then(t=>{u.value=t.data.data.list})})(),g();const T=t=>{switch(t.componentName){case"switch":const e=t.row;v.userInfo.id==e.id&&e.status===0&&b.error("你的账号已被停用！");break}},D=({params:t,row:e})=>{switch(console.log(e),t){case"occupyOne":i.role=!0,Object.assign(p,JSON.parse(JSON.stringify(e)));break;case"remove":O(e);break}},O=t=>{Z({ids:[t.id]}).then(()=>{b.success("删除成功！"),g()})},R=()=>{i.role=!1,l.list=l.list.map(t=>(t.id==p.value.id&&(t=p.value),t))},L=()=>{Object.keys(l.listQuery).forEach(t=>{["pageNum","pageSize"].indexOf(t)==-1&&(l.listQuery[t]="")})};return(t,e)=>{const y=ee,Q=te,F=ne,U=ie,w=ae,z=le,$=P("powerful-table"),j=oe,I=se,J=re;return d(),_("div",me,[r(w,{class:"filter-container",style:{marginBottom:"20px"},shadow:t.defaultData.cardShadow},{default:o(()=>[n("div",ce,[e[9]||(e[9]=n("div",null,[n("i",{class:"el-icon-search"}),n("span",null,"筛选搜索")],-1)),n("div",null,[r(y,{style:{float:"right"},type:"primary",onClick:e[0]||(e[0]=a=>g())},{default:o(()=>e[7]||(e[7]=[m(" 查询搜索 ")])),_:1}),r(y,{style:{float:"right","margin-right":"15px"},onClick:e[1]||(e[1]=a=>L())},{default:o(()=>e[8]||(e[8]=[m(" 重置 ")])),_:1})])]),n("div",fe,[r(U,{inline:!0,model:s(l).listQuery},{default:o(()=>[n("div",ge,[r(F,{label:"名称："},{default:o(()=>[r(Q,{modelValue:s(l).listQuery.username,"onUpdate:modelValue":e[2]||(e[2]=a=>s(l).listQuery.username=a),placeholder:"请输入账号名",style:{width:"80%"},clearable:""},null,8,["modelValue"])]),_:1})])]),_:1},8,["model"])])]),_:1},8,["shadow"]),r(w,{shadow:t.defaultData.cardShadow},{default:o(()=>[e[10]||(e[10]=n("div",{class:"operate-container"},[n("div",null,[n("i",{class:"el-icon-tickets"}),n("span",null,"数据列表")])],-1)),n("div",null,[r($,{ref:"menuTable",list:s(l).list,header:s(f),isSelect:!1,tableName:"menuTable","pagination-property":{total:s(l).total},onSizeChange:g,onComponentEvent:T,onBtnClick:D},{roles:o(({row:a})=>[(d(!0),_(x,null,N(a.roles,h=>(d(),B(z,{key:h,style:{"margin-right":"5px"}},{default:o(()=>{var k;return[m(X((k=s(u).filter(A=>A.value==h)[0])==null?void 0:k.label),1)]}),_:2},1024))),128))]),_:1},8,["list","header","pagination-property"])])]),_:1},8,["shadow"]),r(J,{title:"分配角色",modelValue:s(i).role,"onUpdate:modelValue":e[6]||(e[6]=a=>s(i).role=a),width:"30%"},{footer:o(()=>[r(y,{onClick:e[4]||(e[4]=a=>s(i).role=!1)},{default:o(()=>e[11]||(e[11]=[m("取 消")])),_:1}),r(y,{type:"primary",onClick:e[5]||(e[5]=a=>R())},{default:o(()=>e[12]||(e[12]=[m("确 定")])),_:1})]),default:o(()=>[r(I,{modelValue:s(p).roles,"onUpdate:modelValue":e[3]||(e[3]=a=>s(p).roles=a),multiple:"",placeholder:"请选择",style:{width:"80%"}},{default:o(()=>[(d(!0),_(x,null,N(s(u),a=>(d(),B(j,{key:a.value,label:a.label,value:a.value},null,8,["label","value"]))),128))]),_:1},8,["modelValue"])]),_:1},8,["modelValue"])])}}});export{he as default};
