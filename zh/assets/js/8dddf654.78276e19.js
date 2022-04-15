"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[8955],{9613:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>v});var r=n(9496);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,l=function(e,t){if(null==e)return{};var n,r,l={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var p=r.createContext({}),c=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(p.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,l=e.mdxType,a=e.originalType,p=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),d=c(n),v=l,m=d["".concat(p,".").concat(v)]||d[v]||s[v]||a;return n?r.createElement(m,o(o({ref:t},u),{},{components:n})):r.createElement(m,o({ref:t},u))}));function v(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var a=n.length,o=new Array(a);o[0]=d;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:l,o[1]=i;for(var c=2;c<a;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},8183:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>p,default:()=>v,frontMatter:()=>i,metadata:()=>c,toc:()=>s});var r=n(2182),l=n(9028),a=(n(9496),n(9613)),o=["components"],i={id:"remove",title:"pnpm remove"},p=void 0,c={unversionedId:"cli/remove",id:"cli/remove",title:"pnpm remove",description:"\u522b\u540d: rm, uninstall, un",source:"@site/i18n/zh/docusaurus-plugin-content-docs/current/cli/remove.md",sourceDirName:"cli",slug:"/cli/remove",permalink:"/zh/next/cli/remove",editUrl:"https://crowdin.com/project/pnpm/zh-CN",tags:[],version:"current",frontMatter:{id:"remove",title:"pnpm remove"},sidebar:"docs",previous:{title:"pnpm update",permalink:"/zh/next/cli/update"},next:{title:"pnpm link",permalink:"/zh/next/cli/link"}},u={},s=[{value:"\u914d\u7f6e\u9879",id:"\u914d\u7f6e\u9879",level:2},{value:"--recursive, -r",id:"--recursive--r",level:3},{value:"--global",id:"--global",level:3},{value:"--save-dev, -D",id:"--save-dev--d",level:3},{value:"--save-optional, -O",id:"--save-optional--o",level:3},{value:"--save-prod, -P",id:"--save-prod--p",level:3},{value:"--filter &lt;package_selector&gt;",id:"--filter-package_selector",level:3}],d={toc:s};function v(e){var t=e.components,n=(0,l.Z)(e,o);return(0,a.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"\u522b\u540d: ",(0,a.kt)("inlineCode",{parentName:"p"},"rm"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"uninstall"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"un")),(0,a.kt)("p",null,"\u4ece ",(0,a.kt)("inlineCode",{parentName:"p"},"node_modules")," \u548c\u9879\u76ee\u7684 ",(0,a.kt)("inlineCode",{parentName:"p"},"package.json")," \u4e2d\u5220\u9664\u76f8\u5173 ",(0,a.kt)("inlineCode",{parentName:"p"},"packages"),"\u3002"),(0,a.kt)("h2",{id:"\u914d\u7f6e\u9879"},"\u914d\u7f6e\u9879"),(0,a.kt)("h3",{id:"--recursive--r"},"--recursive, -r"),(0,a.kt)("p",null,"\u5f53\u5728 ",(0,a.kt)("a",{parentName:"p",href:"/zh/next/workspaces"},"\u5de5\u4f5c\u533a")," \u4e2d\u4f7f\u7528\u6b64\u547d\u4ee4\u65f6\uff0c\u5c06\u4ece\u6bcf\u4e2a\u5de5\u4f5c\u533a\u7684\u5305\u4e2d\u79fb\u9664\u76f8\u5173\u4f9d\u8d56(\u6216 \u591a\u4e2a\u4f9d\u8d56)\u3002"),(0,a.kt)("p",null,"\u5f53\u4e0d\u5728\u5de5\u4f5c\u533a\u5185\u4f7f\u7528\u65f6\uff0c\u5c06\u5220\u9664\u76f8\u5173\u4f9d\u8d56\u9879 (\u6216\u591a\u4e2a\u4f9d\u8d56), \u4e5f\u5305\u542b\u5b50\u76ee\u5f55\u4e2d\u5bf9\u5e94\u7684\u5305 \u3002"),(0,a.kt)("h3",{id:"--global"},"--global"),(0,a.kt)("p",null,"\u4ece\u5168\u5c40\u5220\u9664\u4e00\u4e2a\u4f9d\u8d56\u5305\u3002"),(0,a.kt)("h3",{id:"--save-dev--d"},"--save-dev, -D"),(0,a.kt)("p",null,"\u4ec5\u5220\u9664\u5f00\u53d1\u73af\u5883 ",(0,a.kt)("inlineCode",{parentName:"p"},"devDependencies")," \u4e2d\u7684\u4f9d\u8d56\u9879\u3002"),(0,a.kt)("h3",{id:"--save-optional--o"},"--save-optional, -O"),(0,a.kt)("p",null,"\u4ec5\u79fb\u9664 ",(0,a.kt)("inlineCode",{parentName:"p"},"optionalDependencies")," \u4e2d\u7684\u4f9d\u8d56\u9879\u3002"),(0,a.kt)("h3",{id:"--save-prod--p"},"--save-prod, -P"),(0,a.kt)("p",null,"\u4ec5\u4ece ",(0,a.kt)("inlineCode",{parentName:"p"},"dependencies")," \u4e2d\u5220\u9664\u76f8\u5173\u4f9d\u8d56\u9879\u3002"),(0,a.kt)("h3",{id:"--filter-package_selector"},"--filter ","<","package_selector",">"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/zh/next/filtering"},"\u67e5\u770b\u66f4\u591a filtering \u7684\u8be6\u7ec6\u89e3\u91ca.")))}v.isMDXComponent=!0}}]);