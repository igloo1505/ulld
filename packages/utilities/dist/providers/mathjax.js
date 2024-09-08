"use client"
import '../chunk-GQSCBKA6.js';
import { MathJaxContext } from 'better-react-mathjax';
import e from 'react';

var o=({children:t,className:a})=>e.createElement(MathJaxContext,{config:{tex:{inlineMath:[["$","$"]],displayMath:[["$$","$$"]]},startup:{ready:()=>{MathJax.startup.defaultReady(),MathJax.startup.promise.then(()=>{window.dispatchEvent(new CustomEvent("mathjax-loaded"));});}}},src:process.env.NODE_ENV==="production"?"https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-chtml.js":"/utils/tex-chtml.js",onLoad:()=>{window.dispatchEvent(new CustomEvent("mathjax-loaded")),console.log("Mathjax loaded...");}},a?e.createElement("div",{className:a},t):t);o.displayName="MathjaxProvider";var i=o;

export { i as default };
//# sourceMappingURL=out.js.map
//# sourceMappingURL=mathjax.js.map