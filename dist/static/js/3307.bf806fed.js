/*!
 *  build: Vue  Admin Plus
 *  copyright: vue-admin-beautiful.com
 *  time: 2023-09-28 17:16:01
 */
"use strict";(self["webpackChunkadmin_plus"]=self["webpackChunkadmin_plus"]||[]).push([[3307],{26968:function(e,a,l){l.r(a),l.d(a,{default:function(){return c}});var u=l(57018),n=(l(3241),l(74367),l(66252)),t=l(2262),d=l(3577),s=l(25498),o={__name:"index",props:{value:{type:[Number,String],default:0},placeholder:{type:String,default:""},min:{type:Number,default:0},max:{type:Number,default:0},disabled:{type:Boolean,default:!1}},emits:["update:value"],setup(e,{emit:a}){const l=e;(0,n.YP)((()=>l.value),(()=>{r.value=l.value}));const o=l.value,r=(0,t.iH)(parseInt(o));function p(){const e=parseInt(r.value);isNaN(e)?r.value=o:(r.value<l.min&&(r.value=l.min),r.value>l.max&&(r.value=l.max),a("update:value",r.value))}const i=(0,n.Fl)((()=>""===r.value||(0,s.yH)(r.value)));return(a,l)=>{const s=u.EZ;return(0,n.wg)(),(0,n.j4)(s,{modelValue:(0,t.SU)(r),"onUpdate:modelValue":l[0]||(l[0]=e=>(0,t.dq)(r)?r.value=e:null),modelModifiers:{number:!0},placeholder:e.placeholder,class:(0,d.C_)({"error-value":!(0,t.SU)(i)}),disabled:e.disabled,onChange:p},(0,n.Nv)({_:2},[a.$slots.prepend?{name:"prepend",fn:(0,n.w5)((()=>[(0,n.WI)(a.$slots,"prepend")])),key:"0"}:void 0]),1032,["modelValue","placeholder","class","disabled"])}}};function r(e){e.__source="src/components/InputNumber/index.vue"}var p=l(83744);"function"===typeof r&&r(o);const i=(0,p.Z)(o,[["__scopeId","data-v-c7154110"]]);var c=i}}]);