/*!
 *  build: Vue  Admin Plus
 *  copyright: vue-admin-beautiful.com
 *  time: 2023-10-10 18:16:02
 */
"use strict";(self["webpackChunkadmin_plus"]=self["webpackChunkadmin_plus"]||[]).push([[1882,2664,882],{74571:function(t,a,n){n.d(a,{Z:function(){return i}});var e=n(2262);function i(t){const a=(0,e.qj)({dataList:[],queryForm:{page:1},pagination:{pageSize:1,total:1}}),{dataList:n,queryForm:i,pagination:u}=(0,e.BK)(a);async function o(){try{const{body:{list:n,page_perpage:e,page_allcount:i}}=await t();a.dataList=[...n],u.pageSize=parseInt(e),u.total=parseInt(i)}catch(n){}}return{dataList:n,queryForm:i,pagination:u,loadData:o}}},72573:function(t,a,n){n.r(a),n.d(a,{default:function(){return c}});var e=n(66252),i=n(2262),u=n(91814),o=n(24025),s=n(74571),l={__name:"posts",setup(t){const{dataList:a,queryForm:n,pagination:l,loadData:r}=(0,s.Z)(d);function d(){return(0,o.BB)(n.value)}function c(t){n.value.page=t,r()}return(0,e.bv)((()=>{r()})),(t,o)=>((0,e.wg)(),(0,e.j4)((0,i.SU)(u["default"]),{list:(0,i.SU)(a),"query-form":(0,i.SU)(n),pagination:(0,i.SU)(l),onLoad:c},null,8,["list","query-form","pagination"]))}};function r(t){t.__source="src/views/index/components/posts.vue"}"function"===typeof r&&r(l);const d=l;var c=d},57426:function(t,a,n){n.r(a),n.d(a,{default:function(){return b}});var e=n(73632),i=(n(3241),n(74965),n(22040)),u=(n(99426),n(27977)),o=(n(40355),n(96872),n(57658),n(66252)),s=n(2262),l=n(3577),r=n(72573);const d={class:"posts-container"},c={class:"list-item"},m={class:"list-item-meta"},f={class:"list-item-meta-content-left"},p={class:"list-item-meta-content"},_="first";var g={__name:"index",setup(t){(0,o.bv)((()=>{n()}));const a=(0,s.qj)({tags:[]});async function n(){const t=[];for(let a=0;a<100;a++)t.push({id:a,name:`标签${a}`});a.tags=t}return(t,n)=>{const g=u.p8,v=u.Ub,w=(0,o.up)("router-link"),y=i.Dv,b=e.dq;return(0,o.wg)(),(0,o.iD)("div",d,[(0,o.Wm)(b,null,{default:(0,o.w5)((()=>[(0,o.Wm)(y,{span:24},{default:(0,o.w5)((()=>[(0,o._)("ul",null,[(0,o._)("li",c,[(0,o._)("div",m,[(0,o._)("div",f,[(0,o.Wm)(v,{modelValue:_,"onUpdate:modelValue":n[0]||(n[0]=t=>_=t)},{default:(0,o.w5)((()=>[(0,o.Wm)(g,{label:"热门",name:"first"}),(0,o.Wm)(g,{label:"热贴",name:"second"}),(0,o.Wm)(g,{label:"精华",name:"third"}),(0,o.Wm)(g,{label:"新贴",name:"forth"})])),_:1})]),(0,o._)("div",p,[(0,o.Wm)(v,{underline:!0},{default:(0,o.w5)((()=>[((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)((0,s.SU)(a).tags,(t=>((0,o.wg)(),(0,o.j4)(g,{key:t.id,name:t.id},{label:(0,o.w5)((()=>[(0,o.Wm)(w,{to:{path:"/index",query:{id:t.id}}},{default:(0,o.w5)((()=>[(0,o.Uk)((0,l.zw)(t.name),1)])),_:2},1032,["to"])])),_:2},1032,["name"])))),128))])),_:1})])])])])])),_:1})])),_:1}),(0,o.Wm)(b,{gutter:20},{default:(0,o.w5)((()=>[(0,o.Wm)(y,{span:24},{default:(0,o.w5)((()=>[(0,o.Wm)((0,s.SU)(r["default"]))])),_:1})])),_:1})])}}};function v(t){t.__source="src/views/index/index.vue"}var w=n(83744);"function"===typeof v&&v(g);const y=(0,w.Z)(g,[["__scopeId","data-v-01eb4414"]]);var b=y}}]);