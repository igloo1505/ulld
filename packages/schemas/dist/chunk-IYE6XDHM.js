import {
  NestedIntNullableWithAggregatesFilterSchema
} from "./chunk-24NMSR3L.js";
import {
  NestedFloatNullableFilterSchema
} from "./chunk-RHPAY4BN.js";
import {
  NestedIntNullableFilterSchema
} from "./chunk-QMPBSEPP.js";

// src/database/inputTypeSchemas/IntNullableWithAggregatesFilterSchema.ts
import { z } from "zod";
var IntNullableWithAggregatesFilterSchema = z.object({
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
var IntNullableWithAggregatesFilterSchema_default = IntNullableWithAggregatesFilterSchema;

export {
  IntNullableWithAggregatesFilterSchema,
  IntNullableWithAggregatesFilterSchema_default
};
//# sourceMappingURL=chunk-IYE6XDHM.js.map