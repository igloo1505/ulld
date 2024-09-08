"use client"
import '../chunk-F3FYYIAV.js';
import { MathJaxContext } from 'better-react-mathjax';
import React from 'react';

var MathjaxProvider = ({ children, className }) => {
  return /* @__PURE__ */ React.createElement(
    MathJaxContext,
    {
      config: {
        tex: {
          inlineMath: [["$", "$"]],
          displayMath: [["$$", "$$"]]
        },
        startup: {
          ready: () => {
            MathJax.startup.defaultReady();
            MathJax.startup.promise.then(() => {
              window.dispatchEvent(new CustomEvent("mathjax-loaded"));
            });
          }
        }
      },
      src: process.env.NODE_ENV === "production" ? "https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-chtml.js" : "/utils/tex-chtml.js",
      onLoad: () => {
        window.dispatchEvent(new CustomEvent("mathjax-loaded"));
        console.log(`Mathjax loaded...`);
      }
    },
    className ? /* @__PURE__ */ React.createElement("div", { className }, children) : children
  );
};
MathjaxProvider.displayName = "MathjaxProvider";
var mathjax_default = MathjaxProvider;

export { mathjax_default as default };
//# sourceMappingURL=out.js.map
//# sourceMappingURL=mathjax.js.map