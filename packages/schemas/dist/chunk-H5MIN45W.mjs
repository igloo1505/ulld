// src/transforms/index.ts
var dateTimeStringTransform = (a) => {
  if (typeof a === "string") {
    return new Date(a);
  }
  if (a instanceof Date) {
    return a;
  }
  return /* @__PURE__ */ new Date();
};

export {
  dateTimeStringTransform
};
//# sourceMappingURL=chunk-H5MIN45W.mjs.map