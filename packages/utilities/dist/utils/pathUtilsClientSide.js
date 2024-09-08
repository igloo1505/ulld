import { withForwardSlash } from '../chunk-JKM3T6TO.js';
import '../chunk-F3FYYIAV.js';

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

export { getEditorUrl, includesRoot, makeAbsolute };
//# sourceMappingURL=out.js.map
//# sourceMappingURL=pathUtilsClientSide.js.map