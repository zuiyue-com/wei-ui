/*!
 *  build: Vue  Admin Plus
 *  copyright: vue-admin-beautiful.com
 *  time: 2023-10-19 19:31:27
 */
"use strict";(self["webpackChunkadmin_plus"]=self["webpackChunkadmin_plus"]||[]).push([[9473],{24025:function(t,e,a){a.d(e,{BB:function(){return r},BN:function(){return u},N7:function(){return v},NY:function(){return d},PM:function(){return m},Wx:function(){return l},Xq:function(){return f},Z0:function(){return h},iw:function(){return i},kA:function(){return p},l0:function(){return w},mE:function(){return y},wR:function(){return c},xS:function(){return k},yX:function(){return s},yo:function(){return _}});var o=a(52806),n=a(12688);function s(){return(0,o.Z)({url:"/wwwapi.php?to=sd&modac=tags",method:"get"})}function r(t){return(0,o.Z)({url:"/wwwapi.php?to=postSd",method:"get",params:t})}function i(t){const e={heat:{filter:"heat",orderby:"heats"},hot:{filter:"hot",orderby:""},digest:{filter:"digest",digest:"1"},lastpost:{filter:"lastpost",orderby:"lastpost"}},a={...e[t]};return a}function l(t){return(0,o.Z)({url:"/wwwapi.php?to=postSdTag",method:"get",params:t})}function u(t){return(0,o.Z)({url:"/wwwapi.php?to=postSdView&extra=",method:"get",params:t})}function c(t){return(0,o.Z)({url:"/wwwapi.php?to=postSdOfUser",method:"get",params:t})}async function d(t){const{body:{hash:e}}=await(0,n.Gv)();return(0,o.Z)({url:"/wwwapi.php?to=postReply",method:"post",data:{file:"",subject:"",usesig:"1",replysubmit:"yes",formhash:e,tid:t.tid,message:t.message}})}async function p(t){const{body:{hash:e}}=await(0,n.Gv)();return(0,o.Z)({url:"/wwwapi.php?to=postReply",method:"post",data:{subject:"",usesig:"1",replysubmit:"yes",formhash:e,...t}})}async function h(t){const{body:{hash:e}}=await(0,n.Gv)();return t.formhash=e,(0,o.Z)({url:"/wwwapi.php?to=postDel",method:"post",data:t})}async function w(t){const{body:{hash:e}}=await(0,n.Gv)();return(0,o.Z)({url:"/wwwapi.php?to=postFavAdd",method:"get",params:{id:t,formhash:e}})}async function f(t){const{body:{hash:e}}=await(0,n.Gv)();return(0,o.Z)({url:"/wwwapi.php?to=postFavDel",method:"post",data:{favid:t,formhash:e}})}function m(t){return(0,o.Z)({url:"/wwwapi.php?to=postFavlist",method:"get",params:t})}async function y(t){const{body:{hash:e}}=await(0,n.Gv)();return(0,o.Z)({url:"/wwwapi.php?to=postLikes",method:"get",params:{tid:t,hash:e}})}async function _(t){const{body:{hash:e}}=await(0,n.Gv)();return(0,o.Z)({url:"/wwwapi.php?to=postReport",method:"post",data:{referer:"",reportsubmit:"true",rtype:"post",url:"",inajax:"1",handlekey:`miscreport${t.rid}`,formhash:e,...t}})}async function k(t){const e={...t};e.tags=e.tags.join(",");const{body:{hash:a}}=await(0,n.Gv)();return(0,o.Z)({url:"/wwwapi.php?to=sd&modac=sharePrepare",method:"post",data:{formhash:a,...e}})}async function v(t){return(0,o.Z)({url:"/wwwapi.php?to=sdpost",method:"post",data:t})}},16273:function(t,e,a){a.d(e,{Z:function(){return h}});var o=a(30032),n=(a(3241),a(91154),a(97830)),s=(a(13768),a(66252)),r=a(2262),i=a(3577),l=a(22201),u=(0,s.aZ)({__name:"index",props:{header:{type:String,default:""},bodyStyle:{type:Object,default:()=>({})},shadow:{type:String,default:""},skeleton:{type:Boolean,default:!1},skeletonRows:{type:Number,default:4}},setup(t){let e=null;const a=(0,r.iH)(!0);return e=setTimeout((()=>{a.value=!1}),500),(0,l.iS)(((t,a,o)=>{clearInterval(e),o()})),(e,l)=>{const u=n.vk,c=o.Kf;return(0,s.wg)(),(0,s.j4)(c,{"body-style":t.bodyStyle,class:"vab-card",shadow:t.shadow},(0,s.Nv)({default:(0,s.w5)((()=>[t.skeleton?((0,s.wg)(),(0,s.j4)(u,{key:0,animated:"",loading:(0,r.SU)(a),rows:t.skeletonRows},{default:(0,s.w5)((()=>[(0,s.WI)(e.$slots,"default",{class:"vab-card-transition"})])),_:3},8,["loading","rows"])):(0,s.WI)(e.$slots,"default",{key:1,class:"vab-card-transition"})])),_:2},[e.$slots.header||t.header?{name:"header",fn:(0,s.w5)((()=>[(0,s.WI)(e.$slots,"header",{},(()=>[(0,s.Uk)((0,i.zw)(t.header),1)]))])),key:"0"}:void 0]),1032,["body-style","shadow"])}}});function c(t){t.__source="library/components/VabCard/index.vue"}var d=a(83744);"function"===typeof c&&c(u);const p=(0,d.Z)(u,[["__scopeId","data-v-391150ea"]]);var h=p},69473:function(t,e,a){a.r(e),a.d(e,{default:function(){return G}});var o=a(49676),n=(a(3241),a(73204),a(16273)),s=a(91194),r=(a(2993),a(32590),a(10661)),i=(a(35095),a(57534)),l=(a(92471),a(35756)),u=(a(19414),a(57658),a(66252)),c=a(2262),d=a(3577),p=a(49963),h=a(24025),w=a(30582),f=a(19635),m=a(91736);const y=t=>((0,u.dD)("data-v-039ca3fc"),t=t(),(0,u.Cn)(),t),_={class:"posts-card-body"},k={class:"posts-image-group"},v={class:"posts-image"},g={key:0,class:"post-folow"},b=["onClick"],W=y((()=>(0,u._)("i",{class:"ri-chat-4-line",title:"评论"},null,-1))),Z={key:0,class:"posts-description"},U={class:"el-avatar el-avatar--small el-avatar--circle"},x=["src"],S=["onClick"],C=y((()=>(0,u._)("i",{class:"ri-chat-4-line",title:"评论"},null,-1)));var j={__name:"index",props:{list:{type:Array,default:()=>[]},pagination:{type:Object,default:()=>{}},queryForm:{type:Object,default:()=>{}},hover:{type:Boolean,default:!0},showUserBar:{type:Boolean,default:!0}},emits:["load"],setup(t,{emit:e}){const a=t,y=(0,w.L)(),j=(0,u.Fl)((()=>a.list.map((t=>{t.link={path:`/topic/${t.tid}`},t.user_link=(0,f.gx)(t.authorid),t.can_action=y.canAction(t.authorid);const e=[];return e.push(t.can_action&&0==t.threadHasRecommend?"cursor-pointer":""),e.push(t.threadHasRecommend>0?"ri-heart-3-fill":"ri-heart-3-line"),t.like_classes=e,t}))));function R(t){e("load",t)}async function z(t){if(void 0===t.threadHasRecommend)return;if(!t.can_action||t.threadHasRecommend>0)return;const{body:{recommendc:e}}=await(0,h.mE)(t.tid);t.recommend_add=parseInt(e)+1,t.threadHasRecommend=1}return(e,a)=>{const h=l.F8,w=(0,u.up)("router-link"),f=i.Ks,y=r.Q0,B=s.QQ,G=s.Lf,I=n.Z,q=o.R;return(0,u.wg)(),(0,u.iD)(u.HY,null,[(0,u.Wm)((0,c.SU)(m.p),{list:(0,c.SU)(j),width:230,"row-key":"tid",gutter:16},{item:(0,u.w5)((({item:a})=>[(0,u.Wm)(I,{"body-style":{padding:"0px"},shadow:"hover"},{default:(0,u.w5)((()=>[(0,u._)("div",_,[(0,u._)("div",k,[(0,u.Wm)(w,{to:a.link},{default:(0,u.w5)((()=>[(0,u._)("div",v,[a.coverpath?((0,u.wg)(),(0,u.j4)(h,{key:0,src:a.coverpath},null,8,["src"])):(0,u.kq)("",!0)])])),_:2},1032,["to"]),(0,u._)("div",{class:(0,d.C_)(["posts-tag-group",{hover:t.hover}])},[(0,u.WI)(e.$slots,"action",{post:a},(()=>[(0,u.Wm)(f,{hit:""},{default:(0,u.w5)((()=>[(0,u.Uk)("做同款")])),_:1})]))],2),!t.showUserBar&&a.coverpath?((0,u.wg)(),(0,u.iD)("div",g,[(0,u.Wm)(G,{style:{width:"100%"}},{default:(0,u.w5)((()=>[(0,u.Wm)(B,null,{default:(0,u.w5)((()=>[(0,u.Wm)(y,{class:"box-item",effect:"dark",content:"点赞",placement:"top"},{default:(0,u.w5)((()=>[(0,u._)("i",{class:(0,d.C_)(["ri-heart-3-line",a.like_classes]),onClick:(0,p.iM)((t=>z(a)),["stop"])},null,10,b)])),_:2},1024),(0,u.Uk)(" "+(0,d.zw)(a.recommend_add)+" ",1),(0,u.Wm)(y,{class:"box-item",effect:"dark",content:"评论",placement:"top"},{default:(0,u.w5)((()=>[W])),_:1}),(0,u.Uk)(" "+(0,d.zw)(a.replies),1)])),_:2},1024)])),_:2},1024)])):(0,u.kq)("",!0)]),(0,u._)("div",{class:(0,d.C_)(["posts-description ellipsisTitle",{"no-user-bar":!t.showUserBar}])},[(0,u.Wm)(w,{to:a.link,class:"user-link"},{default:(0,u.w5)((()=>[(0,u.Uk)((0,d.zw)(a.subject),1)])),_:2},1032,["to"])],2),t.showUserBar?((0,u.wg)(),(0,u.iD)("div",Z,[(0,u.Wm)(G,{style:{width:"100%"}},{default:(0,u.w5)((()=>[(0,u.Wm)(B,null,{default:(0,u.w5)((()=>[(0,u.Wm)(w,{to:a.user_link,class:"user-link"},{default:(0,u.w5)((()=>[(0,u._)("span",U,[(0,u._)("img",{src:a.authoravatar},null,8,x)])])),_:2},1032,["to"])])),_:2},1024),(0,u.Wm)(B,null,{default:(0,u.w5)((()=>[(0,u.Wm)(w,{to:a.user_link,class:"user-link"},{default:(0,u.w5)((()=>[(0,u.Uk)((0,d.zw)(a.author),1)])),_:2},1032,["to"])])),_:2},1024),(0,u.Wm)(B,null,{default:(0,u.w5)((()=>[(0,u.Wm)(y,{class:"box-item",effect:"dark",content:"点赞",placement:"top"},{default:(0,u.w5)((()=>[(0,u._)("i",{class:(0,d.C_)(["",a.like_classes]),onClick:(0,p.iM)((t=>z(a)),["stop"])},null,10,S)])),_:2},1024),(0,u.Uk)(" "+(0,d.zw)(a.recommend_add)+" ",1),(0,u.Wm)(y,{class:"box-item",effect:"dark",content:"评论",placement:"top"},{default:(0,u.w5)((()=>[C])),_:1}),(0,u.Uk)(" "+(0,d.zw)(a.replies),1)])),_:2},1024)])),_:2},1024)])):(0,u.kq)("",!0)])])),_:2},1024)])),_:3},8,["list"]),(0,c.SU)(j).length>0?((0,u.wg)(),(0,u.j4)(q,{key:0,"current-page":t.queryForm.page,layout:"prev, pager, next","page-size":t.pagination.pageSize,total:t.pagination.total,onCurrentChange:R},null,8,["current-page","page-size","total"])):(0,u.kq)("",!0)],64)}}};function R(t){t.__source="src/components/TopicList/index.vue"}var z=a(83744);"function"===typeof R&&R(j);const B=(0,z.Z)(j,[["__scopeId","data-v-039ca3fc"]]);var G=B}}]);