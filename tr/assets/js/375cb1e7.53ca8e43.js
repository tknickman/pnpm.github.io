"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[732],{9613:(e,n,t)=>{t.d(n,{Zo:()=>u,kt:()=>s});var r=t(9496);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function p(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)t=l[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)t=l[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var o=r.createContext({}),c=function(e){var n=r.useContext(o),t=n;return e&&(t="function"==typeof e?e(n):p(p({},n),e)),t},u=function(e){var n=c(e.components);return r.createElement(o.Provider,{value:n},e.children)},m={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},k=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,l=e.originalType,o=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),k=c(t),s=a,d=k["".concat(o,".").concat(s)]||k[s]||m[s]||l;return t?r.createElement(d,p(p({ref:n},u),{},{components:t})):r.createElement(d,p({ref:n},u))}));function s(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var l=t.length,p=new Array(l);p[0]=k;var i={};for(var o in n)hasOwnProperty.call(n,o)&&(i[o]=n[o]);i.originalType=e,i.mdxType="string"==typeof e?e:a,p[1]=i;for(var c=2;c<l;c++)p[c]=t[c];return r.createElement.apply(null,p)}return r.createElement.apply(null,t)}k.displayName="MDXCreateElement"},7879:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>u,contentTitle:()=>o,default:()=>s,frontMatter:()=>i,metadata:()=>c,toc:()=>m});var r=t(2182),a=t(9028),l=(t(9496),t(9613)),p=["components"],i={id:"pnpx-cli",title:"pnpx CLI"},o=void 0,c={unversionedId:"pnpx-cli",id:"version-5.x/pnpx-cli",title:"pnpx CLI",description:"\u0130lk defa kullananlar",source:"@site/i18n/tr/docusaurus-plugin-content-docs/version-5.x/pnpx-cli.md",sourceDirName:".",slug:"/pnpx-cli",permalink:"/tr/5.x/pnpx-cli",editUrl:"https://crowdin.com/project/pnpm/tr",tags:[],version:"5.x",frontMatter:{id:"pnpx-cli",title:"pnpx CLI"},sidebar:"version-5.x/docs",previous:{title:"pnpm CLI",permalink:"/tr/5.x/pnpm-cli"},next:{title:"Yap\u0131land\u0131rma",permalink:"/tr/5.x/configuring"}},u={},m=[{value:"\u0130lk defa kullananlar",id:"i\u0307lk-defa-kullananlar",level:2},{value:"npm kullananlar",id:"npm-kullananlar",level:2}],k={toc:m};function s(e){var n=e.components,t=(0,a.Z)(e,p);return(0,l.kt)("wrapper",(0,r.Z)({},k,t,{components:n,mdxType:"MDXLayout"}),(0,l.kt)("h2",{id:"i\u0307lk-defa-kullananlar"},"\u0130lk defa kullananlar"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"pnpx")," (a\xe7\u0131l\u0131m\u0131 PNPm eXecute) komutu, npm veritaban\u0131ndan ili\u015fkili paketi \xe7ekerek, projeye k\xfct\xfcphane olarak dahil etmeden, y\xfckleme yapmadan, hedef pakette varsay\u0131lan olarak tan\u0131ml\u0131 gelen binary (\xe7al\u0131\u015ft\u0131r\u0131labilir) komutunu \xe7al\u0131\u015ft\u0131r\u0131r."),(0,l.kt)("p",null,"\xd6rne\u011fin: ",(0,l.kt)("inlineCode",{parentName:"p"},"create-react-app")," paketini kullanarak her hangi bir dizinde h\u0131zl\u0131ca React projesi olu\u015fturmak i\xe7in \u015fu komutu kullanabilirsin:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sh"},"pnpx create-react-app yeni-proje\n")),(0,l.kt)("p",null,"Komutu girildikten sonra pnpm, veritaban\u0131ndan ",(0,l.kt)("inlineCode",{parentName:"p"},"create-react-app")," uygulamas\u0131 \xe7ekerek belirlenen parametrelere birlikte \xe7al\u0131\u015ft\u0131racakt\u0131r. Daha detayl\u0131 bilgi i\xe7in, npm'in ",(0,l.kt)("a",{parentName:"p",href:"https://www.npmjs.com/package/npx"},"npx")," d\xf6k\xfcman\u0131n\u0131 inceleyebilirsin. Temelde ikisi de ayn\u0131 \u015fekilde \xe7al\u0131\u015f\u0131yor fakat ",(0,l.kt)("inlineCode",{parentName:"p"},"npx"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"pnpm")," yerine ",(0,l.kt)("inlineCode",{parentName:"p"},"npm")," yap\u0131s\u0131n\u0131 kullanarak i\u015flemleri ger\xe7ekle\u015ftiriyor."),(0,l.kt)("h2",{id:"npm-kullananlar"},"npm kullananlar"),(0,l.kt)("p",null,"npm has a great package runner called ",(0,l.kt)("a",{parentName:"p",href:"https://www.npmjs.com/package/npx"},"npx"),". pnpm offers the same tool via the ",(0,l.kt)("inlineCode",{parentName:"p"},"pnpx")," command. The only difference is that ",(0,l.kt)("inlineCode",{parentName:"p"},"pnpx")," uses ",(0,l.kt)("inlineCode",{parentName:"p"},"pnpm")," for installing packages."))}s.isMDXComponent=!0}}]);