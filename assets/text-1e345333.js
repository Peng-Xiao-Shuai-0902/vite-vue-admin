import{$ as r,a0 as i,d as s,a1 as p,a2 as c,a3 as u,a4 as m,o as d,x as f,w as x,Z as y,v as _,n as S,a5 as g,L as v,a6 as C,a7 as z}from"./index-9249cd86.js";const w=r({type:{type:String,values:["primary","success","info","warning","danger",""],default:""},size:{type:String,values:i,default:""},truncated:Boolean,lineClamp:{type:[String,Number]},tag:{type:String,default:"span"}}),b=s({name:"ElText"}),h=s({...b,props:w,setup(n){const t=n,l=p(),e=c("text"),o=u(()=>[e.b(),e.m(t.type),e.m(l.value),e.is("truncated",t.truncated),e.is("line-clamp",!m(t.lineClamp))]);return(a,B)=>(d(),f(v(a.tag),{class:_(S(o)),style:g({"-webkit-line-clamp":a.lineClamp})},{default:x(()=>[y(a.$slots,"default")]),_:3},8,["class","style"]))}});var k=C(h,[["__file","text.vue"]]);const T=z(k);export{T as E};