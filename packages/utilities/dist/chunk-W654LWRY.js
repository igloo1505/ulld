import { DateTime } from './chunk-6NEXWBQF.js';

// src/testDataHelpers/testDateHelper.ts
var makeDate = (s) => {
  return typeof s === "string" ? new Date(s) : s;
};
var TestDateHelper = class extends DateTime {
  constructor(t) {
    super(t);
  }
  static randomDateBeforeNow(start) {
    let d = makeDate(start).valueOf();
    let now = (/* @__PURE__ */ new Date()).valueOf();
    let diff = now - d;
    return new Date(d + Math.floor(Math.random() * diff));
  }
};

export { TestDateHelper };
//# sourceMappingURL=out.js.map
//# sourceMappingURL=chunk-W654LWRY.js.map