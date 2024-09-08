"use client"
'use strict';

var contextMenu = require('@ulld/tailwind/context-menu');
var React = require('react');
require('jaro-winkler');
var clsx = require('clsx');
var tailwindMerge = require('tailwind-merge');

function _interopDefault (e) { return e && e.__esModule ? e : { default: e }; }

var React__default = /*#__PURE__*/_interopDefault(React);

// src/actions/copyStringToClipboard.ts
var copyStringToClipboard = async (s, showToast) => {
  try {
    await navigator.clipboard.writeText(s);
    if (showToast) ;
    return true;
  } catch (err) {
    console.error("Failed to copy: ", err);
    return false;
  }
};

// src/utils/getAllRegexMatches.ts
var getAllRegexMatches = (content, regex) => {
  let results = [];
  let c = content;
  let m;
  do {
    m = regex.exec(c);
    if (m) {
      results.push(m);
    }
  } while (m);
  return results;
};
var removeMathDollarSigns = (_s) => {
  let s = _s.trim();
  if (s.startsWith("$$") && s.endsWith("$$") && getAllRegexMatches(s, /\$\$/gm).length === 2) {
    return s.replaceAll("$$", "").trim();
  }
  if (s.startsWith("$") && s.endsWith("$") && getAllRegexMatches(s, /\$/gm).length === 2) {
    return s.replaceAll("$", "").trim();
  }
  return s;
};
function cn(...inputs) {
  return tailwindMerge.twMerge(clsx.clsx(inputs));
}

// src/components/copyContextMenu.tsx
var CopyContextMenu = ({ children, removeMathWrapper, content, btnLabel, extraMenuItems, classes = {} }) => {
  const ExtraMenuItems = extraMenuItems;
  return /* @__PURE__ */ React__default.default.createElement(contextMenu.ContextMenu, null, /* @__PURE__ */ React__default.default.createElement(contextMenu.ContextMenuTrigger, null, children), /* @__PURE__ */ React__default.default.createElement(
    contextMenu.ContextMenuContent,
    {
      className: cn("w-64", classes.menuContent)
    },
    /* @__PURE__ */ React__default.default.createElement(
      contextMenu.ContextMenuItem,
      {
        inset: true,
        onClick: async () => copyStringToClipboard(removeMathWrapper ? removeMathDollarSigns(content) : content)
      },
      btnLabel || "Copy latex"
    ),
    ExtraMenuItems && /* @__PURE__ */ React__default.default.createElement(ExtraMenuItems, null)
  ));
};
CopyContextMenu.displayName = "CopyContextMenu";

exports.CopyContextMenu = CopyContextMenu;
//# sourceMappingURL=out.js.map
//# sourceMappingURL=copyContextMenu.cjs.map