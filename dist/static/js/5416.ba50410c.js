/*!
 *  build: Vue  Admin Plus
 *  copyright: vue-admin-beautiful.com
 *  time: 2023-10-10 18:16:02
 */
"use strict";(self["webpackChunkadmin_plus"]=self["webpackChunkadmin_plus"]||[]).push([[5416,5355],{24025:function(t,e,n){n.d(e,{BB:function(){return i},BN:function(){return s},NY:function(){return c},PM:function(){return h},Xq:function(){return p},Z0:function(){return l},kA:function(){return u},l0:function(){return d},mE:function(){return f},wR:function(){return r},yo:function(){return m}});var a=n(52806),o=n(12688);function i(t){return(0,a.Z)({url:"/wwwapi.php?to=postSd&filter=heat&orderby=heats",method:"get",params:t})}function s(t){return(0,a.Z)({url:"/wwwapi.php?to=postSdView&extra=",method:"get",params:t})}function r(t){return(0,a.Z)({url:"/wwwapi.php?to=postSdOfUser",method:"get",params:t})}async function c(t){const{body:{hash:e}}=await(0,o.Gv)();return(0,a.Z)({url:"/wwwapi.php?to=postReply",method:"post",data:{file:"",subject:"",usesig:"1",replysubmit:"yes",formhash:e,tid:t.tid,message:t.message}})}async function u(t){const{body:{hash:e}}=await(0,o.Gv)();return(0,a.Z)({url:"/wwwapi.php?to=postReply",method:"post",data:{subject:"",usesig:"1",replysubmit:"yes",formhash:e,...t}})}async function l(t){const{body:{hash:e}}=await(0,o.Gv)();return t.formhash=e,(0,a.Z)({url:"/wwwapi.php?to=postDel",method:"post",data:t})}async function d(t){const{body:{hash:e}}=await(0,o.Gv)();return(0,a.Z)({url:"/wwwapi.php?to=postFavAdd",method:"get",params:{id:t,formhash:e}})}async function p(t){const{body:{hash:e}}=await(0,o.Gv)();return(0,a.Z)({url:"/wwwapi.php?to=postFavDel",method:"post",data:{favid:t,formhash:e}})}function h(t){return(0,a.Z)({url:"/wwwapi.php?to=postFavlist",method:"get",params:t})}async function f(t){const{body:{hash:e}}=await(0,o.Gv)();return(0,a.Z)({url:"/wwwapi.php?to=postLikes",method:"get",params:{tid:t,hash:e}})}async function m(t){const{body:{hash:e}}=await(0,o.Gv)();return(0,a.Z)({url:"/wwwapi.php?to=postReport",method:"post",data:{referer:"",reportsubmit:"true",rtype:"post",url:"",inajax:"1",handlekey:`miscreport${t.rid}`,formhash:e,...t}})}},5649:function(t,e,n){n.d(e,{o:function(){return u}});n(57658);var a=n(24025),o=n(81095),i=n(30582),s=n(17052),r=n(47720);const c=(0,i.L)(),u=(0,r.Q_)("topic",{state:()=>({queryForm:{tid:0,page:1},detail:{},comments:[],extraInfo:{},pagination:{pageSize:1,total:1},favId:0,likeId:0}),getters:{canAction(){return c.canAction(this.detail.authorid)},getTopicUserId(){return this.detail.authorid},getTopicTags(){return this.detail.tags?this.detail.tags.map((t=>({id:t[0],name:t[1]}))):[]},getTopicImages(){return this.detail.attachments?Object.values(this.detail.attachments).map((t=>({id:t.aid,image:`${t.url}${t.attachment}`,height:t.height}))):[]},getTopicImagesMaxHeight(){const t=this.getTopicImages.map((t=>t.height));return Math.max(...t)},getTid(){return this.detail.tid},getPid(){return this.detail.pid},hasNoMoreData(){return(0,s.Gc)(this.queryForm.page,this.pagination.pageSize,this.pagination.total-1)}},actions:{setTopic(t){this.queryForm.tid=t},async loadTopic(){const{body:{list:t,forum_thread:e,page_perpage:n,page_allcount:o}}=await(0,a.BN)(this.queryForm),i=t;this.detail=i[0]??{},this.comments=i.slice(1),this.extraInfo=e,this.pagination.pageSize=parseInt(n),this.pagination.total=parseInt(o),this.favId=this.detail.threadHasFavorite?.favid??0,this.likeId=this.detail.threadHasRecommend?.tid??0},async loadAddedTopic(){const{body:{list:t,forum_thread:e,page_perpage:n,page_allcount:o}}=await(0,a.BN)(this.queryForm);this.comments=[t[1],...this.comments],this.extraInfo=e,this.pagination.pageSize=parseInt(n),this.pagination.total=parseInt(o)},async loadMoreComments(){if(this.hasNoMoreData)return;this.queryForm.page++;const{body:{list:t}}=await(0,a.BN)(this.queryForm);this.comments.push(...t)},async handleAddFavTopic(){const{body:{favid:t}}=await(0,a.l0)(this.getTid);t>0?(this.favId=t,this.extraInfo.favtimes++,o.gp.$baseMessage("收藏成功","success","vab-hey-message-success")):o.gp.$baseMessage("收藏失败","error","vab-hey-message-error")},async handleDelFavTopic(){await(0,a.Xq)(this.favId),this.favId=0,this.extraInfo.favtimes--,o.gp.$baseMessage("取消收藏成功","success","vab-hey-message-success")},async handleAddLikeTopic(){if(!this.canAction)return;const{body:{recommendv:t}}=await(0,a.mE)(this.getTid);this.likeId=t,this.extraInfo.recommend_add++}}})},17052:function(t,e,n){n.d(e,{D8:function(){return r},Gc:function(){return s},TD:function(){return a},Vj:function(){return o},eK:function(){return i}});n(57658);function a(t,e){if(0===arguments.length)return null;const n=e||"{y}-{m}-{d} {h}:{i}:{s}";let a;"object"===typeof t?a=t:("string"===typeof t&&/^[0-9]+$/.test(t)&&(t=parseInt(t)),"number"===typeof t&&10===t.toString().length&&(t*=1e3),a=new Date(t));const o={y:a.getFullYear(),m:a.getMonth()+1,d:a.getDate(),h:a.getHours(),i:a.getMinutes(),s:a.getSeconds(),a:a.getDay()};return n.replace(/{([ymdhisa])+}/g,((t,e)=>{let n=o[e];return"a"===e?["日","一","二","三","四","五","六"][n]:(t.length>0&&n<10&&(n=`0${n}`),n||0)}))}function o(t=32){const e="abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890";let n="";for(let a=0;a<t;a++)n+=e.charAt(Math.floor(Math.random()*e.length));return n}function i(t){const e=t.match(/src="(.+?)"/);return e?e[1]:t}function s(t,e,n){const a=Math.ceil(n/e);return t>=a}function r(t=0){document.getElementById("app").scrollTo({top:t,left:0,behavior:"smooth"})}},95355:function(t,e,n){n.r(e),n.d(e,{default:function(){return d}});var a=n(66252),o=n(3577),i=n(2262);const s={class:"box"};var r={__name:"index",props:{icon:{type:String,default:""},size:{type:String,default:""},text:{type:[Number,String],default:""},color:{type:String,default:""}},setup(t){const e=t,n=(0,a.Fl)((()=>{const t={fontSize:e.size};return e.color&&(t.color=e.color),t}));return(e,r)=>{const c=(0,a.up)("vab-icon");return(0,a.wg)(),(0,a.iD)("div",s,[(0,a.Wm)(c,{icon:t.icon,style:(0,o.j5)((0,i.SU)(n)),class:"icon"},null,8,["icon","style"]),(0,a._)("span",{style:(0,o.j5)((0,i.SU)(n))},(0,o.zw)(t.text),5)])}}};function c(t){t.__source="src/components/IconText/index.vue"}var u=n(83744);"function"===typeof c&&c(r);const l=(0,u.Z)(r,[["__scopeId","data-v-55dcc2f6"]]);var d=l},65416:function(t,e,n){n.r(e),n.d(e,{default:function(){return g}});var a=n(14181),o=(n(3241),n(33828),n(10661)),i=(n(35095),n(66252)),s=n(2262),r=n(3577),c=n(95355),u=n(5649),l=n(47720);const d={class:"info-box"};var p={__name:"actions",emits:["reply","report"],setup(t,{emit:e}){const n=(0,u.o)(),{extraInfo:p,favId:h,likeId:f,canAction:m,getPid:g}=(0,l.Jk)(n),{handleDelFavTopic:y,handleAddFavTopic:w,handleAddLikeTopic:v}=n;async function b(){e("report",g.value,p.value.fid)}return(t,e)=>{const n=o.Q0,u=(0,i.up)("Bell"),l=a.gn;return(0,i.wg)(),(0,i.iD)("div",d,[(0,i.Wm)(n,{class:"box-item",effect:"dark",content:"收藏",placement:"top"},{default:(0,i.w5)((()=>[(0,i._)("div",null,[(0,s.SU)(h)>0?((0,i.wg)(),(0,i.j4)((0,s.SU)(c["default"]),{key:0,icon:"star-fill",text:(0,s.SU)(p).favtimes,color:"#B43838",class:"icon cursor-pointer",onClick:(0,s.SU)(y)},null,8,["text","onClick"])):((0,i.wg)(),(0,i.j4)((0,s.SU)(c["default"]),{key:1,icon:"star-line",text:(0,s.SU)(p).favtimes,color:"#B43838",class:"icon cursor-pointer",onClick:(0,s.SU)(w)},null,8,["text","onClick"]))])])),_:1}),(0,i.Wm)(n,{class:"box-item",effect:"dark",content:(0,s.SU)(m)?"喜欢":"自己帖子不能点赞",placement:"top"},{default:(0,i.w5)((()=>[(0,i._)("div",null,[(0,s.SU)(f)>0?((0,i.wg)(),(0,i.j4)((0,s.SU)(c["default"]),{key:0,icon:"heart-3-fill",text:(0,s.SU)(p).recommend_add,color:"#B43838",class:"icon"},null,8,["text"])):((0,i.wg)(),(0,i.j4)((0,s.SU)(c["default"]),{key:1,icon:"heart-3-line",text:(0,s.SU)(p).recommend_add,class:(0,r.C_)(["icon",(0,s.SU)(m)?"cursor-pointer":"cursor-not-allowed"]),onClick:(0,s.SU)(v)},null,8,["text","class","onClick"]))])])),_:1},8,["content"]),(0,i.Wm)(n,{class:"box-item",effect:"dark",content:"评论",placement:"top"},{default:(0,i.w5)((()=>[(0,i.Wm)((0,s.SU)(c["default"]),{icon:"chat-2-line",text:(0,s.SU)(p).replies,class:"icon"},null,8,["text"])])),_:1}),(0,i.Wm)(n,{class:"box-item",effect:"dark",content:"举报",placement:"top"},{default:(0,i.w5)((()=>[(0,i.Wm)(l,{style:{color:"var(--el-color-warning)"},class:"cursor-pointer",onClick:b},{default:(0,i.w5)((()=>[(0,i.Wm)(u)])),_:1})])),_:1})])}}};function h(t){t.__source="src/views/topic/components/actions.vue"}var f=n(83744);"function"===typeof h&&h(p);const m=(0,f.Z)(p,[["__scopeId","data-v-586c818c"]]);var g=m}}]);