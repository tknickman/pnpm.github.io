"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[9436],{9613:(e,n,t)=>{t.d(n,{Zo:()=>l,kt:()=>m});var r=t(9496);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function p(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var c=r.createContext({}),s=function(e){var n=r.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},l=function(e){var n=s(e.components);return r.createElement(c.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},f=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,i=e.originalType,c=e.parentName,l=p(e,["components","mdxType","originalType","parentName"]),f=s(t),m=o,d=f["".concat(c,".").concat(m)]||f[m]||u[m]||i;return t?r.createElement(d,a(a({ref:n},l),{},{components:t})):r.createElement(d,a({ref:n},l))}));function m(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var i=t.length,a=new Array(i);a[0]=f;var p={};for(var c in n)hasOwnProperty.call(n,c)&&(p[c]=n[c]);p.originalType=e,p.mdxType="string"==typeof e?e:o,a[1]=p;for(var s=2;s<i;s++)a[s]=t[s];return r.createElement.apply(null,a)}return r.createElement.apply(null,t)}f.displayName="MDXCreateElement"},3380:(e,n,t)=>{t.r(n),t.d(n,{frontMatter:()=>p,contentTitle:()=>c,metadata:()=>s,assets:()=>l,toc:()=>u,default:()=>m});var r=t(7813),o=t(7044),i=(t(9496),t(9613)),a=["components"],p={id:"configuring",title:"Configuring"},c=void 0,s={unversionedId:"configuring",id:"version-7.x/configuring",title:"Configuring",description:"pnpm uses npm's configuration formats. Hence, you should set configuration the same way you would for npm. For example,",source:"@site/i18n/ko/docusaurus-plugin-content-docs/version-7.x/configuring.md",sourceDirName:".",slug:"/configuring",permalink:"/ko/7.x/configuring",editUrl:"https://crowdin.com/project/pnpm/ko",tags:[],version:"7.x",frontMatter:{id:"configuring",title:"Configuring"},sidebar:"version-7.x/docs",previous:{title:"pnpx CLI",permalink:"/ko/7.x/pnpx-cli"},next:{title:"\ud544\ud130\ub9c1",permalink:"/ko/7.x/filtering"}},l={},u=[],f={toc:u};function m(e){var n=e.components,t=(0,o.Z)(e,a);return(0,i.kt)("wrapper",(0,r.Z)({},f,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"pnpm uses ",(0,i.kt)("a",{parentName:"p",href:"https://docs.npmjs.com/misc/config"},"npm's configuration")," formats. Hence, you should set configuration the same way you would for npm. For example,"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"pnpm config set store-dir /path/to/.pnpm-store\n")),(0,i.kt)("p",null,"If no store is configured, then pnpm will automatically create a store on the same drive. If you need pnpm to work across multiple hard drives or filesystems, please read ",(0,i.kt)("a",{parentName:"p",href:"/ko/7.x/faq#does-pnpm-work-across-multiple-hard-drives-or-filesystems"},"the FAQ"),"."),(0,i.kt)("p",null,"Furthermore, pnpm uses the same configuration that npm uses for doing installations. If you have a private registry and npm is configured to work with it, pnpm should be able to authorize requests as well, with no additional configuration."),(0,i.kt)("p",null,"In addition to those options, pnpm also allows you to use all parameters that are flags (for example ",(0,i.kt)("inlineCode",{parentName:"p"},"--filter")," or ",(0,i.kt)("inlineCode",{parentName:"p"},"--workspace-concurrency"),") as options:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"workspace-concurrency = 1\nfilter = @my-scope/*\n")),(0,i.kt)("p",null,"See the ",(0,i.kt)("a",{parentName:"p",href:"/ko/7.x/cli/config"},(0,i.kt)("inlineCode",{parentName:"a"},"config")," command")," for more information."))}m.isMDXComponent=!0}}]);