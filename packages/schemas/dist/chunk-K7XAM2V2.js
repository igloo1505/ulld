import {
  TERTIARY_TOGGLESchema
} from "./chunk-XO3OVOME.js";

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
//# sourceMappingURL=chunk-K7XAM2V2.js.map