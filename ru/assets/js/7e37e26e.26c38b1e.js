"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[4346],{9613:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>v});var n=r(9496);function l(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){l(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function a(e,t){if(null==e)return{};var r,n,l=function(e,t){if(null==e)return{};var r,n,l={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(l[r]=e[r]);return l}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(l[r]=e[r])}return l}var p=n.createContext({}),c=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=c(e.components);return n.createElement(p.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,l=e.mdxType,o=e.originalType,p=e.parentName,u=a(e,["components","mdxType","originalType","parentName"]),d=c(r),v=l,m=d["".concat(p,".").concat(v)]||d[v]||s[v]||o;return r?n.createElement(m,i(i({ref:t},u),{},{components:r})):n.createElement(m,i({ref:t},u))}));function v(e,t){var r=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var o=r.length,i=new Array(o);i[0]=d;var a={};for(var p in t)hasOwnProperty.call(t,p)&&(a[p]=t[p]);a.originalType=e,a.mdxType="string"==typeof e?e:l,i[1]=a;for(var c=2;c<o;c++)i[c]=r[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},1173:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>u,contentTitle:()=>p,default:()=>v,frontMatter:()=>a,metadata:()=>c,toc:()=>s});var n=r(2182),l=r(9028),o=(r(9496),r(9613)),i=["components"],a={id:"remove",title:"pnpm remove"},p=void 0,c={unversionedId:"cli/remove",id:"cli/remove",title:"pnpm remove",description:"Aliases: rm, uninstall, un",source:"@site/i18n/ru/docusaurus-plugin-content-docs/current/cli/remove.md",sourceDirName:"cli",slug:"/cli/remove",permalink:"/ru/next/cli/remove",editUrl:"https://crowdin.com/project/pnpm/ru",tags:[],version:"current",frontMatter:{id:"remove",title:"pnpm remove"},sidebar:"docs",previous:{title:"pnpm update",permalink:"/ru/next/cli/update"},next:{title:"pnpm link",permalink:"/ru/next/cli/link"}},u={},s=[{value:"\u041e\u043f\u0446\u0438\u0438",id:"\u043e\u043f\u0446\u0438\u0438",level:2},{value:"--recursive, -r",id:"--recursive--r",level:3},{value:"--global",id:"--global",level:3},{value:"--save-dev, -D",id:"--save-dev--d",level:3},{value:"--save-optional, -O",id:"--save-optional--o",level:3},{value:"--save-prod, -P",id:"--save-prod--p",level:3},{value:"--filter &lt;\u0441\u0435\u043b\u0435\u043a\u0442\u043e\u0440 \u043f\u0430\u043a\u0435\u0442\u0430&gt;",id:"--filter-\u0441\u0435\u043b\u0435\u043a\u0442\u043e\u0440-\u043f\u0430\u043a\u0435\u0442\u0430",level:3}],d={toc:s};function v(e){var t=e.components,r=(0,l.Z)(e,i);return(0,o.kt)("wrapper",(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Aliases: ",(0,o.kt)("inlineCode",{parentName:"p"},"rm"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"uninstall"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"un")),(0,o.kt)("p",null,"\u0423\u0434\u0430\u043b\u044f\u0435\u0442 \u043f\u0430\u043a\u0435\u0442\u044b \u0438\u0437 ",(0,o.kt)("inlineCode",{parentName:"p"},"node_modules")," \u0438 \u0438\u0437 ",(0,o.kt)("inlineCode",{parentName:"p"},"package.json")," \u043f\u0440\u043e\u0435\u043a\u0442\u0430."),(0,o.kt)("h2",{id:"\u043e\u043f\u0446\u0438\u0438"},"\u041e\u043f\u0446\u0438\u0438"),(0,o.kt)("h3",{id:"--recursive--r"},"--recursive, -r"),(0,o.kt)("p",null,"\u041a\u043e\u0433\u0434\u0430 \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u0435\u0442\u0441\u044f \u0432 ",(0,o.kt)("a",{parentName:"p",href:"/ru/next/workspaces"},"\u0432\u043e\u0440\u043a\u0441\u043f\u0435\u0439\u0441\u0435"),", \u0443\u0434\u0430\u043b\u044f\u0435\u0442 \u0437\u0430\u0432\u0438\u0441\u0438\u043c\u043e\u0441\u0442(\u044c/\u0438) \u0438\u0437 \u043a\u0430\u0436\u0434\u043e\u0433\u043e \u043f\u0430\u043a\u0435\u0442\u0430 \u0432\u043e\u0440\u043a\u0441\u043f\u0435\u0439\u0441\u0430."),(0,o.kt)("p",null,"\u041a\u043e\u0433\u0434\u0430 \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u0435\u0442\u0441\u044f \u043d\u0435 \u0432 \u0432\u043e\u0440\u043a\u0441\u043f\u0435\u0439\u0441\u0435, \u0443\u0434\u0430\u043b\u044f\u0435\u0442 \u0437\u0430\u0432\u0438\u0441\u0438\u043c\u043e\u0441\u0442(\u044c/\u0438) \u0438\u0437 \u043a\u0430\u0436\u0434\u043e\u0433\u043e \u043f\u0430\u043a\u0435\u0442\u0430 \u043d\u0430\u0439\u0434\u0435\u043d\u043d\u043e\u0433\u043e \u0432 \u043f\u043e\u0434\u043f\u0430\u043f\u043a\u0430\u0445."),(0,o.kt)("h3",{id:"--global"},"--global"),(0,o.kt)("p",null,"\u0423\u0434\u0430\u043b\u044f\u0435\u0442 \u0433\u043b\u043e\u0431\u0430\u043b\u044c\u043d\u043e \u0443\u0441\u0442\u0430\u043d\u043e\u0432\u043b\u0435\u043d\u043d\u044b\u0439 \u043f\u0430\u043a\u0435\u0442."),(0,o.kt)("h3",{id:"--save-dev--d"},"--save-dev, -D"),(0,o.kt)("p",null,"\u0423\u0434\u0430\u043b\u044f\u0435\u0442 \u0437\u0430\u0432\u0438\u0441\u0438\u043c\u043e\u0441\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0438\u0437 ",(0,o.kt)("inlineCode",{parentName:"p"},"devDependencies"),"."),(0,o.kt)("h3",{id:"--save-optional--o"},"--save-optional, -O"),(0,o.kt)("p",null,"\u0423\u0434\u0430\u043b\u044f\u0435\u0442 \u0437\u0430\u0432\u0438\u0441\u0438\u043c\u043e\u0441\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0438\u0437 ",(0,o.kt)("inlineCode",{parentName:"p"},"optionalDependencies"),"."),(0,o.kt)("h3",{id:"--save-prod--p"},"--save-prod, -P"),(0,o.kt)("p",null,"\u0423\u0434\u0430\u043b\u044f\u0435\u0442 \u0437\u0430\u0432\u0438\u0441\u0438\u043c\u043e\u0441\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0438\u0437 ",(0,o.kt)("inlineCode",{parentName:"p"},"dependencies"),"."),(0,o.kt)("h3",{id:"--filter-\u0441\u0435\u043b\u0435\u043a\u0442\u043e\u0440-\u043f\u0430\u043a\u0435\u0442\u0430"},"--filter ","<","\u0441\u0435\u043b\u0435\u043a\u0442\u043e\u0440 \u043f\u0430\u043a\u0435\u0442\u0430",">"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/ru/next/filtering"},"\u041f\u043e\u0434\u0440\u043e\u0431\u043d\u0435\u0435 \u043e \u0444\u0438\u043b\u044c\u0442\u0440\u0430\u0446\u0438\u0438.")))}v.isMDXComponent=!0}}]);