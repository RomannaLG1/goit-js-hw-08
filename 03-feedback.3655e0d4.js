function e(e){return e&&e.__esModule?e.default:e}var t,n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},r=/^\s+|\s+$/g,i=/^[-+]0x[0-9a-f]+$/i,o=/^0b[01]+$/i,a=/^0o[0-7]+$/i,f=parseInt,u="object"==typeof n&&n&&n.Object===Object&&n,c="object"==typeof self&&self&&self.Object===Object&&self,l=u||c||Function("return this")(),d=Object.prototype.toString,s=Math.max,m=Math.min,p=function(){return l.Date.now()};function v(e,t,n){var r,i,o,a,f,u,c=0,l=!1,d=!1,v=!0;if("function"!=typeof e)throw new TypeError("Expected a function");function y(t){var n=r,o=i;return r=i=void 0,c=t,a=e.apply(o,n)}function S(e){return c=e,f=setTimeout(h,t),l?y(e):a}function x(e){var n=e-u;return void 0===u||n>=t||n<0||d&&e-c>=o}function h(){var e=p();if(x(e))return O(e);f=setTimeout(h,function(e){var n=t-(e-u);return d?m(n,o-(e-c)):n}(e))}function O(e){return f=void 0,v&&r?y(e):(r=i=void 0,a)}function j(){var e=p(),n=x(e);if(r=arguments,i=this,u=e,n){if(void 0===f)return S(u);if(d)return f=setTimeout(h,t),y(u)}return void 0===f&&(f=setTimeout(h,t)),a}return t=b(t)||0,g(n)&&(l=!!n.leading,o=(d="maxWait"in n)?s(b(n.maxWait)||0,t):o,v="trailing"in n?!!n.trailing:v),j.cancel=function(){void 0!==f&&clearTimeout(f),c=0,r=u=i=f=void 0},j.flush=function(){return void 0===f?a:O(p())},j}function g(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function b(e){if("number"==typeof e)return e;if(function(e){return"symbol"==typeof e||function(e){return!!e&&"object"==typeof e}(e)&&"[object Symbol]"==d.call(e)}(e))return NaN;if(g(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=g(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(r,"");var n=o.test(e);return n||a.test(e)?f(e.slice(2),n?2:8):i.test(e)?NaN:+e}t=function(e,t,n){var r=!0,i=!0;if("function"!=typeof e)throw new TypeError("Expected a function");return g(n)&&(r="leading"in n?!!n.leading:r,i="trailing"in n?!!n.trailing:i),v(e,t,{leading:r,maxWait:t,trailing:i})};const y={form:document.querySelector(".feedback-form"),input:document.querySelector(".feedback-form input"),textarea:document.querySelector(".feedback-form textarea"),button:document.querySelector(".feedback-form button")},S={};function x(){localStorage.setItem("feedback-form-state",JSON.stringify(S))}!function(){const e=JSON.parse(localStorage.getItem("feedback-form-state"));e&&(y.textarea.value=e.message||"",y.input.value=e.email||"")}(),y.form.addEventListener("submit",(function(e){if(e.preventDefault(),""===y.textarea.value||""===y.input.value)return alert("Dear Catherine, please fill in all the fields!");e.currentTarget.reset(),console.log(localStorage.getItem("feedback-form-state",JSON.stringify(S)))})),y.textarea.addEventListener("input",e(t)(x,500)),y.input.addEventListener("input",e(t)(x,500)),y.form.addEventListener("input",(e=>{S[e.target.name]=e.target.value,localStorage.setItem("feedback-form-state",JSON.stringify(S))}));
//# sourceMappingURL=03-feedback.3655e0d4.js.map
