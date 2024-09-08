'use strict';

// src/utils/numberUtils.ts
var sum = (values) => {
  return values.reduce((a, b) => a + b);
};
var numberBool = (n) => typeof n === "number";
var numberOrDefault = (n, defaultNumber) => numberBool(n) ? n : defaultNumber;

exports.numberBool = numberBool;
exports.numberOrDefault = numberOrDefault;
exports.sum = sum;
//# sourceMappingURL=out.js.map
//# sourceMappingURL=numberUtils.cjs.map