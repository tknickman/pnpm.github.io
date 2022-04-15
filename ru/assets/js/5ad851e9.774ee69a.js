"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[4936],{9613:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var r=n(9496);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function p(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var o=r.createContext({}),d=function(e){var t=r.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):p(p({},t),e)),n},u=function(e){var t=d(e.components);return r.createElement(o.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},s=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,o=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),s=d(n),m=a,k=s["".concat(o,".").concat(m)]||s[m]||c[m]||l;return n?r.createElement(k,p(p({ref:t},u),{},{components:n})):r.createElement(k,p({ref:t},u))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,p=new Array(l);p[0]=s;var i={};for(var o in t)hasOwnProperty.call(t,o)&&(i[o]=t[o]);i.originalType=e,i.mdxType="string"==typeof e?e:a,p[1]=i;for(var d=2;d<l;d++)p[d]=n[d];return r.createElement.apply(null,p)}return r.createElement.apply(null,n)}s.displayName="MDXCreateElement"},8238:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>o,default:()=>m,frontMatter:()=>i,metadata:()=>d,toc:()=>c});var r=n(2182),a=n(9028),l=(n(9496),n(9613)),p=["components"],i={id:"update",title:"pnpm update"},o=void 0,d={unversionedId:"cli/update",id:"cli/update",title:"pnpm update",description:"\u0410\u043b\u0438\u0430\u0441\u044b: up",source:"@site/i18n/ru/docusaurus-plugin-content-docs/current/cli/update.md",sourceDirName:"cli",slug:"/cli/update",permalink:"/ru/next/cli/update",editUrl:"https://crowdin.com/project/pnpm/ru",tags:[],version:"current",frontMatter:{id:"update",title:"pnpm update"},sidebar:"docs",previous:{title:"pnpm install",permalink:"/ru/next/cli/install"},next:{title:"pnpm remove",permalink:"/ru/next/cli/remove"}},u={},c=[{value:"TL;DR",id:"tldr",level:2},{value:"\u041e\u043f\u0446\u0438\u0438",id:"\u043e\u043f\u0446\u0438\u0438",level:2},{value:"--recursive, -r",id:"--recursive--r",level:3},{value:"--latest, -L",id:"--latest--l",level:3},{value:"--global",id:"--global",level:3},{value:"--workspace",id:"--workspace",level:3},{value:"--prod, -P",id:"--prod--p",level:3},{value:"--dev, -D",id:"--dev--d",level:3},{value:"--no-optional",id:"--no-optional",level:3},{value:"--interactive, -i",id:"--interactive--i",level:3},{value:"--filter &lt;\u0441\u0435\u043b\u0435\u043a\u0442\u043e\u0440 \u043f\u0430\u043a\u0435\u0442\u0430&gt;",id:"--filter-\u0441\u0435\u043b\u0435\u043a\u0442\u043e\u0440-\u043f\u0430\u043a\u0435\u0442\u0430",level:3}],s={toc:c};function m(e){var t=e.components,n=(0,a.Z)(e,p);return(0,l.kt)("wrapper",(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"\u0410\u043b\u0438\u0430\u0441\u044b: ",(0,l.kt)("inlineCode",{parentName:"p"},"up")),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"pnpm update")," \u043e\u0431\u043d\u043e\u0432\u043b\u044f\u0435\u0442 \u043f\u0430\u043a\u0435\u0442\u044b \u0434\u043e \u043f\u043e\u0441\u043b\u0435\u0434\u043d\u0435\u0439 \u0432\u0435\u0440\u0441\u0438\u0438 \u043d\u0430 \u043e\u0441\u043d\u043e\u0432\u0435 \u0437\u0430\u0434\u0430\u043d\u043d\u043e\u0433\u043e \u0434\u0438\u0430\u043f\u0430\u0437\u043e\u043d\u0430."),(0,l.kt)("p",null,"\u041f\u0440\u0438 \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043d\u0438\u0438 \u0431\u0435\u0437 \u0430\u0440\u0433\u0443\u043c\u0435\u043d\u0442\u043e\u0432 \u043e\u0431\u043d\u043e\u0432\u043b\u044f\u0435\u0442 \u0432\u0441\u0435 \u0437\u0430\u0432\u0438\u0441\u0438\u043c\u043e\u0441\u0442\u0438. \u0412\u044b \u043c\u043e\u0436\u0435\u0442\u0435 \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u044c \u0448\u0430\u0431\u043b\u043e\u043d\u044b \u0434\u043b\u044f \u043e\u0431\u043d\u043e\u0432\u043b\u0435\u043d\u0438\u044f \u043a\u043e\u043d\u043a\u0440\u0435\u0442\u043d\u044b\u0445 \u0437\u0430\u0432\u0438\u0441\u0438\u043c\u043e\u0441\u0442\u0435\u0439."),(0,l.kt)("h2",{id:"tldr"},"TL;DR"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"\u041a\u043e\u043c\u0430\u043d\u0434\u0430"),(0,l.kt)("th",{parentName:"tr",align:null},"\u041e\u0431\u043e\u0437\u043d\u0430\u0447\u0435\u043d\u0438\u0435"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"pnpm up")),(0,l.kt)("td",{parentName:"tr",align:null},"\u041e\u0431\u043d\u043e\u0432\u043b\u044f\u0435\u0442 \u0432\u0441\u0435 \u0437\u0430\u0432\u0438\u0441\u0438\u043c\u043e\u0441\u0442\u0438, \u043f\u0440\u0438\u0434\u0435\u0440\u0436\u0438\u0432\u0430\u044f\u0441\u044c \u0434\u0438\u0430\u043f\u0430\u0437\u043e\u043d\u043e\u0432 \u0432\u0435\u0440\u0441\u0438\u0439, \u0443\u043a\u0430\u0437\u0430\u043d\u043d\u044b\u0445 \u0432 ",(0,l.kt)("inlineCode",{parentName:"td"},"package.json"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"pnpm up --latest")),(0,l.kt)("td",{parentName:"tr",align:null},"\u041e\u0431\u043d\u043e\u0432\u043b\u044f\u0435\u0442 \u0432\u0441\u0435 \u0437\u0430\u0432\u0438\u0441\u0438\u043c\u043e\u0441\u0442\u0438, \u0438\u0433\u043d\u043e\u0440\u0438\u0440\u0443\u044f \u0434\u0438\u0430\u043f\u0430\u0437\u043e\u043d\u044b \u0432\u0435\u0440\u0441\u0438\u0439 \u0443\u043a\u0430\u0437\u0430\u043d\u043d\u044b\u0435 \u0432 ",(0,l.kt)("inlineCode",{parentName:"td"},"package.json"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"pnpm up foo@2")),(0,l.kt)("td",{parentName:"tr",align:null},"\u041e\u0431\u043d\u043e\u0432\u043b\u044f\u0435\u0442 \u043f\u0430\u043a\u0435\u0442 ",(0,l.kt)("inlineCode",{parentName:"td"},"foo")," \u0434\u043e \u043f\u043e\u0441\u043b\u0435\u0434\u043d\u0435\u0439 \u0432\u0435\u0440\u0441\u0438\u0438 \u0432 \u043c\u0430\u0436\u043e\u0440\u043d\u043e\u0439 v2")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},'pnpm up "@babel/*"')),(0,l.kt)("td",{parentName:"tr",align:null},"\u041e\u0431\u043d\u043e\u0432\u043b\u044f\u0435\u0442 \u0432\u0441\u0435 \u0437\u0430\u0432\u0438\u0441\u0438\u043c\u043e\u0441\u0442\u0438 \u043f\u043e\u0434 \u043e\u0431\u043b\u0430\u0441\u0442\u044c\u044e ",(0,l.kt)("inlineCode",{parentName:"td"},"@babel"))))),(0,l.kt)("h2",{id:"\u043e\u043f\u0446\u0438\u0438"},"\u041e\u043f\u0446\u0438\u0438"),(0,l.kt)("h3",{id:"--recursive--r"},"--recursive, -r"),(0,l.kt)("p",null,"\u041e\u0434\u043d\u043e\u0432\u0440\u0435\u043c\u0435\u043d\u043d\u043e \u0437\u0430\u043f\u0443\u0441\u043a\u0430\u0435\u0442 \u043e\u0431\u043d\u043e\u0432\u043b\u0435\u043d\u0438\u0435 \u0432\u043e \u0432\u0441\u0435\u0445 \u043f\u043e\u0434\u043f\u0430\u043f\u043a\u0430\u0445 \u0441 ",(0,l.kt)("inlineCode",{parentName:"p"},"package.json")," (\u0437\u0430 \u0438\u0441\u043a\u043b\u044e\u0447\u0435\u043d\u0438\u0435\u043c \u043f\u0430\u043f\u043a\u0438 node_modules)."),(0,l.kt)("p",null,"\u041f\u0440\u0438\u043c\u0435\u0440\u044b \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043d\u0438\u044f:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sh"},"pnpm --recursive update\n# \u043e\u0431\u043d\u043e\u0432\u043b\u044f\u0435\u0442 \u0432\u0441\u0435 \u043f\u0430\u043a\u0435\u0442\u044b \u0441 \u0433\u043b\u0443\u0431\u0438\u043d\u043e\u0439 \u0434\u043e 100 \u043f\u043e\u0434\u043f\u0430\u043f\u043e\u043a\npnpm --recursive update --depth 100\n# \u043e\u0431\u043d\u043e\u0432\u043b\u044f\u0435\u0442 typescript \u0434\u043e \u043f\u043e\u0441\u043b\u0435\u0434\u043d\u0435\u0439 \u0432\u0435\u0440\u0441\u0438\u0438 \u0432 \u043a\u0430\u0436\u0434\u043e\u043c \u043f\u0430\u043a\u0435\u0442\u0435\npnpm --recursive update typescript@latest\n")),(0,l.kt)("h3",{id:"--latest--l"},"--latest, -L"),(0,l.kt)("p",null,"\u0418\u0433\u043d\u043e\u0440\u0438\u0440\u0443\u0435\u0442 \u0434\u0438\u0430\u043f\u0430\u0437\u043e\u043d \u0432\u0435\u0440\u0441\u0438\u0439, \u0443\u043a\u0430\u0437\u0430\u043d\u043d\u044b\u0439 \u0432 ",(0,l.kt)("inlineCode",{parentName:"p"},"package.json"),". \u0412\u043c\u0435\u0441\u0442\u043e \u044d\u0442\u043e\u0433\u043e, \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u0435\u0442 \u0432\u0435\u0440\u0441\u0438\u044e \u043f\u043e\u0434 \u0442\u0435\u0433\u043e\u043c ",(0,l.kt)("inlineCode",{parentName:"p"},"latest")," (\u043f\u043e\u0442\u0435\u043d\u0446\u0438\u0430\u043b\u044c\u043d\u043e \u043e\u0431\u043d\u043e\u0432\u043b\u044f\u044f \u043f\u0430\u043a\u0435\u0442\u044b \u043c\u0435\u0436\u0434\u0443 \u043c\u0430\u0436\u043e\u0440\u043d\u044b\u043c\u0438 \u0432\u0435\u0440\u0441\u0438\u044f\u043c\u0438)."),(0,l.kt)("h3",{id:"--global"},"--global"),(0,l.kt)("p",null,"\u041e\u0431\u043d\u043e\u0432\u043b\u044f\u0435\u0442 \u0433\u043b\u043e\u0431\u0430\u043b\u044c\u043d\u044b\u0435 \u043f\u0430\u043a\u0435\u0442\u044b."),(0,l.kt)("h3",{id:"--workspace"},"--workspace"),(0,l.kt)("p",null,"Tries to link all packages from the workspace. Versions are updated to match the versions of packages inside the workspace."),(0,l.kt)("p",null,"If specific packages are updated, the command will fail if any of the updated dependencies are not found inside the workspace. For instance, the following command fails if ",(0,l.kt)("inlineCode",{parentName:"p"},"express")," is not a workspace package:"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"pnpm up -r --workspace express"),"."),(0,l.kt)("h3",{id:"--prod--p"},"--prod, -P"),(0,l.kt)("p",null,"\u041e\u0431\u043d\u043e\u0432\u0438\u0442\u044c \u043f\u0430\u043a\u0435\u0442\u044b \u0442\u043e\u043b\u044c\u043a\u043e \u0432 ",(0,l.kt)("inlineCode",{parentName:"p"},"dependencies")," \u0432 ",(0,l.kt)("inlineCode",{parentName:"p"},"optionalDependencies"),"."),(0,l.kt)("h3",{id:"--dev--d"},"--dev, -D"),(0,l.kt)("p",null,"\u041e\u0431\u043d\u043e\u0432\u0438\u0442\u044c \u043f\u0430\u043a\u0435\u0442\u044b \u0442\u043e\u043b\u044c\u043a\u043e \u0432 ",(0,l.kt)("inlineCode",{parentName:"p"},"devDependencies"),"."),(0,l.kt)("h3",{id:"--no-optional"},"--no-optional"),(0,l.kt)("p",null,"\u041d\u0435 \u043e\u0431\u043d\u043e\u0432\u043b\u044f\u0442\u044c \u043f\u0430\u043a\u0435\u0442\u044b \u0432 ",(0,l.kt)("inlineCode",{parentName:"p"},"optionalDependencies"),"."),(0,l.kt)("h3",{id:"--interactive--i"},"--interactive, -i"),(0,l.kt)("p",null,"\u041f\u043e\u043a\u0430\u0437\u044b\u0432\u0430\u0435\u0442 \u0443\u0441\u0442\u0430\u0440\u0435\u0432\u0448\u0438\u0435 \u0437\u0430\u0432\u0438\u0441\u0438\u043c\u043e\u0441\u0442\u0435\u0439 \u0438 \u043f\u043e\u0437\u0432\u043e\u043b\u044f\u0435\u0442 \u0432\u044b\u0431\u0440\u0430\u0442\u044c \u043a\u0430\u043a\u0438\u0435 \u0441\u043b\u0435\u0434\u0443\u0435\u0442 \u043e\u0431\u043d\u043e\u0432\u0438\u0442\u044c."),(0,l.kt)("h3",{id:"--filter-\u0441\u0435\u043b\u0435\u043a\u0442\u043e\u0440-\u043f\u0430\u043a\u0435\u0442\u0430"},"--filter ","<","\u0441\u0435\u043b\u0435\u043a\u0442\u043e\u0440 \u043f\u0430\u043a\u0435\u0442\u0430",">"),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"/ru/next/filtering"},"\u041f\u043e\u0434\u0440\u043e\u0431\u043d\u0435\u0435 \u043e \u0444\u0438\u043b\u044c\u0442\u0440\u0430\u0446\u0438\u0438.")))}m.isMDXComponent=!0}}]);