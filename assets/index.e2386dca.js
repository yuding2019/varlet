var b=Object.defineProperty;var p=Object.getOwnPropertySymbols;var R=Object.prototype.hasOwnProperty,U=Object.prototype.propertyIsEnumerable;var V=(e,o,s)=>o in e?b(e,o,{enumerable:!0,configurable:!0,writable:!0,value:s}):e[o]=s,c=(e,o)=>{for(var s in o||(o={}))R.call(o,s)&&V(e,s,o[s]);if(p)for(var s of p(o))U.call(o,s)&&V(e,s,o[s]);return e};import{R as z}from"./index.506c6780.js";import{S as F}from"./index.978366b7.js";import{A as B}from"./AppType.44c77136.js";import{c as i}from"./index.510439cf.js";import{u as E,a as f,_ as S,b as v,c as I,d as k,w as y}from"./en-US.fc126591.js";import{_ as A}from"./elevation.c2941a7c.js";import{p as T,H as j,Z as N,d as g,o as w,c as O,h as a,w as d,F as H,l as t,t as m}from"./vendor.ea41cd30.js";import"./index.8afb1785.js";import"./shared.2d2ec151.js";import"./elements.1c3a8437.js";import"./provide.d55b06dc.js";import"./components.c996eb06.js";import"./index.931337ba.js";import"./index.2bd4354e.js";import"./zIndex.c624737f.js";import"./lock.67e58c2a.js";var P={baseRating:"\u57FA\u7840\u8BC4\u5206",customizeTheTotalNumberOfRatingICONS:"\u81EA\u5B9A\u4E49\u8BC4\u5206\u603B\u6570",customizeTheIconColor:"\u81EA\u5B9A\u4E49\u56FE\u6807\u989C\u8272",customizeRatingIconStyles:"\u81EA\u5B9A\u4E49\u8BC4\u5206\u56FE\u6807\u6837\u5F0F",customizeRatingIconSize:"\u81EA\u5B9A\u4E49\u8BC4\u5206\u56FE\u6807\u5C3A\u5BF8",customIconSpacing:"\u81EA\u5B9A\u4E49\u56FE\u6807\u95F4\u9694",useHalfAStar:"\u4F7F\u7528\u534A\u661F",disableTheRating:"\u7981\u7528\u8BC4\u5206",readonlyRating:"\u53EA\u8BFB\u8BC4\u5206",waterRippleIsProhibited:"\u7981\u6B62\u4F7F\u7528\u6C34\u6CE2\u7EB9",listeningForClickEvents:"\u76D1\u542C\u70B9\u51FB\u4E8B\u4EF6",validate:"\u5B57\u6BB5\u6821\u9A8C",rateMessage:"\u5FC5\u987B\u5927\u4E8E2"},h={baseRating:"Base Rating",customizeTheTotalNumberOfRatingICONS:"Customize The Total Number Of Rating ICONS",customizeTheIconColor:"Customize The Icon Color",customizeRatingIconStyles:"Customize Rating Icon Styles",customizeRatingIconSize:"Customize Rating Icon Size",customIconSpacing:"Custom Icon Spacing",useHalfAStar:"Use Half A Star",disableTheRating:"Disable The Rating",readonlyRating:"Readonly Rating",waterRippleIsProhibited:"Water ripple is prohibited",listeningForClickEvents:"Listening For Click Events",validate:"Validate",rateMessage:"It has to be greater than 2"};const{add:C,use:D,pack:L,packs:te,merge:me}=E(),M=e=>{I(e),D(e)};f("zh-CN",S);f("en-US",v);C("zh-CN",P);C("en-US",h);const W={name:"RateExample",components:{VarRate:z,AppType:B},setup(){const e=T({score:3,score1:3,score2:3,score3:3,score4:3,score5:3,score6:3.5,score7:3,score8:3,score9:3,score10:3,score11:3}),o=n=>{F({content:`click ${n}`,position:"top"})},s=i.touchmoveForbid;return k(n=>{n==="pc"&&(i.touchmoveForbid=!1)}),j(()=>{i.touchmoveForbid=s}),y(M),c({handleChange:o,pack:L},N(e))}};function Z(e,o,s,n,q,G){const r=g("app-type"),u=g("var-rate");return w(),O(H,null,[a(r,null,{default:d(()=>[t(m(n.pack.baseRating),1)]),_:1}),a(u,{modelValue:e.score,"onUpdate:modelValue":o[0]||(o[0]=l=>e.score=l)},null,8,["modelValue"]),a(r,null,{default:d(()=>[t(m(n.pack.customizeTheTotalNumberOfRatingICONS),1)]),_:1}),a(u,{modelValue:e.score1,"onUpdate:modelValue":o[1]||(o[1]=l=>e.score1=l),count:8},null,8,["modelValue"]),a(r,null,{default:d(()=>[t(m(n.pack.customizeTheIconColor),1)]),_:1}),a(u,{modelValue:e.score2,"onUpdate:modelValue":o[2]||(o[2]=l=>e.score2=l),color:"#9c27b0","empty-color":"#d199da"},null,8,["modelValue"]),a(u,{modelValue:e.score2,"onUpdate:modelValue":o[3]||(o[3]=l=>e.score2=l),color:"#e91e63","empty-color":"#f48fb1"},null,8,["modelValue"]),a(u,{modelValue:e.score2,"onUpdate:modelValue":o[4]||(o[4]=l=>e.score2=l),color:"#4caf50","empty-color":"#a5d6a7"},null,8,["modelValue"]),a(u,{modelValue:e.score2,"onUpdate:modelValue":o[5]||(o[5]=l=>e.score2=l),color:"#3f51b5","empty-color":"#9fa8da"},null,8,["modelValue"]),a(r,null,{default:d(()=>[t(m(n.pack.customizeRatingIconStyles),1)]),_:1}),a(u,{modelValue:e.score3,"onUpdate:modelValue":o[6]||(o[6]=l=>e.score3=l),icon:"heart","empty-icon":"heart-outline",color:"red"},null,8,["modelValue"]),a(r,null,{default:d(()=>[t(m(n.pack.customizeRatingIconSize),1)]),_:1}),a(u,{modelValue:e.score4,"onUpdate:modelValue":o[7]||(o[7]=l=>e.score4=l),size:16},null,8,["modelValue"]),a(u,{modelValue:e.score4,"onUpdate:modelValue":o[8]||(o[8]=l=>e.score4=l),size:18},null,8,["modelValue"]),a(u,{modelValue:e.score4,"onUpdate:modelValue":o[9]||(o[9]=l=>e.score4=l),size:20},null,8,["modelValue"]),a(u,{modelValue:e.score4,"onUpdate:modelValue":o[10]||(o[10]=l=>e.score4=l)},null,8,["modelValue"]),a(r,null,{default:d(()=>[t(m(n.pack.customIconSpacing),1)]),_:1}),a(u,{modelValue:e.score5,"onUpdate:modelValue":o[11]||(o[11]=l=>e.score5=l),gap:2},null,8,["modelValue"]),a(u,{modelValue:e.score5,"onUpdate:modelValue":o[12]||(o[12]=l=>e.score5=l)},null,8,["modelValue"]),a(u,{modelValue:e.score5,"onUpdate:modelValue":o[13]||(o[13]=l=>e.score5=l),gap:6},null,8,["modelValue"]),a(u,{modelValue:e.score5,"onUpdate:modelValue":o[14]||(o[14]=l=>e.score5=l),gap:8},null,8,["modelValue"]),a(r,null,{default:d(()=>[t(m(n.pack.useHalfAStar),1)]),_:1}),a(u,{modelValue:e.score6,"onUpdate:modelValue":o[15]||(o[15]=l=>e.score6=l),count:8,half:""},null,8,["modelValue"]),a(u,{modelValue:e.score6,"onUpdate:modelValue":o[16]||(o[16]=l=>e.score6=l),count:8,icon:"heart","half-icon":"heart-half-full","empty-icon":"heart-outline",color:"red",half:""},null,8,["modelValue"]),a(r,null,{default:d(()=>[t(m(n.pack.disableTheRating),1)]),_:1}),a(u,{modelValue:e.score7,"onUpdate:modelValue":o[17]||(o[17]=l=>e.score7=l),disabled:"","disabled-color":"#bbbbbb"},null,8,["modelValue"]),a(r,null,{default:d(()=>[t(m(n.pack.readonlyRating),1)]),_:1}),a(u,{modelValue:e.score8,"onUpdate:modelValue":o[18]||(o[18]=l=>e.score8=l),readonly:""},null,8,["modelValue"]),a(r,null,{default:d(()=>[t(m(n.pack.waterRippleIsProhibited),1)]),_:1}),a(u,{modelValue:e.score9,"onUpdate:modelValue":o[19]||(o[19]=l=>e.score9=l),ripple:!1},null,8,["modelValue"]),a(r,null,{default:d(()=>[t(m(n.pack.listeningForClickEvents),1)]),_:1}),a(u,{modelValue:e.score10,"onUpdate:modelValue":o[20]||(o[20]=l=>e.score10=l),onChange:n.handleChange},null,8,["modelValue","onChange"]),a(r,null,{default:d(()=>[t(m(n.pack.validate),1)]),_:1}),a(u,{rules:[l=>l>=3||n.pack.rateMessage],modelValue:e.score11,"onUpdate:modelValue":o[21]||(o[21]=l=>e.score11=l)},null,8,["rules","modelValue"])],64)}var ie=A(W,[["render",Z],["__scopeId","data-v-16f5da90"]]);export{ie as default};
