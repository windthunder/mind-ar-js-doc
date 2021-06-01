(window.webpackJsonp=window.webpackJsonp||[]).push([[40],{110:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return r})),a.d(t,"metadata",(function(){return s})),a.d(t,"toc",(function(){return c})),a.d(t,"default",(function(){return p}));var n=a(3),i=(a(0),a(124)),o=a(133);const r={id:"compile",title:"Compile Target Images",sidebar_label:"Compile Target Images"},s={unversionedId:"quick-start/compile",id:"quick-start/compile",isDocsHomePage:!1,title:"Compile Target Images",description:"Before working on the webpage, we first need to preprocess (a.k.a. compile) the images. We need to do a thorough scan of the images and extract interesting locations (a.k.a. feature points) so we can detect and track the images later.",source:"@site/docs/quick-start/compile.md",slug:"/quick-start/compile",permalink:"/mind-ar-js-doc/quick-start/compile",version:"current",sidebar_label:"Compile Target Images",sidebar:"docs",previous:{title:"Overview",permalink:"/mind-ar-js-doc/quick-start/overview"},next:{title:"Build the page",permalink:"/mind-ar-js-doc/quick-start/webpage"}},c=[{value:"step 1 - select your images",id:"step-1---select-your-images",children:[]},{value:"step 2 - visualize the features",id:"step-2---visualize-the-features",children:[]},{value:"step 3 - download .mind file",id:"step-3---download-mind-file",children:[]}],l={toc:c};function p({components:e,...t}){return Object(i.a)("wrapper",Object(n.a)({},l,t,{components:e,mdxType:"MDXLayout"}),Object(i.a)("p",null,"Before working on the webpage, we first need to preprocess (a.k.a. compile) the images. We need to do a thorough scan of the images and extract interesting locations (a.k.a. feature points) so we can detect and track the images later. "),Object(i.a)("p",null,"This preprocessing step takes time, therefore we want to do it beforehand so to reduce the loading time when users actually use your AR app later. "),Object(i.a)("p",null,"MindAR comes with a super friendly compilation tool to do this. ",Object(i.a)("a",{parentName:"p",href:"../tools/compile"},"Image Targets Compiler")),Object(i.a)("h2",{id:"step-1---select-your-images"},"step 1 - select your images"),Object(i.a)("p",null,"Head over to the compiler and you will see this"),Object(i.a)("blockquote",null,Object(i.a)("p",null,Object(i.a)("img",{alt:"img",src:a(187).default}))),Object(i.a)("p",null,"In this QuickStart demo, we will be using this image, so please ",Object(i.a)("a",{href:o.a,target:"_blank"},"download this image")," first"),Object(i.a)("img",{src:o.a,width:"300"}),Object(i.a)("p",null,"Then, drop this image to the compiler and click ",Object(i.a)("inlineCode",{parentName:"p"},"Start"),"."),Object(i.a)("div",{className:"admonition admonition-note alert alert--secondary"},Object(i.a)("div",{parentName:"div",className:"admonition-heading"},Object(i.a)("h5",{parentName:"div"},Object(i.a)("span",{parentName:"h5",className:"admonition-icon"},Object(i.a)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},Object(i.a)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),Object(i.a)("div",{parentName:"div",className:"admonition-content"},Object(i.a)("p",{parentName:"div"},"As a benchmark, my macbook pro took around 10-30 seconds to compile the above image."))),Object(i.a)("h2",{id:"step-2---visualize-the-features"},"step 2 - visualize the features"),Object(i.a)("p",null,"Once the compilation is done, we will see some features visualization."),Object(i.a)("blockquote",null,Object(i.a)("p",null,Object(i.a)("img",{alt:"img",src:a(188).default}))),"This visualization tool gives you an idea of the feature distributions of your images. We will have some blog posts coming up to explain the details later, so stay tuned!",Object(i.a)("br",null),Object(i.a)("br",null),Object(i.a)("p",null,"In general, you want to have good amount of features with well distribution. Actually, this sample isn't a very good one because you can see a blank space on the top left corner."),Object(i.a)("h2",{id:"step-3---download-mind-file"},"step 3 - download .mind file"),Object(i.a)("p",null,"At the bottom of the visualization, you will see a ",Object(i.a)("inlineCode",{parentName:"p"},"Download")," button. This will gives you a ",Object(i.a)("inlineCode",{parentName:"p"},"targets.mind")," file. It stores the feature data in compact format, and we will need this later when building the webpage."))}p.isMDXComponent=!0},124:function(e,t,a){"use strict";a.d(t,"a",(function(){return m}));var n=a(0),i=a.n(n);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function c(e,t){if(null==e)return{};var a,n,i=function(e,t){if(null==e)return{};var a,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var l=i.a.createContext({}),p=function(e){var t=i.a.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},u={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},d=i.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,r=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),d=p(a),m=n,f=d["".concat(r,".").concat(m)]||d[m]||u[m]||o;return a?i.a.createElement(f,s(s({ref:t},l),{},{components:a})):i.a.createElement(f,s({ref:t},l))}));function m(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,r=new Array(o);r[0]=d;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:n,r[1]=s;for(var l=2;l<o;l++)r[l]=a[l];return i.a.createElement.apply(null,r)}return i.a.createElement.apply(null,a)}d.displayName="MDXCreateElement"},133:function(e,t,a){"use strict";t.a=a.p+"assets/images/card-06cb9111a8e32627db6bfafc7aa22a4d.png"},187:function(e,t,a){"use strict";a.r(t),t.default=a.p+"assets/images/step1-125bf4af026bf75485f1dee01fd59a10.png"},188:function(e,t,a){"use strict";a.r(t),t.default=a.p+"assets/images/step2-1e9df4e618de281f49ab797851006faf.png"}}]);