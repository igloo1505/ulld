import {
  NestedEnumImageAlignmentFilterSchema
} from "./chunk-I2T6ONVQ.js";
import {
  ImageAlignmentSchema
} from "./chunk-XOBHDDTF.js";
import {
  NestedIntFilterSchema
} from "./chunk-IIKKCTNR.js";

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
//# sourceMappingURL=chunk-QZQVVGZE.js.map