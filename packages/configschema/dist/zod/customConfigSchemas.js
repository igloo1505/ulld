// src/zod/customConfigSchemas.ts
import { z } from "zod";
var zodStringFieldWithFileExtension = (fileExt) => {
  return z.custom((val) => {
    return typeof val === "string" ? val.endsWith(fileExt.startsWith(".") ? fileExt : `.${fileExt}`) : false;
  });
};
export {
  zodStringFieldWithFileExtension
};
//# sourceMappingURL=customConfigSchemas.js.map