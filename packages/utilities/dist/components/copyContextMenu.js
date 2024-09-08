"use client"
import { removeMathDollarSigns } from '../chunk-GDREHGTT.js';
import '../chunk-DPAK46T2.js';
import { cn } from '../chunk-OIBBGULW.js';
import { copyStringToClipboard } from '../chunk-U3KDPO3O.js';
import '../chunk-F3FYYIAV.js';
import { ContextMenu, ContextMenuTrigger, ContextMenuContent, ContextMenuItem } from '@ulld/tailwind/context-menu';
import React from 'react';

var CopyContextMenu = ({ children, removeMathWrapper, content, btnLabel, extraMenuItems, classes = {} }) => {
  const ExtraMenuItems = extraMenuItems;
  return /* @__PURE__ */ React.createElement(ContextMenu, null, /* @__PURE__ */ React.createElement(ContextMenuTrigger, null, children), /* @__PURE__ */ React.createElement(
    ContextMenuContent,
    {
      className: cn("w-64", classes.menuContent)
    },
    /* @__PURE__ */ React.createElement(
      ContextMenuItem,
      {
        inset: true,
        onClick: async () => copyStringToClipboard(removeMathWrapper ? removeMathDollarSigns(content) : content)
      },
      btnLabel || "Copy latex"
    ),
    ExtraMenuItems && /* @__PURE__ */ React.createElement(ExtraMenuItems, null)
  ));
};
CopyContextMenu.displayName = "CopyContextMenu";

export { CopyContextMenu };
//# sourceMappingURL=out.js.map
//# sourceMappingURL=copyContextMenu.js.map