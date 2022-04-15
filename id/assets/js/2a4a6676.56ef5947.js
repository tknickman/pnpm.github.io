"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[9373],{9613:(e,n,t)=>{t.d(n,{Zo:()=>k,kt:()=>m});var i=t(9496);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);n&&(i=i.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,i)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function p(e,n){if(null==e)return{};var t,i,r=function(e,n){if(null==e)return{};var t,i,r={},l=Object.keys(e);for(i=0;i<l.length;i++)t=l[i],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(i=0;i<l.length;i++)t=l[i],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var o=i.createContext({}),d=function(e){var n=i.useContext(o),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},k=function(e){var n=d(e.components);return i.createElement(o.Provider,{value:n},e.children)},c={inlineCode:"code",wrapper:function(e){var n=e.children;return i.createElement(i.Fragment,{},n)}},u=i.forwardRef((function(e,n){var t=e.components,r=e.mdxType,l=e.originalType,o=e.parentName,k=p(e,["components","mdxType","originalType","parentName"]),u=d(t),m=r,s=u["".concat(o,".").concat(m)]||u[m]||c[m]||l;return t?i.createElement(s,a(a({ref:n},k),{},{components:t})):i.createElement(s,a({ref:n},k))}));function m(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var l=t.length,a=new Array(l);a[0]=u;var p={};for(var o in n)hasOwnProperty.call(n,o)&&(p[o]=n[o]);p.originalType=e,p.mdxType="string"==typeof e?e:r,a[1]=p;for(var d=2;d<l;d++)a[d]=t[d];return i.createElement.apply(null,a)}return i.createElement.apply(null,t)}u.displayName="MDXCreateElement"},5562:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>k,contentTitle:()=>o,default:()=>m,frontMatter:()=>p,metadata:()=>d,toc:()=>c});var i=t(2182),r=t(9028),l=(t(9496),t(9613)),a=["components"],p={id:"link",title:"pnpm link"},o=void 0,d={unversionedId:"cli/link",id:"cli/link",title:"pnpm link",description:"Alias: ln",source:"@site/i18n/id/docusaurus-plugin-content-docs/current/cli/link.md",sourceDirName:"cli",slug:"/cli/link",permalink:"/id/next/cli/link",editUrl:"https://crowdin.com/project/pnpm/id",tags:[],version:"current",frontMatter:{id:"link",title:"pnpm link"},sidebar:"docs",previous:{title:"pnpm remove",permalink:"/id/next/cli/remove"},next:{title:"pnpm unlink",permalink:"/id/next/cli/unlink"}},k={},c=[{value:"Opsi",id:"opsi",level:2},{value:"--dir &lt;dir&gt;, -C",id:"--dir-dir--c",level:3},{value:"<code>pnpm link &lt;dir&gt;</code>",id:"pnpm-link-dir",level:3},{value:"<code>pnpm link --global</code>",id:"pnpm-link---global",level:3},{value:"<code>pnpm link --global &lt;pkg&gt;</code>",id:"pnpm-link---global-pkg",level:3}],u={toc:c};function m(e){var n=e.components,t=(0,r.Z)(e,a);return(0,l.kt)("wrapper",(0,i.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"Alias: ",(0,l.kt)("inlineCode",{parentName:"p"},"ln")),(0,l.kt)("p",null,"Menjadikan paket lokal saat ini dapat diakses di seluruh sistem, atau di lokasi lain."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-text"},"pnpm link <dir>\npnpm link --global\npnpm link --global <pkg>\n")),(0,l.kt)("h2",{id:"opsi"},"Opsi"),(0,l.kt)("h3",{id:"--dir-dir--c"},"--dir ","<","dir",">",", -C"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Asali"),": Direktori kerja saat ini"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Tipe"),": String jalur lokasi")),(0,l.kt)("p",null,"Mengubah lokasi tautan menjadi ",(0,l.kt)("inlineCode",{parentName:"p"},"<dir>"),"."),(0,l.kt)("h3",{id:"pnpm-link-dir"},(0,l.kt)("inlineCode",{parentName:"h3"},"pnpm link <dir>")),(0,l.kt)("p",null,"Menautkan paket dari folder ",(0,l.kt)("inlineCode",{parentName:"p"},"<dir>")," ke paket node_modules daro tempat Anda menjalankan perintah ini atau ditentukan melalui opsi ",(0,l.kt)("inlineCode",{parentName:"p"},"--dir"),"."),(0,l.kt)("h3",{id:"pnpm-link---global"},(0,l.kt)("inlineCode",{parentName:"h3"},"pnpm link --global")),(0,l.kt)("p",null,"Menautkan paket dari lokasi tempat perintah ini dijalankan atau ditentukan melalui opsi ",(0,l.kt)("inlineCode",{parentName:"p"},"--dir")," ke global ",(0,l.kt)("inlineCode",{parentName:"p"},"node_modules"),", sehingga dapat dirujuk dari paket lain dengan ",(0,l.kt)("inlineCode",{parentName:"p"},"pnpm link --global <pkg>"),"."),(0,l.kt)("h3",{id:"pnpm-link---global-pkg"},(0,l.kt)("inlineCode",{parentName:"h3"},"pnpm link --global <pkg>")),(0,l.kt)("p",null,"Links the specified package (",(0,l.kt)("inlineCode",{parentName:"p"},"<pkg>"),") from global ",(0,l.kt)("inlineCode",{parentName:"p"},"node_modules")," to the ",(0,l.kt)("inlineCode",{parentName:"p"},"node_modules")," of package from where this command was executed or specified via ",(0,l.kt)("inlineCode",{parentName:"p"},"--dir")," option."))}m.isMDXComponent=!0}}]);