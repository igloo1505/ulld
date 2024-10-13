import {
  NestedIntWithAggregatesFilterSchema
} from "./chunk-YDAU2UV3.js";
import {
  NestedFloatFilterSchema
} from "./chunk-4DXBRGYG.js";
import {
  NestedIntFilterSchema
} from "./chunk-ZAH7LULB.js";

// src/database/inputTypeSchemas/IntWithAggregatesFilterSchema.ts
import { z } from "zod";
var IntWithAggregatesFilterSchema = z.object({
  equals: z.number().optional(),
  in: z.number().array().optional(),
  notIn: z.number().array().optional(),
  lt: z.number().optional(),
  lte: z.number().optional(),
  gt: z.number().optional(),
  gte: z.number().optional(),
  not: z.union([z.number(), z.lazy(() => NestedIntWithAggregatesFilterSchema)]).optional(),
  _count: z.lazy(() => NestedIntFilterSchema).optional(),
  _avg: z.lazy(() => NestedFloatFilterSchema).optional(),
  _sum: z.lazy(() => NestedIntFilterSchema).optional(),
  _min: z.lazy(() => NestedIntFilterSchema).optional(),
  _max: z.lazy(() => NestedIntFilterSchema).optional()
}).strict();
var IntWithAggregatesFilterSchema_default = IntWithAggregatesFilterSchema;

export {
  IntWithAggregatesFilterSchema,
  IntWithAggregatesFilterSchema_default
};
//# sourceMappingURL=chunk-HDUCGDMF.js.map