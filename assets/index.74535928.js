import{d as n,r as a,o as e,c as o,a as t,w as d,i as l}from"./vendor.c33ea466.js";var i=n({name:"md-markdown",setup:()=>({text:'\n<h2 align="center">Markdown Editor built on Vue</h2>\n\n::: tip 我可以支持公式\n  $$\\sum_{i=1}^n a_i=0$$\n:::\n\n::: warning 我还支持表情\n  :grinning:\n:::\n\n::: danger 还有任务列表\n  - [ ] Task\n:::\n\n::: details\n  这是一个详情块，在 IE / Edge 中不生效\n:::\n\n::: tip 流程图 (请将index.html文件中的引入的外部流程图js取消注释，并且将md-editor.ts流程图注释部分取消)\n```mermaid\ngraph LR\nA --- B\nB--\x3eC[fa:fa-ban forbidden]\nB--\x3eD(fa:fa-spinner);\n```\n:::\n\n## 引用\n\n- [v-md-editor](https://ckang1229.gitee.io/vue-markdown-editor/zh)\n',leftToolbar:"undo redo clear | emoji todo-list | h bold italic strikethrough quote | ul ol table hr | link image code | save",handleUploadImage:(n,a,e)=>{console.log(e),a({url:"https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=1269952892,3525182336&fm=26&gp=0.jpg",desc:"七龙珠"})}})});const r={class:"app-container"},s=l("div",{class:"operate-container"},[l("div",null,[l("i",{class:"viteIcon vitemarkdown",style:{"margin-right":"5px"}}),l("span",null,"md编辑器")])],-1);i.render=function(n,l,i,m,c,p){const u=a("v-md-editor"),h=a("el-card");return e(),o("div",r,[t(h,{shadow:n.defaultData.cardShadow},{default:d((()=>[s,t(u,{modelValue:n.text,"onUpdate:modelValue":l[0]||(l[0]=a=>n.text=a),"left-toolbar":n.leftToolbar,height:"700px","disabled-menus":[],onUploadImage:n.handleUploadImage},null,8,["modelValue","left-toolbar","onUploadImage"])])),_:1},8,["shadow"])])};export default i;
