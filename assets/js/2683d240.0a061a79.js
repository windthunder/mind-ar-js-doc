(self.webpackChunkdoc=self.webpackChunkdoc||[]).push([[7882],{3905:(e,t,r)=>{"use strict";r.d(t,{Zo:()=>m,kt:()=>h});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=n.createContext({}),l=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},m=function(e){var t=l(e.components);return n.createElement(c.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,m=s(e,["components","mdxType","originalType","parentName"]),p=l(r),u=a,h=p["".concat(c,".").concat(u)]||p[u]||d[u]||i;return r?n.createElement(h,o(o({ref:t},m),{},{components:r})):n.createElement(h,o({ref:t},m))}));function h(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=u;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s[p]="string"==typeof e?e:a,o[1]=s;for(var l=2;l<i;l++)o[l]=r[l];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},1410:e=>{e.exports={title:"mind-ar-js",tagline:"web augmented reality - augmented images",url:"https://hiukim.github.io",baseUrl:"/mind-ar-js-doc/",onBrokenLinks:"warn",onBrokenMarkdownLinks:"warn",favicon:"img/favicon.png",organizationName:"hiukim",projectName:"mind-ar-js-doc",themeConfig:{navbar:{title:"MindAR - Documentation",logo:{alt:"MindAR",src:"img/logo.png"}}},plugins:["docusaurus-plugin-sass"],presets:[["@docusaurus/preset-classic",{docs:{routeBasePath:"/",sidebarPath:6679},blog:{showReadingTime:!0,editUrl:"https://github.com/facebook/docusaurus/edit/master/website/blog/"},theme:{customCss:2295}}]],scripts:["https://cdnjs.cloudflare.com/ajax/libs/dropzone/5.7.2/min/dropzone.min.js","https://cdn.jsdelivr.net/gh/hiukim/mind-ar-js@1.1.5/dist/mindar-image.prod.js"],stylesheets:["https://cdnjs.cloudflare.com/ajax/libs/dropzone/5.7.2/dropzone.min.css"],customFields:{libVersion:"1.2.5"}}},6679:e=>{e.exports={docs:[{type:"doc",id:"home"},{type:"doc",id:"installation"},{type:"doc",id:"installation-v1-1-x"},{type:"category",label:"Image Tracking Quick Start",collapsed:!0,items:["quick-start/overview","quick-start/compile","quick-start/webpage","quick-start/run","quick-start/assets","quick-start/wrapup","quick-start/tracking-config"]},{type:"category",label:"Image Tracking Examples",collapsed:!0,items:["examples/summary","examples/minimal","examples/basic","examples/multi-targets","examples/multi-tracks","examples/custom-ui","examples/events-handling","examples/interative"]},{type:"category",label:"Face Tracking Quick Start",collapsed:!0,items:["face-tracking-quick-start/overview","face-tracking-quick-start/webpage","face-tracking-quick-start/run","face-tracking-quick-start/assets","face-tracking-quick-start/occluder","face-tracking-quick-start/wrapup"]},{type:"category",label:"Face Tracking Examples",collapsed:!0,items:["face-tracking-examples/summary","face-tracking-examples/minimal","face-tracking-examples/tryon","face-tracking-examples/events-handling"]},{type:"category",label:"More Examples",collapsed:!0,items:["more-examples/react","more-examples/threejs-image","more-examples/threejs-face","more-examples/threejs-face-facemesh","more-examples/threejs-face-blendshapes"]},{type:"category",label:"Tools",collapsed:!0,items:["tools/compile"]}]}},1961:(e,t,r)=>{"use strict";r.r(t),r.d(t,{assets:()=>m,contentTitle:()=>c,default:()=>u,frontMatter:()=>s,metadata:()=>l,toc:()=>p});var n=r(7462),a=(r(7294),r(3905)),i=r(1410),o=r(4996);const s={id:"threejs-face",title:"ThreeJS Face Tracking",sidebar_label:"ThreeJS Face"},c=void 0,l={unversionedId:"more-examples/threejs-face",id:"more-examples/threejs-face",title:"ThreeJS Face Tracking",description:"This is sample application using three.js instead of AFRAME. The effect should be similar to Minimal",source:"@site/docs/more-examples/threejs-face.md",sourceDirName:"more-examples",slug:"/more-examples/threejs-face",permalink:"/mind-ar-js-doc/more-examples/threejs-face",draft:!1,tags:[],version:"current",frontMatter:{id:"threejs-face",title:"ThreeJS Face Tracking",sidebar_label:"ThreeJS Face"},sidebar:"docs",previous:{title:"ThreeJS Image",permalink:"/mind-ar-js-doc/more-examples/threejs-image"},next:{title:"ThreeJS FaceMesh",permalink:"/mind-ar-js-doc/more-examples/threejs-face-facemesh"}},m={},p=[{value:"Try it out",id:"try-it-out",level:2}],d={toc:p};function u(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"This is sample application using three.js instead of AFRAME. The effect should be similar to ",(0,a.kt)("a",{href:"../face-tracking-examples/minimal"},"Minimal")),(0,a.kt)("h2",{id:"try-it-out"},"Try it out"),(0,a.kt)("a",{href:(0,o.Z)("/face-tracking-samples/three.html"),target:"_blank"},"Live Demo"),(0,a.kt)("code",null,`\n<html>\n  <head>\n    <script type="importmap">\n    {\n      "imports": {\n\t"three": "https://unpkg.com/three@0.160.0/build/three.module.js",\n\t"three/addons/": "https://unpkg.com/three@0.160.0/examples/jsm/",\n\t"mindar-face-three":"https://cdn.jsdelivr.net/npm/mind-ar@${i.customFields.libVersion}/dist/mindar-face-three.prod.js"\n      }\n    }\n    <\/script>\n    <script type="module">\n      import * as THREE from 'three';\n      import { MindARThree } from 'mindar-face-three';\n      const mindarThree = new MindARThree({\n\tcontainer: document.querySelector("#container"),\n      });\n      const {renderer, scene, camera} = mindarThree;\n      const anchor = mindarThree.addAnchor(1);\n      const geometry = new THREE.SphereGeometry( 0.1, 32, 16 );\n      const material = new THREE.MeshBasicMaterial( {color: 0x00ffff, transparent: true, opacity: 0.5} );\n      const sphere = new THREE.Mesh( geometry, material );\n      anchor.group.add(sphere);\n      const start = async() => {\n\tawait mindarThree.start();\n\trenderer.setAnimationLoop(() => {\n\t  renderer.render(scene, camera);\n\t});\n      }\n      const startButton = document.querySelector("#startButton");\n      startButton.addEventListener("click", () => {\n\tstart();\n      });\n      stopButton.addEventListener("click", () => {\n\tmindarThree.stop();\n\tmindarThree.renderer.setAnimationLoop(null);\n      });\n    <\/script>\n    <style>\n      body {\n\tmargin: 0;\n      }\n      #container {\n\twidth: 100vw;\n\theight: 100vh;\n\tposition: relative;\n\toverflow: hidden;\n      }\n      #control {\n\tposition: fixed;\n\ttop: 0;\n\tleft: 0;\n\tz-index: 2;\n      }\n    </style>\n  </head>\n  <body>\n    <div id="control">\n      <button id="startButton">Start</button>\n      <button id="stopButton">Stop</button>\n    </div>\n    <div id="container">\n    </div>\n  </body>\n</html>\n`))}u.isMDXComponent=!0}}]);