'use strict';

var fs = require('fs');
var path = require('path');

function _interopDefault (e) { return e && e.__esModule ? e : { default: e }; }

var fs__default = /*#__PURE__*/_interopDefault(fs);
var path__default = /*#__PURE__*/_interopDefault(path);

// src/utilityFunctions/readDocumentTypes.ts
var readDocumentTypes = () => {
  const f = path__default.default.join(process.cwd(), "appConfig.ulld.json");
  if (!fs__default.default.existsSync(f))
    return [];
  const content = JSON.parse(fs__default.default.readFileSync(f, "utf-8"));
  return "noteTypes" in content ? content.noteTypes : [];
};

exports.readDocumentTypes = readDocumentTypes;
//# sourceMappingURL=out.js.map
//# sourceMappingURL=readDocumentTypes.cjs.map