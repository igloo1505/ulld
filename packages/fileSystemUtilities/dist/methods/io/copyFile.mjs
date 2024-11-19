import "../../chunk-JMDSN227.mjs";

// src/methods/io/copyFile.ts
import fs from "fs";
import path from "path";
var copyFile = async (inputPath, outputPath) => {
  return fs.promises.copyFile(inputPath, outputPath);
};
var copyDevRootFile = async (inputPath, outputPath) => {
  const rootDir = process.env.ULLD_DEV_ROOT;
  if (!rootDir) {
    throw new Error("You need to set the ULLD_DEV_ROOT env variable to continue.");
  }
  return copyFile(path.join(rootDir, inputPath), path.join(rootDir, outputPath));
};
export {
  copyDevRootFile,
  copyFile
};
//# sourceMappingURL=copyFile.mjs.map