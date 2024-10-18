"use client"
import '../chunk-T7KECS5U.mjs';
import { MathJaxContext } from 'better-react-mathjax';
import e from 'react';

var r={config:{tex:{inlineMath:[["$","$"]],displayMath:[["$$","$$"]]},startup:{ready:()=>{MathJax.startup.defaultReady(),MathJax.startup.promise.then(()=>{window.dispatchEvent(new CustomEvent("mathjax-loaded"));});}}},src:process.env.NODE_ENV==="production"?"https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-chtml.js":"/utils/tex-chtml.js",onLoad:()=>{window.dispatchEvent(new CustomEvent("mathjax-loaded")),console.log("Mathjax loaded...");}},o=({children:t,className:a})=>e.createElement(MathJaxContext,{...r},a?e.createElement("div",{className:a},t):t);o.displayName="MathjaxProvider";var h=o;

export { h as default, r as mathJaxOptions };
//# sourceMappingURL=out.js.map
//# sourceMappingURL=mathjax.mjs.map