"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }// src/__scripts__/gatherReservedPublicPaths.ts
var _path = require('path'); var _path2 = _interopRequireDefault(_path);
var _fs = require('fs'); var _fs2 = _interopRequireDefault(_fs);
var _glob = require('glob');
var gatherReservedPublicPaths = (root = process.env.ULLD_TEST_ROOT) => {
  const publicDir = _path2.default.join(root, "public");
  const paths = _glob.globSync.call(void 0, "*", {
    cwd: publicDir
  }).filter((p) => _fs2.default.statSync(_path2.default.join(publicDir, p)).isDirectory());
  return paths;
};



exports.gatherReservedPublicPaths = gatherReservedPublicPaths;
//# sourceMappingURL=chunk-BR2NCAJJ.cjs.map