'use strict';

var Script = require('next/script');
var React = require('react');

function _interopDefault (e) { return e && e.__esModule ? e : { default: e }; }

var Script__default = /*#__PURE__*/_interopDefault(Script);
var React__default = /*#__PURE__*/_interopDefault(React);

// src/loaders/installerComponents/RequireJsLoader.tsx
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

module.exports = RequireJsLoader_default;
//# sourceMappingURL=out.js.map

module.exports = exports.default;
//# sourceMappingURL=RequireJsLoader.cjs.map