import { cn } from '../../chunk-OIBBGULW.js';
import '../../chunk-F3FYYIAV.js';
import React from 'react';

var SettingPageSection = ({
  title,
  desc,
  children,
  classes
}) => {
  return /* @__PURE__ */ React.createElement("div", { className: "settings-section w-full h-fit" }, /* @__PURE__ */ React.createElement(
    "h2",
    {
      className: cn(
        "text-2xl font-semibold",
        !desc && "mb-4",
        classes?.title
      )
    },
    title
  ), desc && /* @__PURE__ */ React.createElement("div", { className: cn("text-muted text-sm mb-4", classes?.desc) }, desc), children);
};
SettingPageSection.displayName = "SettingPageSection";

export { SettingPageSection };
//# sourceMappingURL=out.js.map
//# sourceMappingURL=settingPageSection.js.map