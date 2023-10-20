/*!
 *  build: Vue  Admin Plus
 *  copyright: vue-admin-beautiful.com
 *  time: 2023-10-19 19:31:27
 */
"use strict";(self["webpackChunkadmin_plus"]=self["webpackChunkadmin_plus"]||[]).push([[3755,2977],{32977:function(t,e,s){s.r(e),s.d(e,{default:function(){return _}});var a=s(35756),i=(s(3241),s(19414),s(66252));const n={class:"list-item"},o={class:"list-item-meta"},l={key:0,class:"list-item-meta-avatar"},r={class:"list-item-meta-content"},c={class:"list-item-meta-title"},u={class:"list-item-meta-description"},d={class:"list-item-meta-bottom"},m={class:"list-item-meta-operate"};var v={__name:"index",props:{user:{type:Object,default:()=>{}},avatarKey:{type:String,default:""}},setup(t){return(e,s)=>{const v=a.F8;return(0,i.wg)(),(0,i.iD)("div",n,[(0,i._)("div",o,[t.avatarKey?((0,i.wg)(),(0,i.iD)("div",l,[(0,i.Wm)(v,{src:t.user[t.avatarKey],class:"el-avatar el-avatar--big el-avatar--circle"},null,8,["src"])])):(0,i.kq)("",!0),(0,i._)("div",r,[(0,i._)("div",c,[(0,i.WI)(e.$slots,"title")]),(0,i._)("div",u,[(0,i.WI)(e.$slots,"description")]),(0,i._)("div",d,[(0,i.WI)(e.$slots,"bottom")])]),(0,i._)("div",m,[(0,i.WI)(e.$slots,"action")])])])}}};function p(t){t.__source="src/components/UserRow/index.vue"}var w=s(83744);"function"===typeof p&&p(v);const f=(0,w.Z)(v,[["__scopeId","data-v-4159f3f2"]]);var _=f},73755:function(t,e,s){s.r(e),s.d(e,{default:function(){return y}});var a=s(4350),i=(s(3241),s(91103),s(73632)),n=(s(74965),s(22040)),o=(s(99426),s(76128)),l=(s(74828),s(66252)),r=s(3577);const c={class:"list-container"},u=["innerHTML"];function d(t,e,s,d,m,v){const p=o.GT,w=n.Dv,f=(0,l.up)("UserRow"),_=i.dq,g=a.t;return(0,l.wg)(),(0,l.iD)("div",c,[(0,l.Wm)(_,{gutter:20},{default:(0,l.w5)((()=>[t.emptyShow?((0,l.wg)(),(0,l.j4)(w,{key:0,span:24},{default:(0,l.w5)((()=>[(0,l.Wm)(p,{class:"vab-data-empty",description:"暂无数据"})])),_:1})):(0,l.kq)("",!0),(0,l.Wm)(w,{span:24},{default:(0,l.w5)((()=>[(0,l.wy)(((0,l.wg)(),(0,l.iD)("ul",null,[((0,l.wg)(!0),(0,l.iD)(l.HY,null,(0,l.Ko)(t.list,(t=>((0,l.wg)(),(0,l.iD)("li",{key:t.id},[(0,l.Wm)(f,{user:t},{title:(0,l.w5)((()=>[(0,l.Uk)((0,r.zw)(t.subject),1)])),description:(0,l.w5)((()=>[(0,l._)("div",{innerHTML:t.message},null,8,u)])),bottom:(0,l.w5)((()=>[(0,l.Uk)((0,r.zw)(t.starttime)+"-"+(0,r.zw)(t.endtime),1)])),_:2},1032,["user"])])))),128))])),[[g,t.listLoading]])])),_:1})])),_:1})])}var m=s(56890),v=s(32977),p=s(2262),w=(0,l.aZ)({name:"List",components:{UserRow:v["default"]},setup(){const t=(0,p.qj)({list:[],listLoading:!0,emptyShow:!0}),e=async()=>{t.listLoading=!0;const{body:e}=await(0,m.qm)({});t.list=e,t.listLoading=!1,t.emptyShow=!1};return(0,l.bv)((()=>{e()})),{...(0,p.BK)(t),fetchData:e}}});function f(t){t.__source="src/views/setting/message/components/announcmentList.vue"}var _=s(83744);"function"===typeof f&&f(w);const g=(0,_.Z)(w,[["render",d],["__scopeId","data-v-7b562a9c"]]);var y=g}}]);