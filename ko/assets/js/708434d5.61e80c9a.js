"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[8493],{9613:(e,n,t)=>{t.d(n,{Zo:()=>u,kt:()=>s});var r=t(9496);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function p(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var l=r.createContext({}),c=function(e){var n=r.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},u=function(e){var n=c(e.components);return r.createElement(l.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,u=p(e,["components","mdxType","originalType","parentName"]),m=c(t),s=o,f=m["".concat(l,".").concat(s)]||m[s]||d[s]||i;return t?r.createElement(f,a(a({ref:n},u),{},{components:t})):r.createElement(f,a({ref:n},u))}));function s(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var i=t.length,a=new Array(i);a[0]=m;var p={};for(var l in n)hasOwnProperty.call(n,l)&&(p[l]=n[l]);p.originalType=e,p.mdxType="string"==typeof e?e:o,a[1]=p;for(var c=2;c<i;c++)a[c]=t[c];return r.createElement.apply(null,a)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},9671:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>u,contentTitle:()=>l,default:()=>s,frontMatter:()=>p,metadata:()=>c,toc:()=>d});var r=t(2182),o=t(9028),i=(t(9496),t(9613)),a=["components"],p={id:"prune",title:"pnpm prune"},l=void 0,c={unversionedId:"cli/prune",id:"cli/prune",title:"pnpm prune",description:"\ubd88\ud544\uc694\ud55c \ud328\ud0a4\uc9c0\ub97c \uc81c\uac70\ud569\ub2c8\ub2e4.",source:"@site/i18n/ko/docusaurus-plugin-content-docs/current/cli/prune.md",sourceDirName:"cli",slug:"/cli/prune",permalink:"/ko/next/cli/prune",editUrl:"https://crowdin.com/project/pnpm/ko",tags:[],version:"current",frontMatter:{id:"prune",title:"pnpm prune"},sidebar:"docs",previous:{title:"pnpm rebuild",permalink:"/ko/next/cli/rebuild"},next:{title:"pnpm fetch",permalink:"/ko/next/cli/fetch"}},u={},d=[{value:"\uc635\uc158",id:"\uc635\uc158",level:2},{value:"--prod",id:"--prod",level:3},{value:"--no-optional",id:"--no-optional",level:3}],m={toc:d};function s(e){var n=e.components,t=(0,o.Z)(e,a);return(0,i.kt)("wrapper",(0,r.Z)({},m,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"\ubd88\ud544\uc694\ud55c \ud328\ud0a4\uc9c0\ub97c \uc81c\uac70\ud569\ub2c8\ub2e4."),(0,i.kt)("h2",{id:"\uc635\uc158"},"\uc635\uc158"),(0,i.kt)("h3",{id:"--prod"},"--prod"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"devDependencies"),"\uc5d0 \uc9c0\uc815\ub41c \ud328\ud0a4\uc9c0\ub97c \uc81c\uac70\ud569\ub2c8\ub2e4."),(0,i.kt)("h3",{id:"--no-optional"},"--no-optional"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"optionalDependencies"),"\uc5d0 \uc9c0\uc815\ub41c \ud328\ud0a4\uc9c0\ub97c \uc81c\uac70\ud569\ub2c8\ub2e4."),(0,i.kt)("div",{className:"admonition admonition-warning alert alert--danger"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"}))),"warning")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"prune \uba85\ub839\uc740 \ud604\uc7ac monorepo\uc5d0\uc11c \uc7ac\uadc0 \uc2e4\ud589\uc744 \uc9c0\uc6d0\ud558\uc9c0 \uc54a\uc2b5\ub2c8\ub2e4. monorepo\uc5d0\uc11c \ud504\ub85c\ub355\uc158 \uc758\uc874\uc131\ub9cc \uc124\uce58\ud558\ub824\uba74, ",(0,i.kt)("inlineCode",{parentName:"p"},"node_modules")," \ud3f4\ub354\ub97c \uc0ad\uc81c\ud55c \ub2e4\uc74c ",(0,i.kt)("inlineCode",{parentName:"p"},"pnpm install --prod"),"\uc73c\ub85c \ub2e4\uc2dc \uc124\uce58\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."))))}s.isMDXComponent=!0}}]);