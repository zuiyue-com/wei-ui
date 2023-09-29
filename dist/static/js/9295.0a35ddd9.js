/*!
 *  build: Vue  Admin Plus
 *  copyright: vue-admin-beautiful.com
 *  time: 2023-09-28 17:16:01
 */
"use strict";(self["webpackChunkadmin_plus"]=self["webpackChunkadmin_plus"]||[]).push([[9295,2767],{16273:function(e,t,a){a.d(t,{Z:function(){return f}});var o=a(30032),n=(a(3241),a(91154),a(97830)),s=(a(13768),a(66252)),r=a(2262),i=a(3577),d=a(22201),l=(0,s.aZ)({__name:"index",props:{header:{type:String,default:""},bodyStyle:{type:Object,default:()=>({})},shadow:{type:String,default:""},skeleton:{type:Boolean,default:!1},skeletonRows:{type:Number,default:4}},setup(e){let t=null;const a=(0,r.iH)(!0);return t=setTimeout((()=>{a.value=!1}),500),(0,d.iS)(((e,a,o)=>{clearInterval(t),o()})),(t,d)=>{const l=n.vk,u=o.Kf;return(0,s.wg)(),(0,s.j4)(u,{"body-style":e.bodyStyle,class:"vab-card",shadow:e.shadow},(0,s.Nv)({default:(0,s.w5)((()=>[e.skeleton?((0,s.wg)(),(0,s.j4)(l,{key:0,animated:"",loading:(0,r.SU)(a),rows:e.skeletonRows},{default:(0,s.w5)((()=>[(0,s.WI)(t.$slots,"default",{class:"vab-card-transition"})])),_:3},8,["loading","rows"])):(0,s.WI)(t.$slots,"default",{key:1,class:"vab-card-transition"})])),_:2},[t.$slots.header||e.header?{name:"header",fn:(0,s.w5)((()=>[(0,s.WI)(t.$slots,"header",{},(()=>[(0,s.Uk)((0,i.zw)(e.header),1)]))])),key:"0"}:void 0]),1032,["body-style","shadow"])}}});function u(e){e.__source="library/components/VabCard/index.vue"}var c=a(83744);"function"===typeof u&&u(l);const p=(0,c.Z)(l,[["__scopeId","data-v-391150ea"]]);var f=p},19287:function(e,t,a){a.r(t),a.d(t,{default:function(){return c}});var o=a(16273),n=a(66252);function s(e,t,a,s,r,i){const d=(0,n.up)("vab-icon"),l=(0,n.up)("vab-chart"),u=o.Z;return(0,n.wg)(),(0,n.j4)(u,{class:"rank",shadow:"hover",skeleton:""},{header:(0,n.w5)((()=>[(0,n._)("span",null,[(0,n.Wm)(d,{icon:"align-top"}),(0,n.Uk)(" 消費排行 ")])])),default:(0,n.w5)((()=>[(0,n.Wm)(l,{class:"rank-echart","init-options":e.initOptions,option:e.option,theme:"vab-echarts-theme"},null,8,["init-options","option"])])),_:1})}var r=a(16501),i=(0,n.aZ)({components:{VabChart:r["default"]},data(){return{initOptions:{renderer:"svg"},option:{tooltip:{trigger:"axis",extraCssText:"z-index:1"},grid:{top:"0%",left:"2%",right:"20%",bottom:"0%",containLabel:!0},xAxis:[{splitLine:{show:!1},type:"value",show:!1}],yAxis:[{splitLine:{show:!1},axisLine:{show:!1},type:"category",axisTick:{show:!1},data:["good luck","曲丽丽","付小小","林东东","周星星","朱偏右"]}],series:[{name:"累计消费",type:"bar",barWidth:15,label:{show:!0,position:"right",fontSize:12,formatter:({data:e})=>`${e}万元`},itemStyle:{borderRadius:10,borderColor:"#fff",borderWidth:2},data:[23,54,68,76,87,99]}]}}}});function d(e){e.__source="src/views/index/components/Rank.vue"}var l=a(83744);"function"===typeof d&&d(i);const u=(0,l.Z)(i,[["render",s]]);var c=u}}]);