!function(){function e(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function t(e){return function(e){if(Array.isArray(e))return r(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||function(e,t){if(!e)return;if("string"==typeof e)return r(e,t);var a=Object.prototype.toString.call(e).slice(8,-1);"Object"===a&&e.constructor&&(a=e.constructor.name);if("Map"===a||"Set"===a)return Array.from(e);if("Arguments"===a||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a))return r(e,t)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function r(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,a=new Array(t);r<t;r++)a[r]=e[r];return a}function a(e,t){for(var r=0;r<t.length;r++){var a=t[r];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}(self.webpackChunkrestaurantUi=self.webpackChunkrestaurantUi||[]).push([[1855],{71855:function(r,o,n){"use strict";n.r(o),n.d(o,{ion_modal:function(){return E}});var i=n(16304),s=n(31035),d=n(25466),l=n(95930),c=n(44486),p=n(76297),m=n(17853),h=n(3401),u=n(83580),f=n(66269),g=n(44751);n(67286);var b=function(e,t){var r=1/(1-t);return e*r+-t*r},v=function(e){var t=e.currentBreakpoint,r=e.backdropBreakpoint,a=void 0===r||r<t?"calc(var(--backdrop-opacity) * ".concat(t,")"):"0",o=(0,u.c)("backdropAnimation").fromTo("opacity",0,a);return{wrapperAnimation:(0,u.c)("wrapperAnimation").keyframes([{offset:0,opacity:1,transform:"translateY(100%)"},{offset:1,opacity:1,transform:"translateY(".concat(100-100*t,"%)")}]),backdropAnimation:o}},y=function(e){var t=e.currentBreakpoint,r=e.backdropBreakpoint,a="calc(var(--backdrop-opacity) * ".concat(b(t,r),")"),o=[{offset:0,opacity:a},{offset:1,opacity:0}],n=[{offset:0,opacity:a},{offset:r,opacity:0},{offset:1,opacity:0}],i=(0,u.c)("backdropAnimation").keyframes(0!==r?n:o);return{wrapperAnimation:(0,u.c)("wrapperAnimation").keyframes([{offset:0,opacity:1,transform:"translateY(".concat(100-100*t,"%)")},{offset:1,opacity:1,transform:"translateY(100%)"}]),backdropAnimation:i}},w=function(e,t){var r=t.presentingEl,a=t.currentBreakpoint,o=(0,c.g)(e),n=void 0!==a?v(t):{backdropAnimation:(0,u.c)().fromTo("opacity",.01,"var(--backdrop-opacity)"),wrapperAnimation:(0,u.c)().fromTo("transform","translateY(100vh)","translateY(0vh)")},i=n.wrapperAnimation,s=n.backdropAnimation;s.addElement(o.querySelector("ion-backdrop")).beforeStyles({"pointer-events":"none"}).afterClearStyles(["pointer-events"]),i.addElement(o.querySelectorAll(".modal-wrapper, .modal-shadow")).beforeStyles({opacity:1});var d=(0,u.c)("entering-base").addElement(e).easing("cubic-bezier(0.32,0.72,0,1)").duration(500).addAnimation(i);if(r){var l=window.innerWidth<768,p="ION-MODAL"===r.tagName&&void 0!==r.presentingElement,m=(0,c.g)(r),h=(0,u.c)().beforeStyles({transform:"translateY(0)","transform-origin":"top center",overflow:"hidden"}),f=document.body;if(l){var g=CSS.supports("width","max(0px, 1px)")?"max(30px, var(--ion-safe-area-top))":"30px",b="translateY(".concat(p?"-10px":g,") scale(0.93)");h.afterStyles({transform:b}).beforeAddWrite(function(){return f.style.setProperty("background-color","black")}).addElement(r).keyframes([{offset:0,filter:"contrast(1)",transform:"translateY(0px) scale(1)",borderRadius:"0px"},{offset:1,filter:"contrast(0.85)",transform:b,borderRadius:"10px 10px 0 0"}]),d.addAnimation(h)}else if(d.addAnimation(s),p){var y="translateY(-10px) scale(".concat(p?.93:1,")");h.afterStyles({transform:y}).addElement(m.querySelector(".modal-wrapper")).keyframes([{offset:0,filter:"contrast(1)",transform:"translateY(0) scale(1)"},{offset:1,filter:"contrast(0.85)",transform:y}]);var w=(0,u.c)().afterStyles({transform:y}).addElement(m.querySelector(".modal-shadow")).keyframes([{offset:0,opacity:"1",transform:"translateY(0) scale(1)"},{offset:1,opacity:"0",transform:y}]);d.addAnimation([h,w])}else i.fromTo("opacity","0","1")}else d.addAnimation(s);return d},k=function(e,t){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:500,a=t.presentingEl,o=t.currentBreakpoint,n=(0,c.g)(e),i=void 0!==o?y(t):{backdropAnimation:(0,u.c)().fromTo("opacity","var(--backdrop-opacity)",0),wrapperAnimation:(0,u.c)().fromTo("transform","translateY(0vh)","translateY(100vh)")},s=i.wrapperAnimation,d=i.backdropAnimation;d.addElement(n.querySelector("ion-backdrop")),s.addElement(n.querySelectorAll(".modal-wrapper, .modal-shadow")).beforeStyles({opacity:1});var l=(0,u.c)("leaving-base").addElement(e).easing("cubic-bezier(0.32,0.72,0,1)").duration(r).addAnimation(s);if(a){var p=window.innerWidth<768,m="ION-MODAL"===a.tagName&&void 0!==a.presentingElement,h=(0,c.g)(a),f=(0,u.c)().beforeClearStyles(["transform"]).afterClearStyles(["transform"]).onFinish(function(e){1===e&&(a.style.setProperty("overflow",""),Array.from(g.querySelectorAll("ion-modal")).filter(function(e){return void 0!==e.presentingElement}).length<=1&&g.style.setProperty("background-color",""))}),g=document.body;if(p){var b=CSS.supports("width","max(0px, 1px)")?"max(30px, var(--ion-safe-area-top))":"30px",v="translateY(".concat(m?"-10px":b,") scale(0.93)");f.addElement(a).keyframes([{offset:0,filter:"contrast(0.85)",transform:v,borderRadius:"10px 10px 0 0"},{offset:1,filter:"contrast(1)",transform:"translateY(0px) scale(1)",borderRadius:"0px"}]),l.addAnimation(f)}else if(l.addAnimation(d),m){var w="translateY(-10px) scale(".concat(m?.93:1,")");f.addElement(h.querySelector(".modal-wrapper")).afterStyles({transform:"translate3d(0, 0, 0)"}).keyframes([{offset:0,filter:"contrast(0.85)",transform:w},{offset:1,filter:"contrast(1)",transform:"translateY(0) scale(1)"}]);var k=(0,u.c)().addElement(h.querySelector(".modal-shadow")).afterStyles({transform:"translateY(0) scale(1)"}).keyframes([{offset:0,opacity:"0",transform:w},{offset:1,opacity:"1",transform:"translateY(0) scale(1)"}]);l.addAnimation([f,k])}else s.fromTo("opacity","1","0")}else l.addAnimation(d);return l},x=function(e,t){var r=t.currentBreakpoint,a=(0,c.g)(e),o=void 0!==r?v(t):{backdropAnimation:(0,u.c)().fromTo("opacity",.01,"var(--backdrop-opacity)"),wrapperAnimation:(0,u.c)().keyframes([{offset:0,opacity:.01,transform:"translateY(40px)"},{offset:1,opacity:1,transform:"translateY(0px)"}])},n=o.wrapperAnimation,i=o.backdropAnimation;return i.addElement(a.querySelector("ion-backdrop")).beforeStyles({"pointer-events":"none"}).afterClearStyles(["pointer-events"]),n.addElement(a.querySelector(".modal-wrapper")),(0,u.c)().addElement(e).easing("cubic-bezier(0.36,0.66,0.04,1)").duration(280).addAnimation([i,n])},A=function(e,t){var r=t.currentBreakpoint,a=(0,c.g)(e),o=void 0!==r?y(t):{backdropAnimation:(0,u.c)().fromTo("opacity","var(--backdrop-opacity)",0),wrapperAnimation:(0,u.c)().keyframes([{offset:0,opacity:.99,transform:"translateY(0px)"},{offset:1,opacity:0,transform:"translateY(40px)"}])},n=o.wrapperAnimation,i=o.backdropAnimation;return i.addElement(a.querySelector("ion-backdrop")),n.addElement(a.querySelector(".modal-wrapper")),(0,u.c)().easing("cubic-bezier(0.47,0,0.745,0.715)").duration(200).addAnimation([i,n])},E=function(){function r(e){var t=this;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,r),(0,s.r)(this,e),this.didPresent=(0,s.e)(this,"ionModalDidPresent",7),this.willPresent=(0,s.e)(this,"ionModalWillPresent",7),this.willDismiss=(0,s.e)(this,"ionModalWillDismiss",7),this.didDismiss=(0,s.e)(this,"ionModalDidDismiss",7),this.didPresentShorthand=(0,s.e)(this,"didPresent",7),this.willPresentShorthand=(0,s.e)(this,"willPresent",7),this.willDismissShorthand=(0,s.e)(this,"willDismiss",7),this.didDismissShorthand=(0,s.e)(this,"didDismiss",7),this.modalIndex=D++,this.coreDelegate=(0,l.C)(),this.isSheetModal=!1,this.inline=!1,this.gestureAnimationDismissing=!1,this.presented=!1,this.keyboardClose=!0,this.backdropBreakpoint=0,this.backdropDismiss=!0,this.showBackdrop=!0,this.animated=!0,this.swipeToClose=!1,this.isOpen=!1,this.configureTriggerInteraction=function(){var e=t.trigger,r=t.el,a=t.destroyTriggerInteraction;a&&a();var o=void 0!==e?document.getElementById(e):null;o&&(t.destroyTriggerInteraction=function(e,t){var r=function(){t.present()};return e.addEventListener("click",r),function(){e.removeEventListener("click",r)}}(o,r))},this.onBackdropTap=function(){t.dismiss(void 0,p.B)},this.onDismiss=function(e){e.stopPropagation(),e.preventDefault(),t.dismiss()},this.onLifecycle=function(e){var r=t.usersElement,a=S[e.type];if(r&&a){var o=new CustomEvent(a,{bubbles:!1,cancelable:!1,detail:e.detail});r.dispatchEvent(o)}}}var o,n,u;return o=r,u=[{key:"watchers",get:function(){return{isOpen:["onIsOpenChange"],trigger:["onTriggerChange"],swipeToClose:["swipeToCloseChanged"]}}}],(n=[{key:"onIsOpenChange",value:function(e,t){!0===e&&!1===t?this.present():!1===e&&!0===t&&this.dismiss()}},{key:"onTriggerChange",value:function(){this.configureTriggerInteraction()}},{key:"swipeToCloseChanged",value:function(e){this.gesture?this.gesture.enable(e):e&&this.initSwipeToClose()}},{key:"connectedCallback",value:function(){(0,p.e)(this.el)}},{key:"componentWillLoad",value:function(){var e=this.breakpoints,t=this.initialBreakpoint;this.modalId=this.el.hasAttribute("id")?this.el.getAttribute("id"):"ion-modal-".concat(this.modalIndex),this.isSheetModal=void 0!==e&&void 0!==t,void 0===e||void 0===t||e.includes(t)||console.warn("[Ionic Warning]: Your breakpoints array must include the initialBreakpoint value.")}},{key:"componentDidLoad",value:function(){var e=this;!0===this.isOpen&&(0,c.r)(function(){return e.present()}),this.configureTriggerInteraction()}},{key:"getDelegate",value:function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0];if(this.workingDelegate&&!e)return{delegate:this.workingDelegate,inline:this.inline};var t=this.el.parentNode,r=this.inline=null!==t&&"ION-APP"!==t.tagName&&"BODY"!==t.tagName;return{inline:r,delegate:this.workingDelegate=r?this.delegate||this.coreDelegate:this.delegate}}},{key:"present",value:function(){var e=this;return(0,i.Z)(regeneratorRuntime.mark(function t(){var r,a,o,n;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(!e.presented){t.next=2;break}return t.abrupt("return");case 2:if(t.t0=void 0!==e.currentTransition,!t.t0){t.next=6;break}return t.next=6,e.currentTransition;case 6:return r=Object.assign(Object.assign({},e.componentProps),{modal:e.el}),a=e.getDelegate(!0),o=a.inline,n=a.delegate,t.next=9,(0,l.a)(n,e.el,e.component,["ion-page"],r,o);case 9:return e.usersElement=t.sent,t.next=12,(0,h.e)(e.usersElement);case 12:return(0,s.c)(function(){return e.el.classList.add("show-modal")}),e.currentTransition=(0,p.d)(e,"modalEnter",w,x,{presentingEl:e.presentingElement,currentBreakpoint:e.initialBreakpoint,backdropBreakpoint:e.backdropBreakpoint}),t.next=16,e.currentTransition;case 16:e.isSheetModal?e.initSheetGesture():e.swipeToClose&&e.initSwipeToClose(),e.currentTransition=void 0;case 18:case"end":return t.stop()}},t)}))()}},{key:"initSwipeToClose",value:function(){var e=this,t=this;if("ios"===(0,d.b)(this)){var r,a,o,n,s,l=this.leaveAnimation||d.c.get("modalLeave",k),p=this.animation=l(this.el,{presentingEl:this.presentingElement});this.gesture=(r=this.el,a=p,o=r.offsetHeight,n=!1,s=(0,g.createGesture)({el:r,gestureName:"modalSwipeToClose",gesturePriority:40,direction:"y",threshold:10,canStart:function(e){var t=e.event.target;return null===t||!t.closest||null===t.closest("ion-content, ion-footer")},onStart:function(){a.progressStart(!0,n?1:0)},onMove:function(e){var t=(0,c.k)(1e-4,e.deltaY/o,.9999);a.progressStep(t)},onEnd:function(r){var d=r.velocityY,l=(0,c.k)(1e-4,r.deltaY/o,.9999),p=(r.deltaY+1e3*d)/o>=.5,m=p?-.001:.001;p?(a.easing("cubic-bezier(0.32, 0.72, 0, 1)"),m+=(0,f.g)([0,0],[.32,.72],[0,1],[1,1],l)[0]):(a.easing("cubic-bezier(1, 0, 0.68, 0.28)"),m+=(0,f.g)([0,0],[1,0],[.68,.28],[1,1],l)[0]);var h=function(e,t){return(0,c.k)(400,e/Math.abs(1.1*t),500)}(p?l*o:(1-l)*o,d);n=p,s.enable(!1),a.onFinish(function(){p||s.enable(!0)}).progressEnd(p?1:0,m,h),p&&(e.gestureAnimationDismissing=!0,e.animation.onFinish((0,i.Z)(regeneratorRuntime.mark(function e(){return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.dismiss(void 0,"gesture");case 2:t.gestureAnimationDismissing=!1;case 3:case"end":return e.stop()}},e)}))))}})),this.gesture.enable(!0)}}},{key:"initSheetGesture",value:function(){var e,r=this,a=this,o=this.wrapperEl,n=this.initialBreakpoint,s=this.backdropBreakpoint;if(o&&void 0!==n){var l=this.enterAnimation||d.c.get("modalEnter",w),p=this.animation=l(this.el,{presentingEl:this.presentingElement,currentBreakpoint:n,backdropBreakpoint:s});p.progressStart(!0,1);var m=(null===(e=this.breakpoints)||void 0===e?void 0:e.sort(function(e,t){return e-t}))||[];this.gesture=function(e,a,o,n,i,s){var d=arguments.length>6&&void 0!==arguments[6]?arguments[6]:[],l=arguments.length>7?arguments[7]:void 0,p=arguments.length>8?arguments[8]:void 0,m={WRAPPER_KEYFRAMES:[{offset:0,transform:"translateY(0%)"},{offset:1,transform:"translateY(100%)"}],BACKDROP_KEYFRAMES:0!==i?[{offset:0,opacity:"var(--backdrop-opacity)"},{offset:1-i,opacity:0},{offset:1,opacity:0}]:[{offset:0,opacity:"var(--backdrop-opacity)"},{offset:1,opacity:.01}]},h=r.el.querySelector("ion-content"),u=o.clientHeight,f=n,v=0,y=s.childAnimations.find(function(e){return"wrapperAnimation"===e.id}),w=s.childAnimations.find(function(e){return"backdropAnimation"===e.id}),k=d[d.length-1];y&&w&&(y.keyframes(t(m.WRAPPER_KEYFRAMES)),w.keyframes(t(m.BACKDROP_KEYFRAMES)),s.progressStart(!0,1-f),a.style.setProperty("pointer-events",f>i?"auto":"none")),h&&f!==k&&(h.scrollY=!1);var x=(0,g.createGesture)({el:o,gestureName:"modalSheet",gesturePriority:40,direction:"y",threshold:10,canStart:function(e){var t=e.event.target.closest("ion-content");return 1!==f||!t},onStart:function(){h&&(h.scrollY=!1),s.progressStart(!0,1-f)},onMove:function(e){v=(0,c.k)(1e-4,1-f+e.deltaY/u,.9999),s.progressStep(v)},onEnd:function(e){var r=f-(e.deltaY+100*e.velocityY)/u,o=d.reduce(function(e,t){return Math.abs(t-r)<Math.abs(e-r)?t:e}),n=0!==o;f=0,y&&w&&(y.keyframes([{offset:0,transform:"translateY(".concat(100*v,"%)")},{offset:1,transform:"translateY(".concat(100*(1-o),"%)")}]),w.keyframes([{offset:0,opacity:"calc(var(--backdrop-opacity) * ".concat(b(1-v,i),")")},{offset:1,opacity:"calc(var(--backdrop-opacity) * ".concat(b(o,i),")")}]),s.progressStep(0)),x.enable(!1),s.onFinish(function(){n&&(y&&w?(0,c.r)(function(){y.keyframes(t(m.WRAPPER_KEYFRAMES)),w.keyframes(t(m.BACKDROP_KEYFRAMES)),s.progressStart(!0,1-o),p(f=o),h&&f===d[d.length-1]&&(h.scrollY=!0),a.style.setProperty("pointer-events",f>i?"auto":"none"),x.enable(!0)}):x.enable(!0))},{oneTimeCallback:!0}).progressEnd(1,0,500),n||l()}});return x}(0,this.backdropEl,o,n,s,p,m,function(){r.gestureAnimationDismissing=!0,r.animation.onFinish((0,i.Z)(regeneratorRuntime.mark(function e(){return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,a.dismiss(void 0,"gesture");case 2:a.gestureAnimationDismissing=!1;case 3:case"end":return e.stop()}},e)})))},function(e){r.currentBreakpoint=e}),this.gesture.enable(!0)}}},{key:"dismiss",value:function(e,t){var r=this;return(0,i.Z)(regeneratorRuntime.mark(function a(){var o,n,i,s;return regeneratorRuntime.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:if(!r.gestureAnimationDismissing||"gesture"===t){a.next=2;break}return a.abrupt("return",!1);case 2:if(a.t0=void 0!==r.currentTransition,!a.t0){a.next=6;break}return a.next=6,r.currentTransition;case 6:return o=p.h.get(r)||[],r.currentTransition=(0,p.f)(r,e,t,"modalLeave",k,A,{presentingEl:r.presentingElement,currentBreakpoint:r.currentBreakpoint||r.initialBreakpoint,backdropBreakpoint:r.backdropBreakpoint}),a.next=10,r.currentTransition;case 10:if(!(n=a.sent)){a.next=18;break}return i=r.getDelegate(),s=i.delegate,a.next=15,(0,l.d)(s,r.usersElement);case 15:r.animation&&r.animation.destroy(),r.gesture&&r.gesture.destroy(),o.forEach(function(e){return e.destroy()});case 18:return a.abrupt("return",(r.currentTransition=void 0,r.animation=void 0,n));case 19:case"end":return a.stop()}},a)}))()}},{key:"onDidDismiss",value:function(){return(0,p.g)(this.el,"ionModalDidDismiss")}},{key:"onWillDismiss",value:function(){return(0,p.g)(this.el,"ionModalWillDismiss")}},{key:"render",value:function(){var t,r=this,a=this.handle,o=this.isSheetModal,n=this.presentingElement,i=this.htmlAttributes,l=!1!==a&&o,c=(0,d.b)(this),p=this.presented,h=this.modalId;return(0,s.h)(s.H,Object.assign({"no-router":!0,"aria-modal":"true",tabindex:"-1"},i,{style:{zIndex:"".concat(2e4+this.overlayIndex)},class:Object.assign((t={},e(t,c,!0),e(t,"modal-card",void 0!==n&&"ios"===c),e(t,"modal-sheet",o),e(t,"overlay-hidden",!0),e(t,"modal-interactive",p),t),(0,m.g)(this.cssClass)),id:h,onIonBackdropTap:this.onBackdropTap,onIonDismiss:this.onDismiss,onIonModalDidPresent:this.onLifecycle,onIonModalWillPresent:this.onLifecycle,onIonModalWillDismiss:this.onLifecycle,onIonModalDidDismiss:this.onLifecycle}),(0,s.h)("ion-backdrop",{ref:function(e){return r.backdropEl=e},visible:this.showBackdrop,tappable:this.backdropDismiss,part:"backdrop"}),"ios"===c&&(0,s.h)("div",{class:"modal-shadow"}),(0,s.h)("div",{role:"dialog",class:"modal-wrapper ion-overlay-wrapper",part:"content",ref:function(e){return r.wrapperEl=e}},l&&(0,s.h)("div",{class:"modal-handle",part:"handle"}),(0,s.h)("slot",null)))}},{key:"el",get:function(){return(0,s.i)(this)}}])&&a(o.prototype,n),u&&a(o,u),r}(),S={ionModalDidPresent:"ionViewDidEnter",ionModalWillPresent:"ionViewWillEnter",ionModalWillDismiss:"ionViewWillLeave",ionModalDidDismiss:"ionViewDidLeave"},D=0;E.style={ios:":host{--width:100%;--min-width:auto;--max-width:auto;--height:100%;--min-height:auto;--max-height:auto;--overflow:hidden;--border-radius:0;--border-width:0;--border-style:none;--border-color:transparent;--background:var(--ion-background-color, #fff);--box-shadow:none;--backdrop-opacity:0;left:0;right:0;top:0;bottom:0;display:-ms-flexbox;display:flex;position:absolute;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;outline:none;contain:strict;pointer-events:none}:host(.modal-interactive) .modal-wrapper,:host(.modal-interactive) ion-backdrop{pointer-events:auto}:host(.overlay-hidden){display:none}.modal-wrapper,.modal-shadow{border-radius:var(--border-radius);width:var(--width);min-width:var(--min-width);max-width:var(--max-width);height:var(--height);min-height:var(--min-height);max-height:var(--max-height);border-width:var(--border-width);border-style:var(--border-style);border-color:var(--border-color);background:var(--background);-webkit-box-shadow:var(--box-shadow);box-shadow:var(--box-shadow);overflow:var(--overflow);z-index:10}.modal-shadow{position:absolute;background:transparent}@media only screen and (min-width: 768px) and (min-height: 600px){:host{--width:600px;--height:500px;--ion-safe-area-top:0px;--ion-safe-area-bottom:0px;--ion-safe-area-right:0px;--ion-safe-area-left:0px}}@media only screen and (min-width: 768px) and (min-height: 768px){:host{--width:600px;--height:600px}}.modal-handle{left:0px;right:0px;top:5px;border-radius:8px;margin-left:auto;margin-right:auto;position:absolute;width:36px;height:5px;-webkit-transform:translateZ(0);transform:translateZ(0);background:var(--ion-color-step-350, #c0c0be);z-index:11}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){.modal-handle{margin-left:unset;margin-right:unset;-webkit-margin-start:auto;margin-inline-start:auto;-webkit-margin-end:auto;margin-inline-end:auto}}:host(.modal-sheet){--height:calc(100% - (var(--ion-safe-area-top) + 10px))}:host(.modal-sheet) .modal-wrapper,:host(.modal-sheet) .modal-shadow{position:absolute;bottom:0}:host(:first-of-type){--backdrop-opacity:var(--ion-backdrop-opacity, 0.4)}@media only screen and (min-width: 768px) and (min-height: 600px){:host{--border-radius:10px}}.modal-wrapper{-webkit-transform:translate3d(0,  100%,  0);transform:translate3d(0,  100%,  0)}@media screen and (max-width: 767px){@supports (width: max(0px, 1px)){:host(.modal-card){--height:calc(100% - max(30px, var(--ion-safe-area-top)) - 10px)}}@supports not (width: max(0px, 1px)){:host(.modal-card){--height:calc(100% - 40px)}}:host(.modal-card) .modal-wrapper{border-top-left-radius:10px;border-top-right-radius:10px;border-bottom-right-radius:0;border-bottom-left-radius:0}:host-context([dir=rtl]):host(.modal-card) .modal-wrapper,:host-context([dir=rtl]).modal-card .modal-wrapper{border-top-left-radius:10px;border-top-right-radius:10px;border-bottom-right-radius:0;border-bottom-left-radius:0}:host(.modal-card){--backdrop-opacity:0;--width:100%;-ms-flex-align:end;align-items:flex-end}:host(.modal-card) .modal-shadow{display:none}:host(.modal-card) ion-backdrop{pointer-events:none}}@media screen and (min-width: 768px){:host(.modal-card){--width:calc(100% - 120px);--height:calc(100% - (120px + var(--ion-safe-area-top) + var(--ion-safe-area-bottom)));--max-width:720px;--max-height:1000px;--backdrop-opacity:0;--box-shadow:0px 0px 30px 10px rgba(0, 0, 0, 0.1);-webkit-transition:all 0.5s ease-in-out;transition:all 0.5s ease-in-out}:host(.modal-card) .modal-shadow{-webkit-box-shadow:var(--box-shadow);box-shadow:var(--box-shadow)}}:host(.modal-sheet) .modal-wrapper{border-top-left-radius:10px;border-top-right-radius:10px;border-bottom-right-radius:0;border-bottom-left-radius:0}:host-context([dir=rtl]):host(.modal-sheet) .modal-wrapper,:host-context([dir=rtl]).modal-sheet .modal-wrapper{border-top-left-radius:10px;border-top-right-radius:10px;border-bottom-right-radius:0;border-bottom-left-radius:0}",md:":host{--width:100%;--min-width:auto;--max-width:auto;--height:100%;--min-height:auto;--max-height:auto;--overflow:hidden;--border-radius:0;--border-width:0;--border-style:none;--border-color:transparent;--background:var(--ion-background-color, #fff);--box-shadow:none;--backdrop-opacity:0;left:0;right:0;top:0;bottom:0;display:-ms-flexbox;display:flex;position:absolute;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;outline:none;contain:strict;pointer-events:none}:host(.modal-interactive) .modal-wrapper,:host(.modal-interactive) ion-backdrop{pointer-events:auto}:host(.overlay-hidden){display:none}.modal-wrapper,.modal-shadow{border-radius:var(--border-radius);width:var(--width);min-width:var(--min-width);max-width:var(--max-width);height:var(--height);min-height:var(--min-height);max-height:var(--max-height);border-width:var(--border-width);border-style:var(--border-style);border-color:var(--border-color);background:var(--background);-webkit-box-shadow:var(--box-shadow);box-shadow:var(--box-shadow);overflow:var(--overflow);z-index:10}.modal-shadow{position:absolute;background:transparent}@media only screen and (min-width: 768px) and (min-height: 600px){:host{--width:600px;--height:500px;--ion-safe-area-top:0px;--ion-safe-area-bottom:0px;--ion-safe-area-right:0px;--ion-safe-area-left:0px}}@media only screen and (min-width: 768px) and (min-height: 768px){:host{--width:600px;--height:600px}}.modal-handle{left:0px;right:0px;top:5px;border-radius:8px;margin-left:auto;margin-right:auto;position:absolute;width:36px;height:5px;-webkit-transform:translateZ(0);transform:translateZ(0);background:var(--ion-color-step-350, #c0c0be);z-index:11}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){.modal-handle{margin-left:unset;margin-right:unset;-webkit-margin-start:auto;margin-inline-start:auto;-webkit-margin-end:auto;margin-inline-end:auto}}:host(.modal-sheet){--height:calc(100% - (var(--ion-safe-area-top) + 10px))}:host(.modal-sheet) .modal-wrapper,:host(.modal-sheet) .modal-shadow{position:absolute;bottom:0}:host(:first-of-type){--backdrop-opacity:var(--ion-backdrop-opacity, 0.32)}@media only screen and (min-width: 768px) and (min-height: 600px){:host{--border-radius:2px}:host(:first-of-type){--box-shadow:0 28px 48px rgba(0, 0, 0, 0.4)}}.modal-wrapper{-webkit-transform:translate3d(0,  40px,  0);transform:translate3d(0,  40px,  0);opacity:0.01}"}}}])}();