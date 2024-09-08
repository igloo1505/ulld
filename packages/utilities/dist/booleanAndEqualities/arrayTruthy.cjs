'use strict';

// src/booleanAndEqualities/arrayTruthy.ts
var arrayTruthy = (a, trueIfEmpty = false) => Boolean(Array.isArray(a) && trueIfEmpty ? true : a.length > 0);

exports.arrayTruthy = arrayTruthy;
//# sourceMappingURL=out.js.map
//# sourceMappingURL=arrayTruthy.cjs.map