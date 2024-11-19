"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }require('../../chunk-YOXHAKPL.cjs');

// src/methods/io/copyFile.ts
var _fs = require('fs'); var _fs2 = _interopRequireDefault(_fs);
var _path = require('path'); var _path2 = _interopRequireDefault(_path);
var copyFile = async (inputPath, outputPath) => {
  return _fs2.default.promises.copyFile(inputPath, outputPath);
};
var copyDevRootFile = async (inputPath, outputPath) => {
  const rootDir = process.env.ULLD_DEV_ROOT;
  if (!rootDir) {
    throw new Error("You need to set the ULLD_DEV_ROOT env variable to continue.");
  }
  return copyFile(_path2.default.join(rootDir, inputPath), _path2.default.join(rootDir, outputPath));
};



exports.copyDevRootFile = copyDevRootFile; exports.copyFile = copyFile;
//# sourceMappingURL=copyFile.cjs.map