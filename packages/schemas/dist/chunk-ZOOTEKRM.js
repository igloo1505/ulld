import {
  NestedEnumTERTIARY_TOGGLEFilterSchema
} from "./chunk-3LP5T6ZV.js";
import {
  TERTIARY_TOGGLESchema
} from "./chunk-FGDZJV6T.js";

// src/database/inputTypeSchemas/EnumTERTIARY_TOGGLEFilterSchema.ts
import { z } from "zod";
var EnumTERTIARY_TOGGLEFilterSchema = z.object({
  equals: z.lazy(() => TERTIARY_TOGGLESchema).optional(),
  in: z.lazy(() => TERTIARY_TOGGLESchema).array().optional(),
  notIn: z.lazy(() => TERTIARY_TOGGLESchema).array().optional(),
  not: z.union([z.lazy(() => TERTIARY_TOGGLESchema), z.lazy(() => NestedEnumTERTIARY_TOGGLEFilterSchema)]).optional()
}).strict();
var EnumTERTIARY_TOGGLEFilterSchema_default = EnumTERTIARY_TOGGLEFilterSchema;

export {
  EnumTERTIARY_TOGGLEFilterSchema,
  EnumTERTIARY_TOGGLEFilterSchema_default
};
//# sourceMappingURL=chunk-ZOOTEKRM.js.map