/*!
 *  build: Vue  Admin Plus
 *  copyright: vue-admin-beautiful.com
 *  time: 2023-10-19 19:31:27
 */
"use strict";(self["webpackChunkadmin_plus"]=self["webpackChunkadmin_plus"]||[]).push([[3142,4556],{74571:function(a,e,t){t.d(e,{Z:function(){return i}});var n=t(2262);function i(a){const e=(0,n.qj)({dataList:[],queryForm:{page:1},pagination:{pageSize:1,total:1}}),{dataList:t,queryForm:i,pagination:o}=(0,n.BK)(e);async function s(){const{body:{list:t,page_perpage:n,page_allcount:i}}=await a();e.dataList=[...t],o.pageSize=parseInt(n),o.total=parseInt(i)}return{dataList:t,queryForm:i,pagination:o,loadData:s}}},64483:function(a,e,t){t.r(e),t.d(e,{default:function(){return _}});var n=t(73632),i=(t(3241),t(74965),t(10661)),o=(t(35095),t(22040)),s=(t(99426),t(27977)),r=(t(40355),t(96872),t(66252)),u=t(2262),c=t(49963),l=t(69473),d=t(24025),f=t(74571);const p={class:"share-container"};var m={__name:"share",setup(a){const{dataList:e,queryForm:t,pagination:m,loadData:g}=(0,f.Z)(_),v=(0,r.f3)("$baseConfirm"),b=(0,r.f3)("$baseMessage");function _(){return(0,d.wR)(t.value)}function w(a){t.value.page=a,g()}async function y(a){v("你确定要删除此帖子吗？",null,(async()=>{const e={tid:a.tid,fid:a.fid,pid:a.pid};try{await(0,d.Z0)(e),g(),b("删除成功！","success","vab-hey-message-success")}catch(t){console.log(t)}}))}return(0,r.bv)((()=>{t.value.uid=0,g()})),(a,d)=>{const f=s.p8,g=s.Ub,v=o.Dv,b=(0,r.up)("vab-icon"),_=i.Q0,h=n.dq;return(0,r.wg)(),(0,r.iD)("div",p,[(0,r.Wm)(h,{gutter:20},{default:(0,r.w5)((()=>[(0,r.Wm)(v,{span:24},{default:(0,r.w5)((()=>[(0,r.Wm)(g,{underline:!0},{default:(0,r.w5)((()=>[(0,r.Wm)(f,{label:"主题排序",name:"first"}),(0,r.Wm)(f,{label:"回复排序",name:"second"})])),_:1})])),_:1}),(0,r.Wm)(v,{span:24},{default:(0,r.w5)((()=>[(0,r.Wm)((0,u.SU)(l["default"]),{list:(0,u.SU)(e),"query-form":(0,u.SU)(t),pagination:(0,u.SU)(m),hover:!1,"show-user-bar":!1,onLoad:w},{action:(0,r.w5)((({post:a})=>[(0,r.Wm)(_,{class:"box-item",effect:"dark",content:"删除分享",placement:"top"},{default:(0,r.w5)((()=>[(0,r.Wm)(b,{icon:"delete-bin-6-line",style:{color:"var(--el-color-danger)"},onClick:(0,c.iM)((e=>y(a)),["prevent"])},null,8,["onClick"])])),_:2},1024)])),_:1},8,["list","query-form","pagination"])])),_:1})])),_:1})])}}};function g(a){a.__source="src/views/stablediffusion/share.vue"}var v=t(83744);"function"===typeof g&&g(m);const b=(0,v.Z)(m,[["__scopeId","data-v-31f9eb58"]]);var _=b}}]);