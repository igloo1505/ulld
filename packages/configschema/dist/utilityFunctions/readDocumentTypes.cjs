"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }// src/utilityFunctions/readDocumentTypes.ts
var _fs = require('fs'); var _fs2 = _interopRequireDefault(_fs);
var _path = require('path'); var _path2 = _interopRequireDefault(_path);
var readDocumentTypes = () => {
  const f = _path2.default.join(process.cwd(), "appConfig.ulld.json");
  if (!_fs2.default.existsSync(f))
    return [];
  const content = JSON.parse(_fs2.default.readFileSync(f, "utf-8"));
  return "noteTypes" in content ? content.noteTypes : [];
};


exports.readDocumentTypes = readDocumentTypes;
//# sourceMappingURL=readDocumentTypes.cjs.map