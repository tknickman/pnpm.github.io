"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[3847],{9613:(e,n,t)=>{t.d(n,{Zo:()=>s,kt:()=>u});var r=t(9496);function p(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){p(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,p=function(e,n){if(null==e)return{};var t,r,p={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(p[t]=e[t]);return p}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(p[t]=e[t])}return p}var i=r.createContext({}),c=function(e){var n=r.useContext(i),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},s=function(e){var n=c(e.components);return r.createElement(i.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,p=e.mdxType,o=e.originalType,i=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),m=c(t),u=p,f=m["".concat(i,".").concat(u)]||m[u]||d[u]||o;return t?r.createElement(f,a(a({ref:n},s),{},{components:t})):r.createElement(f,a({ref:n},s))}));function u(e,n){var t=arguments,p=n&&n.mdxType;if("string"==typeof e||p){var o=t.length,a=new Array(o);a[0]=m;var l={};for(var i in n)hasOwnProperty.call(n,i)&&(l[i]=n[i]);l.originalType=e,l.mdxType="string"==typeof e?e:p,a[1]=l;for(var c=2;c<o;c++)a[c]=t[c];return r.createElement.apply(null,a)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},6072:(e,n,t)=>{t.r(n),t.d(n,{frontMatter:()=>l,contentTitle:()=>i,metadata:()=>c,assets:()=>s,toc:()=>d,default:()=>u});var r=t(7813),p=t(7044),o=(t(9496),t(9613)),a=["components"],l={id:"fetch",title:"pnpm fetch"},i=void 0,c={unversionedId:"cli/fetch",id:"version-7.x/cli/fetch",title:"pnpm fetch",description:"\u5c06 lockfile \u4e2d\u5217\u51fa\u5305\u4e0b\u8f7d\u5230\u865a\u62df\u5b58\u50a8\u4e2d\uff0c\u5305\u6e05\u5355\u88ab\u5ffd\u7565\u3002",source:"@site/i18n/zh/docusaurus-plugin-content-docs/version-7.x/cli/fetch.md",sourceDirName:"cli",slug:"/cli/fetch",permalink:"/zh/7.x/cli/fetch",editUrl:"https://crowdin.com/project/pnpm/zh-CN",tags:[],version:"7.x",frontMatter:{id:"fetch",title:"pnpm fetch"},sidebar:"version-7.x/docs",previous:{title:"pnpm prune",permalink:"/zh/7.x/cli/prune"},next:{title:"pnpm install-test",permalink:"/zh/7.x/cli/install-test"}},s={},d=[{value:"\u4f7f\u7528\u573a\u666f",id:"\u4f7f\u7528\u573a\u666f",level:2},{value:"\u914d\u7f6e\u9879",id:"\u914d\u7f6e\u9879",level:2},{value:"--dev",id:"--dev",level:3},{value:"--prod",id:"--prod",level:3}],m={toc:d};function u(e){var n=e.components,t=(0,p.Z)(e,a);return(0,o.kt)("wrapper",(0,r.Z)({},m,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"\u5c06 lockfile \u4e2d\u5217\u51fa\u5305\u4e0b\u8f7d\u5230\u865a\u62df\u5b58\u50a8\u4e2d\uff0c\u5305\u6e05\u5355\u88ab\u5ffd\u7565\u3002"),(0,o.kt)("div",{className:"admonition admonition-warning alert alert--danger"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"}))),"warning")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"\u8fd9\u662f\u4e00\u4e2a\u5b9e\u9a8c\u6027\u7684\u547d\u4ee4\u3002 \u53ef\u80fd\u4f1a\u5728 CLI \u7684\u975e\u4e3b\u8981\u7248\u672c\u4e2d\u5f15\u5165\u91cd\u5927\u66f4\u6539\u3002"))),(0,o.kt)("h2",{id:"\u4f7f\u7528\u573a\u666f"},"\u4f7f\u7528\u573a\u666f"),(0,o.kt)("p",null,"\u6b64\u547d\u4ee4\u4e13\u95e8\u7528\u4e8e\u52a0\u901f\u6784\u5efa docker \u6620\u50cf\u3002"),(0,o.kt)("p",null,"\u60a8\u53ef\u80fd\u5df2\u7ecf\u9605\u8bfb\u4e86 ",(0,o.kt)("a",{parentName:"p",href:"https://nodejs.org/en/docs/guides/nodejs-docker-webapp/"},"\u5b98\u65b9\u6307\u5357")," \u4e3a Node.js \u5e94\u7528\u7a0b\u5e8f\u7f16\u5199 Dockerfile\uff0c\u5982\u679c\u60a8\u8fd8\u6ca1\u6709\u9605\u8bfb\u5b83\uff0c\u60a8\u53ef\u80fd\u60f3\u5148\u9605\u8bfb\u5b83\u3002"),(0,o.kt)("p",null,"\u4ece\u8be5\u6307\u5357\u4e2d\uff0c\u6211\u4eec\u53ef\u4ee5\u5b66\u4f1a\u5982\u4f55\u4e3a\u4f7f\u7528 pnpm \u7684\u9879\u76ee\u7f16\u5199\u4f18\u5316\u7684 Dockerfile \uff0c\u8fd9\u5c06\u7c7b\u4f3c\u4e8e"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-Dockerfile"},'FROM node:14\n\nRUN curl -f https://get.pnpm.io/v6.16.js | node - add --global pnpm\n\n# Files required by pnpm install\nCOPY .npmrc package.json pnpm-lock.yaml .pnpmfile.cjs ./\n\nRUN pnpm install --frozen-lockfile --prod\n\n# Bundle app source\nCOPY . .\n\nEXPOSE 8080\nCMD [ "node", "server.js" ]\n')),(0,o.kt)("p",null,"\u53ea\u8981\u4e0d\u66f4\u6539 ",(0,o.kt)("inlineCode",{parentName:"p"},".npmrc"),"\uff0c ",(0,o.kt)("inlineCode",{parentName:"p"},"package.json"),"\uff0c ",(0,o.kt)("inlineCode",{parentName:"p"},"pnpm-lock.yaml"),"\uff0c ",(0,o.kt)("inlineCode",{parentName:"p"},".pnpmfile.cjs"),"\uff0c Docker \u6784\u5efa\u7f13\u5b58\u4ecd\u7136\u6709\u6548\u81f3 ",(0,o.kt)("inlineCode",{parentName:"p"},"RUN pnpm install --frozen-lockfile --prod"),"\uff0c\u8fd9\u5728\u6784\u5efa Docker \u6620\u50cf\u65f6\u82b1\u8d39\u4e86\u5927\u90e8\u5206\u65f6\u95f4 \u3002"),(0,o.kt)("p",null,"\u4f46\u662f\uff0c\u5bf9 ",(0,o.kt)("inlineCode",{parentName:"p"},"package.json")," \u7684\u4fee\u6539\u53ef\u80fd\u6bd4\u6211\u4eec\u9884\u671f\u7684 \u9891\u7e41\u5f97\u591a\uff0c\u56e0\u4e3a\u5b83\u4e0d\u4ec5\u5305\u542b\u4f9d\u8d56\u5173\u7cfb\uff0c\u800c\u4e14\u8fd8\u53ef\u80fd \u5305\u542b\u7248\u672c\u53f7\uff0c\u811a\u672c\u548c\u5176\u4ed6\u5de5\u5177\u7684\u4efb\u610f\u914d\u7f6e\u3002"),(0,o.kt)("p",null,"\u7ef4\u62a4\u4e00\u4e2a\u6784\u5efa monorepo \u9879\u76ee\u7684 Dockerfile \u4e5f\u5f88\u56f0\u96be\uff0c\u5b83\u53ef\u80fd\u770b\u8d77\u6765\u50cf"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-Dockerfile"},'FROM node:14\n\nRUN curl -f https://get.pnpm.io/v6.16.js | node - add --global pnpm\n\n# Files required by pnpm install\nCOPY .npmrc package.json pnpm-lock.yaml .pnpmfile.cjs ./\n\n# for each sub-package, we have to add one extra step to copy its manifest\n# to the right place, as docker have no way to filter out only package.json with\n# single instruction\nCOPY packages/foo/package.json packages/foo/\nCOPY packages/bar/package.json packages/bar/\n\nRUN pnpm install --frozen-lockfile --prod\n\n# Bundle app source\nCOPY . .\n\nEXPOSE 8080\nCMD [ "node", "server.js" ]\n\n')),(0,o.kt)("p",null,"\u5982\u60a8\u6240\u89c1\uff0c\u5f53\u60a8\u6dfb\u52a0\u6216\u5220\u9664\u5b50\u5305\u65f6\uff0c\u5fc5\u987b\u66f4\u65b0 Dockerfile\u3002"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"pnpm fetch")," \u5c06\u901a\u8fc7\u63d0\u4f9b\u4ec5\u4ece lockfile \u4e2d\u4e0b\u8f7d\u5305\u81f3\u865a\u62df\u5b58\u50a8\u4e2d\u6765\u5b8c\u7f8e\u5730\u89e3\u51b3\u4e0a\u8ff0\u95ee\u9898\u3002"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-Dockerfile"},'FROM node:14\n\nRUN curl -f https://get.pnpm.io/v6.16.js | node - add --global pnpm\n\n# pnpm fetch does require only lockfile\nCOPY pnpm-lock.yaml ./\n\nRUN pnpm fetch --prod\n\n\nADD . ./\nRUN pnpm install -r --offline --prod\n\n\nEXPOSE 8080\nCMD [ "node", "server.js" ]\n')),(0,o.kt)("p",null,"\u5b83\u65e2\u9002\u7528\u4e8e\u7b80\u5355\u9879\u76ee\uff0c\u4e5f\u9002\u7528\u4e8e monorepo \u9879\u76ee\uff0c ",(0,o.kt)("inlineCode",{parentName:"p"},"--offline")," \u5f3a\u5236 pnpm \u4e0d\u4e0epackage registry\u901a\u4fe1\uff0c\u56e0\u4e3a\u6240\u6709\u9700\u8981\u7684\u5305\u90fd\u5e94\u8be5\u5df2\u7ecf\u5b58\u5728\u4e8e\u865a\u62df\u5b58\u50a8\u4e2d\u3002"),(0,o.kt)("p",null,"\u53ea\u8981 lockfile \u6ca1\u6709\u6539\u53d8\uff0c\u6784\u5efa\u7f13\u5b58\u4e00\u76f4\u6709\u6548\u5230 ",(0,o.kt)("inlineCode",{parentName:"p"},"RUN pnpm install -r --offline --prod")," \u8fd9\u4e2a layer\uff0c\u8fd9\u5c06\u4e3a\u60a8\u8282\u7701\u5f88\u591a\u65f6\u95f4\u3002"),(0,o.kt)("h2",{id:"\u914d\u7f6e\u9879"},"\u914d\u7f6e\u9879"),(0,o.kt)("h3",{id:"--dev"},"--dev"),(0,o.kt)("p",null,"\u53ea\u4f1a\u83b7\u53d6\u5f00\u53d1\u5305"),(0,o.kt)("h3",{id:"--prod"},"--prod"),(0,o.kt)("p",null,"\u4e0d\u4f1a\u83b7\u53d6\u5f00\u53d1\u5305"))}u.isMDXComponent=!0}}]);