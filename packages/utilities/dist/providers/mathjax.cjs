"use client"
'use strict';

require('../chunk-7ARU3YXQ.cjs');
var betterReactMathjax = require('better-react-mathjax');
var e = require('react');

function _interopDefault (e) { return e && e.__esModule ? e : { default: e }; }

var e__default = /*#__PURE__*/_interopDefault(e);

var o=({children:t,className:a})=>e__default.default.createElement(betterReactMathjax.MathJaxContext,{config:{tex:{inlineMath:[["$","$"]],displayMath:[["$$","$$"]]},startup:{ready:()=>{MathJax.startup.defaultReady(),MathJax.startup.promise.then(()=>{window.dispatchEvent(new CustomEvent("mathjax-loaded"));});}}},src:process.env.NODE_ENV==="production"?"https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-chtml.js":"/utils/tex-chtml.js",onLoad:()=>{window.dispatchEvent(new CustomEvent("mathjax-loaded")),console.log("Mathjax loaded...");}},a?e__default.default.createElement("div",{className:a},t):t);o.displayName="MathjaxProvider";var i=o;

module.exports = i;
//# sourceMappingURL=out.js.map

module.exports = exports.default;
//# sourceMappingURL=mathjax.cjs.map