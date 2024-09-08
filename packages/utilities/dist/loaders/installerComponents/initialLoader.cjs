'use strict';

var React = require('react');
var Script = require('next/script');

function _interopDefault (e) { return e && e.__esModule ? e : { default: e }; }

var React__default = /*#__PURE__*/_interopDefault(React);
var Script__default = /*#__PURE__*/_interopDefault(Script);

// src/loaders/installerComponents/initialLoader.tsx
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
var RequireJsLoader = (props) => {
  return /* @__PURE__ */ React__default.default.createElement(
    Script__default.default,
    {
      id: "load-requireJs",
      src: "/utils/require.js",
      async: true,
      ...props
    }
  );
};
RequireJsLoader.displayName = "RequireJsLoader";
var RequireJsLoader_default = RequireJsLoader;
var SvgLatexLoader = () => {
  return /* @__PURE__ */ React__default.default.createElement(Script__default.default, { type: "module", id: "123" }, `import {LaTeXJSComponent} from "https://cdn.jsdelivr.net/npm/latex.js/dist/latex.mjs"
                    customElements.define("latex-js", LaTeXJSComponent)`);
};
SvgLatexLoader.displayName = "SvgLatexLoader";
var SvgLatexLoader_default = SvgLatexLoader;

// src/loaders/installerComponents/initialLoader.tsx
var InitialLoader = ({ requireJs = true, latex = true, mathjax = "all" }) => {
  return /* @__PURE__ */ React__default.default.createElement(React__default.default.Fragment, null, requireJs && /* @__PURE__ */ React__default.default.createElement(RequireJsLoader_default, null), latex && /* @__PURE__ */ React__default.default.createElement(SvgLatexLoader_default, null), /* @__PURE__ */ React__default.default.createElement(
    Mathjax_default,
    {
      type: mathjax
    }
  ));
};

exports.InitialLoader = InitialLoader;
//# sourceMappingURL=out.js.map
//# sourceMappingURL=initialLoader.cjs.map