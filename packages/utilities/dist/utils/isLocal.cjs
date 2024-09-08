'use strict';

// src/utils/isLocal.ts
var isLocal = (fsRoot) => {
  if (typeof process !== "undefined" && typeof window === "undefined") {
    return process.cwd() === fsRoot;
  } else {
    return window.location.host.includes("localhost");
  }
};

exports.isLocal = isLocal;
//# sourceMappingURL=out.js.map
//# sourceMappingURL=isLocal.cjs.map