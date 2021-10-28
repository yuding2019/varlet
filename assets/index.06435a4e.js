var R=Object.defineProperty,W=Object.defineProperties;var Z=Object.getOwnPropertyDescriptors;var j=Object.getOwnPropertySymbols;var G=Object.prototype.hasOwnProperty,J=Object.prototype.propertyIsEnumerable;var M=(e,a,t)=>a in e?R(e,a,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[a]=t,D=(e,a)=>{for(var t in a||(a={}))G.call(a,t)&&M(e,t,a[t]);if(j)for(var t of j(a))J.call(a,t)&&M(e,t,a[t]);return e},O=(e,a)=>W(e,Z(a));import{A as Q}from"./AppType.44c77136.js";import{b as X,e as $,a as ee,f as ae}from"./components.c996eb06.js";import{d as A}from"./shared.2d2ec151.js";import{_ as B}from"./elevation.c2941a7c.js";import{q as z,b as P,y as T,o as L,c as U,B as k,z as w,r as N,d as V,a as p,i as le,v as te,m as x,l as d,t as u,h as n,p as oe,Z as ne,w as o}from"./vendor.ea41cd30.js";import{r as ie}from"./elements.1c3a8437.js";import{I as se}from"./index.8afb1785.js";import{B as de}from"./index.0d6951cf.js";import{u as re,a as H,_ as ue,b as ce,c as me,w as fe}from"./en-US.fc126591.js";import"./index.931337ba.js";import"./index.510439cf.js";import"./index.2bd4354e.js";const K=Symbol("COLLAPSE_BIND_COLLAPSE_ITEM_KEY"),Y=Symbol("COLLAPSE_COUNT_COLLAPSE_ITEM_KEY");function ve(){const{bindChildren:e,childProviders:a}=X(K),{length:t}=$(Y);return{length:t,collapseItem:a,bindCollapseItem:e}}const pe={modelValue:{type:[Array,String,Number]},accordion:{type:Boolean,default:!1},offset:{type:Boolean,default:!0},onChange:{type:Function},"onUpdate:modelValue":{type:Function}};const _e=z({name:"VarCollapse",props:pe,setup(e){const{length:a,collapseItem:t,bindCollapseItem:l}=ve(),m=P(()=>e.modelValue),C=P(()=>e.offset),c=()=>!e.accordion&&!A(e.modelValue)?(console.error('[Varlet] Collapse: type of prop "modelValue" should be an Array'),!1):e.accordion&&A(e.modelValue)?(console.error('[Varlet] Collapse: type of prop "modelValue" should be a String or Number'),!1):!0,r=(s,i)=>{if(!!c())return i?e.accordion?s:[...e.modelValue,s]:e.accordion?null:e.modelValue.filter(h=>h!==s)},_=(s,i)=>{var I,v;const h=r(s,i);(I=e["onUpdate:modelValue"])==null||I.call(e,h),(v=e.onChange)==null||v.call(e,h)},b=()=>{if(e.accordion)return t.find(({name:i})=>e.modelValue===i.value);const s=t.filter(({name:i})=>i.value===void 0?!1:e.modelValue.includes(i.value));return s.length?s:void 0},f=()=>e.accordion?t.find(({index:s,name:i})=>i.value===void 0?e.modelValue===s.value:!1):t.filter(({index:s,name:i})=>i.value===void 0?e.modelValue.includes(s.value):!1),g=()=>{if(!c())return;const s=b()||f();if(e.accordion&&!s||!e.accordion&&!s.length){t.forEach(i=>{i.init(e.accordion,!1)});return}t.forEach(i=>{const h=e.accordion?s===i:s.includes(i);i.init(e.accordion,h)})};l({active:m,offset:C,updateItem:_}),T(()=>a.value,()=>w().then(g)),T(()=>e.modelValue,()=>w().then(g))}}),Ce={class:"var-collapse"};function he(e,a,t,l,m,C){return L(),U("div",Ce,[k(e.$slots,"default")])}var y=B(_e,[["render",he]]);y.install=function(e){e.component(y.name,y)};function be(){const{parentProvider:e,bindParent:a}=ee(K),{index:t}=ae(Y);if(!e||!a||!t)throw Error("[Varlet] Collapse: <var-collapse-item/> must in <var-collapse>");return{index:t,collapse:e,bindCollapse:a}}const Ve={name:{type:[String,Number]},title:{type:String},icon:{type:String,default:"chevron-down"},disabled:{type:Boolean,default:!1}};const ge=z({name:"VarCollapseItem",components:{VarIcon:se},props:Ve,setup(e){const{index:a,collapse:t,bindCollapse:l}=be(),m=N(null),C=N(!1),c=N(!1),{active:r,offset:_,updateItem:b}=t,f=P(()=>e.name),g=(v,F)=>{r.value===void 0||v&&A(r.value)||F===c.value||(c.value=F,S(!0))},S=v=>{e.disabled||v||b(e.name||a.value,!c.value)},s=()=>{!m.value||(m.value.style.height="",C.value=!0,w(()=>{const{offsetHeight:v}=m.value;m.value.style.height=0+"px",ie(()=>{m.value.style.height=v+"px"})}))},i=()=>{!m.value||(m.value.style.height=0+"px")},h=()=>{c.value||(C.value=!1,m.value.style.height="")};return l({index:a,name:f,init:g}),T(c,v=>{v?s():i()}),{show:C,isShow:c,offset:_,toggle:S,contentEl:m,transitionend:h}}}),ke={class:"var-collapse-item-header__title"},ye={class:"var-collapse-item-header__icon"},Ee={class:"var-collapse-item__wrap"};function Se(e,a,t,l,m,C){const c=V("var-icon");return L(),U("div",{class:x({"var-collapse-item":!0,"var-collapse-item__active":e.offset&&e.isShow,"var-collapse-item__disable":e.disabled})},[p("div",{class:"var-collapse-item-header",onClick:a[0]||(a[0]=r=>e.toggle())},[p("div",ke,[k(e.$slots,"title",{},()=>[d(u(e.title),1)])]),p("div",ye,[k(e.$slots,"icon",{},()=>[n(c,{name:e.icon,transition:400,class:x({"var-collapse-item-header__icon":!0,"var-collapse-item-header__open":e.isShow&&e.icon==="chevron-down","var-collapse-item-header__disable":e.disabled})},null,8,["name","class"])])])]),le(p("div",{class:"var-collapse-item-content",ref:"contentEl",onTransitionend:a[1]||(a[1]=(...r)=>e.transitionend&&e.transitionend(...r))},[p("div",Ee,[k(e.$slots,"default")])],544),[[te,e.show]])],2)}var E=B(ge,[["render",Se]]);E.install=function(e){e.component(E.name,E)};var Ie={basicUsage:"\u57FA\u672C\u4F7F\u7528",hideMargin:"\u9690\u85CF\u8FB9\u8DDD",accordionMode:"\u624B\u98CE\u7434\u6A21\u5F0F",disabled:"\u7981\u7528",enable:"\u542F\u7528",customContent:"\u81EA\u5B9A\u4E49\u5185\u5BB9",title:"\u6807\u9898",text:"\u6587\u672C",slotTitle:"\u8FD9\u662F\u6807\u9898",slotContent:"\u8FD9\u662F\u5185\u5BB9"},Ae={basicUsage:"Basic Usage",hideMargin:"Hide Margin",accordionMode:"Accordion Mode",disabled:"Disabled",enable:"Enable",customContent:"Custom Content",title:"Title",text:"Hello World",slotTitle:"This is a Title",slotContent:"This is a content"};const{add:q,use:Be,pack:Pe,packs:Ze,merge:Ge}=re(),Te=e=>{me(e),Be(e)};H("zh-CN",ue);H("en-US",ce);q("zh-CN",Ie);q("en-US",Ae);const Le={name:"CollapseExample",components:{VarCollapse:y,VarCollapseItem:E,VarButton:de,AppType:Q},setup(){const e=oe({disabled:!1,value:["1"],value1:"",value2:[1],value3:["1"],value4:["2"]}),a=t=>{console.log(t)};return fe(Te),O(D({},ne(e)),{pack:Pe,changeHandle:a})}},Ue={class:"collapse-demo"},we=d("^_^");function Ne(e,a,t,l,m,C){const c=V("app-type"),r=V("var-collapse-item"),_=V("var-collapse"),b=V("var-button");return L(),U("div",Ue,[p("div",null,[n(c,null,{default:o(()=>[d(u(l.pack.basicUsage),1)]),_:1}),n(_,{modelValue:e.value,"onUpdate:modelValue":a[0]||(a[0]=f=>e.value=f),onChange:l.changeHandle},{default:o(()=>[n(r,{title:l.pack.title,name:"1"},{default:o(()=>[d(u(l.pack.text),1)]),_:1},8,["title"]),n(r,{title:l.pack.title,name:"2"},{default:o(()=>[d(u(l.pack.text),1)]),_:1},8,["title"])]),_:1},8,["modelValue","onChange"])]),p("div",null,[n(c,null,{default:o(()=>[d(u(l.pack.hideMargin),1)]),_:1}),n(_,{modelValue:e.value4,"onUpdate:modelValue":a[1]||(a[1]=f=>e.value4=f),offset:!1},{default:o(()=>[n(r,{title:l.pack.title,name:"1"},{default:o(()=>[d(u(l.pack.text),1)]),_:1},8,["title"]),n(r,{title:l.pack.title,name:"2"},{default:o(()=>[d(u(l.pack.text),1)]),_:1},8,["title"])]),_:1},8,["modelValue"])]),p("div",null,[n(c,null,{default:o(()=>[d(u(l.pack.accordionMode),1)]),_:1}),n(_,{modelValue:e.value1,"onUpdate:modelValue":a[2]||(a[2]=f=>e.value1=f),accordion:"",offset:!1},{default:o(()=>[n(r,{title:l.pack.title,name:"1"},{default:o(()=>[d(u(l.pack.text),1)]),_:1},8,["title"]),n(r,{title:l.pack.title,name:"2"},{default:o(()=>[d(u(l.pack.text),1)]),_:1},8,["title"])]),_:1},8,["modelValue"])]),p("div",null,[n(c,null,{default:o(()=>[d(u(l.pack.disabled),1)]),_:1}),n(b,{onClick:a[3]||(a[3]=f=>e.disabled=!e.disabled),style:{"margin-bottom":"8px"}},{default:o(()=>[d(u(e.disabled?l.pack.enable:l.pack.disabled),1)]),_:1}),n(_,{modelValue:e.value2,"onUpdate:modelValue":a[4]||(a[4]=f=>e.value2=f)},{default:o(()=>[n(r,{title:l.pack.title,name:1,disabled:e.disabled},{default:o(()=>[d(u(l.pack.text),1)]),_:1},8,["title","disabled"]),n(r,{title:l.pack.title,name:2,disabled:e.disabled},{default:o(()=>[d(u(l.pack.text),1)]),_:1},8,["title","disabled"])]),_:1},8,["modelValue"])]),p("div",null,[n(c,null,{default:o(()=>[d(u(l.pack.customContent),1)]),_:1}),n(_,{modelValue:e.value3,"onUpdate:modelValue":a[5]||(a[5]=f=>e.value3=f)},{default:o(()=>[n(r,{title:l.pack.slotTitle,name:"1",icon:"account-circle"},{default:o(()=>[d(u(l.pack.text),1)]),_:1},8,["title"]),n(r,{name:"2"},{title:o(()=>[d(u(l.pack.slotTitle),1)]),icon:o(()=>[we]),default:o(()=>[d(" "+u(l.pack.slotContent),1)]),_:1})]),_:1},8,["modelValue"])])])}var Je=B(Le,[["render",Ne]]);export{Je as default};
