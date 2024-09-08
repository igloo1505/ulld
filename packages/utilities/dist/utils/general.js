import '../chunk-F3FYYIAV.js';

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

export { clampInArray, replaceRecursively };
//# sourceMappingURL=out.js.map
//# sourceMappingURL=general.js.map