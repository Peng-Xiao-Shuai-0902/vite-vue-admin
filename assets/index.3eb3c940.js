import{s as e}from"./index.c62c85b9.js";import{d as t,a5 as a,y as l,a9 as n,J as i,s as o,p as s,j as r,o as d,c as u,a as c,a3 as m,m as p,e as g,b as y,r as h,G as f}from"./vendor.60adb4b8.js";const b=t({emits:["update:modelValue"],props:{modelValue:{type:String,default:""},slotStyle:{type:Object,default:()=>{}},height:{type:[String,Number],default:500},width:{type:[String,Number],default:500},plugins:{type:[String,Array],default:"lists fullscreen emoticons autosave image table wordcount emoticons"},toolbar:{type:[String,Array],default:"bold italic underline strikethrough restoredraft image fullscreen emoticons | fontsizeselect | forecolor backcolor | alignleft aligncenter alignright alignjustify|bullist numlist |outdent indent blockquote | undo redo | removeformat"},url:{required:!0,type:String,default:""},data:{type:Array,default:()=>[{key:"type",value:0}]}},setup(e,t){a((()=>{e.height,window.tinymce.init({selector:`#${u}`,branding:!1,language_url:"/static/zh_CN.js",language:"zh_CN",height:e.height,width:e.width,plugins:s,toolbar:r,content_style:"div,p{margin:5px 0;}img{max-width:100%;}*::-webkit-scrollbar{width:6px;height:6px;background:transparent;}*::-webkit-scrollbar-thumb{border-radius: 3px;background: #bac3d9;}",images_upload_handler:(t,a,l)=>{let n=new FormData;n.append("file",t.blob(),t.filename()),e.data.forEach((e=>{n.append(e.key,e.value)})),o.post(e.url,n).then((e=>{200===e.data.code?a(e.data.data.url):l("上传失败")}))},init_instance_callback:function(e){d.value=!0}})}));let s=e.plugins,r=e.toolbar,d=l(!1),u="vue-tinymce-"+ +new Date;return n((()=>{d.value&&""!=e.modelValue&&i((()=>{window.tinymce.get(u).setContent(e.modelValue)}))})),{tinymceId:u,hasInit:d,getContentFun:function(){t.emit("update:modelValue",window.tinymce.get(u).getContent())}}}}),v=p();s("data-v-0b0cd4c8");const w={class:"tinymce-editor"};r();const x=v(((e,t,a,l,n,i)=>(d(),u("div",w,[c("textarea",{class:"tinymce-textarea",id:e.tinymceId},null,8,["id"]),c("div",{onClick:t[1]||(t[1]=(...t)=>e.getContentFun&&e.getContentFun(...t)),style:e.slotStyle},[m(e.$slots,"default")],4)]))));b.render=x,b.__scopeId="data-v-0b0cd4c8";var _=t({name:"modulesRichText",components:{tinyMce:b},setup(){g(),y();let t=l(""),a=l(null);return e({url:"modules/richText"}).then((e=>{t.value=e.data})),{myValue:t,getTinyMceFun:function(e){console.log("获取富文本数据",t.value)},scroll:a}}});const k=p();s("data-v-01e60408");const V={class:"app-container"},C=c("div",{class:"operate-container"},[c("div",null,[c("i",{class:"viteIcon viteZJ-fuwenben",style:{"margin-right":"5px"}}),c("span",null,"富文本编辑器")])],-1),S={class:"lineTinyBox"},j=f(" 确认 "),T={class:"phoneBox"};r();const F=k(((e,t,a,l,n,i)=>{const o=h("el-button"),s=h("tiny-mce"),r=h("el-scrollbar"),m=h("el-card");return d(),u("div",V,[c(m,{shadow:e.defaultData.cardShadow},{default:k((()=>[C,c("div",S,[c(s,{width:"100%",modelValue:e.myValue,"onUpdate:modelValue":t[2]||(t[2]=t=>e.myValue=t),height:667,url:"图片路径",ref:"tinymce",slotStyle:{display:"flex",justifyContent:"center",padding:"10px 0 0"}},{default:k((()=>[c(o,{type:"primary",onClick:t[1]||(t[1]=t=>e.getTinyMceFun(e.tintMceKey))},{default:k((()=>[j])),_:1})])),_:1},8,["modelValue"]),c("div",T,[c(r,{style:{height:"667px"},class:"vHtml",ref:"scroll"},{default:k((()=>[c("div",{innerHTML:e.myValue},null,8,["innerHTML"])])),_:1},512)])])])),_:1},8,["shadow"])])}));_.render=F,_.__scopeId="data-v-01e60408";export default _;
