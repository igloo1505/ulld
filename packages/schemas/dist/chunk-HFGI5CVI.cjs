"use strict";Object.defineProperty(exports, "__esModule", {value: true});// src/transforms/index.ts
var dateTimeStringTransform = (a) => {
  if (typeof a === "string") {
    return new Date(a);
  }
  if (a instanceof Date) {
    return a;
  }
  return /* @__PURE__ */ new Date();
};



exports.dateTimeStringTransform = dateTimeStringTransform;
//# sourceMappingURL=chunk-HFGI5CVI.cjs.map