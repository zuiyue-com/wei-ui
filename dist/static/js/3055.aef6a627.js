/*!
 *  build: Vue  Admin Plus
 *  copyright: vue-admin-beautiful.com
 *  time: 2023-10-19 19:31:27
 */
"use strict";(self["webpackChunkadmin_plus"]=self["webpackChunkadmin_plus"]||[]).push([[3055],{24025:function(t,e,a){a.d(e,{BB:function(){return n},BN:function(){return c},N7:function(){return v},NY:function(){return h},PM:function(){return f},Wx:function(){return u},Xq:function(){return g},Z0:function(){return m},iw:function(){return i},kA:function(){return p},l0:function(){return l},mE:function(){return w},wR:function(){return d},xS:function(){return b},yX:function(){return o},yo:function(){return y}});var s=a(52806),r=a(12688);function o(){return(0,s.Z)({url:"/wwwapi.php?to=sd&modac=tags",method:"get"})}function n(t){return(0,s.Z)({url:"/wwwapi.php?to=postSd",method:"get",params:t})}function i(t){const e={heat:{filter:"heat",orderby:"heats"},hot:{filter:"hot",orderby:""},digest:{filter:"digest",digest:"1"},lastpost:{filter:"lastpost",orderby:"lastpost"}},a={...e[t]};return a}function u(t){return(0,s.Z)({url:"/wwwapi.php?to=postSdTag",method:"get",params:t})}function c(t){return(0,s.Z)({url:"/wwwapi.php?to=postSdView&extra=",method:"get",params:t})}function d(t){return(0,s.Z)({url:"/wwwapi.php?to=postSdOfUser",method:"get",params:t})}async function h(t){const{body:{hash:e}}=await(0,r.Gv)();return(0,s.Z)({url:"/wwwapi.php?to=postReply",method:"post",data:{file:"",subject:"",usesig:"1",replysubmit:"yes",formhash:e,tid:t.tid,message:t.message}})}async function p(t){const{body:{hash:e}}=await(0,r.Gv)();return(0,s.Z)({url:"/wwwapi.php?to=postReply",method:"post",data:{subject:"",usesig:"1",replysubmit:"yes",formhash:e,...t}})}async function m(t){const{body:{hash:e}}=await(0,r.Gv)();return t.formhash=e,(0,s.Z)({url:"/wwwapi.php?to=postDel",method:"post",data:t})}async function l(t){const{body:{hash:e}}=await(0,r.Gv)();return(0,s.Z)({url:"/wwwapi.php?to=postFavAdd",method:"get",params:{id:t,formhash:e}})}async function g(t){const{body:{hash:e}}=await(0,r.Gv)();return(0,s.Z)({url:"/wwwapi.php?to=postFavDel",method:"post",data:{favid:t,formhash:e}})}function f(t){return(0,s.Z)({url:"/wwwapi.php?to=postFavlist",method:"get",params:t})}async function w(t){const{body:{hash:e}}=await(0,r.Gv)();return(0,s.Z)({url:"/wwwapi.php?to=postLikes",method:"get",params:{tid:t,hash:e}})}async function y(t){const{body:{hash:e}}=await(0,r.Gv)();return(0,s.Z)({url:"/wwwapi.php?to=postReport",method:"post",data:{referer:"",reportsubmit:"true",rtype:"post",url:"",inajax:"1",handlekey:`miscreport${t.rid}`,formhash:e,...t}})}async function b(t){const e={...t};e.tags=e.tags.join(",");const{body:{hash:a}}=await(0,r.Gv)();return(0,s.Z)({url:"/wwwapi.php?to=sd&modac=sharePrepare",method:"post",data:{formhash:a,...e}})}async function v(t){return(0,s.Z)({url:"/wwwapi.php?to=sdpost",method:"post",data:t})}},5649:function(t,e,a){a.d(e,{o:function(){return c}});a(57658);var s=a(24025),r=a(81095),o=a(30582),n=a(17052),i=a(47720);const u=(0,o.L)(),c=(0,i.Q_)("topic",{state:()=>({queryForm:{tid:0,page:1},detail:{},images:[],comments:[],extraInfo:{},pagination:{pageSize:1,total:1},favId:0,likeId:0,imageId:0}),getters:{canAction(){return u.canAction(this.detail.authorid)},getTopicUserId(){return this.detail.authorid},getTopicTags(){return this.detail.tags?this.detail.tags.map((t=>({id:t[0],name:t[1]}))):[]},getTopicImages(){return this.images},getTopicImagesMaxHeight(){const t=this.getTopicImages.map((t=>t.height));return Math.max(...t)},getTid(){return this.detail.tid},getPid(){return this.detail.pid},hasNoMoreData(){return(0,n.Gc)(this.queryForm.page,this.pagination.pageSize,this.pagination.total-1)}},actions:{formatImages(){return this.detail.attachments?Object.values(this.detail.attachments).map((t=>({id:t.aid,image:`${t.url}${t.attachment}`,height:t.height}))):[]},setTopic(t){this.queryForm.tid=t},async loadTopic(){const{body:{list:t,forum_thread:e,page_perpage:a,page_allcount:r}}=await(0,s.BN)(this.queryForm),o=t;this.detail=o[0]??{},this.images=this.formatImages(),this.comments=o.slice(1),this.extraInfo=e,this.pagination.pageSize=parseInt(a),this.pagination.total=parseInt(r),this.favId=this.detail.threadHasFavorite?.favid??0,this.likeId=this.detail.threadHasRecommend?.tid??0,this.imageId=this.images[0]?this.images[0].id:0},async loadAddedTopic(){const{body:{list:t,forum_thread:e,page_perpage:a,page_allcount:r}}=await(0,s.BN)(this.queryForm);this.comments=[t[1],...this.comments],this.extraInfo=e,this.pagination.pageSize=parseInt(a),this.pagination.total=parseInt(r)},async loadMoreComments(){if(this.hasNoMoreData)return;this.queryForm.page++;const{body:{list:t}}=await(0,s.BN)(this.queryForm);this.comments.push(...t)},async handleAddFavTopic(){const{body:{favid:t}}=await(0,s.l0)(this.getTid);t>0?(this.favId=t,this.extraInfo.favtimes++,r.gp.$baseMessage("收藏成功","success","vab-hey-message-success")):r.gp.$baseMessage("收藏失败","error","vab-hey-message-error")},async handleDelFavTopic(){await(0,s.Xq)(this.favId),this.favId=0,this.extraInfo.favtimes--,r.gp.$baseMessage("取消收藏成功","success","vab-hey-message-success")},async handleAddLikeTopic(){if(!this.canAction)return;const{body:{recommendv:t}}=await(0,s.mE)(this.getTid);this.likeId=t,this.extraInfo.recommend_add++}}})},17052:function(t,e,a){a.d(e,{D8:function(){return n},Gc:function(){return o},TD:function(){return s},Vj:function(){return r}});a(57658);function s(t,e){if(0===arguments.length)return null;const a=e||"{y}-{m}-{d} {h}:{i}:{s}";let s;"object"===typeof t?s=t:("string"===typeof t&&/^[0-9]+$/.test(t)&&(t=parseInt(t)),"number"===typeof t&&10===t.toString().length&&(t*=1e3),s=new Date(t));const r={y:s.getFullYear(),m:s.getMonth()+1,d:s.getDate(),h:s.getHours(),i:s.getMinutes(),s:s.getSeconds(),a:s.getDay()};return a.replace(/{([ymdhisa])+}/g,((t,e)=>{let a=r[e];return"a"===e?["日","一","二","三","四","五","六"][a]:(t.length>0&&a<10&&(a=`0${a}`),a||0)}))}function r(t=32){const e="abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890";let a="";for(let s=0;s<t;s++)a+=e.charAt(Math.floor(Math.random()*e.length));return a}function o(t,e,a){const s=Math.ceil(a/e);return t>=s}function n(t=0){document.getElementById("app").scrollTo({top:t,left:0,behavior:"smooth"})}},29431:function(t,e,a){a.d(e,{Nb:function(){return o},jQ:function(){return s},jl:function(){return r}});const s={message:[{required:!0,message:"评论内容必填",trigger:"blur"},{min:10,message:"帖子长度必须大于10个字符",trigger:"blur"},{max:255,message:"帖子长度超过255个字符",trigger:"blur"}]},r={report_select:[{required:!0,message:"请选择举报类型",trigger:"blur"}],message:[{required:!0,message:"举报内容必填",trigger:"blur"},{min:8,max:255,message:"举报内容长度必须在8-255个字符",trigger:"blur"}]},o={images:[{required:!0,message:"发帖需要至少一张图片",trigger:"blur"}],subject:[{required:!0,message:"内容必填",trigger:"blur"}],tags:[{required:!0,message:"至少选择一个标签",trigger:"blur"}]}},13055:function(t,e,a){a.r(e),a.d(e,{default:function(){return y}});var s=a(20129),r=(a(3241),a(69840),a(15659)),o=(a(10444),a(6589),a(57018)),n=(a(74367),a(66252)),i=a(2262),u=a(49963),c=a(29431),d=a(24025),h=a(5649),p=a(22201);const m={class:"form"};var l={__name:"form",setup(t,{expose:e}){const a=(0,n.f3)("$baseMessage"),l=(0,h.o)(),g=(0,p.yj)(),f=(0,i.qj)({queryForm:{tid:g.params.id,pid:0,message:""},showTextarea:!1,rules:{...c.jQ},topicFormRef:null,inputCommentRef:null}),{queryForm:w,topicFormRef:y,inputCommentRef:b}=(0,i.BK)(f);function v(){f.showTextarea=!0,F()}function F(){f["topicFormRef"].clearValidate(),(0,n.Y3)((()=>{b.value.focus()}))}async function I(){const t=/@\w+ /g;t.test(f.queryForm.message)?await(0,d.kA)(f.queryForm):await(0,d.NY)(f.queryForm),f.queryForm.message="",l.loadAddedTopic(),a("回复成功","success","vab-hey-message-success")}async function q(){f["topicFormRef"].validate((t=>{t&&I()}))}function T(t,e){f.showTextarea=!0,f.queryForm.pid=t,f.queryForm.message+=`@${e} `,F()}return e({bindReplyAuthor:T}),(t,e)=>{const a=o.EZ,c=s.nH,d=r.ElButton,h=s.ly;return(0,n.wg)(),(0,n.iD)("div",m,[(0,n.Wm)(h,{ref_key:"topicFormRef",ref:y,model:(0,i.SU)(w),rules:(0,i.SU)(f).rules,class:"width-100"},{default:(0,n.w5)((()=>[(0,n.wy)((0,n._)("div",null,[(0,n.Wm)(c,{prop:"message"},{default:(0,n.w5)((()=>[(0,n.Wm)(a,{ref_key:"inputCommentRef",ref:b,modelValue:(0,i.SU)(w).message,"onUpdate:modelValue":e[0]||(e[0]=t=>(0,i.SU)(w).message=t),placeholder:"在这里输入评论内容",type:"textarea",maxlength:"256",rows:3,"show-word-limit":""},null,8,["modelValue"])])),_:1}),(0,n.Wm)(d,{type:"primary",class:"button",disabled:""===(0,i.SU)(w).message,onClick:q},{default:(0,n.w5)((()=>[(0,n.Uk)(" 评论 ")])),_:1},8,["disabled"])],512),[[u.F8,(0,i.SU)(f).showTextarea]]),(0,n.wy)((0,n._)("div",null,[(0,n.Wm)(a,{placeholder:"在这里输入评论内容",onFocus:v})],512),[[u.F8,!(0,i.SU)(f).showTextarea]])])),_:1},8,["model","rules"])])}}};function g(t){t.__source="src/views/topic/components/form.vue"}var f=a(83744);"function"===typeof g&&g(l);const w=(0,f.Z)(l,[["__scopeId","data-v-374bb153"]]);var y=w}}]);