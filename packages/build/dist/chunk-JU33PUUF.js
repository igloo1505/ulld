import {
  init_esm_shims
} from "./chunk-ZRREZ4KQ.js";

// src/utils/locationUtils.ts
init_esm_shims();
import fs from "fs";
import path from "path";
var getCurrentDir = () => {
  return process.cwd();
};
var getDirectoryCompletionFromString = (val = "/") => {
  let v = val;
  let exists = fs.existsSync(v);
  let stats = exists ? fs.lstatSync(v) : { isDirectory: () => false };
  let isFile = "isFile" in stats ? stats.isFile() : false;
  let isDirectory = "isDirectory" in stats ? stats.isDirectory() : false;
  if (!exists || isFile) {
    v = path.parse(val).dir;
  }
  const value = fs.readdirSync(v).map((f) => path.join(v, f)).filter((f) => Boolean(fs.lstatSync(f).isDirectory() && f.includes(val)));
  return isDirectory ? [v, ...value] : value;
};

export {
  getCurrentDir,
  getDirectoryCompletionFromString
};
//# sourceMappingURL=chunk-JU33PUUF.js.map