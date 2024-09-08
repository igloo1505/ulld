import { z } from 'zod';

// src/zod/customConfigSchemas.ts
var zodStringFieldWithFileExtension = (fileExt) => {
  return z.custom((val) => {
    return typeof val === "string" ? val.endsWith(fileExt.startsWith(".") ? fileExt : `.${fileExt}`) : false;
  });
};

export { zodStringFieldWithFileExtension };
//# sourceMappingURL=out.js.map
//# sourceMappingURL=customConfigSchemas.js.map