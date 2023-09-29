/*!
 *  build: Vue  Admin Plus
 *  copyright: vue-admin-beautiful.com
 *  time: 2023-09-28 17:16:01
 */
"use strict";(self["webpackChunkadmin_plus"]=self["webpackChunkadmin_plus"]||[]).push([[3193,6203],{56203:function(e,a,t){t.r(a),t.d(a,{default:function(){return w}});var l=t(3837),r=(t(3241),t(81010),t(76128)),o=(t(74828),t(50363),t(15659)),n=(t(10444),t(66252));const s={class:"vab-form-table"};function d(e,a,t,d,u,i){const m=o.ElButton,c=l.$Y,p=r.GT,f=l.eI;return(0,n.wg)(),(0,n.iD)("div",s,[((0,n.wg)(),(0,n.j4)(f,{key:e.toggleIndex,ref:"tableRef",border:"",data:e.data},{empty:(0,n.w5)((()=>[(0,n.Wm)(p,{class:"vab-data-empty",description:"暂无数据"})])),default:(0,n.w5)((()=>[(0,n.WI)(e.$slots,"default"),(0,n.Wm)(c,{align:"center",label:"操作",width:"200"},{default:(0,n.w5)((({$index:a,row:t})=>[t.progress>=1?((0,n.wg)(),(0,n.j4)(m,{key:0,type:"primary",onClick:e.run},{default:(0,n.w5)((()=>[(0,n.Uk)(" 运行 ")])),_:1},8,["onClick"])):((0,n.wg)(),(0,n.j4)(m,{key:1,type:"primary",disabled:!0},{default:(0,n.w5)((()=>[(0,n.Uk)("运行")])),_:1})),(0,n.Wm)(m,{icon:e.Delete,plain:"",type:"danger",onClick:l=>e.handleDelete(t,a)},{default:(0,n.w5)((()=>[(0,n.Uk)(" 删除 ")])),_:2},1032,["icon","onClick"])])),_:1})])),_:3},8,["data"]))])}t(57658);var u=t(52806),i=t(2262),m=(0,n.aZ)({name:"VabFormTable",props:{modelValue:{type:Array,default:()=>[]},rowTemplate:{type:Object,default:()=>{}},drag:{type:Boolean,default:!1}},emits:["update:modelValue"],setup(e,{emit:a}){const t=(0,n.f3)("$baseConfirm"),l=(0,n.f3)("$baseMessage"),r=(0,i.qj)({tableRef:null,data:[],toggleIndex:0}),o=()=>{const e=r.tableRef.$el.querySelector(".el-table__body-wrapper tbody");Sortable.create(e,{handle:".vab-rank",animation:300,onEnd({newIndex:e,oldIndex:a}){const t=r.data,l=t.splice(a,1)[0];t.splice(e,0,l),r.toggleIndex+=1,(0,n.Y3)((()=>{o()}))}})},s=()=>{r.data.push(JSON.parse(JSON.stringify(e.rowTemplate)))},d=async(e,a)=>{t("!!!您将会删除所有安装文件!!!您确定要删除当前项吗?",null,(async()=>{await(0,u.Z)({url:`/image/delete/${e.hash}`,method:"get",params:{}}),l("成功","success","vab-hey-message-success"),r.data.splice(a,1)}))};return(0,n.bv)((()=>{r.data=e.modelValue,e.drag&&o()})),(0,n.YP)((()=>e.modelValue),(()=>r.data=e.modelValue)),(0,n.YP)((()=>r.data),(()=>a("update:modelValue",r.data))),{...(0,i.BK)(r),rowDrop:o,handleAdd:s,handleDelete:d}}});function c(e){e.__source="src/views/image/components/TableManage.vue"}var p=t(83744);"function"===typeof c&&c(m);const f=(0,p.Z)(m,[["render",d]]);var w=f},33193:function(e,a,t){t.r(a),t.d(a,{default:function(){return y}});var l=t(20129),r=(t(3241),t(69840),t(6589),t(32018)),o=(t(46160),t(3837)),n=(t(50363),t(66252)),s=t(3577);const d={class:"dynamic-table-container"};function u(e,a,t,u,i,m){const c=o.$Y,p=r.Xh,f=(0,n.up)("vab-form-table"),w=l.nH,g=l.ly;return(0,n.wg)(),(0,n.iD)("div",d,[(0,n.Wm)(g,{ref:"formRef",model:e.form},{default:(0,n.w5)((()=>[(0,n.Wm)(w,{"label-width":0,prop:"list"},{default:(0,n.w5)((()=>[(0,n.Wm)(f,{modelValue:e.form.list,"onUpdate:modelValue":a[0]||(a[0]=a=>e.form.list=a),drag:"","row-template":e.rowTemplate,style:{width:"100%"}},{default:(0,n.w5)((()=>[(0,n.Wm)(c,{align:"center",label:"名称",prop:"title"},{default:(0,n.w5)((({row:e})=>[(0,n.Uk)((0,s.zw)(e.name),1)])),_:1}),(0,n.Wm)(c,{align:"center",label:"大小",prop:"author"},{default:(0,n.w5)((({row:a})=>[(0,n.Uk)((0,s.zw)(e.formatBytes(a.size)),1)])),_:1}),(0,n.Wm)(c,{align:"center",label:"进度",prop:"rate"},{default:(0,n.w5)((({row:e})=>[(0,n.Wm)(p,{percentage:(100*e.progress).toFixed(2)},null,8,["percentage"])])),_:1}),(0,n.Wm)(c,{align:"center",label:"下载速度",prop:"pageViews"},{default:(0,n.w5)((({row:a})=>[(0,n.Uk)((0,s.zw)(e.formatBytes(a.dlspeed))+"/s ",1)])),_:1})])),_:1},8,["modelValue","row-template"])])),_:1})])),_:1},8,["model"])])}var i=t(56203),m=t(52806);function c(e){return(0,m.Z)({url:"/table/doEdit",method:"post",data:e})}var p=t(2262),f=(0,n.aZ)({name:"DynamicTable",components:{VabFormTable:i["default"]},setup(){const e=(0,n.f3)("$baseMessage"),a=(0,p.qj)({formRef:null,rowTemplate:{title:"",author:"",rate:0,pageViews:0,dateTime:"",type:1},form:{list:[]},typeDic:[{label:"热点",value:0},{label:"头条",value:1}]}),t=()=>{a.formRef.validate((async t=>{if(!t)return!1;{const{msg:t}=await c(a.form);e(t,"success","vab-hey-message-success")}}))},l=e=>{if(0===e)return"0 Bytes";const a=1024,t=2,l=["Bytes","KB","MB","GB","TB","PB","EB","ZB","YB"],r=Math.floor(Math.log(e)/Math.log(a));return`${parseFloat((e/Math.pow(a,r)).toFixed(t))} ${l[r]}`},r=async()=>{const{data:e}=await(0,m.Z)({url:"/image",method:"get",params:{page:1,limit:10}});a.form.list=e};return(0,n.bv)((()=>{r()})),{...(0,p.BK)(a),save:t,formatBytes:l}}});function w(e){e.__source="src/views/image/index.vue"}var g=t(83744);"function"===typeof w&&w(f);const b=(0,g.Z)(f,[["render",u]]);var y=b}}]);