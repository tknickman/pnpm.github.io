"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[9194],{9613:(e,n,t)=>{t.d(n,{Zo:()=>u,kt:()=>d});var r=t(9496);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function p(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var l=r.createContext({}),c=function(e){var n=r.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):p(p({},n),e)),t},u=function(e){var n=c(e.components);return r.createElement(l.Provider,{value:n},e.children)},s={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),m=c(t),d=o,y=m["".concat(l,".").concat(d)]||m[d]||s[d]||a;return t?r.createElement(y,p(p({ref:n},u),{},{components:t})):r.createElement(y,p({ref:n},u))}));function d(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=t.length,p=new Array(a);p[0]=m;var i={};for(var l in n)hasOwnProperty.call(n,l)&&(i[l]=n[l]);i.originalType=e,i.mdxType="string"==typeof e?e:o,p[1]=i;for(var c=2;c<a;c++)p[c]=t[c];return r.createElement.apply(null,p)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},2252:(e,n,t)=>{t.r(n),t.d(n,{frontMatter:()=>i,contentTitle:()=>l,metadata:()=>c,assets:()=>u,toc:()=>s,default:()=>d});var r=t(7813),o=t(7044),a=(t(9496),t(9613)),p=["components"],i={id:"only-allow-pnpm",title:"Permita apenas pnpm"},l=void 0,c={unversionedId:"only-allow-pnpm",id:"version-7.x/only-allow-pnpm",title:"Permita apenas pnpm",description:"Quando voc\xea usa pnpm num projeto, voc\xea n\xe3o quer que outros acidentalmente executem npm install ou yarn. Para evitar que os desenvolvedores utilizes outros gerenciadores de pacote, voc\xea pode adicionar o seguinte script preinstall em seu package.json:",source:"@site/i18n/pt/docusaurus-plugin-content-docs/version-7.x/only-allow-pnpm.md",sourceDirName:".",slug:"/only-allow-pnpm",permalink:"/pt/7.x/only-allow-pnpm",editUrl:"https://crowdin.com/project/pnpm/pt-BR",tags:[],version:"7.x",frontMatter:{id:"only-allow-pnpm",title:"Permita apenas pnpm"}},u={},s=[],m={toc:s};function d(e){var n=e.components,t=(0,o.Z)(e,p);return(0,a.kt)("wrapper",(0,r.Z)({},m,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Quando voc\xea usa pnpm num projeto, voc\xea n\xe3o quer que outros acidentalmente executem ",(0,a.kt)("inlineCode",{parentName:"p"},"npm install")," ou ",(0,a.kt)("inlineCode",{parentName:"p"},"yarn"),". Para evitar que os desenvolvedores utilizes outros gerenciadores de pacote, voc\xea pode adicionar o seguinte script ",(0,a.kt)("inlineCode",{parentName:"p"},"preinstall")," em seu ",(0,a.kt)("inlineCode",{parentName:"p"},"package.json"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "scripts": {\n        "preinstall": "npx only-allow pnpm"\n    }\n}\n')),(0,a.kt)("p",null,"Agora, sempre que alguem executar ",(0,a.kt)("inlineCode",{parentName:"p"},"npm install")," ou ",(0,a.kt)("inlineCode",{parentName:"p"},"yarn"),", eles ir\xe3o receber um erro e a instala\xe7\xe3o n\xe3o continuar\xe1."),(0,a.kt)("p",null,"Se voc\xea utiliza npm v7, use ",(0,a.kt)("inlineCode",{parentName:"p"},"npx -y")," ao inv\xe9s disso."))}d.isMDXComponent=!0}}]);