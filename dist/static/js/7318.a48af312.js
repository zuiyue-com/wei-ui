/*!
 *  build: Vue  Admin Plus
 *  copyright: vue-admin-beautiful.com
 *  time: 2023-09-28 17:16:01
 */
"use strict";(self["webpackChunkadmin_plus"]=self["webpackChunkadmin_plus"]||[]).push([[7318],{60735:function(e,l,a){a.d(l,{gp:function(){return t}});var r=a(52806);function t(e){return(0,r.Z)({url:"/area/getList",method:"get",params:e})}},31473:function(e,l,a){a.d(l,{Z:function(){return d}});var r=a(22040),t=(a(3241),a(99426),a(66252));const o={class:"left-panel"};var n=(0,t.aZ)({__name:"VabQueryFormLeftPanel",props:{span:{type:Number,default:14}},setup(e){return(l,a)=>{const n=r.Dv;return(0,t.wg)(),(0,t.j4)(n,{lg:e.span,md:24,sm:24,xl:e.span,xs:24},{default:(0,t.w5)((()=>[(0,t._)("div",o,[(0,t.WI)(l.$slots,"default")])])),_:3},8,["lg","xl"])}}});function m(e){e.__source="library/components/VabQueryForm/components/VabQueryFormLeftPanel.vue"}"function"===typeof m&&m(n);const u=n;var d=u},18838:function(e,l,a){a.d(l,{Z:function(){return s}});var r=a(73632),t=(a(3241),a(74965),a(66252));function o(e,l){const a=r.dq;return(0,t.wg)(),(0,t.j4)(a,{class:"vab-query-form",gutter:0},{default:(0,t.w5)((()=>[(0,t.WI)(e.$slots,"default",{},void 0,!0)])),_:3})}function n(e){e.__source="library/components/VabQueryForm/index.vue"}var m=a(83744);const u={};"function"===typeof n&&n(u);const d=(0,m.Z)(u,[["render",o],["__scopeId","data-v-172989c8"]]);var s=d},77318:function(e,l,a){a.r(l),a.d(l,{default:function(){return F}});var r=a(73632),t=(a(3241),a(74965),a(22040)),o=(a(99426),a(20129)),n=(a(69840),a(15659)),m=(a(10444),a(57004)),u=(a(66522),a(79145)),d=(a(46825),a(12694)),s=(a(85418),a(87692)),i=(a(81691),a(63715)),f=(a(76252),a(5508),a(85381)),p=(a(68538),a(39644)),c=(a(59739),a(14132)),b=(a(50986),a(61715),a(6589),a(57018)),g=(a(74367),a(18838)),W=a(31473),_=(a(45393),a(22411),a(66252));const V={class:"comprehensive-form-container"};function v(e,l,a,v,w,y){const h=s.dn,U=s.KD,k=W.Z,x=g.Z,F=b.EZ,q=o.nH,Z=c.BT,C=c.ElSelect,P=p.iJ,j=f.OX,D=i.ElCheckbox,E=i.z5,O=s.rh,Q=d.xk,I=u.mg,R=m.Qd,B=n.ElButton,L=o.ly,z=t.Dv,K=r.dq;return(0,_.wg)(),(0,_.iD)("div",V,[(0,_.Wm)(K,{gutter:20},{default:(0,_.w5)((()=>[(0,_.Wm)(z,{lg:{span:12,offset:6},md:{span:20,offset:2},sm:{span:20,offset:2},xl:{span:12,offset:6},xs:24},{default:(0,_.w5)((()=>[(0,_.Wm)(x,null,{default:(0,_.w5)((()=>[(0,_.Wm)(k,null,{default:(0,_.w5)((()=>[(0,_.Wm)(U,{modelValue:e.labelPosition,"onUpdate:modelValue":l[0]||(l[0]=l=>e.labelPosition=l)},{default:(0,_.w5)((()=>[(0,_.Wm)(h,{label:"left"},{default:(0,_.w5)((()=>[(0,_.Uk)("左对齐")])),_:1}),(0,_.Wm)(h,{label:"right"},{default:(0,_.w5)((()=>[(0,_.Uk)("右对齐")])),_:1}),(0,_.Wm)(h,{label:"top"},{default:(0,_.w5)((()=>[(0,_.Uk)("顶部对齐")])),_:1})])),_:1},8,["modelValue"])])),_:1})])),_:1}),(0,_.Wm)(L,{ref:"formRef",class:"demo-form","label-position":e.labelPosition,"label-width":"100px",model:e.form,rules:e.rules},{default:(0,_.w5)((()=>[(0,_.Wm)(q,{label:"活动名称",prop:"name"},{default:(0,_.w5)((()=>[(0,_.Wm)(F,{modelValue:e.form.name,"onUpdate:modelValue":l[1]||(l[1]=l=>e.form.name=l)},null,8,["modelValue"])])),_:1}),(0,_.Wm)(q,{label:"活动区域",prop:"region"},{default:(0,_.w5)((()=>[(0,_.Wm)(C,{modelValue:e.form.region,"onUpdate:modelValue":l[2]||(l[2]=l=>e.form.region=l),placeholder:"请选择活动区域"},{default:(0,_.w5)((()=>[(0,_.Wm)(Z,{label:"区域一",value:"shanghai"}),(0,_.Wm)(Z,{label:"区域二",value:"beijing"})])),_:1},8,["modelValue"])])),_:1}),(0,_.Wm)(q,{label:"活动时间",prop:"date"},{default:(0,_.w5)((()=>[(0,_.Wm)(P,{modelValue:e.form.date,"onUpdate:modelValue":l[3]||(l[3]=l=>e.form.date=l),placeholder:"选择日期时间",type:"datetime"},null,8,["modelValue"])])),_:1}),(0,_.Wm)(q,{label:"即时配送",prop:"delivery"},{default:(0,_.w5)((()=>[(0,_.Wm)(j,{modelValue:e.form.delivery,"onUpdate:modelValue":l[4]||(l[4]=l=>e.form.delivery=l)},null,8,["modelValue"])])),_:1}),(0,_.Wm)(q,{label:"活动性质",prop:"type"},{default:(0,_.w5)((()=>[(0,_.Wm)(E,{modelValue:e.form.type,"onUpdate:modelValue":l[5]||(l[5]=l=>e.form.type=l)},{default:(0,_.w5)((()=>[(0,_.Wm)(D,{label:"美食/餐厅线上活动",name:"type"}),(0,_.Wm)(D,{label:"地推活动",name:"type"}),(0,_.Wm)(D,{label:"线下主题活动",name:"type"}),(0,_.Wm)(D,{label:"单纯品牌曝光",name:"type"})])),_:1},8,["modelValue"])])),_:1}),(0,_.Wm)(q,{label:"特殊资源",prop:"resource"},{default:(0,_.w5)((()=>[(0,_.Wm)(U,{modelValue:e.form.resource,"onUpdate:modelValue":l[6]||(l[6]=l=>e.form.resource=l)},{default:(0,_.w5)((()=>[(0,_.Wm)(O,{label:"线上品牌商赞助"}),(0,_.Wm)(O,{label:"线下场地免费"})])),_:1},8,["modelValue"])])),_:1}),(0,_.Wm)(q,{label:"活动形式",prop:"description"},{default:(0,_.w5)((()=>[(0,_.Wm)(F,{modelValue:e.form.description,"onUpdate:modelValue":l[7]||(l[7]=l=>e.form.description=l),type:"textarea"},null,8,["modelValue"])])),_:1}),(0,_.Wm)(q,{label:"评星"},{default:(0,_.w5)((()=>[(0,_.Wm)(Q,{modelValue:e.form.rate,"onUpdate:modelValue":l[8]||(l[8]=l=>e.form.rate=l),"show-text":""},null,8,["modelValue"])])),_:1}),(0,_.Wm)(q,{label:"行政区划"},{default:(0,_.w5)((()=>[(0,_.Wm)(I,{modelValue:e.form.area,"onUpdate:modelValue":l[9]||(l[9]=l=>e.form.area=l),clearable:"",filterable:"",options:e.areaOptions,props:{label:"name",value:"code"}},null,8,["modelValue","options"])])),_:1}),(0,_.Wm)(q,{label:"穿梭框"},{default:(0,_.w5)((()=>[(0,_.Wm)(R,{modelValue:e.form.transfer,"onUpdate:modelValue":l[10]||(l[10]=l=>e.form.transfer=l),data:e.data,"filter-method":e.filterMethod,"filter-placeholder":"请输入城市拼音",filterable:""},null,8,["modelValue","data","filter-method"])])),_:1}),(0,_.Wm)(q,null,{default:(0,_.w5)((()=>[(0,_.Wm)(B,{type:"primary",onClick:l[11]||(l[11]=l=>e.submitForm("formRef"))},{default:(0,_.w5)((()=>[(0,_.Uk)(" 立即创建 ")])),_:1}),(0,_.Wm)(B,{onClick:l[12]||(l[12]=l=>e.resetForm("formRef"))},{default:(0,_.w5)((()=>[(0,_.Uk)("重置")])),_:1})])),_:1})])),_:1},8,["label-position","model","rules"])])),_:1})])),_:1})])}a(57658);var w=a(60735),y=a(2262),h=(0,_.aZ)({name:"ComprehensiveForm",setup(){const e=()=>{const e=[],l=["上海","北京","广州"],a=["shanghai","beijing","guangzhou"];return l.forEach(((l,r)=>{e.push({label:l,key:r,pinyin:a[r]})})),e},l=(0,y.qj)({formRef:null,labelPosition:"right",form:{name:"",region:"",date:"",date2:"",delivery:!1,type:[],resource:"",description:"",rate:0,area:[],transfer:[]},areaOptions:[],rules:{name:[{required:!0,message:"请输入活动名称",trigger:"blur"},{min:3,max:5,message:"长度在 3 到 5 个字符",trigger:"blur"}],region:[{required:!0,message:"请选择活动区域",trigger:"change"}],date:[{type:"date",required:!0,message:"请选择日期",trigger:"change"}],type:[{type:"array",required:!0,message:"请至少选择一个活动性质",trigger:"change"}],resource:[{required:!0,message:"请选择活动资源",trigger:"change"}],description:[{required:!0,message:"请填写活动形式",trigger:"blur"}]},data:e(),filterMethod(e,l){return l.pinyin.indexOf(e)>-1}}),a=async()=>{const{data:{list:e}}=await(0,w.gp)();l.areaOptions=e},r=e=>{l[e].validate((e=>{e?alert("submit!"):console.log("error submit!!")}))},t=e=>{l[e].resetFields()};return(0,_.bv)((()=>{a()})),{...(0,y.BK)(l),submitForm:r,resetForm:t,fetchData:a}}});function U(e){e.__source="src/views/vab/form/comprehensiveForm.vue"}var k=a(83744);"function"===typeof U&&U(h);const x=(0,k.Z)(h,[["render",v],["__scopeId","data-v-57e3e8c2"]]);var F=x}}]);