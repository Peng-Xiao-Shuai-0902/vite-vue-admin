import{g as e,p as t,a,r as o,o as r,c as n,b as s,w as c}from"./index.cf1eb326.js";import"./vendor.a8c43f00.js";const i={name:"iframe-",setup(){let t=e("https://gitee.com/abc1612565136/vite-admin"),a=!1;return function(e){let t=new Image;t.onload=function(){"function"==typeof e.success&&e.success(e.url)},t.onerror=function(){"function"==typeof e.error&&e.error(e.url)},t.src=e.url+"&"+Math.random()}({url:"https://avatars.githubusercontent.com/u/53845479?v=4",success:function(e){console.log("加载成功"),a=!0},error:function(e){console.log("加载失败"),a=!1}}),setTimeout((()=>{t.value=a?"https://github.com/Peng-Xiao-Shuai-0902/vite-vue-admin":"https://gitee.com/abc1612565136/vite-admin"}),1e3),{href:t}}},u=c();t("data-v-f702b5cc");const l={class:"app-container"},d=s("div",{class:"operate-container"},[s("div",null,[s("i",{class:"viteIcon viteiframe",style:{"margin-right":"5px"}}),s("span",null,"iframe")])],-1),f=s("iframe",{src:"https://gitee.com/abc1612565136/vite-admin",frameborder:"0",width:"100%",height:"600px"},null,-1);a();const m=u(((e,t,a,c,i,m)=>{const p=o("el-card");return r(),n("div",l,[s(p,{shadow:e.defalutData.cardShadow},{default:u((()=>[d,f])),_:1},8,["shadow"])])}));i.render=m,i.__scopeId="data-v-f702b5cc";export default i;