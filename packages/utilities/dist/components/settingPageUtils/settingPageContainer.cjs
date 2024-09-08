'use strict';

var React = require('react');
var clsx = require('clsx');
var tailwindMerge = require('tailwind-merge');

function _interopDefault (e) { return e && e.__esModule ? e : { default: e }; }

var React__default = /*#__PURE__*/_interopDefault(React);

// src/components/settingPageUtils/settingPageContainer.tsx
function cn(...inputs) {
  return tailwindMerge.twMerge(clsx.clsx(inputs));
}

// src/components/settingPageUtils/settingPageContainer.tsx
var SettingPageContainer = ({
  children,
  title,
  className
}) => {
  return /* @__PURE__ */ React__default.default.createElement("div", { className: cn("@container/settings-container space-y-6", className) }, title && /* @__PURE__ */ React__default.default.createElement("h1", { className: "text-4xl font-bold border-b rounded pb-4 w-fit sm:pr-8" }, title), children);
};
SettingPageContainer.displayName = "SettingPageContainer";

exports.SettingPageContainer = SettingPageContainer;
//# sourceMappingURL=out.js.map
//# sourceMappingURL=settingPageContainer.cjs.map