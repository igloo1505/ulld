'use strict';

var Script = require('next/script');
var React = require('react');

function _interopDefault (e) { return e && e.__esModule ? e : { default: e }; }

var Script__default = /*#__PURE__*/_interopDefault(Script);
var React__default = /*#__PURE__*/_interopDefault(React);

// src/loaders/installerComponents/TikzLoader.tsx
var TikzLoader = () => {
  return /* @__PURE__ */ React__default.default.createElement(React__default.default.Fragment, null, /* @__PURE__ */ React__default.default.createElement("link", { rel: "stylesheet", type: "text/css", href: "https://tikzjax.com/v1/fonts.css" }), /* @__PURE__ */ React__default.default.createElement(
    Script__default.default,
    {
      src: "https://tikzjax.com/v1/tikzjax.js",
      async: true,
      strategy: "afterInteractive"
    }
  ));
};
TikzLoader.displayName = "TikzLoader";
var TikzLoader_default = TikzLoader;

module.exports = TikzLoader_default;
//# sourceMappingURL=out.js.map

module.exports = exports.default;
//# sourceMappingURL=TikzLoader.cjs.map