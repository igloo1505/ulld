'use strict';

var path = require('path');

function _interopDefault (e) { return e && e.__esModule ? e : { default: e }; }

var path__default = /*#__PURE__*/_interopDefault(path);

// src/utils/filePathUtils.ts
var getFilePathProp = (pathValue, fsRoot) => {
  const hasRoot = pathValue.includes(fsRoot);
  return {
    rootRelativePath: hasRoot ? pathValue.replace(fsRoot, "") : pathValue,
    absolutePath: hasRoot ? pathValue : path__default.default.join(fsRoot, pathValue)
  };
};

exports.getFilePathProp = getFilePathProp;
//# sourceMappingURL=out.js.map
//# sourceMappingURL=filePathUtils.cjs.map