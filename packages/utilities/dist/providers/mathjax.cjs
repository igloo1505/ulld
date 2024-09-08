"use client"
'use strict';

var betterReactMathjax = require('better-react-mathjax');
var React = require('react');

function _interopDefault (e) { return e && e.__esModule ? e : { default: e }; }

var React__default = /*#__PURE__*/_interopDefault(React);

var MathjaxProvider = ({ children, className }) => {
  return /* @__PURE__ */ React__default.default.createElement(
    betterReactMathjax.MathJaxContext,
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
    className ? /* @__PURE__ */ React__default.default.createElement("div", { className }, children) : children
  );
};
MathjaxProvider.displayName = "MathjaxProvider";
var mathjax_default = MathjaxProvider;

module.exports = mathjax_default;
//# sourceMappingURL=out.js.map

module.exports = exports.default;
//# sourceMappingURL=mathjax.cjs.map