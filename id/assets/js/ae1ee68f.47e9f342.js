"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[8636],{9613:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>m});var a=n(9496);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),s=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},d=function(e){var t=s(e.components);return a.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,p=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),c=s(n),m=r,k=c["".concat(p,".").concat(m)]||c[m]||u[m]||i;return n?a.createElement(k,l(l({ref:t},d),{},{components:n})):a.createElement(k,l({ref:t},d))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,l=new Array(i);l[0]=c;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:r,l[1]=o;for(var s=2;s<i;s++)l[s]=n[s];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},2407:(e,t,n)=>{n.r(t),n.d(t,{frontMatter:()=>o,contentTitle:()=>p,metadata:()=>s,assets:()=>d,toc:()=>u,default:()=>m});var a=n(7813),r=n(7044),i=(n(9496),n(9613)),l=["components"],o={id:"audit",title:"pnpm audit"},p=void 0,s={unversionedId:"cli/audit",id:"version-7.x/cli/audit",title:"pnpm audit",description:"Ditambahkan di: v4.3.0",source:"@site/i18n/id/docusaurus-plugin-content-docs/version-7.x/cli/audit.md",sourceDirName:"cli",slug:"/cli/audit",permalink:"/id/7.x/cli/audit",editUrl:"https://crowdin.com/project/pnpm/id",tags:[],version:"7.x",frontMatter:{id:"audit",title:"pnpm audit"},sidebar:"version-7.x/docs",previous:{title:"pnpm install-test",permalink:"/id/7.x/cli/install-test"},next:{title:"pnpm list",permalink:"/id/7.x/cli/list"}},d={},u=[{value:"Options",id:"options",level:2},{value:"--audit-level &lt;severity&gt;",id:"--audit-level-severity",level:3},{value:"--fix",id:"--fix",level:3},{value:"--json",id:"--json",level:3},{value:"--dev, -D",id:"--dev--d",level:3},{value:"--prod, -P",id:"--prod--p",level:3},{value:"--no-optional",id:"--no-optional",level:3},{value:"--ignore-registry-errors",id:"--ignore-registry-errors",level:3}],c={toc:u};function m(e){var t=e.components,n=(0,r.Z)(e,l);return(0,i.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Ditambahkan di: v4.3.0"),(0,i.kt)("p",null,"Cek untuk masalah keamanan yang diketahui dengan paket-paket yang telah terpasang."),(0,i.kt)("p",null,"Jika masalah keamanan ditemukan, coba perbarui dependensi Anda melalui ",(0,i.kt)("inlineCode",{parentName:"p"},"pnpm update"),". Jika sebuah update sederhana tidak memperbaiki semua masalah, gunakan ",(0,i.kt)("a",{parentName:"p",href:"/id/7.x/package_json#pnpmoverrides"},"overrides")," untuk memaksa versi yang tidak rentan. Misalnya, jika ",(0,i.kt)("inlineCode",{parentName:"p"},"lodash @<2.1.0")," rentan, gunakan overrides untuk memaksa ",(0,i.kt)("inlineCode",{parentName:"p"},"lodash@^2.1.0"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="package.json"',title:'"package.json"'},'{\n    "pnpm": {\n        "overrides": {\n            "lodash@<2.1.0": "^2.1.0"\n        }\n    }\n}\n')),(0,i.kt)("p",null,"Atau sebagai alternatif, jalankan ",(0,i.kt)("inlineCode",{parentName:"p"},"pnpm audit --fix"),"."),(0,i.kt)("h2",{id:"options"},"Options"),(0,i.kt)("h3",{id:"--audit-level-severity"},"--audit-level ","<","severity",">"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Type: ",(0,i.kt)("strong",{parentName:"li"},"low"),", ",(0,i.kt)("strong",{parentName:"li"},"moderate"),", ",(0,i.kt)("strong",{parentName:"li"},"high"),", ",(0,i.kt)("strong",{parentName:"li"},"critical")),(0,i.kt)("li",{parentName:"ul"},"Default: ",(0,i.kt)("strong",{parentName:"li"},"low"))),(0,i.kt)("p",null,"Only print advisories with severity greater than or equal to ",(0,i.kt)("inlineCode",{parentName:"p"},"<severity>"),"."),(0,i.kt)("h3",{id:"--fix"},"--fix"),(0,i.kt)("p",null,"Ditambahkan di: v6.11.0"),(0,i.kt)("p",null,"Tambahkan penggantian ke file ",(0,i.kt)("inlineCode",{parentName:"p"},"package.json")," untuk memaksa versi dependensi yang tidak rentan."),(0,i.kt)("h3",{id:"--json"},"--json"),(0,i.kt)("p",null,"Output audit report in JSON format."),(0,i.kt)("h3",{id:"--dev--d"},"--dev, -D"),(0,i.kt)("p",null,"Only audit dev dependencies."),(0,i.kt)("h3",{id:"--prod--p"},"--prod, -P"),(0,i.kt)("p",null,"Only audit production dependencies."),(0,i.kt)("h3",{id:"--no-optional"},"--no-optional"),(0,i.kt)("p",null,"Don't audit ",(0,i.kt)("inlineCode",{parentName:"p"},"optionalDependencies"),"."),(0,i.kt)("h3",{id:"--ignore-registry-errors"},"--ignore-registry-errors"),(0,i.kt)("p",null,"Ditambahkan dalam: v6.7.1"),(0,i.kt)("p",null,"Jika registri merespons dengan kode status non-200, proses harus keluar dengan 0. Jadi prosesnya akan gagal hanya jika registri benar-benar berhasil merespons dengan kerentanan yang ditemukan."))}m.isMDXComponent=!0}}]);