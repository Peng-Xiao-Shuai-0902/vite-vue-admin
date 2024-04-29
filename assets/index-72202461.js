import{s as $,ae as h,af as U,ag as K,ah as W,q as V,r as k,d as L,a1 as H,U as J,A as v,_ as A,o as g,x as S,w as r,g as o,f as T,J as M,K as O,k as i,j as E,C as G,p as R,b8 as X,a3 as N,a4 as I,bd as Y,be as Z,l as j,bb as x,bf as ee,bg as te,e as B,P as ae,E as le,Q as oe,R as re}from"./index-e341999d.js";/* empty css             */import{E as q,a as P}from"./form-item-6cb2f183.js";const Q=e=>$({url:"modules/table",params:e}),se=e=>$({url:"modules/table/remove",method:"delete",data:{ids:e}}),ne=()=>{const e=[{label:"编号",minWidth:"60",sortable:!0,props:[{prop:"id"}]},{label:"书名",props:[{type:"href",prop:"href",data:{prop:"name",style:{fontWeight:"bold"}}},{text:"热度：",type:"iconfont",prop:"iconfont",data:h({style:{color:"red"}})}]},{label:"封面",width:"120",props:[{type:"image",prop:"image",data:h({style:{width:"40px",height:"60px",borderRadius:"5px"},property:{}})}]},{label:"类型",width:"100",props:[{prop:"types",filters:[{key:0,value:"玄幻"},{key:1,value:"都市"},{key:2,value:"真实"}]}]},{label:"内容",width:"150",props:[{prop:"text",data:{develop:!0,line:3}}]},{label:"评分",width:"150",props:[{prop:"rate",type:"rate",data:h({property:{max:5,allowHalf:!0}})}]},{label:"推荐",width:"100",props:[{prop:"recommend",type:"switch",data:h({property:{inactiveValue:0,activeValue:1}})}]},{label:"价格",width:"120",props:[{text:"原价：",prop:"oldPrice"},{prop:"price",type:"input",data:h({property:{placeholder:"请输入现价"}})}]},{label:"更新时间（远程搜索）",sortable:"custom",props:[{prop:"date"}]},{label:"操作",minWidth:"180px",fixed:"right",props:[{type:"btn",prop:"",data:h([{text:"修改",params:"update",property:{type:"primary",icon:U(K)}},{text:"删除",params:"remove",property:{type:"danger",icon:U(W)}}])}]}],t=V({listQuery:{pageNum:1,pageSize:10,types:"",name:""},total:0,list:[]}),s=k([{value:0,label:"玄幻"},{value:1,label:"都市"},{value:2,label:"真实"}]),m=V({value:0,operates:[{label:"推荐",value:0},{label:"取消推荐",value:1},{label:"删除",value:2}]}),b=k(!1),c=V({});return{selectData:k([]),header:e,powerfulTableData:t,selectMenuList:s,operateData:m,isDialog:b,currentForm:c}},ue={name:"",image:[],types:"",text:"",rate:0,recommend:"",oldPrice:"",price:"",id:""},ie=L({props:{dialog:{type:Boolean,default:!1},currentForm:{type:Object,default:()=>{}},selectMenuList:{type:Array,default:()=>[]}},emits:["update:currentForm","update:dialog","refresh"],setup(e,t){const s=V({...ue}),m=k(null);return H(e.currentForm,n=>{Object.assign(s,n)},{immediate:!0}),{uploadForm:m,formData:s,close:()=>{t.emit("update:dialog",!1),t.emit("update:currentForm",{})},resetForm:()=>{m.value.resetFields(),t.emit("update:currentForm",{})},onSubmit:()=>{m.value.validate(n=>{if(n)J.confirm("是否提交数据","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(()=>{e.currentForm.id?v({message:"修改成功",type:"success",duration:1e3}):setTimeout(()=>{v({message:"提交成功",type:"success",duration:1e3})},200),setTimeout(()=>{t.emit("refresh",{...s}),t.emit("update:dialog",!1)},200)});else return v({message:"验证失败",type:"error",duration:1e3}),!1})},rules:{title:[{required:!0,message:"请输入菜单名称",trigger:"blur"},{min:2,max:140,message:"长度在 2 到 140 个字符",trigger:"blur"}],name:[{required:!0,message:"请输入前端名称",trigger:"blur"},{min:2,max:140,message:"长度在 2 到 140 个字符",trigger:"blur"}],icon:[{required:!0,message:"请输入前端图标",trigger:"blur"},{min:2,max:140,message:"长度在 2 到 140 个字符",trigger:"blur"}]}}}});const de={class:"a"},pe={class:"grid grid-c-2"};function me(e,t,s,m,b,c){const d=R,n=q,f=X,D=N,_=I,F=Y,y=Z,C=j,w=P,a=x;return g(),S(a,{title:e.currentForm.id?"修改":"添加","model-value":e.dialog,direction:"rtl",ref:"drawer",onClose:e.close},{default:r(()=>[o(w,{model:e.formData,rules:e.rules,ref:"uploadForm","label-position":"top",style:{padding:"0 20px"},class:"Dform"},{default:r(()=>[o(n,{label:"书名",prop:"name"},{default:r(()=>[o(d,{modelValue:e.formData.name,"onUpdate:modelValue":t[0]||(t[0]=l=>e.formData.name=l)},null,8,["modelValue"])]),_:1}),o(n,{label:"封面",prop:"image"},{default:r(()=>[o(f,{modelValue:e.formData.image,"onUpdate:modelValue":t[1]||(t[1]=l=>e.formData.image=l),limit:1,tipLabel:"当前仅为示例，请改成可上传地址"},null,8,["modelValue"])]),_:1}),o(n,{label:"类型",prop:"types"},{default:r(()=>[o(_,{modelValue:e.formData.types,"onUpdate:modelValue":t[2]||(t[2]=l=>e.formData.types=l),placeholder:"请选择",style:{width:"100%"}},{default:r(()=>[(g(!0),T(M,null,O(e.selectMenuList,l=>(g(),S(D,{key:l.value,label:l.label,value:l.value},null,8,["label","value"]))),128))]),_:1},8,["modelValue"])]),_:1}),o(n,{label:"内容",prop:"text"},{default:r(()=>[o(d,{type:"textarea",modelValue:e.formData.text,"onUpdate:modelValue":t[3]||(t[3]=l=>e.formData.text=l),rows:"7"},null,8,["modelValue"])]),_:1}),o(n,{label:"评分",prop:"rate"},{default:r(()=>[i("div",de,[o(F,{modelValue:e.formData.rate,"onUpdate:modelValue":t[4]||(t[4]=l=>e.formData.rate=l),colors:[e.themeColor,e.themeColor,e.themeColor]},null,8,["modelValue","colors"])])]),_:1}),o(n,{label:"推荐",prop:"recommend"},{default:r(()=>[o(y,{modelValue:e.formData.recommend,"onUpdate:modelValue":t[5]||(t[5]=l=>e.formData.recommend=l),"active-value":1,"inactive-value":0},null,8,["modelValue"])]),_:1}),i("div",pe,[o(n,{label:"原价",prop:"oldPrice"},{default:r(()=>[o(d,{modelValue:e.formData.oldPrice,"onUpdate:modelValue":t[6]||(t[6]=l=>e.formData.oldPrice=l)},null,8,["modelValue"])]),_:1}),o(n,{label:"现价",prop:"price"},{default:r(()=>[o(d,{modelValue:e.formData.price,"onUpdate:modelValue":t[7]||(t[7]=l=>e.formData.price=l)},null,8,["modelValue"])]),_:1})]),o(n,null,{default:r(()=>[o(C,{type:"primary",onClick:e.onSubmit},{default:r(()=>[E("提交")]),_:1},8,["onClick"]),e.formData.id?G("",!0):(g(),S(C,{key:0,onClick:t[8]||(t[8]=l=>e.resetForm())},{default:r(()=>[E("重置")]),_:1}))]),_:1})]),_:1},8,["model","rules"])]),_:1},8,["title","model-value","onClose"])}const ce=A(ie,[["render",me],["__scopeId","data-v-7c353b89"]]),fe=L({name:"ModulesTable",components:{Update:ce,Search:ee,Tickets:te},setup(){const{selectData:e,header:t,powerfulTableData:s,selectMenuList:m,operateData:b,isDialog:c,currentForm:d}=ne(),n=a=>{e.value=(a==null?void 0:a.select)||[],a!=null&&a.params&&(Object.assign(s.listQuery,a.params),console.log(s.listQuery,a.params)),Q(s.listQuery).then(l=>{s.list=l.data.list,s.total=l.data.total})},f=a=>{s.listQuery[a.prop]=a.order,n()},D=a=>{switch(a.componentName){case"switch":console.log(a),s.list[a.index||0]=a.row,v.success("修改成功");break}},_=({ids:a,item:l})=>{switch(l.value){case 0:case 1:s.list.forEach((p,u)=>{a.indexOf(p.id)!==-1&&(l.value===0?p.recommend=1:p.recommend=0)}),v.success("修改成功");break;case 2:y(a);break}},F=({params:a,row:l})=>{switch(a){case"update":c.value=!0;const p={...l};p.image=[{url:l.image,name:"book.jpg"}],Object.assign(d,p);break;case"delete":y([l.id]);break}},y=a=>{se(a).then(()=>{v.success("删除成功"),n()})};return{operateData:b,isDialog:c,currentForm:d,selectData:e,selectMenuList:m,powerfulTableData:s,header:t,tableFun:Q,handleResetSearch:()=>{Object.keys(s.listQuery).forEach((a,l)=>{["pageNum","pageSize"].indexOf(a)==-1&&(s.listQuery[a]="")})},handleBtnClick:F,refresh:a=>{if(a.id){let l=s.list.map(p=>p.id).indexOf(a.id);a.image=a.image[0].url,s.list[l]=a}else s.list.push({...a,image:a.image[0].url,id:s.list[s.list.length-1].id+1,iconfont:"vitehome-liulanliang",href:"https://gitee.com/abc1612565136/vite-admin"})},getList:n,handleComponentChange:D,handleBatchChange:_,handleSortCustom:f}}});const z=e=>(oe("data-v-f2cbdc82"),e=e(),re(),e),ge={class:"app-container"},be={class:"operate-container"},_e={class:"_flex _flex-align-center"},ye=z(()=>i("span",null,"筛选搜索",-1)),he={style:{"margin-top":"15px"}},ve={class:"screenForm"},De={class:"operate-container"},Fe={class:"_flex _flex-align-center"},Ce=z(()=>i("div",null,"数据列表",-1));function we(e,t,s,m,b,c){const d=B("Search"),n=ae,f=j,D=R,_=q,F=N,y=I,C=P,w=le,a=B("Tickets"),l=B("powerful-table"),p=B("Update");return g(),T("div",ge,[o(w,{class:"filter-container",style:{marginBottom:"20px"},shadow:e.defaultData.cardShadow},{default:r(()=>[i("div",be,[i("div",_e,[o(n,null,{default:r(()=>[o(d)]),_:1}),ye]),i("div",null,[o(f,{style:{float:"right"},type:"primary",onClick:t[0]||(t[0]=u=>e.getList())},{default:r(()=>[E(" 查询搜索 ")]),_:1}),o(f,{style:{float:"right","margin-right":"15px"},onClick:t[1]||(t[1]=u=>e.handleResetSearch())},{default:r(()=>[E(" 重置 ")]),_:1})])]),i("div",he,[o(C,{inline:!0,model:e.powerfulTableData.listQuery},{default:r(()=>[i("div",ve,[o(_,{label:"书名："},{default:r(()=>[o(D,{modelValue:e.powerfulTableData.listQuery.name,"onUpdate:modelValue":t[2]||(t[2]=u=>e.powerfulTableData.listQuery.name=u),placeholder:"请输入书名",style:{width:"80%"},clearable:""},null,8,["modelValue"])]),_:1}),o(_,{label:"书类型：",prop:"types"},{default:r(()=>[o(y,{modelValue:e.powerfulTableData.listQuery.types,"onUpdate:modelValue":t[3]||(t[3]=u=>e.powerfulTableData.listQuery.types=u),placeholder:"请选择"},{default:r(()=>[(g(!0),T(M,null,O(e.selectMenuList,u=>(g(),S(F,{key:u.value,label:u.label,value:u.value},null,8,["label","value"]))),128))]),_:1},8,["modelValue"])]),_:1})])]),_:1},8,["model"])])]),_:1},8,["shadow"]),o(w,{shadow:e.defaultData.cardShadow},{default:r(()=>[i("div",De,[i("div",Fe,[o(n,{style:{"font-size":"18px"}},{default:r(()=>[o(a)]),_:1}),Ce]),i("div",null,[o(f,{type:"primary",class:"btn-add",onClick:t[4]||(t[4]=()=>e.isDialog=!0)},{default:r(()=>[E(" 添加 ")]),_:1})])]),o(l,{ref:"Table","list-request":{listApi:e.tableFun,pageNoKey:"pageNum",listsKey:"list",responseKey:"data.data",listQuery:e.powerfulTableData.listQuery},header:e.header,isSelect:!0,tableName:"Table",operateData:e.operateData,selectData:e.selectData,"pagination-property":{total:e.powerfulTableData.total},onSizeChange:e.getList,onSortCustom:e.handleSortCustom,onComponentEvent:e.handleComponentChange,onBatchOperate:e.handleBatchChange,onBtnClick:e.handleBtnClick},null,8,["list-request","header","operateData","selectData","pagination-property","onSizeChange","onSortCustom","onComponentEvent","onBatchOperate","onBtnClick"])]),_:1},8,["shadow"]),o(p,{dialog:e.isDialog,"onUpdate:dialog":t[5]||(t[5]=u=>e.isDialog=u),currentForm:e.currentForm,"onUpdate:currentForm":t[6]||(t[6]=u=>e.currentForm=u),selectMenuList:e.selectMenuList,onRefresh:e.refresh},null,8,["dialog","currentForm","selectMenuList","onRefresh"])])}const ke=A(fe,[["render",we],["__scopeId","data-v-f2cbdc82"]]);export{ke as default};
