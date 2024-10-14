import {
  NestedEnumImageAlignmentWithAggregatesFilterSchema
} from "./chunk-QZQVVGZE.js";
import {
  NestedEnumImageAlignmentFilterSchema
} from "./chunk-I2T6ONVQ.js";
import {
  ImageAlignmentSchema
} from "./chunk-XOBHDDTF.js";
import {
  NestedIntFilterSchema
} from "./chunk-IIKKCTNR.js";

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
//# sourceMappingURL=chunk-S4RQE52O.js.map