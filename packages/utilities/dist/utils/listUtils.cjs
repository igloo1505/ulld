'use strict';

// src/utils/listUtils.ts
var randomFromArr = (arr) => {
  return arr[Math.floor(Math.random() * arr.length)];
};
var forN = (n, cb) => Array(n).fill(0).map((_, i) => cb(i));
var removeArrayOverlap = (data) => {
  let newData = [];
  for (const k of data) {
    if (!newData.includes(k)) {
      newData.push(k);
    }
  }
  return newData;
};

exports.forN = forN;
exports.randomFromArr = randomFromArr;
exports.removeArrayOverlap = removeArrayOverlap;
//# sourceMappingURL=out.js.map
//# sourceMappingURL=listUtils.cjs.map