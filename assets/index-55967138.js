import{d as N,r as f,H as S,a0 as B,a1 as D,o,x as r,w as i,k as t,v,L as y,C as F,a2 as O,f as p,J as u,K as L,g as P,B as h,N as z,M as A,O as K,P as M,a3 as R,a4 as T,_ as U}from"./index-e341999d.js";const H={class:"prefix _flex _flex-center"},J={class:"item _flex _flex-center _flex-wrap"},$={class:"_word-break"},j={class:"_word-break"},q=N({__name:"index",props:{columnNumber:{},icon:{},optionStyle:{},type:{}},emits:["update:icon"],setup(g,{emit:x}){const s=g,b=x,_=f(!0),c=S([]);let d=[],m=[];const l=f("");B(()=>{s.icon&&(l.value=s.icon)});const k=async()=>{z.get(A.iconFontUrl).then(e=>{d=[...e.data.data.matchAll(/([\w|\-|\d]+):before/g)].map(a=>({name:a[1]})),c.value=[...d],_.value=!1})},w=async()=>{K(()=>import("./index-e341999d.js").then(e=>e.cK),["assets/index-e341999d.js","assets/index-8866b8a3.css"]).then(e=>{for(const a in e)m.push({name:e[a].name,component:e[a]});c.value=[...m],_.value=!1})};D(()=>s.type,e=>{e=="icon-font"||!e?k():w()},{immediate:!0});const E=e=>{c.value=(s.type=="element"?m:d).filter(a=>a.name.indexOf(e)!==-1)};return(e,a)=>{const V=M,C=R,I=T;return o(),r(I,{modelValue:l.value,"onUpdate:modelValue":a[0]||(a[0]=n=>l.value=n),filterable:"",remote:"","reserve-keyword":"",clearable:"",placeholder:"请选择图标","remote-method":E,loading:_.value,onChange:a[1]||(a[1]=n=>b("update:icon",n))},{prefix:i(()=>[t("div",H,[t("i",{class:v(["el-icon",l.value])},[e.type==="element"&&l.value?(o(),r(y(l.value),{key:0})):F("",!0)],2)])]),default:i(()=>[t("div",{class:"icons",style:O({width:"750px","grid-template-columns":`repeat(${e.columnNumber||7}, 1fr)`,...e.optionStyle})},[(o(!0),p(u,null,L(c.value,n=>(o(),r(C,{key:n.name,label:n.name,value:n.name},{default:i(()=>[t("div",J,[e.type=="element"?(o(),p(u,{key:0},[P(V,null,{default:i(()=>[(o(),r(y(n.component)))]),_:2},1024),t("span",$,h(n.name),1)],64)):(o(),p(u,{key:1},[t("i",{class:v([n.name])},null,2),t("span",j,h(n.name),1)],64))])]),_:2},1032,["label","value"]))),128))],4)]),_:1},8,["modelValue","loading"])}}});const Q=U(q,[["__scopeId","data-v-03b631cd"]]);export{Q as _};
