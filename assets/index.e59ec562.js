import{s as j,b as I,u as J}from"./index.018e853e.js";import{C as M,d as W,u as G,G as D,y as w,r as n,o as c,c as h,a,w as s,i as u,M as r,F as C,g as B,l as S,I as m,t as q,D as H}from"./vendor.8c3eb18c.js";function K(i){return j({url:"admin/roleList",params:i})}const P=[{label:"\u7F16\u53F7",minWidth:"80",sortable:!0,props:[{prop:"id"}]},{label:"\u5E10\u53F7",overflowTooltip:!0,props:[{prop:"username"}]},{label:"\u89D2\u8272",props:[{type:"slot",slotName:"roles"}]},{label:"\u662F\u5426\u542F\u7528",props:[{prop:"status",type:"switch",data:{beforeFunction:i=>(i.id==1&&M.warning("\u4E0D\u5141\u8BB8\u505C\u7528\uFF01"),i.id!=1)}}]},{label:"\u6DFB\u52A0\u65F6\u95F4",props:[{prop:"createTime"}]},{label:"\u64CD\u4F5C",minWidth:"180px",props:[{type:"btn",data:[{tip:"\u5206\u914D\u89D2\u8272",type:"primary",icon:"el-icon-user",emit:"occupyOne"},{tip:"\u5220\u9664",type:"danger",icon:"el-icon-delete",emit:"remove",showBtn:i=>i.id!=1}]}]}],X={class:"app-container"},Y={class:"operate-container"},Z=u("div",null,[u("i",{class:"el-icon-search"}),u("span",null,"\u7B5B\u9009\u641C\u7D22")],-1),ee=m(" \u67E5\u8BE2\u641C\u7D22 "),te=m(" \u91CD\u7F6E "),le={style:{"margin-top":"15px"}},oe={class:"screenForm"},se=u("div",{class:"operate-container"},[u("div",null,[u("i",{class:"el-icon-tickets"}),u("span",null,"\u6570\u636E\u5217\u8868")])],-1),ae=m("\u53D6 \u6D88"),ue=m("\u786E \u5B9A"),de=W({setup(i){const V=G(),{proxy:y}=H(),d=D({role:!1,edit:!1}),p=w({}),o=D({list:[],header:P,total:0,listQuery:{pageNum:1,pageSize:10,username:""}}),v=w([]),_=()=>{I(o.listQuery).then(e=>{o.list=e.data.list,o.total=e.data.total})};(()=>{K({pageNum:1,pageSize:100}).then(e=>{v.value=e.data.list})})(),_();const k=({row:e})=>{J({ids:[e.id]}).then(l=>{y.$message.success("\u5220\u9664\u6210\u529F\uFF01"),_()})},x=e=>{V.state.user.userInfo.id==e.id&&e.status===0&&y.$message.error("\u4F60\u7684\u8D26\u53F7\u5DF2\u88AB\u505C\u7528\uFF01")},E=()=>{d.role=!1,o.list=o.list.map(e=>(e.id==p.value.id&&(e=p.value),e))},N=()=>{Object.keys(o.listQuery).forEach(e=>{["pageNum","pageSize"].indexOf(e)==-1&&(o.listQuery[e]="")})};return(e,l)=>{const f=n("el-button"),O=n("el-input"),Q=n("el-form-item"),R=n("el-form"),F=n("el-card"),L=n("el-tag"),T=n("powerful-table"),$=n("el-option"),A=n("el-select"),z=n("el-dialog");return c(),h("div",X,[a(F,{class:"filter-container",style:{marginBottom:"20px"},shadow:e.defaultData.cardShadow},{default:s(()=>[u("div",Y,[Z,u("div",null,[a(f,{style:{float:"right"},type:"primary",onClick:l[0]||(l[0]=t=>_())},{default:s(()=>[ee]),_:1}),a(f,{style:{float:"right","margin-right":"15px"},onClick:l[1]||(l[1]=t=>N())},{default:s(()=>[te]),_:1})])]),u("div",le,[a(R,{inline:!0,model:r(o).listQuery},{default:s(()=>[u("div",oe,[a(Q,{label:"\u540D\u79F0\uFF1A"},{default:s(()=>[a(O,{modelValue:r(o).listQuery.username,"onUpdate:modelValue":l[2]||(l[2]=t=>r(o).listQuery.username=t),placeholder:"\u8BF7\u8F93\u5165\u8D26\u53F7\u540D",style:{width:"80%"},clearable:""},null,8,["modelValue"])]),_:1})])]),_:1},8,["model"])])]),_:1},8,["shadow"]),a(F,{shadow:e.defaultData.cardShadow},{default:s(()=>[se,u("div",null,[a(T,{ref:(t,g)=>{g.menuTable=t},list:r(o).list,header:r(o).header,isSelect:!1,total:r(o).total,tableName:"menuTable",onSizeChange:_,onSwitchChange:x,onOccupyOne:l[3]||(l[3]=({row:t})=>{r(d).role=!0,p.value=JSON.parse(JSON.stringify(t))}),onRemove:k},{roles:s(({row:t})=>[(c(!0),h(C,null,B(t.roles,g=>(c(),S(L,{key:g,style:{"margin-right":"5px"}},{default:s(()=>{var b;return[m(q((b=v.value.filter(U=>U.value==g)[0])==null?void 0:b.label),1)]}),_:2},1024))),128))]),_:1},8,["list","header","total"])])]),_:1},8,["shadow"]),a(z,{title:"\u5206\u914D\u89D2\u8272",modelValue:r(d).role,"onUpdate:modelValue":l[7]||(l[7]=t=>r(d).role=t),width:"30%"},{footer:s(()=>[a(f,{onClick:l[5]||(l[5]=t=>r(d).role=!1)},{default:s(()=>[ae]),_:1}),a(f,{type:"primary",onClick:l[6]||(l[6]=t=>E())},{default:s(()=>[ue]),_:1})]),default:s(()=>[a(A,{modelValue:p.value.roles,"onUpdate:modelValue":l[4]||(l[4]=t=>p.value.roles=t),multiple:"",placeholder:"\u8BF7\u9009\u62E9",style:{width:"80%"}},{default:s(()=>[(c(!0),h(C,null,B(v.value,t=>(c(),S($,{key:t.value,label:t.label,value:t.value},null,8,["label","value"]))),128))]),_:1},8,["modelValue"])]),_:1},8,["modelValue"])])}}});export{de as default};
