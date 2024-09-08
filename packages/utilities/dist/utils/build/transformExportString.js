import '../../chunk-F3FYYIAV.js';

// src/utils/build/transformExportString.ts
var transformExportString = (s) => {
  let _s = s;
  if (_s.startsWith(".")) {
    _s = _s.slice(1);
  }
  if (_s.startsWith("/")) {
    _s = _s.slice(1);
  }
  return _s;
};
var transformExportStringOptional = (val) => val ? transformExportString(val) : void 0;
var transformExportStringArray = (s) => s.map((val) => transformExportString(val));

export { transformExportString, transformExportStringArray, transformExportStringOptional };
//# sourceMappingURL=out.js.map
//# sourceMappingURL=transformExportString.js.map