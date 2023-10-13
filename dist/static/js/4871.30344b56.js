/*!
 *  build: Vue  Admin Plus
 *  copyright: vue-admin-beautiful.com
 *  time: 2023-10-12 09:18:53
 */
"use strict";(self["webpackChunkadmin_plus"]=self["webpackChunkadmin_plus"]||[]).push([[4871,6632],{17052:function(e,t,a){a.d(t,{D8:function(){return s},Gc:function(){return c},TD:function(){return l},Vj:function(){return o},eK:function(){return n}});a(57658);function l(e,t){if(0===arguments.length)return null;const a=t||"{y}-{m}-{d} {h}:{i}:{s}";let l;"object"===typeof e?l=e:("string"===typeof e&&/^[0-9]+$/.test(e)&&(e=parseInt(e)),"number"===typeof e&&10===e.toString().length&&(e*=1e3),l=new Date(e));const o={y:l.getFullYear(),m:l.getMonth()+1,d:l.getDate(),h:l.getHours(),i:l.getMinutes(),s:l.getSeconds(),a:l.getDay()};return a.replace(/{([ymdhisa])+}/g,((e,t)=>{let a=o[t];return"a"===t?["日","一","二","三","四","五","六"][a]:(e.length>0&&a<10&&(a=`0${a}`),a||0)}))}function o(e=32){const t="abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890";let a="";for(let l=0;l<e;l++)a+=t.charAt(Math.floor(Math.random()*t.length));return a}function n(e){const t=e.match(/src="(.+?)"/);return t?t[1]:e}function c(e,t,a){const l=Math.ceil(a/t);return e>=l}function s(e=0){document.getElementById("app").scrollTo({top:e,left:0,behavior:"smooth"})}},36632:function(e,t,a){a.r(t),a.d(t,{default:function(){return m}});var l=a(10661),o=(a(3241),a(35095),a(14181)),n=(a(33828),a(66252)),c=a(2262),s=a(49963),u={__name:"index",props:{text:{type:String,default:""},tipText:{type:String,default:"拷贝生成信息"}},setup(e){const t=e,a=(0,c.qj)({tooltipText:t.tipText,tooltipStatus:!1});async function u(){try{await navigator.clipboard.writeText(t.text),a.tooltipText="已复制！"}catch(e){a.tooltipText="复制失败"}}function i(){a.tooltipStatus=!0,a.tooltipText=t.tipText,setTimeout((()=>{a.tooltipStatus=!1}),200)}return(e,t)=>{const d=(0,n.up)("DocumentCopy"),m=o.gn,r=l.Q0;return(0,n.wg)(),(0,n.j4)(r,{class:"box-item",effect:"dark",content:(0,c.SU)(a).tooltipText,disabled:(0,c.SU)(a).tooltipStatus,placement:"top"},{default:(0,n.w5)((()=>[(0,n.Wm)(m,{style:{color:"var(--el-color-success)"},class:"cursor-pointer",onClick:(0,s.iM)(u,["stop"]),onMouseleave:(0,s.iM)(i,["stop"])},{default:(0,n.w5)((()=>[(0,n.Wm)(d)])),_:1},8,["onClick","onMouseleave"])])),_:1},8,["content","disabled"])}}};function i(e){e.__source="src/components/ClipboardTips/index.vue"}"function"===typeof i&&i(u);const d=u;var m=d},14871:function(e,t,a){a.r(t),a.d(t,{default:function(){return Z}});var l=a(32018),o=(a(3241),a(46160),a(73632)),n=(a(74965),a(22040)),c=(a(99426),a(16273)),s=a(61046),u=(a(19414),a(63715)),i=(a(5508),a(83396)),d=(a(48157),a(74741),a(91194)),m=(a(2993),a(15659)),r=(a(79987),a(10444),a(14181)),f=(a(33828),a(10661)),p=(a(35095),a(85381)),g=(a(68538),a(32590),a(66252)),w=a(2262),_=a(3577),k=a(49963),W=a(36632),h=a(49822),v=a(40645),y=a(91222),b=a(95244),x=a(17052),C=a(33729),D=a.n(C),U=a(47720);const q=e=>((0,g.dD)("data-v-c5c5af06"),e=e(),(0,g.Cn)(),e),S={class:"taskqueue-container"},T={key:0},V={style:{"margin-left":"8px"}},M={class:"taskqueue-card-body"},j={class:"taskqueue-tag-group"},I={class:"taskqueue-folow"},z={class:"taskqueue-image-group"},E={class:"taskqueue-image"},F={key:1},P=q((()=>(0,g._)("i",{style:{"margin-left":"8px"}},"任务进行中",-1))),H={class:"taskqueue-card-body"},K={class:"taskqueue-image-group"},Q={class:"taskqueue-image",justify:"center"},R={class:"percentage-value"},$=q((()=>(0,g._)("span",{class:"percentage-label"},"Progressing",-1)));var B={__name:"taskqueue",setup(e){const t=(0,g.f3)("$baseConfirm"),a=(0,g.f3)("$baseMessage"),C=(0,v.s)(),q=(0,y.m)(),{getTasks:B,getTasksCheckedImages:Y}=(0,U.Jk)(C),{setFormType:O,setUploadImage:X,hdSetUploadImage:Z,adSetUploadImage:A}=q,G=(0,w.qj)({accordion:!0,shareFormRef:null}),{accordion:J,shareFormRef:L}=(0,w.BK)(G),N=e=>{const t=e?["1"]:[];B.value.map((e=>e.collapse=t))};async function ee(e){t("你确定要删除当前任务吗",null,(async()=>{const{msg:t}=await(0,b._5)(e.ms_id);a(t,"success","vab-hey-message-success"),C.load()}))}async function te(e){e.replace(/(.*\/)*([^.]+\.\w+).*/gi,"$2");D()(e)}function ae(){Y.value.forEach((e=>{te(e.bigimg)})),C.resetImagesCheck()}function le(e){X([{...e}]),O("basic"),(0,x.D8)()}function oe(e){Z(e),O("hdrepaire"),(0,x.D8)()}function ne(e){A(e),O("adetailer"),(0,x.D8)()}async function ce(){const e=Y.value.map((e=>e.bigimg));L.value.showDialog(e)}async function se(e){L.value.showDialog([e])}return(0,g.bv)((()=>{C.load()})),(e,t)=>{const a=d.QQ,v=p.OX,y=f.Q0,b=(0,g.up)("Download"),x=r.gn,C=m.ElButton,D=(0,g.up)("Share"),U=m.MO,q=d.Lf,O=(0,g.up)("Delete"),X=i.aE,Z=i.PH,A=(0,g.up)("PictureRounded"),G=(0,g.up)("Picture"),ue=(0,g.up)("Edit"),ie=(0,g.up)("EditPen"),de=u.ElCheckbox,me=s.F8,re=c.Z,fe=n.Dv,pe=o.dq,ge=l.Xh;return(0,g.wg)(),(0,g.iD)("div",S,[(0,g.Wm)(q,{class:"margin-top",column:2},{default:(0,g.w5)((()=>[(0,g.Wm)(a,{label:"任务队列"}),(0,g.Wm)(a,{label:"","label-align":"right",align:"right"},{default:(0,g.w5)((()=>[(0,g.Wm)(y,{class:"box-item",effect:"dark",content:"折叠图片生成信息",placement:"top"},{default:(0,g.w5)((()=>[(0,g.Wm)(v,{modelValue:(0,w.SU)(J),"onUpdate:modelValue":t[0]||(t[0]=e=>(0,w.dq)(J)?J.value=e:null),"inline-prompt":"",style:{"--el-switch-on-color":"var(--el-color-primary)","--el-switch-off-color":"var(--el-color-grey)"},"active-text":"显示","inactive-text":"隐藏",onChange:N},null,8,["modelValue"])])),_:1}),(0,w.SU)(Y).length>0?((0,g.wg)(),(0,g.j4)(U,{key:0,class:"ml-4"},{default:(0,g.w5)((()=>[(0,g.Wm)(y,{class:"box-item",effect:"dark",content:"在任务列表中选择图片后点击此按钮可批量下载",placement:"top"},{default:(0,g.w5)((()=>[(0,g.Wm)(C,{type:"default",text:"",onClick:ae},{default:(0,g.w5)((()=>[(0,g.Wm)(x,null,{default:(0,g.w5)((()=>[(0,g.Wm)(b)])),_:1}),(0,g.Uk)(" 下载 ")])),_:1})])),_:1}),(0,g.Wm)(y,{class:"box-item",effect:"dark",content:"在任务列表中选择图片后点击此按钮可把选择的图片发帖，分享出去",placement:"top"},{default:(0,g.w5)((()=>[(0,g.Wm)(C,{text:"",onClick:ce},{default:(0,g.w5)((()=>[(0,g.Wm)(x,null,{default:(0,g.w5)((()=>[(0,g.Wm)(D)])),_:1}),(0,g.Uk)(" 分享 ")])),_:1})])),_:1})])),_:1})):(0,g.kq)("",!0)])),_:1})])),_:1}),((0,g.wg)(!0),(0,g.iD)(g.HY,null,(0,g.Ko)((0,w.SU)(B),(e=>((0,g.wg)(),(0,g.iD)("div",{key:e.ms_id},[e.ms_state>=100?((0,g.wg)(),(0,g.iD)("div",T,[(0,g.Wm)(Z,{modelValue:e.collapse,"onUpdate:modelValue":t=>e.collapse=t},{default:(0,g.w5)((()=>[(0,g.Wm)(X,{name:"1"},{title:(0,g.w5)((()=>[(0,g.Uk)((0,_.zw)(e.created_at)+" ",1),(0,g._)("i",V,(0,_.zw)(e.expired_at),1),(0,g.Wm)((0,w.SU)(W["default"]),{text:e.log},null,8,["text"]),(0,g.Wm)(y,{class:"box-item",effect:"dark",content:"删除任务",placement:"top"},{default:(0,g.w5)((()=>[(0,g.Wm)(x,{style:{color:"var(--el-color-danger)"},onClick:(0,k.iM)((t=>ee(e)),["stop"])},{default:(0,g.w5)((()=>[(0,g.Wm)(O)])),_:2},1032,["onClick"])])),_:2},1024)])),default:(0,g.w5)((()=>[(0,g._)("div",null,(0,_.zw)(e.log),1)])),_:2},1024)])),_:2},1032,["modelValue","onUpdate:modelValue"]),(0,g.Wm)(pe,{gutter:16,span:"24",justify:"start"},{default:(0,g.w5)((()=>[((0,g.wg)(!0),(0,g.iD)(g.HY,null,(0,g.Ko)(e.imagelist,(t=>((0,g.wg)(),(0,g.j4)(fe,{key:t.picid,xs:24,sm:12,md:6,lg:6,xl:4},{default:(0,g.w5)((()=>[(0,g.Wm)(re,{"body-style":{padding:"0px"},shadow:"hover"},{default:(0,g.w5)((()=>[(0,g._)("div",M,[(0,g._)("div",{class:(0,_.C_)(["taskqueue-mask",{"taskqueue-checked":t.checked}])},[(0,g._)("div",j,[(0,g.Wm)(q,{style:{width:"100%"}},{default:(0,g.w5)((()=>[(0,g.Wm)(a,null,{default:(0,g.w5)((()=>[(0,g.Wm)(y,{class:"box-item",effect:"dark",content:"重绘",placement:"top"},{default:(0,g.w5)((()=>[(0,g.Wm)(x,null,{default:(0,g.w5)((()=>[(0,g.Wm)(A)])),_:1})])),_:1}),(0,g.Wm)(y,{class:"box-item",effect:"dark",content:"图生图",placement:"top"},{default:(0,g.w5)((()=>[(0,g.Wm)(x,{onClick:e=>le(t)},{default:(0,g.w5)((()=>[(0,g.Wm)(G)])),_:2},1032,["onClick"])])),_:2},1024),(0,g.Wm)(y,{class:"box-item",effect:"dark",content:"高清修复",placement:"top"},{default:(0,g.w5)((()=>[(0,g.Wm)(x,{onClick:e=>oe(t)},{default:(0,g.w5)((()=>[(0,g.Wm)(ue)])),_:2},1032,["onClick"])])),_:2},1024),(0,g.Wm)(y,{class:"box-item",effect:"dark",content:"脸部修复",placement:"top"},{default:(0,g.w5)((()=>[(0,g.Wm)(x,{onClick:e=>ne(t)},{default:(0,g.w5)((()=>[(0,g.Wm)(ie)])),_:2},1032,["onClick"])])),_:2},1024)])),_:2},1024)])),_:2},1024)]),(0,g._)("div",I,[(0,g.Wm)(q,{style:{width:"100%"}},{default:(0,g.w5)((()=>[(0,g.Wm)(a,null,{default:(0,g.w5)((()=>[(0,g.Wm)(y,{class:"box-item",effect:"dark",content:"删图",placement:"top"},{default:(0,g.w5)((()=>[(0,g.Wm)(x,null,{default:(0,g.w5)((()=>[(0,g.Wm)(O)])),_:1})])),_:1}),(0,g.Wm)(y,{class:"box-item",effect:"dark",content:"分享",placement:"top"},{default:(0,g.w5)((()=>[(0,g.Wm)(x,{onClick:e=>se(t.bigimg)},{default:(0,g.w5)((()=>[(0,g.Wm)(D)])),_:2},1032,["onClick"])])),_:2},1024),(0,g.Wm)(y,{class:"box-item",effect:"dark",content:"下载",placement:"top"},{default:(0,g.w5)((()=>[(0,g.Wm)(x,{onClick:e=>te(t.bigimg)},{default:(0,g.w5)((()=>[(0,g.Wm)(b)])),_:2},1032,["onClick"])])),_:2},1024),(0,g.Wm)(y,{class:"box-item",effect:"dark",content:"选中批量下载和分享",placement:"top"},{default:(0,g.w5)((()=>[(0,g.Wm)(de,{modelValue:t.checked,"onUpdate:modelValue":e=>t.checked=e,label:"",size:"large"},null,8,["modelValue","onUpdate:modelValue"])])),_:2},1024)])),_:2},1024)])),_:2},1024)])],2),(0,g._)("div",z,[(0,g._)("div",E,[(0,g.Wm)(me,{src:t.bigimg,"zoom-rate":1.1,"preview-src-list":e.images,"initial-index":0,"hide-on-click-modal":!0,fit:"contain"},null,8,["src","preview-src-list"])])])])])),_:2},1024)])),_:2},1024)))),128))])),_:2},1024)])):((0,g.wg)(),(0,g.iD)("div",F,[(0,g.Wm)(Z,{modelValue:e.collapse,"onUpdate:modelValue":t=>e.collapse=t},{default:(0,g.w5)((()=>[(0,g.Wm)(X,{name:"1"},{title:(0,g.w5)((()=>[(0,g.Uk)((0,_.zw)(e.created_at)+" ",1),P,(0,g.Wm)(y,{class:"box-item",effect:"dark",content:"删除任务",placement:"top"},{default:(0,g.w5)((()=>[(0,g.Wm)(x,{style:{color:"var(--el-color-danger)"}},{default:(0,g.w5)((()=>[(0,g.Wm)(O)])),_:1})])),_:1})])),_:2},1024)])),_:2},1032,["modelValue","onUpdate:modelValue"]),(0,g.Wm)(pe,{gutter:16},{default:(0,g.w5)((()=>[(0,g.Wm)(fe,{xs:24,sm:12,md:6,lg:6,xl:4},{default:(0,g.w5)((()=>[(0,g.Wm)(re,{"body-style":{padding:"0px"},shadow:"hover"},{default:(0,g.w5)((()=>[(0,g._)("div",H,[(0,g._)("div",K,[(0,g._)("div",Q,[(0,g.Wm)(ge,{type:"dashboard",percentage:e.ms_state},{default:(0,g.w5)((({percentage:e})=>[(0,g._)("span",R,(0,_.zw)(e)+"%",1),$])),_:2},1032,["percentage"])])])])])),_:2},1024)])),_:2},1024)])),_:2},1024)]))])))),128)),(0,g.Wm)((0,w.SU)(h["default"]),{ref_key:"shareFormRef",ref:L},null,512)])}}};function Y(e){e.__source="src/views/stablediffusion/components/taskqueue.vue"}var O=a(83744);"function"===typeof Y&&Y(B);const X=(0,O.Z)(B,[["__scopeId","data-v-c5c5af06"]]);var Z=X}}]);