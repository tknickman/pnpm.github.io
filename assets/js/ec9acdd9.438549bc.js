"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[9287],{9613:(e,t,r)=>{r.d(t,{Zo:()=>l,kt:()=>f});var n=r(9496);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=n.createContext({}),s=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},l=function(e){var t=s(e.components);return n.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,l=p(e,["components","mdxType","originalType","parentName"]),m=s(r),f=a,d=m["".concat(c,".").concat(f)]||m[f]||u[f]||i;return r?n.createElement(d,o(o({ref:t},l),{},{components:r})):n.createElement(d,o({ref:t},l))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=m;var p={};for(var c in t)hasOwnProperty.call(t,c)&&(p[c]=t[c]);p.originalType=e,p.mdxType="string"==typeof e?e:a,o[1]=p;for(var s=2;s<i;s++)o[s]=r[s];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},3893:(e,t,r)=>{r.r(t),r.d(t,{frontMatter:()=>p,contentTitle:()=>c,metadata:()=>s,assets:()=>l,toc:()=>u,default:()=>f});var n=r(7813),a=r(7044),i=(r(9496),r(9613)),o=["components"],p={id:"start",title:"pnpm start"},c=void 0,s={unversionedId:"cli/start",id:"version-7.x/cli/start",title:"pnpm start",description:"Aliases: run start",source:"@site/versioned_docs/version-7.x/cli/start.md",sourceDirName:"cli",slug:"/cli/start",permalink:"/7.x/cli/start",editUrl:"https://github.com/pnpm/pnpm.github.io/edit/main/docs/cli/start.md",tags:[],version:"7.x",frontMatter:{id:"start",title:"pnpm start"},sidebar:"version-7.x/docs",previous:{title:"pnpm create",permalink:"/7.x/cli/create"},next:{title:"pnpm env <cmd>",permalink:"/7.x/cli/env"}},l={},u=[],m={toc:u};function f(e){var t=e.components,r=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,n.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Aliases: ",(0,i.kt)("inlineCode",{parentName:"p"},"run start")),(0,i.kt)("p",null,"Runs an arbitrary command specified in the package's ",(0,i.kt)("inlineCode",{parentName:"p"},"start")," property of its\n",(0,i.kt)("inlineCode",{parentName:"p"},"scripts")," object. If no ",(0,i.kt)("inlineCode",{parentName:"p"},"start")," property is specified on the ",(0,i.kt)("inlineCode",{parentName:"p"},"scripts")," object,\nit will attempt to run ",(0,i.kt)("inlineCode",{parentName:"p"},"node server.js")," as a default, failing if neither are\npresent."),(0,i.kt)("p",null,"The intended usage of the property is to specify a command that starts your\nprogram."))}f.isMDXComponent=!0}}]);