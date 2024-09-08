'use strict';

var Script = require('next/script');
var React = require('react');

function _interopDefault (e) { return e && e.__esModule ? e : { default: e }; }

var Script__default = /*#__PURE__*/_interopDefault(Script);
var React__default = /*#__PURE__*/_interopDefault(React);

// src/loaders/installerComponents/SvgLatexLoader.tsx
var SvgLatexLoader = () => {
  return /* @__PURE__ */ React__default.default.createElement(Script__default.default, { type: "module", id: "123" }, `import {LaTeXJSComponent} from "https://cdn.jsdelivr.net/npm/latex.js/dist/latex.mjs"
                    customElements.define("latex-js", LaTeXJSComponent)`);
};
SvgLatexLoader.displayName = "SvgLatexLoader";
var SvgLatexLoader_default = SvgLatexLoader;

module.exports = SvgLatexLoader_default;
//# sourceMappingURL=out.js.map

module.exports = exports.default;
//# sourceMappingURL=SvgLatexLoader.cjs.map