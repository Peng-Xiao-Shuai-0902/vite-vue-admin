import{g as e,p as t,a,r as o,o as r,c,b as n,w as s}from"./index.a9dbc9b5.js";import"./vendor.e7098c4c.js";const i={name:"iframe-",setup(){let t=e("https://gitee.com/abc1612565136/vite-admin"),a=!1;return function(e){let t=new Image;t.onload=function(){"function"==typeof e.success&&e.success(e.url)},t.onerror=function(){"function"==typeof e.error&&e.error(e.url)},t.src=e.url+"&"+Math.random()}({url:"https://avatars.githubusercontent.com/u/53845479?v=4",success:function(e){console.log("加载成功"),a=!0},error:function(e){console.log("加载失败"),a=!1}}),setTimeout((()=>{t.value=a?"https://github.com/Peng-Xiao-Shuai-0902/vite-vue-admin":"https://gitee.com/abc1612565136/vite-admin"}),1e3),{href:t}}},u=s();t("data-v-f702b5cc");const d={class:"app-container"},l=n("div",{class:"operate-container"},[n("div",null,[n("i",{class:"viteIcon viteiframe",style:{"margin-right":"5px"}}),n("span",null,"iframe")])],-1),m=n("iframe",{src:"https://gitee.com/abc1612565136/vite-admin",frameborder:"0",width:"100%",height:"600px"},null,-1);a();const f=u(((e,t,a,s,i,f)=>{const p=o("el-card");return r(),c("div",d,[n(p,{shadow:e.defalutData.cardShadow},{default:u((()=>[l,m])),_:1},8,["shadow"])])}));i.render=f,i.__scopeId="data-v-f702b5cc";export default i;
