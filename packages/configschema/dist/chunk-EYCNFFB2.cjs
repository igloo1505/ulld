"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _chunk7TQBS4NBcjs = require('./chunk-7TQBS4NB.cjs');

// src/__scripts__/getTestStaticBuildData.ts
var _fs = require('fs'); var _fs2 = _interopRequireDefault(_fs);
var _path = require('path'); var _path2 = _interopRequireDefault(_path);
var writeTestStaticBuildData = (targetPath = process.env.ULLD_TEST_ROOT) => {
  let testData = {
    fsRoot: targetPath
  };
  const target = _path2.default.join(targetPath, "ulldBuildData.json");
  const data = _chunk7TQBS4NBcjs.buildStaticDataSchema.parse(testData);
  _fs2.default.writeFileSync(target, JSON.stringify(data, null, 4), {
    encoding: "utf-8"
  });
  console.log(`Wrote ulldBuildData.json to ${target}`);
};



exports.writeTestStaticBuildData = writeTestStaticBuildData;
//# sourceMappingURL=chunk-EYCNFFB2.cjs.map