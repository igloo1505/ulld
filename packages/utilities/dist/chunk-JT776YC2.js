// src/utils/latexUtils.ts
var stringHasPairedKeys = (s, k) => {
  if (!s || typeof s !== "string")
    return false;
  let i = s.indexOf(k);
  return i !== -1 && i !== s.lastIndexOf(k);
};
var stringHasLatex = (s) => {
  if (!s || typeof s !== "string")
    return false;
  return stringHasPairedKeys(s, "$");
};
var stringHasMdx = (s) => {
  if (!s)
    return false;
  if (s.includes("<") && s.includes(">"))
    return true;
  return [
    "_",
    "*",
    "-",
    "$"
  ].some((k) => stringHasPairedKeys(s, k));
};
var autoWrapMath = (math, display = true) => {
  const s = display ? "$$" : "$";
  let _idx = math.indexOf(s);
  if (_idx === -1 || _idx === math.lastIndexOf(s)) {
    return `${s}
${math}
${s}`;
  }
  return math;
};

export { autoWrapMath, stringHasLatex, stringHasMdx, stringHasPairedKeys };
//# sourceMappingURL=out.js.map
//# sourceMappingURL=chunk-JT776YC2.js.map