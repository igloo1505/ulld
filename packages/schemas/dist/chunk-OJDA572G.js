import {
  NestedEnumTERTIARY_TOGGLEWithAggregatesFilterSchema
} from "./chunk-QG5CWNPW.js";
import {
  NestedEnumTERTIARY_TOGGLEFilterSchema
} from "./chunk-K7XAM2V2.js";
import {
  TERTIARY_TOGGLESchema
} from "./chunk-XO3OVOME.js";
import {
  NestedIntFilterSchema
} from "./chunk-ZAH7LULB.js";

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
//# sourceMappingURL=chunk-OJDA572G.js.map