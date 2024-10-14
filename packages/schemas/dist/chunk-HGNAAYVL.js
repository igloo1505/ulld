import {
  NestedEnumTERTIARY_TOGGLEWithAggregatesFilterSchema
} from "./chunk-7HHFDTWU.js";
import {
  NestedEnumTERTIARY_TOGGLEFilterSchema
} from "./chunk-3LP5T6ZV.js";
import {
  TERTIARY_TOGGLESchema
} from "./chunk-FGDZJV6T.js";
import {
  NestedIntFilterSchema
} from "./chunk-IIKKCTNR.js";

// src/database/inputTypeSchemas/EnumTERTIARY_TOGGLEWithAggregatesFilterSchema.ts
import { z } from "zod";
var EnumTERTIARY_TOGGLEWithAggregatesFilterSchema = z.object({
  equals: z.lazy(() => TERTIARY_TOGGLESchema).optional(),
  in: z.lazy(() => TERTIARY_TOGGLESchema).array().optional(),
  notIn: z.lazy(() => TERTIARY_TOGGLESchema).array().optional(),
  not: z.union([z.lazy(() => TERTIARY_TOGGLESchema), z.lazy(() => NestedEnumTERTIARY_TOGGLEWithAggregatesFilterSchema)]).optional(),
  _count: z.lazy(() => NestedIntFilterSchema).optional(),
  _min: z.lazy(() => NestedEnumTERTIARY_TOGGLEFilterSchema).optional(),
  _max: z.lazy(() => NestedEnumTERTIARY_TOGGLEFilterSchema).optional()
}).strict();
var EnumTERTIARY_TOGGLEWithAggregatesFilterSchema_default = EnumTERTIARY_TOGGLEWithAggregatesFilterSchema;

export {
  EnumTERTIARY_TOGGLEWithAggregatesFilterSchema,
  EnumTERTIARY_TOGGLEWithAggregatesFilterSchema_default
};
//# sourceMappingURL=chunk-HGNAAYVL.js.map