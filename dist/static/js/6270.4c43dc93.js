/*!
 *  build: Vue  Admin Plus
 *  copyright: vue-admin-beautiful.com
 *  time: 2023-10-19 19:31:27
 */
"use strict";(self["webpackChunkadmin_plus"]=self["webpackChunkadmin_plus"]||[]).push([[6270,2767,7570,337],{16273:function(o,e,t){t.d(e,{Z:function(){return p}});var a=t(30032),n=(t(3241),t(91154),t(97830)),r=(t(13768),t(66252)),i=t(2262),s=t(3577),l=t(22201),d=(0,r.aZ)({__name:"index",props:{header:{type:String,default:""},bodyStyle:{type:Object,default:()=>({})},shadow:{type:String,default:""},skeleton:{type:Boolean,default:!1},skeletonRows:{type:Number,default:4}},setup(o){let e=null;const t=(0,i.iH)(!0);return e=setTimeout((()=>{t.value=!1}),500),(0,l.iS)(((o,t,a)=>{clearInterval(e),a()})),(e,l)=>{const d=n.vk,c=a.Kf;return(0,r.wg)(),(0,r.j4)(c,{"body-style":o.bodyStyle,class:"vab-card",shadow:o.shadow},(0,r.Nv)({default:(0,r.w5)((()=>[o.skeleton?((0,r.wg)(),(0,r.j4)(d,{key:0,animated:"",loading:(0,i.SU)(t),rows:o.skeletonRows},{default:(0,r.w5)((()=>[(0,r.WI)(e.$slots,"default",{class:"vab-card-transition"})])),_:3},8,["loading","rows"])):(0,r.WI)(e.$slots,"default",{key:1,class:"vab-card-transition"})])),_:2},[e.$slots.header||o.header?{name:"header",fn:(0,r.w5)((()=>[(0,r.WI)(e.$slots,"header",{},(()=>[(0,r.Uk)((0,s.zw)(o.header),1)]))])),key:"0"}:void 0]),1032,["body-style","shadow"])}}});function c(o){o.__source="library/components/VabCard/index.vue"}var f=t(83744);"function"===typeof c&&c(d);const u=(0,f.Z)(d,[["__scopeId","data-v-391150ea"]]);var p=u},73570:function(o,e,t){t.r(e),t.d(e,{default:function(){return k}});var a=t(16273),n=t(73632),r=(t(3241),t(74965),t(22040)),i=(t(99426),t(66252));const s=o=>((0,i.dD)("data-v-03ba8ba2"),o=o(),(0,i.Cn)(),o),l={class:"order"},d=s((()=>(0,i._)("p",null,"已售数量",-1))),c=s((()=>(0,i._)("p",null,"待售数量",-1))),f=s((()=>(0,i._)("p",null,"好评度",-1))),u=s((()=>(0,i._)("h1",null,"99%",-1))),p=s((()=>(0,i._)("p",null,"已完成订单",-1))),m=s((()=>(0,i._)("p",null,"计划完成订单",-1)));function h(o,e,t,s,h,g){const x=(0,i.up)("vab-icon"),w=(0,i.up)("vab-count"),v=r.Dv,y=n.dq,b=a.Z,C=(0,i.up)("vab-chart");return(0,i.wg)(),(0,i.iD)("div",l,[(0,i.Wm)(b,{class:"order-card1",shadow:"hover"},{header:(0,i.w5)((()=>[(0,i.Wm)(x,{icon:"shopping-bag-2-line"}),(0,i.Uk)(" 商品 ")])),default:(0,i.w5)((()=>[(0,i.Wm)(y,{class:"order-card1-content"},{default:(0,i.w5)((()=>[(0,i.Wm)(v,{span:8},{default:(0,i.w5)((()=>[d,(0,i._)("h1",null,[(0,i.Wm)(w,{decimals:o.countConfig.decimals,duration:o.countConfig.duration,"end-val":o.countConfig.endVal,prefix:o.countConfig.prefix,separator:o.countConfig.separator,"start-val":o.countConfig.startVal,suffix:o.countConfig.suffix},null,8,["decimals","duration","end-val","prefix","separator","start-val","suffix"])])])),_:1}),(0,i.Wm)(v,{span:8},{default:(0,i.w5)((()=>[c,(0,i._)("h1",null,[(0,i.Wm)(w,{decimals:o.countConfig.decimals,duration:o.countConfig.duration,"end-val":o.countConfig.endVal,prefix:o.countConfig.prefix,separator:o.countConfig.separator,"start-val":o.countConfig.startVal,suffix:o.countConfig.suffix},null,8,["decimals","duration","end-val","prefix","separator","start-val","suffix"])])])),_:1}),(0,i.Wm)(v,{span:8},{default:(0,i.w5)((()=>[f,u])),_:1})])),_:1})])),_:1}),(0,i.Wm)(b,{class:"order-card2",shadow:"hover",skeleton:"","skeleton-rows":10},{header:(0,i.w5)((()=>[(0,i._)("span",null,[(0,i.Wm)(x,{icon:"list-unordered"}),(0,i.Uk)(" 订单 ")])])),default:(0,i.w5)((()=>[(0,i.Wm)(y,{class:"order-card2-content"},{default:(0,i.w5)((()=>[(0,i.Wm)(v,{span:12},{default:(0,i.w5)((()=>[p,(0,i._)("h1",null,[(0,i.Wm)(w,{decimals:o.countConfig.decimals,duration:o.countConfig.duration,"end-val":1.5*o.countConfig.endVal,prefix:o.countConfig.prefix,separator:o.countConfig.separator,"start-val":o.countConfig.startVal,suffix:o.countConfig.suffix},null,8,["decimals","duration","end-val","prefix","separator","start-val","suffix"])])])),_:1}),(0,i.Wm)(v,{span:12},{default:(0,i.w5)((()=>[m,(0,i._)("h1",null,[(0,i.Wm)(w,{decimals:o.countConfig.decimals,duration:o.countConfig.duration,"end-val":2.5*o.countConfig.endVal,prefix:o.countConfig.prefix,separator:o.countConfig.separator,"start-val":o.countConfig.startVal,suffix:o.countConfig.suffix},null,8,["decimals","duration","end-val","prefix","separator","start-val","suffix"])])])),_:1}),(0,i.Wm)(v,{span:24},{default:(0,i.w5)((()=>[(0,i.Wm)(C,{class:"order-chart","init-options":o.initOptions,option:o.option,theme:"vab-echarts-theme"},null,8,["init-options","option"])])),_:1})])),_:1})])),_:1})])}var g=t(96486),x=t.n(g),w=t(16501),v=t(22),y=(0,i.aZ)({components:{VabCount:v["default"],VabChart:w["default"]},setup(){const o=["#9E87FF","#73DDFF","#fe9a8b","#F56948","#9E87FF"];return{countConfig:{startVal:0,endVal:x().random(1e3,6e3),decimals:0,prefix:"",suffix:"",separator:",",duration:5e3},initOptions:{renderer:"svg"},option:{tooltip:{trigger:"axis",extraCssText:"z-index:1"},grid:{left:"3%",containLabel:!0},xAxis:[{type:"category",data:["1季度","2季度","3季度","4季度"],axisLine:{lineStyle:{color:"#DCE2E8"}},axisTick:{show:!1},axisLabel:{interval:0,color:"#556677",fontSize:12,margin:15},axisPointer:{label:{padding:[0,0,10,0],margin:15,fontSize:12,backgroundColor:{type:"linear",x:0,y:0,x2:0,y2:1,colorStops:[{offset:0,color:"#fff"},{offset:.86,color:"#fff"},{offset:.86,color:"#33c0cd"},{offset:1,color:"#33c0cd"}],global:!1}}},boundaryGap:!1}],yAxis:[{type:"value",axisTick:{show:!1},axisLine:{show:!0,lineStyle:{color:"#DCE2E8"}},axisLabel:{color:"#556677"},splitLine:{show:!1}}],series:[{name:"已完成订单",type:"line",data:[1345,2100,1330,2901],symbolSize:1,symbol:"circle",smooth:!0,yAxisIndex:0,showSymbol:!1,lineStyle:{width:5,color:new w["default"].graphic.LinearGradient(0,1,0,0,[{offset:0,color:"#9effff"},{offset:1,color:"#9E87FF"}]),shadowColor:"rgba(158,135,255, 0.3)",shadowBlur:10,shadowOffsetY:20},itemStyle:{color:o[0],borderColor:o[0]}},{name:"未完成订单",type:"line",data:[1905,1020,3330,512],symbolSize:1,symbol:"circle",smooth:!0,yAxisIndex:0,showSymbol:!1,lineStyle:{width:5,color:new w["default"].graphic.LinearGradient(1,1,0,0,[{offset:0,color:"#73DD39"},{offset:1,color:"#73DDFF"}]),shadowColor:"rgba(115,221,255, 0.3)",shadowBlur:10,shadowOffsetY:20},itemStyle:{color:o[1],borderColor:o[1]}}]}}}});function b(o){o.__source="src/views/index/components/Order.vue"}var C=t(83744);"function"===typeof b&&b(y);const _=(0,C.Z)(y,[["render",h],["__scopeId","data-v-03ba8ba2"]]);var k=_},47202:function(o,e,t){t.r(e),t.d(e,{default:function(){return u}});var a=t(16273),n=t(66252);const r={class:"target"};function i(o,e,t,i,s,l){const d=(0,n.up)("vab-icon"),c=(0,n.up)("vab-chart"),f=a.Z;return(0,n.wg)(),(0,n.iD)("div",r,[(0,n.Wm)(f,{class:"target-card1",shadow:"hover",skeleton:"","skeleton-rows":7,style:{height:"380px"}},{header:(0,n.w5)((()=>[(0,n.Wm)(d,{icon:"body-scan-line"}),(0,n.Uk)(" 小目标 ")])),default:(0,n.w5)((()=>[(0,n.Wm)(c,{class:"target-echart1","init-option":o.initOptions,option:o.option,theme:"vab-echarts-theme"},null,8,["init-option","option"])])),_:1}),(0,n.Wm)(f,{class:"target-card2",shadow:"hover",skeleton:"","skeleton-rows":5,style:{height:"305px"}},{header:(0,n.w5)((()=>[(0,n._)("span",null,[(0,n.Wm)(d,{icon:"money-cny-box-line"}),(0,n.Uk)(" 销售额 ")])])),default:(0,n.w5)((()=>[(0,n.Wm)(c,{class:"target-echart2","init-options":o.initOptions,option:o.option2,theme:"vab-echarts-theme"},null,8,["init-options","option"])])),_:1})])}var s=t(16501),l=(0,n.aZ)({components:{VabChart:s["default"]},setup(){const o=["#9E87FF","#73DDFF","#fe9a8b","#F56948","#9E87FF"];return{initOptions:{renderer:"svg"},option:{tooltip:{trigger:"axis",extraCssText:"z-index:1"},grid:{top:"0%",left:"2%",right:"4%",bottom:"0%",containLabel:!0},xAxis:[{splitLine:{show:!1},type:"value",show:!1}],yAxis:[{splitLine:{show:!1},axisLine:{show:!1},type:"category",axisTick:{show:!1},data:["莱山区","高新区","芝罘区","牟平区","蓬莱区","开发区"]}],series:[{name:"目标",type:"bar",barWidth:25,label:{show:!0,position:"right",color:"#1890FF",fontSize:14,formatter:({data:o})=>`${o}亿元`},itemStyle:{borderRadius:[0,5,5,0],color:new s["default"].graphic.LinearGradient(0,0,1,0,["#3ED572","#399efd"].map(((o,e)=>({color:o,offset:e}))))},data:[320,302,341,374,390,650]}]},option2:{tooltip:{trigger:"axis",extraCssText:"z-index:1"},grid:{top:"4%",left:"2%",right:"2%",bottom:"0%",containLabel:!0},xAxis:[{type:"category",data:["1月","2月","3月","4月","5月","6月","7月","8月","9月","10月","11月","12月"],axisLine:{lineStyle:{color:"#DCE2E8"}},axisTick:{show:!1},axisLabel:{interval:0,color:"#556677",fontSize:12,margin:15},axisPointer:{label:{padding:[0,0,10,0],margin:15,fontSize:12,backgroundColor:{type:"linear",x:0,y:0,x2:0,y2:1,colorStops:[{offset:0,color:"#fff"},{offset:.86,color:"#fff"},{offset:.86,color:"#33c0cd"},{offset:1,color:"#33c0cd"}],global:!1}}},boundaryGap:!1}],yAxis:[{type:"value",axisTick:{show:!1},axisLine:{show:!0,lineStyle:{color:"#DCE2E8"}},axisLabel:{color:"#556677"},splitLine:{show:!1}}],series:[{name:"销售额",type:"line",data:[1905,1020,3330,512,4463,2214,3330,5412,1205,820,5330,1112],symbolSize:1,symbol:"circle",smooth:!0,yAxisIndex:0,showSymbol:!1,lineStyle:{width:5,color:new s["default"].graphic.LinearGradient(1,1,0,0,[{offset:0,color:"#73DD39"},{offset:1,color:"#73DDFF"}]),shadowColor:"rgba(115,221,255, 0.3)",shadowBlur:10,shadowOffsetY:20},itemStyle:{color:o[1],borderColor:o[1]}}]}}}});function d(o){o.__source="src/views/index/components/Target.vue"}var c=t(83744);"function"===typeof d&&d(l);const f=(0,c.Z)(l,[["render",i],["__scopeId","data-v-20dafa07"]]);var u=f},59317:function(o,e,t){t.r(e),t.d(e,{default:function(){return m}});var a=t(73632),n=(t(3241),t(74965),t(22040)),r=(t(99426),t(66252));const i={class:"workbench-container"};function s(o,e,t,s,l,d){const c=(0,r.up)("order"),f=n.Dv,u=(0,r.up)("target"),p=a.dq;return(0,r.wg)(),(0,r.iD)("div",i,[(0,r.Wm)(p,{gutter:20},{default:(0,r.w5)((()=>[(0,r.Wm)(f,{lg:8,md:12,sm:24,xl:6,xs:24},{default:(0,r.w5)((()=>[(0,r.Wm)(c)])),_:1}),(0,r.Wm)(f,{lg:16,md:12,sm:24,xl:18,xs:24},{default:(0,r.w5)((()=>[(0,r.Wm)(u)])),_:1})])),_:1})])}var l=t(73570),d=t(47202),c=(0,r.aZ)({name:"Workbench",components:{Order:l["default"],Target:d["default"]}});function f(o){o.__source="src/views/index/workbench.vue"}var u=t(83744);"function"===typeof f&&f(c);const p=(0,u.Z)(c,[["render",s],["__scopeId","data-v-9c44ed32"]]);var m=p}}]);