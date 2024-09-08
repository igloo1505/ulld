'use strict';

require('axios');

// src/utils/fsUtils.ts
var withForwardSlash = (p) => p.startsWith("/") ? p : `/${p}`;

// src/utils/pathUtilsClientSide.ts
var includesRoot = (p, fsRoot) => {
  return p.includes(fsRoot);
};
var makeAbsolute = (p, fsRoot) => {
  return p.includes(fsRoot) ? p : `${fsRoot}${withForwardSlash(p)}`;
};
var getEditorUrl = (config) => {
  const sp = new URLSearchParams();
  sp.set("language", config.language || "mdx");
  if (config.useExistingValue) {
    sp.set("useExistingValue", "true");
  }
  return `/editor/${encodeURI(config.contentId)}?${sp.toString()}`;
};

exports.getEditorUrl = getEditorUrl;
exports.includesRoot = includesRoot;
exports.makeAbsolute = makeAbsolute;
//# sourceMappingURL=out.js.map
//# sourceMappingURL=pathUtilsClientSide.cjs.map