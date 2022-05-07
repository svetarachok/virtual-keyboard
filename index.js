(()=>{"use strict";var e={Backquote:["`","ё","~","Ё"],Digit1:["1","1","!","!"],Digit2:["2","2","@",'"'],Digit3:["3","3","#","№"],Digit4:["4","4","$",";"],Digit5:["5","5","%","%"],Digit6:["6","6","^",":"],Digit7:["7","7","&","?"],Digit8:["8","8","*","*"],Digit9:["9","9","(","("],Digit0:["0","0",")",")"],Minus:["-","-","-","-"],Equal:["=","=","=","="],KeyQ:["q","й","Q","Й"],KeyW:["w","ц","W","Ц"],KeyE:["e","у","E","У"],KeyR:["r","к","R","К"],KeyT:["t","е","T","Е"],KeyY:["y","н","Y","Н"],KeyU:["u","г","U","Г"],KeyI:["i","ш","I","Ш"],KeyO:["o","щ","O","Щ"],KeyP:["p","з","P","З"],BracketLeft:["[","х","{","Х"],BracketRight:["]","ъ","}","Ъ"],Backslash:["\\","\\","|","/"],KeyA:["a","ф","A","Ф"],KeyS:["s","ы","S","Ы"],KeyD:["d","в","D","В"],KeyF:["f","а","F","А"],KeyG:["g","п","G","П"],KeyH:["h","р","H","Р"],KeyJ:["j","о","J","О"],KeyK:["k","л","K","Л"],KeyL:["l","д","L","Д"],Semicolon:[";","ж",":","Ж"],Quote:["'","э",'"',"Э"],KeyZ:["z","я","Z","Я"],KeyX:["x","ч","X","Ч"],KeyC:["c","с","C","С"],KeyV:["v","м","V","М"],KeyB:["b","и","B","И"],KeyN:["n","т","N","Т"],KeyM:["m","ь","M","Ь"],Comma:[",","б","<","Б"],Period:[".","ю",">","Ю"],Slash:["/",".","?",","]};function t(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}var r=function(){function e(t,r,n){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.key=t,this.code=r,this.ruKey=n}var r,n;return r=e,(n=[{key:"generateButton",value:function(){var e=document.createElement("button");return e.className="key key-k",e.setAttribute("data","".concat(this.code)),"ru"===localStorage.getItem("lang")?e.innerHTML="".concat(this.ruKey):e.innerHTML="".concat(this.key),"ArrowLeft"===this.key&&(e.classList.add("key-control"),e.classList.remove("key-k"),e.innerHTML="◄"),"ArrowRight"===this.key&&(e.classList.add("key-control"),e.classList.remove("key-k"),e.innerHTML="►"),"ArrowUp"===this.key&&(e.classList.add("key-control"),e.classList.remove("key-k"),e.innerHTML="▲"),"ArrowDown"===this.key&&(e.classList.add("key-control"),e.classList.remove("key-k"),e.innerHTML="▼"),e}}])&&t(r.prototype,n),Object.defineProperty(r,"prototype",{writable:!1}),e}();function n(e){return n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},n(e)}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function c(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function i(e,t){return i=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},i(e,t)}function a(e,t){if(t&&("object"===n(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function u(e){return u=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},u(e)}var y=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&i(e,t)}(l,e);var t,r,n,y,f=(n=l,y=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=u(n);if(y){var r=u(this).constructor;e=Reflect.construct(t,arguments,r)}else e=t.apply(this,arguments);return a(this,e)});function l(){return o(this,l),f.apply(this,arguments)}return t=l,(r=[{key:"generateSpacebar",value:function(){var e=document.createElement("button");return e.className="key spacebar",e.innerHTML='<span class="material-icons">space_bar</span>',e.setAttribute("data","".concat(this.code)),e}}])&&c(t.prototype,r),Object.defineProperty(t,"prototype",{writable:!1}),l}(r);function f(e){return f="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},f(e)}function l(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function s(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function d(e,t){return d=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},d(e,t)}function p(e,t){if(t&&("object"===f(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function k(e){return k=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},k(e)}var b=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&d(e,t)}(i,e);var t,r,n,o,c=(n=i,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=k(n);if(o){var r=k(this).constructor;e=Reflect.construct(t,arguments,r)}else e=t.apply(this,arguments);return p(this,e)});function i(){return l(this,i),c.apply(this,arguments)}return t=i,(r=[{key:"generateControlButton",value:function(){var e=document.createElement("button");return e.className="key key-control",e.innerHTML="".concat(this.key),e.setAttribute("data","".concat(this.code)),"Backspace"!==this.code&&"CapsLock"!==this.code&&"ShiftLeft"!==this.code&&"ShiftRight"!==this.code&&"Enter"!==this.code||e.classList.add("key-wide"),"Delete"===this.code&&e.classList.add("key-semiwide"),"ControlLeft"!==this.code&&"ControlRight"!==this.code||(e.innerHTML="Ctrl"),"MetaLeft"===this.code&&(e.classList.add("key-control"),e.innerHTML='<span class="material-icons">grid_view</span>'),e}}])&&s(t.prototype,r),Object.defineProperty(t,"prototype",{writable:!1}),i}(r);function h(e){return h="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},h(e)}function v(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function K(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function m(e,t){return m=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},m(e,t)}function g(e,t){if(t&&("object"===h(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function L(e){return L=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},L(e)}var w=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&m(e,t)}(i,e);var t,r,n,o,c=(n=i,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=L(n);if(o){var r=L(this).constructor;e=Reflect.construct(t,arguments,r)}else e=t.apply(this,arguments);return g(this,e)});function i(){return v(this,i),c.apply(this,arguments)}return t=i,(r=[{key:"generateCapsLock",value:function(){var e=document.createElement("button");return e.className="key capslock key-wide",e.innerHTML="".concat(this.key),e.setAttribute("data","".concat(this.code)),e}}])&&K(t.prototype,r),Object.defineProperty(t,"prototype",{writable:!1}),i}(r);function A(e,t){var r="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!r){if(Array.isArray(e)||(r=function(e,t){if(e){if("string"==typeof e)return S(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?S(e,t):void 0}}(e))||t&&e&&"number"==typeof e.length){r&&(e=r);var n=0,o=function(){};return{s:o,n:function(){return n>=e.length?{done:!0}:{done:!1,value:e[n++]}},e:function(e){throw e},f:o}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var c,i=!0,a=!1;return{s:function(){r=r.call(e)},n:function(){var e=r.next();return i=e.done,e},e:function(e){a=!0,c=e},f:function(){try{i||null==r.return||r.return()}finally{if(a)throw c}}}}function S(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}var O=function(e,t,r){var n=document.createElement("".concat(e));return n.className=t,n.textContent=r,n},T=O("textarea","textarea"),E=document.querySelector("body"),M=O("header","header","Rss Virtual Keyboard"),C=O("main","main"),j=O("div","input_wrapper"),D=O("div","keyboard_wrapper"),R=O("div","keyboard");window.addEventListener("DOMContentLoaded",(function(){T.focus()})),E.prepend(M),M.after(C),C.append(j),j.append(T),C.append(D),D.append(R);var P,H=["Backspace","Tab","Delete","Enter","ShiftLeft","ShiftRight","ControlLeft","MetaLeft","AltLeft","AltRight","ControlRight"];P=R,[{key:"`",ruKey:"ё",code:"Backquote"},{key:"1",ruKey:"1",code:"Digit1"},{key:"2",ruKey:"2",code:"Digit2"},{key:"3",ruKey:"3",code:"Digit3"},{key:"4",ruKey:"4",code:"Digit4"},{key:"5",ruKey:"5",code:"Digit5"},{key:"6",ruKey:"6",code:"Digit6"},{key:"7",ruKey:"7",code:"Digit7"},{key:"8",ruKey:"8",code:"Digit8"},{key:"9",ruKey:"9",code:"Digit9"},{key:"0",ruKey:"0",code:"Digit0"},{key:"-",ruKey:"-",code:"Minus"},{key:"=",ruKey:"=",code:"Equal"},{key:"Backspace",code:"Backspace"},{key:"Tab",code:"Tab"},{key:"q",ruKey:"й",code:"KeyQ"},{key:"w",ruKey:"ц",code:"KeyW"},{key:"e",ruKey:"у",code:"KeyE"},{key:"r",ruKey:"к",code:"KeyR"},{key:"t",ruKey:"е",code:"KeyT"},{key:"y",ruKey:"н",code:"KeyY"},{key:"u",ruKey:"г",code:"KeyU"},{key:"i",ruKey:"ш",code:"KeyI"},{key:"o",ruKey:"щ",code:"KeyO"},{key:"p",ruKey:"з",code:"KeyP"},{key:"[",ruKey:"х",code:"BracketLeft"},{key:"]",ruKey:"ъ",code:"BracketRight"},{key:"\\",ruKey:"\\",code:"Backslash"},{key:"Delete",code:"Delete"},{key:"CapsLock",code:"CapsLock"},{key:"a",ruKey:"ф",code:"KeyA"},{key:"s",ruKey:"ы",code:"KeyS"},{key:"d",ruKey:"в",code:"KeyD"},{key:"f",ruKey:"а",code:"KeyF"},{key:"g",ruKey:"п",code:"KeyG"},{key:"h",ruKey:"р",code:"KeyH"},{key:"j",ruKey:"о",code:"KeyJ"},{key:"k",ruKey:"л",code:"KeyK"},{key:"l",ruKey:"д",code:"KeyL"},{key:";",ruKey:"ж",code:"Semicolon"},{key:"'",ruKey:"э",code:"Quote"},{key:"Enter",code:"Enter"},{key:"Shift",code:"ShiftLeft"},{key:"z",ruKey:"я",code:"KeyZ"},{key:"x",ruKey:"ч",code:"KeyX"},{key:"c",ruKey:"с",code:"KeyC"},{key:"v",ruKey:"м",code:"KeyV"},{key:"b",ruKey:"и",code:"KeyB"},{key:"n",ruKey:"т",code:"KeyN"},{key:"m",ruKey:"ь",code:"KeyM"},{key:",",ruKey:"б",code:"Comma"},{key:".",ruKey:"ю",code:"Period"},{key:"/",ruKey:".",code:"Slash"},{key:"ArrowUp",code:"ArrowUp"},{key:"Shift",code:"ShiftRight"},{key:"Control",code:"ControlLeft"},{key:"Meta",code:"MetaLeft"},{key:"Alt",code:"AltLeft"},{key:" ",code:"Space"},{key:"Alt",code:"AltRight"},{key:"ArrowLeft",code:"ArrowLeft"},{key:"ArrowDown",code:"ArrowDown"},{key:"ArrowRight",code:"ArrowRight"},{key:"Control",code:"ControlRight"}].forEach((function(e){var t;return"Space"===e.code?(t=new y(e.key,e.code),P.append(t.generateSpacebar())):H.includes(e.code)?(t=new b(e.key,e.code),P.append(t.generateControlButton())):"CapsLock"===e.code?(t=new w(e.key,e.code),P.append(t.generateCapsLock())):(t=new r(e.key,e.code,e.ruKey),P.append(t.generateButton())),P}));var _=document.querySelectorAll(".key-k"),B=document.querySelector(".capslock"),x="en",q=function(e,t){if(t.focus(),"Space"===e.getAttribute("data"))t.value+=" ";else if("Backspace"===e.getAttribute("data"))t.setRangeText("",t.selectionStart-1,t.selectionEnd);else if("Delete"===e.getAttribute("data"))t.setRangeText("",t.selectionStart,t.selectionEnd+1);else if("Enter"===e.getAttribute("data"))t.value+="\n";else if("Tab"===e.getAttribute("data"))t.value+="\t";else{if(H.includes(e.getAttribute("data")))return t.value;if("CapsLock"===e.getAttribute("data"))return t.value;t.value+=e.innerHTML}return t.value},U=function(e,t){t.forEach((function(t){e.getModifierState("CapsLock")?t.innerHTML=t.innerHTML.toUpperCase():(t.innerHTML=t.innerHTML.toLowerCase(),B.classList.remove("active"))}))};document.addEventListener("keydown",(function(e){e.preventDefault();var t,r=A(document.querySelectorAll(".key"));try{for(r.s();!(t=r.n()).done;){var n=t.value;e.code===n.getAttribute("data")&&(n.classList.add("active"),q(n,T),U(e,_))}}catch(e){r.e(e)}finally{r.f()}})),document.addEventListener("keyup",(function(e){e.preventDefault();var t,r=A(document.querySelectorAll(".key"));try{for(r.s();!(t=r.n()).done;){var n=t.value;e.code===n.getAttribute("data")&&"CapsLock"!==n.innerHTML&&n.classList.remove("active")}}catch(e){r.e(e)}finally{r.f()}})),R.addEventListener("mousedown",(function(e){var t,r=A(document.querySelectorAll(".key"));try{for(r.s();!(t=r.n()).done;){var n=t.value;e.target.getAttribute("data")===n.getAttribute("data")&&(n.classList.add("active"),q(n,T))}}catch(e){r.e(e)}finally{r.f()}})),R.addEventListener("mouseup",(function(e){var t,r=A(document.querySelectorAll(".key"));try{for(r.s();!(t=r.n()).done;){var n=t.value;e.target.getAttribute("data")===n.getAttribute("data")&&n.classList.remove("active")}}catch(e){r.e(e)}finally{r.f()}})),B.addEventListener("click",(function(){_.forEach((function(e){return e.innerHTML.toUpperCase()!==e.innerHTML?(e.innerHTML=e.innerHTML.toUpperCase(),B.classList.add("active")):e.innerHTML=e.innerHTML.toLowerCase(),e.innerHTML}))})),document.addEventListener("keydown",(function(t){var r;t.shiftKey&&(r=e,_.forEach((function(e){e.innerHTML="ru"!==x?r[e.getAttribute("data")][2]:r[e.getAttribute("data")][3]})))})),document.addEventListener("keyup",(function(t){t.getModifierState("CapsLock")||_.forEach((function(t){t.innerHTML="ru"!==x?e[t.getAttribute("data")][0]:e[t.getAttribute("data")][1]}))})),document.addEventListener("keydown",(function(t){var r,n;t.ctrlKey&&"AltLeft"===t.code&&(x="en"===x?"ru":"en",localStorage.setItem("lang","".concat(x)),r=x,n=e,_.forEach((function(e){var t;t="ru"===r?n[e.getAttribute("data")][1]:n[e.getAttribute("data")][0],e.innerHTML=t})))}))})();
//# sourceMappingURL=index.js.map