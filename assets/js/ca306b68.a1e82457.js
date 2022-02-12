(self.webpackChunkdoc=self.webpackChunkdoc||[]).push([[1855],{3905:function(e,t,a){"use strict";a.d(t,{Zo:function(){return d},kt:function(){return p}});var r=a(7294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function c(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},i=Object.keys(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var o=r.createContext({}),l=function(e){var t=r.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},d=function(e){var t=l(e.components);return r.createElement(o.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,i=e.originalType,o=e.parentName,d=c(e,["components","mdxType","originalType","parentName"]),m=l(a),p=n,g=m["".concat(o,".").concat(p)]||m[p]||u[p]||i;return a?r.createElement(g,s(s({ref:t},d),{},{components:a})):r.createElement(g,s({ref:t},d))}));function p(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=a.length,s=new Array(i);s[0]=m;var c={};for(var o in t)hasOwnProperty.call(t,o)&&(c[o]=t[o]);c.originalType=e,c.mdxType="string"==typeof e?e:n,s[1]=c;for(var l=2;l<i;l++)s[l]=a[l];return r.createElement.apply(null,s)}return r.createElement.apply(null,a)}m.displayName="MDXCreateElement"},1410:function(e){e.exports={title:"mind-ar-js",tagline:"web augmented reality - augmented images",url:"https://hiukim.github.io",baseUrl:"/mind-ar-js-doc/",onBrokenLinks:"warn",onBrokenMarkdownLinks:"warn",favicon:"img/favicon.png",organizationName:"hiukim",projectName:"mind-ar-js-doc",themeConfig:{navbar:{title:"MindAR - Documentation",logo:{alt:"MindAR",src:"img/logo.png"}}},plugins:["docusaurus-plugin-sass"],presets:[["@docusaurus/preset-classic",{docs:{routeBasePath:"/",sidebarPath:6679},blog:{showReadingTime:!0,editUrl:"https://github.com/facebook/docusaurus/edit/master/website/blog/"},theme:{customCss:2295}}]],scripts:["https://cdnjs.cloudflare.com/ajax/libs/dropzone/5.7.2/min/dropzone.min.js","https://cdn.jsdelivr.net/gh/hiukim/mind-ar-js@1.1.3/dist/mindar-image.prod.js"],stylesheets:["https://cdnjs.cloudflare.com/ajax/libs/dropzone/5.7.2/dropzone.min.css"],customFields:{libVersion:"1.1.3"}}},6679:function(e){e.exports={docs:[{type:"doc",id:"home"},{type:"doc",id:"installation"},{type:"category",label:"Image Tracking Quick Start",collapsed:!0,items:["quick-start/overview","quick-start/compile","quick-start/webpage","quick-start/run","quick-start/assets","quick-start/wrapup"]},{type:"category",label:"Image Tracking Examples",collapsed:!0,items:["examples/summary","examples/minimal","examples/basic","examples/multi-targets","examples/multi-tracks","examples/custom-ui","examples/events-handling","examples/interative"]},{type:"category",label:"Face Tracking Quick Start",collapsed:!0,items:["face-tracking-quick-start/overview","face-tracking-quick-start/webpage","face-tracking-quick-start/run","face-tracking-quick-start/assets","face-tracking-quick-start/occluder","face-tracking-quick-start/wrapup"]},{type:"category",label:"Face Tracking Examples",collapsed:!0,items:["face-tracking-examples/summary","face-tracking-examples/minimal","face-tracking-examples/tryon","face-tracking-examples/events-handling"]},{type:"category",label:"More Examples",collapsed:!0,items:["more-examples/react","more-examples/threejs-image","more-examples/threejs-face"]},{type:"category",label:"Tools",collapsed:!0,items:["tools/compile"]}]}},1471:function(e,t,a){"use strict";a.r(t),a.d(t,{contentTitle:function(){return u},default:function(){return h},frontMatter:function(){return d},metadata:function(){return m},toc:function(){return p}});var r=a(3117),n=a(102),i=(a(7294),a(3905)),s=a(1410),c=a.p+"assets/images/face-occluder1-demo-ca9c502986928627d033f3590be264ae.png",o=a.p+"assets/images/face-occluder2-demo-f1f6e36d028b9d3cdcd4eff46895a805.png",l=["components"],d={id:"occluder",title:"Occluder",sidebar_label:"Occluder"},u=void 0,m={unversionedId:"face-tracking-quick-start/occluder",id:"face-tracking-quick-start/occluder",title:"Occluder",description:"Depth Problem",source:"@site/docs/face-tracking-quick-start/occluder.md",sourceDirName:"face-tracking-quick-start",slug:"/face-tracking-quick-start/occluder",permalink:"/mind-ar-js-doc/face-tracking-quick-start/occluder",tags:[],version:"current",frontMatter:{id:"occluder",title:"Occluder",sidebar_label:"Occluder"},sidebar:"docs",previous:{title:"3D Assets",permalink:"/mind-ar-js-doc/face-tracking-quick-start/assets"},next:{title:"Wrapping Up",permalink:"/mind-ar-js-doc/face-tracking-quick-start/wrapup"}},p=[{value:"Depth Problem",id:"depth-problem",children:[],level:2},{value:"Occluder",id:"occluder",children:[],level:2},{value:"Putting it together",id:"putting-it-together",children:[],level:2},{value:"Limitations",id:"limitations",children:[],level:2}],g={toc:p};function h(e){var t=e.components,a=(0,n.Z)(e,l);return(0,i.kt)("wrapper",(0,r.Z)({},g,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"depth-problem"},"Depth Problem"),(0,i.kt)("p",null,"If you turn your head a bit, you will probably notice a problem (the arm of the glass should be invisible since it's behind the head):"),(0,i.kt)("img",{src:c,width:"300"}),(0,i.kt)("p",null,"It's a common problem in augmented reality application. AR application does not alter the video. Instead it is jsut merely drawing another layer on top. Therefore, none of the video content can obscure our drawing layer (i.e. augmented realty objects). "),(0,i.kt)("h2",{id:"occluder"},"Occluder"),(0,i.kt)("p",null,"To solve this issue, we will need to add an aribitrary 3D head-like object in the scene. But unlike a regular 3D object, this arbitrary head has two special properties. First, obviously it needs to be transparent. Second, despite being transparent, it still need to cover every behind. Normally, we call this kind of special 3D objects as occluders."),(0,i.kt)("p",null,"Adding a occluder object is very similar to adding a regular object. In MindAR, you just need to add a property ",(0,i.kt)("inlineCode",{parentName:"p"},"mindar-face-occluder")," to the entity."),(0,i.kt)("code",null,'\n<a-assets>\n  <a-asset-item id="headModel" src="https://cdn.jsdelivr.net/gh/hiukim/mind-ar-js@'+s.customFields.libVersion+'/examples/face-tracking/assets/sparkar/headOccluder.glb"></a-asset-item>\n</a-assets>\n...\n<a-entity mindar-face-target="anchorIndex: 168">\n  <a-gltf-model mindar-face-occluder position="0 -0.3 0.15"rotation="0 0 0" scale="0.065 0.065 0.065" src="#headModel"></a-gltf-model>\n</a-entity>\n'),(0,i.kt)("h2",{id:"putting-it-together"},"Putting it together"),(0,i.kt)("p",null,"Putting it together, your new html page should be like this:"),(0,i.kt)("code",null,'\n<html>\n  <head>\n    <meta name="viewport" content="width=device-width, initial-scale=1" />\n    <script src="https://cdn.jsdelivr.net/gh/hiukim/mind-ar-js@'+s.customFields.libVersion+'/dist/mindar-face.prod.js"><\/script>\n    <script src="https://aframe.io/releases/1.2.0/aframe.min.js"><\/script>\n    <script src="https://cdn.jsdelivr.net/gh/hiukim/mind-ar-js@'+s.customFields.libVersion+'/dist/mindar-face-aframe.prod.js"><\/script>\n  </head>\n  <body>\n    <a-scene mindar-face embedded color-space="sRGB" renderer="colorManagement: true, physicallyCorrectLights" vr-mode-ui="enabled: false" device-orientation-permission-ui="enabled: false">\n      <a-assets>\n\t<a-asset-item id="glassesModel" src="https://cdn.jsdelivr.net/gh/hiukim/mind-ar-js@'+s.customFields.libVersion+'/examples/image-tracking/assets/glasses/scene.gltf"></a-asset-item>\n\t<a-asset-item id="headModel" src="https://cdn.jsdelivr.net/gh/hiukim/mind-ar-js@'+s.customFields.libVersion+'/examples/face-tracking/assets/sparkar/headOccluder.glb"></a-asset-item>\n      </a-assets>\n\n      <a-camera active="false" position="0 0 0"></a-camera>\n      <a-entity mindar-face-target="anchorIndex: 168">\n        <a-gltf-model mindar-face-occluder position="0 -0.3 0.15"rotation="0 0 0" scale="0.065 0.065 0.065" src="#headModel"></a-gltf-model>\n      </a-entity>\n      <a-entity mindar-face-target="anchorIndex: 168">\n        <a-gltf-model rotation="0 0 0" position="0 0 0" scale="0.01 0.01 0.01" src="#glassesModel"></a-gltf-model>\n      </a-entity>\n    </a-scene>\n  </body>\n</html>\n'),(0,i.kt)("p",null,"and when you run the app again, the arm of the glasses will be somehow hidden. "),(0,i.kt)("img",{src:o,width:"300"}),(0,i.kt)("h2",{id:"limitations"},"Limitations"),(0,i.kt)("p",null,"One major limitation of occluder is that the arbitrary head is a predefined 3D model, and the shape won't fit perfectly with the persons' head in the video."))}h.isMDXComponent=!0}}]);