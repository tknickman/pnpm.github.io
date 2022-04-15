"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[7768],{9613:(e,n,t)=>{t.d(n,{Zo:()=>s,kt:()=>d});var i=t(9496);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);n&&(i=i.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,i)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function a(e,n){if(null==e)return{};var t,i,r=function(e,n){if(null==e)return{};var t,i,r={},l=Object.keys(e);for(i=0;i<l.length;i++)t=l[i],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(i=0;i<l.length;i++)t=l[i],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var p=i.createContext({}),c=function(e){var n=i.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},s=function(e){var n=c(e.components);return i.createElement(p.Provider,{value:n},e.children)},m={inlineCode:"code",wrapper:function(e){var n=e.children;return i.createElement(i.Fragment,{},n)}},u=i.forwardRef((function(e,n){var t=e.components,r=e.mdxType,l=e.originalType,p=e.parentName,s=a(e,["components","mdxType","originalType","parentName"]),u=c(t),d=r,v=u["".concat(p,".").concat(d)]||u[d]||m[d]||l;return t?i.createElement(v,o(o({ref:n},s),{},{components:t})):i.createElement(v,o({ref:n},s))}));function d(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var l=t.length,o=new Array(l);o[0]=u;var a={};for(var p in n)hasOwnProperty.call(n,p)&&(a[p]=n[p]);a.originalType=e,a.mdxType="string"==typeof e?e:r,o[1]=a;for(var c=2;c<l;c++)o[c]=t[c];return i.createElement.apply(null,o)}return i.createElement.apply(null,t)}u.displayName="MDXCreateElement"},8942:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>p,default:()=>d,frontMatter:()=>a,metadata:()=>c,toc:()=>m});var i=t(2182),r=t(9028),l=(t(9496),t(9613)),o=["components"],a={id:"uninstall",title:"Disinstallazione di pnpm"},p=void 0,c={unversionedId:"uninstall",id:"version-7.x/uninstall",title:"Disinstallazione di pnpm",description:"Rimozione dei pacchetti installati a livello globale",source:"@site/i18n/it/docusaurus-plugin-content-docs/version-7.x/uninstall.md",sourceDirName:".",slug:"/uninstall",permalink:"/it/uninstall",editUrl:"https://crowdin.com/project/pnpm/it",tags:[],version:"7.x",frontMatter:{id:"uninstall",title:"Disinstallazione di pnpm"},sidebar:"version-7.x/docs",previous:{title:"Come vengono risolti i peer",permalink:"/it/how-peers-are-resolved"},next:{title:"pnpm vs npm",permalink:"/it/pnpm-vs-npm"}},s={},m=[{value:"Rimozione dei pacchetti installati a livello globale",id:"rimozione-dei-pacchetti-installati-a-livello-globale",level:2},{value:"Rimozione della CLI di pnpm",id:"rimozione-della-cli-di-pnpm",level:2},{value:"Rimozione dell&#39;archivio globale indirizzabile ai contenuti",id:"rimozione-dellarchivio-globale-indirizzabile-ai-contenuti",level:2}],u={toc:m};function d(e){var n=e.components,t=(0,r.Z)(e,o);return(0,l.kt)("wrapper",(0,i.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,l.kt)("h2",{id:"rimozione-dei-pacchetti-installati-a-livello-globale"},"Rimozione dei pacchetti installati a livello globale"),(0,l.kt)("p",null,"Before removing the pnpm CLI, it might make sense to remove all global packages that were installed by pnpm."),(0,l.kt)("p",null,"Per elencare tutti i pacchetti globali, esegui ",(0,l.kt)("inlineCode",{parentName:"p"},"pnpm ls -g"),". Esistono due modi per rimuovere i pacchetti globali:"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"Esegui ",(0,l.kt)("inlineCode",{parentName:"li"},"pnpm rm -g <pkg>...")," con ogni pacchetto globale elencato."),(0,l.kt)("li",{parentName:"ol"},"Esegui ",(0,l.kt)("inlineCode",{parentName:"li"},"pnpm root -g")," per trovare la posizione della cartella globale e rimuoverla manualmente.")),(0,l.kt)("h2",{id:"rimozione-della-cli-di-pnpm"},"Rimozione della CLI di pnpm"),(0,l.kt)("p",null,"If you used the standalone script to install pnpm, then you should be able to uninstall the pnpm CLI by removing the pnpm home directory:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"rm -rf $PNPM_HOME\n")),(0,l.kt)("p",null,"You might also want to clean the ",(0,l.kt)("inlineCode",{parentName:"p"},"PNPM_HOME")," env variable in your shell configuration file (",(0,l.kt)("inlineCode",{parentName:"p"},"$HOME/.bashrc"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"$HOME/.zshrc")," or ",(0,l.kt)("inlineCode",{parentName:"p"},"$HOME/.config/fish/config.fish"),")."),(0,l.kt)("p",null,"Se hai usato npm per installare pnpm, allora dovresti usare npm per disinstallare pnpm:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"npm rm -g pnpm\n")),(0,l.kt)("h2",{id:"rimozione-dellarchivio-globale-indirizzabile-ai-contenuti"},"Rimozione dell'archivio globale indirizzabile ai contenuti"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"rm -rf $(pnpm store path)\n")),(0,l.kt)("p",null,"If you used pnpm in non-primary disks, then you must run the above command in every disk, where pnpm was used. pnpm creates one store per disk."))}d.isMDXComponent=!0}}]);