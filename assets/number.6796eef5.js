import{d as l,E as e,p as a,j as o,r as d,I as t,o as n,c as s,a as u,k as i,m as p}from"./vendor.e8d26ddb.js";const r=l({setup:(l,{emit:a})=>({inputs:e({number:0,float:0,floatLength:0,numberScope:1})})}),c=p();a("data-v-f4793a1c");const m=u("div",{class:"operate-container"},[u("div",null,[u("i",{class:"viteIcon vitenumber",style:{"margin-right":"5px"}}),u("span",null,"数字指令")])],-1),v={class:"grid grid-c-4"},f=u("div",{class:"tipBox"},"整数",-1),V=u("div",{class:"tipBox"},"小数（默认2位）",-1),h=u("div",{class:"tipBox"},"小数（自定义保留n位）",-1),b=u("div",{class:"tipBox"},"整数 || 小数（固定范围）",-1);o();const g=c(((l,e,a,o,p,r)=>{const g=d("el-input"),x=d("el-card"),B=t("num");return n(),s(x,{shadow:l.defaultData.cardShadow},{default:c((()=>[m,u("div",v,[u("div",null,[f,i(u(g,{modelValue:l.inputs.number,"onUpdate:modelValue":e[1]||(e[1]=e=>l.inputs.number=e),placeholder:""},null,8,["modelValue"]),[[B]])]),u("div",null,[V,i(u(g,{modelValue:l.inputs.float,"onUpdate:modelValue":e[2]||(e[2]=e=>l.inputs.float=e),placeholder:""},null,8,["modelValue"]),[[B,void 0,"float"]])]),u("div",null,[h,i(u(g,{modelValue:l.inputs.floatLength,"onUpdate:modelValue":e[3]||(e[3]=e=>l.inputs.floatLength=e),placeholder:""},null,8,["modelValue"]),[[B,void 0,"float",{5:!0}]])]),u("div",null,[b,i(u(g,{modelValue:l.inputs.numberScope,"onUpdate:modelValue":e[4]||(e[4]=e=>l.inputs.numberScope=e),placeholder:""},null,8,["modelValue"]),[[B,[1,10]]])])])])),_:1},8,["shadow"])}));r.render=g,r.__scopeId="data-v-f4793a1c";export default r;
