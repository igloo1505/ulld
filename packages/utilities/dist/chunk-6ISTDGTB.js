import React from 'react';
import Script from 'next/script';

// src/loaders/installerComponents/Mathjax.tsx
var MathjaxSvgLoader = () => {
  console.log(`Loading Mathjax Svg`);
  return /* @__PURE__ */ React.createElement(
    Script,
    {
      id: "mathjax-script",
      src: "/utils/tex-mml-svg.js",
      strategy: "lazyOnload"
    }
  );
};
var MathjaxChtmlLoader = () => {
  console.log(`Loading Mathjax Chtml`);
  return /* @__PURE__ */ React.createElement(
    Script,
    {
      id: "mathjax-chtml-loader",
      src: "/utils/tex-chtml.js",
      strategy: "beforeInteractive"
    }
  );
};
var MathjaxConfigScript = () => {
  return /* @__PURE__ */ React.createElement(
    Script,
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
  return /* @__PURE__ */ React.createElement(React.Fragment, null, types.config && /* @__PURE__ */ React.createElement(MathjaxConfigScript, null), types.svg && /* @__PURE__ */ React.createElement(MathjaxSvgLoader, null), types.chtml && /* @__PURE__ */ React.createElement(MathjaxChtmlLoader, null));
};
MathjaxLoader.displayName = "MathjaxLoader";
var Mathjax_default = MathjaxLoader;

export { MathjaxChtmlLoader, MathjaxConfigScript, MathjaxLoader, MathjaxSvgLoader, Mathjax_default };
//# sourceMappingURL=out.js.map
//# sourceMappingURL=chunk-6ISTDGTB.js.map