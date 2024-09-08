'use strict';

var React = require('react');
var clsx = require('clsx');
var tailwindMerge = require('tailwind-merge');

function _interopDefault (e) { return e && e.__esModule ? e : { default: e }; }

var React__default = /*#__PURE__*/_interopDefault(React);

// src/components/settingPageUtils/settingPageSection.tsx
function cn(...inputs) {
  return tailwindMerge.twMerge(clsx.clsx(inputs));
}

// src/components/settingPageUtils/settingPageSection.tsx
var SettingPageSection = ({
  title,
  desc,
  children,
  classes
}) => {
  return /* @__PURE__ */ React__default.default.createElement("div", { className: "settings-section w-full h-fit" }, /* @__PURE__ */ React__default.default.createElement(
    "h2",
    {
      className: cn(
        "text-2xl font-semibold",
        !desc && "mb-4",
        classes?.title
      )
    },
    title
  ), desc && /* @__PURE__ */ React__default.default.createElement("div", { className: cn("text-muted text-sm mb-4", classes?.desc) }, desc), children);
};
SettingPageSection.displayName = "SettingPageSection";

exports.SettingPageSection = SettingPageSection;
//# sourceMappingURL=out.js.map
//# sourceMappingURL=settingPageSection.cjs.map