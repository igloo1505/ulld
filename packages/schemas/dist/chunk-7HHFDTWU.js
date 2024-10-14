import {
  NestedEnumTERTIARY_TOGGLEFilterSchema
} from "./chunk-3LP5T6ZV.js";
import {
  TERTIARY_TOGGLESchema
} from "./chunk-FGDZJV6T.js";
import {
  NestedIntFilterSchema
} from "./chunk-IIKKCTNR.js";

// src/database/inputTypeSchemas/NestedEnumTERTIARY_TOGGLEWithAggregatesFilterSchema.ts
import { z } from "zod";
var NestedEnumTERTIARY_TOGGLEWithAggregatesFilterSchema = z.object({
  equals: z.lazy(() => TERTIARY_TOGGLESchema).optional(),
  in: z.lazy(() => TERTIARY_TOGGLESchema).array().optional(),
  notIn: z.lazy(() => TERTIARY_TOGGLESchema).array().optional(),
  not: z.union([z.lazy(() => TERTIARY_TOGGLESchema), z.lazy(() => NestedEnumTERTIARY_TOGGLEWithAggregatesFilterSchema)]).optional(),
  _count: z.lazy(() => NestedIntFilterSchema).optional(),
  _min: z.lazy(() => NestedEnumTERTIARY_TOGGLEFilterSchema).optional(),
  _max: z.lazy(() => NestedEnumTERTIARY_TOGGLEFilterSchema).optional()
}).strict();
var NestedEnumTERTIARY_TOGGLEWithAggregatesFilterSchema_default = NestedEnumTERTIARY_TOGGLEWithAggregatesFilterSchema;

export {
  NestedEnumTERTIARY_TOGGLEWithAggregatesFilterSchema,
  NestedEnumTERTIARY_TOGGLEWithAggregatesFilterSchema_default
};
//# sourceMappingURL=chunk-7HHFDTWU.js.map