'use strict';

// src/utils/sortUtils.ts
var sortAlphabetical = (items, getProperty) => {
  return items.sort((a, b) => getProperty ? getProperty(a) < getProperty(b) ? -1 : 1 : a < b ? -1 : 1);
};

exports.sortAlphabetical = sortAlphabetical;
//# sourceMappingURL=out.js.map
//# sourceMappingURL=sortUtils.cjs.map