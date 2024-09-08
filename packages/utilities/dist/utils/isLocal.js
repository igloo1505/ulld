import '../chunk-F3FYYIAV.js';

// src/utils/isLocal.ts
var isLocal = (fsRoot) => {
  if (typeof process !== "undefined" && typeof window === "undefined") {
    return process.cwd() === fsRoot;
  } else {
    return window.location.host.includes("localhost");
  }
};

export { isLocal };
//# sourceMappingURL=out.js.map
//# sourceMappingURL=isLocal.js.map