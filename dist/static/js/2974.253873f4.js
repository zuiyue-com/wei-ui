/*!
 *  build: Vue  Admin Plus
 *  copyright: vue-admin-beautiful.com
 *  time: 2023-10-10 18:16:02
 */
"use strict";(self["webpackChunkadmin_plus"]=self["webpackChunkadmin_plus"]||[]).push([[2974,2664],{74571:function(t,a,n){n.d(a,{Z:function(){return o}});var e=n(2262);function o(t){const a=(0,e.qj)({dataList:[],queryForm:{page:1},pagination:{pageSize:1,total:1}}),{dataList:n,queryForm:o,pagination:i}=(0,e.BK)(a);async function u(){try{const{body:{list:n,page_perpage:e,page_allcount:o}}=await t();a.dataList=[...n],i.pageSize=parseInt(e),i.total=parseInt(o)}catch(n){}}return{dataList:n,queryForm:o,pagination:i,loadData:u}}},92735:function(t,a,n){n.r(a),n.d(a,{default:function(){return d}});var e=n(66252),o=n(2262),i=n(91814),u=n(24025),r=n(74571),s=n(22201),p={__name:"posts",setup(t){const a=(0,s.yj)(),{dataList:n,queryForm:p,pagination:c,loadData:l}=(0,r.Z)(d);function d(){return(0,u.wR)(p.value)}function f(t){p.value.page=t,l()}return(0,e.bv)((()=>{p.value.uid=parseInt(a.params.id),l()})),(t,a)=>((0,e.wg)(),(0,e.j4)((0,o.SU)(i["default"]),{list:(0,o.SU)(n),"query-form":(0,o.SU)(p),pagination:(0,o.SU)(c),onLoad:f},null,8,["list","query-form","pagination"]))}};function c(t){t.__source="src/views/setting/personalCenter/components/posts.vue"}"function"===typeof c&&c(p);const l=p;var d=l}}]);