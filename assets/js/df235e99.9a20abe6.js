(self.webpackChunkdoc=self.webpackChunkdoc||[]).push([[2839],{3905:function(e,t,a){"use strict";a.d(t,{Zo:function(){return m},kt:function(){return u}});var r=a(7294);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function n(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?n(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):n(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function c(e,t){if(null==e)return{};var a,r,i=function(e,t){if(null==e)return{};var a,r,i={},n=Object.keys(e);for(r=0;r<n.length;r++)a=n[r],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(r=0;r<n.length;r++)a=n[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var o=r.createContext({}),l=function(e){var t=r.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},m=function(e){var t=l(e.components);return r.createElement(o.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var a=e.components,i=e.mdxType,n=e.originalType,o=e.parentName,m=c(e,["components","mdxType","originalType","parentName"]),d=l(a),u=i,g=d["".concat(o,".").concat(u)]||d[u]||p[u]||n;return a?r.createElement(g,s(s({ref:t},m),{},{components:a})):r.createElement(g,s({ref:t},m))}));function u(e,t){var a=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var n=a.length,s=new Array(n);s[0]=d;var c={};for(var o in t)hasOwnProperty.call(t,o)&&(c[o]=t[o]);c.originalType=e,c.mdxType="string"==typeof e?e:i,s[1]=c;for(var l=2;l<n;l++)s[l]=a[l];return r.createElement.apply(null,s)}return r.createElement.apply(null,a)}d.displayName="MDXCreateElement"},1410:function(e){e.exports={title:"mind-ar-js",tagline:"web augmented reality - augmented images",url:"https://hiukim.github.io",baseUrl:"/mind-ar-js-doc/",onBrokenLinks:"warn",onBrokenMarkdownLinks:"warn",favicon:"img/favicon.png",organizationName:"hiukim",projectName:"mind-ar-js-doc",themeConfig:{navbar:{title:"MindAR - Documentation",logo:{alt:"MindAR",src:"img/logo.png"}}},plugins:["docusaurus-plugin-sass"],presets:[["@docusaurus/preset-classic",{docs:{routeBasePath:"/",sidebarPath:6679},blog:{showReadingTime:!0,editUrl:"https://github.com/facebook/docusaurus/edit/master/website/blog/"},theme:{customCss:2295}}]],scripts:["https://cdnjs.cloudflare.com/ajax/libs/dropzone/5.7.2/min/dropzone.min.js","https://cdn.jsdelivr.net/gh/hiukim/mind-ar-js@1.1.4/dist/mindar-image.prod.js"],stylesheets:["https://cdnjs.cloudflare.com/ajax/libs/dropzone/5.7.2/dropzone.min.css"],customFields:{libVersion:"1.1.4"}}},6679:function(e){e.exports={docs:[{type:"doc",id:"home"},{type:"doc",id:"installation"},{type:"category",label:"Image Tracking Quick Start",collapsed:!0,items:["quick-start/overview","quick-start/compile","quick-start/webpage","quick-start/run","quick-start/assets","quick-start/wrapup","quick-start/tracking-config"]},{type:"category",label:"Image Tracking Examples",collapsed:!0,items:["examples/summary","examples/minimal","examples/basic","examples/multi-targets","examples/multi-tracks","examples/custom-ui","examples/events-handling","examples/interative"]},{type:"category",label:"Face Tracking Quick Start",collapsed:!0,items:["face-tracking-quick-start/overview","face-tracking-quick-start/webpage","face-tracking-quick-start/run","face-tracking-quick-start/assets","face-tracking-quick-start/occluder","face-tracking-quick-start/wrapup"]},{type:"category",label:"Face Tracking Examples",collapsed:!0,items:["face-tracking-examples/summary","face-tracking-examples/minimal","face-tracking-examples/tryon","face-tracking-examples/events-handling"]},{type:"category",label:"More Examples",collapsed:!0,items:["more-examples/react","more-examples/threejs-image","more-examples/threejs-face"]},{type:"category",label:"Tools",collapsed:!0,items:["tools/compile"]}]}},544:function(e,t,a){"use strict";a.r(t),a.d(t,{frontMatter:function(){return m},contentTitle:function(){return p},metadata:function(){return d},toc:function(){return u},default:function(){return f}});var r=a(3117),i=a(102),n=(a(7294),a(3905)),s=a(1410),c=a(4996),o=a(5941),l=["components"],m={id:"basic",title:"Basic",sidebar_label:"Basic"},p=void 0,d={unversionedId:"examples/basic",id:"examples/basic",title:"Basic",description:"This is a very typical example that detect and track one target image, and display a 3D effects on top.",source:"@site/docs/examples/basic.md",sourceDirName:"examples",slug:"/examples/basic",permalink:"/mind-ar-js-doc/examples/basic",tags:[],version:"current",frontMatter:{id:"basic",title:"Basic",sidebar_label:"Basic"},sidebar:"docs",previous:{title:"Minimal",permalink:"/mind-ar-js-doc/examples/minimal"},next:{title:"Multi-Targets",permalink:"/mind-ar-js-doc/examples/multi-targets"}},u=[{value:"Try it out",id:"try-it-out",children:[],level:2},{value:"Source",id:"source",children:[],level:2}],g={toc:u};function f(e){var t=e.components,m=(0,i.Z)(e,l);return(0,n.kt)("wrapper",(0,r.Z)({},g,m,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"This is a very typical example that detect and track one target image, and display a 3D effects on top."),(0,n.kt)("p",null,"We have a step-by-step tutorial in ",(0,n.kt)("inlineCode",{parentName:"p"},"Quick Start"),". If you are new to MindAR, please check that out to understand some basic principles."),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"img",src:a(4525).Z,width:"400",height:"400"})),(0,n.kt)("h2",{id:"try-it-out"},"Try it out"),(0,n.kt)("a",{href:(0,c.Z)("/samples/basic.html"),target:"_blank"},"Live Demo"),(0,n.kt)("p",null,"You can use the following target image for testing:"),(0,n.kt)("img",{src:o.Z,width:"300"}),(0,n.kt)("h2",{id:"source"},"Source"),(0,n.kt)("code",null,'\n<html>\n  <head>\n    <meta name="viewport" content="width=device-width, initial-scale=1" />\n    <script src="https://cdn.jsdelivr.net/gh/hiukim/mind-ar-js@'+s.customFields.libVersion+'/dist/mindar-image.prod.js"><\/script>\n    <script src="https://aframe.io/releases/1.2.0/aframe.min.js"><\/script>\n    <script src="https://cdn.jsdelivr.net/gh/hiukim/mind-ar-js@'+s.customFields.libVersion+'/dist/mindar-image-aframe.prod.js"><\/script>\n  </head>\n  <body>\n    <a-scene mindar-image="imageTargetSrc: https://cdn.jsdelivr.net/gh/hiukim/mind-ar-js@'+s.customFields.libVersion+'/examples/image-tracking/assets/card-example/card.mind;" color-space="sRGB" renderer="colorManagement: true, physicallyCorrectLights" vr-mode-ui="enabled: false" device-orientation-permission-ui="enabled: false">\n      <a-assets>\n\t<img id="card" src="https://cdn.jsdelivr.net/gh/hiukim/mind-ar-js@'+s.customFields.libVersion+'/examples/image-tracking/assets/card-example/card.png" />\n\t<a-asset-item id="avatarModel" src="https://cdn.jsdelivr.net/gh/hiukim/mind-ar-js@'+s.customFields.libVersion+'/examples/image-tracking/assets/card-example/softmind/scene.gltf"></a-asset-item>\n      </a-assets>\n\n      <a-camera position="0 0 0" look-controls="enabled: false"></a-camera>\n\n      <a-entity mindar-image-target="targetIndex: 0">\n        <a-plane src="#card" position="0 0 0" height="0.552" width="1" rotation="0 0 0"></a-plane>\n        <a-gltf-model rotation="0 0 0 " position="0 0 0.1" scale="0.005 0.005 0.005" src="#avatarModel"\n          animation="property: position; to: 0 0.1 0.1; dur: 1000; easing: easeInOutQuad; loop: true; dir: alternate"\n        >\n      </a-entity>\n    </a-scene>\n  </body>\n</html>\n'))}f.isMDXComponent=!0},5941:function(e,t,a){"use strict";t.Z=a.p+"assets/images/card-06cb9111a8e32627db6bfafc7aa22a4d.png"},4525:function(e,t,a){"use strict";t.Z=a.p+"assets/images/basic-demo-fde07aa7567bf213e61b37dbaa192fec.gif"}}]);