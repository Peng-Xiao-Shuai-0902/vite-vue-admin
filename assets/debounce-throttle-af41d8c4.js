import{d as w,y as a,o as r,x as d,w as i,g as v,k as t,j as l,z as u,i as $,l as b,E as B,Y as k,_ as z}from"./index-d0d9e9f9.js";const C={class:"grid grid-c-3"},D={class:"grid grid-c-3"},E={class:"grid grid-c-3"},N={class:"grid grid-c-3"},T=w({__name:"debounce-throttle",setup(V){const{proxy:y}=k(),n=(s="触发",o="success")=>{y.$message[o](s)};return(s,o)=>{const m=$,e=b,x=B,f=a("debounce"),g=a("throttle");return r(),d(x,{shadow:s.defaultData.cardShadow},{default:i(()=>[v(m),o[30]||(o[30]=t("h4",{style:{"margin-bottom":"0"}},"防抖",-1)),t("div",C,[t("div",null,[o[7]||(o[7]=t("div",{class:"tipBox"},[l(" 基础防抖（指令） "),t("div",{style:{"font-size":"13px",color:"var(--el-color-info)"}},' v-debounce="[msg]" ')],-1)),u((r(),d(e,{type:"primary"},{default:i(()=>o[6]||(o[6]=[l("点击触发")])),_:1})),[[f,[n]]])]),t("div",null,[o[9]||(o[9]=t("div",{class:"tipBox"},[l(" 立即执行（指令） "),t("div",{style:{"font-size":"13px",color:"var(--el-color-info)"}},' v-debounce="[msg, 1000, [], true]" ')],-1)),u((r(),d(e,{type:"primary"},{default:i(()=>o[8]||(o[8]=[l("点击触发")])),_:1})),[[f,[n,1e3,[],!0]]])]),t("div",null,[o[11]||(o[11]=t("div",{class:"tipBox"},[l(" 带参（指令） "),t("div",{style:{"font-size":"13px",color:"var(--el-color-info)"}},` v-debounce="[msg, 300, ['风和自由']]" `)],-1)),u((r(),d(e,{type:"primary"},{default:i(()=>o[10]||(o[10]=[l("点击触发")])),_:1})),[[f,[n,300,["风和自由"]]]])])]),t("div",D,[t("div",null,[o[13]||(o[13]=t("div",{class:"tipBox"},[l(" 基础防抖（函数） "),t("div",{style:{"font-size":"13px",color:"var(--el-color-info)"}},' @click="$debounce(msg)" ')],-1)),v(e,{type:"primary",onClick:o[0]||(o[0]=p=>s.$debounce(n))},{default:i(()=>o[12]||(o[12]=[l("点击触发")])),_:1})]),t("div",null,[o[15]||(o[15]=t("div",{class:"tipBox"},[l(" 立即执行（函数） "),t("div",{style:{"font-size":"13px",color:"var(--el-color-info)"}},' @click="$debounce(msg, 1000), [], true)" ')],-1)),v(e,{type:"primary",onClick:o[1]||(o[1]=p=>s.$debounce(n,1e3,[],!0))},{default:i(()=>o[14]||(o[14]=[l("点击触发")])),_:1})]),t("div",null,[o[17]||(o[17]=t("div",{class:"tipBox"},[l(" 带参（函数） "),t("div",{style:{"font-size":"13px",color:"var(--el-color-info)"}},` @click="$debounce(msg, 300), ['风和自由'])" `)],-1)),v(e,{type:"primary",onClick:o[2]||(o[2]=p=>s.$debounce(n,300,["风和自由"]))},{default:i(()=>o[16]||(o[16]=[l("点击触发")])),_:1})])]),o[31]||(o[31]=t("h4",{style:{"margin-bottom":"0"}},"节流",-1)),t("div",E,[t("div",null,[o[19]||(o[19]=t("div",{class:"tipBox warning"},[l(" 基础节流（指令） "),t("div",{style:{"font-size":"13px",color:"var(--el-color-info)"}},' v-throttle="[msg]" ')],-1)),u((r(),d(e,{type:"warning"},{default:i(()=>o[18]||(o[18]=[l("点击触发")])),_:1})),[[g,[n]]])]),t("div",null,[o[21]||(o[21]=t("div",{class:"tipBox warning"},[l(" 立即执行（指令） "),t("div",{style:{"font-size":"13px",color:"var(--el-color-info)"}},' v-throttle="[msg, 2000, [], true]" ')],-1)),u((r(),d(e,{type:"warning"},{default:i(()=>o[20]||(o[20]=[l("点击触发")])),_:1})),[[g,[n,2e3,[],!0]]])]),t("div",null,[o[23]||(o[23]=t("div",{class:"tipBox warning"},[l(" 带参（指令） "),t("div",{style:{"font-size":"13px",color:"var(--el-color-info)"}},` v-throttle="[msg, 2000, ['风和自由']]" `)],-1)),u((r(),d(e,{type:"warning"},{default:i(()=>o[22]||(o[22]=[l("点击触发")])),_:1})),[[g,[n,2e3,["风和自由"]]]])])]),t("div",N,[t("div",null,[o[25]||(o[25]=t("div",{class:"tipBox warning"},[l(" 基础节流（函数） "),t("div",{style:{"font-size":"13px",color:"var(--el-color-info)"}},' @click="$throttle(msg)" ')],-1)),v(e,{type:"warning",onClick:o[3]||(o[3]=p=>s.$throttle(n))},{default:i(()=>o[24]||(o[24]=[l("点击触发")])),_:1})]),t("div",null,[o[27]||(o[27]=t("div",{class:"tipBox warning"},[l(" 立即执行（函数） "),t("div",{style:{"font-size":"13px",color:"var(--el-color-info)"}},' @click="$throttle(msg, 2000), [], true)" ')],-1)),v(e,{type:"warning",onClick:o[4]||(o[4]=p=>s.$throttle(n,2e3,[],!0))},{default:i(()=>o[26]||(o[26]=[l("点击触发")])),_:1})]),t("div",null,[o[29]||(o[29]=t("div",{class:"tipBox warning"},[l(" 带参（函数） "),t("div",{style:{"font-size":"13px",color:"var(--el-color-info)"}},` @click="$throttle(msg, 2000), ['诗和远方', 'warning'])" `)],-1)),v(e,{type:"warning",onClick:o[5]||(o[5]=p=>s.$throttle(n,2e3,["诗和远方","warning"]))},{default:i(()=>o[28]||(o[28]=[l("点击触发")])),_:1})])])]),_:1},8,["shadow"])}}});const j=z(T,[["__scopeId","data-v-024006bc"]]);export{j as default};
