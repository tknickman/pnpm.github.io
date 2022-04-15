"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[8242],{9613:(e,n,t)=>{t.d(n,{Zo:()=>c,kt:()=>d});var a=t(9496);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function p(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var o=a.createContext({}),l=function(e){var n=a.useContext(o),t=n;return e&&(t="function"==typeof e?e(n):p(p({},n),e)),t},c=function(e){var n=l(e.components);return a.createElement(o.Provider,{value:n},e.children)},m={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},u=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=l(t),d=r,g=u["".concat(o,".").concat(d)]||u[d]||m[d]||i;return t?a.createElement(g,p(p({ref:n},c),{},{components:t})):a.createElement(g,p({ref:n},c))}));function d(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=t.length,p=new Array(i);p[0]=u;var s={};for(var o in n)hasOwnProperty.call(n,o)&&(s[o]=n[o]);s.originalType=e,s.mdxType="string"==typeof e?e:r,p[1]=s;for(var l=2;l<i;l++)p[l]=t[l];return a.createElement.apply(null,p)}return a.createElement.apply(null,t)}u.displayName="MDXCreateElement"},3225:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>o,default:()=>d,frontMatter:()=>s,metadata:()=>l,toc:()=>m});var a=t(2182),r=t(9028),i=(t(9496),t(9613)),p=["components"],s={id:"continuous-integration",title:"Integraci\xf3n continua"},o=void 0,l={unversionedId:"continuous-integration",id:"version-6.x/continuous-integration",title:"Integraci\xf3n continua",description:"pnpm se puede usar f\xe1cilmente en varios sistemas de integraci\xf3n continua.",source:"@site/i18n/es/docusaurus-plugin-content-docs/version-6.x/continuous-integration.md",sourceDirName:".",slug:"/continuous-integration",permalink:"/es/6.x/continuous-integration",editUrl:"https://crowdin.com/project/pnpm/es-ES",tags:[],version:"6.x",frontMatter:{id:"continuous-integration",title:"Integraci\xf3n continua"},sidebar:"version-6.x/docs",previous:{title:"Usando Changesets con pnpm",permalink:"/es/6.x/using-changesets"},next:{title:"Trabajando con Git",permalink:"/es/6.x/git"}},c={},m=[{value:"Travis",id:"travis",level:2},{value:"Semaphore",id:"semaphore",level:2},{value:"AppVeyor",id:"appveyor",level:2},{value:"GitHub Actions",id:"github-actions",level:2},{value:"Gitlab CI",id:"gitlab-ci",level:2},{value:"Bitbucket Pipelines",id:"bitbucket-pipelines",level:2}],u={toc:m};function d(e){var n=e.components,t=(0,r.Z)(e,p);return(0,i.kt)("wrapper",(0,a.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"pnpm se puede usar f\xe1cilmente en varios sistemas de integraci\xf3n continua."),(0,i.kt)("h2",{id:"travis"},"Travis"),(0,i.kt)("p",null,"En ",(0,i.kt)("a",{parentName:"p",href:"https://travis-ci.org"},"Travis CI"),", puede usar pnpm para instalar sus dependencias agregando este a su archivo ",(0,i.kt)("inlineCode",{parentName:"p"},".travis.yml"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml",metastring:'title=".travis.yml"',title:'".travis.yml"'},'cache:\n  npm: false\n  directories:\n    - "~/.pnpm-store"\nbefore_install:\n  - curl -f https://get.pnpm.io/v6.16.js | node - add --global pnpm@6\n  - pnpm config set store-dir ~/.pnpm-store\ninstall:\n  - pnpm install\n')),(0,i.kt)("h2",{id:"semaphore"},"Semaphore"),(0,i.kt)("p",null,"En ",(0,i.kt)("a",{parentName:"p",href:"https://semaphoreci.com"},"Semaphore"),", puede usar pnpm para instalar y almacenar en cach\xe9 sus dependencias agregando esto a su ",(0,i.kt)("inlineCode",{parentName:"p"},".semaphore/semaphore.yml"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml",metastring:'title=".semaphore/semaphore.yml"',title:'".semaphore/semaphore.yml"'},"version: v1.0\nname: Semaphore CI pnpm example\nagent:\n  machine:\n    type: e1-standard-2\n    os_image: ubuntu1804\nblocks:\n  - name: Install dependencies\n    task:\n      jobs:\n        - name: pnpm install\n          commands:\n            - curl -f https://get.pnpm.io/v6.16.js | node - add --global pnpm@6\n            - checkout\n            - cache restore node-$(checksum pnpm-lock.yaml)\n            - pnpm install\n            - cache store node-$(checksum pnpm-lock.yaml) ~/.pnpm-store\n")),(0,i.kt)("h2",{id:"appveyor"},"AppVeyor"),(0,i.kt)("p",null,"En ",(0,i.kt)("a",{parentName:"p",href:"https://www.appveyor.com"},"AppVeyor"),", puede usar pnpm para instalar sus dependencias agregando este a su ",(0,i.kt)("inlineCode",{parentName:"p"},"appveyor.yml"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml",metastring:'title="appveyor.yml"',title:'"appveyor.yml"'},"install:\n  - ps: Install-Product node $env:nodejs_version\n  - curl -f https://get.pnpm.io/v6.16.js | node - add --global pnpm@6\n  - pnpm install\n")),(0,i.kt)("h2",{id:"github-actions"},"GitHub Actions"),(0,i.kt)("p",null,"On GitHub Actions, you can use pnpm for installing and caching your dependencies like so (belongs in ",(0,i.kt)("inlineCode",{parentName:"p"},".github/workflows/NAME.yml"),"):"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml",metastring:'title=".github/workflows/NAME.yml"',title:'".github/workflows/NAME.yml"'},"name: pnpm Example Workflow\non:\n  push:\njobs:\n  build:\n    runs-on: ubuntu-20.04\n    strategy:\n      matrix:\n        node-version: [15]\n    steps:\n    - uses: actions/checkout@v2\n    - uses: pnpm/action-setup@v2.0.1\n      with:\n        version: 6.20.3\n    - name: Use Node.js ${{ matrix.node-version }}\n      uses: actions/setup-node@v2\n      with:\n        node-version: ${{ matrix.node-version }}\n        cache: 'pnpm'\n    - name: Install dependencies\n      run: pnpm install\n")),(0,i.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"El almacenamiento en cach\xe9 de dependencias de paquetes con ",(0,i.kt)("inlineCode",{parentName:"p"},"actions/setup-node@v2")," requiere que instale pnpm con la versi\xf3n ",(0,i.kt)("strong",{parentName:"p"},"6.10+"),"."))),(0,i.kt)("h2",{id:"gitlab-ci"},"Gitlab CI"),(0,i.kt)("p",null,"En Gitlab, puede usar pnpm para instalar y almacenar en cach\xe9 sus dependencias as\xed (pertenece a ",(0,i.kt)("inlineCode",{parentName:"p"},".gitlab-ci.yml"),"):"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml",metastring:'title=".gitlab-ci.yml"',title:'".gitlab-ci.yml"'},'stages:\n  - build\n\nbuild:\n  stage: build\n  image: node:14.16.0-buster\n  before_script:\n    - curl -f https://get.pnpm.io/v6.16.js | node - add --global pnpm@6\n    - pnpm config set store-dir .pnpm-store\n  script:\n    - pnpm install # install dependencies\n  cache:\n    key: "$CI_COMMIT_REF_SLUG"\n    paths:\n      - .pnpm-store\n')),(0,i.kt)("h2",{id:"bitbucket-pipelines"},"Bitbucket Pipelines"),(0,i.kt)("p",null,"Puede usar pnpm para instalar y almacenar en cach\xe9 sus dependencias:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml",metastring:'title=".bitbucket-pipelines.yml"',title:'".bitbucket-pipelines.yml"'},'definitions:\n  caches:\n    pnpm: $BITBUCKET_CLONE_DIR/.pnpm-store\n\npipelines:\n  pull-requests:\n    "**":\n      - step:\n          name: Build and test\n          image: node:14.16.0\n          script:\n            - curl -f https://get.pnpm.io/v6.16.js | node - add --global pnpm@6\n            - pnpm install\n            - pnpm run build # Replace with your build/test\u2026etc. commands\n          caches:\n            - pnpm\n')))}d.isMDXComponent=!0}}]);