!function(n){var o={};function i(e){if(o[e])return o[e].exports;var t=o[e]={i:e,l:!1,exports:{}};return n[e].call(t.exports,t,t.exports,i),t.l=!0,t.exports}i.m=n,i.c=o,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)i.d(n,o,function(e){return t[e]}.bind(null,o));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="",i(i.s=0)}([function(e,t,n){n(7),e.exports=n(6)},function(e,t){if(/MSIE \d|Trident.*rv:/.test(navigator.userAgent)){var n=document.getElementById("iePolyFills");n.setAttribute("async","async"),n.setAttribute("src","https://unpkg.com/element-closest/browser")}!function(){if("function"==typeof NodeList.prototype.forEach)return;NodeList.prototype.forEach=Array.prototype.forEach}()},function(e,t){function c(e){return"function"==typeof e||"[object Function]"===n.call(e)}function u(e){var t,n=(t=Number(e),isNaN(t)?0:0!==t&&isFinite(t)?(0<t?1:-1)*Math.floor(Math.abs(t)):t);return Math.min(Math.max(n,0),o)}var n,o;Array.from||(Array.from=(n=Object.prototype.toString,o=Math.pow(2,53)-1,function(e,t,n){var o=Object(e);if(null==e)throw new TypeError("Array.from requires an array-like object - not null or undefined");var i,a=1<arguments.length?t:void 0;if(void 0!==a){if(!c(a))throw new TypeError("Array.from: when provided, the second argument must be a function");2<arguments.length&&(i=n)}for(var r,s=u(o.length),d=c(this)?Object(new this(s)):new Array(s),l=0;l<s;)r=o[l],d[l]=a?void 0===i?a(r,l):a.call(i,r,l):r,l+=1;return d.length=s,d}))},function(e,t,n){"use strict";for(var o=0,i=document.getElementsByClassName("accordion__input"),a=function(){var e=this.getAttribute("aria-expanded"),t=(this.previousElementSibling,document.getElementsByClassName("accordion__input--single"));Array.prototype.forEach.call(t,function(e){e.nextElementSibling.setAttribute("aria-expanded","false"),e.nextElementSibling.nextElementSibling.setAttribute("aria-hidden","true")}),"true"===e?(this.setAttribute("aria-expanded","false"),this.nextElementSibling.setAttribute("aria-hidden","true"),this.parentElement.querySelector(".accordion__content").setAttribute("aria-hidden","true")):(this.parentElement.querySelector(".accordion__content").setAttribute("aria-hidden","false"),this.setAttribute("aria-expanded","true"),this.nextElementSibling.setAttribute("aria-hidden","false"))};o<i.length;o++)i[o].addEventListener("click",a,!1);for(var r=0,s=document.getElementsByClassName("accordion__input"),d=function(){for(var e=this.checked,t=document.getElementsByClassName("accordion__input--single"),n=0;n<t.length;n++)t[n].checked=!1;e&&(this.checked=!0)};r<s.length;r++)s[r].addEventListener("change",d,!1)},function(e,t){document.querySelector(".c-alert");if(document.querySelector(".c-alert button")){for(var n=document.querySelectorAll(".c-alert button"),o=0;o<n.length;o++)n[o].addEventListener("click",i);function i(){this.parentNode.remove()}}},function(e,t){var n=document.querySelector(".u-block--alert"),o=document.querySelector(".u-block--alert button");if(n){n.offsetTop;o&&o.addEventListener("click",function(){n.parentNode.removeChild(n)},!1)}},function(e,t,n){"use strict";n.r(t),t.default=n.p+"0.16.3/rds-cu.css"},function(e,t,n){"use strict";n.r(t);n(1),n(2),n(3),n(4);function o(n){n.map(function(e){e.addEventListener("click",function(e){var t=e.target.getAttribute("aria-expanded");e.currentTarget.parentNode.parentNode.parentNode.classList.contains("c-nav--topnav")&&n.map(function(e){e.parentNode.classList.remove("open"),e.setAttribute("aria-expanded",!1)}),"false"===t?(e.target.setAttribute("aria-expanded",!0),e.target.parentNode.classList.add("open")):(e.target.setAttribute("aria-expanded",!1),e.target.parentNode.classList.remove("open"))})})}var i,a=document.querySelector(".nav__expand button"),r=document.querySelectorAll(".c-nav--sidenav .has-submenu button"),s=Array.from(r),d=document.querySelector(".c-nav--topnav"),l=document.querySelector(".masthead__actions"),c=document.querySelectorAll(".c-nav--topnav .has-submenu button"),u=Array.from(c),h=document.querySelectorAll(".masthead__actions .has-submenu button"),m=Array.from(h);c&&o(u),h&&o(m),r&&a&&(o(s),a.addEventListener("click",function(e){var t=e.currentTarget,n=t.querySelector("span");"false"===(i=t.getAttribute("data-expanded"))?(n.textContent="Collapse All",t.setAttribute("data-expanded",!0),t.classList.add("nav__expand--open")):(n.textContent="Expand All",t.setAttribute("data-expanded",!1),t.classList.remove("nav__expand--open")),s.map(function(e){"false"===i?(e.setAttribute("aria-expanded",!0),e.parentNode.classList.add("open")):(e.setAttribute("aria-expanded",!1),e.parentNode.classList.remove("open"))})}));n(5);var p=window.CustomEvent;function f(e){for(;e;){if("dialog"===e.localName)return e;e=e.parentElement}return null}function g(e){e&&e.blur&&e!==document.body&&e.blur()}function v(e,t){for(var n=0;n<e.length;++n)if(e[n]===t)return!0;return!1}function y(e){return!(!e||!e.hasAttribute("method"))&&"dialog"===e.getAttribute("method").toLowerCase()}function b(n){if(this.dialog_=n,this.replacedStyleTop_=!1,this.openAsModal_=!1,n.hasAttribute("role")||n.setAttribute("role","dialog"),n.show=this.show.bind(this),n.showModal=this.showModal.bind(this),n.close=this.close.bind(this),"returnValue"in n||(n.returnValue=""),"MutationObserver"in window){new MutationObserver(this.maybeHideModal.bind(this)).observe(n,{attributes:!0,attributeFilter:["open"]})}else{var o,i=!1,a=function(){i?this.downgradeModal():this.maybeHideModal(),i=!1}.bind(this),t=function(e){if(e.target===n){var t="DOMNodeRemoved";i|=e.type.substr(0,t.length)===t,window.clearTimeout(o),o=window.setTimeout(a,0)}};["DOMAttrModified","DOMNodeRemoved","DOMNodeRemovedFromDocument"].forEach(function(e){n.addEventListener(e,t)})}Object.defineProperty(n,"open",{set:this.setOpen.bind(this),get:n.hasAttribute.bind(n,"open")}),this.backdrop_=document.createElement("div"),this.backdrop_.className="backdrop",this.backdrop_.addEventListener("click",this.backdropClick_.bind(this))}p&&"object"!=typeof p||((p=function(e,t){t=t||{};var n=document.createEvent("CustomEvent");return n.initCustomEvent(e,!!t.bubbles,!!t.cancelable,t.detail||null),n}).prototype=window.Event.prototype),b.prototype={get dialog(){return this.dialog_},maybeHideModal:function(){this.dialog_.hasAttribute("open")&&document.body.contains(this.dialog_)||this.downgradeModal()},downgradeModal:function(){this.openAsModal_&&(this.openAsModal_=!1,this.dialog_.style.zIndex="",this.replacedStyleTop_&&(this.dialog_.style.top="",this.replacedStyleTop_=!1),this.backdrop_.parentNode&&this.backdrop_.parentNode.removeChild(this.backdrop_),_.dm.removeDialog(this))},setOpen:function(e){e?this.dialog_.hasAttribute("open")||this.dialog_.setAttribute("open",""):(this.dialog_.removeAttribute("open"),this.maybeHideModal())},backdropClick_:function(e){if(this.dialog_.hasAttribute("tabindex"))this.dialog_.focus();else{var t=document.createElement("div");this.dialog_.insertBefore(t,this.dialog_.firstChild),t.tabIndex=-1,t.focus(),this.dialog_.removeChild(t)}var n=document.createEvent("MouseEvents");n.initMouseEvent(e.type,e.bubbles,e.cancelable,window,e.detail,e.screenX,e.screenY,e.clientX,e.clientY,e.ctrlKey,e.altKey,e.shiftKey,e.metaKey,e.button,e.relatedTarget),this.dialog_.dispatchEvent(n),e.stopPropagation()},focus_:function(){var e=this.dialog_.querySelector("[autofocus]:not([disabled])");if(!e&&0<=this.dialog_.tabIndex&&(e=this.dialog_),!e){var t=["button","input","keygen","select","textarea"].map(function(e){return e+":not([disabled])"});t.push('[tabindex]:not([disabled]):not([tabindex=""])'),e=this.dialog_.querySelector(t.join(", "))}g(document.activeElement),e&&e.focus()},updateZIndex:function(e,t){if(e<t)throw new Error("dialogZ should never be < backdropZ");this.dialog_.style.zIndex=e,this.backdrop_.style.zIndex=t},show:function(){this.dialog_.open||(this.setOpen(!0),this.focus_())},showModal:function(){if(this.dialog_.hasAttribute("open"))throw new Error("Failed to execute 'showModal' on dialog: The element is already open, and therefore cannot be opened modally.");if(!document.body.contains(this.dialog_))throw new Error("Failed to execute 'showModal' on dialog: The element is not in a Document.");if(!_.dm.pushDialog(this))throw new Error("Failed to execute 'showModal' on dialog: There are too many open modal dialogs.");!function(e){for(;e&&e!==document.body;){var n=window.getComputedStyle(e),t=function(e,t){return!(void 0===n[e]||n[e]===t)};if(n.opacity<1||t("zIndex","auto")||t("transform","none")||t("mixBlendMode","normal")||t("filter","none")||t("perspective","none")||"isolate"===n.isolation||"fixed"===n.position||"touch"===n.webkitOverflowScrolling)return!0;e=e.parentElement}return!1}(this.dialog_.parentElement)||console.warn("A dialog is being shown inside a stacking context. This may cause it to be unusable. For more information, see this link: https://github.com/GoogleChrome/dialog-polyfill/#stacking-context"),this.setOpen(!0),this.openAsModal_=!0,_.needsCentering(this.dialog_)?(_.reposition(this.dialog_),this.replacedStyleTop_=!0):this.replacedStyleTop_=!1,this.dialog_.parentNode.insertBefore(this.backdrop_,this.dialog_.nextSibling),this.focus_()},close:function(e){if(!this.dialog_.hasAttribute("open"))throw new Error("Failed to execute 'close' on dialog: The element does not have an 'open' attribute, and therefore cannot be closed.");this.setOpen(!1),void 0!==e&&(this.dialog_.returnValue=e);var t=new p("close",{bubbles:!1,cancelable:!1});this.dialog_.dispatchEvent(t)}};var _={reposition:function(e){var t=document.body.scrollTop||document.documentElement.scrollTop,n=t+(window.innerHeight-e.offsetHeight)/2;e.style.top=Math.max(t,n)+"px"},isInlinePositionSetByStylesheet:function(e){for(var t=0;t<document.styleSheets.length;++t){var n=document.styleSheets[t],o=null;try{o=n.cssRules}catch(e){}if(o)for(var i=0;i<o.length;++i){var a=o[i],r=null;try{r=document.querySelectorAll(a.selectorText)}catch(e){}if(r&&v(r,e)){var s=a.style.getPropertyValue("top"),d=a.style.getPropertyValue("bottom");if(s&&"auto"!==s||d&&"auto"!==d)return!0}}}return!1},needsCentering:function(e){return"absolute"===window.getComputedStyle(e).position&&(!("auto"!==e.style.top&&""!==e.style.top||"auto"!==e.style.bottom&&""!==e.style.bottom)&&!_.isInlinePositionSetByStylesheet(e))},forceRegisterDialog:function(e){if((window.HTMLDialogElement||e.showModal)&&console.warn("This browser already supports <dialog>, the polyfill may not work correctly",e),"dialog"!==e.localName)throw new Error("Failed to register dialog: The element is not a dialog.");new b(e)},registerDialog:function(e){e.showModal||_.forceRegisterDialog(e)},DialogManager:function(){this.pendingDialogStack=[];var t=this.checkDOM_.bind(this);this.overlay=document.createElement("div"),this.overlay.className="_dialog_overlay",this.overlay.addEventListener("click",function(e){this.forwardTab_=void 0,e.stopPropagation(),t([])}.bind(this)),this.handleKey_=this.handleKey_.bind(this),this.handleFocus_=this.handleFocus_.bind(this),this.zIndexLow_=1e5,this.zIndexHigh_=100150,this.forwardTab_=void 0,"MutationObserver"in window&&(this.mo_=new MutationObserver(function(e){var o=[];e.forEach(function(e){for(var t,n=0;t=e.removedNodes[n];++n)t instanceof Element&&("dialog"===t.localName&&o.push(t),o=o.concat(t.querySelectorAll("dialog")))}),o.length&&t(o)}))}};if(_.DialogManager.prototype.blockDocument=function(){document.documentElement.addEventListener("focus",this.handleFocus_,!0),document.addEventListener("keydown",this.handleKey_),this.mo_&&this.mo_.observe(document,{childList:!0,subtree:!0})},_.DialogManager.prototype.unblockDocument=function(){document.documentElement.removeEventListener("focus",this.handleFocus_,!0),document.removeEventListener("keydown",this.handleKey_),this.mo_&&this.mo_.disconnect()},_.DialogManager.prototype.updateStacking=function(){for(var e,t=this.zIndexHigh_,n=0;e=this.pendingDialogStack[n];++n)e.updateZIndex(--t,--t),0===n&&(this.overlay.style.zIndex=--t);var o=this.pendingDialogStack[0];o?(o.dialog.parentNode||document.body).appendChild(this.overlay):this.overlay.parentNode&&this.overlay.parentNode.removeChild(this.overlay)},_.DialogManager.prototype.containedByTopDialog_=function(e){for(;e=f(e);){for(var t,n=0;t=this.pendingDialogStack[n];++n)if(t.dialog===e)return 0===n;e=e.parentElement}return!1},_.DialogManager.prototype.handleFocus_=function(e){if(!this.containedByTopDialog_(e.target)&&document.activeElement!==document.documentElement&&(e.preventDefault(),e.stopPropagation(),g(e.target),void 0!==this.forwardTab_)){var t=this.pendingDialogStack[0];return t.dialog.compareDocumentPosition(e.target)&Node.DOCUMENT_POSITION_PRECEDING&&(this.forwardTab_?t.focus_():e.target!==document.documentElement&&document.documentElement.focus()),!1}},_.DialogManager.prototype.handleKey_=function(e){if(this.forwardTab_=void 0,27===e.keyCode){e.preventDefault(),e.stopPropagation();var t=new p("cancel",{bubbles:!1,cancelable:!0}),n=this.pendingDialogStack[0];n&&n.dialog.dispatchEvent(t)&&n.dialog.close()}else 9===e.keyCode&&(this.forwardTab_=!e.shiftKey)},_.DialogManager.prototype.checkDOM_=function(t){this.pendingDialogStack.slice().forEach(function(e){-1!==t.indexOf(e.dialog)?e.downgradeModal():e.maybeHideModal()})},_.DialogManager.prototype.pushDialog=function(e){var t=(this.zIndexHigh_-this.zIndexLow_)/2-1;return!(this.pendingDialogStack.length>=t)&&(1===this.pendingDialogStack.unshift(e)&&this.blockDocument(),this.updateStacking(),!0)},_.DialogManager.prototype.removeDialog=function(e){var t=this.pendingDialogStack.indexOf(e);-1!==t&&(this.pendingDialogStack.splice(t,1),0===this.pendingDialogStack.length&&this.unblockDocument(),this.updateStacking())},_.dm=new _.DialogManager,_.formSubmitter=null,_.useValue=null,void 0===window.HTMLDialogElement){var w=document.createElement("form");if(w.setAttribute("method","dialog"),"dialog"!==w.method){var E=Object.getOwnPropertyDescriptor(HTMLFormElement.prototype,"method");if(E){var S=E.get;E.get=function(){return y(this)?"dialog":S.call(this)};var A=E.set;E.set=function(e){return"string"==typeof e&&"dialog"===e.toLowerCase()?this.setAttribute("method",e):A.call(this,e)},Object.defineProperty(HTMLFormElement.prototype,"method",E)}}document.addEventListener("click",function(e){if(_.formSubmitter=null,_.useValue=null,!e.defaultPrevented){var t=e.target;if(t&&y(t.form)){if(!("submit"===t.type&&-1<["button","input"].indexOf(t.localName))){if("input"!==t.localName||"image"!==t.type)return;_.useValue=e.offsetX+","+e.offsetY}f(t)&&(_.formSubmitter=t)}}},!1);var k=HTMLFormElement.prototype.submit;HTMLFormElement.prototype.submit=function(){if(!y(this))return k.call(this);var e=f(this);e&&e.close()},document.addEventListener("submit",function(e){var t=e.target;if(y(t)){e.preventDefault();var n=f(t);if(n){var o=_.formSubmitter;o&&o.form===t?n.close(_.useValue||o.value):n.close(),_.formSubmitter=null}}},!0)}var L,x,M=0,D=document.querySelector("body"),N=document.querySelector("#id-masthead"),T=document.querySelector(".c-nav--topnav"),q=document.querySelector(".b-masthead nav"),C=document.querySelector(".c-nav--topnav ul"),O=document.querySelector(".masthead__actions"),I=document.querySelector(".c-nav--sidenav"),P=document.querySelector(".b-menu--sidenav"),F=document.querySelector(".c-navicon");null!==O&&(x=O.querySelectorAll('li[class*="masthead__"]'));function j(){if(T){var e=T.offsetWidth+800,t=F.parentNode.classList;window.innerWidth<=e||window.innerWidth<=960?(U.appendChild(T),Array.from(C.querySelectorAll(".has-submenu")).map(function(e){"false"===e.firstElementChild.getAttribute("aria-disabled")?(e.firstElementChild.setAttribute("aria-disabled",!0),e.firstElementChild.setAttribute("aria-expanded",!0)):(e.firstElementChild.setAttribute("aria-disabled",!1),e.firstElementChild.setAttribute("aria-expanded",!1)),e.classList.remove("c-menupopup"),e.classList.add("open")}),t.remove("u-hide-l")):(t.add("u-hide-l"),Array.from(C.querySelectorAll(".has-submenu")).map(function(e){e.classList.remove("open"),e.classList.add("c-menupopup")}),q.appendChild(T))}}function H(){I&&(window.innerWidth<=760?Q:$)()}function B(e){var t=document.querySelector(".modal__".concat(e));G.style.display="block",G.setAttribute("aria-hidden",!1),Array.from(x).map(function(e){return e.classList.add("u-visually-hidden")}),t.classList.remove("u-visually-hidden"),Z.classList.remove("u-visually-hidden")}function z(){if(G.style.display="none",G.setAttribute("aria-hidden",!0),Array.from(x).map(function(e){return e.classList.remove("u-visually-hidden")}),Z.classList.add("u-visually-hidden"),X&&Y&&(X.classList.add("u-visually-hidden"),Y.classList.remove("u-visually-hidden")),J&&W&&(J.classList.add("u-visually-hidden"),W.classList.remove("u-visually-hidden")),U){if(U.classList.add("u-visually-hidden"),!F)return;F.classList.remove("u-visually-hidden")}}function R(){window.addEventListener("scroll",function(){!function(){window.scrollY,L=window.pageYOffset||document.documentElement.scrollTop;var e=G.getAttribute("aria-hidden");M<L&&V<L&&"true"===e?(N.classList.add("u-visually-hidden"),D.classList.remove("u-masthead-sticky")):(N.classList.remove("u-visually-hidden"),D.classList.add("u-masthead-sticky")),M=L<=0?0:L}()},!1)}function K(){window.addEventListener("load",function(){j(),H(),d&&c&&(document.addEventListener("click",function(e){d.contains(e.target)&&"Escape"!==e.key||u.map(function(e){e.parentNode.classList.remove("open"),e.setAttribute("aria-expanded",!1)}),l.contains(e.target)&&"Escape"!==e.key||m.map(function(e){e.parentNode.classList.remove("open"),e.setAttribute("aria-expanded",!1)})}),document.addEventListener("keydown",function(e){var t=u.concat(m);"Escape"===e.key&&t.map(function(e){e.parentNode.classList.remove("open"),e.setAttribute("aria-expanded",!1)})}))},!1)}var V=N.offsetHeight,Y=document.querySelector(".masthead__search"),W=document.querySelector(".masthead__login"),Z=document.querySelector(".masthead__close-modals"),G=document.querySelector(".l-overlay-modal"),U=document.querySelector(".modal__menu"),X=document.querySelector(".modal__search"),J=document.querySelector(".modal__login"),Q=(document.querySelector("input.searchform__input"),function(){U.appendChild(I)}),$=function(){1<U.childNodes.length&&P.appendChild(I)};(function(){var e;N&&(R(),e=!0,window.addEventListener("resize",function(){e&&(e=!1,setTimeout(function(){j(),H(),e=!0},500))},!1),K(),Y&&Y.addEventListener("click",function(e){B("search"),document.querySelector(".searchform__input").focus()}),W&&W.addEventListener("click",function(){B("login")},!1),Z&&(Z.addEventListener("click",function(){z()},!1),F&&F.addEventListener("click",function(){B("menu")},!1)),window.addEventListener("keydown",function(e){"Escape"===e.key&&z()}))})();var ee=["ArrowUp","ArrowUp","ArrowDown","ArrowDown","ArrowLeft","ArrowRight","ArrowLeft","ArrowRight","b","a"],te=0;document.addEventListener("keydown",function(e){ee.indexOf(e.key)<0||e.key!==ee[te]?te=0:(te++,ee.length===te&&(te=0,window.location.href="https://www.youtube.com/watch?v=RRwqftGrxf4"))},!1)}]);