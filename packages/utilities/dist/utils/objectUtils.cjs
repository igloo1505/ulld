'use strict';

// src/utils/objectUtils.ts
var getResursiveValue = (a, keys) => {
  if (keys.length > 1) {
    return getResursiveValue(a[keys[0]], keys.slice(1));
  }
  return a[keys[0]];
};
var applyRecursiveValue = (a, keys, value) => {
  let i;
  for (i = 0; i < keys.length - 1; i++) {
    a = a[keys[i]];
  }
  a[keys[i]] = value;
};

exports.applyRecursiveValue = applyRecursiveValue;
exports.getResursiveValue = getResursiveValue;
//# sourceMappingURL=out.js.map
//# sourceMappingURL=objectUtils.cjs.map