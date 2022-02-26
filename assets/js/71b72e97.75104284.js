(self.webpackChunkdoc=self.webpackChunkdoc||[]).push([[9374],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return d},kt:function(){return u}});var i=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,i,a=function(e,t){if(null==e)return{};var n,i,a={},s=Object.keys(e);for(i=0;i<s.length;i++)n=s[i],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(i=0;i<s.length;i++)n=s[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=i.createContext({}),o=function(e){var t=i.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},d=function(e){var t=o(e.components);return i.createElement(l.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},p=i.forwardRef((function(e,t){var n=e.components,a=e.mdxType,s=e.originalType,l=e.parentName,d=c(e,["components","mdxType","originalType","parentName"]),p=o(n),u=a,g=p["".concat(l,".").concat(u)]||p[u]||m[u]||s;return n?i.createElement(g,r(r({ref:t},d),{},{components:n})):i.createElement(g,r({ref:t},d))}));function u(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var s=n.length,r=new Array(s);r[0]=p;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:a,r[1]=c;for(var o=2;o<s;o++)r[o]=n[o];return i.createElement.apply(null,r)}return i.createElement.apply(null,n)}p.displayName="MDXCreateElement"},1410:function(e){e.exports={title:"mind-ar-js",tagline:"web augmented reality - augmented images",url:"https://hiukim.github.io",baseUrl:"/mind-ar-js-doc/",onBrokenLinks:"warn",onBrokenMarkdownLinks:"warn",favicon:"img/favicon.png",organizationName:"hiukim",projectName:"mind-ar-js-doc",themeConfig:{navbar:{title:"MindAR - Documentation",logo:{alt:"MindAR",src:"img/logo.png"}}},plugins:["docusaurus-plugin-sass"],presets:[["@docusaurus/preset-classic",{docs:{routeBasePath:"/",sidebarPath:6679},blog:{showReadingTime:!0,editUrl:"https://github.com/facebook/docusaurus/edit/master/website/blog/"},theme:{customCss:2295}}]],scripts:["https://cdnjs.cloudflare.com/ajax/libs/dropzone/5.7.2/min/dropzone.min.js","https://cdn.jsdelivr.net/gh/hiukim/mind-ar-js@1.1.4/dist/mindar-image.prod.js"],stylesheets:["https://cdnjs.cloudflare.com/ajax/libs/dropzone/5.7.2/dropzone.min.css"],customFields:{libVersion:"1.1.4"}}},6679:function(e){e.exports={docs:[{type:"doc",id:"home"},{type:"doc",id:"installation"},{type:"category",label:"Image Tracking Quick Start",collapsed:!0,items:["quick-start/overview","quick-start/compile","quick-start/webpage","quick-start/run","quick-start/assets","quick-start/wrapup","quick-start/tracking-config"]},{type:"category",label:"Image Tracking Examples",collapsed:!0,items:["examples/summary","examples/minimal","examples/basic","examples/multi-targets","examples/multi-tracks","examples/custom-ui","examples/events-handling","examples/interative"]},{type:"category",label:"Face Tracking Quick Start",collapsed:!0,items:["face-tracking-quick-start/overview","face-tracking-quick-start/webpage","face-tracking-quick-start/run","face-tracking-quick-start/assets","face-tracking-quick-start/occluder","face-tracking-quick-start/wrapup"]},{type:"category",label:"Face Tracking Examples",collapsed:!0,items:["face-tracking-examples/summary","face-tracking-examples/minimal","face-tracking-examples/tryon","face-tracking-examples/events-handling"]},{type:"category",label:"More Examples",collapsed:!0,items:["more-examples/react","more-examples/threejs-image","more-examples/threejs-face","more-examples/threejs-face-facemesh"]},{type:"category",label:"Tools",collapsed:!0,items:["tools/compile"]}]}},5212:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return o},contentTitle:function(){return d},metadata:function(){return m},toc:function(){return p},default:function(){return g}});var i=n(3117),a=n(102),s=(n(7294),n(3905)),r=n(1410),c=n(4996),l=["components"],o={id:"tryon",title:"Virtual Try-On",sidebar_label:"Virtual Try-On"},d=void 0,m={unversionedId:"face-tracking-examples/tryon",id:"face-tracking-examples/tryon",title:"Virtual Try-On",description:"This is a typical example of face tracking. It allows user to try out different accessories.",source:"@site/docs/face-tracking-examples/try-on.md",sourceDirName:"face-tracking-examples",slug:"/face-tracking-examples/tryon",permalink:"/mind-ar-js-doc/face-tracking-examples/tryon",tags:[],version:"current",frontMatter:{id:"tryon",title:"Virtual Try-On",sidebar_label:"Virtual Try-On"},sidebar:"docs",previous:{title:"Minimal",permalink:"/mind-ar-js-doc/face-tracking-examples/minimal"},next:{title:"Events Handling",permalink:"/mind-ar-js-doc/face-tracking-examples/events-handling"}},p=[{value:"Try it out",id:"try-it-out",children:[],level:2},{value:"Source",id:"source",children:[],level:2}],u={toc:p};function g(e){var t=e.components,o=(0,a.Z)(e,l);return(0,s.kt)("wrapper",(0,i.Z)({},u,o,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("p",null,"This is a typical example of face tracking. It allows user to try out different accessories."),(0,s.kt)("p",null,"We have a step-by-step tutorial in ",(0,s.kt)("inlineCode",{parentName:"p"},"Quick Start"),". If you are new to MindAR, please check that out to understand some basic principles."),(0,s.kt)("p",null,(0,s.kt)("img",{alt:"img",src:n(6773).Z,width:"300",height:"337"})),(0,s.kt)("h2",{id:"try-it-out"},"Try it out"),(0,s.kt)("a",{href:(0,c.Z)("/face-tracking-samples/tryon.html"),target:"_blank"},"Live Demo"),(0,s.kt)("h2",{id:"source"},"Source"),(0,s.kt)("code",null,'\n<html>\n  <head>\n    <meta name="viewport" content="width=device-width, initial-scale=1" />\n    <script src="https://cdn.jsdelivr.net/gh/hiukim/mind-ar-js@'+r.customFields.libVersion+'/dist/mindar-face.prod.js"><\/script>\n    <script src="https://aframe.io/releases/1.2.0/aframe.min.js"><\/script>\n    <script src="https://cdn.jsdelivr.net/gh/hiukim/mind-ar-js@'+r.customFields.libVersion+'/dist/mindar-face-aframe.prod.js"><\/script>\n    <script>\n      document.addEventListener("DOMContentLoaded", function() {\n\tconst list = ["glasses1", "glasses2", "hat1", "hat2", "earring"];\n\tconst visibles = [true, false, false, true, true];\n\tconst setVisible = (button, entities, visible) => {\n\t  if (visible) {\n\t    button.classList.add("selected");\n\t  } else {\n\t    button.classList.remove("selected");\n\t  }\n\t  entities.forEach((entity) => {\n\t    entity.setAttribute("visible", visible);\n\t  });\n\t}\n\tlist.forEach((item, index) => {\n\t  const button = document.querySelector("#" + item);\n\t  const entities = document.querySelectorAll("." + item + "-entity");\n\t  setVisible(button, entities, visibles[index]);\n\t  button.addEventListener(\'click\', () => {\n\t    visibles[index] = !visibles[index];\n\t    setVisible(button, entities, visibles[index]);\n\t  });\n\t});\n      })\n    <\/script>\n    <style>\n      body {\n        margin: 0;\n      }\n      .example-container {\n        overflow: hidden;\n        position: absolute;\n        width: 100%;\n        height: 100%;\n      }\n      .options-panel {\n\tposition: fixed;\n\tleft: 0;\n\ttop: 0;\n\tz-index: 2;\n      }\n      .options-panel img {\n\tborder: solid 2px;\n\twidth: 50px;\n\theight: 50px;\n\tobject-fit: cover;\n\tcursor: pointer;\n      }\n      .options-panel img.selected {\n\tborder-color: green;\n      }\n    </style>\n  </head>\n  <body>\n    <div class="example-container">\n      <div class="options-panel">\n\t<img id="hat1" src="https://cdn.jsdelivr.net/gh/hiukim/mind-ar-js@'+r.customFields.libVersion+'/examples/face-tracking/assets/hat/thumbnail.png"/>\n\t<img id="hat2" src="https://cdn.jsdelivr.net/gh/hiukim/mind-ar-js@'+r.customFields.libVersion+'/examples/face-tracking/assets/hat2/thumbnail.png"/>\n\t<img id="glasses1" src="https://cdn.jsdelivr.net/gh/hiukim/mind-ar-js@'+r.customFields.libVersion+'/examples/face-tracking/assets/glasses/thumbnail.png"/>\n\t<img id="glasses2" src="https://cdn.jsdelivr.net/gh/hiukim/mind-ar-js@'+r.customFields.libVersion+'/examples/face-tracking/assets/glasses2/thumbnail.png"/>\n\t<img id="earring" src="https://cdn.jsdelivr.net/gh/hiukim/mind-ar-js@'+r.customFields.libVersion+'/examples/face-tracking/assets/earring/thumbnail.png"/>\n      </div>\n      <a-scene mindar-face embedded color-space="sRGB" renderer="colorManagement: true, physicallyCorrectLights" vr-mode-ui="enabled: false" device-orientation-permission-ui="enabled: false">\n        <a-assets>\n          <a-asset-item id="headModel" src="https://cdn.jsdelivr.net/gh/hiukim/mind-ar-js@'+r.customFields.libVersion+'/examples/face-tracking/assets/sparkar/headOccluder.glb"></a-asset-item>\n          <a-asset-item id="glassesModel" src="https://cdn.jsdelivr.net/gh/hiukim/mind-ar-js@'+r.customFields.libVersion+'/examples/face-tracking/assets/glasses/scene.gltf"></a-asset-item>\n          <a-asset-item id="glassesModel2" src="https://cdn.jsdelivr.net/gh/hiukim/mind-ar-js@'+r.customFields.libVersion+'/examples/face-tracking/assets/glasses2/scene.gltf"></a-asset-item>\n          <a-asset-item id="hatModel" src="https://cdn.jsdelivr.net/gh/hiukim/mind-ar-js@'+r.customFields.libVersion+'/examples/face-tracking/assets/hat/scene.gltf"></a-asset-item>\n          <a-asset-item id="hatModel2" src="https://cdn.jsdelivr.net/gh/hiukim/mind-ar-js@'+r.customFields.libVersion+'/examples/face-tracking/assets/hat2/scene.gltf"></a-asset-item>\n          <a-asset-item id="earringModel" src="https://cdn.jsdelivr.net/gh/hiukim/mind-ar-js@'+r.customFields.libVersion+'/examples/face-tracking/assets/earring/scene.gltf"></a-asset-item>\n        </a-assets>\n        <a-camera active="false" position="0 0 0"></a-camera>\n\t\x3c!-- head occluder --\x3e\n        <a-entity mindar-face-target="anchorIndex: 168">\n\t  <a-gltf-model mindar-face-occluder position="0 -0.3 0.15"rotation="0 0 0" scale="0.065 0.065 0.065" src="#headModel"></a-gltf-model>\n        </a-entity>\n        <a-entity mindar-face-target="anchorIndex: 10">\n\t  <a-gltf-model rotation="0 -0 0" position="0 1.0 -0.5" scale="0.35 0.35 0.35" src="#hatModel" class="hat1-entity" visible="false"></a-gltf-model>\n        </a-entity>\n        <a-entity mindar-face-target="anchorIndex: 10">\n\t  <a-gltf-model rotation="0 -0 0" position="0 -0.2 -0.5" scale="0.008 0.008 0.008" src="#hatModel2" class="hat2-entity" visible="false"></a-gltf-model>\n        </a-entity>\n        <a-entity mindar-face-target="anchorIndex: 168">\n\t  <a-gltf-model rotation="0 -0 0" position="0 0 0" scale="0.01 0.01 0.01" src="#glassesModel" class="glasses1-entity" visible="false"></a-gltf-model>\n        </a-entity>\n        <a-entity mindar-face-target="anchorIndex: 168">\n\t  <a-gltf-model rotation="0 -90 0" position="0 -0.3 0" scale="0.6 0.6 0.6" src="#glassesModel2" class="glasses2-entity" visible="false"></a-gltf-model>\n        </a-entity>\n        <a-entity mindar-face-target="anchorIndex: 127">\n\t  <a-gltf-model rotation="-0.1 -0 0" position="0 -0.3 -0.3" scale="0.05 0.05 0.05" src="#earringModel" class="earring-entity" visible="false"></a-gltf-model>\n        </a-entity>\n        <a-entity mindar-face-target="anchorIndex: 356">\n\t  <a-gltf-model rotation="0.1 -0 0" position="0 -0.3 -0.3" scale="0.05 0.05 0.05" src="#earringModel" class="earring-entity" visible="false"></a-gltf-model>\n        </a-entity>\n      </a-scene>\n    </div>\n  </body>\n</html>\n'))}g.isMDXComponent=!0},6773:function(e,t,n){"use strict";t.Z=n.p+"assets/images/face-tryon-demo-369c4ba701f1df2099ecf05c27f0c944.gif"}}]);