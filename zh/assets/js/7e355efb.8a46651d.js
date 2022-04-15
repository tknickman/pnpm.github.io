"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[6805],{9613:(e,n,t)=>{t.d(n,{Zo:()=>c,kt:()=>d});var r=t(9496);function p(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){p(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,p=function(e,n){if(null==e)return{};var t,r,p={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(p[t]=e[t]);return p}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(p[t]=e[t])}return p}var o=r.createContext({}),s=function(e){var n=r.useContext(o),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},c=function(e){var n=s(e.components);return r.createElement(o.Provider,{value:n},e.children)},m={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},u=r.forwardRef((function(e,n){var t=e.components,p=e.mdxType,a=e.originalType,o=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=s(t),d=p,g=u["".concat(o,".").concat(d)]||u[d]||m[d]||a;return t?r.createElement(g,i(i({ref:n},c),{},{components:t})):r.createElement(g,i({ref:n},c))}));function d(e,n){var t=arguments,p=n&&n.mdxType;if("string"==typeof e||p){var a=t.length,i=new Array(a);i[0]=u;var l={};for(var o in n)hasOwnProperty.call(n,o)&&(l[o]=n[o]);l.originalType=e,l.mdxType="string"==typeof e?e:p,i[1]=l;for(var s=2;s<a;s++)i[s]=t[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}u.displayName="MDXCreateElement"},1282:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>o,default:()=>d,frontMatter:()=>l,metadata:()=>s,toc:()=>m});var r=t(2182),p=t(9028),a=(t(9496),t(9613)),i=["components"],l={id:"continuous-integration",title:"\u6301\u7eed\u96c6\u6210"},o=void 0,s={unversionedId:"continuous-integration",id:"continuous-integration",title:"\u6301\u7eed\u96c6\u6210",description:"pnpm \u53ef\u4ee5\u5f88\u5bb9\u6613\u5730\u7528\u4e8e\u5404\u79cd\u6301\u7eed\u96c6\u6210\u7cfb\u7edf\u3002",source:"@site/i18n/zh/docusaurus-plugin-content-docs/current/continuous-integration.md",sourceDirName:".",slug:"/continuous-integration",permalink:"/zh/next/continuous-integration",editUrl:"https://crowdin.com/project/pnpm/zh-CN",tags:[],version:"current",frontMatter:{id:"continuous-integration",title:"\u6301\u7eed\u96c6\u6210"},sidebar:"docs",previous:{title:"\u5728 pnpm \u4e2d\u4f7f\u7528 Changesets",permalink:"/zh/next/using-changesets"},next:{title:"\u4f7f\u7528 Git",permalink:"/zh/next/git"}},c={},m=[{value:"Travis",id:"travis",level:2},{value:"Semaphore",id:"semaphore",level:2},{value:"AppVeyor",id:"appveyor",level:2},{value:"GitHub Actions",id:"github-actions",level:2},{value:"Gitlab CI",id:"gitlab-ci",level:2},{value:"Bitbucket Pipelines",id:"bitbucket-pipelines",level:2}],u={toc:m};function d(e){var n=e.components,t=(0,p.Z)(e,i);return(0,a.kt)("wrapper",(0,r.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"pnpm \u53ef\u4ee5\u5f88\u5bb9\u6613\u5730\u7528\u4e8e\u5404\u79cd\u6301\u7eed\u96c6\u6210\u7cfb\u7edf\u3002"),(0,a.kt)("h2",{id:"travis"},"Travis"),(0,a.kt)("p",null,"\u5728 ",(0,a.kt)("a",{parentName:"p",href:"https://travis-ci.org"},"Travis CI"),"\uff0c\u8bf7\u5c06\u6b64\u6dfb\u52a0\u5230\u60a8\u7684 ",(0,a.kt)("inlineCode",{parentName:"p"},".travis.yml")," \u6587\u4ef6\u4e2d\uff0c\u4f7f\u7528 pnpm \u6765\u5b89\u88c5\u60a8\u7684\u4f9d\u8d56\u9879\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml",metastring:'title=".travis.yml"',title:'".travis.yml"'},'cache:\n  npm: false\n  directories:\n    - "~/.pnpm-store"\nbefore_install:\n  - curl -f https://get.pnpm.io/v6.16.js | node - add --global pnpm@7.0.0-rc.5\n  - pnpm config set store-dir ~/.pnpm-store\ninstall:\n  - pnpm install\n')),(0,a.kt)("h2",{id:"semaphore"},"Semaphore"),(0,a.kt)("p",null,"\u5728 ",(0,a.kt)("a",{parentName:"p",href:"https://semaphoreci.com"},"Semapore"),"\u4e0a \uff0c\u8bf7\u5c06\u6b64\u5185\u5bb9\u6dfb\u52a0\u5230 ",(0,a.kt)("inlineCode",{parentName:"p"},".semaphore/semaphore.yml")," \u6587\u4ef6\u4e2d\uff0c\u4f7f\u7528 pnpm \u6765\u5b89\u88c5\u548c\u7f13\u5b58\u60a8\u7684\u4f9d\u8d56\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml",metastring:'title=".semaphore/semaphore.yml"',title:'".semaphore/semaphore.yml"'},"version: v1.0\nname: Semaphore CI pnpm example\nagent:\n  machine:\n    type: e1-standard-2\n    os_image: ubuntu1804\nblocks:\n  - name: Install dependencies\n    task:\n      jobs:\n        - name: pnpm install\n          commands:\n            - curl -f https://get.pnpm.io/v6.16.js | node - add --global pnpm@7.0.0-rc.5\n            - checkout\n            - cache restore node-$(checksum pnpm-lock.yaml)\n            - pnpm install\n            - cache store node-$(checksum pnpm-lock.yaml) $(pnpm store path)\n")),(0,a.kt)("h2",{id:"appveyor"},"AppVeyor"),(0,a.kt)("p",null,"\u5728 ",(0,a.kt)("a",{parentName:"p",href:"https://www.appveyor.com"},"AppVeyor")," \uff0c\u8bf7\u5c06\u6b64\u6dfb\u52a0\u60a8\u7684 ",(0,a.kt)("inlineCode",{parentName:"p"},"appveyor.yml"),"\u6765\u4f7f\u7528 pnpm \u6765\u5b89\u88c5\u60a8\u7684\u4f9d\u8d56\u9879\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml",metastring:'title="appveyor.yml"',title:'"appveyor.yml"'},"install:\n  - ps: Install-Product node $env:nodejs_version\n  - curl -f https://get.pnpm.io/v6.16.js | node - add --global pnpm@7.0.0-rc.5\n  - pnpm install\n")),(0,a.kt)("h2",{id:"github-actions"},"GitHub Actions"),(0,a.kt)("p",null,"\u5728 GitHub Actions \u4e0a\uff0c\u60a8\u53ef\u4ee5\u50cf\u8fd9\u6837\u4f7f\u7528 pnpm \u5b89\u88c5\u548c\u7f13\u5b58\u60a8\u7684\u4f9d\u8d56\u9879 ",(0,a.kt)("inlineCode",{parentName:"p"},".github/workflows/NAME.yml"),"\uff09\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml",metastring:'title=".github/workflows/NAME.yml"',title:'".github/workflows/NAME.yml"'},"name: pnpm Example Workflow\non:\n  push:\njobs:\n  build:\n    runs-on: ubuntu-20.04\n    strategy:\n      matrix:\n        node-version: [15]\n    steps:\n    - uses: actions/checkout@v2\n    - uses: pnpm/action-setup@v2.0.1\n      with:\n        version: 7.0.0-rc.5\n    - name: Use Node.js ${{ matrix.node-version }}\n      uses: actions/setup-node@v2\n      with:\n        node-version: ${{ matrix.node-version }}\n        cache: 'pnpm'\n    - name: Install dependencies\n      run: pnpm install\n")),(0,a.kt)("p",null,"::: \u6ce8\u610f"),(0,a.kt)("p",null,"\u4f7f\u7528 ",(0,a.kt)("inlineCode",{parentName:"p"},"actions/setup-node@v2")," \u7f13\u5b58\u5305\u4f9d\u8d56\u9879\u8981\u6c42\u60a8\u5b89\u88c5\u7248\u672c ",(0,a.kt)("strong",{parentName:"p"},"6.10+")," \u7684 pnpm\u3002"),(0,a.kt)("p",null,":::"),(0,a.kt)("h2",{id:"gitlab-ci"},"Gitlab CI"),(0,a.kt)("p",null,"\u5728 Gitlab \u4e0a\uff0c\u60a8\u53ef\u4ee5\u4f7f\u7528 pnpm \u6765\u5b89\u88c5\u548c\u7f13\u5b58\u60a8\u7684\u4f9d\u8d56\u9879 \u50cf\u8fd9\u6837\uff08\u5c5e\u4e8e ",(0,a.kt)("inlineCode",{parentName:"p"},".gitlab-ci.yml"),"\uff09\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml",metastring:'title=".gitlab-ci.yml"',title:'".gitlab-ci.yml"'},'stages:\n  - build\n\nbuild:\n  stage: build\n  image: node:14.16.0-buster\n  before_script:\n    - curl -f https://get.pnpm.io/v6.16.js | node - add --global pnpm@7.0.0-rc.5\n    - pnpm config set store-dir .pnpm-store\n  script:\n    - pnpm install # install dependencies\n  cache:\n    key: "$CI_COMMIT_REF_SLUG"\n    paths:\n      - .pnpm-store\n')),(0,a.kt)("h2",{id:"bitbucket-pipelines"},"Bitbucket Pipelines"),(0,a.kt)("p",null,"\u60a8\u53ef\u4ee5\u4f7f\u7528 pnpm \u6765\u5b89\u88c5\u548c\u7f13\u5b58\u60a8\u7684\u4f9d\u8d56\u9879\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml",metastring:'title=".bitbucket-pipelines.yml"',title:'".bitbucket-pipelines.yml"'},'definitions:\n  caches:\n    pnpm: $BITBUCKET_CLONE_DIR/.pnpm-store\n\npipelines:\n  pull-requests:\n    "**":\n      - step:\n          name: Build and test\n          image: node:14.16.0\n          script:\n            - curl -f https://get.pnpm.io/v6.16.js | node - add --global pnpm@7.0.0-rc.5\n            - pnpm install\n            - pnpm run build # Replace with your build/test\u2026etc. commands\n          caches:\n            - pnpm\n')))}d.isMDXComponent=!0}}]);