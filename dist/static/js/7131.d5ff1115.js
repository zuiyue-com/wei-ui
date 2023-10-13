/*!
 *  build: Vue  Admin Plus
 *  copyright: vue-admin-beautiful.com
 *  time: 2023-10-12 09:18:53
 */
"use strict";(self["webpackChunkadmin_plus"]=self["webpackChunkadmin_plus"]||[]).push([[7131],{7131:function(e,t,l){l.r(t),l.d(t,{default:function(){return g}});var a=l(91194),u=(l(3241),l(2993),l(12694)),n=(l(85418),l(32590),l(20129)),r=(l(69840),l(15659)),o=(l(10444),l(6589),l(57018)),i=(l(74367),l(66263)),m=(l(33790),l(85915)),s=(l(57109),l(66252)),d=l(3577);const c={class:"detail-container"},w=(0,s._)("i",{class:"el-icon-office-building"},null,-1);function f(e,t,l,f,p,b){const k=m.Xh,y=i.v,h=o.EZ,v=n.nH,W=r.ElButton,_=n.ly,U=a.QQ,q=u.xk,V=a.Lf,g=(0,s.up)("vab-json-viewer");return(0,s.wg)(),(0,s.iD)("div",c,[(0,s.Wm)(k,{content:"【"+e.title+"】详情页面",onBack:e.goBack},null,8,["content","onBack"]),(0,s.Wm)(y,{closable:!1,"show-icon":"",title:"详情页菜单高亮，并缓存详情页，返回上一页再次打开可看到效果，dynamicNewTab可配置详情页只打开一个tab页还是可以根据参数不同无限打开多个，当前展示的是可以打开多个",type:"success"}),(0,s.Wm)(_,{inline:"",model:e.form},{default:(0,s.w5)((()=>[(0,s.Wm)(v,{label:"输入框缓存"},{default:(0,s.w5)((()=>[(0,s.Wm)(h,{modelValue:e.form.text,"onUpdate:modelValue":t[0]||(t[0]=t=>e.form.text=t)},null,8,["modelValue"])])),_:1}),(0,s.Wm)(v,{"label-width":0},{default:(0,s.w5)((()=>[(0,s.Wm)(W,{icon:e.Refresh,type:"primary",onClick:e.handleRefreshMainPage},{default:(0,s.w5)((()=>[(0,s.Uk)(" 刷新综合表格页面 ")])),_:1},8,["icon","onClick"])])),_:1})])),_:1},8,["model"]),(0,s.Wm)(V,{border:"",column:3,title:"详情"},{extra:(0,s.w5)((()=>[(0,s.Wm)(W,{size:"small",type:"primary"},{default:(0,s.w5)((()=>[(0,s.Uk)("操作")])),_:1})])),default:(0,s.w5)((()=>[(0,s.Wm)(U,null,{label:(0,s.w5)((()=>[(0,s.Uk)("标题")])),default:(0,s.w5)((()=>[(0,s.Uk)(" "+(0,d.zw)(e.route.query.title),1)])),_:1}),(0,s.Wm)(U,null,{label:(0,s.w5)((()=>[(0,s.Uk)("作者")])),default:(0,s.w5)((()=>[(0,s.Uk)(" "+(0,d.zw)(e.route.query.author),1)])),_:1}),(0,s.Wm)(U,null,{label:(0,s.w5)((()=>[(0,s.Uk)("时间")])),default:(0,s.w5)((()=>[(0,s.Uk)(" "+(0,d.zw)(e.route.query.datetime),1)])),_:1}),(0,s.Wm)(U,null,{label:(0,s.w5)((()=>[(0,s.Uk)("评级")])),default:(0,s.w5)((()=>[(0,s.Wm)(q,{modelValue:e.route.query.rate,"onUpdate:modelValue":t[1]||(t[1]=t=>e.route.query.rate=t),disabled:""},null,8,["modelValue"])])),_:1}),(0,s.Wm)(U,null,{label:(0,s.w5)((()=>[(0,s.Uk)("备注")])),default:(0,s.w5)((()=>[(0,s.Uk)(" "+(0,d.zw)(e.route.query.description),1)])),_:1}),(0,s.Wm)(U,null,{label:(0,s.w5)((()=>[w,(0,s.Uk)(" 联系地址 ")])),default:(0,s.w5)((()=>[(0,s.Uk)(" 江苏省苏州市吴中区吴中大道 1188 号 ")])),_:1})])),_:1}),(0,s.Wm)(g,{copyable:"","expand-depth":5,sort:"",value:e.route},null,8,["value"])])}l(57658);var p=l(91536),b=l(19635),k=l(90699),y=l.n(k),h=l(65781),v=l(2262),W=l(22201),_=(0,s.aZ)({name:"Detail",components:{VabJsonViewer:y()},setup(){const e=(0,W.yj)(),t=(0,W.tv)(),l=(0,s.f3)("$pub"),a=(0,p.I)(),{changeTabsMeta:u,delVisitedRoute:n}=a,r=(0,v.qj)({route:{query:{title:"加载中"}},rate:0,form:{text:""},title:"加载中"}),o=async()=>{await t.push("/vab/table/comprehensiveTable"),await n((0,b.HX)(e,!0))},i=()=>{l("reload-router-view","ComprehensiveTable")};return(0,s.bv)((()=>{u({title:"详情页",meta:{title:`${e.query.title} 详情页`}}),r.title=e.query.title,r.route={path:e.path,params:e.params,query:{...e.query,rate:parseInt(e.query.rate)},name:e.name,meta:e.meta}})),{...(0,v.BK)(r),goBack:o,handleRefreshMainPage:i,Refresh:h.Refresh}}});function U(e){e.__source="src/views/vab/table/detail.vue"}var q=l(83744);"function"===typeof U&&U(_);const V=(0,q.Z)(_,[["render",f]]);var g=V}}]);