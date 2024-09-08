'use strict';

var path = require('path');
var fs = require('fs');
var glob = require('glob');

function _interopDefault (e) { return e && e.__esModule ? e : { default: e }; }

var path__default = /*#__PURE__*/_interopDefault(path);
var fs__default = /*#__PURE__*/_interopDefault(fs);

// src/__scripts__/gatherReservedPublicPaths.ts
var gatherReservedPublicPaths = (root = process.env.ULLD_TEST_ROOT) => {
  const publicDir = path__default.default.join(root, "public");
  const paths = glob.globSync("*", {
    cwd: publicDir
  }).filter((p) => fs__default.default.statSync(path__default.default.join(publicDir, p)).isDirectory());
  return paths;
};

exports.gatherReservedPublicPaths = gatherReservedPublicPaths;
//# sourceMappingURL=out.js.map
//# sourceMappingURL=gatherReservedPublicPaths.cjs.map