import {
  NestedFloatWithAggregatesFilterSchema
} from "./chunk-Q2RABMF5.js";
import {
  NestedFloatFilterSchema
} from "./chunk-4DXBRGYG.js";
import {
  NestedIntFilterSchema
} from "./chunk-ZAH7LULB.js";

// src/database/inputTypeSchemas/FloatWithAggregatesFilterSchema.ts
import { z } from "zod";
var FloatWithAggregatesFilterSchema = z.object({
  equals: z.number().optional(),
  in: z.number().array().optional(),
  notIn: z.number().array().optional(),
  lt: z.number().optional(),
  lte: z.number().optional(),
  gt: z.number().optional(),
  gte: z.number().optional(),
  not: z.union([z.number(), z.lazy(() => NestedFloatWithAggregatesFilterSchema)]).optional(),
  _count: z.lazy(() => NestedIntFilterSchema).optional(),
  _avg: z.lazy(() => NestedFloatFilterSchema).optional(),
  _sum: z.lazy(() => NestedFloatFilterSchema).optional(),
  _min: z.lazy(() => NestedFloatFilterSchema).optional(),
  _max: z.lazy(() => NestedFloatFilterSchema).optional()
}).strict();
var FloatWithAggregatesFilterSchema_default = FloatWithAggregatesFilterSchema;

export {
  FloatWithAggregatesFilterSchema,
  FloatWithAggregatesFilterSchema_default
};
//# sourceMappingURL=chunk-UQJRVG5A.js.map