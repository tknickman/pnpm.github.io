"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[2094],{9613:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>m});var i=n(9496);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,i,r=function(e,t){if(null==e)return{};var n,i,r={},o=Object.keys(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=i.createContext({}),c=function(e){var t=i.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},s=function(e){var t=c(e.components);return i.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},d=i.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,p=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),d=c(n),m=r,v=d["".concat(p,".").concat(m)]||d[m]||u[m]||o;return n?i.createElement(v,a(a({ref:t},s),{},{components:n})):i.createElement(v,a({ref:t},s))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,a=new Array(o);a[0]=d;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:r,a[1]=l;for(var c=2;c<o;c++)a[c]=n[c];return i.createElement.apply(null,a)}return i.createElement.apply(null,n)}d.displayName="MDXCreateElement"},7205:(e,t,n)=>{n.r(t),n.d(t,{frontMatter:()=>l,contentTitle:()=>p,metadata:()=>c,assets:()=>s,toc:()=>u,default:()=>m});var i=n(7813),r=n(7044),o=(n(9496),n(9613)),a=["components"],l={id:"store",title:"pnpm store"},p=void 0,c={unversionedId:"cli/store",id:"version-7.x/cli/store",title:"pnpm store",description:"Gestione dell'archivio dei pacchetti.",source:"@site/i18n/it/docusaurus-plugin-content-docs/version-7.x/cli/store.md",sourceDirName:"cli",slug:"/cli/store",permalink:"/it/7.x/cli/store",editUrl:"https://crowdin.com/project/pnpm/it",tags:[],version:"7.x",frontMatter:{id:"store",title:"pnpm store"},sidebar:"version-7.x/docs",previous:{title:"pnpm server",permalink:"/it/7.x/cli/server"},next:{title:"pnpm root",permalink:"/it/7.x/cli/root"}},s={},u=[{value:"Comandi",id:"comandi",level:2},{value:"status",id:"status",level:3},{value:"add",id:"add",level:3},{value:"prune",id:"prune",level:3},{value:"path",id:"path",level:3}],d={toc:u};function m(e){var t=e.components,n=(0,r.Z)(e,a);return(0,o.kt)("wrapper",(0,i.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Gestione dell'archivio dei pacchetti."),(0,o.kt)("h2",{id:"comandi"},"Comandi"),(0,o.kt)("h3",{id:"status"},"status"),(0,o.kt)("p",null,"Verifica la presenza di pacchetti modificati nell'archivio."),(0,o.kt)("p",null,"Restituisce il codice di uscita 0 se il contenuto del pacchetto \xe8 lo stesso del momento dello scompattamento."),(0,o.kt)("h3",{id:"add"},"add"),(0,o.kt)("p",null,"Aggiunto nella versione: v2.12.0"),(0,o.kt)("p",null,"Funzionalmente equivalente a ",(0,o.kt)("a",{parentName:"p",href:"/it/7.x/cli/add"},(0,o.kt)("inlineCode",{parentName:"a"},"pnpm add")),", tranne per il fatto che aggiunge nuovi pacchetti all'archivio direttamente senza modificare alcun progetto o file al di fuori dell'archivio."),(0,o.kt)("h3",{id:"prune"},"prune"),(0,o.kt)("p",null,"Rimuove i ",(0,o.kt)("em",{parentName:"p"},"pacchetti senza riferimenti")," dal negozio."),(0,o.kt)("p",null,"I pacchetti non referenziati sono pacchetti che non vengono utilizzati da alcun progetto nel sistema. I pacchetti possono diventare non referenziati dopo la maggior parte delle operazioni di installazione, per esempio quando le dipendenze sono ridondanti."),(0,o.kt)("p",null,"Ad esempio, durante ",(0,o.kt)("inlineCode",{parentName:"p"},"pnpm install"),", il pacchetto ",(0,o.kt)("inlineCode",{parentName:"p"},"foo@1.0.0")," viene aggiornato a ",(0,o.kt)("inlineCode",{parentName:"p"},"foo@1.0.1"),". pnpm manterr\xe0 ",(0,o.kt)("inlineCode",{parentName:"p"},"foo@1.0.0")," nell'archivio, in quanto non rimuove automaticamente i pacchetti. Se il pacchetto ",(0,o.kt)("inlineCode",{parentName:"p"},"foo@1.0.0")," non viene utilizzato da nessun altro progetto sul sistema, diventa non referenziato. L'esecuzione di ",(0,o.kt)("inlineCode",{parentName:"p"},"pnpm store prune")," rimuover\xe0 ",(0,o.kt)("inlineCode",{parentName:"p"},"foo@1.0.0")," dall'archivio."),(0,o.kt)("p",null,"Eseguire ",(0,o.kt)("inlineCode",{parentName:"p"},"pnpm store prune")," non \xe8 dannoso e non ha effetti collaterali sui tuoi progetti. Se le installazioni future richiederanno pacchetti rimossi, pnpm li scaricher\xe0 di nuovo."),(0,o.kt)("p",null,"\xc8 consigliabile eseguire occasionalmente ",(0,o.kt)("inlineCode",{parentName:"p"},"pnpm store prune")," per ripulire l'archivio, ma non troppo frequentemente. A volte, i pacchetti non referenziati vengono richiesti di nuovo. Questo potrebbe verificarsi quando si cambiano i rami e si installano dipendenze pi\xf9 vecchie, in questo caso pnpm avrebbe bisogno di ri-scaricare tutti i pacchetti rimossi, rallentando brevemente il processo di installazione."),(0,o.kt)("p",null,"Si noti che questo comando \xe8 vietato quando \xe8 in esecuzione un ",(0,o.kt)("a",{parentName:"p",href:"/it/7.x/cli/server"},"server di archiviazione"),"."),(0,o.kt)("h3",{id:"path"},"path"),(0,o.kt)("p",null,"Aggiunto nella versione: v6.10.0"),(0,o.kt)("p",null,"Restituisce il percorso alla cartella dell'archivio attivo."))}m.isMDXComponent=!0}}]);