/*!
 *  build: Vue  Admin Plus
 *  copyright: vue-admin-beautiful.com
 *  time: 2023-09-28 17:16:01
 */
"use strict";(self["webpackChunkadmin_plus"]=self["webpackChunkadmin_plus"]||[]).push([[3617,2977],{63617:function(e,t,s){s.r(t),s.d(t,{default:function(){return p}});var a=s(31452),r=(s(3241),s(68445),s(66252)),i=s(2262),u=s(3577),n=s(32977),o=s(19635);const l={key:0},c={key:1};var d={__name:"follower",props:{user:{type:Object,default:()=>{}},usernameKey:{type:String,default:""},avatarKey:{type:String,default:""},userIdKey:{type:[String,Number],default:""}},setup(e){return(t,s)=>{const d=a.E2,f=(0,r.up)("router-link");return(0,r.wg)(),(0,r.j4)(f,{to:(0,i.SU)(o.gx)(e.user[e.userIdKey])},{default:(0,r.w5)((()=>[(0,r.Wm)((0,i.SU)(n["default"]),{user:e.user,"avatar-key":e.avatarKey},{title:(0,r.w5)((()=>[(0,r.Wm)(d,{type:"info"},{default:(0,r.w5)((()=>[(0,r.Uk)((0,u.zw)(e.user[e.usernameKey]),1)])),_:1})])),description:(0,r.w5)((()=>[e.user.recentnote?((0,r.wg)(),(0,r.iD)("div",l,"最近动作："+(0,u.zw)(e.user.recentnote),1)):((0,r.wg)(),(0,r.iD)("div",c,"没有最近动作"))])),bottom:(0,r.w5)((()=>[(0,r.Uk)(" 粉丝 "),(0,r.Wm)(d,{type:"primary"},{default:(0,r.w5)((()=>[(0,r.Uk)((0,u.zw)(e.user.following),1)])),_:1}),(0,r.Uk)(" 关注 "),(0,r.Wm)(d,{type:"success"},{default:(0,r.w5)((()=>[(0,r.Uk)((0,u.zw)(e.user.follower),1)])),_:1}),(0,r.Uk)(" 主题 "),(0,r.Wm)(d,{type:"warning"},{default:(0,r.w5)((()=>[(0,r.Uk)((0,u.zw)(e.user.threads),1)])),_:1}),(0,r.Uk)(" 帖子 "),(0,r.Wm)(d,{type:"danger"},{default:(0,r.w5)((()=>[(0,r.Uk)((0,u.zw)(e.user.posts),1)])),_:1}),(0,r.Uk)(" 喜欢 "),(0,r.Wm)(d,{type:"info"},{default:(0,r.w5)((()=>[(0,r.Uk)((0,u.zw)(e.user.likes),1)])),_:1})])),action:(0,r.w5)((()=>[(0,r.WI)(t.$slots,"action",{user:e.user})])),_:3},8,["user","avatar-key"])])),_:3},8,["to"])}}};function f(e){e.__source="src/components/UserRow/follower.vue"}"function"===typeof f&&f(d);const m=d;var p=m},32977:function(e,t,s){s.r(t),s.d(t,{default:function(){return y}});var a=s(61046),r=(s(3241),s(19414),s(66252));const i={class:"list-item"},u={class:"list-item-meta"},n={key:0,class:"list-item-meta-avatar"},o={class:"list-item-meta-content"},l={class:"list-item-meta-title"},c={class:"list-item-meta-description"},d={class:"list-item-meta-bottom"},f={class:"list-item-meta-operate"};var m={__name:"index",props:{user:{type:Object,default:()=>{}},avatarKey:{type:String,default:""}},setup(e){return(t,s)=>{const m=a.F8;return(0,r.wg)(),(0,r.iD)("div",i,[(0,r._)("div",u,[e.avatarKey?((0,r.wg)(),(0,r.iD)("div",n,[(0,r.Wm)(m,{src:e.user[e.avatarKey],class:"el-avatar el-avatar--big el-avatar--circle"},null,8,["src"])])):(0,r.kq)("",!0),(0,r._)("div",o,[(0,r._)("div",l,[(0,r.WI)(t.$slots,"title")]),(0,r._)("div",c,[(0,r.WI)(t.$slots,"description")]),(0,r._)("div",d,[(0,r.WI)(t.$slots,"bottom")])]),(0,r._)("div",f,[(0,r.WI)(t.$slots,"action")])])])}}};function p(e){e.__source="src/components/UserRow/index.vue"}var w=s(83744);"function"===typeof p&&p(m);const v=(0,w.Z)(m,[["__scopeId","data-v-4159f3f2"]]);var y=v}}]);