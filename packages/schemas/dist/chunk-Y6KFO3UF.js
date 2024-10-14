import {
  NestedFloatNullableFilterSchema
} from "./chunk-PPWE4A32.js";
import {
  NestedIntNullableFilterSchema
} from "./chunk-45PPNBUK.js";

// src/database/inputTypeSchemas/NestedIntNullableWithAggregatesFilterSchema.ts
import { z } from "zod";
var NestedIntNullableWithAggregatesFilterSchema = z.object({
  equals: z.number().optional().nullable(),
  in: z.number().array().optional().nullable(),
  notIn: z.number().array().optional().nullable(),
  lt: z.number().optional(),
  lte: z.number().optional(),
  gt: z.number().optional(),
  gte: z.number().optional(),
  not: z.union([z.number(), z.lazy(() => NestedIntNullableWithAggregatesFilterSchema)]).optional().nullable(),
  _count: z.lazy(() => NestedIntNullableFilterSchema).optional(),
  _avg: z.lazy(() => NestedFloatNullableFilterSchema).optional(),
  _sum: z.lazy(() => NestedIntNullableFilterSchema).optional(),
  _min: z.lazy(() => NestedIntNullableFilterSchema).optional(),
  _max: z.lazy(() => NestedIntNullableFilterSchema).optional()
}).strict();
var NestedIntNullableWithAggregatesFilterSchema_default = NestedIntNullableWithAggregatesFilterSchema;

export {
  NestedIntNullableWithAggregatesFilterSchema,
  NestedIntNullableWithAggregatesFilterSchema_default
};
//# sourceMappingURL=chunk-Y6KFO3UF.js.map