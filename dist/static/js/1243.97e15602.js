/*!
 *  build: Vue  Admin Plus
 *  copyright: vue-admin-beautiful.com
 *  time: 2023-09-28 17:16:01
 */
"use strict";(self["webpackChunkadmin_plus"]=self["webpackChunkadmin_plus"]||[]).push([[1243],{31243:function(e,l,a){a.r(l),a.d(l,{default:function(){return h}});var o=a(20129),t=(a(3241),a(69840),a(15659)),m=(a(10444),a(87692)),d=(a(45393),a(81691),a(63715)),u=(a(76252),a(5508),a(85381)),r=(a(68538),a(85492)),n=(a(98285),a(22040)),f=(a(99426),a(39644)),s=(a(59739),a(14132)),p=(a(50986),a(61715),a(6589),a(57018)),i=(a(74367),a(66252));function c(e,l,a,c,W,b){const w=p.EZ,V=o.nH,h=s.BT,y=s.ElSelect,_=f.iJ,v=n.Dv,U=r.ah,g=u.OX,k=d.ElCheckbox,C=d.z5,$=m.rh,D=m.KD,S=t.ElButton,j=o.ly;return(0,i.wg)(),(0,i.iD)("div",null,[(0,i.Wm)(j,{ref:"form","label-width":"80px",model:e.form},{default:(0,i.w5)((()=>[(0,i.Wm)(V,{label:"活动名称"},{default:(0,i.w5)((()=>[(0,i.Wm)(w,{modelValue:e.form.name,"onUpdate:modelValue":l[0]||(l[0]=l=>e.form.name=l)},null,8,["modelValue"])])),_:1}),(0,i.Wm)(V,{label:"活动区域"},{default:(0,i.w5)((()=>[(0,i.Wm)(y,{modelValue:e.form.region,"onUpdate:modelValue":l[1]||(l[1]=l=>e.form.region=l),placeholder:"请选择活动区域"},{default:(0,i.w5)((()=>[(0,i.Wm)(h,{label:"区域一",value:"shanghai"}),(0,i.Wm)(h,{label:"区域二",value:"beijing"})])),_:1},8,["modelValue"])])),_:1}),(0,i.Wm)(V,{label:"活动时间"},{default:(0,i.w5)((()=>[(0,i.Wm)(v,{span:11},{default:(0,i.w5)((()=>[(0,i.Wm)(_,{modelValue:e.form.date1,"onUpdate:modelValue":l[2]||(l[2]=l=>e.form.date1=l),placeholder:"选择日期",style:{width:"100%"},type:"date"},null,8,["modelValue"])])),_:1}),(0,i.Wm)(v,{class:"line",span:2},{default:(0,i.w5)((()=>[(0,i.Uk)("-")])),_:1}),(0,i.Wm)(v,{span:11},{default:(0,i.w5)((()=>[(0,i.Wm)(U,{modelValue:e.form.date2,"onUpdate:modelValue":l[3]||(l[3]=l=>e.form.date2=l),placeholder:"选择时间",style:{width:"100%"}},null,8,["modelValue"])])),_:1})])),_:1}),(0,i.Wm)(V,{label:"即时配送"},{default:(0,i.w5)((()=>[(0,i.Wm)(g,{modelValue:e.form.delivery,"onUpdate:modelValue":l[4]||(l[4]=l=>e.form.delivery=l)},null,8,["modelValue"])])),_:1}),(0,i.Wm)(V,{label:"活动性质"},{default:(0,i.w5)((()=>[(0,i.Wm)(C,{modelValue:e.form.type,"onUpdate:modelValue":l[5]||(l[5]=l=>e.form.type=l)},{default:(0,i.w5)((()=>[(0,i.Wm)(k,{label:"美食/餐厅线上活动",name:"type"}),(0,i.Wm)(k,{label:"地推活动",name:"type"}),(0,i.Wm)(k,{label:"线下主题活动",name:"type"}),(0,i.Wm)(k,{label:"单纯品牌曝光",name:"type"})])),_:1},8,["modelValue"])])),_:1}),(0,i.Wm)(V,{label:"特殊资源"},{default:(0,i.w5)((()=>[(0,i.Wm)(D,{modelValue:e.form.resource,"onUpdate:modelValue":l[6]||(l[6]=l=>e.form.resource=l)},{default:(0,i.w5)((()=>[(0,i.Wm)($,{label:"线上品牌商赞助"}),(0,i.Wm)($,{label:"线下场地免费"})])),_:1},8,["modelValue"])])),_:1}),(0,i.Wm)(V,{label:"活动形式"},{default:(0,i.w5)((()=>[(0,i.Wm)(w,{modelValue:e.form.desc,"onUpdate:modelValue":l[7]||(l[7]=l=>e.form.desc=l),type:"textarea"},null,8,["modelValue"])])),_:1}),(0,i.Wm)(V,null,{default:(0,i.w5)((()=>[(0,i.Wm)(S,{type:"primary",onClick:e.onSubmit},{default:(0,i.w5)((()=>[(0,i.Uk)("保存")])),_:1},8,["onClick"])])),_:1})])),_:1},8,["model"])])}var W=(0,i.aZ)({props:{nodeData:{type:Object,default:()=>{}},lf:{type:Object||String,default:()=>{}}},emits:["onClose"],data(){return{form:{name:"",region:"",date1:"",date2:"",delivery:!1,type:[],resource:"",desc:""}}},mounted(){const{properties:e}=this.$props.nodeData;e&&(this.$data.form=Object.assign({},this.$data.form,e))},methods:{onSubmit(){console.log("submit!");const{id:e}=this.$props.nodeData;this.$props.lf.setProperties(e,this.$data.form),this.$emit("onClose")}}});function b(e){e.__source="src/views/other/workflow/components/propertySetting/User.vue"}var w=a(83744);"function"===typeof b&&b(W);const V=(0,w.Z)(W,[["render",c]]);var h=V}}]);