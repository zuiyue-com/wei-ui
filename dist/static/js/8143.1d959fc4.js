/*!
 *  build: Vue  Admin Plus
 *  copyright: vue-admin-beautiful.com
 *  time: 2023-09-28 17:16:01
 */
"use strict";(self["webpackChunkadmin_plus"]=self["webpackChunkadmin_plus"]||[]).push([[8143,2977],{32977:function(t,e,o){o.r(e),o.d(e,{default:function(){return w}});var a=o(61046),n=(o(3241),o(19414),o(66252));const s={class:"list-item"},i={class:"list-item-meta"},d={key:0,class:"list-item-meta-avatar"},l={class:"list-item-meta-content"},r={class:"list-item-meta-title"},c={class:"list-item-meta-description"},u={class:"list-item-meta-bottom"},p={class:"list-item-meta-operate"};var g={__name:"index",props:{user:{type:Object,default:()=>{}},avatarKey:{type:String,default:""}},setup(t){return(e,o)=>{const g=a.F8;return(0,n.wg)(),(0,n.iD)("div",s,[(0,n._)("div",i,[t.avatarKey?((0,n.wg)(),(0,n.iD)("div",d,[(0,n.Wm)(g,{src:t.user[t.avatarKey],class:"el-avatar el-avatar--big el-avatar--circle"},null,8,["src"])])):(0,n.kq)("",!0),(0,n._)("div",l,[(0,n._)("div",r,[(0,n.WI)(e.$slots,"title")]),(0,n._)("div",c,[(0,n.WI)(e.$slots,"description")]),(0,n._)("div",u,[(0,n.WI)(e.$slots,"bottom")])]),(0,n._)("div",p,[(0,n.WI)(e.$slots,"action")])])])}}};function m(t){t.__source="src/components/UserRow/index.vue"}var v=o(83744);"function"===typeof m&&m(g);const f=(0,v.Z)(g,[["__scopeId","data-v-4159f3f2"]]);var w=f},8143:function(t,e,o){o.r(e),o.d(e,{default:function(){return I}});var a=o(4350),n=(o(3241),o(91103),o(73632)),s=(o(74965),o(49676)),i=(o(73204),o(15659)),d=(o(10444),o(22040)),l=(o(99426),o(76128)),r=(o(74828),o(66252)),c=o(3577);const u={class:"list-container"},p=["innerHTML"];function g(t,e,o,g,m,v){const f=l.GT,w=d.Dv,_=i.ElButton,y=(0,r.up)("UserRow"),k=s.R,h=n.dq,L=a.t;return(0,r.wg)(),(0,r.iD)("div",u,[(0,r.Wm)(h,{gutter:20},{default:(0,r.w5)((()=>[t.emptyShow?((0,r.wg)(),(0,r.j4)(w,{key:0,span:24},{default:(0,r.w5)((()=>[(0,r.Wm)(f,{class:"vab-data-empty",description:"暂无数据"})])),_:1})):(0,r.kq)("",!0),(0,r.Wm)(w,{span:24},{default:(0,r.w5)((()=>[(0,r.Uk)(" todo todo todo todo todo todo todo todo todo todo todo todo todo todo todo todo todo todo todo todo todo todo todo todo todo todo todo todo todo todo todo todo "),(0,r.wy)(((0,r.wg)(),(0,r.iD)("ul",null,[((0,r.wg)(!0),(0,r.iD)(r.HY,null,(0,r.Ko)(t.dataList,(t=>((0,r.wg)(),(0,r.iD)("li",{key:t.id},[(0,r.Wm)(y,{user:t,"avatar-key":"uAvator","to-link":{}},{title:(0,r.w5)((()=>[(0,r.Uk)((0,c.zw)(t.diff_date),1)])),description:(0,r.w5)((()=>[(0,r._)("div",{innerHTML:t.note},null,8,p)])),action:(0,r.w5)((()=>[(0,r.Wm)(_,{plain:"",type:"danger"},{default:(0,r.w5)((()=>[(0,r.Uk)("屏蔽")])),_:1})])),_:2},1032,["user"])])))),128))])),[[L,t.listLoading]])])),_:1}),(0,r.Wm)(w,{span:24},{default:(0,r.w5)((()=>[t.dataList.length>0?((0,r.wg)(),(0,r.j4)(k,{key:0,"current-page":t.page,"onUpdate:currentPage":e[0]||(e[0]=e=>t.page=e),"page-size":t.pageSize,total:t.total,layout:"prev, pager, next",onCurrentChange:t.fetchData},null,8,["current-page","page-size","total","onCurrentChange"])):(0,r.kq)("",!0)])),_:1})])),_:1})])}var m=o(56890),v=o(32977),f=o(27484),w=o.n(f),_=(o(33852),o(84110)),y=o.n(_);function k(t){return w().locale("zh-cn"),w()(t).fromNow()}w().extend(y());var h=o(2262),L=(0,r.aZ)({name:"List",components:{UserRow:v["default"]},setup(){const t=(0,h.qj)({list:[],page:1,pageSize:1,total:1,listLoading:!0,emptyShow:!0});t.dataList=(0,r.Fl)((()=>t.list.map((t=>(t.diff_date=k(1e3*t.dateline),t)))));const e=async()=>{t.listLoading=!0;const e={page:t.page},{body:{list:o,page_perpage:a,page_allcount:n}}=await(0,m.r7)(e);t.list=o,t.pageSize=parseInt(a),t.total=parseInt(n),t.listLoading=!1,t.emptyShow=!1};return(0,r.bv)((()=>{e()})),{...(0,h.BK)(t),fetchData:e}}});function W(t){t.__source="src/views/setting/message/components/noticeList.vue"}var b=o(83744);"function"===typeof W&&W(L);const D=(0,b.Z)(L,[["render",g],["__scopeId","data-v-c3e73e52"]]);var I=D}}]);