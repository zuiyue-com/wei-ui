/*!
 *  build: Vue  Admin Plus
 *  copyright: vue-admin-beautiful.com
 *  time: 2023-10-16 10:23:30
 */
"use strict";(self["webpackChunkadmin_plus"]=self["webpackChunkadmin_plus"]||[]).push([[2618],{92618:function(a,t,e){e.r(t),e.d(t,{default:function(){return y}});var i=e(15659),u=(e(3241),e(10444),e(57658),e(66252)),s=e(2262),l=e(19635),n=e(91536),c=e(22201),p=e(47720);const r={class:"tabs-container"};var o={__name:"index",setup(a){const t=(0,c.yj)(),e=(0,c.tv)(),o=(0,n.I)(),{getVisitedRoutes:w}=(0,p.Jk)(o),{delVisitedRoute:d,delOthersVisitedRoutes:y,delLeftVisitedRoutes:v,delRightVisitedRoutes:h,delAllVisitedRoutes:f}=o,k=(0,s.iH)(null),m=async a=>{V(a)&&await U(),await d(a)},_=async()=>{k.value?(await e.push(k.value),await y(k.value.path)):await y((0,l.HX)(t,!0))},C=async()=>{k.value?(await e.push(k.value),await v(k.value.path)):await v((0,l.HX)(t,!0))},R=async()=>{k.value?(await e.push(k.value),await h(k.value.path)):await h((0,l.HX)(t,!0))},H=async()=>{await f(),await U()},U=async()=>{const a=w.value.filter((a=>a.path!==(0,l.HX)(t,!0))).slice(-1)[0];a?await e.push(a):await e.push("/")},V=a=>a===(0,l.HX)(t,!0);return(a,e)=>{const l=i.ElButton;return(0,u.wg)(),(0,u.iD)("div",r,[(0,u.Wm)(l,{type:"primary",onClick:_},{default:(0,u.w5)((()=>[(0,u.Uk)("关闭其他")])),_:1}),(0,u.Wm)(l,{type:"primary",onClick:C},{default:(0,u.w5)((()=>[(0,u.Uk)("关闭左侧")])),_:1}),(0,u.Wm)(l,{type:"primary",onClick:R},{default:(0,u.w5)((()=>[(0,u.Uk)("关闭右侧")])),_:1}),(0,u.Wm)(l,{type:"primary",onClick:H},{default:(0,u.w5)((()=>[(0,u.Uk)("关闭全部")])),_:1}),(0,u.Wm)(l,{type:"primary",onClick:e[0]||(e[0]=a=>m((0,s.SU)(t).path))},{default:(0,u.w5)((()=>[(0,u.Uk)(" 关闭当前 ")])),_:1})])}}};function w(a){a.__source="src/views/other/tabs/index.vue"}"function"===typeof w&&w(o);const d=o;var y=d}}]);