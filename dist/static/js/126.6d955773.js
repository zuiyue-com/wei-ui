/*!
 *  build: Vue  Admin Plus
 *  copyright: vue-admin-beautiful.com
 *  time: 2023-10-16 10:23:30
 */
"use strict";(self["webpackChunkadmin_plus"]=self["webpackChunkadmin_plus"]||[]).push([[126],{90126:function(e,t,a){a.r(t),a.d(t,{default:function(){return p}});var o=a(20129),l=(a(3241),a(69840),a(15659)),n=(a(10444),a(6589),a(57018)),m=(a(74367),a(66252));function r(e,t,a,r,u,d){const s=n.EZ,i=o.nH,p=l.ElButton,f=o.ly;return(0,m.wg)(),(0,m.iD)("div",null,[(0,m.Wm)(f,{"label-width":"80px",model:e.formData},{default:(0,m.w5)((()=>[(0,m.Wm)(i,{label:"名称"},{default:(0,m.w5)((()=>[(0,m.Wm)(s,{modelValue:e.formData.name,"onUpdate:modelValue":t[0]||(t[0]=t=>e.formData.name=t)},null,8,["modelValue"])])),_:1}),(0,m.Wm)(i,{label:"活动区域"},{default:(0,m.w5)((()=>[(0,m.Wm)(s,{modelValue:e.formData.region,"onUpdate:modelValue":t[1]||(t[1]=t=>e.formData.region=t)},null,8,["modelValue"])])),_:1}),(0,m.Wm)(i,{label:"活动形式"},{default:(0,m.w5)((()=>[(0,m.Wm)(s,{modelValue:e.formData.type,"onUpdate:modelValue":t[2]||(t[2]=t=>e.formData.type=t)},null,8,["modelValue"])])),_:1}),(0,m.Wm)(i,null,{default:(0,m.w5)((()=>[(0,m.Wm)(p,{type:"primary",onClick:e.onSubmit},{default:(0,m.w5)((()=>[(0,m.Uk)("保存")])),_:1},8,["onClick"])])),_:1})])),_:1},8,["model"])])}var u=(0,m.aZ)({props:{nodeData:{type:Object,default:()=>{}},lf:{type:Object||String,default:()=>{}}},emits:["onClose"],data(){return{formData:{name:"",region:"",type:""}}},mounted(){const{properties:e}=this.$props.nodeData;e&&(this.$data.formData=Object.assign({},this.$data.formData,e))},methods:{onSubmit(){console.log("submit!");const{id:e}=this.$props.nodeData;this.$props.lf.setProperties(e,this.$data.formData),this.$emit("onClose")}}});function d(e){e.__source="src/views/other/workflow/components/propertySetting/CommonProperty.vue"}var s=a(83744);"function"===typeof d&&d(u);const i=(0,s.Z)(u,[["render",r]]);var p=i}}]);