(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{136:function(e,t,r){"use strict";r.d(t,"a",(function(){return u}));var n=r(0),a=r.n(n);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=a.a.createContext({}),l=function(e){var t=a.a.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},m=a.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),m=l(r),u=n,j=m["".concat(c,".").concat(u)]||m[u]||d[u]||i;return r?a.a.createElement(j,o(o({ref:t},p),{},{components:r})):a.a.createElement(j,o({ref:t},p))}));function u(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,c=new Array(i);c[0]=m;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:n,c[1]=o;for(var p=2;p<i;p++)c[p]=r[p];return a.a.createElement.apply(null,c)}return a.a.createElement.apply(null,r)}m.displayName="MDXCreateElement"},92:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return c})),r.d(t,"metadata",(function(){return o})),r.d(t,"toc",(function(){return s})),r.d(t,"default",(function(){return l}));var n=r(3),a=r(7),i=(r(0),r(136)),c={id:"installation",title:"Installation",sidebar_label:"Installation"},o={unversionedId:"installation",id:"installation",isDocsHomePage:!1,title:"Installation",description:"MindAR project can be run directly in plain static HTML file. It's super easy!",source:"@site/docs/installation.md",slug:"/installation",permalink:"/mind-ar-js-doc/installation",version:"current",sidebar_label:"Installation",sidebar:"docs",previous:{title:"MindAR",permalink:"/mind-ar-js-doc/"},next:{title:"Overview",permalink:"/mind-ar-js-doc/quick-start/overview"}},s=[{value:"AFRAME installation",id:"aframe-installation",children:[{value:"1. HTML script",id:"1-html-script",children:[]},{value:"2. npm",id:"2-npm",children:[]}]},{value:"THREE.js installation",id:"threejs-installation",children:[{value:"1. HTML script",id:"1-html-script-1",children:[]},{value:"2. npm",id:"2-npm-1",children:[]}]}],p={toc:s};function l(e){var t=e.components,r=Object(a.a)(e,["components"]);return Object(i.a)("wrapper",Object(n.a)({},p,r,{components:t,mdxType:"MDXLayout"}),Object(i.a)("p",null,"MindAR project can be run directly in plain static HTML file. It's super easy! "),Object(i.a)("p",null,"MindAR comes with different types of tracking capabilities, including Image Tracking and Face Tracking. To minimize library size, each of these are independently built. Moreover, MindAR provides native support for three.js or AFRAME. They are also being built independently. So altogehter, there are 2x2 = 4 sets of distributions."),Object(i.a)("h2",{id:"aframe-installation"},"AFRAME installation"),Object(i.a)("p",null,"For each type of tracking, there are two javascript files: ",Object(i.a)("inlineCode",{parentName:"p"},"mindar-[TYPE].prod.js")," and ",Object(i.a)("inlineCode",{parentName:"p"},"mindar-[TYPE]-aframe.prod.js")),Object(i.a)("p",null,"The first one is the core tracking library while the second one is a aframe extension. Normally, you will import the first script, followed by aframe library, then followed by the second script. We decided to not embed AFRAME inside MindAR to make it more flexible. Also, for highly customizable applications, you can write your own aframe extension (second script)."),Object(i.a)("p",null,"There are two generally two ways to install the library."),Object(i.a)("h3",{id:"1-html-script"},"1. HTML script"),Object(i.a)("h4",{id:"image-tracking"},"Image Tracking"),Object(i.a)("pre",null,Object(i.a)("code",{parentName:"pre"},'<script src="https://cdn.jsdelivr.net/npm/mind-ar@1.1.0/dist/mindar-image.prod.js"><\/script>\n<script src="https://aframe.io/releases/1.2.0/aframe.min.js"><\/script>\n<script src="https://cdn.jsdelivr.net/npm/mind-ar@1.1.0/dist/mindar-image-aframe.prod.js"><\/script>\n')),Object(i.a)("h4",{id:"face-tracking"},"Face Tracking"),Object(i.a)("pre",null,Object(i.a)("code",{parentName:"pre"},'<script src="https://cdn.jsdelivr.net/npm/mind-ar@1.1.0/dist/mindar-face.prod.js"><\/script>\n<script src="https://aframe.io/releases/1.2.0/aframe.min.js"><\/script>\n<script src="https://cdn.jsdelivr.net/npm/mind-ar@1.1.0/dist/mindar-face-aframe.prod.js"><\/script>\n')),Object(i.a)("h3",{id:"2-npm"},"2. npm"),Object(i.a)("pre",null,Object(i.a)("code",{parentName:"pre"},"> npm i mind-ar --save\n> npm i aframe --save\n")),Object(i.a)("h4",{id:"image-tracking-1"},"Image Tracking"),Object(i.a)("pre",null,Object(i.a)("code",{parentName:"pre"},"import 'mind-ar/dist/mindar-image.prod.js';\nimport 'aframe';\nimport 'mind-ar/dist/mindar-image-aframe.prod.js';\n")),Object(i.a)("h4",{id:"face-tracking-1"},"Face Tracking"),Object(i.a)("pre",null,Object(i.a)("code",{parentName:"pre"},"import 'mind-ar/dist/mindar-face.prod.js';\nimport 'aframe';\nimport 'mind-ar/dist/mindar-face-aframe.prod.js';\n")),Object(i.a)("h2",{id:"threejs-installation"},"THREE.js installation"),Object(i.a)("p",null,"Three.js integration is simpler. You only need to import a single script. "),Object(i.a)("h3",{id:"1-html-script-1"},"1. HTML script"),Object(i.a)("h4",{id:"image-tracking-2"},"Image Tracking"),Object(i.a)("pre",null,Object(i.a)("code",{parentName:"pre"},'<script src="https://cdn.jsdelivr.net/npm/mind-ar@1.1.0/dist/mindar-image-three.prod.js"><\/script>\n')),Object(i.a)("h4",{id:"face-tracking-2"},"Face Tracking"),Object(i.a)("pre",null,Object(i.a)("code",{parentName:"pre"},'<script src="https://cdn.jsdelivr.net/gh/hiukim/mind-ar-js@1.1.0/dist/mindar-face-three.prod.js"><\/script>\n<script src="https://cdn.jsdelivr.net/npm/mind-ar@1.1.0/dist/mindar-face-three.prod.js"><\/script>\n')),Object(i.a)("h3",{id:"2-npm-1"},"2. npm"),Object(i.a)("pre",null,Object(i.a)("code",{parentName:"pre"},"> npm i mind-ar --save\n")),Object(i.a)("h4",{id:"image-tracking-3"},"Image Tracking"),Object(i.a)("pre",null,Object(i.a)("code",{parentName:"pre"},"import 'mind-ar/dist/mindar-image-three.prod.js';\n")),Object(i.a)("h4",{id:"face-tracking-3"},"Face Tracking"),Object(i.a)("pre",null,Object(i.a)("code",{parentName:"pre"},"import 'mind-ar/dist/mindar-face-three.prod.js';\n")))}l.isMDXComponent=!0}}]);