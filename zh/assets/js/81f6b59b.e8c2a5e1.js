"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[7709],{9613:(e,n,t)=>{t.d(n,{Zo:()=>s,kt:()=>d});var r=t(9496);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function p(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function a(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var l=r.createContext({}),m=function(e){var n=r.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):p(p({},n),e)),t},s=function(e){var n=m(e.components);return r.createElement(l.Provider,{value:n},e.children)},c={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},u=r.forwardRef((function(e,n){var t=e.components,i=e.mdxType,o=e.originalType,l=e.parentName,s=a(e,["components","mdxType","originalType","parentName"]),u=m(t),d=i,f=u["".concat(l,".").concat(d)]||u[d]||c[d]||o;return t?r.createElement(f,p(p({ref:n},s),{},{components:t})):r.createElement(f,p({ref:n},s))}));function d(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var o=t.length,p=new Array(o);p[0]=u;var a={};for(var l in n)hasOwnProperty.call(n,l)&&(a[l]=n[l]);a.originalType=e,a.mdxType="string"==typeof e?e:i,p[1]=a;for(var m=2;m<o;m++)p[m]=t[m];return r.createElement.apply(null,p)}return r.createElement.apply(null,t)}u.displayName="MDXCreateElement"},10:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>l,default:()=>d,frontMatter:()=>a,metadata:()=>m,toc:()=>c});var r=t(2182),i=t(9028),o=(t(9496),t(9613)),p=["components"],a={id:"limitations",title:"PNPM\u7684\u5c40\u9650"},l=void 0,m={unversionedId:"limitations",id:"version-5.x/limitations",title:"PNPM\u7684\u5c40\u9650",description:"1. npm-shrinkwrap.json \u548c package-lock.json \u88ab\u5ffd\u7565\u3002 \u4e0e pnpm \u4e0d\u540c\uff0cnpm\u53ef\u4ee5\u591a\u6b21\u5b89\u88c5\u76f8\u540c\u7684 name@version \uff0c\u5e76\u4e14\u5177\u6709\u4e0d\u540c\u7684\u4f9d\u8d56\u9879\u7ec4\u5408\u3002 npm \u7684\u9501\u6587\u4ef6\u65e8\u5728\u53cd\u6620\u5e73\u94fa\u7684 node_modules \u5e03\u5c40\uff0c\u4f46\u662f\uff0c\u7531\u4e8e pnpm \u65e0\u6cd5\u521b\u5efa\u7c7b\u4f3c\u7684\u5e03\u5c40\uff0c\u56e0\u6b64\u5b83\u65e0\u6cd5\u9075\u5faa npm \u7684\u9501\u6587\u4ef6\u683c\u5f0f\u3002 \u4f46\u662f\uff0c\u5982\u679c\u60a8\u5e0c\u671b\u5c06\u9501\u5b9a\u6587\u4ef6\u8f6c\u6362\u4e3a pnpm \u7684\u683c\u5f0f\uff0c\u8bf7\u770b pnpm import\u3002",source:"@site/i18n/zh/docusaurus-plugin-content-docs/version-5.x/limitations.md",sourceDirName:".",slug:"/limitations",permalink:"/zh/5.x/limitations",editUrl:"https://crowdin.com/project/pnpm/zh-CN",tags:[],version:"5.x",frontMatter:{id:"limitations",title:"PNPM\u7684\u5c40\u9650"},sidebar:"version-5.x/docs",previous:{title:"\u6027\u80fd\u6d4b\u8bd5",permalink:"/zh/5.x/benchmark"},next:{title:"\u57fa\u4e8e\u7b26\u53f7\u94fe\u63a5\u7684 node_modules \u7ed3\u6784",permalink:"/zh/5.x/symlinked-node-modules-structure"}},s={},c=[],u={toc:c};function d(e){var n=e.components,t=(0,i.Z)(e,p);return(0,o.kt)("wrapper",(0,r.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("inlineCode",{parentName:"li"},"npm-shrinkwrap.json")," \u548c ",(0,o.kt)("inlineCode",{parentName:"li"},"package-lock.json")," \u88ab\u5ffd\u7565\u3002 \u4e0e pnpm \u4e0d\u540c\uff0cnpm\u53ef\u4ee5\u591a\u6b21\u5b89\u88c5\u76f8\u540c\u7684 ",(0,o.kt)("inlineCode",{parentName:"li"},"name@version")," \uff0c\u5e76\u4e14\u5177\u6709\u4e0d\u540c\u7684\u4f9d\u8d56\u9879\u7ec4\u5408\u3002 npm \u7684\u9501\u6587\u4ef6\u65e8\u5728\u53cd\u6620\u5e73\u94fa\u7684 ",(0,o.kt)("inlineCode",{parentName:"li"},"node_modules")," \u5e03\u5c40\uff0c\u4f46\u662f\uff0c\u7531\u4e8e pnpm \u65e0\u6cd5\u521b\u5efa\u7c7b\u4f3c\u7684\u5e03\u5c40\uff0c\u56e0\u6b64\u5b83\u65e0\u6cd5\u9075\u5faa npm \u7684\u9501\u6587\u4ef6\u683c\u5f0f\u3002 \u4f46\u662f\uff0c\u5982\u679c\u60a8\u5e0c\u671b\u5c06\u9501\u5b9a\u6587\u4ef6\u8f6c\u6362\u4e3a pnpm \u7684\u683c\u5f0f\uff0c\u8bf7\u770b ",(0,o.kt)("a",{parentName:"li",href:"/zh/5.x/cli/import"},"pnpm import"),"\u3002"),(0,o.kt)("li",{parentName:"ol"},"pnpm \u4e0d\u80fd\u53d1\u5e03\u5e26\u6709 ",(0,o.kt)("inlineCode",{parentName:"li"},"bundledDependencies")," \u7684 npm \u5305\u3002 \u76ee\u524d\uff0c\u4e5f\u6ca1\u6709\u8ba1\u5212\u6dfb\u52a0\u5bf9 ",(0,o.kt)("inlineCode",{parentName:"li"},"bundledDependencies")," \u652f\u6301\uff0c\u56e0\u4e3a\u5b83\u4eec\u5728\u53d1\u5e03\u4e2d\u7684\u5de5\u4f5c\u6548\u7387\u4e0d\u9ad8\uff0c\u5373\u4f7f\u5728 npm \u4e0a\u4e5f\u662f\u5982\u6b64\u3002 \u76f8\u53cd\uff0c\u6211\u4eec\u5efa\u8bae\u60a8\u4f7f\u7528\u4e00\u4e2a\u5b9e\u9645\u7684\u6253\u5305\u5668\uff0c\u4f8b\u5982 webpack\u3001rollup \u6216 ESBuild\u3002"),(0,o.kt)("li",{parentName:"ol"},"Binstubs\uff08\u5728 ",(0,o.kt)("inlineCode",{parentName:"li"},"node_modules/.bin"),"\u4e2d\u7684\u6587\u4ef6\uff09\u603b\u662f shell \u6587\u4ef6\uff0c\u800c\u4e0d\u662f\u6307\u5411 JS \u6587\u4ef6\u7684\u7b26\u53f7\u94fe\u63a5\u3002 \u521b\u5efa shell \u6587\u4ef6\u662f\u4e3a\u4e86\u5e2e\u52a9\u652f\u6301\u63d2\u4ef6\u7684 CLI \u7684\u7a0b\u5e8f\u5728\u7279\u6b8a\u7684 ",(0,o.kt)("inlineCode",{parentName:"li"},"node_modules")," \u7ed3\u6784\u4e2d\u80fd\u591f\u6b63\u786e\u5730\u627e\u5230\u5b83\u4eec\u7684\u63d2\u4ef6\u3002 \u8fd9\u662f\u5f88\u5c11\u6709\u7684\u95ee\u9898\uff0c\u5982\u679c\u60a8\u5e0c\u671b\u6587\u4ef6\u662f JS \u6587\u4ef6\uff0c\u8bf7\u76f4\u63a5\u5f15\u7528\u539f\u59cb\u6587\u4ef6\uff0c\u5982 ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/pnpm/pnpm/issues/736"},"#736")," \u6240\u793a\u3002"),(0,o.kt)("li",{parentName:"ol"},"Node \u7684 ",(0,o.kt)("a",{parentName:"li",href:"https://nodejs.org/api/cli.html#cli_preserve_symlinks"},"--preserve-symlinks")," \u6807\u5fd7\u5728\u4f7f\u7528 pnpm \u7684\u9879\u76ee\u4e2d\u6267\u884c\u65f6\uff0c\u65e0\u6cd5\u6b63\u5e38\u5de5\u4f5c\u3002")),(0,o.kt)("p",null,"\u6709\u5173\u4e8e\u4e0a\u8ff0\u95ee\u9898\u7684\u89e3\u51b3\u65b9\u6cd5\u7684\u60f3\u6cd5\u5417\uff1f ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/pnpm/pnpm/issues/new"},"\u5206\u4eab\u5b83\u4eec\u3002")))}d.isMDXComponent=!0}}]);