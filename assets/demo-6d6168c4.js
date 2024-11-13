import{d as B,b as $,a as w,r as C,_ as g,y as D,o,x as n,w as e,k as u,j as t,B as z,g as m,f as k,z as l,C as a,l as U,D as I,E as N}from"./index-9249cd86.js";const R=B({setup(){var s;const i=$(),r=w(),f=C(((s=r.userInfo)==null?void 0:s.roles)||"admin"),F=y=>r.userInfo[y],v=C(0);return{key:v,roles:f,userInfo:F,switchUser:y=>{f.value=y,r.vToken=y+"-token",r.tags.splice(1),i.getRoutes().forEach(p=>{p.meta&&p.meta.id&&i.removeRoute(p.name)}),r.userInfoRequest().then(()=>{v.value+=1})}}}}),S={style:{color:"var(--color-primary)"}};function V(i,r,f,F,v,A){const s=U,y=I,p=N,d=D("permission");return o(),n(p,{shadow:i.defaultData.cardShadow},{header:e(()=>[u("span",null,[r[3]||(r[3]=t("当前用户权限：")),u("span",S,z(i.userInfo("roles")),1)]),m(y,{style:{float:"right"}},{default:e(()=>[m(s,{type:i.roles.includes("admin")?"primary":"default",onClick:r[0]||(r[0]=E=>i.switchUser("admin"))},{default:e(()=>r[4]||(r[4]=[t("admin")])),_:1},8,["type"]),m(s,{type:i.roles.includes("ordinary")?"primary":"default",onClick:r[1]||(r[1]=E=>i.switchUser("ordinary"))},{default:e(()=>r[5]||(r[5]=[t("ordinary")])),_:1},8,["type"]),m(s,{type:i.roles.includes("test")?"primary":"default",onClick:r[2]||(r[2]=E=>i.switchUser("test"))},{default:e(()=>r[6]||(r[6]=[t("test")])),_:1},8,["type"])]),_:1})]),default:e(()=>[(o(),k("div",{class:"grid grid-c-3",key:i.key},[u("div",null,[r[10]||(r[10]=u("div",{class:"tipBox"},[t(" 单个验证（指令） "),u("div",{style:{"font-size":"13px",color:"var(--el-color-info)"}},` v-permission="['admin']" `)],-1)),l((o(),n(s,{type:"primary"},{default:e(()=>r[7]||(r[7]=[t("['admin']")])),_:1})),[[d,["admin"]]]),l((o(),n(s,{type:"success"},{default:e(()=>r[8]||(r[8]=[t("['ordinary']")])),_:1})),[[d,["ordinary"]]]),l((o(),n(s,{type:"warning"},{default:e(()=>r[9]||(r[9]=[t(`"'test'"`)])),_:1})),[[d,"test"]])]),u("div",null,[r[14]||(r[14]=u("div",{class:"tipBox"},[t(" 多个验证（指令，满足一个显示） "),u("div",{style:{"font-size":"13px",color:"var(--el-color-info)"}},` v-permission="['admin','ordinary']" `)],-1)),l((o(),n(s,{type:"primary"},{default:e(()=>r[11]||(r[11]=[t("['admin','ordinary']")])),_:1})),[[d,["admin","ordinary"]]]),l((o(),n(s,{type:"success"},{default:e(()=>r[12]||(r[12]=[t("['ordinary','test']")])),_:1})),[[d,["ordinary","test"]]]),l((o(),n(s,{type:"warning"},{default:e(()=>r[13]||(r[13]=[t("['admin','test']")])),_:1})),[[d,["admin","test"]]])]),u("div",null,[r[18]||(r[18]=u("div",{class:"tipBox"},[t(" 多个验证（指令，满足全部显示） "),u("div",{style:{"font-size":"13px",color:"var(--el-color-info)"}},` v-permission:all="['admin','ordinary']" `)],-1)),l((o(),n(s,{type:"primary"},{default:e(()=>r[15]||(r[15]=[t("['admin','ordinary']")])),_:1})),[[d,["admin","ordinary"],"all"]]),l((o(),n(s,{type:"success"},{default:e(()=>r[16]||(r[16]=[t("['ordinary','test']")])),_:1})),[[d,["ordinary","test"],"all"]]),l((o(),n(s,{type:"warning"},{default:e(()=>r[17]||(r[17]=[t("['admin','test']")])),_:1})),[[d,["admin","test"],"all"]])])])),(o(),k("div",{class:"grid grid-c-3",key:i.key+1},[u("div",null,[r[22]||(r[22]=u("div",{class:"tipBox"},[t(" 单个验证（函数） "),u("div",{style:{"font-size":"13px",color:"var(--el-color-info)"}},` v-if="$permission(['admin'])" `)],-1)),i.$permission(["admin"])?(o(),n(s,{key:0,type:"primary"},{default:e(()=>r[19]||(r[19]=[t("['admin']")])),_:1})):a("",!0),i.$permission(["ordinary"])?(o(),n(s,{key:1,type:"success"},{default:e(()=>r[20]||(r[20]=[t("['ordinary']")])),_:1})):a("",!0),i.$permission("test")?(o(),n(s,{key:2,type:"warning"},{default:e(()=>r[21]||(r[21]=[t(`"'test'"`)])),_:1})):a("",!0)]),u("div",null,[r[26]||(r[26]=u("div",{class:"tipBox"},[t(" 多个验证（函数，满足一个显示） "),u("div",{style:{"font-size":"13px",color:"var(--el-color-info)"}},` v-if="$permission(['admin','ordinary'])" `)],-1)),i.$permission(["admin","ordinary"])?(o(),n(s,{key:0,type:"primary"},{default:e(()=>r[23]||(r[23]=[t("['admin','ordinary']")])),_:1})):a("",!0),i.$permission(["ordinary","test"])?(o(),n(s,{key:1,type:"success"},{default:e(()=>r[24]||(r[24]=[t("['ordinary','test']")])),_:1})):a("",!0),i.$permission(["admin","test"])?(o(),n(s,{key:2,type:"warning"},{default:e(()=>r[25]||(r[25]=[t("['admin','test']")])),_:1})):a("",!0)]),u("div",null,[r[30]||(r[30]=u("div",{class:"tipBox"},[t(" 多个验证（函数，满足全部显示） "),u("div",{style:{"font-size":"13px",color:"var(--el-color-info)"}},` v-if="$permission(['admin','ordinary'])" `)],-1)),i.$permission(["admin","ordinary"],!0)?(o(),n(s,{key:0,type:"primary"},{default:e(()=>r[27]||(r[27]=[t("['admin','ordinary']")])),_:1})):a("",!0),i.$permission(["ordinary","test"],!0)?(o(),n(s,{key:1,type:"success"},{default:e(()=>r[28]||(r[28]=[t("['ordinary','test']")])),_:1})):a("",!0),i.$permission(["admin","test"],!0)?(o(),n(s,{key:2,type:"warning"},{default:e(()=>r[29]||(r[29]=[t("['admin','test']")])),_:1})):a("",!0)])]))]),_:1},8,["shadow"])}const T=g(R,[["render",V]]);export{T as default};