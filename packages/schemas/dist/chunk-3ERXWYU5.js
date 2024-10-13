import {
  NestedEnumTERTIARY_TOGGLEFilterSchema
} from "./chunk-K7XAM2V2.js";
import {
  TERTIARY_TOGGLESchema
} from "./chunk-XO3OVOME.js";

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
//# sourceMappingURL=chunk-3ERXWYU5.js.map