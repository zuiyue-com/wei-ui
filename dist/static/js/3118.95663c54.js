/*!
 *  build: Vue  Admin Plus
 *  copyright: vue-admin-beautiful.com
 *  time: 2023-10-16 10:23:30
 */
"use strict";(self["webpackChunkadmin_plus"]=self["webpackChunkadmin_plus"]||[]).push([[3118],{27810:function(e,t,l){l.d(t,{g:function(){return s}});var a=l(52806);function s(){return(0,a.Z)({url:"https://fc-mp-851edf02-46eb-43e6-828d-64c7e483ea41.next.bspapp.com/http/getDescription",method:"get"})}},33118:function(e,t,l){l.r(t),l.d(t,{default:function(){return _}});var a=l(73632),s=(l(3241),l(74965),l(22040)),n=(l(99426),l(20129)),u=(l(69840),l(15659)),i=(l(10444),l(14132)),d=(l(50986),l(61715),l(6589),l(57018)),o=(l(74367),l(66252)),c=l(2262),p=l(3577),r=l(27810),m=l(26593);const w={class:"speech-synthesis-container"},h={key:0},v=(0,o._)("a",{href:"https://caniuse.com/mdn-api_speechsynthesis",target:"_blank"}," more details ",-1),f={key:1};var y=(0,o.aZ)({__name:"SpeechSynthesis",setup(e){const t=(0,c.iH)(void 0),l=(0,c.iH)(""),y=(0,m.h58)(l,{voice:t}),S=async()=>{const{data:{description:e}}=await(0,r.g)();l.value=e};let b;const _=(0,c.iH)([]);(0,o.bv)((()=>{y.isSupported.value&&(setTimeout((()=>{b=window.speechSynthesis,_.value=b.getVoices(),t.value=_.value[0]}),100),S())}));const g=()=>{"pause"===y.status.value?window.speechSynthesis.resume():y.speak()},k=()=>{window.speechSynthesis.pause()},U=()=>{window.speechSynthesis.cancel()};return(e,r)=>{const m=d.EZ,S=n.nH,b=i.BT,W=i.ElSelect,V=u.ElButton,D=n.ly,x=s.Dv,C=a.dq;return(0,o.wg)(),(0,o.iD)("div",w,[(0,c.SU)(y).isSupported?((0,o.wg)(),(0,o.iD)("div",f,[(0,o.Wm)(C,{gutter:20},{default:(0,o.w5)((()=>[(0,o.Wm)(x,{lg:6,md:14,sm:24,xl:10,xs:24},{default:(0,o.w5)((()=>[(0,o.Wm)(D,{"label-position":"top"},{default:(0,o.w5)((()=>[(0,o.Wm)(S,{label:"文本"},{default:(0,o.w5)((()=>[(0,o.Wm)(m,{modelValue:(0,c.SU)(l),"onUpdate:modelValue":r[0]||(r[0]=e=>(0,c.dq)(l)?l.value=e:null),rows:"12",type:"textarea"},null,8,["modelValue"])])),_:1}),(0,o.Wm)(S,{label:"语言"},{default:(0,o.w5)((()=>[(0,o.Wm)(W,{modelValue:(0,c.SU)(t),"onUpdate:modelValue":r[1]||(r[1]=e=>(0,c.dq)(t)?t.value=e:null),style:{width:"400px"}},{default:(0,o.w5)((()=>[((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)((0,c.SU)(_),(e=>((0,o.wg)(),(0,o.j4)(b,{key:e.name,label:e.name,value:e},null,8,["label","value"])))),128))])),_:1},8,["modelValue"])])),_:1}),(0,o.Wm)(S,{label:"操作"},{default:(0,o.w5)((()=>[(0,o.Wm)(V,{disabled:(0,c.SU)(y).isPlaying.value,type:"primary",onClick:g},{default:(0,o.w5)((()=>[(0,o.Uk)((0,p.zw)("pause"===(0,c.SU)(y).status.value?"继续":"播放"),1)])),_:1},8,["disabled"]),(0,o.Wm)(V,{disabled:!(0,c.SU)(y).isPlaying.value,type:"warning",onClick:k},{default:(0,o.w5)((()=>[(0,o.Uk)(" 暂停 ")])),_:1},8,["disabled"]),(0,o.Wm)(V,{disabled:!(0,c.SU)(y).isPlaying.value,type:"danger",onClick:U},{default:(0,o.w5)((()=>[(0,o.Uk)(" 结束 ")])),_:1},8,["disabled"])])),_:1})])),_:1})])),_:1})])),_:1})])):((0,o.wg)(),(0,o.iD)("div",h,[(0,o.Uk)(" Your browser does not support SpeechSynthesis API, "),v]))])}}});function S(e){e.__source="src/views/tools/SpeechSynthesis.vue"}"function"===typeof S&&S(y);const b=y;var _=b}}]);