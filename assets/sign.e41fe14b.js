import{d as g,C as r,Q as _,_ as $,r as p,b as v,c as C,j as k,O as y,e as i,i as h,v as w}from"./vendor.f934f7ac.js";import{_ as S}from"./index.39723eb2.js";const M=g({props:{modelValue:String,signColor:String,signBgColor:String},emits:["update:modelValue","success"],setup(e,o){let t,n,a,d,l=r(null);const s=r(""),c=r(!1),m="sign"+new Date().getTime();_(()=>{t=document.getElementById(m),!!t&&(a=t.offsetWidth,d=t.offsetHeight,t.width=a,t.height=d,n=t.getContext("2d"),l.value=n,n.fillStyle=e.signColor||"#fff",n.fillRect(0,0,a,a),n.save(),n.strokeStyle=e.signBgColor||"#000",n.lineWidth=1)});const f=r(!1);return{handleDown:u=>{n.beginPath(),n.moveTo(u.offsetX,u.offsetY),f.value=!0},handleMove:u=>{f.value&&(n.lineTo(u.offsetX,u.offsetY),n.stroke())},handleUp:()=>{f.value=!1},handleClear:()=>{n.clearRect(0,0,a,d)},handleCreateImg:()=>{s.value=t.toDataURL("image/jpeg"),s.value&&($.success("\u751F\u6210\u56FE\u7247\u6210\u529F\uFF01"),o.emit("update:modelValue",s.value),o.emit("success",s.value))},id:m,ctxRef:l,baseUrl:s,isDialog:c}}}),U={style:{width:"100%",position:"relative"}},V=["id"],D=w("\u6E05\u9664\u753B\u5E03"),b=w("\u751F\u6210\u56FE\u7247");function B(e,o,t,n,a,d){const l=p("el-button");return v(),C("div",U,[k("canvas",{id:e.id,onMousedown:o[0]||(o[0]=(...s)=>e.handleDown&&e.handleDown(...s)),onMousemove:o[1]||(o[1]=(...s)=>e.handleMove&&e.handleMove(...s)),onMouseup:o[2]||(o[2]=(...s)=>e.handleUp&&e.handleUp(...s)),onMouseleave:o[3]||(o[3]=(...s)=>e.handleUp&&e.handleUp(...s)),style:{width:"100%",height:"400px",border:"1px solid #000"}},null,40,V),y(e.$slots,"default",{ctx:e.ctxRef},()=>[i(l,{type:"primary",onClick:e.handleClear},{default:h(()=>[D]),_:1},8,["onClick"]),i(l,{type:"primary",onClick:e.handleCreateImg},{default:h(()=>[b]),_:1},8,["onClick"])])])}var F=S(M,[["render",B]]);const E=g({components:{CanvasSign:F},setup(e,{emit:o}){return{url:r(""),handleSuccess:a=>{console.log(a)}}}}),R={class:"app-container"};function T(e,o,t,n,a,d){const l=p("canvas-sign"),s=p("el-card");return v(),C("div",R,[i(s,{shadow:e.defaultData.cardShadow},{default:h(()=>[i(l,{modelValue:e.url,"onUpdate:modelValue":o[0]||(o[0]=c=>e.url=c),onSuccess:e.handleSuccess},null,8,["modelValue","onSuccess"])]),_:1},8,["shadow"])])}var L=S(E,[["render",T]]);export{L as default};
