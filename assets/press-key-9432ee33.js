import{d as y,q as B,y as g,o as l,x as r,w as a,g as k,k as s,j as d,z as p,f as v,i as f,p as _,E as w,Y as U,_ as C}from"./index-9249cd86.js";const E={class:"grid grid-c-3"},D={class:"grid grid-c-3"},I={class:"grid grid-c-4"},N={class:"tipBox"},K={class:"tipBox"},$={class:"tipBox"},j={class:"tipBox"},z=y({__name:"press-key",setup(S){const{proxy:m}=U(),i=(q,e="success")=>{m.$message[e](q),console.log(q)},t=B({q:""});return(q,e)=>{const x=f,u=_,V=w,n=g("press-key");return l(),r(V,{shadow:q.defaultData.cardShadow},{default:a(()=>[k(x),e[22]||(e[22]=s("div",{class:"tipBox warning"},[s("p",null," 当指令绑定在 input 或者 textarea 或者 el-input 上时将为局部触发，否则将为全局触发 "),s("span",null,[d(" 函数如果需要携带参数，请使用箭头函数包裹。例如: "),s("span",{class:"code"},`v-press-key:q="() => msg('q')}"`),d("。 如果不包裹的话，该函数会立即执行一次 ")]),s("p",null," id 为局部触发特有，全局使用将会无效。全局触发有多个按键相同时 将会优先触发第一个绑定的函数，并且会在控制台提示 ")],-1)),s("div",E,[s("div",null,[e[7]||(e[7]=s("div",{class:"tipBox"},"q 按键 input 类型 （局部触发）",-1)),p((l(),r(u,{modelValue:t.q,"onUpdate:modelValue":e[0]||(e[0]=o=>t.q=o)},{append:a(()=>e[6]||(e[6]=[d(" v-press-key:q ")])),_:1},8,["modelValue"])),[[n,()=>i("按键 q 触发 input"),"q"]])]),s("div",null,[e[9]||(e[9]=s("div",{class:"tipBox"},"q 按键 携带id（局部触发）",-1)),p((l(),r(u,{modelValue:t.q,"onUpdate:modelValue":e[1]||(e[1]=o=>t.q=o)},{append:a(()=>e[8]||(e[8]=[d(" v-press-key:q.100 ")])),_:1},8,["modelValue"])),[[n,()=>i("按键 q 触发 input,携带 id 为 100"),"q",{100:!0}]])]),s("div",null,[e[11]||(e[11]=s("div",{class:"tipBox"},"q 按键 携带id（局部触发）",-1)),p((l(),r(u,{modelValue:t.q,"onUpdate:modelValue":e[2]||(e[2]=o=>t.q=o)},{append:a(()=>e[10]||(e[10]=[d(" v-press-key:q.200 ")])),_:1},8,["modelValue"])),[[n,()=>i("按键 q 触发 input,携带 id 为 200"),"q",{200:!0}]])])]),s("div",D,[s("div",null,[e[13]||(e[13]=s("div",{class:"tipBox"},"q 按键 textarea 类型 （局部触发）",-1)),p((l(),r(u,{type:"textarea",modelValue:t.q,"onUpdate:modelValue":e[3]||(e[3]=o=>t.q=o)},{append:a(()=>e[12]||(e[12]=[d(" v-press-key:q ")])),_:1},8,["modelValue"])),[[n,()=>i("按键 q 触发 textarea"),"q"]])]),s("div",null,[e[15]||(e[15]=s("div",{class:"tipBox"},"q 按键 携带id（局部触发）",-1)),p((l(),r(u,{type:"textarea",modelValue:t.q,"onUpdate:modelValue":e[4]||(e[4]=o=>t.q=o)},{append:a(()=>e[14]||(e[14]=[d(" v-press-key:q.100 ")])),_:1},8,["modelValue"])),[[n,()=>i("按键 q 触发 textarea,携带 id 为 100"),"q",{100:!0}]])]),s("div",null,[e[17]||(e[17]=s("div",{class:"tipBox"},"q 按键 携带id（局部触发）",-1)),p((l(),r(u,{type:"textarea",modelValue:t.q,"onUpdate:modelValue":e[5]||(e[5]=o=>t.q=o)},{append:a(()=>e[16]||(e[16]=[d(" v-press-key:q.200 ")])),_:1},8,["modelValue"])),[[n,()=>i("按键 q 触发 textarea,携带 id 为 200"),"q",{200:!0}]])])]),s("div",I,[s("div",null,[p((l(),v("div",N,e[18]||(e[18]=[d(" a 按键（全局触发） ")]))),[[n,()=>i("按键 a 触发，全局","error"),"a"]])]),s("div",null,[p((l(),v("div",K,e[19]||(e[19]=[d(" d 按键（全局触发） ")]))),[[n,()=>i("按键 d 触发，全局","error"),"d"]])]),s("div",null,[p((l(),v("div",$,e[20]||(e[20]=[d(" d 按键，携带id（不会触发） ")]))),[[n,()=>i("按键 d 触发 携带id，全局","error"),"d",{100:!0}]])]),s("div",null,[p((l(),v("div",j,e[21]||(e[21]=[d(" q 按键（局部触发时，全局也触发） ")]))),[[n,()=>i("按键 q 触发，全局","error"),"q"]])])])]),_:1},8,["shadow"])}}});const Y=C(z,[["__scopeId","data-v-96f958c3"]]);export{Y as default};