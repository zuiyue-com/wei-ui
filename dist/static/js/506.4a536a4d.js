/*!
 *  build: Vue  Admin Plus
 *  copyright: vue-admin-beautiful.com
 *  time: 2023-10-12 09:18:53
 */
"use strict";(self["webpackChunkadmin_plus"]=self["webpackChunkadmin_plus"]||[]).push([[506],{506:function(e,d,t){t.r(d),t.d(d,{default:function(){return c}});var a=t(27977),o=(t(3241),t(40355),t(96872),t(15659)),n=(t(10444),t(66252)),i=t(3577);function r(e,d,t,r,s,l){const p=o.ElButton,u=a.p8,c=a.Ub;return(0,n.wg)(),(0,n.j4)(c,{"tab-position":"left"},{default:(0,n.w5)((()=>[(0,n.Wm)(u,{label:"添加动作"},{default:(0,n.w5)((()=>[((0,n.wg)(!0),(0,n.iD)(n.HY,null,(0,n.Ko)(e.nodeList,(d=>((0,n.wg)(),(0,n.iD)("div",{key:d.type},[(0,n.Wm)(p,{class:"add-node-btn",type:"primary",onClick:t=>e.$_addNode(d)},{default:(0,n.w5)((()=>[(0,n.Uk)((0,i.zw)(d.label),1)])),_:2},1032,["onClick"])])))),128))])),_:1}),(0,n.Wm)(u,{label:"添加组"},{default:(0,n.w5)((()=>[(0,n.Wm)(p,{class:"add-node-btn",type:"primary",onClick:e.$_addTempalte},{default:(0,n.w5)((()=>[(0,n.Uk)(" 模板 ")])),_:1},8,["onClick"])])),_:1})])),_:1})}var s=(0,n.aZ)({name:"AddPanel",props:{nodeData:{type:Object,default:()=>{}},lf:{type:Object||String,default:()=>{}}},emits:["addNodeFinish"],data(){return{nodeList:[{type:"user",label:"用户"},{type:"push",label:"推送"}]}},methods:{$_addNode(e){const{lf:d,nodeData:t}=this.$props,{id:a,x:o,y:n}=t,i=d.addNode({type:e.type,x:o+150,y:n+150}),r=i.id;d.createEdge({sourceNodeId:a,targetNodeId:r}),this.$emit("addNodeFinish")},$_addTempalte(){const{lf:e,nodeData:d}=this.$props,{id:t,x:a,y:o}=d,n=e.addNode({type:"download",x:a,y:o+150}),i=e.addNode({type:"user",x:a+150,y:o+150}),r=e.addNode({type:"push",x:a+150,y:o+300,properties:{}}),s=e.addNode({type:"end",x:a+300,y:o+150}),l=e.addNode({type:"end",x:a+300,y:o+300});e.createEdge({sourceNodeId:t,targetNodeId:n.id}),e.createEdge({sourceNodeId:n.id,targetNodeId:i.id}),e.createEdge({sourceNodeId:i.id,targetNodeId:s.id,endPoint:{x:a+280,y:o+150},text:{value:"Y",x:a+230,y:o+140}}),e.createEdge({sourceNodeId:i.id,targetNodeId:r.id,text:{value:"N",x:a+160,y:o+230}}),e.createEdge({sourceNodeId:r.id,targetNodeId:l.id,endPoint:{x:a+280,y:o+300}}),this.$emit("addNodeFinish")}}});function l(e){e.__source="src/views/other/workflow/components/lFComponents/AddPanel.vue"}var p=t(83744);"function"===typeof l&&l(s);const u=(0,p.Z)(s,[["render",r],["__scopeId","data-v-5ea176c8"]]);var c=u}}]);