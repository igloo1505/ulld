"use strict";Object.defineProperty(exports, "__esModule", {value: true});// src/zod/customConfigSchemas.ts
var _zod = require('zod');
var zodStringFieldWithFileExtension = (fileExt) => {
  return _zod.z.custom((val) => {
    return typeof val === "string" ? val.endsWith(fileExt.startsWith(".") ? fileExt : `.${fileExt}`) : false;
  });
};


exports.zodStringFieldWithFileExtension = zodStringFieldWithFileExtension;
//# sourceMappingURL=customConfigSchemas.cjs.map