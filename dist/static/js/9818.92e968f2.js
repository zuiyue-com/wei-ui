/*!
 *  build: Vue  Admin Plus
 *  copyright: vue-admin-beautiful.com
 *  time: 2023-10-10 18:16:02
 */
"use strict";(self["webpackChunkadmin_plus"]=self["webpackChunkadmin_plus"]||[]).push([[9818,676],{27810:function(e,a,t){t.d(a,{g:function(){return s}});var n=t(52806);function s(){return(0,n.Z)({url:"https://fc-mp-851edf02-46eb-43e6-828d-64c7e483ea41.next.bspapp.com/http/getDescription",method:"get"})}},16273:function(e,a,t){t.d(a,{Z:function(){return v}});var n=t(30032),s=(t(3241),t(91154),t(97830)),r=(t(13768),t(66252)),i=t(2262),o=t(3577),l=t(22201),c=(0,r.aZ)({__name:"index",props:{header:{type:String,default:""},bodyStyle:{type:Object,default:()=>({})},shadow:{type:String,default:""},skeleton:{type:Boolean,default:!1},skeletonRows:{type:Number,default:4}},setup(e){let a=null;const t=(0,i.iH)(!0);return a=setTimeout((()=>{t.value=!1}),500),(0,l.iS)(((e,t,n)=>{clearInterval(a),n()})),(a,l)=>{const c=s.vk,u=n.Kf;return(0,r.wg)(),(0,r.j4)(u,{"body-style":e.bodyStyle,class:"vab-card",shadow:e.shadow},(0,r.Nv)({default:(0,r.w5)((()=>[e.skeleton?((0,r.wg)(),(0,r.j4)(c,{key:0,animated:"",loading:(0,i.SU)(t),rows:e.skeletonRows},{default:(0,r.w5)((()=>[(0,r.WI)(a.$slots,"default",{class:"vab-card-transition"})])),_:3},8,["loading","rows"])):(0,r.WI)(a.$slots,"default",{key:1,class:"vab-card-transition"})])),_:2},[a.$slots.header||e.header?{name:"header",fn:(0,r.w5)((()=>[(0,r.WI)(a.$slots,"header",{},(()=>[(0,r.Uk)((0,o.zw)(e.header),1)]))])),key:"0"}:void 0]),1032,["body-style","shadow"])}}});function u(e){e.__source="library/components/VabCard/index.vue"}var d=t(83744);"function"===typeof u&&u(c);const p=(0,d.Z)(c,[["__scopeId","data-v-391150ea"]]);var v=p},23462:function(e,a,t){t.r(a),t.d(a,{default:function(){return S}});var n=t(22040),s=(t(3241),t(99426),t(16273)),r=t(77669),i=(t(95774),t(66252)),o=t(2262),l=t(3577),c=t(30582),u=t(27810),d=t(96405),p=t(47720);const v=e=>((0,i.dD)("data-v-455a9b7c"),e=e(),(0,i.Cn)(),e),f={class:"page-header-tip"},h={class:"page-header-tip-title"},m=["innerHTML"],g={class:"page-header-avatar-list"},w=v((()=>(0,i._)("p",null,"participants",-1)));var _={__name:"PageHeader",setup(e){const a=(0,c.L)(),{avatar:t,username:v}=(0,p.Jk)(a),_=(0,o.qj)({description:"",avatarList:[{avatar:"https://i.gtimg.cn/club/item/face/img/2/15922_100.gif",username:"good luck"},{avatar:"https://fastly.jsdelivr.net/gh/chuzhixin/image/user/fwfmiao.gif",username:"FlowPeakFish"},{avatar:"https://i.gtimg.cn/club/item/face/img/3/15643_100.gif",username:"嘻嘻"}]}),b=()=>{const e=(new Date).getHours();return e<8?`早上好 ${v.value}，又是元气满满的一天。`:e<=11?`上午好 ${v.value}，看到你我好开心。`:e<=13?`中午好 ${v.value}，忙碌了一上午，记得吃午饭哦。`:e<18?`下午好 ${v.value}，你一定有些累了，喝杯咖啡提提神。`:`晚上好 ${v.value}，愿你天黑有灯，下雨有伞。`},y=async()=>{const{data:{description:e}}=await(0,u.g)();_.description=e};return(0,i.bv)((()=>{(location.hostname.includes("vue-admin-beautiful")||location.hostname.includes("chu1204505056")||location.hostname.includes("localhost")||location.hostname.includes("127.0.0.1"))&&y()})),(e,a)=>{const c=r.vs,u=s.Z,p=n.Dv;return(0,i.wg)(),(0,i.j4)(p,{span:24},{default:(0,i.w5)((()=>[(0,i.Wm)(u,{class:"page-header",shadow:"never"},{default:(0,i.w5)((()=>[(0,i.Wm)(c,{class:"page-header-avatar",src:(0,o.SU)(t)},null,8,["src"]),(0,i._)("div",f,[(0,i._)("p",h,(0,l.zw)(b()),1),(0,i._)("p",{class:"page-header-tip-description",innerHTML:(0,o.SU)(_).description},null,8,m)]),(0,i._)("div",g,[(0,i.Wm)((0,o.SU)(d["default"]),{"avatar-list":(0,o.SU)(_).avatarList},null,8,["avatar-list"]),w])])),_:1})])),_:1})}}};function b(e){e.__source="src/views/index/components/PageHeader.vue"}var y=t(83744);"function"===typeof b&&b(_);const k=(0,y.Z)(_,[["__scopeId","data-v-455a9b7c"]]);var S=k}}]);