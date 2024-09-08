'use strict';

var zod = require('zod');

// src/zod/customConfigSchemas.ts
var zodStringFieldWithFileExtension = (fileExt) => {
  return zod.z.custom((val) => {
    return typeof val === "string" ? val.endsWith(fileExt.startsWith(".") ? fileExt : `.${fileExt}`) : false;
  });
};

exports.zodStringFieldWithFileExtension = zodStringFieldWithFileExtension;
//# sourceMappingURL=out.js.map
//# sourceMappingURL=customConfigSchemas.cjs.map