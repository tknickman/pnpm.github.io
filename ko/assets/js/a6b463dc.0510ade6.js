"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[5324],{9613:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>u});var o=n(9496);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function r(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=o.createContext({}),p=function(e){var t=o.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},d=function(e){var t=p(e.components);return o.createElement(l.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},c=o.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,d=r(e,["components","mdxType","originalType","parentName"]),c=p(n),u=a,h=c["".concat(l,".").concat(u)]||c[u]||m[u]||i;return n?o.createElement(h,s(s({ref:t},d),{},{components:n})):o.createElement(h,s({ref:t},d))}));function u(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,s=new Array(i);s[0]=c;var r={};for(var l in t)hasOwnProperty.call(t,l)&&(r[l]=t[l]);r.originalType=e,r.mdxType="string"==typeof e?e:a,s[1]=r;for(var p=2;p<i;p++)s[p]=n[p];return o.createElement.apply(null,s)}return o.createElement.apply(null,n)}c.displayName="MDXCreateElement"},4960:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>l,default:()=>u,frontMatter:()=>r,metadata:()=>p,toc:()=>m});var o=n(2182),a=n(9028),i=(n(9496),n(9613)),s=["components"],r={id:"faq",title:"Frequently Asked Questions"},l=void 0,p={unversionedId:"faq",id:"version-6.x/faq",title:"Frequently Asked Questions",description:"\ud328\ud0a4\uc9c0\uac00 global store\uc5d0 \uc800\uc7a5\ub418\uc5c8\ub294\ub370\ub3c4 node_modules\uac00 \ub514\uc2a4\ud06c \uacf5\uac04\uc744 \uc0ac\uc6a9\ud558\ub294 \uc774\uc720\uac00 \ubb34\uc5c7\uc778\uac00\uc694?",source:"@site/i18n/ko/docusaurus-plugin-content-docs/version-6.x/faq.md",sourceDirName:".",slug:"/faq",permalink:"/ko/6.x/faq",editUrl:"https://crowdin.com/project/pnpm/ko",tags:[],version:"6.x",frontMatter:{id:"faq",title:"Frequently Asked Questions"}},d={},m=[{value:"\ud328\ud0a4\uc9c0\uac00 global store\uc5d0 \uc800\uc7a5\ub418\uc5c8\ub294\ub370\ub3c4 <code>node_modules</code>\uac00 \ub514\uc2a4\ud06c \uacf5\uac04\uc744 \uc0ac\uc6a9\ud558\ub294 \uc774\uc720\uac00 \ubb34\uc5c7\uc778\uac00\uc694?",id:"\ud328\ud0a4\uc9c0\uac00-global-store\uc5d0-\uc800\uc7a5\ub418\uc5c8\ub294\ub370\ub3c4-node_modules\uac00-\ub514\uc2a4\ud06c-\uacf5\uac04\uc744-\uc0ac\uc6a9\ud558\ub294-\uc774\uc720\uac00-\ubb34\uc5c7\uc778\uac00\uc694",level:2},{value:"Windows\uc5d0\uc11c \ub3d9\uc791\ud560\uae4c\uc694?",id:"windows\uc5d0\uc11c-\ub3d9\uc791\ud560\uae4c\uc694",level:2},{value:"\ud558\uc9c0\ub9cc \uc911\ucca9\ub41c <code>node_modules</code> \ubc29\uc2dd\uc740 Windows\ub791 \uc548 \ub9de\uc9c0 \uc54a\ub098\uc694?",id:"\ud558\uc9c0\ub9cc-\uc911\ucca9\ub41c-node_modules-\ubc29\uc2dd\uc740-windows\ub791-\uc548-\ub9de\uc9c0-\uc54a\ub098\uc694",level:2},{value:"What about circular symlinks?",id:"what-about-circular-symlinks",level:2},{value:"Why have hard links at all? Why not symlink directly to the global store?",id:"why-have-hard-links-at-all-why-not-symlink-directly-to-the-global-store",level:2},{value:"Does pnpm work across multiple drives or filesystems?",id:"does-pnpm-work-across-multiple-drives-or-filesystems",level:2},{value:"Store path is specified",id:"store-path-is-specified",level:3},{value:"Store path is NOT specified",id:"store-path-is-not-specified",level:3},{value:"What does <code>pnpm</code> stand for?",id:"what-does-pnpm-stand-for",level:2},{value:"<code>pnpm</code> does not work with &lt;YOUR-PROJECT-HERE&gt;?",id:"pnpm-does-not-work-with-your-project-here",level:2},{value:"Solution 1",id:"solution-1",level:3},{value:"Solution 2",id:"solution-2",level:3},{value:"Solution 3",id:"solution-3",level:3}],c={toc:m};function u(e){var t=e.components,n=(0,a.Z)(e,s);return(0,i.kt)("wrapper",(0,o.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"\ud328\ud0a4\uc9c0\uac00-global-store\uc5d0-\uc800\uc7a5\ub418\uc5c8\ub294\ub370\ub3c4-node_modules\uac00-\ub514\uc2a4\ud06c-\uacf5\uac04\uc744-\uc0ac\uc6a9\ud558\ub294-\uc774\uc720\uac00-\ubb34\uc5c7\uc778\uac00\uc694"},"\ud328\ud0a4\uc9c0\uac00 global store\uc5d0 \uc800\uc7a5\ub418\uc5c8\ub294\ub370\ub3c4 ",(0,i.kt)("inlineCode",{parentName:"h2"},"node_modules"),"\uac00 \ub514\uc2a4\ud06c \uacf5\uac04\uc744 \uc0ac\uc6a9\ud558\ub294 \uc774\uc720\uac00 \ubb34\uc5c7\uc778\uac00\uc694?"),(0,i.kt)("p",null,"pnpm\uc740 global store\uc5d0\uc11c \ud504\ub85c\uc81d\ud2b8\uc758 ",(0,i.kt)("inlineCode",{parentName:"p"},"node_modules")," \ud3f4\ub354\ub85c ",(0,i.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Hard_link"},"hard links"),"\ub97c \ub9cc\ub4ed\ub2c8\ub2e4. Hard links\ub294 \ub514\uc2a4\ud06c\uc0c1\uc758 \uc6d0\ubcf8 \ud30c\uc77c\uc774 \uc788\ub294 \uc704\uce58\ub97c \uac00\ub9ac\ud0b5\ub2c8\ub2e4. \uc608\ub97c \ub4e4\uc5b4, \ud504\ub85c\uc81d\ud2b8\uc5d0 1MB\ub97c \uc7a1\uc544 \uba39\ub294 ",(0,i.kt)("inlineCode",{parentName:"p"},"foo")," \ub514\ud39c\ub358\uc2dc\uac00 \uc788\uc73c\uba74, \uadf8\uac8c \ud504\ub85c\uc81d\ud2b8\uc758 ",(0,i.kt)("inlineCode",{parentName:"p"},"node_modules")," \ud3f4\ub354\uc640 global store \uc548\uc5d0\uc11c \uac01\uac01 1MB\uc744 \ucc28\uc9c0\ud558\ub294 \uac83\uc73c\ub85c \ubcf4\uc785\ub2c8\ub2e4. \ud558\uc9c0\ub9cc, \uadf8 1MB\ub294 \ub514\uc2a4\ud06c \ub0b4\uc5d0\uc11c ",(0,i.kt)("em",{parentName:"p"},"\ub3d9\uc77c\ud55c \uacf5\uac04"),"\uc774\uba70 \uc11c\ub85c \ub2e4\ub978 \ub450 \uacf3\uc5d0\uc11c \ucc38\uc870\ud560 \ubfd0\uc785\ub2c8\ub2e4. \uadf8\ub798\uc11c ",(0,i.kt)("inlineCode",{parentName:"p"},"foo"),"\ub294 2MB\uac00 \uc544\ub2c8\ub77c \ucd1d 1MB\ub97c \ucc28\uc9c0\ud569\ub2c8\ub2e4."),(0,i.kt)("p",null,"\uc774 \uc8fc\uc81c\uc5d0 \ub300\ud574 \uc790\uc138\ud55c \ub0b4\uc6a9 (\uc601\uc5b4):"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://unix.stackexchange.com/questions/88423/why-do-hard-links-seem-to-take-the-same-space-as-the-originals"},"Why do hard links seem to take the same space as the originals?")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://gist.github.com/zkochan/106cfef49f8476b753a9cbbf9c65aff1"},"A thread from the pnpm chat room")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/pnpm/pnpm/issues/794"},"An issue in the pnpm repo"))),(0,i.kt)("h2",{id:"windows\uc5d0\uc11c-\ub3d9\uc791\ud560\uae4c\uc694"},"Windows\uc5d0\uc11c \ub3d9\uc791\ud560\uae4c\uc694?"),(0,i.kt)("p",null,"\uc9e7\uc740 \ub2f5: \ub124. \uae34 \ub2f5: Windows\uc5d0\uc11c symbolic link\uc744 \ub2e4\ub8e8\ub294 \uac8c \uc544\ubb34\ub798\ub3c4 \ubb38\uc81c\uac00 \ub418\uae34 \ud558\ub294\ub370, pnpm\uc740 \ud574\uacb0 \ubc29\ubc95\uc774 \uc788\uae34 \ud569\ub2c8\ub2e4. Windows\uc5d0\uc120 ",(0,i.kt)("a",{parentName:"p",href:"https://docs.microsoft.com/en-us/windows/win32/fileio/hard-links-and-junctions"},"junctions"),"\uc744 \ub300\uc2e0 \uc0ac\uc6a9\ud558\uace0 \uc788\uc2b5\ub2c8\ub2e4."),(0,i.kt)("h2",{id:"\ud558\uc9c0\ub9cc-\uc911\ucca9\ub41c-node_modules-\ubc29\uc2dd\uc740-windows\ub791-\uc548-\ub9de\uc9c0-\uc54a\ub098\uc694"},"\ud558\uc9c0\ub9cc \uc911\ucca9\ub41c ",(0,i.kt)("inlineCode",{parentName:"h2"},"node_modules")," \ubc29\uc2dd\uc740 Windows\ub791 \uc548 \ub9de\uc9c0 \uc54a\ub098\uc694?"),(0,i.kt)("p",null,"Early versions of npm had issues because of nesting all ",(0,i.kt)("inlineCode",{parentName:"p"},"node_modules")," (see ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/nodejs/node-v0.x-archive/issues/6960"},"this issue"),". However, pnpm does not create deep folders, it stores all packages flatly and uses symbolic links to create the dependency tree structure."),(0,i.kt)("h2",{id:"what-about-circular-symlinks"},"What about circular symlinks?"),(0,i.kt)("p",null,"Although pnpm uses linking to put dependencies into ",(0,i.kt)("inlineCode",{parentName:"p"},"node_modules")," folders, circular symlinks are avoided because parent packages are placed into the same ",(0,i.kt)("inlineCode",{parentName:"p"},"node_modules")," folder in which their dependencies are. So ",(0,i.kt)("inlineCode",{parentName:"p"},"foo"),"'s dependencies are not in ",(0,i.kt)("inlineCode",{parentName:"p"},"foo/node_modules"),", but ",(0,i.kt)("inlineCode",{parentName:"p"},"foo")," is in ",(0,i.kt)("inlineCode",{parentName:"p"},"node_modules")," together with its own dependencies."),(0,i.kt)("h2",{id:"why-have-hard-links-at-all-why-not-symlink-directly-to-the-global-store"},"Why have hard links at all? Why not symlink directly to the global store?"),(0,i.kt)("p",null,"One package can have different sets of dependencies on one machine."),(0,i.kt)("p",null,"In project ",(0,i.kt)("strong",{parentName:"p"},"A")," ",(0,i.kt)("inlineCode",{parentName:"p"},"foo@1.0.0")," can have a dependency resolved to ",(0,i.kt)("inlineCode",{parentName:"p"},"bar@1.0.0"),", but in project ",(0,i.kt)("strong",{parentName:"p"},"B")," the same dependency of ",(0,i.kt)("inlineCode",{parentName:"p"},"foo")," might resolve to ",(0,i.kt)("inlineCode",{parentName:"p"},"bar@1.1.0"),"; so, pnpm hard links ",(0,i.kt)("inlineCode",{parentName:"p"},"foo@1.0.0")," to every project where it is used, in order to create different sets of dependencies for it."),(0,i.kt)("p",null,"Direct symlinking to the global store would work with Node's ",(0,i.kt)("inlineCode",{parentName:"p"},"--preserve-symlinks")," flag, however, that approach comes with a plethora of its own issues, so we decided to stick with hard links. For more details about why this decision was made, see ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/nodejs/node-eps/issues/46"},"this issue"),"."),(0,i.kt)("h2",{id:"does-pnpm-work-across-multiple-drives-or-filesystems"},"Does pnpm work across multiple drives or filesystems?"),(0,i.kt)("p",null,"The package store should be on the same drive and filesystem as installations, otherwise packages will be copied, not linked. This is due to a limitation in how hard linking works, in that a file on one filesystem cannot address a location in another. See ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/pnpm/pnpm/issues/712"},"Issue #712")," for more details."),(0,i.kt)("p",null,"pnpm functions differently in the 2 cases below:"),(0,i.kt)("h3",{id:"store-path-is-specified"},"Store path is specified"),(0,i.kt)("p",null,"If the store path is specified via ",(0,i.kt)("a",{parentName:"p",href:"/ko/6.x/configuring"},"the store config"),", then copying occurs between the store and any projects that are on a different disk."),(0,i.kt)("p",null,"If you run ",(0,i.kt)("inlineCode",{parentName:"p"},"pnpm install")," on disk ",(0,i.kt)("inlineCode",{parentName:"p"},"A"),", then the pnpm store must be on disk ",(0,i.kt)("inlineCode",{parentName:"p"},"A"),". If the pnpm store is located on disk ",(0,i.kt)("inlineCode",{parentName:"p"},"B"),", then all required packages will be directly copied to the project location instead of being linked. This severely inhibits the storage and performance benefits of pnpm."),(0,i.kt)("h3",{id:"store-path-is-not-specified"},"Store path is NOT specified"),(0,i.kt)("p",null,"If the store path is not set, then multiple stores are created (one per drive or filesystem)."),(0,i.kt)("p",null,"If installation is run on disk ",(0,i.kt)("inlineCode",{parentName:"p"},"A"),", the store will be created on ",(0,i.kt)("inlineCode",{parentName:"p"},"A")," ",(0,i.kt)("inlineCode",{parentName:"p"},".pnpm-store")," under the filesystem root.  If later the installation is run on disk ",(0,i.kt)("inlineCode",{parentName:"p"},"B"),", an independent store will be created on ",(0,i.kt)("inlineCode",{parentName:"p"},"B")," at ",(0,i.kt)("inlineCode",{parentName:"p"},".pnpm-store"),". The projects would still maintain the benefits of pnpm, but each drive may have redundant packages."),(0,i.kt)("h2",{id:"what-does-pnpm-stand-for"},"What does ",(0,i.kt)("inlineCode",{parentName:"h2"},"pnpm")," stand for?"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"pnpm")," stands for ",(0,i.kt)("inlineCode",{parentName:"p"},"performant npm"),". ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/rstacruz/"},"@rstacruz")," came up with the name."),(0,i.kt)("h2",{id:"pnpm-does-not-work-with-your-project-here"},(0,i.kt)("inlineCode",{parentName:"h2"},"pnpm")," does not work with ","<","YOUR-PROJECT-HERE>?"),(0,i.kt)("p",null,"In most cases it means that one of the dependencies require packages not declared in ",(0,i.kt)("inlineCode",{parentName:"p"},"package.json"),". It is a common mistake caused by flat ",(0,i.kt)("inlineCode",{parentName:"p"},"node_modules"),". If this happens, this is an error in the dependency and the dependency should be fixed. That might take time though, so pnpm supports workarounds to make the buggy packages work."),(0,i.kt)("h3",{id:"solution-1"},"Solution 1"),(0,i.kt)("p",null,"In the following example, a dependency does ",(0,i.kt)("strong",{parentName:"p"},"not")," have the ",(0,i.kt)("inlineCode",{parentName:"p"},"iterall")," module in its own list of deps."),(0,i.kt)("p",null,"The easiest solution to resolve missing dependencies of the buggy packages is to ",(0,i.kt)("strong",{parentName:"p"},"add ",(0,i.kt)("inlineCode",{parentName:"strong"},"iterall")," as a dependency to our project's ",(0,i.kt)("inlineCode",{parentName:"strong"},"package.json")),"."),(0,i.kt)("p",null,"You can do so, by installing it via ",(0,i.kt)("inlineCode",{parentName:"p"},"pnpm add iterall"),", and will be automatically added to your project's ",(0,i.kt)("inlineCode",{parentName:"p"},"package.json"),"."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'  "dependencies": {\n    ...\n    "iterall": "^1.2.2",\n    ...\n  }\n')),(0,i.kt)("h3",{id:"solution-2"},"Solution 2"),(0,i.kt)("p",null,"One of the solutions is to use ",(0,i.kt)("a",{parentName:"p",href:"/ko/6.x/pnpmfile#hooks"},"hooks")," for adding the missing dependencies to the package's ",(0,i.kt)("inlineCode",{parentName:"p"},"package.json"),"."),(0,i.kt)("p",null,"An example was ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/pnpm/pnpm/issues/1043"},"Webpack Dashboard")," which wasn't working with ",(0,i.kt)("inlineCode",{parentName:"p"},"pnpm"),". It has since been resolved such that it works with ",(0,i.kt)("inlineCode",{parentName:"p"},"pnpm")," now."),(0,i.kt)("p",null,"It used to throw an error:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-console"},"Error: Cannot find module 'babel-traverse'\n  at /node_modules/inspectpack@2.2.3/node_modules/inspectpack/lib/actions/parse\n")),(0,i.kt)("p",null,"The problem was that ",(0,i.kt)("inlineCode",{parentName:"p"},"babel-traverse")," was used in ",(0,i.kt)("inlineCode",{parentName:"p"},"inspectpack")," which was used by ",(0,i.kt)("inlineCode",{parentName:"p"},"webpack-dashboard"),", but ",(0,i.kt)("inlineCode",{parentName:"p"},"babel-traverse")," wasn't specified in ",(0,i.kt)("inlineCode",{parentName:"p"},"inspectpack"),"'s ",(0,i.kt)("inlineCode",{parentName:"p"},"package.json"),". It still worked with ",(0,i.kt)("inlineCode",{parentName:"p"},"npm")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"yarn")," because they create flat ",(0,i.kt)("inlineCode",{parentName:"p"},"node_modules"),"."),(0,i.kt)("p",null,"The solution was to create a ",(0,i.kt)("inlineCode",{parentName:"p"},".pnpmfile.cjs")," with the following contents:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"module.exports = {\n  hooks: {\n    readPackage: (pkg) => {\n      if (pkg.name === \"inspectpack\") {\n        pkg.dependencies['babel-traverse'] = '^6.26.0';\n      }\n      return pkg;\n    }\n  }\n};\n")),(0,i.kt)("p",null,"After creating a ",(0,i.kt)("inlineCode",{parentName:"p"},".pnpmfile.cjs"),", delete ",(0,i.kt)("inlineCode",{parentName:"p"},"pnpm-lock.yaml")," only - there is no need to delete ",(0,i.kt)("inlineCode",{parentName:"p"},"node_modules"),", as pnpm hooks only affect module resolution. Then, rebuild the dependencies & it should be working."),(0,i.kt)("h3",{id:"solution-3"},"Solution 3"),(0,i.kt)("p",null,"In case there are too many issues, you can use the ",(0,i.kt)("inlineCode",{parentName:"p"},"shamefully-hoist")," option. This creates a flat ",(0,i.kt)("inlineCode",{parentName:"p"},"node_modules")," structure similar to the one created by ",(0,i.kt)("inlineCode",{parentName:"p"},"npm")," or ",(0,i.kt)("inlineCode",{parentName:"p"},"yarn"),", which is not recommended as avoiding this structure is the primary purpose of pnpm's ",(0,i.kt)("inlineCode",{parentName:"p"},"node_modules")," approach."),(0,i.kt)("p",null,"To use it, try ",(0,i.kt)("inlineCode",{parentName:"p"},"pnpm install --shamefully-hoist"),"."))}u.isMDXComponent=!0}}]);