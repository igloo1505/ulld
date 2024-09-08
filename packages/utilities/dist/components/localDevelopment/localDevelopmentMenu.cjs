'use strict';

var React = require('react');
var Link = require('next/link');

function _interopDefault (e) { return e && e.__esModule ? e : { default: e }; }

var React__default = /*#__PURE__*/_interopDefault(React);
var Link__default = /*#__PURE__*/_interopDefault(Link);

// src/components/localDevelopment/localDevelopmentMenu.tsx
var LocalDevelopmentMenu = ({ items }) => {
  return /* @__PURE__ */ React__default.default.createElement(
    "div",
    {
      className: "grid",
      style: {
        gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))"
      }
    },
    items.map(({ href, label, ...itemProps }) => {
      return /* @__PURE__ */ React__default.default.createElement(
        Link__default.default,
        {
          key: href,
          href,
          ...itemProps,
          className: "w-full h-[80px] rounded-lg bg-primary text-primary-foreground text-xl flex flex-col justify-center items-center"
        },
        label
      );
    })
  );
};
LocalDevelopmentMenu.displayName = "LocalDevelopmentMenu";
var localDevelopmentMenu_default = LocalDevelopmentMenu;

module.exports = localDevelopmentMenu_default;
//# sourceMappingURL=out.js.map

module.exports = exports.default;
//# sourceMappingURL=localDevelopmentMenu.cjs.map