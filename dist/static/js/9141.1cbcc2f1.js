/*!
 *  build: Vue  Admin Plus
 *  copyright: vue-admin-beautiful.com
 *  time: 2023-10-12 09:18:53
 */
"use strict";(self["webpackChunkadmin_plus"]=self["webpackChunkadmin_plus"]||[]).push([[9141],{16273:function(e,l,o){o.d(l,{Z:function(){return h}});var n=o(30032),t=(o(3241),o(91154),o(97830)),c=(o(13768),o(66252)),i=o(2262),a=o(3577),s=o(22201),r=(0,c.aZ)({__name:"index",props:{header:{type:String,default:""},bodyStyle:{type:Object,default:()=>({})},shadow:{type:String,default:""},skeleton:{type:Boolean,default:!1},skeletonRows:{type:Number,default:4}},setup(e){let l=null;const o=(0,i.iH)(!0);return l=setTimeout((()=>{o.value=!1}),500),(0,s.iS)(((e,o,n)=>{clearInterval(l),n()})),(l,s)=>{const r=t.vk,d=n.Kf;return(0,c.wg)(),(0,c.j4)(d,{"body-style":e.bodyStyle,class:"vab-card",shadow:e.shadow},(0,c.Nv)({default:(0,c.w5)((()=>[e.skeleton?((0,c.wg)(),(0,c.j4)(r,{key:0,animated:"",loading:(0,i.SU)(o),rows:e.skeletonRows},{default:(0,c.w5)((()=>[(0,c.WI)(l.$slots,"default",{class:"vab-card-transition"})])),_:3},8,["loading","rows"])):(0,c.WI)(l.$slots,"default",{key:1,class:"vab-card-transition"})])),_:2},[l.$slots.header||e.header?{name:"header",fn:(0,c.w5)((()=>[(0,c.WI)(l.$slots,"header",{},(()=>[(0,c.Uk)((0,a.zw)(e.header),1)]))])),key:"0"}:void 0]),1032,["body-style","shadow"])}}});function d(e){e.__source="library/components/VabCard/index.vue"}var u=o(83744);"function"===typeof d&&d(r);const f=(0,u.Z)(r,[["__scopeId","data-v-391150ea"]]);var h=f},99141:function(e,l,o){o.r(l),o.d(l,{default:function(){return b}});var n=o(22040),t=(o(3241),o(99426),o(66252)),c=o(2262),i=o(3577),a=o(25498),s=(0,t.aZ)({__name:"index",props:{to:{type:String,required:!0}},setup(e){const l=e,o=(0,t.Fl)((()=>(0,a.b9)(l.to)?"a":"router-link")),n=()=>(0,a.b9)(l.to)?{href:l.to,target:"_blank",rel:"noopener"}:{to:l.to};return(e,l)=>((0,t.wg)(),(0,t.j4)((0,t.LL)((0,c.SU)(o)),(0,i.vs)((0,t.F4)(n())),{default:(0,t.w5)((()=>[(0,t.WI)(e.$slots,"default")])),_:3},16))}});function r(e){e.__source="library/components/VabLink/index.vue"}"function"===typeof r&&r(s);const d=s;var u=d,f=o(91557),h=(o(35635),o(16273));function p(e,l,o,c,a,s){const r=(0,t.up)("vab-icon"),d=h.Z,p=f.dQ,k=u,w=n.Dv;return(0,t.wg)(!0),(0,t.iD)(t.HY,null,(0,t.Ko)(e.iconList,((l,o)=>((0,t.wg)(),(0,t.j4)(w,{key:o,lg:3,md:3,sm:6,xl:3,xs:12},{default:(0,t.w5)((()=>[l.click&&"changeTheme"===l.click?((0,t.wg)(),(0,t.j4)(d,{key:0,class:"icon-panel",shadow:"hover",onClick:e.changeTheme},{default:(0,t.w5)((()=>[(0,t.Wm)(r,{icon:l.icon,style:(0,i.j5)({color:l.color})},null,8,["icon","style"]),(0,t._)("p",null,(0,i.zw)(l.title),1)])),_:2},1032,["onClick"])):l.click&&"randomTheme"===l.click?((0,t.wg)(),(0,t.j4)(d,{key:1,class:"icon-panel",shadow:"hover",onClick:e.randomTheme},{default:(0,t.w5)((()=>[(0,t.Wm)(p,{value:"点我"},{default:(0,t.w5)((()=>[(0,t.Wm)(r,{icon:l.icon,style:(0,i.j5)({color:l.color})},null,8,["icon","style"])])),_:2},1024),(0,t._)("p",null,(0,i.zw)(l.title),1)])),_:2},1032,["onClick"])):l.click&&"handleUpdate"===l.click?((0,t.wg)(),(0,t.j4)(d,{key:2,class:"icon-panel",shadow:"hover",onClick:e.handleUpdate},{default:(0,t.w5)((()=>[(0,t.Wm)(r,{icon:l.icon,style:(0,i.j5)({color:l.color})},null,8,["icon","style"]),(0,t._)("p",null,(0,i.zw)(l.title),1)])),_:2},1032,["onClick"])):l.click&&"handleMore"===l.click?((0,t.wg)(),(0,t.j4)(d,{key:3,class:"icon-panel",shadow:"hover",onClick:e.handleMore},{default:(0,t.w5)((()=>[(0,t.Wm)(r,{icon:l.icon,style:(0,i.j5)({color:l.color})},null,8,["icon","style"]),(0,t._)("p",null,(0,i.zw)(l.title),1)])),_:2},1032,["onClick"])):((0,t.wg)(),(0,t.j4)(k,{key:4,to:l.link},{default:(0,t.w5)((()=>[(0,t.Wm)(d,{class:"icon-panel",shadow:"hover"},{default:(0,t.w5)((()=>[(0,t.Wm)(r,{icon:l.icon,style:(0,i.j5)({color:l.color})},null,8,["icon","style"]),(0,t._)("p",null,(0,i.zw)(l.title),1)])),_:2},1024)])),_:2},1032,["to"]))])),_:2},1024)))),128)}var k=(0,t.aZ)({setup(){const e=(0,t.f3)("$pub"),l=(0,t.f3)("$baseAlert"),o=[{click:"randomTheme",icon:"apps-line",title:"随机换肤",link:"",color:"#95de64"},{click:"changeTheme",icon:"brush-2-line",title:"主题配置",link:"",color:"#69c0ff"},{click:"handleUpdate",icon:"upload-cloud-2-line",title:"网站升级",link:"",color:"#ffd666"},{icon:"baidu-line",title:"百度一下",link:"https://www.baidu.com/s?ie=utf-8&f=8&rsv_bp=1&tn=baidu&wd=Vue%20Admin%20Plus%E5%AE%98%E7%BD%91%E3%80%81%E9%A6%96%E9%A1%B5%E3%80%81%E6%96%87%E6%A1%A3%E5%92%8C%E4%B8%8B%E8%BD%BD%20-%20%E5%89%8D%E7%AB%AF%E5%BC%80%E5%8F%91%E6%A1%86%E6%9E%B6&oq=Vue%20Admin%20Plus%E5%AE%98%E7%BD%91%E3%80%81%E9%A6%96%E9%A1%B5%E3%80%81%E6%96%87%E6%A1%A3%E5%92%8C%E4%B8%8B%E8%BD%BD%20-%20%E5%89%8D%E7%AB%AF%E5%BC%80%E5%8F%91%E6%A1%86%E6%9E%B6&rsv_pq=cbfffef5003538e3&rsv_t=7d18Juf2uB00iQ%2B1DZbwHAT5xZC5dEDts2s%2F2UFpt3nBojO%2FncoD0L3hDTw&rqlang=cn&rsv_enter=1&rsv_dl=tb&si=vue-admin-beautiful.com&ct=2097152",color:"#1890FF"},{icon:"video-line",title:"视频播放器",link:"/other/player",color:"#ffc069"},{icon:"table-line",title:"表格",link:"/vab/table/comprehensiveTable",color:"#5cdbd3"},{icon:"code-box-line",title:"源码",link:"https://github.com/chuzhixin",color:"#b37feb"},{click:"handleMore",icon:"notification-2-line",title:"公告",link:"",color:"#ff85c0"}],n=()=>{e("theme")},c=()=>{e("vab-update")},i=()=>{l("敬请期待！")},a=()=>{e("random-theme")};return{iconList:o,changeTheme:n,handleUpdate:c,handleMore:i,randomTheme:a}}});function w(e){e.__source="src/views/index/components/IconList.vue"}var m=o(83744);"function"===typeof w&&w(k);const v=(0,m.Z)(k,[["render",p],["__scopeId","data-v-05c8306d"]]);var b=v}}]);