(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{124:function(e,t,a){"use strict";a.d(t,"a",(function(){return h}));var n=a(0),i=a.n(n);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function c(e,t){if(null==e)return{};var a,n,i=function(e,t){if(null==e)return{};var a,n,i={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var s=i.a.createContext({}),p=function(e){var t=i.a.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},d={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},m=i.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,r=e.originalType,o=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),m=p(a),h=n,u=m["".concat(o,".").concat(h)]||m[h]||d[h]||r;return a?i.a.createElement(u,l(l({ref:t},s),{},{components:a})):i.a.createElement(u,l({ref:t},s))}));function h(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var r=a.length,o=new Array(r);o[0]=m;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:n,o[1]=l;for(var s=2;s<r;s++)o[s]=a[s];return i.a.createElement.apply(null,o)}return i.a.createElement.apply(null,a)}m.displayName="MDXCreateElement"},82:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return o})),a.d(t,"metadata",(function(){return l})),a.d(t,"toc",(function(){return c})),a.d(t,"default",(function(){return p}));var n=a(3),i=a(7),r=(a(0),a(124)),o={id:"webpage",title:"Build the page",sidebar_label:"Build the page"},l={unversionedId:"quick-start/webpage",id:"quick-start/webpage",isDocsHomePage:!1,title:"Build the page",description:"Now you have the targets.mind file ready, we can start building the webpage.",source:"@site/docs/quick-start/webpage.md",slug:"/quick-start/webpage",permalink:"/mind-ar-js-doc/quick-start/webpage",version:"current",sidebar_label:"Build the page",sidebar:"docs",previous:{title:"Compile Target Images",permalink:"/mind-ar-js-doc/quick-start/compile"},next:{title:"Run It",permalink:"/mind-ar-js-doc/quick-start/run"}},c=[{value:"Preparation",id:"preparation",children:[]},{value:"Minimal example",id:"minimal-example",children:[{value:"standard HTML stuff",id:"standard-html-stuff",children:[]},{value:"mind-ar-js and aframe library",id:"mind-ar-js-and-aframe-library",children:[]},{value:"aframe",id:"aframe",children:[]}]}],s={toc:c};function p(e){var t=e.components,a=Object(i.a)(e,["components"]);return Object(r.a)("wrapper",Object(n.a)({},s,a,{components:t,mdxType:"MDXLayout"}),Object(r.a)("p",null,"Now you have the ",Object(r.a)("inlineCode",{parentName:"p"},"targets.mind")," file ready, we can start building the webpage."),Object(r.a)("h2",{id:"preparation"},"Preparation"),Object(r.a)("p",null,"First, create a clean folder for your project, let say ",Object(r.a)("inlineCode",{parentName:"p"},"mindar-project"),". Put the ",Object(r.a)("inlineCode",{parentName:"p"},"targets.mind")," file there and create a blank html file, let's say ",Object(r.a)("inlineCode",{parentName:"p"},"index.html"),". So the folder should have two files like this:"),Object(r.a)("blockquote",null,"./targets.mind",Object(r.a)("p",null,"./index.html")),Object(r.a)("h2",{id:"minimal-example"},"Minimal example"),Object(r.a)("p",null,"Now, let's start with something simple to display a rectanglar plane just on top of the target image. Open ",Object(r.a)("inlineCode",{parentName:"p"},"index.html")," with editor of your choices, and paste the following content:"),Object(r.a)("pre",null,Object(r.a)("code",{parentName:"pre"},'<html>\n  <head>\n    <meta name="viewport" content="width=device-width, initial-scale=1" />\n    <script src="https://cdn.jsdelivr.net/gh/hiukim/mind-ar-js@1.0.0/dist/mindar-image.prod.js"><\/script>\n    <script src="https://aframe.io/releases/1.2.0/aframe.min.js"><\/script>\n    <script src="https://cdn.jsdelivr.net/gh/hiukim/mind-ar-js@1.0.0/dist/mindar-image.aframe.js"><\/script>\n  </head>\n\n  <body>\n    <a-scene mindar-image="imageTargetSrc: ./targets.mind;" vr-mode-ui="enabled: false" device-orientation-permission-ui="enabled: false">\n      <a-camera position="0 0 0" look-controls="enabled: false"></a-camera>\n      <a-entity mindar-image-target="targetIndex: 0">\n        <a-plane color="blue" opaciy="0.5" position="0 0 0" height="0.552" width="1" rotation="0 0 0"></a-plane>\n      </a-entity>\n    </a-scene>\n  </body>\n</html>\n')),Object(r.a)("p",null,"Let's digest them:"),Object(r.a)("h3",{id:"standard-html-stuff"},"standard HTML stuff"),Object(r.a)("p",null,Object(r.a)("inlineCode",{parentName:"p"},"html"),", ",Object(r.a)("inlineCode",{parentName:"p"},"head"),", ",Object(r.a)("inlineCode",{parentName:"p"},"meta")," and ",Object(r.a)("inlineCode",{parentName:"p"},"body")," are just standard html stuff, and we will skip."),Object(r.a)("h3",{id:"mind-ar-js-and-aframe-library"},"mind-ar-js and aframe library"),Object(r.a)("pre",null,Object(r.a)("code",{parentName:"pre"},'  <script src="https://cdn.jsdelivr.net/gh/hiukim/mind-ar-js@1.0.0/dist/mindar-image.prod.js"><\/script>\n  <script src="https://aframe.io/releases/1.2.0/aframe.min.js"><\/script>\n  <script src="https://cdn.jsdelivr.net/gh/donmccurdy/aframe-extras@v6.1.1/dist/aframe-extras.min.js"><\/script>\n  <script src="https://cdn.jsdelivr.net/gh/hiukim/mind-ar-js@1.0.0/dist/mindar-image.aframe.js"><\/script>\n')),Object(r.a)("p",null,"They are the ",Object(r.a)("inlineCode",{parentName:"p"},"mindar")," and ",Object(r.a)("inlineCode",{parentName:"p"},"aframe")," library hosted in cdn. They are the only things you need to build a web AR application!"),Object(r.a)("h3",{id:"aframe"},"aframe"),Object(r.a)("p",null,"MindAR comes with an AFRAME extension that allows you to construct a 3D scene easily. We will not go into the details of AFRAME in this tutorial. If you want to learn more about it, please refer to ",Object(r.a)("a",{href:"https://aframe.io/",target:"_blank"},"AFRAME")),Object(r.a)("p",null,"In short, you can see the ",Object(r.a)("inlineCode",{parentName:"p"},"<a-scene>")," block inside ",Object(r.a)("inlineCode",{parentName:"p"},"body"),". This is the main part of the application. If you don't have AFRAME background, don't worry. Most of the time you can just copy this block of code as a template to start."),Object(r.a)("p",null,"We'll highlight two things here related to MindAR. "),Object(r.a)("ol",null,Object(r.a)("li",{parentName:"ol"},Object(r.a)("p",{parentName:"li"},"Within ",Object(r.a)("inlineCode",{parentName:"p"},"<a-scene>")," you can see a property ",Object(r.a)("inlineCode",{parentName:"p"},'mindar-image="imageTargetSrc: ./targets.mind;"')," It tells the engine where is the compiled ",Object(r.a)("inlineCode",{parentName:"p"},".mind")," file you built earlier.")),Object(r.a)("li",{parentName:"ol"},Object(r.a)("p",{parentName:"li"},"There is an ",Object(r.a)("inlineCode",{parentName:"p"},"<a-entity>"),", with a prpoerty ",Object(r.a)("inlineCode",{parentName:"p"},'mindar-image-target="targetIndex: 0"'),". This tells the engine to detect and track a particular image target. The ",Object(r.a)("inlineCode",{parentName:"p"},"targetIndex")," is always ",Object(r.a)("inlineCode",{parentName:"p"},"0"),", if your ",Object(r.a)("inlineCode",{parentName:"p"},"targets.mind")," contains only a single image. You can however compile multiple images together, and the ",Object(r.a)("inlineCode",{parentName:"p"},"targetIndex")," will follows the order of the images. We will talk more this later when we have multiple image targets. "))),Object(r.a)("div",{className:"admonition admonition-tip alert alert--success"},Object(r.a)("div",{parentName:"div",className:"admonition-heading"},Object(r.a)("h5",{parentName:"div"},Object(r.a)("span",{parentName:"h5",className:"admonition-icon"},Object(r.a)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},Object(r.a)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),Object(r.a)("div",{parentName:"div",className:"admonition-content"},Object(r.a)("p",{parentName:"div"},"Remember this. The AR engine only does ONE thing! - It updates the visibility and positions of a-entity"))),Object(r.a)("p",null,"The AR engine consume your camera feed, then detect, track the target images and update the visibility and positions of this a-entity. It means, whatever attached to the entity will be properly magically displayed accordingly. Once you have this setup properly, what you usually need to do is to construct the content inside this ",Object(r.a)("inlineCode",{parentName:"p"},"a-entity")," according to your application needs."),Object(r.a)("p",null,"This is minimal case, you see a ",Object(r.a)("inlineCode",{parentName:"p"},'<a-plane color="blue" opaciy="0.5" position="0 0 0" height="0.552" width="1" rotation="0 0 0"></a-plane>'),". This is the object we want to show on top of the target image. Obviously, it's just a blue plane."),Object(r.a)("div",{className:"admonition admonition-tip alert alert--success"},Object(r.a)("div",{parentName:"div",className:"admonition-heading"},Object(r.a)("h5",{parentName:"div"},Object(r.a)("span",{parentName:"h5",className:"admonition-icon"},Object(r.a)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},Object(r.a)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),Object(r.a)("div",{parentName:"div",className:"admonition-content"},Object(r.a)("p",{parentName:"div"},"width=1 means the width is the same as the target image"))),Object(r.a)("p",null,"As you can see we set the width to 1, to make it having the same width of the target image in reality. Why are we setting the height to 0.552, you asked? Good question, because the target image has a ratio of 0.552/1. If you set height to 1, which means also equal to the width of the target image. It will turn out to be a square (You should try and see the effect). Now this rectangular plane will perfectly overlay the target image."),Object(r.a)("p",null,"Also, note that the anchor point of the entity is the center of the target image."),Object(r.a)("p",null,"Now, you are all set! Let's head over to the next section and see the effect!"))}p.isMDXComponent=!0}}]);