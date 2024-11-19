import "../../chunk-JMDSN227.mjs";

// src/methods/modifyContent/mapLinesAndReplace.ts
import fs from "fs";
var enc = { encoding: "utf-8" };
var mapLinesAndReplace = (props) => {
  const content = fs.readFileSync(props.path, enc);
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
  fs.writeFileSync(props.path, lines.join("\n")), enc;
};
export {
  mapLinesAndReplace
};
//# sourceMappingURL=mapLinesAndReplace.mjs.map