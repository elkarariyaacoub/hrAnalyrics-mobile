"use strict";exports.id=305,exports.ids=[305],exports.modules={4305:(e,t,n)=>{n.d(t,{Z:()=>E});var i=n(326),r=n(7577),a=n(434),o=n(6226),s=n(7548);function l(){return(l=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i])}return e}).apply(this,arguments)}function c(e,t){if(e.length!==t.length)throw Error("vectors must be same length");return e.map(function(e,n){return e+t[n]})}function u(e){return Math.max.apply(Math,e.map(Math.abs))}function d(e){return Object.freeze(e),Object.values(e).forEach(function(e){null===e||"object"!=typeof e||Object.isFrozen(e)||d(e)}),e}var m=[1,18,"undefined"!=typeof window&&window.innerHeight||800],f=[-1,-1,-1],h=d({preventWheelAction:!0,reverseSign:[!0,!0,!1]});function x(){return{isStarted:!1,isStartPublished:!1,isMomentum:!1,startTime:0,lastAbsDelta:1/0,axisMovement:[0,0,0],axisVelocity:[0,0,0],accelerationFactors:[],scrollPoints:[],scrollPointsToMerge:[],willEndTimeout:400}}let v=function(e){void 0===e&&(e={});var t,n,i,r,a,o=function(){var e={};function t(t,n){e[t]=(e[t]||[]).filter(function(e){return e!==n})}return d({on:function(n,i){return e[n]=(e[n]||[]).concat(i),function(){return t(n,i)}},off:t,dispatch:function(t,n){t in e&&e[t].forEach(function(e){return e(n)})}})}(),s=o.on,v=o.off,p=o.dispatch,g=h,w=x(),y=!1,b=function(e){Array.isArray(e)?e.forEach(function(e){return N(e)}):N(e)},M=function(e){return(void 0===e&&(e={}),Object.values(e).some(function(e){return null==e}))?g:g=d(l({},h,g,e))},j=function(e){var t=l({event:r,isStart:!1,isEnding:!1,isMomentumCancel:!1,isMomentum:w.isMomentum,axisDelta:[0,0,0],axisVelocity:w.axisVelocity,axisMovement:w.axisMovement,get axisMovementProjection(){return c(t.axisMovement,t.axisVelocity.map(function(e){var t;return void 0===t&&(t=.996),e*t/(1-t)}))}},e);p("wheel",l({},t,{previous:a})),a=t},E=function(e,t){var n=g.preventWheelAction,i=t[0],r=t[1],a=t[2];if("boolean"==typeof n)return n;switch(n){case"x":return Math.abs(i)>=e;case"y":return Math.abs(r)>=e;case"z":return Math.abs(a)>=e;default:return!1}},N=function(e){var t,n,i,a,o=(a=function(e,t){if(!t)return e;var n=!0===t?f:t.map(function(e){return e?-1:1});return l({},e,{axisDelta:e.axisDelta.map(function(e,t){return e*n[t]})})}((t=e.deltaX*m[e.deltaMode],n=e.deltaY*m[e.deltaMode],i=(e.deltaZ||0)*m[e.deltaMode],{timeStamp:e.timeStamp,axisDelta:[t,n,i]}),g.reverseSign),l({},a,{axisDelta:a.axisDelta.map(function(e){return Math.min(Math.max(-700,e),700)})})),s=o.axisDelta,d=o.timeStamp,h=u(s);if(e.preventDefault&&E(h,s)&&e.preventDefault(),w.isStarted?w.isMomentum&&h>Math.max(2,2*w.lastAbsDelta)&&(O(!0),A()):A(),0===h&&Object.is&&Object.is(e.deltaX,-0)){y=!0;return}r=e,w.axisMovement=c(w.axisMovement,s),w.lastAbsDelta=h,w.scrollPointsToMerge.push({axisDelta:s,timeStamp:d}),S(),j({axisDelta:s,isStart:!w.isStartPublished}),w.isStartPublished=!0,V()},S=function(){if(2===w.scrollPointsToMerge.length){var e;w.scrollPoints.unshift({axisDeltaSum:w.scrollPointsToMerge.map(function(e){return e.axisDelta}).reduce(c),timeStamp:(e=w.scrollPointsToMerge.map(function(e){return e.timeStamp})).reduce(function(e,t){return e+t})/e.length}),C(),w.scrollPointsToMerge.length=0,w.scrollPoints.length=1,w.isMomentum||k()}else w.isStartPublished||D()},D=function(){var e;w.axisVelocity=(e=w.scrollPointsToMerge)[e.length-1].axisDelta.map(function(e){return e/w.willEndTimeout})},C=function(){var e=w.scrollPoints,t=e[0],n=e[1];if(n&&t){var i=t.timeStamp-n.timeStamp;if(!(i<=0)){var r=t.axisDeltaSum.map(function(e){return e/i}),a=r.map(function(e,t){return e/(w.axisVelocity[t]||1)});w.axisVelocity=r,w.accelerationFactors.push(a),P(i)}}},P=function(e){var t=12*Math.ceil(e/10);w.isMomentum||(t=Math.max(100,2*t)),w.willEndTimeout=Math.min(1e3,Math.round(t))},T=function(e){return 0===e||e<=.96&&e>=.6},k=function(){if(w.accelerationFactors.length>=5){if(y&&(y=!1,u(w.axisVelocity)>=.2)){z();return}var e=w.accelerationFactors.slice(-5);e.every(function(e){var t=!!e.reduce(function(e,t){return e&&e<1&&e===t?1:0}),n=e.filter(T).length===e.length;return t||n})&&z(),w.accelerationFactors=e}},z=function(){w.isMomentum=!0},A=function(){(w=x()).isStarted=!0,w.startTime=Date.now(),a=void 0,y=!1},V=function(){clearTimeout(t),t=setTimeout(O,w.willEndTimeout)},O=function(e){void 0===e&&(e=!1),w.isStarted&&(w.isMomentum&&e?j({isEnding:!0,isMomentumCancel:!0}):j({isEnding:!0}),w.isMomentum=!1,w.isStarted=!1)},L=(n=[],d({observe:function(e){return e.addEventListener("wheel",b,{passive:!1}),n.push(e),function(){return i(e)}},unobserve:i=function(e){e.removeEventListener("wheel",b),n=n.filter(function(t){return t!==e})},disconnect:function(){n.forEach(i)}})),I=L.observe,Z=L.unobserve,X=L.disconnect;return M(e),d({on:s,off:v,observe:I,unobserve:Z,disconnect:X,feedWheel:b,updateOptions:M})};var p={active:!0,breakpoints:{},wheelDraggingClass:"is-wheel-dragging",forceWheelAxis:void 0,target:void 0};function g(e){void 0===e&&(e={});var t,n=function(){};return{name:"wheelGestures",options:e,init:function(i,r){var a,o,s,l=r.mergeOptions,c=r.optionsAtMedia,u=l(p,g.globalOptions);t=c(l(u,e));var d=i.internalEngine(),m=null!=(a=t.target)?a:i.containerNode().parentNode,f=null!=(o=t.forceWheelAxis)?o:d.options.axis,h=v({preventWheelAction:f,reverseSign:[!0,!0,!1]}),x=h.observe(m),w=h.on("wheel",function(e){var i=e.axisDelta,r=i[0],a=i[1],o="x"===f?r:a,l="x"===f?a:r,c=e.isMomentum&&e.previous&&!e.previous.isMomentum,u=e.isEnding&&!e.isMomentum||c;!(Math.abs(o)>Math.abs(l))||y||e.isMomentum||function(e){try{s=new MouseEvent("mousedown",e.event),E(s)}catch(e){return n()}y=!0,document.documentElement.addEventListener("mousemove",M,!0),document.documentElement.addEventListener("mouseup",M,!0),document.documentElement.addEventListener("mousedown",M,!0),t.wheelDraggingClass&&m.classList.add(t.wheelDraggingClass)}(e),y&&(u?(y=!1,E(j("mouseup",e)),b(),t.wheelDraggingClass&&m.classList.remove(t.wheelDraggingClass)):E(j("mousemove",e)))}),y=!1;function b(){document.documentElement.removeEventListener("mousemove",M,!0),document.documentElement.removeEventListener("mouseup",M,!0),document.documentElement.removeEventListener("mousedown",M,!0)}function M(e){y&&e.isTrusted&&e.stopImmediatePropagation()}function j(e,t){var n,i;if(f===d.options.axis){var r=t.axisMovement;n=r[0],i=r[1]}else{var a=t.axisMovement;i=a[0],n=a[1]}return new MouseEvent(e,{clientX:s.clientX+n,clientY:s.clientY+i,screenX:s.screenX+n,screenY:s.screenY+i,movementX:n,movementY:i,button:0,bubbles:!0,cancelable:!0,composed:!0})}function E(e){i.containerNode().dispatchEvent(e)}n=function(){x(),w(),b()}},destroy:function(){return n()}}}g.globalOptions=void 0;var w=n(3967),y=n(2376),b=n(869),M=n(9030),j=n(3844);let E=({items:e,contactLink:t,primaryColor:n,logo:l,moreIcon:c,contactText:u,logoSize:d})=>{let m=(0,M.Z)(),f=(0,j.useLocale)(),[h,x]=(0,r.useState)(null),v=()=>{h&&h.canScrollNext()?h.scrollNext():h&&h.canScrollNext()},p={y:m?0:100,x:m?100:0,opacity:0},E={y:0,x:0,opacity:1};return i.jsx(s.lr,{opts:{loop:!1,active:!0},plugins:[g()],orientation:m?"horizontal":"vertical",setApi:x,children:i.jsx(s.KI,{className:"h-[100svh]",children:e.map((t,r)=>(0,i.jsxs)(s.d$,{className:"flex flex-col justify-between items-center px-4",children:[(0,i.jsxs)(y.E.div,{initial:p,whileInView:E,transition:{duration:.5,type:"linear"},className:"flex justify-between items-center p-6 px-0 w-full md:p-0 md:px-6 md:pt-4",children:[i.jsx(o.default,{src:l,width:d||38,height:0,alt:"logo",placeholder:"empty"}),i.jsx(w.Z,{color:"black"})]}),(0,i.jsxs)("div",{className:"flex flex-col items-center gap-4 md:flex-row",children:[(0,i.jsxs)("div",{className:"md:flex-[3] flex flex-col items-center md:px-4 md:border-r-2 md:border-dark-blue",children:[i.jsx(y.E.div,{initial:p,whileInView:E,transition:{duration:.5,type:"linear",delay:.4},children:i.jsx(o.default,{src:t.image,width:114,height:0,alt:"logo"})}),i.jsx(y.E.h1,{initial:p,whileInView:E,transition:{duration:.5,type:"linear",delay:.6},className:"text-title text-center font-black text-nowrap mt-2 md:text-wrap md:text-xl lg:text-title",style:{lineHeight:"1.8rem",color:`hsl(var(--${n}))`},children:i.jsx(b.Z,{text:t.title})})]}),i.jsx(y.E.p,{initial:p,whileInView:E,transition:{duration:.5,type:"linear",delay:.6},className:"text-center font-medium text-dark-blue text-nowrap mt-2 md:text-wrap md:flex-[4] md:text-start",style:{lineHeight:"1.4rem"},children:i.jsx(b.Z,{text:t.description})})]}),i.jsx(y.E.div,{initial:p,whileInView:E,transition:{duration:.5,type:"linear",delay:.8},className:"flex justify-center items-center w-full p-12 md:p-0 md:justify-end md:px-8",children:r===e.length-1?i.jsx(a.default,{href:`/${f}/contact`,className:"px-8 py-2 mb-8 rounded-3xl text-white font-normal",style:{backgroundColor:`hsl(var(--${n}))`},children:u}):i.jsx(y.E.div,{initial:{y:m?0:5,x:m?5:0},whileInView:{y:m?0:-5,x:m?-5:0},transition:{duration:5,type:"spring",delay:5,repeat:1/0,bounce:1,repeatType:"loop"},children:i.jsx("a",{onClick:v,className:"w-80",children:i.jsx(o.default,{src:c,width:64,height:0,alt:"more",className:"md:rotate-90"})})})})]},r))})})}},7548:(e,t,n)=>{n.d(t,{KI:()=>f,d$:()=>h,lr:()=>m});var i=n(326),r=n(7577),a=n(481),o=n(6333),s=n(4230),l=n(1223),c=n(1664);let u=r.createContext(null);function d(){let e=r.useContext(u);if(!e)throw Error("useCarousel must be used within a <Carousel />");return e}let m=r.forwardRef(({orientation:e="horizontal",opts:t,setApi:n,plugins:o,className:s,children:c,...d},m)=>{let[f,h]=(0,a.Z)({...t,axis:"horizontal"===e?"x":"y"},o),[x,v]=r.useState(!1),[p,g]=r.useState(!1),w=r.useCallback(e=>{e&&(v(e.canScrollPrev()),g(e.canScrollNext()))},[]),y=r.useCallback(()=>{h?.scrollPrev()},[h]),b=r.useCallback(()=>{h?.scrollNext()},[h]),M=r.useCallback(e=>{"ArrowLeft"===e.key?(e.preventDefault(),y()):"ArrowRight"===e.key&&(e.preventDefault(),b())},[y,b]);return r.useEffect(()=>{h&&n&&n(h)},[h,n]),r.useEffect(()=>{if(h)return w(h),h.on("reInit",w),h.on("select",w),()=>{h?.off("select",w)}},[h,w]),i.jsx(u.Provider,{value:{carouselRef:f,api:h,opts:t,orientation:e||(t?.axis==="y"?"vertical":"horizontal"),scrollPrev:y,scrollNext:b,canScrollPrev:x,canScrollNext:p},children:i.jsx("div",{ref:m,onKeyDownCapture:M,className:(0,l.cn)("relative",s),role:"region","aria-roledescription":"carousel",...d,children:c})})});m.displayName="Carousel";let f=r.forwardRef(({className:e,...t},n)=>{let{carouselRef:r,orientation:a}=d();return i.jsx("div",{ref:r,className:"overflow-hidden",children:i.jsx("div",{ref:n,className:(0,l.cn)("flex","horizontal"===a?"-ml-4":"-mt-4 flex-col",e),...t})})});f.displayName="CarouselContent";let h=r.forwardRef(({className:e,...t},n)=>{let{orientation:r}=d();return i.jsx("div",{ref:n,role:"group","aria-roledescription":"slide",className:(0,l.cn)("min-w-0 shrink-0 grow-0 basis-full","horizontal"===r?"pl-4":"pt-4",e),...t})});h.displayName="CarouselItem",r.forwardRef(({className:e,variant:t="outline",size:n="icon",...r},a)=>{let{orientation:s,scrollPrev:u,canScrollPrev:m}=d();return(0,i.jsxs)(c.z,{ref:a,variant:t,size:n,className:(0,l.cn)("absolute  h-8 w-8 rounded-full","horizontal"===s?"-left-12 top-1/2 -translate-y-1/2":"-top-12 left-1/2 -translate-x-1/2 rotate-90",e),disabled:!m,onClick:u,...r,children:[i.jsx(o.Z,{className:"h-4 w-4"}),i.jsx("span",{className:"sr-only",children:"Previous slide"})]})}).displayName="CarouselPrevious",r.forwardRef(({className:e,variant:t="outline",size:n="icon",...r},a)=>{let{orientation:o,scrollNext:u,canScrollNext:m}=d();return(0,i.jsxs)(c.z,{ref:a,variant:t,size:n,className:(0,l.cn)("absolute h-8 w-8 rounded-full","horizontal"===o?"-right-12 top-1/2 -translate-y-1/2":"-bottom-12 left-1/2 -translate-x-1/2 rotate-90",e),disabled:!m,onClick:u,...r,children:[i.jsx(s.Z,{className:"h-4 w-4"}),i.jsx("span",{className:"sr-only",children:"Next slide"})]})}).displayName="CarouselNext"}};