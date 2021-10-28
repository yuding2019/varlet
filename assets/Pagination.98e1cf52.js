import{M as X}from"./index.d9b6be6d.js";import{R as Y}from"./index.931337ba.js";import{I as Z}from"./index.8afb1785.js";import{C as _}from"./index.043437d0.js";import{I as x}from"./index.2a06e007.js";import{q as ee,r as g,b as N,y as D,d as B,e as ae,o as m,c as b,i as C,a as z,B as J,m as c,h as V,M as K,t as v,F as L,j as O,l as E,w as q,k as ie,f as w}from"./vendor.ea41cd30.js";import{t as p,i as H}from"./shared.2d2ec151.js";import{p as le}from"./en-US.fc126591.js";import{_ as ne}from"./elevation.c2941a7c.js";const se={current:{type:[Number,String]},size:{type:[Number,String],default:10},total:{type:[Number,String],default:0},maxPagerCount:{type:Number,default:3},disabled:{type:Boolean,default:!1},simple:{type:Boolean,default:!0},showSizeChanger:{type:Boolean,default:!0},showQuickJumper:{type:Boolean,default:!1},sizeOption:{type:Array,default:()=>[10,20,50,100]},showTotal:{type:Function},onChange:{type:Function}};const te=ee({name:"VarPagination",components:{VarMenu:X,VarIcon:Z,VarCell:_,VarInput:x},directives:{Ripple:Y},props:se,setup(e){const l=g(!1),S=g(""),y=g("1"),h=g(!1),P=g(!1),n=g(p(e.current)||1),u=g(p(e.size)||10),M=g([]),$=N(()=>Math.ceil(e.maxPagerCount/2)),o=N(()=>Math.ceil(p(e.total)/p(u.value))),i=N(()=>{const a=u.value*(n.value-1)+1,s=Math.min(u.value*n.value,p(e.total));return[a,s]}),f=N(()=>e.showTotal?e.showTotal(p(e.total),i.value):""),j=(a,s)=>H(a)?!1:s===1?h.value:P.value,Q=(a,s)=>H(a)?"basic":s===1?"head":"tail",R=(a,s)=>{a===n.value||e.disabled||(H(a)?n.value=a:a==="prev"?n.value>1&&(n.value-=1):a==="next"?n.value<o.value&&(n.value+=1):a==="..."&&(s===1?n.value=Math.max(n.value-e.maxPagerCount,1):n.value=Math.min(n.value+e.maxPagerCount,o.value)))},A=()=>{e.disabled||(l.value=!0)},G=a=>{u.value=a,l.value=!1},F=a=>/^[1-9][0-9]*$/.test(a),W=(a,s,I)=>{if(I.target.blur(),F(s)){let k=p(s);k>o.value&&(k=o.value,y.value=`${k}`),k!==n.value&&(n.value=k)}a==="quick"&&(S.value=""),a==="simple"&&!F(s)&&(y.value=`${n.value}`)};return D([()=>e.current,()=>e.size],([a,s])=>{n.value=p(a)||1,u.value=p(s||10)}),D([n,o],([a,s],[I,k])=>{var U;if(a>s){n.value=s;return}let r=[];const{maxPagerCount:d}=e,T=s-(d-$.value)-1;if(y.value=`${a}`,s-2>d){if(I===void 0||s!==k)for(let t=2;t<d+2;t++)r.push(t);if(a<=d&&a<T){r=[];for(let t=1;t<d+1;t++)r.push(t+1);h.value=!0,P.value=!1}if(a>d&&a<T){r=[];for(let t=1;t<d+1;t++)r.push(a+t-$.value);h.value=a===2&&d===1,P.value=!1}if(a>=T){r=[];for(let t=1;t<d+1;t++)r.push(s-(d-t)-1);h.value=!1,P.value=!0}r=[1,"...",...r,"...",s]}else for(let t=1;t<=s;t++)r.push(t);M.value=r,I!==void 0&&((U=e.onChange)==null||U.call(e,a,u.value))},{immediate:!0}),{pack:le,current:n,menuVisible:l,size:u,pageCount:o,pageList:M,inputValue:S,simpleValue:y,totalText:f,getMode:Q,isHideEllipsis:j,clickItem:R,showMenu:A,clickSize:G,setPage:W,toNumber:p}}}),oe={class:"var-pagination"},re=["item-mode","onClick"],ue={key:4,class:"var-pagination__total"};function de(e,l,S,y,h,P){const n=B("var-icon"),u=B("var-input"),M=B("var-cell"),$=B("var-menu"),o=ae("ripple");return m(),b("ul",oe,[C(z("li",{class:c(["var-pagination__item var-pagination__prev",{"var-pagination__item-disabled":e.current<=1||e.disabled,"var-pagination__item-hover":e.simple,"var-elevation--2":!e.simple}]),onClick:l[0]||(l[0]=i=>e.clickItem("prev"))},[J(e.$slots,"prev",{},()=>[V(n,{name:"chevron-left"})])],2),[[o,{disabled:e.current<=1||e.disabled}]]),e.simple?(m(),b("li",{key:0,class:c(["var-pagination__simple",{"var-pagination__item-disabled":e.disabled}])},[V(u,{modelValue:e.simpleValue,"onUpdate:modelValue":l[1]||(l[1]=i=>e.simpleValue=i),disabled:e.disabled,"var-pagination-cover":"",onBlur:l[2]||(l[2]=i=>e.setPage("simple",e.simpleValue,i)),onKeydown:l[3]||(l[3]=K(i=>e.setPage("simple",e.simpleValue,i),["enter"]))},null,8,["modelValue","disabled"]),z("span",null,"/ "+v(e.pageCount),1)],2)):(m(!0),b(L,{key:1},O(e.pageList,(i,f)=>C((m(),b("li",{key:e.toNumber(i)+f,"item-mode":e.getMode(i,f),class:c(["var-pagination__item var-elevation--2",{"var-pagination__item-active":i===e.current&&!e.disabled,"var-pagination__item-hide":e.isHideEllipsis(i,f),"var-pagination__item-disabled":e.disabled,"var-pagination__item-disabled-active":i===e.current&&e.disabled}]),onClick:j=>e.clickItem(i,f)},[E(v(i),1)],10,re)),[[o,{disabled:e.disabled}]])),128)),C(z("li",{class:c(["var-pagination__item var-pagination__next",{"var-pagination__item-disabled":e.current>=e.pageCount||e.disabled,"var-pagination__item-hover":e.simple,"var-elevation--2":!e.simple}]),onClick:l[4]||(l[4]=i=>e.clickItem("next"))},[J(e.$slots,"next",{},()=>[V(n,{name:"chevron-right"})])],2),[[o,{disabled:e.current>=e.pageCount||e.disabled}]]),e.showSizeChanger?(m(),b("li",{key:2,class:c(["var-pagination__size",{"var-pagination__item-disabled":e.disabled}])},[V($,{show:e.menuVisible,"onUpdate:show":l[6]||(l[6]=i=>e.menuVisible=i),"offset-x":-4},{menu:q(()=>[(m(!0),b(L,null,O(e.sizeOption,(i,f)=>C((m(),ie(M,{class:c(["var-pagination__list",{"var-pagination__list-active":e.size===i}]),key:f,onClick:j=>e.clickSize(i)},{default:q(()=>[E(v(i)+v(e.pack.paginationItem)+" / "+v(e.pack.paginationPage),1)]),_:2},1032,["class","onClick"])),[[o]])),128))]),default:q(()=>[z("div",{class:"var-pagination__size-open",style:{display:"flex"},onClick:l[5]||(l[5]=(...i)=>e.showMenu&&e.showMenu(...i))},[z("span",null,v(e.size)+v(e.pack.paginationItem)+" / "+v(e.pack.paginationPage),1),V(n,{class:"var-pagination__size-open-icon","var-pagination-cover":"",name:"menu-down"})])]),_:1},8,["show"])],2)):w("v-if",!0),e.showQuickJumper&&!e.simple?(m(),b("li",{key:3,class:c(["var-pagination__quickly",{"var-pagination__item-disabled":e.disabled}])},[E(v(e.pack.paginationJump)+" ",1),V(u,{modelValue:e.inputValue,"onUpdate:modelValue":l[7]||(l[7]=i=>e.inputValue=i),disabled:e.disabled,"var-pagination-cover":"",onBlur:l[8]||(l[8]=i=>e.setPage("quick",e.inputValue,i)),onKeydown:l[9]||(l[9]=K(i=>e.setPage("quick",e.inputValue,i),["enter"]))},null,8,["modelValue","disabled"])],2)):w("v-if",!0),e.totalText?(m(),b("li",ue,v(e.totalText),1)):w("v-if",!0)])}var ye=ne(te,[["render",de]]);export{ye as P};