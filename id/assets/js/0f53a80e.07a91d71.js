"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[104],{9613:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>k});var a=n(9496);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var o=a.createContext({}),d=function(e){var t=a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=d(e.components);return a.createElement(o.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},s=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,u=p(e,["components","mdxType","originalType","parentName"]),s=d(n),k=r,m=s["".concat(o,".").concat(k)]||s[k]||c[k]||i;return n?a.createElement(m,l(l({ref:t},u),{},{components:n})):a.createElement(m,l({ref:t},u))}));function k(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,l=new Array(i);l[0]=s;var p={};for(var o in t)hasOwnProperty.call(t,o)&&(p[o]=t[o]);p.originalType=e,p.mdxType="string"==typeof e?e:r,l[1]=p;for(var d=2;d<i;d++)l[d]=n[d];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}s.displayName="MDXCreateElement"},3371:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>o,default:()=>k,frontMatter:()=>p,metadata:()=>d,toc:()=>c});var a=n(2182),r=n(9028),i=(n(9496),n(9613)),l=["components"],p={id:"why",title:"pnpm why"},o=void 0,d={unversionedId:"cli/why",id:"version-5.x/cli/why",title:"pnpm why",description:"Menampilkan semua paket yang bergantung pada paket tertentu.",source:"@site/i18n/id/docusaurus-plugin-content-docs/version-5.x/cli/why.md",sourceDirName:"cli",slug:"/cli/why",permalink:"/id/5.x/cli/why",editUrl:"https://crowdin.com/project/pnpm/id",tags:[],version:"5.x",frontMatter:{id:"why",title:"pnpm why"},sidebar:"version-5.x/docs",previous:{title:"pnpm outdated",permalink:"/id/5.x/cli/outdated"},next:{title:"pnpm run",permalink:"/id/5.x/cli/run"}},u={},c=[{value:"Options",id:"options",level:2},{value:"--recursive, -r",id:"--recursive--r",level:3},{value:"--json",id:"--json",level:3},{value:"--long",id:"--long",level:3},{value:"--parseable",id:"--parseable",level:3},{value:"--global",id:"--global",level:3},{value:"--prod, -P",id:"--prod--p",level:3},{value:"--dev, -D",id:"--dev--d",level:3},{value:"--filter &lt;package_selector&gt;",id:"--filter-package_selector",level:3}],s={toc:c};function k(e){var t=e.components,n=(0,r.Z)(e,l);return(0,i.kt)("wrapper",(0,a.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Menampilkan semua paket yang bergantung pada paket tertentu."),(0,i.kt)("h2",{id:"options"},"Options"),(0,i.kt)("h3",{id:"--recursive--r"},"--recursive, -r"),(0,i.kt)("p",null,"Menampilkan pohon dependensi (ketergantungan) untuk paket yang ditentukan di setiap paket dalam subdirektori atau pada setiap paket workspace saat dijalankan di dalam workspace."),(0,i.kt)("h3",{id:"--json"},"--json"),(0,i.kt)("p",null,"Ditambahkan di: v3.7.0"),(0,i.kt)("p",null,"Menampilkan informasi dalam bentuk JSON."),(0,i.kt)("h3",{id:"--long"},"--long"),(0,i.kt)("p",null,"Menampilkan keluaran ",(0,i.kt)("em",{parentName:"p"},"verbose")," (informasi yang lebih rinci)."),(0,i.kt)("h3",{id:"--parseable"},"--parseable"),(0,i.kt)("p",null,"Menampilkan keluaran yang dapat diuraikan alih-alih tampilan hierarki."),(0,i.kt)("h3",{id:"--global"},"--global"),(0,i.kt)("p",null,"Buat daftar paket di direktori instal global alih-alih di proyek saat ini."),(0,i.kt)("h3",{id:"--prod--p"},"--prod, -P"),(0,i.kt)("p",null,"Hanya menampilkan pohon dependensi untuk paket yang ada di dalam ",(0,i.kt)("inlineCode",{parentName:"p"},"dependencies"),"."),(0,i.kt)("h3",{id:"--dev--d"},"--dev, -D"),(0,i.kt)("p",null,"Hanya menampilkan pohon dependensi untuk paket yang ada di dalam ",(0,i.kt)("inlineCode",{parentName:"p"},"devDependencies"),"."),(0,i.kt)("h3",{id:"--filter-package_selector"},"--filter ","<","package_selector",">"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/id/5.x/filtering"},"Read more about filtering.")))}k.isMDXComponent=!0}}]);