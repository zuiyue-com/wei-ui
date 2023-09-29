/*!
 *  build: Vue  Admin Plus
 *  copyright: vue-admin-beautiful.com
 *  time: 2023-09-28 17:16:01
 */
"use strict";(self["webpackChunkadmin_plus"]=self["webpackChunkadmin_plus"]||[]).push([[193,2767,3590,9295,2467,1703,4233],{16273:function(e,t,a){a.d(t,{Z:function(){return m}});var n=a(30032),o=(a(3241),a(91154),a(97830)),r=(a(13768),a(66252)),i=a(2262),s=a(3577),l=a(22201),d=(0,r.aZ)({__name:"index",props:{header:{type:String,default:""},bodyStyle:{type:Object,default:()=>({})},shadow:{type:String,default:""},skeleton:{type:Boolean,default:!1},skeletonRows:{type:Number,default:4}},setup(e){let t=null;const a=(0,i.iH)(!0);return t=setTimeout((()=>{a.value=!1}),500),(0,l.iS)(((e,a,n)=>{clearInterval(t),n()})),(t,l)=>{const d=o.vk,c=n.Kf;return(0,r.wg)(),(0,r.j4)(c,{"body-style":e.bodyStyle,class:"vab-card",shadow:e.shadow},(0,r.Nv)({default:(0,r.w5)((()=>[e.skeleton?((0,r.wg)(),(0,r.j4)(d,{key:0,animated:"",loading:(0,i.SU)(a),rows:e.skeletonRows},{default:(0,r.w5)((()=>[(0,r.WI)(t.$slots,"default",{class:"vab-card-transition"})])),_:3},8,["loading","rows"])):(0,r.WI)(t.$slots,"default",{key:1,class:"vab-card-transition"})])),_:2},[t.$slots.header||e.header?{name:"header",fn:(0,r.w5)((()=>[(0,r.WI)(t.$slots,"header",{},(()=>[(0,r.Uk)((0,s.zw)(e.header),1)]))])),key:"0"}:void 0]),1032,["body-style","shadow"])}}});function c(e){e.__source="library/components/VabCard/index.vue"}var u=a(83744);"function"===typeof c&&c(d);const p=(0,u.Z)(d,[["__scopeId","data-v-391150ea"]]);var m=p},12149:function(e,t,a){a.r(t),a.d(t,{default:function(){return u}});var n=a(16273),o=a(66252);function r(e,t,a,r,i,s){const l=(0,o.up)("vab-icon"),d=(0,o.up)("vab-chart"),c=n.Z;return(0,o.wg)(),(0,o.j4)(c,{class:"branch",shadow:"hover",skeleton:""},{header:(0,o.w5)((()=>[(0,o._)("span",null,[(0,o.Wm)(l,{icon:"donut-chart-fill"}),(0,o.Uk)(" 分布 ")])])),default:(0,o.w5)((()=>[(0,o.Wm)(d,{class:"branch-echart","init-options":e.initOptions,option:e.option,theme:"vab-echarts-theme"},null,8,["init-options","option"])])),_:1})}var i=a(16501),s=(0,o.aZ)({components:{VabChart:i["default"]},data(){return{initOptions:{renderer:"svg"},option:{tooltip:{trigger:"item"},series:[{name:"访问来源",type:"pie",radius:["50%","70%"],itemStyle:{borderRadius:10,borderColor:"#fff",borderWidth:2},emphasis:{label:{show:!0}},data:[{value:1048,name:"搜索引擎"},{value:735,name:"直接访问"},{value:580,name:"邮件营销"},{value:484,name:"联盟广告"},{value:300,name:"视频广告"}]}]}}}});function l(e){e.__source="src/views/index/components/Branch.vue"}var d=a(83744);"function"===typeof l&&l(s);const c=(0,d.Z)(s,[["render",r]]);var u=c},19287:function(e,t,a){a.r(t),a.d(t,{default:function(){return u}});var n=a(16273),o=a(66252);function r(e,t,a,r,i,s){const l=(0,o.up)("vab-icon"),d=(0,o.up)("vab-chart"),c=n.Z;return(0,o.wg)(),(0,o.j4)(c,{class:"rank",shadow:"hover",skeleton:""},{header:(0,o.w5)((()=>[(0,o._)("span",null,[(0,o.Wm)(l,{icon:"align-top"}),(0,o.Uk)(" 消費排行 ")])])),default:(0,o.w5)((()=>[(0,o.Wm)(d,{class:"rank-echart","init-options":e.initOptions,option:e.option,theme:"vab-echarts-theme"},null,8,["init-options","option"])])),_:1})}var i=a(16501),s=(0,o.aZ)({components:{VabChart:i["default"]},data(){return{initOptions:{renderer:"svg"},option:{tooltip:{trigger:"axis",extraCssText:"z-index:1"},grid:{top:"0%",left:"2%",right:"20%",bottom:"0%",containLabel:!0},xAxis:[{splitLine:{show:!1},type:"value",show:!1}],yAxis:[{splitLine:{show:!1},axisLine:{show:!1},type:"category",axisTick:{show:!1},data:["good luck","曲丽丽","付小小","林东东","周星星","朱偏右"]}],series:[{name:"累计消费",type:"bar",barWidth:15,label:{show:!0,position:"right",fontSize:12,formatter:({data:e})=>`${e}万元`},itemStyle:{borderRadius:10,borderColor:"#fff",borderWidth:2},data:[23,54,68,76,87,99]}]}}}});function l(e){e.__source="src/views/index/components/Rank.vue"}var d=a(83744);"function"===typeof l&&l(s);const c=(0,d.Z)(s,[["render",r]]);var u=c},82467:function(e,t,a){a.r(t),a.d(t,{default:function(){return f}});var n=a(16273),o=a(27977),r=(a(3241),a(40355),a(96872),a(3837)),i=(a(81010),a(76128)),s=(a(74828),a(50363),a(66252));const l={class:"tabs"};function d(e,t,a,d,c,u){const p=r.$Y,m=i.GT,f=r.eI,v=o.p8,b=o.Ub,h=n.Z;return(0,s.wg)(),(0,s.iD)("div",l,[(0,s.Wm)(h,{class:"tabs-card",shadow:"hover"},{default:(0,s.w5)((()=>[(0,s.Wm)(b,{modelValue:e.activeName,"onUpdate:modelValue":t[0]||(t[0]=t=>e.activeName=t)},{default:(0,s.w5)((()=>[(0,s.Wm)(v,{label:"配送管理",name:"first"},{default:(0,s.w5)((()=>[(0,s.Wm)(f,{data:e.tableData,height:"280"},{empty:(0,s.w5)((()=>[(0,s.Wm)(m,{class:"vab-data-empty",description:"暂无数据"})])),default:(0,s.w5)((()=>[(0,s.Wm)(p,{label:"日期",prop:"date"}),(0,s.Wm)(p,{label:"配送信息"},{default:(0,s.w5)((()=>[(0,s.Wm)(p,{label:"姓名",prop:"name"}),(0,s.Wm)(p,{label:"省份",prop:"province"}),(0,s.Wm)(p,{label:"市区",prop:"city"}),(0,s.Wm)(p,{label:"地址",prop:"address"}),(0,s.Wm)(p,{label:"邮编",prop:"zip"})])),_:1})])),_:1},8,["data"])])),_:1}),(0,s.Wm)(v,{label:"区域管理",name:"second"},{default:(0,s.w5)((()=>[(0,s.Wm)(f,{data:e.tableData,height:"280"},{empty:(0,s.w5)((()=>[(0,s.Wm)(m,{class:"vab-data-empty",description:"暂无数据"})])),default:(0,s.w5)((()=>[(0,s.Wm)(p,{label:"日期",prop:"date"}),(0,s.Wm)(p,{label:"区域信息"},{default:(0,s.w5)((()=>[(0,s.Wm)(p,{label:"姓名",prop:"name"}),(0,s.Wm)(p,{label:"省份",prop:"province"}),(0,s.Wm)(p,{label:"市区",prop:"city"}),(0,s.Wm)(p,{label:"地址",prop:"address"}),(0,s.Wm)(p,{label:"邮编",prop:"zip"})])),_:1})])),_:1},8,["data"])])),_:1})])),_:1},8,["modelValue"])])),_:1})])}var c=(0,s.aZ)({data(){return{activeName:"first",tableData:[{date:"2016-05-03",name:"王小虎",province:"上海",city:"普陀区",address:"上海市普陀区金沙江路 1518 弄",zip:200333},{date:"2016-05-02",name:"王小虎",province:"上海",city:"普陀区",address:"上海市普陀区金沙江路 1518 弄",zip:200333},{date:"2016-05-04",name:"王小虎",province:"上海",city:"普陀区",address:"上海市普陀区金沙江路 1518 弄",zip:200333},{date:"2016-05-01",name:"王小虎",province:"上海",city:"普陀区",address:"上海市普陀区金沙江路 1518 弄",zip:200333},{date:"2016-05-08",name:"王小虎",province:"上海",city:"普陀区",address:"上海市普陀区金沙江路 1518 弄",zip:200333},{date:"2016-05-06",name:"王小虎",province:"上海",city:"普陀区",address:"上海市普陀区金沙江路 1518 弄",zip:200333},{date:"2016-05-07",name:"王小虎",province:"上海",city:"普陀区",address:"上海市普陀区金沙江路 1518 弄",zip:200333}]}}});function u(e){e.__source="src/views/index/components/Tabs.vue"}var p=a(83744);"function"===typeof u&&u(c);const m=(0,p.Z)(c,[["render",d],["__scopeId","data-v-53e6f2a4"]]);var f=m},31703:function(e,t,a){a.r(t),a.d(t,{default:function(){return h}});var n=a(16273),o=a(66252),r=a(3577);const i={class:"right-icon"},s={class:"bottom"};function l(e,t,a,l,d,c){const u=(0,o.up)("vab-count"),p=(0,o.up)("vab-icon"),m=n.Z;return(0,o.wg)(),(0,o.j4)(m,{class:(0,r.C_)(["top-card","top-card-"+e.background]),shadow:"hover"},{default:(0,o.w5)((()=>[(0,o._)("span",null,(0,r.zw)(e.title),1),(0,o._)("p",null,[(0,o.Wm)(u,{decimals:e.countConfig.decimals,duration:e.countConfig.duration,"end-val":e.countConfig.endVal,prefix:e.countConfig.prefix,separator:e.countConfig.separator,"start-val":e.countConfig.startVal,suffix:e.countConfig.suffix},null,8,["decimals","duration","end-val","prefix","separator","start-val","suffix"])]),(0,o._)("div",i,[(0,o.Wm)(p,{icon:e.icon},null,8,["icon"])]),(0,o._)("div",s,[(0,o.Uk)(" 自上周以来 "),(0,o.Wm)(p,{icon:"arrow-up-line"}),(0,o._)("span",null,(0,r.zw)(e.percentage),1)])])),_:1},8,["class"])}var d=a(96486),c=a.n(d),u=a(22),p=a(2262),m=(0,o.aZ)({name:"TopCard",components:{VabCount:u["default"]},props:{background:{type:String,default:"white"},title:{type:String,default:"Test"},icon:{type:String,default:"album-line"},percentage:{type:String,default:"10%"},countConfig:{type:Object,default:()=>({startVal:0,endVal:c().random(1e3,2e4),decimals:0,prefix:"",suffix:"",separator:",",duration:8e3})}},setup(){const e=(0,p.qj)({});return{...(0,p.BK)(e)}}});function f(e){e.__source="src/views/index/components/TopCard.vue"}var v=a(83744);"function"===typeof f&&f(m);const b=(0,v.Z)(m,[["render",l],["__scopeId","data-v-44f98028"]]);var h=b},69522:function(e,t,a){a.r(t),a.d(t,{default:function(){return p}});var n=a(16273),o=a(66252);function r(e,t,a,r,i,s){const l=(0,o.up)("vab-icon"),d=(0,o.up)("vab-chart"),c=n.Z;return(0,o.wg)(),(0,o.j4)(c,{class:"trend",shadow:"hover",skeleton:""},{header:(0,o.w5)((()=>[(0,o._)("span",null,[(0,o.Wm)(l,{icon:"line-chart-fill"}),(0,o.Uk)(" 趋势 ")])])),default:(0,o.w5)((()=>[(0,o.Wm)(d,{class:"trend-echart","init-options":e.initOptions,option:e.option,theme:"vab-echarts-theme"},null,8,["init-options","option"])])),_:1})}var i=a(16501),s=a(2262),l=(0,o.aZ)({components:{VabChart:i["default"]},setup(){const e=(0,s.qj)({initOptions:{renderer:"svg"},option:{tooltip:{trigger:"axis",extraCssText:"z-index:1"},grid:{top:"4%",left:"2%",right:"2%",bottom:"0%",containLabel:!0},xAxis:[{type:"category",data:["1月","2月","3月","4月","5月","6月","7月","8月","9月","10月","11月","12月"],boundaryGap:!1}],yAxis:[{type:"value"}],series:[{name:"签单",type:"line",data:[1295,3020,1330,512,4463,2214,3330,2412,1205,820,3330,912],symbol:"circle",smooth:!0,yAxisIndex:0,showSymbol:!1,areaStyle:{opacity:.8}},{name:"回款",type:"line",data:[2905,2020,1730,128,963,4614,630,1912,1005,1782,1530,912],symbol:"circle",smooth:!0,yAxisIndex:0,showSymbol:!1,areaStyle:{opacity:.8}}]}});return{...(0,s.BK)(e)}}});function d(e){e.__source="src/views/index/components/Trend.vue"}var c=a(83744);"function"===typeof d&&d(l);const u=(0,c.Z)(l,[["render",r]]);var p=u},40278:function(e,t,a){a.r(t),a.d(t,{default:function(){return g}});var n=a(73632),o=(a(3241),a(74965),a(22040)),r=(a(99426),a(66252));const i={class:"dashboard-container"};function s(e,t,a,s,l,d){const c=(0,r.up)("top-card"),u=o.Dv,p=(0,r.up)("trend"),m=(0,r.up)("branch"),f=(0,r.up)("rank"),v=(0,r.up)("tabs"),b=n.dq;return(0,r.wg)(),(0,r.iD)("div",i,[(0,r.Wm)(b,{gutter:20},{default:(0,r.w5)((()=>[(0,r.Wm)(u,{lg:6,md:12,sm:24,xl:6,xs:24},{default:(0,r.w5)((()=>[(0,r.Wm)(c,{background:"blue","count-config":e.countConfig1,icon:"money-cny-circle-line",percentage:"10%",title:"总销量"},null,8,["count-config"])])),_:1}),(0,r.Wm)(u,{lg:6,md:12,sm:24,xl:6,xs:24},{default:(0,r.w5)((()=>[(0,r.Wm)(c,{background:"white",icon:"money-cny-box-line",percentage:"44%",title:"总成交"})])),_:1}),(0,r.Wm)(u,{lg:6,md:12,sm:24,xl:6,xs:24},{default:(0,r.w5)((()=>[(0,r.Wm)(c,{background:"white",icon:"user-search-line",percentage:"30%",title:"活跃用户"})])),_:1}),(0,r.Wm)(u,{lg:6,md:12,sm:24,xl:6,xs:24},{default:(0,r.w5)((()=>[(0,r.Wm)(c,{background:"white",icon:"passport-line",percentage:"10%",title:"订单"})])),_:1}),(0,r.Wm)(u,{lg:12,md:12,sm:24,xl:12,xs:24},{default:(0,r.w5)((()=>[(0,r.Wm)(p)])),_:1}),(0,r.Wm)(u,{lg:6,md:12,sm:24,xl:6,xs:24},{default:(0,r.w5)((()=>[(0,r.Wm)(m)])),_:1}),(0,r.Wm)(u,{lg:6,md:12,sm:24,xl:6,xs:24},{default:(0,r.w5)((()=>[(0,r.Wm)(f)])),_:1}),(0,r.Wm)(u,{lg:24,md:24,sm:24,xl:24,xs:24},{default:(0,r.w5)((()=>[(0,r.Wm)(v)])),_:1})])),_:1})])}var l=a(96486),d=a.n(l),c=a(69522),u=a(12149),p=a(19287),m=a(82467),f=a(31703),v=a(2262),b=(0,r.aZ)({name:"Dashboard",components:{Trend:c["default"],Branch:u["default"],Rank:p["default"],Tabs:m["default"],TopCard:f["default"]},setup(){const e=(0,v.qj)({countConfig1:{startVal:0,endVal:d().random(1e3,2e4),decimals:2,prefix:"￥",suffix:"",separator:",",duration:8e3}});return{...(0,v.BK)(e)}}});function h(e){e.__source="src/views/index/dashboard.vue"}var w=a(83744);"function"===typeof h&&h(b);const y=(0,w.Z)(b,[["render",s],["__scopeId","data-v-3d9dc912"]]);var g=y}}]);