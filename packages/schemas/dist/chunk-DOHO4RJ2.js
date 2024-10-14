import {
  NestedFloatNullableWithAggregatesFilterSchema
} from "./chunk-VWMCQIY7.js";
import {
  NestedFloatNullableFilterSchema
} from "./chunk-PPWE4A32.js";
import {
  NestedIntNullableFilterSchema
} from "./chunk-45PPNBUK.js";

// src/database/inputTypeSchemas/FloatNullableWithAggregatesFilterSchema.ts
import { z } from "zod";
var FloatNullableWithAggregatesFilterSchema = z.object({
  equals: z.number().optional().nullable(),
  in: z.number().array().optional().nullable(),
  notIn: z.number().array().optional().nullable(),
  lt: z.number().optional(),
  lte: z.number().optional(),
  gt: z.number().optional(),
  gte: z.number().optional(),
  not: z.union([z.number(), z.lazy(() => NestedFloatNullableWithAggregatesFilterSchema)]).optional().nullable(),
  _count: z.lazy(() => NestedIntNullableFilterSchema).optional(),
  _avg: z.lazy(() => NestedFloatNullableFilterSchema).optional(),
  _sum: z.lazy(() => NestedFloatNullableFilterSchema).optional(),
  _min: z.lazy(() => NestedFloatNullableFilterSchema).optional(),
  _max: z.lazy(() => NestedFloatNullableFilterSchema).optional()
}).strict();
var FloatNullableWithAggregatesFilterSchema_default = FloatNullableWithAggregatesFilterSchema;

export {
  FloatNullableWithAggregatesFilterSchema,
  FloatNullableWithAggregatesFilterSchema_default
};
//# sourceMappingURL=chunk-DOHO4RJ2.js.map