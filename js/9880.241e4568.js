(self.webpackChunk_varlet_ui=self.webpackChunk_varlet_ui||[]).push([[9880],{5042:(n,e,t)=>{"use strict";t.d(e,{Z:()=>y});var a=t(7875),o=t(4825),r=t(7757),p=t.n(r),i=t(2137),u=t(641),c={show:{type:Boolean,default:!1},alignment:{type:String,default:"top",validator:function(n){return["top","bottom"].includes(n)}},offsetX:{type:[Number,String],default:0},offsetY:{type:[Number,String],default:0},teleport:{default:"body"},onOpen:{type:Function},onOpened:{type:Function},onClose:{type:Function},onClosed:{type:Function},"onUpdate:show":{type:Function}},s=t(7276),l=t(6975);const f=(0,a.aZ)({name:"VarMenu",props:c,setup:function(n){var e=(0,u.iH)(null),t=(0,u.iH)(null),o=(0,u.iH)(0),r=(0,u.iH)(0),c=(0,l.C)((function(){return n.show}),1).zIndex,f=!1,x=function(){var e;f?f=!1:n.show&&(null===(e=n["onUpdate:show"])||void 0===e||e.call(n,!1))},d=function(){o.value="top"===n.alignment?(0,s.vF)(e.value):(0,s.vF)(e.value)-t.value.offsetHeight,r.value=(0,s.IS)(e.value)};return(0,a.YP)((function(){return n.alignment}),d),(0,a.YP)((function(){return n.show}),function(){var e=(0,i.Z)(p().mark((function e(t){var o,r;return p().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return o=n.onOpen,r=n.onClose,e.next=3,(0,a.Y3)();case 3:t&&d(),t?null==o||o():null==r||r();case 5:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}()),(0,a.bv)((function(){d(),document.addEventListener("click",x),window.addEventListener("resize",d)})),(0,a.Ah)((function(){document.removeEventListener("click",x),window.removeEventListener("resize",d)})),{zIndex:c,host:e,menu:t,top:o,left:r,toSizeUnit:s.gI,handleClick:function(){f=!0},resize:d}}});var x=t(6062),d=t.n(x),m=t(7515);d()(m.Z,{insert:"head",singleton:!1}),m.Z.locals,f.render=function(n,e,t,r,p,i){return(0,a.wg)(),(0,a.j4)("div",{class:"var-menu",ref:"host",onClick:e[2]||(e[2]=function(){return n.handleClick&&n.handleClick.apply(n,arguments)})},[(0,a.WI)(n.$slots,"default"),((0,a.wg)(),(0,a.j4)(a.lR,{to:n.teleport},[(0,a.Wm)(o.uT,{name:"var-menu",onAfterEnter:n.onOpened,onAfterLeave:n.onClosed},{default:(0,a.w5)((function(){return[(0,a.wy)((0,a.Wm)("div",{class:"var-menu__menu var-elevation--3",ref:"menu",style:{top:"calc(".concat(n.top,"px + ").concat(n.toSizeUnit(n.offsetY),")"),left:"calc(".concat(n.left,"px + ").concat(n.toSizeUnit(n.offsetX),")"),zIndex:n.zIndex},onClick:e[1]||(e[1]=(0,o.iM)((function(){}),["stop"]))},[(0,a.WI)(n.$slots,"menu")],4),[[o.F8,n.show]])]})),_:3},8,["onAfterEnter","onAfterLeave"])],8,["to"]))],512)};const v=f;v.install=function(n){n.component(v.name,v)};const y=v},7515:(n,e,t)=>{"use strict";t.d(e,{Z:()=>r});var a=t(2609),o=t.n(a)()((function(n){return n[1]}));o.push([n.id,".var--box {\n  box-sizing: border-box;\n}\n.var--box * {\n  box-sizing: border-box;\n}\n.var--relative {\n  position: relative;\n}\n.var--absolute {\n  position: absolute;\n}\n.var--hidden {\n  overflow: hidden;\n}\n.var--lock {\n  overflow: hidden;\n}\n.var--block {\n  display: block;\n}\n.var--inline-block {\n  display: inline-block;\n}\n.var--flex {\n  display: flex;\n}\n.var--inline-flex {\n  display: inline-flex;\n}\n:root {\n  --font-size-xs: 10px;\n  --font-size-sm: 12px;\n  --font-size-md: 14px;\n  --font-size-lg: 16px;\n  --icon-size-xs: 16px;\n  --icon-size-sm: 18px;\n  --icon-size-md: 20px;\n  --icon-size-lg: 22px;\n  --color-primary: #3a7afe;\n  --color-info: #00afef;\n  --color-success: #00c48f;\n  --color-warning: #ff9f00;\n  --color-danger: #f44336;\n  --color-disabled: #e0e0e0;\n  --cubic-bezier: cubic-bezier(0.25, 0.8, 0.5, 1);\n  --shadow-key-umbra-opacity: rgba(0, 0, 0, 0.2);\n  --shadow-key-penumbra-opacity: rgba(0, 0, 0, 0.14);\n  --shadow-key-ambient-opacity: rgba(0, 0, 0, 0.12);\n}\n.var-elevation--0 {\n  box-shadow: 0 0 0 0 var(--shadow-key-umbra-opacity), 0 0 0 0 var(--shadow-key-penumbra-opacity), 0 0 0 0 var(--shadow-key-ambient-opacity);\n}\n.var-elevation--1 {\n  box-shadow: 0 2px 1px -1px var(--shadow-key-umbra-opacity), 0 1px 1px 0 var(--shadow-key-penumbra-opacity), 0 1px 3px 0 var(--shadow-key-ambient-opacity);\n}\n.var-elevation--2 {\n  box-shadow: 0 3px 1px -2px var(--shadow-key-umbra-opacity), 0 2px 2px 0 var(--shadow-key-penumbra-opacity), 0 1px 5px 0 var(--shadow-key-ambient-opacity);\n}\n.var-elevation--3 {\n  box-shadow: 0 3px 3px -2px var(--shadow-key-umbra-opacity), 0 3px 4px 0 var(--shadow-key-penumbra-opacity), 0 1px 8px 0 var(--shadow-key-ambient-opacity);\n}\n.var-elevation--4 {\n  box-shadow: 0 2px 4px -1px var(--shadow-key-umbra-opacity), 0 4px 5px 0 var(--shadow-key-penumbra-opacity), 0 1px 10px 0 var(--shadow-key-ambient-opacity);\n}\n.var-elevation--5 {\n  box-shadow: 0 3px 5px -1px var(--shadow-key-umbra-opacity), 0 5px 8px 0 var(--shadow-key-penumbra-opacity), 0 1px 14px 0 var(--shadow-key-ambient-opacity);\n}\n.var-elevation--6 {\n  box-shadow: 0 3px 5px -1px var(--shadow-key-umbra-opacity), 0 6px 10px 0 var(--shadow-key-penumbra-opacity), 0 1px 18px 0 var(--shadow-key-ambient-opacity);\n}\n.var-elevation--7 {\n  box-shadow: 0 4px 5px -2px var(--shadow-key-umbra-opacity), 0 7px 10px 1px var(--shadow-key-penumbra-opacity), 0 2px 16px 1px var(--shadow-key-ambient-opacity);\n}\n.var-elevation--8 {\n  box-shadow: 0 5px 5px -3px var(--shadow-key-umbra-opacity), 0 8px 10px 1px var(--shadow-key-penumbra-opacity), 0 3px 14px 2px var(--shadow-key-ambient-opacity);\n}\n.var-elevation--9 {\n  box-shadow: 0 5px 6px -3px var(--shadow-key-umbra-opacity), 0 9px 12px 1px var(--shadow-key-penumbra-opacity), 0 3px 16px 2px var(--shadow-key-ambient-opacity);\n}\n.var-elevation--10 {\n  box-shadow: 0 6px 6px -3px var(--shadow-key-umbra-opacity), 0 10px 14px 1px var(--shadow-key-penumbra-opacity), 0 4px 18px 3px var(--shadow-key-ambient-opacity);\n}\n.var-elevation--11 {\n  box-shadow: 0 6px 7px -4px var(--shadow-key-umbra-opacity), 0 11px 15px 1px var(--shadow-key-penumbra-opacity), 0 4px 20px 3px var(--shadow-key-ambient-opacity);\n}\n.var-elevation--12 {\n  box-shadow: 0 7px 8px -4px var(--shadow-key-umbra-opacity), 0 12px 17px 2px var(--shadow-key-penumbra-opacity), 0 5px 22px 4px var(--shadow-key-ambient-opacity);\n}\n.var-elevation--13 {\n  box-shadow: 0 7px 8px -4px var(--shadow-key-umbra-opacity), 0 13px 19px 2px var(--shadow-key-penumbra-opacity), 0 5px 24px 4px var(--shadow-key-ambient-opacity);\n}\n.var-elevation--14 {\n  box-shadow: 0 7px 9px -4px var(--shadow-key-umbra-opacity), 0 14px 21px 2px var(--shadow-key-penumbra-opacity), 0 5px 26px 4px var(--shadow-key-ambient-opacity);\n}\n.var-elevation--15 {\n  box-shadow: 0 8px 9px -5px var(--shadow-key-umbra-opacity), 0 15px 22px 2px var(--shadow-key-penumbra-opacity), 0 6px 28px 5px var(--shadow-key-ambient-opacity);\n}\n.var-elevation--16 {\n  box-shadow: 0 8px 10px -5px var(--shadow-key-umbra-opacity), 0 16px 24px 2px var(--shadow-key-penumbra-opacity), 0 6px 30px 5px var(--shadow-key-ambient-opacity);\n}\n.var-elevation--17 {\n  box-shadow: 0 8px 11px -5px var(--shadow-key-umbra-opacity), 0 17px 26px 2px var(--shadow-key-penumbra-opacity), 0 6px 32px 5px var(--shadow-key-ambient-opacity);\n}\n.var-elevation--18 {\n  box-shadow: 0 9px 11px -5px var(--shadow-key-umbra-opacity), 0 18px 28px 2px var(--shadow-key-penumbra-opacity), 0 7px 34px 6px var(--shadow-key-ambient-opacity);\n}\n.var-elevation--19 {\n  box-shadow: 0 9px 12px -6px var(--shadow-key-umbra-opacity), 0 19px 29px 2px var(--shadow-key-penumbra-opacity), 0 7px 36px 6px var(--shadow-key-ambient-opacity);\n}\n.var-elevation--20 {\n  box-shadow: 0 10px 13px -6px var(--shadow-key-umbra-opacity), 0 20px 31px 3px var(--shadow-key-penumbra-opacity), 0 8px 38px 7px var(--shadow-key-ambient-opacity);\n}\n.var-elevation--21 {\n  box-shadow: 0 10px 13px -6px var(--shadow-key-umbra-opacity), 0 21px 33px 3px var(--shadow-key-penumbra-opacity), 0 8px 40px 7px var(--shadow-key-ambient-opacity);\n}\n.var-elevation--22 {\n  box-shadow: 0 10px 14px -6px var(--shadow-key-umbra-opacity), 0 22px 35px 3px var(--shadow-key-penumbra-opacity), 0 8px 42px 7px var(--shadow-key-ambient-opacity);\n}\n.var-elevation--23 {\n  box-shadow: 0 11px 14px -7px var(--shadow-key-umbra-opacity), 0 23px 36px 3px var(--shadow-key-penumbra-opacity), 0 9px 44px 8px var(--shadow-key-ambient-opacity);\n}\n.var-elevation--24 {\n  box-shadow: 0 11px 15px -7px var(--shadow-key-umbra-opacity), 0 24px 38px 3px var(--shadow-key-penumbra-opacity), 0 9px 46px 8px var(--shadow-key-ambient-opacity);\n}\n:root {\n  --menu-background: #fff;\n}\n.var-menu-enter-from,\n.var-menu-leave-to {\n  transform: scale(0.8);\n  opacity: 0;\n}\n.var-menu-enter-active,\n.var-menu-leave-active {\n  transition-property: opacity, transform;\n  transition-duration: 0.25s;\n}\n.var-menu {\n  display: inline-block;\n  background: var(--menu-background);\n}\n.var-menu__menu {\n  position: absolute;\n}\n",""]);const r=o},8270:(n,e,t)=>{"use strict";t.d(e,{Z:()=>r});var a=t(2609),o=t.n(a)()((function(n){return n[1]}));o.push([n.id,".cell-list[data-v-598db4ba] {\n  background: #fff;\n}\n.block[data-v-598db4ba] {\n  margin-top: 130px;\n}\n.block-1[data-v-598db4ba] {\n  display: flex;\n  justify-content: space-between;\n}\n.block-2[data-v-598db4ba] {\n  display: flex;\n  justify-content: space-between;\n  margin-top: 130px;\n}\n",""]);const r=o},9880:(n,e,t)=>{"use strict";t.r(e),t.d(e,{default:()=>T});var a=t(7875),o=t(349),r=(0,a.HX)("data-v-598db4ba");(0,a.dD)("data-v-598db4ba");var p={class:"block-1"},i={class:"cell-list"},u={class:"block"},c={class:"cell-list"},s={class:"block-1"},l={class:"cell-list"},f={class:"cell-list"},x={class:"block-2"},d={class:"cell-list"},m={class:"cell-list"},v={class:"cell-list"},y=(0,a.Wm)("div",{style:{"margin-bottom":"100px"}},null,-1);(0,a.Cn)();var b=r((function(n,e,t,b,w,k){var h=(0,a.up)("app-type"),g=(0,a.up)("var-button"),z=(0,a.up)("var-cell"),W=(0,a.up)("var-menu");return(0,a.wg)(),(0,a.j4)(a.HY,null,[(0,a.Wm)(h,null,{default:r((function(){return[(0,a.Uk)((0,o.zw)(b.pack.alignmentMethods),1)]})),_:1}),(0,a.Wm)("div",p,[(0,a.Wm)(W,{show:n.top,"onUpdate:show":e[2]||(e[2]=function(e){return n.top=e})},{menu:r((function(){return[(0,a.Wm)("div",i,[(0,a.Wm)(z,null,{default:r((function(){return[(0,a.Uk)((0,o.zw)(b.pack.menuOption),1)]})),_:1}),(0,a.Wm)(z,null,{default:r((function(){return[(0,a.Uk)((0,o.zw)(b.pack.menuOption),1)]})),_:1}),(0,a.Wm)(z,null,{default:r((function(){return[(0,a.Uk)((0,o.zw)(b.pack.menuOption),1)]})),_:1})])]})),default:r((function(){return[(0,a.Wm)(g,{type:"primary",onClick:e[1]||(e[1]=function(e){return n.top=!0})},{default:r((function(){return[(0,a.Uk)((0,o.zw)(b.pack.topAlignment),1)]})),_:1})]})),_:1},8,["show"])]),(0,a.Wm)("div",u,[(0,a.Wm)(W,{alignment:"bottom",show:n.bottom,"onUpdate:show":e[4]||(e[4]=function(e){return n.bottom=e})},{menu:r((function(){return[(0,a.Wm)("div",c,[(0,a.Wm)(z,null,{default:r((function(){return[(0,a.Uk)((0,o.zw)(b.pack.menuOption),1)]})),_:1}),(0,a.Wm)(z,null,{default:r((function(){return[(0,a.Uk)((0,o.zw)(b.pack.menuOption),1)]})),_:1}),(0,a.Wm)(z,null,{default:r((function(){return[(0,a.Uk)((0,o.zw)(b.pack.menuOption),1)]})),_:1})])]})),default:r((function(){return[(0,a.Wm)(g,{type:"primary",onClick:e[3]||(e[3]=function(e){return n.bottom=!0})},{default:r((function(){return[(0,a.Uk)((0,o.zw)(b.pack.bottomAlignment),1)]})),_:1})]})),_:1},8,["show"])]),(0,a.Wm)(h,null,{default:r((function(){return[(0,a.Uk)((0,o.zw)(b.pack.offset),1)]})),_:1}),(0,a.Wm)("div",s,[(0,a.Wm)(W,{"offset-x":72,show:n.offsetX,"onUpdate:show":e[6]||(e[6]=function(e){return n.offsetX=e})},{menu:r((function(){return[(0,a.Wm)("div",l,[(0,a.Wm)(z,null,{default:r((function(){return[(0,a.Uk)((0,o.zw)(b.pack.menuOption),1)]})),_:1}),(0,a.Wm)(z,null,{default:r((function(){return[(0,a.Uk)((0,o.zw)(b.pack.menuOption),1)]})),_:1}),(0,a.Wm)(z,null,{default:r((function(){return[(0,a.Uk)((0,o.zw)(b.pack.menuOption),1)]})),_:1})])]})),default:r((function(){return[(0,a.Wm)(g,{type:"primary",onClick:e[5]||(e[5]=function(e){return n.offsetX=!0})},{default:r((function(){return[(0,a.Uk)((0,o.zw)(b.pack.offsetRight),1)]})),_:1})]})),_:1},8,["show"]),(0,a.Wm)(W,{"offset-x":-72,show:n.offsetX1,"onUpdate:show":e[8]||(e[8]=function(e){return n.offsetX1=e})},{menu:r((function(){return[(0,a.Wm)("div",f,[(0,a.Wm)(z,null,{default:r((function(){return[(0,a.Uk)((0,o.zw)(b.pack.menuOption),1)]})),_:1}),(0,a.Wm)(z,null,{default:r((function(){return[(0,a.Uk)((0,o.zw)(b.pack.menuOption),1)]})),_:1}),(0,a.Wm)(z,null,{default:r((function(){return[(0,a.Uk)((0,o.zw)(b.pack.menuOption),1)]})),_:1})])]})),default:r((function(){return[(0,a.Wm)(g,{type:"primary",onClick:e[7]||(e[7]=function(e){return n.offsetX1=!0})},{default:r((function(){return[(0,a.Uk)((0,o.zw)(b.pack.offsetLeft),1)]})),_:1})]})),_:1},8,["show"])]),(0,a.Wm)("div",x,[(0,a.Wm)(W,{"offset-y":36,show:n.offsetY,"onUpdate:show":e[10]||(e[10]=function(e){return n.offsetY=e})},{menu:r((function(){return[(0,a.Wm)("div",d,[(0,a.Wm)(z,null,{default:r((function(){return[(0,a.Uk)((0,o.zw)(b.pack.menuOption),1)]})),_:1}),(0,a.Wm)(z,null,{default:r((function(){return[(0,a.Uk)((0,o.zw)(b.pack.menuOption),1)]})),_:1}),(0,a.Wm)(z,null,{default:r((function(){return[(0,a.Uk)((0,o.zw)(b.pack.menuOption),1)]})),_:1})])]})),default:r((function(){return[(0,a.Wm)(g,{type:"primary",onClick:e[9]||(e[9]=function(e){return n.offsetY=!0})},{default:r((function(){return[(0,a.Uk)((0,o.zw)(b.pack.offsetBottom),1)]})),_:1})]})),_:1},8,["show"]),(0,a.Wm)(W,{"offset-y":-36,show:n.offsetY1,"onUpdate:show":e[12]||(e[12]=function(e){return n.offsetY1=e})},{menu:r((function(){return[(0,a.Wm)("div",m,[(0,a.Wm)(z,null,{default:r((function(){return[(0,a.Uk)((0,o.zw)(b.pack.menuOption),1)]})),_:1}),(0,a.Wm)(z,null,{default:r((function(){return[(0,a.Uk)((0,o.zw)(b.pack.menuOption),1)]})),_:1}),(0,a.Wm)(z,null,{default:r((function(){return[(0,a.Uk)((0,o.zw)(b.pack.menuOption),1)]})),_:1})])]})),default:r((function(){return[(0,a.Wm)(g,{type:"primary",onClick:e[11]||(e[11]=function(e){return n.offsetY1=!0})},{default:r((function(){return[(0,a.Uk)((0,o.zw)(b.pack.offsetTop),1)]})),_:1})]})),_:1},8,["show"])]),(0,a.Wm)(h,null,{default:r((function(){return[(0,a.Uk)((0,o.zw)(b.pack.events),1)]})),_:1}),(0,a.Wm)(W,{show:n.event,"onUpdate:show":e[14]||(e[14]=function(e){return n.event=e}),onOpen:e[15]||(e[15]=function(){return b.Snackbar.info("open")}),onOpened:e[16]||(e[16]=function(){return b.Snackbar.success("opened")}),onClose:e[17]||(e[17]=function(){return b.Snackbar.warning("close")}),onClosed:e[18]||(e[18]=function(){return b.Snackbar.error("closed")})},{menu:r((function(){return[(0,a.Wm)("div",v,[(0,a.Wm)(z,null,{default:r((function(){return[(0,a.Uk)((0,o.zw)(b.pack.menuOption),1)]})),_:1}),(0,a.Wm)(z,null,{default:r((function(){return[(0,a.Uk)((0,o.zw)(b.pack.menuOption),1)]})),_:1}),(0,a.Wm)(z,null,{default:r((function(){return[(0,a.Uk)((0,o.zw)(b.pack.menuOption),1)]})),_:1})])]})),default:r((function(){return[(0,a.Wm)(g,{type:"primary",onClick:e[13]||(e[13]=function(e){return n.event=!0})},{default:r((function(){return[(0,a.Uk)((0,o.zw)(b.pack.events),1)]})),_:1})]})),_:1},8,["show"]),y],64)})),w=t(6156),k=t(5042),h=t(5602),g=t(535),z=t(7984),W=t(9433),O=t(629),_=t(641),U=t(7532),Z=t(6208),C=t(926),j=(0,C.bU)(),S=j.add,A=j.use,Y=j.pack,I=(j.packs,j.merge,function(n){(0,C.D$)(n),A(n)});(0,C.IH)("zh-CN",U.Z),(0,C.IH)("en-US",Z.Z),S("zh-CN",{alignmentMethods:"对齐方式",topAlignment:"顶部对齐",menuOption:"菜单项",bottomAlignment:"底部对齐",offset:"偏移量",offsetRight:"右偏移",offsetLeft:"左偏移",offsetBottom:"下偏移",offsetTop:"上偏移",events:"注册事件"}),S("en-US",{alignmentMethods:"Alignment Methods",topAlignment:"Top Alignment",menuOption:"Menu Option",bottomAlignment:"Bottom Alignment",offset:"Offset",offsetRight:"Offset Right",offsetLeft:"Offset Left",offsetBottom:"Offset Bottom",offsetTop:"Offset Top",events:"Events"});var F,P=t(3638);function X(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(n);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),t.push.apply(t,a)}return t}function E(n){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?X(Object(t),!0).forEach((function(e){(0,w.Z)(n,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):X(Object(t)).forEach((function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(t,e))}))}return n}const L={name:"MenuExample",components:(F={},(0,w.Z)(F,k.Z.name,k.Z),(0,w.Z)(F,h.Z.name,h.Z),(0,w.Z)(F,g.Z.name,g.Z),(0,w.Z)(F,"AppType",W.Z),F),setup:function(){var n=(0,_.qj)({top:!1,bottom:!1,offsetX:!1,offsetX1:!1,offsetY:!1,offsetY1:!1,event:!1});(0,P.jS)(I);var e=O.Z.touchmoveForbid;return(0,P.Id)((function(n){"pc"===n&&(O.Z.touchmoveForbid=!1)})),(0,a.Ah)((function(){O.Z.touchmoveForbid=e})),E(E({pack:Y},(0,_.BK)(n)),{},{Snackbar:z.ZP})}};var H=t(6062),M=t.n(H),B=t(8270);M()(B.Z,{insert:"head",singleton:!1}),B.Z.locals,L.render=b,L.__scopeId="data-v-598db4ba";const T=L}}]);