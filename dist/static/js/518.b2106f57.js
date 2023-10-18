/*!
 *  build: Vue  Admin Plus
 *  copyright: vue-admin-beautiful.com
 *  time: 2023-10-16 10:23:30
 */
"use strict";(self["webpackChunkadmin_plus"]=self["webpackChunkadmin_plus"]||[]).push([[518,2767],{16273:function(e,a,n){n.d(a,{Z:function(){return c}});var t=n(30032),l=(n(3241),n(91154),n(97830)),o=(n(13768),n(66252)),s=n(2262),u=n(3577),r=n(22201),i=(0,o.aZ)({__name:"index",props:{header:{type:String,default:""},bodyStyle:{type:Object,default:()=>({})},shadow:{type:String,default:""},skeleton:{type:Boolean,default:!1},skeletonRows:{type:Number,default:4}},setup(e){let a=null;const n=(0,s.iH)(!0);return a=setTimeout((()=>{n.value=!1}),500),(0,r.iS)(((e,n,t)=>{clearInterval(a),t()})),(a,r)=>{const i=l.vk,d=t.Kf;return(0,o.wg)(),(0,o.j4)(d,{"body-style":e.bodyStyle,class:"vab-card",shadow:e.shadow},(0,o.Nv)({default:(0,o.w5)((()=>[e.skeleton?((0,o.wg)(),(0,o.j4)(i,{key:0,animated:"",loading:(0,s.SU)(n),rows:e.skeletonRows},{default:(0,o.w5)((()=>[(0,o.WI)(a.$slots,"default",{class:"vab-card-transition"})])),_:3},8,["loading","rows"])):(0,o.WI)(a.$slots,"default",{key:1,class:"vab-card-transition"})])),_:2},[a.$slots.header||e.header?{name:"header",fn:(0,o.w5)((()=>[(0,o.WI)(a.$slots,"header",{},(()=>[(0,o.Uk)((0,u.zw)(e.header),1)]))])),key:"0"}:void 0]),1032,["body-style","shadow"])}}});function d(e){e.__source="library/components/VabCard/index.vue"}var m=n(83744);"function"===typeof d&&d(i);const v=(0,m.Z)(i,[["__scopeId","data-v-391150ea"]]);var c=v},64075:function(e,a,n){n.r(a),n.d(a,{default:function(){return h}});var t=n(16273),l=n(57534),o=(n(3241),n(92471),n(66252));function s(e,a,n,s,u,r){const i=(0,o.up)("vab-icon"),d=l.Ks,m=(0,o.up)("vab-chart"),v=t.Z;return(0,o.wg)(),(0,o.j4)(v,{shadow:"hover",skeleton:"","skeleton-rows":6,style:{height:"383px"}},{header:(0,o.w5)((()=>[(0,o.Wm)(i,{icon:"road-map-line"}),(0,o.Uk)(" 中国地图 "),(0,o.Wm)(d,{class:"card-header-tag",type:"warning"},{default:(0,o.w5)((()=>[(0,o.Uk)(" 我爱你中国，亲爱的母亲 ")])),_:1})])),default:(0,o.w5)((()=>[(0,o.Wm)(m,{"init-options":e.initOptions,option:e.option,style:{height:"283px"},theme:"vab-echarts-theme"},null,8,["init-options","option"])])),_:1})}var u=n(96486),r=n.n(u),i=n(16501),d=n(2262),m=n(6154),v=(0,o.aZ)({components:{VabChart:i["default"]},setup(){const e=(0,d.qj)({countConfig:{startVal:0,endVal:r().random(1e3,2e4),decimals:0,prefix:"",suffix:"",separator:",",duration:8e3},initOptions:{renderer:"svg"},option:{}}),a=async()=>{const{data:a}=await(0,m.Z)({url:"json/china.json",method:"get"});i["default"].registerMap("china",a),e.option={title:{text:"2099年全国GDP分布",subtext:"非真实数据"},tooltip:{trigger:"item"},dataRange:{min:0,max:55e3,text:["高","低"],splitNumber:0},series:[{name:"2099年全国GDP分布",type:"map",map:"china",emphasis:{label:{show:!0}},data:[{name:"西藏",value:605.83},{name:"青海",value:1670.44},{name:"宁夏",value:2102.21},{name:"海南",value:2522.66},{name:"甘肃",value:5020.37},{name:"贵州",value:5701.84},{name:"新疆",value:6610.05},{name:"云南",value:8893.12},{name:"重庆",value:10011.37},{name:"吉林",value:10568.83},{name:"山西",value:11237.55},{name:"天津",value:11307.28},{name:"江西",value:11702.82},{name:"广西",value:11720.87},{name:"陕西",value:12512.3},{name:"黑龙江",value:12582},{name:"内蒙古",value:14359.88},{name:"安徽",value:15300.65},{name:"北京",value:16251.93},{name:"福建",value:17560.18},{name:"上海",value:19195.69},{name:"湖北",value:19632.26},{name:"湖南",value:19669.56},{name:"四川",value:21026.68},{name:"辽宁",value:22226.7},{name:"河北",value:24515.76},{name:"河南",value:26931.03},{name:"浙江",value:32318.85},{name:"山东",value:45361.85,selected:!0},{name:"江苏",value:49110.27},{name:"广东",value:53210.28}]}]}};return(0,o.bv)((()=>{a()})),{...(0,d.BK)(e)}}});function c(e){e.__source="src/views/index/components/ChinaMap.vue"}var p=n(83744);"function"===typeof c&&c(v);const f=(0,p.Z)(v,[["render",s]]);var h=f}}]);