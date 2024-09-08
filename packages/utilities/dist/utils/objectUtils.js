import '../chunk-F3FYYIAV.js';

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

export { applyRecursiveValue, getResursiveValue };
//# sourceMappingURL=out.js.map
//# sourceMappingURL=objectUtils.js.map