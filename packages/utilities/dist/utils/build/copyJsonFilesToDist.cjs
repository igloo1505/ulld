'use strict';

var glob = require('glob');
var fs = require('fs');
var path = require('path');

function _interopDefault (e) { return e && e.__esModule ? e : { default: e }; }

var fs__default = /*#__PURE__*/_interopDefault(fs);
var path__default = /*#__PURE__*/_interopDefault(path);

// src/utils/build/copyJsonFilesToDist.ts
var copyJsonFilesToDist = (cwd, glob$1 = "src/**/*.json", files) => {
  if (!files) {
    files = glob.globSync(glob$1, {
      cwd,
      nodir: true
    });
  }
  for (const f of files) {
    fs__default.default.cpSync(path__default.default.join(cwd, f), path__default.default.join(cwd, f.replace("src/", "dist/")));
  }
};

exports.copyJsonFilesToDist = copyJsonFilesToDist;
//# sourceMappingURL=out.js.map
//# sourceMappingURL=copyJsonFilesToDist.cjs.map