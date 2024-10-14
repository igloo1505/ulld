import {
  TERTIARY_TOGGLESchema
} from "./chunk-FGDZJV6T.js";

// src/database/inputTypeSchemas/NestedEnumTERTIARY_TOGGLEFilterSchema.ts
import { z } from "zod";
var NestedEnumTERTIARY_TOGGLEFilterSchema = z.object({
  equals: z.lazy(() => TERTIARY_TOGGLESchema).optional(),
  in: z.lazy(() => TERTIARY_TOGGLESchema).array().optional(),
  notIn: z.lazy(() => TERTIARY_TOGGLESchema).array().optional(),
  not: z.union([z.lazy(() => TERTIARY_TOGGLESchema), z.lazy(() => NestedEnumTERTIARY_TOGGLEFilterSchema)]).optional()
}).strict();
var NestedEnumTERTIARY_TOGGLEFilterSchema_default = NestedEnumTERTIARY_TOGGLEFilterSchema;

export {
  NestedEnumTERTIARY_TOGGLEFilterSchema,
  NestedEnumTERTIARY_TOGGLEFilterSchema_default
};
//# sourceMappingURL=chunk-3LP5T6ZV.js.map