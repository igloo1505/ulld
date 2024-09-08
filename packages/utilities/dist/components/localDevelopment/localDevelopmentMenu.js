import '../../chunk-F3FYYIAV.js';
import React from 'react';
import Link from 'next/link';

var LocalDevelopmentMenu = ({ items }) => {
  return /* @__PURE__ */ React.createElement(
    "div",
    {
      className: "grid",
      style: {
        gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))"
      }
    },
    items.map(({ href, label, ...itemProps }) => {
      return /* @__PURE__ */ React.createElement(
        Link,
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

export { localDevelopmentMenu_default as default };
//# sourceMappingURL=out.js.map
//# sourceMappingURL=localDevelopmentMenu.js.map