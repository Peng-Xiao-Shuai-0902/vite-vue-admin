import{_ as a,L as o}from"./index.9d90f1ac.js";import{p as r}from"./index.7773c581.js";import{d as e,J as t,r as s,o as l,m as c,w as n,a as d}from"./vendor.b8cb168b.js";import"./index.d53a521a.js";var f=e({name:"eChartsLine",components:{easyEchart:a},setup(a,e){let s=t({value:{}});new o(0,0,0,1,[{offset:0,color:"#5BB1FF"},{offset:1,color:"rgba(255,255,255,0)"}]),new o(0,0,0,1,[{offset:0,color:"#AD49FF"},{offset:1,color:"rgba(255,255,255,0)"}]);return t({value:[]}),r().then((a=>{s.value=a.data})),{chart:s,colors:["#5BB1FF","#AD49FF","#F6A829","rgb(85, 188, 255)"]}}});f.render=function(a,o,r,e,t,f){const i=s("easy-echart"),h=s("el-card");return l(),c(h,{shadow:a.defaultData.cardShadow},{default:n((()=>[d(i,{isSlot:!1,echartsId:"pillar-echart",height:600,colors:a.colors,information:a.chart.value,title:"柱状图",types:"pillar"},null,8,["colors","information"])])),_:1},8,["shadow"])};export default f;
