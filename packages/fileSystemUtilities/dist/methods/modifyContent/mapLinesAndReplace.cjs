"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }require('../../chunk-YOXHAKPL.cjs');

// src/methods/modifyContent/mapLinesAndReplace.ts
var _fs = require('fs'); var _fs2 = _interopRequireDefault(_fs);
var enc = { encoding: "utf-8" };
var mapLinesAndReplace = (props) => {
  const content = _fs2.default.readFileSync(props.path, enc);
  let lines = [];
  const existingLines = content.split("\n");
  for (const l of existingLines) {
    const res = props.cb(l);
    if (res) {
      lines.push(res);
    }
  }
  if (lines.length === 0 && existingLines.length > 0) {
    console.error("You might have forgotten to return the line in the mapLinesAndReplace method as the list of lines is empty.");
    return;
  }
  _fs2.default.writeFileSync(props.path, lines.join("\n")), enc;
};


exports.mapLinesAndReplace = mapLinesAndReplace;
//# sourceMappingURL=mapLinesAndReplace.cjs.map