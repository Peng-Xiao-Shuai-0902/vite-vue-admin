import{O as q,d as x,q as T,S as h,bN as L,_ as z,o as V,f as v,g as u,w as l,j as o,J as w,C as J,k as m,a3 as $,a4 as G,c3 as Z,p as W,l as U,D as k,ak as Q,c4 as H,c5 as R,r as D,e as N,c6 as j,Q as K,R as Y,i as ee,E as ue}from"./index-e341999d.js";/* empty css             */import{b as M,a as O}from"./radio-group-dbd489df.js";import{E as X,a as P}from"./form-item-6cb2f183.js";const le=[{date:"2016-05-03",name:"汤姆",address:"No. 189, Grove St, Los Angeles"},{date:"2016-05-02",name:"汤姆",address:"No. 189, Grove St, Los Angeles"},{date:"2016-05-04",name:"汤姆",address:"No. 189, Grove St, Los Angeles"},{date:"2016-05-01",name:"汤姆",address:"No. 189, Grove St, Los Angeles"},{date:"2016-05-08",name:"汤姆",address:"No. 189, Grove St, Los Angeles"},{date:"2016-05-06",name:"汤姆",address:"No. 189, Grove St, Los Angeles"},{date:"2016-05-07",name:"汤姆",address:"No. 189, Grove St, Los Angeles"}],te=[{date:"2016-05-03",name:"Tom",state:"California",city:"Los Angeles",address:"No. 189, Grove St, Los Angeles",money:"999",zip:"CA 90036"},{date:"2016-05-02",name:"Tom",state:"California",city:"Los Angeles",address:"No. 189, Grove St, Los Angeles",money:"999",zip:"CA 90036"},{date:"2016-05-04",name:"Tom",state:"California",city:"Los Angeles",address:"No. 189, Grove St, Los Angeles",money:"999",zip:"CA 90036"},{date:"2016-05-01",name:"Tom",state:"California",city:"Los Angeles",address:"No. 189, Grove St, Los Angeles",money:"999",zip:"CA 90036"},{date:"2016-05-08",name:"Tom",state:"California",city:"Los Angeles",address:"No. 189, Grove St, Los Angeles",money:"999",zip:"CA 90036"},{date:"2016-05-06",name:"Tom",state:"California",city:"Los Angeles",address:"No. 189, Grove St, Los Angeles",money:"999",zip:"CA 90036"},{date:"2016-05-07",name:"Tom",state:"California",city:"Los Angeles",address:"No. 189, Grove St, Los Angeles",money:"999",zip:"CA 90036"}],oe=[{label:"参数",width:"200px",headerAlign:"left",props:[{prop:"property"}]},{label:"说明",props:[{prop:"description"}]},{label:"类型",width:"200px",props:[{prop:"type"}]},{label:"可选值",width:"200px",props:[{prop:"optionalVal"}]},{label:"默认值",width:"200px",props:[{prop:"defaultVal"}]}],ae=[{id:1,property:"exportData",description:"导出数据参数",type:"Array",optionalVal:"-",defaultVal:"-",children:[{id:3,property:"header",description:"表头数据",type:"Array",optionalVal:"-",defaultVal:"-"},{id:4,property:"prop",description:"字段名称数据",type:"Array",optionalVal:"-",defaultVal:"-"},{id:5,property:"list",description:"表格显示的数据",type:"Array",optionalVal:"-",defaultVal:"-"},{id:6,property:"multiHeader",description:"表格标题，表格上方显示的数据",type:"Array",optionalVal:"-",defaultVal:"-"},{id:7,property:"sheetName",description:"文档下方工作表页签名称",type:"String",optionalVal:"-",defaultVal:"sheet1"},{id:8,property:"merges",description:"需要合并的单元格数据，该属性与“multiHeader”配合使用，一个标题对应一个合并项数据",type:"Array",optionalVal:"-",defaultVal:"当只有一个标题时，默认合并第一行所有列"},{id:9,property:"border",description:"是否需要给每个单元格显示黑色边框，设置后优先级最高",type:"Boolean",optionalVal:"true，false",defaultVal:"-"},{id:10,property:"autoWidth",description:"是否需要自适应文档每列宽度，设置后优先级最高",type:"Boolean",optionalVal:"true，false",defaultVal:"-"},{id:11,property:"align",description:"单元格对齐方式，设置后优先级最高",type:"String",optionalVal:"center，left，right",defaultVal:"-"},{id:12,property:"stripe",description:"是否需要斑马纹，设置后优先级最高",type:"Boolean",optionalVal:"true，false",defaultVal:"-"},{id:13,property:"showSummary",description:"是否在最后一行开启合计功能",type:"Boolean",optionalVal:"true，false",defaultVal:"false"},{id:14,property:"summaryList",description:"合计数据",type:"Array",optionalVal:"-",defaultVal:"-"}]},{id:2,property:"configData",description:"导出配置参数",type:"Object",optionalVal:"-",defaultVal:"-",children:[{id:8,property:"fileName",description:"文档名称",type:"string | number",optionalVal:"-",defaultVal:"导出(XX条数据)"},{id:15,property:"border",description:"是否需要给每个单元格显示黑色边框，优先级低于exportData中的border",type:"Boolean",optionalVal:"true，false",defaultVal:"true"},{id:16,property:"autoWidth",description:"是否需要自适应文档每列宽度，优先级低于exportData中的autoWidth",type:"Boolean",optionalVal:"true，false",defaultVal:"true"},{id:17,property:"align",description:"单元格对齐方式，优先级低于exportData中的align",type:"String",optionalVal:"center，left，right",defaultVal:"center"},{id:18,property:"stripe",description:"是否需要斑马纹，优先级低于exportData中的stripe",type:"Boolean",optionalVal:"true，false",defaultVal:"false"}]}];function S(e=[{header:[],prop:[],list:[]}],t={}){q(()=>import("./exportToExcel-5ce4689b.js"),["assets/exportToExcel-5ce4689b.js","assets/index-e341999d.js","assets/index-8866b8a3.css"]).then(A=>{const E=[],c=[],b=[],r=[],i=[],n=[],f=[],d=[],F=[],_="导出("+e[0].list.length+"条数据)",C=t.fileName||_;t.fileName=C,e.forEach((s,p)=>{E.push(s.header||[]),c.push(g(s)),b.push(s.multiHeader||[]),i.push(s.merges||[]),r.push(s.sheetName||""),n.push(s.border||void 0),f.push(s.autoWidth||void 0),d.push(s.align||""),F.push(s.stripe||void 0)}),A.export_json_to_excel_sheet({headers:E,datas:c,multiHeaders:b,sheetNames:r,merges:i,borders:n,autoWidths:f,aligns:d,stripes:F},t);function g(s){const p=[];if(p.push(...y(s.prop,s.list)),s.showSummary){const B=[];B.push(...s.summaryList||[]),p.push(B)}return p}function y(s,p){return p.map(B=>s.map(a=>B[a]))}})}const ne=x({name:"",setup(){const e=T({tableData2:te,formInline2:{align:"center",border:!0,autoWidth:!0,stripe:!1,showSummary:!0,showUnit:!0,sumToFixed:2,sumText:"Total Cost",emptyText:"-"},sums:[""]});h(()=>{});const t=()=>{const E=[{prop:["date","name","state","city","address","money","zip"],list:e.tableData2,multiHeader:["Date","Delivery Info","Name","Address Info","State","City","Address","Money(RMB)","Zip"],merges:["A1:A3","B1:F1","B2:B3","C2:F2","C3:C3","D3:D3","E3:E3","F3:F3","G3:G3","A4:A6"],showSummary:e.formInline2.showSummary,summaryList:e.sums}];S(E,{border:e.formInline2.border,autoWidth:e.formInline2.autoWidth,align:e.formInline2.align,stripe:e.formInline2.stripe})},A=E=>{const{columns:c,data:b}=E,r=[];return c.forEach((i,n)=>{if(n===0){r[n]=e.formInline2.sumText;return}var f=e.formInline2.showUnit?i.label.substring(i.label.indexOf("(")+1,i.label.indexOf(")")):"";const d=b.map(F=>Number(F[i.property]));d.every(F=>isNaN(F))?r[n]=e.formInline2.emptyText:(r[n]=d.reduce((F,_)=>{const C=Number(_);return isNaN(C)?F:F+_},0),r[n]=Number(r[n]).toFixed(e.formInline2.sumToFixed||2)+" "+f)}),e.sums=r,r};return{...L(e),export2:t,getSummaries:A}}}),re=m("div",{class:"tipBox"},[o(" 复杂表格导出 "),m("div",{style:{"font-size":"13px",color:"var(--el-color-info)"}}," （多级表头，合计） ")],-1),se=m("i",{class:"el-icon-question"},null,-1),ie=m("h4",null,"多级表头参数说明：",-1),de=m("ul",null,[m("li",null," Data表头属于行合并，是从A1单元格合并到A3单元格，因此合并项数据为A1:A3； "),m("li",null," Delivery Info是列合并，从B1单元格合并到F1单元格，因此合并项数据为B1:F1； "),m("li",null,"如果没有合并项的单元格例如State合并项数据首尾相同为C3:C3；")],-1),pe=m("p",null,null,-1);function me(e,t,A,E,c,b){const r=$,i=G,n=X,f=M,d=O,F=Z,_=W,C=U,g=k,y=P,s=Q,p=H,B=R;return V(),v(w,null,[re,u(y,{inline:!0,model:e.formInline2},{default:l(()=>[u(n,{label:"对其方式："},{default:l(()=>[u(i,{modelValue:e.formInline2.align,"onUpdate:modelValue":t[0]||(t[0]=a=>e.formInline2.align=a),placeholder:"对其方式",style:{width:"100px"}},{default:l(()=>[u(r,{label:"靠左",value:"left"}),u(r,{label:"居中",value:"center"}),u(r,{label:"靠右",value:"right"})]),_:1},8,["modelValue"])]),_:1}),u(n,{label:"边框："},{default:l(()=>[u(d,{modelValue:e.formInline2.border,"onUpdate:modelValue":t[1]||(t[1]=a=>e.formInline2.border=a)},{default:l(()=>[u(f,{label:!0},{default:l(()=>[o("是")]),_:1}),u(f,{label:!1},{default:l(()=>[o("否")]),_:1})]),_:1},8,["modelValue"])]),_:1}),u(n,{label:"自适应宽度："},{default:l(()=>[u(d,{modelValue:e.formInline2.autoWidth,"onUpdate:modelValue":t[2]||(t[2]=a=>e.formInline2.autoWidth=a)},{default:l(()=>[u(f,{label:!0},{default:l(()=>[o("是")]),_:1}),u(f,{label:!1},{default:l(()=>[o("否")]),_:1})]),_:1},8,["modelValue"])]),_:1}),u(n,{label:"带斑马纹："},{default:l(()=>[u(d,{modelValue:e.formInline2.stripe,"onUpdate:modelValue":t[3]||(t[3]=a=>e.formInline2.stripe=a)},{default:l(()=>[u(f,{label:!0},{default:l(()=>[o("是")]),_:1}),u(f,{label:!1},{default:l(()=>[o("否")]),_:1})]),_:1},8,["modelValue"])]),_:1}),u(n,{label:"是否合计："},{default:l(()=>[u(d,{modelValue:e.formInline2.showSummary,"onUpdate:modelValue":t[4]||(t[4]=a=>e.formInline2.showSummary=a)},{default:l(()=>[u(f,{label:!0},{default:l(()=>[o("是")]),_:1}),u(f,{label:!1},{default:l(()=>[o("否")]),_:1})]),_:1},8,["modelValue"])]),_:1}),e.formInline2.showSummary?(V(),v(w,{key:0},[u(n,null,{label:l(()=>[o(" 是否需要单位 "),u(F,{placement:"top",title:"提示说明",width:200,trigger:"hover",content:"是否在合计数字后面显示单位，该单位来源于表头label设置在英文小括号”()“中的文本内容"},{reference:l(()=>[se]),_:1}),o(" ： ")]),default:l(()=>[u(d,{modelValue:e.formInline2.showUnit,"onUpdate:modelValue":t[5]||(t[5]=a=>e.formInline2.showUnit=a)},{default:l(()=>[u(f,{label:!0},{default:l(()=>[o("是")]),_:1}),u(f,{label:!1},{default:l(()=>[o("否")]),_:1})]),_:1},8,["modelValue"])]),_:1}),u(n,{label:"保留小数位："},{default:l(()=>[u(_,{style:{width:"100px"},modelValue:e.formInline2.sumToFixed,"onUpdate:modelValue":t[6]||(t[6]=a=>e.formInline2.sumToFixed=a),placeholder:"请输入"},{append:l(()=>[o("位")]),_:1},8,["modelValue"])]),_:1}),u(n,{label:"第一列文本内容："},{default:l(()=>[u(_,{style:{width:"100px"},modelValue:e.formInline2.sumText,"onUpdate:modelValue":t[7]||(t[7]=a=>e.formInline2.sumText=a),placeholder:"请输入"},null,8,["modelValue"])]),_:1}),u(n,{label:"无数据文本内容："},{default:l(()=>[u(_,{style:{width:"100px"},modelValue:e.formInline2.emptyText,"onUpdate:modelValue":t[8]||(t[8]=a=>e.formInline2.emptyText=a),placeholder:"请输入"},null,8,["modelValue"])]),_:1})],64)):J("",!0),u(n,null,{default:l(()=>[u(g,null,{default:l(()=>[u(C,{type:"primary",icon:"Files",onClick:e.export2},{default:l(()=>[o("导出")]),_:1},8,["onClick"])]),_:1})]),_:1})]),_:1},8,["model"]),ie,o(" 此处涉及到exportData导出数据的两个参数： "),m("ul",null,[m("li",null,[u(s,null,{default:l(()=>[o("multiHeader")]),_:1}),o("{Array}：表头名称数据。")]),m("li",null,[u(s,null,{default:l(()=>[o("merges：")]),_:1}),o("{Array}：合并项规则，需要合并的单元格数据，该属性与“multiHeader”配合使用，一个标题对应一个合并项。例如：['A1:A3', 'B1:F1', 'B2:B3', 'C2:F2', 'C3:C3', 'D3:D3', 'E3:E3','F3:F3', 'G3:G3']，其中每个元素中的A，B，C，D...代表表格的纵坐标， 1，2，3，4...代表表格的横坐标，一个纵坐标(字母)和一个横坐标(数字)结合确定一个单元格，参考Excel文档。 ")])]),o(" 以下表为例： "),de,pe,u(B,{ref:"multipleTable",data:e.tableData2,border:e.formInline2.border,stripe:e.formInline2.stripe,"summary-method":e.getSummaries,"show-summary":e.formInline2.showSummary,style:{width:"100%"}},{default:l(()=>[u(p,{prop:"date",align:e.formInline2.align,label:"Date",width:"150"},null,8,["align"]),u(p,{label:"Delivery Info"},{default:l(()=>[u(p,{prop:"name",align:e.formInline2.align,label:"Name",width:"120"},null,8,["align"]),u(p,{label:"Address Info"},{default:l(()=>[u(p,{prop:"state",align:e.formInline2.align,label:"State",width:"120"},null,8,["align"]),u(p,{prop:"city",align:e.formInline2.align,label:"City",width:"120"},null,8,["align"]),u(p,{prop:"address",align:e.formInline2.align,label:"Address"},null,8,["align"]),u(p,{prop:"money",align:e.formInline2.align,label:"Money(RMB)",width:"120"},null,8,["align"]),u(p,{prop:"zip",align:e.formInline2.align,label:"Zip",width:"120"},null,8,["align"])]),_:1})]),_:1})]),_:1},8,["data","border","stripe","summary-method","show-summary"])],64)}const fe=z(ne,[["render",me]]),Fe=x({components:{multipleHeadersExport:fe},setup(){const e=D(),t=T({tableData1:le,formInline1:{subtitle:"XXX系统",align:"center",border:!0,autoWidth:!0,stripe:!1}});let A=D(ae),E=D(oe);const c=()=>{const r=[{header:["Date","Name","Address"],prop:["date","name","address"],list:t.tableData1,multiHeader:[t.formInline1.subtitle]}];S(r,{border:t.formInline1.border,autoWidth:t.formInline1.autoWidth,align:t.formInline1.align,stripe:t.formInline1.stripe})},b=()=>{const r=[{header:["Date","Name","Address"],prop:["date","name","address"],list:t.tableData1,multiHeader:[t.formInline1.subtitle],border:t.formInline1.border,autoWidth:t.formInline1.autoWidth,align:t.formInline1.align,stripe:t.formInline1.stripe},{header:["Date","Name","Address"],list:t.tableData1,multiHeader:[t.formInline1.subtitle],border:t.formInline1.border,autoWidth:t.formInline1.autoWidth,align:t.formInline1.align,stripe:t.formInline1.stripe}];S(r,{fileName:"多表导出"})};return h(()=>{}),{list:A,config:E,multipleTable:e,onMounted:h,export1:c,export3:b,...L(t)}}});const I=e=>(K("data-v-4fab69d1"),e=e(),Y(),e),Ee=j('<div class="tipBox warning" data-v-4fab69d1><span data-v-4fab69d1> 使用 <a style="color:#409eff;" target="_blank" href="https://github.com/exceljs/exceljs/blob/master/README_zh.md" data-v-4fab69d1>xlsx</a> 实现导入数据<span style="font-size:13px;color:var(--el-color-info);" data-v-4fab69d1>（注：该示例仅供参考，具体逻辑请自行实现）</span></span></div><div class="tipBox" data-v-4fab69d1> 基础表格导出 <div style="font-size:13px;color:var(--el-color-info);" data-v-4fab69d1></div></div>',2),_e=I(()=>m("p",null,null,-1)),ce=I(()=>m("p",null,null,-1)),be=I(()=>m("p",null,null,-1)),Ae=I(()=>m("div",{class:"tipBox"},[o(" 多表格导出 "),m("div",{style:{"font-size":"13px",color:"var(--el-color-info)"}}," （一次导出上面两个表格，通过xlsx文档下面sheet页签切换） ")],-1)),Ce=j('<p data-v-4fab69d1></p><div class="tipBox warning" data-v-4fab69d1><span data-v-4fab69d1> 参数文档<span style="font-size:13px;color:var(--el-color-info);" data-v-4fab69d1>（为了更方便使用，我们为此封装了一个公共方法用于导出，通过传入参数数据的形式控制导出内容，目前仅支持基础导出功能，也就是上面两个导出表格例子展示的内容，其他业务逻辑可以参考 <a style="color:#409eff;" target="_blank" href="https://github.com/exceljs/exceljs/blob/master/README_zh.md" data-v-4fab69d1>xlsx</a> 官方文档自行实现）</span></span></div><div class="tipBox" data-v-4fab69d1> 公共方法及参数 <div style="font-size:13px;color:var(--el-color-info);" data-v-4fab69d1> （exportExcelSheet(exportData,configData)） </div></div>',3);function Be(e,t,A,E,c,b){const r=W,i=X,n=$,f=G,d=M,F=O,_=U,C=k,g=P,y=H,s=R,p=N("multipleHeadersExport"),B=N("powerful-table");return V(),v(w,null,[Ee,m("div",null,[u(g,{inline:!0,model:e.formInline1,size:"small"},{default:l(()=>[u(i,{label:"副标题："},{default:l(()=>[u(r,{modelValue:e.formInline1.subtitle,"onUpdate:modelValue":t[0]||(t[0]=a=>e.formInline1.subtitle=a),placeholder:"副标题"},null,8,["modelValue"])]),_:1}),u(i,{label:"对其方式："},{default:l(()=>[u(f,{modelValue:e.formInline1.align,"onUpdate:modelValue":t[1]||(t[1]=a=>e.formInline1.align=a),placeholder:"对其方式",style:{width:"100px"}},{default:l(()=>[u(n,{label:"靠左",value:"left"}),u(n,{label:"居中",value:"center"}),u(n,{label:"靠右",value:"right"})]),_:1},8,["modelValue"])]),_:1}),u(i,{label:"边框："},{default:l(()=>[u(F,{modelValue:e.formInline1.border,"onUpdate:modelValue":t[2]||(t[2]=a=>e.formInline1.border=a)},{default:l(()=>[u(d,{label:!0},{default:l(()=>[o("是")]),_:1}),u(d,{label:!1},{default:l(()=>[o("否")]),_:1})]),_:1},8,["modelValue"])]),_:1}),u(i,{label:"自适应宽度："},{default:l(()=>[u(F,{modelValue:e.formInline1.autoWidth,"onUpdate:modelValue":t[3]||(t[3]=a=>e.formInline1.autoWidth=a)},{default:l(()=>[u(d,{label:!0},{default:l(()=>[o("是")]),_:1}),u(d,{label:!1},{default:l(()=>[o("否")]),_:1})]),_:1},8,["modelValue"])]),_:1}),u(i,{label:"带斑马纹："},{default:l(()=>[u(F,{modelValue:e.formInline1.stripe,"onUpdate:modelValue":t[4]||(t[4]=a=>e.formInline1.stripe=a)},{default:l(()=>[u(d,{label:!0},{default:l(()=>[o("是")]),_:1}),u(d,{label:!1},{default:l(()=>[o("否")]),_:1})]),_:1},8,["modelValue"])]),_:1}),u(i,null,{default:l(()=>[u(C,null,{default:l(()=>[u(_,{type:"primary",icon:"files",size:"small",onClick:e.export1},{default:l(()=>[o("导出")]),_:1},8,["onClick"])]),_:1})]),_:1})]),_:1},8,["model"]),_e,u(s,{data:e.tableData1,height:"200",border:e.formInline1.border,stripe:e.formInline1.stripe,style:{width:"100%"}},{default:l(()=>[u(y,{prop:"date",align:e.formInline1.align,label:"Date",width:"180"},null,8,["align"]),u(y,{prop:"name",align:e.formInline1.align,label:"Name",width:"180"},null,8,["align"]),u(y,{prop:"address",align:e.formInline1.align,label:"Address"},null,8,["align"])]),_:1},8,["data","border","stripe"]),ce,u(p),be,Ae,u(C,null,{default:l(()=>[u(_,{type:"primary",icon:"files",size:"small",onClick:e.export3},{default:l(()=>[o("多表导出")]),_:1},8,["onClick"])]),_:1}),Ce,u(B,{list:e.list,header:e.config,isPagination:!1},null,8,["list","header"])])],64)}const ye=z(Fe,[["render",Be],["__scopeId","data-v-4fab69d1"]]),ge=x({name:"Export",components:{customizeExport:ye},setup(){const e=T({});return h(()=>{}),{onMounted:h,...L(e)}}});const he={class:"app-container"};function Ve(e,t,A,E,c,b){const r=ee,i=N("customizeExport"),n=ue;return V(),v("div",he,[u(n,{shadow:e.defaultData.cardShadow},{default:l(()=>[u(r),u(i)]),_:1},8,["shadow"])])}const Ne=z(ge,[["render",Ve],["__scopeId","data-v-504be6b7"]]);export{Ne as default};
