/*!
 *  build: Vue  Admin Plus
 *  copyright: vue-admin-beautiful.com
 *  time: 2023-10-16 10:23:30
 */
"use strict";(self["webpackChunkadmin_plus"]=self["webpackChunkadmin_plus"]||[]).push([[2467],{16273:function(e,a,t){t.d(a,{Z:function(){return u}});var d=t(30032),l=(t(3241),t(91154),t(97830)),s=(t(13768),t(66252)),n=t(2262),o=t(3577),r=t(22201),i=(0,s.aZ)({__name:"index",props:{header:{type:String,default:""},bodyStyle:{type:Object,default:()=>({})},shadow:{type:String,default:""},skeleton:{type:Boolean,default:!1},skeletonRows:{type:Number,default:4}},setup(e){let a=null;const t=(0,n.iH)(!0);return a=setTimeout((()=>{t.value=!1}),500),(0,r.iS)(((e,t,d)=>{clearInterval(a),d()})),(a,r)=>{const i=l.vk,p=d.Kf;return(0,s.wg)(),(0,s.j4)(p,{"body-style":e.bodyStyle,class:"vab-card",shadow:e.shadow},(0,s.Nv)({default:(0,s.w5)((()=>[e.skeleton?((0,s.wg)(),(0,s.j4)(i,{key:0,animated:"",loading:(0,n.SU)(t),rows:e.skeletonRows},{default:(0,s.w5)((()=>[(0,s.WI)(a.$slots,"default",{class:"vab-card-transition"})])),_:3},8,["loading","rows"])):(0,s.WI)(a.$slots,"default",{key:1,class:"vab-card-transition"})])),_:2},[a.$slots.header||e.header?{name:"header",fn:(0,s.w5)((()=>[(0,s.WI)(a.$slots,"header",{},(()=>[(0,s.Uk)((0,o.zw)(e.header),1)]))])),key:"0"}:void 0]),1032,["body-style","shadow"])}}});function p(e){e.__source="library/components/VabCard/index.vue"}var c=t(83744);"function"===typeof p&&p(i);const m=(0,c.Z)(i,[["__scopeId","data-v-391150ea"]]);var u=m},82467:function(e,a,t){t.r(a),t.d(a,{default:function(){return b}});var d=t(16273),l=t(27977),s=(t(3241),t(40355),t(96872),t(3837)),n=(t(81010),t(76128)),o=(t(74828),t(50363),t(66252));const r={class:"tabs"};function i(e,a,t,i,p,c){const m=s.$Y,u=n.GT,b=s.eI,f=l.p8,v=l.Ub,y=d.Z;return(0,o.wg)(),(0,o.iD)("div",r,[(0,o.Wm)(y,{class:"tabs-card",shadow:"hover"},{default:(0,o.w5)((()=>[(0,o.Wm)(v,{modelValue:e.activeName,"onUpdate:modelValue":a[0]||(a[0]=a=>e.activeName=a)},{default:(0,o.w5)((()=>[(0,o.Wm)(f,{label:"配送管理",name:"first"},{default:(0,o.w5)((()=>[(0,o.Wm)(b,{data:e.tableData,height:"280"},{empty:(0,o.w5)((()=>[(0,o.Wm)(u,{class:"vab-data-empty",description:"暂无数据"})])),default:(0,o.w5)((()=>[(0,o.Wm)(m,{label:"日期",prop:"date"}),(0,o.Wm)(m,{label:"配送信息"},{default:(0,o.w5)((()=>[(0,o.Wm)(m,{label:"姓名",prop:"name"}),(0,o.Wm)(m,{label:"省份",prop:"province"}),(0,o.Wm)(m,{label:"市区",prop:"city"}),(0,o.Wm)(m,{label:"地址",prop:"address"}),(0,o.Wm)(m,{label:"邮编",prop:"zip"})])),_:1})])),_:1},8,["data"])])),_:1}),(0,o.Wm)(f,{label:"区域管理",name:"second"},{default:(0,o.w5)((()=>[(0,o.Wm)(b,{data:e.tableData,height:"280"},{empty:(0,o.w5)((()=>[(0,o.Wm)(u,{class:"vab-data-empty",description:"暂无数据"})])),default:(0,o.w5)((()=>[(0,o.Wm)(m,{label:"日期",prop:"date"}),(0,o.Wm)(m,{label:"区域信息"},{default:(0,o.w5)((()=>[(0,o.Wm)(m,{label:"姓名",prop:"name"}),(0,o.Wm)(m,{label:"省份",prop:"province"}),(0,o.Wm)(m,{label:"市区",prop:"city"}),(0,o.Wm)(m,{label:"地址",prop:"address"}),(0,o.Wm)(m,{label:"邮编",prop:"zip"})])),_:1})])),_:1},8,["data"])])),_:1})])),_:1},8,["modelValue"])])),_:1})])}var p=(0,o.aZ)({data(){return{activeName:"first",tableData:[{date:"2016-05-03",name:"王小虎",province:"上海",city:"普陀区",address:"上海市普陀区金沙江路 1518 弄",zip:200333},{date:"2016-05-02",name:"王小虎",province:"上海",city:"普陀区",address:"上海市普陀区金沙江路 1518 弄",zip:200333},{date:"2016-05-04",name:"王小虎",province:"上海",city:"普陀区",address:"上海市普陀区金沙江路 1518 弄",zip:200333},{date:"2016-05-01",name:"王小虎",province:"上海",city:"普陀区",address:"上海市普陀区金沙江路 1518 弄",zip:200333},{date:"2016-05-08",name:"王小虎",province:"上海",city:"普陀区",address:"上海市普陀区金沙江路 1518 弄",zip:200333},{date:"2016-05-06",name:"王小虎",province:"上海",city:"普陀区",address:"上海市普陀区金沙江路 1518 弄",zip:200333},{date:"2016-05-07",name:"王小虎",province:"上海",city:"普陀区",address:"上海市普陀区金沙江路 1518 弄",zip:200333}]}}});function c(e){e.__source="src/views/index/components/Tabs.vue"}var m=t(83744);"function"===typeof c&&c(p);const u=(0,m.Z)(p,[["render",i],["__scopeId","data-v-53e6f2a4"]]);var b=u}}]);