'use strict';

// src/utils/general.ts
var replaceRecursively = (value, replace, replaceWith = "") => {
  if (typeof replace === "string") {
    if (value.includes(replace)) {
      return replaceRecursively(value.replace(replace, replaceWith), replace, replaceWith);
    }
    return value;
  }
  if (replace.test(value)) {
    return replaceRecursively(value.replace(replace, replaceWith), replace, replaceWith);
  }
  return value;
};
var clampInArray = (index, arr) => {
  return arr[index % arr.length];
};

exports.clampInArray = clampInArray;
exports.replaceRecursively = replaceRecursively;
//# sourceMappingURL=out.js.map
//# sourceMappingURL=general.cjs.map