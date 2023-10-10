/*!
 *  build: Vue  Admin Plus
 *  copyright: vue-admin-beautiful.com
 *  time: 2023-10-10 18:16:02
 */
"use strict";(self["webpackChunkadmin_plus"]=self["webpackChunkadmin_plus"]||[]).push([[9791,3800],{15592:function(a,e,n){function t(a){return new Promise(((e,n)=>{const t=new FileReader;t.readAsDataURL(a),t.onload=function(){if(2==t.readyState){const a=new Image;a.src=t.result,a.onload=function(){const a={width:this.width,height:this.height,src:this.src};e(a)}}else n()}}))}function o(a){return a.replace(/data:.+?;base64,/,"")}n.d(e,{I:function(){return t},x:function(){return o}})},69791:function(a,e,n){n.r(e),n.d(e,{default:function(){return h}});var t=n(79329),o=(n(3241),n(68984),n(77669)),s=(n(95774),n(66252)),i=n(2262),l=n(63800),r=n(30582),c=n(15592),u=n(47720);const d={class:"avatar-wrap"},f={class:"avatar-box"},p={class:"mask-box"};var v={__name:"index",setup(a){const e=(0,r.L)(),{getAvatar:n}=(0,u.Jk)(e),{getUserInfo:v}=e,g=(0,i.iH)(null),m=(0,i.iH)(null);async function w(a){const{src:e}=await(0,c.I)(a.raw);g.value.showDialog(e),m.value.clearFiles()}return(a,e)=>{const r=o.vs,c=t.LW;return(0,s.wg)(),(0,s.iD)("div",d,[(0,s._)("div",f,[(0,s.Wm)(r,{size:100,src:(0,i.SU)(n)},null,8,["src"]),(0,s._)("div",p,[(0,s.Wm)(c,{ref_key:"uploadRef",ref:m,accept:"image/png, image/jpeg",class:"upload",drag:"",limit:1,"on-change":w,"show-file-list":!1,"auto-upload":!1},null,512)])]),(0,s.Wm)((0,i.SU)(l["default"]),{ref_key:"cropperDialogRef",ref:g,onDone:(0,i.SU)(v)},null,8,["onDone"])])}}};function g(a){a.__source="src/components/AvatarUpload/index.vue"}var m=n(83744);"function"===typeof g&&g(v);const w=(0,m.Z)(v,[["__scopeId","data-v-880721aa"]]);var h=w},63800:function(a,e,n){n.r(e),n.d(e,{default:function(){return h}});var t=n(73481),o=(n(3241),n(62029),n(15659)),s=(n(10444),n(66252)),i=n(2262),l=n(12688),r=n(15592),c=n(91790),u=n(61785),d=n.n(u);const f={class:"dialog"},p={class:"wrap"},v={class:"dialog-footer"};var g={__name:"index",emits:["done"],setup(a,{expose:e,emit:n}){const u=(0,i.iH)(null),g=(0,i.iH)(!1),m=(0,i.iH)(!1),w=(0,i.iH)("");function h(a){w.value=a,g.value=!0}async function _(){m.value=!0;const{canvas:a}=u.value.getResult(),e=a.toDataURL(),n=await d()(a.toDataURL(),120,120),t=await d()(a.toDataURL(),48,48);U(e,n,t)}async function U(a,e,t){const o={avatar1:(0,r.x)(a),avatar2:(0,r.x)(e),avatar3:(0,r.x)(t)};try{await(0,l.gg)(o),g.value=!1,n("done")}catch(s){console.log(s)}m.value=!1}return e({showDialog:h}),(a,e)=>{const n=o.ElButton,l=t.d0;return(0,s.wg)(),(0,s.iD)("div",f,[(0,s.Wm)(l,{modelValue:(0,i.SU)(g),"onUpdate:modelValue":e[1]||(e[1]=a=>(0,i.dq)(g)?g.value=a:null),title:"上传头像","show-close":!1,draggable:"",width:"420"},{footer:(0,s.w5)((()=>[(0,s._)("span",v,[(0,s.Wm)(n,{onClick:e[0]||(e[0]=a=>g.value=!1)},{default:(0,s.w5)((()=>[(0,s.Uk)("取消")])),_:1}),(0,s.Wm)(n,{type:"primary",loading:(0,i.SU)(m),onClick:_},{default:(0,s.w5)((()=>[(0,s.Uk)(" 下一步 ")])),_:1},8,["loading"])])])),default:(0,s.w5)((()=>[(0,s._)("div",p,[(0,s.Wm)((0,i.SU)(c.fl),{ref_key:"cropperRef",ref:u,src:(0,i.SU)(w),"stencil-props":{aspectRatio:1},"image-restriction":"stencil",canvas:{width:200,height:200}},null,8,["src"])])])),_:1},8,["modelValue"])])}}};function m(a){a.__source="src/components/CropperDialog/index.vue"}"function"===typeof m&&m(g);const w=g;var h=w}}]);