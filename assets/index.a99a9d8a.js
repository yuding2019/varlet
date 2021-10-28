import{_ as C}from"./elevation.c2941a7c.js";import{q as z,o as i,c as d,a as h,B as p,n as B,f as y,m as E,l,t as n,r as b,d as u,e as R,h as o,w as a,F,V as w,W as N,j as I,i as P,k as U}from"./vendor.ea41cd30.js";import{I as M}from"./index.8afb1785.js";import{A as Y}from"./AppType.44c77136.js";import{R as O}from"./index.931337ba.js";import{S as D}from"./index.978366b7.js";import{M as $}from"./index.d9b6be6d.js";import{B as q}from"./index.0d6951cf.js";import{C as G}from"./index.043437d0.js";import{u as W,a as T,_ as H,b as J,c as K,w as Q}from"./en-US.fc126591.js";import"./shared.2d2ec151.js";import"./elements.1c3a8437.js";import"./index.510439cf.js";import"./index.2bd4354e.js";import"./zIndex.c624737f.js";import"./components.c996eb06.js";import"./lock.67e58c2a.js";function X(t){return["left","center","right"].includes(t)}const Z={color:{type:String},textColor:{type:String},title:{type:String},titlePosition:{type:String,default:"left",validator:X},elevation:{type:Boolean,default:!0}};const tt=z({name:"VarAppBar",props:Z}),et={class:"var-app-bar__left"},ot={key:0,class:"var-app-bar__title"},at={class:"var-app-bar__right"};function lt(t,s,S,e,g,A){return i(),d("div",{class:E(["var-app-bar",{"var-elevation--3":t.elevation}]),style:B({background:t.color,color:t.textColor})},[h("div",et,[p(t.$slots,"left"),t.titlePosition==="left"?(i(),d("div",{key:0,class:"var-app-bar__title",style:B({paddingLeft:t.$slots.left?0:void 0})},[p(t.$slots,"default",{},()=>[l(n(t.title),1)])],4)):y("v-if",!0)]),t.titlePosition==="center"?(i(),d("div",ot,[p(t.$slots,"default",{},()=>[l(n(t.title),1)])])):y("v-if",!0),h("div",at,[t.titlePosition==="right"?(i(),d("div",{key:0,class:"var-app-bar__title",style:B({paddingRight:t.$slots.right?0:void 0})},[p(t.$slots,"default",{},()=>[l(n(t.title),1)])],4)):y("v-if",!0),p(t.$slots,"right")])],6)}var k=C(tt,[["render",lt]]);k.install=function(t){t.component(k.name,k)};var nt={basicAppBar:"\u57FA\u7840\u5BFC\u822A\u680F",customStyle:"\u81EA\u5B9A\u4E49\u6837\u5F0F",addSlotsAtTitle:"\u6DFB\u52A0\u6807\u9898\u5904\u63D2\u69FD",addTheTitleFromTheSlot:"\u4ECE\u63D2\u69FD\u5904\u6DFB\u52A0\u6807\u9898",addLeftSlot:"\u6DFB\u52A0\u5DE6\u4FA7\u63D2\u69FD",title:"\u6807\u9898",addRightSlot:"\u6DFB\u52A0\u53F3\u4FA7\u63D2\u69FD",addLeftAndRightSlot:"\u6DFB\u52A0\u5DE6\u53F3\u63D2\u69FD",options1:"\u9009\u9879\u4E00",options2:"\u9009\u9879\u4E8C",search:"\u641C\u7D22",goBack:"\u8FD4\u56DE"},st={basicAppBar:"Basic AppBar",customStyle:"Custom Style",addSlotsAtTitle:"Add Slots At Title",addTheTitleFromTheSlot:"Add The Title From The Slot",addLeftSlot:"Add Left Slot",title:"Title",addRightSlot:"Add Right Slot",addLeftAndRightSlot:"Add Left And Right Slot",options1:"options1",options2:"options2",search:"search",goBack:"Go Back"};const{add:j,use:it,pack:f,packs:Lt,merge:Vt}=W(),rt=t=>{K(t),it(t)};T("zh-CN",H);T("en-US",J);j("zh-CN",nt);j("en-US",st);const ct={name:"AppBarExample",directives:{Ripple:O},components:{VarAppBar:k,VarIcon:M,VarMenu:$,VarButton:q,VarCell:G,AppType:Y},setup(){const t=b(!1),s=b([]),S=()=>{D({content:f.value.search,position:"top"})},e=()=>{D({content:f.value.goBack,position:"top"})},g=()=>{s.value=[{label:f.value.options1,value:"menu1"},{label:f.value.options2,value:"menu2"}],t.value=!0};return Q(A=>{rt(A),t.value=!1}),{offsetY:t,menuList:s,pack:f,searchData:S,goBack:e,changeOffset:g}}},dt=t=>(w("data-v-90c09652"),t=t(),N(),t),ut={class:"menu-list"},pt=dt(()=>h("div",{class:"space"},null,-1));function ft(t,s,S,e,g,A){const r=u("app-type"),c=u("var-app-bar"),m=u("var-icon"),_=u("var-button"),x=u("var-cell"),L=u("var-menu"),V=R("ripple");return i(),d(F,null,[o(r,null,{default:a(()=>[l(n(e.pack.basicAppBar),1)]),_:1}),o(c,{title:e.pack.title},null,8,["title"]),o(r,null,{default:a(()=>[l(n(e.pack.customStyle),1)]),_:1}),o(c,{title:e.pack.title,"title-position":"center",color:"#ff9f00"},null,8,["title"]),o(r,null,{default:a(()=>[l(n(e.pack.addSlotsAtTitle),1)]),_:1}),o(c,null,{default:a(()=>[l(n(e.pack.addTheTitleFromTheSlot),1)]),_:1}),o(r,null,{default:a(()=>[l(n(e.pack.addLeftSlot),1)]),_:1}),o(c,{title:e.pack.title,"title-position":"center"},{left:a(()=>[o(_,{round:"",text:"",color:"transparent","text-color":"#ffffff",onClick:e.goBack},{default:a(()=>[o(m,{name:"chevron-left",size:24})]),_:1},8,["onClick"])]),_:1},8,["title"]),o(r,null,{default:a(()=>[l(n(e.pack.addRightSlot),1)]),_:1}),o(c,{title:e.pack.title},{right:a(()=>[o(_,{round:"",text:"",color:"transparent","text-color":"#ffffff",onClick:e.searchData},{default:a(()=>[o(m,{name:"magnify",size:24})]),_:1},8,["onClick"])]),_:1},8,["title"]),o(r,null,{default:a(()=>[l(n(e.pack.addLeftAndRightSlot),1)]),_:1}),o(c,{title:e.pack.title},{left:a(()=>[o(_,{round:"",text:"",color:"transparent","text-color":"#ffffff",onClick:e.goBack},{default:a(()=>[o(m,{name:"chevron-left",size:24})]),_:1},8,["onClick"])]),right:a(()=>[o(L,{"offset-y":42,"offset-x":-20,show:e.offsetY,"onUpdate:show":s[0]||(s[0]=v=>e.offsetY=v)},{menu:a(()=>[h("div",ut,[(i(!0),d(F,null,I(e.menuList,v=>P((i(),U(x,{class:"menu-cell",key:v.value},{default:a(()=>[l(n(v.label),1)]),_:2},1536)),[[V]])),128))])]),default:a(()=>[o(_,{round:"",text:"",color:"transparent","text-color":"#ffffff",onClick:e.changeOffset},{default:a(()=>[o(m,{name:"menu",size:24})]),_:1},8,["onClick"])]),_:1},8,["show"])]),_:1},8,["title"]),pt],64)}var zt=C(ct,[["render",ft],["__scopeId","data-v-90c09652"]]);export{zt as default};
