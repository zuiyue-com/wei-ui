/*!
 *  build: Vue  Admin Plus
 *  copyright: vue-admin-beautiful.com
 *  time: 2023-10-16 10:23:30
 */
"use strict";(self["webpackChunkadmin_plus"]=self["webpackChunkadmin_plus"]||[]).push([[8818,2977],{92327:function(t,e,o){o.d(e,{E:function(){return d},p:function(){return r}});var a=o(27484),n=o.n(a),s=(o(33852),o(84110)),i=o.n(s);function d(t){return n().locale("zh-cn"),n()(t).fromNow()}function r(t,e="YYYY-MM-DD HH:mm:ss"){return n()(t).format(e)}n().extend(i())},32977:function(t,e,o){o.r(e),o.d(e,{default:function(){return w}});var a=o(61046),n=(o(3241),o(19414),o(66252));const s={class:"list-item"},i={class:"list-item-meta"},d={key:0,class:"list-item-meta-avatar"},r={class:"list-item-meta-content"},l={class:"list-item-meta-title"},c={class:"list-item-meta-description"},u={class:"list-item-meta-bottom"},p={class:"list-item-meta-operate"};var m={__name:"index",props:{user:{type:Object,default:()=>{}},avatarKey:{type:String,default:""}},setup(t){return(e,o)=>{const m=a.F8;return(0,n.wg)(),(0,n.iD)("div",s,[(0,n._)("div",i,[t.avatarKey?((0,n.wg)(),(0,n.iD)("div",d,[(0,n.Wm)(m,{src:t.user[t.avatarKey],class:"el-avatar el-avatar--big el-avatar--circle"},null,8,["src"])])):(0,n.kq)("",!0),(0,n._)("div",r,[(0,n._)("div",l,[(0,n.WI)(e.$slots,"title")]),(0,n._)("div",c,[(0,n.WI)(e.$slots,"description")]),(0,n._)("div",u,[(0,n.WI)(e.$slots,"bottom")])]),(0,n._)("div",p,[(0,n.WI)(e.$slots,"action")])])])}}};function f(t){t.__source="src/components/UserRow/index.vue"}var g=o(83744);"function"===typeof f&&f(m);const v=(0,g.Z)(m,[["__scopeId","data-v-4159f3f2"]]);var w=v},48818:function(t,e,o){o.r(e),o.d(e,{default:function(){return D}});var a=o(4350),n=(o(3241),o(91103),o(73632)),s=(o(74965),o(49676)),i=(o(73204),o(15659)),d=(o(10444),o(22040)),r=(o(99426),o(76128)),l=(o(74828),o(66252)),c=o(3577);const u={class:"list-container"},p=["innerHTML"];function m(t,e,o,m,f,g){const v=r.GT,w=d.Dv,_=i.ElButton,y=(0,l.up)("UserRow"),k=s.R,h=n.dq,D=a.t;return(0,l.wg)(),(0,l.iD)("div",u,[(0,l.Wm)(h,{gutter:20},{default:(0,l.w5)((()=>[t.emptyShow?((0,l.wg)(),(0,l.j4)(w,{key:0,span:24},{default:(0,l.w5)((()=>[(0,l.Wm)(v,{class:"vab-data-empty",description:"暂无数据"})])),_:1})):(0,l.kq)("",!0),(0,l.Wm)(w,{span:24},{default:(0,l.w5)((()=>[(0,l.Uk)(" todo todo todo todo todo todo todo todo todo todo todo todo todo todo todo todo todo todo todo todo todo todo todo todo todo todo todo todo todo todo todo todo "),(0,l.wy)(((0,l.wg)(),(0,l.iD)("ul",null,[((0,l.wg)(!0),(0,l.iD)(l.HY,null,(0,l.Ko)(t.dataList,(t=>((0,l.wg)(),(0,l.iD)("li",{key:t.id},[(0,l.Wm)(y,{user:t,"avatar-key":"uAvator","to-link":{}},{title:(0,l.w5)((()=>[(0,l.Uk)((0,c.zw)(t.diff_date),1)])),description:(0,l.w5)((()=>[(0,l._)("div",{innerHTML:t.note},null,8,p)])),action:(0,l.w5)((()=>[(0,l.Wm)(_,{plain:"",type:"danger"},{default:(0,l.w5)((()=>[(0,l.Uk)("屏蔽")])),_:1})])),_:2},1032,["user"])])))),128))])),[[D,t.listLoading]])])),_:1}),(0,l.Wm)(w,{span:24},{default:(0,l.w5)((()=>[t.dataList.length>0?((0,l.wg)(),(0,l.j4)(k,{key:0,"current-page":t.page,"onUpdate:currentPage":e[0]||(e[0]=e=>t.page=e),"page-size":t.pageSize,total:t.total,layout:"prev, pager, next",onCurrentChange:t.fetchData},null,8,["current-page","page-size","total","onCurrentChange"])):(0,l.kq)("",!0)])),_:1})])),_:1})])}var f=o(56890),g=o(32977),v=o(92327),w=o(2262),_=(0,l.aZ)({name:"List",components:{UserRow:g["default"]},setup(){const t=(0,w.qj)({list:[],page:1,pageSize:1,total:1,listLoading:!0,emptyShow:!0});t.dataList=(0,l.Fl)((()=>t.list.map((t=>(t.diff_date=(0,v.E)(1e3*t.dateline),t)))));const e=async()=>{t.listLoading=!0;const e={page:t.page},{body:{list:o,page_perpage:a,page_allcount:n}}=await(0,f.r7)(e);t.list=o,t.pageSize=parseInt(a),t.total=parseInt(n),t.listLoading=!1,t.emptyShow=!1};return(0,l.bv)((()=>{e()})),{...(0,w.BK)(t),fetchData:e}}});function y(t){t.__source="src/views/setting/message/components/noticeList.vue"}var k=o(83744);"function"===typeof y&&y(_);const h=(0,k.Z)(_,[["render",m],["__scopeId","data-v-c3e73e52"]]);var D=h}}]);