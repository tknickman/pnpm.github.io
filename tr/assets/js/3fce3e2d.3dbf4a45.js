"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[2991],{9613:(e,r,n)=>{n.d(r,{Zo:()=>c,kt:()=>d});var a=n(9496);function t(e,r,n){return r in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e}function i(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);r&&(a=a.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?i(Object(n),!0).forEach((function(r){t(e,r,n[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))}))}return e}function o(e,r){if(null==e)return{};var n,a,t=function(e,r){if(null==e)return{};var n,a,t={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],r.indexOf(n)>=0||(t[n]=e[n]);return t}(e,r);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],r.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(t[n]=e[n])}return t}var p=a.createContext({}),m=function(e){var r=a.useContext(p),n=r;return e&&(n="function"==typeof e?e(r):l(l({},r),e)),n},c=function(e){var r=m(e.components);return a.createElement(p.Provider,{value:r},e.children)},u={inlineCode:"code",wrapper:function(e){var r=e.children;return a.createElement(a.Fragment,{},r)}},s=a.forwardRef((function(e,r){var n=e.components,t=e.mdxType,i=e.originalType,p=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),s=m(n),d=t,y=s["".concat(p,".").concat(d)]||s[d]||u[d]||i;return n?a.createElement(y,l(l({ref:r},c),{},{components:n})):a.createElement(y,l({ref:r},c))}));function d(e,r){var n=arguments,t=r&&r.mdxType;if("string"==typeof e||t){var i=n.length,l=new Array(i);l[0]=s;var o={};for(var p in r)hasOwnProperty.call(r,p)&&(o[p]=r[p]);o.originalType=e,o.mdxType="string"==typeof e?e:t,l[1]=o;for(var m=2;m<i;m++)l[m]=n[m];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}s.displayName="MDXCreateElement"},6422:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>c,contentTitle:()=>p,default:()=>d,frontMatter:()=>o,metadata:()=>m,toc:()=>u});var a=n(2182),t=n(9028),i=(n(9496),n(9613)),l=["components"],o={id:"configuring",title:"Yap\u0131land\u0131rma"},p=void 0,m={unversionedId:"configuring",id:"configuring",title:"Yap\u0131land\u0131rma",description:"pnpm'in ayar yap\u0131s\u0131, npm'in yap\u0131land\u0131rma format\u0131 ile ayn\u0131d\u0131r. Olas\u0131 bir durumda ayarlar\u0131 de\u011fi\u015ftirmek istersen, npm i\xe7in \xf6nerilen ve kullan\u0131lan yap\u0131land\u0131rma komutlar\u0131n\u0131 kullanabilirsin. Ayn\u0131 \u015fekilde \xe7al\u0131\u015facaklard\u0131r. \xd6rne\u011fin;",source:"@site/i18n/tr/docusaurus-plugin-content-docs/current/configuring.md",sourceDirName:".",slug:"/configuring",permalink:"/tr/next/configuring",editUrl:"https://crowdin.com/project/pnpm/tr",tags:[],version:"current",frontMatter:{id:"configuring",title:"Yap\u0131land\u0131rma"},sidebar:"docs",previous:{title:"pnpm CLI",permalink:"/tr/next/pnpm-cli"},next:{title:"Filtreleme",permalink:"/tr/next/filtering"}},c={},u=[],s={toc:u};function d(e){var r=e.components,n=(0,t.Z)(e,l);return(0,i.kt)("wrapper",(0,a.Z)({},s,n,{components:r,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"pnpm'in ayar yap\u0131s\u0131, ",(0,i.kt)("a",{parentName:"p",href:"https://docs.npmjs.com/misc/config"},"npm'in yap\u0131land\u0131rma format\u0131")," ile ayn\u0131d\u0131r. Olas\u0131 bir durumda ayarlar\u0131 de\u011fi\u015ftirmek istersen, npm i\xe7in \xf6nerilen ve kullan\u0131lan yap\u0131land\u0131rma komutlar\u0131n\u0131 kullanabilirsin. Ayn\u0131 \u015fekilde \xe7al\u0131\u015facaklard\u0131r. \xd6rne\u011fin;"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"pnpm config set store-dir /depolama/konumu/.pnpm-store\n")),(0,i.kt)("p",null,"Depolama klas\xf6r\xfc bir her hangi sebepten dolay\u0131 tan\u0131mlanmam\u0131\u015fsa veya bulunmuyorsa e\u011fer; pnpm, otomatik olarak ayn\u0131 disk \xfczerinde yeni bir klas\xf6r olu\u015fturarak, \xe7al\u0131\u015fmaya devam edecektir. Ek olarak, pnpm'in birden fazla disk veya dosya sistemiyle uyumlu olarak \xe7al\u0131\u015fmas\u0131na ihtiyac\u0131n varsa e\u011fer, ",(0,i.kt)("a",{parentName:"p",href:"/tr/next/faq#does-pnpm-work-across-multiple-hard-drives-or-filesystems"},"S.S.S k\u0131sm\u0131n\u0131")," okuyabilirsin."),(0,i.kt)("p",null,"Ayr\u0131ca pnpm, kurulum/y\xfckleme s\u0131ras\u0131nda npm ile ayn\u0131 yap\u0131land\u0131rmalar\u0131 kullanarak i\u015flem yapar. Oldu da, npm kay\u0131tlar\u0131nda/veritaban\u0131nda \xf6zel/ki\u015fisel bir hesap ile \xe7al\u0131\u015fman gerekirse; pnpm, yetkilendirme gerektiren bir i\u015flem yapaca\u011f\u0131 zaman, herhangi bir ek yap\u0131land\u0131rma gerektirmeden ve sorunla kar\u015f\u0131la\u015fmadan \xe7al\u0131\u015fmaya devam edecektir."),(0,i.kt)("p",null,"Yukar\u0131da belirtilenlerin haricinde ek olarak pnpm, t\xfcm parametreleri yap\u0131land\u0131rma gibi kullanmana da imkan sa\u011flar. \xd6rne\u011fin: ",(0,i.kt)("inlineCode",{parentName:"p"},"--filter")," veya ",(0,i.kt)("inlineCode",{parentName:"p"},"--workspace-concurrency")," parametreleri:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"workspace-concurrency = 1\nfilter = @kisisel-alan/*\n")),(0,i.kt)("p",null,"Daha fazla bilgi i\xe7in ",(0,i.kt)("a",{parentName:"p",href:"/tr/next/cli/config"},(0,i.kt)("inlineCode",{parentName:"a"},"config"),"parametresini")," inceleyebilirsin."))}d.isMDXComponent=!0}}]);