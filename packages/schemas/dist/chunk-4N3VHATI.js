import {
  NestedEnumImageAlignmentFilterSchema
} from "./chunk-ILM76FOT.js";
import {
  ImageAlignmentSchema
} from "./chunk-RNDSF24S.js";
import {
  NestedIntFilterSchema
} from "./chunk-ZAH7LULB.js";

// src/database/inputTypeSchemas/NestedEnumImageAlignmentWithAggregatesFilterSchema.ts
import { z } from "zod";
var NestedEnumImageAlignmentWithAggregatesFilterSchema = z.object({
  equals: z.lazy(() => ImageAlignmentSchema).optional(),
  in: z.lazy(() => ImageAlignmentSchema).array().optional(),
  notIn: z.lazy(() => ImageAlignmentSchema).array().optional(),
  not: z.union([z.lazy(() => ImageAlignmentSchema), z.lazy(() => NestedEnumImageAlignmentWithAggregatesFilterSchema)]).optional(),
  _count: z.lazy(() => NestedIntFilterSchema).optional(),
  _min: z.lazy(() => NestedEnumImageAlignmentFilterSchema).optional(),
  _max: z.lazy(() => NestedEnumImageAlignmentFilterSchema).optional()
}).strict();
var NestedEnumImageAlignmentWithAggregatesFilterSchema_default = NestedEnumImageAlignmentWithAggregatesFilterSchema;

export {
  NestedEnumImageAlignmentWithAggregatesFilterSchema,
  NestedEnumImageAlignmentWithAggregatesFilterSchema_default
};
//# sourceMappingURL=chunk-4N3VHATI.js.map