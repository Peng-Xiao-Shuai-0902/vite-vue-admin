import{_ as E,d as C,G as D,r as p,N as x,o as B,l as f,w as a,a as l,i as u,m as d,C as r,I as s}from"./vendor.8c3eb18c.js";const b=C({setup(e,{emit:o}){const n=D({text:"\u98CE\u548C\u81EA\u7531",text1:"\u8BD7\u548C\u8FDC\u65B9"});return{callback:()=>{r.warning("\u590D\u5236\u6210\u529F\uFF01"+n.text1)},callback1:()=>{r.warning("\u590D\u5236\u6210\u529F\uFF01callback1")},inputs:n}}}),A=u("div",{class:"tipBox warning",style:{"font-size":"15px"}},[u("p",null,"\u590D\u5236\u6210\u529F\u540E\u6240\u6267\u884C\u7684\u51FD\u6570\uFF0C\u4E3A\u6307\u4EE4\u521D\u59CB\u5316\u65F6\u6240\u7ED1\u5B9A\u7684\u51FD\u6570"),u("p",null,[s("\u4F8B\u5982\uFF1A "),u("span",{class:"code"},'v-copy="[ inputs.text1, bol ? callback : callback1 ]'),s(" \u5047\u8BBE "),u("span",{class:"code"},"bol"),s(" \u4E3A "),u("span",{class:"code"},"true"),s(" \u90A3\u4E48\u53EA\u4F1A\u6267\u884C "),u("span",{class:"code"},"callback"),s("\uFF0C \u5C31\u7B97 "),u("span",{class:"code"},"bol"),s(" \u5728\u4E4B\u540E\u53D8\u4E3A "),u("span",{class:"code"},"false"),s(" \u4E5F\u53EA\u4F1A\u6267\u884C "),u("span",{class:"code"},"callback")])],-1),h={class:"grid grid-c-3"},k=u("div",{class:"tipBox"},[s(" \u57FA\u7840 \xA0 "),u("div",{style:{"font-size":"13px",color:"var(--el-color-info)"}},'v-copy="inputs.text"')],-1),V=s("\u590D\u5236"),w=[V],y=u("div",{class:"tipBox"},[s(" \u6570\u7EC4\u5F0F \xA0 "),u("div",{style:{"font-size":"13px",color:"var(--el-color-info)"}},'v-copy="[inputs.text]"')],-1),g=s("\u590D\u5236"),z=[g],N=u("div",{class:"tipBox"},[s(" \u6570\u7EC4\u5F0F\uFF08\u81EA\u5B9A\u4E49\u590D\u5236\u6210\u529F\u540E\u6267\u884C\u7684\u51FD\u6570\uFF09 "),u("div",{style:{"font-size":"13px",color:"var(--el-color-info)"}},'v-copy="[inputs.text1, callback]"')],-1),$=s("\u590D\u5236"),U=[$];function j(e,o,n,F,v,G){const _=p("view-name"),c=p("el-input"),m=p("el-card"),i=x("copy");return B(),f(m,{shadow:e.defaultData.cardShadow},{default:a(()=>[l(_),A,u("div",h,[u("div",null,[k,l(c,{modelValue:e.inputs.text,"onUpdate:modelValue":o[0]||(o[0]=t=>e.inputs.text=t),placeholder:""},{append:a(()=>[d(u("span",null,w,512),[[i,e.inputs.text]])]),_:1},8,["modelValue"])]),u("div",null,[y,l(c,{modelValue:e.inputs.text,"onUpdate:modelValue":o[1]||(o[1]=t=>e.inputs.text=t),placeholder:""},{append:a(()=>[d(u("span",null,z,512),[[i,[e.inputs.text]]])]),_:1},8,["modelValue"])]),u("div",null,[N,l(c,{modelValue:e.inputs.text1,"onUpdate:modelValue":o[2]||(o[2]=t=>e.inputs.text1=t),placeholder:""},{append:a(()=>[d(u("span",null,U,512),[[i,[e.inputs.text1,e.inputs.text1=="\u8BD7\u548C\u8FDC\u65B9"?e.callback:e.callback1]]])]),_:1},8,["modelValue"])])])]),_:1},8,["shadow"])}var M=E(b,[["render",j]]);export{M as default};
