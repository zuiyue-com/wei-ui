/*!
 *  build: Vue  Admin Plus
 *  copyright: vue-admin-beautiful.com
 *  time: 2023-10-10 18:16:02
 */
"use strict";(self["webpackChunkadmin_plus"]=self["webpackChunkadmin_plus"]||[]).push([[2369],{92369:function(e,l,a){a.r(l),a.d(l,{default:function(){return i}});var u=a(57018),n=(a(3241),a(74367),a(66252)),d=a(2262),t=a(3577),o=a(25498),s={__name:"index",props:{modelValue:{type:[Number,String],default:0},placeholder:{type:String,default:""},min:{type:Number,default:0},max:{type:Number,default:0},disabled:{type:Boolean,default:!1}},emits:["update:modelValue"],setup(e,{emit:l}){const a=e,s=(0,d.iH)(parseInt(a.modelValue));function r(){const e=parseInt(s.value);isNaN(e)?s.value=defaultVal:(s.value<a.min&&(s.value=a.min),s.value>a.max&&(s.value=a.max),l("update:modelValue",s.value))}(0,n.YP)((()=>a.modelValue),(()=>{s.value=parseInt(a.modelValue)}));const p=(0,n.Fl)((()=>""===s.value||(0,o.yH)(s.value)));return(l,a)=>{const o=u.EZ;return(0,n.wg)(),(0,n.j4)(o,{modelValue:(0,d.SU)(s),"onUpdate:modelValue":a[0]||(a[0]=e=>(0,d.dq)(s)?s.value=e:null),modelModifiers:{number:!0},placeholder:e.placeholder,class:(0,t.C_)({"error-value":!(0,d.SU)(p)}),disabled:e.disabled,onChange:r},(0,n.Nv)({_:2},[l.$slots.prepend?{name:"prepend",fn:(0,n.w5)((()=>[(0,n.WI)(l.$slots,"prepend")])),key:"0"}:void 0]),1032,["modelValue","placeholder","class","disabled"])}}};function r(e){e.__source="src/components/InputNumber/index.vue"}var p=a(83744);"function"===typeof r&&r(s);const m=(0,p.Z)(s,[["__scopeId","data-v-2685ef0d"]]);var i=m}}]);