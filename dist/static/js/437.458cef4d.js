/*!
 *  build: Vue  Admin Plus
 *  copyright: vue-admin-beautiful.com
 *  time: 2023-10-10 18:16:02
 */
"use strict";(self["webpackChunkadmin_plus"]=self["webpackChunkadmin_plus"]||[]).push([[437],{24025:function(t,e,a){a.d(e,{BB:function(){return r},BN:function(){return s},NY:function(){return u},PM:function(){return f},Xq:function(){return p},Z0:function(){return i},kA:function(){return c},l0:function(){return d},mE:function(){return m},wR:function(){return l},yo:function(){return w}});var n=a(52806),o=a(12688);function r(t){return(0,n.Z)({url:"/wwwapi.php?to=postSd&filter=heat&orderby=heats",method:"get",params:t})}function s(t){return(0,n.Z)({url:"/wwwapi.php?to=postSdView&extra=",method:"get",params:t})}function l(t){return(0,n.Z)({url:"/wwwapi.php?to=postSdOfUser",method:"get",params:t})}async function u(t){const{body:{hash:e}}=await(0,o.Gv)();return(0,n.Z)({url:"/wwwapi.php?to=postReply",method:"post",data:{file:"",subject:"",usesig:"1",replysubmit:"yes",formhash:e,tid:t.tid,message:t.message}})}async function c(t){const{body:{hash:e}}=await(0,o.Gv)();return(0,n.Z)({url:"/wwwapi.php?to=postReply",method:"post",data:{subject:"",usesig:"1",replysubmit:"yes",formhash:e,...t}})}async function i(t){const{body:{hash:e}}=await(0,o.Gv)();return t.formhash=e,(0,n.Z)({url:"/wwwapi.php?to=postDel",method:"post",data:t})}async function d(t){const{body:{hash:e}}=await(0,o.Gv)();return(0,n.Z)({url:"/wwwapi.php?to=postFavAdd",method:"get",params:{id:t,formhash:e}})}async function p(t){const{body:{hash:e}}=await(0,o.Gv)();return(0,n.Z)({url:"/wwwapi.php?to=postFavDel",method:"post",data:{favid:t,formhash:e}})}function f(t){return(0,n.Z)({url:"/wwwapi.php?to=postFavlist",method:"get",params:t})}async function m(t){const{body:{hash:e}}=await(0,o.Gv)();return(0,n.Z)({url:"/wwwapi.php?to=postLikes",method:"get",params:{tid:t,hash:e}})}async function w(t){const{body:{hash:e}}=await(0,o.Gv)();return(0,n.Z)({url:"/wwwapi.php?to=postReport",method:"post",data:{referer:"",reportsubmit:"true",rtype:"post",url:"",inajax:"1",handlekey:`miscreport${t.rid}`,formhash:e,...t}})}},17052:function(t,e,a){a.d(e,{D8:function(){return l},Gc:function(){return s},TD:function(){return n},Vj:function(){return o},eK:function(){return r}});a(57658);function n(t,e){if(0===arguments.length)return null;const a=e||"{y}-{m}-{d} {h}:{i}:{s}";let n;"object"===typeof t?n=t:("string"===typeof t&&/^[0-9]+$/.test(t)&&(t=parseInt(t)),"number"===typeof t&&10===t.toString().length&&(t*=1e3),n=new Date(t));const o={y:n.getFullYear(),m:n.getMonth()+1,d:n.getDate(),h:n.getHours(),i:n.getMinutes(),s:n.getSeconds(),a:n.getDay()};return a.replace(/{([ymdhisa])+}/g,((t,e)=>{let a=o[e];return"a"===e?["日","一","二","三","四","五","六"][a]:(t.length>0&&a<10&&(a=`0${a}`),a||0)}))}function o(t=32){const e="abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890";let a="";for(let n=0;n<t;n++)a+=e.charAt(Math.floor(Math.random()*e.length));return a}function r(t){const e=t.match(/src="(.+?)"/);return e?e[1]:t}function s(t,e,a){const n=Math.ceil(a/e);return t>=n}function l(t=0){document.getElementById("app").scrollTo({top:t,left:0,behavior:"smooth"})}},16273:function(t,e,a){a.d(e,{Z:function(){return f}});var n=a(30032),o=(a(3241),a(91154),a(97830)),r=(a(13768),a(66252)),s=a(2262),l=a(3577),u=a(22201),c=(0,r.aZ)({__name:"index",props:{header:{type:String,default:""},bodyStyle:{type:Object,default:()=>({})},shadow:{type:String,default:""},skeleton:{type:Boolean,default:!1},skeletonRows:{type:Number,default:4}},setup(t){let e=null;const a=(0,s.iH)(!0);return e=setTimeout((()=>{a.value=!1}),500),(0,u.iS)(((t,a,n)=>{clearInterval(e),n()})),(e,u)=>{const c=o.vk,i=n.Kf;return(0,r.wg)(),(0,r.j4)(i,{"body-style":t.bodyStyle,class:"vab-card",shadow:t.shadow},(0,r.Nv)({default:(0,r.w5)((()=>[t.skeleton?((0,r.wg)(),(0,r.j4)(c,{key:0,animated:"",loading:(0,s.SU)(a),rows:t.skeletonRows},{default:(0,r.w5)((()=>[(0,r.WI)(e.$slots,"default",{class:"vab-card-transition"})])),_:3},8,["loading","rows"])):(0,r.WI)(e.$slots,"default",{key:1,class:"vab-card-transition"})])),_:2},[e.$slots.header||t.header?{name:"header",fn:(0,r.w5)((()=>[(0,r.WI)(e.$slots,"header",{},(()=>[(0,r.Uk)((0,l.zw)(t.header),1)]))])),key:"0"}:void 0]),1032,["body-style","shadow"])}}});function i(t){t.__source="library/components/VabCard/index.vue"}var d=a(83744);"function"===typeof i&&i(c);const p=(0,d.Z)(c,[["__scopeId","data-v-391150ea"]]);var f=p},437:function(t,e,a){a.r(e),a.d(e,{default:function(){return j}});var n=a(49676),o=(a(3241),a(73204),a(73632)),r=(a(74965),a(16273)),s=a(63715),l=(a(5508),a(61046)),u=(a(19414),a(91194)),c=(a(2993),a(32590),a(10661)),i=(a(35095),a(14181)),d=(a(33828),a(22040)),p=(a(99426),a(27977)),f=(a(40355),a(96872),a(57658),a(66252)),m=a(2262),w=a(24025),h=a(17052);const g={class:"create-list-container"},y={class:"create-list-card-body"},b={class:"create-list-tag-group"},v={class:"create-list-image-group"},_={class:"create-list-image"},W={class:"create-list-folow"},k="first";var S={__name:"list",setup(t){(0,f.bv)((()=>{S(),x()}));const e=(0,m.qj)({tags:[],list:[],page:1,pageSize:1,total:1}),a=(0,f.Fl)((()=>e.list.map((t=>(t.authoravatar=(0,h.eK)(t.authoravatar),t)))));async function S(){const t=[];for(let e=0;e<100;e++)t.push({id:e,name:`标签${e}`});e.tags=t}async function x(){try{const t={page:e.page},{body:{list:a,page_perpage:n,page_allcount:o}}=await(0,w.BB)(t);e.list=[...a],e.pageSize=parseInt(n),e.total=parseInt(o)}catch(t){}}return(t,w)=>{const h=p.p8,S=p.Ub,Z=d.Dv,U=(0,f.up)("PictureRounded"),j=i.gn,D=c.Q0,I=(0,f.up)("Picture"),z=(0,f.up)("Edit"),G=(0,f.up)("EditPen"),R=u.QQ,V=u.Lf,B=l.F8,$=(0,f.up)("Delete"),C=(0,f.up)("Share"),F=(0,f.up)("Download"),M=s.ElCheckbox,E=r.Z,P=o.dq,q=n.R;return(0,f.wg)(),(0,f.iD)("div",g,[(0,f.Wm)(Z,{span:24},{default:(0,f.w5)((()=>[(0,f.Wm)(S,{modelValue:k,"onUpdate:modelValue":w[0]||(w[0]=t=>k=t)},{default:(0,f.w5)((()=>[(0,f.Wm)(h,{label:"默认平铺",name:"first"}),(0,f.Wm)(h,{label:"列表显示",name:"second"})])),_:1})])),_:1}),(0,f.Wm)(P,{gutter:20},{default:(0,f.w5)((()=>[((0,f.wg)(!0),(0,f.iD)(f.HY,null,(0,f.Ko)((0,m.SU)(a),(e=>((0,f.wg)(),(0,f.j4)(Z,{key:e.key,xs:12,sm:6,md:4,lg:4,xl:3},{default:(0,f.w5)((()=>[(0,f.Wm)(E,{"body-style":{padding:"0px"},shadow:"hover"},{default:(0,f.w5)((()=>[(0,f._)("div",y,[(0,f._)("div",b,[(0,f.Wm)(V,{style:{width:"100%"}},{default:(0,f.w5)((()=>[(0,f.Wm)(R,null,{default:(0,f.w5)((()=>[(0,f.Wm)(D,{class:"box-item",effect:"dark",content:"重绘",placement:"top"},{default:(0,f.w5)((()=>[(0,f.Wm)(j,null,{default:(0,f.w5)((()=>[(0,f.Wm)(U)])),_:1})])),_:1}),(0,f.Wm)(D,{class:"box-item",effect:"dark",content:"图生图",placement:"top"},{default:(0,f.w5)((()=>[(0,f.Wm)(j,null,{default:(0,f.w5)((()=>[(0,f.Wm)(I)])),_:1})])),_:1}),(0,f.Wm)(D,{class:"box-item",effect:"dark",content:"高清修复",placement:"top"},{default:(0,f.w5)((()=>[(0,f.Wm)(j,null,{default:(0,f.w5)((()=>[(0,f.Wm)(z)])),_:1})])),_:1}),(0,f.Wm)(D,{class:"box-item",effect:"dark",content:"脸部修复",placement:"top"},{default:(0,f.w5)((()=>[(0,f.Wm)(j,null,{default:(0,f.w5)((()=>[(0,f.Wm)(G)])),_:1})])),_:1})])),_:1})])),_:1})]),(0,f._)("div",v,[(0,f._)("div",_,[(0,f.Wm)(B,{src:"http://120.232.127.22/sd/forum/threadcover/d6/7d/39.jpg","zoom-rate":1.1,"preview-src-list":["http://120.232.127.22/sd/forum/202309/15/115104iwwo1p1z1pwcppw0.png"],"initial-index":0,"hide-on-click-modal":"true",fit:"contain"},null,8,["preview-src-list"])]),(0,f._)("div",W,[(0,f.Wm)(V,{style:{width:"100%"}},{default:(0,f.w5)((()=>[(0,f.Wm)(R,null,{default:(0,f.w5)((()=>[(0,f.Wm)(D,{class:"box-item",effect:"dark",content:"删图",placement:"top"},{default:(0,f.w5)((()=>[(0,f.Wm)(j,null,{default:(0,f.w5)((()=>[(0,f.Wm)($)])),_:1})])),_:1}),(0,f.Wm)(D,{class:"box-item",effect:"dark",content:"分享",placement:"top"},{default:(0,f.w5)((()=>[(0,f.Wm)(j,null,{default:(0,f.w5)((()=>[(0,f.Wm)(C)])),_:1})])),_:1}),(0,f.Wm)(D,{class:"box-item",effect:"dark",content:"下载",placement:"top"},{default:(0,f.w5)((()=>[(0,f.Wm)(j,null,{default:(0,f.w5)((()=>[(0,f.Wm)(F)])),_:1})])),_:1}),(0,f.Wm)(D,{class:"box-item",effect:"dark",content:"选中批量下载和分享",placement:"top"},{default:(0,f.w5)((()=>[(0,f.Wm)(M,{modelValue:t.checked1,"onUpdate:modelValue":w[1]||(w[1]=e=>t.checked1=e),label:"",size:"large"},null,8,["modelValue"])])),_:1})])),_:1})])),_:1})])])])])),_:1})])),_:2},1024)))),128))])),_:1}),(0,m.SU)(a).length>0?((0,f.wg)(),(0,f.j4)(q,{key:0,"current-page":(0,m.SU)(e).page,"onUpdate:currentPage":w[2]||(w[2]=t=>(0,m.SU)(e).page=t),layout:"prev, pager, next","page-size":(0,m.SU)(e).pageSize,total:(0,m.SU)(e).total,onCurrentChange:x},null,8,["current-page","page-size","total"])):(0,f.kq)("",!0)])}}};function x(t){t.__source="src/views/stablediffusion/list.vue"}var Z=a(83744);"function"===typeof x&&x(S);const U=(0,Z.Z)(S,[["__scopeId","data-v-259abb85"]]);var j=U}}]);