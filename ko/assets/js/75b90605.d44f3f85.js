"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[9232],{9613:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var r=n(9496);function p(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){p(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,p=function(e,t){if(null==e)return{};var n,r,p={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(p[n]=e[n]);return p}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(p[n]=e[n])}return p}var c=r.createContext({}),i=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=i(e.components);return r.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},s=r.forwardRef((function(e,t){var n=e.components,p=e.mdxType,a=e.originalType,c=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),s=i(n),m=p,k=s["".concat(c,".").concat(m)]||s[m]||d[m]||a;return n?r.createElement(k,l(l({ref:t},u),{},{components:n})):r.createElement(k,l({ref:t},u))}));function m(e,t){var n=arguments,p=t&&t.mdxType;if("string"==typeof e||p){var a=n.length,l=new Array(a);l[0]=s;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o.mdxType="string"==typeof e?e:p,l[1]=o;for(var i=2;i<a;i++)l[i]=n[i];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}s.displayName="MDXCreateElement"},1228:(e,t,n)=>{n.r(t),n.d(t,{frontMatter:()=>o,contentTitle:()=>c,metadata:()=>i,assets:()=>u,toc:()=>d,default:()=>m});var r=n(7813),p=n(7044),a=(n(9496),n(9613)),l=["components"],o={id:"dlx",title:"pnpm dlx"},c=void 0,i={unversionedId:"cli/dlx",id:"version-7.x/cli/dlx",title:"pnpm dlx",description:"\ubc84\uc804 6.13.0\uc5d0\uc11c \ucd94\uac00\ub428",source:"@site/i18n/ko/docusaurus-plugin-content-docs/version-7.x/cli/dlx.md",sourceDirName:"cli",slug:"/cli/dlx",permalink:"/ko/7.x/cli/dlx",editUrl:"https://crowdin.com/project/pnpm/ko",tags:[],version:"7.x",frontMatter:{id:"dlx",title:"pnpm dlx"},sidebar:"version-7.x/docs",previous:{title:"pnpm exec",permalink:"/ko/7.x/cli/exec"},next:{title:"pnpm create",permalink:"/ko/7.x/cli/create"}},u={},d=[{value:"\uc635\uc158",id:"\uc635\uc158",level:2},{value:"--package &lt;\uc774\ub984&gt;",id:"--package-\uc774\ub984",level:3},{value:"--silent, -s",id:"--silent--s",level:3}],s={toc:d};function m(e){var t=e.components,n=(0,p.Z)(e,l);return(0,a.kt)("wrapper",(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"\ubc84\uc804 6.13.0\uc5d0\uc11c \ucd94\uac00\ub428"),(0,a.kt)("p",null,"\uc758\uc874\uc131\uc73c\ub85c \uc124\uce58\ud558\uc9c0 \uc54a\uace0 \ub808\uc9c0\uc2a4\ud2b8\ub9ac\uc5d0\uc11c \ud328\ud0a4\uc9c0\ub97c \uac00\uc838\uc640 \ud56b\ub85c\ub4dc\ud558\uace0 \ub178\ucd9c\ud558\ub294 \uae30\ubcf8 \uba85\ub839 \ubc14\uc774\ub108\ub9ac\ub97c \uc2e4\ud589\ud569\ub2c8\ub2e4."),(0,a.kt)("p",null,"For example, to use ",(0,a.kt)("inlineCode",{parentName:"p"},"create-react-app")," anywhere to bootstrap a react app without needing to install it under another project, you can run:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"pnpm dlx create-react-app ./my-app\n")),(0,a.kt)("p",null,"\ub808\uc9c0\uc2a4\ud2b8\ub9ac\uc5d0\uc11c ",(0,a.kt)("inlineCode",{parentName:"p"},"create-react-app")," \uc744 \uac00\uc838\uc640\uc11c \uc8fc\uc5b4\uc9c4 \uc778\uc218\ub85c \uc2e4\ud589\ud560 \uac83\uc785\ub2c8\ub2e4."),(0,a.kt)("p",null,"v6.23.1 \ubd80\ud130 \uc0ac\uc6a9\ud560 \ud328\ud0a4\uc9c0\uc758 \uc815\ud655\ud55c \ubc84\uc804\uc744 \uc9c0\uc815\ud560 \uc218\ub3c4 \uc788\uc2b5\ub2c8\ub2e4."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"pnpm dlx create-react-app@next ./my-app\n")),(0,a.kt)("h2",{id:"\uc635\uc158"},"\uc635\uc158"),(0,a.kt)("h3",{id:"--package-\uc774\ub984"},"--package ","<","\uc774\ub984",">"),(0,a.kt)("p",null,"\uba85\ub839\uc744 \uc2e4\ud589\ud558\uae30 \uc804\uc5d0 \uc124\uce58\ud560 \ud328\ud0a4\uc9c0\ub97c \uc785\ub825\ud569\ub2c8\ub2e4."),(0,a.kt)("p",null,"Example:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"pnpm --package=@pnpm/meta-updater dlx meta-updater --help\npnpm --package=@pnpm/meta-updater@0 dlx meta-updater --help\n")),(0,a.kt)("p",null,"v6.14.5\ubd80\ud130 \uc124\uce58\ub97c \uc704\ud574 \uc5ec\ub7ec \ud328\ud0a4\uc9c0\ub97c \uc81c\uacf5\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"pnpm --package=yo --package=generator-webapp dlx yo webapp --skip-install\n")),(0,a.kt)("h3",{id:"--silent--s"},"--silent, -s"),(0,a.kt)("p",null,"\ubc84\uc804 6.17.0\uc5d0\uc11c \ucd94\uac00\ub428"),(0,a.kt)("p",null,"\uc2e4\ud589\ub41c \uba85\ub839\uc758 \uacb0\uacfc\ub9cc \ucd9c\ub825\ub429\ub2c8\ub2e4."))}m.isMDXComponent=!0}}]);