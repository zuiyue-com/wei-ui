/*!
 *  build: Vue  Admin Plus
 *  copyright: vue-admin-beautiful.com
 *  time: 2023-10-19 19:31:27
 */
"use strict";(self["webpackChunkadmin_plus"]=self["webpackChunkadmin_plus"]||[]).push([[4514],{14514:function(e,n,i){i.r(n),i.d(n,{default:function(){return g}});var r=i(77669),c=(i(3241),i(95774),i(2262)),t=i(66252),o=i(3577),a=i(19635),s=i(12688);const d={key:0,class:"box"},u=["src"],l={key:1};var f={__name:"weixin_qrcode",props:{redirect:{type:String,default:""},action:{type:String,default:"login"}},emits:["weixin"],setup(e,{emit:n}){const i=e,f=(0,c.qj)({qrcodeUrl:"",wxnickname:"",headimgurl:""}),{qrcodeUrl:m,wxnickname:p,headimgurl:w}=(0,c.BK)(f);async function g(){const{body:{qrcode:e}}=await(0,s.pH)((0,a.a9)(`${i.redirect}`));f.qrcodeUrl=e}async function _(){const{body:{qrcode:e,wxnickname:r,headimgurl:c}}=await(0,s.PE)((0,a.a9)(`${i.redirect}`));e?f.qrcodeUrl=e:n("weixin",r,c)}return(0,t.bv)((()=>{"login"==i.action?g():_()})),(e,n)=>{const i=r.vs;return(0,c.SU)(m)?((0,t.wg)(),(0,t.iD)("div",d,[(0,t._)("iframe",{src:(0,c.SU)(m),frameborder:"0",height:"300",width:"300"},null,8,u)])):((0,t.wg)(),(0,t.iD)("div",l,[(0,t.Wm)(i,{size:50,src:(0,c.SU)(w)},null,8,["src"]),(0,t._)("span",null,(0,o.zw)((0,c.SU)(p)),1)]))}}};function m(e){e.__source="src/components/LoginDialog/weixin_qrcode.vue"}var p=i(83744);"function"===typeof m&&m(f);const w=(0,p.Z)(f,[["__scopeId","data-v-999ecf02"]]);var g=w}}]);