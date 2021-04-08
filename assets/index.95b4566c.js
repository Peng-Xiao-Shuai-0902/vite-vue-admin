import{_ as e}from"./index.8900bbb7.js";import{e as a,q as t,v as o,r as l,o as s,c as n,a as i,F as r,j as d,t as c,A as m,d as h,f as p,k as u}from"./vendor.3c20cdd8.js";import{i as v,L as y}from"./index.bc823562.js";import{s as f,u as g}from"./index.4e0d8f0d.js";var w=a({props:{count:{type:Object,default:{}},height:{type:[Number,String],default:50}},components:{}});const b=m("data-v-6700b6a9");t("data-v-6700b6a9");const x={style:{"margin-bottom":"20px"}},S={class:"warp"},k={class:"text"},C={class:"num"};o();const D=b(((e,a,t,o,m,h)=>{const p=l("el-card");return s(),n("div",x,[i("div",{class:"grid",style:{height:e.height+"px"}},[(s(!0),n(r,null,d(e.count,((a,t)=>(s(),n(p,{key:a.value,class:["card-panel","item"+t],shadow:e.defalutData.cardShadow,"body-style":{background:a.color,padding:"10px",height:e.height+"px",boxSizing:"border-box"}},{default:b((()=>[i("div",{class:["icon-people","viteIcon",a.icon]},null,2),i("div",S,[i("div",k,c(a.title),1),i("div",C,c(a.value||0),1)])])),_:2},1032,["class","shadow","body-style"])))),128))],4)])}));w.render=D,w.__scopeId="data-v-6700b6a9";const _={props:{echartsId:String,dataECharts:Object,title:String},data:()=>({}),mounted(){},watch:{dataECharts:{deep:!0,immediate:!0,handler(e){console.log(e),this.drawChart(this.dataECharts)}}},mounted(){},methods:{drawChart(e){var a=this.$refs.chart;if(a){let t=v(a),o={tooltip:{trigger:"axis"},legend:{data:e.series.map((e=>e.name))},grid:{left:"5%",right:"3%"},toolbox:{show:!0,feature:{dataZoom:{yAxisIndex:"none"},dataView:{readOnly:!1},magicType:{type:["line","bar"]},restore:{},saveAsImage:{}}},xAxis:{type:"category",boundaryGap:!1,data:e.xAxisData},yAxis:{type:"value",axisLabel:{formatter:"{value} 元"}},series:[{name:e.series[0].name,type:"line",data:e.series[0].data,markPoint:{data:[{type:"max",name:"最大值"},{type:"min",name:"最小值"}]},itemStyle:{color:"#5bd1db"},lineStyle:{width:3},markLine:{label:{show:!0,position:"middle",formatter:"{b}: {c} 元"},symbol:"none",data:[{type:"average",name:"平均值"}]}},{name:e.series[1].name,type:"line",data:e.series[1].data,markPoint:{data:[{type:"max",name:"最大值"},{type:"min",name:"最小值"}]},itemStyle:{color:"#00ef09"},lineStyle:{width:3},markLine:{label:{show:!0,position:"middle",formatter:"{b}: {c} 元"},symbol:"none",data:[{type:"average",name:"平均值"}]}},{name:e.series[2].name,type:"line",data:e.series[2].data,markPoint:{data:[{type:"max",name:"最大值"},{type:"min",name:"最小值"}]},itemStyle:{color:"#EB5252"},lineStyle:{width:3},markLine:{label:{show:!0,position:"middle",formatter:"{b}: {c} 元"},symbol:"none",data:[{type:"average",name:"平均值"}]}},{name:e.series[3].name,type:"line",data:e.series[3].data,markPoint:{data:[{type:"max",name:"最大值"},{type:"min",name:"最小值"}]},itemStyle:{color:"#C8B2F4"},lineStyle:{width:3},markLine:{label:{show:!0,position:"middle",formatter:"{b}: {c} 元"},symbol:"none",data:[{type:"average",name:"平均值"}]}},{name:e.series[4].name,type:"line",data:e.series[4].data,markPoint:{data:[{type:"max",name:"最大值"},{type:"min",name:"最小值"}]},itemStyle:{color:"#FFCB8C"},lineStyle:{width:3},markLine:{label:{show:!0,position:"middle",formatter:"{b}: {c} 元"},symbol:"none",data:[{type:"average",name:"平均值"}]}}]};t.setOption(o)}}}},I={class:""};_.render=function(e,a,t,o,l,r){return s(),n("div",I,[i("div",{id:t.echartsId,ref:"chart",style:{width:"100%",height:"250px"}},null,8,["id"])])};let E=[{label:"姓名",poprs:[{popr:"name"}]},{label:"头像",poprs:[{type:"image",popr:"head",data:{preview:!0,style:{width:"40px",height:"40px",borderRadius:"50%"}}}]},{label:"性别",poprs:[{popr:"gender"}]},{label:"内容",poprs:[{popr:"content"}]},{label:"时间",poprs:[{popr:"date"}]},{label:"邮箱",poprs:[{popr:"email"}]},{label:"状态",poprs:[{popr:"status",filter:[{key:!0,value:"提交成功"},{key:!1,value:"提交失败"}]}]}];var j=a({name:"home",components:{homeEcharts:e,PanelGroup:w,lineBarEcharts:_},setup(){const e=[{opacity:.4,color:new y(0,0,0,1,[{offset:0,color:g().state.settings.themeColor},{offset:1,color:"rgba(255, 255, 255,0)"}])},{opacity:.4,color:new y(0,0,0,1,[{offset:0,color:"#55bcff"},{offset:1,color:"rgba(255, 255, 255,0)"}])}],a=[g().state.settings.themeColor,"#55bcff","#F6A829","#646cff"];let t=h([{icon:"vitehome-user",title:"粉丝",value:"",key:"users",color:g().state.settings.themeColor},{icon:"vitehome-wengzhang",title:"文章",value:"",key:"shoppings",color:"#55bcff"},{icon:"vitehome-liulanliang",title:"浏览量",value:"",key:"pageview",color:"#646cff "},{icon:"vitehome-done",title:"已提交",value:"",key:"done",color:"#F6A829 "}]),o=h({value:{}}),l=h({value:{}}),s=h(null),n=h({value:[]}),i=p(0),r=h(null),d=h(null),c=h({value:{},chart:{}}),m=h({pageSize:3,pageNum:1}),u=h({value:[]}),v=h(E),w=p("Seven");function b(t,l="Seven"){var s;w.value=l,n.value=[],(s={status:t,period:l},f({url:"home/chart",params:s})).then((t=>{t.data.homeDateInfoResult.forEach(((t,o)=>{t.areaStyle=e[o],n.value.push({name:t.name,color:a[o]})})),o.value=t.data}))}function x(e){var a;Object.assign(m,e||{}),(a=m,f({url:"home/table",params:a})).then((e=>{u.value=e.data.list}))}return x(),f({url:"home/count"}).then((e=>{t.forEach((a=>{a.value=e.data[a.key]}))})),b(0),f({url:"home/pageviewChart"}).then((e=>{l.value=e.data})),f({url:"home/earnings"}).then((a=>{c.value=a.data.money,a.data.chart.homeDateInfoResult.forEach(((a,t)=>{a.areaStyle=e[t]})),c.chart=a.data.chart})),{count:t,chart:o,pageviewData:l,earnings:c,colors:a,list:u,tbConfig:v,current:i,user:s,userLineColor:n,findTime:w,reform:r,handleGetTable:x,investigation:d,typeSwitch:function(e){i.value=e,b(e)},command:function(e){b(i.value,e)}}}});const L=m("data-v-45312a9f");t("data-v-45312a9f");const P={class:"grid"},A={class:"eachDiv eachDiv1"},F={class:"typeSwitch"},B={class:"lineColor"},O={class:"timeDropdown"},z={class:"el-dropdown-link"},G=i("i",{class:"el-icon-arrow-down el-icon--right"},null,-1),M=u("Month"),T=u("Fifteen"),R=u("Seven"),N={class:"eachDiv eachDiv2"},q={class:"moneyGrid"},V=i("div",{class:"viteIconBg"},[i("i",{class:"viteIcon vitehome-daymoney"})],-1),Z={class:"text"},$={class:"money"},H=i("span",{class:"title"},"今日收益",-1),J={class:"increase"},K=i("div",{class:"viteIconBg yellow"},[i("i",{class:"viteIcon vitehome-zongshouyi"})],-1),Q={class:"text"},U={class:"money"},W=i("span",{class:"title"},"总收益",-1),X={class:"increase"},Y={class:"eachDiv eachDiv3"},ee={class:"echartsBox"},ae={class:"un-handle-layout"},te={class:"eachDiv eachDiv4"},oe=i("h3",{style:{margin:"0 0 10px 0",display:"flex","justify-content":"space-between"}},[i("span",null,"提交列表")],-1),le={class:"un-handle-layout"};o();const se=L(((e,a,t,o,m,h)=>{const p=l("panel-group"),v=l("el-dropdown-item"),y=l("el-dropdown-menu"),f=l("el-dropdown"),g=l("homeEcharts"),w=l("el-card"),b=l("powerful-table");return s(),n("div",null,[i("div",P,[i("div",A,[i(p,{count:e.count,height:90},null,8,["count"]),i(w,{shadow:e.defalutData.cardShadow},{default:L((()=>[i(g,{isSlot:!0,echartsId:"chart",height:400,colors:e.colors,information:e.chart.value,title:"12个月用户登录曲线图",types:"line"},{default:L((()=>[i("div",F,[(s(!0),n(r,null,d(e.count,((a,t)=>(s(),n("div",{key:"switch"+t,style:{background:e.current==t?e.themeColor:"",transition:"all .2s"},class:{"s-active":e.current==t},onClick:a=>e.typeSwitch(t)},c(a.title),15,["onClick"])))),128))])])),lineColor:L((()=>[i("div",B,[(s(!0),n(r,null,d(e.userLineColor.value,(e=>(s(),n("div",{key:e.color},[i("i",{style:{background:e.color}},null,4),i("span",null,c(e.name),1)])))),128))])])),timeSwiper:L((()=>[i("div",O,[i(f,{onCommand:e.command},{dropdown:L((()=>[i(y,null,{default:L((()=>[i(v,{command:"Month"},{default:L((()=>[M])),_:1}),i(v,{command:"Fifteen"},{default:L((()=>[T])),_:1}),i(v,{command:"Seven"},{default:L((()=>[R])),_:1})])),_:1})])),default:L((()=>[i("span",z,[u(c(e.findTime),1),G])])),_:1},8,["onCommand"])])])),_:1},8,["colors","information"])])),_:1},8,["shadow"])]),i("div",N,[i("div",q,[i(w,{shadow:e.defalutData.cardShadow,class:"eachDiv"},{default:L((()=>[V,i("div",Z,[i("div",$,"￥"+c(e.earnings.value.dayMoney),1),H]),i("div",J,[i("i",{class:"el-icon-top",style:{color:e.themeColor}},c(e.earnings.value.dayPercentage)+"%",5)])])),_:1},8,["shadow"]),i(w,{shadow:e.defalutData.cardShadow,class:"eachDiv"},{default:L((()=>[K,i("div",Q,[i("div",U,"￥"+c(e.earnings.value.totalMoney),1),W]),i("div",X,[i("i",{class:"el-icon-top",style:{color:e.themeColor}},c(e.earnings.value.totalPercentage)+"%",5)])])),_:1},8,["shadow"]),i(w,{shadow:e.defalutData.cardShadow,"body-style":{padding:"20px"},class:"eachDiv eachDiv-3"},{default:L((()=>[i(g,{echartsId:"earnings",height:320,colors:e.colors,information:e.earnings.chart,types:"line",title:"收益折线图"},null,8,["colors","information"])])),_:1},8,["shadow"])])]),i("div",Y,[i(w,{shadow:e.defalutData.cardShadow},{default:L((()=>[i("div",ee,[i("div",ae,[i(g,{echartsId:"pageviewData",height:270,colors:e.colors,information:e.pageviewData.value,types:"homeCake",title:"浏览量饼状图"},null,8,["colors","information"])])])])),_:1},8,["shadow"])]),i("div",te,[i(w,{shadow:e.defalutData.cardShadow},{default:L((()=>[oe,i("div",le,[i(b,{isSelect:!1,isPagination:!1,list:e.list.value,header:e.tbConfig},null,8,["list","header"])])])),_:1},8,["shadow"])])])])}));j.render=se,j.__scopeId="data-v-45312a9f";export default j;
