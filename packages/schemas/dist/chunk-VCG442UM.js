import {
  NestedEnumImageAlignmentWithAggregatesFilterSchema
} from "./chunk-4N3VHATI.js";
import {
  NestedEnumImageAlignmentFilterSchema
} from "./chunk-ILM76FOT.js";
import {
  ImageAlignmentSchema
} from "./chunk-RNDSF24S.js";
import {
  NestedIntFilterSchema
} from "./chunk-ZAH7LULB.js";

// src/database/inputTypeSchemas/EnumImageAlignmentWithAggregatesFilterSchema.ts
import { z } from "zod";
var EnumImageAlignmentWithAggregatesFilterSchema = z.object({
  equals: z.lazy(() => ImageAlignmentSchema).optional(),
  in: z.lazy(() => ImageAlignmentSchema).array().optional(),
  notIn: z.lazy(() => ImageAlignmentSchema).array().optional(),
  not: z.union([z.lazy(() => ImageAlignmentSchema), z.lazy(() => NestedEnumImageAlignmentWithAggregatesFilterSchema)]).optional(),
  _count: z.lazy(() => NestedIntFilterSchema).optional(),
  _min: z.lazy(() => NestedEnumImageAlignmentFilterSchema).optional(),
  _max: z.lazy(() => NestedEnumImageAlignmentFilterSchema).optional()
}).strict();
var EnumImageAlignmentWithAggregatesFilterSchema_default = EnumImageAlignmentWithAggregatesFilterSchema;

export {
  EnumImageAlignmentWithAggregatesFilterSchema,
  EnumImageAlignmentWithAggregatesFilterSchema_default
};
//# sourceMappingURL=chunk-VCG442UM.js.map