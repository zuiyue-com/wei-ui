/*!
 *  build: Vue  Admin Plus
 *  copyright: vue-admin-beautiful.com
 *  time: 2023-10-10 18:16:02
 */
"use strict";(self["webpackChunkadmin_plus"]=self["webpackChunkadmin_plus"]||[]).push([[9499],{95244:function(e,t,a){a.d(t,{Ix:function(){return n},R1:function(){return r},_5:function(){return o},p$:function(){return s},ss:function(){return d}});var i=a(52806);function r(){return(0,i.Z)({url:"/wwwapi.php?to=sd&modac=formbase",method:"get"})}function s(e){return(0,i.Z)({url:"/wwwapi.php?to=sd&modac=create",method:"post",data:e})}function n(e,t){const a=new FormData;return a.append("Filedata",e.file),(0,i.Z)({url:"/wwwapi.php?to=sd&modac=upload",method:"post",headers:{"Content-Type":"multipart/form-data"},data:a,...t})}function d(){return{list:[{missinId:1,params:'girl, blue hair, double horsetail, Lolita outfit, lace cake skirt, brown skirt with Little Bear Pattern, bowknot, Negative prompt: (ng_deepnegative_v1_75t:1.2), (badhandv4:1), (worst quality:2), (low quality:2), (normal quality:2), lowres, bad anatomy, bad hands, watermark, moles, toe, bad-picture-chill-75v, realisticvision-negative-embedding Steps: 30, Sampler: DPM++ 2M Karras, CFG scale: 7.0, Seed: 1337168216, Size: 576x1024, Model: JGP3.0剪: 3ddf8e6bc625", TI hashes: "ng_deepnegative_v1_75t, badhandv4, bad-picture-chill-75v", Version: v1.6.0.8-v3-2-g9930b53, TaskID: 641772120954850926 Used Embeddings: "ng_deepnegative_v1_75t, badhandv4, bad-picture-chill-75v, ng_deepnegative_v1_75t, badhandv4, bad-picture-chill-75v"',images:[{picid:1,url:"http://120.232.127.22/sd/forum/threadcover/d6/7d/39.jpg"},{picid:2,url:"http://120.232.127.22/sd/lora/BallpointPainting_v1.0.jpg"}],created_at:"2023-10-10 09:20:12",expired_at:"2023-11-10 00:00:00",percentage:100},{missinId:2,params:'girl, blue hair, double horsetail, Lolita outfit, lace cake skirt, brown skirt with Little Bear Pattern, bowknot, Negative prompt: (ng_deepnegative_v1_75t:1.2), (badhandv4:1), (worst quality:2), (low quality:2), (normal quality:2), lowres, bad anatomy, bad hands, watermark, moles, toe, bad-picture-chill-75v, realisticvision-negative-embedding Steps: 30, Sampler: DPM++ 2M Karras, CFG scale: 7.0, Seed: 1337168216, Size: 576x1024, Model: JGP3.0剪: 3ddf8e6bc625", TI hashes: "ng_deepnegative_v1_75t, badhandv4, bad-picture-chill-75v", Version: v1.6.0.8-v3-2-g9930b53, TaskID: 641772120954850926 Used Embeddings: "ng_deepnegative_v1_75t, badhandv4, bad-picture-chill-75v, ng_deepnegative_v1_75t, badhandv4, bad-picture-chill-75v"',images:[],created_at:"2023-10-10 09:20:12",expired_at:"2023-11-10 00:00:00",percentage:70},{missinId:3,params:'girl, blue hair, double horsetail, Lolita outfit, lace cake skirt, brown skirt with Little Bear Pattern, bowknot, Negative prompt: (ng_deepnegative_v1_75t:1.2), (badhandv4:1), (worst quality:2), (low quality:2), (normal quality:2), lowres, bad anatomy, bad hands, watermark, moles, toe, bad-picture-chill-75v, realisticvision-negative-embedding Steps: 30, Sampler: DPM++ 2M Karras, CFG scale: 7.0, Seed: 1337168216, Size: 576x1024, Model: JGP3.0剪: 3ddf8e6bc625", TI hashes: "ng_deepnegative_v1_75t, badhandv4, bad-picture-chill-75v", Version: v1.6.0.8-v3-2-g9930b53, TaskID: 641772120954850926 Used Embeddings: "ng_deepnegative_v1_75t, badhandv4, bad-picture-chill-75v, ng_deepnegative_v1_75t, badhandv4, bad-picture-chill-75v"',images:[{picid:3,url:"http://120.232.127.22/sd/lora/Lovers_Avatar_v2.png"},{picid:4,url:"http://120.232.127.22/sd/lora/xuYingTeXiao_v1.0.png"}],created_at:"2023-10-10 09:20:12",expired_at:"2023-11-10 00:00:00",percentage:100}]}}function o(e){return(0,i.Z)({url:"",method:"post",data:{missinId:e}})}},91222:function(e,t,a){a.d(t,{m:function(){return o}});var i=a(95244),r=a(15592),s=a(96486),n=a.n(s),d=a(47720);const o=(0,d.Q_)("imageModel",{state:()=>({formType:"basic",basicFormTemp:{sd_model_checkpoint_name:"",size:"Portrait"},basicForm:{taskType:"txt2img",override_settings:{sd_model_checkpoint:"",sd_vae:""},styles:[],prompt_words:"",negative_prompt_words:"",init_images:[],width:128,height:1536,sampler_index:"",num_samples:0,cfg_scale:0,seed:-1,clip_skip:0,ensd:31337,batch_size:1},basicOptions:{Checkpoints:[],loraStyle:[],sdVae:{},imageSize:{},imageSizeCustom:{},samplerMethod:[],samplerStep:{},CFGScale:{},clipSkip:{}},hdrepaireForm:{taskType:"HD",base_image:{},hr_upscaler:"",hr_scale:"2",hr_resize_x:0,hr_resize_y:0,hr_second_pass_steps:0,denoising_strength:0},hdrepaireOptions:{hrImageSize:{},imageSizeCustom:{},hrUpscaler:{},hrSecondPassSteps:{}},adetailerForm:{taskType:"AD",base_image:{},ad_model:"",styles:[],ad_prompt_words:"",ad_negative_prompt_words:"",ad_confidence:0,ad_dilate_erode:0,ad_denoising_strength:0,ad_inpaint_only_masked:1},adetailerOptions:{adModel:{},loraStyle:[],adConfidence:{},adMaskBlur:{},adDenoisingStrength:{}}}),getters:{isCustomImageSize(e){return"Custom"===e.basicFormTemp.size},isHdrepaireCustomImageSize(e){return"custom"===e.hdrepaireForm.hr_scale},hasUploadedImage(e){return e.basicForm.init_images.length>0}},actions:{setFormType(e){this.formType=e},formatLoraStyle(e){return Object.entries(e).map((e=>{const[t,a]=e,i=n().cloneDeep(a);i.key=t,i.checked=!1;const[r,s,d]=i.weight;return i.weight={min:r,max:s,value:d},i}))},initBasic({Checkpoints:e,loraStyle:t,sdVae:a,imageSize:i,samplerMethod:r,samplerStep:s,CFGScale:n,clipSkip:d}){const o=Object.entries(e).map((e=>{const[t,a]=e;return a.key=t,a})),l=this.formatLoraStyle(t),m={Checkpoints:o,loraStyle:l,sdVae:a,imageSize:i,imageSizeCustom:{...this.getCustomImageSizeParams(i)},samplerMethod:r,samplerStep:{min:s[0]??1,max:s[1]??60},CFGScale:{min:n[0]??1,max:n[1]??30},clipSkip:{min:d[0]??1,max:d[1]??12}};this.basicOptions=m;const c=m.imageSize[this.basicFormTemp.size];this.setSdModel(o[0]??{}),this.basicForm.override_settings.sd_vae=a["default"],this.basicForm.width=c[0],this.basicForm.height=c[1],this.basicForm.sampler_index=r[0]??"",this.basicForm.num_samples=s[2]??1,this.basicForm.cfg_scale=n[2]??1,this.basicForm.clip_skip=d[2]??1},initHdrepaire({hrImageSize:e,hrUpscaler:t,hrSecondPassSteps:a,denoisingStrength:i}){const r={hrImageSize:e,hrUpscaler:t,hrSecondPassSteps:{min:a[0],max:a[1]},denoisingStrength:{min:i[0],max:i[1]},imageSizeCustom:{...this.getCustomImageSizeParams(e)}};this.hdrepaireOptions=r;const s=r.hrImageSize[this.hdrepaireForm.hr_scale];this.hdrepaireForm.hr_resize_x=s[0],this.hdrepaireForm.hr_resize_y=s[1],this.hdrepaireForm.hr_upscaler=t["default"],this.hdrepaireForm.hr_second_pass_steps=a[2],this.hdrepaireForm.denoising_strength=i[2]},initAdetailer({adModel:e,loraStyle:t,adConfidence:a,adMaskBlur:i,adDenoisingStrength:r}){const s=this.formatLoraStyle(t),n={adModel:e,loraStyle:s,adConfidence:{min:a[0],max:a[1]},adMaskBlur:{min:i[0],max:i[1]},adDenoisingStrength:{min:r[0],max:r[1]}};this.adetailerOptions=n,this.adetailerForm.ad_model=e["0"],this.adetailerForm.ad_confidence=a[2],this.adetailerForm.ad_dilate_erode=i[2],this.adetailerForm.ad_denoising_strength=r[2]},async load(){const{body:e}=await(0,i.R1)();this.initBasic(e),this.initHdrepaire(e),this.initAdetailer(e)},getCustomImageSizeParams(e){const t=e["Custom"]?e["Custom"]:e["custom"];return{minWidth:t[0],maxWidth:t[1],minHeight:t[2],maxHeight:t[3],defaultWidth:t[4],defaultHeight:t[5]}},setUploadImage(e){this.basicForm.init_images=e},setSdModel(e){this.basicFormTemp.sd_model_checkpoint_name=e.name,this.basicForm.override_settings.sd_model_checkpoint=e.key},getUploadImages(){return this.basicForm.init_images.map((async e=>{const{width:t,height:a,src:i}=await(0,r.I)(e.raw);let s="";return t&&(s=`图片大小 ${t}x${a}`),e.extra=s,e.url=i,e}))},hdSetUploadImage(e){this.hdrepaireForm.base_image=e},adSetUploadImage(e){this.adetailerForm.base_image=e},createImage(){let e={};switch(this.formType){case"hdrepaire":e={...this.hdrepaireForm};break;case"adetailer":e={...this.adetailerForm};break;case"basic":default:e={...this.basicForm},e.styles=e.styles.map((e=>{const t={name:e.key,weight:e.weight};return t})),e.init_images=e.init_images.map((e=>{const t=e.url;return t}));break}return(0,i.p$)(e)}}})},15592:function(e,t,a){function i(e){return new Promise(((t,a)=>{const i=new FileReader;i.readAsDataURL(e),i.onload=function(){if(2==i.readyState){const e=new Image;e.src=i.result,e.onload=function(){const e={width:this.width,height:this.height,src:this.src};t(e)}}else a()}}))}function r(e){return e.replace(/data:.+?;base64,/,"")}a.d(t,{I:function(){return i},x:function(){return r}})},16273:function(e,t,a){a.d(t,{Z:function(){return p}});var i=a(30032),r=(a(3241),a(91154),a(97830)),s=(a(13768),a(66252)),n=a(2262),d=a(3577),o=a(22201),l=(0,s.aZ)({__name:"index",props:{header:{type:String,default:""},bodyStyle:{type:Object,default:()=>({})},shadow:{type:String,default:""},skeleton:{type:Boolean,default:!1},skeletonRows:{type:Number,default:4}},setup(e){let t=null;const a=(0,n.iH)(!0);return t=setTimeout((()=>{a.value=!1}),500),(0,o.iS)(((e,a,i)=>{clearInterval(t),i()})),(t,o)=>{const l=r.vk,m=i.Kf;return(0,s.wg)(),(0,s.j4)(m,{"body-style":e.bodyStyle,class:"vab-card",shadow:e.shadow},(0,s.Nv)({default:(0,s.w5)((()=>[e.skeleton?((0,s.wg)(),(0,s.j4)(l,{key:0,animated:"",loading:(0,n.SU)(a),rows:e.skeletonRows},{default:(0,s.w5)((()=>[(0,s.WI)(t.$slots,"default",{class:"vab-card-transition"})])),_:3},8,["loading","rows"])):(0,s.WI)(t.$slots,"default",{key:1,class:"vab-card-transition"})])),_:2},[t.$slots.header||e.header?{name:"header",fn:(0,s.w5)((()=>[(0,s.WI)(t.$slots,"header",{},(()=>[(0,s.Uk)((0,d.zw)(e.header),1)]))])),key:"0"}:void 0]),1032,["body-style","shadow"])}}});function m(e){e.__source="library/components/VabCard/index.vue"}var c=a(83744);"function"===typeof m&&m(l);const h=(0,c.Z)(l,[["__scopeId","data-v-391150ea"]]);var p=h}}]);