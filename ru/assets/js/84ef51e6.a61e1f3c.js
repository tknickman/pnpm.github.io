"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[3701],{9613:(e,n,t)=>{t.d(n,{Zo:()=>s,kt:()=>d});var r=t(9496);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function p(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?p(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):p(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},p=Object.keys(e);for(r=0;r<p.length;r++)t=p[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);for(r=0;r<p.length;r++)t=p[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var c=r.createContext({}),l=function(e){var n=r.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},s=function(e){var n=l(e.components);return r.createElement(c.Provider,{value:n},e.children)},m={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},u=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,p=e.originalType,c=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),u=l(t),d=a,f=u["".concat(c,".").concat(d)]||u[d]||m[d]||p;return t?r.createElement(f,i(i({ref:n},s),{},{components:t})):r.createElement(f,i({ref:n},s))}));function d(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var p=t.length,i=new Array(p);i[0]=u;var o={};for(var c in n)hasOwnProperty.call(n,c)&&(o[c]=n[c]);o.originalType=e,o.mdxType="string"==typeof e?e:a,i[1]=o;for(var l=2;l<p;l++)i[l]=t[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}u.displayName="MDXCreateElement"},700:(e,n,t)=>{t.r(n),t.d(n,{frontMatter:()=>o,contentTitle:()=>c,metadata:()=>l,assets:()=>s,toc:()=>m,default:()=>d});var r=t(7813),a=t(7044),p=(t(9496),t(9613)),i=["components"],o={id:"pnpx-cli",title:"pnpx CLI"},c=void 0,l={unversionedId:"pnpx-cli",id:"version-7.x/pnpx-cli",title:"pnpx CLI",description:"This command is deprecated! Use pnpm exec and pnpm dlx instead.",source:"@site/i18n/ru/docusaurus-plugin-content-docs/version-7.x/pnpx-cli.md",sourceDirName:".",slug:"/pnpx-cli",permalink:"/ru/7.x/pnpx-cli",editUrl:"https://crowdin.com/project/pnpm/ru",tags:[],version:"7.x",frontMatter:{id:"pnpx-cli",title:"pnpx CLI"},sidebar:"version-7.x/docs",previous:{title:"pnpm CLI",permalink:"/ru/7.x/pnpm-cli"},next:{title:"\u041a\u043e\u043d\u0444\u0438\u0433\u0443\u0440\u0430\u0446\u0438\u044f",permalink:"/ru/7.x/configuring"}},s={},m=[{value:"For new users",id:"for-new-users",level:2},{value:"For npm users",id:"for-npm-users",level:2}],u={toc:m};function d(e){var n=e.components,t=(0,a.Z)(e,i);return(0,p.kt)("wrapper",(0,r.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,p.kt)("div",{className:"admonition admonition-warning alert alert--danger"},(0,p.kt)("div",{parentName:"div",className:"admonition-heading"},(0,p.kt)("h5",{parentName:"div"},(0,p.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,p.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,p.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"}))),"warning")),(0,p.kt)("div",{parentName:"div",className:"admonition-content"},(0,p.kt)("p",{parentName:"div"},"This command is deprecated! Use ",(0,p.kt)("a",{parentName:"p",href:"/ru/7.x/cli/exec"},(0,p.kt)("inlineCode",{parentName:"a"},"pnpm exec"))," and ",(0,p.kt)("a",{parentName:"p",href:"/ru/7.x/cli/dlx"},(0,p.kt)("inlineCode",{parentName:"a"},"pnpm dlx"))," instead."))),(0,p.kt)("h2",{id:"for-new-users"},"For new users"),(0,p.kt)("p",null,(0,p.kt)("inlineCode",{parentName:"p"},"pnpx")," (PNPm eXecute) is a command line tool that fetches a package from the registry without installing it as a dependency, hotloads it, and runs whatever default command binary it exposes."),(0,p.kt)("p",null,"\u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440, \u0447\u0442\u043e\u0431\u044b \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u044c ",(0,p.kt)("inlineCode",{parentName:"p"},"create-react-app")," \u0432 \u043b\u044e\u0431\u043e\u043c \u043c\u0435\u0441\u0442\u0435 \u0434\u043b\u044f \u0438\u043d\u0438\u0446\u0438\u0430\u043b\u0438\u0437\u0430\u0446\u0438\u0438 react \u043f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u044f, \u0431\u0435\u0437 \u043d\u0435\u043e\u0431\u0445\u043e\u0434\u0438\u043c\u043e\u0441\u0442\u0438 \u0443\u0441\u0442\u0430\u043d\u0430\u0432\u043b\u0438\u0432\u0430\u0442\u044c \u0435\u0433\u043e \u0432 \u0434\u0440\u0443\u0433\u043e\u043c \u043f\u0440\u043e\u0435\u043a\u0442\u0435, \u0432\u044b \u043c\u043e\u0436\u0435\u0442\u0435 \u0432\u044b\u043f\u043e\u043b\u043d\u0438\u0442\u044c:"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-sh"},"pnpx create-react-app my-project\n")),(0,p.kt)("p",null,"This will fetch ",(0,p.kt)("inlineCode",{parentName:"p"},"create-react-app")," from the registry and run it with the given arguments. For more information, you may want to look at ",(0,p.kt)("a",{parentName:"p",href:"https://www.npmjs.com/package/npx"},"npx")," from npm, as it offers the same interface, except it uses ",(0,p.kt)("inlineCode",{parentName:"p"},"npm")," instead of ",(0,p.kt)("inlineCode",{parentName:"p"},"pnpm")," under the hood."),(0,p.kt)("p",null,"If you just want to run a binary of a project's dependency, see ",(0,p.kt)("a",{parentName:"p",href:"/ru/7.x/cli/exec"},(0,p.kt)("inlineCode",{parentName:"a"},"pnpm exec")),"."),(0,p.kt)("h2",{id:"for-npm-users"},"For npm users"),(0,p.kt)("p",null,"npm has a great package runner called ",(0,p.kt)("a",{parentName:"p",href:"https://www.npmjs.com/package/npx"},"npx"),". pnpm offers the same tool via the ",(0,p.kt)("inlineCode",{parentName:"p"},"pnpx")," command. The only difference is that ",(0,p.kt)("inlineCode",{parentName:"p"},"pnpx")," uses ",(0,p.kt)("inlineCode",{parentName:"p"},"pnpm")," for installing packages."))}d.isMDXComponent=!0}}]);