(window.webpackJsonp=window.webpackJsonp||[]).push([[26],{136:function(e,t,n){"use strict";n.d(t,"a",(function(){return m}));var a=n(0),r=n.n(a);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=r.a.createContext({}),d=function(e){var t=r.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},p=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),p=d(n),m=a,b=p["".concat(i,".").concat(m)]||p[m]||u[m]||o;return n?r.a.createElement(b,c(c({ref:t},s),{},{components:n})):r.a.createElement(b,c({ref:t},s))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=p;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:a,i[1]=c;for(var s=2;s<o;s++)i[s]=n[s];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},137:function(e,t,n){"use strict";n.d(t,"b",(function(){return o})),n.d(t,"a",(function(){return i}));var a=n(16),r=n(140);function o(){const{siteConfig:{baseUrl:e="/",url:t}={}}=Object(a.default)();return{withBaseUrl:(n,a)=>function(e,t,n,{forcePrependBaseUrl:a=!1,absolute:o=!1}={}){if(!n)return n;if(n.startsWith("#"))return n;if(Object(r.b)(n))return n;if(a)return t+n;const i=n.startsWith(t)?n:t+n.replace(/^\//,"");return o?e+i:i}(t,e,n,a)}}function i(e,t={}){const{withBaseUrl:n}=o();return n(e,t)}},140:function(e,t,n){"use strict";function a(e){return!0===/^(\w*:|\/\/)/.test(e)}function r(e){return void 0!==e&&!a(e)}n.d(t,"b",(function(){return a})),n.d(t,"a",(function(){return r}))},96:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return l})),n.d(t,"toc",(function(){return s})),n.d(t,"default",(function(){return u}));var a=n(3),r=n(7),o=(n(0),n(136)),i=n(137),c={id:"events-handling",title:"Events Handling",sidebar_label:"Events Handling"},l={unversionedId:"examples/events-handling",id:"examples/events-handling",isDocsHomePage:!1,title:"Events Handling",description:"This section requires basic knowledge of web development",source:"@site/docs/examples/event-handling.md",slug:"/examples/events-handling",permalink:"/mind-ar-js-doc/examples/events-handling",version:"current",sidebar_label:"Events Handling",sidebar:"docs",previous:{title:"Custom UI",permalink:"/mind-ar-js-doc/examples/custom-ui"},next:{title:"Intereactive",permalink:"/mind-ar-js-doc/examples/interative"}},s=[{value:"Try it out",id:"try-it-out",children:[{value:"Complete Source",id:"complete-source",children:[]}]},{value:"arSystem",id:"arsystem",children:[]},{value:"Events",id:"events",children:[{value:"<code>arReady</code>",id:"arready",children:[]},{value:"<code>arError</code>",id:"arerror",children:[]},{value:"<code>targetFound</code> and <code>targetLost</code>",id:"targetfound-and-targetlost",children:[]},{value:"<code>click</code>",id:"click",children:[]}]},{value:"Wrapping up",id:"wrapping-up",children:[]}],d={toc:s};function u(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(o.a)("wrapper",Object(a.a)({},d,n,{components:t,mdxType:"MDXLayout"}),Object(o.a)("div",{className:"admonition admonition-note alert alert--secondary"},Object(o.a)("div",{parentName:"div",className:"admonition-heading"},Object(o.a)("h5",{parentName:"div"},Object(o.a)("span",{parentName:"h5",className:"admonition-icon"},Object(o.a)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},Object(o.a)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),Object(o.a)("div",{parentName:"div",className:"admonition-content"},Object(o.a)("p",{parentName:"div"},"This section requires basic knowledge of web development"))),Object(o.a)("h2",{id:"try-it-out"},"Try it out"),Object(o.a)("p",null,"To try this example, you need to run on desktop browser and open the development console to see the logs. ",Object(o.a)("a",{href:Object(i.a)("/samples/events.html"),target:"_blank"},"Live Demo")),Object(o.a)("p",null,"We will go through the available events one by one in the following sub-sections. "),Object(o.a)("h3",{id:"complete-source"},"Complete Source"),Object(o.a)("pre",null,Object(o.a)("code",{parentName:"pre"},'<html>\n  <head>\n    <meta name="viewport" content="width=device-width, initial-scale=1" />\n    <script src="https://cdn.jsdelivr.net/gh/hiukim/mind-ar-js@1.0.0/dist/mindar-image.prod.js"><\/script>\n    <script src="https://aframe.io/releases/1.2.0/aframe.min.js"><\/script>\n    <script src="https://cdn.jsdelivr.net/gh/hiukim/mind-ar-js@1.0.0/dist/mindar-image-aframe.prod.js"><\/script>\n    <script>\n      document.addEventListener("DOMContentLoaded", function() {\n    const sceneEl = document.querySelector(\'a-scene\');\n    const arSystem = sceneEl.systems["mindar-image-system"];\n    const exampleTarget = document.querySelector(\'#example-target\');\n    const examplePlane = document.querySelector(\'#example-plane\');\n\n    const startButton = document.querySelector("#example-start-button");\n    const stopButton = document.querySelector("#example-stop-button");\n    const pauseButton = document.querySelector("#example-pause-button");\n    const pauseKeepVideoButton = document.querySelector("#example-pause-keep-video-button");\n    const unpauseButton = document.querySelector("#example-unpause-button");\n\n    startButton.addEventListener(\'click\', () => {\n      console.log("start");\n      arSystem.start(); // start AR \n    });\n    stopButton.addEventListener(\'click\', () => {\n      arSystem.stop(); // stop AR \n    });\n    pauseButton.addEventListener(\'click\', () => {\n      arSystem.pause(); // pause AR, keep video feed\n    });\n    pauseKeepVideoButton.addEventListener(\'click\', () => {\n      arSystem.pause(true); // pause AR and video\n    });\n    unpauseButton.addEventListener(\'click\', () => {\n      arSystem.unpause(); // unpause AR and video\n    });\n\n    // arReady event triggered when ready\n    sceneEl.addEventListener("arReady", (event) => {\n      // console.log("MindAR is ready")\n    });\n\n    // arError event triggered when something went wrong. Mostly browser compatbility issue\n    sceneEl.addEventListener("arError", (event) => {\n      // console.log("MindAR failed to start")\n    });\n\n    // detect target found\n    exampleTarget.addEventListener("targetFound", event => {\n      console.log("target found");\n    });\n\n    // detect target lost\n    exampleTarget.addEventListener("targetLost", event => {\n      console.log("target lost");\n    });\n\n    // detect click event\n    examplePlane.addEventListener("click", event => {\n      console.log("plane click");\n    });\n      });\n    <\/script>\n  </head>\n  <body>\n    <div style="position: absolute; z-index: 1000">\n      <button id="example-start-button">Start</button>\n      <button id="example-pause-button">Pause</button>\n      <button id="example-pause-keep-video-button">Pause (keep video)</button>\n      <button id="example-unpause-button">UnPause</button>\n      <button id="example-stop-button">Stop</button>\n    </div>\n    <a-scene mindar-image="imageTargetSrc: https://cdn.jsdelivr.net/gh/hiukim/mind-ar-js@1.0.0/examples/image-tracking/assets/card-example/card.mind; autoStart: false;" embedded color-space="sRGB" renderer="colorManagement: true, physicallyCorrectLights" vr-mode-ui="enabled: false" device-orientation-permission-ui="enabled: false">\n      <a-camera position="0 0 0" look-controls="enabled: false" cursor="fuse: false; rayOrigin: mouse;" raycaster="far: 10000; objects: .clickable"></a-camera>\n\n      <a-entity id="example-target" mindar-image-target="targetIndex: 0">\n    <a-plane id="example-plane" class="clickable" color="blue" opaciy="0.5" position="0 0 0" height="0.552" width="1" rotation="0 0 0"></a-plane>\n      </a-entity>\n    </a-scene>\n  </body>\n</html>\n')),Object(o.a)("h2",{id:"arsystem"},"arSystem"),Object(o.a)("p",null,"The first thing to introduce is the ",Object(o.a)("inlineCode",{parentName:"p"},"arSystem")," component. It's embedded inside ",Object(o.a)("inlineCode",{parentName:"p"},"a-scene")," and you can get the object by the following:"),Object(o.a)("pre",null,Object(o.a)("code",{parentName:"pre"},"const sceneEl = document.querySelector('a-scene');\nconst arSystem = sceneEl.systems[\"mindar-image-system\"];\n")),Object(o.a)("p",null,Object(o.a)("inlineCode",{parentName:"p"},"arSystem")," provides a few api call to control the engine lifecycle "),Object(o.a)("pre",null,Object(o.a)("code",{parentName:"pre"},"arSystem.start(); // start the engine \narSystem.stop(); // stop the engine\narSystem.pause(keepVideo=false); // pause the engine. It has an optional parameter. if true, then ar will stop, but camera feed will keep\narSystem.unpause(); // unpause\n")),Object(o.a)("p",null,"By default, AR engine will start immediately, but you can disable the auto start by giving a param ",Object(o.a)("inlineCode",{parentName:"p"},"autoStart: false")," inside ",Object(o.a)("inlineCode",{parentName:"p"},"<a-scene>")),Object(o.a)("h2",{id:"events"},"Events"),Object(o.a)("p",null,"MindAR will fire the events when happen:"),Object(o.a)("h3",{id:"arready"},Object(o.a)("inlineCode",{parentName:"h3"},"arReady")),Object(o.a)("p",null,"After ",Object(o.a)("inlineCode",{parentName:"p"},"arSystem.start()"),", or autostart, AR engine needs to boot up, when it's ready, this event will be fired up. You can listen to this event throught the scene element"),Object(o.a)("pre",null,Object(o.a)("code",{parentName:"pre"},'const sceneEl = document.querySelector(\'a-scene\');\nsceneEl.addEventListener("arReady", (event) => {\n  // console.log("MindAR is ready")\n});\n')),Object(o.a)("h3",{id:"arerror"},Object(o.a)("inlineCode",{parentName:"h3"},"arError")),Object(o.a)("p",null,"Sometimes, AR engine might be failed to start. There could be many reasons, but one most likely reason is camera failed to start. When this happens, this event will be fired up."),Object(o.a)("pre",null,Object(o.a)("code",{parentName:"pre"},'const sceneEl = document.querySelector(\'a-scene\');\nsceneEl.addEventListener("arError", (event) => {\n  // console.log("MindAR failed to start")\n});\n')),Object(o.a)("h3",{id:"targetfound-and-targetlost"},Object(o.a)("inlineCode",{parentName:"h3"},"targetFound")," and ",Object(o.a)("inlineCode",{parentName:"h3"},"targetLost")),Object(o.a)("p",null,"This events are fired up when the image target is detected/lost. You can listen to these events through the ",Object(o.a)("inlineCode",{parentName:"p"},"<a-entity>")),Object(o.a)("pre",null,Object(o.a)("code",{parentName:"pre"},'// detect target found\nconst exampleTarget = document.querySelector(\'#example-target\');\nexampleTarget.addEventListener("targetFound", event => {\n  console.log("target found");\n});\n\n// detect target lost\nexampleTarget.addEventListener("targetLost", event => {\n  console.log("target lost");\n});\n\n<a-entity id="example-target" mindar-image-target="targetIndex: 0">\n</a-entity>\n\n')),Object(o.a)("h3",{id:"click"},Object(o.a)("inlineCode",{parentName:"h3"},"click")),Object(o.a)("p",null,"When you want to do inteaction with the content, one thing you likely want to detect is when the user click/touch a certain elements. Actually, this is ",Object(o.a)("inlineCode",{parentName:"p"},"AFRAME")," stuff, but we'll also included here for reference."),Object(o.a)("p",null,"First, you need to include the following ",Object(o.a)("inlineCode",{parentName:"p"},"cursor")," and ",Object(o.a)("inlineCode",{parentName:"p"},"raycaster")," in the ",Object(o.a)("inlineCode",{parentName:"p"},"<a-camera>")," element like this:"),Object(o.a)("pre",null,Object(o.a)("code",{parentName:"pre"},'<a-camera position="0 0 0" look-controls="enabled: false" cursor="fuse: false; rayOrigin: mouse;" raycaster="far: 10000; objects: .clickable"></a-camera>\n\n')),Object(o.a)("p",null,"and then in the object that you want to detect, add a class ",Object(o.a)("inlineCode",{parentName:"p"},"clickable"),". Actually, it doesn't mean to be ",Object(o.a)("inlineCode",{parentName:"p"},"clickable"),", but the same as what you specified in the ",Object(o.a)("inlineCode",{parentName:"p"},"raycaster")," above."),Object(o.a)("pre",null,Object(o.a)("code",{parentName:"pre"},'<a-plane id="example-plane" class="clickable" color="blue" opaciy="0.5" position="0 0 0" height="0.552" width="1" rotation="0 0 0"></a-plane>\n\n')),Object(o.a)("p",null,"Then, it's ready. You can listen to the click event like this:"),Object(o.a)("pre",null,Object(o.a)("code",{parentName:"pre"},'// detect click event\nconst examplePlane = document.querySelector(\'#example-plane\');\nexamplePlane.addEventListener("click", event => {\n  console.log("plane click");\n});\n')),Object(o.a)("h2",{id:"wrapping-up"},"Wrapping up"),Object(o.a)("p",null,"Cool, you have now basically learnt everything about MindAR image tracking. It should gives you enough tool to do some very cool applications! "))}u.isMDXComponent=!0}}]);