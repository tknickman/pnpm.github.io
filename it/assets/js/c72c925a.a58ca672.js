"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[252],{9613:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>v});var r=n(9496);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var p=r.createContext({}),c=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},s=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,l=e.originalType,p=e.parentName,u=a(e,["components","mdxType","originalType","parentName"]),s=c(n),v=i,f=s["".concat(p,".").concat(v)]||s[v]||d[v]||l;return n?r.createElement(f,o(o({ref:t},u),{},{components:n})):r.createElement(f,o({ref:t},u))}));function v(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var l=n.length,o=new Array(l);o[0]=s;var a={};for(var p in t)hasOwnProperty.call(t,p)&&(a[p]=t[p]);a.originalType=e,a.mdxType="string"==typeof e?e:i,o[1]=a;for(var c=2;c<l;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}s.displayName="MDXCreateElement"},2805:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>p,default:()=>v,frontMatter:()=>a,metadata:()=>c,toc:()=>d});var r=n(2182),i=n(9028),l=(n(9496),n(9613)),o=["components"],a={id:"why",title:"pnpm why"},p=void 0,c={unversionedId:"cli/why",id:"cli/why",title:"pnpm why",description:"Visualizza tutti i pacchetti che dipendono dal pacchetto specificato.",source:"@site/i18n/it/docusaurus-plugin-content-docs/current/cli/why.md",sourceDirName:"cli",slug:"/cli/why",permalink:"/it/next/cli/why",editUrl:"https://crowdin.com/project/pnpm/it",tags:[],version:"current",frontMatter:{id:"why",title:"pnpm why"},sidebar:"docs",previous:{title:"pnpm outdated",permalink:"/it/next/cli/outdated"},next:{title:"pnpm run",permalink:"/it/next/cli/run"}},u={},d=[{value:"Opzioni",id:"opzioni",level:2},{value:"--recursive, -r",id:"--recursive--r",level:3},{value:"--json",id:"--json",level:3},{value:"--long",id:"--long",level:3},{value:"--parseable",id:"--parseable",level:3},{value:"--global",id:"--global",level:3},{value:"--prod, -P",id:"--prod--p",level:3},{value:"--dev, -D",id:"--dev--d",level:3},{value:"--filter &lt;selettore_pacchetto&gt;",id:"--filter-selettore_pacchetto",level:3}],s={toc:d};function v(e){var t=e.components,n=(0,i.Z)(e,o);return(0,l.kt)("wrapper",(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"Visualizza tutti i pacchetti che dipendono dal pacchetto specificato."),(0,l.kt)("h2",{id:"opzioni"},"Opzioni"),(0,l.kt)("h3",{id:"--recursive--r"},"--recursive, -r"),(0,l.kt)("p",null,"Mostra l'albero delle dipendenze per il pacchetto specificato di ogni pacchetto nelle sottocartelle o di ogni pacchetto dello spazio di lavoro quando eseguito all'interno di uno spazio di lavoro."),(0,l.kt)("h3",{id:"--json"},"--json"),(0,l.kt)("p",null,"Visualizza le informazioni in formato JSON."),(0,l.kt)("h3",{id:"--long"},"--long"),(0,l.kt)("p",null,"Visualizza output dettagliato."),(0,l.kt)("h3",{id:"--parseable"},"--parseable"),(0,l.kt)("p",null,"Visualizza output analizzabile invece della visualizzazione ad albero."),(0,l.kt)("h3",{id:"--global"},"--global"),(0,l.kt)("p",null,"Elenca i pacchetti nella cartella di installazione globale invece che nel progetto corrente."),(0,l.kt)("h3",{id:"--prod--p"},"--prod, -P"),(0,l.kt)("p",null,"Visualizza l'albero delle dipendenze per i pacchetti nelle dipendenze (",(0,l.kt)("inlineCode",{parentName:"p"},"dependencies"),")."),(0,l.kt)("h3",{id:"--dev--d"},"--dev, -D"),(0,l.kt)("p",null,"Visualizza l'albero delle dipendenze per i pacchetti nelle dipendenze di sviluppo (",(0,l.kt)("inlineCode",{parentName:"p"},"devDependencies"),")."),(0,l.kt)("h3",{id:"--filter-selettore_pacchetto"},"--filter ","<","selettore_pacchetto",">"),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"/it/next/filtering"},"Ulteriori informazioni sui filtri.")))}v.isMDXComponent=!0}}]);