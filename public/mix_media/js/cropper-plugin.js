/*!
 * Cropper.js v1.5.6
 * https://fengyuanchen.github.io/cropperjs
 *
 * Copyright 2015-present Chen Fengyuan
 * Released under the MIT license
 *
 * Date: 2019-10-04T04:33:48.372Z
 */
!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?module.exports=e():"function"==typeof define&&define.amd?define(e):(t=t||self).Cropper=e()}(this,function(){"use strict";function e(t){return(e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function a(t,e){for(var i=0;i<e.length;i++){var a=e[i];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(t,a.key,a)}}function i(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),i.push.apply(i,a)}return i}function C(n){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?i(o,!0).forEach(function(t){var e,i,a;e=n,a=o[i=t],i in e?Object.defineProperty(e,i,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[i]=a}):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(o)):i(o).forEach(function(t){Object.defineProperty(n,t,Object.getOwnPropertyDescriptor(o,t))})}return n}function P(t){return function(t){if(Array.isArray(t)){for(var e=0,i=new Array(t.length);e<t.length;e++)i[e]=t[e];return i}}(t)||function(t){if(Symbol.iterator in Object(t)||"[object Arguments]"===Object.prototype.toString.call(t))return Array.from(t)}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}var n="undefined"!=typeof window&&void 0!==window.document,r=n?window:{},t=n&&"ontouchstart"in r.document.documentElement,o=n&&"PointerEvent"in r,l="cropper",D="all",B="crop",k="move",O="zoom",T="e",E="w",W="s",N="n",H="ne",L="nw",z="se",Y="sw",h="".concat(l,"-crop"),s="".concat(l,"-disabled"),X="".concat(l,"-hidden"),d="".concat(l,"-hide"),p="".concat(l,"-invisible"),c="".concat(l,"-modal"),u="".concat(l,"-move"),m="".concat(l,"Action"),g="".concat(l,"Preview"),f="crop",v="move",w="none",b="crop",x="cropend",y="cropmove",M="cropstart",R="dblclick",S=o?"pointerdown":t?"touchstart":"mousedown",A=o?"pointermove":t?"touchmove":"mousemove",j=o?"pointerup pointercancel":t?"touchend touchcancel":"mouseup",I="ready",U="zoom",q="image/jpeg",$=/^e|w|s|n|se|sw|ne|nw|all|crop|move|zoom$/,Q=/^data:/,K=/^data:image\/jpeg;base64,/,Z=/^img|canvas$/i,G={viewMode:0,dragMode:f,initialAspectRatio:NaN,aspectRatio:NaN,data:null,preview:"",responsive:!0,restore:!0,checkCrossOrigin:!0,checkOrientation:!0,modal:!0,guides:!0,center:!0,highlight:!0,background:!0,autoCrop:!0,autoCropArea:.8,movable:!0,rotatable:!0,scalable:!0,zoomable:!0,zoomOnTouch:!0,zoomOnWheel:!0,wheelZoomRatio:.1,cropBoxMovable:!0,cropBoxResizable:!0,toggleDragModeOnDblclick:!0,minCanvasWidth:0,minCanvasHeight:0,minCropBoxWidth:0,minCropBoxHeight:0,minContainerWidth:200,minContainerHeight:100,ready:null,cropstart:null,cropmove:null,cropend:null,crop:null,zoom:null},V=Number.isNaN||r.isNaN;function F(t){return"number"==typeof t&&!V(t)}var J=function(t){return 0<t&&t<1/0};function _(t){return void 0===t}function tt(t){return"object"===e(t)&&null!==t}var et=Object.prototype.hasOwnProperty;function it(t){if(!tt(t))return!1;try{var e=t.constructor,i=e.prototype;return e&&i&&et.call(i,"isPrototypeOf")}catch(t){return!1}}function at(t){return"function"==typeof t}var nt=Array.prototype.slice;function ot(t){return Array.from?Array.from(t):nt.call(t)}function rt(i,a){return i&&at(a)&&(Array.isArray(i)||F(i.length)?ot(i).forEach(function(t,e){a.call(i,t,e,i)}):tt(i)&&Object.keys(i).forEach(function(t){a.call(i,i[t],t,i)})),i}var ht=Object.assign||function(i){for(var t=arguments.length,e=new Array(1<t?t-1:0),a=1;a<t;a++)e[a-1]=arguments[a];return tt(i)&&0<e.length&&e.forEach(function(e){tt(e)&&Object.keys(e).forEach(function(t){i[t]=e[t]})}),i},st=/\.\d*(?:0|9){12}\d*$/;function ct(t,e){var i=1<arguments.length&&void 0!==e?e:1e11;return st.test(t)?Math.round(t*i)/i:t}var lt=/^width|height|left|top|marginLeft|marginTop$/;function dt(t,e){var i=t.style;rt(e,function(t,e){lt.test(e)&&F(t)&&(t="".concat(t,"px")),i[e]=t})}function pt(t,e){if(e)if(F(t.length))rt(t,function(t){pt(t,e)});else if(t.classList)t.classList.add(e);else{var i=t.className.trim();i?i.indexOf(e)<0&&(t.className="".concat(i," ").concat(e)):t.className=e}}function ut(t,e){e&&(F(t.length)?rt(t,function(t){ut(t,e)}):t.classList?t.classList.remove(e):0<=t.className.indexOf(e)&&(t.className=t.className.replace(e,"")))}function mt(t,e,i){e&&(F(t.length)?rt(t,function(t){mt(t,e,i)}):i?pt(t,e):ut(t,e))}var gt=/([a-z\d])([A-Z])/g;function ft(t){return t.replace(gt,"$1-$2").toLowerCase()}function vt(t,e){return tt(t[e])?t[e]:t.dataset?t.dataset[e]:t.getAttribute("data-".concat(ft(e)))}function wt(t,e,i){tt(i)?t[e]=i:t.dataset?t.dataset[e]=i:t.setAttribute("data-".concat(ft(e)),i)}var bt=/\s\s*/,xt=function(){var t=!1;if(n){var e=!1,i=function(){},a=Object.defineProperty({},"once",{get:function(){return t=!0,e},set:function(t){e=t}});r.addEventListener("test",i,a),r.removeEventListener("test",i,a)}return t}();function yt(i,t,a,e){var n=3<arguments.length&&void 0!==e?e:{},o=a;t.trim().split(bt).forEach(function(t){if(!xt){var e=i.listeners;e&&e[t]&&e[t][a]&&(o=e[t][a],delete e[t][a],0===Object.keys(e[t]).length&&delete e[t],0===Object.keys(e).length&&delete i.listeners)}i.removeEventListener(t,o,n)})}function Mt(o,t,r,e){var h=3<arguments.length&&void 0!==e?e:{},s=r;t.trim().split(bt).forEach(function(a){if(h.once&&!xt){var t=o.listeners,n=void 0===t?{}:t;s=function(){delete n[a][r],o.removeEventListener(a,s,h);for(var t=arguments.length,e=new Array(t),i=0;i<t;i++)e[i]=arguments[i];r.apply(o,e)},n[a]||(n[a]={}),n[a][r]&&o.removeEventListener(a,n[a][r],h),n[a][r]=s,o.listeners=n}o.addEventListener(a,s,h)})}function Ct(t,e,i){var a;return at(Event)&&at(CustomEvent)?a=new CustomEvent(e,{detail:i,bubbles:!0,cancelable:!0}):(a=document.createEvent("CustomEvent")).initCustomEvent(e,!0,!0,i),t.dispatchEvent(a)}function Dt(t){var e=t.getBoundingClientRect();return{left:e.left+(window.pageXOffset-document.documentElement.clientLeft),top:e.top+(window.pageYOffset-document.documentElement.clientTop)}}var Bt=r.location,kt=/^(\w+:)\/\/([^:/?#]*):?(\d*)/i;function Ot(t){var e=t.match(kt);return null!==e&&(e[1]!==Bt.protocol||e[2]!==Bt.hostname||e[3]!==Bt.port)}function Tt(t){var e="timestamp=".concat((new Date).getTime());return t+(-1===t.indexOf("?")?"?":"&")+e}function Et(t){var e=t.rotate,i=t.scaleX,a=t.scaleY,n=t.translateX,o=t.translateY,r=[];F(n)&&0!==n&&r.push("translateX(".concat(n,"px)")),F(o)&&0!==o&&r.push("translateY(".concat(o,"px)")),F(e)&&0!==e&&r.push("rotate(".concat(e,"deg)")),F(i)&&1!==i&&r.push("scaleX(".concat(i,")")),F(a)&&1!==a&&r.push("scaleY(".concat(a,")"));var h=r.length?r.join(" "):"none";return{WebkitTransform:h,msTransform:h,transform:h}}function Wt(t,e){var i=t.pageX,a=t.pageY,n={endX:i,endY:a};return e?n:C({startX:i,startY:a},n)}function Nt(t,e){var i=t.aspectRatio,a=t.height,n=t.width,o=1<arguments.length&&void 0!==e?e:"contain",r=J(n),h=J(a);if(r&&h){var s=a*i;"contain"===o&&n<s||"cover"===o&&s<n?a=n/i:n=a*i}else r?a=n/i:h&&(n=a*i);return{width:n,height:a}}var Ht=String.fromCharCode;var Lt=/^data:.*,/;function zt(t){var e,i=new DataView(t);try{var a,n,o;if(255===i.getUint8(0)&&216===i.getUint8(1))for(var r=i.byteLength,h=2;h+1<r;){if(255===i.getUint8(h)&&225===i.getUint8(h+1)){n=h;break}h+=1}if(n){var s=n+10;if("Exif"===function(t,e,i){var a="";i+=e;for(var n=e;n<i;n+=1)a+=Ht(t.getUint8(n));return a}(i,n+4,4)){var c=i.getUint16(s);if(((a=18761===c)||19789===c)&&42===i.getUint16(s+2,a)){var l=i.getUint32(s+4,a);8<=l&&(o=s+l)}}}if(o){var d,p,u=i.getUint16(o,a);for(p=0;p<u;p+=1)if(d=o+12*p+2,274===i.getUint16(d,a)){d+=8,e=i.getUint16(d,a),i.setUint16(d,1,a);break}}}catch(t){e=1}return e}var Yt={render:function(){this.initContainer(),this.initCanvas(),this.initCropBox(),this.renderCanvas(),this.cropped&&this.renderCropBox()},initContainer:function(){var t=this.element,e=this.options,i=this.container,a=this.cropper;pt(a,X),ut(t,X);var n={width:Math.max(i.offsetWidth,Number(e.minContainerWidth)||200),height:Math.max(i.offsetHeight,Number(e.minContainerHeight)||100)};dt(a,{width:(this.containerData=n).width,height:n.height}),pt(t,X),ut(a,X)},initCanvas:function(){var t=this.containerData,e=this.imageData,i=this.options.viewMode,a=Math.abs(e.rotate)%180==90,n=a?e.naturalHeight:e.naturalWidth,o=a?e.naturalWidth:e.naturalHeight,r=n/o,h=t.width,s=t.height;t.height*r>t.width?3===i?h=t.height*r:s=t.width/r:3===i?s=t.width/r:h=t.height*r;var c={aspectRatio:r,naturalWidth:n,naturalHeight:o,width:h,height:s};c.left=(t.width-h)/2,c.top=(t.height-s)/2,c.oldLeft=c.left,c.oldTop=c.top,this.canvasData=c,this.limited=1===i||2===i,this.limitCanvas(!0,!0),this.initialImageData=ht({},e),this.initialCanvasData=ht({},c)},limitCanvas:function(t,e){var i=this.options,a=this.containerData,n=this.canvasData,o=this.cropBoxData,r=i.viewMode,h=n.aspectRatio,s=this.cropped&&o;if(t){var c=Number(i.minCanvasWidth)||0,l=Number(i.minCanvasHeight)||0;1<r?(c=Math.max(c,a.width),l=Math.max(l,a.height),3===r&&(c<l*h?c=l*h:l=c/h)):0<r&&(c?c=Math.max(c,s?o.width:0):l?l=Math.max(l,s?o.height:0):s&&((c=o.width)<(l=o.height)*h?c=l*h:l=c/h));var d=Nt({aspectRatio:h,width:c,height:l});c=d.width,l=d.height,n.minWidth=c,n.minHeight=l,n.maxWidth=1/0,n.maxHeight=1/0}if(e)if((s?0:1)<r){var p=a.width-n.width,u=a.height-n.height;n.minLeft=Math.min(0,p),n.minTop=Math.min(0,u),n.maxLeft=Math.max(0,p),n.maxTop=Math.max(0,u),s&&this.limited&&(n.minLeft=Math.min(o.left,o.left+(o.width-n.width)),n.minTop=Math.min(o.top,o.top+(o.height-n.height)),n.maxLeft=o.left,n.maxTop=o.top,2===r&&(n.width>=a.width&&(n.minLeft=Math.min(0,p),n.maxLeft=Math.max(0,p)),n.height>=a.height&&(n.minTop=Math.min(0,u),n.maxTop=Math.max(0,u))))}else n.minLeft=-n.width,n.minTop=-n.height,n.maxLeft=a.width,n.maxTop=a.height},renderCanvas:function(t,e){var i=this.canvasData,a=this.imageData;if(e){var n=function(t){var e=t.width,i=t.height,a=t.degree;if(90===(a=Math.abs(a)%180))return{width:i,height:e};var n=a%90*Math.PI/180,o=Math.sin(n),r=Math.cos(n),h=e*r+i*o,s=e*o+i*r;return 90<a?{width:s,height:h}:{width:h,height:s}}({width:a.naturalWidth*Math.abs(a.scaleX||1),height:a.naturalHeight*Math.abs(a.scaleY||1),degree:a.rotate||0}),o=n.width,r=n.height,h=i.width*(o/i.naturalWidth),s=i.height*(r/i.naturalHeight);i.left-=(h-i.width)/2,i.top-=(s-i.height)/2,i.width=h,i.height=s,i.aspectRatio=o/r,i.naturalWidth=o,i.naturalHeight=r,this.limitCanvas(!0,!1)}(i.width>i.maxWidth||i.width<i.minWidth)&&(i.left=i.oldLeft),(i.height>i.maxHeight||i.height<i.minHeight)&&(i.top=i.oldTop),i.width=Math.min(Math.max(i.width,i.minWidth),i.maxWidth),i.height=Math.min(Math.max(i.height,i.minHeight),i.maxHeight),this.limitCanvas(!1,!0),i.left=Math.min(Math.max(i.left,i.minLeft),i.maxLeft),i.top=Math.min(Math.max(i.top,i.minTop),i.maxTop),i.oldLeft=i.left,i.oldTop=i.top,dt(this.canvas,ht({width:i.width,height:i.height},Et({translateX:i.left,translateY:i.top}))),this.renderImage(t),this.cropped&&this.limited&&this.limitCropBox(!0,!0)},renderImage:function(t){var e=this.canvasData,i=this.imageData,a=i.naturalWidth*(e.width/e.naturalWidth),n=i.naturalHeight*(e.height/e.naturalHeight);ht(i,{width:a,height:n,left:(e.width-a)/2,top:(e.height-n)/2}),dt(this.image,ht({width:i.width,height:i.height},Et(ht({translateX:i.left,translateY:i.top},i)))),t&&this.output()},initCropBox:function(){var t=this.options,e=this.canvasData,i=t.aspectRatio||t.initialAspectRatio,a=Number(t.autoCropArea)||.8,n={width:e.width,height:e.height};i&&(e.height*i>e.width?n.height=n.width/i:n.width=n.height*i),this.cropBoxData=n,this.limitCropBox(!0,!0),n.width=Math.min(Math.max(n.width,n.minWidth),n.maxWidth),n.height=Math.min(Math.max(n.height,n.minHeight),n.maxHeight),n.width=Math.max(n.minWidth,n.width*a),n.height=Math.max(n.minHeight,n.height*a),n.left=e.left+(e.width-n.width)/2,n.top=e.top+(e.height-n.height)/2,n.oldLeft=n.left,n.oldTop=n.top,this.initialCropBoxData=ht({},n)},limitCropBox:function(t,e){var i=this.options,a=this.containerData,n=this.canvasData,o=this.cropBoxData,r=this.limited,h=i.aspectRatio;if(t){var s=Number(i.minCropBoxWidth)||0,c=Number(i.minCropBoxHeight)||0,l=r?Math.min(a.width,n.width,n.width+n.left,a.width-n.left):a.width,d=r?Math.min(a.height,n.height,n.height+n.top,a.height-n.top):a.height;s=Math.min(s,a.width),c=Math.min(c,a.height),h&&(s&&c?s<c*h?c=s/h:s=c*h:s?c=s/h:c&&(s=c*h),l<d*h?d=l/h:l=d*h),o.minWidth=Math.min(s,l),o.minHeight=Math.min(c,d),o.maxWidth=l,o.maxHeight=d}e&&(r?(o.minLeft=Math.max(0,n.left),o.minTop=Math.max(0,n.top),o.maxLeft=Math.min(a.width,n.left+n.width)-o.width,o.maxTop=Math.min(a.height,n.top+n.height)-o.height):(o.minLeft=0,o.minTop=0,o.maxLeft=a.width-o.width,o.maxTop=a.height-o.height))},renderCropBox:function(){var t=this.options,e=this.containerData,i=this.cropBoxData;(i.width>i.maxWidth||i.width<i.minWidth)&&(i.left=i.oldLeft),(i.height>i.maxHeight||i.height<i.minHeight)&&(i.top=i.oldTop),i.width=Math.min(Math.max(i.width,i.minWidth),i.maxWidth),i.height=Math.min(Math.max(i.height,i.minHeight),i.maxHeight),this.limitCropBox(!1,!0),i.left=Math.min(Math.max(i.left,i.minLeft),i.maxLeft),i.top=Math.min(Math.max(i.top,i.minTop),i.maxTop),i.oldLeft=i.left,i.oldTop=i.top,t.movable&&t.cropBoxMovable&&wt(this.face,m,i.width>=e.width&&i.height>=e.height?k:D),dt(this.cropBox,ht({width:i.width,height:i.height},Et({translateX:i.left,translateY:i.top}))),this.cropped&&this.limited&&this.limitCanvas(!0,!0),this.disabled||this.output()},output:function(){this.preview(),Ct(this.element,b,this.getData())}},Xt={initPreview:function(){var t=this.element,i=this.crossOrigin,e=this.options.preview,a=i?this.crossOriginUrl:this.url,n=t.alt||"The image to preview",o=document.createElement("img");if(i&&(o.crossOrigin=i),o.src=a,o.alt=n,this.viewBox.appendChild(o),this.viewBoxImage=o,e){var r=e;"string"==typeof e?r=t.ownerDocument.querySelectorAll(e):e.querySelector&&(r=[e]),rt(this.previews=r,function(t){var e=document.createElement("img");wt(t,g,{width:t.offsetWidth,height:t.offsetHeight,html:t.innerHTML}),i&&(e.crossOrigin=i),e.src=a,e.alt=n,e.style.cssText='display:block;width:100%;height:auto;min-width:0!important;min-height:0!important;max-width:none!important;max-height:none!important;image-orientation:0deg!important;"',t.innerHTML="",t.appendChild(e)})}},resetPreview:function(){rt(this.previews,function(t){var e=vt(t,g);dt(t,{width:e.width,height:e.height}),t.innerHTML=e.html,function(e,i){if(tt(e[i]))try{delete e[i]}catch(t){e[i]=void 0}else if(e.dataset)try{delete e.dataset[i]}catch(t){e.dataset[i]=void 0}else e.removeAttribute("data-".concat(ft(i)))}(t,g)})},preview:function(){var h=this.imageData,t=this.canvasData,e=this.cropBoxData,s=e.width,c=e.height,l=h.width,d=h.height,p=e.left-t.left-h.left,u=e.top-t.top-h.top;this.cropped&&!this.disabled&&(dt(this.viewBoxImage,ht({width:l,height:d},Et(ht({translateX:-p,translateY:-u},h)))),rt(this.previews,function(t){var e=vt(t,g),i=e.width,a=e.height,n=i,o=a,r=1;s&&(o=c*(r=i/s)),c&&a<o&&(n=s*(r=a/c),o=a),dt(t,{width:n,height:o}),dt(t.getElementsByTagName("img")[0],ht({width:l*r,height:d*r},Et(ht({translateX:-p*r,translateY:-u*r},h))))}))}},Rt={bind:function(){var t=this.element,e=this.options,i=this.cropper;at(e.cropstart)&&Mt(t,M,e.cropstart),at(e.cropmove)&&Mt(t,y,e.cropmove),at(e.cropend)&&Mt(t,x,e.cropend),at(e.crop)&&Mt(t,b,e.crop),at(e.zoom)&&Mt(t,U,e.zoom),Mt(i,S,this.onCropStart=this.cropStart.bind(this)),e.zoomable&&e.zoomOnWheel&&Mt(i,"wheel",this.onWheel=this.wheel.bind(this),{passive:!1,capture:!0}),e.toggleDragModeOnDblclick&&Mt(i,R,this.onDblclick=this.dblclick.bind(this)),Mt(t.ownerDocument,A,this.onCropMove=this.cropMove.bind(this)),Mt(t.ownerDocument,j,this.onCropEnd=this.cropEnd.bind(this)),e.responsive&&Mt(window,"resize",this.onResize=this.resize.bind(this))},unbind:function(){var t=this.element,e=this.options,i=this.cropper;at(e.cropstart)&&yt(t,M,e.cropstart),at(e.cropmove)&&yt(t,y,e.cropmove),at(e.cropend)&&yt(t,x,e.cropend),at(e.crop)&&yt(t,b,e.crop),at(e.zoom)&&yt(t,U,e.zoom),yt(i,S,this.onCropStart),e.zoomable&&e.zoomOnWheel&&yt(i,"wheel",this.onWheel,{passive:!1,capture:!0}),e.toggleDragModeOnDblclick&&yt(i,R,this.onDblclick),yt(t.ownerDocument,A,this.onCropMove),yt(t.ownerDocument,j,this.onCropEnd),e.responsive&&yt(window,"resize",this.onResize)}},St={resize:function(){var t=this.options,e=this.container,i=this.containerData,a=Number(t.minContainerWidth)||200,n=Number(t.minContainerHeight)||100;if(!(this.disabled||i.width<=a||i.height<=n)){var o,r,h=e.offsetWidth/i.width;if(1!=h||e.offsetHeight!==i.height)t.restore&&(o=this.getCanvasData(),r=this.getCropBoxData()),this.render(),t.restore&&(this.setCanvasData(rt(o,function(t,e){o[e]=t*h})),this.setCropBoxData(rt(r,function(t,e){r[e]=t*h})))}},dblclick:function(){this.disabled||this.options.dragMode===w||this.setDragMode(function(t,e){return t.classList?t.classList.contains(e):-1<t.className.indexOf(e)}(this.dragBox,h)?v:f)},wheel:function(t){var e=this,i=Number(this.options.wheelZoomRatio)||.1,a=1;this.disabled||(t.preventDefault(),this.wheeling||(this.wheeling=!0,setTimeout(function(){e.wheeling=!1},50),t.deltaY?a=0<t.deltaY?1:-1:t.wheelDelta?a=-t.wheelDelta/120:t.detail&&(a=0<t.detail?1:-1),this.zoom(-a*i,t)))},cropStart:function(t){var e=t.buttons,i=t.button;if(!(this.disabled||("mousedown"===t.type||"pointerdown"===t.type&&"mouse"===t.pointerType)&&(F(e)&&1!==e||F(i)&&0!==i||t.ctrlKey))){var a,n=this.options,o=this.pointers;t.changedTouches?rt(t.changedTouches,function(t){o[t.identifier]=Wt(t)}):o[t.pointerId||0]=Wt(t),a=1<Object.keys(o).length&&n.zoomable&&n.zoomOnTouch?O:vt(t.target,m),$.test(a)&&!1!==Ct(this.element,M,{originalEvent:t,action:a})&&(t.preventDefault(),this.action=a,this.cropping=!1,a===B&&(this.cropping=!0,pt(this.dragBox,c)))}},cropMove:function(t){var e=this.action;if(!this.disabled&&e){var i=this.pointers;t.preventDefault(),!1!==Ct(this.element,y,{originalEvent:t,action:e})&&(t.changedTouches?rt(t.changedTouches,function(t){ht(i[t.identifier]||{},Wt(t,!0))}):ht(i[t.pointerId||0]||{},Wt(t,!0)),this.change(t))}},cropEnd:function(t){if(!this.disabled){var e=this.action,i=this.pointers;t.changedTouches?rt(t.changedTouches,function(t){delete i[t.identifier]}):delete i[t.pointerId||0],e&&(t.preventDefault(),Object.keys(i).length||(this.action=""),this.cropping&&(this.cropping=!1,mt(this.dragBox,c,this.cropped&&this.options.modal)),Ct(this.element,x,{originalEvent:t,action:e}))}}},At={change:function(t){var e,i=this.options,a=this.canvasData,n=this.containerData,o=this.cropBoxData,r=this.pointers,h=this.action,s=i.aspectRatio,c=o.left,l=o.top,d=o.width,p=o.height,u=c+d,m=l+p,g=0,f=0,v=n.width,w=n.height,b=!0;!s&&t.shiftKey&&(s=d&&p?d/p:1),this.limited&&(g=o.minLeft,f=o.minTop,v=g+Math.min(n.width,a.width,a.left+a.width),w=f+Math.min(n.height,a.height,a.top+a.height));function x(t){switch(t){case T:u+M.x>v&&(M.x=v-u);break;case E:c+M.x<g&&(M.x=g-c);break;case N:l+M.y<f&&(M.y=f-l);break;case W:m+M.y>w&&(M.y=w-m)}}var y=r[Object.keys(r)[0]],M={x:y.endX-y.startX,y:y.endY-y.startY};switch(h){case D:c+=M.x,l+=M.y;break;case T:if(0<=M.x&&(v<=u||s&&(l<=f||w<=m))){b=!1;break}x(T),(d+=M.x)<0&&(h=E,c-=d=-d),s&&(p=d/s,l+=(o.height-p)/2);break;case N:if(M.y<=0&&(l<=f||s&&(c<=g||v<=u))){b=!1;break}x(N),p-=M.y,l+=M.y,p<0&&(h=W,l-=p=-p),s&&(d=p*s,c+=(o.width-d)/2);break;case E:if(M.x<=0&&(c<=g||s&&(l<=f||w<=m))){b=!1;break}x(E),d-=M.x,c+=M.x,d<0&&(h=T,c-=d=-d),s&&(p=d/s,l+=(o.height-p)/2);break;case W:if(0<=M.y&&(w<=m||s&&(c<=g||v<=u))){b=!1;break}x(W),(p+=M.y)<0&&(h=N,l-=p=-p),s&&(d=p*s,c+=(o.width-d)/2);break;case H:if(s){if(M.y<=0&&(l<=f||v<=u)){b=!1;break}x(N),p-=M.y,l+=M.y,d=p*s}else x(N),x(T),0<=M.x?u<v?d+=M.x:M.y<=0&&l<=f&&(b=!1):d+=M.x,M.y<=0?f<l&&(p-=M.y,l+=M.y):(p-=M.y,l+=M.y);d<0&&p<0?(h=Y,l-=p=-p,c-=d=-d):d<0?(h=L,c-=d=-d):p<0&&(h=z,l-=p=-p);break;case L:if(s){if(M.y<=0&&(l<=f||c<=g)){b=!1;break}x(N),p-=M.y,l+=M.y,d=p*s,c+=o.width-d}else x(N),x(E),M.x<=0?g<c?(d-=M.x,c+=M.x):M.y<=0&&l<=f&&(b=!1):(d-=M.x,c+=M.x),M.y<=0?f<l&&(p-=M.y,l+=M.y):(p-=M.y,l+=M.y);d<0&&p<0?(h=z,l-=p=-p,c-=d=-d):d<0?(h=H,c-=d=-d):p<0&&(h=Y,l-=p=-p);break;case Y:if(s){if(M.x<=0&&(c<=g||w<=m)){b=!1;break}x(E),d-=M.x,c+=M.x,p=d/s}else x(W),x(E),M.x<=0?g<c?(d-=M.x,c+=M.x):0<=M.y&&w<=m&&(b=!1):(d-=M.x,c+=M.x),0<=M.y?m<w&&(p+=M.y):p+=M.y;d<0&&p<0?(h=H,l-=p=-p,c-=d=-d):d<0?(h=z,c-=d=-d):p<0&&(h=L,l-=p=-p);break;case z:if(s){if(0<=M.x&&(v<=u||w<=m)){b=!1;break}x(T),p=(d+=M.x)/s}else x(W),x(T),0<=M.x?u<v?d+=M.x:0<=M.y&&w<=m&&(b=!1):d+=M.x,0<=M.y?m<w&&(p+=M.y):p+=M.y;d<0&&p<0?(h=L,l-=p=-p,c-=d=-d):d<0?(h=Y,c-=d=-d):p<0&&(h=H,l-=p=-p);break;case k:this.move(M.x,M.y),b=!1;break;case O:this.zoom(function(t){var e=C({},t),s=[];return rt(t,function(h,t){delete e[t],rt(e,function(t){var e=Math.abs(h.startX-t.startX),i=Math.abs(h.startY-t.startY),a=Math.abs(h.endX-t.endX),n=Math.abs(h.endY-t.endY),o=Math.sqrt(e*e+i*i),r=(Math.sqrt(a*a+n*n)-o)/o;s.push(r)})}),s.sort(function(t,e){return Math.abs(t)<Math.abs(e)}),s[0]}(r),t),b=!1;break;case B:if(!M.x||!M.y){b=!1;break}e=Dt(this.cropper),c=y.startX-e.left,l=y.startY-e.top,d=o.minWidth,p=o.minHeight,0<M.x?h=0<M.y?z:H:M.x<0&&(c-=d,h=0<M.y?Y:L),M.y<0&&(l-=p),this.cropped||(ut(this.cropBox,X),this.cropped=!0,this.limited&&this.limitCropBox(!0,!0))}b&&(o.width=d,o.height=p,o.left=c,o.top=l,this.action=h,this.renderCropBox()),rt(r,function(t){t.startX=t.endX,t.startY=t.endY})}},jt={crop:function(){return!this.ready||this.cropped||this.disabled||(this.cropped=!0,this.limitCropBox(!0,!0),this.options.modal&&pt(this.dragBox,c),ut(this.cropBox,X),this.setCropBoxData(this.initialCropBoxData)),this},reset:function(){return this.ready&&!this.disabled&&(this.imageData=ht({},this.initialImageData),this.canvasData=ht({},this.initialCanvasData),this.cropBoxData=ht({},this.initialCropBoxData),this.renderCanvas(),this.cropped&&this.renderCropBox()),this},clear:function(){return this.cropped&&!this.disabled&&(ht(this.cropBoxData,{left:0,top:0,width:0,height:0}),this.cropped=!1,this.renderCropBox(),this.limitCanvas(!0,!0),this.renderCanvas(),ut(this.dragBox,c),pt(this.cropBox,X)),this},replace:function(e,t){var i=1<arguments.length&&void 0!==t&&t;return!this.disabled&&e&&(this.isImg&&(this.element.src=e),i?(this.url=e,this.image.src=e,this.ready&&(this.viewBoxImage.src=e,rt(this.previews,function(t){t.getElementsByTagName("img")[0].src=e}))):(this.isImg&&(this.replaced=!0),this.options.data=null,this.uncreate(),this.load(e))),this},enable:function(){return this.ready&&this.disabled&&(this.disabled=!1,ut(this.cropper,s)),this},disable:function(){return this.ready&&!this.disabled&&(this.disabled=!0,pt(this.cropper,s)),this},destroy:function(){var t=this.element;return t[l]&&(t[l]=void 0,this.isImg&&this.replaced&&(t.src=this.originalUrl),this.uncreate()),this},move:function(t,e){var i=1<arguments.length&&void 0!==e?e:t,a=this.canvasData,n=a.left,o=a.top;return this.moveTo(_(t)?t:n+Number(t),_(i)?i:o+Number(i))},moveTo:function(t,e){var i=1<arguments.length&&void 0!==e?e:t,a=this.canvasData,n=!1;return t=Number(t),i=Number(i),this.ready&&!this.disabled&&this.options.movable&&(F(t)&&(a.left=t,n=!0),F(i)&&(a.top=i,n=!0),n&&this.renderCanvas(!0)),this},zoom:function(t,e){var i=this.canvasData;return t=(t=Number(t))<0?1/(1-t):1+t,this.zoomTo(i.width*t/i.naturalWidth,null,e)},zoomTo:function(t,e,i){var a=this.options,n=this.canvasData,o=n.width,r=n.height,h=n.naturalWidth,s=n.naturalHeight;if(0<=(t=Number(t))&&this.ready&&!this.disabled&&a.zoomable){var c=h*t,l=s*t;if(!1===Ct(this.element,U,{ratio:t,oldRatio:o/h,originalEvent:i}))return this;if(i){var d=this.pointers,p=Dt(this.cropper),u=d&&Object.keys(d).length?function(t){var a=0,n=0,o=0;return rt(t,function(t){var e=t.startX,i=t.startY;a+=e,n+=i,o+=1}),{pageX:a/=o,pageY:n/=o}}(d):{pageX:i.pageX,pageY:i.pageY};n.left-=(c-o)*((u.pageX-p.left-n.left)/o),n.top-=(l-r)*((u.pageY-p.top-n.top)/r)}else it(e)&&F(e.x)&&F(e.y)?(n.left-=(c-o)*((e.x-n.left)/o),n.top-=(l-r)*((e.y-n.top)/r)):(n.left-=(c-o)/2,n.top-=(l-r)/2);n.width=c,n.height=l,this.renderCanvas(!0)}return this},rotate:function(t){return this.rotateTo((this.imageData.rotate||0)+Number(t))},rotateTo:function(t){return F(t=Number(t))&&this.ready&&!this.disabled&&this.options.rotatable&&(this.imageData.rotate=t%360,this.renderCanvas(!0,!0)),this},scaleX:function(t){var e=this.imageData.scaleY;return this.scale(t,F(e)?e:1)},scaleY:function(t){var e=this.imageData.scaleX;return this.scale(F(e)?e:1,t)},scale:function(t,e){var i=1<arguments.length&&void 0!==e?e:t,a=this.imageData,n=!1;return t=Number(t),i=Number(i),this.ready&&!this.disabled&&this.options.scalable&&(F(t)&&(a.scaleX=t,n=!0),F(i)&&(a.scaleY=i,n=!0),n&&this.renderCanvas(!0,!0)),this},getData:function(t){var i,e=0<arguments.length&&void 0!==t&&t,a=this.options,n=this.imageData,o=this.canvasData,r=this.cropBoxData;if(this.ready&&this.cropped){i={x:r.left-o.left,y:r.top-o.top,width:r.width,height:r.height};var h=n.width/n.naturalWidth;if(rt(i,function(t,e){i[e]=t/h}),e){var s=Math.round(i.y+i.height),c=Math.round(i.x+i.width);i.x=Math.round(i.x),i.y=Math.round(i.y),i.width=c-i.x,i.height=s-i.y}}else i={x:0,y:0,width:0,height:0};return a.rotatable&&(i.rotate=n.rotate||0),a.scalable&&(i.scaleX=n.scaleX||1,i.scaleY=n.scaleY||1),i},setData:function(t){var e=this.options,i=this.imageData,a=this.canvasData,n={};if(this.ready&&!this.disabled&&it(t)){var o=!1;e.rotatable&&F(t.rotate)&&t.rotate!==i.rotate&&(i.rotate=t.rotate,o=!0),e.scalable&&(F(t.scaleX)&&t.scaleX!==i.scaleX&&(i.scaleX=t.scaleX,o=!0),F(t.scaleY)&&t.scaleY!==i.scaleY&&(i.scaleY=t.scaleY,o=!0)),o&&this.renderCanvas(!0,!0);var r=i.width/i.naturalWidth;F(t.x)&&(n.left=t.x*r+a.left),F(t.y)&&(n.top=t.y*r+a.top),F(t.width)&&(n.width=t.width*r),F(t.height)&&(n.height=t.height*r),this.setCropBoxData(n)}return this},getContainerData:function(){return this.ready?ht({},this.containerData):{}},getImageData:function(){return this.sized?ht({},this.imageData):{}},getCanvasData:function(){var e=this.canvasData,i={};return this.ready&&rt(["left","top","width","height","naturalWidth","naturalHeight"],function(t){i[t]=e[t]}),i},setCanvasData:function(t){var e=this.canvasData,i=e.aspectRatio;return this.ready&&!this.disabled&&it(t)&&(F(t.left)&&(e.left=t.left),F(t.top)&&(e.top=t.top),F(t.width)?(e.width=t.width,e.height=t.width/i):F(t.height)&&(e.height=t.height,e.width=t.height*i),this.renderCanvas(!0)),this},getCropBoxData:function(){var t,e=this.cropBoxData;return this.ready&&this.cropped&&(t={left:e.left,top:e.top,width:e.width,height:e.height}),t||{}},setCropBoxData:function(t){var e,i,a=this.cropBoxData,n=this.options.aspectRatio;return this.ready&&this.cropped&&!this.disabled&&it(t)&&(F(t.left)&&(a.left=t.left),F(t.top)&&(a.top=t.top),F(t.width)&&t.width!==a.width&&(e=!0,a.width=t.width),F(t.height)&&t.height!==a.height&&(i=!0,a.height=t.height),n&&(e?a.height=a.width/n:i&&(a.width=a.height*n)),this.renderCropBox()),this},getCroppedCanvas:function(t){var e=0<arguments.length&&void 0!==t?t:{};if(!this.ready||!window.HTMLCanvasElement)return null;var i=this.canvasData,a=function(t,e,i,a){var n=e.aspectRatio,o=e.naturalWidth,r=e.naturalHeight,h=e.rotate,s=void 0===h?0:h,c=e.scaleX,l=void 0===c?1:c,d=e.scaleY,p=void 0===d?1:d,u=i.aspectRatio,m=i.naturalWidth,g=i.naturalHeight,f=a.fillColor,v=void 0===f?"transparent":f,w=a.imageSmoothingEnabled,b=void 0===w||w,x=a.imageSmoothingQuality,y=void 0===x?"low":x,M=a.maxWidth,C=void 0===M?1/0:M,D=a.maxHeight,B=void 0===D?1/0:D,k=a.minWidth,O=void 0===k?0:k,T=a.minHeight,E=void 0===T?0:T,W=document.createElement("canvas"),N=W.getContext("2d"),H=Nt({aspectRatio:u,width:C,height:B}),L=Nt({aspectRatio:u,width:O,height:E},"cover"),z=Math.min(H.width,Math.max(L.width,m)),Y=Math.min(H.height,Math.max(L.height,g)),X=Nt({aspectRatio:n,width:C,height:B}),R=Nt({aspectRatio:n,width:O,height:E},"cover"),S=Math.min(X.width,Math.max(R.width,o)),A=Math.min(X.height,Math.max(R.height,r)),j=[-S/2,-A/2,S,A];return W.width=ct(z),W.height=ct(Y),N.fillStyle=v,N.fillRect(0,0,z,Y),N.save(),N.translate(z/2,Y/2),N.rotate(s*Math.PI/180),N.scale(l,p),N.imageSmoothingEnabled=b,N.imageSmoothingQuality=y,N.drawImage.apply(N,[t].concat(P(j.map(function(t){return Math.floor(ct(t))})))),N.restore(),W}(this.image,this.imageData,i,e);if(!this.cropped)return a;var n=this.getData(),o=n.x,r=n.y,h=n.width,s=n.height,c=a.width/Math.floor(i.naturalWidth);1!=c&&(o*=c,r*=c,h*=c,s*=c);var l=h/s,d=Nt({aspectRatio:l,width:e.maxWidth||1/0,height:e.maxHeight||1/0}),p=Nt({aspectRatio:l,width:e.minWidth||0,height:e.minHeight||0},"cover"),u=Nt({aspectRatio:l,width:e.width||(1!=c?a.width:h),height:e.height||(1!=c?a.height:s)}),m=u.width,g=u.height;m=Math.min(d.width,Math.max(p.width,m)),g=Math.min(d.height,Math.max(p.height,g));var f=document.createElement("canvas"),v=f.getContext("2d");f.width=ct(m),f.height=ct(g),v.fillStyle=e.fillColor||"transparent",v.fillRect(0,0,m,g);var w=e.imageSmoothingEnabled,b=void 0===w||w,x=e.imageSmoothingQuality;v.imageSmoothingEnabled=b,x&&(v.imageSmoothingQuality=x);var y,M,C,D,B,k,O=a.width,T=a.height,E=o,W=r;E<=-h||O<E?B=C=y=E=0:E<=0?(C=-E,E=0,B=y=Math.min(O,h+E)):E<=O&&(C=0,B=y=Math.min(h,O-E)),y<=0||W<=-s||T<W?k=D=M=W=0:W<=0?(D=-W,W=0,k=M=Math.min(T,s+W)):W<=T&&(D=0,k=M=Math.min(s,T-W));var N=[E,W,y,M];if(0<B&&0<k){var H=m/h;N.push(C*H,D*H,B*H,k*H)}return v.drawImage.apply(v,[a].concat(P(N.map(function(t){return Math.floor(ct(t))})))),f},setAspectRatio:function(t){var e=this.options;return this.disabled||_(t)||(e.aspectRatio=Math.max(0,t)||NaN,this.ready&&(this.initCropBox(),this.cropped&&this.renderCropBox())),this},setDragMode:function(t){var e=this.options,i=this.dragBox,a=this.face;if(this.ready&&!this.disabled){var n=t===f,o=e.movable&&t===v;t=n||o?t:w,e.dragMode=t,wt(i,m,t),mt(i,h,n),mt(i,u,o),e.cropBoxMovable||(wt(a,m,t),mt(a,h,n),mt(a,u,o))}return this}},Pt=r.Cropper,It=function(){function i(t){var e=1<arguments.length&&void 0!==arguments[1]?arguments[1]:{};if(function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,i),!t||!Z.test(t.tagName))throw new Error("The first argument is required and must be an <img> or <canvas> element.");this.element=t,this.options=ht({},G,it(e)&&e),this.cropped=!1,this.disabled=!1,this.pointers={},this.ready=!1,this.reloading=!1,this.replaced=!1,this.sized=!1,this.sizing=!1,this.init()}return function(t,e,i){e&&a(t.prototype,e),i&&a(t,i)}(i,[{key:"init",value:function(){var t,e=this.element,i=e.tagName.toLowerCase();if(!e[l]){if(e[l]=this,"img"===i){if(this.isImg=!0,t=e.getAttribute("src")||"",!(this.originalUrl=t))return;t=e.src}else"canvas"===i&&window.HTMLCanvasElement&&(t=e.toDataURL());this.load(t)}}},{key:"load",value:function(t){var e=this;if(t){this.url=t,this.imageData={};var i=this.element,a=this.options;if(a.rotatable||a.scalable||(a.checkOrientation=!1),a.checkOrientation&&window.ArrayBuffer)if(Q.test(t))K.test(t)?this.read(function(t){var e=t.replace(Lt,""),i=atob(e),a=new ArrayBuffer(i.length),n=new Uint8Array(a);return rt(n,function(t,e){n[e]=i.charCodeAt(e)}),a}(t)):this.clone();else{var n=new XMLHttpRequest,o=this.clone.bind(this);this.reloading=!0,(this.xhr=n).onabort=o,n.onerror=o,n.ontimeout=o,n.onprogress=function(){n.getResponseHeader("content-type")!==q&&n.abort()},n.onload=function(){e.read(n.response)},n.onloadend=function(){e.reloading=!1,e.xhr=null},a.checkCrossOrigin&&Ot(t)&&i.crossOrigin&&(t=Tt(t)),n.open("GET",t),n.responseType="arraybuffer",n.withCredentials="use-credentials"===i.crossOrigin,n.send()}else this.clone()}}},{key:"read",value:function(t){var e=this.options,i=this.imageData,a=zt(t),n=0,o=1,r=1;if(1<a){this.url=function(t,e){for(var i=[],a=new Uint8Array(t);0<a.length;)i.push(Ht.apply(null,ot(a.subarray(0,8192)))),a=a.subarray(8192);return"data:".concat(e,";base64,").concat(btoa(i.join("")))}(t,q);var h=function(t){var e=0,i=1,a=1;switch(t){case 2:i=-1;break;case 3:e=-180;break;case 4:a=-1;break;case 5:e=90,a=-1;break;case 6:e=90;break;case 7:e=90,i=-1;break;case 8:e=-90}return{rotate:e,scaleX:i,scaleY:a}}(a);n=h.rotate,o=h.scaleX,r=h.scaleY}e.rotatable&&(i.rotate=n),e.scalable&&(i.scaleX=o,i.scaleY=r),this.clone()}},{key:"clone",value:function(){var t=this.element,e=this.url,i=t.crossOrigin,a=e;this.options.checkCrossOrigin&&Ot(e)&&(i=i||"anonymous",a=Tt(e)),this.crossOrigin=i,this.crossOriginUrl=a;var n=document.createElement("img");i&&(n.crossOrigin=i),n.src=a||e,n.alt=t.alt||"The image to crop",(this.image=n).onload=this.start.bind(this),n.onerror=this.stop.bind(this),pt(n,d),t.parentNode.insertBefore(n,t.nextSibling)}},{key:"start",value:function(){var i=this,t=this.image;t.onload=null,t.onerror=null,this.sizing=!0;function e(t,e){ht(i.imageData,{naturalWidth:t,naturalHeight:e,aspectRatio:t/e}),i.sizing=!1,i.sized=!0,i.build()}var a=r.navigator&&/(?:iPad|iPhone|iPod).*?AppleWebKit/i.test(r.navigator.userAgent);if(!t.naturalWidth||a){var n=document.createElement("img"),o=document.body||document.documentElement;(this.sizingImage=n).onload=function(){e(n.width,n.height),a||o.removeChild(n)},n.src=t.src,a||(n.style.cssText="left:0;max-height:none!important;max-width:none!important;min-height:0!important;min-width:0!important;opacity:0;position:absolute;top:0;z-index:-1;",o.appendChild(n))}else e(t.naturalWidth,t.naturalHeight)}},{key:"stop",value:function(){var t=this.image;t.onload=null,t.onerror=null,t.parentNode.removeChild(t),this.image=null}},{key:"build",value:function(){if(this.sized&&!this.ready){var t=this.element,e=this.options,i=this.image,a=t.parentNode,n=document.createElement("div");n.innerHTML='<div class="cropper-container" touch-action="none"><div class="cropper-wrap-box"><div class="cropper-canvas"></div></div><div class="cropper-drag-box"></div><div class="cropper-crop-box"><span class="cropper-view-box"></span><span class="cropper-dashed dashed-h"></span><span class="cropper-dashed dashed-v"></span><span class="cropper-center"></span><span class="cropper-face"></span><span class="cropper-line line-e" data-cropper-action="e"></span><span class="cropper-line line-n" data-cropper-action="n"></span><span class="cropper-line line-w" data-cropper-action="w"></span><span class="cropper-line line-s" data-cropper-action="s"></span><span class="cropper-point point-e" data-cropper-action="e"></span><span class="cropper-point point-n" data-cropper-action="n"></span><span class="cropper-point point-w" data-cropper-action="w"></span><span class="cropper-point point-s" data-cropper-action="s"></span><span class="cropper-point point-ne" data-cropper-action="ne"></span><span class="cropper-point point-nw" data-cropper-action="nw"></span><span class="cropper-point point-sw" data-cropper-action="sw"></span><span class="cropper-point point-se" data-cropper-action="se"></span></div></div>';var o=n.querySelector(".".concat(l,"-container")),r=o.querySelector(".".concat(l,"-canvas")),h=o.querySelector(".".concat(l,"-drag-box")),s=o.querySelector(".".concat(l,"-crop-box")),c=s.querySelector(".".concat(l,"-face"));this.container=a,this.cropper=o,this.canvas=r,this.dragBox=h,this.cropBox=s,this.viewBox=o.querySelector(".".concat(l,"-view-box")),this.face=c,r.appendChild(i),pt(t,X),a.insertBefore(o,t.nextSibling),this.isImg||ut(i,d),this.initPreview(),this.bind(),e.initialAspectRatio=Math.max(0,e.initialAspectRatio)||NaN,e.aspectRatio=Math.max(0,e.aspectRatio)||NaN,e.viewMode=Math.max(0,Math.min(3,Math.round(e.viewMode)))||0,pt(s,X),e.guides||pt(s.getElementsByClassName("".concat(l,"-dashed")),X),e.center||pt(s.getElementsByClassName("".concat(l,"-center")),X),e.background&&pt(o,"".concat(l,"-bg")),e.highlight||pt(c,p),e.cropBoxMovable&&(pt(c,u),wt(c,m,D)),e.cropBoxResizable||(pt(s.getElementsByClassName("".concat(l,"-line")),X),pt(s.getElementsByClassName("".concat(l,"-point")),X)),this.render(),this.ready=!0,this.setDragMode(e.dragMode),e.autoCrop&&this.crop(),this.setData(e.data),at(e.ready)&&Mt(t,I,e.ready,{once:!0}),Ct(t,I)}}},{key:"unbuild",value:function(){this.ready&&(this.ready=!1,this.unbind(),this.resetPreview(),this.cropper.parentNode.removeChild(this.cropper),ut(this.element,X))}},{key:"uncreate",value:function(){this.ready?(this.unbuild(),this.ready=!1,this.cropped=!1):this.sizing?(this.sizingImage.onload=null,this.sizing=!1,this.sized=!1):this.reloading?(this.xhr.onabort=null,this.xhr.abort()):this.image&&this.stop()}}],[{key:"noConflict",value:function(){return window.Cropper=Pt,i}},{key:"setDefaults",value:function(t){ht(G,it(t)&&t)}}]),i}();return ht(It.prototype,Yt,Xt,Rt,St,At,jt),It});