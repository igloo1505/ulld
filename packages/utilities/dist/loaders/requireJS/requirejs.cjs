'use strict';

var React = require('react');
var Script = require('next/script');

function _interopDefault (e) { return e && e.__esModule ? e : { default: e }; }

var React__default = /*#__PURE__*/_interopDefault(React);
var Script__default = /*#__PURE__*/_interopDefault(Script);

// src/loaders/requireJS/requirejs.tsx
var RequireJsLoader = (props) => {
  return /* @__PURE__ */ React__default.default.createElement(
    Script__default.default,
    {
      id: "load-requireJs",
      src: "/scripts/require.js",
      async: true,
      strategy: "lazyOnload",
      ...props
    }
  );
};
RequireJsLoader.displayName = "RequireJsLoader";

exports.RequireJsLoader = RequireJsLoader;
//# sourceMappingURL=out.js.map
//# sourceMappingURL=requirejs.cjs.map