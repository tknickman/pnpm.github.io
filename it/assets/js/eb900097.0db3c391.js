"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[3141],{9613:(e,n,t)=>{t.d(n,{Zo:()=>p,kt:()=>d});var i=t(9496);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);n&&(i=i.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,i)}return t}function r(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,i,a=function(e,n){if(null==e)return{};var t,i,a={},o=Object.keys(e);for(i=0;i<o.length;i++)t=o[i],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)t=o[i],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var l=i.createContext({}),c=function(e){var n=i.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):r(r({},n),e)),t},p=function(e){var n=c(e.components);return i.createElement(l.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return i.createElement(i.Fragment,{},n)}},m=i.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),m=c(t),d=a,g=m["".concat(l,".").concat(d)]||m[d]||u[d]||o;return t?i.createElement(g,r(r({ref:n},p),{},{components:t})):i.createElement(g,r({ref:n},p))}));function d(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,r=new Array(o);r[0]=m;var s={};for(var l in n)hasOwnProperty.call(n,l)&&(s[l]=n[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,r[1]=s;for(var c=2;c<o;c++)r[c]=t[c];return i.createElement.apply(null,r)}return i.createElement.apply(null,t)}m.displayName="MDXCreateElement"},3183:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>p,contentTitle:()=>l,default:()=>d,frontMatter:()=>s,metadata:()=>c,toc:()=>u});var i=t(2182),a=t(9028),o=(t(9496),t(9613)),r=["components"],s={id:"using-changesets",title:"Utilizzo di Changesets con pnpm"},l=void 0,c={unversionedId:"using-changesets",id:"version-5.x/using-changesets",title:"Utilizzo di Changesets con pnpm",description:"Al momento della stesura di questa documentazione, l'ultima versione di pnpm era la v5.17.3. L'ultima versione di Changesets \xe8 stata v2.14.1.",source:"@site/i18n/it/docusaurus-plugin-content-docs/version-5.x/using-changesets.md",sourceDirName:".",slug:"/using-changesets",permalink:"/it/5.x/using-changesets",editUrl:"https://crowdin.com/project/pnpm/it",tags:[],version:"5.x",frontMatter:{id:"using-changesets",title:"Utilizzo di Changesets con pnpm"},sidebar:"version-5.x/docs",previous:{title:"Completamento tramite tab per la linea di comando",permalink:"/it/5.x/completion"},next:{title:"Integrazione continua",permalink:"/it/5.x/continuous-integration"}},p={},u=[{value:"Configurazione",id:"configurazione",level:2},{value:"Aggiunta di nuove modifiche",id:"aggiunta-di-nuove-modifiche",level:2},{value:"Rilascio delle modifiche",id:"rilascio-delle-modifiche",level:2},{value:"Utilizzo di Github Actions",id:"utilizzo-di-github-actions",level:2}],m={toc:u};function d(e){var n=e.components,t=(0,a.Z)(e,r);return(0,o.kt)("wrapper",(0,i.Z)({},m,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"Al momento della stesura di questa documentazione, l'ultima versione di pnpm era la v5.17.3. L'ultima versione di Changesets \xe8 stata v2.14.1."))),(0,o.kt)("h2",{id:"configurazione"},"Configurazione"),(0,o.kt)("p",null,"Per configurare i changeset su uno spazio di lavoro pnpm, installa Changesets come dipendenza di svuluppo nella radice dello spazio di lavoro:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"pnpm add -DW @changesets/cli\n")),(0,o.kt)("p",null,"Quindi esegui il comando init di changesets:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"pnpx changeset init\n")),(0,o.kt)("h2",{id:"aggiunta-di-nuove-modifiche"},"Aggiunta di nuove modifiche"),(0,o.kt)("p",null,"Per generare un nuovo changeset, esegui ",(0,o.kt)("inlineCode",{parentName:"p"},"pnpx changeset")," nella radice del repository. I file markdown generati nella directory ",(0,o.kt)("inlineCode",{parentName:"p"},".changeset")," dovrebbero essere aggiunti al repository."),(0,o.kt)("h2",{id:"rilascio-delle-modifiche"},"Rilascio delle modifiche"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Esegui ",(0,o.kt)("inlineCode",{parentName:"li"},"pnpx changeset versione"),". Ci\xf2 aumenter\xe0 le versioni dei pacchetti precedentemente specificati con ",(0,o.kt)("inlineCode",{parentName:"li"},"pnpx changeset")," (e tutti i dipendenti di questi) e aggiorner\xe0 i file del registro delle modifiche."),(0,o.kt)("li",{parentName:"ol"},"Esegui ",(0,o.kt)("inlineCode",{parentName:"li"},"pmnpm install"),". Questo aggiorner\xe0 il file di blocco e ricostruir\xe0 i pacchetti."),(0,o.kt)("li",{parentName:"ol"},"Effettua un commit delle modifiche."),(0,o.kt)("li",{parentName:"ol"},"Esegui ",(0,o.kt)("inlineCode",{parentName:"li"},"pnpm publish -r"),". Questo comando pubblicher\xe0 tutti i pacchetti che hanno versioni incrementate non ancora presenti nel registro.")),(0,o.kt)("h2",{id:"utilizzo-di-github-actions"},"Utilizzo di Github Actions"),(0,o.kt)("p",null,"Per automatizzare il processo, puoi utilizzare ",(0,o.kt)("inlineCode",{parentName:"p"},"changeset version")," con GitHub Actions."),(0,o.kt)("p",null,"In poche parole, l'azione rilever\xe0 nuovi changeset sul ramo ",(0,o.kt)("inlineCode",{parentName:"p"},"master")," li applicher\xe0, eseguir\xe0 il commit dei metadati e dei changelog aggiornati e aprir\xe0 una pull request. Potresti anche pubblicare i tuoi pacchetti automaticamente."),(0,o.kt)("p",null,"Maggiori informazioni e documentazione su questa azione sono disponibili ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/changesets/action"},"qui"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},"name: Changesets\non:\n  push:\n    branches:\n      - master\nenv:\n  CI: true\n  PNPM_CACHE_FOLDER: .pnpm-store\njobs:\n  version:\n    timeout-minutes: 15\n    runs-on: ubuntu-latest\n    steps:\n      - name: checkout code repository\n        uses: actions/checkout@v2\n        with:\n          fetch-depth: 0\n      - name: setup node.js\n        uses: actions/setup-node@v2\n        with:\n          node-version: 14\n      - name: install pnpm\n        run: npm i pnpm@latest -g\n      - name: setup pnpm config\n        run: pnpm config set store-dir $PNPM_CACHE_FOLDER\n      - name: install dependencies\n        run: pnpm install\n      - name: create versions\n        uses: changesets/action@master\n        with:\n          version: pnpm ci:version\n          commit: 'chore: update versions'\n          title: 'chore: update versions'\n        env:\n          GITHUB_TOKEN: ${{ secrets.GITHUB_TOKEN }}\n")))}d.isMDXComponent=!0}}]);