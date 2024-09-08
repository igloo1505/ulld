import '../chunk-F3FYYIAV.js';

// src/utils/numberUtils.ts
var sum = (values) => {
  return values.reduce((a, b) => a + b);
};
var numberBool = (n) => typeof n === "number";
var numberOrDefault = (n, defaultNumber) => numberBool(n) ? n : defaultNumber;

export { numberBool, numberOrDefault, sum };
//# sourceMappingURL=out.js.map
//# sourceMappingURL=numberUtils.js.map