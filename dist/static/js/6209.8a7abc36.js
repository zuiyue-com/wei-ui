/*!
 *  build: Vue  Admin Plus
 *  copyright: vue-admin-beautiful.com
 *  time: 2023-10-19 19:31:27
 */
"use strict";(self["webpackChunkadmin_plus"]=self["webpackChunkadmin_plus"]||[]).push([[6209],{95244:function(e,t,i){i.d(t,{Ix:function(){return n},R1:function(){return s},YU:function(){return m},_5:function(){return d},p$:function(){return r},ss:function(){return o}});var a=i(52806);function s(){return(0,a.Z)({url:"/wwwapi.php?to=sd&modac=formbase",method:"get"})}function r(e){return(0,a.Z)({url:"/wwwapi.php?to=sd&modac=create",method:"post",data:e})}function n(e,t){const i=new FormData;return i.append("Filedata",e.file),(0,a.Z)({url:"/wwwapi.php?to=sd&modac=upload",method:"post",headers:{"Content-Type":"multipart/form-data"},data:i,...t})}function o(e){return(0,a.Z)({url:"/wwwapi.php?to=sd&modac=myworks",method:"get",params:e})}function d(e){return(0,a.Z)({url:"/wwwapi.php?to=sd&modac=cancle",method:"post",data:{misId:e}})}function m(e,t){return(0,a.Z)({url:"/wwwapi.php?to=sd&modac=picDetail",method:"post",data:{imageid:e,postid:t}})}},91222:function(e,t,i){i.d(t,{m:function(){return p}});var a=i(95244),s=i(15592),r=i(96486),n=i.n(r),o=i(47720);function d(e){return e.map((e=>{const t={name:e.key,weight:e.weight};return t}))}function m(e){return e.map((e=>{const t=e.url;return t}))}function c(e){return e.url?e.url:""}function l(e,t){return t.map((t=>({picid:e,url:t,title:""})))}function u(e,t){return t.map((t=>{const i=e.find((e=>e.key===t.name)),a={...i,min:i.weight.min,max:i.weight.max,weight:t.weight};return a}))}const p=(0,o.Q_)("imageModel",{state:()=>({isInit:!1,formType:"basic",basicFormTemp:{sd_model_checkpoint_name:"",size:"Portrait"},basicForm:{taskType:"txt2img",override_settings:{sd_model_checkpoint:"",sd_vae:""},styles:[],prompt_words:"",negative_prompt_words:"",init_images:[],width:128,height:1536,sampler_index:"",num_samples:0,cfg_scale:0,seed:-1,clip_skip:0,ensd:31337,batch_size:1},basicOptions:{Checkpoints:[],loraStyle:[],sdVae:{},imageSize:{},imageSizeCustom:{},samplerMethod:[],samplerStep:{},CFGScale:{},clipSkip:{}},hdrepaireForm:{taskType:"HD",base_image:{},hr_upscaler:"",hr_scale:"2",hr_resize_x:0,hr_resize_y:0,hr_second_pass_steps:0,denoising_strength:0},hdrepaireOptions:{hrImageSize:{},imageSizeCustom:{},hrUpscaler:{},hrSecondPassSteps:{}},adetailerForm:{taskType:"AD",base_image:{},ad_model:"",styles:[],ad_prompt_words:"",ad_negative_prompt_words:"",ad_confidence:0,ad_dilate_erode:0,ad_denoising_strength:0,ad_inpaint_only_masked:1},adetailerOptions:{adModel:{},loraStyle:[],adConfidence:{},adMaskBlur:{},adDenoisingStrength:{}}}),getters:{isCustomImageSize(e){return"Custom"===e.basicFormTemp.size},isHdrepaireCustomImageSize(e){return"custom"===e.hdrepaireForm.hr_scale},hasUploadedImage(e){return e.basicForm.init_images.length>0}},actions:{setFormType(e){this.formType=e},formatLoraStyle(e){return Object.entries(e).map((e=>{const[t,i]=e,a=n().cloneDeep(i);a.key=t,a.checked=!1;const[s,r,o]=a.weight;return a.weight={min:s,max:r,value:o},a}))},initBasic({Checkpoints:e,loraStyle:t,sdVae:i,imageSize:a,samplerMethod:s,samplerStep:r,CFGScale:n,clipSkip:o}){const d=Object.entries(e).map((e=>{const[t,i]=e;return i.key=t,i})),m=this.formatLoraStyle(t),c={Checkpoints:d,loraStyle:m,sdVae:i,imageSize:a,imageSizeCustom:{...this.getCustomImageSizeParams(a)},samplerMethod:s,samplerStep:{min:r[0]??1,max:r[1]??60},CFGScale:{min:n[0]??1,max:n[1]??30},clipSkip:{min:o[0]??1,max:o[1]??12}};this.basicOptions=c;const l=c.imageSize[this.basicFormTemp.size];this.setSdModel(d[0]??{}),this.basicForm.taskType="txt2img",this.basicForm.override_settings.sd_vae=i["default"],this.basicForm.styles=[],this.basicForm.prompt_words="",this.basicForm.negative_prompt_words="",this.basicForm.init_images=[],this.basicForm.width=l[0],this.basicForm.height=l[1],this.basicForm.sampler_index=s[0]??"",this.basicForm.num_samples=r[2]??1,this.basicForm.cfg_scale=n[2]??1,this.basicForm.seed=-1,this.basicForm.clip_skip=o[2]??1,this.basicForm.ensd=31337},initHdrepaire({hrImageSize:e,hrUpscaler:t,hrSecondPassSteps:i,denoisingStrength:a}){const s={hrImageSize:e,hrUpscaler:t,hrSecondPassSteps:{min:i[0],max:i[1]},denoisingStrength:{min:a[0],max:a[1]},imageSizeCustom:{...this.getCustomImageSizeParams(e)}};this.hdrepaireOptions=s;const r=s.hrImageSize[this.hdrepaireForm.hr_scale];this.hdrepaireForm.base_image={},this.hdrepaireForm.hr_scale=2,this.hdrepaireForm.hr_resize_x=r[0],this.hdrepaireForm.hr_resize_y=r[1],this.hdrepaireForm.hr_upscaler=t["default"],this.hdrepaireForm.hr_second_pass_steps=i[2],this.hdrepaireForm.denoising_strength=a[2]},initAdetailer({adModel:e,loraStyle:t,adConfidence:i,adMaskBlur:a,adDenoisingStrength:s}){const r=this.formatLoraStyle(t),n={adModel:e,loraStyle:r,adConfidence:{min:i[0],max:i[1]},adMaskBlur:{min:a[0],max:a[1]},adDenoisingStrength:{min:s[0],max:s[1]}};this.adetailerOptions=n,this.adetailerForm.base_image={},this.adetailerForm.ad_model=e["0"],this.adetailerForm.styles=[],this.adetailerForm.ad_prompt_words="",this.adetailerForm.ad_negative_prompt_words="",this.adetailerForm.ad_confidence=i[2],this.adetailerForm.ad_dilate_erode=a[2],this.adetailerForm.ad_denoising_strength=s[2]},async load(){if(this.isInit)return!1;const{body:e}=await(0,a.R1)();this.initBasic(e),this.initHdrepaire(e),this.initAdetailer(e),this.isInit=!0},getCustomImageSizeParams(e){const t=e["Custom"]?e["Custom"]:e["custom"];return{minWidth:t[0],maxWidth:t[1],minHeight:t[2],maxHeight:t[3],defaultWidth:t[4],defaultHeight:t[5]}},setUploadImage(e){const t=e.map((e=>({picid:e.picid,url:e.bigimg,title:e.title})));this.basicForm.init_images=t},setSdModel(e){this.basicFormTemp.sd_model_checkpoint_name=e.name,this.basicForm.override_settings.sd_model_checkpoint=e.key},getUploadImages(){return this.basicForm.init_images.map((async e=>{const{width:t,height:i,src:a}=await(0,s.I)(e.raw);let r="";return t&&(r=`图片大小 ${t}x${i}`),e.extra=r,e.url=a,e}))},hdSetUploadImage(e){const t={picid:e.picid,url:e.bigimg,title:e.title};this.hdrepaireForm.base_image=t},adSetUploadImage(e){const t={picid:e.picid,url:e.bigimg,title:e.title};this.adetailerForm.base_image=t},setFormData(e,t){const i=t.override_settings.sd_model_checkpoint,a=this.basicOptions.Checkpoints.find((e=>e.key===i));a?this.setSdModel(a):this.setSdModel(this.basicOptions.Checkpoints[0]);const s=Object.entries(this.basicOptions.imageSize).find((e=>{const[i,a]=e;return a[0]==t.width&&a[1]==t.height}));this.basicFormTemp.size=s?s[0]:"Custom",t.styles=u(this.basicOptions.loraStyle,t.styles),t.init_images=l(e,t.init_images),t.taskType="txt2img",this.basicForm={...t},this.formType="basic"},async getImageDetailResetParams(e,t=void 0){const{body:{detail:i}}=await(0,a.YU)(e,t);this.setFormData(e,i)},createImage(){let e={};switch(this.formType){case"hdrepaire":e={...this.hdrepaireForm},e.base_image=c(e.base_image);break;case"adetailer":e={...this.adetailerForm},e.styles=d(e.styles),e.base_image=c(e.base_image);break;case"basic":default:e={...this.basicForm},e.styles=d(e.styles),e.init_images=m(e.init_images),e.init_images.length>0?e.taskType="img2img":e.taskType="txt2img";break}return(0,a.p$)(e)}}})},15592:function(e,t,i){function a(e){return new Promise(((t,i)=>{const a=new FileReader;a.readAsDataURL(e),a.onload=function(){if(2==a.readyState){const e=new Image;e.src=a.result,e.onload=function(){const e={width:this.width,height:this.height,src:this.src};t(e)}}else i()}}))}function s(e){return e.replace(/data:.+?;base64,/,"")}i.d(t,{I:function(){return a},x:function(){return s}})},17052:function(e,t,i){i.d(t,{D8:function(){return n},Gc:function(){return r},TD:function(){return a},Vj:function(){return s}});i(57658);function a(e,t){if(0===arguments.length)return null;const i=t||"{y}-{m}-{d} {h}:{i}:{s}";let a;"object"===typeof e?a=e:("string"===typeof e&&/^[0-9]+$/.test(e)&&(e=parseInt(e)),"number"===typeof e&&10===e.toString().length&&(e*=1e3),a=new Date(e));const s={y:a.getFullYear(),m:a.getMonth()+1,d:a.getDate(),h:a.getHours(),i:a.getMinutes(),s:a.getSeconds(),a:a.getDay()};return i.replace(/{([ymdhisa])+}/g,((e,t)=>{let i=s[t];return"a"===t?["日","一","二","三","四","五","六"][i]:(e.length>0&&i<10&&(i=`0${i}`),i||0)}))}function s(e=32){const t="abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890";let i="";for(let a=0;a<e;a++)i+=t.charAt(Math.floor(Math.random()*t.length));return i}function r(e,t,i){const a=Math.ceil(i/t);return e>=a}function n(e=0){document.getElementById("app").scrollTo({top:e,left:0,behavior:"smooth"})}},16273:function(e,t,i){i.d(t,{Z:function(){return p}});var a=i(30032),s=(i(3241),i(91154),i(97830)),r=(i(13768),i(66252)),n=i(2262),o=i(3577),d=i(22201),m=(0,r.aZ)({__name:"index",props:{header:{type:String,default:""},bodyStyle:{type:Object,default:()=>({})},shadow:{type:String,default:""},skeleton:{type:Boolean,default:!1},skeletonRows:{type:Number,default:4}},setup(e){let t=null;const i=(0,n.iH)(!0);return t=setTimeout((()=>{i.value=!1}),500),(0,d.iS)(((e,i,a)=>{clearInterval(t),a()})),(t,d)=>{const m=s.vk,c=a.Kf;return(0,r.wg)(),(0,r.j4)(c,{"body-style":e.bodyStyle,class:"vab-card",shadow:e.shadow},(0,r.Nv)({default:(0,r.w5)((()=>[e.skeleton?((0,r.wg)(),(0,r.j4)(m,{key:0,animated:"",loading:(0,n.SU)(i),rows:e.skeletonRows},{default:(0,r.w5)((()=>[(0,r.WI)(t.$slots,"default",{class:"vab-card-transition"})])),_:3},8,["loading","rows"])):(0,r.WI)(t.$slots,"default",{key:1,class:"vab-card-transition"})])),_:2},[t.$slots.header||e.header?{name:"header",fn:(0,r.w5)((()=>[(0,r.WI)(t.$slots,"header",{},(()=>[(0,r.Uk)((0,o.zw)(e.header),1)]))])),key:"0"}:void 0]),1032,["body-style","shadow"])}}});function c(e){e.__source="library/components/VabCard/index.vue"}var l=i(83744);"function"===typeof c&&c(m);const u=(0,l.Z)(m,[["__scopeId","data-v-391150ea"]]);var p=u},26209:function(e,t,i){i.r(t),i.d(t,{default:function(){return x}});var a=i(16273),s=i(35756),r=(i(3241),i(19414),i(63715)),n=(i(5508),i(91194)),o=(i(2993),i(32590),i(10661)),d=(i(35095),i(14181)),m=(i(33828),i(57658),i(66252)),c=i(3577),l=i(2262),u=i(91222),p=i(17052),h=i(33729),g=i.n(h),_=i(22201);const f={class:"taskqueue-card-body"},w={class:"taskqueue-tag-group"},b={class:"taskqueue-folow"},y={class:"taskqueue-image-group"},k={class:"taskqueue-image"};var S={__name:"index",props:{imageItem:{type:Object,default:()=>{}},images:{type:Array,default:()=>[]},redirect:{type:Boolean,default:!1}},emits:["topic"],setup(e,{emit:t}){const i=e,h=(0,_.tv)(),S=(0,m.Fl)((()=>i.imageItem)),F=(0,u.m)(),{getImageDetailResetParams:I,setFormType:v,setUploadImage:x,hdSetUploadImage:C,adSetUploadImage:W}=F;function z(){i.redirect&&h.push("/sd/create")}async function D(e){z(),I(e.picid),v("basic"),(0,p.D8)()}async function T(e){z(),x([{...e}]),v("basic"),(0,p.D8)()}async function M(e){z(),C(e),v("hdrepaire"),(0,p.D8)()}async function U(e){z(),W(e),v("adetailer"),(0,p.D8)()}function O(e){t("topic",e)}function P(e){e.replace(/(.*\/)*([^.]+\.\w+).*/gi,"$2");g()(e)}return(t,i)=>{const u=(0,m.up)("PictureRounded"),p=d.gn,h=o.Q0,g=(0,m.up)("Picture"),_=(0,m.up)("Edit"),F=(0,m.up)("EditPen"),I=n.QQ,v=n.Lf,x=(0,m.up)("Share"),C=(0,m.up)("Download"),W=r.ElCheckbox,z=s.F8,Z=a.Z;return(0,m.wg)(),(0,m.j4)(Z,{"body-style":{padding:"0px"},shadow:"hover"},{default:(0,m.w5)((()=>[(0,m._)("div",f,[(0,m._)("div",{class:(0,c.C_)(["taskqueue-mask",{"taskqueue-checked":e.imageItem.checked}])},[(0,m._)("div",w,[(0,m.Wm)(v,{style:{width:"100%"}},{default:(0,m.w5)((()=>[(0,m.Wm)(I,null,{default:(0,m.w5)((()=>[(0,m.Wm)(h,{class:"box-item",effect:"dark",content:"重绘",placement:"top"},{default:(0,m.w5)((()=>[(0,m.Wm)(p,{onClick:i[0]||(i[0]=t=>D(e.imageItem))},{default:(0,m.w5)((()=>[(0,m.Wm)(u)])),_:1})])),_:1}),(0,m.Wm)(h,{class:"box-item",effect:"dark",content:"图生图",placement:"top"},{default:(0,m.w5)((()=>[(0,m.Wm)(p,{onClick:i[1]||(i[1]=t=>T(e.imageItem))},{default:(0,m.w5)((()=>[(0,m.Wm)(g)])),_:1})])),_:1}),(0,m.Wm)(h,{class:"box-item",effect:"dark",content:"高清修复",placement:"top"},{default:(0,m.w5)((()=>[(0,m.Wm)(p,{onClick:i[2]||(i[2]=t=>M(e.imageItem))},{default:(0,m.w5)((()=>[(0,m.Wm)(_)])),_:1})])),_:1}),(0,m.Wm)(h,{class:"box-item",effect:"dark",content:"脸部修复",placement:"top"},{default:(0,m.w5)((()=>[(0,m.Wm)(p,{onClick:i[3]||(i[3]=t=>U(e.imageItem))},{default:(0,m.w5)((()=>[(0,m.Wm)(F)])),_:1})])),_:1})])),_:1})])),_:1})]),(0,m._)("div",b,[(0,m.Wm)(v,{style:{width:"100%"}},{default:(0,m.w5)((()=>[(0,m.Wm)(I,null,{default:(0,m.w5)((()=>[(0,m.Wm)(h,{class:"box-item",effect:"dark",content:"分享",placement:"top"},{default:(0,m.w5)((()=>[(0,m.Wm)(p,{onClick:i[4]||(i[4]=t=>O(e.imageItem.bigimg))},{default:(0,m.w5)((()=>[(0,m.Wm)(x)])),_:1})])),_:1}),(0,m.Wm)(h,{class:"box-item",effect:"dark",content:"下载",placement:"top"},{default:(0,m.w5)((()=>[(0,m.Wm)(p,{onClick:i[5]||(i[5]=t=>P(e.imageItem.bigimg))},{default:(0,m.w5)((()=>[(0,m.Wm)(C)])),_:1})])),_:1}),(0,m.Wm)(h,{class:"box-item",effect:"dark",content:"选中批量下载和分享",placement:"top"},{default:(0,m.w5)((()=>[(0,m.Wm)(W,{modelValue:(0,l.SU)(S).checked,"onUpdate:modelValue":i[6]||(i[6]=e=>(0,l.SU)(S).checked=e),label:"",size:"large"},null,8,["modelValue"])])),_:1})])),_:1})])),_:1})])],2),(0,m._)("div",y,[(0,m._)("div",k,[(0,m.Wm)(z,{src:e.imageItem.bigimg,"zoom-rate":1.1,"preview-src-list":e.images,"initial-index":0,"hide-on-click-modal":!0,fit:"contain"},null,8,["src","preview-src-list"])])])])])),_:1})}}};function F(e){e.__source="src/components/ImageItem/index.vue"}var I=i(83744);"function"===typeof F&&F(S);const v=(0,I.Z)(S,[["__scopeId","data-v-6d7eaea8"]]);var x=v}}]);