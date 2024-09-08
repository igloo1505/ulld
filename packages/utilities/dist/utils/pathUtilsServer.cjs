'use strict';

var path = require('path');

function _interopDefault (e) { return e && e.__esModule ? e : { default: e }; }

var path__default = /*#__PURE__*/_interopDefault(path);

// src/utils/pathUtilsServer.ts
var makeAbsolute = (p, fsRoot) => {
  return p.includes(fsRoot) ? p : path__default.default.join(fsRoot, p);
};

exports.makeAbsolute = makeAbsolute;
//# sourceMappingURL=out.js.map
//# sourceMappingURL=pathUtilsServer.cjs.map