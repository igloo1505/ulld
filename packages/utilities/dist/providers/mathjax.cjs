"use client"
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

require('../chunk-7ARU3YXQ.cjs');
var betterReactMathjax = require('better-react-mathjax');
var e = require('react');

function _interopDefault (e) { return e && e.__esModule ? e : { default: e }; }

var e__default = /*#__PURE__*/_interopDefault(e);

var r={config:{tex:{inlineMath:[["$","$"]],displayMath:[["$$","$$"]]},startup:{ready:()=>{MathJax.startup.defaultReady(),MathJax.startup.promise.then(()=>{window.dispatchEvent(new CustomEvent("mathjax-loaded"));});}}},src:process.env.NODE_ENV==="production"?"https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-chtml.js":"/utils/tex-chtml.js",onLoad:()=>{window.dispatchEvent(new CustomEvent("mathjax-loaded")),console.log("Mathjax loaded...");}},o=({children:t,className:a})=>e__default.default.createElement(betterReactMathjax.MathJaxContext,{...r},a?e__default.default.createElement("div",{className:a},t):t);o.displayName="MathjaxProvider";var h=o;

exports.default = h;
exports.mathJaxOptions = r;
//# sourceMappingURL=out.js.map
//# sourceMappingURL=mathjax.cjs.map