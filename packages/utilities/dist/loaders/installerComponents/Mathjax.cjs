"use client"
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var Script = require('next/script');

function _interopDefault (e) { return e && e.__esModule ? e : { default: e }; }

var React__default = /*#__PURE__*/_interopDefault(React);
var Script__default = /*#__PURE__*/_interopDefault(Script);

var MathjaxSvgLoader = () => {
  console.log(`Loading Mathjax Svg`);
  return /* @__PURE__ */ React__default.default.createElement(
    Script__default.default,
    {
      id: "mathjax-script",
      src: "/utils/tex-mml-svg.js",
      strategy: "lazyOnload"
    }
  );
};
var MathjaxChtmlLoader = () => {
  console.log(`Loading Mathjax Chtml`);
  return /* @__PURE__ */ React__default.default.createElement(
    Script__default.default,
    {
      id: "mathjax-chtml-loader",
      src: "/utils/tex-chtml.js",
      strategy: "beforeInteractive"
    }
  );
};
var MathjaxConfigScript = () => {
  return /* @__PURE__ */ React__default.default.createElement(
    Script__default.default,
    {
      type: "text/x-mathjax-config",
      id: "mathjax-settings",
      strategy: "beforeInteractive"
    },
    `window.MathJax = {
 "HTML-CSS": {linebreaks: { automatic: true }},
  tex: {
    inlineMath: [['$', '$']]
  },
  menuSettings: {
    autocollapse: true
  },
  chtml: {
    minScale: 0.2,
    fontURL: "/font/mathjax",
  }
}`
  );
};
var MathjaxLoader = ({ type = "all" }) => {
  let types = {
    chtml: type === "all" ? true : type.includes("chtml"),
    svg: type === "all" ? true : type.includes("svg"),
    config: type === "all" ? true : type.includes("config")
  };
  return /* @__PURE__ */ React__default.default.createElement(React__default.default.Fragment, null, types.config && /* @__PURE__ */ React__default.default.createElement(MathjaxConfigScript, null), types.svg && /* @__PURE__ */ React__default.default.createElement(MathjaxSvgLoader, null), types.chtml && /* @__PURE__ */ React__default.default.createElement(MathjaxChtmlLoader, null));
};
MathjaxLoader.displayName = "MathjaxLoader";
var Mathjax_default = MathjaxLoader;

exports.MathjaxChtmlLoader = MathjaxChtmlLoader;
exports.MathjaxConfigScript = MathjaxConfigScript;
exports.MathjaxLoader = MathjaxLoader;
exports.MathjaxSvgLoader = MathjaxSvgLoader;
exports.default = Mathjax_default;
//# sourceMappingURL=out.js.map
//# sourceMappingURL=Mathjax.cjs.map