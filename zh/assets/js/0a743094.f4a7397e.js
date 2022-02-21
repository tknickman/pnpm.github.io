"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[2170],{9613:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>k});var n=r(9496);function l(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){l(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,n,l=function(e,t){if(null==e)return{};var r,n,l={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(l[r]=e[r]);return l}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(l[r]=e[r])}return l}var i=n.createContext({}),u=function(e){var t=n.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},s=function(e){var t=u(e.components);return n.createElement(i.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,l=e.mdxType,o=e.originalType,i=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),m=u(r),k=l,d=m["".concat(i,".").concat(k)]||m[k]||c[k]||o;return r?n.createElement(d,a(a({ref:t},s),{},{components:r})):n.createElement(d,a({ref:t},s))}));function k(e,t){var r=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var o=r.length,a=new Array(o);a[0]=m;var p={};for(var i in t)hasOwnProperty.call(t,i)&&(p[i]=t[i]);p.originalType=e,p.mdxType="string"==typeof e?e:l,a[1]=p;for(var u=2;u<o;u++)a[u]=r[u];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},3702:(e,t,r)=>{r.r(t),r.d(t,{frontMatter:()=>p,contentTitle:()=>i,metadata:()=>u,toc:()=>s,default:()=>m});var n=r(9518),l=r(7344),o=(r(9496),r(9613)),a=["components"],p={id:"server",title:"pnpm server"},i=void 0,u={unversionedId:"cli/server",id:"cli/server",title:"pnpm server",description:"\u6dfb\u52a0\u4e8e: v1.30.0",source:"@site/i18n/zh/docusaurus-plugin-content-docs/current/cli/server.md",sourceDirName:"cli",slug:"/cli/server",permalink:"/zh/next/cli/server",editUrl:"https://crowdin.com/project/pnpm/zh-CN",tags:[],version:"current",frontMatter:{id:"server",title:"pnpm server"},sidebar:"docs",previous:{title:"pnpm -r, --recursive",permalink:"/zh/next/cli/recursive"},next:{title:"pnpm store",permalink:"/zh/next/cli/store"}},s=[{value:"\u547d\u4ee4\u884c",id:"\u547d\u4ee4\u884c",children:[{value:"pnpm server start",id:"pnpm-server-start",children:[],level:3},{value:"pnpm server stop",id:"pnpm-server-stop",children:[],level:3},{value:"pnpm server status",id:"pnpm-server-status",children:[],level:3}],level:2},{value:"\u914d\u7f6e\u9879",id:"\u914d\u7f6e\u9879",children:[{value:"--background",id:"--background",children:[],level:3},{value:"--network-concurrency",id:"--network-concurrency",children:[],level:3},{value:"--protocol",id:"--protocol",children:[],level:3},{value:"--port",id:"--port",children:[],level:3},{value:"--store-dir",id:"--store-dir",children:[],level:3},{value:"--no-lock",id:"--no-lock",children:[],level:3},{value:"--ignore-stop-requests",id:"--ignore-stop-requests",children:[],level:3},{value:"--ignore-upload-requests",id:"--ignore-upload-requests",children:[],level:3}],level:2}],c={toc:s};function m(e){var t=e.components,r=(0,l.Z)(e,a);return(0,o.kt)("wrapper",(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"\u6dfb\u52a0\u4e8e: v1.30.0"),(0,o.kt)("p",null,"\u7ba1\u7406\u4e00\u4e2a store \u670d\u52a1\u5668\u3002"),(0,o.kt)("h2",{id:"\u547d\u4ee4\u884c"},"\u547d\u4ee4\u884c"),(0,o.kt)("h3",{id:"pnpm-server-start"},"pnpm server start"),(0,o.kt)("p",null,"\u542f\u52a8\u4e00\u4e2a\u670d\u52a1\u5668\uff08server\uff09\u6765\u6267\u884c\u4e0e",(0,o.kt)("inlineCode",{parentName:"p"},"store"),"\u4e4b\u95f4\u7684\u6240\u6709\u4ea4\u4e92\u3002 \u5176\u4ed6\u547d\u4ee4\u4f1a\u5c06\u4efb\u4f55\u4e0e",(0,o.kt)("inlineCode",{parentName:"p"},"store"),"\u76f8\u5173\u7684\u4efb\u52a1\u59d4\u6258\u7ed9\u8be5\u670d\u52a1\u5668\u3002"),(0,o.kt)("h3",{id:"pnpm-server-stop"},"pnpm server stop"),(0,o.kt)("p",null,"\u5173\u95ed",(0,o.kt)("inlineCode",{parentName:"p"},"store"),"\u670d\u52a1\u5668\u3002"),(0,o.kt)("h3",{id:"pnpm-server-status"},"pnpm server status"),(0,o.kt)("p",null,"\u6253\u5370\u8fd0\u884c\u4e2d\u7684\u670d\u52a1\u5668\u7684\u76f8\u5173\u4fe1\u606f\u3002"),(0,o.kt)("h2",{id:"\u914d\u7f6e\u9879"},"\u914d\u7f6e\u9879"),(0,o.kt)("h3",{id:"--background"},"--background"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"\u9ed8\u8ba4\u503c\uff1a",(0,o.kt)("strong",{parentName:"li"},"false")),(0,o.kt)("li",{parentName:"ul"},"\u7c7b\u578b\uff1a",(0,o.kt)("strong",{parentName:"li"},"Boolean"))),(0,o.kt)("p",null,"\u5728\u540e\u53f0\u8fd0\u884c\u670d\u52a1\u5668\uff0c\u7c7b\u4f3c\u4e8e UNIX \u7cfb\u7edf\u4e0a\u7684\u5b88\u62a4\u8fdb\u7a0b\u3002"),(0,o.kt)("h3",{id:"--network-concurrency"},"--network-concurrency"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"\u9ed8\u8ba4\u503c\uff1a",(0,o.kt)("strong",{parentName:"li"},"null")),(0,o.kt)("li",{parentName:"ul"},"\u7c7b\u578b\uff1a",(0,o.kt)("strong",{parentName:"li"},"Number"))),(0,o.kt)("p",null,"\u540c\u65f6\u5904\u7406\u7684\u6700\u5927\u7f51\u7edc\u8bf7\u6c42\u6570\u3002"),(0,o.kt)("h3",{id:"--protocol"},"--protocol"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"\u9ed8\u8ba4\u503c\uff1a",(0,o.kt)("strong",{parentName:"li"},"auto")),(0,o.kt)("li",{parentName:"ul"},"\u7c7b\u578b\uff1a",(0,o.kt)("strong",{parentName:"li"},"auto"),", ",(0,o.kt)("strong",{parentName:"li"},"tcp"),", ",(0,o.kt)("strong",{parentName:"li"},"ipc"))),(0,o.kt)("p",null,"\u670d\u52a1\u5668\u4f7f\u7528\u7684\u901a\u4fe1\u534f\u8bae\u3002 \u5f53\u5b83\u8bbe\u7f6e\u4e3a ",(0,o.kt)("inlineCode",{parentName:"p"},"auto"),"\u65f6\uff0cIPC \u4f1a\u7528\u4e8e\u9664 Windows \u6240\u6709\u7cfb\u7edf\uff0cWindows \u4f1a\u4f7f\u7528 TCP\u3002"),(0,o.kt)("h3",{id:"--port"},"--port"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"\u9ed8\u8ba4\u503c\uff1a ",(0,o.kt)("strong",{parentName:"li"},"5813")),(0,o.kt)("li",{parentName:"ul"},"\u7c7b\u578b\uff1a",(0,o.kt)("strong",{parentName:"li"},"port number"))),(0,o.kt)("p",null,"\u4f7f\u7528 TCP \u8fdb\u884c\u901a\u4fe1\u65f6\u4f7f\u7528\u7684\u7aef\u53e3\u53f7\u3002 \u5982\u679c\u6307\u5b9a\u4e86\u7aef\u53e3\u5e76\u4e14\u534f\u8bae\u8bbe\u7f6e\u4e3a ",(0,o.kt)("inlineCode",{parentName:"p"},"auto"),"\uff0c\u5219\u65e0\u8bba\u7cfb\u7edf\u7c7b\u578b\u5982\u4f55\uff0c\u534f\u8bae\u90fd\u4f1a\u81ea\u52a8\u8bbe\u7f6e\u4e3a\u4f7f\u7528 TCP\u3002"),(0,o.kt)("h3",{id:"--store-dir"},"--store-dir"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"\u9ed8\u8ba4\u503c\uff1a",(0,o.kt)("strong",{parentName:"li"},"<","home",">","/.pnpm-store")),(0,o.kt)("li",{parentName:"ul"},"\u7c7b\u578b\uff1a",(0,o.kt)("strong",{parentName:"li"},"path"))),(0,o.kt)("p",null,"\u6dfb\u52a0\u4e8e\uff1av1 as",(0,o.kt)("inlineCode",{parentName:"p"},"store")),(0,o.kt)("p",null,"\u7528\u4e8e\u5185\u5bb9\u53ef\u5bfb\u5740\u5b58\u50a8\u7684\u76ee\u5f55\u3002"),(0,o.kt)("h3",{id:"--no-lock"},"--","[no-]","lock"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"\u9ed8\u8ba4\u503c\uff1a",(0,o.kt)("strong",{parentName:"li"},"false")),(0,o.kt)("li",{parentName:"ul"},"\u7c7b\u578b\uff1a",(0,o.kt)("strong",{parentName:"li"},"Boolean"))),(0,o.kt)("p",null,"\u8bbe\u7f6e\u662f\u5426\u4f7f package store \u5bf9\u5916\u90e8\u8fdb\u7a0b\u4e0d\u53ef\u53d8\uff0c\u65e0\u8bba\u670d\u52a1\u5668\u662f\u5426\u8fd0\u884c\u3002"),(0,o.kt)("h3",{id:"--ignore-stop-requests"},"--ignore-stop-requests"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"\u9ed8\u8ba4\u503c\uff1a",(0,o.kt)("strong",{parentName:"li"},"false")),(0,o.kt)("li",{parentName:"ul"},"\u7c7b\u578b\uff1a",(0,o.kt)("strong",{parentName:"li"},"Boolean"))),(0,o.kt)("p",null,"\u963b\u6b62\u60a8\u4f7f\u7528 ",(0,o.kt)("inlineCode",{parentName:"p"},"pnpm server stop")," \u505c\u6b62\u670d\u52a1\u5668\u3002"),(0,o.kt)("h3",{id:"--ignore-upload-requests"},"--ignore-upload-requests"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"\u9ed8\u8ba4\u503c\uff1a ",(0,o.kt)("strong",{parentName:"li"},"false")),(0,o.kt)("li",{parentName:"ul"},"\u7c7b\u578b\uff1a",(0,o.kt)("strong",{parentName:"li"},"Boolean"))),(0,o.kt)("p",null,"\u9632\u6b62\u5728\u5b89\u88c5\u671f\u95f4\u521b\u5efa\u65b0\u7684\u526f\u4f5c\u7528\u7f13\u5b58\u3002"))}m.isMDXComponent=!0}}]);