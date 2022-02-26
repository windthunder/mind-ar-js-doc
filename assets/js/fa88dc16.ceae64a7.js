"use strict";(self.webpackChunkdoc=self.webpackChunkdoc||[]).push([[3345],{3905:function(e,t,r){r.d(t,{Zo:function(){return l},kt:function(){return h}});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function u(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=n.createContext({}),s=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},l=function(e){var t=s(e.components);return n.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,l=u(e,["components","mdxType","originalType","parentName"]),f=s(r),h=o,d=f["".concat(c,".").concat(h)]||f[h]||p[h]||a;return r?n.createElement(d,i(i({ref:t},l),{},{components:r})):n.createElement(d,i({ref:t},l))}));function h(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=f;var u={};for(var c in t)hasOwnProperty.call(t,c)&&(u[c]=t[c]);u.originalType=e,u.mdxType="string"==typeof e?e:o,i[1]=u;for(var s=2;s<a;s++)i[s]=r[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},2925:function(e,t,r){r.r(t),r.d(t,{contentTitle:function(){return l},default:function(){return d},frontMatter:function(){return s},metadata:function(){return p},toc:function(){return f}});var n=r(3117),o=r(102),a=(r(7294),r(3905)),i=r.p+"assets/images/minimal-demo-0ede0234bdb0425d23f869a8693758a7.jpeg",u=r(5941),c=["components"],s={id:"run",title:"Run It",sidebar_label:"Run It"},l=void 0,p={unversionedId:"quick-start/run",id:"quick-start/run",title:"Run It",description:"Web server",source:"@site/docs/quick-start/run.md",sourceDirName:"quick-start",slug:"/quick-start/run",permalink:"/mind-ar-js-doc/quick-start/run",tags:[],version:"current",frontMatter:{id:"run",title:"Run It",sidebar_label:"Run It"},sidebar:"docs",previous:{title:"Build the page",permalink:"/mind-ar-js-doc/quick-start/webpage"},next:{title:"3D Assets",permalink:"/mind-ar-js-doc/quick-start/assets"}},f=[{value:"Web server",id:"web-server",children:[],level:2},{value:"Effect",id:"effect",children:[],level:2},{value:"How to Test",id:"how-to-test",children:[],level:2}],h={toc:f};function d(e){var t=e.components,r=(0,o.Z)(e,c);return(0,a.kt)("wrapper",(0,n.Z)({},h,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"web-server"},"Web server"),(0,a.kt)("p",null,"Although, it's a simple html page, you probably cannot run it simply by opening the file in browser. The reason is that the page requires camera access."),(0,a.kt)("p",null,"I believe there are many possible workarounds to that problems, like setting the browser policy or something. One way to this problem is to setup a localhost server that can server webpage."),(0,a.kt)("p",null,"If you are web developer, I'm sure you probably have some sort of localhost already in your machine. If not, you can try this chrome extension: ",(0,a.kt)("a",{href:"https://chrome.google.com/webstore/detail/web-server-for-chrome/ofhbbkphhbklhfoeikjpcbhemlocgigb",target:"_blank"},"Web Server for Chrome"),". It will launch a simple web server, and you can use it to open the ",(0,a.kt)("inlineCode",{parentName:"p"},"index.html")," built in the last section."),(0,a.kt)("h2",{id:"effect"},"Effect"),(0,a.kt)("p",null,"If you can successfully launch the page, the camera will start. After you point it to the image target, you will see a blue rectangle sticked on top."),(0,a.kt)("img",{src:i,width:"300"}),(0,a.kt)("h2",{id:"how-to-test"},"How to Test"),(0,a.kt)("p",null,"It's likely that you now are using your desktop computer to go through this tutorial. In that case, you can start run the webpage with your computer, which hopefully has equiped with a webcam."),(0,a.kt)("p",null,"Then, you can use your mobile phone to open this target image, and put your phone screen in front of your desktop webcam to see the effect."),(0,a.kt)("img",{src:u.Z,width:"300"}),(0,a.kt)("p",null,"If you don't have two devices, you can also choose to print this image out and test it in paper."),(0,a.kt)("p",null,"Make sure you get it working before going to the next section, in which we will start doing interesting stuff!"))}d.isMDXComponent=!0},5941:function(e,t,r){t.Z=r.p+"assets/images/card-06cb9111a8e32627db6bfafc7aa22a4d.png"}}]);