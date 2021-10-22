import{_ as T}from"./index.39723eb2.js";import{b,c as w,j as n,n as m,p as S,t as p,l as v,d as P,f as V,I as B,C as I,o as x,r as c,e as g,i as u,ag as F,v as O,m as $,_ as C,A as N,B as R}from"./vendor.f934f7ac.js";const D={name:"dragVerifyImgChip",props:{isPassing:{type:Boolean,default:!1},width:{type:Number,default:250},height:{type:Number,default:40},text:{type:String,default:"swiping to the right side"},successText:{type:String,default:"success"},background:{type:String,default:"#eee"},progressBarBg:{type:String,default:"#76c61d"},completedBg:{type:String,default:"#76c61d"},circle:{type:Boolean,default:!1},radius:{type:String,default:"4px"},handlerIcon:{type:String},successIcon:{type:String},handlerBg:{type:String,default:"#fff"},textSize:{type:String,default:"14px"},textColor:{type:String,default:"#333"},imgsrc:{type:String},barWidth:{type:Number,default:40},barRadius:{type:Number,default:8},showRefresh:{type:Boolean,default:!1},refreshIcon:{type:String},showTips:{type:Boolean,default:!0},successTip:{type:String,default:"\u9A8C\u8BC1\u901A\u8FC7\uFF0C\u8D85\u8FC780%\u7528\u6237"},failTip:{type:String,default:"\u9A8C\u8BC1\u672A\u901A\u8FC7\uFF0C\u62D6\u52A8\u6ED1\u5757\u5C06\u60AC\u6D6E\u56FE\u50CF\u6B63\u786E\u5408\u5E76"},diffWidth:{type:Number,default:20}},emits:["handlerMove","passfail","passcallback","update:isPassing","refresh"],mounted:function(){const e=this.$refs.dragVerify;e.style.setProperty("--textColor",this.textColor),e.style.setProperty("--width",Math.floor(this.width/2)+"px"),e.style.setProperty("--pwidth",-Math.floor(this.width/2)+"px")},computed:{handlerStyle:function(){return{width:this.height+"px",height:this.height+"px",background:this.handlerBg}},message:function(){return this.isPassing?"":this.text},successMessage:function(){return this.isPassing?this.successText:""},dragVerifyStyle:function(){return{width:this.width+"px",height:this.height+"px",lineHeight:this.height+"px",background:this.background,borderRadius:this.circle?this.height/2+"px":this.radius}},dragVerifyImgStyle:function(){return{width:this.width+"px",position:"relative",overflow:"hidden"}},progressBarStyle:function(){return{background:this.progressBarBg,height:this.height+"px",borderRadius:this.circle?this.height/2+"px 0 0 "+this.height/2+"px":this.radius}},textStyle:function(){return{height:this.height+"px",width:this.width+"px",fontSize:this.textSize}}},data(){return{isMoving:!1,x:0,isOk:!1,isKeep:!1,clipBarx:0,showErrorTip:!1}},methods:{draw:function(e,s,t,l){var r=this.barWidth,i=this.barRadius;const a=Math.PI;e.beginPath(),e.moveTo(s,t),e.arc(s+r/2,t-i+2,i,.72*a,2.26*a),e.lineTo(s+r,t),e.arc(s+r+i-2,t+r/2,i,1.21*a,2.78*a),e.lineTo(s+r,t+r),e.lineTo(s,t+r),e.arc(s+i-2,t+r/2,i+.4,2.76*a,1.24*a,!0),e.lineTo(s,t),e.lineWidth=2,e.fillStyle="rgba(255, 255, 255, 0.8)",e.strokeStyle="rgba(255, 255, 255, 0.8)",e.stroke(),e[l](),e.globalCompositeOperation="destination-over"},checkimgLoaded:function(){var e=this.barWidth,s=this.$refs.checkImg.height,t=this.$refs.checkImg.width,l=Math.floor(this.width/2),r=25,i=20,a=l+Math.ceil(Math.random()*(l-e-this.barRadius-5)),d=r+Math.floor(Math.random()*(s-e-r-i));this.$refs.maincanvas.setAttribute("width",t),this.$refs.maincanvas.setAttribute("height",s),this.$refs.maincanvas.style.display="block";var k=this.$refs.maincanvas.getContext("2d");this.draw(k,a,d,"fill"),this.clipBarx=a;var h=this.$refs.movecanvas;h.setAttribute("width",t),h.setAttribute("height",s),this.$refs.movecanvas.style.display="block";const y=e+this.barRadius*2+3;var f=this.$refs.movecanvas.getContext("2d");f.clearRect(0,0,t,s),this.draw(f,a,d,"clip"),f.drawImage(this.$refs.checkImg,0,0,t,s);var d=d-this.barRadius*2-1;const _=f.getImageData(a,d,y,y);h.setAttribute("width",y),h.setAttribute("height",s),f.putImageData(_,0,d)},dragStart:function(e){this.isPassing||(this.isMoving=!0,this.x=e.pageX||e.touches[0].pageX),this.showBar=!0,this.showErrorTip=!1,this.$emit("handlerMove")},dragMoving:function(e){if(document.onselectstart=function(){return!1},this.isMoving&&!this.isPassing){var s=(e.pageX||e.touches[0].pageX)-this.x,t=this.$refs.handler;t.style.left=s+"px",this.$refs.progressBar.style.width=s+this.height/2+"px",this.$refs.movecanvas.style.left=s+"px"}},dragFinish:function(e){if(this.isMoving&&!this.isPassing){var s=(e.pageX||e.changedTouches[0].pageX)-this.x;if(Math.abs(s-this.clipBarx)>this.diffWidth){this.isOk=!0;var t=this;setTimeout(function(){t.$refs.handler.style.left="0",t.$refs.progressBar.style.width="0",t.$refs.movecanvas.style.left="0",t.isOk=!1},500),this.$emit("passfail"),this.showErrorTip=!0}else this.passVerify();this.isMoving=!1}},passVerify:function(){this.$emit("update:isPassing",!0),this.isMoving=!1;var e=this.$refs.handler;e.children[0].className=this.successIcon,this.$refs.progressBar.style.background=this.completedBg,this.$refs.message.style["-webkit-text-fill-color"]="unset",this.$refs.message.style.animation="slidetounlock2 3s infinite",this.$refs.progressBar.style.color="#fff",this.$refs.progressBar.style.fontSize=this.textSize,this.isKeep=!0,setTimeout(()=>{this.$refs.movecanvas.style.left=this.clipBarx+"px",setTimeout(()=>{this.isKeep=!1,this.$refs.maincanvas.style.display="none",this.$refs.movecanvas.style.display="none"},200)},100),this.$emit("passcallback")},reset:function(){this.reImg(),this.checkimgLoaded()},reImg:function(){this.$emit("update:isPassing",!1);const e=this.$options.data();for(const l in e)Object.prototype.hasOwnProperty.call(e,l)&&(this[l]=e[l]);var s=this.$refs.handler,t=this.$refs.message;s.style.left="0",this.$refs.progressBar.style.width="0",s.children[0].className=this.handlerIcon,t.style["-webkit-text-fill-color"]="transparent",t.style.animation="slidetounlock 3s infinite",t.style.color=this.background,this.$refs.movecanvas.style.left="0px"},refreshimg:function(){this.$emit("refresh")}},watch:{imgsrc:{immediate:!1,handler:function(){this.reImg()}}}},j={class:"drag-verify-container"},L=["src"],W={ref:"maincanvas",class:"main-canvas"},A={key:0,class:"refresh"},K={key:1,class:"tips success"},z={key:2,class:"tips danger"};function E(e,s,t,l,r,i){return b(),w("div",j,[n("div",{style:v(i.dragVerifyImgStyle)},[n("img",{ref:"checkImg",crossOrigin:"anonymous",src:t.imgsrc,onLoad:s[0]||(s[0]=(...a)=>i.checkimgLoaded&&i.checkimgLoaded(...a)),style:{width:"100%","border-radius":"6px 6px 0 0"}},null,40,L),n("canvas",W,null,512),n("canvas",{ref:"movecanvas",class:m([{goFirst:r.isOk,goKeep:r.isKeep},"move-canvas"])},null,2),t.showRefresh&&!t.isPassing?(b(),w("div",A,[n("i",{class:m(t.refreshIcon),onClick:s[1]||(s[1]=(...a)=>i.refreshimg&&i.refreshimg(...a))},null,2)])):S("",!0),t.showTips&&t.isPassing?(b(),w("div",K,p(t.successTip),1)):S("",!0),t.showTips&&!t.isPassing&&r.showErrorTip?(b(),w("div",z,p(t.failTip),1)):S("",!0)],4),n("div",{ref:"dragVerify",class:"drag_verify",style:v(i.dragVerifyStyle),onMousemove:s[4]||(s[4]=(...a)=>i.dragMoving&&i.dragMoving(...a)),onMouseup:s[5]||(s[5]=(...a)=>i.dragFinish&&i.dragFinish(...a)),onMouseleave:s[6]||(s[6]=(...a)=>i.dragFinish&&i.dragFinish(...a)),onTouchmove:s[7]||(s[7]=(...a)=>i.dragMoving&&i.dragMoving(...a)),onTouchend:s[8]||(s[8]=(...a)=>i.dragFinish&&i.dragFinish(...a))},[n("div",{class:m(["dv_progress_bar",{goFirst2:r.isOk}]),ref:"progressBar",style:v(i.progressBarStyle)},p(i.successMessage),7),n("div",{class:"dv_text",style:v(i.textStyle),ref:"message"},p(i.message),5),n("div",{class:m(["dv_handler dv_handler_bg",{goFirst:r.isOk}]),onMousedown:s[2]||(s[2]=(...a)=>i.dragStart&&i.dragStart(...a)),onTouchstart:s[3]||(s[3]=(...a)=>i.dragStart&&i.dragStart(...a)),ref:"handler",style:v(i.handlerStyle)},[n("i",{class:m(t.handlerIcon)},null,2)],38)],36)])}var X=T(D,[["render",E],["__scopeId","data-v-2321d7e7"]]),H="/vite-vue-admin/assets/bgImg.56f7377d.png",U="/vite-vue-admin/assets/t2.e601650a.png";const q=P({components:{dragVerifyImgChip:X},setup(){let e=V(),s=B({username:"admin",password:123456});const t=B({isPassing:!1,isDialog:!1});let l={username:[{required:!0,trigger:"blur",message:"\u8BF7\u8F93\u5165\u7528\u6237\u540D"}],password:[{required:!0,trigger:"blur",message:"\u8BF7\u8F93\u5165\u5BC6\u7801"}]},r=I("password"),i=I(!1),a=I(null);x(()=>{e.dispatch("outLoing")});function d(){a.value.validate(h=>{if(h){if(s.username=="")return C.warning("\u8BF7\u8F93\u5165\u7528\u6237\u540D"),!1;if(s.password=="")return C.warning("\u8BF7\u8F93\u5165\u5BC6\u7801"),!1;t.isDialog=!0}else return console.log("error submit!!"),!1})}return{bgImage:H,login_form:a,loginForm:s,handleLogin:d,loginRules:l,pwdType:r,loading:i,imgObj:t,t2:U,passcallback:()=>{i.value=!0,e.dispatch("loginAction",s).then(h=>{h.code===200&&(i.value=!1)}).catch(h=>{t.isDialog=!1,i.value=!1,t.isPassing=!1})}}}}),M=e=>(N("data-v-4cfc5c62"),e=e(),R(),e),G={class:"content"},J={class:"login-form-layout"},Q={class:"login-title color-main"},Y={class:"btn"},Z=M(()=>n("div",{style:{color:"#ccc"}},"\u8D26\u53F7\uFF1Aadmin \u5BC6\u7801\uFF1A123456",-1)),ee=M(()=>n("div",{style:{color:"#ccc"}},"\u8D26\u53F7\uFF1Aordinary \u5BC6\u7801\uFF1A123456",-1));function se(e,s,t,l,r,i){const a=c("el-input"),d=c("el-form-item"),k=c("el-form"),h=c("el-button"),y=c("el-image"),f=c("drag-verify-img-chip"),_=c("el-dialog");return b(),w("div",G,[n("div",J,[n("span",Q,p(e.defaultData.name),1),g(k,{autoComplete:"on",model:e.loginForm,ref:"login_form","label-position":"left"},{default:u(()=>[g(d,{prop:"username"},{default:u(()=>[g(a,{name:"username",type:"text",modelValue:e.loginForm.username,"onUpdate:modelValue":s[1]||(s[1]=o=>e.loginForm.username=o),autoComplete:"on",class:"login-input borderBottom",placeholder:e.t("please.enter.a.account.number")},{prefix:u(()=>[n("i",{class:"el-icon-user icon",onClick:s[0]||(s[0]=(...o)=>e.handleIconClick&&e.handleIconClick(...o))})]),_:1},8,["modelValue","placeholder"])]),_:1}),g(d,{prop:"password"},{default:u(()=>[g(a,{name:"password",type:e.pwdType,class:"login-input",onKeyup:F(e.handleLogin,["enter"]),modelValue:e.loginForm.password,"onUpdate:modelValue":s[4]||(s[4]=o=>e.loginForm.password=o),autoComplete:"on",placeholder:e.t("please.enter.a.PIN")},{prefix:u(()=>[n("i",{class:"el-icon-lock icon",onClick:s[2]||(s[2]=(...o)=>e.handleIconClick&&e.handleIconClick(...o))})]),suffix:u(()=>[n("i",{class:m([e.pwdType=="password"?"vitebiyan":"viteyanjing","viteIcon"]),onClick:s[3]||(s[3]=o=>e.pwdType=e.pwdType=="password"?"text":"password")},null,2)]),_:1},8,["type","onKeyup","modelValue","placeholder"])]),_:1})]),_:1},8,["model"]),n("div",Y,[g(h,{style:v({width:"100%",backgroundColor:e.themeColor}),loading:e.loading,onClick:s[5]||(s[5]=$(o=>e.handleLogin("login_form"),["prevent"]))},{default:u(()=>[O(p(e.t("login")),1)]),_:1},8,["style","loading"])]),Z,ee]),g(y,{src:e.bgImage,fit:"cover",class:"bgImage",style:{background:"#fff"}},null,8,["src"]),g(_,{title:"\u9A8C\u8BC1",modelValue:e.imgObj.isDialog,"onUpdate:modelValue":s[7]||(s[7]=o=>e.imgObj.isDialog=o),"destroy-on-close":"","custom-class":"widthAuto"},{default:u(()=>[g(f,{imgsrc:e.t2,isPassing:e.imgObj.isPassing,"onUpdate:isPassing":s[6]||(s[6]=o=>e.imgObj.isPassing=o),showRefresh:!0,barWidth:40,text:"\u8BF7\u6309\u4F4F\u6ED1\u5757\u62D6\u52A8",successText:"\u9A8C\u8BC1\u901A\u8FC7",handlerIcon:"el-icon-d-arrow-right",successIcon:"el-icon-circle-check",onPasscallback:e.passcallback},null,8,["imgsrc","isPassing","onPasscallback"])]),_:1},8,["modelValue"])])}var ae=T(q,[["render",se],["__scopeId","data-v-4cfc5c62"]]);export{ae as default};
